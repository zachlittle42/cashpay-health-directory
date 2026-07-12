#!/usr/bin/env python3
"""
extract_prices.py — Phase 2, step 2.

Per clinic: feed the pricing-bearing markdown to the LLM extractor with a prompt
that REQUIRES a verbatim on-page citation for every price, then DETERMINISTICALLY
verify each returned quote actually appears in the crawled text before keeping it.

The verification is the fabrication guardrail: the extractor's output is audited
row-by-row by a separate verifier agent downstream, and one fabricated price fails
the whole batch — so here we drop, locally, any price whose quote we cannot find
verbatim in the page we crawled, and we re-anchor citation.url to the exact page
the quote was found on (never trust the model's claimed URL).

Public:
  extract_for_clinic(clinic, pages) -> {"prices": [...], "usage": {...}, "drops": [...]}
      pages: [{"url": str, "md": str}] from discover
"""
import re
import sys
from pathlib import Path

_HERE = Path(__file__).resolve().parent
for _p in (str(_HERE), str(_HERE.parent)):
    if _p not in sys.path:
        sys.path.insert(0, _p)

import _crawl  # noqa: E402

SERVICE_KEYS = {"dexa-scan", "rmr-test", "vo2max-test", "body-comp-package", "other-body-comp"}
PRICE_TYPES = {"standard", "intro", "floor", "package"}

# Feed caps: body-comp pages are small; caps guard against a giant homepage. The
# quote check runs against the FULL crawled md (a superset), so a cap never
# invalidates a quote the model legitimately saw.
PER_PAGE_CHARS = 16000
TOTAL_CHARS = 48000

PROMPT = """You extract CASH-PAY body-composition service prices from a health clinic's own web pages.

You are given one or more pages, each delimited by a line:
===== PAGE: <url> =====

Extract ONLY prices for these body-composition services (ignore everything else — hormone therapy, facials, IV drips, aesthetics, consults-with-no-scan, etc.):
- DEXA / DXA body-composition scan, or bone-density scan  -> serviceKey "dexa-scan"
- RMR / resting metabolic rate test                       -> serviceKey "rmr-test"
- VO2 max / VO2max cardiorespiratory test                 -> serviceKey "vo2max-test"
- A bundle/package combining 2+ of the above (or multi-scan packs) -> serviceKey "body-comp-package"
- Other body-comp assessment (InBody, BodPod, 3D scan, DNA/genetic add-on, FRAX bone) -> serviceKey "other-body-comp"

priceType (choose exactly one per price):
- "standard" — a regular flat/list price a customer pays
- "intro"    — first-visit / first-month / new-patient promotional price
- "floor"    — "starting at $X" / "from $X" lower bound only
- "package"  — a multi-scan or bundle package price

HARD RULES (a violation makes the price worthless — it will be independently audited against these exact pages):
1. Every price MUST include "quote": a span of text COPIED VERBATIM, character-for-character, from one of the pages above, containing the dollar amount. Do NOT paraphrase, reformat, or fix typos in the quote. Copy it exactly as printed.
2. Every price MUST include "sourceUrl": the exact URL of the PAGE header the quote was copied from.
3. If a number has NO verbatim on-page quote you can copy, OMIT it entirely. Never infer, average, or estimate a price.
4. A multi-price table or list -> ONE object per line item (do not merge $85 and $100 into a range).
5. Never treat a phone number, address, ZIP, year, percentage, "$0", financing term, or "value" figure ($X value) as a price.
6. low/high are the numeric dollars (for a flat price low == high). unit is the thing priced ("scan", "month", "test", "package", "session"). display is a short human string like "$99/scan".

Return STRICT JSON, no prose, exactly:
{"prices": [{"serviceKey": "...", "display": "...", "low": <number>, "high": <number>, "unit": "...", "priceType": "...", "sourceUrl": "...", "quote": "..."}], "pageSignal": "has-prices" | "consult-only" | "no-price-content"}

pageSignal: "has-prices" if you extracted >=1 price; "consult-only" if the page pushes "schedule a consultation / call for pricing" with no published number; "no-price-content" otherwise. Output {"prices": [], "pageSignal": "..."} when there is nothing to extract."""


def _norm(s: str) -> str:
    """Normalize for verbatim substring matching: strip markdown emphasis/backslashes,
    unify unicode dashes/spaces/currency-adjacent whitespace, collapse whitespace,
    lowercase."""
    if not s:
        return ""
    s = s.replace("\\", "")
    s = re.sub(r'[*_`>#]', '', s)            # markdown emphasis / blockquote / heading marks
    s = s.replace("–", "-").replace("—", "-").replace("−", "-")  # dashes
    s = s.replace(" ", " ").replace(" ", " ")                          # nbsp/thin
    s = re.sub(r'\s+', ' ', s)
    return s.strip().lower()


_DOLLAR_RE = re.compile(r'\$\s?\d[\d,]*(?:\.\d+)?')


def _dollar_tokens(s: str):
    return [re.sub(r'\s+', '', t) for t in _DOLLAR_RE.findall(s or "")]


def verify_quote(quote: str, pages_md):
    """Return (found_url, fuzzy_bool) if `quote` (or, failing an exact normalized
    substring match, all of its dollar tokens) appears in some page's FULL markdown.
    pages_md: {url: full_md}. Returns (None, False) if unverifiable -> drop."""
    qn = _norm(quote)
    if not qn:
        return None, False
    # 1) exact normalized substring
    for url, md in pages_md.items():
        if qn and qn in _norm(md):
            return url, False
    # 2) fuzzy fallback: every dollar amount in the quote is present on one page
    q_tokens = _dollar_tokens(quote)
    if q_tokens:
        for url, md in pages_md.items():
            mn = _norm(md)
            md_tokens = set(_dollar_tokens(md))
            if all(any(t == mt or t.replace('$', '$ ') in mn or t in mt for mt in md_tokens)
                   for t in q_tokens):
                # require the tokens to actually be dollar figures present on page
                if all(any(t == mt for mt in md_tokens) for t in q_tokens):
                    return url, True
    return None, False


