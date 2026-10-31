import sys, json, csv, collections, datetime
src, dst = sys.argv[1], sys.argv[2]
data = json.load(open(src, encoding="utf-8"))
print("records", len(data))
print("keys per record:", sorted(data[0].keys()), "| usuario keys:", sorted(data[0]["usuario"].keys()))
today = datetime.date(2026,10,30)
st = collections.Counter(); valid = 0; yrs = collections.Counter()
w = csv.writer(open(dst, "w", newline="", encoding="utf-8"))
w.writerow(["id","nombre","apellido_paterno","apellido_materno","estado","municipio","vigencia_inicio","vigencia_fin","estatus"])
for d in data:
    u = d["usuario"]; e = (d.get("estado") or {}).get("nombre","")
    st[e] += 1
    fin = u.get("dato_2") or ""
    yrs[fin[:4]] += 1
    try:
        if datetime.date.fromisoformat(fin) >= today: valid += 1
    except Exception: pass
    w.writerow([u["id"], u["nombre"], u["apepat"], u["apemat"], e, u.get("mpio") if u.get("mpio")!="null" else "", u.get("dato_1"), fin, u.get("estatus")])
print("vigencia_fin >= today:", valid)
print("vigencia_fin year:", sorted(yrs.items()))
print("by state:"); [print(f"  {v:4d} {k}") for k,v in st.most_common()]
print("sensitive fields present in raw JSON:", [k for k in data[0]["usuario"] if k in ("psw","usr")])
