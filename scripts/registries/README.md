# Official medical-tourism registries

These scripts turn two government lists into `src/data/registries/*.json`, which
power `/destinations/{turkey,south-korea}/directory`. The pages state one fact
per row: the facility appears on the named list as of `meta.asOf`. Never edit
the JSON by hand; re-run the script and commit the diff.

## Turkey (Ministry of Health, health-tourism authorized facilities)

Source: https://shgmturizmdb.saglik.gov.tr/TR-76664/yetkili-saglik-tesisleri.html
(four PDFs: hospitals, medical centers, private practices, other facilities).

```bash
# 1. download the four PDFs (links on the page above) into a scratch dir
# 2. extract rows with pdfplumber (see docs/research/medical-tourism-2026-10/research-turkey-clinics.md)
#    into rows.json: [{list, n, province, name, type, address, phone}, ...]
#    list = hospital | medical-center | private-practice | other
python3 scripts/registries/build-turkey.py rows.json 2026-10-27   # as-of = PDF creation date
npm run test:destinations
```

## South Korea (Medical Korea registered institutions)

Source: https://www.medicalkorea.or.kr/en/registeredhospitals (`?curPage=N`, 6 rows a page).
Scrape politely (0.25 s between pages) into rows.json with fields
`id, name, region, type, website, address, tel, fax, email`, then:

```bash
python3 scripts/registries/build-korea.py rows.json 2026-10-30   # as-of = portal "Updated as of" month, day scraped
npm run test:destinations
```

## Mexico (federal CLUES catalogue, private sector)

Source: http://www.dgis.salud.gob.mx/contenidos/intercambio/clues_gobmx.html (monthly
`ESTABLECIMIENTO_SALUD_YYYYMM.xlsx`, also served over https from gobi.salud.gob.mx).

```bash
# 1. download the xlsx, convert to CSV (openpyxl), then extract the private sector:
python3 -I docs/research/medical-tourism-2026-10/registries-mexico/clues_private.py clues_all.csv clues_private_SMP.csv
# 2. CSG certified-establishment CSV: parse the latest "EAM con certificado vigente" PDF from csg.gob.mx
#    into commercial_name,legal_entity,sector,address,city_municipality,state,standard,certificate_expires
python3 scripts/registries/build-mexico.py clues_private_SMP.csv csg_certificado_vigente.csv 2026-09-30
npm run test:destinations
```

## After a refresh

- `profiledRowIds()` in `src/lib/registries/index.ts` badges rows whose published
  name contains a profile's `registryMatch` phrase. Re-check the Turkish hub's
  matches if legal names change.
- Update the registry source entries in the dossiers (`moh-pdfs`, `medkorea-portal`)
  with the new date, and the hub's key facts if the totals moved.
