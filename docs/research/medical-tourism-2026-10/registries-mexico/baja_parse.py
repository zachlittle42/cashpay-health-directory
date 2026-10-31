import sys, re, html, glob, csv, json, collections, os
d = sys.argv[1]
def cards(path):
    s = open(path, encoding="utf-8").read()
    # split on card anchors to detail pages
    out = []
    for m in re.finditer(r'<a href="https://bajahealthtourism\.com/catalogo/([a-z0-9-]+)"', s):
        slug = m.group(1)
        seg = s[max(0, m.start()-4000):m.start()]
        seg = re.sub(r"<script.*?</script>", "", seg, flags=re.S)
        txt = html.unescape(re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " | ", seg)))
        out.append((slug, txt))
    return out
def pick(txt, pat):
    m = re.search(pat, txt); return m.group(1).strip() if m else ""
rows = {}
for kind, pat in [("establecimiento", "est_*.html"), ("medico", "med_*.html")]:
    for f in sorted(glob.glob(os.path.join(d, pat))):
        for slug, txt in cards(f):
            if slug in rows: continue
            # last h-ish name: take text chunk just before 'Certificación COEPRIS' etc; fallback slug
            parts = [p.strip() for p in txt.split("|") if p.strip()]
            rows[slug] = {"kind": kind, "slug": slug, "tail": " | ".join(parts[-14:])}
print("unique cards", len(rows), collections.Counter(r["kind"] for r in rows.values()))
# markers JSON gives name+slug+lat/lng
names = {}
for f in glob.glob(os.path.join(d, "*.html")):
    s = open(f, encoding="utf-8").read()
    for m in re.finditer(r"markers\s*=\s*(\[\{.*?\}\])\s*;", s, re.S):
        try:
            for it in json.loads(m.group(1)): names[it["slug"]] = it
        except Exception as e: pass
print("marker names", len(names))
w = csv.writer(open(os.path.join(d, "..", "baja_catalogo_excelencia.csv"), "w", newline="", encoding="utf-8"))
w.writerow(["kind","slug","name","lat","lng","card_text_tail"])
for slug, r in sorted(rows.items(), key=lambda x: (x[1]["kind"], x[0])):
    n = names.get(slug, {})
    w.writerow([r["kind"], slug, n.get("name",""), n.get("lat",""), n.get("lng",""), r["tail"][:400]])
for slug, r in list(rows.items())[:3]: print(slug, "::", r["tail"][:400])
