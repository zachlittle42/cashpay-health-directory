import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'New York Longevity Clinics: NYC, Princeton NJ | VitalityScout',
  description: 'Find longevity clinics in New York. Fountain Life NYC, Eleven Eleven Wellness, Princeton Longevity Center. Stem cells, NAD+, executive health.',
};

const clinics = [
  // NYC
  {
    name: 'Fountain Life NYC',
    location: 'Manhattan',
    region: 'NYC',
    priceRange: '$2,995 - $21,500/year',
    focus: ['AI-enhanced MRI', 'GRAIL cancer screening', 'Comprehensive diagnostics'],
    description: 'Fountain Life\'s New York location bringing their comprehensive diagnostic approach to the East Coast. Full suite of advanced imaging and genomic testing.',
    notable: 'Tony Robbins & Peter Diamandis',
    tier: 'premium',
  },
  {
    name: 'Eleven Eleven Wellness',
    location: 'Flatiron District, Manhattan',
    region: 'NYC',
    priceRange: 'Concierge pricing',
    focus: ['Integrative medicine', 'Functional health', 'Mind-body wellness'],
    description: 'Founded by Dr. Frank Lipman in 1991, one of NYC\'s original integrative medicine pioneers. Combines functional medicine with longevity approaches.',
    notable: 'Since 1991, Dr. Frank Lipman',
    tier: 'premium',
  },
  {
    name: 'Parsley Health NYC',
    location: 'Multiple Manhattan locations',
    region: 'NYC',
    priceRange: '$175/month membership',
    focus: ['Functional medicine', 'Holistic care', 'Root cause treatment'],
    description: 'Functional medicine practice with focus on root cause treatment. Membership model includes health coaching and comprehensive care.',
    notable: 'Membership model, holistic focus',
    tier: 'accessible',
  },
  {
    name: 'Clean Market',
    location: 'Multiple NYC locations',
    region: 'NYC',
    priceRange: '$50 - $500/session',
    focus: ['IV therapy', 'Cryotherapy', 'Infrared sauna', 'Wellness'],
    description: 'Wellness center offering individual longevity modalities. Drop-in friendly for IV therapy, cryotherapy, and recovery services.',
    notable: 'Walk-in friendly, multiple locations',
    tier: 'accessible',
  },
  // Princeton NJ
  {
    name: 'Princeton Longevity Center',
    location: 'Princeton, NJ',
    region: 'Princeton NJ',
    priceRange: '$5,000 - $15,000',
    focus: ['Executive health', 'Preventive cardiology', 'Advanced diagnostics'],
    description: 'Premier executive health center serving the NYC-Philadelphia corridor. Comprehensive physical exams with focus on cardiovascular health.',
    notable: 'Executive health specialty',
    tier: 'premium',
  },
];

const treatments = [
  {
    name: 'Fountain Life APEX Membership',
    priceRange: '$21,500/year',
    availability: 'Fountain Life NYC',
  },
  {
    name: 'NAD+ IV Therapy',
    priceRange: '$500 - $1,500/session',
    availability: 'Clean Market, IV lounges citywide',
  },
  {
    name: 'Functional Medicine Membership',
    priceRange: '$175 - $500/month',
    availability: 'Parsley Health, Eleven Eleven',
  },
  {
    name: 'Full-Body MRI Screening',
    priceRange: '$2,500 - $5,000',
    availability: 'Fountain Life, Prenuvo NYC',
  },
  {
    name: 'Executive Physical',
    priceRange: '$5,000 - $15,000',
    availability: 'Princeton Longevity, major hospital systems',
  },
  {
    name: 'Cryotherapy',
    priceRange: '$50 - $100/session',
    availability: 'Clean Market, CryoEmpire, wellness studios',
  },
];

export default function NewYorkLongevity() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'New York Longevity Clinics',
    description: 'Guide to longevity and anti-aging clinics in New York',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    dateModified: '2024-12-21',
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/longevity" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Longevity Hub
          </Link>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Longevity Clinics in New York
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            From Fountain Life&apos;s Manhattan location to Dr. Frank Lipman&apos;s pioneering
            Eleven Eleven Wellness, New York offers longevity medicine at every tier.
            Plus Princeton Longevity Center serving the NYC-Philadelphia corridor.
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full">NYC (Manhattan)</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full">Princeton, NJ</span>
          </div>
        </div>
      </section>

      {/* Eleven Eleven Spotlight */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🌿</span>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Eleven Eleven Wellness: NYC&apos;s Integrative Pioneer</h2>
              <p className="text-gray-600 mb-4">
                Founded in 1991 by Dr. Frank Lipman, Eleven Eleven Wellness was doing integrative
                and functional medicine before it was mainstream. Their approach combines
                functional health testing, mind-body practices, and cutting-edge longevity
                interventions. Dr. Lipman has written multiple bestselling books on health optimization.
              </p>
              <div className="text-sm text-purple-700">
                30+ years of integrative medicine experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinics by Region */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Longevity Clinics by Region</h2>

        {/* NYC */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            New York City
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {clinics.filter(c => c.region === 'NYC').map((clinic) => (
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

        {/* Princeton NJ */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
            Princeton, NJ (NYC-Philadelphia Corridor)
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {clinics.filter(c => c.region === 'Princeton NJ').map((clinic) => (
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
      </section>

      {/* Treatment Availability */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Longevity Treatments in New York</h2>

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

      {/* NYC Note */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h3 className="font-bold text-blue-900 mb-2">NYC Accessibility Note</h3>
          <p className="text-sm text-blue-800">
            Unlike other markets, NYC has a robust ecosystem of accessible longevity options
            beyond premium clinics. Services like Clean Market, Parsley Health memberships,
            and numerous IV lounges make individual longevity modalities available without
            committing to expensive annual memberships. Great for testing the waters.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Other Regions</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/longevity/california" className="px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-blue-400 text-sm font-medium">
              California Clinics
            </Link>
            <Link href="/longevity/florida" className="px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-blue-400 text-sm font-medium">
              Florida Clinics
            </Link>
            <Link href="/longevity/texas" className="px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-blue-400 text-sm font-medium">
              Texas Clinics
            </Link>
            <Link href="/longevity" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
              Longevity Hub
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
