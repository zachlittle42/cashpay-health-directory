import CategoryMiniCard from './CategoryMiniCard';

const categories = [
  {
    icon: '💊',
    name: 'GLP-1 Weight Loss',
    description: 'Semaglutide & tirzepatide programs with real pricing from $199/mo',
    providerCount: 8,
    href: '/glp1',
  },
  {
    icon: '💪',
    name: 'TRT & Hormones',
    description: 'Testosterone replacement therapy clinics and telehealth options',
    providerCount: 6,
    href: '/trt',
  },
  {
    icon: '🔬',
    name: 'At-Home Labs',
    description: 'Blood panels, hormone tests, and metabolic markers shipped to your door',
    providerCount: 5,
    href: '/labs',
  },
  {
    icon: '🧬',
    name: 'Longevity Clinics',
    description: 'NAD+, peptides, stem cells, and anti-aging protocols',
    providerCount: 10,
    href: '/longevity',
  },
  {
    icon: '📊',
    name: 'DEXA & VO2 Max',
    description: 'Body composition scans and cardiorespiratory fitness testing',
    providerCount: 4,
    href: '/dexa',
  },
  {
    icon: '💉',
    name: 'IV Therapy',
    description: 'Vitamin infusions, NAD+ drips, and recovery protocols',
    providerCount: 3,
    href: '/iv',
  },
  {
    icon: '🦷',
    name: 'Dental Abroad',
    description: 'Veneers, implants, and full-mouth restorations at 50-70% savings',
    providerCount: 6,
    href: '/dental',
  },
  {
    icon: '💇',
    name: 'Hair Transplant',
    description: 'FUE procedures in Turkey, Mexico, and South Korea',
    providerCount: 5,
    href: '/hair_transplant',
  },
  {
    icon: '✨',
    name: 'Cosmetic & MedSpa',
    description: 'Plastic surgery, rhinoplasty, and aesthetic procedures abroad',
    providerCount: 4,
    href: '/plastic_surgery',
  },
];

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">
          Explore All Categories
        </h2>
        <p className="mt-3 text-lg text-gray-600">
          Transparent pricing and honest comparisons across 20+ healthcare categories
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <CategoryMiniCard key={cat.href} {...cat} />
        ))}
      </div>
    </section>
  );
}
