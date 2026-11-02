# Colombia dossier research brief

You are researching medical tourism to Colombia for Americans paying cash, for VitalityScout. Today is 2026-10-30. Write ONLY what is documented, with a source for every number. No rankings, no "best", no outcome guarantees, no invented statistics. If an official figure does not exist, say so and give the best-documented estimate labelled with its publisher. Plain English, full sentences, no em-dashes.

The site answers six questions in order: (1) what do people go to Colombia for, (2) which clinics, (3) what does it cost, (4) what to expect from the process and results and what goes wrong, (5) travel and logistics, (6) how to book. Clinic profiles are a SEPARATE task; you write the rest.

## Output
ONE valid JSON file at the path in your task, with exactly these keys (omit none; empty array if truly nothing):

```ts
{
  keyFacts: { value: string; label: string; sourceIds: string[] }[];        // 4 items: official or best-documented volume, share of foreign patients, accredited-hospital count, one safety or regulatory fact
  treatmentsIntro: string;                                                   // 2-3 sentences
  treatments: { name: string; whyHere: string; demand?: string; typicalStay: string; sourceIds: string[] }[];   // 6-8 categories, each stating WHICH CITY it is concentrated in and any official demand figure
  howItWorks: { title: string; body: string; sourceIds?: string[]; link?: { label: string; url: string } }[];   // 6-8 steps explaining the regulatory system and the EXACT public lookups (see country notes below), what US agencies and societies have said, facilitators, malpractice recourse, US insurance / HSA
  pricesNote: string;
  procedures: { procedure: string; usPrice: string; localPrice: string; typicalStay: string; sourceIds: string[]; note?: string }[];   // 14-18 rows across the procedures named in the country notes, with city in note; US price = published US ranges with source; local price = clinic-published prices preferred, marketplace ranges labelled
  process: { title: string; body: string; sourceIds?: string[] }[];         // 6-8 steps from first message to home follow-up
  results: { title: string; body: string; sourceIds: string[] }[];           // 4 points on realistic outcomes and revision/complication handling, sourced to studies or societies (e.g. ASMBS, ASPS statements on tourism)
  safety: { verdict: string; points: { title: string; body: string; sourceIds: string[] }[] };   // verdict 2-3 sentences; 6-8 points: documented incidents and deaths (named cases with dates), complication studies, regulator enforcement, travel-safety advisory levels, what happens when complications surface back in the US
  redFlags: string[];                                                        // 10 concrete red flags
  planning: { entry, flights, whereToStay, payment, stayAndFlyHome, aftercareAtHome }   // each { title, body, sourceIds?, link? }: entry and visa rules for US citizens as of October 2026, flights and typical fares, where to stay, paying, when you can fly home after each major procedure, US follow-up
  booking: { title: string; body: string; sourceIds?: string[]; link? }[];   // 6-8 steps
  vetChecklist: string[];                                                    // 10 items a reader must get in writing or verify
  faqs: { question: string; answer: string }[];                              // 12-15, answers 120-400 chars each, answer-first
  sources: { id: string; label: string; url: string; publisher: string; date: string; kind: 'official'|'press'|'clinic'|'study'|'marketplace'|'forum' }[];
}
```
Every sourceIds entry must match a source id. Every source needs an https URL you opened or saw in results, publisher, date (YYYY-MM-DD, YYYY-MM or YYYY), kind. Prefer official (COFEPRIS, CSG, SEP, State Dept, CDC, FDA, CONAMED, DATATUR/SECTUR, US Census border crossings), study (peer-reviewed, ASMBS, ASPS), reputable press. Save the file early with partial content and re-save as you go so a cut-off loses nothing. Reply with the path and anything you could not source.

## Colombia notes
- Regulators and lookups: Ministerio de Salud REPS (Registro Especial de Prestadores de Servicios de Salud, prestadores.minsalud.gov.co: every licensed provider with habilitación status and the services it is licensed for; explain that a surgeon's office being habilitado for "cirugía plástica y estética" and having a licensed operating room is the key check); ReTHUS (Registro Único Nacional del Talento Humano en Salud) for any clinician's licence and specialty; Sociedad Colombiana de Cirugía Plástica, Estética y Reconstructiva (SCCP, cirugiaplastica.org.co) member directory and the difference between a plastic surgeon and an "esteticista" or general physician doing cosmetic surgery (Ley 1799 de 2016 and the 2019-2026 bills to restrict who may operate); Icontec hospital accreditation list and the "Ranking" problem; JCI in Colombia (Fundación Cardioinfantil, Fundación Valle del Lili, Hospital Pablo Tobón Uribe, Fundación Santa Fe); Secretaría de Salud de Medellín and Bogotá inspections and closures ("clínicas de garaje"); INVIMA for devices and stem cells; Superintendencia de Salud complaints; Colombian courts.
- Demand: official or best figures (Procolombia, Ministry of Commerce medical-tourism exports, Medellín Health City cluster, Migración Colombia entries for health), the US share, and the shift of BBL demand from the Dominican Republic.
- Treatments: plastic surgery (BBL, liposuction, breast, rhinoplasty, facelift, mommy makeover; Cali, Medellín, Bogotá, Barranquilla), dental (veneers, implants; Medellín, Bogotá, Cali), bariatric, hair transplant, stem cell (status; BioXcellerator and INVIMA's position), IVF, cardiac and orthopedic at accredited hospitals, dermatology, ophthalmology. Note the market of cheap combined packages via "coordinators".
- Prices: clinic-published USD or COP prices with dates; label marketplace ranges; US side ASPS 2024.
- Safety: the documented deaths of US and other foreign cosmetic-surgery patients in Colombia 2019-2026 with names, cities and surgeon licensing status where published (press in Spanish: El Tiempo, El Colombiano, El País Cali, Semana; English: CBS, NBC, Daily Mail, People), Medellín's own count of deaths in cosmetic procedures, the CDC advice on cosmetic surgery abroad, the US State Department Colombia advisory level and regions (Level 3 overall; Level 4 departments) as of October 2026, scopolamine and dating-app robberies targeting foreign men in Medellín (the US Embassy January 2024 alert and later), kidnapping. Also the problem of travelling-surgeon "tour" models and post-op recovery houses.
