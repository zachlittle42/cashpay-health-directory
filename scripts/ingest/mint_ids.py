#!/usr/bin/env python3
"""
mint_ids.py — Foundation #1: stable entity IDs for every clinic/provider row.

Backfills a deterministic `id` field onto every row in the pricing-scope data
files and maintains the entity registry `scripts/ingest/id_map.json`.

THE ID FUNCTION (single source of truth; documented in README.md)
    id = "c_" + sha1(normalizeDomain(website) + "|" + normalizeName(name))[:10]
  - website missing  -> fallback:
    id = "c_" + sha1("noweb|" + normalizeName(name) + "|" + citySlug + "|" + stateSlug)[:10]
    and the row is marked `fallback: true` in the registry.
  - CHAIN SEMANTICS (intentional): the same chain in many cities (e.g. BodySpec,
    LaserAway) normalizes to ONE id — that IS the entity. The registry records
    every occurrence; the primary hash never includes the city.

IDEMPOTENT: re-running verifies existing ids instead of re-minting. Any row
whose existing id does NOT match the recomputed id is DRIFT -> nonzero exit.
Minting a missing id is not drift (it is the intended first-run behavior).

The compute_entity_id() block below is BYTE-CONSISTENT with the copy in
  AgentKasten/.claude/skills/seo-page-factory/convert.py
Edit one, edit the other identically.

Usage:
  python3 scripts/ingest/mint_ids.py            # backfill + refresh registry
  python3 scripts/ingest/mint_ids.py --check    # read-only; nonzero if any change needed
  python3 scripts/ingest/mint_ids.py --repo /path/to/cashpay-health-directory
"""
import argparse
import glob
import hashlib
import json
import re
import sys
import unicodedata
from datetime import date
from pathlib import Path

# =============================================================================
# THE ID FUNCTION — keep byte-consistent with seo-page-factory/convert.py
# =============================================================================

def _normalize_domain(website: str) -> str:
    if not website:
        return ""
    s = str(website).strip().lower()
    s = re.sub(r'^[a-z][a-z0-9+.\-]*://', '', s)   # strip scheme
    s = re.split(r'[/?#]', s, maxsplit=1)[0]        # strip path/query/fragment
    s = s.split(':', 1)[0]                          # strip port
    if s.startswith('www.'):
        s = s[4:]
    s = s.strip('.')
    return s


def _normalize_name(name: str) -> str:
    if not name:
        return ""
    s = unicodedata.normalize('NFKD', str(name).lower())
    s = ''.join(c for c in s if not unicodedata.combining(c))  # strip diacritics
    s = re.sub(r'[^a-z0-9\s]', '', s)              # strip punctuation
    s = re.sub(r'\s+', ' ', s).strip()             # collapse whitespace
    return s


def compute_entity_id(website: str, name: str, city_slug: str = "", state_slug: str = ""):
    """Return (id, fallback_bool). id = 'c_' + sha1(...)[:10]."""
    dom = _normalize_domain(website)
    nm = _normalize_name(name)
    if dom:
        basis = dom + "|" + nm
        fallback = False
    else:
        basis = "noweb|" + nm + "|" + (city_slug or "") + "|" + (state_slug or "")
        fallback = True
    return "c_" + hashlib.sha1(basis.encode("utf-8")).hexdigest()[:10], fallback

# =============================================================================
# TARGETS — what to backfill (interfaces are edited by hand; this fills rows)
# =============================================================================

# (type_name, glob) — arrays declared as `: <Type>[] = [ ... ]`
CLINIC_TARGETS = [
    ("WeightLossClinic", "src/data/weightloss-clinics-*.ts"),
    ("HormoneClinic",    "src/data/hormone-clinics-*.ts"),
    ("DexaClinic",       "src/data/dexa-clinics-*.ts"),
    ("StemCellClinic",   "src/data/stem-cell-clinics-*.ts"),
]
# Provider[] arrays live across these lib files (single Provider interface).
PROVIDER_FILES = [
    "src/lib/providers-telehealth.ts",
    "src/lib/providers-medical-tourism.ts",
    "src/lib/providers-pharma.ts",
    "src/lib/providers-insurance.ts",
    "src/lib/providers-drug-registry.ts",
    "src/lib/providers-services.ts",  # 6th Provider file — same interface, must carry id too
]
# Med-spa rows are runtime-generated from these ChainTemplate entities (a
# Record<string, ChainTemplate>, not a Type[] array). We mint the chain-level id
# onto each template; buildCityClinic() stamps it onto every city instance.
MEDSPA_FILE = "src/data/medspa-chains.ts"

