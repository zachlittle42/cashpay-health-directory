// Health Systems data for Traditional Healthcare directory
// Organized by state with regions and top health systems

export interface HealthSystem {
  name: string;
  rank?: number;
  nationalRank?: string;
  type: string;
  specialties: string[];
  website?: string;
  description: string;
  highlights: string[];
}

export interface StateRegion {
  name: string;
  slug: string;
  cities: string[];
  population: string;
  healthSystems: HealthSystem[];
}

export interface StateHealthcareData {
  stateSlug: string;
  stateName: string;
  overview: string;
  population: string;
  uninsuredRate: string;
  avgHealthcareCost: string;
  regions: StateRegion[];
  highlights: string[];
  challenges: string[];
}

// ============================================================================
// CALIFORNIA
// ============================================================================
const CALIFORNIA_DATA: StateHealthcareData = {
  stateSlug: 'california',
  stateName: 'California',
  overview: 'California has one of the most advanced healthcare systems in the United States, home to world-renowned academic medical centers and research institutions. The state leads in medical innovation, particularly in cancer treatment, neuroscience, and precision medicine.',
  population: '39.5 million',
  uninsuredRate: '6.8%',
  avgHealthcareCost: '15% above national average',
  highlights: [
    'Home to 5 of the top 20 hospitals in the US (US News 2024-25)',
    'Leader in medical research with major NIH funding',
    'Multiple NCI-designated comprehensive cancer centers',
    'Hub for biotech and healthcare innovation',
  ],
  challenges: [
    'High cost of living affects healthcare worker availability',
    'Rural areas face provider shortages',
    'Long wait times at top academic centers',
  ],
  regions: [
    {
      name: 'Far North / Superior California',
      slug: 'far-north',
      cities: ['Redding', 'Chico', 'Eureka'],
      population: '~600K',
      healthSystems: [
        { name: 'Mercy Medical Center Redding', type: 'Community Hospital', specialties: ['Emergency', 'Cardiac', 'Orthopedics'], description: 'Dignity Health facility serving the northern Sacramento Valley region.', highlights: ['Level II Trauma Center', 'Heart and Vascular Institute'] },
        { name: 'Shasta Regional Medical Center', type: 'Community Hospital', specialties: ['Emergency', 'Surgery', 'Rehabilitation'], description: 'Full-service hospital with Leapfrog Grade A safety rating.', highlights: ['Grade A Leapfrog Safety', 'Stroke Center'] },
        { name: 'Enloe Medical Center', type: 'Community Hospital', specialties: ['Emergency', 'Cancer', 'Heart'], description: 'Chico-based nonprofit serving Butte County and surrounding areas.', highlights: ['Level II Trauma Center', 'Regional cancer center'] },
        { name: 'Providence St. Joseph Hospital Eureka', type: 'Community Hospital', specialties: ['Emergency', 'Orthopedics', 'Women\'s Health'], description: 'Providence network hospital serving the North Coast.', highlights: ['High Performing in Hip Fracture (US News)', 'Kidney Failure recognition'] },
      ],
    },
    {
      name: 'Sacramento Valley',
      slug: 'sacramento',
      cities: ['Sacramento', 'Stockton', 'Modesto'],
      population: '~3.5M',
      healthSystems: [
        { name: 'UC Davis Medical Center', rank: 1, type: 'Academic Medical Center', specialties: ['Cancer', 'Children\'s', 'Transplant', 'Trauma'], description: 'UC Davis Health is the region\'s only academic health center and Level I trauma center.', highlights: ['Only Level I Trauma & Burn Center in inland Northern CA', 'NCI-designated Cancer Center', 'Children\'s Hospital'] },
        { name: 'Sutter Medical Center Sacramento', rank: 2, nationalRank: '#13 CA', type: 'Health System', specialties: ['Heart', 'Orthopedics', 'Neuroscience'], description: 'Sutter Health flagship with comprehensive specialty care.', highlights: ['Best Regional Hospital for Equitable Access (US News)', 'Advanced cardiac program'] },
        { name: 'Kaiser Permanente Sacramento', rank: 3, type: 'Integrated Health System', specialties: ['Primary Care', 'Specialty Care', 'Prevention'], description: 'Large integrated health system with extensive network.', highlights: ['8M+ members statewide', 'Integrated care model'] },
        { name: 'Dignity Health Mercy General', rank: 4, type: 'Community Hospital', specialties: ['Heart', 'Orthopedics', 'Stroke'], description: 'Specializes in heart and vascular care.', highlights: ['Heart & Vascular Institute', 'Stroke Center'] },
      ],
    },
    {
      name: 'Bay Area - San Francisco',
      slug: 'bay-area-sf',
      cities: ['San Francisco', 'Oakland', 'Berkeley'],
      population: '~4.7M',
      healthSystems: [
        { name: 'UCSF Health', rank: 1, nationalRank: '#10 nationally, Honor Roll', type: 'Academic Medical Center', specialties: ['Cancer', 'Neurology', 'Cardiology', 'Transplant'], description: 'UCSF Medical Center is one of the nation\'s top hospitals, excelling in complex cases and innovative treatments.', highlights: ['#10 US News nationally', '#1 in Northern California', 'Top ranked in 13 adult specialties', 'NCI Comprehensive Cancer Center'] },
        { name: 'Sutter CPMC', rank: 2, type: 'Health System', specialties: ['Heart', 'Orthopedics', 'Cancer'], description: 'Major Sutter Health facility in San Francisco.', highlights: ['Van Ness campus opened 2019', 'Advanced specialty care'] },
        { name: 'Kaiser San Francisco', rank: 3, type: 'Integrated Health System', specialties: ['Primary Care', 'Specialty Care'], description: 'Kaiser Permanente medical center serving SF.', highlights: ['Integrated care', 'Prevention focus'] },
        { name: 'Zuckerberg SF General', rank: 4, type: 'Safety-Net Hospital', specialties: ['Trauma', 'Emergency', 'Primary Care'], description: 'SF\'s public hospital and only Level I trauma center.', highlights: ['Level I Trauma Center', 'Safety-net services'] },
      ],
    },
    {
      name: 'Bay Area - South Bay/Peninsula',
      slug: 'bay-area-south',
      cities: ['San Jose', 'Palo Alto', 'Mountain View'],
      population: '~3M',
      healthSystems: [
        { name: 'Stanford Health Care', rank: 1, nationalRank: '#12 nationally, Honor Roll', type: 'Academic Medical Center', specialties: ['Cancer', 'Cardiology', 'Neurology', 'Transplant'], description: 'Stanford Medicine delivers cutting-edge care connected to pioneering research at Stanford University.', highlights: ['#12 US News nationally', 'Honor Roll hospital', '11 nationally ranked specialties', 'Leader in precision medicine'] },
        { name: 'El Camino Health', rank: 2, type: 'Community Hospital', specialties: ['Heart', 'Cancer', 'Orthopedics', 'Neuroscience'], description: 'Top-ranked community hospital in Mountain View and Los Gatos.', highlights: ['#2 in San Jose metro', 'Genomic medicine program'] },
        { name: 'Kaiser Santa Clara', rank: 3, type: 'Integrated Health System', specialties: ['Primary Care', 'Specialty Care'], description: 'Major Kaiser facility serving South Bay.', highlights: ['#3 San Jose metro', 'Large network'] },
        { name: 'Good Samaritan Hospital', rank: 4, type: 'Community Hospital', specialties: ['Heart', 'Orthopedics', 'Women\'s Health'], description: 'HCA facility with specialized heart program.', highlights: ['Heart & Vascular Institute', 'Joint replacement center'] },
      ],
    },
    {
      name: 'Central Coast',
      slug: 'central-coast',
      cities: ['Santa Barbara', 'San Luis Obispo', 'Monterey'],
      population: '~1.5M',
      healthSystems: [
        { name: 'Santa Barbara Cottage Hospital', rank: 1, type: 'Community Hospital', specialties: ['Heart', 'Cancer', 'Neuroscience', 'Orthopedics'], description: 'Premier hospital on the Central Coast with comprehensive specialty services.', highlights: ['Level I Trauma Center', 'Teaching hospital', 'Neuroscience Institute'] },
        { name: 'Community Hospital of Monterey Peninsula', rank: 2, type: 'Community Hospital', specialties: ['Heart', 'Cancer', 'Orthopedics'], description: 'Nonprofit community hospital serving Monterey County.', highlights: ['US News High Performing', 'Tyler Heart Institute'] },
        { name: 'Sierra Vista Regional Medical Center', rank: 3, type: 'Community Hospital', specialties: ['Emergency', 'Heart', 'Orthopedics'], description: 'Adventist Health facility serving San Luis Obispo County.', highlights: ['Joined Adventist Health 2024', 'Regional referral center'] },
        { name: 'Marian Regional Medical Center', rank: 4, type: 'Community Hospital', specialties: ['Emergency', 'Heart', 'Cancer'], description: 'Dignity Health hospital serving Santa Maria and northern Santa Barbara County.', highlights: ['Heart & Vascular services', 'Cancer Center'] },
      ],
    },
    {
      name: 'Central Valley / San Joaquin',
      slug: 'central-valley',
      cities: ['Fresno', 'Bakersfield', 'Visalia'],
      population: '~4M',
      healthSystems: [
        { name: 'Community Medical Centers (Fresno)', rank: 1, type: 'Health System', specialties: ['Trauma', 'Heart', 'Cancer', 'Children\'s'], description: 'Largest healthcare system in the Central Valley with Level I trauma center.', highlights: ['Only Level I Trauma in Central Valley', 'Children\'s Hospital Central California', 'Comprehensive Cancer Center'] },
        { name: 'Saint Agnes Medical Center', rank: 2, nationalRank: '#1 Fresno', type: 'Community Hospital', specialties: ['Heart', 'Cancer', 'Orthopedics'], description: 'Trinity Health facility and top-ranked hospital in Fresno area.', highlights: ['#1 in Fresno (US News)', 'Heart & Vascular Institute'] },
        { name: 'Adventist Health Bakersfield', rank: 3, type: 'Community Hospital', specialties: ['Emergency', 'Heart', 'Orthopedics'], description: 'Major hospital serving Kern County.', highlights: ['Comprehensive stroke center', 'Heart program'] },
        { name: 'Kaweah Health', rank: 4, type: 'Health System', specialties: ['Emergency', 'Heart', 'Cancer'], description: 'Public health district serving Tulare County from Visalia.', highlights: ['Level III Trauma Center', 'Regional cancer services'] },
      ],
    },
    {
      name: 'Inland Empire',
      slug: 'inland-empire',
      cities: ['Riverside', 'San Bernardino', 'Ontario'],
      population: '~4.6M',
      healthSystems: [
        { name: 'Loma Linda University Medical Center', rank: 1, type: 'Academic Medical Center', specialties: ['Transplant', 'Cancer', 'Heart', 'Children\'s'], description: 'Seventh-day Adventist academic medical center known for pioneering infant heart transplantation.', highlights: ['Pioneered infant heart transplant', 'Level I Trauma Center', 'Children\'s Hospital', 'Proton therapy center'] },
        { name: 'Riverside Community Hospital', rank: 2, type: 'Community Hospital', specialties: ['Emergency', 'Heart', 'Stroke'], description: 'HCA facility serving western Riverside County for 100+ years.', highlights: ['542 beds', 'Comprehensive Stroke Center'] },
        { name: 'Kaiser Riverside', rank: 3, type: 'Integrated Health System', specialties: ['Primary Care', 'Specialty Care'], description: 'Kaiser medical center serving Inland Empire members.', highlights: ['Integrated care model', 'Large regional network'] },
        { name: 'Arrowhead Regional Medical Center', rank: 4, type: 'Safety-Net Hospital', specialties: ['Trauma', 'Emergency', 'Burn'], description: 'San Bernardino County\'s public teaching hospital.', highlights: ['Level II Trauma Center', 'Burn Center', 'Teaching hospital'] },
      ],
    },
    {
      name: 'Los Angeles Metro',
      slug: 'los-angeles',
      cities: ['Los Angeles', 'Pasadena', 'Long Beach'],
      population: '~10M',
      healthSystems: [
        { name: 'Cedars-Sinai Medical Center', rank: 1, nationalRank: '#7 nationally, Honor Roll', type: 'Academic Medical Center', specialties: ['Cardiology', 'Gastroenterology', 'Neurology', 'Cancer'], description: 'One of the largest nonprofit academic medical centers in the Western US, known for celebrity patients and world-class care.', highlights: ['#7 US News nationally', '9 consecutive years Honor Roll', 'Largest nonprofit hospital in Western US', '900+ clinical trials'] },
        { name: 'UCLA Medical Center', rank: 2, nationalRank: '#4 nationally, Honor Roll', type: 'Academic Medical Center', specialties: ['Cancer', 'Cardiology', 'Neurology', 'Urology'], description: 'Ronald Reagan UCLA Medical Center consistently ranks among the nation\'s best.', highlights: ['#4 US News nationally', 'Honor Roll', 'Top-ranked in 15 specialties', 'Leader in transplant and immunotherapy'] },
        { name: 'Keck Medical Center of USC', rank: 3, nationalRank: 'Top 30 nationally', type: 'Academic Medical Center', specialties: ['Cancer', 'Urology', 'Ophthalmology', 'ENT'], description: 'USC\'s academic medical center with strong specialty programs.', highlights: ['Top 6 in California', 'Top 3 in LA metro', 'NCI Cancer Center'] },
        { name: 'Providence Saint John\'s Health Center', rank: 4, type: 'Community Hospital', specialties: ['Cancer', 'Orthopedics', 'Heart'], description: 'Santa Monica-based hospital with renowned cancer center.', highlights: ['John Wayne Cancer Institute', 'Top 50 California'] },
      ],
    },
    {
      name: 'Orange County',
      slug: 'orange-county',
      cities: ['Irvine', 'Anaheim', 'Newport Beach'],
      population: '~3.2M',
      healthSystems: [
        { name: 'Hoag Hospital', rank: 1, nationalRank: '#10 California', type: 'Community Hospital', specialties: ['Cancer', 'Heart', 'Orthopedics', 'Women\'s Health'], description: 'Highest-ranked hospital in Orange County with comprehensive specialty programs.', highlights: ['#10 in California', 'Only OC hospital in CA Top 10', '#5 in LA metro', 'Hoag Family Cancer Institute'] },
        { name: 'UCI Medical Center', rank: 2, type: 'Academic Medical Center', specialties: ['Cancer', 'Neuroscience', 'Transplant'], description: 'UC Irvine\'s academic medical center and only Level I trauma in OC.', highlights: ['Only Level I Trauma in Orange County', 'NCI Cancer Center', 'Academic research hub'] },
        { name: 'MemorialCare Orange Coast', rank: 3, type: 'Community Hospital', specialties: ['Heart', 'Orthopedics', 'Breast Care'], description: 'Part of MemorialCare health system in Fountain Valley.', highlights: ['Breast Center of Excellence', 'Joint replacement program'] },
        { name: 'Providence Mission Hospital', rank: 4, type: 'Community Hospital', specialties: ['Heart', 'Cancer', 'Orthopedics'], description: 'Providence network hospital in Mission Viejo.', highlights: ['Heart & Vascular Institute', 'Regional referral center'] },
      ],
    },
    {
      name: 'San Diego',
      slug: 'san-diego',
      cities: ['San Diego', 'Chula Vista', 'Oceanside'],
      population: '~3.3M',
      healthSystems: [
        { name: 'UC San Diego Health', rank: 1, nationalRank: '#15 nationally, Honor Roll', type: 'Academic Medical Center', specialties: ['Cancer', 'Cardiology', 'Neurology', 'Transplant'], description: 'UC San Diego Health has been #1 in San Diego for 5 consecutive years and is on the US News Honor Roll.', highlights: ['#15 US News nationally', 'Honor Roll 2 consecutive years', '11 nationally ranked specialties', 'High performing in 18 procedures'] },
        { name: 'Scripps La Jolla Hospitals', rank: 2, nationalRank: '#6 California', type: 'Health System', specialties: ['Heart', 'Cancer', 'Orthopedics', 'Neurology'], description: 'Scripps Health flagship facilities in La Jolla.', highlights: ['#6 in California', 'Top 50 in 6 specialties', 'Scripps MD Anderson Cancer Center'] },
        { name: 'Sharp Memorial Hospital', rank: 3, nationalRank: '#13 California', type: 'Health System', specialties: ['Heart', 'Cancer', 'Orthopedics', 'ENT'], description: 'Sharp HealthCare\'s flagship hospital in Serra Mesa.', highlights: ['#13 in California', '#39 nationally in ENT', 'Sharp Experience patient care model'] },
        { name: 'Kaiser Permanente San Diego', rank: 4, type: 'Integrated Health System', specialties: ['Primary Care', 'Specialty Care'], description: 'Large Kaiser facility serving San Diego members.', highlights: ['Integrated care model', 'Multiple locations'] },
      ],
    },
  ],
};

