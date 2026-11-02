#!/usr/bin/env python3
"""Build src/data/registries/thailand.json from the Healthcare Accreditation Institute
(HA Thailand, สถาบันรับรองคุณภาพสถานพยาบาล) certificate-status list.

Usage: build-thailand.py <ha_accredited_facilities.csv> <as-of YYYY-MM-DD>
The CSV is scraped from https://www.ha.or.th/TH/Hospitals/สถานะการรับรอง (TH and EN
pages joined on detail id) by docs/research/medical-tourism-2026-10/registries-thailand/scrape_ha.py.
Primary-care centres (PHCA) are excluded; hospitals of every affiliation are kept so a reader
can see public and private side by side. Names are published in Thai only; the website domain
is the English identifier.
"""
import csv, json, re, sys, collections, datetime

src, as_of = sys.argv[1], sys.argv[2]
rows_in = list(csv.DictReader(open(src, encoding='utf-8')))

def slug(s):
    return re.sub(r'-+', '-', re.sub(r'[^a-z0-9]+', '-', s.lower())).strip('-')

def classify(r):
    cert, level = r['current_certificate'], r['current_level']
    if not cert and not level: return ('none', 'No current HA certificate')
    if 'ก้าวหน้า' in cert or level in ('A-HA', 'AHA', 'Re AHA', 're A-HA 1') or 'advance' in cert.lower():
        return ('advanced-ha', 'Advanced HA')
    if cert.startswith('PDSC') or level.startswith('PDSC') or 'DHSA' in level or level.startswith('re PDSC') or level == 'Re-PDSC':
        return ('program', 'Program-specific certification (PDSC or DHSA)')
    if 'มาตรฐาน' in cert or 'Accreditation' in cert or level in ('RS', 'AS') or re.fullmatch(r'r\d', level) or level.startswith('Accreditation') or cert == 'Accreditation':
        return ('ha', 'HA accredited (standard)')
    if 'step' in cert.lower() or 'ขั้นพัฒนา' in cert or level in ('1', '2', '3') or 'ขั้นพัฒนา' in level:
        return ('developmental', 'Developmental step (not yet accredited)')
    if 'ปฐมภูมิ' in cert or level.startswith('PHCA') or 're PHCA' in level:
        return ('program', 'Primary-care standard (PHCA)')
    return ('ha', 'HA accredited (standard)')

AFFIL = [
    ('Private', 'Private'),
    ('Community Hospital', 'Ministry of Public Health community hospital'),
    ('General Hospital', 'Ministry of Public Health general hospital'),
    ('Center Hospital', 'Ministry of Public Health regional hospital'),
    ('Medical University', 'University hospital'),
    ('Ministry of Education', 'University hospital'),
    ('Royal Thai Army', 'Military'), ('Royal Thai Air Force', 'Military'), ('Royal Thai Navy', 'Military'), ('Police', 'Police'),
    ('Department of Medical Service', 'Department of Medical Services'),
    ('Department of Mental Health', 'Department of Mental Health'),
    ('Bangkok', 'Bangkok Metropolitan Administration'),
]
def affiliation(r):
    k = r['kind_en'] or ''
    for key, label in AFFIL:
        if key.lower() in k.lower(): return label
    return k or (r['affiliation_th'] or 'Affiliation not stated')

def iso(d):
    try:
        dd, mm, yy = d.split('/'); return f'{int(yy):04d}-{int(mm):02d}-{int(dd):02d}'
    except Exception: return ''

# Province names: the EN list omits some facilities, so fill English names from any row that has both.
PROV = {r['province_th']: r['province_en'] for r in rows_in if r['province_th'] and r['province_en']}
PROV.update({'นครราชสีมา': 'Nakhon Ratchasima', 'พระนครศรีอยุธยา': 'Phra Nakhon Si Ayutthaya', 'กรุงเทพมหานคร': 'Bangkok'})
out = []
seen = set()
for r in rows_in:
    if r['detail_id'] in seen: continue
    seen.add(r['detail_id'])
    if r['facility_type_en'] == 'PHCA' or 'PHCA' in r['facility_type_th']: continue
    cat, label = classify(r)
    prov = r['province_en'] or PROV.get(r['province_th'], r['province_th'])
    web = r['website'].strip()
    if web and not web.startswith('http'): web = 'https://' + web
    expiry = iso(r['current_expiry'])
    note = ''
    if cat == 'advanced-ha': note = f'Advanced HA, valid to {expiry}' if expiry else 'Advanced HA'
    elif cat == 'ha' and expiry: note = f'HA certificate valid to {expiry}'
    out.append({
        'id': f"ha-{r['detail_id']}", 'name': r['name_th'] + (f' ({web.replace("https://","").replace("http://","").rstrip("/")})' if web else ''),
        'region': prov, 'regionSlug': slug(prov), 'district': affiliation(r),
        'category': cat, 'typeLabel': label, 'typeOriginal': (r['current_certificate'] or 'none') + (f' / {r["current_level"]}' if r['current_level'] else ''),
        'address': f"{r['facility_type_th']}; {r['affiliation_th']}".strip('; '), 'phone': '',
        **({'website': web} if web else {}), **({'note': note} if note else {}),
    })
out.sort(key=lambda x: (x['region'], x['district'], x['name']))
meta = {
    'country': 'thailand', 'asOf': as_of,
    'source': 'Healthcare Accreditation Institute (Public Organization), สถานะการรับรอง (certificate status) list of hospitals, all affiliations, excluding primary-care centres',
    'sourceUrl': 'https://www.ha.or.th/EN/Hospitals/Certificate%20Status',
    'total': len(out), 'byCategory': dict(collections.Counter(x['category'] for x in out)),
}
json.dump({'meta': meta, 'rows': out}, open('src/data/registries/thailand.json', 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
print(meta)
print(collections.Counter(x['district'] for x in out).most_common(10))
print(collections.Counter(x['region'] for x in out).most_common(6))
print('private by cat', collections.Counter(x['category'] for x in out if x['district'] == 'Private'))
print([x for x in out if 'bumrungrad' in x['name']][:1])
