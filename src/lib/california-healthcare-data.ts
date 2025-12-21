// California Healthcare Data - Detailed Regional Health Systems
// Last Updated: December 2024
// Sources: US News & World Report, CA OSHPD, hospital websites

export interface CaliforniaHealthSystem {
  name: string;
  slug: string;
  type: 'academic' | 'nonprofit' | 'for-profit' | 'public' | 'hmo';
  beds?: number;
  founded?: number;
  nationalRank?: string;
  stateRank?: number;
  specialties?: string[];
  highlights: string[];
  bestFor: string[];
  considerations: string[];
  website: string;
  // Link to national health system page if Honor Roll
  nationalSlug?: string;
}

export interface CaliforniaRegion {
  name: string;
  slug: string;
  cities: string;
  population: string;
  overview: string;
  healthcareLandscape: string;
  keyConsiderations: string[];
  healthSystems: CaliforniaHealthSystem[];
}

export const CALIFORNIA_REGIONS: CaliforniaRegion[] = [
  {
    name: 'Bay Area - San Francisco',
    slug: 'bay-area-san-francisco',
    cities: 'San Francisco, Oakland, Berkeley',
    population: '~4.7M',
    overview: 'San Francisco and the East Bay form one of the nation\'s premier healthcare markets, anchored by UCSF, a world-renowned academic medical center consistently ranked among the top 10 hospitals nationally.',
    healthcareLandscape: 'The region offers diverse options from elite academic medicine at UCSF to integrated HMO care through Kaiser, community hospitals via Sutter, and the public safety net at Zuckerberg SF General. Competition keeps quality high, but costs are among the highest in the nation.',
    keyConsiderations: [
      'UCSF is the clear choice for complex or rare conditions',
      'Kaiser offers excellent value if you prefer integrated care',
      'Sutter CPMC provides high-quality community hospital care',
      'SF General is a Level I trauma center and serves uninsured patients',
    ],
    healthSystems: [
      {
        name: 'UCSF Health',
        slug: 'ucsf-health',
        type: 'academic',
        beds: 889,
        founded: 1907,
        nationalRank: '#7 nationally (US News 2024-25)',
        stateRank: 1,
        nationalSlug: 'ucsf-medical-center',
        specialties: [
          'Cancer (#5 nationally)',
          'Neurology & Neurosurgery (#2 nationally)',
          'Geriatrics (#8 nationally)',
          'Ophthalmology (#6 nationally)',
          'Rheumatology (#6 nationally)',
        ],
        highlights: [
          '29 consecutive years on US News Honor Roll',
          'Top medical school (UCSF School of Medicine)',
          'UCSF Helen Diller Comprehensive Cancer Center (NCI-designated)',
          'Pioneer in HIV/AIDS research and treatment',
          '13 adult and 11 pediatric specialties nationally ranked',
        ],
        bestFor: [
          'Complex cancer cases requiring cutting-edge treatment',
          'Rare diseases and conditions requiring specialized expertise',
          'Neurological conditions (Parkinson\'s, epilepsy, brain tumors)',
          'Organ transplants',
          'Patients seeking access to clinical trials',
        ],
        considerations: [
          'Wait times can be long for non-urgent appointments',
          'Higher out-of-pocket costs for non-network patients',
          'Parking at Parnassus campus is challenging',
          'May be overwhelming for routine care needs',
        ],
        website: 'https://www.ucsfhealth.org',
      },
      {
        name: 'Sutter CPMC (California Pacific Medical Center)',
        slug: 'sutter-cpmc',
        type: 'nonprofit',
        beds: 694,
        founded: 1875,
        stateRank: 15,
        specialties: [
          'Cardiovascular care',
          'Orthopedics',
          'Cancer',
          'Stroke care',
          'Women\'s health',
        ],
        highlights: [
          'New Van Ness campus opened 2019 ($2B state-of-the-art facility)',
          'Part of Sutter Health network (24 hospitals)',
          'High-performing in hip/knee replacement',
          'Level I trauma center (Mission Bernal campus)',
          'Top-rated maternity services',
        ],
        bestFor: [
          'Routine to moderately complex surgeries',
          'Maternity and childbirth',
          'Cardiac care when UCSF wait times are long',
          'Patients with Sutter Health insurance',
          'Those seeking excellent facilities without academic medical center intensity',
        ],
        considerations: [
          'Not as strong in rare or highly complex conditions',
          'Insurance coverage varies across Sutter network',
          'Some specialty services require UCSF referral',
        ],
        website: 'https://www.sutterhealth.org/cpmc',
      },
      {
        name: 'Kaiser San Francisco',
        slug: 'kaiser-san-francisco',
        type: 'hmo',
        beds: 247,
        founded: 1942,
        specialties: [
          'Preventive care',
          'Chronic disease management',
          'Primary care',
          'Mental health',
        ],
        highlights: [
          'Integrated care model (insurance + providers)',
          'Highly rated for preventive care and wellness',
          'Excellent electronic health records system',
          'Low out-of-pocket costs for members',
          'Same-day appointments often available',
        ],
        bestFor: [
          'Preventive care and routine health maintenance',
          'Chronic disease management (diabetes, hypertension)',
          'Patients who value integrated, coordinated care',
          'Cost-conscious patients seeking predictable expenses',
          'Those who prefer one-stop shopping for healthcare',
        ],
        considerations: [
          'Must use Kaiser providers (limited network)',
          'May need referrals for specialists',
          'Less suitable for rare or complex conditions',
          'Shorter appointment times than private practices',
        ],
        website: 'https://healthy.kaiserpermanente.org/northern-california/facilities/san-francisco-medical-center',
      },
      {
        name: 'Zuckerberg San Francisco General Hospital',
        slug: 'sf-general',
        type: 'public',
        beds: 598,
        founded: 1872,
        specialties: [
          'Trauma (Level I)',
          'Emergency medicine',
          'HIV/AIDS care',
          'Psychiatry',
          'Safety net services',
        ],
        highlights: [
          'Only Level I trauma center in San Francisco',
          'UCSF teaching affiliate',
          'Ward 86 - pioneering HIV clinic since 1983',
          'Serves all patients regardless of ability to pay',
          'Newest building opened 2016',
        ],
        bestFor: [
          'Trauma and emergency care',
          'HIV/AIDS treatment (internationally renowned)',
          'Uninsured or underinsured patients',
          'Psychiatric emergencies',
          'Patients connected to UCSF medical residents',
        ],
        considerations: [
          'Long wait times for non-emergency care',
          'Limited elective surgery capacity',
          'Primarily serves safety net population',
          'Less suitable for elective or routine care if you have insurance',
        ],
        website: 'https://zuckerbergsanfranciscogeneral.org',
      },
    ],
  },
  {
    name: 'Bay Area - South Bay/Peninsula',
    slug: 'bay-area-south-bay',
    cities: 'San Jose, Palo Alto, Mountain View, Sunnyvale',
    population: '~3M',
    overview: 'The South Bay and Peninsula region is home to Stanford Health Care, one of the nation\'s elite academic medical centers, along with excellent community hospital options serving Silicon Valley\'s tech workforce.',
    healthcareLandscape: 'Stanford dominates for complex care, while El Camino Health and Good Samaritan provide high-quality community hospital services. Kaiser has a strong presence for integrated care. The region\'s affluent population supports high healthcare investment.',
    keyConsiderations: [
      'Stanford is the premier choice for complex conditions',
      'El Camino Health excels at cardiac and orthopedic care',
      'Kaiser Santa Clara is one of Kaiser\'s flagship facilities',
      'Good Samaritan offers excellent community hospital care',
    ],
    healthSystems: [
      {
        name: 'Stanford Health Care',
        slug: 'stanford-health-care',
        type: 'academic',
        beds: 610,
        founded: 1959,
        nationalRank: '#9 nationally (US News 2024-25)',
        stateRank: 2,
        nationalSlug: 'stanford-health-care',
        specialties: [
          'Cancer (#9 nationally, NCI-designated)',
          'Cardiology & Heart Surgery (#11 nationally)',
          'Pulmonology (#19 nationally)',
          'Orthopedics',
          'Organ transplants',
        ],
        highlights: [
          '10 consecutive years on US News Honor Roll',
          'Stanford Medicine - top research institution',
          'New Stanford Hospital opened 2019 (state-of-the-art)',
          'Pioneer in robotic surgery and minimally invasive techniques',
          'Strong in precision medicine and genomics',
        ],
        bestFor: [
          'Complex cancer requiring precision oncology',
          'Heart conditions requiring advanced intervention',
          'Patients seeking cutting-edge treatments',
          'Organ transplants',
          'Access to Stanford\'s clinical research programs',
        ],
        considerations: [
          'Very high costs for out-of-network patients',
          'Can feel overwhelming for routine care',
          'Palo Alto location may be inconvenient for South Bay residents',
          'Appointment availability can be limited',
        ],
        website: 'https://stanfordhealthcare.org',
      },
      {
        name: 'El Camino Health',
        slug: 'el-camino-health',
        type: 'nonprofit',
        beds: 443,
        founded: 1961,
        stateRank: 20,
        specialties: [
          'Cardiac care (nationally recognized)',
          'Orthopedics',
          'Cancer',
          'Stroke care',
          'Women\'s health',
        ],
        highlights: [
          'Top-rated for cardiac care in the region',
          'Joint Commission certified stroke center',
          'South Asian Heart Center (unique program)',
          'Mountain View and Los Gatos campuses',
          'High patient satisfaction scores',
        ],
        bestFor: [
          'Cardiac care (especially for South Asian population)',
          'Joint replacement and orthopedic surgery',
          'Patients who want excellent care without academic intensity',
          'Women\'s health services',
          'Residents of Mountain View/Los Gatos area',
        ],
        considerations: [
          'Less suitable for highly complex or rare conditions',
          'Limited Level I trauma capability',
          'May need Stanford referral for complex cancer',
        ],
        website: 'https://www.elcaminohealth.org',
      },
      {
        name: 'Kaiser Santa Clara',
        slug: 'kaiser-santa-clara',
        type: 'hmo',
        beds: 327,
        founded: 1965,
        specialties: [
          'Integrated primary care',
          'Chronic disease management',
          'Preventive medicine',
          'Mental health',
        ],
        highlights: [
          'Flagship Kaiser facility in South Bay',
          'One of Kaiser\'s largest medical centers',
          'Excellent preventive care programs',
          'On-site specialty services',
          'Modern facilities recently renovated',
        ],
        bestFor: [
          'Kaiser members seeking comprehensive care',
          'Preventive care and health maintenance',
          'Chronic disease management',
          'Patients valuing integrated, coordinated care',
          'Cost-predictable healthcare',
        ],
        considerations: [
          'Must be Kaiser member',
          'Limited choice of providers',
          'Complex cases may be referred to Stanford',
        ],
        website: 'https://healthy.kaiserpermanente.org/northern-california/facilities/santa-clara-medical-center',
      },
      {
        name: 'Good Samaritan Hospital',
        slug: 'good-samaritan-san-jose',
        type: 'nonprofit',
        beds: 474,
        founded: 1965,
        stateRank: 25,
        specialties: [
          'Cardiac care',
          'Cancer',
          'Stroke care',
          'Maternity',
          'Emergency services',
        ],
        highlights: [
          'HCA Healthcare facility',
          'Level II trauma center',
          'Comprehensive stroke center',
          'Strong cardiac surgery program',
          'Good Samaritan Cancer Institute',
        ],
        bestFor: [
          'San Jose residents seeking quality community care',
          'Emergency and trauma services',
          'Cardiac surgery and interventions',
          'Patients with HCA-affiliated insurance',
          'Maternity services in downtown San Jose',
        ],
        considerations: [
          'For-profit HCA ownership may affect some decisions',
          'Not as prestigious as Stanford for complex cases',
          'Parking can be challenging',
        ],
        website: 'https://goodsamsanjose.com',
      },
    ],
  },
  {
    name: 'Los Angeles Metro',
    slug: 'los-angeles-metro',
    cities: 'Los Angeles, Pasadena, Long Beach, Glendale',
    population: '~10M',
    overview: 'Los Angeles has one of the most competitive healthcare markets in the nation, with two Honor Roll hospitals (UCLA and Cedars-Sinai), plus USC Keck and numerous other excellent options. The sheer number of choices can be overwhelming.',
    healthcareLandscape: 'UCLA Medical Center and Cedars-Sinai are both world-class, with UCLA exceling in academic medicine and Cedars known for celebrity-quality care. USC Keck is strong in research. Providence and other systems serve various communities across the sprawling metro.',
    keyConsiderations: [
      'UCLA and Cedars-Sinai are both excellent - choice may depend on location',
      'UCLA is stronger in research and academic medicine',
      'Cedars-Sinai is known for concierge-level service',
      'USC Keck is underrated and offers excellent specialty care',
      'Traffic means location matters - choose the closer excellent option',
    ],
    healthSystems: [
      {
        name: 'UCLA Medical Center',
        slug: 'ucla-medical-center',
        type: 'academic',
        beds: 520,
        founded: 1955,
        nationalRank: '#6 nationally (US News 2024-25)',
        stateRank: 1,
        nationalSlug: 'ucla-medical-center',
        specialties: [
          'ENT (#2 nationally)',
          'Pulmonology (#4 nationally)',
          'Diabetes & Endocrinology (#5 nationally)',
          'Ophthalmology (#5 nationally)',
          'Psychiatry (#5 nationally)',
        ],
        highlights: [
          '36 consecutive years on Honor Roll (longest streak)',
          '10 specialties ranked in national top 10',
          'Top medical school (David Geffen School of Medicine)',
          'NCI-designated cancer center',
          'Leader in organ transplants',
        ],
        bestFor: [
          'Complex conditions requiring subspecialist expertise',
          'Rare diseases and diagnostically challenging cases',
          'Organ transplants',
          'Ear, nose, throat conditions (nationally leading)',
          'Endocrine disorders including diabetes',
        ],
        considerations: [
          'Westwood location means significant traffic',
          'Very high costs for out-of-network',
          'Can feel impersonal due to size',
          'Long wait times for popular specialists',
        ],
        website: 'https://www.uclahealth.org',
      },
      {
        name: 'Cedars-Sinai Medical Center',
        slug: 'cedars-sinai',
        type: 'nonprofit',
        beds: 915,
        founded: 1902,
        nationalRank: '#8 nationally (US News 2024-25)',
        stateRank: 2,
        nationalSlug: 'cedars-sinai-medical-center',
        specialties: [
          'Cardiology & Heart Surgery (#6 nationally)',
          'Gastroenterology (#7 nationally)',
          'Diabetes & Endocrinology (#9 nationally)',
          'Orthopedics (#10 nationally)',
          'Neurology',
        ],
        highlights: [
          '10 consecutive years on Honor Roll',
          '8 consecutive 5-star CMS ratings',
          'Known for celebrity and VIP care',
          'Largest nonprofit hospital in Western US',
          'Strong in cardiac care and GI',
        ],
        bestFor: [
          'Heart disease and cardiac surgery',
          'GI conditions and liver disease',
          'Patients who value concierge-level service',
          'Orthopedic surgery',
          'Those with excellent insurance wanting premium experience',
        ],
        considerations: [
          'Very expensive for out-of-network patients',
          'Can feel commercial compared to academic centers',
          'West Hollywood location has parking challenges',
          'May prioritize well-insured patients',
        ],
        website: 'https://www.cedars-sinai.org',
      },
      {
        name: 'Keck Medical Center of USC',
        slug: 'keck-usc',
        type: 'academic',
        beds: 401,
        founded: 1885,
        stateRank: 5,
        specialties: [
          'Cancer (NCI-designated)',
          'Urology',
          'ENT',
          'Ophthalmology',
          'Organ transplants',
        ],
        highlights: [
          'USC Norris Comprehensive Cancer Center',
          'Pioneer in organ transplantation',
          'Strong urology program',
          'USC Roski Eye Institute',
          'Downtown location serves diverse community',
        ],
        bestFor: [
          'Cancer treatment (especially urologic cancers)',
          'Patients affiliated with USC',
          'Those seeking academic medicine at potentially lower cost than UCLA',
          'Downtown LA residents',
          'Ophthalmology and vision care',
        ],
        considerations: [
          'Downtown LA location can be challenging',
          'Less name recognition than UCLA or Cedars',
          'Smaller campus and facilities',
          'Not on US News Honor Roll',
        ],
        website: 'https://www.keckmedicine.org',
      },
      {
        name: "Providence Saint John's Health Center",
        slug: 'providence-saint-johns',
        type: 'nonprofit',
        beds: 266,
        founded: 1942,
        stateRank: 18,
        specialties: [
          'Cancer (John Wayne Cancer Institute)',
          'Orthopedics',
          'Cardiac care',
          'Spine surgery',
        ],
        highlights: [
          'John Wayne Cancer Institute on campus',
          'Santa Monica beachside location',
          'High patient satisfaction',
          'Part of Providence health system',
          'Preferred by Westside residents',
        ],
        bestFor: [
          'Westside residents wanting excellent local care',
          'Cancer patients (John Wayne Cancer Institute)',
          'Those seeking smaller, more personal setting',
          'Orthopedic procedures',
          'Patients with Providence insurance',
        ],
        considerations: [
          'Smaller than UCLA or Cedars for complex cases',
          'Limited Level I trauma capability',
          'May refer complex cases to larger centers',
        ],
        website: 'https://www.providence.org/locations/saint-johns-health-center',
      },
    ],
  },
  {
    name: 'San Diego',
    slug: 'san-diego',
    cities: 'San Diego, Chula Vista, La Jolla, Carlsbad',
    population: '~3.3M',
    overview: 'San Diego\'s healthcare is anchored by UC San Diego Health, an Honor Roll hospital, with Scripps Health and Sharp Healthcare providing excellent alternatives across the county.',
    healthcareLandscape: 'UC San Diego Health is the academic leader, while Scripps and Sharp operate multiple community hospitals throughout the region. Kaiser has a significant presence. The market is competitive with generally high quality across providers.',
    keyConsiderations: [
      'UC San Diego Health is the clear leader for complex care',
      'Scripps La Jolla rivals UCSD for quality in many areas',
      'Sharp offers excellent community hospital care countywide',
      'Location matters given San Diego\'s sprawl',
    ],
    healthSystems: [
      {
        name: 'UC San Diego Health',
        slug: 'ucsd-health',
        type: 'academic',
        beds: 1101,
        founded: 1966,
        nationalRank: '#14 nationally (US News 2024-25)',
        stateRank: 5,
        nationalSlug: 'uc-san-diego-health',
        specialties: [
          'OB/GYN (#7 nationally)',
          'Pulmonology (#8 nationally)',
          'Geriatrics (#18 nationally)',
          'Cancer (NCI-designated)',
          'Cardiology',
        ],
        highlights: [
          'US News Honor Roll hospital',
          '#1 in San Diego',
          'Moores Cancer Center (NCI-designated)',
          'Shiley Eye Institute',
          'Sulpizio Cardiovascular Center',
        ],
        bestFor: [
          'Complex cancer requiring academic expertise',
          'High-risk pregnancy and OB/GYN',
          'Respiratory conditions',
          'Geriatric patients with complex needs',
          'Access to clinical trials',
        ],
        considerations: [
          'La Jolla location can be far for South Bay residents',
          'Higher costs than community hospitals',
          'Wait times for popular specialists',
        ],
        website: 'https://health.ucsd.edu',
      },
      {
        name: 'Scripps La Jolla (Scripps Memorial Hospital)',
        slug: 'scripps-la-jolla',
        type: 'nonprofit',
        beds: 700,
        founded: 1924,
        stateRank: 8,
        specialties: [
          'Cardiac care',
          'Cancer',
          'Orthopedics',
          'Stroke care',
          'Robotic surgery',
        ],
        highlights: [
          'Prebys Cardiovascular Institute',
          'Scripps MD Anderson Cancer Center partnership',
          'Top-rated cardiac surgery',
          'Comprehensive stroke center',
          'High patient satisfaction',
        ],
        bestFor: [
          'Cardiac surgery and interventional cardiology',
          'Cancer care (MD Anderson partnership)',
          'Patients wanting high-quality without academic intensity',
          'La Jolla/North County residents',
          'Those with Scripps insurance',
        ],
        considerations: [
          'Not an academic medical center',
          'Complex cases may require UCSD',
          'La Jolla location premium',
        ],
        website: 'https://www.scripps.org/locations/hospitals/scripps-memorial-hospital-la-jolla',
      },
      {
        name: 'Sharp Memorial Hospital',
        slug: 'sharp-memorial',
        type: 'nonprofit',
        beds: 457,
        founded: 1955,
        stateRank: 12,
        specialties: [
          'Cardiac care',
          'Cancer',
          'Orthopedics',
          'Transplant',
          'Trauma (Level I)',
        ],
        highlights: [
          'Only private hospital Level I trauma center in SD',
          'Sharp Allison deRose Rehabilitation Center',
          'Sharp HealthCare system (4 hospitals)',
          'Strong community presence',
          'Magnet recognition for nursing',
        ],
        bestFor: [
          'Trauma and emergency care',
          'Rehabilitation services',
          'San Diego residents preferring community system',
          'Those with Sharp insurance',
          'Patients wanting large system resources',
        ],
        considerations: [
          'Less prestigious for highly complex cases than UCSD',
          'Kearny Mesa location can have traffic',
        ],
        website: 'https://www.sharp.com/hospitals/memorial',
      },
      {
        name: 'Kaiser San Diego',
        slug: 'kaiser-san-diego',
        type: 'hmo',
        beds: 321,
        founded: 1975,
        specialties: [
          'Integrated care',
          'Preventive medicine',
          'Chronic disease management',
          'Primary care',
        ],
        highlights: [
          'Kaiser\'s San Diego flagship',
          'Excellent preventive care',
          'Integrated care model',
          'Multiple locations throughout county',
          'Strong digital health tools',
        ],
        bestFor: [
          'Kaiser members',
          'Preventive care and wellness',
          'Chronic disease management',
          'Cost-conscious patients',
          'Those valuing integrated care',
        ],
        considerations: [
          'Must use Kaiser network',
          'Complex cases may go to UCSD',
          'Limited specialist choice',
        ],
        website: 'https://healthy.kaiserpermanente.org/southern-california/facilities/san-diego-medical-center',
      },
    ],
  },
  {
    name: 'Sacramento Valley',
    slug: 'sacramento-valley',
    cities: 'Sacramento, Stockton, Modesto, Davis',
    population: '~3.5M',
    overview: 'Sacramento\'s healthcare is led by UC Davis Medical Center, the region\'s only academic medical center and Level I trauma center. Sutter and Dignity Health provide strong community alternatives.',
    healthcareLandscape: 'UC Davis is the clear leader for complex care and trauma, while Sutter Sacramento and Kaiser serve the majority of routine and preventive care needs. The region is somewhat underserved compared to the Bay Area.',
    keyConsiderations: [
      'UC Davis is the only academic medical center in the Central Valley',
      'Sutter Medical Center Sacramento is the main community hospital alternative',
      'Kaiser Sacramento serves a large membership base',
      'May need Bay Area referrals for highly specialized care',
    ],
    healthSystems: [
      {
        name: 'UC Davis Medical Center',
        slug: 'uc-davis-medical-center',
        type: 'academic',
        beds: 649,
        founded: 1851,
        stateRank: 7,
        specialties: [
          'Trauma (Level I - only in region)',
          'Cancer (NCI-designated)',
          'Children\'s Hospital',
          'Burn center',
          'Transplant',
        ],
        highlights: [
          'Only Level I trauma & burn center between SF and Oregon',
          'UC Davis Comprehensive Cancer Center',
          'UC Davis Children\'s Hospital',
          'Regional referral center for Central Valley',
          'Strong in trauma and emergency medicine',
        ],
        bestFor: [
          'Trauma and severe injuries',
          'Complex cancer cases',
          'Pediatric specialty care',
          'Burn treatment',
          'Patients needing academic medical center in Central Valley',
        ],
        considerations: [
          'Not as highly ranked nationally as UCSF or UCLA',
          'May refer ultra-complex cases to Bay Area',
          'Wait times for some specialties',
        ],
        website: 'https://health.ucdavis.edu/medicalcenter/',
      },
      {
        name: 'Sutter Medical Center Sacramento',
        slug: 'sutter-sacramento',
        type: 'nonprofit',
        beds: 513,
        founded: 1923,
        stateRank: 18,
        specialties: [
          'Cardiac care',
          'Cancer (Sutter Cancer Centers)',
          'Orthopedics',
          'Stroke care',
          'Maternity',
        ],
        highlights: [
          'Part of Sutter Health network',
          'Comprehensive cardiac program',
          'Certified stroke center',
          'Strong regional reputation',
          'Multiple convenient locations',
        ],
        bestFor: [
          'Routine to moderately complex care',
          'Cardiac surgery and interventions',
          'Maternity services',
          'Sacramento residents with Sutter insurance',
          'Those wanting community hospital feel',
        ],
        considerations: [
          'Not academic - UC Davis for complex cases',
          'Insurance limitations within Sutter network',
        ],
        website: 'https://www.sutterhealth.org/sutter-medical-center-sacramento',
      },
      {
        name: 'Kaiser Sacramento',
        slug: 'kaiser-sacramento',
        type: 'hmo',
        beds: 291,
        founded: 1954,
        specialties: [
          'Primary care',
          'Preventive medicine',
          'Chronic disease management',
          'Mental health',
        ],
        highlights: [
          'Major Kaiser presence in Sacramento',
          'Multiple facilities throughout region',
          'Strong preventive care programs',
          'Integrated care model',
        ],
        bestFor: [
          'Kaiser members',
          'Preventive care',
          'Chronic disease management',
          'Cost-conscious patients',
        ],
        considerations: [
          'Kaiser network only',
          'Complex cases referred to UC Davis',
          'Limited specialist choice',
        ],
        website: 'https://healthy.kaiserpermanente.org/northern-california/facilities/sacramento-medical-center',
      },
      {
        name: 'Dignity Health Mercy General Hospital',
        slug: 'mercy-general-sacramento',
        type: 'nonprofit',
        beds: 315,
        founded: 1895,
        stateRank: 22,
        specialties: [
          'Cardiac care (Mercy Heart & Vascular Institute)',
          'Cancer',
          'Orthopedics',
          'Stroke care',
        ],
        highlights: [
          'Mercy Heart & Vascular Institute',
          'Part of CommonSpirit Health',
          'Strong cardiac surgery program',
          'Long history in Sacramento',
        ],
        bestFor: [
          'Cardiac care',
          'Community hospital needs',
          'Patients with Dignity Health insurance',
          'East Sacramento residents',
        ],
        considerations: [
          'Not academic',
          'Smaller than UC Davis or Sutter',
        ],
        website: 'https://www.dignityhealth.org/sacramento/locations/mercy-general',
      },
    ],
  },
];

// Helper functions
export function getCaliforniaRegionBySlug(slug: string): CaliforniaRegion | undefined {
  return CALIFORNIA_REGIONS.find((r) => r.slug === slug);
}

export function getAllCaliforniaRegionSlugs(): string[] {
  return CALIFORNIA_REGIONS.map((r) => r.slug);
}

export function getCaliforniaHealthSystemBySlug(
  regionSlug: string,
  systemSlug: string
): CaliforniaHealthSystem | undefined {
  const region = getCaliforniaRegionBySlug(regionSlug);
  if (!region) return undefined;
  return region.healthSystems.find((s) => s.slug === systemSlug);
}
