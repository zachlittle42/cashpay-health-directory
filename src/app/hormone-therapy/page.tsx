import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getStatesWithClinics, allHormoneClinics } from '@/data/hormone-clinics-index';

export const metadata: Metadata = {
  title: 'Hormone Therapy Clinics: TRT & HRT Near You | VitalityScout',
  description: 'Find local TRT and HRT clinics in Texas, Florida, and Arizona. Compare testosterone replacement and hormone therapy options - telehealth vs in-person clinics.',
};

// Telehealth providers (existing from /trt page)
const telehealthProviders = [
  {
    name: 'Marek Health',
    slug: 'marek-health',
    priceRange: '$250-850/month',
    focus: 'Comprehensive hormone panels + physician consultation',
    services: ['TRT', 'Peptides', 'Labs', 'Coaching'],
    bestFor: 'Comprehensive testing with physician guidance',
    coverage: 'National (except NY, NJ, RI)',
  },
  {
    name: 'Fountain TRT',
    slug: 'fountain-trt',
    priceRange: '$199/month',
    focus: 'Simple, affordable testosterone replacement',
    services: ['TRT', 'Labs', 'Physician consults'],
    bestFor: 'Straightforward TRT at accessible pricing',
    coverage: 'National (most states)',
  },
  {
    name: 'Peter MD',
    slug: 'peter-md',
    priceRange: '$149-299/month',
    focus: 'Men\'s health including TRT and ED',
    services: ['TRT', 'ED treatment', 'Labs'],
    bestFor: 'Men wanting TRT + ED treatment together',
    coverage: 'National (most states)',
  },
  {
    name: 'Hone Health',
    slug: 'hone-health',
    priceRange: '$145/month + labs',
    focus: 'At-home hormone testing with treatment',
    services: ['TRT', 'At-home labs', 'Coaching'],
    bestFor: 'Convenience of at-home testing',
    coverage: 'National (45+ states)',
  },
];

// Services explained
const hormoneServices = [
  {
    name: 'TRT (Testosterone Replacement)',
    icon: '💪',
    description: 'Testosterone replacement therapy for men with low T. Typically delivered via injections, gels, or pellets.',
    candidates: 'Men with symptoms of low testosterone and confirmed low levels via blood test.',
    priceRange: '$150-500/month',
  },
  {
    name: 'HRT (Hormone Replacement)',
    icon: '⚡',
    description: 'Broader hormone optimization including estrogen, progesterone, and testosterone for both men and women.',
    candidates: 'Women in perimenopause/menopause, men wanting comprehensive optimization.',
    priceRange: '$200-600/month',
  },
  {
    name: 'Bioidentical Hormones',
    icon: '🧬',
    description: 'Hormones chemically identical to those your body produces. Often delivered via pellets or creams.',
    candidates: 'Those preferring "natural" hormone replacement.',
    priceRange: '$300-700/insertion or month',
  },
  {
    name: 'Thyroid Optimization',
    icon: '🦋',
    description: 'Optimizing T3, T4, and TSH levels beyond standard "normal" ranges.',
    candidates: 'Those with fatigue, weight gain, or brain fog despite "normal" thyroid tests.',
    priceRange: '$100-300/month',
  },
  {
    name: 'Peptide Therapy',
    icon: '💉',
    description: 'Peptides like BPC-157, Sermorelin, and others for recovery, anti-aging, and optimization.',
    candidates: 'Those wanting advanced optimization beyond basic hormone replacement.',
    priceRange: '$200-500/month',
  },
];

