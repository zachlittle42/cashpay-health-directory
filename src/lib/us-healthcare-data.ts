// US Healthcare Data - State Regions and Health Systems
// Last Updated: December 2024
// Sources: US News & World Report Best Hospitals 2024-2025, state health department data

export interface Region {
  name: string;
  cities: string;
  population?: string;
}

export interface HealthSystem {
  name: string;
  rank?: string;
}

export interface StateData {
  name: string;
  abbreviation: string;
  slug: string;
  population: string;
  tier: 1 | 2 | 3 | 4;
  regions: Region[];
  healthSystems?: { [regionName: string]: HealthSystem[] };
}

export const US_STATES_DATA: StateData[] = [
  // ============================================
  // TIER 1 STATES (Population 19M+)
  // ============================================
  {
    name: 'California',
    abbreviation: 'CA',
    slug: 'california',
    population: '39M',
    tier: 1,
    regions: [
      { name: 'Bay Area - San Francisco', cities: 'San Francisco, Oakland, Berkeley', population: '~4.7M' },
      { name: 'Bay Area - South Bay/Peninsula', cities: 'San Jose, Palo Alto, Mountain View', population: '~3M' },
      { name: 'Sacramento Valley', cities: 'Sacramento, Stockton, Modesto', population: '~3.5M' },
      { name: 'Los Angeles Metro', cities: 'Los Angeles, Pasadena, Long Beach', population: '~10M' },
      { name: 'Orange County', cities: 'Irvine, Anaheim, Newport Beach', population: '~3.2M' },
      { name: 'San Diego', cities: 'San Diego, Chula Vista', population: '~3.3M' },
      { name: 'Inland Empire', cities: 'Riverside, San Bernardino, Ontario', population: '~4.6M' },
      { name: 'Central Valley / San Joaquin', cities: 'Fresno, Bakersfield, Visalia', population: '~4M' },
      { name: 'Central Coast', cities: 'Santa Barbara, San Luis Obispo, Monterey', population: '~1.5M' },
      { name: 'Far North / Superior California', cities: 'Redding, Chico, Eureka', population: '~600K' },
    ],
    healthSystems: {
      'Bay Area - San Francisco': [
        { name: 'UCSF Health', rank: '#10 nationally' },
        { name: 'Sutter CPMC' },
        { name: 'Kaiser San Francisco' },
        { name: 'Zuckerberg SF General' },
      ],
      'Bay Area - South Bay/Peninsula': [
        { name: 'Stanford Health Care', rank: '#12 nationally' },
        { name: 'El Camino Health' },
        { name: 'Kaiser Santa Clara' },
        { name: 'Good Samaritan' },
      ],
      'Sacramento Valley': [
        { name: 'UC Davis Medical Center', rank: 'Top academic center' },
        { name: 'Sutter Medical Center Sacramento' },
        { name: 'Kaiser Sacramento' },
        { name: 'Dignity Health Mercy General' },
      ],
      'Los Angeles Metro': [
        { name: 'Cedars-Sinai', rank: '#7 nationally' },
        { name: 'UCLA Medical Center', rank: '#4 nationally' },
        { name: 'Keck Medical Center of USC' },
        { name: "Providence Saint John's" },
      ],
      'Orange County': [
        { name: 'Hoag Hospital' },
        { name: 'UCI Medical Center' },
        { name: 'MemorialCare Orange Coast' },
        { name: 'Providence Mission' },
      ],
      'San Diego': [
        { name: 'UC San Diego Health', rank: '#15 nationally' },
        { name: 'Scripps La Jolla' },
        { name: 'Sharp Memorial' },
        { name: 'Kaiser San Diego' },
      ],
      'Inland Empire': [
        { name: 'Loma Linda University Medical Center', rank: 'Top academic center' },
        { name: 'Riverside Community Hospital' },
        { name: 'Kaiser Riverside' },
        { name: 'Arrowhead Regional' },
      ],
      'Central Valley / San Joaquin': [
        { name: 'St. Agnes Medical Center (Fresno)' },
        { name: 'Community Medical Center (Fresno)' },
        { name: 'Adventist Health Bakersfield' },
        { name: 'Kaweah Health (Visalia)' },
      ],
      'Central Coast': [
        { name: 'Santa Barbara Cottage Hospital' },
        { name: 'Community Hospital of Monterey Peninsula' },
        { name: 'Sierra Vista Regional (SLO)' },
        { name: 'Marian Regional (Santa Maria)' },
      ],
      'Far North / Superior California': [
        { name: 'Mercy Medical Center (Redding)', rank: '#1 in region' },
        { name: 'Shasta Regional Medical Center' },
        { name: 'Enloe Medical Center (Chico)' },
        { name: 'Providence St. Joseph (Eureka)' },
      ],
    },
  },
  {
    name: 'Texas',
    abbreviation: 'TX',
    slug: 'texas',
    population: '30.5M',
    tier: 1,
    regions: [
      { name: 'Houston Metro', cities: 'Houston, The Woodlands, Sugar Land, Pasadena', population: '~7.5M' },
      { name: 'DFW - Dallas', cities: 'Dallas, Plano, Richardson, Garland', population: '~4M' },
      { name: 'DFW - Fort Worth', cities: 'Fort Worth, Arlington, Grapevine', population: '~4M' },
      { name: 'Austin / Central Texas', cities: 'Austin, Round Rock, Georgetown, Cedar Park', population: '~2.4M' },
      { name: 'San Antonio Metro', cities: 'San Antonio, New Braunfels, Schertz', population: '~2.7M' },
      { name: 'Heart of Texas', cities: 'Temple, Waco, Killeen, Bryan-College Station', population: '~1M' },
      { name: 'Rio Grande Valley', cities: 'McAllen, Brownsville, Edinburg, Harlingen', population: '~1.4M' },
      { name: 'East Texas', cities: 'Tyler, Longview, Marshall, Texarkana', population: '~1M' },
      { name: 'West Texas / Panhandle', cities: 'El Paso, Lubbock, Amarillo, Midland, Odessa', population: '~2M' },
      { name: 'Coastal Bend', cities: 'Corpus Christi, Rockport, Portland', population: '~500K' },
      { name: 'Southeast Texas', cities: 'Galveston, Beaumont, Port Arthur', population: '~650K' },
    ],
    healthSystems: {
      'Houston Metro': [
        { name: 'Houston Methodist Hospital', rank: '#1 in Texas, #20 nationally (Honor Roll)' },
        { name: 'MD Anderson Cancer Center', rank: '#1 Cancer Hospital in the Nation (10 years)' },
        { name: 'Baylor St. Luke\'s Medical Center', rank: '#4 in Texas' },
        { name: 'Memorial Hermann Hospital', rank: '#5 in Texas' },
        { name: 'TIRR Memorial Hermann', rank: '#2 nationally in Rehabilitation' },
      ],
      'DFW - Dallas': [
        { name: 'UT Southwestern Medical Center', rank: '#2 in Texas, nationally ranked 11 specialties' },
        { name: 'Baylor University Medical Center', rank: '#3 in Texas' },
        { name: 'Texas Health Presbyterian Dallas', rank: '#4 in DFW' },
        { name: 'Medical City Dallas' },
        { name: 'Children\'s Medical Center Dallas', rank: 'Level 1 pediatric trauma' },
      ],
      'DFW - Fort Worth': [
        { name: 'Baylor Scott & White All Saints (Fort Worth)', rank: '#11 in Texas' },
        { name: 'Texas Health Harris Methodist Fort Worth' },
        { name: 'Texas Health Harris Methodist Southwest', rank: '#15 in Texas (tied)' },
        { name: 'Cook Children\'s Medical Center', rank: '#3 pediatric in Texas' },
      ],
      'Austin / Central Texas': [
        { name: 'St. David\'s Medical Center', rank: '#10 in Texas, #1 in Austin' },
        { name: 'Ascension Seton Medical Center Austin', rank: '#15 in Texas (tied)' },
        { name: 'St. David\'s South Austin Medical Center' },
        { name: 'Dell Seton Medical Center', rank: 'UT Health teaching hospital' },
      ],
      'San Antonio Metro': [
        { name: 'Methodist Hospital - San Antonio', rank: '#1 in San Antonio' },
        { name: 'Baptist Medical Center', rank: '#2 in San Antonio' },
        { name: 'Methodist Hospital - Stone Oak' },
        { name: 'University Health System', rank: 'Level 1 trauma, UT Health teaching' },
      ],
      'Heart of Texas': [
        { name: 'Baylor Scott & White Medical Center - Temple', rank: '#7 in Texas, #1 nationally (Fortune/PINC AI)' },
        { name: 'Baylor Scott & White McLane Children\'s' },
        { name: 'Baylor Scott & White Hillcrest (Waco)' },
        { name: 'CHI St. Joseph Health (Bryan-College Station)' },
      ],
      'Rio Grande Valley': [
        { name: 'South Texas Health System Edinburg', rank: '#23 in Texas, Best for Equitable Access' },
        { name: 'Rio Grande Regional Hospital (McAllen)', rank: '320 beds, 500+ physicians' },
        { name: 'Doctors Hospital at Renaissance' },
        { name: 'Valley Baptist Medical Center - Brownsville' },
      ],
      'East Texas': [
        { name: 'CHRISTUS Mother Frances Hospital - Tyler', rank: '#15 in Texas (tied), A safety rating' },
        { name: 'UT Health East Texas', rank: 'Newsweek Best-In-State 2024' },
        { name: 'CHRISTUS Good Shepherd - Longview', rank: 'A safety rating' },
        { name: 'CHRISTUS Good Shepherd - Marshall' },
      ],
      'West Texas / Panhandle': [
        { name: 'University Medical Center of El Paso', rank: 'Regional trauma center' },
        { name: 'Las Palmas Medical Center (El Paso)' },
        { name: 'University Medical Center - Lubbock', rank: '354 beds, serves West Texas' },
        { name: 'BSA Health System (Amarillo)', rank: 'Serves Panhandle & tri-state' },
        { name: 'Northwest Texas Hospital (Amarillo)', rank: 'Level II Trauma' },
      ],
      'Coastal Bend': [
        { name: 'Corpus Christi Medical Center', rank: 'Best Regional Hospital 2024-25' },
        { name: 'CHRISTUS Spohn Hospital Corpus Christi-South', rank: '100 Best Orthopedic Surgery' },
        { name: 'Driscoll Children\'s Hospital', rank: 'Only freestanding children\'s in South TX' },
      ],
      'Southeast Texas': [
        { name: 'UTMB Galveston', rank: 'Oldest medical school in Texas, UT System' },
        { name: 'CHRISTUS St. Elizabeth Hospital (Beaumont)' },
        { name: 'Baptist Hospitals of Southeast Texas' },
      ],
    },
  },
  {
    name: 'Florida',
    abbreviation: 'FL',
    slug: 'florida',
    population: '22.6M',
    tier: 1,
    regions: [
      { name: 'South Florida / Miami Metro', cities: 'Miami, Fort Lauderdale, West Palm Beach, Boca Raton', population: '~6.1M' },
      { name: 'Tampa Bay Area', cities: 'Tampa, St. Petersburg, Clearwater, Brandon', population: '~3.0M' },
      { name: 'Orlando / Central Florida', cities: 'Orlando, Kissimmee, Sanford, Winter Park', population: '~2.4M' },
      { name: 'Jacksonville / Northeast Florida', cities: 'Jacksonville, St. Augustine, Orange Park', population: '~1.5M' },
      { name: 'North Central Florida', cities: 'Gainesville, Ocala, The Villages', population: '~600K' },
      { name: 'Southwest Florida', cities: 'Sarasota, Fort Myers, Naples, Cape Coral', population: '~1.8M' },
      { name: 'Space Coast', cities: 'Melbourne, Palm Bay, Titusville, Cocoa Beach', population: '~620K' },
      { name: 'Treasure Coast', cities: 'Port St. Lucie, Vero Beach, Stuart, Fort Pierce', population: '~800K' },
      { name: 'Northwest Florida / Panhandle', cities: 'Pensacola, Tallahassee, Panama City, Fort Walton Beach', population: '~1.5M' },
    ],
    healthSystems: {
      'South Florida / Miami Metro': [
        { name: 'Cleveland Clinic Weston', rank: '#48 nationally, #6 in Florida' },
        { name: 'Baptist Health Baptist Hospital', rank: '#8 in Florida, #1 in Miami-Fort Lauderdale' },
        { name: 'University of Miami Hospital (UHealth Tower)', rank: '#9 in Florida, nationally ranked 3 specialties' },
        { name: 'Mount Sinai Medical Center', rank: '#10 in Florida' },
        { name: 'Memorial Regional Hospital (Hollywood)', rank: 'Nationally ranked 6 pediatric specialties' },
      ],
      'Tampa Bay Area': [
        { name: 'Tampa General Hospital', rank: '#2 in Florida, #6 nationally for OB/GYN, 8 specialty rankings' },
        { name: 'Morton Plant Hospital (Clearwater)', rank: '#2 in Tampa-St. Petersburg' },
        { name: 'AdventHealth Tampa', rank: '#3 in Tampa-St. Petersburg' },
        { name: 'Moffitt Cancer Center', rank: 'Top cancer center' },
      ],
      'Orlando / Central Florida': [
        { name: 'AdventHealth Orlando', rank: '#1 in Florida (2025), Honor Roll, 11 adult + 2 pediatric rankings' },
        { name: 'Orlando Health - Orlando Regional Medical Center', rank: '#5 in Florida' },
        { name: 'Nemours Children\'s Hospital', rank: 'Top pediatric facility' },
        { name: 'Orlando Health Arnold Palmer Hospital for Children' },
      ],
      'Jacksonville / Northeast Florida': [
        { name: 'Mayo Clinic Jacksonville', rank: '#1 in FL (8 of past 9 years), #24 nationally for Cancer, 10 specialty rankings' },
        { name: 'UF Health Jacksonville', rank: 'Level I trauma center' },
        { name: 'Baptist Medical Center Jacksonville', rank: '#11 in Florida' },
        { name: 'Wolfson Children\'s Hospital', rank: 'Top 50 nationally for pediatric cancer' },
      ],
      'North Central Florida': [
        { name: 'UF Health Shands Hospital', rank: '#3 in Florida, nationally ranked 7 specialties' },
        { name: 'UF Health Shands Children\'s Hospital', rank: '#1 nationally Pediatric Behavioral Health, #15 Pediatric Cardiology' },
        { name: 'HCA Florida Ocala Hospital' },
      ],
      'Southwest Florida': [
        { name: 'Sarasota Memorial Hospital', rank: '#9 in Florida' },
        { name: 'Lee Memorial Hospital (Fort Myers)', rank: '#12 in Florida' },
        { name: 'NCH Baker Hospital (Naples)', rank: '#16 in Florida' },
        { name: 'Gulf Coast Medical Center (Fort Myers)', rank: '#18 in Florida (tied)' },
      ],
      'Space Coast': [
        { name: 'Holmes Regional Medical Center (Health First)', rank: '#17 in Florida, 8 high-performing specialties' },
        { name: 'Health First Viera Hospital', rank: '5-star CMS rating (1 of 15 in FL)' },
        { name: 'Health First Cape Canaveral Hospital', rank: 'Newsweek World\'s Best Hospitals 4 years' },
        { name: 'Orlando Health Melbourne Hospital' },
      ],
      'Treasure Coast': [
        { name: 'Cleveland Clinic Martin Health-Stuart', rank: '#21 in Florida' },
        { name: 'Cleveland Clinic Tradition Hospital (Port St. Lucie)' },
        { name: 'Cleveland Clinic Indian River Hospital (Vero Beach)', rank: '50 Best Outpatient Prostate Care' },
        { name: 'HCA Florida Lawnwood Hospital (Fort Pierce)', rank: 'Level II Trauma' },
      ],
      'Northwest Florida / Panhandle': [
        { name: 'Ascension Sacred Heart Pensacola', rank: 'Top 25 in FL, Fortune/PINC AI top-15 nationally' },
        { name: 'Ascension Sacred Heart Emerald Coast', rank: 'Newsweek 2025 best-in-state, 5-star CMS' },
        { name: 'Baptist Hospital Pensacola', rank: 'Top 25 in FL, 7 High Performing areas' },
        { name: 'Tallahassee Memorial Healthcare' },
      ],
    },
  },
  {
    name: 'New York',
    abbreviation: 'NY',
    slug: 'new-york',
    population: '19.5M',
    tier: 1,
    regions: [
      { name: 'New York City (Manhattan)', cities: 'Manhattan, Bronx, Staten Island', population: '~4.5M' },
      { name: 'Long Island', cities: 'Hempstead, Brookhaven, Islip, Oyster Bay', population: '~2.9M' },
      { name: 'Hudson Valley', cities: 'White Plains, Poughkeepsie, Middletown', population: '~1.7M' },
      { name: 'Capital District', cities: 'Albany, Schenectady, Troy, Saratoga Springs', population: '~900K' },
      { name: 'Central New York', cities: 'Syracuse, Utica, Rome, Oswego', population: '~700K' },
      { name: 'Finger Lakes', cities: 'Rochester, Canandaigua, Geneva', population: '~750K' },
      { name: 'Western New York', cities: 'Buffalo, Niagara Falls, Cheektowaga', population: '~1.2M' },
      { name: 'North Country / Adirondacks', cities: 'Plattsburgh, Watertown, Saranac Lake', population: '~400K' },
    ],
    healthSystems: {
      'New York City (Manhattan)': [
        { name: 'NYU Langone Hospitals', rank: '#1 nationally Neurology, #2 Cardiology, Honor Roll' },
        { name: 'NewYork-Presbyterian Hospital-Columbia and Cornell', rank: 'Honor Roll, #5 nationally Cardiology' },
        { name: 'Mount Sinai Hospital', rank: 'Honor Roll, #4 nationally Cardiology, 12 adult rankings' },
        { name: 'Memorial Sloan Kettering Cancer Center', rank: '#2 nationally for Cancer' },
        { name: 'Hospital for Special Surgery', rank: '#1 nationally for Orthopedics (15 years), #3 Rheumatology' },
      ],
      'Long Island': [
        { name: 'North Shore University Hospital (Northwell)', rank: 'Honor Roll, #7 nationally Orthopedics' },
        { name: 'Long Island Jewish Medical Center (Northwell)', rank: 'Nationally ranked 9 adult + 8 pediatric specialties' },
        { name: 'Lenox Hill Hospital (Northwell)', rank: '6 specialty rankings, 50 Best Hospitals' },
        { name: 'Huntington Hospital (Northwell)', rank: 'Ranked in 3 specialties' },
      ],
      'Hudson Valley': [
        { name: 'White Plains Hospital', rank: '#17 in NY, Newsweek World\'s Best 3 years, 5-star CMS' },
        { name: 'Northern Westchester Hospital (Northwell)', rank: '#24 in NY, 5-star CMS, 250 Best Hospitals' },
        { name: 'Vassar Brothers Medical Center', rank: '#29 in NY, 50 Best Hospitals 3 years' },
        { name: 'Garnet Health Medical Center-Middletown', rank: '#24 in NY' },
      ],
      'Capital District': [
        { name: 'St. Peter\'s Hospital', rank: '#1 in Albany (11 years), #13 in NY' },
        { name: 'Albany Medical Center', rank: '#2 in Capital Region, #20 in NY, Level 1 Trauma' },
        { name: 'Saratoga Hospital', rank: 'Magnet designation since 2004' },
        { name: 'Ellis Hospital (Schenectady)' },
      ],
      'Central New York': [
        { name: 'St. Joseph\'s Health Hospital', rank: '#1 in Syracuse (10 years), #24 in NY, Best Regional Hospital' },
        { name: 'Upstate University Hospital', rank: '#20 Newsweek, Level 1 Trauma, Burn Center' },
        { name: 'Crouse Hospital (Syracuse)' },
        { name: 'Faxton-St. Luke\'s Healthcare (Utica)' },
      ],
      'Finger Lakes': [
        { name: 'Strong Memorial Hospital (UR Medicine)', rank: '#1 in Rochester, #11 in NY, Level 1 Trauma & Burn' },
        { name: 'Highland Hospital (UR Medicine)', rank: 'Healthgrades surgical excellence' },
        { name: 'Rochester General Hospital' },
        { name: 'F.F. Thompson Hospital (Canandaigua)' },
      ],
      'Western New York': [
        { name: 'Buffalo General Medical Center (Kaleida Health)', rank: 'Largest in region, cardiac/vascular destination' },
        { name: 'Erie County Medical Center', rank: '550 beds, Level 1 Trauma, Gold Beacon Awards' },
        { name: 'Roswell Park Comprehensive Cancer Center', rank: 'Nationally recognized cancer specialty' },
        { name: 'Mercy Hospital of Buffalo (Catholic Health)', rank: 'Coronary Intervention Excellence Award' },
      ],
      'North Country / Adirondacks': [
        { name: 'CVPH (UVM Health Network, Plattsburgh)', rank: 'Largest hospital in region' },
        { name: 'Samaritan Medical Center (Watertown)' },
        { name: 'Adirondack Medical Center (Saranac Lake)' },
        { name: 'Canton-Potsdam Hospital' },
      ],
    },
  },

  // ============================================
  // TIER 2 STATES (Population 10-13M)
  // ============================================
  {
    name: 'Pennsylvania',
    abbreviation: 'PA',
    slug: 'pennsylvania',
    population: '13M',
    tier: 2,
    regions: [
      { name: 'Philadelphia Metro', cities: 'Philadelphia, West Chester, Norristown', population: '~6.2M' },
      { name: 'Pittsburgh Metro', cities: 'Pittsburgh, Greensburg, Monroeville', population: '~2.4M' },
      { name: 'Lehigh Valley', cities: 'Allentown, Bethlehem, Easton', population: '~890K' },
      { name: 'Harrisburg / Central PA', cities: 'Harrisburg, Carlisle, Mechanicsburg', population: '~590K' },
      { name: 'Lancaster-York', cities: 'Lancaster, York, Ephrata', population: '~1.1M' },
      { name: 'Scranton / Wilkes-Barre', cities: 'Scranton, Wilkes-Barre, Hazleton', population: '~574K' },
      { name: 'Erie Region', cities: 'Erie, Meadville', population: '~268K' },
      { name: 'Reading / Berks County', cities: 'Reading, Wyomissing, Pottstown', population: '~435K' },
      { name: 'State College / Central PA', cities: 'State College, Bellefonte, Williamsport', population: '~300K' },
      { name: 'Johnstown-Altoona', cities: 'Johnstown, Altoona, Somerset', population: '~260K' },
    ],
    healthSystems: {
      'Philadelphia Metro': [
        { name: 'Hospital of the University of Pennsylvania', rank: '#13 nationally (Honor Roll)' },
        { name: 'Thomas Jefferson University Hospitals', rank: '#6 nationally in Ophthalmology' },
        { name: "Children's Hospital of Philadelphia", rank: 'Top 5 pediatric nationally' },
        { name: 'Temple University Hospital' },
        { name: 'Main Line Health (Lankenau)' },
      ],
      'Pittsburgh Metro': [
        { name: 'UPMC Presbyterian Shadyside', rank: '#7 in Psychiatry nationally' },
        { name: 'Allegheny General Hospital (AHN)' },
        { name: 'UPMC Mercy', rank: '#14 nationally in Rehabilitation' },
        { name: 'UPMC Magee-Womens Hospital' },
      ],
      'Lehigh Valley': [
        { name: "St. Luke's University Hospital", rank: '#9 in Pennsylvania' },
        { name: 'Lehigh Valley Health Network', rank: '3rd largest hospital in PA' },
        { name: "St. Luke's Anderson Campus" },
      ],
      'Harrisburg / Central PA': [
        { name: 'Penn State Hershey Medical Center', rank: '#4 in Pennsylvania' },
        { name: 'UPMC Harrisburg', rank: '#8 in Pennsylvania' },
        { name: 'WellSpan Good Samaritan Hospital' },
      ],
      'Lancaster-York': [
        { name: 'Penn Medicine Lancaster General', rank: '#28 nationally in Urology' },
        { name: 'WellSpan York Hospital', rank: "America's 100 Best for Cardiac" },
        { name: 'WellSpan Ephrata Community Hospital' },
      ],
      'Scranton / Wilkes-Barre': [
        { name: 'Geisinger Wyoming Valley Medical Center', rank: '#16 in Pennsylvania' },
        { name: 'Geisinger Community Medical Center' },
        { name: 'Geisinger Medical Center (Danville)' },
      ],
      'Erie Region': [
        { name: 'UPMC Hamot', rank: '#17 in Pennsylvania' },
        { name: 'Saint Vincent Hospital' },
        { name: 'AHN Forbes Hospital' },
      ],
      'Reading / Berks County': [
        { name: 'Reading Hospital (Tower Health)', rank: "America's 50 Best Hospitals" },
        { name: 'Penn State Health St. Joseph' },
      ],
      'State College / Central PA': [
        { name: 'Mount Nittany Medical Center' },
        { name: 'Geisinger-Lewistown Hospital' },
        { name: 'UPMC Susquehanna' },
      ],
      'Johnstown-Altoona': [
        { name: 'UPMC Altoona' },
        { name: 'Conemaugh Memorial Medical Center' },
        { name: 'UPMC Bedford' },
      ],
    },
  },
  {
    name: 'Illinois',
    abbreviation: 'IL',
    slug: 'illinois',
    population: '12.5M',
    tier: 2,
    regions: [
      { name: 'Chicago - Downtown/Near North', cities: 'Chicago Downtown, River North, Lincoln Park', population: '~1.2M' },
      { name: 'Chicago - North Suburbs', cities: 'Evanston, Skokie, Highland Park, Arlington Heights', population: '~800K' },
      { name: 'Chicago - Western Suburbs', cities: 'Naperville, Aurora, Winfield, Oak Brook', population: '~900K' },
      { name: 'Chicago - South Side/South Suburbs', cities: 'Hyde Park, Oak Lawn, Orland Park', population: '~1.1M' },
      { name: 'Rockford', cities: 'Rockford, Loves Park', population: '~340K' },
      { name: 'Peoria / Central Illinois', cities: 'Peoria, Bloomington, Normal', population: '~400K' },
      { name: 'Springfield / West Central', cities: 'Springfield, Quincy, Jacksonville', population: '~350K' },
      { name: 'Champaign-Urbana', cities: 'Champaign, Urbana, Danville', population: '~280K' },
      { name: 'Metro East (St. Louis)', cities: "Belleville, O'Fallon, Alton, Edwardsville", population: '~400K' },
      { name: 'Southern Illinois', cities: 'Carbondale, Marion, Herrin', population: '~170K' },
    ],
    healthSystems: {
      'Chicago - Downtown/Near North': [
        { name: 'Northwestern Memorial Hospital', rank: '#14 nationally (Honor Roll)' },
        { name: 'Rush University Medical Center', rank: '#15 nationally (Honor Roll)' },
        { name: 'Shirley Ryan AbilityLab', rank: '#1 nationally in Rehabilitation' },
        { name: "Lurie Children's Hospital", rank: 'Top pediatric nationally' },
      ],
      'Chicago - North Suburbs': [
        { name: 'Endeavor Health (NorthShore)', rank: 'Nationally ranked in 3 specialties' },
        { name: 'Advocate Lutheran General Hospital', rank: 'Nationally ranked in 2 specialties' },
        { name: 'Northwestern Medicine Lake Forest', rank: '#8 in Illinois' },
      ],
      'Chicago - Western Suburbs': [
        { name: 'Northwestern Medicine Central DuPage', rank: '#7 in Illinois' },
        { name: 'Loyola University Medical Center', rank: 'Level 1 Trauma, largest burn center' },
        { name: 'Endeavor Health Edward Hospital' },
        { name: 'Rush Copley Medical Center' },
      ],
      'Chicago - South Side/South Suburbs': [
        { name: 'University of Chicago Medical Center', rank: '#3 in Illinois, #11 in ENT, #12 in Cancer' },
        { name: 'Advocate Christ Medical Center', rank: 'Nationally ranked in 6 specialties' },
        { name: 'Advocate Trinity Hospital' },
      ],
      'Rockford': [
        { name: 'OSF Saint Anthony Medical Center', rank: 'Level I trauma center' },
        { name: 'Javon Bea Hospital-Riverside', rank: "America's 250 Best Hospitals" },
        { name: 'SwedishAmerican Hospital' },
      ],
      'Peoria / Central Illinois': [
        { name: 'OSF Saint Francis Medical Center', rank: '#14 in Illinois, Level I trauma' },
        { name: "Children's Hospital of Illinois" },
        { name: 'UnityPoint Health-Proctor' },
      ],
      'Springfield / West Central': [
        { name: "HSHS St. John's Hospital" },
        { name: 'Memorial Medical Center', rank: 'Level II trauma center' },
        { name: 'Blessing Hospital (Quincy)' },
      ],
      'Champaign-Urbana': [
        { name: 'Carle Foundation Hospital', rank: '#11 in Illinois' },
        { name: 'OSF Heart of Mary Medical Center' },
      ],
      'Metro East (St. Louis)': [
        { name: 'Memorial Hospital Belleville (BJC)' },
        { name: 'Memorial Hospital Shiloh (BJC)' },
        { name: 'Alton Memorial Hospital (BJC)' },
        { name: "HSHS St. Elizabeth's Hospital" },
      ],
      'Southern Illinois': [
        { name: 'SIH Memorial Hospital Carbondale', rank: 'Only Level II trauma in southern IL' },
        { name: 'SIH Herrin Hospital' },
        { name: 'SIH Harrisburg Medical Center' },
      ],
    },
  },
  {
    name: 'Ohio',
    abbreviation: 'OH',
    slug: 'ohio',
    population: '11.8M',
    tier: 2,
    regions: [
      { name: 'Greater Cleveland', cities: 'Cleveland, Lakewood, Parma', population: '~2.2M' },
      { name: 'Akron-Canton', cities: 'Akron, Canton, Massillon', population: '~1.1M' },
      { name: 'Greater Columbus', cities: 'Columbus, Dublin, Westerville', population: '~2.2M' },
      { name: 'Greater Cincinnati', cities: 'Cincinnati, Hamilton, Mason', population: '~2.3M' },
      { name: 'Greater Dayton', cities: 'Dayton, Kettering, Beavercreek', population: '~822K' },
      { name: 'Toledo / Northwest Ohio', cities: 'Toledo, Findlay, Bowling Green', population: '~600K' },
      { name: 'Youngstown-Warren', cities: 'Youngstown, Warren, Boardman', population: '~426K' },
      { name: 'Southeast Ohio / Appalachian', cities: 'Athens, Marietta, Zanesville', population: '~400K' },
    ],
    healthSystems: {
      'Greater Cleveland': [
        { name: 'Cleveland Clinic', rank: '#2 globally, #1 in Cardiology 30 years' },
        { name: 'University Hospitals Cleveland Medical Center', rank: '#3 in Ohio' },
        { name: 'MetroHealth Medical Center' },
        { name: "Cleveland Clinic Children's", rank: 'Nationally ranked 10 pediatric specialties' },
      ],
      'Akron-Canton': [
        { name: 'Cleveland Clinic Akron General', rank: '#5 in Ohio (tied)' },
        { name: 'Summa Health System', rank: "America's 50 Best Hospitals, Top 1% nationally" },
        { name: "Akron Children's Hospital", rank: '#20 nationally in Pediatric Orthopedics' },
        { name: 'Aultman Hospital (Canton)' },
      ],
      'Greater Columbus': [
        { name: 'Ohio State Wexner Medical Center', rank: '#2 in Ohio, nationally ranked 8 specialties' },
        { name: 'OhioHealth Riverside Methodist', rank: '#3 in Ohio (tied), 1,059 beds' },
        { name: 'OhioHealth Grant Medical Center' },
        { name: "Nationwide Children's Hospital", rank: 'Top 10 Honor Roll, #1 Midwest pediatric' },
      ],
      'Greater Cincinnati': [
        { name: 'The Christ Hospital', rank: '#1 in Cincinnati 10 years' },
        { name: 'UC Health - University of Cincinnati Medical Center', rank: 'Top global hospital 6 years' },
        { name: "Cincinnati Children's Hospital", rank: 'Top 10 nationally, #1 in GI/Pulmonology' },
        { name: 'Mercy Health - St. Elizabeth' },
      ],
      'Greater Dayton': [
        { name: 'Miami Valley Hospital (Premier Health)', rank: '#9 in Ohio, only Level I trauma' },
        { name: 'Kettering Health Main Campus' },
        { name: 'Kettering Health Dayton', rank: '100 Best for Coronary Intervention' },
        { name: "Dayton Children's Hospital" },
      ],
      'Toledo / Northwest Ohio': [
        { name: 'ProMedica Toledo Hospital', rank: '#1 in Toledo 4 years' },
        { name: 'Mercy Health - St. Vincent', rank: "America's 250 Best Hospitals" },
        { name: 'University of Toledo Medical Center' },
        { name: "Mercy Health - St. Rita's (Lima)" },
      ],
      'Youngstown-Warren': [
        { name: 'Mercy Health - St. Elizabeth Youngstown', rank: '#18 in Ohio, Level 1 Trauma' },
        { name: 'Mercy Health - St. Elizabeth Boardman' },
        { name: 'Mercy Health - St. Joseph Warren' },
      ],
      'Southeast Ohio / Appalachian': [
        { name: "OhioHealth O'Bleness Hospital (Athens)" },
        { name: 'Marietta Memorial Hospital' },
        { name: 'Genesis Healthcare System (Zanesville)', rank: '#17 in Ohio (tied)' },
      ],
    },
  },
  {
    name: 'Georgia',
    abbreviation: 'GA',
    slug: 'georgia',
    population: '11M',
    tier: 2,
    regions: [
      { name: 'Metro Atlanta Central', cities: 'Atlanta Downtown, Midtown, East Point', population: '~1.2M' },
      { name: 'North Atlanta Metro', cities: 'Alpharetta, Johns Creek, Roswell, Sandy Springs', population: '~1.5M' },
      { name: 'Northwest Atlanta Metro', cities: 'Marietta, Kennesaw, Smyrna', population: '~800K' },
      { name: 'South Atlanta Metro', cities: 'Fayetteville, Peachtree City, Newnan', population: '~700K' },
      { name: 'Northeast Georgia', cities: 'Athens, Gainesville, Jefferson', population: '~600K' },
      { name: 'Augusta Metro', cities: 'Augusta, Evans, Martinez', population: '~630K' },
      { name: 'Savannah / Coastal', cities: 'Savannah, Hinesville, Brunswick', population: '~550K' },
      { name: 'Middle Georgia', cities: 'Macon, Warner Robins, Perry', population: '~500K' },
      { name: 'Columbus / West Georgia', cities: 'Columbus, Carrollton, LaGrange', population: '~650K' },
      { name: 'South Georgia', cities: 'Albany, Valdosta, Thomasville', population: '~550K' },
    ],
    healthSystems: {
      'Metro Atlanta Central': [
        { name: 'Emory University Hospital', rank: '#1 in Georgia, nationally ranked 3 specialties' },
        { name: 'Grady Memorial Hospital', rank: '#1 for underserved, 5th largest in US' },
        { name: 'Piedmont Atlanta Hospital', rank: '#2 in Georgia (tied)' },
        { name: "Emory St. Joseph's Hospital", rank: '#2 in Georgia (tied)' },
      ],
      'North Atlanta Metro': [
        { name: 'Northside Hospital Atlanta', rank: '#4 in Georgia' },
        { name: 'Emory Johns Creek Hospital', rank: '#8 in Georgia' },
        { name: 'Northside Hospital Forsyth', rank: '#7 in Georgia' },
        { name: 'WellStar North Fulton Hospital' },
      ],
      'Northwest Atlanta Metro': [
        { name: 'WellStar Kennestone Hospital', rank: '#6 in Georgia, Level 1 Trauma' },
        { name: 'WellStar Cobb Hospital' },
        { name: 'WellStar Windy Hill Hospital' },
      ],
      'South Atlanta Metro': [
        { name: 'Piedmont Fayette Hospital', rank: '#11 in Georgia' },
        { name: 'Piedmont Newnan Hospital' },
        { name: 'Piedmont Henry Hospital' },
      ],
      'Northeast Georgia': [
        { name: 'Northeast Georgia Medical Center', rank: '#5 in Georgia, #9 nationally patient experience' },
        { name: 'Piedmont Athens Regional', rank: '#12 in Georgia, Top 5% safety' },
        { name: 'NGMC Braselton' },
      ],
      'Augusta Metro': [
        { name: 'Wellstar MCG Health Medical Center', rank: 'Only Level 1 Trauma in region' },
        { name: 'Piedmont Augusta Hospital' },
        { name: 'Doctors Hospital of Augusta' },
        { name: 'Augusta VA Medical Center' },
      ],
      'Savannah / Coastal': [
        { name: 'Memorial Health University Medical Center', rank: 'Top 5% patient safety' },
        { name: "St. Joseph's Hospital Savannah" },
        { name: 'Southeast Georgia Health System (Brunswick)' },
      ],
      'Middle Georgia': [
        { name: 'Atrium Health Navicent (Macon)', rank: '#12 in Georgia, 2nd largest in state' },
        { name: 'Piedmont Macon Medical Center', rank: 'Top 5% patient safety' },
        { name: 'Emory Hospital Warner Robins' },
      ],
      'Columbus / West Georgia': [
        { name: 'Piedmont Columbus Regional Midtown', rank: '583 beds, A safety grade' },
        { name: 'Piedmont Columbus Regional Northside' },
        { name: 'Tanner Health System (Carrollton)' },
        { name: 'WellStar West Georgia Medical Center' },
      ],
      'South Georgia': [
        { name: 'SGMC Health (Valdosta)', rank: '2024 Large Hospital of the Year' },
        { name: 'Phoebe Putney Health System (Albany)' },
        { name: 'Archbold Memorial Hospital (Thomasville)' },
      ],
    },
  },
  {
    name: 'North Carolina',
    abbreviation: 'NC',
    slug: 'north-carolina',
    population: '10.8M',
    tier: 2,
    regions: [
      { name: 'Charlotte Metro', cities: 'Charlotte, Gastonia, Concord', population: '~2.8M' },
      { name: 'Research Triangle', cities: 'Raleigh, Durham, Chapel Hill, Cary', population: '~1.8M' },
      { name: 'Piedmont Triad', cities: 'Greensboro, Winston-Salem, High Point', population: '~1.5M' },
      { name: 'Pinehurst / Sandhills', cities: 'Pinehurst, Southern Pines, Aberdeen', population: '~100K' },
      { name: 'Western Mountains', cities: 'Asheville, Hendersonville, Brevard', population: '~500K' },
      { name: 'Coastal Plain East', cities: 'Greenville, Rocky Mount, Wilson', population: '~1M' },
      { name: 'Wilmington / Cape Fear', cities: 'Wilmington, Leland', population: '~300K' },
      { name: 'Fayetteville / Sandhills South', cities: 'Fayetteville, Lumberton', population: '~500K' },
      { name: 'Outer Banks / Albemarle', cities: 'Nags Head, Elizabeth City', population: '~100K' },
    ],
    healthSystems: {
      'Charlotte Metro': [
        { name: 'Atrium Health Carolinas Medical Center', rank: '#3 in NC, ranked 7 pediatric specialties' },
        { name: 'Novant Health Presbyterian', rank: '#7 in NC (tied)' },
        { name: 'Atrium Health Cabarrus', rank: '#10 in NC (tied)' },
        { name: 'CaroMont Regional Medical Center' },
      ],
      'Research Triangle': [
        { name: 'Duke University Hospital', rank: '#1 in NC, Top 20 nationally (Honor Roll)' },
        { name: 'UNC Hospitals', rank: '#2 in NC, #48 nationally' },
        { name: 'UNC Health Rex', rank: '#4 in NC, 5-star CMS' },
        { name: 'WakeMed Health & Hospitals' },
      ],
      'Piedmont Triad': [
        { name: 'Moses H. Cone Memorial Hospital', rank: '#6 in NC (tied)' },
        { name: 'Atrium Health Wake Forest Baptist', rank: '#6 in NC (tied), academic center' },
        { name: 'Novant Health Forsyth Medical Center' },
        { name: 'Cone Health Wesley Long Hospital' },
      ],
      'Pinehurst / Sandhills': [
        { name: 'FirstHealth Moore Regional Hospital', rank: '#5 in NC, 92% patient recommendation' },
        { name: 'FirstHealth Richmond Memorial' },
      ],
      'Western Mountains': [
        { name: 'Mission Hospital (Asheville)', rank: "America's 50 Best Hospitals, only NC hospital" },
        { name: 'UNC Health Pardee', rank: '5-star CMS' },
        { name: 'Mission Hospital McDowell' },
      ],
      'Coastal Plain East': [
        { name: 'ECU Health Medical Center', rank: '#5 in NC, only Level I Trauma east of Raleigh' },
        { name: 'Nash UNC Health Care' },
        { name: 'Wilson Medical Center' },
      ],
      'Wilmington / Cape Fear': [
        { name: 'Novant Health New Hanover Regional', rank: '#4 nationally pediatric care (Vizient)' },
        { name: 'Novant Health Brunswick Medical Center' },
      ],
      'Fayetteville / Sandhills South': [
        { name: 'Cape Fear Valley Medical Center', rank: '#20 in NC, Best for Equitable Access' },
        { name: 'Southeastern Health (Lumberton)' },
      ],
      'Outer Banks / Albemarle': [
        { name: 'Outer Banks Health Hospital', rank: 'Top 100 Critical Access Hospital' },
        { name: 'Sentara Albemarle Medical Center' },
      ],
    },
  },
  {
    name: 'Michigan',
    abbreviation: 'MI',
    slug: 'michigan',
    population: '10M',
    tier: 2,
    regions: [
      { name: 'Detroit Metro', cities: 'Detroit, Dearborn, Warren, Royal Oak', population: '~4.4M' },
      { name: 'Ann Arbor', cities: 'Ann Arbor, Ypsilanti, Saline', population: '~400K' },
      { name: 'Grand Rapids / West Michigan', cities: 'Grand Rapids, Wyoming, Holland', population: '~1.1M' },
      { name: 'Lansing / Mid-Michigan', cities: 'Lansing, East Lansing, Okemos', population: '~500K' },
      { name: 'Flint / Saginaw Bay', cities: 'Flint, Saginaw, Bay City, Midland', population: '~700K' },
      { name: 'Kalamazoo / Southwest Michigan', cities: 'Kalamazoo, Portage, Battle Creek', population: '~500K' },
      { name: 'Traverse City / Northern Michigan', cities: 'Traverse City, Petoskey, Alpena', population: '~500K' },
      { name: 'Upper Peninsula', cities: 'Marquette, Escanaba, Houghton', population: '~300K' },
    ],
    healthSystems: {
      'Detroit Metro': [
        { name: 'Corewell Health Beaumont (Royal Oak)', rank: '#1 in Detroit, nationally ranked 9 specialties' },
        { name: 'Henry Ford Hospital', rank: '#7 in Michigan' },
        { name: 'Detroit Medical Center' },
        { name: 'Ascension St. John Hospital' },
      ],
      'Ann Arbor': [
        { name: 'University of Michigan Health', rank: '#1 in Michigan, #20 nationally (Honor Roll)' },
        { name: 'Trinity Health Ann Arbor', rank: '#5 in MI, #1 Major Teaching Hospital (Fortune)' },
        { name: 'Trinity Health St. Joseph Mercy Chelsea' },
      ],
      'Grand Rapids / West Michigan': [
        { name: 'Corewell Health Grand Rapids', rank: 'Nationally ranked 3 pediatric specialties' },
        { name: "Corewell Health Helen DeVos Children's", rank: '#1 nationally Pediatric Behavioral Health' },
        { name: 'Metro Health-University of Michigan Health' },
      ],
      'Lansing / Mid-Michigan': [
        { name: 'University of Michigan Health-Sparrow' },
        { name: 'McLaren Greater Lansing Hospital', rank: 'Affiliated with Michigan State University' },
        { name: "Sparrow Children's Center" },
      ],
      'Flint / Saginaw Bay': [
        { name: 'McLaren Flint Hospital' },
        { name: 'Ascension Genesys Hospital', rank: 'Pulmonary Care Excellence Award' },
        { name: 'MyMichigan Medical Center Saginaw', rank: 'A Leapfrog safety grade' },
      ],
      'Kalamazoo / Southwest Michigan': [
        { name: 'Bronson Methodist Hospital', rank: 'Nationally ranked Orthopedics & Stroke' },
        { name: 'Beacon Kalamazoo Hospital', rank: "America's 100 Best Hospitals Award" },
        { name: 'Bronson Battle Creek Hospital' },
      ],
      'Traverse City / Northern Michigan': [
        { name: 'Munson Medical Center', rank: '#6 in Michigan, 100 Best for Joint Replacement' },
        { name: 'Corewell Health Traverse City' },
        { name: 'McLaren Northern Michigan (Petoskey)' },
      ],
      'Upper Peninsula': [
        { name: 'UP Health System-Marquette', rank: 'Level II Trauma, only accredited cancer in UP' },
        { name: 'UP Health System-Portage (Hancock)' },
        { name: 'War Memorial Hospital (Sault Ste. Marie)' },
      ],
    },
  },

  // ============================================
  // TIER 3 STATES (Population 5-10M)
  // ============================================
  {
    name: 'Arizona',
    abbreviation: 'AZ',
    slug: 'arizona',
    population: '7.4M',
    tier: 3,
    regions: [
      { name: 'Central Phoenix Metro', cities: 'Phoenix, Paradise Valley', population: '~1.7M' },
      { name: 'East Valley', cities: 'Scottsdale, Tempe, Mesa, Chandler, Gilbert', population: '~1.5M' },
      { name: 'West Valley', cities: 'Glendale, Peoria, Surprise, Sun City', population: '~1.0M' },
      { name: 'Greater Tucson', cities: 'Tucson, Oro Valley, Marana', population: '~1.1M' },
      { name: 'Northern Arizona', cities: 'Flagstaff, Sedona, Cottonwood', population: '~350K' },
      { name: 'Prescott / Yavapai County', cities: 'Prescott, Prescott Valley, Chino Valley', population: '~250K' },
      { name: 'Southwest / Border Region', cities: 'Yuma, San Luis, Sierra Vista', population: '~350K' },
    ],
    healthSystems: {
      'Central Phoenix Metro': [
        { name: 'Mayo Clinic - Arizona', rank: '#1 in Arizona, #20 nationally (Honor Roll)' },
        { name: 'Banner-University Medical Center Phoenix', rank: '#2 in Arizona' },
        { name: "St. Joseph's Hospital and Medical Center", rank: 'Barrow Neuro #49 nationally' },
        { name: "Phoenix Children's Hospital", rank: '#1 nationally Pediatric Behavioral Health' },
      ],
      'East Valley': [
        { name: 'HonorHealth Scottsdale Shea', rank: '#3 in Arizona' },
        { name: 'HonorHealth Scottsdale Thompson Peak', rank: '5-star CMS quality' },
        { name: 'Chandler Regional Medical Center', rank: '#4 in Arizona, A safety grade' },
        { name: 'Banner Desert Medical Center' },
      ],
      'West Valley': [
        { name: 'Banner Del E. Webb Medical Center', rank: '#6 in Arizona (tied)' },
        { name: 'Banner Boswell Medical Center', rank: '#6 in Arizona (tied)' },
        { name: 'Banner Thunderbird Medical Center', rank: 'Level 1 Trauma, 100 Best Hospitals' },
        { name: "St. Joseph's Westgate Medical Center" },
      ],
      'Greater Tucson': [
        { name: 'Banner-University Medical Center Tucson', rank: '#3 in AZ, only Level I Trauma in southern AZ' },
        { name: 'TMC Healthcare-Tucson', rank: '#5 in Arizona' },
        { name: 'Banner-University Medical Center South' },
        { name: 'Northwest Medical Center' },
      ],
      'Northern Arizona': [
        { name: 'NAH Flagstaff Medical Center', rank: 'Level I Trauma, serves 700K+ people' },
        { name: 'NAH Verde Valley Medical Center' },
        { name: 'NAH Cancer Centers' },
      ],
      'Prescott / Yavapai County': [
        { name: 'Yavapai Regional Medical Center - West (Prescott)', rank: '218-bed acute care' },
        { name: 'Yavapai Regional Medical Center - East (Prescott Valley)' },
      ],
      'Southwest / Border Region': [
        { name: 'Onvida Health (formerly Yuma Regional)', rank: '430 beds, 45 clinics' },
        { name: 'Canyon Vista Medical Center (Sierra Vista)', rank: 'Only A safety grade in southern AZ' },
        { name: 'Chiricahua Community Health Centers' },
      ],
    },
  },
  {
    name: 'Colorado',
    abbreviation: 'CO',
    slug: 'colorado',
    population: '5.9M',
    tier: 3,
    regions: [
      { name: 'Downtown Denver / Central Denver', cities: 'Denver Downtown, Capitol Hill', population: '~750K' },
      { name: 'Aurora / East Denver Metro', cities: 'Aurora, Centennial, Greenwood Village', population: '~900K' },
      { name: 'South Denver / Highlands Ranch', cities: 'Highlands Ranch, Littleton, Englewood, Castle Rock', population: '~600K' },
      { name: 'North Denver / Westminster', cities: 'Westminster, Thornton, Broomfield, Brighton', population: '~500K' },
      { name: 'Boulder / Longmont', cities: 'Boulder, Longmont, Louisville', population: '~350K' },
      { name: 'Fort Collins / Northern Colorado', cities: 'Fort Collins, Loveland, Greeley', population: '~550K' },
      { name: 'Colorado Springs', cities: 'Colorado Springs, Fountain, Monument', population: '~700K' },
      { name: 'Pueblo / Southern Colorado', cities: 'Pueblo, Pueblo West, Canon City', population: '~370K' },
      { name: 'Grand Junction / Western Slope', cities: 'Grand Junction, Fruita, Montrose', population: '~160K' },
      { name: 'Mountain Communities', cities: 'Vail, Breckenridge, Aspen, Glenwood Springs', population: '~100K' },
    ],
    healthSystems: {
      'Downtown Denver / Central Denver': [
        { name: 'UCHealth University of Colorado Hospital', rank: '#1 in Colorado, #40 in Cancer nationally' },
        { name: 'Denver Health Medical Center', rank: 'Level I Trauma, top 5% inpatient survival' },
        { name: 'National Jewish Health', rank: '#13 nationally in Pulmonology (28 years)' },
        { name: 'Intermountain Health Saint Joseph', rank: '#2 in Colorado' },
      ],
      'Aurora / East Denver Metro': [
        { name: 'UCHealth University of Colorado Hospital (Anschutz)', rank: '#1 in Colorado' },
        { name: "Children's Hospital Colorado", rank: 'Nationally ranked 11 pediatric specialties' },
        { name: 'HCA HealthONE Aurora', rank: '#1 in CO for neurosciences, 100 Best Hospitals' },
      ],
      'South Denver / Highlands Ranch': [
        { name: 'HCA HealthONE Swedish Medical Center', rank: '#6 in Colorado' },
        { name: 'HCA HealthONE Sky Ridge Medical Center', rank: '100 Best Hospitals' },
        { name: 'Craig Hospital', rank: '#16 nationally in Rehabilitation' },
        { name: 'AdventHealth Littleton', rank: 'Highest patient safety (Leapfrog)' },
      ],
      'North Denver / Westminster': [
        { name: 'CommonSpirit St. Anthony North Hospital' },
        { name: 'AdventHealth Avista', rank: 'Highest patient safety' },
        { name: 'Intermountain Health Platte Valley Hospital', rank: 'A safety grade' },
      ],
      'Boulder / Longmont': [
        { name: 'Boulder Community Health-Foothills', rank: '#12 in Colorado (Newsweek)' },
        { name: 'CommonSpirit Longmont United Hospital' },
        { name: 'Intermountain Health Good Samaritan', rank: 'A safety grade' },
      ],
      'Fort Collins / Northern Colorado': [
        { name: 'UCHealth Medical Center of the Rockies', rank: '#3 in Colorado, only Level I Trauma in north' },
        { name: 'UCHealth Poudre Valley Hospital', rank: 'Level III Trauma, 270 beds' },
        { name: 'UCHealth Greeley Hospital' },
        { name: 'Banner Fort Collins Medical Center' },
      ],
      'Colorado Springs': [
        { name: 'UCHealth Memorial Hospital Central', rank: '#3 in CO (tied), only Level I Trauma in south' },
        { name: 'CommonSpirit Penrose Hospital', rank: '100 Best Coronary Intervention' },
        { name: 'CommonSpirit St. Francis Medical Center', rank: "America's 250 Best Hospitals" },
        { name: "Children's Hospital Colorado-Colorado Springs" },
      ],
      'Pueblo / Southern Colorado': [
        { name: 'UCHealth Parkview Medical Center', rank: 'Level II Trauma, 350 beds' },
        { name: 'UCHealth Parkview Pueblo West Hospital' },
      ],
      'Grand Junction / Western Slope': [
        { name: "Intermountain Health St. Mary's Regional", rank: 'Largest between Denver & Salt Lake, Level II Trauma' },
        { name: 'Montrose Regional Health', rank: 'Only 8-time Top 100 Rural Hospital in CO' },
        { name: 'Delta Health Memorial Hospital' },
      ],
      'Mountain Communities': [
        { name: 'Vail Health Hospital', rank: 'Level III Trauma, 56 beds' },
        { name: 'Shaw Cancer Center (Edwards)' },
        { name: 'Aspen Valley Health', rank: 'Top 100 Critical Access, Mayo Clinic Network' },
        { name: 'CommonSpirit St. Anthony Summit Hospital' },
      ],
    },
  },

  // ============================================
  // TIER 4 STATES (Regions only, no health systems yet)
  // ============================================
  {
    name: 'New Jersey',
    abbreviation: 'NJ',
    slug: 'new-jersey',
    population: '9.2M',
    tier: 4,
    regions: [
      { name: 'North Jersey', cities: 'Newark, Jersey City, Paterson' },
      { name: 'Central Jersey', cities: 'Trenton, New Brunswick, Edison' },
      { name: 'South Jersey', cities: 'Camden, Cherry Hill, Atlantic City' },
      { name: 'Jersey Shore', cities: 'Asbury Park, Long Branch, Toms River' },
    ],
  },
  {
    name: 'Virginia',
    abbreviation: 'VA',
    slug: 'virginia',
    population: '8.6M',
    tier: 4,
    regions: [
      { name: 'Northern Virginia', cities: 'Arlington, Alexandria, Fairfax' },
      { name: 'Hampton Roads', cities: 'Virginia Beach, Norfolk, Newport News' },
      { name: 'Richmond Metro', cities: 'Richmond, Henrico, Chesterfield' },
      { name: 'Shenandoah Valley', cities: 'Charlottesville, Harrisonburg, Winchester' },
      { name: 'Southwest Virginia', cities: 'Roanoke, Blacksburg, Bristol' },
    ],
  },
  {
    name: 'Washington',
    abbreviation: 'WA',
    slug: 'washington',
    population: '8M',
    tier: 4,
    regions: [
      { name: 'Seattle Metro', cities: 'Seattle, Bellevue, Tacoma' },
      { name: 'Puget Sound North', cities: 'Everett, Bellingham' },
      { name: 'Spokane / Eastern WA', cities: 'Spokane, Pullman' },
      { name: 'Tri-Cities', cities: 'Kennewick, Richland, Pasco' },
      { name: 'Olympic Peninsula', cities: 'Olympia, Bremerton' },
    ],
  },
  {
    name: 'Massachusetts',
    abbreviation: 'MA',
    slug: 'massachusetts',
    population: '7M',
    tier: 4,
    regions: [
      { name: 'Greater Boston', cities: 'Boston, Cambridge, Quincy' },
      { name: 'North Shore', cities: 'Salem, Lynn, Peabody' },
      { name: 'South Shore', cities: 'Brockton, Plymouth' },
      { name: 'Central Massachusetts', cities: 'Worcester, Leominster' },
      { name: 'Western Massachusetts', cities: 'Springfield, Northampton' },
      { name: 'Cape Cod', cities: 'Hyannis, Provincetown' },
    ],
  },
  {
    name: 'Tennessee',
    abbreviation: 'TN',
    slug: 'tennessee',
    population: '7.1M',
    tier: 4,
    regions: [
      { name: 'Nashville Metro', cities: 'Nashville, Murfreesboro, Franklin' },
      { name: 'Memphis Metro', cities: 'Memphis, Germantown' },
      { name: 'East Tennessee', cities: 'Knoxville, Chattanooga' },
      { name: 'Tri-Cities', cities: 'Johnson City, Kingsport, Bristol' },
    ],
  },
  {
    name: 'Indiana',
    abbreviation: 'IN',
    slug: 'indiana',
    population: '6.8M',
    tier: 4,
    regions: [
      { name: 'Indianapolis Metro', cities: 'Indianapolis, Carmel, Fishers' },
      { name: 'Northwest Indiana', cities: 'Gary, Hammond, South Bend' },
      { name: 'Fort Wayne', cities: 'Fort Wayne, Auburn' },
      { name: 'Southern Indiana', cities: 'Evansville, Bloomington' },
    ],
  },
  {
    name: 'Missouri',
    abbreviation: 'MO',
    slug: 'missouri',
    population: '6.2M',
    tier: 4,
    regions: [
      { name: 'St. Louis Metro', cities: 'St. Louis, Clayton, Chesterfield' },
      { name: 'Kansas City Metro', cities: 'Kansas City, Independence' },
      { name: 'Central Missouri', cities: 'Columbia, Jefferson City' },
      { name: 'Southwest Missouri', cities: 'Springfield, Joplin' },
    ],
  },
  {
    name: 'Maryland',
    abbreviation: 'MD',
    slug: 'maryland',
    population: '6.2M',
    tier: 4,
    regions: [
      { name: 'Baltimore Metro', cities: 'Baltimore, Towson, Columbia' },
      { name: 'DC Suburbs', cities: 'Bethesda, Rockville, Silver Spring' },
      { name: 'Eastern Shore', cities: 'Salisbury, Easton' },
      { name: 'Western Maryland', cities: 'Frederick, Hagerstown' },
    ],
  },
  {
    name: 'Wisconsin',
    abbreviation: 'WI',
    slug: 'wisconsin',
    population: '5.9M',
    tier: 4,
    regions: [
      { name: 'Milwaukee Metro', cities: 'Milwaukee, Waukesha, Racine' },
      { name: 'Madison', cities: 'Madison, Janesville' },
      { name: 'Fox Valley', cities: 'Green Bay, Appleton, Oshkosh' },
      { name: 'Northern Wisconsin', cities: 'Wausau, Eau Claire, La Crosse' },
    ],
  },
  {
    name: 'Minnesota',
    abbreviation: 'MN',
    slug: 'minnesota',
    population: '5.7M',
    tier: 4,
    regions: [
      { name: 'Twin Cities', cities: 'Minneapolis, St. Paul, Bloomington' },
      { name: 'Rochester', cities: 'Rochester, Austin' },
      { name: 'Central Minnesota', cities: 'St. Cloud, Brainerd' },
      { name: 'Northern Minnesota', cities: 'Duluth, Bemidji' },
    ],
  },
  {
    name: 'South Carolina',
    abbreviation: 'SC',
    slug: 'south-carolina',
    population: '5.4M',
    tier: 4,
    regions: [
      { name: 'Charleston', cities: 'Charleston, North Charleston, Mount Pleasant' },
      { name: 'Columbia', cities: 'Columbia, Lexington' },
      { name: 'Upstate', cities: 'Greenville, Spartanburg' },
      { name: 'Myrtle Beach', cities: 'Myrtle Beach, Conway' },
    ],
  },
  {
    name: 'Alabama',
    abbreviation: 'AL',
    slug: 'alabama',
    population: '5.1M',
    tier: 4,
    regions: [
      { name: 'Birmingham', cities: 'Birmingham, Hoover, Vestavia Hills' },
      { name: 'Mobile', cities: 'Mobile, Daphne' },
      { name: 'Huntsville', cities: 'Huntsville, Decatur' },
      { name: 'Montgomery', cities: 'Montgomery, Prattville' },
    ],
  },
  {
    name: 'Louisiana',
    abbreviation: 'LA',
    slug: 'louisiana',
    population: '4.6M',
    tier: 4,
    regions: [
      { name: 'New Orleans Metro', cities: 'New Orleans, Metairie' },
      { name: 'Baton Rouge', cities: 'Baton Rouge, Gonzales' },
      { name: 'North Louisiana', cities: 'Shreveport, Monroe' },
      { name: 'Acadiana', cities: 'Lafayette, Lake Charles' },
    ],
  },
  {
    name: 'Kentucky',
    abbreviation: 'KY',
    slug: 'kentucky',
    population: '4.5M',
    tier: 4,
    regions: [
      { name: 'Louisville Metro', cities: 'Louisville, Jeffersontown' },
      { name: 'Lexington', cities: 'Lexington, Richmond' },
      { name: 'Northern Kentucky', cities: 'Covington, Florence' },
      { name: 'Eastern Kentucky', cities: 'Ashland, Pikeville' },
    ],
  },
  {
    name: 'Oregon',
    abbreviation: 'OR',
    slug: 'oregon',
    population: '4.2M',
    tier: 4,
    regions: [
      { name: 'Portland Metro', cities: 'Portland, Beaverton, Gresham' },
      { name: 'Willamette Valley', cities: 'Salem, Eugene, Corvallis' },
      { name: 'Southern Oregon', cities: 'Medford, Ashland' },
      { name: 'Central Oregon', cities: 'Bend, Redmond' },
    ],
  },
  {
    name: 'Oklahoma',
    abbreviation: 'OK',
    slug: 'oklahoma',
    population: '4M',
    tier: 4,
    regions: [
      { name: 'Oklahoma City Metro', cities: 'Oklahoma City, Norman, Edmond' },
      { name: 'Tulsa Metro', cities: 'Tulsa, Broken Arrow' },
      { name: 'Southwest Oklahoma', cities: 'Lawton' },
    ],
  },
  {
    name: 'Connecticut',
    abbreviation: 'CT',
    slug: 'connecticut',
    population: '3.6M',
    tier: 4,
    regions: [
      { name: 'Greater Hartford', cities: 'Hartford, West Hartford' },
      { name: 'New Haven', cities: 'New Haven, Milford' },
      { name: 'Fairfield County', cities: 'Stamford, Bridgeport, Norwalk' },
    ],
  },
  {
    name: 'Utah',
    abbreviation: 'UT',
    slug: 'utah',
    population: '3.4M',
    tier: 4,
    regions: [
      { name: 'Salt Lake City', cities: 'Salt Lake City, West Valley City' },
      { name: 'Utah County', cities: 'Provo, Orem' },
      { name: 'Northern Utah', cities: 'Ogden, Logan' },
      { name: 'Southern Utah', cities: 'St. George, Cedar City' },
    ],
  },
  {
    name: 'Iowa',
    abbreviation: 'IA',
    slug: 'iowa',
    population: '3.2M',
    tier: 4,
    regions: [
      { name: 'Des Moines Metro', cities: 'Des Moines, West Des Moines' },
      { name: 'Eastern Iowa', cities: 'Cedar Rapids, Iowa City, Davenport' },
      { name: 'Western Iowa', cities: 'Sioux City, Council Bluffs' },
    ],
  },
  {
    name: 'Nevada',
    abbreviation: 'NV',
    slug: 'nevada',
    population: '3.2M',
    tier: 4,
    regions: [
      { name: 'Las Vegas Metro', cities: 'Las Vegas, Henderson, North Las Vegas' },
      { name: 'Reno-Tahoe', cities: 'Reno, Sparks, Carson City' },
    ],
  },
  {
    name: 'Arkansas',
    abbreviation: 'AR',
    slug: 'arkansas',
    population: '3M',
    tier: 4,
    regions: [
      { name: 'Central Arkansas', cities: 'Little Rock, North Little Rock' },
      { name: 'Northwest Arkansas', cities: 'Fayetteville, Bentonville, Rogers' },
      { name: 'Northeast Arkansas', cities: 'Jonesboro' },
    ],
  },
  {
    name: 'Kansas',
    abbreviation: 'KS',
    slug: 'kansas',
    population: '2.9M',
    tier: 4,
    regions: [
      { name: 'Kansas City Metro', cities: 'Overland Park, Olathe, Kansas City' },
      { name: 'Wichita', cities: 'Wichita, Derby' },
      { name: 'Central Kansas', cities: 'Topeka, Lawrence' },
    ],
  },
  {
    name: 'Mississippi',
    abbreviation: 'MS',
    slug: 'mississippi',
    population: '2.9M',
    tier: 4,
    regions: [
      { name: 'Jackson Metro', cities: 'Jackson, Madison' },
      { name: 'Gulf Coast', cities: 'Gulfport, Biloxi' },
      { name: 'North Mississippi', cities: 'Tupelo, Oxford' },
    ],
  },
  {
    name: 'New Mexico',
    abbreviation: 'NM',
    slug: 'new-mexico',
    population: '2.1M',
    tier: 4,
    regions: [
      { name: 'Albuquerque Metro', cities: 'Albuquerque, Rio Rancho' },
      { name: 'Santa Fe', cities: 'Santa Fe, Los Alamos' },
      { name: 'Southern NM', cities: 'Las Cruces, Roswell' },
    ],
  },
  {
    name: 'Nebraska',
    abbreviation: 'NE',
    slug: 'nebraska',
    population: '2M',
    tier: 4,
    regions: [
      { name: 'Omaha Metro', cities: 'Omaha, Bellevue' },
      { name: 'Lincoln', cities: 'Lincoln' },
      { name: 'Western Nebraska', cities: 'Grand Island, North Platte' },
    ],
  },
  {
    name: 'Idaho',
    abbreviation: 'ID',
    slug: 'idaho',
    population: '2M',
    tier: 4,
    regions: [
      { name: 'Boise Metro', cities: 'Boise, Meridian, Nampa' },
      { name: 'Northern Idaho', cities: 'Coeur d\'Alene, Spokane (WA border)' },
      { name: 'Eastern Idaho', cities: 'Idaho Falls, Pocatello' },
    ],
  },
  {
    name: 'West Virginia',
    abbreviation: 'WV',
    slug: 'west-virginia',
    population: '1.8M',
    tier: 4,
    regions: [
      { name: 'Charleston', cities: 'Charleston, Huntington' },
      { name: 'Northern Panhandle', cities: 'Wheeling, Morgantown' },
      { name: 'Eastern Panhandle', cities: 'Martinsburg, Harpers Ferry' },
    ],
  },
  {
    name: 'Hawaii',
    abbreviation: 'HI',
    slug: 'hawaii',
    population: '1.4M',
    tier: 4,
    regions: [
      { name: 'Oahu', cities: 'Honolulu, Pearl City' },
      { name: 'Maui', cities: 'Kahului, Lahaina' },
      { name: 'Big Island', cities: 'Hilo, Kona' },
      { name: 'Kauai', cities: 'Lihue' },
    ],
  },
  {
    name: 'New Hampshire',
    abbreviation: 'NH',
    slug: 'new-hampshire',
    population: '1.4M',
    tier: 4,
    regions: [
      { name: 'Southern NH', cities: 'Manchester, Nashua' },
      { name: 'Seacoast', cities: 'Portsmouth, Dover' },
      { name: 'Lakes Region', cities: 'Laconia, Concord' },
    ],
  },
  {
    name: 'Maine',
    abbreviation: 'ME',
    slug: 'maine',
    population: '1.4M',
    tier: 4,
    regions: [
      { name: 'Southern Maine', cities: 'Portland, South Portland' },
      { name: 'Central Maine', cities: 'Augusta, Lewiston' },
      { name: 'Northern Maine', cities: 'Bangor, Presque Isle' },
    ],
  },
  {
    name: 'Montana',
    abbreviation: 'MT',
    slug: 'montana',
    population: '1.1M',
    tier: 4,
    regions: [
      { name: 'Western Montana', cities: 'Missoula, Kalispell' },
      { name: 'Central Montana', cities: 'Great Falls, Helena' },
      { name: 'Eastern Montana', cities: 'Billings, Bozeman' },
    ],
  },
  {
    name: 'Rhode Island',
    abbreviation: 'RI',
    slug: 'rhode-island',
    population: '1.1M',
    tier: 4,
    regions: [
      { name: 'Providence Metro', cities: 'Providence, Warwick, Cranston' },
      { name: 'South County', cities: 'Newport, Westerly' },
    ],
  },
  {
    name: 'Delaware',
    abbreviation: 'DE',
    slug: 'delaware',
    population: '1M',
    tier: 4,
    regions: [
      { name: 'Northern Delaware', cities: 'Wilmington, Newark' },
      { name: 'Central/Southern Delaware', cities: 'Dover, Rehoboth Beach' },
    ],
  },
  {
    name: 'South Dakota',
    abbreviation: 'SD',
    slug: 'south-dakota',
    population: '900K',
    tier: 4,
    regions: [
      { name: 'Sioux Falls', cities: 'Sioux Falls' },
      { name: 'Black Hills', cities: 'Rapid City, Deadwood' },
    ],
  },
  {
    name: 'North Dakota',
    abbreviation: 'ND',
    slug: 'north-dakota',
    population: '780K',
    tier: 4,
    regions: [
      { name: 'Eastern ND', cities: 'Fargo, Grand Forks' },
      { name: 'Western ND', cities: 'Bismarck, Minot' },
    ],
  },
  {
    name: 'Alaska',
    abbreviation: 'AK',
    slug: 'alaska',
    population: '740K',
    tier: 4,
    regions: [
      { name: 'Anchorage', cities: 'Anchorage' },
      { name: 'Fairbanks', cities: 'Fairbanks' },
      { name: 'Juneau', cities: 'Juneau, Sitka' },
    ],
  },
  {
    name: 'Vermont',
    abbreviation: 'VT',
    slug: 'vermont',
    population: '650K',
    tier: 4,
    regions: [
      { name: 'Burlington', cities: 'Burlington, South Burlington' },
      { name: 'Central Vermont', cities: 'Montpelier, Barre' },
    ],
  },
  {
    name: 'Wyoming',
    abbreviation: 'WY',
    slug: 'wyoming',
    population: '580K',
    tier: 4,
    regions: [
      { name: 'Cheyenne', cities: 'Cheyenne, Laramie' },
      { name: 'Casper', cities: 'Casper, Gillette' },
      { name: 'Jackson Hole', cities: 'Jackson' },
    ],
  },
];

// Helper functions
export function getStateBySlug(slug: string): StateData | undefined {
  return US_STATES_DATA.find(s => s.slug === slug);
}

export function getAllStateSlugs(): string[] {
  return US_STATES_DATA.map(s => s.slug);
}

export function getStatesByTier(tier: 1 | 2 | 3 | 4): StateData[] {
  return US_STATES_DATA.filter(s => s.tier === tier);
}

export function getStatesWithHealthSystems(): StateData[] {
  return US_STATES_DATA.filter(s => s.healthSystems && Object.keys(s.healthSystems).length > 0);
}

export function getTotalRegions(): number {
  return US_STATES_DATA.reduce((acc, state) => acc + state.regions.length, 0);
}
