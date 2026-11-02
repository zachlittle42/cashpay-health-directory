# Thailand dossier research brief

You are researching medical tourism to Thailand for Americans paying cash, for VitalityScout. Today is 2026-10-30. Write ONLY what is documented, with a source for every number. No rankings, no "best", no outcome guarantees, no invented statistics. If an official figure does not exist, say so and give the best-documented estimate labelled with its publisher. Plain English, full sentences, no em-dashes.

The site answers six questions in order: (1) what do people go to Thailand for, (2) which clinics, (3) what does it cost, (4) what to expect from the process and results and what goes wrong, (5) travel and logistics, (6) how to book. Clinic profiles are a SEPARATE task; you write the rest.

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

## Thailand notes
- Regulators and lookups: Ministry of Public Health, Department of Health Service Support (HSS) licenses private hospitals and clinics under the Sanatorium Act (พ.ร.บ. สถานพยาบาล); HSS "Medical Hub" policy and lists; Healthcare Accreditation Institute (HA Thailand, ha.or.th) accredited-hospital list; JCI accredited organizations in Thailand (count them from the JCI directory if reachable; the common press figure is about 60); Thai Medical Council doctor check (checkmd.tmc.or.th) and the Medical Council's specialty boards; Dental Council; Thai FDA for stem cells (illegal outside approved research since 2009); Royal Thai Police / Tourist Police 1155; the Thai court recourse; Medical Hub 90-day medical visa (Non-Immigrant O-MT and the 2024 60-day visa exemption for US citizens, confirm current rule); hospital-run "medical treatment visa" lists.
- Demand: official MoPH / Tourism Authority figures for international patients (the "3 million medical tourists" figure is contested; find the official 2024 or 2025 international-patient count and the US share), Bumrungrad's own reported international patient numbers, Bangkok Hospital / BDMS annual report figures.
- Treatments: cosmetic surgery (facial feminization and gender-affirming surgery, breast, rhinoplasty, facelift), dental (implants, veneers), health check-ups, cardiac, orthopedic (knee and hip), IVF (note the 2015 Protection of Children Born through Assisted Reproductive Technologies Act: no commercial surrogacy, no sex selection, and the rules for foreign couples), LASIK/SMILE, hair transplant, stem cell (status), long-stay wellness. Cities: Bangkok, Phuket, Chiang Mai, Pattaya.
- Prices: use hospital-published price lists where they exist (Bumrungrad, Bangkok Hospital, Samitivej, Yanhee, Phuket International Hospital publish package prices) and label marketplace ranges.
- Safety: named incidents 2019-2026 (deaths after cosmetic surgery at unlicensed clinics, the 2023-2025 Thai FDA and HSS crackdowns on fake clinics, botox deaths, the "Pattaya clinic" cases), the US State Department advisory level for Thailand and the Deep South exclusion, Thai road-death context, dengue, hospital-bill disputes and deposits, medical travel insurance exclusions.
