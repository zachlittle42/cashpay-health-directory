#!/usr/bin/env python3
"""Normalize the Turkish Ministry of Health health-tourism authorized-facility
lists (four PDFs at shgmturizmdb.saglik.gov.tr) into src/data/registries/turkey.json.

Usage: python3 scripts/registries/build-turkey.py <parsed-rows.json> <as-of YYYY-MM-DD>
The parsed-rows input is the raw pdfplumber extraction: one object per row with
list, n, province, name, type, address, phone. See docs/research/medical-tourism-2026-10/
research-turkey-clinics.md for how the PDFs were read.
"""
import json, re, sys, unicodedata, collections

src, as_of = sys.argv[1], sys.argv[2]
rows = json.load(open(src, encoding='utf-8'))

TR_MAP = str.maketrans('çğıöşüÇĞİÖŞÜâîû', 'cgiosuCGIOSUaiu')
def slug(s):
    s = s.translate(TR_MAP)
    s = unicodedata.normalize('NFKD', s).encode('ascii', 'ignore').decode()
    return re.sub(r'-+', '-', re.sub(r'[^a-z0-9]+', '-', s.lower())).strip('-')

def title_tr(s):
    s = re.sub(r'\s+', '', s) if ' ' in s.strip() and len(s) < 16 else s.strip()  # "KAHRAMANMARA Ş"
    low = s.lower().replace('i̇', 'i')
    # Turkish-aware title case: dotted İ for words starting with i
    out = []
    for w in low.split():
        first = 'İ' if w[0] == 'i' else w[0].upper()
        out.append(first + w[1:])
    return ' '.join(out)

CANON_PROVINCE = {}
def province(s):
    t = title_tr(s)
    # Isparta and Iğdır start with a dotless I even though lowercase i -> İ elsewhere.
    fixes = {'İsparta': 'Isparta', 'İğdır': 'Iğdır'}
    return fixes.get(t, t)

# Facility type -> (category slug, English label)
def categorize(t):
    tl = t.lower()
    if 'ağız' in tl or 'agiz' in tl or 'diş' in tl:
        if 'hastane' in tl: return ('dental', 'Dental hospital' + (' (public)' if tl.startswith('kamu') else ''))
        if 'merkez' in tl: return ('dental', 'Dental center' + (' (public)' if tl.startswith('kamu') else ''))
        return ('dental', 'Dental polyclinic')
    if tl == 'muayenehane': return ('private-practice', "Private practice (physician's office)")
    if 'üniversitesi hastanesi' in tl:
        return ('hospital', 'Foundation university hospital' if 'vakıf' in tl else 'Public university hospital')
    if tl == 'kamu hastanesi': return ('hospital', 'Public hospital')
    if tl == 'özel hastane': return ('hospital', 'Private hospital')
    if 'tıp merkezi' in tl: return ('medical-center', 'Private medical center')
    if 'poliklinik' in tl: return ('polyclinic', 'Polyclinic')
    if 'üremeye yardımcı' in tl: return ('fertility', 'Assisted reproduction (IVF) center')
    if 'fizik tedavi' in tl: return ('rehab', 'Physical therapy and rehabilitation center' + (' (inpatient)' if 'konaklamalı' in tl else ''))
    if 'radyoloji' in tl: return ('diagnostic', 'Radiology center')
    if 'genetik' in tl: return ('diagnostic', 'Genetic diagnosis center')
    if 'laboratuvar' in tl: return ('diagnostic', 'Medical laboratory')
    if 'diyaliz' in tl: return ('other', 'Dialysis center')
    if 'evde bakım' in tl: return ('other', 'Home-care center')
    return ('other', t)

def district(addr, prov):
    # "... Şişli/İstanbul" or "Şişli / İstanbul" or "Seyhan-Adana"
    m = re.search(r'([A-Za-zÇĞİÖŞÜçğıöşü\.\s]+?)\s*[/\-]\s*' + re.escape(prov) + r'\s*$', addr, re.I)
    if not m: return ''
    # The district is the last word before "/Province" (Şişli, Kadıköy, Konyaaltı).
    d = m.group(1).strip().split()[-1] if m.group(1).strip() else ''
    d = d.strip('.,;:-')
    if not d or len(d) < 3 or len(d) > 20 or re.search(r'\d', d): return ''
    return title_tr(d)

out = []
for r in rows:
    prov = province(r['province'])
    cat, label = categorize(r['type'])
    out.append({
        'id': f"{r['list']}-{r['n']}",
        'name': r['name'],
        'region': prov,
        'regionSlug': slug(prov),
        'district': district(r['address'], prov),
        'category': cat,
        'typeLabel': label,
        'typeOriginal': r['type'],
        'address': r['address'],
        'phone': r['phone'],
        'list': r['list'],
    })
out.sort(key=lambda x: (x['region'], x['name'].lower()))
meta = {
    'country': 'turkey',
    'asOf': as_of,
    'source': 'T.C. Sağlık Bakanlığı, Sağlık Turizmi Daire Başkanlığı: Sağlık Turizmi Yetki Belgesi Almaya Hak Kazanan Sağlık Tesisleri (four PDF lists: hospitals, medical centers, private practices, other facilities)',
    'sourceUrl': 'https://shgmturizmdb.saglik.gov.tr/TR-76664/yetkili-saglik-tesisleri.html',
    'total': len(out),
    'byCategory': dict(collections.Counter(x['category'] for x in out)),
}
json.dump({'meta': meta, 'rows': out}, open('src/data/registries/turkey.json', 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
print(meta)
print(collections.Counter(x['region'] for x in out).most_common(8))
print('districts empty:', sum(1 for x in out if not x['district']), 'sample', [(x['district'], x['address'][-40:]) for x in out[::500]])
