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

## After a refresh

- `profiledRowIds()` in `src/lib/registries/index.ts` badges rows whose published
  name contains a profile's `registryMatch` phrase. Re-check the Turkish hub's
  matches if legal names change.
- Update the registry source entries in the dossiers (`moh-pdfs`, `medkorea-portal`)
  with the new date, and the hub's key facts if the totals moved.
