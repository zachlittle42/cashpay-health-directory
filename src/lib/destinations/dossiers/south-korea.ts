import type { DestinationDossier } from '../types';

// South Korea destination dossier. Facts checked 2026-10-30 against the
// numbered sources at the bottom; every figure cites at least one. Korea
// procedure prices come from booking platforms and agencies unless a source
// is marked official or press, so they are indicative ranges, not quotes.

export const SOUTH_KOREA: DestinationDossier = {
  slug: 'south-korea',
  country: 'South Korea',
  displayName: 'South Korea',
  flag: '🇰🇷',
  heroTitle: 'South Korea Medical Tourism Guide: Costs, Safety and How to Vet a Seoul Clinic',
  quickAnswer:
    'South Korea treated just over 2 million foreign patients in 2025, including 173,363 Americans, and almost nine in ten were seen in Seoul, mostly at small clinics in Gangnam. Americans go for facial plastic surgery, dermatology, comprehensive health screenings and dental implants, where published ranges run roughly 40 to 70 percent below US surgeon fees before travel. Two things changed in 2026: the 10 percent VAT refund on cosmetic procedures ended on December 31, 2025, and the won strengthened, so dollar prices are higher than older guides say. The safety issue to understand is staffing: any licensed Korean doctor may perform cosmetic surgery, and only 3 percent of cosmetic clinics have an anesthesiologist on staff. Verify registration on the government portal, get the operating surgeon named in writing, and request operating-room recording, which Korean law allows but does not do by default.',
  metaTitle: 'South Korea Medical Tourism Guide (2026): Costs, Safety, How to Vet a Clinic',
  metaDescription:
    'What plastic surgery, dermatology, health screenings and dental cost in South Korea vs the US, how the foreign-patient registration system works, the real safety record, and how Americans plan the trip. Sourced, checked October 2026.',
  verifiedAt: '2026-10-30',
  verifiedLabel: 'October 30, 2026',

  keyFacts: [
    { value: '2.01M', label: 'foreign patients in 2025, up 72% on 2024', sourceIds: ['mohw2025', 'jad2026'] },
    { value: '173,363', label: 'American patients in 2025, the fourth-largest group', sourceIds: ['kto2025'] },
    { value: '87%', label: 'of foreign patients were treated in Seoul', sourceIds: ['mohw2025'] },
    { value: '3%', label: 'of cosmetic clinics have an anesthesiologist on staff', sourceIds: ['jad-anesth'] },
  ],

  pricesNote:
    'US figures are the American Society of Plastic Surgeons 2024 average surgeon fees, which exclude anesthesia and facility charges, so the true US total is higher. Korea figures are ranges published by booking platforms, agencies and clinics in 2025 and 2026, converted at roughly 1,330 won per dollar. Treat them as the spread you should expect in a written quote, not as a price.',
  procedures: [
    { procedure: 'Rhinoplasty (primary)', usPrice: '$7,500–12,500 surgeon fee', localPrice: '$2,200–8,000', typicalStay: '7–14 nights', guideHref: '/guides/korea-plastic-surgery-cost', sourceIds: ['asps2024', 'clinicseoul', 'seoulcs'], note: 'Revision rhinoplasty is quoted far higher, about $6,000–14,500.' },
    { procedure: 'Double eyelid (blepharoplasty)', usPrice: '$3,000–5,500 upper', localPrice: '$800–3,600', typicalStay: '5–7 nights', guideHref: '/guides/korea-plastic-surgery-cost', sourceIds: ['asps2024', 'clinicseoul', 'seoulcs'], note: 'Ptosis correction adds roughly $1,300–2,700.' },
    { procedure: 'Facial contouring (V-line, zygoma)', usPrice: 'No ASPS category', localPrice: '$4,500–15,000', typicalStay: '14–21 nights', guideHref: '/guides/korea-plastic-surgery-cost', sourceIds: ['clinicseoul', 'seoulcs'], note: 'Bone work under general anesthesia; the highest-risk category in Korean cosmetic deaths.' },
    { procedure: 'Facial fat grafting', usPrice: 'No ASPS category', localPrice: '$1,300–4,800', typicalStay: '5–7 nights', sourceIds: ['bookimed-fat'] },
    { procedure: 'Breast augmentation', usPrice: '$4,575–8,000 surgeon fee', localPrice: '$5,000–12,500', typicalStay: '7–10 nights', guideHref: '/guides/korea-plastic-surgery-cost', sourceIds: ['asps2024', 'bookimed-ps'], note: 'Savings are small once flights and hotel are added.' },
    { procedure: 'Facelift', usPrice: '$12,000–19,000 surgeon fee', localPrice: '$5,400–13,000', typicalStay: '10–14 nights', guideHref: '/guides/korea-plastic-surgery-cost', sourceIds: ['asps2024', 'bookimed-ps'] },
    { procedure: 'Dermatology: Rejuran, lasers, Ultherapy', usPrice: 'Varies widely', localPrice: 'Rejuran $250–600 per session', typicalStay: 'Same day', guideHref: '/guides/korea-dermatology-cost', sourceIds: ['placidway-skin'], note: 'Most skin clinics price per shot or per session and bundle into packages.' },
    { procedure: 'Comprehensive health screening', usPrice: '$2,500–15,000 executive physical', localPrice: '$350–1,520 at screening centers', typicalStay: '3–4 hours, results in days', guideHref: '/guides/korea-health-screening-cost', sourceIds: ['hauteliving-exec', 'creatrip-checkup', 'ocbc-kmi'], note: 'Top-tier packages at the big university hospitals run roughly $1,900–3,000.' },
    { procedure: 'Dental implant (single)', usPrice: '$3,000–6,000', localPrice: '$700–2,400', typicalStay: 'Two trips for most cases', sourceIds: ['dentaly-bookimed-dental'], note: 'Confirm whether abutment and crown are included.' },
    { procedure: 'Hair transplant (FUE)', usPrice: '~$12,500 average', localPrice: '$3,900–8,600', typicalStay: '3–5 nights', guideHref: '/guides/hair-transplant-cost-by-country', sourceIds: ['bookimed-hair'] },
    { procedure: 'SMILE laser vision correction (both eyes)', usPrice: '$5,000–7,000', localPrice: '~$1,700–1,900', typicalStay: '2–3 nights', guideHref: '/guides/lasik-cost-by-country', sourceIds: ['lasik-us', 'bgn-smile'] },
    { procedure: 'IVF (one cycle, no medication)', usPrice: '$12,400 average', localPrice: '~$5,700–6,600', typicalStay: '2–3 weeks', guideHref: '/guides/ivf-cost-by-country', sourceIds: ['goodrx-ivf', 'jad-ivf'], note: 'Korea limits IVF to married couples; confirm eligibility with the clinic.' },
  ],

  howItWorks: [
    {
      title: 'Clinics and agencies that serve foreigners must be registered with the government',
      body: 'Under the Act on Support for Overseas Expansion of Healthcare System and Attraction of International Patients, any medical institution that recruits foreign patients, and any agency or "facilitator" that refers them, has to register and display its certificate. Unregistered brokering carries up to three years in prison. Seoul alone had 2,555 registered institutions in 2025. Ask both the clinic and any agency for their registration numbers and match them on the Medical Korea portal.',
      sourceIds: ['klri-act', 'jad-brokers2016', 'medkorea-reg', 'herald-2m'],
      link: { label: 'Search registered institutions on Medical Korea', url: 'https://www.medicalkorea.or.kr/en/registeredhospitals' },
    },
    {
      title: 'Registered institutions must carry malpractice liability insurance',
      body: 'Since 2016 registration requires medical malpractice coverage of at least 100 million won a year for clinics and small hospitals and 200 million won for general hospitals. Medical Korea reports that all registered institutions are insured. Ask for the insurer name in writing; an unregistered clinic has no such requirement.',
      sourceIds: ['medkorea-reg', 'jad-brokers2016'],
    },
    {
      title: 'KAHF accreditation is a separate, optional quality mark',
      body: 'The Korea Accreditation Program for Hospitals Serving Foreign Patients has run since 2017 with roughly 130 to 150 standards. A clinic can be legally registered without holding it. The portal listed 26 accredited entries on October 30, 2026, including JK Plastic Surgery Center, AB Plastic Surgery, CHA Fertility Center Seoul Station, Korea Medical Institute and HanGil Eye Hospital. JCI accreditation exists at several university hospitals, but verify any JCI claim on JCI\'s own directory.',
      sourceIds: ['kahf-list', 'koreatimes-kahf', 'jci-severance'],
      link: { label: 'KAHF-accredited institutions list', url: 'https://www.medicalkorea.or.kr/en/kahfAccreditedHospitals' },
    },
    {
      title: 'Any licensed physician may perform cosmetic surgery',
      body: 'Korean law lets any licensed doctor operate; only board-certified plastic surgeons may call their practice a "plastic surgery clinic." The surgeon who consults you is not automatically the one who operates. Get the operating surgeon\'s name and specialty certification written into the consent form.',
      sourceIds: ['aljazeera2024'],
    },
    {
      title: 'Operating rooms must have cameras, but recording happens only on request',
      body: 'The "Kwon Dae-hee law," in force since September 25, 2023, requires closed-circuit cameras in every operating room where patients are under general anesthesia or otherwise unconscious. Recording is mandatory only when the patient or guardian asks for it. Footage is kept at least 30 days and can be viewed with a court or investigative request or the consent of both patient and staff. Request recording in writing before surgery.',
      sourceIds: ['koreatimes-cctv', 'koreatimes-cctv-terms'],
    },
    {
      title: 'Disputes go through K-MEDI and the Medical Korea Support Center',
      body: 'The Korea Medical Dispute Mediation and Arbitration Agency publishes English application forms and an arbitration clause that hospitals can put in foreign-patient contracts; an award has the force of a court judgment. KHIDI\'s support center handles complaints and illegal-broker reports. Both are small: K-MEDI took 152 foreign consultations through August 2025, a record, and the support center logged 214 dispute cases in 2024.',
      sourceIds: ['kmedi', 'jad-disputes'],
      link: { label: 'K-MEDI English page and forms', url: 'https://www.k-medi.or.kr/eng/' },
    },
    {
      title: 'Americans enter visa-free; a medical visa exists for longer stays',
      body: 'US passport holders may stay up to 90 days without a visa. The K-ETA pre-travel authorization is waived for Americans through December 31, 2026, with no decision announced for 2027; the e-Arrival Card is still required. The C-3-3 medical visa covers treatment stays of 90 days or less and is mainly used by nationalities that need a visa; from October 1, 2026 patients of 112 government-designated institutions and agencies get three-day electronic visa processing.',
      sourceIds: ['mofa-la-visa', 'mofa-keta', 'chungbuk-visa', 'visaverge2026'],
      link: { label: 'K-ETA exemption notice, Embassy of Korea in the US', url: 'https://overseas.mofa.go.kr/us-en/brd/m_4500/view.do?seq=761106' },
    },
    {
      title: 'The cosmetic-surgery VAT refund ended on December 31, 2025',
      body: 'From April 2016 through the end of 2025 foreign patients could reclaim the 10 percent VAT on cosmetic and dermatology procedures. The Ministry of Economy and Finance dropped the provision and the National Assembly left it out of the December 2025 tax revision. Any clinic or agency page still advertising a cosmetic VAT refund in 2026 is out of date. Retail shopping refunds continue.',
      sourceIds: ['koreaherald-vat', 'asianews-vat'],
    },
  ],

  safety: {
    verdict:
      'Korea\'s large university hospitals are among the best-equipped in Asia, and registered clinics carry mandatory malpractice insurance. The risk sits in the clinic-level cosmetic market where 88 percent of foreign patients are treated: any doctor may operate, sedation does not legally require an anesthesiologist, and the deaths that reach court are mostly anesthesia-related and mostly at clinics. The safeguards exist, but you have to invoke them yourself, in writing, before you pay.',
    points: [
      {
        title: 'Ghost surgery is why the camera law exists',
        body: 'In 2016 a 24-year-old student died after jaw-contouring surgery in Gangnam in which CCTV showed a general practitioner without plastic-surgery training took over the operation; the surgeon was sentenced to three years in 2021. The Korea Consumer Agency counted 226 people injured, re-operated or dead after plastic surgery between 2016 and 2020. The 2023 operating-room camera law followed, but recording is only on request.',
        sourceIds: ['cnn-ghost', 'amspa-cnn-226', 'koreatimes-cctv'],
      },
      {
        title: 'Anesthesia is the gap',
        body: 'Of 2,777 registered plastic surgery and dermatology clinics, 84 had an anesthesiologist on staff as of July 2026. The National Forensic Service reviewed 50 cosmetic-procedure deaths from 2016 to 2024 and found 23 were anesthesia-related, 22 of them at clinics. A man in his 30s died in 2025 after propofol sedation for a cosmetic procedure in Suwon; the doctor was referred for prosecution in February 2026.',
        sourceIds: ['jad-anesth', 'fnnews-propofol'],
      },
      {
        title: 'Foreign-patient deaths have led to indictments',
        body: 'A Chinese woman in her 20s died in January 2024 after three full-body liposuction sessions in two weeks at a Gangnam clinic; the surgeon was indicted in June 2026 and is separately on trial over a 2018 death. A Hong Kong patient died during liposuction in Seoul in 2020 after reportedly being introduced through an illegal broker. China\'s embassy issued a public warning about cosmetic surgery risks in Korea in January 2024.',
        sourceIds: ['sbs-indict', 'jad-disputes', 'aljazeera2024', 'scmp-embassy'],
      },
      {
        title: 'Complaints are rising faster than the system that handles them',
        body: 'Foreign-patient dispute cases logged by KHIDI rose from a handful in 2020 to 214 in 2024, and illegal-broker reports rose from 13 to 67 over the same period. K-MEDI\'s foreign consultations hit a record 152 through August 2025, led by cosmetic surgery and dentistry. The support center that fields complaints had six contract staff in two branches.',
        sourceIds: ['jad-disputes'],
      },
      {
        title: 'Regulators have sanctioned photo and review manipulation',
        body: 'Korea\'s Fair Trade Commission fined two Gangnam clinics for exaggerated before-and-after photos, and in July 2026 issued corrective orders to View, DA and AB Plastic Surgery for discounting surgery in exchange for undisclosed positive reviews between 2018 and May 2026. In the same month it ordered 15 clinics to delete unfair prepaid-treatment refund clauses and said consumers may be charged at most a 10 percent penalty for early termination.',
        sourceIds: ['herald-ftc-photos', 'koreatimes-reviews', 'khan-ftc-refund'],
      },
      {
        title: 'What US authorities say',
        body: 'The CDC advises a travel-medicine visit four to six weeks before any medical trip, checking credentials, arranging evacuation insurance, carrying your records home, and waiting 10 to 14 days after major surgery before flying because of clot risk. The American Society of Plastic Surgeons warns that complications from surgery abroad fall to US surgeons who may not know what technique or implant was used, and that revision costs can exceed the original US price.',
        sourceIds: ['cdc-medtourism', 'asps-tourism', 'asps-study'],
      },
      {
        title: 'Hospital infections are a national issue, as elsewhere',
        body: 'Korea\'s disease control agency recorded 49,053 carbapenem-resistant Enterobacterales cases in 2025, up 15.8 percent, and 944 deaths, the most of any notifiable disease. That is not a reason to avoid Korea, but for inpatient surgery it is a reason to ask about infection-control practice and, for major operations, the transfusion plan.',
        sourceIds: ['nocut-cre'],
      },
    ],
  },

  redFlags: [
    'An agency or "coordinator" that cannot show a facilitator registration number on the Medical Korea portal. Unregistered brokering is a crime, and Al Jazeera was approached by uncertified facilitators within minutes of joining online groups.',
    'No written confirmation that the named, board-certified surgeon will perform the whole operation. Consulting surgeon and operating surgeon are not always the same person.',
    'Sedation or general anesthesia with no anesthesiologist present. Ask who administers and monitors it; 97 percent of cosmetic clinics have none on staff.',
    'Refusal or hesitation when you ask for operating-room recording under the 2023 camera law.',
    'Before-and-after photos and five-star reviews as the main evidence. Regulators have sanctioned Gangnam clinics for both manipulated photos and undisclosed paid reviews.',
    'A quote that is not itemized in won. One Korean investigation found four of ten Gangnam clinics quoting foreigners nearly double local prices.',
    'Pressure to book surgery within hours of a first consultation, or no in-house interpreter.',
    'Refund terms that keep more than a 10 percent penalty, which the Fair Trade Commission has ruled unfair.',
    'Any clinic still advertising a cosmetic-surgery VAT refund in 2026. It ended on December 31, 2025.',
    'Stem cell or "anti-aging" infusions marketed as routine. Korean law allows stem cell treatment only inside a registered clinical-research framework.',
  ],
  vetChecklist: [
    'The clinic\'s and the agency\'s registration numbers, checked against the Medical Korea portal lists.',
    'The operating surgeon\'s name and specialty board certification, written into the consent form.',
    'Anesthesia type, who administers it, who monitors you, and whether an anesthesiologist is present for general anesthesia.',
    'An itemized quote in won covering surgeon, anesthesia, facility, implants, medication, garments, follow-up visits and interpreter.',
    'The cancellation and refund schedule, with the penalty capped at 10 percent of prepaid amounts.',
    'A written request for CCTV recording of your operation, acknowledged by the clinic.',
    'The malpractice insurer\'s name and the policy\'s coverage amount.',
    'What happens if you need a revision: who pays, where it happens, and within what period.',
    'Copies of your operative notes, implant cards and medication list to carry home.',
    'How post-operative questions are handled after you leave Korea, since legal cross-border telemedicine only begins in 2027.',
  ],

  planning: {
    entry: {
      title: 'Entry rules',
      body: 'US passport holders stay up to 90 days visa-free. K-ETA is waived for Americans through December 31, 2026; complete the e-Arrival Card instead. Longer treatment stays use the G-1-M medical visa.',
      sourceIds: ['mofa-la-visa', 'mofa-keta', 'chungbuk-visa'],
      link: { label: 'Korean Embassy K-ETA notice', url: 'https://overseas.mofa.go.kr/us-en/brd/m_4500/view.do?seq=761106' },
    },
    flights: {
      title: 'Flights',
      body: 'Nonstop Los Angeles to Incheon takes about 13 to 14 hours out and 11 to 12 back; New York JFK about 14.5 hours; United\'s Newark route, launched September 2026, just under 16 hours out. Korean Air\'s Los Angeles page showed round-trip economy from $1,094 in October 2026, a snapshot rather than an average.',
      sourceIds: ['aerocorner-ewr', 'koreanair-lax'],
    },
    whereToStay: {
      title: 'Where to stay',
      body: 'Cosmetic clinics cluster in Gangnam-gu (Sinsa, Apgujeong, Cheongdam, Nonhyeon) and Seocho-gu. Booking-site snapshots put mid-range Gangnam hotels at roughly $100 to 200 a night. Seoul began certifying "medical-friendly" hotels in September 2026 based on hospital access and 24-hour emergency response.',
      sourceIds: ['expedia-gangnam', 'sedaily-hotels'],
    },
    payment: {
      title: 'Deposits and payment',
      body: 'Clinics commonly ask for a deposit near 10 percent to hold a date. Foreign cards are accepted and cash discounts are reported. Insist on an itemized quote in won, since dual pricing for foreigners has been documented, and get the refund schedule in writing before paying anything.',
      sourceIds: ['purseforum-deposit', 'psp-dualpricing', 'khan-ftc-refund'],
    },
    stayAndFlyHome: {
      title: 'How long to stay',
      body: 'Plan 7 to 14 days for rhinoplasty and most facial surgery, with splint or stitch removal around day 7 to 10 and surgeon clearance before flying. Facial contouring and multi-procedure trips usually run two to three weeks. The CDC\'s rule for major surgery is 10 to 14 days before air travel. Screenings take three to four hours with results in days; IVF needs two to three weeks on site.',
      sourceIds: ['cdc-medtourism', 'koreaexperience-flying', 'creatrip-checkup'],
    },
    aftercareAtHome: {
      title: 'Aftercare back in the US',
      body: 'Bring operative notes, implant cards and photos; US surgeons may not recognize the technique or implant used, and revisions are paid out of pocket. Korea legalized cross-border telemedicine for foreign patients in May 2026, which will allow remote follow-up with your Korean surgeon once the 12-month grace period ends in mid-2027.',
      sourceIds: ['asps-tourism', 'asps-study', 'koreatimes-telemed'],
    },
  },

  institutionsNote:
    'Listed, not ranked. Each entry states only what the cited source says about the institution; none is an endorsement or a quality claim. Large university hospitals handle complex and inpatient care; the plastic surgery and screening centers are clinic-level institutions. Confirm registration and any accreditation yourself before booking.',
  institutions: [
    { name: 'Severance Hospital (Yonsei University)', city: 'Seoul, Seodaemun-gu', knownFor: 'Tertiary care; international health care center', credentials: 'First JCI-accredited hospital in Korea (2007) per JCI materials', sourceIds: ['jci-severance'], url: 'https://sev.severance.healthcare/sev-en/index.do' },
    { name: 'Asan Medical Center', city: 'Seoul, Songpa-gu', knownFor: 'Tertiary care; dedicated International Healthcare Center; premium health screening', credentials: 'Registered foreign-patient institution', sourceIds: ['tenmag-hospitals', 'kormedi-bigfive'], url: 'https://eng.amc.seoul.kr/' },
    { name: 'Samsung Medical Center', city: 'Seoul, Gangnam-gu (Irwon)', knownFor: 'Tertiary care; International Healthcare Center; premium health screening', credentials: 'JCI status appears only in third-party directories and is unverified', sourceIds: ['tenmag-hospitals', 'kormedi-bigfive'], url: 'https://www.samsunghospital.com/gb/language/english/main/index.do' },
    { name: 'Seoul National University Hospital', city: 'Seoul, Jongno-gu', knownFor: 'Tertiary care; international healthcare service; Gangnam screening center', credentials: 'National university hospital', sourceIds: ['jad-gyopo', 'kormedi-bigfive'], url: 'https://www.snuh.org/global/en/main.do' },
    { name: 'Seoul St. Mary\'s Hospital (Catholic University)', city: 'Seoul, Seocho-gu', knownFor: 'Tertiary care; international clinic', credentials: 'Named in Korean press as JCI-accredited', sourceIds: ['tenmag-hospitals'], url: 'https://www.cmcseoul.or.kr/en.common.main.main.sp' },
    { name: 'CHA Fertility Center Seoul Station', city: 'Seoul, Jung-gu', knownFor: 'IVF and fertility care for international patients', credentials: 'KAHF accredited (Medical Korea list)', sourceIds: ['kahf-list'], url: 'https://en.chamc.co.kr/' },
    { name: 'Korea Medical Institute (KMI)', city: 'Seoul, Jongno-gu and branches', knownFor: 'Comprehensive health screening packages for foreigners', credentials: 'On the Medical Korea KAHF/international list, 2026–2030', sourceIds: ['kahf-list', 'ocbc-kmi'], url: 'https://www.kmi.or.kr/' },
    { name: 'JK Plastic Surgery Center', city: 'Seoul, Gangnam-gu', knownFor: 'Plastic surgery for international patients', credentials: 'On the Medical Korea KAHF list; Gangnam district says first plastic surgery clinic to pass KAHF', sourceIds: ['kahf-list', 'visitgangnam-jk'], url: 'https://www.jkplastic.com/en/' },
    { name: 'AB Plastic Surgery', city: 'Seoul, Seocho-gu', knownFor: 'Plastic surgery for international patients', credentials: 'KAHF/international-patient institution 2025–2029; received a July 2026 FTC corrective order over undisclosed paid reviews', sourceIds: ['kahf-list', 'koreatimes-reviews'] },
    { name: 'View Plastic Surgery and DA Plastic Surgery', city: 'Seoul, Gangnam-gu', knownFor: 'Large multi-specialty cosmetic hospitals', credentials: 'Both received July 2026 FTC corrective orders over undisclosed paid reviews', sourceIds: ['koreatimes-reviews'] },
    { name: 'HanGil Eye Hospital', city: 'Incheon', knownFor: 'Ophthalmology and refractive surgery', credentials: 'KAHF 2017–2027; KOIHA national accreditation', sourceIds: ['kahf-list'], url: 'https://www.hangileye.co.kr/eng/' },
  ],

  faqs: [
    {
      question: 'Is plastic surgery in South Korea really cheaper than in the US?',
      answer: 'For most facial procedures, yes. Published Korean ranges for rhinoplasty ($2,200–8,000) and double eyelid surgery ($800–3,600) sit 40 to 70 percent below the ASPS 2024 average US surgeon fees of $7,500–12,500 and $3,000–5,500, and the US figures exclude anesthesia and facility charges. Breast augmentation and facelifts save less once a $1,100 round-trip flight and one to two weeks of hotel are added. Get an itemized quote in won and compare it against a full US quote, not a surgeon fee alone.',
    },
    {
      question: 'Do Americans need a visa for medical treatment in Korea?',
      answer: 'Not for stays under 90 days. US passport holders enter visa-free, and the K-ETA pre-authorization is waived for Americans through December 31, 2026, with 2027 undecided as of October 2026. You still complete the e-Arrival Card. The C-3-3 medical visa and the G-1-M long-stay medical visa exist for longer treatment or for nationalities that need a visa; a cosmetic trip of a few weeks does not require them.',
    },
    {
      question: 'Can I still get the 10 percent VAT refund on cosmetic surgery in Korea?',
      answer: 'No. The refund that ran from April 2016 ended on December 31, 2025, after the Ministry of Economy and Finance dropped it from the tax plan and the National Assembly left it out of the December 2025 revision. In its final year it returned 196 billion won across 1.72 million claims. Any 2026 price that assumes a refund is 10 percent too low. Refunds on retail shopping continue.',
    },
    {
      question: 'How do I check whether a Korean clinic or agency is legitimate?',
      answer: 'Ask for the registration number and look it up on the Medical Korea portal, which publishes lists of institutions and facilitators registered under the international-patient law. Registration is legally required to treat or refer foreign patients and comes with mandatory malpractice insurance. Separately, check whether the provider holds KAHF accreditation, which is optional and held by about 26 institutions. Treat JCI claims as unverified until you find them on JCI\'s own directory.',
    },
    {
      question: 'Will the surgeon I consult actually perform my surgery?',
      answer: 'Not necessarily, which is why Korea passed the operating-room camera law in 2023 after a patient died when a general practitioner took over his jaw surgery. Any licensed physician may legally perform cosmetic surgery in Korea. Protect yourself by having the operating surgeon\'s name and board certification written into the consent form and by requesting CCTV recording in writing; the law requires cameras but only records on request.',
    },
    {
      question: 'Is anesthesia at Korean cosmetic clinics safe?',
      answer: 'It is the main documented risk. As of July 2026 only 84 of 2,777 registered plastic surgery and dermatology clinics had an anesthesiologist on staff, and Korean law does not require one for sedation. The National Forensic Service found 23 of 50 cosmetic-procedure deaths from 2016 to 2024 were anesthesia-related, 22 of them at clinics. Before any procedure under sedation or general anesthesia, ask in writing who administers it, who monitors you, and whether an anesthesiologist is present.',
    },
    {
      question: 'How long do I need to stay in Seoul after surgery?',
      answer: 'Agency guidance converges on 7 to 14 days for rhinoplasty and most facial surgery, with splint or stitch removal around day 7 to 10 and a surgeon clearance before flying. Facial contouring and combined procedures typically need two to three weeks. The CDC\'s general advice is to wait 10 to 14 days after major surgery before air travel because of clot risk. Health screenings are same-day; IVF cycles need two to three weeks on site.',
    },
    {
      question: 'What happens if something goes wrong in Korea or after I get home?',
      answer: 'Registered clinics carry mandatory malpractice insurance, and the Korea Medical Dispute Mediation and Arbitration Agency offers English forms, mediation and arbitration whose awards have the force of a court judgment. In practice caseloads are small, lawsuits are slow, and writing a negative review carries defamation risk in Korea. Back home, elective complications are usually paid out of pocket, and US surgeons may not know what technique or implant was used, so carry your operative notes and implant cards.',
    },
    {
      question: 'How much deposit do Korean clinics ask for, and can I get it back?',
      answer: 'A deposit of about 10 percent, sometimes a flat sum near $1,000, is typical to hold a surgery date. Deposit disputes are a leading complaint from foreign patients. In July 2026 Korea\'s Fair Trade Commission ordered 15 clinics to remove unfair prepaid-treatment refund clauses and stated that consumers may be charged at most a 10 percent penalty for early termination. Get the cancellation schedule in writing before paying.',
    },
    {
      question: 'Are Korean clinic before-and-after photos and reviews trustworthy?',
      answer: 'Treat them as marketing. Korea\'s Fair Trade Commission has fined Gangnam clinics for exaggerated before-and-after photos and in July 2026 issued corrective orders to three large clinics for discounting surgery in exchange for undisclosed positive reviews over an eight-year period. Reporters have documented influencer contracts that required positive language before results were known. Weight registration, named-surgeon credentials and anesthesia staffing far above imagery.',
    },
    {
      question: 'Do Korean clinics charge foreigners more than locals?',
      answer: 'Some do. A Korean media investigation found four of ten Gangnam clinics quoting foreigners nearly double the local price, and many clinics now publish "same price" pledges in response. Ask for an itemized quote in won rather than a dollar package, compare it across at least three registered clinics, and be wary of agencies, which add their own fee on top.',
    },
    {
      question: 'What do Americans actually go to Korea for?',
      answer: 'Dermatology and plastic surgery made up 53.6 percent of American department-level visits in 2025, a lower share than for Asian visitors, with the rest spread across health screenings, internal medicine and dental care. Americans were the fourth-largest group at 173,363 patients in 2025, up 70 percent on 2024, and the largest non-Asian source.',
    },
    {
      question: 'Are Korean health check-up packages worth a trip on their own?',
      answer: 'Screening-center packages run roughly $350 to $1,520, take three to four hours, and return results within days, against $2,500 to $15,000 for a US executive physical. Top-tier packages at the big university hospitals cost about $1,900 to $3,000. One American patient reported a 2026 preventive evaluation in Seoul under $600 that caught findings missed at home. Whether the trip pays depends on whether you are already going for something else.',
    },
    {
      question: 'Is stem cell or anti-aging therapy legal in Korea?',
      answer: 'Only inside the clinical-research framework of Korea\'s Advanced Regenerative Medicine Act, with review and long-term follow-up. The government estimates 10,000 to 20,000 Koreans travel abroad each year for stem cell infusions precisely because they are restricted at home, and a Korean patient died in March 2026 after an infusion at a Tokyo clinic. A Korean clinic marketing routine stem cell "anti-aging" injections is either inside a registered protocol or outside the law.',
    },
    {
      question: 'Will my Korean surgeon follow up with me after I return to the US?',
      answer: 'Informally many do by messaging app, but legally sanctioned cross-border telemedicine for foreign patients only arrives in mid-2027, twelve months after the May 2026 amendment that permits remote consultations, pre-travel counseling and post-return follow-up at designated institutions. Until then, line up a US physician willing to see you, and leave Korea with your full records.',
    },
  ],

  sources: [
    { id: 'mohw2025', label: 'Ministry of Health and Welfare press release on 2025 foreign-patient statistics (via KDI Economic Information Center)', url: 'https://eiec.kdi.re.kr/policy/materialView.do?num=280079', publisher: 'Ministry of Health and Welfare', date: '2026-04-24', kind: 'official' },
    { id: 'kto2025', label: 'K-Medical & Wellness: 2025 foreign patient statistics by nationality', url: 'https://english.visitkorea.or.kr/svc/contents/contentsView.do?menuSn=923&dataSetId=115&vcontsId=219764', publisher: 'Korea Tourism Organization', date: '2026-10-30', kind: 'official' },
    { id: 'jad2026', label: 'Number of foreign patients tops 2 million for first time in 2025', url: 'https://www.koreajoongangdaily.com/business/number-of-foreign-patients-top-2-million-for-first-time-in-2025/12585928', publisher: 'Korea JoongAng Daily', date: '2026-04-24', kind: 'press' },
    { id: 'herald-2m', label: 'Foreign patients pass 2 million; Seoul holds 2,555 registered institutions', url: 'https://www.heraldk.com/article/2026042315314853513', publisher: 'Herald Economy', date: '2026-04-23', kind: 'press' },
    { id: 'kbr2026', label: 'Dermatology, plastic surgery account for 74% of foreign patient visits in Korea', url: 'https://www.koreabiomed.com/news/articleView.html?idxno=33434', publisher: 'Korea Biomedical Review', date: '2026-10-08', kind: 'press' },
    { id: 'asps2024', label: 'Cosmetic Procedures Average Cost 2024 (surgeon/physician fees)', url: 'https://www.plasticsurgery.org/documents/news/statistics/2024/cosmetic-procedures-average-cost-2024.pdf', publisher: 'American Society of Plastic Surgeons', date: '2025-03', kind: 'study' },
    { id: 'clinicseoul', label: 'Korea plastic surgery price list', url: 'https://www.clinicseoul.net/korea-plastic-surgery-price-list/', publisher: 'Clinic Seoul (agency)', date: '2026-10-30', kind: 'marketplace' },
    { id: 'seoulcs', label: 'Plastic surgery cost in Korea', url: 'https://seoulcosmeticsurgery.com/plastic-surgery-cost-in-korea/', publisher: 'Seoul Cosmetic Surgery (agency)', date: '2026-10-30', kind: 'marketplace' },
    { id: 'bookimed-fat', label: 'Facial fat transfer clinics in Korea, price listings', url: 'https://us-uk.bookimed.com/clinics/country=republic-of-korea/procedure=lipofilling/', publisher: 'Bookimed', date: '2025-10', kind: 'marketplace' },
    { id: 'bookimed-ps', label: 'Plastic surgery in Korea: costs', url: 'https://bookimed.com/article/plastic-surgery-in-korea/', publisher: 'Bookimed', date: '2025', kind: 'marketplace' },
    { id: 'placidway-skin', label: 'How much do skin treatments cost in South Korea?', url: 'https://www.placidway.com/answer-detail/567012/How-much-do-Skin-Treatments-Cost-in-South-Korea', publisher: 'PlacidWay', date: '2026-10-30', kind: 'marketplace' },
    { id: 'hauteliving-exec', label: 'Executive physical cost guide', url: 'https://www.hauteliving.com/hautemd/costs/executive-physical-cost', publisher: 'Haute Living', date: '2024', kind: 'press' },
    { id: 'creatrip-checkup', label: 'Health checkup in Korea: package listings', url: 'https://creatrip.com/en/health-checkup', publisher: 'Creatrip', date: '2026-10-30', kind: 'marketplace' },
    { id: 'ocbc-kmi', label: 'Korea Medical Institute health screening packages (promotion valid to 2026-03-31)', url: 'https://www.ocbc.id/en/promo/2025/11/27/korea-medical-institute', publisher: 'OCBC / Korea Medical Institute', date: '2025-11-27', kind: 'marketplace' },
    { id: 'kormedi-bigfive', label: 'Premium health check-up prices at the big five hospitals', url: 'https://kormedi.com/1200328/', publisher: 'Kormedi', date: '2011-02-27', kind: 'press' },
    { id: 'dentaly-bookimed-dental', label: 'Korea dental implant price guide', url: 'https://us-uk.bookimed.com/articles/procedure=dental-implant/', publisher: 'Bookimed', date: '2025', kind: 'marketplace' },
    { id: 'bookimed-hair', label: 'Hair transplant clinics in Korea, price listings', url: 'https://us-uk.bookimed.com/clinics/country=republic-of-korea/procedure=hair-transplant/', publisher: 'Bookimed', date: '2026-10-30', kind: 'marketplace' },
    { id: 'lasik-us', label: 'Cost of LASIK in the US', url: 'https://www.lasik.com/cost-of-lasik/', publisher: 'Lasik.com', date: '2026', kind: 'marketplace' },
    { id: 'bgn-smile', label: 'SMILE promotion for foreign patients', url: 'https://en.bgneye.com/promo/0pt30zms8fjcbb5c871z7ij9x058s5', publisher: 'BGN Eye Clinic', date: '2026-10-30', kind: 'clinic' },
    { id: 'goodrx-ivf', label: 'How much does IVF cost? (citing ASRM and FertilityIQ)', url: 'https://goodrx.com/conditions/fertility/ivf-costs', publisher: 'GoodRx', date: '2025', kind: 'press' },
    { id: 'jad-ivf', label: 'Foreigners come to Korea for fertility treatment', url: 'https://www.koreajoongangdaily.com/korea/foreigners-come-to-korea-for-fertility-treatment/10003494', publisher: 'Korea JoongAng Daily', date: '2026-10-30', kind: 'press' },
    { id: 'klri-act', label: 'Act on Support for Overseas Expansion of Healthcare System and Attraction of International Patients (English)', url: 'https://elaw.klri.re.kr/eng_service/lawViewContent.do?hseq=38861', publisher: 'Korea Legislation Research Institute', date: '2026-10-30', kind: 'official' },
    { id: 'jad-brokers2016', label: 'New act cracks down on illegal medical brokers', url: 'https://www.koreajoongangdaily.com/korea/new-act-cracks-down-on-illegal-medical-brokers/11849325', publisher: 'Korea JoongAng Daily', date: '2016-03-14', kind: 'press' },
    { id: 'medkorea-reg', label: 'Registration system for institutions and facilitators serving foreign patients', url: 'https://www.medicalkorea.or.kr/en/registeredsystem', publisher: 'Medical Korea (KHIDI)', date: '2026-10-30', kind: 'official' },
    { id: 'kahf-list', label: 'KAHF accredited hospitals list', url: 'https://www.medicalkorea.or.kr/en/kahfAccreditedHospitals', publisher: 'Medical Korea (KHIDI)', date: '2026-10-30', kind: 'official' },
    { id: 'koreatimes-kahf', label: "'We learned to prioritize foreign patient safety via KAHF'", url: 'https://www.koreatimes.co.kr/www/nation/2025/01/113_239121.html', publisher: 'The Korea Times', date: '2025-01', kind: 'press' },
    { id: 'jci-severance', label: 'Severance Hospital success story (first JCI-accredited hospital in Korea)', url: 'https://www.jointcommissioninternational.org/-/media/jci/jci-documents/accreditation/resources/severance-success-story_022420.pdf', publisher: 'Joint Commission International', date: '2020-02', kind: 'official' },
    { id: 'aljazeera2024', label: 'As South Korea draws visitors chasing beauty, dodgy practices pose risks', url: 'https://www.aljazeera.com/news/2024/12/23/as-south-korea-draws-visitors-chasing-beauty-dodgy-practices-pose-risks', publisher: 'Al Jazeera', date: '2024-12-23', kind: 'press' },
    { id: 'koreaherald-vat', label: 'VAT refund on cosmetic procedures for foreigners to end', url: 'https://www.koreaherald.com/article/10633779', publisher: 'The Korea Herald', date: '2025-12-10', kind: 'press' },
    { id: 'asianews-vat', label: "Will the end of South Korea's aesthetics VAT refund drive medical tourists away?", url: 'https://asianews.network/?p=244925', publisher: 'Asia News Network', date: '2025-12', kind: 'press' },
    { id: 'mofa-la-visa', label: 'U.S. Visa Waiver Program: 90-day visa-free entry', url: 'https://overseas.mofa.go.kr/us-losangeles-en/wpge/m_4397/contents.do', publisher: 'Consulate General of the Republic of Korea in Los Angeles', date: '2026-10-30', kind: 'official' },
    { id: 'mofa-keta', label: 'K-ETA temporary exemption extended January 1 to December 31, 2026', url: 'https://overseas.mofa.go.kr/us-en/brd/m_4500/view.do?seq=761106', publisher: 'Embassy of the Republic of Korea in the USA', date: '2026-01', kind: 'official' },
    { id: 'chungbuk-visa', label: 'Medical visa categories C-3(M) and G-1(M)', url: 'https://www.chungbuk.go.kr/meditoureng/sub.do?key=3044', publisher: 'Chungcheongbuk-do Provincial Government', date: '2026-10-30', kind: 'official' },
    { id: 'visaverge2026', label: 'Korea expands fast-track visas to spread medical tourism beyond Seoul', url: 'https://www.visaverge.com/visa/korea-expands-fast-track-visas-to-spread-medical-tourism-beyond-seoul/', publisher: 'VisaVerge', date: '2026-09-21', kind: 'press' },
    { id: 'koreatimes-telemed', label: 'Korea legalizes telemedicine for foreign patients to boost medical tourism', url: 'https://www.koreatimes.co.kr/southkorea/health/20260526/korea-legalizes-telemedicine-for-foreign-patients-to-boost-medical-tourism', publisher: 'The Korea Times', date: '2026-05-26', kind: 'press' },
    { id: 'cnn-ghost', label: "A 24-year-old student in Seoul died after a 'ghost surgeon' operated", url: 'https://news.yahoo.com/24-old-student-seoul-died-075351615.html', publisher: 'CNN (via Yahoo News)', date: '2021', kind: 'press' },
    { id: 'amspa-cnn-226', label: "South Korea's dangerous ghost doctors (Korea Consumer Agency: 226 injured or dead, 2016–2020)", url: 'https://americanmedspa.org/news/south-koreas-dangerous-ghost-doctors-are-putting-plastic-surgery-patients-lives-at-risk', publisher: 'CNN (via American Med Spa Association)', date: '2021', kind: 'press' },
    { id: 'koreatimes-cctv', label: 'Patients, doctors at loggerheads as operating room CCTV footage made mandatory', url: 'https://www.koreatimes.co.kr/amp/southkorea/health/20230924/patients-doctors-at-loggerheads-as-operating-room-cctv-footage-made-mandatory', publisher: 'The Korea Times', date: '2023-09-24', kind: 'press' },
    { id: 'koreatimes-cctv-terms', label: 'Passage of CCTV bill draws mixed reactions (retention, penalties)', url: 'https://www.koreatimes.co.kr/www/nation/2021/09/119_314915.html', publisher: 'The Korea Times', date: '2021-09-03', kind: 'press' },
    { id: 'jad-anesth', label: 'Anesthesiologists remain rare at beauty clinics offering general anesthesia (HIRA and National Forensic Service data)', url: 'https://www.koreajoongangdaily.com/korea/anesthesiologists-remain-rare-at-beauty-clinics-offering-general-anesthesia/12900160', publisher: 'Korea JoongAng Daily', date: '2026-10-01', kind: 'press' },
    { id: 'fnnews-propofol', label: 'Suwon propofol death: doctor referred to prosecution', url: 'https://en.fnnews.com/news/202602250742382764', publisher: 'Financial News', date: '2026-02-25', kind: 'press' },
    { id: 'sbs-indict', label: 'Prosecutors indict plastic surgeon after death of Chinese patient in her 20s', url: 'https://sbsstar.net/article/N1008611260/', publisher: 'SBS', date: '2026-06-15', kind: 'press' },
    { id: 'jad-disputes', label: "As Korea's medical tourism industry grows, so do complaints and disputes", url: 'https://www.koreajoongangdaily.com/korea/as-koreas-medical-tourism-industry-grows-so-do-complaints-and-disputes/11953379', publisher: 'Korea JoongAng Daily', date: '2025-10-10', kind: 'press' },
    { id: 'scmp-embassy', label: 'Chinese embassy warns of plastic surgery risks in South Korea after liposuction death', url: 'https://scmp.com/news/asia/east-asia/article/3249158/', publisher: 'South China Morning Post', date: '2024-01', kind: 'press' },
    { id: 'kmedi', label: 'Korea Medical Dispute Mediation and Arbitration Agency, English site', url: 'https://www.k-medi.or.kr/eng/', publisher: 'K-MEDI', date: '2026-10-30', kind: 'official' },
    { id: 'khan-ftc-refund', label: 'FTC corrects unfair prepaid cosmetic treatment terms at 15 clinics', url: 'https://www.khan.co.kr/en/article/202607191352027', publisher: 'Kyunghyang Shinmun', date: '2026-07-19', kind: 'press' },
    { id: 'herald-ftc-photos', label: 'Gangnam clinics fined for exaggerated before/after photos', url: 'https://biz.heraldcorp.com/article/10805896', publisher: 'Herald Corp', date: '2026', kind: 'press' },
    { id: 'koreatimes-reviews', label: 'Gangnam plastic surgery clinics penalized over incentivized positive reviews', url: 'https://www.koreatimes.co.kr/southkorea/society/20260713/gangnam-plastic-surgery-clinics-penalized-over-incentivized-positive-reviews', publisher: 'The Korea Times', date: '2026-07-13', kind: 'press' },
    { id: 'psp-dualpricing', label: 'Discriminatory pricing for plastic surgery in Korea (citing Ilyo Shinmun investigation)', url: 'https://plasticsurgerypractice.com/client-objectives/aesthetics/breast-augmentation/foreigner-ripoff-discriminatory-pricing-for-plastic-surgery-in-korea/', publisher: 'Plastic Surgery Practice', date: '2024', kind: 'press' },
    { id: 'cdc-medtourism', label: "Travelers' Health: Medical Tourism", url: 'https://wwwnc.cdc.gov/travel/page/medical-tourism', publisher: 'US Centers for Disease Control and Prevention', date: '2023-06-01', kind: 'official' },
    { id: 'asps-tourism', label: 'Medical tourism: patient safety', url: 'https://www.plasticsurgery.org/tourism', publisher: 'American Society of Plastic Surgeons', date: '2026-10-30', kind: 'study' },
    { id: 'asps-study', label: 'Plastic surgery abroad can lead to severe complications after returning to the US', url: 'https://www.plasticsurgery.org/news/press-releases/plastic-surgery-abroad-can-lead-to-severe-complications-after-returning-to-the-us', publisher: 'American Society of Plastic Surgeons', date: '2026-10-30', kind: 'study' },
    { id: 'nocut-cre', label: 'KDCA 2025 infectious disease yearbook: 49,053 CRE cases, 944 deaths', url: 'https://en.nocutnews.co.kr/news/6539383', publisher: 'Nocut News', date: '2026-06-28', kind: 'press' },
    { id: 'aerocorner-ewr', label: 'United begins nonstop Newark to Seoul flights', url: 'https://aerocorner.com/news/united-newark-seoul-incheon-route/', publisher: 'AeroCorner', date: '2026-09-02', kind: 'press' },
    { id: 'koreanair-lax', label: 'Flights from Los Angeles to Seoul (fare snapshot)', url: 'https://www.koreanair.com/flights/en/flights-from-los-angeles-to-seoul', publisher: 'Korean Air', date: '2026-10-30', kind: 'marketplace' },
    { id: 'expedia-gangnam', label: 'Hotels near Apgujeong Station (price snapshot)', url: 'https://www.expedia.com/Apgujeong-Station-Hoteles.d6164776.Guia-Viajes-Hoteles', publisher: 'Expedia', date: '2026-10-30', kind: 'marketplace' },
    { id: 'sedaily-hotels', label: 'Seoul to certify hotels tailored for foreign medical patients', url: 'https://en.sedaily.com/society/2026/09/13/seoul-to-certify-hotels-tailored-for-foreign-medical', publisher: 'Seoul Economic Daily', date: '2026-09-13', kind: 'press' },
    { id: 'koreaexperience-flying', label: 'Flying after surgery: when is it safe to head home (agency guidance)', url: 'https://koreaexperience.com/blog/flying-after-surgery-when-is-it-safe-to-head-home-doctor-advice-2026', publisher: 'Korea Experience (agency)', date: '2026', kind: 'marketplace' },
    { id: 'purseforum-deposit', label: 'Deposit refund policy in South Korea (patient forum thread)', url: 'https://forum.purseblog.com/threads/deposit-refund-policy-in-sk.1020307', publisher: 'PurseForum', date: '2026-10-30', kind: 'forum' },
    { id: 'tenmag-hospitals', label: '11 English-speaking hospitals and clinics in South Korea', url: 'https://10mag.com/english-speaking-hospitals-and-clinics-in-south-korea/', publisher: '10 Magazine', date: '2026-10-30', kind: 'press' },
    { id: 'jad-gyopo', label: 'Gyopo come home for health care', url: 'https://www.koreajoongangdaily.com/korea/gyopo-come-home-for-health-care/10724288', publisher: 'Korea JoongAng Daily', date: '2009-05-12', kind: 'press' },
    { id: 'visitgangnam-jk', label: 'JK Plastic Surgery Center, leader of Gangnam medical tourism', url: 'https://visitgangnam.net/en/places/jk-plastic-surgery-center-leader-of-gangnams-medical-tourism', publisher: 'Gangnam-gu Tourism', date: '2026-10-30', kind: 'official' },
  ],
};
