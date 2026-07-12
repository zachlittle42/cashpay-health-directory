#!/usr/bin/env python3
"""
run_batch.py — Phase 2 orchestrator.

Runs discover -> extract -> classify over a clinic list and writes the batch
artifact (extractions.json, manifest.json, failures.json).

Crawl efficiency: all homepages are crawled in ONE detailed concurrent pass, then
every discovered pricing subpage across all clinics in a SECOND pass, then the
LLM extraction fans out over a thread pool. This keeps the browser warm and the
network saturated instead of serializing one clinic at a time.

Usage:
  # real run over the full DEXA vertical (needs ANTHROPIC_API_KEY in env):
  python3 run_batch.py --vertical dexa --out <batch_dir>

  # scoped test:
  python3 run_batch.py --vertical dexa --limit 5 --out <dir>

  # plumbing validation with NO API key (deterministic mock extractor that also
  # injects a fabricated price per clinic to prove the verbatim-quote drop guard):
  python3 run_batch.py --vertical dexa --limit 5 --mock --out <dir>

NEVER prints secret values.
"""
import argparse
import hashlib
import json
import os
import re
import sys
import time
from collections import Counter, defaultdict
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timezone
from pathlib import Path

_HERE = Path(__file__).resolve().parent
for _p in (str(_HERE), str(_HERE.parent)):
    if _p not in sys.path:
        sys.path.insert(0, _p)

import _crawl                       # noqa: E402
import _clinics                     # noqa: E402
import discover_pricing_pages as discover   # noqa: E402
import extract_prices               # noqa: E402
import classify_confidence          # noqa: E402


# ---------------------------------------------------------------------------
# Mock extractor (validation only) — deterministic, uses REAL page substrings as
# quotes so the verbatim-verify path is exercised for real, and injects one
# fabricated price per clinic that MUST be dropped by the guard.
# ---------------------------------------------------------------------------
_MONEY = re.compile(r'\$\s?\d[\d,]*(?:\.\d+)?')


def _mock_llm_extract(markdown, prompt, model=None, return_usage=False):
    usage = {"input_tokens": 0, "output_tokens": 0}
    prices = []
    urls = re.findall(r'===== PAGE: (\S+) =====', markdown)
    first_url = urls[0] if urls else ""
    seen = set()
    for m in list(_MONEY.finditer(markdown))[:8]:
        s, e = m.start(), m.end()
        val = float(m.group().replace("$", "").replace(",", "").strip())
        if val <= 0 or val in seen:
            continue
        seen.add(val)
        quote = markdown[max(0, s - 45):min(len(markdown), e + 15)].strip()
        ctx = markdown[max(0, s - 140):e + 60].lower()
        if "vo2" in ctx or "vo₂" in ctx:
            sk, unit = "vo2max-test", "test"
        elif "rmr" in ctx or "resting metab" in ctx:
            sk, unit = "rmr-test", "test"
        elif any(w in ctx for w in ("package", "bundle", "combo", "+ rmr", "and rmr")):
            sk, unit = "body-comp-package", "package"
        elif "dexa" in ctx or "dxa" in ctx or "body comp" in ctx or "bone density" in ctx:
            sk, unit = "dexa-scan", "scan"
        else:
            sk, unit = "other-body-comp", "scan"
        if "first month" in ctx or "new patient" in ctx or "intro" in ctx:
            ptype = "intro"
        elif "starting at" in ctx or "from $" in ctx or "as low as" in ctx:
            ptype = "floor"
        elif sk == "body-comp-package":
            ptype = "package"
        else:
            ptype = "standard"
        prices.append({"serviceKey": sk, "display": f"${int(val)}", "low": val, "high": val,
                       "unit": unit, "priceType": ptype, "sourceUrl": first_url, "quote": quote})
    # fabricated price the guard must drop (quote not present verbatim on any page)
    prices.append({"serviceKey": "dexa-scan", "display": "$4242", "low": 4242, "high": 4242,
                   "unit": "scan", "priceType": "standard", "sourceUrl": first_url,
                   "quote": "ZZQX fabricated body scan special $4242 not-on-any-page ZZQX"})
    signal = "has-prices" if len(prices) > 1 else (
        "consult-only" if re.search(r'consult|schedule', markdown, re.I) else "no-price-content")
    parsed = {"prices": prices, "pageSignal": signal}
    return (parsed, usage) if return_usage else parsed


