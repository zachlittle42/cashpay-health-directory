#!/usr/bin/env python3
"""
classify_confidence.py — Phase 2, step 3.

Turns a verified extraction (from extract_prices) into a final ClinicPrice row:
assigns `source`, computes a `confidence` in [0,1] with documented downgrades,
stamps `asOf`, and keys the row to the clinic's stable entity id — QUARANTINING
any row that arrives without a registered clinic id (there should be none, since
the loader already filtered).

Confidence model (starts at BASE, each penalty subtracts, clamped to [FLOOR,CAP]):
  wide spread (high/low > 3)      -0.20
  missing unit                    -0.15
  promo framing (intro | floor)   -0.10
  quote matched only fuzzily      -0.20
  numeric bound absent from quote -0.15
  package priceType               -0.05
"""
ASOF = "2026-07-21"

BASE = 0.90
CAP = 0.98
FLOOR = 0.30

PENALTY = {
    "wide_spread": 0.20,
    "missing_unit": 0.15,
    "promo_framing": 0.10,
    "fuzzy_quote": 0.20,
    "bound_not_in_quote": 0.15,
    "package": 0.05,
}

# clinic-domain quotes are first-party; anything else would be 'claimed' (n/a here).
SOURCE_CLINIC_SITE = "clinic-site"


def _domain_of(url: str) -> str:
    import re
    if not url:
        return ""
    s = url.strip().lower()
    s = re.sub(r'^[a-z][a-z0-9+.\-]*://', '', s)
    s = s.split('/', 1)[0].split(':', 1)[0]
    if s.startswith('www.'):
        s = s[4:]
    return s.strip('.')


def _reg(host: str) -> str:
    parts = host.split(".")
    return ".".join(parts[-2:]) if len(parts) >= 2 else host


def classify_row(price_row: dict, clinic: dict, registry: set):
    """Return (clinic_price_dict, penalties_list) or (None, ['quarantine:<reason>'])."""
    cid = price_row.get("clinicId") or clinic.get("id")
    if not cid or cid not in registry:
        return None, [f"quarantine:{'missing-id' if not cid else 'id-not-in-registry'}"]

    low = price_row.get("low")
    high = price_row.get("high")
    unit = price_row.get("unit") or ""
    ptype = price_row.get("priceType") or "standard"
    citation = price_row.get("citation") or {}
    penalties = []

    # source: quote's page domain vs the clinic's own website domain
    quote_dom = _reg(_domain_of(citation.get("url", "")))
    site_dom = _reg(_domain_of(clinic.get("website", "")))
    source = SOURCE_CLINIC_SITE if (quote_dom and quote_dom == site_dom) else "claimed"

    conf = BASE
    if low and high and low > 0 and (high / low) > 3:
        conf -= PENALTY["wide_spread"]; penalties.append("wide_spread")
    if not unit:
        conf -= PENALTY["missing_unit"]; penalties.append("missing_unit")
    if ptype in ("intro", "floor"):
        conf -= PENALTY["promo_framing"]; penalties.append("promo_framing")
    if price_row.get("_quoteFuzzy"):
        conf -= PENALTY["fuzzy_quote"]; penalties.append("fuzzy_quote")
    if not price_row.get("_boundInQuote", True):
        conf -= PENALTY["bound_not_in_quote"]; penalties.append("bound_not_in_quote")
    if ptype == "package":
        conf -= PENALTY["package"]; penalties.append("package")
    if source != SOURCE_CLINIC_SITE:
        conf -= 0.15; penalties.append("off-domain-citation")

    conf = round(max(FLOOR, min(CAP, conf)), 2)

    clinic_price = {
        "clinicId": cid,
        "serviceKey": price_row["serviceKey"],
        "display": price_row.get("display", ""),
        "low": low,
        "high": high,
        "unit": unit,
        "priceType": ptype,
        "source": source,
        "citation": {"url": citation.get("url", ""), "quote": citation.get("quote", "")},
        "confidence": conf,
        "asOf": ASOF,
    }
    # Cross-vertical optional fields (GLP-1 medsIncluded, program/panel label),
    # carried through only when the extractor populated them.
    if price_row.get("serviceLabel"):
        clinic_price["serviceLabel"] = price_row["serviceLabel"]
    if isinstance(price_row.get("medsIncluded"), bool):
        clinic_price["medsIncluded"] = price_row["medsIncluded"]
    # Currency preserved verbatim from the extractor (None stays None + _noCurrency).
    if "currency" in price_row:
        clinic_price["currency"] = price_row.get("currency")
    if price_row.get("_noCurrency"):
        clinic_price["_noCurrency"] = True
    if price_row.get("_note"):
        clinic_price["_note"] = price_row["_note"]
    return clinic_price, penalties


def classify_extraction(extract_result, clinic, registry: set):
    """Classify every verified price for a clinic. Returns (rows, quarantined)."""
    rows, quarantined = [], []
    for pr in extract_result.get("prices", []):
        cp, pens = classify_row(pr, clinic, registry)
        if cp is None:
            quarantined.append({"clinicId": pr.get("clinicId"), "serviceKey": pr.get("serviceKey"),
                                "reason": pens[0] if pens else "quarantine"})
        else:
            cp["_penalties"] = pens
            rows.append(cp)
    return rows, quarantined


if __name__ == "__main__":
    # Self-test the confidence model with synthetic verified rows (no network/LLM).
    reg = {"c_test123456"}
    clinic = {"id": "c_test123456", "website": "https://example.com/"}
    samples = [
        {"clinicId": "c_test123456", "serviceKey": "dexa-scan", "display": "$85/scan",
         "low": 85, "high": 85, "unit": "scan", "priceType": "standard",
         "citation": {"url": "https://example.com/pricing", "quote": "DEXA scan $85"},
         "_quoteFuzzy": False, "_boundInQuote": True},
        {"clinicId": "c_test123456", "serviceKey": "body-comp-package", "display": "$300-1500",
         "low": 300, "high": 1500, "unit": "", "priceType": "package",
         "citation": {"url": "https://example.com/plans", "quote": "packages from $300 to $1500"},
         "_quoteFuzzy": True, "_boundInQuote": True},
        {"clinicId": "c_orphan99999", "serviceKey": "dexa-scan", "display": "$99",
         "low": 99, "high": 99, "unit": "scan", "priceType": "standard",
         "citation": {"url": "https://example.com/x", "quote": "$99"}},
    ]
    import json
    for s in samples:
        cp, pens = classify_row(s, clinic, reg)
        if cp:
            print(f"conf={cp['confidence']}  source={cp['source']}  penalties={pens}")
        else:
            print(f"QUARANTINED: {pens}")
