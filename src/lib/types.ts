// Provider types matching Prisma schema

export type Category =
  // Telehealth (US-based, no travel)
  | 'labs'
  | 'glp1'
  | 'trt'
  // Local (US, you go to them)
  | 'dexa'
  | 'vo2max'
  | 'iv'
  | 'longevity'
  // Can be local OR medical tourism
  | 'dental'
  | 'plastic_surgery'
  | 'hair_transplant'
  | 'bariatric'
  | 'fertility'
  | 'orthopedic'
  | 'cardiac'
  | 'vision'
  // Healthcare Resources
  | 'insurance'
  | 'pharma'
  | 'drug_registry';

export type DeliveryModel =
  | 'telehealth_national'
  | 'telehealth_state_limited'
  | 'in_person_local'
  | 'in_person_destination'
  | 'hybrid';

export type ReferralType = 'affiliate_link' | 'lead_form' | 'direct_link';

export interface Provider {
  slug: string;
  name: string;
  description: string;
  category: Category;

  // Services
  services: string[];

  // Pricing
  pricingDisplay: string;
  pricingNotes?: string;
  pricingComparison?: string;
  savingsPercent?: number;

  // Delivery
  deliveryModel: DeliveryModel;
  geographicCoverage: string[];

  // Medical Tourism
  destinationCountry?: string;
  destinationCity?: string;
  typicalTripLength?: string;
  includesInPackage?: string[];
  recoveryNotes?: string;

  // Trust
  accreditations?: string[];
  yearsInBusiness?: number;
  procedureVolume?: string;

  // Links
  url: string;
  referralType: ReferralType;

  // Editorial
  ourTake: string;
  bestFor: string[];
  pros: string[];
  cons: string[];

  // Media
  logoUrl?: string;
  heroImageUrl?: string;

  // Metadata
  featured?: boolean;
  lastVerified: string;
}

export interface Destination {
  slug: string;
  country: string;
  city?: string;
  displayName: string;
  description: string;
  whyGoHere: string;
  considerations: string;
  flightTimeFromUS?: string;
  visaRequired: boolean;
  visaNotes?: string;
  languageNotes?: string;
  currency?: string;
  knownFor: Category[];
  heroImageUrl?: string;
}

// Category metadata for UI
export interface CategoryInfo {
  slug: Category;
  name: string;
  description: string;
  icon: string;
  hasMedicalTourism: boolean;
  hasLocalUS: boolean;
  hasTelehealth: boolean;
  topDestinations?: string[];
  typicalSavings?: string;
}

