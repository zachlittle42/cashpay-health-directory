#!/usr/bin/env python3
"""Build src/data/registries/mexico.json from the federal CLUES catalogue
(Catálogo de Clave Única de Establecimientos de Salud, DGIS, Secretaría de Salud).

Usage: build-mexico.py <clues_private.csv> <csg_vigente.csv> <as-of YYYY-MM-DD>

<clues_private.csv> is the private-sector (SMP) extract produced by
docs/research/medical-tourism-2026-10/registries-mexico/clues_private.py from the
monthly ESTABLECIMIENTO_SALUD_YYYYMM.xlsx. We keep establishments EN OPERACION of
the types a medical traveller would book: hospitals, clinics, physician offices,
unspecified outpatient units, laboratories and regenerative-medicine units. Pharmacy-
adjacent consulting rooms (11,000+), mobile units, warehouses, blood banks and social-
assistance units are excluded. <csg_vigente.csv> flags rows whose commercial name and
state match a Consejo de Salubridad General establishment with a valid certificate.
"""
import csv, json, re, sys, unicodedata, collections

src, csg_src, as_of = sys.argv[1], sys.argv[2], sys.argv[3]

def fold(s):
    return ''.join(c for c in unicodedata.normalize('NFD', s) if unicodedata.category(c) != 'Mn').lower()

def slug(s):
    return re.sub(r'-+', '-', re.sub(r'[^a-z0-9]+', '-', fold(s))).strip('-')

SMALL = {'de', 'del', 'la', 'las', 'los', 'y', 'e', 'a', 'el', 'en', 'por', 'para', 'con'}
def title_es(s):
    words = s.lower().split()
    out = []
    for i, w in enumerate(words):
        if i and w in SMALL: out.append(w)
        elif re.fullmatch(r'[ivx]+', w): out.append(w.upper())
        else: out.append(w[:1].upper() + w[1:])
    t = ' '.join(out)
    # Legal-form and postal abbreviations stay upper case: S.A. de C.V., S.C., C.P., S.A.P.I.
    return re.sub(r'\b(?:[A-Za-z]\.){2,}', lambda m: m.group(0).upper(), t)

STATE_NAMES = {
    'VERACRUZ DE IGNACIO DE LA LLAVE': 'Veracruz', 'MICHOACAN DE OCAMPO': 'Michoacán', 'COAHUILA DE ZARAGOZA': 'Coahuila',
    'CIUDAD DE MEXICO': 'Ciudad de México', 'MEXICO': 'Estado de México', 'NUEVO LEON': 'Nuevo León', 'QUERETARO': 'Querétaro',
    'YUCATAN': 'Yucatán', 'SAN LUIS POTOSI': 'San Luis Potosí', 'BAJA CALIFORNIA SUR': 'Baja California Sur',
}
def state_name(s):
    return STATE_NAMES.get(s, title_es(s))

def categorize(r):
    t, ty = r['type'], r['typology']
    if t == 'DE HOSPITALIZACIÓN': return ('hospital', 'Hospital (inpatient)')
    if ty == 'CLINICA': return ('clinic', 'Clinic (outpatient)')
    if ty == 'CONSULTORIO PARTICULAR': return ('physician-office', 'Private physician office')
    if ty == 'UNIDAD DE MEDICINA REGENERATIVA': return ('regenerative', 'Regenerative-medicine unit')
    if ty == 'BANCO DE CELULAS TRONCALES': return ('regenerative', 'Stem-cell bank')
    if ty == 'LABORATORIOS': return ('laboratory', 'Laboratory')
    if t == 'DE CONSULTA EXTERNA' and ty in ('NO ESPECIFICADO', 'OTRO'): return ('outpatient-other', 'Outpatient unit (type not specified)')
    return (None, None)

csg = {}
for r in csv.DictReader(open(csg_src, encoding='utf-8')):
    csg[(fold(r['commercial_name']), fold(r['state']))] = r['certificate_expires']

rows = []
for r in csv.DictReader(open(src, encoding='utf-8')):
    if r['status'] != 'EN OPERACION': continue
    cat, label = categorize(r)
    if not cat: continue
    st = state_name(r['state'])
    name = title_es(r['name'])
    com = title_es(r['commercial_name']) if r['commercial_name'] and fold(r['commercial_name']) != fold(r['name']) else ''
    display = f"{name} ({com})" if com else name
    row = {
        'id': r['clues'], 'name': display, 'region': st, 'regionSlug': slug(st),
        'district': title_es(r['municipality']), 'category': cat, 'typeLabel': label,
        'typeOriginal': f"{r['type']} / {r['typology']}".replace(' / NO ESPECIFICADO', ''),
        'address': title_es(r['address']), 'phone': r['phone'] if r['phone'] and r['phone'] != 'NO APLICA' else '',
    }
    for key in [(fold(r['commercial_name']), fold(st)), (fold(r['name']), fold(st))]:
        if key in csg:
            row['note'] = f"CSG certificate valid to {csg[key]}"
            break
    rows.append(row)
rows.sort(key=lambda x: (x['region'], x['name'].lower()))
meta = {
    'country': 'mexico', 'asOf': as_of,
    'source': 'Catálogo CLUES de Establecimientos de Salud (DGIS, Secretaría de Salud), private-sector establishments in operation: hospitals, clinics, physician offices, outpatient units, laboratories and regenerative-medicine units (pharmacy consulting rooms, mobile units, blood banks and warehouses excluded)',
    'sourceUrl': 'https://gobi.salud.gob.mx/gobi/catalogos/catalogosmaestros/ESTABLECIMIENTO_SALUD_202609.xlsx',
    'total': len(rows), 'byCategory': dict(collections.Counter(x['category'] for x in rows)),
}
json.dump({'meta': meta, 'rows': rows}, open('src/data/registries/mexico.json', 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
print(meta)
print(collections.Counter(x['region'] for x in rows).most_common(10))
print('csg flagged:', sum(1 for x in rows if x.get('note')), [x['name'] for x in rows if x.get('note')][:16])
print('Tijuana:', collections.Counter(x['category'] for x in rows if x['district'] == 'Tijuana'))
print('sample:', rows[0]); print('sample:', [x for x in rows if x['district']=='Tijuana'][0])
