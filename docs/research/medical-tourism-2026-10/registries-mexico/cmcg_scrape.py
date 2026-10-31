"""Scrape CMCG public directory of surgeons with current certification (all states, paginated)."""
import sys, re, html, csv, time, urllib.request, collections
out = sys.argv[1]
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36"
states = ["01","02","03","04","09","05","06","07","08","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33"]
rows = []
for st in states:
    page = 0
    while True:
        url = f"https://www.cmcgac.org.mx/cgi-bin/DirectorioMedicos?Nombre=&Paterno=&Materno=&EstadoPart={st}&Pagina={page}"
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        try:
            s = urllib.request.urlopen(req, timeout=90).read().decode("latin-1")
        except Exception as e:
            print("ERR", st, page, e, file=sys.stderr); time.sleep(3); continue
        blocks = re.findall(r'<div class="list_block">(.*?)</div>\s*</div>', s, re.S)
        if not blocks: break
        for b in blocks:
            name = html.unescape(re.search(r"<h4>(.*?)</h4>", b, re.S).group(1)).strip()
            lis = [html.unescape(re.sub(r"<[^>]+>", "", li)).strip() for li in re.findall(r"<li>(.*?)</li>", b, re.S)]
            loc = lis[0] if lis else ""
            certs = [l for l in lis[1:] if re.match(r"\d{2}-[A-Z]{3}-\d{4}", l)]
            inst = lis[-1] if len(lis) > 1 and not re.match(r"\d{2}-[A-Z]{3}-\d{4}", lis[-1]) else ""
            rows.append({"state_code": st, "name": name, "location": loc, "certifications": "; ".join(certs), "institution": inst, "page": page})
        if "Siguiente" not in s: break
        page += 1
        time.sleep(0.3)
    print(st, "pages", page+1, "cum rows", len(rows), file=sys.stderr)
with open(out, "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(rows[0].keys())); w.writeheader(); w.writerows(rows)
print("total rows", len(rows))
c = collections.Counter(r["location"] for r in rows); print("by location:"); [print(f"  {v:5d} {k}") for k, v in c.most_common()]
spec = collections.Counter()
for r in rows:
    for cert in r["certifications"].split("; "):
        if cert: spec[cert.split(" ", 1)[1]] += 1
print("by specialty:", spec.most_common())
print("bariatric by location:", collections.Counter(r["location"] for r in rows if "Bari" in r["certifications"]).most_common(12))