# ---------------------------------------------------------------------------
VERTICALS = {
    "dexa": ("DexaClinic", "src/data/dexa-clinics-*.ts"),
}


def _outcome(disc, pageSignal, n_prices):
    """Compose the manifest outcome for one clinic."""
    if disc["status"] in ("unreachable", "bot-gated", "booking-gated"):
        return disc["status"]
    if n_prices >= 1:
        return "prices-found"
    if pageSignal == "consult-only":
        return "consult-gated"
    return "no-published-price"


def _dedupe_rows(rows):
    """Drop exact-duplicate price rows (same chain crawled at >1 city URL can emit
    identical rows). Keys on the content that would render identically."""
    seen, out, dropped = set(), [], 0
    for r in rows:
        key = (r["clinicId"], r["serviceKey"], r.get("low"), r.get("high"),
               r.get("unit"), r["priceType"], r["citation"]["url"], r["citation"]["quote"])
        if key in seen:
            dropped += 1
            continue
        seen.add(key)
        out.append(r)
    return out, dropped


def _ckey(c):
    return c["id"] + "|" + c.get("slug", "")


def _crawl_and_discover(clinics, crawl_concurrency):
    """Two-pass crawl (all homepages, then all discovered subpages) + per-clinic
    discovery assembly. Returns (discoveries_by_ckey, hp_recs, sub_recs). No LLM,
    no API key — crawl4ai is local, so this is the whole of crawl-only mode."""
    # Pass 1: crawl every homepage (detailed, one concurrent batch)
    homepage_urls = [u for u in ((c.get("website") or "").rstrip("/") for c in clinics) if u]
    print(f"[crawl] {len(homepage_urls)} homepages ...", flush=True)
    hp_recs = _crawl.crawl_pages_detailed(homepage_urls, concurrency=crawl_concurrency)

    # find pricing links per clinic; gather all subpages
    per_clinic_links, all_subpages = {}, []
    for c in clinics:
        hp_url = (c.get("website") or "").rstrip("/")
        rec = hp_recs.get(hp_url, {})
        links = discover.find_pricing_links(rec.get("markdown", ""), hp_url) if rec.get("markdown") else []
        per_clinic_links[_ckey(c)] = links
        all_subpages.extend(links)
    all_subpages = list(dict.fromkeys(all_subpages))
    print(f"[crawl] {len(all_subpages)} pricing subpages ...", flush=True)
    sub_recs = _crawl.crawl_pages_detailed(all_subpages, concurrency=crawl_concurrency) if all_subpages else {}

    # assemble discovery results
    discoveries = {}
    for c in clinics:
        hp_url = (c.get("website") or "").rstrip("/")
        subset = {u: sub_recs.get(u, {}) for u in per_clinic_links[_ckey(c)]}
        discoveries[_ckey(c)] = discover.assemble_result(c, hp_recs.get(hp_url, {}), subset)
    return discoveries, hp_recs, sub_recs


