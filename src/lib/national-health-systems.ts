// National Health Systems Data
// Top-ranked hospitals and health systems in the United States
// Source: US News & World Report 2024-2025 Best Hospitals Rankings

export interface NationalHealthSystem {
  name: string;
  slug: string;
  location: {
    city: string;
    state: string;
    address?: string;
  };
  ranking: {
    overall?: number;
    honorRoll: boolean;
    worldRank?: number;
    stateRank?: number;
  };
  specialties: SpecialtyRanking[];
  facts: {
    beds?: number;
    physicians?: number;
    employees?: number;
    founded?: number;
    annualPatients?: string;
    researchBudget?: string;
  };
  highlights: string[];
  uniqueAchievements: string[];
  website: string;
  imageUrl?: string;
}

export interface SpecialtyRanking {
  specialty: string;
  rank: number;
  isTopTen: boolean;
  consecutiveYears?: number;
  note?: string;
}

export interface SpecialtyLeader {
  specialty: string;
  slug: string;
  description: string;
  leader: {
    name: string;
    slug: string;
    location: string;
    consecutiveYears?: number;
    achievement: string;
  };
  topThree?: {
    name: string;
    location: string;
  }[];
}

// ==========================================
// HONOR ROLL HOSPITALS (Top 20 Nationally)
// ==========================================

