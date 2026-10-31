# Mexico additions to the shared clinic brief

Registry check for Mexico (state WHICH you checked, with date, in `credentials`):
1. Consejo de Salubridad General (CSG) certified-establishment list: https://www.csg.gob.mx/ (menu "Certificación de Establecimientos de Atención Médica" / "Establecimientos certificados"; there is a downloadable list). Record "CSG-certified (vigente until YYYY-MM)" or "Not on the CSG certified list (checked October 30, 2026)". Only hospitals are usually on it; for small clinics say "CSG certification does not apply to clinics of this type" only if you confirmed that.
2. COFEPRIS: whether the clinic publishes its licencia sanitaria / aviso de funcionamiento number on its site (record the number as shown), and whether COFEPRIS has issued an alert or suspension naming it (search "COFEPRIS" + clinic name, Spanish and English).
3. Surgeon board certification: Consejo Mexicano de Cirugía Plástica, Estética y Reconstructiva (CMCPER) directory https://cmcper.org/ ("Directorio de cirujanos certificados"); for bariatric, Consejo Mexicano de Cirugía General and CMCOEM membership; for any physician, the SEP cédula profesional lookup https://www.cedulaprofesional.sep.gob.mx/ (search by name; record cédula number and especialidad if found). Record "Cédula verified: <number>, <specialty>" or "Not checked / not found".
4. JCI: https://www.jointcommissioninternational.org/ directory (if blocked, say so).
Shared source ids to reuse: `csg-list`, `cofepris`, `cmcper-dir`, `sep-cedula`, `jci-directory`. Declare each once in your sources with the URL above, publisher, date 2026-10-30, kind official.

Extra fields in `namedDoctors`: for surgery, whether the surgeon's own name, cédula and board certification appear on the site; whether an anesthesiologist is named; what facility the surgery happens in (own OR, a hospital, an ambulatory clinic) and whether that facility is CSG-certified.
In `cautions`: deaths or serious injuries reported by US or Mexican press, CDC/FDA/State Department notices naming the clinic, lawsuits, COFEPRIS suspensions, BBB complaints patterns, and structural caveats (e.g. surgery in an office building, no ICU, broker-run brand with rotating surgeons).
Prices: MXN or USD as published, date seen; most Mexican clinics quote USD.
