import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// =============================================================================
// DESTINATION DATA
// =============================================================================
// Comprehensive data for each medical tourism destination based on 2024 research

const DESTINATIONS = {
  mexico: {
    slug: 'mexico',
    country: 'Mexico',
    displayName: 'Mexico',
    flag: '🇲🇽',
    heroDescription: 'The #1 destination for American medical tourists. Border towns offer same-day access, while resort cities combine treatment with vacation. Over 1.2 million Americans travel to Mexico for medical care annually.',
    metaDescription: 'Mexico medical tourism guide: Save 50-80% on dental, bariatric surgery, and cosmetic procedures. Tijuana, Los Algodones, Cancun clinic recommendations.',
    stats: {
      tourists: '1.2M+ Americans/year',
      savings: '50-80%',
      topProcedures: 'Dental, Bariatric, Plastic Surgery',
      flightTime: '0-5 hours',
    },
    whyGoHere: [
      'Closest destination for Americans - some clinics walkable from US border',
      'Largest volume of American medical tourists = experienced with US patients',
      'No visa required for US citizens (up to 180 days)',
      'Many US-trained doctors who did residencies in American hospitals',
      'USD widely accepted; no need to exchange currency',
      '70% of medical tourists come from California, Texas, and Arizona',
    ],
    considerations: [
      'Quality varies widely - research is essential (some unlicensed clinics exist)',
      'Border towns are functional, not luxurious vacation destinations',
      'Check State Department travel advisories for specific regions',
      '2025 update: Some decline in Tijuana traffic due to economic tensions',
      'Bring all medications you need (some harder to get in Mexico)',
    ],
    topCities: [
      {
        name: 'Tijuana',
        description: 'Border city 20 minutes from San Diego. The bariatric surgery capital of the world with modern hospitals and experienced surgeons.',
        bestFor: ['Bariatric Surgery', 'Dental', 'Plastic Surgery'],
        travelTip: 'Walk across at San Ysidro border - most clinics offer free pickup on Mexico side.',
      },
      {
        name: 'Los Algodones',
        description: '"Molar City" - tiny border town with 600+ dental clinics. Walking distance from Yuma, AZ. Same-day trips common.',
        bestFor: ['Dental'],
        travelTip: 'Park at Quechan Casino ($10/day), walk across. Clinics are literally 50 feet from border.',
      },
      {
        name: 'Cancun',
        description: 'Resort city combining treatment with beach vacation. Premium experience with higher travel costs.',
        bestFor: ['Dental', 'Plastic Surgery'],
        travelTip: 'Direct flights from most US cities. Recover on the beach.',
      },
      {
        name: 'Mexico City',
        description: 'Capital with top hospitals like Medica Sur and ABC. Best for complex procedures requiring specialists.',
        bestFor: ['Complex Procedures', 'Specialty Care', 'Oncology'],
        travelTip: 'Major hub with excellent hospitals, but language barrier higher outside medical facilities.',
      },
    ],
    categories: ['dental', 'bariatric', 'plastic_surgery', 'vision', 'longevity'],
    practicalInfo: {
      visa: 'Not required for US citizens (up to 180 days)',
      currency: 'Mexican Peso (MXN). USD widely accepted in tourist/medical areas.',
      language: 'Spanish. English common in medical tourism facilities.',
      timezone: 'Central to Pacific (same as US)',
      insurance: 'US insurance rarely covers procedures. Travel medical insurance recommended ($50-150).',
    },
    costExamples: [
      { procedure: 'Gastric Sleeve', usPrice: '$18,000-27,000', mexicoPrice: '$4,000-6,000' },
      { procedure: 'Dental Implant', usPrice: '$3,000-5,000', mexicoPrice: '$800-1,500' },
      { procedure: 'Stem Cell Therapy (25M cells)', usPrice: '$10,000-25,000', mexicoPrice: '$3,750-8,000' },
      { procedure: 'NAD+ IV Therapy', usPrice: '$500-1,500', mexicoPrice: '$200-500' },
      { procedure: 'All-on-4 Implants', usPrice: '$20,000-30,000', mexicoPrice: '$8,000-12,000' },
    ],
    guideLinks: [
      { title: 'Stem Cell Therapy in Mexico', href: '/guides/mexico-stem-cell-guide' },
      { title: 'Mexico Trip Planning Guide', href: '/guides/mexico-medical-tourism-planner' },
      { title: 'Gastric Sleeve in Mexico: Safety Guide', href: '/guides/gastric-sleeve-mexico-safety' },
      { title: 'Mexico Dental Guide', href: '/guides/mexico-dental-guide' },
    ],
  },

  turkey: {
    slug: 'turkey',
    country: 'Turkey',
    displayName: 'Turkey',
    flag: '🇹🇷',
    heroDescription: 'The global capital of hair transplants. Istanbul clinics perform 60% of the world\'s hair restoration procedures. Turkey hosted 2 million medical tourists in 2024, generating $3 billion in revenue.',
    metaDescription: 'Turkey hair transplant guide: FUE & DHI costs $1,500-6,000 in Istanbul. Compare 350+ clinics, understand packages, avoid "hair mills."',
    stats: {
      tourists: '2M medical tourists (2024)',
      savings: '70-80%',
      topProcedures: 'Hair Transplant, Dental, Plastic Surgery',
      flightTime: '10-12 hours',
    },
    whyGoHere: [
      'World leader in hair transplants - unmatched volume and surgeon experience',
      'All-inclusive packages standard: hotel, transfers, translator, aftercare included',
      'Turkish Lira depreciation makes procedures extremely affordable for Americans',
      '350+ clinics in Istanbul alone = high competition keeps prices low',
      'Many JCI-accredited facilities with modern equipment',
      'Istanbul is a fascinating city to explore during recovery',
    ],
    considerations: [
      'Long flight from US (10-12 hours direct from major hubs)',
      'High-volume "hair mills" can feel like factories - research carefully',
      'Quality varies significantly - avoid suspiciously cheap ($1,200) offers',
      'E-visa required ($50, easy to get online)',
      'Language barrier outside medical facilities',
      'Some clinics use technicians for grafts, not surgeons - ask directly',
    ],
    topCities: [
      {
        name: 'Istanbul',
        description: 'Home to 90%+ of Turkey\'s medical tourism. 350+ hair transplant clinics ranging from budget "hair mills" to premium surgical centers.',
        bestFor: ['Hair Transplant', 'Dental', 'Plastic Surgery', 'Eye Surgery'],
        travelTip: 'Stay in Sisli or Taksim for easy access to medical district. Most clinics include airport transfer.',
      },
      {
        name: 'Antalya',
        description: 'Mediterranean resort city with growing medical tourism. Dental and cosmetic surgery with beach recovery.',
        bestFor: ['Dental', 'Plastic Surgery'],
        travelTip: 'Combine treatment with Turkish Riviera vacation. Smaller, less hectic than Istanbul.',
      },
    ],
    categories: ['hair_transplant', 'dental', 'plastic_surgery'],
    practicalInfo: {
      visa: 'E-visa required for US citizens ($50, apply online at evisa.gov.tr)',
      currency: 'Turkish Lira (TRY). USD/EUR accepted at clinics. Favorable exchange rate.',
      language: 'Turkish. English common in medical tourism facilities. Translators included in packages.',
      timezone: 'GMT+3 (7-8 hours ahead of US)',
      insurance: 'Travel medical insurance recommended. Some clinics offer complication coverage.',
    },
    costExamples: [
      { procedure: 'FUE Hair Transplant (3000 grafts)', usPrice: '$10,000-15,000', turkeyPrice: '$1,800-4,000' },
      { procedure: 'DHI Hair Transplant', usPrice: '$16,000-24,000', turkeyPrice: '$2,500-6,000' },
      { procedure: 'Dental Veneers (per tooth)', usPrice: '$1,000-2,500', turkeyPrice: '$250-450' },
      { procedure: 'Rhinoplasty', usPrice: '$8,000-15,000', turkeyPrice: '$2,500-5,000' },
    ],
    guideLinks: [
      { title: 'Hair Transplant in Turkey: Complete Guide', href: '/guides/hair-transplant-turkey-guide' },
      { title: 'Turkey Trip Planner', href: '/guides/turkey-hair-transplant-trip-planner' },
    ],
  },

  'south-korea': {
    slug: 'south-korea',
    country: 'South Korea',
    displayName: 'South Korea',
    flag: '🇰🇷',
    heroDescription: 'The world\'s plastic surgery capital. Seoul\'s Gangnam district has 500+ clinics - the highest concentration globally. Korea performed 1.17 million foreign medical tourist procedures in 2024.',
    metaDescription: 'South Korea plastic surgery guide: Gangnam clinics, costs 30-60% less than US. Rhinoplasty, double eyelid, facial contouring from Seoul experts.',
    stats: {
      tourists: '1.17M foreign patients (2024)',
      savings: '30-60%',
      topProcedures: 'Plastic Surgery, Dermatology, Dental',
      flightTime: '13-15 hours',
    },
    whyGoHere: [
      'Global leader in plastic surgery innovation and technique',
      'Highest per-capita plastic surgery rate in the world - normalized and refined',
      '2,700+ plastic surgeons for 51M population (highest density globally)',
      'Advanced technology and meticulous attention to natural-looking results',
      'K-beauty culture means dermatology/skincare is world-class',
      'Foreign patients spent $770M on plastic surgery in Korea (2024)',
    ],
    considerations: [
      'Longest flight from US (13-15 hours)',
      'Savings less dramatic than other destinations (30-60% vs 70-80%)',
      'Language barrier can be significant outside tourist areas',
      'Beauty standards may differ from Western preferences - be specific about goals',
      'Gangnam clinics 10-30% pricier than other areas due to premium positioning',
      'Some clinics charge extra for international patients (translation services)',
    ],
    topCities: [
      {
        name: 'Seoul (Gangnam)',
        description: 'The global epicenter of plastic surgery. 814 plastic surgery clinics in Gangnam alone. More cosmetic procedures per square mile than anywhere on Earth.',
        bestFor: ['Plastic Surgery', 'Dermatology', 'Rhinoplasty', 'Facial Contouring'],
        travelTip: 'Stay in Gangnam or Sinsa for walking distance to clinics. Most offer English coordinators.',
      },
      {
        name: 'Seoul (Myeongdong)',
        description: 'Shopping district with many dermatology and skincare clinics. Popular for non-surgical treatments.',
        bestFor: ['Dermatology', 'Skincare', 'Non-Surgical'],
        travelTip: 'Combine treatment with K-beauty shopping. Many clinics cater to tourists.',
      },
    ],
    categories: ['plastic_surgery'],
    practicalInfo: {
      visa: 'Not required for US citizens (up to 90 days)',
      currency: 'Korean Won (KRW). Cards widely accepted. 10% VAT refundable at airport.',
      language: 'Korean. English limited outside tourist areas. Clinics provide coordinators.',
      timezone: 'GMT+9 (13-14 hours ahead of US)',
      insurance: 'Travel medical insurance recommended. Recovery typically 1-2 weeks.',
    },
    costExamples: [
      { procedure: 'Rhinoplasty', usPrice: '$8,000-15,000', koreaPrice: '$3,000-8,000' },
      { procedure: 'Double Eyelid Surgery', usPrice: '$4,000-6,000', koreaPrice: '$1,500-3,000' },
      { procedure: 'Facial Contouring (V-line)', usPrice: '$15,000-25,000', koreaPrice: '$8,000-15,000' },
      { procedure: 'Full Face Lift', usPrice: '$15,000-30,000', koreaPrice: '$8,000-15,000' },
    ],
    guideLinks: [],
  },

  thailand: {
    slug: 'thailand',
    country: 'Thailand',
    displayName: 'Thailand',
    flag: '🇹🇭',
    heroDescription: 'Southeast Asia\'s medical tourism pioneer with 61 JCI-accredited facilities. Bangkok\'s hospitals feel like five-star hotels while offering world-class care at 50-80% savings.',
    metaDescription: 'Thailand medical tourism guide: JCI-accredited Bangkok hospitals, cosmetic surgery, cardiac care. Bumrungrad, Samitivej, BNH costs and reviews.',
    stats: {
      tourists: '3M+ medical tourists annually',
      savings: '50-80%',
      topProcedures: 'Cosmetic Surgery, Cardiac, Orthopedic, Health Checkups',
      flightTime: '17-20 hours',
    },
    whyGoHere: [
      'First Asian country with JCI-accredited hospital (Bumrungrad, 2002)',
      '61 JCI-accredited organizations - highest in Southeast Asia',
      'Hospitals designed for international patients with luxury hotel amenities',
      'Thai doctors trained at Harvard, Mayo Clinic, and top global institutions',
      'Medical Treatment Visa (Non-MT) allows extended stays for patients',
      'Combine treatment with world-famous Thai hospitality and tourism',
    ],
    considerations: [
      'Very long flight from US (17-20 hours with connections)',
      'Hot, humid climate year-round - plan recovery accordingly',
      'Language barrier outside medical facilities and tourist areas',
      'Monsoon season (June-October) can affect travel plans',
      'Some procedures require multiple visits weeks apart',
      'Time zone difference (11-14 hours) can be challenging for work/communication',
    ],
    topCities: [
      {
        name: 'Bangkok',
        description: 'Medical tourism hub with world-renowned hospitals like Bumrungrad (1.1M patients/year), Samitivej, and BNH. Southeast Asia\'s largest private hospital.',
        bestFor: ['Cosmetic Surgery', 'Cardiac Surgery', 'Orthopedic', 'Health Checkups'],
        travelTip: 'Stay near Sukhumvit or Silom for easy BTS access to major hospitals.',
      },
      {
        name: 'Phuket',
        description: 'Beach destination with growing medical tourism. Combine treatment with island recovery.',
        bestFor: ['Cosmetic Surgery', 'Dental', 'Wellness'],
        travelTip: 'Popular for longer recovery stays. Beautiful beaches, but fewer hospital options.',
      },
    ],
    categories: ['plastic_surgery', 'dental', 'cardiac', 'orthopedic'],
    practicalInfo: {
      visa: 'Visa-exempt for US citizens (up to 30 days). Medical visa available for longer stays.',
      currency: 'Thai Baht (THB). USD and cards widely accepted at hospitals.',
      language: 'Thai. English excellent at international hospitals.',
      timezone: 'GMT+7 (11-14 hours ahead of US)',
      insurance: 'Travel medical insurance strongly recommended. Some hospitals offer package deals.',
    },
    costExamples: [
      { procedure: 'Breast Augmentation', usPrice: '$8,000-15,000', thailandPrice: '$3,500-5,500' },
      { procedure: 'CABG (Heart Bypass)', usPrice: '$70,000-150,000', thailandPrice: '$12,000-25,000' },
      { procedure: 'Knee Replacement', usPrice: '$35,000-60,000', thailandPrice: '$10,000-15,000' },
      { procedure: 'Executive Health Checkup', usPrice: '$2,000-5,000', thailandPrice: '$500-1,500' },
    ],
    guideLinks: [],
  },

  india: {
    slug: 'india',
    country: 'India',
    displayName: 'India',
    flag: '🇮🇳',
    heroDescription: 'The value leader in medical tourism with the highest cost savings globally. India\'s $47 billion medical tourism industry specializes in cardiac surgery, orthopedics, and complex procedures at up to 90% savings.',
    metaDescription: 'India medical tourism guide: Cardiac surgery, knee/hip replacement, oncology. Apollo, Max, Fortis hospitals. Save 70-90% vs US prices.',
    stats: {
      tourists: '700K+ medical tourists annually',
      savings: '70-90%',
      topProcedures: 'Cardiac Surgery, Orthopedic, Oncology, Fertility',
      flightTime: '15-20 hours',
    },
    whyGoHere: [
      'Highest cost savings globally - up to 90% on cardiac surgery',
      '$47 billion industry growing at 19.4% annually (2024)',
      'World-class surgeons trained at top US and UK institutions',
      'Minimal waiting times compared to Western countries (months vs years)',
      'English widely spoken - no language barrier in medical settings',
      'Apollo, Fortis, Max hospital networks offer consistent quality',
    ],
    considerations: [
      'Long flight from US (15-20 hours)',
      'Infrastructure and traffic in major cities can be challenging',
      'Cultural adjustment required - very different from Western countries',
      'Quality varies significantly - stick to accredited major hospitals',
      'Climate can be extreme (hot/humid or cold depending on season)',
      'Some visa complexity for medical tourism',
    ],
    topCities: [
      {
        name: 'Delhi/NCR',
        description: 'National capital region with top hospitals including Max, Fortis, and Apollo. Major hub for cardiac and orthopedic surgery.',
        bestFor: ['Cardiac Surgery', 'Orthopedic', 'Neurology', 'Oncology'],
        travelTip: 'Stay in South Delhi or Gurgaon for proximity to major hospitals. Traffic is significant.',
      },
      {
        name: 'Mumbai',
        description: 'Financial capital with world-class hospitals like Kokilaben Dhirubhai Ambani and Lilavati. Cosmopolitan with good tourism infrastructure.',
        bestFor: ['Cardiac Surgery', 'Orthopedic', 'Oncology'],
        travelTip: 'Stay in Bandra or South Mumbai. Well-developed medical tourism infrastructure.',
      },
      {
        name: 'Chennai',
        description: 'Known as India\'s health capital. Apollo flagship hospital, major cardiac and transplant center.',
        bestFor: ['Cardiac Surgery', 'Transplants', 'Orthopedic'],
        travelTip: 'Humid climate. Strong medical tourism ecosystem with many international patient coordinators.',
      },
      {
        name: 'Bangalore',
        description: 'India\'s tech capital with excellent hospitals like Narayana Health (famous for affordable cardiac care).',
        bestFor: ['Cardiac Surgery', 'Orthopedic', 'IVF'],
        travelTip: 'Pleasant climate year-round. Good tourism infrastructure.',
      },
    ],
    categories: ['cardiac', 'orthopedic', 'oncology', 'fertility'],
    practicalInfo: {
      visa: 'Medical visa (M-Visa) required. Apply online, valid for treatment duration.',
      currency: 'Indian Rupee (INR). USD accepted at major hospitals. Cards widely accepted.',
      language: 'Hindi and English. English is common in medical settings.',
      timezone: 'GMT+5:30 (9.5-12.5 hours ahead of US)',
      insurance: 'Travel medical insurance recommended. Many hospitals offer package pricing.',
    },
    costExamples: [
      { procedure: 'CABG (Heart Bypass)', usPrice: '$70,000-150,000', indiaPrice: '$7,000-15,000' },
      { procedure: 'Knee Replacement', usPrice: '$35,000-60,000', indiaPrice: '$4,000-7,000' },
      { procedure: 'Hip Replacement', usPrice: '$40,000-65,000', indiaPrice: '$5,000-8,000' },
      { procedure: 'IVF Cycle', usPrice: '$15,000-25,000', indiaPrice: '$3,000-5,000' },
    ],
    guideLinks: [],
  },

  'costa-rica': {
    slug: 'costa-rica',
    country: 'Costa Rica',
    displayName: 'Costa Rica',
    flag: '🇨🇷',
    heroDescription: 'Latin America\'s premium dental tourism destination. San Jose clinics offer US-trained dentists, American-brand implants, and 50-70% savings with just a 4-hour flight from Miami.',
    metaDescription: 'Costa Rica dental tourism guide: Implants $800-1,200, veneers $375, All-on-4 $8,500. San Jose clinics, travel tips, and clinic recommendations.',
    stats: {
      tourists: '50K+ dental tourists annually',
      savings: '50-70%',
      topProcedures: 'Dental Implants, Veneers, All-on-4, Cosmetic Dentistry',
      flightTime: '4-7 hours',
    },
    whyGoHere: [
      'Short flight from US - just 4 hours from Miami, 5-7 from most cities',
      'Many dentists trained in the US or Europe with American credentials',
      'Same implant brands as US (Straumann, Nobel Biocare, Zimmer)',
      'Stable, safe country with excellent tourism infrastructure',
      'Some clinics offer lifetime warranties on dental work',
      'Combine with eco-tourism and beautiful nature for recovery',
    ],
    considerations: [
      'More expensive than Mexico for dental - premium positioning',
      'Smaller number of clinics to choose from vs Tijuana/Los Algodones',
      'Complex dental work may require 2 trips (implant placement + crown)',
      'Not as much bariatric/cosmetic surgery infrastructure as Mexico',
      'Rainy season (May-November) can affect travel plans',
    ],
    topCities: [
      {
        name: 'San Jose',
        description: 'Capital city with most major dental clinics. Clinics like Prisma Dental, Flikier, and DDS Dental serve 80%+ international patients.',
        bestFor: ['Dental Implants', 'Veneers', 'Full Mouth Restoration', 'All-on-4'],
        travelTip: 'Fly into Juan Santamaria Airport. Clinics often arrange airport pickup and hotels.',
      },
      {
        name: 'Escazu',
        description: 'Upscale suburb of San Jose with premium dental clinics. More resort-like feel with good restaurants and hotels.',
        bestFor: ['Dental', 'Cosmetic Dentistry'],
        travelTip: 'Safer, more upscale area than downtown San Jose. Walking distance to shops and restaurants.',
      },
    ],
    categories: ['dental'],
    practicalInfo: {
      visa: 'Not required for US citizens (up to 90 days)',
      currency: 'Costa Rican Colon (CRC). USD widely accepted, especially in tourist areas.',
      language: 'Spanish. English common at dental clinics.',
      timezone: 'Central Time (same as Chicago/Houston)',
      insurance: 'Travel medical insurance recommended. Dental not typically covered.',
    },
    costExamples: [
      { procedure: 'Single Dental Implant', usPrice: '$3,000-5,000', costaRicaPrice: '$800-1,200' },
      { procedure: 'Porcelain Crown', usPrice: '$1,000-1,500', costaRicaPrice: '$395-500' },
      { procedure: 'All-on-4 Implants', usPrice: '$20,000-30,000', costaRicaPrice: '$8,500-12,000' },
      { procedure: 'Zirconia Veneer', usPrice: '$1,000-2,000', costaRicaPrice: '$375-450' },
    ],
    guideLinks: [],
  },

  spain: {
    slug: 'spain',
    country: 'Spain',
    displayName: 'Spain',
    flag: '🇪🇸',
    heroDescription: 'Europe\'s fertility tourism leader with cutting-edge IVF technology and the highest success rates for donor-egg cycles (55-60%). Strict regulations ensure quality and safety.',
    metaDescription: 'Spain IVF and fertility tourism guide: Egg donation, IVF costs $5,000-8,000, 55-60% success rates. Madrid, Barcelona, Valencia clinic recommendations.',
    stats: {
      tourists: '60K+ fertility tourists annually',
      savings: '30-50%',
      topProcedures: 'IVF, Egg Donation, Fertility Preservation',
      flightTime: '8-10 hours',
    },
    whyGoHere: [
      'Europe\'s #1 destination for fertility treatment and egg donation',
      'Highest success rates for donor-egg IVF in Europe (55-60%)',
      'Strict government regulations ensure clinic quality and safety',
      'Short waiting times compared to UK/US for donor eggs',
      'Anonymous donation legal (donors thoroughly screened)',
      'Beautiful destination for de-stressing during treatment',
    ],
    considerations: [
      'More expensive than Eastern Europe (Czech Republic, Poland)',
      'Multiple trips often required for IVF cycles (monitoring, transfer)',
      'Language barrier outside major cities and clinics',
      'August is vacation month - many clinics have reduced schedules',
      'LGBTQ+ access varies - single women OK, same-sex couples check regulations',
    ],
    topCities: [
      {
        name: 'Barcelona',
        description: 'Major fertility hub with clinics like Institut Marques and Eugin. Beautiful city for combining treatment with vacation.',
        bestFor: ['IVF', 'Egg Donation', 'Fertility Preservation'],
        travelTip: 'Stay in Eixample or Gracia for easy access to clinics. Great food and beaches.',
      },
      {
        name: 'Madrid',
        description: 'Capital with top clinics including IVI and Ginefiv. Excellent transport links and tourism infrastructure.',
        bestFor: ['IVF', 'Egg Donation', 'Complex Fertility Cases'],
        travelTip: 'Stay in Salamanca or Chamberí neighborhoods. Central location for exploring.',
      },
      {
        name: 'Valencia',
        description: 'Home to IVI headquarters (world\'s largest fertility group). Growing destination with lower costs than Barcelona/Madrid.',
        bestFor: ['IVF', 'Egg Donation'],
        travelTip: 'More affordable than Barcelona. Beautiful beaches and architecture.',
      },
    ],
    categories: ['fertility'],
    practicalInfo: {
      visa: 'Not required for US citizens (Schengen zone, up to 90 days)',
      currency: 'Euro (EUR). Cards widely accepted.',
      language: 'Spanish. English common at international fertility clinics.',
      timezone: 'CET (6 hours ahead of East Coast)',
      insurance: 'Fertility treatment rarely covered. Travel medical insurance recommended.',
    },
    costExamples: [
      { procedure: 'IVF Cycle (own eggs)', usPrice: '$15,000-25,000', spainPrice: '$5,000-8,000' },
      { procedure: 'IVF with Donor Eggs', usPrice: '$25,000-40,000', spainPrice: '$8,000-12,000' },
      { procedure: 'Egg Freezing', usPrice: '$10,000-15,000', spainPrice: '$3,500-5,500' },
      { procedure: 'PGT-A Testing', usPrice: '$3,000-6,000', spainPrice: '$2,000-3,500' },
    ],
    guideLinks: [],
  },

  'czech-republic': {
    slug: 'czech-republic',
    country: 'Czech Republic',
    displayName: 'Czech Republic',
    flag: '🇨🇿',
    heroDescription: 'Europe\'s most affordable IVF destination. Prague clinics offer the lowest prices in Europe for own-egg IVF starting at €2,800 with strong success rates.',
    metaDescription: 'Czech Republic IVF guide: Cheapest IVF in Europe from €2,800. Prague fertility clinics, egg donation up to age 48, costs and success rates.',
    stats: {
      tourists: '30K+ fertility tourists annually',
      savings: '50-60%',
      topProcedures: 'IVF, Egg Donation, Embryo Adoption',
      flightTime: '9-11 hours',
    },
    whyGoHere: [
      'Cheapest IVF in Europe - own-egg cycles from €2,800',
      'Strong success rates comparable to Western Europe at half the price',
      'Age limit for donor egg IVF is 48 years and 364 days',
      'Prague is beautiful, affordable, and easy to navigate',
      'Euro-zone standards and quality with Eastern European prices',
      'Egg freezing from €1,500',
    ],
    considerations: [
      'Legal restrictions: Treatment limited to heterosexual couples (married or unmarried)',
      'Donation must be anonymous (no option to know donor identity)',
      'Language barrier - English improving but not universal',
      'Single women and same-sex couples cannot access treatment',
      'Less tourism infrastructure specifically for fertility patients vs Spain',
    ],
    topCities: [
      {
        name: 'Prague',
        description: 'Capital city with major fertility clinics including IVF Cube, Reprofit, and Gennet. Beautiful historic city.',
        bestFor: ['IVF', 'Egg Donation', 'Egg Freezing'],
        travelTip: 'Stay in Prague 1 or 2 for easy access to clinics and sightseeing. Very walkable city.',
      },
      {
        name: 'Brno',
        description: 'Second city with respected fertility clinics including Reprofit headquarters. Less touristy, more affordable.',
        bestFor: ['IVF', 'Egg Donation'],
        travelTip: 'Smaller city, easier to navigate. Good option if Prague feels overwhelming.',
      },
    ],
    categories: ['fertility'],
    practicalInfo: {
      visa: 'Not required for US citizens (Schengen zone, up to 90 days)',
      currency: 'Czech Crown (CZK). Euro accepted at clinics. Good exchange rate.',
      language: 'Czech. English at fertility clinics, limited elsewhere.',
      timezone: 'CET (6 hours ahead of East Coast)',
      insurance: 'Fertility treatment not covered. Travel insurance recommended.',
    },
    costExamples: [
      { procedure: 'IVF Cycle (own eggs)', usPrice: '$15,000-25,000', czechPrice: '€2,800-4,000' },
      { procedure: 'IVF with Donor Eggs', usPrice: '$25,000-40,000', czechPrice: '€5,500-7,500' },
      { procedure: 'Egg Freezing', usPrice: '$10,000-15,000', czechPrice: '€1,500-2,500' },
      { procedure: 'Embryo Adoption', usPrice: '$10,000-20,000', czechPrice: '€3,000-5,000' },
    ],
    guideLinks: [],
  },

  panama: {
    slug: 'panama',
    country: 'Panama',
    displayName: 'Panama',
    flag: '🇵🇦',
    heroDescription: 'The premium stem cell destination for Americans. Panama City\'s Stem Cell Institute pioneered "Golden Cells" therapy using umbilical cord MSCs. NFL players and celebrities travel here for regenerative treatments not available in the US.',
    metaDescription: 'Panama stem cell therapy guide: Golden Cells, umbilical cord MSCs, $25,000-60,000. Stem Cell Institute, celebrity patients, what to expect.',
    stats: {
      tourists: '15K+ stem cell patients annually',
      savings: 'Premium tier (quality focus)',
      topProcedures: 'Stem Cells, Regenerative Medicine, Anti-Aging',
      flightTime: '4-5 hours',
    },
    whyGoHere: [
      'Pioneered "Golden Cells" - umbilical cord mesenchymal stem cells',
      'NFL players (George Kittle, Kyle Juszczyk, Peyton Manning) have treated here',
      'More advanced protocols than available in the United States',
      'English widely spoken - former US territory influence',
      'Same timezone as US East Coast - easy communication',
      'Modern, first-world medical infrastructure in Panama City',
    ],
    considerations: [
      'Premium pricing - not a "medical tourism savings" destination',
      'Limited clinic options compared to Mexico (quality over quantity)',
      'Treatments not FDA-approved - do your research carefully',
      'Multiple treatments often recommended (return visits)',
      'Results vary widely by condition and individual',
      'Not covered by any US insurance',
    ],
    topCities: [
      {
        name: 'Panama City',
        description: 'Home to the renowned Stem Cell Institute founded by Neil Riordan, PhD. Modern clinics with international accreditation.',
        bestFor: ['Stem Cell Therapy', 'Exosomes', 'Regenerative Medicine', 'Anti-Aging'],
        travelTip: 'Stay in Punta Pacifica or Costa del Este for proximity to medical facilities. Direct flights from many US cities.',
      },
    ],
    categories: ['longevity'],
    practicalInfo: {
      visa: 'Not required for US citizens (up to 180 days)',
      currency: 'US Dollar (USD) - Panama uses USD as official currency',
      language: 'Spanish. Excellent English in medical and business settings.',
      timezone: 'EST (same as New York)',
      insurance: 'Not covered by US insurance. Clinics may offer financing options.',
    },
    costExamples: [
      { procedure: 'Stem Cell Treatment (standard)', usPrice: 'Not available', panamaPrice: '$25,000-35,000' },
      { procedure: 'Golden Cells Protocol (comprehensive)', usPrice: 'Not available', panamaPrice: '$45,000-60,000' },
      { procedure: 'Exosome Therapy', usPrice: 'Limited ($15,000+)', panamaPrice: '$12,000-20,000' },
      { procedure: 'Anti-Aging Protocol', usPrice: 'Not available', panamaPrice: '$30,000-50,000' },
    ],
    guideLinks: [
      { title: 'Panama Stem Cell Guide', href: '/guides/panama-stem-cell-guide' },
    ],
  },

  colombia: {
    slug: 'colombia',
    country: 'Colombia',
    displayName: 'Colombia',
    flag: '🇨🇴',
    heroDescription: 'Medellin has emerged as a regenerative medicine hub with modern facilities like BioXcellerator offering all-inclusive stem cell packages. Combine treatment with the "City of Eternal Spring" lifestyle.',
    metaDescription: 'Colombia stem cell therapy guide: BioXcellerator, Medellin clinics, $10,000-35,000. All-inclusive packages, high-concentration MSCs.',
    stats: {
      tourists: '20K+ medical tourists annually',
      savings: '40-60%',
      topProcedures: 'Stem Cells, PRP, Plastic Surgery, Dental',
      flightTime: '4-5 hours from Miami',
    },
    whyGoHere: [
      'BioXcellerator offers all-in-one facility with on-site hotel',
      'High-concentration umbilical cord MSCs (300+ million cells)',
      'Beautiful destination - Medellin is "City of Eternal Spring"',
      'Significant cost savings vs Panama or Cayman',
      'Growing medical tourism infrastructure',
      'INVIMA (drug surveillance agency) provides regulatory framework',
    ],
    considerations: [
      'Newer to stem cell tourism than Panama (less track record)',
      'Quality varies between clinics - research carefully',
      'Some safety concerns in certain areas of cities',
      'Language barrier outside medical facilities',
      'Altitude in Medellin (5,000 ft) may affect some patients',
      'Not FDA-approved treatments',
    ],
    topCities: [
      {
        name: 'Medellin',
        description: 'Home to BioXcellerator and other regenerative medicine clinics. Perfect climate year-round, modern infrastructure.',
        bestFor: ['Stem Cells', 'Regenerative Medicine', 'PRP', 'Anti-Aging'],
        travelTip: 'Stay in El Poblado for safety and proximity to medical facilities. Great food and nightlife for recovery.',
      },
      {
        name: 'Bogota',
        description: 'Capital city with respected clinics including Stemwell. More clinics than Medellin, larger medical infrastructure.',
        bestFor: ['Stem Cells', 'Orthopedic Regenerative', 'Complex Cases'],
        travelTip: 'Higher altitude (8,600 ft) - acclimate before treatment. Cooler climate than Medellin.',
      },
    ],
    categories: ['longevity', 'plastic_surgery', 'dental'],
    practicalInfo: {
      visa: 'Not required for US citizens (up to 90 days)',
      currency: 'Colombian Peso (COP). USD accepted at clinics.',
      language: 'Spanish. English improving at medical facilities.',
      timezone: 'EST (same as New York)',
      insurance: 'Not covered by US insurance. Some clinics offer payment plans.',
    },
    costExamples: [
      { procedure: 'Stem Cell Treatment (50M cells)', usPrice: '$15,000-25,000', colombiaPrice: '$8,000-12,000' },
      { procedure: 'BioXcellerator Package (300M cells)', usPrice: 'Not available', colombiaPrice: '$25,000-35,000' },
      { procedure: 'PRP Therapy', usPrice: '$1,500-3,000', colombiaPrice: '$500-1,000' },
      { procedure: 'Exosome Therapy', usPrice: '$15,000+', colombiaPrice: '$8,000-15,000' },
    ],
    guideLinks: [
      { title: 'Colombia Stem Cell Guide', href: '/guides/colombia-stem-cell-guide' },
    ],
  },

  'cayman-islands': {
    slug: 'cayman-islands',
    country: 'Cayman Islands',
    displayName: 'Cayman Islands',
    flag: '🇰🇾',
    heroDescription: 'The most regulated stem cell destination with standards matching US/UK/EU - but allowing expanded stem cell treatments not available in America. Home to DVC Stem and Regenexx Cayman.',
    metaDescription: 'Cayman Islands stem cell guide: Expanded stem cells, DVC Stem, Regenexx Cayman. Strict regulation, clinical trials, $30,000-60,000.',
    stats: {
      tourists: '5K+ stem cell patients annually',
      savings: 'Premium (regulation focus)',
      topProcedures: 'Expanded Stem Cells, Orthopedic Regenerative',
      flightTime: '1 hour from Miami',
    },
    whyGoHere: [
      'Strictest regulation outside the US (on par with US/UK/EU standards)',
      'Only location for Regenexx-C procedure (expanded stem cells)',
      'IRB-certified clinical trials at DVC Stem (Da Vinci Centre)',
      'Tax haven = well-funded medical infrastructure',
      'Extremely close to US (1 hour from Miami)',
      'Beautiful Caribbean setting for recovery',
    ],
    considerations: [
      'Premium pricing - this is not about savings',
      'Limited clinic options (quality over quantity)',
      'Small island - limited entertainment/activities',
      'Very expensive for food and lodging',
      'Still not FDA-approved even with strict regulation',
      'Weather can be hot and humid',
    ],
    topCities: [
      {
        name: 'Grand Cayman',
        description: 'Home to DVC Stem and Regenexx Cayman. World-class facilities in a Caribbean paradise setting.',
        bestFor: ['Expanded Stem Cells', 'Orthopedic Regenerative', 'Clinical Trials'],
        travelTip: 'Stay in George Town or Seven Mile Beach. Book well in advance - limited hotel availability.',
      },
    ],
    categories: ['longevity', 'orthopedic'],
    practicalInfo: {
      visa: 'Not required for US citizens',
      currency: 'Cayman Islands Dollar (KYD). USD widely accepted.',
      language: 'English (British territory)',
      timezone: 'EST (same as New York)',
      insurance: 'Not covered by US insurance. Some clinics offer complication coverage.',
    },
    costExamples: [
      { procedure: 'Regenexx-C (expanded stem cells)', usPrice: 'Not available in US', caymanPrice: '$30,000-45,000' },
      { procedure: 'DVC Stem Protocol', usPrice: 'Not available in US', caymanPrice: '$35,000-60,000' },
      { procedure: 'Orthopedic Regenerative (per joint)', usPrice: '$5,000-10,000 (same-day)', caymanPrice: '$15,000-25,000 (expanded)' },
      { procedure: 'Anti-Aging Protocol', usPrice: 'Not available', caymanPrice: '$40,000-55,000' },
    ],
    guideLinks: [
      { title: 'Cayman Islands Stem Cell Guide', href: '/guides/cayman-islands-stem-cell-guide' },
    ],
  },

  dubai: {
    slug: 'dubai',
    country: 'United Arab Emirates',
    displayName: 'Dubai',
    flag: '🇦🇪',
    heroDescription: 'Luxury longevity in the desert. Dubai\'s licensed stem cell clinics combine five-star hospitality with regenerative medicine. The AEON Clinic at Atlantis The Royal represents the pinnacle of medical luxury.',
    metaDescription: 'Dubai longevity and stem cell guide: AEON Clinic, Victor Longevity, luxury wellness. $15,000-50,000 treatments with world-class hospitality.',
    stats: {
      tourists: '50K+ medical tourists annually',
      savings: 'Premium tier (luxury focus)',
      topProcedures: 'Stem Cells, Anti-Aging, Executive Wellness',
      flightTime: '14-16 hours',
    },
    whyGoHere: [
      'First licensed autologous stem cell clinic in the Middle East',
      'DHA/MOHAP licensing with GMP manufacturing standards',
      'Unparalleled luxury - clinics in 5-star hotels like Atlantis',
      'Tax-free - no additional costs on treatments',
      'World-class hospitality during recovery',
      'Combine treatment with luxury tourism experience',
    ],
    considerations: [
      'Very long flight from US (14-16 hours)',
      'Premium/luxury pricing - not for budget-conscious',
      'Extreme heat in summer (avoid May-September)',
      'Cultural differences - modest dress outside resorts',
      'Newer to regenerative medicine than Latin America',
      'Time zone difference challenging for work communication',
    ],
    topCities: [
      {
        name: 'Dubai',
        description: 'Home to AEON Clinic (Atlantis The Royal), Victor Longevity, and DNA Health Clinics. World-class facilities with unmatched luxury.',
        bestFor: ['Stem Cells', 'Anti-Aging', 'Executive Wellness', 'HBOT', 'Ozone Therapy'],
        travelTip: 'Stay at the clinic-affiliated hotel for seamless experience. Visit October-April for best weather.',
      },
    ],
    categories: ['longevity'],
    practicalInfo: {
      visa: 'Visa on arrival for US citizens (30 days)',
      currency: 'UAE Dirham (AED). USD accepted at medical facilities.',
      language: 'Arabic. Excellent English everywhere.',
      timezone: 'GMT+4 (9 hours ahead of EST)',
      insurance: 'Not covered by US insurance. Many clinics offer packages.',
    },
    costExamples: [
      { procedure: 'Stem Cell Treatment', usPrice: 'Limited availability', dubaiPrice: '$25,000-45,000' },
      { procedure: 'AEON Longevity Protocol', usPrice: 'Not available', dubaiPrice: '$35,000-50,000' },
      { procedure: 'IV NAD+ Therapy', usPrice: '$500-1,500', dubaiPrice: '$800-1,500' },
      { procedure: 'Executive Wellness Assessment', usPrice: '$5,000-15,000', dubaiPrice: '$8,000-20,000' },
    ],
    guideLinks: [
      { title: 'Dubai Longevity Guide', href: '/guides/dubai-longevity-guide' },
    ],
  },
};

