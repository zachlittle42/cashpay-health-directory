import sys, re, html, csv, time, urllib.request, os
outdir, outcsv = sys.argv[1], sys.argv[2]
os.makedirs(outdir, exist_ok=True)
UA = {"User-Agent": "Mozilla/5.0 (Macintosh) VitalityScout-research/1.0"}
def fetch(n):
    fn = os.path.join(outdir, f"page{n:03d}.html")
    if os.path.exists(fn) and os.path.getsize(fn) > 50000:
        return open(fn, encoding="utf-8", errors="replace").read()
    url = "https://cirugiaplastica.org.co/buscar-cirujano/" + (f"?jsf=jet-engine:listado-miembros&pagenum={n}" if n > 1 else "")
    for attempt in range(3):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r:
                h = r.read().decode("utf-8", "replace")
            open(fn, "w", encoding="utf-8").write(h); return h
        except Exception as e:
            print("retry", n, e, file=sys.stderr); time.sleep(5)
    return ""
def clean(s): return html.unescape(re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", s))).strip()
rows = []; pages = None; n = 1
while True:
    h = fetch(n)
    if not h: break
    m = re.search(r'data-page="(\d+)" data-pages="(\d+)"', h)
    if m: pages = int(m.group(2))
    parts = re.split(r'<div class="jet-listing-grid__item jet-listing-dynamic-post-(\d+)', h)
    for k in range(1, len(parts), 2):
        pid, body = parts[k], parts[k+1]
        body = body.split('</div></div><div class="jet-listing-grid__item', 1)[0]
        prof = re.search(r'href="(https://cirugiaplastica\.org\.co/author/[^"]+)"', body)
        mail = re.search(r'href="mailto:([^"]+)"', body)
        wa = re.search(r'href="https://wa\.me/([^"]+)"', body)
        img = re.search(r'<img[^>]+src="([^"]+)"', body)
        # text fields: strip style/svg, then split
        b2 = re.sub(r"<(style|svg|script)[^>]*>.*?</\1>", " ", body, flags=re.S)
        texts = [clean(t) for t in re.findall(r">([^<>]+)<", b2)]
        texts = [t for t in texts if t and not t.startswith(".cls") and t not in ("|",)]
        # drop email and known tokens to isolate name/surname/cities
        core = [t for t in texts if "@" not in t]
        first = core[0] if len(core) > 0 else ""
        last = core[1] if len(core) > 1 else ""
        cities = core[2] if len(core) > 2 else ""
        rows.append({"post_id": pid, "first_name": first, "last_name": last, "email": mail.group(1) if mail else "",
                     "cities": cities, "whatsapp_raw": urllib.request.unquote(wa.group(1)) if wa else "",
                     "profile_url": prof.group(1) if prof else "", "has_photo": "no" if (img and "sin-imagen" in img.group(1)) else ("yes" if img else ""), "page": n})
    print(f"page {n}/{pages}: {(len(parts)-1)//2} cards, total {len(rows)}", file=sys.stderr)
    if pages is None or n >= pages: break
    n += 1; time.sleep(0.7)
with open(outcsv, "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(rows[0].keys())); w.writeheader(); w.writerows(rows)
print("wrote", len(rows), "rows to", outcsv)