export const honorRollHospitals: NationalHealthSystem[] = [
  {
    name: 'Mayo Clinic',
    slug: 'mayo-clinic',
    location: {
      city: 'Rochester',
      state: 'Minnesota',
    },
    ranking: {
      overall: 1,
      honorRoll: true,
      worldRank: 1,
    },
    specialties: [
      { specialty: 'Diabetes & Endocrinology', rank: 1, isTopTen: true, consecutiveYears: 28 },
      { specialty: 'Gastroenterology & GI Surgery', rank: 1, isTopTen: true, consecutiveYears: 9 },
      { specialty: 'Pulmonology & Lung Surgery', rank: 1, isTopTen: true, note: 'Tied with NYU Langone' },
      { specialty: 'Urology', rank: 3, isTopTen: true },
      { specialty: 'Cardiology & Heart Surgery', rank: 4, isTopTen: true },
      { specialty: 'Neurology & Neurosurgery', rank: 5, isTopTen: true },
      { specialty: 'Geriatrics', rank: 6, isTopTen: true },
      { specialty: 'Orthopedics', rank: 7, isTopTen: true },
      { specialty: 'Cancer', rank: 8, isTopTen: true },
    ],
    facts: {
      physicians: 7300,
      employees: 66000,
      researchBudget: '$1.34 billion',
      founded: 1889,
    },
    highlights: [
      'More #1 specialty rankings than any other hospital',
      'Ranked #1 hospital in the world by Newsweek',
      'Pioneered integrated healthcare model',
      'Three major campuses (Rochester, Phoenix, Jacksonville)',
    ],
    uniqueAchievements: [
      'Most active clinical trials of any academic medical center in the US',
      'Pioneered first heart-lung transplant',
      '400+ training programs across medical specialties',
      '$660+ million annual research investment',
    ],
    website: 'https://www.mayoclinic.org',
  },
  {
    name: 'Cleveland Clinic',
    slug: 'cleveland-clinic',
    location: {
      city: 'Cleveland',
      state: 'Ohio',
    },
    ranking: {
      overall: 2,
      honorRoll: true,
      worldRank: 2,
    },
    specialties: [
      { specialty: 'Cardiology & Heart Surgery', rank: 1, isTopTen: true, consecutiveYears: 30 },
      { specialty: 'Urology', rank: 1, isTopTen: true, note: 'Best in the world' },
      { specialty: 'Gastroenterology & GI Surgery', rank: 3, isTopTen: true },
      { specialty: 'Geriatrics', rank: 6, isTopTen: true },
      { specialty: 'Pulmonology & Lung Surgery', rank: 6, isTopTen: true },
      { specialty: 'Orthopedics', rank: 8, isTopTen: true },
      { specialty: 'Rheumatology', rank: 4, isTopTen: true },
    ],
    facts: {
      beds: 6728,
      physicians: 5786,
      employees: 80000,
      founded: 1921,
      annualPatients: '15 million encounters worldwide',
    },
    highlights: [
      '#1 for Heart Care for 30 consecutive years',
      '#2 hospital in the world (Newsweek)',
      'Global locations in Florida, Vegas, Toronto, Abu Dhabi, London',
      'First quantum computer dedicated to healthcare research',
    ],
    uniqueAchievements: [
      'Pioneered coronary artery bypass surgery (1967)',
      'First face transplant in the United States',
      'Discovered serotonin (1948)',
      'Developed coronary angiography (1958)',
      '0% mortality on 4,500+ mitral valve surgeries',
    ],
    website: 'https://my.clevelandclinic.org',
  },
  {
    name: 'Johns Hopkins Hospital',
    slug: 'johns-hopkins-hospital',
    location: {
      city: 'Baltimore',
      state: 'Maryland',
    },
    ranking: {
      overall: 3,
      honorRoll: true,
      stateRank: 1,
    },
    specialties: [
      { specialty: 'Rheumatology', rank: 1, isTopTen: true },
      { specialty: 'Psychiatry', rank: 3, isTopTen: true },
      { specialty: 'Neurology & Neurosurgery', rank: 4, isTopTen: true },
      { specialty: 'Geriatrics', rank: 5, isTopTen: true },
      { specialty: 'Ophthalmology', rank: 3, isTopTen: true },
      { specialty: 'Cancer', rank: 7, isTopTen: true },
      { specialty: 'Urology', rank: 7, isTopTen: true },
    ],
    facts: {
      beds: 1215,
      physicians: 1700,
      employees: 30000,
      founded: 1889,
    },
    highlights: [
      'Founding institution of modern American medicine',
      '#1 for 21 consecutive years (1991-2020)',
      'Birthplace of rounds, residents, and house staff system',
      'Founded multiple medical specialties',
    ],
    uniqueAchievements: [
      'Founded neurosurgery as a specialty (Harvey Cushing)',
      'Pioneered "blue baby" cardiac operation',
      'Developed HeLa cells (1951)',
      'Published The Harriet Lane Handbook for 60+ years',
      'Identified three polio virus types',
    ],
    website: 'https://www.hopkinsmedicine.org',
  },
  {
    name: 'Massachusetts General Hospital',
    slug: 'massachusetts-general-hospital',
    location: {
      city: 'Boston',
      state: 'Massachusetts',
    },
    ranking: {
      overall: 4,
      honorRoll: true,
      worldRank: 3,
    },
    specialties: [
      { specialty: 'Psychiatry', rank: 1, isTopTen: true },
      { specialty: 'Neurology & Neurosurgery', rank: 3, isTopTen: true },
      { specialty: 'Diabetes & Endocrinology', rank: 4, isTopTen: true },
      { specialty: 'Cancer', rank: 6, isTopTen: true },
      { specialty: 'Orthopedics', rank: 8, isTopTen: true },
      { specialty: 'Ear, Nose & Throat', rank: 5, isTopTen: true },
    ],
    facts: {
      beds: 1045,
      employees: 27000,
      founded: 1811,
      annualPatients: '50,000+ admissions',
      researchBudget: '$1.2+ billion',
    },
    highlights: [
      'World\'s largest hospital-based research program',
      'Third-oldest general hospital in the United States',
      '#3 hospital in the world (Newsweek)',
      'Most NIH funding of any independent hospital (~$500M)',
    ],
    uniqueAchievements: [
      'First public demonstration of surgical anesthesia (1846)',
      'Home to multiple Nobel Prize laureates',
      'Original and largest teaching hospital of Harvard Medical School',
      '1,200+ clinical trials at any given time',
    ],
    website: 'https://www.massgeneral.org',
  },
  {
    name: 'NYU Langone Hospitals',
    slug: 'nyu-langone-hospitals',
    location: {
      city: 'New York',
      state: 'New York',
    },
    ranking: {
      overall: 5,
      honorRoll: true,
      stateRank: 1,
    },
    specialties: [
      { specialty: 'Neurology & Neurosurgery', rank: 1, isTopTen: true, consecutiveYears: 4 },
      { specialty: 'Cardiology & Heart Surgery', rank: 1, isTopTen: true },
      { specialty: 'Pulmonology & Lung Surgery', rank: 1, isTopTen: true },
      { specialty: 'Geriatrics', rank: 1, isTopTen: true },
      { specialty: 'Orthopedics', rank: 2, isTopTen: true },
      { specialty: 'Gastroenterology & GI Surgery', rank: 4, isTopTen: true },
      { specialty: 'Urology', rank: 5, isTopTen: true },
      { specialty: 'Rheumatology', rank: 5, isTopTen: true },
      { specialty: 'Diabetes & Endocrinology', rank: 6, isTopTen: true },
    ],
    facts: {
      employees: 48000,
      founded: 1841,
      annualPatients: '320+ outpatient locations',
    },
    highlights: [
      'Most #1-ranked specialties in the nation (4 specialties)',
      '#1 academic health system by Vizient (3 consecutive years)',
      'All hospitals Magnet-designated (only NY system)',
      '11 consecutive "A" Leapfrog Safety Grades',
    ],
    uniqueAchievements: [
      'Four specialties ranked #1 nationally (most of any hospital)',
      'Nine specialties in national top 5',
      'Two tuition-free medical schools',
      'CMS 5-star ratings across all locations',
    ],
    website: 'https://nyulangone.org',
  },
  {
    name: 'UCLA Medical Center',
    slug: 'ucla-medical-center',
    location: {
      city: 'Los Angeles',
      state: 'California',
    },
    ranking: {
      overall: 6,
      honorRoll: true,
      stateRank: 1,
    },
    specialties: [
      { specialty: 'Ear, Nose & Throat', rank: 2, isTopTen: true },
      { specialty: 'Pulmonology & Lung Surgery', rank: 4, isTopTen: true },
      { specialty: 'Diabetes & Endocrinology', rank: 5, isTopTen: true },
      { specialty: 'Ophthalmology', rank: 5, isTopTen: true },
      { specialty: 'Psychiatry', rank: 5, isTopTen: true },
      { specialty: 'Geriatrics', rank: 7, isTopTen: true },
      { specialty: 'Urology', rank: 8, isTopTen: true },
      { specialty: 'Gastroenterology & GI Surgery', rank: 9, isTopTen: true },
      { specialty: 'Cardiology & Heart Surgery', rank: 10, isTopTen: true },
    ],
    facts: {
      founded: 1955,
      annualPatients: '280+ clinics across Southern California',
    },
    highlights: [
      '36 consecutive years on Honor Roll (longest streak)',
      '#1 in California and Los Angeles',
      '10 specialties in national top 10',
      'NCI-designated cancer center',
    ],
    uniqueAchievements: [
      'Longest consecutive Honor Roll streak in history',
      'Nationally ranked in 14 adult and 10 pediatric specialties',
      'High performing in all 22 evaluated procedures',
      '89% patient recommendation rate',
    ],
    website: 'https://www.uclahealth.org',
  },
  {
    name: 'UCSF Medical Center',
    slug: 'ucsf-medical-center',
    location: {
      city: 'San Francisco',
      state: 'California',
    },
    ranking: {
      overall: 7,
      honorRoll: true,
      stateRank: 1,
    },
    specialties: [
      { specialty: 'Neurology & Neurosurgery', rank: 2, isTopTen: true, consecutiveYears: 29 },
      { specialty: 'Cancer', rank: 5, isTopTen: true },
      { specialty: 'Ophthalmology', rank: 6, isTopTen: true },
      { specialty: 'Geriatrics', rank: 8, isTopTen: true },
      { specialty: 'Rheumatology', rank: 6, isTopTen: true },
      { specialty: 'Orthopedics', rank: 9, isTopTen: true },
      { specialty: 'Pulmonology & Lung Surgery', rank: 10, isTopTen: true },
    ],
    facts: {
      beds: 889,
      founded: 1907,
    },
    highlights: [
      '29 consecutive years on Honor Roll',
      'Top in California for Cancer, Geriatrics, Pulmonology, Rheumatology',
      'UCSF Helen Diller Family Comprehensive Cancer Center',
      'Founded after 1906 San Francisco earthquake',
    ],
    uniqueAchievements: [
      'Received largest single gift in UC system history ($100M)',
      '13 adult and 11 pediatric specialties nationally ranked',
      'Leapfrog Group Top Hospital award',
      '7 specialties in national top 10',
    ],
    website: 'https://www.ucsfhealth.org',
  },
  {
    name: 'Cedars-Sinai Medical Center',
    slug: 'cedars-sinai-medical-center',
    location: {
      city: 'Los Angeles',
      state: 'California',
    },
    ranking: {
      overall: 8,
      honorRoll: true,
      stateRank: 1,
    },
    specialties: [
      { specialty: 'Cardiology & Heart Surgery', rank: 6, isTopTen: true },
      { specialty: 'Gastroenterology & GI Surgery', rank: 7, isTopTen: true },
      { specialty: 'Diabetes & Endocrinology', rank: 9, isTopTen: true },
      { specialty: 'Orthopedics', rank: 10, isTopTen: true },
    ],
    facts: {
      beds: 915,
      physicians: 2000,
      employees: 10000,
      founded: 1902,
    },
    highlights: [
      '10 consecutive years on Honor Roll',
      '8 consecutive 5-star CMS ratings',
      '6 consecutive Magnet nursing designations',
      'Level I trauma center for adults and pediatrics',
    ],
    uniqueAchievements: [
      '20 consecutive Consumer Choice Awards',
      'Rated among America\'s 50 Best Hospitals',
      'High performance in 23 adult procedures',
      'Leader in heart disease, cancer, and brain disorders',
    ],
    website: 'https://www.cedars-sinai.org',
  },
  {
    name: 'Stanford Health Care',
    slug: 'stanford-health-care',
    location: {
      city: 'Palo Alto',
      state: 'California',
    },
    ranking: {
      overall: 9,
      honorRoll: true,
      stateRank: 1,
    },
    specialties: [
      { specialty: 'Cancer', rank: 9, isTopTen: true },
      { specialty: 'Cardiology & Heart Surgery', rank: 11, isTopTen: false },
      { specialty: 'Pulmonology & Lung Surgery', rank: 19, isTopTen: false },
    ],
    facts: {
      beds: 610,
      physicians: 1910,
      founded: 1959,
    },
    highlights: [
      '10 consecutive years on Honor Roll',
      'NCI-designated cancer center',
      'Level I trauma center since 1998',
      '100+ specialty and subspecialty areas',
    ],
    uniqueAchievements: [
      'World-renowned for cardiovascular medicine',
      'Leader in organ transplantation',
      'Vizient 5-star performer, ranked 5th of 118 peers',
      'Excellence in academic medicine and research',
    ],
    website: 'https://stanfordhealthcare.org',
  },
  {
    name: 'Northwestern Memorial Hospital',
    slug: 'northwestern-memorial-hospital',
    location: {
      city: 'Chicago',
      state: 'Illinois',
    },
    ranking: {
      overall: 11,
      honorRoll: true,
      stateRank: 1,
    },
    specialties: [
      { specialty: 'Obstetrics & Gynecology', rank: 6, isTopTen: true },
      { specialty: 'Neurology & Neurosurgery', rank: 6, isTopTen: true },
      { specialty: 'Cardiology & Heart Surgery', rank: 7, isTopTen: true },
      { specialty: 'Diabetes & Endocrinology', rank: 7, isTopTen: true },
      { specialty: 'Pulmonology & Lung Surgery', rank: 7, isTopTen: true },
      { specialty: 'Geriatrics', rank: 9, isTopTen: true },
      { specialty: 'Gastroenterology & GI Surgery', rank: 10, isTopTen: true },
      { specialty: 'Cancer', rank: 10, isTopTen: true },
    ],
    facts: {
      beds: 943,
      founded: 1972,
    },
    highlights: [
      '14 consecutive years on Honor Roll',
      '8 specialties in national top 10',
      '#1 in Illinois and Chicago',
      'NCI-designated cancer center',
    ],
    uniqueAchievements: [
      '5-star CMS overall quality rating (2025)',
      '11 adult specialties nationally ranked',
      'Primary teaching affiliate for Northwestern Feinberg School of Medicine',
      'Plans for new tower adding 200+ beds',
    ],
    website: 'https://www.nm.org',
  },
  {
    name: 'NewYork-Presbyterian Hospital',
    slug: 'newyork-presbyterian-hospital',
    location: {
      city: 'New York',
      state: 'New York',
    },
    ranking: {
      overall: 10,
      honorRoll: true,
      stateRank: 1,
    },
    specialties: [
      { specialty: 'Psychiatry', rank: 3, isTopTen: true },
      { specialty: 'Diabetes & Endocrinology', rank: 3, isTopTen: true },
      { specialty: 'Neurology & Neurosurgery', rank: 4, isTopTen: true },
      { specialty: 'Orthopedics', rank: 4, isTopTen: true },
      { specialty: 'Cardiology & Heart Surgery', rank: 5, isTopTen: true },
      { specialty: 'Cancer', rank: 4, isTopTen: true },
      { specialty: 'Urology', rank: 4, isTopTen: true },
      { specialty: 'Rheumatology', rank: 2, isTopTen: true },
    ],
    facts: {
      beds: 4000,
      physicians: 6500,
      employees: 20000,
      founded: 1771,
      annualPatients: '310,000 ER visits; 15,000 births annually',
    },
    highlights: [
      '22 consecutive years on Honor Roll',
      'Largest hospital by bed count (4,000+ beds)',
      'Ranked top 15 in 14 of 15 specialties',
      'Only hospital affiliated with two Ivy League medical schools',
    ],
    uniqueAchievements: [
      'Affiliated with both Weill Cornell and Columbia medical schools',
      '14 of 15 specialties ranked nationally',
      '10 pediatric specialties nationally ranked',
      'One of the oldest hospitals in the US (founded 1771)',
    ],
    website: 'https://www.nyp.org',
  },
  {
    name: 'Mount Sinai Hospital',
    slug: 'mount-sinai-hospital',
    location: {
      city: 'New York',
      state: 'New York',
    },
    ranking: {
      overall: 12,
      honorRoll: true,
      worldRank: 19,
      stateRank: 1,
    },
    specialties: [
      { specialty: 'Geriatrics', rank: 1, isTopTen: true },
      { specialty: 'Cardiology & Heart Surgery', rank: 2, isTopTen: true },
      { specialty: 'Gastroenterology & GI Surgery', rank: 5, isTopTen: true },
      { specialty: 'Cancer', rank: 6, isTopTen: true },
      { specialty: 'Urology', rank: 6, isTopTen: true },
      { specialty: 'Rehabilitation', rank: 7, isTopTen: true },
    ],
    facts: {
      beds: 1134,
      physicians: 9000,
      employees: 48000,
      founded: 1852,
    },
    highlights: [
      '#1 for Geriatrics in the nation',
      '#19 in the world (Newsweek)',
      '12 specialties nationally ranked',
      'Founded in 1852 - historic institution',
    ],
    uniqueAchievements: [
      'High performing in all 22 procedures assessed',
      'NCI-designated cancer center',
      'Comprehensive Stroke Center',
      'Regional Perinatal Center',
    ],
    website: 'https://www.mountsinai.org',
  },
  {
    name: 'Duke University Hospital',
    slug: 'duke-university-hospital',
    location: {
      city: 'Durham',
      state: 'North Carolina',
    },
    ranking: {
      overall: 13,
      honorRoll: true,
      stateRank: 1,
    },
    specialties: [
      { specialty: 'Ophthalmology', rank: 7, isTopTen: true },
      { specialty: 'Obstetrics & Gynecology', rank: 11, isTopTen: false },
      { specialty: 'Cardiology & Heart Surgery', rank: 25, isTopTen: false },
      { specialty: 'Cancer', rank: 35, isTopTen: false },
    ],
    facts: {
      beds: 1062,
      founded: 1930,
    },
    highlights: [
      'New addition to Honor Roll',
      '#1 in North Carolina and Raleigh-Durham',
      '11 adult specialties nationally ranked',
      'High performing in 19 of 20 conditions',
    ],
    uniqueAchievements: [
      '92% patient recommendation rate',
      'Outstanding Patient Experience Award from Healthgrades',
      'Nation\'s highest recognition for nursing excellence',
      'America\'s 50 Best Hospitals for Cardiac Surgery',
    ],
    website: 'https://www.dukehealth.org',
  },
  {
    name: 'UC San Diego Health',
    slug: 'uc-san-diego-health',
    location: {
      city: 'La Jolla',
      state: 'California',
    },
    ranking: {
      overall: 14,
      honorRoll: true,
      stateRank: 5,
    },
    specialties: [
      { specialty: 'Obstetrics & Gynecology', rank: 7, isTopTen: true },
      { specialty: 'Pulmonology & Lung Surgery', rank: 8, isTopTen: true },
      { specialty: 'Geriatrics', rank: 18, isTopTen: false },
      { specialty: 'Cardiology & Heart Surgery', rank: 27, isTopTen: false },
      { specialty: 'Gastroenterology & GI Surgery', rank: 28, isTopTen: false },
    ],
    facts: {
      beds: 1101,
      founded: 1966,
    },
    highlights: [
      '#1 in San Diego',
      'Region\'s only academic health system',
      '9 specialties nationally ranked',
      'Moores Cancer Center',
    ],
    uniqueAchievements: [
      'High performing in 20 common procedures',
      'Sulpizio Cardiovascular Center',
      'Shiley Eye Institute',
      'Jacobs Medical Center',
    ],
    website: 'https://health.ucsd.edu',
  },
  {
    name: 'Rush University Medical Center',
    slug: 'rush-university-medical-center',
    location: {
      city: 'Chicago',
      state: 'Illinois',
    },
    ranking: {
      overall: 15,
      honorRoll: true,
      stateRank: 1,
    },
    specialties: [
      { specialty: 'Neurology & Neurosurgery', rank: 5, isTopTen: true },
      { specialty: 'Geriatrics', rank: 10, isTopTen: true },
      { specialty: 'Orthopedics', rank: 11, isTopTen: false },
      { specialty: 'Cardiology & Heart Surgery', rank: 13, isTopTen: false },
      { specialty: 'Diabetes & Endocrinology', rank: 14, isTopTen: false },
    ],
    facts: {
      beds: 671,
      employees: 10000,
      founded: 1837,
    },
    highlights: [
      'Tied #1 in Chicago and Illinois',
      '11 specialties nationally ranked',
      'Vizient #6 in the nation (13 consecutive years top 10)',
      '5th consecutive Magnet recognition',
    ],
    uniqueAchievements: [
      'Butterfly-shaped 14-story, 830,000 sq ft tower',
      '70+ residency and fellowship programs',
      'Largest nongovernmental employer on Chicago\'s near West Side',
      'Leapfrog "A" grade (highest possible)',
    ],
    website: 'https://www.rush.edu',
  },
];

