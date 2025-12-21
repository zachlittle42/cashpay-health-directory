// Health Systems data for Traditional Healthcare directory

export interface HealthSystem {
  id: string;
  name: string;
  state: string; // state slug
  rank?: number; // US News ranking within state
  nationalRank?: number; // US News national ranking
  type: 'academic-medical-center' | 'health-system' | 'specialty-hospital' | 'community-hospital';
  specialties: string[];
  locations: number;
  beds?: number;
  website: string;
  description: string;
  highlights: string[];
  awards?: string[];
}

export interface StateHealthcareOverview {
  stateSlug: string;
  overview: string;
  population: string;
  uninsuredRate: string;
  avgHealthcareCost: string; // relative to national average
  majorMetros: string[];
  healthcareHighlights: string[];
  challenges: string[];
}

// California Health Systems - Full content
export const CALIFORNIA_HEALTH_SYSTEMS: HealthSystem[] = [
  {
    id: 'ucla-health',
    name: 'UCLA Health',
    state: 'california',
    rank: 1,
    nationalRank: 4,
    type: 'academic-medical-center',
    specialties: ['Cancer', 'Cardiology', 'Neurology', 'Orthopedics', 'Urology', 'Geriatrics'],
    locations: 4,
    beds: 786,
    website: 'https://www.uclahealth.org',
    description: 'UCLA Health is one of the most comprehensive academic health systems in the nation, combining cutting-edge research with exceptional patient care. Ronald Reagan UCLA Medical Center consistently ranks among the top hospitals in the United States.',
    highlights: [
      '#4 in US News Best Hospitals nationally',
      'Leader in transplant surgery and cancer treatment',
      'Home to pioneering research in immunotherapy',
      'Top-ranked in 15 adult specialties',
    ],
    awards: ['US News Honor Roll 2024-25', 'Magnet Recognition for Nursing Excellence'],
  },
  {
    id: 'cedars-sinai',
    name: 'Cedars-Sinai Medical Center',
    state: 'california',
    rank: 2,
    nationalRank: 7,
    type: 'academic-medical-center',
    specialties: ['Cardiology', 'Gastroenterology', 'Neurology', 'Orthopedics', 'Cancer'],
    locations: 2,
    beds: 886,
    website: 'https://www.cedars-sinai.org',
    description: 'Cedars-Sinai is a nonprofit academic healthcare organization and one of the largest hospitals in the Western United States. Known for celebrity patients and world-class care, it excels in cardiac care, digestive diseases, and neurosciences.',
    highlights: [
      '#7 in US News Best Hospitals nationally',
      'Largest nonprofit hospital in Western US',
      'Pioneer in heart transplant and cardiac care',
      'Major research institution with 900+ clinical trials',
    ],
    awards: ['US News Honor Roll 2024-25', 'Leapfrog Hospital Safety Grade A'],
  },
  {
    id: 'ucsf-health',
    name: 'UCSF Health',
    state: 'california',
    rank: 3,
    nationalRank: 10,
    type: 'academic-medical-center',
    specialties: ['Cancer', 'Neurology', 'Diabetes', 'Ophthalmology', 'Rheumatology', 'Pulmonology'],
    locations: 3,
    beds: 600,
    website: 'https://www.ucsfhealth.org',
    description: 'UCSF Health is the medical center of the University of California, San Francisco, one of the leading universities in health sciences research. UCSF Medical Center is known for complex cases and innovative treatments.',
    highlights: [
      '#10 in US News Best Hospitals nationally',
      'Top-ranked in Northern California',
      'Leader in cancer research and treatment',
      'Pioneer in robotic surgery and minimally invasive procedures',
    ],
    awards: ['US News Honor Roll 2024-25', 'NCI Designated Comprehensive Cancer Center'],
  },
  {
    id: 'stanford-health-care',
    name: 'Stanford Health Care',
    state: 'california',
    rank: 4,
    nationalRank: 12,
    type: 'academic-medical-center',
    specialties: ['Cancer', 'Cardiology', 'Neurology', 'Orthopedics', 'Transplant'],
    locations: 3,
    beds: 613,
    website: 'https://stanfordhealthcare.org',
    description: 'Stanford Health Care is the flagship hospital of Stanford Medicine, delivering the highest levels of clinical care and pioneering research. Connected to Stanford University, it attracts world-renowned physicians and researchers.',
    highlights: [
      '#12 in US News Best Hospitals nationally',
      'Leader in precision medicine and genomics',
      'Pioneer in adult stem cell transplantation',
      'Cutting-edge technology and innovation hub',
    ],
    awards: ['US News Honor Roll 2024-25', 'Magnet Recognition for Nursing Excellence'],
  },
  {
    id: 'kaiser-permanente-la',
    name: 'Kaiser Permanente Los Angeles Medical Center',
    state: 'california',
    rank: 5,
    type: 'health-system',
    specialties: ['Cardiology', 'Orthopedics', 'Cancer', 'Primary Care'],
    locations: 15,
    beds: 528,
    website: 'https://healthy.kaiserpermanente.org',
    description: 'Kaiser Permanente is the largest integrated healthcare system in California, serving over 8 million members statewide. Known for preventive care, coordinated treatment, and their innovative electronic health records system.',
    highlights: [
      'Largest HMO in California with 8M+ members',
      'Integrated care model with built-in pharmacy and labs',
      'Leader in preventive care and population health',
      'Extensive network across all of California',
    ],
    awards: ['NCQA Excellent Rating', 'JD Power Customer Satisfaction Leader'],
  },
];

// California Healthcare Overview
export const CALIFORNIA_OVERVIEW: StateHealthcareOverview = {
  stateSlug: 'california',
  overview: `California has one of the most advanced healthcare systems in the United States, home to world-renowned academic medical centers and research institutions. The state leads in medical innovation, particularly in cancer treatment, neuroscience, and precision medicine. With a diverse population of nearly 40 million, California offers healthcare options ranging from major urban academic centers to rural community hospitals.`,
  population: '39.5 million',
  uninsuredRate: '6.8%',
  avgHealthcareCost: '15% above national average',
  majorMetros: ['Los Angeles', 'San Francisco Bay Area', 'San Diego', 'Sacramento'],
  healthcareHighlights: [
    'Home to 4 of the top 15 hospitals in the US (US News 2024-25)',
    'Leader in medical research with major NIH funding',
    'Strong Medicaid (Medi-Cal) coverage expansion',
    'Hub for biotech and healthcare innovation',
    'Multiple NCI-designated comprehensive cancer centers',
  ],
  challenges: [
    'High cost of living affects healthcare worker availability',
    'Rural areas face provider shortages',
    'High out-of-pocket costs despite good insurance access',
    'Long wait times at top academic centers',
  ],
};

// Placeholder data for other states - will be populated later
export const STATE_OVERVIEWS: Record<string, StateHealthcareOverview> = {
  california: CALIFORNIA_OVERVIEW,
  // Other states will be added as content is developed
};

export const HEALTH_SYSTEMS_BY_STATE: Record<string, HealthSystem[]> = {
  california: CALIFORNIA_HEALTH_SYSTEMS,
  // Other states will be added as content is developed
};

// Helper functions
export function getHealthSystemsByState(stateSlug: string): HealthSystem[] {
  return HEALTH_SYSTEMS_BY_STATE[stateSlug] || [];
}

export function getStateOverview(stateSlug: string): StateHealthcareOverview | undefined {
  return STATE_OVERVIEWS[stateSlug];
}

export function hasStateContent(stateSlug: string): boolean {
  return stateSlug in STATE_OVERVIEWS && stateSlug in HEALTH_SYSTEMS_BY_STATE;
}