TODAY = date.today().isoformat()

# =============================================================================
# String-aware TS scanning (no deps; row shapes are uniform object literals)
# =============================================================================

_QUOTES = ("'", '"', '`')


def _split_top_level_objects(s: str):
    """Return (start, end) index pairs for each brace-object at true depth 0 in s
    (end exclusive of the closing brace). String/escape/bracket aware."""
    objs = []
    i, n = 0, len(s)
    db = bk = pr = 0            # brace / bracket / paren depth
    in_str = None
    esc = False
    obj_start = None
    while i < n:
        c = s[i]
        if in_str is not None:
            if esc:
                esc = False
            elif c == '\\':
                esc = True
            elif c == in_str:
                in_str = None
            i += 1
            continue
        if c in _QUOTES:
            in_str = c
        elif c == '{':
            if db == 0 and bk == 0 and pr == 0:
                obj_start = i
            db += 1
        elif c == '}':
            db -= 1
            if db == 0 and bk == 0 and pr == 0 and obj_start is not None:
                objs.append((obj_start, i + 1))
                obj_start = None
        elif c == '[':
            bk += 1
        elif c == ']':
            bk -= 1
        elif c == '(':
            pr += 1
        elif c == ')':
            pr -= 1
        i += 1
    return objs


def _match_bracket(text: str, pos: int) -> int:
    """text[pos] is an opening [ or { ; return index of its matching closer."""
    open_c = text[pos]
    close_c = ']' if open_c == '[' else '}'
    depth = 0
    in_str = None
    esc = False
    i = pos
    n = len(text)
    while i < n:
        c = text[i]
        if in_str is not None:
            if esc:
                esc = False
            elif c == '\\':
                esc = True
            elif c == in_str:
                in_str = None
        elif c in _QUOTES:
            in_str = c
        elif c == open_c:
            depth += 1
        elif c == close_c:
            depth -= 1
            if depth == 0:
                return i
        i += 1
    raise ValueError("unmatched bracket from pos %d" % pos)


def _find_typed_arrays(text: str, type_name: str):
    """Find every `: <Type>[] = [` and return (open_bracket_idx, close_bracket_idx)."""
    out = []
    pat = re.compile(r':\s*' + re.escape(type_name) + r'\[\]\s*=\s*\[')
    for m in pat.finditer(text):
        open_idx = m.end() - 1
        close_idx = _match_bracket(text, open_idx)
        out.append((open_idx, close_idx))
    return out


def _find_record_object(text: str, type_name: str):
    """Find `: Record<..., <Type>> = {` and return (open_brace_idx, close_brace_idx)."""
    m = re.search(r':\s*Record<[^>]*\b' + re.escape(type_name) + r'\s*>\s*=\s*\{', text)
    if not m:
        return None
    open_idx = m.end() - 1
    return open_idx, _match_bracket(text, open_idx)


def _extract_string_props(obj_text: str) -> dict:
    """Return {key: value} for every TOP-LEVEL string-valued property of the
    object literal obj_text (which must start with '{' and end with '}')."""
    props = {}
    i, n = 0, len(obj_text)
    depth = 0
    in_str = None
    esc = False
    key_re = re.compile(r'(?:"([A-Za-z_$][\w$]*)"|\'([A-Za-z_$][\w$]*)\'|([A-Za-z_$][\w$]*))\s*:')
    while i < n:
        c = obj_text[i]
        if in_str is not None:
            if esc:
                esc = False
            elif c == '\\':
                esc = True
            elif c == in_str:
                in_str = None
            i += 1
            continue
        # Key detection MUST run before generic quote-entering, otherwise a quoted
        # key ("slug":) is mistaken for a string value and the row is skipped.
        if depth == 1:
            m = key_re.match(obj_text, i)
            if m:
                key = m.group(1) or m.group(2) or m.group(3)
                j = m.end()
                while j < n and obj_text[j] in ' \t\r\n':
                    j += 1
                if j < n and obj_text[j] in _QUOTES:  # string value
                    q = obj_text[j]
                    k = j + 1
                    buf = []
                    e = False
                    while k < n:
                        ch = obj_text[k]
                        if e:
                            buf.append(ch)
                            e = False
                        elif ch == '\\':
                            e = True
                        elif ch == q:
                            break
                        else:
                            buf.append(ch)
                        k += 1
                    props[key] = ''.join(buf)
                    i = k + 1
                    continue
                i = j  # non-string value: let the depth machine walk it
                continue
        if c in _QUOTES:
            in_str = c
        elif c in '{[(':
            depth += 1
        elif c in '}])':
            depth -= 1
        i += 1
    return props


