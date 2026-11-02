# Thailand additions to the shared clinic brief

Registry checks (state WHICH you checked, with date, in `credentials`):
1. HA Thailand (Healthcare Accreditation Institute) accredited-hospital list: https://www.ha.or.th/ (search "รายชื่อสถานพยาบาลที่ได้รับการรับรอง" / accredited hospitals list; record HA level and expiry if shown).
2. JCI accredited organizations, Thailand: https://www.jointcommissioninternational.org/who-we-are/accredited-organizations/ (if blocked, say "JCI claimed on hospital site; directory not reachable").
3. MoPH Department of Health Service Support licence: whether the hospital or clinic publishes its สถานพยาบาล licence number (record it) and whether HSS or the Thai FDA has announced action against it (search in Thai and English: "ปิดคลินิก", "สบส. ดำเนินคดี", clinic name + "death" / "เสียชีวิต").
4. Doctors: Thai Medical Council lookup https://checkmd.tmc.or.th/ (per name; record whether the named surgeon appears and the board certification shown) or the hospital's own doctor profile with Thai board certification named.
Shared source ids to reuse: `ha-list`, `jci-directory`, `tmc-checkmd`, `hss-moph`. Declare each once (URLs above, date 2026-10-30, kind official).
Extra: for cosmetic and gender-affirming surgery, record whether the surgeon is Thai Board of Plastic Surgery certified (ThPRS / Society of Plastic and Reconstructive Surgeons of Thailand), whether an anesthesiologist is named, and whether surgery is in a licensed hospital or a clinic. Prices in THB with USD at 1 USD = 36 THB stated once per price string.
