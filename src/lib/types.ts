export type CategorySlug =
  | 'labs'
  | 'glp1'
  | 'trt'
  | 'dexa'
  | 'dental-mexico'
  | 'hair-turkey'
  | 'bariatric-mexico'
  | 'plastic-korea'
  | 'fertility-europe';

export type CategoryType = 'telehealth' | 'medical-tourism';

export interface Category {
  slug: CategorySlug;
  name: string;
  shortName: string;
  description: string;
  type: CategoryType;
  icon: string;
}

export interface BaseProvider {
  slug: string;
  name: string;
  category: CategorySlug;
  description: string;
  pricingDisplay: string;
  pricingComparison: string;
  bestFor: string[];
  pros: string[];
  cons: string[];
  ourTake: string;
  deliveryModel: string;
  featured: boolean;
}

export interface TelehealthProvider extends BaseProvider {
  type: 'telehealth';
}

export interface MedicalTourismProvider extends BaseProvider {
  type: 'medical-tourism';
  destinationCountry: string;
  destinationCity: string;
  typicalTripLength: string;
  includesInPackage: string[];
}

export type Provider = TelehealthProvider | MedicalTourismProvider;

export const CATEGORIES: Category[] = [
  {
    slug: 'labs',
    name: 'At-Home Lab Testing',
    shortName: 'Labs',
    description: 'Comprehensive blood work and biomarker testing from home without a doctor visit',
    type: 'telehealth',
    icon: '🧪',
  },
  {
    slug: 'glp1',
    name: 'GLP-1 Weight Loss',
    shortName: 'GLP-1',
    description: 'Semaglutide and tirzepatide prescriptions for weight management',
    type: 'telehealth',
    icon: '💊',
  },
  {
    slug: 'trt',
    name: 'Testosterone Replacement',
    shortName: 'TRT',
    description: 'Testosterone therapy and hormone optimization for men',
    type: 'telehealth',
    icon: '💪',
  },
  {
    slug: 'dexa',
    name: 'DEXA Body Scans',
    shortName: 'DEXA',
    description: 'Precise body composition and bone density measurement',
    type: 'telehealth',
    icon: '📊',
  },
  {
    slug: 'dental-mexico',
    name: 'Dental Work in Mexico',
    shortName: 'Dental Mexico',
    description: 'High-quality dental implants, crowns, and full-mouth restoration at 50-70% savings',
    type: 'medical-tourism',
    icon: '🦷',
  },
  {
    slug: 'hair-turkey',
    name: 'Hair Transplants in Turkey',
    shortName: 'Hair Turkey',
    description: 'World-renowned hair restoration clinics with all-inclusive packages',
    type: 'medical-tourism',
    icon: '💇',
  },
  {
    slug: 'bariatric-mexico',
    name: 'Bariatric Surgery in Mexico',
    shortName: 'Bariatric Mexico',
    description: 'Gastric sleeve and bypass surgery with experienced surgeons',
    type: 'medical-tourism',
    icon: '⚖️',
  },
  {
    slug: 'plastic-korea',
    name: 'Plastic Surgery in Korea',
    shortName: 'Plastic Korea',
    description: 'Advanced cosmetic procedures in the plastic surgery capital of the world',
    type: 'medical-tourism',
    icon: '✨',
  },
  {
    slug: 'fertility-europe',
    name: 'Fertility Treatment in Europe',
    shortName: 'Fertility Europe',
    description: 'IVF and fertility treatments in top European clinics at lower costs',
    type: 'medical-tourism',
    icon: '👶',
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find(c => c.slug === slug);
}