// ============================================================================
// TEXAS
// ============================================================================
const TEXAS_DATA: StateHealthcareData = {
  stateSlug: 'texas',
  stateName: 'Texas',
  overview: 'Texas has a vast and diverse healthcare landscape, home to the world\'s largest medical center (Texas Medical Center in Houston) and nationally renowned institutions. The state leads in cancer care, cardiac surgery, and medical research.',
  population: '30 million',
  uninsuredRate: '16.6%',
  avgHealthcareCost: '5% below national average',
  highlights: [
    'Texas Medical Center is the world\'s largest medical complex',
    'MD Anderson is #1 cancer hospital nationally',
    'Multiple Honor Roll hospitals',
    'Strong medical school pipeline',
  ],
  challenges: [
    'Highest uninsured rate in the nation',
    'Rural areas face significant provider shortages',
    'Large geographic distances between major centers',
  ],
  regions: [
    {
      name: 'Houston Metro',
      slug: 'houston',
      cities: ['Houston', 'The Woodlands', 'Sugar Land'],
      population: '~7M',
      healthSystems: [
        { name: 'Houston Methodist Hospital', rank: 1, nationalRank: '#1 Texas, Honor Roll', type: 'Academic Medical Center', specialties: ['Cardiology', 'Neurology', 'Cancer', 'Orthopedics'], description: 'Flagship of Houston Methodist system and #1 hospital in Texas for multiple consecutive years.', highlights: ['#1 in Texas (US News)', 'Honor Roll hospital', '10 nationally ranked specialties', 'Pioneer in minimally invasive surgery'] },
        { name: 'MD Anderson Cancer Center', rank: 2, nationalRank: '#1 Cancer nationally', type: 'Specialty Hospital', specialties: ['Cancer'], description: 'World\'s leading cancer center, part of UT System and Texas Medical Center.', highlights: ['#1 Cancer hospital in US (US News)', 'NCI Comprehensive Cancer Center', '21,000+ employees', 'Pioneer in immunotherapy'] },
        { name: 'Baylor St. Luke\'s Medical Center', rank: 3, type: 'Academic Medical Center', specialties: ['Heart', 'Transplant', 'Neurology'], description: 'Part of CHI St. Luke\'s Health and teaching hospital for Baylor College of Medicine.', highlights: ['#2 in Houston', 'Texas Heart Institute', 'Major transplant center'] },
        { name: 'Memorial Hermann-Texas Medical Center', rank: 4, type: 'Health System', specialties: ['Trauma', 'Neuroscience', 'Transplant'], description: 'Major trauma center and flagship of Memorial Hermann system.', highlights: ['Level I Trauma Center', 'LifeFlight air ambulance', 'Comprehensive stroke center'] },
        { name: 'Texas Children\'s Hospital', rank: 5, nationalRank: '#3 Pediatrics nationally', type: 'Children\'s Hospital', specialties: ['Pediatrics', 'Cardiology', 'Neurology', 'Cancer'], description: 'One of the largest and top-ranked children\'s hospitals in the nation.', highlights: ['#3 US News Pediatrics', 'Largest children\'s hospital in US', 'Heart Center excellence'] },
      ],
    },
    {
      name: 'Dallas-Fort Worth',
      slug: 'dallas-fort-worth',
      cities: ['Dallas', 'Fort Worth', 'Plano', 'Arlington'],
      population: '~7.5M',
      healthSystems: [
        { name: 'UT Southwestern Medical Center', rank: 1, nationalRank: '#2 Texas', type: 'Academic Medical Center', specialties: ['Cancer', 'Cardiology', 'Neurology', 'Orthopedics'], description: 'UT Southwestern has been #1 in DFW for 9 consecutive years, with nationally ranked programs in 12 specialties.', highlights: ['#1 in DFW 9 years running', '#2 in Texas', '12 nationally ranked specialties (most in TX)', '6 Nobel laureates on faculty'] },
        { name: 'Baylor University Medical Center', rank: 2, nationalRank: '#3 Texas', type: 'Academic Medical Center', specialties: ['Transplant', 'Heart', 'Cancer', 'Orthopedics'], description: 'Flagship of Baylor Scott & White system and major transplant center.', highlights: ['#3 in Texas', '#2 in DFW', 'Pioneer in transplant surgery', 'Baylor Charles A. Sammons Cancer Center'] },
        { name: 'Baylor Scott & White All Saints (Fort Worth)', rank: 3, nationalRank: '#13 Texas', type: 'Health System', specialties: ['Heart', 'Orthopedics', 'Emergency'], description: 'Leading hospital in Fort Worth within Baylor Scott & White network.', highlights: ['#3 in DFW', '#13 in Texas', 'Heart & Vascular Center'] },
        { name: 'Texas Health Presbyterian Dallas', rank: 4, nationalRank: '#18 Texas', type: 'Health System', specialties: ['Heart', 'Orthopedics', 'Neuroscience'], description: 'Part of Texas Health Resources, one of the largest faith-based systems.', highlights: ['#18 in Texas', 'Transplant Institute', 'Heart & Vascular'] },
        { name: 'Medical City Dallas', rank: 5, nationalRank: '#15 Texas', type: 'Health System', specialties: ['Trauma', 'Heart', 'Spine'], description: 'HCA facility with Level I trauma center and specialty programs.', highlights: ['#15 in Texas', 'Level I Trauma Center', 'Comprehensive spine program'] },
      ],
    },
    {
      name: 'San Antonio',
      slug: 'san-antonio',
      cities: ['San Antonio'],
      population: '~2.5M',
      healthSystems: [
        { name: 'Methodist Hospital', rank: 1, nationalRank: '#9 Texas', type: 'Health System', specialties: ['Heart', 'Orthopedics', 'Cancer', 'Transplant'], description: 'Methodist Healthcare\'s flagship and #1 hospital in San Antonio. Major improvement from #18 to #9 statewide.', highlights: ['#1 in San Antonio', '#9 in Texas', 'Methodist Heart & Lung Institute', 'Comprehensive transplant program'] },
        { name: 'Baptist Medical Center', rank: 2, nationalRank: '#15 Texas', type: 'Health System', specialties: ['Heart', 'Cancer', 'Orthopedics'], description: 'Baptist Health System flagship with significant ranking improvement.', highlights: ['#2 in San Antonio', 'Jumped from #29 to #15', 'Heart Hospital'] },
        { name: 'Methodist Hospital Stone Oak', rank: 3, type: 'Health System', specialties: ['Orthopedics', 'Heart', 'Women\'s Health'], description: 'Newer Methodist facility in fast-growing north San Antonio.', highlights: ['#3 in San Antonio', 'Joint replacement center', 'Women\'s services'] },
        { name: 'University Hospital', rank: 4, type: 'Academic Medical Center', specialties: ['Trauma', 'Cancer', 'Transplant'], description: 'Teaching hospital for UT Health San Antonio, only Level I trauma in region.', highlights: ['Only Level I Trauma in South Texas', 'Academic teaching hospital', 'Mays Cancer Center'] },
      ],
    },
    {
      name: 'Austin',
      slug: 'austin',
      cities: ['Austin', 'Round Rock'],
      population: '~2.3M',
      healthSystems: [
        { name: 'St. David\'s Medical Center', rank: 1, type: 'Health System', specialties: ['Heart', 'Neuroscience', 'Orthopedics'], description: 'Flagship of St. David\'s HealthCare, HCA\'s Austin network.', highlights: ['Top in Austin metro', 'Heart & Vascular Center', 'Neuroscience Institute'] },
        { name: 'Ascension Seton Medical Center', rank: 2, type: 'Health System', specialties: ['Heart', 'Cancer', 'Neuroscience'], description: 'Part of Ascension Texas, major Catholic health system.', highlights: ['#2 in Austin', 'Dell Seton partnership with UT Austin', 'Heart & Vascular'] },
        { name: 'St. David\'s South Austin', rank: 3, type: 'Health System', specialties: ['Orthopedics', 'Spine', 'Cancer'], description: 'Full-service hospital in south Austin.', highlights: ['#3 in Austin', 'Spine & Orthopedic Center'] },
        { name: 'Dell Seton Medical Center at UT', rank: 4, type: 'Academic Medical Center', specialties: ['Trauma', 'Academic Medicine'], description: 'Teaching hospital for Dell Medical School at UT Austin, opened 2017.', highlights: ['Level I Trauma (2024)', 'Only academic medical center in Austin', 'Dell Medical School teaching hospital'] },
      ],
    },
    {
      name: 'Rio Grande Valley',
      slug: 'rio-grande-valley',
      cities: ['McAllen', 'Brownsville', 'Harlingen'],
      population: '~1.4M',
      healthSystems: [
        { name: 'South Texas Health System', rank: 1, type: 'Health System', specialties: ['Heart', 'Emergency', 'Cancer'], description: 'Major health system serving the Rio Grande Valley border region.', highlights: ['#1 in McAllen metro', 'Heart Institute', 'Regional referral center'] },
        { name: 'Valley Baptist Medical Center', rank: 2, type: 'Health System', specialties: ['Heart', 'Cancer', 'Orthopedics'], description: 'Part of Tenet Healthcare serving Harlingen and surrounding areas.', highlights: ['Multiple campuses', 'Heart & Vascular', 'Cancer Center'] },
        { name: 'Doctors Hospital at Renaissance', rank: 3, type: 'Community Hospital', specialties: ['Heart', 'Cancer', 'Women\'s Health'], description: 'Physician-owned hospital in Edinburg with rapid growth.', highlights: ['Physician-owned model', 'Women\'s Hospital', 'Heart Hospital'] },
      ],
    },
    {
      name: 'Coastal Bend',
      slug: 'coastal-bend',
      cities: ['Corpus Christi', 'Victoria'],
      population: '~500K',
      healthSystems: [
        { name: 'Corpus Christi Medical Center', rank: 1, type: 'Health System', specialties: ['Heart', 'Emergency', 'Orthopedics'], description: 'HCA facility and largest hospital in Corpus Christi area.', highlights: ['Best Regional Hospital (US News)', 'Heart program', 'Level II Trauma'] },
        { name: 'CHRISTUS Spohn', rank: 2, type: 'Health System', specialties: ['Heart', 'Cancer', 'Emergency'], description: 'Catholic health system with multiple facilities in Coastal Bend.', highlights: ['Multiple campuses', 'Cancer Center', 'Heart & Vascular'] },
        { name: 'DeTar Healthcare System', rank: 3, type: 'Community Hospital', specialties: ['Emergency', 'Heart', 'Orthopedics'], description: 'CHHS facility serving Victoria and surrounding counties.', highlights: ['Regional referral center', 'Heart program'] },
      ],
    },
    {
      name: 'East Texas',
      slug: 'east-texas',
      cities: ['Tyler', 'Longview', 'Texarkana'],
      population: '~1.2M',
      healthSystems: [
        { name: 'UT Health East Texas', rank: 1, nationalRank: 'Newsweek Best-in-State', type: 'Health System', specialties: ['Heart', 'Cancer', 'Orthopedics'], description: 'Major health system serving East Texas, including Tyler and surrounding areas.', highlights: ['Newsweek Best-in-State 2024', 'UT Health Science Center Tyler', 'Regional cancer center'] },
        { name: 'CHRISTUS Good Shepherd (Longview)', rank: 2, type: 'Health System', specialties: ['Heart', 'Emergency', 'Orthopedics'], description: 'CHRISTUS facility serving Longview and Gregg County.', highlights: ['Leapfrog A Grade', 'Heart & Vascular', 'Regional referral'] },
        { name: 'CHRISTUS St. Michael (Texarkana)', rank: 3, type: 'Health System', specialties: ['Heart', 'Emergency', 'Cancer'], description: 'Major hospital serving Texarkana and surrounding areas.', highlights: ['Upgraded to Leapfrog A', 'Regional cancer center', 'Heart Institute'] },
      ],
    },
    {
      name: 'Panhandle',
      slug: 'panhandle',
      cities: ['Amarillo', 'Lubbock'],
      population: '~600K',
      healthSystems: [
        { name: 'BSA Health System', rank: 1, type: 'Health System', specialties: ['Heart', 'Trauma', 'Cancer'], description: 'Major health system in Amarillo serving the Texas Panhandle.', highlights: ['Level II Trauma Center', 'Heart Hospital', 'Regional referral center'] },
        { name: 'Physicians Surgical Hospitals', rank: 2, type: 'Specialty Hospital', specialties: ['Surgery', 'Orthopedics'], description: 'Physician-owned surgical hospitals in Amarillo.', highlights: ['2024 Best Places to Work in Healthcare', 'Two surgical centers', 'Physician-owned model'] },
        { name: 'Covenant Health', rank: 3, type: 'Health System', specialties: ['Heart', 'Cancer', 'Children\'s'], description: 'Providence network facility serving Lubbock and South Plains.', highlights: ['Children\'s Hospital', 'Heart & Vascular Institute', 'Level II Trauma'] },
        { name: 'UMC Health System', rank: 4, type: 'Academic Medical Center', specialties: ['Trauma', 'Burn', 'Academic Medicine'], description: 'Teaching hospital for Texas Tech University Health Sciences Center.', highlights: ['Level I Trauma Center', 'Timothy J. Harnar Burn Center', 'Texas Tech teaching hospital'] },
      ],
    },
    {
      name: 'West Texas',
      slug: 'west-texas',
      cities: ['El Paso', 'Midland', 'Odessa'],
      population: '~1M',
      healthSystems: [
        { name: 'The Hospitals of Providence', rank: 1, type: 'Health System', specialties: ['Heart', 'Emergency', 'Orthopedics'], description: 'Tenet Healthcare\'s El Paso network with multiple facilities.', highlights: ['Multiple campuses', 'Heart Institute', 'Regional referral center'] },
        { name: 'University Medical Center of El Paso', rank: 2, type: 'Academic Medical Center', specialties: ['Trauma', 'Academic Medicine'], description: 'Teaching hospital for Texas Tech El Paso, only Level I trauma in region.', highlights: ['Only Level I Trauma in far West Texas', 'Texas Tech teaching hospital', 'Border health'] },
        { name: 'Medical Center Hospital (Odessa)', rank: 3, type: 'Community Hospital', specialties: ['Emergency', 'Heart', 'Orthopedics'], description: 'Major hospital serving the Permian Basin oil region.', highlights: ['Level II Trauma Center', 'Regional referral', 'Heart program'] },
      ],
    },
  ],
};

