import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getWeightLossStatesWithClinics, allWeightLossClinics } from '@/data/weightloss-clinics-index';

export const metadata: Metadata = {
  title: 'Medical Weight Loss Clinics: GLP-1 & Semaglutide Near You | VitalityScout',
  description: 'Find local GLP-1 weight loss clinics in Texas, Florida, and Arizona. Compare semaglutide and tirzepatide options - telehealth vs in-person medical weight loss.',
};

// Telehealth providers
const telehealthProviders = [
  {
    name: 'Hims/Hers',
    slug: 'hims-hers',
    priceRange: '$199-599/month',
    focus: 'Compounded semaglutide with telehealth consultations',
    services: ['Semaglutide', 'Tirzepatide', 'Telehealth', 'Shipped to door'],
    bestFor: 'Affordable entry point for GLP-1 therapy',
    coverage: 'National (most states)',
  },
  {
    name: 'Calibrate',
    slug: 'calibrate',
    priceRange: '$199-499/month',
    focus: 'Metabolic health program with GLP-1 medications',
    services: ['Semaglutide', 'Coaching', 'Metabolic health', 'App-based'],
    bestFor: 'Comprehensive program with behavior change focus',
    coverage: 'National (most states)',
  },
  {
    name: 'Found',
    slug: 'found-weight-loss',
    priceRange: '$99-249/month',
    focus: 'Personalized weight loss with various medication options',
    services: ['GLP-1s', 'Multiple meds', 'Coaching', 'Community'],
    bestFor: 'Affordable option with community support',
    coverage: 'National',
  },
  {
    name: 'Ro Body',
    slug: 'ro-body',
    priceRange: '$145-499/month',
    focus: 'Medical weight loss from the Ro telehealth platform',
    services: ['Semaglutide', 'Tirzepatide', 'Coaching', 'Labs included'],
    bestFor: 'Those familiar with Ro\'s telehealth model',
    coverage: 'National (most states)',
  },
];

// GLP-1 medications explained
const medications = [
  {
    name: 'Semaglutide (Ozempic/Wegovy)',
    icon: '💉',
    description: 'The most popular GLP-1 medication. Once-weekly injection. FDA-approved for weight loss (Wegovy) and diabetes (Ozempic).',
    typicalLoss: '10-15% body weight',
    priceRange: '$300-1,200/month (brand) | $200-500/month (compounded)',
    considerations: 'Nausea common initially. Requires titration over 4-8 weeks.',
  },
  {
    name: 'Tirzepatide (Mounjaro/Zepbound)',
    icon: '💊',
    description: 'Dual GIP/GLP-1 agonist. Often more effective than semaglutide. Once-weekly injection.',
    typicalLoss: '15-20% body weight',
    priceRange: '$900-1,200/month (brand) | $400-700/month (compounded)',
    considerations: 'Newer medication. May have fewer GI side effects than semaglutide.',
  },
  {
    name: 'Compounded GLP-1s',
    icon: '🏥',
    description: 'Pharmacy-compounded versions during brand shortages. Same active ingredients at lower cost.',
    typicalLoss: 'Similar to brand versions',
    priceRange: '$200-500/month',
    considerations: 'Availability varies. Some states have restrictions. Quality varies by pharmacy.',
  },
];

