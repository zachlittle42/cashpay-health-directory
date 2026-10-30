#!/usr/bin/env python3
"""Normalize the Medical Korea registered-institution list (scraped from
https://www.medicalkorea.or.kr/en/registeredhospitals, 736 pages of 6) into
src/data/registries/south-korea.json.

Usage: python3 scripts/registries/build-korea.py <scraped-rows.json> <as-of YYYY-MM-DD>
Scraped rows: id, name, region, type, website, address, tel, fax, email.
"""
import json, re, sys, collections

src, as_of = sys.argv[1], sys.argv[2]
rows = json.load(open(src, encoding='utf-8'))

def slug(s):
    return re.sub(r'-+', '-', re.sub(r'[^a-z0-9]+', '-', s.lower())).strip('-')

def categorize(t):
    tl = t.lower()
    if 'tertiary' in tl: return ('tertiary-hospital', 'Tertiary general hospital')
    if 'general hospital' in tl: return ('general-hospital', 'General hospital')
    if 'dent' in tl:
        return ('dental', 'Dental hospital' if 'hospital' in tl else 'Dental clinic')
    if 'korean medicine' in tl or 'oriental' in tl:
        return ('korean-medicine', 'Korean medicine hospital' if 'hospital' in tl else 'Korean medicine clinic')
    if tl == 'hospital': return ('hospital', 'Hospital')
    if tl == 'clinic': return ('clinic', 'Clinic')
    return ('other', t or 'Not stated')

def district(addr):
    # "6, Nonhyeon-ro 175-gil, Gangnam-gu, Seoul, Korea" -> Gangnam-gu
    m = re.search(r'\b([A-Z][A-Za-z]+-(?:gu|gun|si))\b', addr)
    return m.group(1) if m else ''

seen = set(); out = []
for r in rows:
    if r['id'] in seen: continue
    seen.add(r['id'])
    cat, label = categorize(r['type'])
    region = r['region'].strip() or 'Not stated'
    web = r.get('website', '').strip()
    if web and not web.startswith('http'): web = 'http://' + web
    out.append({
        'id': r['id'], 'name': re.sub(r'\s+', ' ', r['name']).strip(), 'region': region, 'regionSlug': slug(region),
        'district': district(r.get('address', '')), 'category': cat, 'typeLabel': label, 'typeOriginal': r['type'],
        'address': r.get('address', ''), 'phone': r.get('tel', ''),
        **({'website': web} if web else {}), **({'email': r['email']} if r.get('email') else {}),
    })
out.sort(key=lambda x: (x['region'], x['name'].lower()))
meta = {
    'country': 'south-korea', 'asOf': as_of,
    'source': 'Medical Korea (KHIDI): Registered Hospitals, medical institutions registered under the Act on Support for Overseas Expansion of Healthcare System and Attraction of International Patients',
    'sourceUrl': 'https://www.medicalkorea.or.kr/en/registeredhospitals',
    'total': len(out), 'byCategory': dict(collections.Counter(x['category'] for x in out)),
}
json.dump({'meta': meta, 'rows': out}, open('src/data/registries/south-korea.json', 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
print(meta); print(collections.Counter(x['region'] for x in out).most_common(18)); print(collections.Counter(x['typeOriginal'] for x in out))
print('no district:', sum(1 for x in out if not x['district']), [x['address'] for x in out if not x['district']][:5])