def run(repo, vertical, out_dir, limit=None, mock=False, crawl_concurrency=6, extract_workers=5):
    t0 = time.time()
    type_name, glob_pat = VERTICALS[vertical]
    registry = set(_clinics._load_registry(repo).keys())
    clinics, quarantined_clinics = _clinics.load_clinics(repo, type_name, glob_pat)
    if limit:
        clinics = clinics[:limit]

    if mock:
        _crawl.llm_extract = _mock_llm_extract          # patch module attr (call-time bound)

    discoveries, hp_recs, sub_recs = _crawl_and_discover(clinics, crawl_concurrency)

    # ---- Pass 2: extract (LLM) fanned out over a thread pool ----
    print(f"[extract] {len(clinics)} clinics (mock={mock}) ...", flush=True)

    def _do_extract(c):
        d = discoveries[c["id"] + "|" + c.get("slug", "")]
        pages = d["pages"] if d["status"] in ("ok", "booking-gated") else []
        return c, d, extract_prices.extract_for_clinic(c, pages)

    extract_results = []
    with ThreadPoolExecutor(max_workers=extract_workers) as ex:
        for c, d, res in ex.map(_do_extract, clinics):
            extract_results.append((c, d, res))

    # ---- classify + compose manifest ----
    all_rows = []
    manifest_clinics = []
    failures = []
    drops_by_reason = Counter()
    tokens_in = tokens_out = 0
    service_counter = Counter()
    ptype_counter = Counter()
    outcome_counter = Counter()
    conf_values = []
    fabricated_leaks = 0

    for c, d, res in extract_results:
        tokens_in += res["usage"]["input_tokens"]
        tokens_out += res["usage"]["output_tokens"]
        for dr in res.get("drops", []):
            drops_by_reason[dr.get("reason", "unknown")] += 1
            # a fabricated-quote drop is the guard working; if a $4242 row EVER
            # survived classification we'd flag it below.
            failures.append({"clinicId": c["id"], "slug": c.get("slug"), "type": "extraction-drop", **dr})

        rows, quarantined = classify_confidence.classify_extraction(res, c, registry)
        for q in quarantined:
            failures.append({"clinicId": c["id"], "slug": c.get("slug"), "type": "classify-quarantine", **q})
        # sanity: the mock's fabricated $4242 must never appear in classified rows
        for r in rows:
            if r.get("low") == 4242 or "not-on-any-page" in r["citation"]["quote"]:
                fabricated_leaks += 1
        all_rows.extend(rows)

        n = len(rows)
        outcome = _outcome(d, res.get("pageSignal", "no-price-content"), n)
        outcome_counter[outcome] += 1
        for r in rows:
            service_counter[r["serviceKey"]] += 1
            ptype_counter[r["priceType"]] += 1
            conf_values.append(r["confidence"])

        manifest_clinics.append({
            "clinicId": c["id"], "name": c["name"], "slug": c.get("slug", ""),
            "city": c.get("city", ""), "state": c.get("state", ""),
            "website": c.get("website", ""), "homepageUrl": d.get("homepageUrl", ""),
            "outcome": outcome, "pricesFound": n,
            "crawlStatus": d["status"], "pageSignal": res.get("pageSignal", ""),
            "bookingWidget": d.get("bookingWidget", False),
            "discoveredLinks": d.get("discoveredLinks", []),
            "statusCodes": d.get("crawlStatusCodes", {}),
            "notes": d.get("notes", ""),
        })
        if d["status"] in ("unreachable", "bot-gated", "booking-gated"):
            failures.append({"clinicId": c["id"], "slug": c.get("slug"), "type": d["status"],
                             "homepageUrl": d.get("homepageUrl", ""), "notes": d.get("notes", ""),
                             "statusCodes": d.get("crawlStatusCodes", {})})

    # dedupe exact-identical chain rows
    all_rows, dup_dropped = _dedupe_rows(all_rows)

    # ---- telemetry ----
    conf_buckets = {"0.90-0.98": 0, "0.70-0.89": 0, "0.50-0.69": 0, "0.30-0.49": 0}
    for v in conf_values:
        if v >= 0.90:
            conf_buckets["0.90-0.98"] += 1
        elif v >= 0.70:
            conf_buckets["0.70-0.89"] += 1
        elif v >= 0.50:
            conf_buckets["0.50-0.69"] += 1
        else:
            conf_buckets["0.30-0.49"] += 1

    clinics_with_price = len({r["clinicId"] for r in all_rows})
    runtime_s = round(time.time() - t0, 1)
    # crawl status histogram
    hp_status_hist = Counter(str(v.get("status_code")) for v in hp_recs.values())
    sub_status_hist = Counter(str(v.get("status_code")) for v in sub_recs.values())

    manifest = {
        "batch": out_dir.name,
        "vertical": vertical,
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "asOf": classify_confidence.ASOF,
        "mock": mock,
        "counts": {
            "clinicsInput": len(clinics),
            "clinicsQuarantinedAtLoad": len(quarantined_clinics),
            "clinicsWithAtLeastOnePrice": clinics_with_price,
            "coveragePct": round(100.0 * clinics_with_price / max(1, len(clinics)), 1),
            "totalPriceRows": len(all_rows),
            "duplicateRowsDropped": dup_dropped,
            "uniqueEntityIds": len({c["id"] for c in clinics}),
        },
        "outcomeHistogram": dict(outcome_counter),
        "serviceKeyCounts": dict(service_counter),
        "priceTypeDistribution": dict(ptype_counter),
        "sourceHistogram": dict(Counter(r["source"] for r in all_rows)),
        "confidenceDistribution": conf_buckets,
        "confidenceAvg": round(sum(conf_values) / len(conf_values), 3) if conf_values else None,
        "extractionDropsByReason": dict(drops_by_reason),
        "fabricationGuard": {
            "fabricatedDropsObserved": drops_by_reason.get("quote-not-found", 0),
            "fabricatedRowsLeakedToOutput": fabricated_leaks,
        },
        "crawlTelemetry": {
            "homepagesCrawled": len(hp_recs),
            "homepagesEmpty": sum(1 for v in hp_recs.values() if not v.get("markdown")),
            "subpagesCrawled": len(sub_recs),
            "subpagesEmpty": sum(1 for v in sub_recs.values() if not v.get("markdown")),
            "homepageStatusHistogram": dict(hp_status_hist),
            "subpageStatusHistogram": dict(sub_status_hist),
        },
        "tokenCost": {
            "inputTokens": tokens_in, "outputTokens": tokens_out,
            "model": os.environ.get("CLAUDE_MODEL", "claude-haiku-4-5-20251001"),
        },
        "runtimeSeconds": runtime_s,
        "clinics": manifest_clinics,
    }

    out_dir.mkdir(parents=True, exist_ok=True)
    (out_dir / "extractions.json").write_text(json.dumps(all_rows, indent=2, ensure_ascii=False) + "\n")
    (out_dir / "manifest.json").write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n")
    (out_dir / "failures.json").write_text(json.dumps({
        "clinicsQuarantinedAtLoad": quarantined_clinics,
        "failures": failures,
    }, indent=2, ensure_ascii=False) + "\n")

    print(f"\n[done] {runtime_s}s | {len(all_rows)} price rows | coverage "
          f"{manifest['counts']['coveragePct']}% ({clinics_with_price}/{len(clinics)}) | "
          f"fabricated leaks: {fabricated_leaks} (must be 0)")
    print(f"[done] outcomes: {dict(outcome_counter)}")
    print(f"[done] artifacts -> {out_dir}")
    return manifest