// ==========================================
// SPECIALTY LEADERS
// ==========================================

export const specialtyLeaders: SpecialtyLeader[] = [
  {
    specialty: 'Cancer',
    slug: 'cancer',
    description: 'Oncology, radiation therapy, surgical oncology, and cancer research',
    leader: {
      name: 'MD Anderson Cancer Center',
      slug: 'md-anderson-cancer-center',
      location: 'Houston, Texas',
      consecutiveYears: 24,
      achievement: '#1 or #2 in cancer care since rankings began in 1990',
    },
    topThree: [
      { name: 'MD Anderson Cancer Center', location: 'Houston, TX' },
      { name: 'Memorial Sloan Kettering', location: 'New York, NY' },
      { name: 'Mayo Clinic', location: 'Rochester, MN' },
    ],
  },
  {
    specialty: 'Cardiology & Heart Surgery',
    slug: 'cardiology-heart-surgery',
    description: 'Heart disease, cardiac surgery, valve repair, and cardiovascular medicine',
    leader: {
      name: 'Cleveland Clinic',
      slug: 'cleveland-clinic',
      location: 'Cleveland, Ohio',
      consecutiveYears: 30,
      achievement: 'Pioneered coronary bypass surgery; 0% mortality on 4,500+ mitral valve surgeries',
    },
    topThree: [
      { name: 'Cleveland Clinic', location: 'Cleveland, OH' },
      { name: 'Mayo Clinic', location: 'Rochester, MN' },
      { name: 'Mount Sinai Hospital', location: 'New York, NY' },
    ],
  },
  {
    specialty: 'Orthopedics',
    slug: 'orthopedics',
    description: 'Joint replacement, spine surgery, sports medicine, and musculoskeletal care',
    leader: {
      name: 'Hospital for Special Surgery',
      slug: 'hospital-for-special-surgery',
      location: 'New York, New York',
      consecutiveYears: 15,
      achievement: 'Perfect specialty score of 100/100',
    },
    topThree: [
      { name: 'Hospital for Special Surgery', location: 'New York, NY' },
      { name: 'Mayo Clinic', location: 'Rochester, MN' },
      { name: 'NYU Langone Hospitals', location: 'New York, NY' },
    ],
  },
  {
    specialty: 'Neurology & Neurosurgery',
    slug: 'neurology-neurosurgery',
    description: 'Brain and spine conditions, stroke, Parkinson\'s, Alzheimer\'s, and epilepsy',
    leader: {
      name: 'NYU Langone Hospitals',
      slug: 'nyu-langone-hospitals',
      location: 'New York, New York',
      consecutiveYears: 4,
      achievement: 'Excellence in Alzheimer\'s, Parkinson\'s, MS, and stroke treatment',
    },
    topThree: [
      { name: 'NYU Langone Hospitals', location: 'New York, NY' },
      { name: 'UCSF Medical Center', location: 'San Francisco, CA' },
      { name: 'Massachusetts General Hospital', location: 'Boston, MA' },
    ],
  },
  {
    specialty: 'Diabetes & Endocrinology',
    slug: 'diabetes-endocrinology',
    description: 'Diabetes management, thyroid disorders, and hormonal conditions',
    leader: {
      name: 'Mayo Clinic',
      slug: 'mayo-clinic',
      location: 'Rochester, Minnesota',
      consecutiveYears: 28,
      achievement: '#1 every year since specialty rankings began',
    },
    topThree: [
      { name: 'Mayo Clinic', location: 'Rochester, MN' },
      { name: 'Cleveland Clinic', location: 'Cleveland, OH' },
      { name: 'NewYork-Presbyterian Hospital', location: 'New York, NY' },
    ],
  },
  {
    specialty: 'Gastroenterology & GI Surgery',
    slug: 'gastroenterology-gi-surgery',
    description: 'Digestive disorders, liver disease, IBD, and GI surgical procedures',
    leader: {
      name: 'Mayo Clinic',
      slug: 'mayo-clinic',
      location: 'Rochester, Minnesota',
      consecutiveYears: 9,
      achievement: 'Perfect score of 100 in specialty rankings',
    },
    topThree: [
      { name: 'Mayo Clinic', location: 'Rochester, MN' },
      { name: 'Cleveland Clinic', location: 'Cleveland, OH' },
      { name: 'Mount Sinai Hospital', location: 'New York, NY' },
    ],
  },
  {
    specialty: 'Geriatrics',
    slug: 'geriatrics',
    description: 'Care for elderly patients with complex medical needs',
    leader: {
      name: 'Mount Sinai Hospital',
      slug: 'mount-sinai-hospital',
      location: 'New York, New York',
      achievement: 'Comprehensive geriatric care approach addressing multiple age-related conditions',
    },
    topThree: [
      { name: 'Mount Sinai Hospital', location: 'New York, NY' },
      { name: 'NYU Langone Hospitals', location: 'New York, NY' },
      { name: 'UCLA Medical Center', location: 'Los Angeles, CA' },
    ],
  },
  {
    specialty: 'Obstetrics & Gynecology',
    slug: 'obstetrics-gynecology',
    description: 'Women\'s health, pregnancy care, and gynecological surgery',
    leader: {
      name: 'Brigham and Women\'s Hospital',
      slug: 'brigham-and-womens-hospital',
      location: 'Boston, Massachusetts',
      consecutiveYears: 3,
      achievement: 'Top-rated among 257 evaluated hospitals',
    },
    topThree: [
      { name: 'Brigham and Women\'s Hospital', location: 'Boston, MA' },
      { name: 'Mayo Clinic', location: 'Rochester, MN' },
      { name: 'Cleveland Clinic', location: 'Cleveland, OH' },
    ],
  },
  {
    specialty: 'Ophthalmology',
    slug: 'ophthalmology',
    description: 'Eye care, vision correction, retinal disease, and glaucoma',
    leader: {
      name: 'Bascom Palmer Eye Institute',
      slug: 'bascom-palmer-eye-institute',
      location: 'Miami, Florida',
      consecutiveYears: 22,
      achievement: 'Premier eye care institution in the United States',
    },
    topThree: [
      { name: 'Bascom Palmer Eye Institute', location: 'Miami, FL' },
      { name: 'Wills Eye Hospital', location: 'Philadelphia, PA' },
      { name: 'Wilmer Eye Institute, Johns Hopkins', location: 'Baltimore, MD' },
    ],
  },
  {
    specialty: 'Pulmonology & Lung Surgery',
    slug: 'pulmonology-lung-surgery',
    description: 'Respiratory conditions, COPD, lung cancer surgery, and thoracic care',
    leader: {
      name: 'Mayo Clinic & NYU Langone Hospitals',
      slug: 'mayo-clinic',
      location: 'Rochester, MN & New York, NY',
      achievement: 'Tied for #1 in 2024-2025 rankings',
    },
    topThree: [
      { name: 'Mayo Clinic', location: 'Rochester, MN' },
      { name: 'NYU Langone Hospitals', location: 'New York, NY' },
      { name: 'Cleveland Clinic', location: 'Cleveland, OH' },
    ],
  },
  {
    specialty: 'Urology',
    slug: 'urology',
    description: 'Urinary tract conditions, prostate cancer, kidney stones, and male reproductive health',
    leader: {
      name: 'Memorial Sloan Kettering Cancer Center',
      slug: 'memorial-sloan-kettering',
      location: 'New York, New York',
      consecutiveYears: 2,
      achievement: '#1 for urologic cancers; best in preserving quality of life',
    },
    topThree: [
      { name: 'Memorial Sloan Kettering', location: 'New York, NY' },
      { name: 'Cleveland Clinic', location: 'Cleveland, OH' },
      { name: 'Mayo Clinic', location: 'Rochester, MN' },
    ],
  },
  {
    specialty: 'Rehabilitation',
    slug: 'rehabilitation',
    description: 'Physical medicine, spinal cord injury, stroke recovery, and traumatic brain injury',
    leader: {
      name: 'Shirley Ryan AbilityLab',
      slug: 'shirley-ryan-abilitylab',
      location: 'Chicago, Illinois',
      consecutiveYears: 34,
      achievement: 'Only hospital to hold #1 in its specialty for 34 years',
    },
    topThree: [
      { name: 'Shirley Ryan AbilityLab', location: 'Chicago, IL' },
      { name: 'TIRR Memorial Hermann', location: 'Houston, TX' },
      { name: 'Kessler Institute for Rehabilitation', location: 'West Orange, NJ' },
    ],
  },
  {
    specialty: 'Psychiatry',
    slug: 'psychiatry',
    description: 'Mental health, depression, anxiety, schizophrenia, and psychiatric care',
    leader: {
      name: 'Massachusetts General Hospital',
      slug: 'massachusetts-general-hospital',
      location: 'Boston, Massachusetts',
      achievement: 'Excellence in treating complex psychiatric cases',
    },
    topThree: [
      { name: 'Massachusetts General Hospital', location: 'Boston, MA' },
      { name: 'McLean Hospital', location: 'Belmont, MA' },
      { name: 'Johns Hopkins Hospital', location: 'Baltimore, MD' },
    ],
  },
  {
    specialty: 'Rheumatology',
    slug: 'rheumatology',
    description: 'Arthritis, lupus, autoimmune diseases, and joint inflammation',
    leader: {
      name: 'Johns Hopkins Hospital',
      slug: 'johns-hopkins-hospital',
      location: 'Baltimore, Maryland',
      achievement: 'Pioneer in rheumatology research and treatment',
    },
    topThree: [
      { name: 'Johns Hopkins Hospital', location: 'Baltimore, MD' },
      { name: 'Hospital for Special Surgery', location: 'New York, NY' },
      { name: 'Cleveland Clinic', location: 'Cleveland, OH' },
    ],
  },
  {
    specialty: 'Ear, Nose & Throat',
    slug: 'ear-nose-throat',
    description: 'ENT conditions, hearing loss, sinus disorders, and head/neck surgery',
    leader: {
      name: 'Mass Eye and Ear',
      slug: 'mass-eye-and-ear',
      location: 'Boston, Massachusetts',
      achievement: 'Leading institution for otolaryngology and hearing disorders',
    },
    topThree: [
      { name: 'Mass Eye and Ear', location: 'Boston, MA' },
      { name: 'UCLA Medical Center', location: 'Los Angeles, CA' },
      { name: 'Johns Hopkins Hospital', location: 'Baltimore, MD' },
    ],
  },
];

