// All 50 US States + DC for Traditional Healthcare directory

export interface State {
  name: string;
  slug: string;
  abbreviation: string;
  population: string;
  tier: 1 | 2 | 3; // Priority tier from business plan
  region: 'northeast' | 'southeast' | 'midwest' | 'southwest' | 'west';
  hasContent: boolean; // Whether we have full content for this state
}

export const STATES: State[] = [
  // Tier 1 - Priority states (large population, high healthcare costs, medical tourism potential)
  { name: 'California', slug: 'california', abbreviation: 'CA', population: '39M', tier: 1, region: 'west', hasContent: true },
  { name: 'Texas', slug: 'texas', abbreviation: 'TX', population: '30M', tier: 1, region: 'southwest', hasContent: true },
  { name: 'Florida', slug: 'florida', abbreviation: 'FL', population: '22M', tier: 1, region: 'southeast', hasContent: true },
  { name: 'New York', slug: 'new-york', abbreviation: 'NY', population: '19M', tier: 1, region: 'northeast', hasContent: true },
  { name: 'Arizona', slug: 'arizona', abbreviation: 'AZ', population: '7M', tier: 1, region: 'southwest', hasContent: true },
  { name: 'Colorado', slug: 'colorado', abbreviation: 'CO', population: '5.8M', tier: 1, region: 'west', hasContent: true },

  // Tier 2 - Expansion states
  { name: 'Pennsylvania', slug: 'pennsylvania', abbreviation: 'PA', population: '13M', tier: 2, region: 'northeast', hasContent: false },
  { name: 'Illinois', slug: 'illinois', abbreviation: 'IL', population: '12.5M', tier: 2, region: 'midwest', hasContent: false },
  { name: 'Ohio', slug: 'ohio', abbreviation: 'OH', population: '11.8M', tier: 2, region: 'midwest', hasContent: false },
  { name: 'Georgia', slug: 'georgia', abbreviation: 'GA', population: '11M', tier: 2, region: 'southeast', hasContent: false },
  { name: 'North Carolina', slug: 'north-carolina', abbreviation: 'NC', population: '10.7M', tier: 2, region: 'southeast', hasContent: false },

  // Tier 3 - Remaining states (alphabetical)
  { name: 'Alabama', slug: 'alabama', abbreviation: 'AL', population: '5.1M', tier: 3, region: 'southeast', hasContent: false },
  { name: 'Alaska', slug: 'alaska', abbreviation: 'AK', population: '733K', tier: 3, region: 'west', hasContent: false },
  { name: 'Arkansas', slug: 'arkansas', abbreviation: 'AR', population: '3M', tier: 3, region: 'southeast', hasContent: false },
  { name: 'Connecticut', slug: 'connecticut', abbreviation: 'CT', population: '3.6M', tier: 3, region: 'northeast', hasContent: false },
  { name: 'Delaware', slug: 'delaware', abbreviation: 'DE', population: '1M', tier: 3, region: 'northeast', hasContent: false },
  { name: 'Hawaii', slug: 'hawaii', abbreviation: 'HI', population: '1.4M', tier: 3, region: 'west', hasContent: false },
  { name: 'Idaho', slug: 'idaho', abbreviation: 'ID', population: '2M', tier: 3, region: 'west', hasContent: false },
  { name: 'Indiana', slug: 'indiana', abbreviation: 'IN', population: '6.9M', tier: 3, region: 'midwest', hasContent: false },
  { name: 'Iowa', slug: 'iowa', abbreviation: 'IA', population: '3.2M', tier: 3, region: 'midwest', hasContent: false },
  { name: 'Kansas', slug: 'kansas', abbreviation: 'KS', population: '2.9M', tier: 3, region: 'midwest', hasContent: false },
  { name: 'Kentucky', slug: 'kentucky', abbreviation: 'KY', population: '4.5M', tier: 3, region: 'southeast', hasContent: false },
  { name: 'Louisiana', slug: 'louisiana', abbreviation: 'LA', population: '4.6M', tier: 3, region: 'southeast', hasContent: false },
  { name: 'Maine', slug: 'maine', abbreviation: 'ME', population: '1.4M', tier: 3, region: 'northeast', hasContent: false },
  { name: 'Maryland', slug: 'maryland', abbreviation: 'MD', population: '6.2M', tier: 3, region: 'northeast', hasContent: false },
  { name: 'Massachusetts', slug: 'massachusetts', abbreviation: 'MA', population: '7M', tier: 3, region: 'northeast', hasContent: false },
  { name: 'Michigan', slug: 'michigan', abbreviation: 'MI', population: '10M', tier: 3, region: 'midwest', hasContent: false },
  { name: 'Minnesota', slug: 'minnesota', abbreviation: 'MN', population: '5.7M', tier: 3, region: 'midwest', hasContent: false },
  { name: 'Mississippi', slug: 'mississippi', abbreviation: 'MS', population: '2.9M', tier: 3, region: 'southeast', hasContent: false },
  { name: 'Missouri', slug: 'missouri', abbreviation: 'MO', population: '6.2M', tier: 3, region: 'midwest', hasContent: false },
  { name: 'Montana', slug: 'montana', abbreviation: 'MT', population: '1.1M', tier: 3, region: 'west', hasContent: false },
  { name: 'Nebraska', slug: 'nebraska', abbreviation: 'NE', population: '2M', tier: 3, region: 'midwest', hasContent: false },
  { name: 'Nevada', slug: 'nevada', abbreviation: 'NV', population: '3.2M', tier: 3, region: 'west', hasContent: false },
  { name: 'New Hampshire', slug: 'new-hampshire', abbreviation: 'NH', population: '1.4M', tier: 3, region: 'northeast', hasContent: false },
  { name: 'New Jersey', slug: 'new-jersey', abbreviation: 'NJ', population: '9.3M', tier: 3, region: 'northeast', hasContent: false },
  { name: 'New Mexico', slug: 'new-mexico', abbreviation: 'NM', population: '2.1M', tier: 3, region: 'southwest', hasContent: false },
  { name: 'North Dakota', slug: 'north-dakota', abbreviation: 'ND', population: '780K', tier: 3, region: 'midwest', hasContent: false },
  { name: 'Oklahoma', slug: 'oklahoma', abbreviation: 'OK', population: '4M', tier: 3, region: 'southwest', hasContent: false },
  { name: 'Oregon', slug: 'oregon', abbreviation: 'OR', population: '4.2M', tier: 3, region: 'west', hasContent: false },
  { name: 'Rhode Island', slug: 'rhode-island', abbreviation: 'RI', population: '1.1M', tier: 3, region: 'northeast', hasContent: false },
  { name: 'South Carolina', slug: 'south-carolina', abbreviation: 'SC', population: '5.4M', tier: 3, region: 'southeast', hasContent: false },
  { name: 'South Dakota', slug: 'south-dakota', abbreviation: 'SD', population: '920K', tier: 3, region: 'midwest', hasContent: false },
  { name: 'Tennessee', slug: 'tennessee', abbreviation: 'TN', population: '7M', tier: 3, region: 'southeast', hasContent: false },
  { name: 'Utah', slug: 'utah', abbreviation: 'UT', population: '3.4M', tier: 3, region: 'west', hasContent: false },
  { name: 'Vermont', slug: 'vermont', abbreviation: 'VT', population: '650K', tier: 3, region: 'northeast', hasContent: false },
  { name: 'Virginia', slug: 'virginia', abbreviation: 'VA', population: '8.6M', tier: 3, region: 'southeast', hasContent: false },
  { name: 'Washington', slug: 'washington', abbreviation: 'WA', population: '7.8M', tier: 3, region: 'west', hasContent: false },
  { name: 'West Virginia', slug: 'west-virginia', abbreviation: 'WV', population: '1.8M', tier: 3, region: 'southeast', hasContent: false },
  { name: 'Wisconsin', slug: 'wisconsin', abbreviation: 'WI', population: '5.9M', tier: 3, region: 'midwest', hasContent: false },
  { name: 'Wyoming', slug: 'wyoming', abbreviation: 'WY', population: '580K', tier: 3, region: 'west', hasContent: false },
  { name: 'District of Columbia', slug: 'district-of-columbia', abbreviation: 'DC', population: '670K', tier: 3, region: 'northeast', hasContent: false },
];

// Helper functions
export function getStateBySlug(slug: string): State | undefined {
  return STATES.find((state) => state.slug === slug);
}

export function getStatesByTier(tier: 1 | 2 | 3): State[] {
  return STATES.filter((state) => state.tier === tier);
}

export function getStatesByRegion(region: State['region']): State[] {
  return STATES.filter((state) => state.region === region);
}

export function getAllStateSlugs(): string[] {
  return STATES.map((state) => state.slug);
}

// Sorted alphabetically for browse page
export function getStatesAlphabetical(): State[] {
  return [...STATES].sort((a, b) => a.name.localeCompare(b.name));
}

// Priority states for homepage
export function getPriorityStates(): State[] {
  return STATES.filter((state) => state.tier === 1);
}