def _analyze_head(obj_text: str):
    """Detect insertion style for the first property of obj_text."""
    km = re.match(r'\{\s*("|\')?([A-Za-z_$][\w$]*)("|\')?\s*:', obj_text)
    if not km:
        return None
    key_quoted = bool(km.group(1))
    head = obj_text[1:km.start(2)]
    multiline = '\n' in head
    indent = ''
    if multiline:
        indent = re.match(r'[ \t]*', head[head.rfind('\n') + 1:]).group(0)
    vm = re.search(r':\s*("|\')', obj_text)
    val_quote = vm.group(1) if vm else '"'
    return {"key_quoted": key_quoted, "multiline": multiline, "indent": indent, "val_quote": val_quote}


def _id_insertion(cid: str, head: dict) -> str:
    keypart = '"id"' if head["key_quoted"] else 'id'
    val = head["val_quote"] + cid + head["val_quote"]
    if head["multiline"]:
        return "\n" + head["indent"] + keypart + ": " + val + ","
    return keypart + ": " + val + ", "

# =============================================================================
# Core: process one file
# =============================================================================

class Drift(Exception):
    pass


def _row_id(props: dict):
    website = props.get("website") or props.get("url") or ""
    name = props.get("name") or ""
    cid, fb = compute_entity_id(website, name,
                                props.get("citySlug", ""), props.get("stateSlug", ""))
    return cid, fb, website, name


def process_file(repo: Path, rel: str, object_spans, occurrences, stats, drift, family):
    """Backfill ids into the objects at object_spans (list of (start,end)) in the
    file. Returns (new_text, changed_bool). Appends registry occurrences + stats."""
    path = repo / rel
    text = path.read_text(encoding="utf-8")
    spans = object_spans(text)
    inserts = []  # (abs_pos, insertion_text)
    fam = stats.setdefault(family, {"rows": 0, "minted": 0, "present": 0, "drift": 0})
    for (start, end) in spans:
        obj_text = text[start:end]
        props = _extract_string_props(obj_text)
        if "name" not in props and "url" not in props and "website" not in props:
            continue  # not a data row (defensive)
        fam["rows"] += 1
        cid, fb, website, name = _row_id(props)
        occ = {"file": rel, "slug": props.get("slug") or props.get("key") or ""}
        if props.get("city"):
            occ["city"] = props["city"]
        if props.get("state"):
            occ["state"] = props["state"]
        if props.get("country"):
            occ["country"] = props["country"]
        occurrences.append((cid, fb, website, name, occ))
        existing = props.get("id")
        if existing is None:
            head = _analyze_head(obj_text)
            if head is None:
                raise Drift("could not analyze object head in %s at %d" % (rel, start))
            inserts.append((start + 1, _id_insertion(cid, head)))
            fam["minted"] += 1
        elif existing == cid:
            fam["present"] += 1
        else:
            fam["drift"] += 1
            drift.append({"file": rel, "slug": occ["slug"], "existing": existing, "expected": cid,
                          "name": name, "website": website})
    if not inserts:
        return text, False
    for pos, ins in sorted(inserts, key=lambda x: x[0], reverse=True):
        text = text[:pos] + ins + text[pos:]
    return text, True


def _array_spans(type_name):
    def f(text):
        spans = []
        for (o, c) in _find_typed_arrays(text, type_name):
            inner = text[o + 1:c]
            for (s, e) in _split_top_level_objects(inner):
                spans.append((o + 1 + s, o + 1 + e))
        return spans
    return f


def _record_spans(type_name):
    def f(text):
        loc = _find_record_object(text, type_name)
        if not loc:
            return []
        o, c = loc
        inner = text[o + 1:c]
        return [(o + 1 + s, o + 1 + e) for (s, e) in _split_top_level_objects(inner)]
    return f

# =============================================================================
# JSON seed sources (destination medical-tourism clinics live in a JSON seed,
# not a TS data file, but must be FIRST-CLASS in the main registry). Ids are
# minted with the identical compute_entity_id(website, name); we never write the
# JSON here — we only fold its occurrences into the registry so id_map.json is
# the single spine and `--check` stays stable (deterministic recompute).
# =============================================================================

