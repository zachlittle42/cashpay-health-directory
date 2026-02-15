import Link from 'next/link';

const featuredClinics = [
  {
    name: 'CellTex Therapeutics',
    location: 'Houston, TX / Cancun, MX',
    specialty: 'Autologous MSC therapy',
    priceRange: '$15,000–$25,000',
    href: '/longevity',
  },
  {
    name: 'BioXcellerator',
    location: 'Medellin, Colombia',
    specialty: 'Wharton\'s jelly MSCs',
    priceRange: '$6,500–$15,000',
    href: '/longevity',
  },
  {
    name: 'Dream Body Clinic',
    location: 'Puerto Vallarta, MX',
    specialty: 'MSC & exosome therapy',
    priceRange: '$3,500–$12,000',
    href: '/longevity',
  },
  {
    name: 'Stem Cell Institute',
    location: 'Panama City, Panama',
    specialty: 'Umbilical cord MSCs',
    priceRange: '$8,000–$22,000',
    href: '/longevity',
  },
];

const stemCellGuides = [
  {
    title: 'Stem Cells in Mexico: What to Know',
    description: 'Clinics, costs from $3,500, and safety considerations',
    href: '/guides/mexico-stem-cell-guide',
    emoji: '🇲🇽',
  },
  {
    title: 'US vs Mexico Stem Cells',
    description: 'Regulatory differences, pricing, and treatment access',
    href: '/guides/us-vs-mexico-stem-cells',
    emoji: '⚖️',
  },
  {
    title: 'Panama Stem Cell Guide',
    description: 'Stem Cell Institute, protocols, and patient logistics',
    href: '/guides/panama-stem-cell-guide',
    emoji: '🇵🇦',
  },
];

export default function CategorySpotlight() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 mb-4">
            🧬 Featured Category
          </span>
          <h2 className="text-3xl font-bold text-gray-900">
            Stem Cell & Regenerative Medicine
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            The fastest-growing segment in medical tourism. Compare clinics, understand treatments,
            and get personalized guidance.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Column 1: Compare Clinics */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-sm">🏥</span>
              Compare Clinics
            </h3>
            <div className="space-y-3">
              {featuredClinics.map((clinic) => (
                <Link
                  key={clinic.name}
                  href={clinic.href}
                  className="group block rounded-lg border border-gray-200 bg-white p-4 hover:border-blue-400 hover:shadow-sm transition-all"
                >
                  <div className="font-medium text-gray-900 group-hover:text-blue-600">
                    {clinic.name}
                  </div>
                  <div className="mt-1 text-sm text-gray-500">{clinic.location}</div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs text-gray-500">{clinic.specialty}</span>
                    <span className="text-sm font-medium text-green-600">{clinic.priceRange}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Learn First */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-sm">📚</span>
              Learn First
            </h3>
            <div className="space-y-3">
              {stemCellGuides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group block rounded-lg border border-gray-200 bg-white p-4 hover:border-emerald-400 hover:shadow-sm transition-all"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{guide.emoji}</span>
                    <div>
                      <div className="font-medium text-gray-900 group-hover:text-emerald-600">
                        {guide.title}
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{guide.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              href="/guides"
              className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              View all guides →
            </Link>
          </div>

          {/* Column 3: Get Recommendations (placeholder for InlineInquiryForm) */}
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-100 text-sm">💬</span>
              Get Recommendations
            </h3>
            <div id="stem-cell-inquiry" />
          </div>
        </div>

        {/* Regulatory Disclaimer */}
        <div className="mt-10 rounded-lg border border-amber-200 bg-amber-50 px-6 py-4">
          <p className="text-sm text-amber-800">
            <strong>Regulatory Notice:</strong> Stem cell therapies vary in regulatory status by country.
            Many treatments offered internationally are not FDA-approved in the United States.
            VitalityScout provides educational information only and does not endorse specific treatments or clinics.
            Always consult your physician before pursuing any medical treatment.
          </p>
        </div>
      </div>
    </section>
  );
}