// ============================================================================
// FLORIDA
// ============================================================================
const FLORIDA_DATA: StateHealthcareData = {
  stateSlug: 'florida',
  stateName: 'Florida',
  overview: 'Florida has a robust healthcare system serving a large, diverse, and aging population. The state is home to world-renowned specialty hospitals and is a leader in areas like ophthalmology, cancer care, and orthopedics.',
  population: '22 million',
  uninsuredRate: '11.3%',
  avgHealthcareCost: 'Near national average',
  highlights: [
    'AdventHealth Orlando first Honor Roll hospital (2024)',
    'Mayo Clinic Florida provides world-class specialty care',
    'Bascom Palmer #1 ophthalmology nationally',
    'Strong medical tourism destination',
  ],
  challenges: [
    'Large elderly population increases demand',
    'Hurricane vulnerability affects infrastructure',
    'Rural areas face access challenges',
  ],
  regions: [
    {
      name: 'Florida Panhandle',
      slug: 'panhandle',
      cities: ['Pensacola', 'Tallahassee', 'Panama City'],
      population: '~1.5M',
      healthSystems: [
        { name: 'Tallahassee Memorial HealthCare', rank: 1, nationalRank: '#13 Florida', type: 'Health System', specialties: ['Heart', 'Cancer', 'Neuroscience', 'Orthopedics'], description: 'Private nonprofit serving 21 counties in North Florida and South Georgia. Tallahassee\'s top hospital.', highlights: ['#13 in Florida (US News)', 'Only Comprehensive Stroke Center in region', 'Level III NICU', '772 beds'] },
        { name: 'Ascension Sacred Heart Pensacola', rank: 2, nationalRank: 'Newsweek Best-in-State', type: 'Health System', specialties: ['Heart', 'Orthopedics', 'Neuroscience'], description: 'Ascension network\'s flagship Panhandle facility.', highlights: ['Newsweek Best-in-State 2025', '7 straight Leapfrog A grades', 'America\'s 100 Best Orthopedic Surgery'] },
        { name: 'Baptist Hospital Pensacola', rank: 3, nationalRank: 'Top 25 Florida', type: 'Health System', specialties: ['Heart', 'Orthopedics', 'Cancer'], description: 'Part of Baptist Health Care serving Northwest Florida.', highlights: ['Top 25 in Florida', 'Vascular Surgery Excellence', 'Andrews Institute for Orthopedics'] },
        { name: 'Sacred Heart Emerald Coast', rank: 4, type: 'Community Hospital', specialties: ['Emergency', 'Heart', 'Orthopedics'], description: 'Ascension facility serving Destin/Fort Walton Beach area.', highlights: ['5-star CMS rating', 'Only 15 in FL with 5 stars', 'Coastal community hospital'] },
      ],
    },
    {
      name: 'North Florida / Jacksonville',
      slug: 'north-florida',
      cities: ['Jacksonville', 'Gainesville'],
      population: '~2M',
      healthSystems: [
        { name: 'Mayo Clinic Florida', rank: 1, nationalRank: '#2 Florida, Honor Roll', type: 'Academic Medical Center', specialties: ['Cancer', 'Gastroenterology', 'Neurology', 'Urology'], description: 'Mayo Clinic\'s Florida campus brings world-class destination medicine to the Southeast.', highlights: ['#2 in Florida', 'Honor Roll hospital', 'Top 25 in 5 specialties nationally', 'Destination medicine model'] },
        { name: 'UF Health Shands Hospital', rank: 2, nationalRank: '#3 Florida', type: 'Academic Medical Center', specialties: ['Cancer', 'Neurology', 'Pediatrics', 'Transplant'], description: 'University of Florida\'s academic medical center in Gainesville.', highlights: ['#3 in Florida', 'UF academic flagship', 'NCI Cancer Center', 'Level I Trauma & Pediatric Trauma'] },
        { name: 'Baptist Medical Center Jacksonville', rank: 3, nationalRank: '#8 Florida (tie)', type: 'Health System', specialties: ['Heart', 'Cancer', 'Orthopedics', 'Stroke'], description: 'Flagship of Baptist Health system in Northeast Florida.', highlights: ['#8 in Florida', 'Stroke Center of Excellence', 'MD Anderson Cancer Center partnership'] },
        { name: 'Ascension St. Vincent\'s', rank: 4, type: 'Health System', specialties: ['Heart', 'Cancer', 'Orthopedics'], description: 'Ascension network facilities in Jacksonville area.', highlights: ['Multiple campuses', 'Heart Institute', 'Regional referral'] },
      ],
    },
    {
      name: 'Central Florida / Orlando',
      slug: 'central-florida',
      cities: ['Orlando', 'Daytona Beach', 'Ocala'],
      population: '~3.5M',
      healthSystems: [
        { name: 'AdventHealth Orlando', rank: 1, nationalRank: '#1 Florida, Honor Roll', type: 'Health System', specialties: ['Cardiology', 'Neurology', 'Orthopedics', 'Cancer'], description: 'AdventHealth Orlando achieved Honor Roll status for the first time in 2024, becoming #1 in Florida.', highlights: ['#1 in Florida (US News)', 'First-ever Honor Roll status', '11 nationally ranked adult specialties', 'One of only 20 Honor Roll hospitals nationally'] },
        { name: 'Orlando Health Orlando Regional', rank: 2, nationalRank: '#5 Florida', type: 'Health System', specialties: ['Trauma', 'Cancer', 'Heart', 'Neuroscience'], description: 'Major health system and Level I trauma center serving Central Florida.', highlights: ['#5 in Florida', 'Level I Trauma Center', 'Arnold Palmer Hospital for Children', 'Winnie Palmer for Women & Babies'] },
        { name: 'Halifax Health', rank: 3, type: 'Community Hospital', specialties: ['Emergency', 'Heart', 'Cancer'], description: 'Community health system serving Volusia and Flagler counties from Daytona Beach.', highlights: ['UF Health partnership', 'Heart & Vascular', 'France Tower expansion'] },
        { name: 'AdventHealth Celebration', rank: 4, type: 'Community Hospital', specialties: ['Heart', 'Orthopedics', 'Emergency'], description: 'AdventHealth facility near Walt Disney World.', highlights: ['Heart & Vascular', 'Spine Center', 'Sports Medicine'] },
      ],
    },
    {
      name: 'Tampa Bay',
      slug: 'tampa-bay',
      cities: ['Tampa', 'St. Petersburg', 'Clearwater'],
      population: '~3.2M',
      healthSystems: [
        { name: 'Tampa General Hospital', rank: 1, nationalRank: '#4 Florida', type: 'Academic Medical Center', specialties: ['Transplant', 'Heart', 'Neuroscience', 'Cancer'], description: 'Tampa General has been #1 in Tampa Bay for 10 consecutive years. Major transplant center.', highlights: ['#1 in Tampa Bay 10 years', '#4 in Florida', 'Leading transplant program', 'Level I Trauma Center', 'USF teaching hospital'] },
        { name: 'Moffitt Cancer Center', rank: 2, nationalRank: 'Top 15 Cancer nationally', type: 'Specialty Hospital', specialties: ['Cancer'], description: 'NCI-designated Comprehensive Cancer Center and Florida\'s only National Cancer Institute cancer center.', highlights: ['Top 15 Cancer nationally', 'Only NCI Comprehensive Center in FL', 'Cutting-edge research', 'Immunotherapy pioneer'] },
        { name: 'Morton Plant Hospital', rank: 3, type: 'Community Hospital', specialties: ['Heart', 'Orthopedics', 'Stroke'], description: 'BayCare facility in Clearwater serving northern Pinellas County.', highlights: ['#2 in Tampa Bay', 'Heart & Vascular', 'Primary Stroke Center'] },
        { name: 'AdventHealth Tampa', rank: 4, type: 'Health System', specialties: ['Heart', 'Orthopedics', 'Cancer'], description: 'AdventHealth facility serving Tampa and Hillsborough County.', highlights: ['#3 in Tampa', 'Heart & Vascular Institute', 'Spine Center'] },
        { name: 'St. Joseph\'s Hospital Tampa', rank: 5, type: 'Health System', specialties: ['Heart', 'Women\'s Health', 'Emergency'], description: 'BayCare facility in central Tampa.', highlights: ['Heart Institute', 'Women\'s Hospital', 'Children\'s Hospital'] },
      ],
    },
    {
      name: 'Southwest Florida',
      slug: 'southwest-florida',
      cities: ['Sarasota', 'Fort Myers', 'Naples'],
      population: '~1.8M',
      healthSystems: [
        { name: 'Sarasota Memorial Hospital', rank: 1, nationalRank: '#8 Florida (tie)', type: 'Health System', specialties: ['Cancer', 'Heart', 'Orthopedics', 'Neuroscience'], description: 'Public health system and one of Florida\'s largest public hospitals.', highlights: ['#8 in Florida', 'Brian D. Jellison Cancer Institute', 'Comprehensive Stroke Center', 'Level II Trauma'] },
        { name: 'NCH Healthcare System', rank: 2, type: 'Health System', specialties: ['Heart', 'Cancer', 'Orthopedics'], description: 'Not-for-profit health system serving Naples and Collier County.', highlights: ['Two hospital campuses', 'Heart Institute', 'Cancer Institute'] },
        { name: 'Lee Health', rank: 3, type: 'Health System', specialties: ['Heart', 'Cancer', 'Emergency'], description: 'Public health system serving Lee County from Fort Myers.', highlights: ['4 acute care hospitals', 'Golisano Children\'s Hospital', 'Regional Cancer Center'] },
        { name: 'Physicians Regional', rank: 4, type: 'Community Hospital', specialties: ['Orthopedics', 'Spine', 'Heart'], description: 'Two-hospital system in Naples and Collier County.', highlights: ['Orthopedic excellence', 'Spine Institute'] },
      ],
    },
    {
      name: 'Treasure Coast',
      slug: 'treasure-coast',
      cities: ['Vero Beach', 'Port St. Lucie', 'Stuart'],
      population: '~700K',
      healthSystems: [
        { name: 'Cleveland Clinic Indian River', rank: 1, type: 'Health System', specialties: ['Heart', 'Cancer', 'Orthopedics'], description: 'Part of Cleveland Clinic Florida, serving Vero Beach area.', highlights: ['Cleveland Clinic network', 'Heart & Vascular', 'Cancer Center'] },
        { name: 'Lawnwood Regional Medical Center', rank: 2, type: 'Community Hospital', specialties: ['Trauma', 'Heart', 'Neuroscience'], description: 'HCA facility in Fort Pierce with Level II trauma center.', highlights: ['Level II Trauma Center', 'Comprehensive Stroke Center', 'Heart & Vascular'] },
        { name: 'St. Lucie Medical Center', rank: 3, type: 'Community Hospital', specialties: ['Heart', 'Orthopedics', 'Emergency'], description: 'HCA facility serving Port St. Lucie area.', highlights: ['Heart program', 'Joint replacement', 'Growing community'] },
      ],
    },
    {
      name: 'South Florida',
      slug: 'south-florida',
      cities: ['Miami', 'Fort Lauderdale', 'West Palm Beach'],
      population: '~6.1M',
      healthSystems: [
        { name: 'Cleveland Clinic Florida (Weston)', rank: 1, nationalRank: '#6 Florida', type: 'Academic Medical Center', specialties: ['Heart', 'Digestive', 'Urology', 'Cancer'], description: 'Cleveland Clinic\'s Florida campus brings world-renowned expertise to South Florida.', highlights: ['#6 in Florida', 'Cleveland Clinic model', 'Heart & Vascular Institute', 'Digestive Disease Institute'] },
        { name: 'Baptist Health Baptist Hospital', rank: 2, nationalRank: '#7 Florida', type: 'Health System', specialties: ['Heart', 'Cancer', 'Neuroscience', 'Orthopedics'], description: 'Flagship of Baptist Health South Florida in Miami.', highlights: ['#7 in Florida', 'Miami Cancer Institute', 'Miami Cardiac & Vascular Institute'] },
        { name: 'Mount Sinai Medical Center', rank: 3, nationalRank: '#10 Florida', type: 'Academic Medical Center', specialties: ['Heart', 'Cancer', 'Geriatrics'], description: 'Teaching hospital and largest private independent hospital in South Florida.', highlights: ['#10 in Florida', 'Columbia University partnership', 'Wien Center for Alzheimer\'s'] },
        { name: 'Bascom Palmer Eye Institute', rank: 4, nationalRank: '#1 Ophthalmology nationally', type: 'Specialty Hospital', specialties: ['Ophthalmology'], description: 'University of Miami\'s world-leading eye institute, ranked #1 in ophthalmology for 20+ years.', highlights: ['#1 Ophthalmology in US (20+ years)', 'Pioneering eye research', 'International destination for eye care'] },
        { name: 'Jackson Memorial Hospital', rank: 5, type: 'Safety-Net Hospital', specialties: ['Trauma', 'Burn', 'Transplant'], description: 'Miami\'s public safety-net hospital and largest teaching hospital in the US.', highlights: ['Ryder Trauma Center', 'Burn Center', 'UM teaching hospital', 'Largest teaching hospital in US'] },
      ],
    },
  ],
};

