import type { DestinationDossier } from '../types';

// Turkey destination dossier. Facts checked 2026-10-30 against the numbered
// sources at the bottom; every figure cites at least one. Turkish procedure
// prices are clinic or broker package quotes (marketplace) unless a source is
// marked official, press or study; US cosmetic figures are ASPS surgeon fees.

export const TURKEY: DestinationDossier = {
  slug: 'turkey',
  country: 'Turkey',
  displayName: 'Turkey',
  flag: '🇹🇷',
  heroTitle: 'Turkey Medical Tourism Guide: What People Go For, the Clinics, Prices, and How to Book Safely',
  quickAnswer:
    'Turkey received about 1.4 million health visitors in 2025 and earned about $3 billion from them, roughly $2,200 a patient. Americans go mainly for hair transplants in Istanbul, which run $2,500 to $4,500 as all-inclusive packages against $6,000 to $12,000 in the US, and for dental work, rhinoplasty, gastric sleeve surgery and laser eye surgery at a third to a half of US prices. Entry is visa-free for 90 days and nonstop flights take about 10 hours from New York. The system is licensed: facilities need a Ministry of Health health-tourism certificate, hair transplant units must sit inside licensed hospitals or medical centers, and since 2025 complication insurance is mandatory. The risk is also the best documented of any destination: the UK Foreign Office counts seven British deaths after procedures in 2025, and Turkey accounts for roughly three quarters of the complication cases British plastic surgeons treat. The difference between the two outcomes is usually visible before you pay, in whether the clinic is on the Ministry list, names its surgeon, and lets you stay long enough.',
  metaTitle: 'Turkey Medical Tourism Guide (2026): Treatments, Clinics, Prices, Safety, How to Book',
  metaDescription:
    'What Americans go to Turkey for, which Istanbul and Antalya clinics are licensed and name their surgeons, published prices for hair transplants, dental, rhinoplasty, gastric sleeve and LASIK vs the US, the real safety record, and how to book. Sourced, checked October 2026.',
  verifiedAt: '2026-10-30',
  verifiedLabel: 'October 30, 2026',

  keyFacts: [
    { value: '1.4M', label: 'health visitors in 2025, spending about $3 billion', sourceIds: ['tesvik-tuik', 'dha-tursab'] },
    { value: '~38', label: 'JCI-accredited hospitals, as of August 2026', sourceIds: ['mtw-jci'] },
    { value: '7', label: 'British nationals died after medical procedures in Turkey in 2025 (FCDO)', sourceIds: ['fcdo-turkey'] },
    { value: '90 days', label: 'visa-free entry for US passport holders', sourceIds: ['mfa-visa'] },
  ],

  treatmentsIntro:
    'Turkey’s official statistics count visitors and revenue but not procedures, so the mix below comes from industry bodies and the clinics themselves. The pattern is consistent: hair transplants in Istanbul dominate, dental is second and growing fastest in Antalya, and cosmetic surgery, bariatric surgery, eye surgery and IVF make up most of the rest. Large hospital groups also sell orthopedic, cardiac and oncology care to foreigners.',
  treatments: [
    {
      name: 'Hair transplant (FUE, sapphire FUE, DHI)',
      whyHere: 'Istanbul is the world’s volume center: the Turkish Health Tourism Association told NPR about a million people came for hair transplants in 2022, and one Istanbul dermatologist put the pace at 5,000 procedures a day. Prices are a third of US levels because packages bundle hotel and transfers and because, by regulation, certified technicians may do most of the work under a physician.',
      demand: 'Largest single draw',
      typicalStay: '3–4 nights; fly 2–7 days after',
      guideHref: '/guides/hair-transplant-turkey-guide',
      sourceIds: ['npr-hair', 'ntv-5000', 'karar-technicians'],
    },
    {
      name: 'Dental: veneers, crowns, implants, All-on-4',
      whyHere: 'Veneers at $145 to $400 a tooth and implants at $250 to $950 against $900 to $2,500 and about $4,500 in the US. Antalya is the second-largest health-tourism market and about 90 percent of its dental patients are foreign. The known failure mode is "Turkey teeth": full crowns on filed-down healthy teeth sold as veneers.',
      demand: 'Second-largest draw',
      typicalStay: '5–7 nights for crowns and veneers; two trips for implants',
      guideHref: '/guides/turkey-dental-cost',
      sourceIds: ['placidway-veneers', 'cliniqueplus-implants', 'dha-tursab', 'bda-tourism'],
    },
    {
      name: 'Rhinoplasty and cosmetic surgery',
      whyHere: 'Istanbul rhinoplasty packages run $4,000 to $15,000 against a $7,637 US surgeon fee before anesthesia and facility charges; facelifts $3,000 to $10,000 against $11,395. Breast, tummy tuck and Brazilian butt lift packages are widely sold. This is the category with the most documented deaths and complications among foreign patients.',
      typicalStay: '7–10 nights; surgeons advise about a month before flying',
      guideHref: '/guides/rhinoplasty-turkey-cost',
      sourceIds: ['asps-costs', 'dilber-rhino', 'tlc-facelift', 'baaps-2023'],
    },
    {
      name: 'Bariatric surgery (gastric sleeve)',
      whyHere: 'All-inclusive sleeve packages of $3,200 to $7,500 against a US self-pay average near $14,900. UK press has documented packages as low as £2,000 and at least seven British deaths after weight-loss surgery in Turkey since 2019; the 2026 BMJ Open review found bariatric cases made up the majority of NHS-treated complications.',
      typicalStay: '5–7 nights in Turkey; 4–6 weeks before flying is the medical advice',
      guideHref: '/guides/gastric-bypass-turkey-cost',
      sourceIds: ['acibadem-sleeve', 'bettercare-sleeve', 'independent-bariatric', 'bmj-open-2026'],
    },
    {
      name: 'Eye surgery: LASIK, SMILE, cataract',
      whyHere: 'LASIK at €1,200 to €2,800 all-inclusive against about $4,492 for both eyes in the US; SMILE €2,000 to €3,400; cataract with a monofocal lens $1,200 to $2,000 an eye. Premium lenses narrow the saving. Turkey has multi-city private eye-hospital networks with decades of refractive volume.',
      typicalStay: '3–5 nights',
      guideHref: '/guides/lasik-cost-by-country',
      sourceIds: ['wellnessvision-lasik', 'kaskaloglu-eye'],
    },
    {
      name: 'IVF and fertility',
      whyHere: 'Cycles of $2,500 to $5,500 plus medication against a $12,400 US average. Turkish law restricts assisted reproduction to legally married heterosexual couples using their own eggs and sperm; donor gametes, embryo donation and surrogacy are illegal, and those rules apply to foreigners treated in Turkey.',
      typicalStay: '15–20 days on site for a fresh cycle',
      guideHref: '/guides/ivf-cost-by-country',
      sourceIds: ['acibadem-ivf', 'fca-ivf', 'pet-ivf-law', 'goodrx-ivf'],
    },
    {
      name: 'Orthopedic, cardiac and oncology at hospital groups',
      whyHere: 'Hip replacement €9,100 to €16,900, knee $7,000 to $12,800 and heart bypass $10,000 to $20,000 at the large private groups, against $30,000 to $150,000 in the US. These are hospital-based inpatient procedures, which is where Turkey’s JCI-accredited groups and Johns Hopkins-affiliated Anadolu Medical Center matter most.',
      typicalStay: '10–14 nights plus rehabilitation',
      guideHref: '/guides/knee-replacement-cost-by-country',
      sourceIds: ['acibadem-hip', 'placidway-joints', 'curemeabroad-cabg'],
    },
    {
      name: 'Health check-ups',
      whyHere: 'Acıbadem lists check-up packages at $450 to $1,200; executive packages run $1,200 to $1,800 through brokers. Usually added to a trip for something else rather than the reason for it.',
      typicalStay: 'Same day',
      sourceIds: ['acibadem-checkup', 'mta-checkup'],
    },
  ],

  clinicsBar:
    'Listed, not ranked. Every provider here appears in reputable press, on an official list, or publishes an international-patient page we read. For each we record what is documented: whether the Ministry of Health authorization is claimed, whether a surgeon is named and what they personally perform, published prices, any incident a regulator, coroner or newspaper has reported, and how to book. Absence of a caution means we found none, not that none exists. Verify the certificate yourself before paying.',
  clinics: [],

  howItWorks: [
    {
      title: 'Facilities and agencies need a Ministry of Health health-tourism certificate',
      body: 'The 2017 Regulation on International Health Tourism and Tourist Health created the International Health Tourism Authorization Certificate: facilities get it from the Ministry of Health, intermediary agencies from USHAŞ, the state health-tourism company. A new regulation replaced it on April 26, 2025. The Ministry published 654 hospitals, 189 medical centers and 2,525 clinics holding authorization as of July 2024, and its Health Tourism Department keeps the current lists online; the facility list was updated October 5, 2026. The certificate confirms authorization to treat foreigners, not quality.',
      sourceIds: ['reg-2017', 'reg-2025-plus', 'uste-data', 'moh-tourism'],
      link: { label: 'Ministry of Health authorized facility and agency lists', url: 'https://shgmturizmdb.saglik.gov.tr/' },
    },
    {
      title: 'The 2025 rules added mandatory complication insurance and tighter agency oversight',
      body: 'Complication insurance became mandatory for surgical and interventional procedures done in an operating room, with a year-end 2025 deadline. Facilities and agencies must register patients on the HealthTürkiye portal, assign a named responsible staff member per patient, and employ at least one certified foreign-language speaker; agencies need a two-language 24-hour line. USHAŞ re-evaluates agencies at least annually and can suspend or cancel them. TÜSKA national accreditation becomes mandatory for hospitals and medical centers by the end of 2026.',
      sourceIds: ['birgun-2025', 'reg-2025-plus', 'tuska-mandatory'],
      link: { label: 'HealthTürkiye portal', url: 'https://healthturkiye.gov.tr/' },
    },
    {
      title: 'Hair transplants must happen inside licensed hospitals, medical centers or polyclinics',
      body: 'The 2023 Regulation on Hair Transplant Units limits the procedure to units inside licensed facilities, requires Ministry-registered practitioner certificates, logs every case in the Ministry’s electronic system, and lists facilities on the Ministry website. Opening the channels is physician-only; harvesting and placing grafts may be done by certified non-physician staff under supervision. A September 2025 amendment extended the compliance deadline to December 31, 2026.',
      sourceIds: ['reg-hair-2023', 'aa-hair-2023', 'karar-technicians', 'rg-hair-2025'],
    },
    {
      title: 'Who holds the instruments is the question the license does not answer',
      body: 'The Ministry’s own director general said in 2018 that a Turkish physician typically does the first two hours of an eight-hour transplant and hands the rest to support staff, which is why it is cheaper than abroad, where surgeons do the whole case. In October 2025 Turkish plastic surgeons and dermatologists publicly criticized the split. ISHRS members report that on average 10 percent of their cases are repairs of prior black-market transplants. "Surgeon-performed" and "surgeon-supervised" are different products; ask which you are buying.',
      sourceIds: ['haberturk-2018', 'karar-technicians', 'ishrs-census'],
    },
    {
      title: 'Accreditation: about 38 JCI hospitals, mostly in the big groups',
      body: 'Independent counts put Turkey at about 38 JCI-accredited hospitals in August 2026. Acıbadem reports seven, Florence Nightingale reports JCI since 2004, Medipol Mega is a JCI Academic Medical Center, and Anadolu Medical Center is affiliated with Johns Hopkins Medicine. A standalone hair or dental clinic claiming JCI usually rents operating time at an accredited hospital; ask which campus and check JCI’s directory.',
      sourceIds: ['mtw-jci', 'acibadem-press', 'florence-intl', 'medipol-jci', 'hopkins-anadolu'],
    },
    {
      title: 'Legal recourse exists on paper and is hard in practice',
      body: 'Foreign patients can file Ministry complaints and civil claims in Turkish courts, usually through a lawyer under power of attorney, and are entitled to their records. Proceedings are in Turkish and claims arise after you have left; several UK inquests were delayed because the Turkish surgeon could not be traced or no cause of death was supplied. How a foreign patient claims under the new complication insurance is not yet documented. Package "guarantees" are clinic promises with no enforcement beyond Turkish courts.',
      sourceIds: ['mondaq-law', 'ribeiro-inquest', 'itv-bbl-2024', 'birgun-2025'],
    },
  ],

  pricesNote:
    'US cosmetic figures are American Society of Plastic Surgeons average surgeon fees, which exclude anesthesia, facility and related charges; a full US bill is typically 1.5 to 2 times the surgeon fee. Turkish figures are all-inclusive package quotes from clinics and brokers (surgery, hospital nights, hotel, transfers) and are marketing numbers, not verified prices. Compare a Turkish package against a complete US quote, never against the surgeon fee alone.',
  procedures: [
    { procedure: 'Hair transplant, all-inclusive package', usPrice: '$6,000–12,000 (Bosley)', localPrice: '$2,500–4,500; named-surgeon clinics to $10,000+', typicalStay: '3–4 nights', guideHref: '/guides/hair-transplant-turkey-cost', sourceIds: ['smile-cost', 'signature-hair', 'bosley-cost'], note: 'Roughly $1–2 per graft. ISHRS average first session is 2,347 grafts.' },
    { procedure: 'Veneers, per tooth', usPrice: '$900–2,500', localPrice: '$145–400 (average about $247)', typicalStay: '5–7 nights', guideHref: '/guides/turkey-dental-cost', sourceIds: ['placidway-veneers', 'tlc-veneers'], note: 'Confirm veneer versus crown for every tooth in writing.' },
    { procedure: 'Dental implant, single', usPrice: '~$4,500 with crown ($3,000–6,000)', localPrice: '$250–950 by brand', typicalStay: 'Two trips, 3–6 months apart', guideHref: '/guides/turkey-dental-cost', sourceIds: ['cliniqueplus-implants', 'realdentalcosts'], note: 'Ask whether abutment and crown are included.' },
    { procedure: 'All-on-4, per arch', usPrice: '$15,000–30,000+', localPrice: '$2,000–6,000', typicalStay: '7–10 nights; return trip for final teeth', guideHref: '/guides/turkey-dental-cost', sourceIds: ['acibadem-allon4'] },
    { procedure: 'Rhinoplasty', usPrice: '$7,637 surgeon fee', localPrice: '$4,000–15,000 package', typicalStay: '7–10 nights', guideHref: '/guides/rhinoplasty-turkey-cost', sourceIds: ['asps-costs', 'dilber-rhino'] },
    { procedure: 'Breast augmentation', usPrice: '$4,875 surgeon fee', localPrice: '$2,800–5,500 package', typicalStay: '7–10 nights', guideHref: '/guides/breast-augmentation-cost-by-country', sourceIds: ['asps-costs', 'tlc-breast'] },
    { procedure: 'Facelift', usPrice: '$11,395 surgeon fee', localPrice: '$3,000–10,000 package', typicalStay: '10–14 nights', sourceIds: ['asps-costs', 'tlc-facelift'] },
    { procedure: 'Tummy tuck', usPrice: '$8,174 surgeon fee', localPrice: '£2,900–4,200 all-inclusive', typicalStay: '10–14 nights', guideHref: '/guides/tummy-tuck-cost-by-country', sourceIds: ['asps-costs', 'hayatmed-tummy'] },
    { procedure: 'Gastric sleeve', usPrice: '~$14,900 self-pay average ($9,350–24,000)', localPrice: '$3,200–7,500 all-inclusive', typicalStay: '5–7 nights in Turkey', guideHref: '/guides/gastric-bypass-turkey-cost', sourceIds: ['acibadem-sleeve', 'hayatmed-sleeve', 'bettercare-sleeve'], note: 'Medical advice is 4–6 weeks before flying; packages are shorter.' },
    { procedure: 'LASIK, both eyes', usPrice: '~$4,492', localPrice: '€1,200–2,800 all-inclusive', typicalStay: '3–5 nights', guideHref: '/guides/lasik-cost-by-country', sourceIds: ['wellnessvision-lasik', 'kaskaloglu-eye'] },
    { procedure: 'IVF, one cycle', usPrice: '$12,400 average, medication extra', localPrice: '$2,500–5,500, medication extra', typicalStay: '15–20 days', guideHref: '/guides/ivf-cost-by-country', sourceIds: ['goodrx-ivf', 'acibadem-ivf', 'fca-ivf'], note: 'Married heterosexual couples, own gametes only.' },
    { procedure: 'Hip replacement', usPrice: '$30,000–50,000', localPrice: '€9,100–16,900 (hospital index); $7,500–12,000 (brokers)', typicalStay: '10–14 nights', sourceIds: ['acibadem-hip', 'placidway-joints'] },
    { procedure: 'Heart bypass (CABG)', usPrice: '$57,000–150,000+', localPrice: '$10,000–20,000', typicalStay: '14+ nights', guideHref: '/guides/heart-bypass-cost-by-country', sourceIds: ['curemeabroad-cabg'] },
    { procedure: 'Health check-up package', usPrice: '$2,500–15,000 executive physical', localPrice: '$450–1,200 (Acıbadem); $1,200–1,800 executive', typicalStay: 'Same day', sourceIds: ['acibadem-checkup', 'mta-checkup'] },
  ],

  process: [
    {
      title: 'First contact: a form or WhatsApp message with photos',
      body: 'Nearly every Turkish clinic and agency opens with an online form or WhatsApp. Hair clinics ask for scalp photos from several angles and your age and medical history; dental clinics ask for a panoramic X-ray and photos; surgical clinics ask for photos and a health questionnaire. A quote and a proposed graft count or treatment plan usually arrive within a day. This is the moment to ask for the certificate numbers and the surgeon’s name, before any deposit.',
      sourceIds: ['hairlosstalk-package', 'acibadem-package'],
    },
    {
      title: 'Quote, deposit and dates',
      body: 'Packages are quoted in dollars or euros and cover the procedure, one or two hospital nights where relevant, hotel, airport and clinic transfers, an interpreter, basic medication and an aftercare kit; airfare is almost never included and long-term follow-up usually is not. A deposit by transfer holds the date; the balance is paid at the clinic by card or cash. Refund terms are rarely published, so get them in writing.',
      sourceIds: ['acibadem-package', 'hairlosstalk-package', 'mordor-turkey'],
    },
    {
      title: 'Arrival day: transfer, hotel, and a first look at the facility',
      body: 'Istanbul Airport is about 42 kilometers from the Şişli and Taksim clinic district, 35 to 90 minutes by road depending on traffic; packages include a private transfer. Most clinics sit on the European side in Şişli, Nişantaşı, Fulya, Mecidiyeköy and Levent, with the big hospital campuses in Maslak, Ataşehir and Bağcılar. Use the first evening to confirm the hospital where the procedure will happen matches the one on the quote.',
      sourceIds: ['kings-transfer', 'inyourpocket-istanbul'],
    },
    {
      title: 'Consultation, blood tests and the surgeon meeting',
      body: 'Day one usually brings blood tests, a consultation, hairline or treatment-plan design, and consent forms. In the package model this is often the first time you meet the operating surgeon, which UK coroners have criticized; one referral firm relied on self-declared health history and a patient died. Insist on the video consultation before you travel so that day one confirms a plan rather than creates one, and read the consent form for the surgeon’s name.',
      sourceIds: ['pslhub-morrissey', 'lbc-bbl-2024'],
    },
    {
      title: 'The procedure',
      body: 'A hair transplant runs six to eight hours under local anesthesia; by regulation a physician opens the channels and certified technicians may harvest and implant. Dental work spreads over several visits in five to seven days, with temporaries fitted while crowns are made. Cosmetic and bariatric surgery means one or two hospital nights. Ask who is in the room for each step and whether an anesthesiologist is present for general anesthesia.',
      sourceIds: ['karar-technicians', 'haberturk-2018', 'acibadem-package'],
    },
    {
      title: 'Follow-up, washing or fitting, and discharge',
      body: 'Hair packages include a next-day check and first wash; dental packages end with final fitting; surgical patients get a wound check before discharge. Packages are built around three to seven nights, which is shorter than the CDC’s 10 to 14 days after major surgery, the Aesthetic Society’s roughly one month for significant cosmetic surgery, and the four to six weeks bariatric sources advise. Leave with operative notes, implant brand and lot numbers, and medication lists in English.',
      sourceIds: ['cdc-medtourism', 'aesthetic-society-fly', 'barilife-fly', 'mittal-fly'],
    },
    {
      title: 'Back home',
      body: 'US surgeons and dentists treat emergencies but elective revisions are at full price; the ASPS estimates treating medical-tourism complications costs the US system $1.3 billion a year, and dentists cite missing implant brand and lot documentation. Medicare does not cover care abroad outside narrow emergencies and most dental plans exclude it. Separate "complications" insurance policies exist and pay only for post-procedure problems.',
      sourceIds: ['asps-complications', 'asps-tourism-cost', 'medicare-travel', 'cda-tourism', 'imtj-complications-ins'],
    },
  ],

  results: [
    {
      title: 'Hair transplants: graft counts, timeline and the repair market',
      body: 'The ISHRS 2025 census found the average first-procedure session was 2,347 grafts and a typical FUE case 2,262; it flags 4,500 grafts in one session as a sign of an exhausted donor area. Transplanted hair sheds in the weeks after surgery, regrowth starts around three to four months, and clinics assess the final result at about twelve months. ISHRS members report that 10 percent of their cases on average are repairs of earlier black-market transplants, and 59 percent see black-market clinics in their own city.',
      sourceIds: ['ishrs-census', 'ishrs-risks', 'mittal-fly'],
    },
    {
      title: 'Dental: the veneer-versus-crown problem',
      body: 'The British Dental Association’s 2022 survey of UK dentists found 94 percent had seen patients treated abroad and 86 percent had treated resulting problems; crowns (87 percent) and implants (85 percent) were the treatments most often needing remedial work, 65 percent of repairs cost at least £500 and one in five exceeded £5,000. The core issue dentists describe is patients booking "veneers" and receiving full-coverage crowns on filed-down healthy teeth, which cannot be undone.',
      sourceIds: ['bda-tourism', 'dentistry-survey', 'euronews-dental'],
    },
    {
      title: 'Cosmetic surgery: what the complication data show',
      body: 'A BAAPS database study of 198 UK patients treated for complications after surgery abroad from 2022 to 2024 found 76 percent had been operated on in Turkey; nearly half needed further surgery under general anesthetic and one died of pulmonary embolism. In a 2024 BAAPS series of 103 patients, 83 percent chose abroad for cost, 57 percent paid under £5,000 all-in, wound problems (33 percent) and seroma (29 percent) led the complications, and 66 percent said they would not do it again.',
      sourceIds: ['baaps-2026-db', 'baaps-2024-regret', 'baaps-2023'],
    },
    {
      title: 'Bariatric surgery: the stay is the issue',
      body: 'The 2026 BMJ Open review of 655 NHS-treated medical-tourism patients found 385 were bariatric and up to 53 percent had moderate to severe complications, at an NHS cost of £1,058 to £19,549 per patient. Documented British deaths after Turkish sleeve surgery include pulmonary embolism, aortic injury and peritonitis from a ruptured bowel. Clot risk peaks in the first two weeks and stays elevated for about four, which is why four to six weeks before flying is the medical advice and five to seven nights is the package.',
      sourceIds: ['bmj-open-2026', 'itv-leary', 'itv-savage', 'nhs-dvt-leaflet'],
    },
  ],

  safety: {
    verdict:
      'Turkey is two markets. The hospital groups are accredited, insured and comparable to good private hospitals anywhere; the package-clinic market that most foreigners buy from ranges from excellent to the clinics that appear in coroners’ reports. Because British patients travel in large numbers and British institutions count outcomes, Turkey has the most detailed complication record of any destination, and it is not flattering: seven British deaths after procedures in 2025, and roughly three quarters of the complications UK plastic surgeons treat. The protective factors are specific and checkable: a certificate on the Ministry list, a named surgeon you have met before paying, a hospital setting, a single procedure per trip, and a stay long enough to be discharged on medical rather than package criteria.',
    points: [
      {
        title: 'Deaths the UK government counts',
        body: 'The Foreign Office health page for Turkey states that seven British nationals died in Turkey in 2025 following medical procedures and that others needed further treatment. A minister told Parliament that 28 British nationals died after elective procedures in Turkey between March 2019 and March 2024. Documented cases include gastric sleeve deaths from pulmonary embolism, aortic injury and peritonitis, Brazilian butt lift deaths from fat embolism, two hair-transplant deaths in Istanbul in July and November 2025, and a Canadian patient who died after a tummy tuck in Antalya in March 2026.',
        sourceIds: ['fcdo-turkey', 'falkirk-28', 'itv-bbl-2024', 'turkishminute-latchman', 'oralhealth-rama', 'mtw-antalya-death'],
      },
      {
        title: 'Turkey’s share of complications treated abroad',
        body: 'BAAPS reported in 2023 that UK hospital admissions after cosmetic surgery abroad had risen 94 percent in three years and that Turkey accounted for 78 percent of corrective operations since November 2022. Its 2022 to 2024 database study put Turkey at 76 percent. The 2026 BMJ Open review of 37 studies found Turkey was the destination in 61 percent of NHS-treated medical-tourism complication cases.',
        sourceIds: ['baaps-2023', 'baaps-2026-db', 'bmj-open-2026'],
      },
      {
        title: 'Infections, including resistant ones',
        body: 'A 2023 Journal of Travel Medicine case report describes a carbapenem-resistant Pseudomonas wound infection after cosmetic surgery in Turkey, and BAAPS noted in 2023 that some returning patients carry multi-resistant bacteria. The CDC lists antimicrobial-resistant outbreaks among medical tourists as a known risk. No Turkey-specific CDC or ECDC alert was found; the documented US outbreak investigation involved Tijuana, not Turkey.',
        sourceIds: ['jtm-pseudomonas', 'baaps-2023', 'cdc-medtourism', 'cdc-eid-mexico'],
      },
      {
        title: 'Advertising regulators have acted',
        body: 'The UK Advertising Standards Authority banned several Turkish clinics’ ads in 2023 for trivializing surgery by selling it as a holiday or VIP package. The UK health secretary pledged a crackdown on cosmetic surgery "cowboys" abroad in November 2024. In Turkey the Ministry of Health has promised stricter inspections, while critics cite an estimated 5,000 clinics in Istanbul; no named 2025 to 2026 closure campaign was found.',
        sourceIds: ['asa-ersoy', 'stv-ads', 'itv-cowboys', 'npr-hair'],
      },
      {
        title: 'What US authorities say',
        body: 'The State Department rates Türkiye Level 2, exercise increased caution, for terrorism and arbitrary detention, with no medical-tourism-specific warning. The CDC advises a travel-medicine visit four to six weeks before, checking credentials, evacuation insurance, carrying records home, and waiting 10 to 14 days after major surgery before flying. The ASPS warns that complications from surgery abroad can be severe and expensive once home.',
        sourceIds: ['state-turkey', 'cdc-medtourism', 'asps-complications'],
      },
      {
        title: 'Volumes are falling while revenue per patient rises',
        body: 'Health visitors fell about 7 percent in 2025 to 1.40 million while revenue held at about $3.02 billion, and first-half 2026 continued the pattern at about $2,600 per patient. Chains invoice in dollars or euros, so prices have not fallen with the lira; a Medicana executive warned that a stable lira would erode Turkey’s price advantage. Expect prices to drift up, not down.',
        sourceIds: ['tesvik-tuik', 'dha-tursab', 'mordor-turkey', 'aa-12bn'],
      },
    ],
  },

  redFlags: [
    'No Ministry of Health authorization certificate, or a facility you cannot find on the Ministry list.',
    'A hair transplant performed outside a licensed hospital, medical center or polyclinic: a hotel room, an office, a "studio".',
    'No named surgeon, no consultation with the surgeon before the day of surgery, or a surgeon who is not present for the whole operation.',
    'Promised graft counts above roughly 4,000 to 4,500 in a single session.',
    'Several major procedures bundled into one trip (butt lift plus tummy tuck plus liposuction) with discharge within days.',
    'Packages sold as a "holiday," "VIP package" or "summer sale," the framing the UK advertising regulator banned.',
    'A seller that exists only as a WhatsApp number and holds no USHAŞ agency certificate.',
    'Guaranteed results or a "lifetime warranty" with no written terms and no insurer behind them.',
    'Prices far below the ranges on this page.',
    '"Veneers" quoted without a per-tooth plan that says which teeth will be crowned.',
    'Acceptance on a self-declared health history with no independent pre-operative checks.',
  ],

  planning: {
    entry: {
      title: 'Entry rules',
      body: 'US ordinary passport holders are visa-exempt for up to 90 days in any 180-day period; the e-visa and its fee were dropped. The State Department rates Türkiye Level 2, exercise increased caution, for security reasons.',
      sourceIds: ['mfa-visa', 'afar-visa', 'state-turkey'],
      link: { label: 'Turkish Ministry of Foreign Affairs visa information', url: 'https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa' },
    },
    flights: {
      title: 'Flights',
      body: 'Turkish Airlines nonstops take about 10 hours from New York, 10.5 from Chicago, 13 from Los Angeles and nearly 13 from Denver. The airline served 14 US airports with about 21 daily departures in 2026 and has announced Minneapolis and Philadelphia. Fares vary too widely by season to quote.',
      sourceIds: ['tk-nyc', 'flightmapper-ord', 'airlineinfo-lax', 'aeroroutes-2026'],
    },
    whereToStay: {
      title: 'Where to stay',
      body: 'Clinics cluster on Istanbul’s European side in Şişli, Nişantaşı, Fulya, Mecidiyeköy and Levent; hospital campuses also in Maslak, Ataşehir and Bağcılar. Şişli three-star hotels ran about $47 to $85 a night and a Marriott about $138 in recent snapshots; packages normally include the hotel. Antalya is the second hub, dental-led, with demand rising September to December.',
      sourceIds: ['inyourpocket-istanbul', 'expedia-sisli', 'dha-tursab'],
    },
    payment: {
      title: 'Deposits and payment',
      body: 'Large private chains invoice foreign patients in dollars or euros, which insulates you from lira moves and means prices have not fallen with the currency. Clinics take a deposit by transfer and the balance by card or cash on site. Refund terms are rarely published; get the schedule in writing before paying.',
      sourceIds: ['mordor-turkey', 'hairlosstalk-package'],
    },
    stayAndFlyHome: {
      title: 'How long to stay',
      body: 'Hair transplant packages are built on three nights with flights two to seven days after; dental implants need 48 to 72 hours minimum and one to two weeks after bone grafting. For surgery the medical advice is longer than the package: the CDC says 10 to 14 days after major surgery, the Aesthetic Society about a month after significant cosmetic surgery, and bariatric sources four to six weeks. Clinics close around Ramazan Bayramı (March 20–22, 2026) and Kurban Bayramı (May 27–30, 2026).',
      sourceIds: ['smile-cost', 'mittal-fly', 'acibadem-fly-dental', 'cdc-medtourism', 'aesthetic-society-fly', 'barilife-fly', 'ntv-bayram'],
    },
    aftercareAtHome: {
      title: 'Aftercare back in the US',
      body: 'Bring operative notes, imaging, implant brand and lot numbers and medication lists in English. US clinicians treat emergencies but elective revisions are at full price; Medicare excludes care abroad outside narrow emergencies and most dental plans exclude it. Complications-only insurance policies exist for medical travelers and pay for post-procedure problems, not the procedure.',
      sourceIds: ['cdc-medtourism', 'asps-complications', 'medicare-travel', 'cda-tourism', 'imtj-complications-ins'],
    },
  },

  booking: [
    {
      title: 'Verify before you shortlist',
      body: 'Ask each candidate for its International Health Tourism Authorization Certificate number and, if an agency is involved, the agency’s USHAŞ certificate; find both on the Ministry of Health lists. For hair transplants confirm the hospital or medical center the unit sits in. Drop anyone who cannot produce the numbers in the first reply.',
      sourceIds: ['moh-tourism', 'reg-2025-plus'],
      link: { label: 'Ministry of Health lists', url: 'https://shgmturizmdb.saglik.gov.tr/' },
    },
    {
      title: 'Request three written, itemized quotes for the same plan',
      body: 'Send the same photos, X-ray or questionnaire to three licensed providers and ask for an itemized quote in one currency: procedure, hospital nights, hotel nights, transfers, interpreter, medication, aftercare, and what is excluded. For hair, the graft count and technique; for dental, a tooth-by-tooth plan with materials and brands; for surgery, the anesthesia type and who administers it.',
      sourceIds: ['acibadem-package', 'bda-tourism'],
    },
    {
      title: 'Insist on a video consultation with the named operating surgeon',
      body: 'Before any deposit, speak to the surgeon who will operate, confirm their specialty and society memberships, and ask which steps they personally perform. UK inquests have repeatedly found patients who met the surgeon only on the day. If the clinic routes you to a "coordinator" instead, that is your answer.',
      sourceIds: ['lbc-bbl-2024', 'pslhub-morrissey', 'karar-technicians'],
    },
    {
      title: 'Get the insurance, revision and refund terms in writing',
      body: 'Ask for the complication insurance policy that the 2025 regulation requires, the revision or guarantee terms with their exclusions, and the deposit refund schedule. A guarantee with no written terms is a sales line. Keep every message; it is the record you will need if anything goes wrong.',
      sourceIds: ['birgun-2025', 'reg-2025-plus', 'mondaq-law'],
    },
    {
      title: 'See a travel-medicine clinician at home first',
      body: 'The CDC advises a visit four to six weeks before a medical trip. Use it to get a frank opinion on whether you are a candidate, to arrange any pre-operative tests the clinic wants, and to line up who will see you when you return. Disclose everything to the clinic in writing; self-declared histories that omit conditions have been a factor in deaths.',
      sourceIds: ['cdc-medtourism', 'pslhub-morrissey'],
    },
    {
      title: 'Pay the deposit by a traceable method and book flights around the medical stay',
      body: 'Pay by bank transfer or card to the legal entity on the certificate, not to an individual. Book the return flight for the stay the surgeon requires, not the package minimum: 10 to 14 days after major surgery per the CDC, longer for bariatric and combined cosmetic procedures. Buy evacuation and complications cover before you fly.',
      sourceIds: ['cdc-medtourism', 'aesthetic-society-fly', 'imtj-complications-ins'],
    },
    {
      title: 'On arrival, confirm the facility and the surgeon match the paperwork',
      body: 'Check that the hospital you are taken to is the one on the quote and the certificate, that the consent form names the surgeon you spoke to, and that an anesthesiologist is present for general anesthesia. Do not sign consent for additional procedures proposed on the day.',
      sourceIds: ['lbc-bbl-2024', 'cdc-medtourism'],
    },
  ],

  vetChecklist: [
    'Facility certificate number and expiry, and the agency’s USHAŞ certificate number, both matched to the Ministry lists.',
    'The hospital, medical center or polyclinic where the procedure happens and its emergency capacity.',
    'The operating surgeon’s name, specialty, Ministry registration and society memberships, and which steps they personally perform.',
    'A video consultation with that surgeon before any deposit.',
    'Complication insurance: insurer, policy number, coverage, and how a foreign patient claims from home.',
    'Itemized inclusions and exclusions, deposit, refund schedule, and revision or guarantee terms with exclusions.',
    'For dental: tooth-by-tooth plan, implant brand, crown material. For breast work: implant brand and lot numbers.',
    'Discharge criteria and the minimum stay before you are cleared to fly.',
    'Operative notes, imaging and medication lists in English before you leave Turkey.',
    'Who to contact after you return, in what language, and how fast they answer.',
  ],

  faqs: [
    {
      question: 'Is medical tourism to Turkey safe?',
      answer: 'Outcomes are uneven and well documented. Turkey has about 38 JCI-accredited hospitals and a licensing regime with mandatory complication insurance since 2025, and millions of procedures go well. It also accounts for 61 to 78 percent of the UK patients treated for complications after surgery abroad, and the UK Foreign Office counts seven British deaths after procedures in 2025. The protective factors are checkable in advance: a certificate on the Ministry list, a named surgeon you have met, a hospital setting, one procedure per trip, and a stay set by the surgeon rather than the package.',
    },
    {
      question: 'Why is a hair transplant in Turkey so cheap?',
      answer: 'Lower labor and facility costs, a weak lira, intense competition among Istanbul clinics, package pricing that bundles hotel and transfers, and the division of labor: by regulation a physician opens the channels while certified technicians may harvest and implant grafts. The Ministry’s own director general said in 2018 that a physician typically performs about the first two hours of an eight-hour procedure, whereas abroad surgeons do the whole operation, "which makes it more expensive." Packages run $2,500 to $4,500 against $6,000 to $12,000 in the US.',
    },
    {
      question: 'Do Americans need a visa to go to Turkey for treatment?',
      answer: 'No. Turkey’s Foreign Ministry lists US ordinary passport holders as visa-exempt for stays up to 90 days in any 180-day period, and the former e-visa and its fee were dropped. Bring a passport valid for at least six months. The US State Department rates Türkiye Level 2, exercise increased caution, for terrorism and arbitrary detention, with no medical-tourism-specific warning.',
    },
    {
      question: 'How do I check that a Turkish clinic is licensed?',
      answer: 'Ask for its International Health Tourism Authorization Certificate number and find it on the Ministry of Health Health Tourism Department’s list of authorized facilities, updated October 5, 2026, or on the HealthTürkiye portal. Agencies need a separate USHAŞ certificate. Certificates are branch-specific, so match the exact campus and legal name. For hair transplants, confirm the unit sits inside a licensed hospital, medical center or polyclinic as the 2023 regulation requires. The certificate confirms authorization, not quality.',
    },
    {
      question: 'Who actually performs my hair transplant in Turkey?',
      answer: 'By regulation, a physician must open the channels; certified non-physician health staff may harvest follicles and place grafts under supervision. In practice the surgeon’s involvement ranges from the whole procedure at named-surgeon clinics to the first hour or two at high-volume ones, and prices track that difference. Ask in writing which steps the named doctor personally performs and whether they are present throughout. ISHRS members report that 10 percent of their cases are repairs of earlier black-market transplants.',
    },
    {
      question: 'How many grafts can I realistically get in one session?',
      answer: 'The ISHRS 2025 census found the average first session was 2,347 grafts and a typical FUE case 2,262. The society flags a promised 4,500 grafts in one session as a red flag for an exhausted donor area. Turkish quotes often promise more; ask how the count was estimated from your photos and what the donor area can support over a lifetime, not just this trip.',
    },
    {
      question: 'What is "Turkey teeth" and how do I avoid it?',
      answer: 'UK slang for aggressive full-coverage crowns on healthy teeth that were filed down after the patient booked "veneers." The British Dental Association’s 2022 survey found crowns and implants were the treatments UK dentists most often had to repair after work abroad, with one in five repairs costing over £5,000. Avoid it by getting a written tooth-by-tooth plan that states veneer, crown or implant for each tooth, the materials and brands, and the X-ray it is based on, before you travel.',
    },
    {
      question: 'How much does a gastric sleeve cost in Turkey and how long should I stay?',
      answer: 'All-inclusive sleeve packages run $3,200 to $7,500 against a US self-pay average near $14,900. Packages typically include five to seven nights, but clot risk peaks in the first two weeks after surgery and stays elevated for about four, so bariatric sources advise four to six weeks before flying. UK inquests into deaths after Turkish sleeve surgery have involved pulmonary embolism, aortic injury and peritonitis. If you cannot stay long enough to be discharged on medical criteria, the price is not the problem to solve.',
    },
    {
      question: 'When can I fly home after surgery in Turkey?',
      answer: 'Hair transplant clinics clear patients two to seven days after; dental implants need 48 to 72 hours minimum. For major surgery the CDC says 10 to 14 days because of clot risk, the Aesthetic Society about a month after significant cosmetic surgery, and bariatric sources four to six weeks. Turkish packages are usually shorter than that advice, which UK surgeons identify as the structural risk. Book the return flight for the stay the surgeon requires, not the package minimum.',
    },
    {
      question: 'Can I get donor eggs or a surrogate in Turkey?',
      answer: 'No. Turkish law permits assisted reproduction only for legally married heterosexual couples using their own eggs and sperm. Egg, sperm and embryo donation and surrogacy are prohibited, sex selection is limited to sex-linked disease, and a 2010 amendment made receiving donor gametes abroad a criminal matter for Turkish citizens. These rules apply to foreigners treated in Turkey. IVF cycles for eligible couples run $2,500 to $5,500 plus medication, with 15 to 20 days on site.',
    },
    {
      question: 'Will my US insurance cover a procedure in Turkey or complications afterward?',
      answer: 'Generally no. Elective procedures abroad are not covered, Medicare excludes care outside the US except narrow emergencies, and most dental plans exclude care abroad. Complications at home are usually paid out of pocket; the ASPS estimates treating medical-tourism complications costs the US system $1.3 billion a year. Specialist complications insurance for medical travelers exists and pays only for post-procedure problems, not the procedure itself.',
    },
    {
      question: 'Can I sue a Turkish clinic if something goes wrong?',
      answer: 'It is possible in Turkish courts, in Turkish, usually through a lawyer acting under power of attorney, and you are entitled to your records. In practice it is slow, several UK inquests could not trace the surgeon or obtain a cause of death, and the 2025 complication-insurance requirement’s claims process for foreigners is not yet documented. Package guarantees are clinic promises with no enforcement beyond those courts. The leverage you have is the paperwork you collect before paying.',
    },
    {
      question: 'Do Turkish clinics accept credit cards, and in what currency?',
      answer: 'Large private groups invoice foreign patients in US dollars or euros, which means prices have not fallen with the lira. Deposits are usually by bank transfer to hold a date, with the balance paid at the clinic by card or cash. Refund terms are rarely published and should be obtained in writing. Pay the legal entity named on the certificate, never an individual.',
    },
    {
      question: 'Is Antalya a good alternative to Istanbul?',
      answer: 'For dental work, often. Turkey’s travel-agency association describes Antalya as the second-largest health-tourism market after Istanbul, dental-led, with foreigners making up about 90 percent of patients at its dental clinics and demand rising from September to December. For hair transplants and complex surgery the volume, named surgeons and hospital infrastructure are concentrated in Istanbul. A Canadian patient died after a tummy tuck at a private hospital in Antalya in March 2026, so the same licensing checks apply.',
    },
  ],

  sources: [
    { id: 'ushas-data', label: 'Health tourism data, 2019–2024', url: 'https://www.ushas.gov.tr/en/saglik-turizmi-verileri/', publisher: 'USHAŞ (Ministry of Health)', date: '2026-10-30', kind: 'official' },
    { id: 'tesvik-tuik', label: '2015–2025 health tourism figures (citing TÜİK)', url: 'https://tesvikakademi.com/haber/2015-2025-yillari-arasi-saglik-turizmi-verileri/', publisher: 'Teşvik Akademi', date: '2026-02-06', kind: 'press' },
    { id: 'dha-tursab', label: 'Revenue per health-tourism patient rises (TÜRSAB advisor; Antalya figures)', url: 'https://www.dha.com.tr/foto-galeri/saglik-turizminde-hasta-basina-gelir-artti-2964978', publisher: 'DHA', date: '2026-10-18', kind: 'press' },
    { id: 'aa-12bn', label: 'Türkiye targets $12 billion health tourism revenue in 2025 (Medicana executive on senders and lira)', url: 'https://www.aa.com.tr/tr/saglik/turkiye-saglik-turizminden-2025te-12-milyar-dolar-gelir-hedefliyor/3491336', publisher: 'Anadolu Agency', date: '2025-02-24', kind: 'press' },
    { id: 'npr-hair', label: 'What makes this country a top destination for hair transplants', url: 'https://www.npr.org/2025/10/06/nx-s1-5544362/turkey-hair-transplants-tourism', publisher: 'NPR', date: '2025-10-06', kind: 'press' },
    { id: 'ntv-5000', label: 'Hair transplants should be done in hospitals; 5,000 a day in Istanbul', url: 'https://www.ntv.com.tr/saglik/sac-ekimi-hastane-ortaminda-yapilmali-istanbulda-her-gun-5-bin-sac-ekimi-yapiliyor-tVbV8hKzckGlL_g1iYl0tA', publisher: 'NTV', date: '2019-06-27', kind: 'press' },
    { id: 'uste-data', label: 'Health tourism in figures: authorized facilities as of July 2024', url: 'https://www.uste.org.tr/verilerle-saglik-turizmi/', publisher: 'USTE', date: '2024', kind: 'press' },
    { id: 'asps-costs', label: 'Cosmetic procedure cost pages: rhinoplasty, tummy tuck, breast augmentation, facelift, liposuction (average surgeon fees)', url: 'https://www.plasticsurgery.org/cosmetic-procedures/rhinoplasty/cost', publisher: 'American Society of Plastic Surgeons', date: '2026-10-30', kind: 'study' },
    { id: 'smile-cost', label: 'Hair transplant Turkey cost 2026 (package anatomy, stay)', url: 'https://www.smilehairclinic.com/en/hair-transplant-turkey-cost/', publisher: 'Smile Hair Clinic', date: '2026', kind: 'clinic' },
    { id: 'signature-hair', label: 'Hair transplant cost: Turkey vs USA (2026 report)', url: 'https://signaturehairrestoration.com/blog/hair-transplant-cost-turkey-vs-usa', publisher: 'Signature Hair Restoration', date: '2026', kind: 'marketplace' },
    { id: 'bosley-cost', label: 'Hair transplant cost (US)', url: 'https://www.bosley.com/hair-transplant-cost/', publisher: 'Bosley', date: '2026', kind: 'clinic' },
    { id: 'ishrs-census', label: '2025 Practice Census (2024 data): graft counts, black-market repairs', url: 'https://ishrs.org/wp-content/uploads/2025/05/report-2025-ishrs-practice-census_05-12-25-final.pdf', publisher: 'International Society of Hair Restoration Surgery', date: '2025-05', kind: 'study' },
    { id: 'ishrs-risks', label: 'Fight the Fight: beware of the risks (graft-count red flag)', url: 'https://fightthefight.ishrs.org/risks/', publisher: 'ISHRS', date: '2026-10-30', kind: 'study' },
    { id: 'placidway-veneers', label: 'Veneers cost in Turkey (June 2026 dataset)', url: 'https://www.placidway.com/article/3875/Best-Dental-Veneers-in-Turkey-Costs-Clinics', publisher: 'PlacidWay', date: '2026-06', kind: 'marketplace' },
    { id: 'tlc-veneers', label: 'Veneers cost in Turkey 2026', url: 'https://turkeyluxuryclinics.com/en/blog/veneers-cost-in-turkey', publisher: 'Turkey Luxury Clinics', date: '2026', kind: 'marketplace' },
    { id: 'cliniqueplus-implants', label: 'Dental implant cost in Turkey vs USA/Canada 2026', url: 'https://cliniqueplus.com/blog/dental-implants-in-turkey-price/', publisher: 'Cliniqueplus', date: '2026', kind: 'marketplace' },
    { id: 'realdentalcosts', label: 'Dental implants (US cost, reviewed May 2026)', url: 'https://realdentalcosts.com/en/dental-implants/', publisher: 'RealDentalCosts', date: '2026-05', kind: 'marketplace' },
    { id: 'acibadem-allon4', label: 'All-on-4 cost Turkey: 2026 prices vs USA, UK, Germany', url: 'https://acibademinternational.com/health-library/how-much-does-all-on-4-dental-implants-cost-in-turkey-2026-prices-vs-usa-uk-germany/', publisher: 'Acıbadem International', date: '2026', kind: 'clinic' },
    { id: 'bda-tourism', label: 'UK dentists picking up the pieces from dental tourism boom (2022 survey)', url: 'https://www.bda.org/media-centre/uk-dentists-picking-up-the-pieces-from-dental-tourism-boom', publisher: 'British Dental Association', date: '2022', kind: 'study' },
    { id: 'dentistry-survey', label: 'Dental tourism: nine in 10 dentists have treated patients who travelled abroad', url: 'https://dentistry.co.uk/2022/07/14/dental-tourism-nine-in-10-dentists-have-treated-patients-who-travelled-abroad-for-treatment/', publisher: 'Dentistry.co.uk', date: '2022-07-14', kind: 'press' },
    { id: 'euronews-dental', label: 'In Turkey, concerns grow over flaws in its booming dental tourism industry', url: 'https://www.euronews.com/travel/2022/10/13/in-turkey-concerns-grow-over-flaws-in-its-booming-dental-tourism-industry', publisher: 'Euronews', date: '2022-10-13', kind: 'press' },
    { id: 'dilber-rhino', label: 'Rhinoplasty cost comparison 2025–2026', url: 'https://muhammetdilber.com/en/rhinoplasty-costs-what-to-expect/', publisher: 'Dr. Muhammet Dilber (clinic)', date: '2026', kind: 'clinic' },
    { id: 'hayatmed-tummy', label: 'Tummy tuck cost Turkey 2026', url: 'https://www.hayatmed.com/blog/plastic-surgeries/tummy-tuck/cost-of-a-tummy-tuck/', publisher: 'Hayatmed', date: '2026', kind: 'marketplace' },
    { id: 'tlc-breast', label: 'How much is a boob job in 2026', url: 'https://turkeyluxuryclinics.com/en/blog/how-much-is-boob-job', publisher: 'Turkey Luxury Clinics', date: '2026', kind: 'marketplace' },
    { id: 'tlc-facelift', label: 'How much does a facelift cost? USA vs Turkey vs UK (2026)', url: 'https://turkeyluxuryclinics.com/en/blog/how-much-does-facelift-cost', publisher: 'Turkey Luxury Clinics', date: '2026', kind: 'marketplace' },
    { id: 'acibadem-sleeve', label: 'Gastric sleeve surgery cost Turkey: 2026 guide', url: 'https://acibademinternational.com/health-library/how-much-does-gastric-sleeve-surgery-cost-in-turkey-2026-prices-vs-usa-uk-germany/', publisher: 'Acıbadem International', date: '2026', kind: 'clinic' },
    { id: 'hayatmed-sleeve', label: 'Gastric sleeve surgery cost in Turkey: 2026', url: 'https://www.hayatmed.com/blog/gastric-sleeve/cost-of-a-gastric-sleeve/', publisher: 'Hayatmed', date: '2026', kind: 'marketplace' },
    { id: 'bettercare-sleeve', label: 'How much does gastric sleeve surgery cost? (US self-pay)', url: 'https://bettercare.com/costs/gastric-sleeve-cost', publisher: 'BetterCare', date: '2026', kind: 'marketplace' },
    { id: 'independent-bariatric', label: 'Investigation finds at least seven British patients have died after weight loss surgery in Turkey', url: 'https://www.aol.com/warning-investigation-finds-least-seven-170535802.html', publisher: 'The Independent (via AOL)', date: '2023-03-21', kind: 'press' },
    { id: 'wellnessvision-lasik', label: 'LASIK eye surgery cost: US $4,492 vs Turkey', url: 'https://wellnessvision.health/articles/lasik-eye-surgery-turkey-vs-us/', publisher: 'Wellness Vision', date: '2026', kind: 'marketplace' },
    { id: 'kaskaloglu-eye', label: 'Eye surgery in Turkey cost (2026 guide)', url: 'https://www.kaskaloglu.com/en/eye-surgery-in-turkey-cost-2026-guide/', publisher: 'Kaşkaloğlu Eye Hospital', date: '2026', kind: 'clinic' },
    { id: 'acibadem-ivf', label: 'IVF in Turkey: costs, success rates and the legal facts', url: 'https://acibademinternational.com/best-ivf-clinics-in-turkey/', publisher: 'Acıbadem International', date: '2026-10-30', kind: 'clinic' },
    { id: 'fca-ivf', label: 'IVF in Turkey: costs, laws and who can be treated', url: 'https://www.fertilityclinicsabroad.com/ivf-abroad/ivf-turkey/', publisher: 'Fertility Clinics Abroad', date: '2026-10-30', kind: 'marketplace' },
    { id: 'pet-ivf-law', label: 'Overseas artificial insemination outlawed in Turkey', url: 'https://www.progress.org.uk/overseas-artificial-insemination-outlawed-in-turkey/', publisher: 'Progress Educational Trust', date: '2010', kind: 'press' },
    { id: 'goodrx-ivf', label: 'How much does IVF cost? (ASRM and FertilityIQ figures)', url: 'https://goodrx.com/conditions/fertility/ivf-costs', publisher: 'GoodRx', date: '2025', kind: 'press' },
    { id: 'acibadem-hip', label: 'Hip replacement cost in Turkey (Q3 2026 index)', url: 'https://acibademinternational.com/patient-guides/hip-replacement-cost-in-turkey/', publisher: 'Acıbadem International', date: '2026', kind: 'clinic' },
    { id: 'placidway-joints', label: 'Joint replacement surgery in Turkey', url: 'https://www.placidway.com/article/6263/Joint-Replacement-Surgery-in-Turkey-for-Patients-Seeking-Advanced-Orthopedic-Solutions', publisher: 'PlacidWay', date: '2026-10-30', kind: 'marketplace' },
    { id: 'curemeabroad-cabg', label: 'Heart bypass surgery cost by country', url: 'https://curemeabroad.com/blogs/heart-bypass-surgery-cost-by-country', publisher: 'CureMeAbroad', date: '2026-10-30', kind: 'marketplace' },
    { id: 'acibadem-checkup', label: 'Check-up Istanbul (package prices)', url: 'https://acibademinternational.com/de/check-up-istanbul/', publisher: 'Acıbadem International', date: '2026-10-30', kind: 'clinic' },
    { id: 'mta-checkup', label: 'Executive VIP health check-up Turkey guide', url: 'https://myturkeyadventure.com/blog/executive-vip-health-check-up-turkey-guide', publisher: 'My Turkey Adventure', date: '2026-10-30', kind: 'marketplace' },
    { id: 'reg-2017', label: 'Regulation on International Health Tourism and Tourist Health, Official Gazette 30123', url: 'https://www.alomaliye.com/2017/07/13/uluslararasi-saglik-turizmi/amp/', publisher: 'Official Gazette (via Alomaliye)', date: '2017-07-13', kind: 'official' },
    { id: 'birgun-2025', label: 'New international health tourism regulation: complication insurance mandatory', url: 'https://www.birgun.net/haber/uluslararasi-saglik-turizmi-ve-turistin-sagligi-hakkinda-yeni-yonetmelik-cerrahi-islemler-icin-komplikasyon-sigortasi-yaptirilmasi-zorunlu-olacak-618330', publisher: 'BirGün', date: '2025-04-26', kind: 'press' },
    { id: 'reg-2025-plus', label: 'New regulation in health tourism: authorization certificate (Official Gazette 32882 summary)', url: 'https://www.plusglobal.com.tr/en/health-tourism-turkey-regulation-2025-authorization', publisher: 'Plus Global', date: '2025', kind: 'press' },
    { id: 'tuska-mandatory', label: 'Which healthcare institutions have mandatory accreditation', url: 'https://tuska.tuseb.gov.tr/en/news/which-healthcare-institutions-have-mandatory-accreditation-20250804', publisher: 'TÜSKA (Türkiye Health Care Quality and Accreditation Institute)', date: '2025-08-04', kind: 'official' },
    { id: 'moh-tourism', label: 'Health Tourism Department: authorized facilities and intermediaries', url: 'https://shgmturizmdb.saglik.gov.tr/', publisher: 'Republic of Türkiye Ministry of Health', date: '2026-10-05', kind: 'official' },
    { id: 'fcdo-turkey', label: 'Turkey travel advice: health (deaths after medical procedures)', url: 'https://www.gov.uk/foreign-travel-advice/turkey/health', publisher: 'UK Foreign, Commonwealth & Development Office', date: '2026-10-30', kind: 'official' },
    { id: 'mtw-jci', label: 'Top 20 countries with the most JCI-accredited hospitals', url: 'https://medicaltourismwatch.com/countries-most-jci-accredited-hospitals/', publisher: 'Medical Tourism Watch', date: '2026-08-26', kind: 'press' },
    { id: 'hopkins-anadolu', label: 'Anadolu Medical Center affiliation', url: 'https://www.hopkinsmedicine.org/international/health-care-consulting/emea/anadolu-medical-center', publisher: 'Johns Hopkins Medicine International', date: '2026-10-30', kind: 'official' },
    { id: 'medipol-jci', label: 'Medipol Mega Hospitals Complex JCI Academic Medical Center certificate', url: 'https://www.medipol.edu.tr/sites/default/files/2023-04/medipol-mega-hospitals-complex-certificate.pdf', publisher: 'Istanbul Medipol University', date: '2023-04', kind: 'official' },
    { id: 'acibadem-press', label: 'Press page (seven JCI-accredited hospitals, self-reported)', url: 'https://acibademinternational.com/press/', publisher: 'Acıbadem International', date: '2026-10-30', kind: 'clinic' },
    { id: 'florence-intl', label: 'International patient page (JCI since 2004)', url: 'https://www.florence.com.tr/internation-patient', publisher: 'Florence Nightingale Hospitals', date: '2026-10-30', kind: 'clinic' },
    { id: 'reg-hair-2023', label: 'Regulation on Hair Transplant Units, Official Gazette 32182', url: 'https://www.lexpera.com.tr/resmi-gazete/metin/sac-ekimi-birimleri-hakkinda-yonetmelik-32182', publisher: 'Official Gazette (via Lexpera)', date: '2023-05-06', kind: 'official' },
    { id: 'aa-hair-2023', label: 'New standards for hair transplant centers', url: 'https://www.aa.com.tr/tr/saglik/sac-ekimi-merkezlerine-yeni-standart-getirildi/2891037', publisher: 'Anadolu Agency', date: '2023-05-06', kind: 'press' },
    { id: 'rg-hair-2025', label: 'Amendment to the Regulation on Hair Transplant Units, Official Gazette 33015', url: 'https://www.resmigazete.gov.tr/eskiler/2025/09/20250912-2.htm', publisher: 'Resmî Gazete', date: '2025-09-12', kind: 'official' },
    { id: 'haberturk-2018', label: 'Ministry of Health warns citizens about hair transplants (physician does first two hours)', url: 'https://www.haberturk.com/saglik/saglik-bakanligi-sac-ekimi-konusunda-vatandaslari-uyardi-2021110', publisher: 'Habertürk', date: '2018-06-19', kind: 'press' },
    { id: 'karar-technicians', label: 'Most of hair transplant surgery now done by technicians, surgeons warn', url: 'https://www.karar.com/guncel-haberler/sac-ekimi-ameliyatinin-buyuk-kismi-artik-doktorlar-tarafindan-1997379', publisher: 'Karar', date: '2025-10-07', kind: 'press' },
    { id: 'mondaq-law', label: 'How Turkish law protects foreign patients (law-firm guidance)', url: 'https://www.mondaq.com/turkey/healthcare/1707378/', publisher: 'Mondaq', date: '2025', kind: 'press' },
    { id: 'falkirk-28', label: 'Health tourism ad ban urged after death in Turkey (minister: 28 deaths since 2019)', url: 'https://falkirkherald.co.uk/health/health-tourism-ad-ban-urged-after-horrific-death-of-denny-woman-in-turkey-4561742', publisher: 'Falkirk Herald', date: '2024', kind: 'press' },
    { id: 'itv-leary', label: 'Woman died after complications during £2,000 gastric sleeve surgery in Turkey, inquest hears', url: 'https://www.itv.com/news/granada/2024-04-19/woman-died-after-complications-from-surgery-in-turkey-inquest-hears', publisher: 'ITV News', date: '2024-04-19', kind: 'press' },
    { id: 'itv-savage', label: 'Mum died hours after weight loss surgery in Turkey', url: 'https://www.itv.com/news/wales/2024-11-12/mum-died-hours-after-weight-loss-surgery-in-turkey', publisher: 'ITV News', date: '2024-11-12', kind: 'press' },
    { id: 'ribeiro-inquest', label: 'Morgan Ribeiro inquest (surgeon untraceable, peritonitis)', url: 'https://uk.headtopics.com/news/grief-stricken-mother-takes-her-life-after-daughter-s-death-87659025', publisher: 'UK press via Headtopics', date: '2024', kind: 'press' },
    { id: 'itv-bbl-2024', label: 'British mum dies during Brazilian butt lift surgery in Turkey', url: 'https://www.itv.com/news/2024-08-18/tragedy-in-turkey-british-mum-dies-during-brazilian-butt-lift-surgery', publisher: 'ITV News', date: '2024-08-18', kind: 'press' },
    { id: 'lbc-bbl-2024', label: 'UK woman died after butt lift surgery in Turkey after surgeon walked out', url: 'https://www.lbc.co.uk/article/uk-woman-died-after-butt-lift-surgery-in-turkey-after-surgeon-walked-out-5HjctYT_2/', publisher: 'LBC', date: '2024-11-13', kind: 'press' },
    { id: 'turkishminute-latchman', label: 'British man dies after falling ill at Istanbul hair transplant clinic', url: 'https://turkishminute.com/2025/08/04/british-man-dies-after-falling-ill-at-istanbul-hair-transplant-clinic/', publisher: 'Turkish Minute', date: '2025-08-04', kind: 'press' },
    { id: 'oralhealth-rama', label: 'Another British man, 36, dies after hair transplant and dental treatment in Turkey', url: 'https://www.oralhealthgroup.com/dental-governance-regulations/another-british-man-36-dies-after-hair-transplant-and-dental-treatment-in-turkey-1003991812/', publisher: 'Oral Health Group', date: '2025-11-17', kind: 'press' },
    { id: 'mtw-antalya-death', label: 'Another cosmetic surgery death in Turkey puts medical tourism risks back in focus', url: 'https://medicaltourismwatch.com/another-cosmetic-surgery-death-turkey-medical-tourism-risks/', publisher: 'Medical Tourism Watch', date: '2026-08-26', kind: 'press' },
    { id: 'baaps-2026-db', label: 'Cheap overseas surgery leading to raft of serious complications, database shows (BAAPS, 198 patients 2022–2024)', url: 'https://www.doctors.net.uk/news/cheap-overseas-surgery-leading-to-raft-of-serious-complications-database-shows', publisher: 'Doctors.net.uk', date: '2026-07-07', kind: 'study' },
    { id: 'baaps-2023', label: 'Cosmetic tourism update (admissions up 94%; Turkey 78% of corrections)', url: 'https://baaps.org.uk/about/news/1881/baaps_cosmetic_tourism_update/', publisher: 'British Association of Aesthetic Plastic Surgeons', date: '2023-11-13', kind: 'study' },
    { id: 'baaps-2024-regret', label: 'Cheap cosmetic surgery abroad? Over 50% of patients regret it', url: 'https://baaps.org.uk/media/press_releases/1889/cheap_cosmetic_surgery_abroad_over_50_of_patients_regret_it_alarming_study_finds/', publisher: 'British Association of Aesthetic Plastic Surgeons', date: '2024-11-12', kind: 'study' },
    { id: 'bmj-open-2026', label: 'Complications of medical tourism may cost NHS up to £20,000 per patient (BMJ Open rapid review)', url: 'https://www.bangor.ac.uk/news/2026-02-10-research-finds-complications-of-medical-tourism-may-cost-nhs-up-to-ps20000-per', publisher: 'Bangor University / BMJ Open', date: '2026-02-10', kind: 'study' },
    { id: 'jtm-pseudomonas', label: 'ST773 Pseudomonas aeruginosa wound infection as a result of medical tourism to Turkey', url: 'https://pubmed.ncbi.nlm.nih.gov/37480589/', publisher: 'Journal of Travel Medicine', date: '2023', kind: 'study' },
    { id: 'cdc-medtourism', label: "Travelers' Health: Medical Tourism", url: 'https://wwwnc.cdc.gov/travel/page/medical-tourism', publisher: 'US Centers for Disease Control and Prevention', date: '2023-06-01', kind: 'official' },
    { id: 'cdc-eid-mexico', label: 'Extensively drug-resistant Pseudomonas aeruginosa and medical tourism from the United States to Mexico, 2018–2019', url: 'https://wwwnc.cdc.gov/eid/article/28/1/21-1880', publisher: 'CDC Emerging Infectious Diseases', date: '2022-01', kind: 'study' },
    { id: 'asa-ersoy', label: 'ASA ruling: Ersoy Health Services Tourism Ltd', url: 'https://www.asa.org.uk/rulings/ersoy-health-services-tourism-ltd-a23-1199872-ersoy-health-services-tourism-ltd.html', publisher: 'UK Advertising Standards Authority', date: '2023', kind: 'official' },
    { id: 'stv-ads', label: "'Irresponsible' adverts for Turkish cosmetic surgery clinics banned", url: 'https://news.stv.tv/world/adverts-for-turkish-cosmetic-surgery-clinics-banned-for-irresponsibly-trivialising-surgery-abroad', publisher: 'STV News', date: '2023-09', kind: 'press' },
    { id: 'itv-cowboys', label: "Health secretary to clamp down on cosmetic surgery 'cowboys' abroad", url: 'https://itv.com/news/2024-11-15/health-secretary-to-clamp-down-on-cosmetic-surgery-cowboys', publisher: 'ITV News', date: '2024-11-15', kind: 'press' },
    { id: 'mfa-visa', label: 'Visa information for foreigners (US citizens visa-exempt 90 days)', url: 'https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa', publisher: 'Republic of Türkiye Ministry of Foreign Affairs', date: '2026-10-30', kind: 'official' },
    { id: 'afar-visa', label: 'Türkiye drops visa requirement for travelers from the US and Canada', url: 'https://www.afar.com/magazine/turkiye-drops-visa-requirement-for-u-s-and-canada', publisher: 'Afar', date: '2026-10-30', kind: 'press' },
    { id: 'state-turkey', label: 'Türkiye travel advisory (Level 2)', url: 'https://travel.state.gov/en/international-travel/travel-advisories/turkey.html', publisher: 'US Department of State', date: '2026-10-30', kind: 'official' },
    { id: 'tk-nyc', label: 'New York to Istanbul flights', url: 'https://www.turkishairlines.com/en-ro/flights/city/from-newyork-to-istanbul-flights', publisher: 'Turkish Airlines', date: '2026-10-30', kind: 'clinic' },
    { id: 'flightmapper-ord', label: 'TK6 Chicago O’Hare to Istanbul (10h40)', url: 'https://info.flightmapper.net/flight/Turkish_Airlines_TK_6', publisher: 'FlightMapper', date: '2026-10-30', kind: 'marketplace' },
    { id: 'airlineinfo-lax', label: 'LAX to IST (13h10)', url: 'https://www.airlineinformation.com/LAX-IST', publisher: 'Airline Information', date: '2026-10-30', kind: 'marketplace' },
    { id: 'aeroroutes-2026', label: 'Turkish Airlines additional US service reductions from June 2026', url: 'https://www.aeroroutes.com/eng/260515-tkns26us', publisher: 'AeroRoutes', date: '2026-05-15', kind: 'press' },
    { id: 'kings-transfer', label: 'Istanbul Airport to Taksim transfer 2026 (distance and time)', url: 'https://kingsworldtransfer.com/blog/istanbul-havalimanindan-taksime-transfer', publisher: 'Kings World Transfer', date: '2026', kind: 'marketplace' },
    { id: 'inyourpocket-istanbul', label: 'Istanbul: the heart of Turkey’s hair transplant (clinic districts)', url: 'https://www.inyourpocket.com/turkey/istanbul/articles/istanbul-the-heart-of-turkeys-hair-transplant', publisher: 'In Your Pocket', date: '2026-10-30', kind: 'press' },
    { id: 'expedia-sisli', label: '3-star hotels in Şişli (price snapshots)', url: 'https://www.expedia.com/3Star-Sisli-Istanbul-Hotels.s30-n6054813-0.Travel-Guide-Filter-Hotels', publisher: 'Expedia', date: '2026-10-30', kind: 'marketplace' },
    { id: 'mordor-turkey', label: 'Turkey medical tourism market (hard-currency invoicing)', url: 'https://www.mordorintelligence.com/industry-reports/turkey-medical-tourism-market', publisher: 'Mordor Intelligence', date: '2025', kind: 'marketplace' },
    { id: 'hairlosstalk-package', label: 'Hair Center of Turkey profile (package inclusions, deposit advice)', url: 'https://www.hairlosstalk.com/interact/members/hair-center-of-turkey.169918/', publisher: 'HairLossTalk', date: '2026-10-30', kind: 'forum' },
    { id: 'acibadem-package', label: 'How much is a hair transplant in Turkey? Package anatomy and honest price ranges', url: 'https://acibademinternational.com/blog/how-much-is-a-hair-transplant-in-turkey-package-anatomy-and-honest-price-ranges/', publisher: 'Acıbadem International', date: '2026-10-30', kind: 'clinic' },
    { id: 'pslhub-morrissey', label: 'Prevention of future deaths notice: woman from Wales died after gastric sleeve surgery in Turkey', url: 'https://www.pslhub.org/blogs/entry/7664-woman-from-wales-died-after-gastric-sleeve-surgery-in-turkey-inquest-hears/', publisher: 'Patient Safety Learning', date: '2024', kind: 'press' },
    { id: 'aesthetic-society-fly', label: 'How long after procedures can I take a flight?', url: 'https://www.theaestheticsociety.org/ask-question/98406', publisher: 'The Aesthetic Society', date: '2026-10-30', kind: 'study' },
    { id: 'barilife-fly', label: 'Can you fly after bariatric surgery?', url: 'https://www.barilife.com/blog/can-you-fly-after-bariatric-surgery/', publisher: 'Bari Life', date: '2026-10-30', kind: 'marketplace' },
    { id: 'nhs-dvt-leaflet', label: 'Travel and deep vein thrombosis leaflet', url: 'https://wwl.nhs.uk/media/.leaflets/6565aa2ddac6d2.93598318.pdf', publisher: 'Wrightington, Wigan and Leigh NHS', date: '2026-10-30', kind: 'official' },
    { id: 'mittal-fly', label: 'When is it safe to fly after a hair transplant?', url: 'https://mittalhairclinic.com/?p=5759', publisher: 'Mittal Hair Clinic', date: '2026-10-30', kind: 'clinic' },
    { id: 'acibadem-fly-dental', label: 'Flying after dental surgery and dental implants: how long to wait', url: 'https://acibademinternational.com/patient-guides/flying-after-dental-surgery-and-dental-implants-how-long-to-wait/', publisher: 'Acıbadem International', date: '2026-10-30', kind: 'clinic' },
    { id: 'ntv-bayram', label: 'Kurban Bayramı 2026 calendar', url: 'https://www.ntv.com.tr/turkiye/galeri-kurban-bayrami-2026-kurban-bayrami-ne-zaman-bayram-tatili-kac-gun-olacak-1717903', publisher: 'NTV', date: '2026', kind: 'press' },
    { id: 'asps-complications', label: 'Plastic surgery abroad can lead to severe complications after returning to the US', url: 'https://www.plasticsurgery.org/news/press-releases/plastic-surgery-abroad-can-lead-to-severe-complications-after-returning-to-the-us', publisher: 'American Society of Plastic Surgeons', date: '2026-10-30', kind: 'study' },
    { id: 'asps-tourism-cost', label: 'Medical tourism for cosmetic surgery: high risk of complications, high costs for treatment', url: 'https://www.plasticsurgery.org/news/press-releases/medical-tourism-for-cosmetic-surgery-high-risk-of-complications-high-costs-for-treatment', publisher: 'American Society of Plastic Surgeons', date: '2026-10-30', kind: 'study' },
    { id: 'medicare-travel', label: 'Travel outside the U.S.', url: 'https://www.medicare.gov/coverage/travel-outside-the-u.s.', publisher: 'Medicare.gov', date: '2026-10-30', kind: 'official' },
    { id: 'cda-tourism', label: 'Dental tourism fact sheet', url: 'https://www.cda.org/wp-content/uploads/dental_tourism_english.pdf', publisher: 'California Dental Association', date: '2026-10-30', kind: 'study' },
    { id: 'imtj-complications-ins', label: 'Medical complications insurance for Americans', url: 'https://www.laingbuissonnews.com/imtj/news-imtj/medical-complications-insurance-for-americans/', publisher: 'IMTJ / LaingBuisson', date: '2026-10-30', kind: 'press' },
  ],
};