# (rel_path, family) JSON seeds; each row: {id, slug, name, website, city?, country?, cluster?}
JSON_SEED_TARGETS = [
    ("scripts/ingest/pricing/destination_clinics.json", "destination"),
]


def process_json_seed(repo, rel, occurrences, stats, drift, family):
    """Fold a JSON clinic seed's rows into `occurrences` (and drift/stats). The
    seed already carries `id`; a stored id that disagrees with compute_entity_id
    is DRIFT (same contract as the TS path). Never writes the seed."""
    path = repo / rel
    doc = json.loads(path.read_text(encoding="utf-8"))
    rows = doc.get("clinics") if isinstance(doc, dict) else doc
    fam = stats.setdefault(family, {"rows": 0, "minted": 0, "present": 0, "drift": 0})
    for r in rows or []:
        name = r.get("name") or ""
        if not name:
            continue
        website = r.get("website") or ""
        fam["rows"] += 1
        cid, _fb = compute_entity_id(website, name)
        occ = {"file": rel, "slug": r.get("slug") or ""}
        if r.get("city"):
            occ["city"] = r["city"]
        if r.get("country"):
            occ["country"] = r["country"]
        if r.get("cluster"):
            occ["cluster"] = r["cluster"]
        occurrences.append((cid, _fb, website, name, occ))
        existing = r.get("id")
        if existing is None:
            fam["minted"] += 1          # seed rows normally carry an id already
        elif existing == cid:
            fam["present"] += 1
        else:
            fam["drift"] += 1
            drift.append({"file": rel, "slug": r.get("slug", ""), "existing": existing,
                          "expected": cid, "name": name, "website": website})


# =============================================================================
# Main
# =============================================================================