type DestinationSlug = keyof typeof DESTINATIONS;

export function generateStaticParams() {
  return Object.keys(DESTINATIONS).map((destination) => ({
    destination,
  }));
}

export function generateMetadata({ params }: { params: { destination: string } }): Metadata {
  const destination = DESTINATIONS[params.destination as DestinationSlug];
  if (!destination) return { title: 'Destination Not Found' };

  return {
    title: `${destination.displayName} Medical Tourism Guide | VitalityScout`,
    description: destination.metaDescription,
  };
}

export default function DestinationPage({
  params,
}: {
  params: { destination: string };
}) {
  const destination = DESTINATIONS[params.destination as DestinationSlug];

  if (!destination) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TravelGuide',
    name: `${destination.displayName} Medical Tourism Guide`,
    description: destination.heroDescription,
    about: { '@type': 'Country', name: destination.country },
    author: { '@type': 'Organization', name: 'VitalityScout' },
    dateModified: '2024-12-21',
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <header className="border-b border-gray-200 px-4 py-4">
        <div className="mx-auto max-w-6xl">
          <Link href="/" className="text-sm text-blue-600 hover:underline">
            ← Back to directory
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{destination.flag}</span>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">{destination.displayName}</h1>
              <p className="text-sm text-purple-600 font-medium">Medical Tourism Guide</p>
            </div>
          </div>
          <p className="text-lg text-gray-600">{destination.heroDescription}</p>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-lg bg-white border border-gray-200 p-4 text-center">
              <div className="text-lg font-bold text-gray-900">{destination.stats.tourists}</div>
              <div className="text-xs text-gray-500">Medical Tourists</div>
            </div>
            <div className="rounded-lg bg-white border border-gray-200 p-4 text-center">
              <div className="text-xl font-bold text-green-600">{destination.stats.savings}</div>
              <div className="text-xs text-gray-500">Typical Savings</div>
            </div>
            <div className="rounded-lg bg-white border border-gray-200 p-4 text-center">
              <div className="text-lg font-bold text-gray-900">{destination.stats.flightTime}</div>
              <div className="text-xs text-gray-500">From US</div>
            </div>
            <div className="rounded-lg bg-white border border-gray-200 p-4 text-center">
              <div className="text-sm font-medium text-gray-900">{destination.stats.topProcedures}</div>
              <div className="text-xs text-gray-500">Top Procedures</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison Table */}
      {destination.costExamples && destination.costExamples.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Cost Comparison: US vs. {destination.displayName}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Procedure</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">US Price</th>
                  <th className="text-left py-3 px-4 font-semibold text-green-700">{destination.displayName} Price</th>
                </tr>
              </thead>
              <tbody>
                {destination.costExamples.map((example, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-900">{example.procedure}</td>
                    <td className="py-3 px-4 text-gray-500 line-through">{example.usPrice}</td>
                    <td className="py-3 px-4 font-semibold text-green-600">
                      {Object.values(example)[2]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            * Prices are estimates based on 2024 data. Actual costs vary by clinic, complexity, and package inclusions.
          </p>
        </section>
      )}

      {/* Why Go / Considerations */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-green-200 bg-green-50 p-6">
            <h2 className="font-bold text-green-800 mb-4 text-lg">Why {destination.displayName}?</h2>
            <ul className="space-y-3">
              {destination.whyGoHere.map((reason, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-700">
                  <span className="text-green-600 flex-shrink-0">✓</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-6">
            <h2 className="font-bold text-yellow-800 mb-4 text-lg">Things to Consider</h2>
            <ul className="space-y-3">
              {destination.considerations.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-700">
                  <span className="text-yellow-600 flex-shrink-0">!</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Top Cities */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Where to Go in {destination.displayName}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {destination.topCities.map((city) => (
              <div key={city.name} className="rounded-lg bg-white border border-gray-200 p-5">
                <h3 className="font-bold text-gray-900 text-lg">{city.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{city.description}</p>
                {city.travelTip && (
                  <p className="mt-3 text-xs text-blue-700 bg-blue-50 rounded p-2">
                    <strong>Tip:</strong> {city.travelTip}
                  </p>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {city.bestFor.map((proc) => (
                    <span
                      key={proc}
                      className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700"
                    >
                      {proc}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Info */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Practical Information</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Visa</h3>
            <p className="text-sm text-gray-900">{destination.practicalInfo.visa}</p>
          </div>
          <div className="rounded-lg bg-white border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Currency</h3>
            <p className="text-sm text-gray-900">{destination.practicalInfo.currency}</p>
          </div>
          <div className="rounded-lg bg-white border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Language</h3>
            <p className="text-sm text-gray-900">{destination.practicalInfo.language}</p>
          </div>
          <div className="rounded-lg bg-white border border-gray-200 p-5">
            <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Timezone</h3>
            <p className="text-sm text-gray-900">{destination.practicalInfo.timezone}</p>
          </div>
          <div className="rounded-lg bg-white border border-gray-200 p-5 sm:col-span-2">
            <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Insurance</h3>
            <p className="text-sm text-gray-900">{destination.practicalInfo.insurance}</p>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      {destination.guideLinks && destination.guideLinks.length > 0 && (
        <section className="bg-blue-50 px-4 py-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h2>
            <div className="flex flex-wrap gap-3">
              {destination.guideLinks.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="rounded-lg bg-white border border-blue-200 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100 transition-colors"
                >
                  {guide.title} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Browse Procedures */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Browse Procedures in {destination.displayName}</h2>
        <div className="flex flex-wrap gap-3">
          {destination.categories.map((cat) => (
            <Link
              key={cat}
              href={`/${cat}`}
              className="rounded-lg border border-gray-200 px-5 py-3 hover:border-purple-400 hover:bg-purple-50 transition-colors"
            >
              <span className="font-medium text-gray-900 capitalize">
                {cat.replace('_', ' ')}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-50 to-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Explore {destination.displayName}?</h2>
          <p className="text-gray-600 mb-6">
            Compare vetted providers and read real patient experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/medical-tourism"
              className="inline-block rounded-lg bg-purple-600 px-6 py-3 font-medium text-white hover:bg-purple-700"
            >
              View All Providers
            </Link>
            <Link
              href="/guides/medical-travel-insurance-guide"
              className="inline-block rounded-lg border-2 border-purple-600 px-6 py-3 font-medium text-purple-600 hover:bg-purple-50"
            >
              Medical Travel Insurance Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-4 py-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm text-gray-500">
            Information is for guidance only based on 2024 research. Verify current requirements, regulations, and pricing directly with clinics. Not medical advice.
          </p>
          <div className="mt-4">
            <Link href="/" className="text-sm text-blue-600 hover:underline">
              ← Back to VitalityScout
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
