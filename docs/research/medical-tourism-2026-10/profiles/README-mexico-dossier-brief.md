# Mexico dossier research brief

You are researching medical tourism to Mexico for Americans paying cash, for VitalityScout. Today is 2026-10-30. Write ONLY what is documented, with a source for every number. No rankings, no "best", no outcome guarantees, no invented statistics. If an official figure does not exist, say so and give the best-documented estimate labelled with its publisher. Plain English, full sentences, no em-dashes.

The site answers six questions in order: (1) what do people go to Mexico for, (2) which clinics, (3) what does it cost, (4) what to expect from the process and results and what goes wrong, (5) travel and logistics, (6) how to book. Clinic profiles are a SEPARATE task; you write the rest.

## Output
ONE valid JSON file at the path in your task, with exactly these keys (omit none; empty array if truly nothing):

```ts
{
  keyFacts: { value: string; label: string; sourceIds: string[] }[];        // 4 items, e.g. "1.2M+" / "Americans treated in Mexico per year (2024, Patients Beyond Borders estimate)"
  treatmentsIntro: string;                                                   // 2-3 sentences
  treatments: { name: string; whyHere: string; demand?: string; typicalStay: string; sourceIds: string[] }[];   // 6-8 categories: dental, bariatric, plastic surgery, stem cell/regenerative (regulatory status!), pharmacy/medications, IVF, cancer/alternative clinics (warn), orthopedics, eye, health check-ups. State WHICH CITY each is concentrated in.
  howItWorks: { title: string; body: string; sourceIds?: string[]; link?: { label: string; url: string } }[];   // 6-8 steps explaining the regulatory system: COFEPRIS licence (licencia sanitaria / aviso de funcionamiento), Consejo de Salubridad General hospital certification, cedula profesional + especialidad lookup (SEP), Consejo Mexicano de Cirugia Plastica board certification (CMCPER), CMCOEM for bariatric, dental licensing, how to verify each with the public lookup URL, what the US State Department / CDC / FDA have said (Matamoros 2023 fungal meningitis, 2024-26 warnings), medical tourism facilitators, malpractice recourse (CONAMED), US insurance / HSA.
  pricesNote: string;
  procedures: { procedure: string; usPrice: string; localPrice: string; typicalStay: string; sourceIds: string[]; note?: string }[];   // 14-18 rows across dental (implant, All-on-4, crown, veneer), bariatric (sleeve, bypass), plastic (BBL, tummy tuck, rhinoplasty, breast aug, mommy makeover, facelift), stem cell (knee), LASIK, IVF cycle, health check-up, with city named in note. US price = published US ranges with source; Mexico price = clinic-published prices preferred, marketplace ranges labelled.
  process: { title: string; body: string; sourceIds?: string[] }[];         // 6-8 steps from first message to home follow-up
  results: { title: string; body: string; sourceIds: string[] }[];           // 4 points on realistic outcomes and revision/complication handling, sourced to studies or societies (e.g. ASMBS, ASPS statements on tourism)
  safety: { verdict: string; points: { title: string; body: string; sourceIds: string[] }[] };   // verdict 2-3 sentences; 6-8 points: documented incidents (Matamoros meningitis 2023, CDC MMWR), BBL deaths, bariatric complication studies, counterfeit drugs, kidnapping/violence by state (State Dept advisories by state: Baja California L2/L3, Tamaulipas L4, Quintana Roo, Jalisco, Nuevo Leon, Chihuahua), US surgeon survey data on treating complications
  redFlags: string[];                                                        // 10 concrete red flags
  planning: { entry, flights, whereToStay, payment, stayAndFlyHome, aftercareAtHome }   // each { title, body, sourceIds?, link? }: border crossing on foot (San Ysidro, Los Algodones from Yuma, Nuevo Progreso), FMM rules, driving/insurance, flights to TIJ/CUN/GDL/MEX, CBX bridge, medical shuttles, paying (USD cash, cards, wire; no HSA issue), when you can fly after surgery, US follow-up
  booking: { title: string; body: string; sourceIds?: string[]; link? }[];   // 6-8 steps
  vetChecklist: string[];                                                    // 10 items a reader must get in writing or verify
  faqs: { question: string; answer: string }[];                              // 12-15, answers 120-400 chars each, answer-first
  sources: { id: string; label: string; url: string; publisher: string; date: string; kind: 'official'|'press'|'clinic'|'study'|'marketplace'|'forum' }[];
}
```
Every sourceIds entry must match a source id. Every source needs an https URL you opened or saw in results, publisher, date (YYYY-MM-DD, YYYY-MM or YYYY), kind. Prefer official (COFEPRIS, CSG, SEP, State Dept, CDC, FDA, CONAMED, DATATUR/SECTUR, US Census border crossings), study (peer-reviewed, ASMBS, ASPS), reputable press. Save the file early with partial content and re-save as you go so a cut-off loses nothing. Reply with the path and anything you could not source.
