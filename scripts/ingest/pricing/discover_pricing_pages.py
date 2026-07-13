#!/usr/bin/env python3
"""
discover_pricing_pages.py — Phase 2, step 1.

For a clinic {id, name, website}: crawl the homepage, collect in-domain links
whose anchor text OR URL signals pricing intent, dedupe, cap at 3 subpages, and
return the pricing-bearing page set (homepage markdown + subpage markdowns) plus
the crawl-level failure classification.

Failure modes recorded (never guessed as a price):
  unreachable    — homepage crawl returned no content and no HTTP status
  bot-gated      — homepage or a subpage returned 403/429 (bot wall)
  booking-gated  — homepage reachable, a booking widget is embedded, and no
                   in-domain pricing subpage was found (price lives in the widget)
  ok             — homepage reachable, page set assembled

Efficient batch use (run_batch): crawl all homepages in ONE concurrent pass, then
call find_pricing_links() per clinic, then crawl all subpages in ONE pass. The
pure link-finder here has no I/O so it composes cleanly. discover_clinic() does
the full per-clinic crawl for single-clinic / smoke use.
"""
import re
import sys
from pathlib import Path
from urllib.parse import urljoin, urlparse

# Make sibling helpers (_crawl, _clinics) and the parent mint_ids importable
# whether this file is run directly or imported as a module.
_HERE = Path(__file__).resolve().parent
for _p in (str(_HERE), str(_HERE.parent)):
    if _p not in sys.path:
        sys.path.insert(0, _p)

import _crawl          # noqa: E402
import mint_ids        # noqa: E402  (_normalize_domain)

# --- pricing intent -----------------------------------------------------------
# Strong pricing terms (score 2-3), then the broad /services + scan catch (score 1).
_INTENT_RE = re.compile(
    r'(pric|/plans?\b|\bplans?\b|member|package|/rates?\b|\brates?\b|/fees?\b|\bfees?\b'
    r'|/costs?\b|\bcosts?\b|how much'
    # labs providers publish under products/tests/panels/shop/store as well
    r'|/products?\b|\bproducts?\b|/tests?\b|\btests?\b|/panels?\b|\bpanels?\b|/shop\b|/store\b|/buy\b)',
    re.I)
_SERVICES_RE = re.compile(r'(/services?\b|\bservices?\b|scan|dexa|body[- ]comp)', re.I)

# --- destination / medical-tourism intent (ADDITIVE) --------------------------
# International destination clinics (dental, bariatric, hair) publish prices under
# packages/price-list/procedure landing pages, often in Spanish (precios, costos,
# paquetes) or Turkish (fiyat, fiyatlar, ucret). These OR into the score tiers in
# _intent_score without changing any existing DEXA/labs/weightloss behavior.
_INTENT_DEST_RE = re.compile(
    r'(/packages?\b|\bpackages?\b|/price-?lists?\b|price-?list'
    r'|/all-?on-?[468]\b|all-?on-?[468]|/dental-?implants?\b|/implants?\b'
    r'|/gastric-?(?:sleeve|bypass)\b|/hair-?transplant\b'
    # Spanish
    r'|/precios?\b|\bprecios?\b|/costos?\b|\bcostos?\b|/paquetes?\b|\bpaquetes?\b|/tarifas?\b'
    # Turkish
    r'|/fiyat(?:lar|lari)?\b|\bfiyat(?:lar|lari)?\b|/ucret(?:ler)?\b|/paket(?:ler)?\b)',
    re.I)
# Destination procedure/treatment landing pages (score-1 catch, additive)
_SERVICES_DEST_RE = re.compile(
    r'(/treatments?\b|\btreatments?\b|/procedures?\b|\bprocedures?\b'
    r'|/dental-?tourism\b|/hair-?transplant\b|/bariatric\b|/weight-?loss-?surgery\b'
    r'|/tratamientos?\b|/procedimientos?\b|/tedavi(?:ler)?\b|/sac-?ekimi\b)',
    re.I)

