"""Filter CLUES to private-sector (SMP) establishments; write directory CSV and print counts."""
import sys, csv, collections, unicodedata
def N(s):
    return "".join(c for c in unicodedata.normalize("NFD", s.upper()) if unicodedata.category(c)!="Mn")

src, dst = sys.argv[1], sys.argv[2]
rows = [r for r in csv.DictReader(open(src, encoding="utf-8")) if r["CLAVE DE LA INSTITUCION"] == "SMP"]
print("SMP total", len(rows))
act = [r for r in rows if r["ESTATUS DE OPERACION"] == "EN OPERACION"]
print("SMP en operacion", len(act))

def addr(r):
    parts = [r["TIPO DE VIALIDAD"], r["VIALIDAD"], r["NUMERO EXTERIOR"]]
    if r["NUMERO INTERIOR"]: parts.append("Int. " + r["NUMERO INTERIOR"])
    s = " ".join(p for p in parts if p and p != "NO APLICA")
    if r["ASENTAMIENTO"] and r["ASENTAMIENTO"] != "NO APLICA":
        s += ", " + (r["TIPO DE ASENTAMIENTO"] + " " if r["TIPO DE ASENTAMIENTO"] not in ("", "NO APLICA") else "") + r["ASENTAMIENTO"]
    if r["CODIGO POSTAL"]: s += ", C.P. " + r["CODIGO POSTAL"]
    return s.strip(" ,")

