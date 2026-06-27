// Canonical site navigation tree — single source for the sidebar + top mega-menu.
// Generated from the 2026-06-26 IA assessment (consumer-goal spine, traffic-weighted).
// RULE: no URL changes; every trafficked page stays prominent. Edit the IA spec, regenerate.

export interface NavItem { label: string; url: string; trafficCritical?: boolean }
export interface NavSubsection { label: string; items: NavItem[] }
export interface NavGroup { id: string; label: string; icon: string; subsections: NavSubsection[] }

export const NAV_GROUPS: NavGroup[] = [
  {
    id: 'test-diagnose', label: 'Test & Diagnose', icon: 'Microscope',
    subsections: [
      { label: 'Body Composition & Performance', items: [
        { label: 'DEXA Scans', url: '/dexa', trafficCritical: true },
        { label: 'DEXA by City', url: '/dexa-scans' },
        { label: 'VO2 Max Testing', url: '/vo2max' },
        { label: 'BodySpec', url: '/providers/bodyspec', trafficCritical: true },
        { label: 'Ro Body', url: '/providers/ro-body', trafficCritical: true },
      ] },
      { label: 'Blood & At-Home Labs', items: [
        { label: 'Lab Testing', url: '/labs', trafficCritical: true },
        { label: 'At-Home Lab Testing Guide', url: '/guides/at-home-lab-testing-guide', trafficCritical: true },
        { label: 'Labs FAQ', url: '/faq/labs' },
      ] },
      { label: 'Glucose & Monitoring', items: [
        { label: 'CGM (Glucose Monitors)', url: '/cgm' },
      ] },
      { label: 'IV & Recovery', items: [
        { label: 'IV Therapy', url: '/iv', trafficCritical: true },
        { label: 'Recovery Tech', url: '/recovery-tech' },
      ] },
    ],
  },
  {
    id: 'lose-weight', label: 'Lose Weight', icon: 'Scale',
    subsections: [
      { label: 'GLP-1 & Weight Meds', items: [
        { label: 'GLP-1 Providers', url: '/glp1', trafficCritical: true },
        { label: 'Weight Loss', url: '/weight-loss' },
      ] },
      { label: 'Weight Surgery', items: [
        { label: 'Bariatric Surgery', url: '/bariatric', trafficCritical: true },
      ] },
      { label: 'Weight FAQ', items: [
        { label: 'GLP-1 FAQ', url: '/faq/glp1' },
      ] },
    ],
  },
  {
    id: 'balance-hormones', label: 'Balance Hormones', icon: 'Dna',
    subsections: [
      { label: 'TRT (Men)', items: [
        { label: 'TRT Clinics', url: '/trt' },
        { label: 'Men\'s Health', url: '/mens-health' },
      ] },
      { label: 'HRT / Menopause (Women)', items: [
        { label: 'Women\'s Health', url: '/womens-health' },
      ] },
      { label: 'Hormone Therapy', items: [
        { label: 'Hormone Therapy Hub', url: '/hormone-therapy' },
        { label: 'Peptides', url: '/peptides' },
      ] },
      { label: 'Fertility & Reproduction', items: [
        { label: 'Fertility', url: '/fertility', trafficCritical: true },
      ] },
    ],
  },
  {
    id: 'live-longer', label: 'Live Longer & Perform', icon: 'Zap',
    subsections: [
      { label: 'Longevity Clinics & Rx', items: [
        { label: 'Longevity Clinics', url: '/longevity', trafficCritical: true },
        { label: 'Longevity & Performance', url: '/longevity-performance' },
        { label: 'Longevity Rx', url: '/longevity-rx' },
      ] },
      { label: 'Supplements & NAD', items: [
        { label: 'Supplements', url: '/supplements' },
      ] },
      { label: 'Regenerative / Stem Cells', items: [
        { label: 'Stem Cells', url: '/stem-cells' },
        { label: 'Stem Cells (US)', url: '/stem-cells/usa' },
        { label: 'Stem Cells Mexico', url: '/stem-cells/mexico' },
        { label: 'Stem Cells Panama', url: '/stem-cells/panama', trafficCritical: true },
        { label: 'US vs Mexico Stem Cells', url: '/guides/us-vs-mexico-stem-cells', trafficCritical: true },
      ] },
    ],
  },
  {
    id: 'look-better', label: 'Look Better', icon: 'Sparkles',
    subsections: [
      { label: 'Med Spa & Injectables', items: [
        { label: 'Med Spa', url: '/med-spa' },
      ] },
      { label: 'Skincare (Rx / Derm)', items: [
        { label: 'Skincare', url: '/skincare' },
      ] },
      { label: 'Hair Restoration', items: [
        { label: 'Hair Transplant', url: '/hair_transplant', trafficCritical: true },
        { label: 'Hair Transplant FAQ', url: '/faq/hair-transplant' },
      ] },
      { label: 'Plastic & Cosmetic Surgery', items: [
        { label: 'Plastic Surgery', url: '/plastic_surgery' },
      ] },
      { label: 'Cosmetic Dental', items: [
        { label: 'Dental', url: '/dental' },
      ] },
    ],
  },
  {
    id: 'treat-see-doctor', label: 'Treat & See a Doctor', icon: 'Stethoscope',
    subsections: [
      { label: 'Telehealth & Online Rx', items: [
        { label: 'Telehealth', url: '/telehealth' },
        { label: 'Primary Care', url: '/primary_care' },
      ] },
      { label: 'Mental Health', items: [
        { label: 'Mental Health', url: '/mental-health' },
      ] },
      { label: 'Sleep & Allergy', items: [
        { label: 'Sleep', url: '/sleep' },
        { label: 'Allergy', url: '/allergy' },
      ] },
      { label: 'Specialist Care', items: [
        { label: 'Cardiac', url: '/cardiac' },
        { label: 'Orthopedic', url: '/orthopedic' },
        { label: 'Vision', url: '/vision' },
      ] },
      { label: 'Cash-Pay Surgery', items: [
        { label: 'Surgery', url: '/surgery' },
      ] },
    ],
  },
  {
    id: 'medical-tourism', label: 'Medical Tourism', icon: 'Globe',
    subsections: [
      { label: 'By Destination', items: [
        { label: 'Medical Tourism Hub', url: '/medical-tourism' },
        { label: 'Mexico', url: '/destinations/mexico' },
        { label: 'Turkey', url: '/destinations/turkey', trafficCritical: true },
        { label: 'South Korea', url: '/destinations/south-korea' },
        { label: 'Thailand', url: '/destinations/thailand' },
        { label: 'India', url: '/destinations/india' },
        { label: 'Costa Rica', url: '/destinations/costa-rica' },
        { label: 'Spain', url: '/destinations/spain' },
        { label: 'Czech Republic', url: '/destinations/czech-republic' },
        { label: 'Panama', url: '/destinations/panama' },
        { label: 'Colombia', url: '/destinations/colombia' },
        { label: 'Brazil', url: '/destinations/brazil' },
        { label: 'Hungary', url: '/destinations/hungary' },
        { label: 'Dubai', url: '/destinations/dubai', trafficCritical: true },
        { label: 'Cayman Islands', url: '/destinations/cayman-islands' },
      ] },
      { label: 'By Procedure Abroad', items: [
        { label: 'Hair Transplant Abroad', url: '/hair_transplant', trafficCritical: true },
        { label: 'Dental Abroad', url: '/dental' },
        { label: 'Plastic Surgery Abroad', url: '/plastic_surgery' },
        { label: 'Bariatric Abroad', url: '/bariatric', trafficCritical: true },
        { label: 'Fertility Abroad', url: '/fertility', trafficCritical: true },
        { label: 'Stem Cells Mexico', url: '/stem-cells/mexico' },
        { label: 'Stem Cells Panama', url: '/stem-cells/panama', trafficCritical: true },
      ] },
      { label: 'Plan & Compare', items: [
        { label: 'US vs Mexico Stem Cells', url: '/guides/us-vs-mexico-stem-cells', trafficCritical: true },
        { label: 'Medical Tourism FAQ', url: '/faq/medical-tourism' },
      ] },
    ],
  },
  {
    id: 'care-by-state', label: 'Care by State (US)', icon: 'Building2',
    subsections: [
      { label: 'By State', items: [
        { label: 'Traditional Healthcare', url: '/traditional-healthcare', trafficCritical: true },
      ] },
      { label: 'Hospitals & Health Systems', items: [
        { label: 'Johns Hopkins Hospital', url: '/health-systems/johns-hopkins-hospital', trafficCritical: true },
      ] },
      { label: 'Local Clinics', items: [
        { label: 'Local Clinics', url: '/local-clinics' },
      ] },
    ],
  },
  {
    id: 'resources', label: 'Resources', icon: 'BookOpen',
    subsections: [
      { label: 'Reference Data', items: [
        { label: 'Insurance', url: '/insurance' },
        { label: 'Pharma Companies', url: '/pharma' },
        { label: 'Drug Registry', url: '/drug_registry' },
      ] },
      { label: 'Library & Help', items: [
        { label: 'Guides (All)', url: '/guides' },
        { label: 'FAQ', url: '/faq' },
        { label: 'Search', url: '/search' },
      ] },
    ],
  },
];

// Lucide icon name per group id (resolved in the nav components).
export const GROUP_ICON: Record<string, string> = {"test-diagnose": "Microscope", "lose-weight": "Scale", "balance-hormones": "Dna", "live-longer": "Zap", "look-better": "Sparkles", "treat-see-doctor": "Stethoscope", "medical-tourism": "Globe", "care-by-state": "Building2", "resources": "BookOpen"};