export default function WeightLossHub() {
  const states = getWeightLossStatesWithClinics();
  const totalClinics = allWeightLossClinics.length;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Medical Weight Loss Clinics Directory',
    description: 'Find GLP-1 and medical weight loss clinics across the United States.',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    dateModified: '2026-02-01',
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-5xl mb-4 block">💊</span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Medical Weight Loss Clinics
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Find GLP-1 weight loss clinics near you. Compare semaglutide and tirzepatide options -
            telehealth convenience or local in-person care with physician supervision.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
              {totalClinics}+ Local Clinics
            </span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
              {states.length} States Covered
            </span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
              Telehealth Available
            </span>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          <a href="#telehealth" className="px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-green-400 text-sm font-medium">
            Telehealth Options
          </a>
          <a href="#local-clinics" className="px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-green-400 text-sm font-medium">
            Local Clinics by State
          </a>
          <a href="#medications" className="px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-green-400 text-sm font-medium">
            GLP-1 Medications
          </a>
          <a href="#comparison" className="px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-green-400 text-sm font-medium">
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
              <span>📱</span> Telehealth GLP-1
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Convenience:</strong> Consults from home, meds shipped to door</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Often cheaper:</strong> $150-400/month typical for compounded</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Quick start:</strong> Often same-week prescription if qualified</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500">✗</span>
                <span><strong>Limitations:</strong> Less personalized, no physical exams</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500">✗</span>
                <span><strong>May not include:</strong> In-person labs, nutritionist, accountability</span>
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
                <span><strong>Comprehensive:</strong> Physical exams, in-office labs, body composition</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Accountability:</strong> Regular check-ins, face-to-face support</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span><strong>Full range:</strong> Brand medications, multiple options</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500">✗</span>
                <span><strong>Higher cost:</strong> $350-800/month typical</span>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Telehealth GLP-1 Providers</h2>
          <p className="text-gray-600 mb-8">
            National telehealth options for GLP-1 medications. Consult from home, medications shipped to your door.
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
                    <span key={service} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
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
                  className="mt-4 block text-center text-sm font-medium px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link href="/glp1" className="text-sm font-medium text-green-600 hover:text-green-700">
              View all telehealth GLP-1 providers →
            </Link>
          </div>
        </div>
      </section>

      {/* Local Clinics by State */}
      <section id="local-clinics" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Local Clinics by State</h2>
        <p className="text-gray-600 mb-8">
          Find in-person GLP-1 weight loss clinics near you. Click a state to view all clinics and cities.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {states.map((state) => (
            <Link
              key={state.stateSlug}
              href={`/weight-loss/${state.stateSlug}`}
              className="block rounded-lg border-2 border-gray-200 p-6 hover:border-green-400 hover:shadow-lg transition-all"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-900">{state.state}</h3>
                <span className="text-sm font-semibold bg-green-100 text-green-800 px-2 py-1 rounded">
                  {state.count} clinics
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                {state.cities.slice(0, 3).join(', ')}{state.cities.length > 3 ? `, +${state.cities.length - 3} more` : ''}
              </p>
              <span className="text-sm font-medium text-green-600">
                View clinics →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 bg-amber-50 rounded-lg p-6 border border-amber-200">
          <h3 className="font-bold text-amber-900 mb-2">More States Coming Soon</h3>
          <p className="text-sm text-amber-800">
            We&apos;re expanding coverage to California, New York, and more. Currently featuring Texas, Florida, and Arizona
            with {totalClinics}+ verified weight loss clinics. Use telehealth for nationwide access in the meantime.
          </p>
        </div>
      </section>

      {/* Medications Explained */}
      <section id="medications" className="bg-green-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">GLP-1 Medications Explained</h2>
          <p className="text-gray-600 mb-8">
            Understanding the different GLP-1 medications for weight loss.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {medications.map((med) => (
              <div key={med.name} className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{med.icon}</span>
                  <h3 className="font-bold text-gray-900">{med.name}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">{med.description}</p>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-500">Typical weight loss:</span>
                    <p className="font-semibold text-green-600">{med.typicalLoss}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Cost range:</span>
                    <p className="text-gray-700">{med.priceRange}</p>
                  </div>
                  <div className="pt-2 border-t border-gray-100">
                    <span className="text-gray-500">Considerations:</span>
                    <p className="text-gray-700 text-xs mt-1">{med.considerations}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Take */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Take: Choosing a Weight Loss Clinic</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 mb-4">
            <strong>For cost-conscious patients:</strong> Telehealth offers the best value. Compounded semaglutide through
            services like Hims/Hers or Found can cost $200-400/month vs $1,000+ for brand name at local pharmacies.
            The trade-off is less personalized care and no in-person labs.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>For comprehensive care:</strong> Local clinics shine when you want body composition tracking, regular
            accountability check-ins, and access to multiple treatment options. Many clinics include nutrition counseling
            and behavioral coaching that telehealth often lacks.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Tirzepatide vs Semaglutide:</strong> Early data suggests tirzepatide (Mounjaro/Zepbound) may produce
            more weight loss with potentially fewer GI side effects. However, it&apos;s newer and more expensive. Both are
            effective - discuss with your provider which is right for your situation.
          </p>
          <p className="text-gray-700">
            <strong>Our recommendation:</strong> If budget is a concern, start with telehealth compounded semaglutide.
            If you want hands-on care and accountability, invest in a local clinic with good reviews. Either way,
            stick with it - GLP-1s work best with consistent use and lifestyle changes.
          </p>
        </div>
      </section>

      {/* Learn More Section */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Learn More About GLP-1 Weight Loss</h2>
          <p className="text-gray-600 mb-8">
            Explore our guides to understand your options and make an informed decision.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <Link href="/guides/glp1-weight-loss-complete-guide" className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <span className="text-3xl mb-3 block">📖</span>
              <h3 className="font-bold text-gray-900 mb-2">Complete GLP-1 Guide</h3>
              <p className="text-sm text-gray-600 mb-3">
                Everything about semaglutide and tirzepatide - how they work, results, side effects, and costs.
              </p>
              <span className="text-sm font-medium text-green-600">Read guide →</span>
            </Link>

            <Link href="/guides/compounded-semaglutide" className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <span className="text-3xl mb-3 block">💊</span>
              <h3 className="font-bold text-gray-900 mb-2">Compounded Semaglutide</h3>
              <p className="text-sm text-gray-600 mb-3">
                FDA updates, legal status in 2025, and what alternatives exist after the shortage ended.
              </p>
              <span className="text-sm font-medium text-green-600">Read guide →</span>
            </Link>

            <Link href="/faq/glp1" className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <span className="text-3xl mb-3 block">❓</span>
              <h3 className="font-bold text-gray-900 mb-2">GLP-1 FAQ</h3>
              <p className="text-sm text-gray-600 mb-3">
                Common questions about insurance, stopping medication, side effects, and results timeline.
              </p>
              <span className="text-sm font-medium text-green-600">Read FAQ →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Weight Loss Journey?
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            GLP-1 medications have helped millions lose significant weight. Find the right clinic for your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/glp1"
              className="inline-block rounded-lg bg-white px-6 py-3 font-medium text-green-600 hover:bg-green-50"
            >
              Compare Telehealth GLP-1
            </Link>
            <Link
              href="/guides/glp1-weight-loss-complete-guide"
              className="inline-block rounded-lg border-2 border-white px-6 py-3 font-medium text-white hover:bg-white/10"
            >
              Read GLP-1 Guide
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