// ==========================================
// ADDITIONAL TOP SPECIALTY HOSPITALS
// (Not on Honor Roll but #1 in their specialty)
// ==========================================

export const additionalSpecialtyLeaders: NationalHealthSystem[] = [
  {
    name: 'MD Anderson Cancer Center',
    slug: 'md-anderson-cancer-center',
    location: {
      city: 'Houston',
      state: 'Texas',
    },
    ranking: {
      honorRoll: false,
    },
    specialties: [
      { specialty: 'Cancer', rank: 1, isTopTen: true, consecutiveYears: 24 },
    ],
    facts: {
      beds: 650,
      employees: 22000,
      founded: 1941,
      annualPatients: '145,000+ patients annually',
    },
    highlights: [
      '#1 for Cancer Care - 24 consecutive years',
      'Largest cancer center in the nation',
      'Part of University of Texas System',
      'NCI Comprehensive Cancer Center designation',
    ],
    uniqueAchievements: [
      '#1 or #2 in cancer rankings since 1990',
      'Treated patients from all 50 states and 100+ countries',
      'More than 750 clinical trials ongoing',
      'Pioneering immunotherapy and targeted cancer treatments',
    ],
    website: 'https://www.mdanderson.org',
  },
  {
    name: 'Hospital for Special Surgery',
    slug: 'hospital-for-special-surgery',
    location: {
      city: 'New York',
      state: 'New York',
    },
    ranking: {
      honorRoll: false,
    },
    specialties: [
      { specialty: 'Orthopedics', rank: 1, isTopTen: true, consecutiveYears: 15 },
      { specialty: 'Rheumatology', rank: 3, isTopTen: true },
    ],
    facts: {
      beds: 215,
      founded: 1863,
      annualPatients: '37,000+ surgeries annually',
    },
    highlights: [
      '#1 for Orthopedics - 15 consecutive years',
      'Perfect specialty score of 100/100',
      '#3 for Rheumatology',
      'Oldest orthopedic hospital in America',
    ],
    uniqueAchievements: [
      'Official hospital of multiple NY sports teams',
      'Leading research in musculoskeletal conditions',
      'Pioneered modern hip and knee replacement techniques',
      '1,647 hospitals evaluated - HSS scored highest',
    ],
    website: 'https://www.hss.edu',
  },
  {
    name: 'Memorial Sloan Kettering Cancer Center',
    slug: 'memorial-sloan-kettering',
    location: {
      city: 'New York',
      state: 'New York',
    },
    ranking: {
      honorRoll: false,
    },
    specialties: [
      { specialty: 'Urology', rank: 1, isTopTen: true, consecutiveYears: 2 },
      { specialty: 'Cancer', rank: 2, isTopTen: true },
    ],
    facts: {
      beds: 514,
      physicians: 1300,
      employees: 21000,
      founded: 1884,
    },
    highlights: [
      '#1 for Urology - focused on urologic cancers',
      '#2 for Cancer nationally',
      'Best cancer center in the Northeast',
      'World\'s oldest and largest private cancer center',
    ],
    uniqueAchievements: [
      'Pioneer in bone marrow transplantation',
      'Developed first successful chemotherapy regimen',
      'Leading immunotherapy research center',
      'Excellence in preserving quality of life for cancer patients',
    ],
    website: 'https://www.mskcc.org',
  },
  {
    name: 'Shirley Ryan AbilityLab',
    slug: 'shirley-ryan-abilitylab',
    location: {
      city: 'Chicago',
      state: 'Illinois',
    },
    ranking: {
      honorRoll: false,
    },
    specialties: [
      { specialty: 'Rehabilitation', rank: 1, isTopTen: true, consecutiveYears: 34 },
    ],
    facts: {
      beds: 242,
      employees: 2500,
      founded: 1953,
    },
    highlights: [
      '#1 for Rehabilitation - 34 consecutive years (since 1991)',
      'Longest #1 streak of any hospital in any specialty',
      'World\'s first "translational" research hospital',
      '$550M state-of-the-art facility opened 2017',
    ],
    uniqueAchievements: [
      'Research applied in real-time during patient rehabilitation',
      'Global leader in spinal cord and brain injury treatment',
      'Pioneering robotic exoskeletons and neural interfaces',
      'Clinicians, scientists, and patients work together in same spaces',
    ],
    website: 'https://www.sralab.org',
  },
  {
    name: 'Bascom Palmer Eye Institute',
    slug: 'bascom-palmer-eye-institute',
    location: {
      city: 'Miami',
      state: 'Florida',
    },
    ranking: {
      honorRoll: false,
    },
    specialties: [
      { specialty: 'Ophthalmology', rank: 1, isTopTen: true, consecutiveYears: 22 },
    ],
    facts: {
      founded: 1962,
      annualPatients: '300,000+ patient visits annually',
    },
    highlights: [
      '#1 for Ophthalmology - 22 consecutive years',
      'Part of University of Miami Health System',
      'Premier eye care institution in the nation',
      'Excellence in retina, cornea, glaucoma, and all subspecialties',
    ],
    uniqueAchievements: [
      'Longest-running #1 in ophthalmology',
      'Pioneered numerous surgical techniques',
      'Leading eye research institution globally',
      'Attracts patients from around the world',
    ],
    website: 'https://umiamihealth.org/bascom-palmer-eye-institute',
  },
  {
    name: 'Brigham and Women\'s Hospital',
    slug: 'brigham-and-womens-hospital',
    location: {
      city: 'Boston',
      state: 'Massachusetts',
    },
    ranking: {
      overall: 16,
      honorRoll: true,
    },
    specialties: [
      { specialty: 'Obstetrics & Gynecology', rank: 1, isTopTen: true, consecutiveYears: 3 },
      { specialty: 'Cancer', rank: 9, isTopTen: true },
      { specialty: 'Cardiology & Heart Surgery', rank: 12, isTopTen: false },
      { specialty: 'Rheumatology', rank: 7, isTopTen: true },
    ],
    facts: {
      beds: 793,
      founded: 1980,
    },
    highlights: [
      '#1 for OB/GYN - 3 consecutive years',
      '12 specialties nationally ranked',
      'Part of Mass General Brigham system',
      'Leading women\'s health institution',
    ],
    uniqueAchievements: [
      'Top-rated among 257 OB/GYN hospitals',
      'Excellence in high-risk pregnancy care',
      'Leader in gynecologic oncology',
      'Pioneering research in women\'s health',
    ],
    website: 'https://www.brighamandwomens.org',
  },
];