def main():
    ap = argparse.ArgumentParser(description="Foundation #1 — mint stable entity ids")
    ap.add_argument("--repo", default=str(Path(__file__).resolve().parents[2]),
                    help="cashpay-health-directory repo root")
    ap.add_argument("--registry", default=None,
                    help="registry path (default: <repo>/scripts/ingest/id_map.json)")
    ap.add_argument("--check", action="store_true",
                    help="read-only: make no writes; exit nonzero if any mint/drift needed")
    args = ap.parse_args()

    repo = Path(args.repo).expanduser().resolve()
    registry_path = Path(args.registry).expanduser() if args.registry \
        else repo / "scripts" / "ingest" / "id_map.json"

    stats = {}
    occurrences = []   # (cid, fallback, website, name, occ)
    drift = []
    files_changed = []

    # Build the work list: (rel_path, span_fn, family)
    work = []
    for (type_name, pattern) in CLINIC_TARGETS:
        family = pattern.split("/")[-1].split("-clinics-")[0]  # weightloss/hormone/dexa/stem-cell
        for abs_path in sorted(glob.glob(str(repo / pattern))):
            rel = str(Path(abs_path).relative_to(repo))
            work.append((rel, _array_spans(type_name), family))
    for rel in PROVIDER_FILES:
        work.append((rel, _array_spans("Provider"), "providers"))
    work.append((MEDSPA_FILE, _record_spans("ChainTemplate"), "medspa"))

    try:
        for (rel, span_fn, family) in work:
            if not (repo / rel).exists():
                print("WARN: missing file %s (skipped)" % rel)
                continue
            new_text, changed = process_file(repo, rel, span_fn, occurrences, stats, drift, family)
            if changed:
                files_changed.append(rel)
                if not args.check:
                    (repo / rel).write_text(new_text, encoding="utf-8")
    except Drift as e:
        print("FATAL: %s" % e)
        sys.exit(3)

    # ---- JSON clinic seeds (destination etc.): fold into the same registry ----
    for (rel, family) in JSON_SEED_TARGETS:
        if not (repo / rel).exists():
            print("WARN: missing JSON seed %s (skipped)" % rel)
            continue
        process_json_seed(repo, rel, occurrences, stats, drift, family)

    # ---- Build registry from the (post-backfill) occurrences ----
    prior = {}
    if registry_path.exists():
        try:
            prior = json.loads(registry_path.read_text(encoding="utf-8"))
        except Exception:
            prior = {}

    registry = {}
    for (cid, fb, website, name, occ) in occurrences:
        entry = registry.get(cid)
        if entry is None:
            entry = {
                "name": name,
                "website": website,
                "occurrences": [],
                "firstSeen": (prior.get(cid) or {}).get("firstSeen", TODAY),
            }
            if fb:
                entry["fallback"] = True
            registry[cid] = entry
        if occ not in entry["occurrences"]:
            entry["occurrences"].append(occ)
    # deterministic occurrence ordering
    for entry in registry.values():
        entry["occurrences"].sort(key=lambda o: (o.get("file", ""), o.get("slug", ""),
                                                 o.get("city", ""), o.get("state", "")))
    registry = {k: registry[k] for k in sorted(registry)}

    registry_json = json.dumps(registry, indent=2, ensure_ascii=False) + "\n"
    registry_changed = (not registry_path.exists()) or \
        registry_path.read_text(encoding="utf-8") != registry_json
    if registry_changed and not args.check:
        registry_path.parent.mkdir(parents=True, exist_ok=True)
        registry_path.write_text(registry_json, encoding="utf-8")

    # ---- Report ----
    unique_ids = len(registry)
    fallback_ids = sum(1 for e in registry.values() if e.get("fallback"))
    multi = {cid: e for cid, e in registry.items() if len(e["occurrences"]) > 1}
    # suspicious merges: >1 occurrence AND (fallback OR the occurrences disagree on
    # what looks like a different business). Chains legitimately collapse; we flag
    # for human review, never silently drop.
    suspicious = []
    for cid, e in multi.items():
        slugs = {o.get("slug", "") for o in e["occurrences"]}
        cities = {o.get("city", "") for o in e["occurrences"] if o.get("city")}
        if e.get("fallback") and len(e["occurrences"]) > 1:
            suspicious.append((cid, e, "fallback-id shared by >1 row (no website to disambiguate)"))
        elif len(slugs) > 1 and len(cities) <= 1:
            # same-city, different-slug rows collapsed to one id — possible dup / mis-merge
            suspicious.append((cid, e, "different slugs, same/absent city"))

    print("=" * 72)
    print("mint_ids.py — %s" % ("CHECK (read-only)" if args.check else "backfill"))
    print("=" * 72)
    print("\nPer-family backfill:")
    print("  %-12s %6s %8s %8s %6s" % ("family", "rows", "minted", "present", "drift"))
    total = {"rows": 0, "minted": 0, "present": 0, "drift": 0}
    for fam in sorted(stats):
        s = stats[fam]
        for k in total:
            total[k] += s[k]
        print("  %-12s %6d %8d %8d %6d" % (fam, s["rows"], s["minted"], s["present"], s["drift"]))
    print("  %-12s %6d %8d %8d %6d" % ("TOTAL", total["rows"], total["minted"],
                                       total["present"], total["drift"]))

    print("\nRegistry: %s" % registry_path)
    print("  unique entity ids : %d" % unique_ids)
    print("  fallback (no web) : %d" % fallback_ids)
    print("  multi-occurrence  : %d" % len(multi))
    print("  files changed     : %d" % len(files_changed))
    print("  registry changed  : %s" % registry_changed)

    # chain-collapse examples (top by occurrence count)
    chain_examples = sorted(multi.items(), key=lambda kv: -len(kv[1]["occurrences"]))[:8]
    if chain_examples:
        print("\nChain-collapse examples (one id, many occurrences):")
        for cid, e in chain_examples:
            print("  %s  %-34s x%d" % (cid, (e["name"] or "?")[:34], len(e["occurrences"])))

    if suspicious:
        print("\n!! SUSPICIOUS MERGES (review — NOT auto-dropped): %d" % len(suspicious))
        for cid, e, why in suspicious[:40]:
            print("  %s  %-28s  %s" % (cid, (e["name"] or "?")[:28], why))
            for o in e["occurrences"][:6]:
                print("        - %s :: %s%s" % (o.get("file", ""), o.get("slug", ""),
                                                (" (%s)" % o["city"]) if o.get("city") else ""))

    if drift:
        print("\nXX DRIFT (existing id != recomputed): %d" % len(drift))
        for d in drift[:40]:
            print("  %s  existing=%s expected=%s  (%s)" % (d["file"], d["existing"],
                                                           d["expected"], d["name"]))
        sys.exit(2)

    if args.check and (files_changed or registry_changed):
        print("\n--check: changes needed (%d files, registry=%s) -> nonzero"
              % (len(files_changed), registry_changed))
        sys.exit(1)

    print("\nOK — %s" % ("no changes (idempotent)" if not (files_changed or registry_changed)
                          else "backfill complete"))
    sys.exit(0)


if __name__ == "__main__":
    main()
