import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import MedspaPriceBadge from '@/components/MedspaPriceBadge';
import PriceEstimateDisclaimer from '@/components/PriceEstimateDisclaimer';
import { getMedspaClinicsByCity, getMedspaCitiesWithClinics } from '@/data/medspa-clinics-index';
import { MEDSPA_STATES } from '@/lib/medspa-clinic-types';
import { getMedspaClinicBadgeRows, formatPrice } from '@/lib/pricing';
import { buildFAQSchema } from '@/lib/jsonLd';
import { gridRobots } from '@/lib/indexability';

interface Props {
  params: Promise<{ state: string; city: string }>;
}

// Verified per-unit Botox pricing across a city's clinic set: the count of
// clinics with a verified per-unit Botox price and, at n >= 3, the median —
// computed from the same one-representative-price-per-clinic rows the national
// guide uses. Never hardcoded; only makes the meta description's price hook
// truthful (and it self-suppresses when a city has no verified Botox price).
function cityBotoxPricing(clinicIds: string[]): { count: number; medianLabel: string | null } {
  const prices: number[] = [];
  for (const id of clinicIds) {
    const botox = getMedspaClinicBadgeRows(id).find((r) => r.label === 'Botox');
    if (botox && typeof botox.price.low === 'number') prices.push(botox.price.low);
  }
  if (prices.length < 3) return { count: prices.length, medianLabel: null };
  prices.sort((a, b) => a - b);
  const mid = Math.floor(prices.length / 2);
  const median = prices.length % 2 ? prices[mid] : (prices[mid - 1] + prices[mid]) / 2;
  return { count: prices.length, medianLabel: formatPrice(median) };
}

// Parametric FAQ for every city page — targets the highest-volume question
// queries (how much, lip filler, HydraFacial, near me). Ranges are typical US
// cash-pay figures that mirror the /med-spa hub; per-city prices are framed as
// "confirm at a consultation" so nothing is over-claimed.
function buildCityMedspaFaq(cityName: string, clinicCount: number, verifiedBotoxCount: number) {
  // The "providers below publish a per-unit price" claim is only true where the
  // city actually has verified per-unit rows — suppress it elsewhere.
  const verifiedLine =
    verifiedBotoxCount >= 2
      ? ` ${cityName} prices vary by injector and how many units you need; several providers below publish a per-unit price you can verify.`
      : ` ${cityName} prices vary by injector and how many units you need.`;
  return [
    {
      question: `How much does Botox cost in ${cityName}?`,
      answer: `Botox is usually priced per unit — nationally about $10–$20 per unit, or roughly $300–$700 to treat one area like forehead lines or crow’s feet.${verifiedLine} Confirm the current rate at a consultation, and see our Botox cost per unit guide for verified prices.`,
    },
    {
      question: `How much is laser hair removal in ${cityName}?`,
      answer: `Laser hair removal usually runs about $50–$400 per session depending on the body area, and most people need a series of six or more sessions. Many national chains sell packages or unlimited plans that lower the per-session cost. Prices vary by ${cityName} provider, so confirm at a consultation.`,
    },
    {
      question: `Where can I get lip filler or a HydraFacial near me in ${cityName}?`,
      answer: `Many ${cityName} med spas below offer lip and dermal fillers (nationally about $600–$1,200 per syringe) and HydraFacial-style facials (typically about $150–$300 a session) alongside Botox and laser hair removal. Check each provider’s service list and confirm pricing directly before booking.`,
    },
    {
      question: `How do I find a med spa near me in ${cityName}?`,
      answer: `Browse the ${clinicCount} providers listed above serving the ${cityName} metro. Use each provider’s site to confirm the nearest ${cityName} location, current pricing, and provider credentials before you book.`,
    },
  ];
}

export async function generateStaticParams() {
  const params: { state: string; city: string }[] = [];
  for (const state of MEDSPA_STATES) {
    const cities = getMedspaCitiesWithClinics(state.slug);
    for (const city of cities) {
      params.push({ state: state.slug, city: city.citySlug });
    }
  }
  return params;
}

function formatCityName(citySlug: string): string {
  return citySlug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state: stateSlug, city: citySlug } = await params;
  const stateInfo = MEDSPA_STATES.find((s) => s.slug === stateSlug);
  if (!stateInfo) return { title: 'Not Found' };
  const clinics = getMedspaClinicsByCity(stateSlug, citySlug);
  const cityName = clinics.length > 0 ? clinics[0].city : formatCityName(citySlug);
  // Lead with the verified-pricing hook + clinic count, and inject the computed
  // per-city Botox median only when it exists (n >= 3) — otherwise fall back to
  // truthful number-free framing so nothing is over-claimed.
  const { count: botoxCount, medianLabel: botoxMedian } = cityBotoxPricing(clinics.map((c) => c.id));
  const description = botoxMedian
    ? `Compare ${clinics.length} med spas in ${cityName}, ${stateInfo.name} with verified Botox from ${botoxMedian}/unit — plus dermal fillers, laser hair removal & microneedling. Real cash-pay costs.`
    : botoxCount > 0
      ? `Compare ${clinics.length} med spas in ${cityName}, ${stateInfo.name} with verified per-unit Botox pricing — plus dermal fillers, laser hair removal & microneedling. Real cash-pay costs.`
      : `Compare ${clinics.length} med spas in ${cityName}, ${stateInfo.name} — Botox, dermal fillers, laser hair removal & microneedling, with typical cash-pay costs.`;
  return {
    title: `Med Spas in ${cityName}: Botox, Fillers & Laser Hair Removal`,
    description,
    alternates: { canonical: `/med-spa/${stateSlug}/${citySlug}` },
    // Thin-content guard: noindex,follow below MIN_CLINICS_FOR_INDEX (see @/lib/indexability).
    ...gridRobots(clinics.length),
  };
}

