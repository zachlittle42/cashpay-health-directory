import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Texas Longevity Clinics: Austin, Dallas, Houston | VitalityScout',
  description: 'Find longevity clinics in Texas. Fountain Life Dallas, Humanaut Health Austin. Stem cells, NAD+, peptides, executive health.',
};

const clinics = [
  // Dallas
  {
    name: 'Fountain Life Dallas',
    location: 'Dallas',
    region: 'Dallas',
    priceRange: '$2,995 - $21,500/year',
    focus: ['AI-enhanced MRI', 'GRAIL cancer screening', 'Comprehensive diagnostics'],
    description: 'Fountain Life\'s Texas flagship. 14,000 sq ft facility with full diagnostic suite and concierge care. Tony Robbins & Peter Diamandis-backed.',
    notable: 'Flagship facility, celebrity founders',
    tier: 'premium',
  },
  {
    name: 'Victory Wellness MD',
    location: 'Dallas',
    region: 'Dallas',
    priceRange: '$500 - $5,000',
    focus: ['Anti-aging', 'Regenerative medicine', 'Hormone optimization'],
    description: 'Anti-aging and regenerative medicine focus. Hormone therapy, peptides, and wellness optimization.',
    notable: 'Regenerative focus',
    tier: 'mid',
  },
  // Austin
  {
    name: 'Humanaut Health',
    location: 'Austin',
    region: 'Austin',
    priceRange: '$355 - $3,295/month',
    focus: ['Health optimization', 'Regenerative medicine', 'Lifestyle medicine'],
    description: 'Newest longevity chain with 4,000 sq ft Austin flagship. Franchising model with plans for rapid expansion. Comprehensive health optimization approach.',
    notable: '4,000 sq ft flagship, franchising',
    tier: 'mid',
  },
  {
    name: 'Austin Regenerative Therapy',
    location: 'Austin',
    region: 'Austin',
    priceRange: '$2,000 - $10,000',
    focus: ['Plasma exchange', 'PRP', 'Regenerative medicine'],
    description: 'Specializes in regenerative therapies including plasma exchange and PRP. Research-oriented approach.',
    notable: 'Plasma exchange specialty',
    tier: 'mid',
  },
  {
    name: 'Ways2Well Longevity Lab',
    location: 'Austin',
    region: 'Austin',
    priceRange: '$300 - $3,000',
    focus: ['Functional medicine', 'Hormone optimization', 'Wellness testing'],
    description: 'Functional medicine approach to longevity. Comprehensive testing and personalized protocols.',
    notable: 'Functional medicine focus',
    tier: 'mid',
  },
  // Houston
  {
    name: 'Next Health Houston (Coming 2025)',
    location: 'Houston',
    region: 'Houston',
    priceRange: '$199/month base (projected)',
    focus: ['IV therapy', 'Cryotherapy', 'Wellness technology'],
    description: 'Next Health is expanding to Houston, bringing their accessible longevity model to Texas\'s largest city.',
    notable: 'Coming 2025',
    tier: 'accessible',
  },
];

const treatments = [
  {
    name: 'Fountain Life Precision Diagnostics',
    priceRange: '$11,700 one-time',
    availability: 'Fountain Life Dallas',
  },
  {
    name: 'NAD+ IV Therapy',
    priceRange: '$400 - $1,000/session',
    availability: 'IV lounges in major cities',
  },
  {
    name: 'Peptide Therapy',
    priceRange: '$300 - $800/month',
    availability: 'Humanaut, concierge physicians',
  },
  {
    name: 'Plasma Exchange',
    priceRange: '$3,000 - $8,000',
    availability: 'Austin Regenerative Therapy',
  },
  {
    name: 'Full-Body MRI Screening',
    priceRange: '$2,500 - $5,000',
    availability: 'Fountain Life Dallas, Prenuvo',
  },
  {
    name: 'Hormone Optimization',
    priceRange: '$200 - $500/month',
    availability: 'Multiple clinics statewide',
  },
];