// ==========================================
// HELPER FUNCTIONS
// ==========================================

export function getAllNationalHealthSystems(): NationalHealthSystem[] {
  return [...honorRollHospitals, ...additionalSpecialtyLeaders];
}

export function getHealthSystemBySlug(slug: string): NationalHealthSystem | undefined {
  return getAllNationalHealthSystems().find(h => h.slug === slug);
}

export function getAllHealthSystemSlugs(): string[] {
  return getAllNationalHealthSystems().map(h => h.slug);
}

export function getHonorRollHospitals(): NationalHealthSystem[] {
  return honorRollHospitals;
}

export function getSpecialtyLeaders(): SpecialtyLeader[] {
  return specialtyLeaders;
}

export function getSpecialtyBySlug(slug: string): SpecialtyLeader | undefined {
  return specialtyLeaders.find(s => s.slug === slug);
}

export function getHospitalsForSpecialty(specialty: string): NationalHealthSystem[] {
  return getAllNationalHealthSystems().filter(h =>
    h.specialties.some(s => s.specialty.toLowerCase() === specialty.toLowerCase())
  );
}

export function getTopHospitalsForSpecialty(specialty: string, limit: number = 5): NationalHealthSystem[] {
  return getAllNationalHealthSystems()
    .filter(h => h.specialties.some(s => s.specialty.toLowerCase() === specialty.toLowerCase()))
    .sort((a, b) => {
      const aRank = a.specialties.find(s => s.specialty.toLowerCase() === specialty.toLowerCase())?.rank || 999;
      const bRank = b.specialties.find(s => s.specialty.toLowerCase() === specialty.toLowerCase())?.rank || 999;
      return aRank - bRank;
    })
    .slice(0, limit);
}