export default async function CityMedspa({ params }: Props) {
  const { state: stateSlug, city: citySlug } = await params;
  const stateInfo = MEDSPA_STATES.find((s) => s.slug === stateSlug);
  if (!stateInfo) notFound();

  const clinics = getMedspaClinicsByCity(stateSlug, citySlug);
  const allCities = getMedspaCitiesWithClinics(stateSlug);
  if (clinics.length === 0) notFound();

  const cityName = clinics[0].city;
  const hasVerifiedPricing = clinics.some((c) => getMedspaClinicBadgeRows(c.id).length > 0);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: `${cityName} Med Spas`,
    description: `Directory of med-spa and aesthetics providers in ${cityName}, ${stateInfo.name}`,
    author: { '@type': 'Organization', name: 'VitalityScout' },
    dateModified: '2026-06-13',
  };
  const faqItems = buildCityMedspaFaq(
    cityName,
    clinics.length,
    cityBotoxPricing(clinics.map((c) => c.id)).count,
  );
  const faqSchema = buildFAQSchema(faqItems);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <SidebarShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-rose-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-4">
            <Link href="/med-spa" className="hover:text-rose-600">Med Spas</Link>
            <span>/</span>
            <Link href={`/med-spa/${stateSlug}`} className="hover:text-rose-600">{stateInfo.name}</Link>
            <span>/</span>
            <span className="text-gray-900">{cityName}</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">Med Spas in {cityName}</h1>
          <p className="text-xl text-gray-600 mb-6">
            Compare {clinics.length} med-spa and aesthetics providers in {cityName}, {stateInfo.name} —
            Botox, dermal fillers, laser hair removal, microneedling, body contouring, and IV therapy.
            Listings are national brands serving the metro; verify the nearest location and pricing on
            each provider&apos;s site.
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-rose-100 text-rose-800 px-3 py-1.5 rounded-full font-medium">{clinics.length} Providers</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1.5 rounded-full font-medium">Injectables</span>
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-full font-medium">Laser &amp; Body</span>
          </div>
        </div>
      </section>

      {/* All Providers */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Med-Spa &amp; Aesthetics Providers in {cityName}</h2>
        {hasVerifiedPricing && (
          <div className="mb-8 space-y-1">
            <p className="text-sm text-gray-600">
              Prices marked <span className="font-medium text-green-700">verified from clinic site</span>{' '}
              are quoted from the provider&apos;s own website and dated. See{' '}
              <Link href="/guides/botox-cost-per-unit" className="text-rose-700 hover:underline">
                Botox cost per unit
              </Link>{' '}
              for the verified per-unit table.
            </p>
            <PriceEstimateDisclaimer />
          </div>
        )}
        <div className="space-y-6">
          {clinics.map((clinic) => (
            <div key={clinic.slug} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{clinic.name}</h3>
                    {clinic.chain && <span className="text-xs px-2 py-0.5 rounded bg-rose-50 text-rose-700">National Chain</span>}
                  </div>
                  {clinic.address && <p className="text-sm text-gray-500 mb-2">{clinic.address}</p>}
                  <p className="text-gray-600 mb-4">{clinic.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {clinic.services.map((svc) => (
                      <span key={svc} className="text-xs bg-rose-100 text-rose-800 px-2 py-1 rounded font-medium">{svc}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    {clinic.highlights.map((h) => (
                      <span key={h} className="flex items-center gap-1">
                        <span className="text-rose-500">✓</span> {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:text-right md:min-w-[200px]">
                  {getMedspaClinicBadgeRows(clinic.id).length > 0 ? (
                    <div className="mb-2 md:flex md:flex-col md:items-end">
                      <MedspaPriceBadge clinicId={clinic.id} />
                    </div>
                  ) : (
                    <>
                      <div className="text-lg font-bold text-rose-600 mb-1">{clinic.priceRange}</div>
                      <div className="text-xs text-gray-400 mb-2">estimate — verify with provider</div>
                    </>
                  )}
                  {clinic.membership && <div className="text-sm text-gray-600 mb-2">{clinic.membership}</div>}
                  <div className="text-sm text-gray-500 mb-4">Best for: {clinic.bestFor}</div>
                  <a
                    href={clinic.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 font-medium"
                  >
                    Find Locations
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ — question-query phrasings (how much, lip filler, HydraFacial, near me),
          mirrored into FAQPage schema for PAA / AI-Overview capture */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Med Spas in {cityName}: Cost &amp; FAQ</h2>
        <div>
          {faqItems.map((item) => (
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

      {/* Other Cities */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Other {stateInfo.name} Cities</h2>
          <div className="flex flex-wrap gap-3">
            {allCities
              .filter((c) => c.citySlug !== citySlug)
              .map((city) => (
                <Link
                  key={city.citySlug}
                  href={`/med-spa/${stateSlug}/${city.citySlug}`}
                  className="px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-rose-400 text-sm font-medium"
                >
                  {city.city} ({city.count})
                </Link>
              ))}
            <Link href={`/med-spa/${stateSlug}`} className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 text-sm font-medium">
              All {stateInfo.name} Med Spas
            </Link>
          </div>
        </div>
      </section>

      <MedicalDisclaimer />
      </SidebarShell>
      <Footer />
    </main>
  );
}
