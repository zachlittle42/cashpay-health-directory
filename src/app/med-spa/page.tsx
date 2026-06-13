import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import { getMedspaStatesWithClinics, allMedspaClinics } from '@/data/medspa-clinics-index';
import { MEDSPA_SERVICES } from '@/lib/medspa-clinic-types';
import { MEDSPA_CHAINS } from '@/data/medspa-chains';

export const metadata: Metadata = {
  title: 'Med Spa Near You: Botox, Fillers & Laser Hair Removal by City',
  description:
    'Find med-spa and aesthetics providers near you. Compare Botox, dermal fillers, laser hair removal, microneedling, body contouring, and IV therapy by city — with typical cash-pay costs and national chains.',
};

const FAQ_ITEMS = [
  {
    question: 'How much does Botox cost at a med spa?',
    answer:
      'Botox is typically priced about $10–$20 per unit, or roughly $300–$700 to treat one area (like forehead lines or crow’s feet), depending on your city, the injector, and how many units you need. Results last about 3–4 months. Prices are estimates — confirm with the provider.',
  },
  {
    question: 'How much is laser hair removal?',
    answer:
      'Laser hair removal usually runs about $50–$400 per session depending on the body area, and most people need a series of 6+ sessions. Many chains sell packages or "unlimited" plans (for example Milan Laser) that lower the per-session cost. Prices vary by city and provider.',
  },
  {
    question: 'Are med-spa treatments safe?',
    answer:
      'Injectables and energy-based treatments are generally safe when performed by a trained, licensed provider (physician, NP, PA, or RN under medical supervision), but they are medical procedures with real risks. Choose a med-spa with qualified clinicians and an overseeing physician, and have a consultation first. This page is informational, not medical advice.',
  },
  {
    question: 'What is the difference between a med spa and a day spa?',
    answer:
      'A medical spa (med spa) offers cosmetic medical treatments — Botox, fillers, laser, microneedling, body contouring — under the supervision of a licensed physician, whereas a day spa offers non-medical services like facials and massage. Med-spa procedures require qualified medical providers.',
  },
];

export default function MedSpaHub() {
  const states = getMedspaStatesWithClinics();
  const totalClinics = allMedspaClinics.length;
  const chains = Object.values(MEDSPA_CHAINS);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Med Spa & Aesthetics Directory',
    description: 'Find med-spa and aesthetics providers near you across the United States.',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    dateModified: '2026-06-13',
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((i) => ({
      '@type': 'Question',
      name: i.question,
      acceptedAnswer: { '@type': 'Answer', text: i.answer },
    })),
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-rose-50 to-white px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-5xl mb-4 block">✨</span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Med Spa &amp; Aesthetics Near You</h1>
          <p className="text-xl text-gray-600 mb-6">
            Find Botox, dermal fillers, laser hair removal, microneedling, body contouring, and IV
            therapy providers in your city — with typical cash-pay costs and the national chains that
            serve most metros.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-rose-100 text-rose-800 px-4 py-2 rounded-full font-medium">
              {totalClinics}+ Listings
            </span>
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
              {states.length} {states.length === 1 ? 'State' : 'States'} Covered
            </span>
            <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-medium">
              Cash-Pay Pricing
            </span>
          </div>
        </div>
      </section>

      {/* Services explainer */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Popular Med-Spa Treatments &amp; Costs</h2>
        <p className="text-gray-600 mb-8">
          Typical US cash-pay price ranges. Actual cost varies by city, provider, and how much is used —
          always confirm at a consultation.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MEDSPA_SERVICES.map((s) => (
            <div key={s.name} className="rounded-lg border border-gray-200 p-6">
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="font-bold text-gray-900">{s.name}</h3>
              <p className="text-sm font-semibold text-rose-600 mt-1">{s.typicalCost}</p>
              <p className="text-sm text-gray-600 mt-2">{s.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Directory by State */}
      <section id="by-state" className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Med Spas by State</h2>
          <p className="text-gray-600 mb-8">
            Browse aesthetics providers by city. Click a state to see clinics and metros.
          </p>

          {states.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-3">
              {states.map((state) => (
                <Link
                  key={state.stateSlug}
                  href={`/med-spa/${state.stateSlug}`}
                  className="block rounded-lg border-2 border-gray-200 bg-white p-6 hover:border-rose-400 hover:shadow-lg transition-all"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{state.state}</h3>
                    <span className="text-sm font-semibold bg-rose-100 text-rose-800 px-2 py-1 rounded">
                      {state.count} listings
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {state.cities.slice(0, 3).join(', ')}
                    {state.cities.length > 3 ? `, +${state.cities.length - 3} more` : ''}
                  </p>
                  <span className="text-sm font-medium text-rose-600">View providers →</span>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">City directories are being built.</p>
          )}

          <div className="mt-8 bg-amber-50 rounded-lg p-6 border border-amber-200">
            <h3 className="font-bold text-amber-900 mb-2">More Cities Coming Soon</h3>
            <p className="text-sm text-amber-800">
              We&apos;re expanding to Florida, New York, Arizona, and more. Current listings feature
              national aesthetic chains by metro — verify the nearest location and current pricing on
              each brand&apos;s site.
            </p>
          </div>
        </div>
      </section>

      {/* National chains */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">The Major National Med-Spa Chains</h2>
        <p className="text-gray-600 mb-8">
          Most metros are served by a handful of national brands plus local independents. Pricing below
          is general — confirm directly with each provider.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {chains.map((chain) => (
            <div key={chain.key} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900">{chain.name}</h3>
                <span className="text-sm font-semibold text-rose-600 text-right max-w-[45%]">{chain.priceRange}</span>
              </div>
              <div className="flex flex-wrap gap-1 mb-3">
                {chain.services.slice(0, 4).map((svc) => (
                  <span key={svc} className="text-xs bg-rose-50 text-rose-700 px-2 py-0.5 rounded">{svc}</span>
                ))}
              </div>
              <p className="text-sm text-gray-600 mb-4">{chain.bestFor}.</p>
              <a
                href={chain.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-rose-600 hover:text-rose-700"
              >
                Find locations →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Related guides */}
      <section className="mx-auto max-w-6xl px-4 pb-4">
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href="/guides/botox-cost-guide"
            className="block rounded-lg border border-rose-200 bg-rose-50 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">📖</span>
              <div>
                <div className="font-semibold text-gray-900">How Much Does Botox Cost? Price Guide</div>
                <div className="mt-1 text-sm text-gray-600">
                  Per-unit vs per-area pricing, how many units common areas take, and how to save safely.
                </div>
              </div>
            </div>
          </Link>
          <Link
            href="/guides/laser-hair-removal-cost"
            className="block rounded-lg border border-rose-200 bg-rose-50 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">📖</span>
              <div>
                <div className="font-semibold text-gray-900">Laser Hair Removal Cost Guide</div>
                <div className="mt-1 text-sm text-gray-600">
                  Per-session vs package pricing by body area, why it takes a series, and what affects cost.
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group border-b border-gray-200 py-5">
              <summary className="flex cursor-pointer items-start justify-between text-base font-semibold text-gray-900 hover:text-rose-600">
                <span className="pr-4">{item.question}</span>
                <span className="text-rose-600 transition-transform group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-3 text-sm text-gray-700">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <MedicalDisclaimer />
      <Footer />
    </main>
  );
}
