# Thailand official registries for a "every government-listed facility" directory

Status: IN PROGRESS (started 2026-10-30). Updated after each registry.

Working dir: /private/tmp/claude-501/-Users-zachlittle-Documents-cashpay-health-directory/1dad230d-0ae4-4c37-80ab-63e4dcb0b511/scratchpad/thailand/

## 1. MoPH Department of Health Service Support (HSS) licensed private hospitals and clinics
STATUS: partially blocked (2026-10-30). Findings so far:
- Official search system: https://privatehospital.hss.moph.go.th/ ("ระบบค้นหาข้อมูลสถานพยาบาลเอกชน", Hospital_View.php / Clinic_View.php). Publisher: กองสถานพยาบาลและการประกอบโรคศิลปะ (Bureau of Sanatorium and Art of Healing, HSS). Servers 203.157.7.115 / .119 REFUSE connections from outside Thailand (curl + WebFetch both ECONNREFUSED; hss.moph.go.th main site answers). Wayback has captures to 2026-01-23 (home) and 2025-07-09 (Clinic_View.php) – being inspected.
- hss.moph.go.th main domain answers; mrd-hss.moph.go.th (division site) blocked; mrd.hss.moph.go.th (WordPress, 96.30.64.142) timed out.
- Open data: GD Catalog (gdcatalog.go.th, CKAN API works) lists ONE HSS dataset relevant: "จำนวนสถานพยาบาลเอกชน" (gdpublish-dataset-5-1-03), CSV, counts only ("จำนวนสถานพยาบาลที่ได้รับอนุญาต แบ่งตามลักษณะ"), source = ฐานข้อมูลผลการพิจารณาอนุญาตประกอบกิจการและดำเนินการสถานพยาบาล, years 2565-2568, last update 2025-08-06, licence "Open Data Common", maintainer กองสถานพยาบาลและการประกอบโรคศิลปะ (mrdit@hotmail.com). The file itself sits on hss.gdcatalog.go.th (164.115.45.229) which also refuses connections. No name-level national dataset found on data.go.th / gdcatalog.
- Count reference: HSS RDU self-assessment PDF (Nov 2024) states 426 private hospitals nationwide as of Jan 2024 (มีโรงพยาบาลเอกชนทั้งสิ้น 426 แห่ง).
- Provincial partial lists exist on GD Catalog (Lamphun clinics XLSX/CSV, Mae Hong Son, Phang Nga counts) – not national.
- Alternative master list: MoPH Strategy & Planning Division "รหัสหน่วยงานบริการสุขภาพ" (hcode.moph.go.th) issues a 9-digit facility code to every public AND private facility (hospitals and clinics) and documents a public API (api_documentation/), but the site is behind a Cloudflare JS challenge and the API needs an account (signup). Candidate for a licensed-facility universe; to be tested via browser.


## 2. Healthcare Accreditation Institute (HA Thailand)
STATUS: scraping in progress (2026-10-30).
- URL: https://www.ha.or.th/TH/Hospitals/สถานะการรับรอง (EN: https://www.ha.or.th/EN/Hospitals/Certificate%20Status). Publisher: สถาบันรับรองคุณภาพสถานพยาบาล (องค์การมหาชน) / HAI, a public organisation under MoPH.
- No bulk download. Server-rendered HTML list, 10 facilities per page, 165 pages (TH) ≈ 1,650 facilities; EN list has 139 pages (~1,390; EN omits some types). Each card: name (TH only; EN cards have empty name), province, facility type (HA hospital / PHCA primary-care centre / HP), affiliation (สังกัด) in TH and Public/Private kind in EN, lat/long (mostly blank), website, and a table of certificates: certificate name (e.g. "step 2", "HA", "Advanced HA", "re-accreditation"), level, start date, expiry date, certificate PDF link on backend.ha.or.th. Detail pages /Details/{id} hold full history.
- Legal meaning: voluntary quality accreditation (HA = hospital accreditation standard; step 1-2 are developmental stages, "HA"/"Advanced HA" (A-HA) are full accreditations, 2-3 year validity). Not a licence; licensing is HSS (sec. 1).
- Script: scripts/scrape_ha.py -> downloads/ha/ha_accredited_facilities.csv (TH+EN joined on detail id).


## 3. JCI accredited organizations in Thailand
STATUS: in progress (2026-10-30).
- Directory moved to https://www.jointcommission.org/en/about-us/recognizing-excellence/find-accredited-international-organizations (old jointcommissioninternational.org URL 301s). Curl gets 403 (Cloudflare bot check); works in a real browser. Country filter URL: ...?rfkid_7:content_filters=country:eq:Thailand. Data served by Sitecore Discover (POST discover.sitecorecloud.io/discover/v2/202876298) – no public JSON export.
- Thailand filter returns 4 pages × 20 = roughly 60-80 organisations. Card fields: organisation name, IHCO ID, city/country, accreditation program (Hospital / Ambulatory Care / Academic Medical Center / Primary Care...), decision ("Accredited"), effective date, Clinical Care Program certifications (e.g. Acute Coronary Syndrome, Primary Stroke) with dates, website.
- Being extracted page by page via browser -> downloads/jci/jci_thailand.csv.


## 4. Medical Hub / visa lists, Thai Medical Council, Thai Dental Council
(pending)

## 5. Enforcement lists (Thai FDA / HSS)
(pending)

## Recommendation
(pending)
