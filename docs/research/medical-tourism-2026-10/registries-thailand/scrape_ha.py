"""Scrape HA Thailand certificate-status listing (TH + EN) into CSV.
usage: python3 -I scrape_ha.py OUTDIR
"""
import sys, re, html, csv, json, time, os, urllib.request, urllib.parse

OUT = sys.argv[1]
os.makedirs(OUT, exist_ok=True)
UA = {"User-Agent": "Mozilla/5.0 (research scraper; contact via vitalityscout)"}
TH = "https://www.ha.or.th/TH/Hospitals/" + urllib.parse.quote("สถานะการรับรอง") + "?pageNumber={}"
EN = "https://www.ha.or.th/EN/Hospitals/Certificate%20Status?pageNumber={}"

def get(url, tries=4):
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers=UA)
            with urllib.request.urlopen(req, timeout=60) as r:
                return r.read().decode("utf-8", "replace")
        except Exception as e:
            time.sleep(2 + 3 * i)
    return ""

def strip(x):
    return html.unescape(re.sub(r"<[^>]+>", "", x)).strip()

def parse(page):
    out = []
    for b in re.split(r'<div class="result">', page)[1:]:
        h3 = re.findall(r"<h3>(.*?)</h3>", b, re.S)
        dd = [strip(x) for x in re.findall(r"<dd[^>]*>(.*?)</dd>", b, re.S)]
        web = re.findall(r'<dd[^>]*><a target="_blank"(?: href="([^"]*)")?>', b)
        det = re.findall(r"Details/(\d+)", b)
        rows = re.findall(r"<tr>\s*<td class=\"text-start\">(.*?)</td>\s*<td>(.*?)</td>\s*<td>(.*?)</td>\s*<td>(.*?)</td>\s*<td>(.*?)</td>", b, re.S)
        pdfs = []
        certs = []
        for r in rows:
            pdf = re.findall(r'href="([^"]+)"', r[4])
            certs.append({"certificate": strip(r[0]), "level": strip(r[1]), "start": strip(r[2]), "expiry": strip(r[3]), "file": pdf[0] if pdf else ""})
        out.append({
            "detail_id": det[0] if det else "",
            "name": strip(h3[0]) if h3 else "",
            "province": dd[0] if len(dd) > 0 else "",
            "type": dd[1] if len(dd) > 1 else "",
            "kind_or_affiliation": dd[2] if len(dd) > 2 else "",
            "latlong": dd[3] if len(dd) > 3 else "",
            "website": (web[0] if web and web[0] else (dd[4] if len(dd) > 4 else "")),
            "certs": certs,
        })
    return out

def last_page(page):
    nums = [int(x) for x in re.findall(r"pageNumber=(\d+)", page)]
    return max(nums) if nums else 0

def crawl(tmpl, tag):
    first = get(tmpl.format(0))
    n = last_page(first)
    print(tag, "pages 0..", n, flush=True)
    allrows = parse(first)
    for p in range(1, n + 1):
        pg = get(tmpl.format(p))
        rows = parse(pg)
        if not rows:
            print(tag, "EMPTY page", p, flush=True)
        allrows += rows
        if p % 20 == 0:
            print(tag, p, len(allrows), flush=True)
        time.sleep(0.3)
    return allrows

th = crawl(TH, "TH")
json.dump(th, open(os.path.join(OUT, "ha_th_raw.json"), "w"), ensure_ascii=False, indent=1)
en = crawl(EN, "EN")
json.dump(en, open(os.path.join(OUT, "ha_en_raw.json"), "w"), ensure_ascii=False, indent=1)

enmap = {r["detail_id"]: r for r in en}
with open(os.path.join(OUT, "ha_accredited_facilities.csv"), "w", newline="") as f:
    w = csv.writer(f)
    w.writerow(["detail_id", "name_th", "province_th", "province_en", "facility_type_th", "facility_type_en", "affiliation_th", "kind_en", "latlong", "website",
                "current_certificate", "current_level", "current_start", "current_expiry", "n_cert_rows", "all_certs_json", "ha_url_th", "ha_url_en"])
    for r in th:
        e = enmap.get(r["detail_id"], {})
        c0 = r["certs"][0] if r["certs"] else {}
        w.writerow([r["detail_id"], r["name"], r["province"], e.get("province", ""), r["type"], e.get("type", ""), r["kind_or_affiliation"], e.get("kind_or_affiliation", ""),
                    r["latlong"], r["website"], c0.get("certificate", ""), c0.get("level", ""), c0.get("start", ""), c0.get("expiry", ""), len(r["certs"]),
                    json.dumps(r["certs"], ensure_ascii=False),
                    "https://www.ha.or.th/TH/Hospitals/" + urllib.parse.quote("สถานะการรับรอง") + "/Details/" + r["detail_id"],
                    "https://www.ha.or.th/EN/Hospitals/Certificate%20Status/Details/" + r["detail_id"]])
print("DONE", len(th), len(en))