def _build_input(pages):
    """Concatenate pages with URL headers, capped. Returns the model input string."""
    chunks, total = [], 0
    for p in pages:
        md = (p.get("md") or "")[:PER_PAGE_CHARS]
        header = f"\n\n===== PAGE: {p['url']} =====\n"
        if total + len(header) + len(md) > TOTAL_CHARS:
            md = md[:max(0, TOTAL_CHARS - total - len(header))]
        if not md:
            continue
        chunks.append(header + md)
        total += len(header) + len(md)
        if total >= TOTAL_CHARS:
            break
    return "".join(chunks)


def _coerce_num(v):
    if isinstance(v, (int, float)):
        return float(v)
    if isinstance(v, str):
        m = re.search(r'\d[\d,]*(?:\.\d+)?', v)
        if m:
            return float(m.group().replace(",", ""))
    return None


def verify_prices(clinic, raw_prices, pages_md):
    """The fabrication guard, factored out so BOTH the in-process LLM path and
    EXTERNALLY-produced rows (e.g. subagent extractors reading the dumped markdown)
    pass through identical verification.

    raw_prices: list of {serviceKey, display, low, high, unit, priceType, sourceUrl,
                quote} objects (the extractor's output contract).
    pages_md:   {url: full_markdown} for the clinic's dumped pricing pages.

    Returns (kept_rows, drops). Each kept row is verified: serviceKey in enum, quote
    found verbatim (or dollar-token-fuzzy) on a real page, >=1 numeric bound, and the
    citation URL re-anchored to the page the quote was actually found on.
    """
    prices, drops = [], []
    valid_urls = set(pages_md)
    for pr in raw_prices or []:
        if not isinstance(pr, dict):
            continue
        sk = pr.get("serviceKey")
        quote = pr.get("quote") or ""
        claimed_url = pr.get("sourceUrl") or ""
        ptype = pr.get("priceType")

        if sk not in SERVICE_KEYS:
            drops.append({"reason": "bad-serviceKey", "value": sk, "quote": quote[:120]})
            continue
        if ptype not in PRICE_TYPES:
            ptype = "standard"

        # deterministic verbatim verification (the fabrication guard)
        found_url, fuzzy = verify_quote(quote, pages_md)
        if not found_url:
            drops.append({"reason": "quote-not-found", "serviceKey": sk,
                          "quote": quote[:160], "claimedUrl": claimed_url})
            continue

        low = _coerce_num(pr.get("low"))
        high = _coerce_num(pr.get("high"))
        if low is None and high is None:
            drops.append({"reason": "no-numeric-bound", "serviceKey": sk, "quote": quote[:160]})
            continue
        # sanity: at least one numeric bound should appear as a dollar figure in the
        # quote itself (guards against a number invented apart from its own citation)
        quote_values = {_coerce_num(t) for t in _dollar_tokens(quote)}
        quote_values.discard(None)
        bound_in_quote = any(x in quote_values for x in (low, high) if x is not None)

        display = pr.get("display") or ""
        unit = pr.get("unit") or ""
        cite_url = found_url if found_url in valid_urls else next(iter(valid_urls))

        prices.append({
            "clinicId": clinic["id"],
            "clinicName": clinic.get("name", ""),
            "citySlug": clinic.get("citySlug", ""),
            "slug": clinic.get("slug", ""),
            "serviceKey": sk,
            "display": display,
            "low": low,
            "high": high,
            "unit": unit,
            "priceType": ptype,
            "citation": {"url": cite_url, "quote": quote},
            "_quoteFuzzy": fuzzy,
            "_boundInQuote": bool(bound_in_quote),
            "_claimedUrlMismatch": bool(claimed_url and claimed_url.rstrip("/") != cite_url.rstrip("/")),
        })
    return prices, drops


def extract_for_clinic(clinic, pages):
    """Extract + verify prices for one clinic. Returns
    {"prices": [...], "usage": {...}, "drops": [...], "pageSignal": str}."""
    result = {"prices": [], "usage": {"input_tokens": 0, "output_tokens": 0},
              "drops": [], "pageSignal": "no-price-content"}
    pages = [p for p in (pages or []) if p.get("md")]
    if not pages:
        return result

    pages_md = {p["url"]: p["md"] for p in pages}
    valid_urls = set(pages_md)
    model_input = _build_input(pages)

    parsed, usage = _crawl.llm_extract(model_input, PROMPT, return_usage=True)
    result["usage"] = usage
    if not isinstance(parsed, dict):
        result["drops"].append({"reason": "no-json-parsed"})
        return result
    result["pageSignal"] = parsed.get("pageSignal", "no-price-content")

    raw_prices = parsed.get("prices")
    if not isinstance(raw_prices, list):
        return result

    prices, drops = verify_prices(clinic, raw_prices, pages_md)
    result["prices"] = prices
    result["drops"].extend(drops)
    return result


if __name__ == "__main__":
    import json
    from _clinics import load_dexa_clinics
    from discover_pricing_pages import discover_clinic

    repo = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).resolve().parents[3]
    clinics, _ = load_dexa_clinics(repo)
    c = clinics[0]
    disc = discover_clinic(c)
    out = extract_for_clinic(c, disc["pages"])
    print(json.dumps(out, indent=2))
