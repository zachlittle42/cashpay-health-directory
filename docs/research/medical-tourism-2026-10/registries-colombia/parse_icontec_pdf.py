import sys, re, csv
txt = open(sys.argv[1], encoding="utf-8").read()
out = sys.argv[2]
lines = txt.splitlines()
# Remove repeated page headers
clean = []
skip_pat = re.compile(r"LISTADO DE INSTITUCIONES|Fecha: (Julio|Octubre) de 2026|TIPO DE INSTITUCI|RECONOCID|^\s*CODIGO\s+CODIGO|FECHA DE|^\s*N°\s+RAZ|MUNICIPIO\s*$|DEL PRESTADOR|^\s*O\s*$|P[úu]blica\s+Privada|UNIVERSITAR|^\s*IO\s*$|O HOSPITAL|OTORGAMIENT|CIUDAD\s*$|^\s*P\s*$")
for l in lines:
    if skip_pat.search(l): continue
    clean.append(l)
# Known false positive: the PDF has a watermark-like repeated "Fundación Cardiovascular de Colombia ... 6827600289 2024-09-03 V Acreditado con excelencia" block fragments on each page. Keep row numbers from col<=3 only.
blocks = []; cur = None
for l in clean:
    m = re.match(r"^\s{0,3}(\d{1,3})\s{2,}(.*)$", l)
    if m and int(m.group(1)) != 1 or (m and int(m.group(1)) == 1 and not blocks):
        n = int(m.group(1))
        if cur is None or n != cur["n"]:
            cur = {"n": n, "lines": []}; blocks.append(cur)
    if cur is not None: cur["lines"].append(l)
# Row "1" block repeated as watermark fragments after the first: lines containing 6827600289 inside other blocks are noise.
rows = []
cities_known = ["Floridablanca","Piedecuesta","Medellín","Bogotá","Chía","Cali","Jamundí","Barranquilla","Puerto Colombia","Santa Marta","Cartagena","Pasto","Ipiales","Soacha","Bucaramanga","Rionegro","Popayán","Yopal","Tuluá","Manizales","Pereira","Armenia","Tunja","Duitama","Sogamoso","Honda","Villavicencio","Neiva","Nemocón","Cúcuta","Montería","Valledupar","Sincelejo","Ibagué","Buga","Palmira","Cartago","Girardot","Zipaquirá","Fusagasugá","Facatativá","Envigado","Itagüí","Bello","Sabaneta","Apartadó","Florencia","Riohacha","Quibdó","San Andrés","Leticia","Arauca","Mocoa","Dosquebradas","Santa Rosa de Cabal","La Dorada","Chiquinquirá","Garzón","Pitalito","Espinal","Melgar","Girón","Barrancabermeja","Bogotá,"]
for b in blocks:
    body = "\n".join(b["lines"])
    body_nw = "\n".join(l for l in b["lines"] if "6827600289" not in l or b["n"] == 1)
    sedes = re.findall(r"(\d{9,11}-\d{1,2})\s+([A-ZÁÉÍÓÚÑa-záéíóúñ][^\n]{3,70}?)(?:\s{2,}|\n)", body_nw)
    sede_codes = sorted(set(re.findall(r"\d{9,11}-\d{1,2}", body_nw)))
    prest = sorted(set(c for c in re.findall(r"(?<![\d-])(\d{9,11})(?![\d-])", body_nw)))
    dates = re.findall(r"20\d\d[- ]\d\d[- ]\d\d", body_nw)
    cycle = re.findall(r"\s(I{1,3}|IV|V|VI{0,3})\s", body_nw)
    status = "Acreditado con excelencia" if re.search(r"excelencia", body_nw, re.I) else ("Acreditado" if "Acreditado" in body_nw else "")
    cities = [c for c in cities_known if re.search(r"\b" + re.escape(c.rstrip(",")) + r"\b", body_nw)]
    # razón social: words in the left column (col < 32) excluding the row number
    rs = []
    for l in b["lines"]:
        seg = l[:34].strip()
        seg = re.sub(r"^\d{1,3}\s+", "", seg)
        if seg and not re.match(r"^\d", seg) and "Fundación" != seg and "Cardiovascular de" != seg and "Colombia" != seg: rs.append(seg)
    razon = " ".join(rs)
    if b["n"] == 1: razon = "Fundación Cardiovascular de Colombia"
    rows.append({"n": b["n"], "razon_social": razon[:120], "codigos_prestador": ";".join(prest), "sedes_acreditadas": ";".join(sede_codes), "n_sedes": len(sede_codes),
                 "ciudades": ";".join(cities), "fechas_otorgamiento": ";".join(sorted(set(dates))), "ciclo": ";".join(sorted(set(cycle))), "status": status,
                 "hospital_universitario_flag": "X" if re.search(r"X\s+X", body_nw) else ""})
with open(out, "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(rows[0].keys())); w.writeheader(); w.writerows(rows)
print(len(rows), "institution rows;", sum(r["n_sedes"] for r in rows), "sede codes")
for r in rows: print(r["n"], "|", r["razon_social"][:60], "|", r["codigos_prestador"], "|", r["n_sedes"], "|", r["ciudades"], "|", r["fechas_otorgamiento"], "|", r["status"])