export const CATEGORIES: Record<Category, CategoryInfo> = {
  // Telehealth only
  labs: {
    slug: 'labs',
    name: 'At-Home Lab Testing',
    description: 'Blood panels, hormone testing, and biomarkers delivered to your door',
    icon: '🧪',
    hasMedicalTourism: false,
    hasLocalUS: false,
    hasTelehealth: true,
  },
  glp1: {
    slug: 'glp1',
    name: 'GLP-1 Programs',
    description: 'Semaglutide, tirzepatide, and weight loss medications',
    icon: '💊',
    hasMedicalTourism: false,
    hasLocalUS: true,
    hasTelehealth: true,
  },
  trt: {
    slug: 'trt',
    name: 'TRT & Hormones',
    description: 'Testosterone replacement and hormone optimization',
    icon: '💪',
    hasMedicalTourism: false,
    hasLocalUS: true,
    hasTelehealth: true,
  },

  // Local US only
  dexa: {
    slug: 'dexa',
    name: 'DEXA Scans',
    description: 'Body composition and bone density testing',
    icon: '📊',
    hasMedicalTourism: false,
    hasLocalUS: true,
    hasTelehealth: false,
  },
  vo2max: {
    slug: 'vo2max',
    name: 'VO2 Max Testing',
    description: 'Metabolic and cardiovascular fitness assessments',
    icon: '🫀',
    hasMedicalTourism: false,
    hasLocalUS: true,
    hasTelehealth: false,
  },
  iv: {
    slug: 'iv',
    name: 'IV Therapy',
    description: 'Vitamin infusions and hydration therapy',
    icon: '💧',
    hasMedicalTourism: false,
    hasLocalUS: true,
    hasTelehealth: false,
  },
  longevity: {
    slug: 'longevity',
    name: 'Longevity Clinics',
    description: 'Comprehensive health optimization and preventive care',
    icon: '⏳',
    hasMedicalTourism: false,
    hasLocalUS: true,
    hasTelehealth: true,
  },

  // Medical tourism categories
  dental: {
    slug: 'dental',
    name: 'Dental',
    description: 'Implants, crowns, veneers, and full-mouth restoration',
    icon: '🦷',
    hasMedicalTourism: true,
    hasLocalUS: true,
    hasTelehealth: false,
    topDestinations: ['Mexico', 'Costa Rica', 'Thailand'],
    typicalSavings: '50-70%',
  },
  hair_transplant: {
    slug: 'hair_transplant',
    name: 'Hair Transplant',
    description: 'FUE and FUT hair restoration procedures',
    icon: '💇',
    hasMedicalTourism: true,
    hasLocalUS: true,
    hasTelehealth: false,
    topDestinations: ['Turkey', 'Mexico'],
    typicalSavings: '50-75%',
  },
  plastic_surgery: {
    slug: 'plastic_surgery',
    name: 'Plastic Surgery',
    description: 'Cosmetic and reconstructive procedures',
    icon: '✨',
    hasMedicalTourism: true,
    hasLocalUS: true,
    hasTelehealth: false,
    topDestinations: ['South Korea', 'Thailand', 'Brazil', 'Turkey'],
    typicalSavings: '40-60%',
  },
  bariatric: {
    slug: 'bariatric',
    name: 'Bariatric Surgery',
    description: 'Gastric sleeve, bypass, and weight loss surgery',
    icon: '⚖️',
    hasMedicalTourism: true,
    hasLocalUS: true,
    hasTelehealth: false,
    topDestinations: ['Mexico', 'Turkey'],
    typicalSavings: '60-80%',
  },
  fertility: {
    slug: 'fertility',
    name: 'Fertility & IVF',
    description: 'IVF, egg freezing, and reproductive services',
    icon: '🍼',
    hasMedicalTourism: true,
    hasLocalUS: true,
    hasTelehealth: false,
    topDestinations: ['Spain', 'Czech Republic', 'Greece'],
    typicalSavings: '40-70%',
  },
  orthopedic: {
    slug: 'orthopedic',
    name: 'Orthopedic Surgery',
    description: 'Knee replacement, hip replacement, and joint surgery',
    icon: '🦴',
    hasMedicalTourism: true,
    hasLocalUS: true,
    hasTelehealth: false,
    topDestinations: ['India', 'Thailand', 'Mexico'],
    typicalSavings: '50-80%',
  },
  cardiac: {
    slug: 'cardiac',
    name: 'Cardiac Procedures',
    description: 'Heart surgery, bypass, and cardiovascular procedures',
    icon: '❤️',
    hasMedicalTourism: true,
    hasLocalUS: true,
    hasTelehealth: false,
    topDestinations: ['India', 'Thailand'],
    typicalSavings: '70-90%',
  },
  vision: {
    slug: 'vision',
    name: 'Vision Surgery',
    description: 'LASIK, cataract surgery, and eye procedures',
    icon: '👁️',
    hasMedicalTourism: true,
    hasLocalUS: true,
    hasTelehealth: false,
    topDestinations: ['Mexico', 'Turkey', 'India'],
    typicalSavings: '50-70%',
  },

  // Healthcare Resources
  insurance: {
    slug: 'insurance',
    name: 'Insurance Companies',
    description: 'Compare health insurance providers, plans, and coverage options',
    icon: '🛡️',
    hasMedicalTourism: false,
    hasLocalUS: true,
    hasTelehealth: true,
  },
  pharma: {
    slug: 'pharma',
    name: 'Pharmaceutical Companies',
    description: 'Major drug manufacturers and patient assistance programs',
    icon: '🏭',
    hasMedicalTourism: false,
    hasLocalUS: true,
    hasTelehealth: false,
  },
  drug_registry: {
    slug: 'drug_registry',
    name: 'Drug Registries',
    description: 'FDA databases, drug lookup tools, and medication information resources',
    icon: '💊',
    hasMedicalTourism: false,
    hasLocalUS: true,
    hasTelehealth: true,
  },
};