// ============================================================================
// NEW YORK
// ============================================================================
const NEW_YORK_DATA: StateHealthcareData = {
  stateSlug: 'new-york',
  stateName: 'New York',
  overview: 'New York has one of the most advanced healthcare systems in the world, anchored by globally renowned academic medical centers in New York City. The state leads in specialty care, research, and medical education.',
  population: '19 million',
  uninsuredRate: '5.2%',
  avgHealthcareCost: 'Highest in nation (NYC)',
  highlights: [
    'NYU Langone ranked #1 nationally in 5 specialties',
    'Multiple Honor Roll hospitals in NYC',
    'Hospital for Special Surgery #1 in orthopedics',
    'Memorial Sloan Kettering top cancer center',
  ],
  challenges: [
    'Extreme cost differences between NYC and upstate',
    'Upstate hospital closures and consolidation',
    'Rural North Country access challenges',
  ],
  regions: [
    {
      name: 'New York City',
      slug: 'new-york-city',
      cities: ['Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island'],
      population: '~8.3M',
      healthSystems: [
        { name: 'NYU Langone Hospitals', rank: 1, nationalRank: '#1 NY (tie), Honor Roll', type: 'Academic Medical Center', specialties: ['Cardiology', 'Neurology', 'Orthopedics', 'Rheumatology'], description: 'NYU Langone is ranked #1 nationally in 5 adult specialties, more than any other hospital in the country.', highlights: ['#1 nationally in 5 specialties', 'Honor Roll hospital', '#1 Cardiology & Heart Surgery', '#1 Neurology & Neurosurgery'] },
        { name: 'NewYork-Presbyterian Hospital', rank: 2, nationalRank: '#1 NY (tie), Honor Roll', type: 'Academic Medical Center', specialties: ['Psychiatry', 'Cardiology', 'Neurology', 'Cancer'], description: 'Affiliated with both Columbia and Cornell medical schools, one of the nation\'s largest hospitals.', highlights: ['#1 Psychiatry nationally', 'Honor Roll', 'Columbia & Weill Cornell affiliations', 'Major transplant center'] },
        { name: 'Mount Sinai Hospital', rank: 3, nationalRank: '#1 NY (tie), Honor Roll', type: 'Academic Medical Center', specialties: ['Geriatrics', 'Cardiology', 'Gastroenterology', 'Neurology'], description: 'Flagship of Mount Sinai Health System with nationally ranked geriatrics program.', highlights: ['#1 Geriatrics nationally', 'Honor Roll', 'Icahn School of Medicine'] },
        { name: 'Memorial Sloan Kettering', rank: 4, nationalRank: '#1 Urology nationally, Top 3 Cancer', type: 'Specialty Hospital', specialties: ['Cancer', 'Urology'], description: 'World\'s oldest and largest private cancer center.', highlights: ['#1 Urology nationally', 'Top 3 Cancer nationally', 'Pioneering immunotherapy', 'NCI Comprehensive Cancer Center'] },
        { name: 'Hospital for Special Surgery', rank: 5, nationalRank: '#1 Orthopedics nationally', type: 'Specialty Hospital', specialties: ['Orthopedics', 'Rheumatology'], description: 'World\'s leading orthopedics hospital for 15 consecutive years.', highlights: ['#1 Orthopedics nationally (15 years)', 'Top 3 Rheumatology', 'Official hospital of many pro sports teams'] },
      ],
    },
    {
      name: 'Long Island',
      slug: 'long-island',
      cities: ['Nassau County', 'Suffolk County'],
      population: '~2.8M',
      healthSystems: [
        { name: 'North Shore University Hospital', rank: 1, nationalRank: '#5 NY (tie)', type: 'Academic Medical Center', specialties: ['Heart', 'Cancer', 'Neuroscience', 'Orthopedics'], description: 'Northwell Health\'s flagship hospital in Manhasset.', highlights: ['#5 in New York', 'Northwell flagship', 'Sandra Atlas Bass Heart Hospital', 'Level I Trauma'] },
        { name: 'Long Island Jewish Medical Center', rank: 2, nationalRank: '#5 NY (tie)', type: 'Academic Medical Center', specialties: ['Heart', 'Cancer', 'Emergency'], description: 'Major Northwell facility in New Hyde Park.', highlights: ['#5 in New York', 'Cohen Children\'s Medical Center', 'Comprehensive Cancer Center'] },
        { name: 'Lenox Hill Hospital', rank: 3, nationalRank: '#5 NY (tie)', type: 'Health System', specialties: ['Heart', 'Orthopedics', 'Neuroscience'], description: 'Northwell facility on Manhattan\'s Upper East Side.', highlights: ['#5 in New York', 'Heart & Vascular Institute', 'Orthopedic excellence'] },
        { name: 'Huntington Hospital', rank: 4, nationalRank: '#15 NY', type: 'Community Hospital', specialties: ['Heart', 'Cancer', 'Orthopedics'], description: 'Northwell community hospital serving Suffolk County.', highlights: ['#15 in New York', 'Northwell network', 'Community focus'] },
        { name: 'South Shore University Hospital', rank: 5, nationalRank: '#17 NY', type: 'Community Hospital', specialties: ['Heart', 'Emergency', 'Orthopedics'], description: 'Northwell facility in Bay Shore serving south Suffolk County.', highlights: ['#17 in New York', 'Heart Institute', 'Growing specialty programs'] },
      ],
    },
    {
      name: 'Hudson Valley',
      slug: 'hudson-valley',
      cities: ['Westchester', 'Poughkeepsie', 'Newburgh'],
      population: '~2.3M',
      healthSystems: [
        { name: 'Vassar Brothers Medical Center', rank: 1, nationalRank: '#21 NY (tie)', type: 'Community Hospital', specialties: ['Heart', 'Cancer', 'Orthopedics'], description: 'Part of Nuvance Health serving the mid-Hudson Valley from Poughkeepsie.', highlights: ['#21 in New York', 'Dyson Center for Cancer Care', 'Heart & Vascular Institute'] },
        { name: 'Westchester Medical Center', rank: 2, type: 'Academic Medical Center', specialties: ['Trauma', 'Transplant', 'Heart', 'Children\'s'], description: 'Regional academic medical center and Level I trauma center in Valhalla.', highlights: ['Only Level I Trauma in Hudson Valley', 'Maria Fareri Children\'s Hospital', 'Major transplant center'] },
        { name: 'Northern Westchester Hospital', rank: 3, type: 'Community Hospital', specialties: ['Cancer', 'Orthopedics', 'Heart'], description: 'Northwell Health community hospital in Mount Kisco.', highlights: ['Northwell network', 'Cancer Center', 'Community focus'] },
        { name: 'Montefiore Nyack', rank: 4, type: 'Community Hospital', specialties: ['Heart', 'Emergency', 'Orthopedics'], description: 'Montefiore network hospital serving Rockland County.', highlights: ['Montefiore network', 'Heart program'] },
      ],
    },
    {
      name: 'Capital Region',
      slug: 'capital-region',
      cities: ['Albany', 'Schenectady', 'Troy', 'Saratoga'],
      population: '~1.2M',
      healthSystems: [
        { name: 'Saratoga Hospital', rank: 1, nationalRank: '#6 Newsweek NY', type: 'Community Hospital', specialties: ['Heart', 'Orthopedics', 'Cancer'], description: 'Community hospital in Saratoga Springs, one of only 2 upstate hospitals in Newsweek\'s top 20.', highlights: ['#6 Newsweek NY', 'One of 2 upstate in top 20', 'Community excellence'] },
        { name: 'St. Peter\'s Hospital', rank: 2, nationalRank: '#16 Newsweek NY', type: 'Health System', specialties: ['Heart', 'Cancer', 'Orthopedics'], description: 'Trinity Health facility and major hospital in Albany.', highlights: ['#16 Newsweek NY', 'Heart & Vascular', 'Cancer Center'] },
        { name: 'Albany Medical Center', rank: 3, type: 'Academic Medical Center', specialties: ['Trauma', 'Cancer', 'Heart', 'Children\'s'], description: 'Region\'s only academic medical center and Level I trauma center.', highlights: ['Only Level I Trauma in region', 'Albany Med College teaching hospital', 'Bernard & Millie Duker Children\'s Hospital'] },
        { name: 'Ellis Hospital', rank: 4, type: 'Community Hospital', specialties: ['Emergency', 'Heart', 'Orthopedics'], description: 'Community hospital serving Schenectady County.', highlights: ['Ellis Medicine network', 'Community focus'] },
      ],
    },
    {
      name: 'North Country / Adirondacks',
      slug: 'north-country',
      cities: ['Plattsburgh', 'Watertown', 'Saranac Lake', 'Malone'],
      population: '~400K',
      healthSystems: [
        { name: 'CVPH Medical Center', rank: 1, nationalRank: 'Top 100 Cardiac nationally', type: 'Community Hospital', specialties: ['Heart', 'Cancer', 'Orthopedics'], description: 'UVM Health Network facility and largest medical center in Northern New York, serving Plattsburgh area.', highlights: ['Largest in Northern NY', 'Top 100 Cardiac nationally', 'UVM Health Network', 'Heart Center since 2008'] },
        { name: 'Samaritan Medical Center', rank: 2, type: 'Community Hospital', specialties: ['Emergency', 'Orthopedics', 'Heart'], description: 'Community hospital serving Watertown and Jefferson County.', highlights: ['Fort Drum military partnership', 'Regional referral center'] },
        { name: 'Adirondack Medical Center', rank: 3, type: 'Community Hospital', specialties: ['Emergency', 'Orthopedics', 'Primary Care'], description: 'Small community hospital serving the Adirondack region from Saranac Lake.', highlights: ['Lake Placid campus', 'Rural healthcare access'] },
        { name: 'Canton-Potsdam Hospital', rank: 4, type: 'Community Hospital', specialties: ['Emergency', 'Primary Care'], description: 'Part of St. Lawrence Health serving the North Country.', highlights: ['St. Lawrence Health network', 'Rural access point'] },
      ],
    },
    {
      name: 'Central New York',
      slug: 'central-ny',
      cities: ['Syracuse', 'Utica'],
      population: '~800K',
      healthSystems: [
        { name: 'Upstate University Hospital', rank: 1, type: 'Academic Medical Center', specialties: ['Trauma', 'Cancer', 'Transplant', 'Children\'s'], description: 'SUNY Upstate Medical University\'s teaching hospital and only Level I trauma center in the region.', highlights: ['Only Level I Trauma in Central NY', 'Upstate Golisano Children\'s Hospital', 'SUNY academic flagship'] },
        { name: 'Crouse Hospital', rank: 2, type: 'Community Hospital', specialties: ['Women\'s Health', 'Heart', 'Orthopedics'], description: 'Major community hospital in Syracuse known for birthing center.', highlights: ['Regional Perinatal Center', '#1 birthing hospital in region', 'Crouse Medical Practice network'] },
        { name: 'St. Joseph\'s Health', rank: 3, type: 'Health System', specialties: ['Heart', 'Cancer', 'Orthopedics'], description: 'Trinity Health facility serving Syracuse area.', highlights: ['Cancer Center', 'Heart program', 'Senior services'] },
        { name: 'Mohawk Valley Health System', rank: 4, type: 'Health System', specialties: ['Heart', 'Cancer', 'Emergency'], description: 'Health system serving Utica and the Mohawk Valley.', highlights: ['New Wynn Hospital (2023)', 'Regional referral'] },
      ],
    },
    {
      name: 'Southern Tier',
      slug: 'southern-tier',
      cities: ['Binghamton', 'Elmira', 'Ithaca'],
      population: '~600K',
      healthSystems: [
        { name: 'UHS (United Health Services)', rank: 1, type: 'Health System', specialties: ['Heart', 'Cancer', 'Orthopedics', 'Neuroscience'], description: 'Major health system serving the Greater Binghamton region.', highlights: ['UHS Wilson Medical Center', 'UHS Chenango Memorial', 'Regional referral center'] },
        { name: 'Arnot Health', rank: 2, type: 'Health System', specialties: ['Heart', 'Cancer', 'Orthopedics'], description: 'Health system serving Elmira and Chemung County.', highlights: ['St. Joseph\'s Hospital (2011)', 'Arnot Ogden Medical Center', 'Regional cancer center'] },
        { name: 'Cayuga Medical Center', rank: 3, type: 'Community Hospital', specialties: ['Emergency', 'Heart', 'Orthopedics'], description: 'Community hospital serving Ithaca and Tompkins County.', highlights: ['Cornell University partnership', 'Community hospital'] },
        { name: 'Lourdes Hospital', rank: 4, type: 'Community Hospital', specialties: ['Heart', 'Orthopedics', 'Cancer'], description: 'Part of Ascension serving Binghamton area.', highlights: ['Ascension network', 'Heart program'] },
      ],
    },
    {
      name: 'Finger Lakes',
      slug: 'finger-lakes',
      cities: ['Rochester'],
      population: '~1.1M',
      healthSystems: [
        { name: 'Strong Memorial Hospital', rank: 1, nationalRank: '#24 Newsweek NY', type: 'Academic Medical Center', specialties: ['Cancer', 'Cardiology', 'Neurology', 'Orthopedics'], description: 'University of Rochester Medical Center\'s flagship and region\'s leading academic medical center.', highlights: ['#24 Newsweek NY', 'Wilmot Cancer Institute', 'Golisano Children\'s Hospital', 'Level I Trauma'] },
        { name: 'Rochester General Hospital', rank: 2, type: 'Health System', specialties: ['Heart', 'Cancer', 'Orthopedics'], description: 'Part of Rochester Regional Health serving the Rochester area.', highlights: ['Sands-Constellation Heart Institute', 'Lipson Cancer Institute'] },
        { name: 'Highland Hospital', rank: 3, type: 'Community Hospital', specialties: ['Emergency', 'Orthopedics', 'Geriatrics'], description: 'URMC-affiliated community hospital.', highlights: ['URMC affiliation', 'Geriatric specialty'] },
        { name: 'Unity Hospital', rank: 4, type: 'Community Hospital', specialties: ['Heart', 'Orthopedics', 'Emergency'], description: 'Rochester Regional Health facility in Greece, NY.', highlights: ['Rochester Regional network', 'Heart services'] },
      ],
    },
    {
      name: 'Western New York',
      slug: 'western-ny',
      cities: ['Buffalo', 'Niagara Falls'],
      population: '~1.1M',
      healthSystems: [
        { name: 'Kaleida Health-Buffalo General', rank: 1, nationalRank: '#21 NY (tie)', type: 'Health System', specialties: ['Heart', 'Trauma', 'Neuroscience', 'Transplant'], description: 'Kaleida Health\'s flagship and Western NY\'s largest health system.', highlights: ['#21 in New York', 'Level I Trauma Center', 'Gates Vascular Institute', 'UB teaching hospital'] },
        { name: 'Roswell Park Comprehensive Cancer Center', rank: 2, nationalRank: 'Top Cancer nationally', type: 'Specialty Hospital', specialties: ['Cancer'], description: 'NCI-designated Comprehensive Cancer Center and one of the nation\'s first cancer centers.', highlights: ['NCI Comprehensive Cancer Center', 'Founded 1898', 'Pioneering cancer research'] },
        { name: 'ECMC Health Campus', rank: 3, type: 'Health System', specialties: ['Trauma', 'Orthopedics', 'Rehabilitation'], description: 'Erie County Medical Center serving as regional trauma and orthopedic center.', highlights: ['Level I Trauma Center', 'America\'s 100 Best Orthopedic Surgery', 'Regional Burn Center'] },
        { name: 'Mercy Hospital of Buffalo', rank: 4, type: 'Community Hospital', specialties: ['Heart', 'Orthopedics', 'Emergency'], description: 'Catholic Health facility in South Buffalo.', highlights: ['Coronary Intervention Excellence', 'Labor & Delivery excellence'] },
      ],
    },
  ],
};