export default function HormoneTherapyHub() {
  const states = getStatesWithClinics();
  const totalClinics = allHormoneClinics.length;
  const mensClinics = allHormoneClinics.filter(c => c.menOnly).length;
  const womensClinics = allHormoneClinics.filter(c => c.womenOnly).length;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Hormone Therapy Clinics Directory',
    description: 'Find TRT and HRT clinics across the United States. Compare telehealth and local options.',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    dateModified: '2026-02-01',
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-50 to-white px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-5xl mb-4 block">💪</span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hormone Therapy Clinics
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Find TRT and HRT clinics near you. Compare telehealth options with local in-person clinics
            for testosterone replacement, bioidentical hormones, and comprehensive hormone optimization.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
              {totalClinics}+ Local Clinics
            </span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
              {states.length} States Covered
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
              Telehealth Available
            </span>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          <a href="#telehealth" className="px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-purple-400 text-sm font-medium">
            Telehealth Options
          </a>
          <a href="#local-clinics" className="px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-purple-400 text-sm font-medium">
            Local Clinics by State
          </a>
          <a href="#services" className="px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-purple-400 text-sm font-medium">
            Services Explained
          </a>
          <a href="#comparison" className="px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-purple-400 text-sm font-medium">
            Telehealth vs Local
          </a>
        </div>
      </section>

      {/* Telehealth vs Local Comparison */}
      <section id="comparison" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Telehealth vs Local Clinic</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <span>📱</span> Telehealth TRT/HRT
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Convenience:</strong> Consults from home, meds shipped to door</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Often cheaper:</strong> $150-300/month typical</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Good for:</strong> Standard TRT, basic hormone replacement</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500">✗</span>
                <span><strong>Limitations:</strong> No physical exams, some state restrictions</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500">✗</span>
                <span><strong>May not offer:</strong> Pellets, advanced protocols, in-person labs</span>
              </div>
            </div>
            <Link href="#telehealth" className="mt-4 inline-block text-sm font-medium text-blue-700 hover:text-blue-800">
              View Telehealth Options →
            </Link>
          </div>

          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
            <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
              <span>🏥</span> Local In-Person Clinic
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Hands-on care:</strong> Physical exams, in-office procedures</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Advanced options:</strong> Pellets, peptides, HGH protocols</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Relationship:</strong> Same provider, face-to-face accountability</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500">✗</span>
                <span><strong>Higher cost:</strong> $200-600/month typical</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500">✗</span>
                <span><strong>Requires:</strong> Office visits, travel time</span>
              </div>
            </div>
            <Link href="#local-clinics" className="mt-4 inline-block text-sm font-medium text-green-700 hover:text-green-800">
              Find Local Clinics →
            </Link>
          </div>
        </div>
      </section>

      {/* Telehealth Providers */}
      <section id="telehealth" className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Telehealth TRT & HRT Providers</h2>
          <p className="text-gray-600 mb-8">
            National telehealth options for hormone therapy. Consult from home, medications shipped to your door.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {telehealthProviders.map((provider) => (
              <div key={provider.slug} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{provider.name}</h3>
                  <span className="text-sm font-semibold text-green-600">{provider.priceRange}</span>
                </div>

                <p className="text-sm text-gray-600 mb-4">{provider.focus}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {provider.services.map((service) => (
                    <span key={service} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {service}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 text-sm border-t border-gray-100 pt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Best for:</span>
                    <span className="text-gray-900">{provider.bestFor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Coverage:</span>
                    <span className="text-gray-900">{provider.coverage}</span>
                  </div>
                </div>

                <Link
                  href={`/providers/${provider.slug}`}
                  className="mt-4 block text-center text-sm font-medium px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link href="/trt" className="text-sm font-medium text-blue-600 hover:text-blue-700">
              View all telehealth TRT providers →
            </Link>
          </div>
        </div>
      </section>

      {/* Local Clinics by State */}
      <section id="local-clinics" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Local Clinics by State</h2>
        <p className="text-gray-600 mb-8">
          Find in-person hormone therapy clinics near you. Click a state to view all clinics and cities.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {states.map((state) => (
            <Link
              key={state.stateSlug}
              href={`/hormone-therapy/${state.stateSlug}`}
              className="block rounded-lg border-2 border-gray-200 p-6 hover:border-purple-400 hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-900">{state.state}</h3>
                <span className="text-sm font-semibold bg-purple-100 text-purple-800 px-2 py-1 rounded">
                  {state.count} clinics
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                {state.cities.slice(0, 3).join(', ')}{state.cities.length > 3 ? `, +${state.cities.length - 3} more` : ''}
              </p>
              <span className="text-sm font-medium text-purple-600">
                View clinics →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 bg-amber-50 rounded-lg p-6 border border-amber-200">
          <h3 className="font-bold text-amber-900 mb-2">More States Coming Soon</h3>
          <p className="text-sm text-amber-800">
            We&apos;re expanding coverage to California, New York, and more. Currently featuring Texas, Florida, and Arizona
            with {totalClinics}+ verified hormone clinics. Check back for updates or use telehealth for nationwide access.
          </p>
        </div>
      </section>

      {/* Services Explained */}
      <section id="services" className="bg-purple-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Hormone Services Explained</h2>
          <p className="text-gray-600 mb-8">
            Understanding the different types of hormone therapy available.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hormoneServices.map((service) => (
              <div key={service.name} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{service.icon}</span>
                  <h3 className="font-bold text-gray-900">{service.name}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-500">Good candidates:</span>
                    <p className="text-gray-700">{service.candidates}</p>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-100">
                    <span className="text-gray-500">Typical cost:</span>
                    <span className="font-semibold text-green-600">{service.priceRange}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Take */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Take: Telehealth vs Local</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 mb-4">
            <strong>For straightforward TRT:</strong> Telehealth is often the best value. If you need standard testosterone
            replacement without complex protocols, services like Fountain TRT or Hone Health offer convenience and competitive
            pricing. You&apos;ll get labs (often at a Quest or Labcorp near you), video consultations, and medications shipped to your door.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>For comprehensive optimization:</strong> Local clinics shine when you want advanced protocols - peptides,
            HGH, pellet therapy, or if you have complex health issues requiring hands-on care. The relationship with a local
            provider who knows your history has value, especially for women navigating perimenopause/menopause.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Men vs Women:</strong> Men have more telehealth options for TRT specifically. Women seeking HRT
            (especially bioidentical) often find better options at local clinics with providers experienced in female hormone
            optimization. That said, telehealth options for women are expanding.
          </p>
          <p className="text-gray-700">
            <strong>Our recommendation:</strong> Start with telehealth if you want convenience and cost savings. Move to a
            local clinic if you want pellets, peptides, or more personalized care. Many people use both - telehealth for
            basic TRT, local clinic for advanced treatments.
          </p>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Learn More About Hormone Therapy</h2>
          <p className="text-gray-600 mb-8">
            Explore our guides to make an informed decision about hormone optimization.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <Link href="/guides/trt-testosterone-therapy" className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <span className="text-3xl mb-3 block">📖</span>
              <h3 className="font-bold text-gray-900 mb-2">Complete TRT Guide</h3>
              <p className="text-sm text-gray-600 mb-3">
                Everything you need to know about testosterone replacement - symptoms, treatment options, costs, and what to expect.
              </p>
              <span className="text-sm font-medium text-purple-600">Read guide →</span>
            </Link>

            <Link href="/guides/best-online-trt-clinics" className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <span className="text-3xl mb-3 block">🏆</span>
              <h3 className="font-bold text-gray-900 mb-2">Best Online TRT Clinics</h3>
              <p className="text-sm text-gray-600 mb-3">
                Compare Fountain TRT, Marek Health, TRT Nation and other top telehealth providers.
              </p>
              <span className="text-sm font-medium text-purple-600">Read guide →</span>
            </Link>

            <Link href="/guides/peptide-therapy-guide" className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <span className="text-3xl mb-3 block">💉</span>
              <h3 className="font-bold text-gray-900 mb-2">Peptide Therapy Guide</h3>
              <p className="text-sm text-gray-600 mb-3">
                BPC-157, Sermorelin, and other peptides often used alongside hormone replacement therapy.
              </p>
              <span className="text-sm font-medium text-purple-600">Read guide →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Optimize Your Hormones?
          </h2>
          <p className="text-purple-100 mb-8 text-lg">
            Whether you choose telehealth convenience or local expertise, getting your hormones tested is the first step.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/labs"
              className="inline-block rounded-lg bg-white px-6 py-3 font-medium text-purple-600 hover:bg-purple-50"
            >
              At-Home Lab Testing
            </Link>
            <Link
              href="/trt"
              className="inline-block rounded-lg border-2 border-white px-6 py-3 font-medium text-white hover:bg-white/10"
            >
              Compare TRT Telehealth
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