def _page_slug(url, homepage_url):
    """Filesystem-safe slug for a crawled page's markdown dump."""
    from urllib.parse import urlparse
    if url.rstrip("/") == homepage_url.rstrip("/"):
        base = "homepage"
    else:
        path = urlparse(url).path.strip("/")
        base = re.sub(r'[^a-z0-9]+', '-', path.lower()).strip('-') or "page"
    if len(base) > 80:
        base = base[:80].rstrip('-')
    # short deterministic suffix keeps distinct URLs from colliding on the same slug
    h = hashlib.sha1(url.encode("utf-8")).hexdigest()[:6]
    return f"{base}--{h}"


def _crawl_only_outcome(disc):
    """crawl-only failure/outcome taxonomy (no extraction)."""
    if disc["status"] in ("unreachable", "bot-gated", "booking-gated"):
        return disc["status"]
    return "pricing-pages-found" if disc.get("discoveredLinks") else "no-pricing-links"


def run_crawl_only(repo, vertical, out_dir, limit=None, crawl_concurrency=6):
    """Discovery-only pass: crawl all clinics, dump per-clinic pricing-page markdown
    to <out_dir>/markdown/{clinicId}/{page-slug}.md + a manifest of crawl outcomes
    and _clinics resolution. NO ANTHROPIC key needed — extraction is handed to the
    session's subagents, which read the dumped markdown per EXTRACTION-CONTRACT.md."""
    t0 = time.time()
    type_name, glob_pat = VERTICALS[vertical]
    clinics, quarantined_clinics = _clinics.load_clinics(repo, type_name, glob_pat)
    if limit:
        clinics = clinics[:limit]

    discoveries, hp_recs, sub_recs = _crawl_and_discover(clinics, crawl_concurrency)

    md_root = out_dir / "markdown"
    md_root.mkdir(parents=True, exist_ok=True)

    manifest_clinics = []
    failures = []
    outcome_counter = Counter()
    pages_dumped = 0
    written = set()   # (clinicId, url) — dedupe identical chain URLs across rows

    for c in clinics:
        d = discoveries[_ckey(c)]
        outcome = _crawl_only_outcome(d)
        outcome_counter[outcome] += 1

        clinic_dir = md_root / c["id"]
        md_files = []
        for page in d.get("pages", []):
            url, md = page["url"], page.get("md", "")
            if not md or (c["id"], url) in written:
                continue
            written.add((c["id"], url))
            clinic_dir.mkdir(parents=True, exist_ok=True)
            slug = _page_slug(url, d.get("homepageUrl", ""))
            fpath = clinic_dir / f"{slug}.md"
            # front-matter so a subagent extractor knows the exact source URL to cite
            header = (f"<!-- clinicId: {c['id']} -->\n"
                      f"<!-- sourceUrl: {url} -->\n"
                      f"<!-- clinic: {c['name']} -->\n\n")
            fpath.write_text(header + md, encoding="utf-8")
            md_files.append(str(fpath.relative_to(out_dir)))
            pages_dumped += 1

        manifest_clinics.append({
            "clinicId": c["id"],
            "name": c["name"],
            "website": c.get("website", ""),
            "homepageUrl": d.get("homepageUrl", ""),
            "city": c.get("city", ""),
            "state": c.get("state", ""),
            "slug": c.get("slug", ""),
            "citySlug": c.get("citySlug", ""),
            "outcome": outcome,
            "crawlStatus": d["status"],
            "pagesFound": len(md_files),
            "bookingWidget": d.get("bookingWidget", False),
            "discoveredLinks": d.get("discoveredLinks", []),
            "statusCodes": d.get("crawlStatusCodes", {}),
            "markdownFiles": md_files,
            "notes": d.get("notes", ""),
        })
        if d["status"] in ("unreachable", "bot-gated", "booking-gated"):
            failures.append({"clinicId": c["id"], "slug": c.get("slug"), "type": d["status"],
                             "homepageUrl": d.get("homepageUrl", ""), "notes": d.get("notes", ""),
                             "statusCodes": d.get("crawlStatusCodes", {})})

    runtime_s = round(time.time() - t0, 1)
    hp_status_hist = Counter(str(v.get("status_code")) for v in hp_recs.values())
    sub_status_hist = Counter(str(v.get("status_code")) for v in sub_recs.values())

    manifest = {
        "batch": out_dir.name,
        "mode": "crawl-only",
        "vertical": vertical,
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "asOf": classify_confidence.ASOF,
        "note": "Discovery+markdown dump only. Extraction is performed by session "
                "subagents per EXTRACTION-CONTRACT.md; their verified rows then run "
                "through classify_confidence.py (pure-Python).",
        "counts": {
            "clinicsInput": len(clinics),
            "uniqueEntityIds": len({c["id"] for c in clinics}),
            "clinicsQuarantinedAtLoad": len(quarantined_clinics),
            "pagesDumped": pages_dumped,
            "clinicsWithPages": sum(1 for m in manifest_clinics if m["pagesFound"] > 0),
        },
        "outcomeHistogram": dict(outcome_counter),
        "crawlTelemetry": {
            "homepagesCrawled": len(hp_recs),
            "homepagesEmpty": sum(1 for v in hp_recs.values() if not v.get("markdown")),
            "subpagesCrawled": len(sub_recs),
            "subpagesEmpty": sum(1 for v in sub_recs.values() if not v.get("markdown")),
            "homepageStatusHistogram": dict(hp_status_hist),
            "subpageStatusHistogram": dict(sub_status_hist),
        },
        "runtimeSeconds": runtime_s,
        "clinics": manifest_clinics,
    }

    out_dir.mkdir(parents=True, exist_ok=True)
    (out_dir / "manifest.json").write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n")
    (out_dir / "failures.json").write_text(json.dumps({
        "clinicsQuarantinedAtLoad": quarantined_clinics, "failures": failures,
    }, indent=2, ensure_ascii=False) + "\n")

    print(f"\n[crawl-only done] {runtime_s}s | {len(clinics)} clinics crawled | "
          f"{pages_dumped} pages dumped | outcomes: {dict(outcome_counter)}")
    print(f"[crawl-only done] markdown -> {md_root}")
    return manifest