// ============================================================================
// ARIZONA
// ============================================================================
const ARIZONA_DATA: StateHealthcareData = {
  stateSlug: 'arizona',
  stateName: 'Arizona',
  overview: 'Arizona\'s healthcare is anchored by Mayo Clinic in Phoenix, consistently ranked among the nation\'s best. The state also benefits from Banner Health\'s strong academic medical centers affiliated with the University of Arizona.',
  population: '7.3 million',
  uninsuredRate: '8.2%',
  avgHealthcareCost: 'Near national average',
  highlights: [
    'Mayo Clinic-Phoenix on Honor Roll 12 consecutive years',
    'Banner-University centers provide academic medicine',
    'Growing healthcare infrastructure',
  ],
  challenges: [
    'Northern Arizona has limited access',
    'Rapid population growth straining capacity',
    'Provider shortages in rural areas',
  ],
  regions: [
    {
      name: 'Phoenix Metro',
      slug: 'phoenix',
      cities: ['Phoenix', 'Scottsdale', 'Mesa', 'Chandler', 'Tempe'],
      population: '~4.9M',
      healthSystems: [
        { name: 'Mayo Clinic-Phoenix', rank: 1, nationalRank: '#12 nationally, Honor Roll', type: 'Academic Medical Center', specialties: ['Diabetes/Endocrinology', 'Gastroenterology', 'Geriatrics', 'Neurology', 'Cancer'], description: 'Mayo Clinic Arizona has been #1 in the state for 12 consecutive years and is on the national Honor Roll.', highlights: ['#1 in Arizona 12 years', '#12 nationally', 'Honor Roll', '10 nationally ranked specialties'] },
        { name: 'Banner-University Medical Center Phoenix', rank: 2, nationalRank: '#2 Arizona', type: 'Academic Medical Center', specialties: ['Geriatrics', 'Nephrology', 'Diabetes', 'Urology'], description: 'University of Arizona\'s Phoenix academic medical center, part of Banner Health.', highlights: ['#2 in Arizona', 'Nationally ranked in 4 specialties', 'UA College of Medicine-Phoenix'] },
        { name: 'St. Joseph\'s Hospital and Medical Center', rank: 3, nationalRank: '#6 Arizona (tie)', type: 'Health System', specialties: ['Neurology', 'Heart', 'Cancer'], description: 'Dignity Health facility known for Barrow Neurological Institute.', highlights: ['Barrow Neurological Institute', 'Top 5 neurology/neurosurgery', 'Level I Trauma'] },
        { name: 'Banner Boswell Medical Center', rank: 4, nationalRank: '#6 Arizona (tie)', type: 'Community Hospital', specialties: ['Orthopedics', 'Heart', 'Cancer'], description: 'Banner Health facility serving Sun City and the West Valley.', highlights: ['#6 in Arizona', 'Joint replacement excellence', 'Senior care focus'] },
        { name: 'HonorHealth Scottsdale Shea', rank: 5, nationalRank: '#6 Arizona (tie)', type: 'Health System', specialties: ['Heart', 'Cancer', 'Orthopedics'], description: 'HonorHealth\'s flagship facility in Scottsdale.', highlights: ['#6 in Arizona', 'Virginia G. Piper Cancer Center', 'Research Institute'] },
        { name: 'Chandler Regional Medical Center', rank: 6, type: 'Community Hospital', specialties: ['Heart', 'Orthopedics', 'Women\'s Health'], description: 'Dignity Health facility serving the East Valley.', highlights: ['High performing in 8 conditions', 'Heart & Vascular', 'Norton Thoracic Institute'] },
      ],
    },
    {
      name: 'Tucson / Southern Arizona',
      slug: 'tucson',
      cities: ['Tucson', 'Sierra Vista', 'Nogales'],
      population: '~1M',
      healthSystems: [
        { name: 'Banner-University Medical Center Tucson', rank: 1, nationalRank: '#3 Arizona', type: 'Academic Medical Center', specialties: ['Geriatrics', 'Nephrology', 'Pulmonology'], description: 'University of Arizona\'s main academic medical center and only Level I trauma center in Southern Arizona.', highlights: ['#3 in Arizona', '#1 in Tucson', 'Only Level I Trauma in Southern AZ', 'Nationally ranked in 3 specialties'] },
        { name: 'TMC Healthcare (Tucson Medical Center)', rank: 2, nationalRank: '#5 Arizona', type: 'Community Hospital', specialties: ['Heart', 'Orthopedics', 'Cancer'], description: 'Nonprofit community hospital serving Tucson area.', highlights: ['#5 in Arizona', 'TMC One physician network', 'Comprehensive cancer services'] },
        { name: 'Northwest Medical Center', rank: 3, type: 'Community Hospital', specialties: ['Emergency', 'Heart', 'Orthopedics'], description: 'Part of Northwest Healthcare serving northwest Tucson.', highlights: ['Oro Valley campus', 'Heart & Vascular', 'Orthopedic Institute'] },
      ],
    },
    {
      name: 'Northern Arizona',
      slug: 'northern-arizona',
      cities: ['Flagstaff', 'Prescott', 'Sedona'],
      population: '~350K',
      healthSystems: [
        { name: 'Flagstaff Medical Center', rank: 1, type: 'Community Hospital', specialties: ['Emergency', 'Heart', 'Orthopedics', 'Cancer'], description: 'Northern Arizona Healthcare\'s flagship facility serving Flagstaff and the Four Corners region.', highlights: ['Only Level I Trauma in northern AZ', 'NAH system flagship', 'Cancer Center', 'Regional referral'] },
        { name: 'Yavapai Regional Medical Center', rank: 2, type: 'Community Hospital', specialties: ['Heart', 'Cancer', 'Orthopedics'], description: 'Community hospital district serving Prescott and Yavapai County.', highlights: ['Heart & Vascular Center', 'Cancer Care Center', 'Two campuses'] },
        { name: 'Verde Valley Medical Center', rank: 3, type: 'Community Hospital', specialties: ['Emergency', 'Orthopedics'], description: 'Northern Arizona Healthcare facility serving Sedona and the Verde Valley.', highlights: ['NAH network', 'Verde Valley coverage'] },
      ],
    },
  ],
};

