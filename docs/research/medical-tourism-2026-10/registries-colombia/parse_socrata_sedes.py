import csv, sys, collections
p = sys.argv[1]
rows = list(csv.DictReader(open(p, encoding="utf-8-sig")))
print("rows", len(rows))
print("fecha corte values:", collections.Counter(r["FechaCorte"] for r in rows).most_common(5))
print("\nclase:", collections.Counter(r["ClasePrestadorDesc"] for r in rows).most_common())
print("\nnaturaleza:", collections.Counter(r["NaturalezaJuridica"] for r in rows).most_common())
print("\nESE:", collections.Counter(r["ESE"] for r in rows).most_common())
prest = {r["CodigoPrestador"]: r for r in rows}
print("\ndistinct prestadores:", len(prest))
print("prestadores by clase:", collections.Counter(r["ClasePrestadorDesc"] for r in prest.values()).most_common())
print("prestadores by naturaleza:", collections.Counter(r["NaturalezaJuridica"] for r in prest.values()).most_common())
print("\nsedes by departamento (top 15):")
for k,v in collections.Counter(r["DepartamentoSedeDesc"] for r in rows).most_common(15): print(f"  {k}: {v}")
cities = ["MEDELLIN","MEDELLÍN","BOGOTA","BOGOTÁ, D.C.","BOGOTÁ","BOGOTA, D.C.","CALI","BARRANQUILLA","CARTAGENA","CARTAGENA DE INDIAS","BUCARAMANGA","PEREIRA"]
mun = collections.Counter(r["MunicipioSedeDesc"] for r in rows)
print("\nmunicipios matching targets:")
for k,v in mun.most_common(40):
    if any(c in k.upper() for c in ["MEDELL","BOGOT","CALI","BARRANQ","CARTAGENA","BUCARAM","PEREIRA"]): print(f"  {k}: {v}  (code {next(r['MunicipioSede'] for r in rows if r['MunicipioSedeDesc']==k)})")
print("\nprivate IPS sedes in target cities:")
for k in ["MEDELLIN","BOGOTA, D.C.","CALI","BARRANQUILLA","CARTAGENA","BUCARAMANGA","PEREIRA"]:
    n = sum(1 for r in rows if r["ClasePrestadorDesc"].startswith("Instituciones") and r["NaturalezaJuridica"]=="Privada" and r["MunicipioSedeDesc"].upper().startswith(k.split(",")[0]))
    print(f"  {k}: {n}")
