// Stem Cell Clinic Types
// For international stem cell therapy destinations

export type StemCellTreatment =
  | 'msc' // Mesenchymal stem cells
  | 'exosomes'
  | 'prp'
  | 'expanded' // Culture-expanded cells
  | 'umbilical'
  | 'adipose' // Fat-derived
  | 'bone_marrow';

export type StemCellCondition =
  | 'autoimmune'
  | 'orthopedic'
  | 'neurological'
  | 'anti_aging'
  | 'cardiac'
  | 'pulmonary'
  | 'diabetes';

export interface StemCellClinic {
  name: string;
  slug: string;
  city: string;
  country: string;
  countrySlug: string;
  address?: string;
  treatments: StemCellTreatment[];
  conditionsTreated: StemCellCondition[];
  priceRange: string;
  website: string;
  phone?: string;
  description: string;
  highlights: string[];
  bestFor: string;
  accreditations?: string[];
  patientVolume?: string;
  notablePatients?: string;
  includesInPackage?: string[];
  typicalStay: string;
  rating?: number;
  reviewCount?: number;
  reviewSource?: string;
  lastVerified: string;
}

export interface CountryStemCellClinics {
  country: string;
  countrySlug: string;
  flag: string;
  description: string;
  flightTimeFromUS: string;
  regulations: string;
  cities: {
    city: string;
    citySlug: string;
    clinics: StemCellClinic[];
  }[];
}

// Countries with stem cell coverage
export const STEM_CELL_COUNTRIES = [
  {
    name: 'Mexico',
    slug: 'mexico',
    flag: '🇲🇽',
    cities: ['Tijuana', 'Mexico City', 'Cancun', 'Puerto Vallarta', 'Los Cabos']
  },
  {
    name: 'Panama',
    slug: 'panama',
    flag: '🇵🇦',
    cities: ['Panama City']
  },
  {
    name: 'Colombia',
    slug: 'colombia',
    flag: '🇨🇴',
    cities: ['Medellin', 'Bogota']
  },
  {
    name: 'Cayman Islands',
    slug: 'cayman-islands',
    flag: '🇰🇾',
    cities: ['Grand Cayman']
  },
] as const;

export type StemCellCountry = typeof STEM_CELL_COUNTRIES[number]['slug'];