// ============================================================================
// COLORADO
// ============================================================================
const COLORADO_DATA: StateHealthcareData = {
  stateSlug: 'colorado',
  stateName: 'Colorado',
  overview: 'Colorado\'s healthcare is centered on UCHealth University of Colorado Hospital, ranked #1 in the state for 13 consecutive years. The state has strong healthcare infrastructure along the Front Range but faces access challenges in mountain and rural areas.',
  population: '5.8 million',
  uninsuredRate: '6.6%',
  avgHealthcareCost: 'Near national average',
  highlights: [
    'UCHealth University of Colorado Hospital #1 for 13 years',
    'National Jewish Health leads in respiratory care',
    'Strong front-range healthcare corridor',
  ],
  challenges: [
    'Mountain communities have limited access',
    'Western Slope faces provider shortages',
    'Behavioral health capacity gaps',
  ],
  regions: [
    {
      name: 'Denver Metro',
      slug: 'denver',
      cities: ['Denver', 'Aurora', 'Lakewood', 'Englewood'],
      population: '~2.9M',
      healthSystems: [
        { name: 'UCHealth University of Colorado Hospital', rank: 1, nationalRank: '#1 Colorado (13 years)', type: 'Academic Medical Center', specialties: ['Pulmonology', 'Cancer', 'Cardiology', 'Neurology'], description: 'University of Colorado\'s academic flagship on the Anschutz Medical Campus, #1 in Colorado for 13 consecutive years.', highlights: ['#1 in Colorado 13 years', 'Nationally ranked in 4 specialties', 'NCI Cancer Center', 'Anschutz Medical Campus'] },
        { name: 'National Jewish Health', rank: 2, nationalRank: '#1 Pulmonology nationally', type: 'Specialty Hospital', specialties: ['Pulmonology', 'Respiratory', 'Immunology'], description: 'World\'s leading respiratory hospital, ranked #1 in pulmonology nationally.', highlights: ['#1 Pulmonology in US', 'Respiratory disease specialty', 'Research pioneer'] },
        { name: 'Intermountain Health Saint Joseph Hospital', rank: 3, nationalRank: '#2 CO / #1 Newsweek CO', type: 'Health System', specialties: ['Heart', 'Orthopedics', 'Cancer'], description: 'Former SCL Health facility now part of Intermountain, ranked #1 on Newsweek\'s Colorado list.', highlights: ['#2 Colorado (US News)', '#1 Newsweek Colorado', 'Heart & Vascular Center'] },
        { name: 'Denver Health Medical Center', rank: 4, type: 'Safety-Net Hospital', specialties: ['Trauma', 'Emergency', 'Primary Care'], description: 'Denver\'s public safety-net hospital and Level I trauma center.', highlights: ['Level I Trauma Center', 'Rocky Mountain Poison Center', 'Denver\'s safety-net'] },
        { name: 'Swedish Medical Center', rank: 5, type: 'Health System', specialties: ['Heart', 'Cancer', 'Orthopedics'], description: 'HCA facility in Englewood with comprehensive specialty programs.', highlights: ['Level I Trauma Center', 'Sarah Cannon Cancer Institute', 'Heart program'] },
        { name: 'Sky Ridge Medical Center', rank: 6, nationalRank: '#5 Colorado', type: 'Community Hospital', specialties: ['Heart', 'Orthopedics', 'Women\'s Health'], description: 'HCA facility serving the south Denver metro in Lone Tree.', highlights: ['#5 in Colorado', 'Level II Trauma', 'Heart & Vascular'] },
      ],
    },
    {
      name: 'Northern Front Range',
      slug: 'northern-front-range',
      cities: ['Fort Collins', 'Greeley', 'Loveland', 'Boulder'],
      population: '~700K',
      healthSystems: [
        { name: 'UCHealth Poudre Valley Hospital', rank: 1, type: 'Health System', specialties: ['Heart', 'Cancer', 'Orthopedics', 'Neuroscience'], description: 'UCHealth facility and leading hospital in Fort Collins.', highlights: ['#1 in Northern Colorado', 'Level II Trauma', 'UCHealth Cancer Center'] },
        { name: 'UCHealth Medical Center of the Rockies', rank: 2, nationalRank: '#3 Colorado (tie)', type: 'Health System', specialties: ['Heart', 'Orthopedics', 'Emergency'], description: 'UCHealth facility in Loveland with growing specialty programs.', highlights: ['#3 in Colorado', 'Heart care', 'Orthopedics'] },
        { name: 'Banner Health North Colorado Medical Center', rank: 3, type: 'Community Hospital', specialties: ['Emergency', 'Heart', 'Orthopedics'], description: 'Banner Health facility serving Greeley and Weld County.', highlights: ['Banner network', 'Regional referral', 'Growing programs'] },
        { name: 'Good Samaritan Medical Center', rank: 4, type: 'Community Hospital', specialties: ['Heart', 'Orthopedics', 'Women\'s Health'], description: 'Intermountain facility in Lafayette serving Boulder County.', highlights: ['Intermountain network', 'Heart program', 'Community focus'] },
        { name: 'Foothills Hospital Boulder', rank: 5, type: 'Community Hospital', specialties: ['Emergency', 'Heart', 'Orthopedics'], description: 'Community hospital serving Boulder.', highlights: ['Best-in-State (Newsweek)', 'Boulder community hospital'] },
      ],
    },
    {
      name: 'Colorado Springs / Southern Front Range',
      slug: 'colorado-springs',
      cities: ['Colorado Springs', 'Pueblo'],
      population: '~800K',
      healthSystems: [
        { name: 'UCHealth Memorial Hospital', rank: 1, nationalRank: '#3 Colorado (tie)', type: 'Health System', specialties: ['Heart', 'Cancer', 'Orthopedics', 'Neuroscience'], description: 'UCHealth\'s flagship in Colorado Springs, leading hospital in the region.', highlights: ['#3 in Colorado', '#1 in Colorado Springs', 'Level I Trauma', 'Printers Park campus'] },
        { name: 'Penrose-St. Francis Health Services', rank: 2, nationalRank: '#5 Colorado', type: 'Health System', specialties: ['Heart', 'Cancer', 'Orthopedics'], description: 'Centura Health facilities serving Colorado Springs.', highlights: ['#5 in Colorado', 'Two campuses', 'Heart & Vascular'] },
        { name: 'CommonSpirit Penrose Hospital', rank: 3, type: 'Community Hospital', specialties: ['Heart', 'Emergency', 'Women\'s Health'], description: 'Centura Health facility in central Colorado Springs.', highlights: ['Newsweek Best-in-State', 'Heart program'] },
        { name: 'Parkview Medical Center', rank: 4, type: 'Community Hospital', specialties: ['Emergency', 'Heart', 'Orthopedics'], description: 'Community hospital serving Pueblo and Southern Colorado.', highlights: ['Regional referral center', 'Pueblo\'s largest hospital'] },
      ],
    },
    {
      name: 'Western Slope',
      slug: 'western-slope',
      cities: ['Grand Junction', 'Durango', 'Montrose'],
      population: '~350K',
      healthSystems: [
        { name: 'St. Mary\'s Medical Center', rank: 1, type: 'Community Hospital', specialties: ['Heart', 'Cancer', 'Orthopedics', 'Trauma'], description: 'SCL Health/Intermountain facility and largest hospital on the Western Slope.', highlights: ['Largest on Western Slope', 'Level II Trauma', 'Regional Cancer Center', 'Heart & Vascular'] },
        { name: 'Community Hospital Grand Junction', rank: 2, type: 'Community Hospital', specialties: ['Emergency', 'Cancer', 'Surgery'], description: 'Independent nonprofit serving Grand Junction since 1946.', highlights: ['Level III Trauma', 'James Pulsipher Cancer Center (2024)', 'Serves Western CO and Eastern UT'] },
        { name: 'Montrose Memorial Hospital', rank: 3, type: 'Community Hospital', specialties: ['Emergency', 'Orthopedics', 'Heart'], description: 'Community hospital serving Montrose and surrounding counties.', highlights: ['Regional referral', 'Orthopedic services'] },
        { name: 'Mercy Regional Medical Center', rank: 4, type: 'Community Hospital', specialties: ['Emergency', 'Orthopedics', 'Heart'], description: 'Centura Health facility serving Durango and the Four Corners region.', highlights: ['Level III Trauma', 'Four Corners regional referral'] },
      ],
    },
    {
      name: 'Mountain Corridor',
      slug: 'mountain-corridor',
      cities: ['Vail', 'Aspen', 'Summit County', 'Breckenridge'],
      population: '~100K',
      healthSystems: [
        { name: 'Vail Health', rank: 1, type: 'Community Hospital', specialties: ['Orthopedics', 'Sports Medicine', 'Emergency'], description: 'Destination orthopedics hospital in Vail known for ski injury care.', highlights: ['The Steadman Clinic partnership', 'Howard Head Sports Medicine', 'Ski injury specialty'] },
        { name: 'St. Anthony Summit Medical Center', rank: 2, type: 'Community Hospital', specialties: ['Emergency', 'Orthopedics'], description: 'Centura Health facility in Frisco serving Summit County.', highlights: ['High-altitude medicine', 'Level III Trauma', 'Resort community'] },
        { name: 'Aspen Valley Hospital', rank: 3, type: 'Community Hospital', specialties: ['Emergency', 'Orthopedics'], description: 'Community hospital serving Aspen and the Roaring Fork Valley.', highlights: ['High-altitude specialty', 'Orthopedic services', 'Resort community'] },
      ],
    },
  ],
};

