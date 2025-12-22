import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'California Longevity Clinics: Bay Area, LA, San Diego | VitalityScout',
  description: 'Find longevity clinics in California. Human Longevity (SF), Next Health (LA), Beverly Hills concierge. Stem cells, NAD+, peptides, executive health.',
};

const clinics = [
  // Bay Area
  {
    name: 'Human Longevity',
    location: 'South San Francisco',
    region: 'Bay Area',
    priceRange: '$8,000 - $19,000/year',
    focus: ['Executive health', 'Comprehensive diagnostics', 'Genomics'],
    description: 'Founded by Dr. J. Craig Venter (Human Genome Project). Premium executive health with full-body MRI, genome sequencing, and AI-powered analysis.',
    notable: '10,000+ clients, spa-like environment',
    tier: 'premium',
  },
  {
    name: 'The Health Nucleus',
    location: 'San Diego',
    region: 'San Diego',
    priceRange: '$15,000 - $25,000',
    focus: ['Full-body MRI', 'Genome sequencing', 'Advanced diagnostics'],
    description: 'Affiliated with Human Longevity. Comprehensive health assessment with cutting-edge imaging and genomic analysis.',
    notable: 'Research-driven approach',
    tier: 'premium',
  },
  // Los Angeles
  {
    name: 'Next Health',
    location: 'West Hollywood, Century City, Venice',
    region: 'Los Angeles',
    priceRange: '$199/month base',
    focus: ['IV therapy', 'Cryotherapy', 'Hyperbaric', 'Diagnostics'],
    description: 'The most accessible longevity chain. IV lounges, wellness technology, and entry-level memberships make longevity accessible.',
    notable: 'Rapid expansion, 16+ locations planned',
    tier: 'accessible',
  },
  {
    name: 'Beverly Hills Concierge Doctor',
    location: 'Beverly Hills',
    region: 'Los Angeles',
    priceRange: 'Concierge pricing',
    focus: ['Peptides', 'NAD+', 'Hormone optimization', 'Anti-aging'],
    description: 'Concierge medicine for celebrities and executives. Full spectrum of longevity treatments including off-label pharmaceuticals.',
    notable: 'Celebrity clientele, discreet service',
    tier: 'premium',
  },
  {
    name: 'Lifespan.io Clinic',
    location: 'Los Angeles',
    region: 'Los Angeles',
    priceRange: '$500 - $5,000',
    focus: ['Senolytics', 'Longevity protocols', 'Research-based'],
    description: 'Research-focused longevity clinic emphasizing evidence-based interventions and clinical trial access.',
    notable: 'Connected to longevity research community',
    tier: 'mid',
  },
  // San Diego
  {
    name: 'Scripps Center for Executive Health',
    location: 'La Jolla',
    region: 'San Diego',
    priceRange: '$3,500 - $8,000',
    focus: ['Executive physicals', 'Preventive care', 'Cardiology'],
    description: 'Academic medical center offering comprehensive executive health assessments with world-class specialists.',
    notable: 'Scripps reputation, research integration',
    tier: 'premium',
  },
];

const treatments = [
  {
    name: 'NAD+ IV Therapy',
    priceRange: '$500 - $1,500/session',
    availability: 'Widely available at IV lounges and longevity clinics',
  },
  {
    name: 'Peptide Therapy',
    priceRange: '$300 - $800/month',
    availability: 'Concierge doctors, some longevity clinics',
  },
  {
    name: 'Full-Body MRI Screening',
    priceRange: '$2,500 - $5,000',
    availability: 'Human Longevity, Prenuvo, specialized imaging centers',
  },
  {
    name: 'DEXA/Body Composition',
    priceRange: '$100 - $300',
    availability: 'DexaFit, BodySpec, university clinics',
  },
  {
    name: 'Hyperbaric Oxygen (HBOT)',
    priceRange: '$150 - $400/session',
    availability: 'Next Health, specialty wellness centers',
  },
  {
    name: 'Cryotherapy',
    priceRange: '$50 - $100/session',
    availability: 'Next Health, CryoHealthcare, many gyms',
  },
];

export default function CaliforniaLongevity() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'California Longevity Clinics',
    description: 'Guide to longevity and anti-aging clinics in California',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    dateModified: '2024-12-21',
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/longevity" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Longevity Hub
          </Link>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Longevity Clinics in California
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            California is the epicenter of American longevity medicine. From Human Longevity&apos;s
            genomics-driven approach in the Bay Area to Next Health&apos;s accessible IV lounges
            in LA, find the right clinic for your health optimization goals.
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1.5 rounded-full">Bay Area</span>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1.5 rounded-full">Los Angeles</span>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1.5 rounded-full">San Diego</span>
          </div>
        </div>
      </section>

      {/* Clinics by Region */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Longevity Clinics by Region</h2>

        {/* Bay Area */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-3 h-3 bg-indigo-500 rounded-full"></span>
            Bay Area / San Francisco
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {clinics.filter(c => c.region === 'Bay Area').map((clinic) => (
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

        {/* Los Angeles */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
            Los Angeles
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {clinics.filter(c => c.region === 'Los Angeles').map((clinic) => (
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

        {/* San Diego */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            San Diego
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {clinics.filter(c => c.region === 'San Diego').map((clinic) => (
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Longevity Treatments in California</h2>

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
        <div className="bg-indigo-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Other Regions</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/longevity/florida" className="px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-indigo-400 text-sm font-medium">
              Florida Clinics
            </Link>
            <Link href="/longevity/texas" className="px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-indigo-400 text-sm font-medium">
              Texas Clinics
            </Link>
            <Link href="/longevity/new-york" className="px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-indigo-400 text-sm font-medium">
              New York Clinics
            </Link>
            <Link href="/longevity" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium">
              Longevity Hub
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