cols = ["clues","name","commercial_name","type","typology","subtypology","level","state","state_code","municipality","municipality_code","locality","locality_code","address","postal_code","phone","rfc","status","start_date","last_movement","last_movement_date","lat","lon"]
with open(dst, "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f); w.writerow(cols)
    for r in rows:
        w.writerow([r["CLUES"], r["NOMBRE DE LA UNIDAD"], r["NOMBRE COMERCIAL"], r["NOMBRE TIPO ESTABLECIMIENTO"], r["NOMBRE DE TIPOLOGIA"], r["NOMBRE DE SUBTIPOLOGIA"], r["NIVEL ATENCION"], r["ENTIDAD"], r["CLAVE DE LA ENTIDAD"], r["MUNICIPIO"], r["CLAVE DEL MUNICIPIO"], r["LOCALIDAD"], r["CLAVE DE LA LOCALIDAD"], addr(r), r["CODIGO POSTAL"], r["TELEFONO 1 DEL ESTABLECIMIENTO"], r["RFC DEL ESTABLECIMIENTO"], r["ESTATUS DE OPERACION"], r["FECHA DE INICIO DE OPERACION"], r["ULTIMO MOVIMIENTO"], r["FECHA ULTIMO MOVIMIENTO"], r["LATITUD"], r["LONGITUD"]])

def table(title, counter, n=40):
    print("\n==", title)
    for k, v in counter.most_common(n): print(f"  {v:6d}  {k}")

table("Active SMP by type", collections.Counter(r["NOMBRE TIPO ESTABLECIMIENTO"] for r in act))
table("Active SMP by type/typology", collections.Counter((r["NOMBRE TIPO ESTABLECIMIENTO"], r["NOMBRE DE TIPOLOGIA"]) for r in act))
table("Active SMP by state", collections.Counter(r["ENTIDAD"] for r in act))
table("Active SMP hospitals by state", collections.Counter(r["ENTIDAD"] for r in act if r["NOMBRE TIPO ESTABLECIMIENTO"] == "DE HOSPITALIZACIÓN"))
table("Active SMP hospitals by subtypology", collections.Counter(r["NOMBRE DE SUBTIPOLOGIA"] for r in act if r["NOMBRE TIPO ESTABLECIMIENTO"] == "DE HOSPITALIZACIÓN"))
table("Active SMP consulta externa by subtypology", collections.Counter(r["NOMBRE DE SUBTIPOLOGIA"] for r in act if r["NOMBRE TIPO ESTABLECIMIENTO"] == "DE CONSULTA EXTERNA"), 30)

targets = {
  "Tijuana (BC)": lambda r: N(r["ENTIDAD"])=="BAJA CALIFORNIA" and N(r["MUNICIPIO"])=="TIJUANA",
  "Mexicali (BC) all": lambda r: N(r["ENTIDAD"])=="BAJA CALIFORNIA" and N(r["MUNICIPIO"])=="MEXICALI",
  "Los Algodones / Vicente Guerrero loc (Mexicali)": lambda r: N(r["ENTIDAD"])=="BAJA CALIFORNIA" and N(r["MUNICIPIO"])=="MEXICALI" and ("ALGODONES" in N(r["LOCALIDAD"]) or "VICENTE GUERRERO" in N(r["LOCALIDAD"])),
  "Cancun / Benito Juarez (QR)": lambda r: N(r["ENTIDAD"])=="QUINTANA ROO" and N(r["MUNICIPIO"])=="BENITO JUAREZ",
  "Nuevo Progreso loc (Rio Bravo, Tamps)": lambda r: N(r["ENTIDAD"])=="TAMAULIPAS" and N(r["MUNICIPIO"])=="RIO BRAVO" and "NUEVO PROGRESO" in N(r["LOCALIDAD"]),
  "Rio Bravo (Tamps) all": lambda r: N(r["ENTIDAD"])=="TAMAULIPAS" and N(r["MUNICIPIO"])=="RIO BRAVO",
  "Ciudad Juarez (Chih)": lambda r: N(r["ENTIDAD"])=="CHIHUAHUA" and N(r["MUNICIPIO"])=="JUAREZ",
  "Mexico City (all 16 alcaldias)": lambda r: N(r["ENTIDAD"])=="CIUDAD DE MEXICO",
  "Guadalajara municipality": lambda r: N(r["ENTIDAD"])=="JALISCO" and N(r["MUNICIPIO"])=="GUADALAJARA",
  "Guadalajara metro (Gdl+Zapopan+Tlaquepaque+Tonala+Tlajomulco)": lambda r: N(r["ENTIDAD"])=="JALISCO" and N(r["MUNICIPIO"]) in ("GUADALAJARA","ZAPOPAN","SAN PEDRO TLAQUEPAQUE","TONALA","TLAJOMULCO DE ZUNIGA"),
  "Monterrey municipality": lambda r: N(r["ENTIDAD"])=="NUEVO LEON" and N(r["MUNICIPIO"])=="MONTERREY",
  "Monterrey metro (Mty+SPGG+San Nicolas+Guadalupe+Apodaca+Escobedo+Santa Catarina)": lambda r: N(r["ENTIDAD"])=="NUEVO LEON" and N(r["MUNICIPIO"]) in ("MONTERREY","SAN PEDRO GARZA GARCIA","SAN NICOLAS DE LOS GARZA","GUADALUPE","APODACA","GENERAL ESCOBEDO","SANTA CATARINA"),
}
print("\n== Active SMP in target cities: hospitals | consultorios (particular) | consultorio adyacente a farmacia | clinica | lab | all")
for name, fn in targets.items():
    sub = [r for r in act if fn(r)]
    hosp = sum(1 for r in sub if r["NOMBRE TIPO ESTABLECIMIENTO"]=="DE HOSPITALIZACIÓN")
    cp = sum(1 for r in sub if r["NOMBRE DE TIPOLOGIA"]=="CONSULTORIO PARTICULAR")
    caf = sum(1 for r in sub if r["NOMBRE DE TIPOLOGIA"]=="CONSULTORIO ADYACENTE A FARMACIA")
    cl = sum(1 for r in sub if r["NOMBRE DE TIPOLOGIA"]=="CLINICA")
    lab = sum(1 for r in sub if r["NOMBRE DE TIPOLOGIA"]=="LABORATORIOS")
    print(f"  {name:75s} {hosp:4d} | {cp:4d} | {caf:5d} | {cl:4d} | {lab:4d} | {len(sub):5d}")

# sanity: municipality spellings
print("\n== municipality spellings check")
for st, pat in [("BAJA CALIFORNIA","TIJ"),("QUINTANA ROO","BENITO"),("TAMAULIPAS","BRAVO"),("CHIHUAHUA","JU"),("JALISCO","GUADAL"),("NUEVO LEON","MONTE")]:
    print(st, sorted({r["MUNICIPIO"] for r in rows if N(r["ENTIDAD"])==st and pat in r["MUNICIPIO"]}))
print("Mexicali localities with ALGOD/VICENTE:", sorted({r["LOCALIDAD"] for r in rows if N(r["MUNICIPIO"])=="MEXICALI" and ("ALGOD" in N(r["LOCALIDAD"]) or "VICENTE" in N(r["LOCALIDAD"]))}))
print("Rio Bravo localities:", sorted({r["LOCALIDAD"] for r in rows if N(r["ENTIDAD"])=="TAMAULIPAS" and N(r["MUNICIPIO"])=="RIO BRAVO"}))