_FRONTMATTER_RE = re.compile(r'^\s*(?:<!--[^>]*-->\s*)+', re.S)
_SOURCEURL_RE = re.compile(r'<!--\s*sourceUrl:\s*(\S+)\s*-->')


def _load_dumped_pages(clinic_md_dir):
    """Read a clinic's dumped markdown files -> {sourceUrl: body_md} (front-matter
    stripped). sourceUrl comes from each file's front-matter comment."""
    pages_md = {}
    if not clinic_md_dir.exists():
        return pages_md
    for f in sorted(clinic_md_dir.glob("*.md")):
        text = f.read_text(encoding="utf-8")
        m = _SOURCEURL_RE.search(text[:400])
        url = m.group(1) if m else f.stem
        body = _FRONTMATTER_RE.sub("", text, count=1).lstrip("\n")
        pages_md[url] = body
    return pages_md


def run_assemble_external(repo, vertical, out_dir, crawl_concurrency=6):
    """Consume subagent extraction rows (extractions-raw/{clinicId}.json) against the
    dumped markdown, run the SAME verify_prices guard + classify_confidence, and emit
    the final extractions.json / manifest.json / failures.json. No API key."""
    t0 = time.time()
    type_name, glob_pat = VERTICALS[vertical]
    registry = set(_clinics._load_registry(repo).keys())
    clinics, _q = _clinics.load_clinics(repo, type_name, glob_pat)
    by_id = {}
    for c in clinics:
        by_id.setdefault(c["id"], c)

    raw_dir = out_dir / "extractions-raw"
    md_root = out_dir / "markdown"
    if not raw_dir.exists():
        print(f"FATAL: {raw_dir} not found — subagents must write extractions-raw/{{clinicId}}.json first.")
        sys.exit(2)

    all_rows, failures = [], []
    drops_by_reason = Counter()
    service_counter, ptype_counter, outcome_counter = Counter(), Counter(), Counter()
    conf_values = []
    fabricated_leaks = 0
    clinics_seen = 0

    for raw_file in sorted(raw_dir.glob("*.json")):
        clinic_id = raw_file.stem
        payload = json.loads(raw_file.read_text(encoding="utf-8"))
        raw_prices = payload.get("prices", []) if isinstance(payload, dict) else payload
        clinic = by_id.get(clinic_id)
        if clinic is None:
            failures.append({"clinicId": clinic_id, "type": "unregistered-clinic-id",
                             "note": "extractions-raw file has no matching registered clinic"})
            continue
        clinics_seen += 1
        pages_md = _load_dumped_pages(md_root / clinic_id)
        prices, drops = extract_prices.verify_prices(clinic, raw_prices, pages_md)
        for dr in drops:
            drops_by_reason[dr.get("reason", "unknown")] += 1
            failures.append({"clinicId": clinic_id, "type": "extraction-drop", **dr})
        rows, quarantined = classify_confidence.classify_extraction({"prices": prices}, clinic, registry)
        for q in quarantined:
            failures.append({"clinicId": clinic_id, "type": "classify-quarantine", **q})
        for r in rows:
            if "not-on-any-page" in r["citation"]["quote"]:
                fabricated_leaks += 1
            service_counter[r["serviceKey"]] += 1
            ptype_counter[r["priceType"]] += 1
            conf_values.append(r["confidence"])
        outcome_counter["prices-found" if rows else "no-verified-price"] += 1
        all_rows.extend(rows)

    all_rows, dup_dropped = _dedupe_rows(all_rows)
    conf_buckets = {"0.90-0.98": 0, "0.70-0.89": 0, "0.50-0.69": 0, "0.30-0.49": 0}
    for v in conf_values:
        b = ("0.90-0.98" if v >= 0.90 else "0.70-0.89" if v >= 0.70
             else "0.50-0.69" if v >= 0.50 else "0.30-0.49")
        conf_buckets[b] += 1
    clinics_with_price = len({r["clinicId"] for r in all_rows})

    manifest = {
        "batch": out_dir.name, "mode": "assemble-external", "vertical": vertical,
        "generatedAt": datetime.now(timezone.utc).isoformat(), "asOf": classify_confidence.ASOF,
        "counts": {
            "rawFilesConsumed": clinics_seen,
            "clinicsWithAtLeastOnePrice": clinics_with_price,
            "totalPriceRows": len(all_rows),
            "duplicateRowsDropped": dup_dropped,
        },
        "serviceKeyCounts": dict(service_counter),
        "priceTypeDistribution": dict(ptype_counter),
        "sourceHistogram": dict(Counter(r["source"] for r in all_rows)),
        "confidenceDistribution": conf_buckets,
        "confidenceAvg": round(sum(conf_values) / len(conf_values), 3) if conf_values else None,
        "extractionDropsByReason": dict(drops_by_reason),
        "fabricationGuard": {"fabricatedRowsLeakedToOutput": fabricated_leaks},
        "outcomeHistogram": dict(outcome_counter),
        "runtimeSeconds": round(time.time() - t0, 1),
    }
    out_dir.mkdir(parents=True, exist_ok=True)
    (out_dir / "extractions.json").write_text(json.dumps(all_rows, indent=2, ensure_ascii=False) + "\n")
    (out_dir / "manifest-extraction.json").write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n")
    (out_dir / "failures-extraction.json").write_text(json.dumps({"failures": failures}, indent=2, ensure_ascii=False) + "\n")
    print(f"\n[assemble done] {manifest['runtimeSeconds']}s | {len(all_rows)} verified rows | "
          f"{clinics_with_price} clinics priced | fabricated leaks: {fabricated_leaks} (must be 0)")
    return manifest


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--vertical", default="dexa", choices=list(VERTICALS))
    ap.add_argument("--repo", default=str(Path(__file__).resolve().parents[3]))
    ap.add_argument("--out", required=True, help="batch output directory")
    ap.add_argument("--limit", type=int, default=None)
    ap.add_argument("--mock", action="store_true", help="deterministic mock extractor (no API key)")
    ap.add_argument("--crawl-only", action="store_true",
                    help="discovery + markdown dump only; no LLM, no API key (extraction -> subagents)")
    ap.add_argument("--assemble-external", action="store_true",
                    help="verify+classify subagent rows in <out>/extractions-raw/*.json (no API key)")
    ap.add_argument("--crawl-concurrency", type=int, default=6)
    ap.add_argument("--extract-workers", type=int, default=5)
    args = ap.parse_args()

    repo = Path(args.repo).expanduser().resolve()
    out_dir = Path(args.out).expanduser().resolve()

    if args.crawl_only:
        run_crawl_only(repo, args.vertical, out_dir,
                       limit=args.limit, crawl_concurrency=args.crawl_concurrency)
        return

    if args.assemble_external:
        run_assemble_external(repo, args.vertical, out_dir,
                              crawl_concurrency=args.crawl_concurrency)
        return

    if not args.mock and not os.environ.get("ANTHROPIC_API_KEY"):
        print("FATAL: ANTHROPIC_API_KEY not in env and --mock not set. "
              "Source the key (never echo it), pass --mock for a plumbing run, "
              "or use --crawl-only to dump markdown for subagent extraction.")
        sys.exit(2)

    run(repo, args.vertical, out_dir, limit=args.limit, mock=args.mock,
        crawl_concurrency=args.crawl_concurrency, extract_workers=args.extract_workers)


if __name__ == "__main__":
    main()