# Never follow obvious non-pricing junk even if the brand name ("dexa", "body")
# leaks into the path — privacy/terms/blog/media/auth/cart pages and binary assets.
_JUNK_RE = re.compile(
    r'(/wp-content/|/wp-json/|/uploads?/|/tag/|/category/|/author/|/blog/|/news/|/press/'
    r'|privacy|terms|cookie|disclaimer|accessibility|login|signin|sign-in|register|account'
    r'|/cart|/checkout|/basket|careers?|\.pdf$|\.jpe?g$|\.png$|\.webp$|\.zip$|\.doc[x]?$)', re.I)

# --- booking-widget signals (price lives inside an iframe/widget) -------------
_BOOKING_HOSTS = ("acuityscheduling.com", "as.me", "squareup.com", "square.site",
                  "mindbodyonline.com", "clients.mindbodyonline.com", "schedulicity.com",
                  "calendly.com", "janeapp.com", "vagaro.com", "setmore.com",
                  "getsquire.com", "fullslate.com", "genbook.com", "picktime.com")
_BOOKING_RE = re.compile("|".join(re.escape(h) for h in _BOOKING_HOSTS), re.I)

# markdown link:  [anchor](url)  or  [anchor](url "title")
_MD_LINK_RE = re.compile(r'\[([^\]]*?)\]\((\s*<?)([^)\s"<>]+)(>?[^)]*)\)')
# bare urls in text
_BARE_URL_RE = re.compile(r'https?://[^\s)\]"\'<>]+', re.I)

MAX_SUBPAGES = 3


def _reg_domain(host: str) -> str:
    """Registered domain = last two labels of a normalized host (good enough for
    the clinic domains in scope; handles no-www/subdomain cases)."""
    host = mint_ids._normalize_domain(host)
    parts = host.split(".")
    return ".".join(parts[-2:]) if len(parts) >= 2 else host


def _same_site(link_url: str, site_domain_reg: str) -> bool:
    host = urlparse(link_url).netloc or urlparse("http://" + link_url).netloc
    return _reg_domain(host) == site_domain_reg and site_domain_reg != ""


def _intent_score(anchor: str, url: str) -> int:
    """0 = no intent; 3 = strong pricing term; 1 = services/scan catch. Higher wins."""
    hay_url = url.lower()
    hay_anchor = (anchor or "").lower()
    path = urlparse(url).path.lower()
    if (_INTENT_RE.search(path) or _INTENT_RE.search(hay_anchor)
            or _INTENT_DEST_RE.search(path) or _INTENT_DEST_RE.search(hay_anchor)):
        return 3
    if _INTENT_RE.search(hay_url) or _INTENT_DEST_RE.search(hay_url):
        return 2
    if (_SERVICES_RE.search(path) or _SERVICES_RE.search(hay_anchor)
            or _SERVICES_DEST_RE.search(path) or _SERVICES_DEST_RE.search(hay_anchor)):
        return 1
    return 0


def find_pricing_links(homepage_md: str, homepage_url: str):
    """Pure function: from homepage markdown, return up to MAX_SUBPAGES in-domain
    pricing-intent URLs (ranked, deduped, homepage itself excluded)."""
    if not homepage_md:
        return []
    site_reg = _reg_domain(homepage_url)
    candidates = {}  # url -> best score

    def consider(anchor, raw_url):
        if not raw_url:
            return
        raw_url = raw_url.strip().strip("<>")
        if raw_url.startswith(("mailto:", "tel:", "javascript:", "#")):
            return
        absu = urljoin(homepage_url, raw_url)
        absu = absu.split("#", 1)[0].rstrip("/")
        if not absu.lower().startswith("http"):
            return
        if not _same_site(absu, site_reg):
            return
        if absu.rstrip("/") == homepage_url.rstrip("/"):
            return
        if _JUNK_RE.search(urlparse(absu).path):
            return
        score = _intent_score(anchor, absu)
        if score <= 0:
            return
        if absu not in candidates or score > candidates[absu]:
            candidates[absu] = score

    for m in _MD_LINK_RE.finditer(homepage_md):
        consider(m.group(1), m.group(3))
    for m in _BARE_URL_RE.finditer(homepage_md):
        consider("", m.group(0))

    ranked = sorted(candidates.items(), key=lambda kv: (-kv[1], len(kv[0])))
    return [u for u, _ in ranked[:MAX_SUBPAGES]]


def detect_booking_widget(markdown: str) -> bool:
    return bool(markdown) and bool(_BOOKING_RE.search(markdown))