// ============================================================================
// AGGREGATE DATA & HELPER FUNCTIONS
// ============================================================================

export const STATE_HEALTHCARE_DATA: Record<string, StateHealthcareData> = {
  california: CALIFORNIA_DATA,
  texas: TEXAS_DATA,
  florida: FLORIDA_DATA,
  'new-york': NEW_YORK_DATA,
  arizona: ARIZONA_DATA,
  colorado: COLORADO_DATA,
};

export function getStateHealthcareData(stateSlug: string): StateHealthcareData | undefined {
  return STATE_HEALTHCARE_DATA[stateSlug];
}

export function getStateRegions(stateSlug: string): StateRegion[] {
  const data = STATE_HEALTHCARE_DATA[stateSlug];
  return data?.regions || [];
}

export function hasStateContent(stateSlug: string): boolean {
  return stateSlug in STATE_HEALTHCARE_DATA;
}

// Legacy compatibility - returns first region's health systems as HealthSystem[]
export function getHealthSystemsByState(stateSlug: string): HealthSystem[] {
  const data = STATE_HEALTHCARE_DATA[stateSlug];
  if (!data) return [];
  return data.regions.flatMap(r => r.healthSystems).slice(0, 5);
}

// Legacy compatibility
export function getStateOverview(stateSlug: string) {
  const data = STATE_HEALTHCARE_DATA[stateSlug];
  if (!data) return undefined;
  return {
    stateSlug: data.stateSlug,
    overview: data.overview,
    population: data.population,
    uninsuredRate: data.uninsuredRate,
    avgHealthcareCost: data.avgHealthcareCost,
    majorMetros: data.regions.slice(0, 4).map(r => r.cities[0]),
    healthcareHighlights: data.highlights,
    challenges: data.challenges,
  };
}
