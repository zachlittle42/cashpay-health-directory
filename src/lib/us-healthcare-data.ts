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
  regions: Region[];
  healthSystems?: { [regionName: string]: HealthSystem[] };
}

export const US_STATES_DATA: StateData[] = [
  {
    name: 'California',
    abbreviation: 'CA',
    slug: 'california',
    population: '39M',
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
    regions: [
      { name: 'DFW Metroplex', cities: 'Dallas, Fort Worth, Arlington, Plano', population: '~7.5M' },
      { name: 'Houston Metro/Gulf Coast', cities: 'Houston, Galveston', population: '~7M' },
      { name: 'Austin/Central Texas', cities: 'Austin, San Marcos', population: '~2.3M' },
      { name: 'San Antonio/South Central', cities: 'San Antonio', population: '~2.5M' },
      { name: 'Rio Grande Valley', cities: 'McAllen, Brownsville, Laredo' },
      { name: 'West Texas', cities: 'El Paso, Midland, Odessa' },
      { name: 'Texas Panhandle', cities: 'Amarillo, Lubbock' },
      { name: 'East Texas', cities: 'Tyler, Longview' },
    ],
  },
  {
    name: 'Florida',
    abbreviation: 'FL',
    slug: 'florida',
    population: '22.6M',
    regions: [
      { name: 'South Florida/Miami Metro', cities: 'Miami, Fort Lauderdale, West Palm Beach' },
      { name: 'Central Florida/Orlando', cities: 'Orlando, Kissimmee, Lakeland' },
      { name: 'Tampa Bay Area', cities: 'Tampa, St. Petersburg, Clearwater' },
      { name: 'Northeast Florida', cities: 'Jacksonville' },
      { name: 'Northwest Florida/Panhandle', cities: 'Tallahassee, Pensacola, Panama City' },
      { name: 'Southwest Florida', cities: 'Naples, Fort Myers, Sarasota' },
      { name: 'Florida Keys', cities: 'Key West, Key Largo' },
      { name: 'Treasure Coast', cities: 'Port St. Lucie, Vero Beach' },
      { name: 'Space Coast', cities: 'Cape Canaveral, Melbourne' },
    ],
  },
  {
    name: 'New York',
    abbreviation: 'NY',
    slug: 'new-york',
    population: '19.5M',
    regions: [
      { name: 'New York City/Metro NYC', cities: 'NYC, Long Island' },
      { name: 'Hudson Valley', cities: 'Poughkeepsie, White Plains, Yonkers' },
      { name: 'Capital District', cities: 'Albany, Schenectady, Saratoga Springs' },
      { name: 'Finger Lakes', cities: 'Rochester, Syracuse, Ithaca' },
      { name: 'Western New York', cities: 'Buffalo, Niagara Falls' },
      { name: 'Central New York', cities: 'Utica, Binghamton' },
      { name: 'North Country/Adirondacks', cities: 'Plattsburgh, Lake Placid' },
    ],
  },
  {
    name: 'Arizona',
    abbreviation: 'AZ',
    slug: 'arizona',
    population: '7.4M',
    regions: [
      { name: 'Phoenix Metro/Valley of the Sun', cities: 'Phoenix, Scottsdale, Mesa, Tempe' },
      { name: 'Northern Arizona', cities: 'Flagstaff, Sedona, Grand Canyon' },
      { name: 'Southern Arizona', cities: 'Tucson, Green Valley' },
      { name: 'Central Arizona', cities: 'Prescott, Payson' },
    ],
  },
  // Add remaining 45 states with slug property...
];

export function getStateBySlug(slug: string): StateData | undefined {
  return US_STATES_DATA.find(s => s.slug === slug);
}

export function getAllStateSlugs(): string[] {
  return US_STATES_DATA.map(s => s.slug);
}
