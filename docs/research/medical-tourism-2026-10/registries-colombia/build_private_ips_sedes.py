import csv, sys, collections, unicodedata
sedes_p, cap_p, out_p = sys.argv[1:4]
def norm(s): return unicodedata.normalize("NFKD", s or "").encode("ascii","ignore").decode().upper().strip()
rows = list(csv.DictReader(open(sedes_p, encoding="utf-8-sig")))
cap = list(csv.DictReader(open(cap_p, encoding="utf-8-sig")))
ck = {c.strip(): c for c in cap[0]}
capidx = collections.defaultdict(lambda: collections.Counter())
for r in cap:
    code = r[ck["Código sede"]].strip()
    grp = r[ck["nom grupo capacidad"]].strip(); desc = r[ck["nom descripcion capacidad"]].strip()
    try: q = int(float(r[ck["num cantidad capacidad instalada"]] or 0))
    except: q = 0
    if grp == "SALAS" and desc in ("Quirófano",): capidx[code]["quirofanos"] += q
    if grp == "SALAS" and desc in ("Sala de Cirugía",): capidx[code]["salas_cirugia"] += q
    if grp == "SALAS" and desc == "Procedimientos": capidx[code]["salas_procedimientos"] += q
    if grp == "CAMAS": capidx[code]["camas_total"] += q
    if grp == "CAMAS" and desc in ("Adultos","Pediátrica","Intensiva Adultos","Intermedia Adultos","Cuidado Intensivo Adulto","Cuidado Intermedio Adulto"): capidx[code]["camas_hosp_adultos_uci"] += q
priv_ips = [r for r in rows if r["ClasePrestadorDesc"].startswith("Instituciones") and r["NaturalezaJuridica"] == "Privada"]
print("private IPS sedes:", len(priv_ips), "| prestadores:", len({r["CodigoPrestador"] for r in priv_ips}))
targets = ["BOGOTA","MEDELLIN","CALI","BARRANQUILLA","CARTAGENA","BUCARAMANGA","PEREIRA"]
mun = collections.Counter(norm(r["MunicipioSedeDesc"]) for r in priv_ips)
print("private IPS sedes by target city:"); [print(f"  {t}: {mun.get(t,0)}") for t in targets]
# sede codes in capacidad file are like '0500100002' + sede? check formats
sample = [r[ck["Código sede"]] for r in cap[:3]]; print("cap code sample:", sample, "| sedes sample:", [r["CodigoHabilitacionSede"] for r in rows[:3]])
# capacidad sede code appears as prestador code + 2-digit sede? try join variants
def joinkey(r):
    k = r["CodigoHabilitacionSede"]
    for cand in (k, k.lstrip("0"), r["CodigoPrestador"]+"-"+k[-2:], r["CodigoPrestador"]+k[-2:]):
        if cand in capidx: return cand
    return None
hit = 0; outrows = []
for r in priv_ips:
    k = joinkey(r); c = capidx[k] if k else collections.Counter()
    if k: hit += 1
    outrows.append({
        "codigo_sede": r["CodigoHabilitacionSede"], "codigo_prestador": r["CodigoPrestador"], "nit": r["NumeroIdentificacion"],
        "nombre_prestador": r["NombrePrestador"], "nombre_sede": r["NombreSede"], "departamento": r["DepartamentoSedeDesc"], "municipio": r["MunicipioSedeDesc"],
        "direccion": r["DireccionSede"], "telefono": r["TelefonoSede"] or r["TelefonoPrestador"], "email": r["EmailSede"] or r["EmailPrestador"],
        "fecha_corte_reps": "2026-03-12",
        "cap2022_quirofanos": c.get("quirofanos",""), "cap2022_salas_cirugia": c.get("salas_cirugia",""), "cap2022_camas_total": c.get("camas_total",""),
        "operating_room_2022": "yes" if (c.get("quirofanos",0)+c.get("salas_cirugia",0))>0 else ("no" if k else "unknown"),
        "inpatient_2022": "yes" if c.get("camas_total",0)>0 else ("no" if k else "unknown"),
        "plastic_surgery_habilitado": "unknown (servicios table not obtained)", "dental": "unknown", "bariatric": "unknown"})
print("capacity join hits:", hit)
print("private IPS sedes with OR (2022 capacity):", sum(1 for o in outrows if o["operating_room_2022"]=="yes"), "| with beds:", sum(1 for o in outrows if o["inpatient_2022"]=="yes"))
with open(out_p, "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(outrows[0].keys())); w.writeheader(); w.writerows(outrows)
print("wrote", out_p)