export default function TexasLongevity() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Texas Longevity Clinics',
    description: 'Guide to longevity and anti-aging clinics in Texas',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    dateModified: '2024-12-21',
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-red-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/longevity" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Longevity Hub
          </Link>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Longevity Clinics in Texas
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Texas is home to Fountain Life&apos;s flagship Dallas location and the innovative
            Humanaut Health in Austin. From cutting-edge diagnostics to regenerative therapies,
            find longevity care across the Lone Star State.
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-red-100 text-red-800 px-3 py-1.5 rounded-full">Dallas</span>
            <span className="bg-red-100 text-red-800 px-3 py-1.5 rounded-full">Austin</span>
            <span className="bg-red-100 text-red-800 px-3 py-1.5 rounded-full">Houston (Coming)</span>
          </div>
        </div>
      </section>

      {/* Humanaut Spotlight */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6 border border-green-200">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🌟</span>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Humanaut Health: Austin&apos;s Rising Star</h2>
              <p className="text-gray-600 mb-4">
                The newest entry in the longevity space, Humanaut Health opened a 4,000 sq ft
                flagship in Austin with plans to franchise nationally. Their tiered membership
                model ($355-$3,295/month) aims to make longevity medicine more accessible than
                premium competitors like Fountain Life.
              </p>
              <div className="flex gap-4 text-sm">
                <span className="text-green-700">Base: $355/month</span>
                <span className="text-green-700">Bond (comprehensive): $3,295/month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinics by Region */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Longevity Clinics by Region</h2>

        {/* Dallas */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            Dallas
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {clinics.filter(c => c.region === 'Dallas').map((clinic) => (
              <div key={clinic.name} className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-gray-900">{clinic.name}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    clinic.tier === 'premium' ? 'bg-purple-100 text-purple-800' :
                    clinic.tier === 'accessible' ? 'bg-green-100 text-green-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {clinic.tier === 'premium' ? 'Premium' : clinic.tier === 'accessible' ? 'Accessible' : 'Mid-tier'}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-2">{clinic.location}</p>
                <p className="text-sm text-gray-600 mb-3">{clinic.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {clinic.focus.map((f) => (
                    <span key={f} className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">{f}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                  <span className="text-sm font-semibold text-green-600">{clinic.priceRange}</span>
                  <span className="text-xs text-gray-500">{clinic.notable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Austin */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
            Austin
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {clinics.filter(c => c.region === 'Austin').map((clinic) => (
              <div key={clinic.name} className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-gray-900">{clinic.name}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    clinic.tier === 'premium' ? 'bg-purple-100 text-purple-800' :
                    clinic.tier === 'accessible' ? 'bg-green-100 text-green-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {clinic.tier === 'premium' ? 'Premium' : clinic.tier === 'accessible' ? 'Accessible' : 'Mid-tier'}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-2">{clinic.location}</p>
                <p className="text-sm text-gray-600 mb-3">{clinic.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {clinic.focus.map((f) => (
                    <span key={f} className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">{f}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                  <span className="text-sm font-semibold text-green-600">{clinic.priceRange}</span>
                  <span className="text-xs text-gray-500">{clinic.notable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Houston */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
            Houston (Coming Soon)
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {clinics.filter(c => c.region === 'Houston').map((clinic) => (
              <div key={clinic.name} className="bg-white rounded-lg border border-gray-200 border-dashed p-5 opacity-75">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-gray-900">{clinic.name}</h4>
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                    Coming 2025
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-2">{clinic.location}</p>
                <p className="text-sm text-gray-600 mb-3">{clinic.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {clinic.focus.map((f) => (
                    <span key={f} className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">{f}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                  <span className="text-sm font-semibold text-gray-500">{clinic.priceRange}</span>
                  <span className="text-xs text-gray-500">{clinic.notable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Availability */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Longevity Treatments in Texas</h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {treatments.map((treatment) => (
              <div key={treatment.name} className="bg-white rounded-lg border border-gray-200 p-5">
                <h3 className="font-bold text-gray-900 mb-2">{treatment.name}</h3>
                <p className="text-sm text-green-600 font-semibold mb-2">{treatment.priceRange}</p>
                <p className="text-sm text-gray-600">{treatment.availability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="bg-red-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Other Regions</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/longevity/california" className="px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-red-400 text-sm font-medium">
              California Clinics
            </Link>
            <Link href="/longevity/florida" className="px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-red-400 text-sm font-medium">
              Florida Clinics
            </Link>
            <Link href="/longevity/new-york" className="px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-red-400 text-sm font-medium">
              New York Clinics
            </Link>
            <Link href="/longevity" className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm font-medium">
              Longevity Hub
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