def assemble_result(clinic, homepage_rec, subpage_recs):
    """Compose the per-clinic discovery result from a detailed homepage record and
    a {url: detailed_rec} map of subpage crawls. Pure (no I/O)."""
    homepage_url = (clinic.get("website") or "").rstrip("/")
    hp_md = homepage_rec.get("markdown", "") if homepage_rec else ""
    hp_status = homepage_rec.get("status_code") if homepage_rec else None

    result = {
        "clinicId": clinic["id"],
        "name": clinic["name"],
        "slug": clinic.get("slug", ""),
        "city": clinic.get("city", ""),
        "state": clinic.get("state", ""),
        "website": clinic.get("website", ""),
        "homepageUrl": homepage_url,
        "status": "ok",
        "bookingWidget": False,
        "pages": [],            # [{url, md}] pricing-bearing (homepage + subpages)
        "discoveredLinks": [],
        "crawlStatusCodes": {},
        "notes": "",
    }

    # Homepage unreachable / bot-walled?
    if not hp_md:
        if hp_status in (403, 429):
            result["status"] = "bot-gated"
            result["notes"] = f"homepage HTTP {hp_status}"
        else:
            result["status"] = "unreachable"
            result["notes"] = f"homepage empty (status={hp_status})"
        result["crawlStatusCodes"][homepage_url] = hp_status
        return result

    result["crawlStatusCodes"][homepage_url] = hp_status
    result["bookingWidget"] = detect_booking_widget(hp_md)
    # Homepage always carries into the page set (price is often on the homepage).
    result["pages"].append({"url": homepage_url, "md": hp_md})

    links = find_pricing_links(hp_md, homepage_url)
    result["discoveredLinks"] = links

    bot_walled_sub = False
    for url in links:
        rec = subpage_recs.get(url) or {}
        result["crawlStatusCodes"][url] = rec.get("status_code")
        md = rec.get("markdown", "")
        if md:
            result["pages"].append({"url": url, "md": md})
            if detect_booking_widget(md):
                result["bookingWidget"] = True
        elif rec.get("status_code") in (403, 429):
            bot_walled_sub = True

    # A pricing subpage that bot-walled while the homepage carried no strong
    # pricing links is a bot-gate signal worth recording.
    if bot_walled_sub and len(result["pages"]) == 1:
        result["status"] = "bot-gated"
        result["notes"] = "pricing subpage bot-walled (403/429)"
    elif result["bookingWidget"] and not links:
        # Reachable, booking widget embedded, no in-domain pricing page found:
        # the price most likely lives inside the widget iframe.
        result["status"] = "booking-gated"
        result["notes"] = "booking widget embedded, no pricing subpage"

    return result


def discover_clinic(clinic, concurrency: int = 5):
    """Full per-clinic discovery (crawls homepage then subpages). For single-clinic
    or smoke use; run_batch batches the crawls instead for throughput."""
    homepage_url = (clinic.get("website") or "").rstrip("/")
    if not homepage_url:
        return {
            "clinicId": clinic["id"], "name": clinic["name"], "status": "unreachable",
            "notes": "no website", "pages": [], "bookingWidget": False,
            "discoveredLinks": [], "crawlStatusCodes": {}, "website": "",
            "homepageUrl": "", "slug": clinic.get("slug", ""),
            "city": clinic.get("city", ""), "state": clinic.get("state", ""),
        }
    hp = _crawl.crawl_pages_detailed([homepage_url], concurrency=1)
    homepage_rec = hp.get(homepage_url, {})
    links = find_pricing_links(homepage_rec.get("markdown", ""), homepage_url)
    subpage_recs = _crawl.crawl_pages_detailed(links, concurrency=concurrency) if links else {}
    return assemble_result(clinic, homepage_rec, subpage_recs)


if __name__ == "__main__":
    import json
    import sys
    from _clinics import load_dexa_clinics
    from pathlib import Path

    repo = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).resolve().parents[3]
    clinics, _ = load_dexa_clinics(repo)
    # Smoke: first 2 clinics.
    for c in clinics[:2]:
        r = discover_clinic(c)
        r_preview = {k: (v if k != "pages" else [{"url": p["url"], "chars": len(p["md"])} for p in v])
                     for k, v in r.items()}
        print(json.dumps(r_preview, indent=2))
