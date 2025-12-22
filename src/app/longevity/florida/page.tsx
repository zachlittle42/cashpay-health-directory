import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Florida Longevity Clinics: Miami, Naples, Orlando | VitalityScout',
  description: 'Find longevity clinics in Florida. Fountain Life (Naples, Orlando), Miami Design District clinics. Stem cells, NAD+, advanced diagnostics.',
};

const clinics = [
  // Miami
  {
    name: 'Premium Longevity Clinic',
    location: 'Miami Design District',
    region: 'Miami',
    priceRange: 'Concierge pricing',
    focus: ['Stem cells', 'Peptides', 'Anti-aging', 'Executive health'],
    description: 'Boutique longevity clinic in the Design District. Personalized protocols for high-net-worth clients seeking comprehensive anti-aging care.',
    notable: 'Luxury setting, discreet service',
    tier: 'premium',
  },
  {
    name: 'PURE Executive Health',
    location: 'Miami',
    region: 'Miami',
    priceRange: '$5,000 - $15,000',
    focus: ['Diagnostics', 'HRT', 'Genetics', 'Preventive care'],
    description: 'Executive health assessments with genetic testing and personalized longevity roadmaps. Physician-led approach.',
    notable: 'MD-supervised protocols',
    tier: 'premium',
  },
  {
    name: 'Timeless Health (Dr. Dinetz)',
    location: 'Miami',
    region: 'Miami',
    priceRange: '$500 - $5,000',
    focus: ['Integrative medicine', 'Hormone optimization', 'Gut health'],
    description: 'Integrative approach combining functional medicine with longevity interventions. Focus on root cause treatment.',
    notable: 'Integrative focus',
    tier: 'mid',
  },
  // Naples
  {
    name: 'Fountain Life',
    location: 'Naples',
    region: 'Naples',
    priceRange: '$2,995 - $21,500/year',
    focus: ['AI-enhanced MRI', 'GRAIL cancer screening', 'Comprehensive diagnostics'],
    description: 'Peter Diamandis & Tony Robbins-backed longevity chain. State-of-the-art diagnostics with AI interpretation. Full concierge experience.',
    notable: 'Celebrity founders, 14,000 sq ft facility',
    tier: 'premium',
  },
  // Orlando
  {
    name: 'Fountain Life Orlando',
    location: 'Orlando',
    region: 'Orlando',
    priceRange: '$2,995 - $21,500/year',
    focus: ['AI-enhanced MRI', 'GRAIL cancer screening', 'Comprehensive diagnostics'],
    description: 'Orlando location of Fountain Life network. Same premium diagnostics and concierge care as Naples location.',
    notable: 'Newer location, expanding capacity',
    tier: 'premium',
  },
  // Fort Lauderdale
  {
    name: 'Anderson Longevity Clinic',
    location: 'Fort Lauderdale',
    region: 'Fort Lauderdale',
    priceRange: '$300 - $800/month',
    focus: ['HGH peptides', 'Hormone optimization', 'Anti-aging'],
    description: 'Focus on hormone optimization and peptide therapy for anti-aging. Accessible pricing for ongoing care.',
    notable: 'Peptide specialty',
    tier: 'mid',
  },
];

const treatments = [
  {
    name: 'Fountain Life APEX Membership',
    priceRange: '$21,500/year',
    availability: 'Naples, Orlando Fountain Life locations',
  },
  {
    name: 'NAD+ IV Therapy',
    priceRange: '$400 - $1,200/session',
    availability: 'IV lounges throughout South Florida',
  },
  {
    name: 'Peptide Therapy',
    priceRange: '$300 - $800/month',
    availability: 'Anderson Longevity, concierge MDs',
  },
  {
    name: 'Full-Body MRI Screening',
    priceRange: '$2,500 - $5,000',
    availability: 'Fountain Life, Prenuvo Miami',
  },
  {
    name: 'GRAIL Cancer Screening',
    priceRange: '$949 standalone',
    availability: 'Fountain Life, select concierge practices',
  },
  {
    name: 'Hormone Optimization',
    priceRange: '$200 - $600/month',
    availability: 'Multiple clinics statewide',
  },
];

export default function FloridaLongevity() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Florida Longevity Clinics',
    description: 'Guide to longevity and anti-aging clinics in Florida',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    dateModified: '2024-12-21',
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-orange-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/longevity" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Longevity Hub
          </Link>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Longevity Clinics in Florida
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Florida has become a longevity hotspot with Fountain Life&apos;s flagship locations
            in Naples and Orlando. From Miami&apos;s boutique clinics to research-backed facilities,
            find your path to optimized health.
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-orange-100 text-orange-800 px-3 py-1.5 rounded-full">Miami</span>
            <span className="bg-orange-100 text-orange-800 px-3 py-1.5 rounded-full">Naples</span>
            <span className="bg-orange-100 text-orange-800 px-3 py-1.5 rounded-full">Orlando</span>
            <span className="bg-orange-100 text-orange-800 px-3 py-1.5 rounded-full">Fort Lauderdale</span>
          </div>
        </div>
      </section>

      {/* Fountain Life Spotlight */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6 border border-purple-200">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🏆</span>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Fountain Life: Florida&apos;s Premier Longevity Chain</h2>
              <p className="text-gray-600 mb-4">
                Founded by Peter Diamandis and Tony Robbins, Fountain Life operates two Florida locations
                (Naples and Orlando) offering the most comprehensive diagnostic packages in the state.
                Their APEX membership ($21,500/year) includes concierge care, AI-enhanced MRI, and 24/7 physician access.
              </p>
              <div className="flex gap-4 text-sm">
                <span className="text-purple-700">Naples: 14,000 sq ft flagship</span>
                <span className="text-purple-700">Orlando: Newest location</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinics by Region */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Longevity Clinics by Region</h2>

        {/* Miami */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
            Miami
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {clinics.filter(c => c.region === 'Miami').map((clinic) => (
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

        {/* Naples */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
            Naples
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {clinics.filter(c => c.region === 'Naples').map((clinic) => (
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

        {/* Orlando & Fort Lauderdale */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            Orlando & Fort Lauderdale
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {clinics.filter(c => c.region === 'Orlando' || c.region === 'Fort Lauderdale').map((clinic) => (
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Longevity Treatments in Florida</h2>

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
        <div className="bg-orange-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Other Regions</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/longevity/california" className="px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-orange-400 text-sm font-medium">
              California Clinics
            </Link>
            <Link href="/longevity/texas" className="px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-orange-400 text-sm font-medium">
              Texas Clinics
            </Link>
            <Link href="/longevity/new-york" className="px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-orange-400 text-sm font-medium">
              New York Clinics
            </Link>
            <Link href="/longevity" className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-sm font-medium">
              Longevity Hub
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
