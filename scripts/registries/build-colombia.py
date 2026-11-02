#!/usr/bin/env python3
"""Build src/data/registries/colombia.json from REPS (Registro Especial de Prestadores de
Servicios de Salud, Ministerio de Salud) via the open-data mirror, joined to the 2022
installed-capacity dataset.

Usage: build-colombia.py <reps_private_ips_sedes.csv> <capacidad_instalada.csv> <as-of YYYY-MM-DD>
- reps_private_ips_sedes.csv: private IPS sites (sedes) extracted from datos.gov.co dataset c36g-9fc2
  by docs/research/medical-tourism-2026-10/registries-colombia/build_private_ips_sedes.py.
- capacidad_instalada.csv: datos.gov.co dataset s2ru-bqt6 (REPS capacity, cut November 2022):
  operating rooms (Quirófano, Sala de Cirugía) and beds per sede. Used only to label a site as
  surgical or inpatient; a site opened after 2022 shows as "capacity not reported".
"""
import csv, json, re, sys, collections, unicodedata

src, cap_src, as_of = sys.argv[1], sys.argv[2], sys.argv[3]

def fold(s):
    return ''.join(c for c in unicodedata.normalize('NFD', s) if unicodedata.category(c) != 'Mn').lower()
def slug(s):
    return re.sub(r'-+', '-', re.sub(r'[^a-z0-9]+', '-', fold(s))).strip('-')
SMALL = {'de', 'del', 'la', 'las', 'los', 'y', 'e', 'a', 'el', 'en', 'por', 'para', 'con'}
def title_es(s):
    out = []
    for i, w in enumerate(s.lower().split()):
        if i and w in SMALL: out.append(w)
        else: out.append(w[:1].upper() + w[1:])
    t = ' '.join(out)
    t = re.sub(r'\b(?:[A-Za-z]\.){2,}', lambda m: m.group(0).upper(), t)
    return re.sub(r'\b(sas|s\.a\.s|ltda|eps|ips|ese|e\.s\.e)\b', lambda m: m.group(0).upper(), t, flags=re.I)

# Capacity by sede key (prestador code zero-padded to 10 + sede number 2 digits)
cap = collections.defaultdict(collections.Counter)
with open(cap_src, encoding='utf-8-sig') as f:
    rd = csv.DictReader(f); cols = {c.strip(): c for c in rd.fieldnames}
    for r in rd:
        key = r[cols['Código prestador']].strip().zfill(10) + r[cols['Número sede']].strip().zfill(2)
        grp = r[cols['nom grupo capacidad']].strip(); desc = r[cols['nom descripcion capacidad']].strip()
        try: q = int(float(r[cols['num cantidad capacidad instalada']] or 0))
        except ValueError: q = 0
        if grp == 'SALAS' and desc in ('Quirófano', 'Sala de Cirugía'): cap[key]['or'] += q
        if grp == 'CAMAS': cap[key]['beds'] += q
        cap[key]['any'] += 1

DEPT = {'Bogotá D.C': 'Bogotá D.C.', 'Valle del cauca': 'Valle del Cauca', 'Norte de santander': 'Norte de Santander', 'La guajira': 'La Guajira', 'San andrés y providencia': 'San Andrés y Providencia'}
rows = []
for r in csv.DictReader(open(src, encoding='utf-8')):
    key = r['codigo_sede'].zfill(12)
    c = cap.get(key)
    if c and c['or'] > 0: cat, label = 'surgical', f"Operating rooms: {c['or']} (2022 capacity report)" + (f"; beds: {c['beds']}" if c['beds'] else '')
    elif c and c['beds'] > 0: cat, label = 'inpatient', f"Inpatient beds: {c['beds']}, no operating room (2022 capacity report)"
    elif c: cat, label = 'outpatient', 'Outpatient only (2022 capacity report)'
    else: cat, label = 'not-reported', 'Capacity not reported in 2022 (site may be newer)'
    dept = DEPT.get(r['departamento'], r['departamento'])
    name = title_es(r['nombre_sede']); prest = title_es(r['nombre_prestador'])
    display = name if fold(name) == fold(prest) else f"{name} ({prest})"
    rows.append({
        'id': r['codigo_sede'], 'name': display, 'region': dept, 'regionSlug': slug(dept), 'district': title_es(r['municipio']),
        'category': cat, 'typeLabel': label, 'typeOriginal': 'IPS privada, sede habilitada en REPS',
        'address': title_es(r['direccion']) or 'Address not published in REPS', 'phone': r['telefono'],
        **({'email': r['email']} if r['email'] else {}),
    })
rows.sort(key=lambda x: (x['region'], x['district'], x['name'].lower()))
meta = {
    'country': 'colombia', 'asOf': as_of,
    'source': 'REPS, Registro Especial de Prestadores de Servicios de Salud (Ministerio de Salud y Protección Social): private IPS sites (sedes) registered under habilitación, cut March 12, 2026, with operating-room and bed counts from the November 2022 capacity report',
    'sourceUrl': 'https://www.datos.gov.co/d/c36g-9fc2',
    'total': len(rows), 'byCategory': dict(collections.Counter(x['category'] for x in rows)),
}
json.dump({'meta': meta, 'rows': rows}, open('src/data/registries/colombia.json', 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
print(meta)
print(collections.Counter(x['region'] for x in rows).most_common(8))
for city in ['Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena']:
    sub = [x for x in rows if x['district'].lower().startswith(city.lower())]
    print(city, len(sub), collections.Counter(x['category'] for x in sub))
print([x for x in rows if 'pablo tob' in fold(x['name'])][:1])
