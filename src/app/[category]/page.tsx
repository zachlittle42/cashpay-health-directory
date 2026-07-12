import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CATEGORIES, type Category, type Provider } from '@/lib/types';
import { getProvidersByCategory } from '@/lib/providers';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SidebarNav from '@/components/SidebarNav';
import { buildCategoryListSchema, buildFAQSchema } from '@/lib/jsonLd';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import LabsPriceComparison from '@/components/LabsPriceComparison';

// DEXA-specific AEO content. Answers are grounded in the live provider data in
// src/lib/providers-telehealth.ts (BodySpec $40-45/scan, DexaFit $100-150/scan).
// Prices are estimates to confirm with the provider. The visible direct-answer
// + FAQ blocks below mirror this schema exactly.
const DEXA_FAQ_ITEMS = [
  {
    question: 'How much does a DEXA scan cost without insurance?',
    answer: 'A cash-pay DEXA body-composition scan typically costs about $40-150. Budget providers like BodySpec charge roughly $40-45 per scan (and lower with a membership), while full-service providers like DexaFit run about $100-150 per scan, sometimes bundled with VO2 max or RMR testing. Prices vary by city and location — confirm current pricing directly with the provider.',
  },
  {
    question: 'Is a DEXA scan covered by insurance?',
    answer: 'DEXA scans for bone-density (osteoporosis) screening are often covered when medically indicated, but DEXA scans ordered purely for body-composition or fitness tracking are generally not covered and are paid cash. Most body-composition scans listed here are cash-pay. Check with your insurer and the provider before booking.',
  },
  {
    question: 'What does a DEXA scan measure?',
    answer: 'A DEXA (DXA) scan measures body composition — total and regional body fat, lean muscle mass, visceral fat, and bone density. It is more precise than BMI or bathroom scales because it separates fat, muscle, and bone rather than estimating from weight and height.',
  },
  {
    question: 'How often should I get a DEXA scan?',
    answer: 'For body-composition tracking, many people scan once every 3-6 months to see meaningful changes in fat and muscle. Scanning more often than quarterly rarely shows change beyond normal measurement variation. Talk to a clinician about the right cadence for bone-density screening.',
  },
];


export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const cat = CATEGORIES[params.category as Category];
  if (!cat) return {};
  return {
    title: `${cat.name} Compared — Pricing & Reviews`,
    description: cat.description,
    alternates: { canonical: `https://vitalityscout.com/${params.category}` },
  };
}

function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <div className="rounded-lg border border-gray-200 p-6 hover:border-blue-300 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-900">{provider.name}</h3>
            {provider.featured && (
              <span className="rounded bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-800">
                Featured
              </span>
            )}
          </div>

          {provider.destinationCity && (
            <p className="mt-1 text-sm text-purple-600">
              📍 {provider.destinationCity}, {provider.destinationCountry}
              {provider.typicalTripLength && ` · ${provider.typicalTripLength}`}
            </p>
          )}

          <p className="mt-2 text-sm text-gray-600">{provider.description}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {provider.bestFor.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-700"
              >
                {tag}
              </span>
            ))}
          </div>

          {provider.lastVerified && (
            <p className="mt-2 text-xs text-gray-400">
              Updated {new Date(provider.lastVerified).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </p>
          )}

          {provider.includesInPackage && provider.includesInPackage.length > 0 && (
            <p className="mt-3 text-xs text-gray-500">
              Includes: {provider.includesInPackage.slice(0, 3).join(', ')}
              {provider.includesInPackage.length > 3 && '...'}
            </p>
          )}
        </div>

        <div className="sm:text-right sm:min-w-[160px]">
          <div className="text-xl font-bold text-gray-900">{provider.pricingDisplay}</div>
          {provider.pricingComparison && (
            <p className="text-sm text-green-600">{provider.pricingComparison}</p>
          )}
          {provider.savingsPercent && (
            <p className="text-xs font-medium text-green-700 mt-1">
              Save ~{provider.savingsPercent}%
            </p>
          )}
          <Link
            href={`/providers/${provider.slug}`}
            className="mt-3 inline-block rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(CATEGORIES).map((category) => ({
    category,
  }));
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const categorySlug = params.category as Category;
  const category = CATEGORIES[categorySlug];

  if (!category) {
    notFound();
  }

  const providers = getProvidersByCategory(categorySlug);
  const hasMedicalTourism = category.hasMedicalTourism;
  const destinations = hasMedicalTourism ? category.topDestinations : [];

  const categoryListSchema = buildCategoryListSchema(category.name, providers);

  const isDexa = categorySlug === 'dexa';
  const isLabs = categorySlug === 'labs';
  const dexaFaqSchema = isDexa ? buildFAQSchema(DEXA_FAQ_ITEMS) : null;
  // Enriched MedicalWebPage for the DEXA price query, with per-provider
  // priceSpecification built from the real pricingDisplay strings in the data.
  const dexaWebPageSchema = isDexa
    ? {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: 'DEXA Scan Cost & Providers',
        description: 'Cash-pay DEXA body-composition and bone-density scan pricing and providers, with estimated costs to verify with each provider.',
        url: 'https://vitalityscout.com/dexa',
        inLanguage: 'en-US',
        medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
        about: { '@type': 'MedicalTest', name: 'DEXA (DXA) body composition and bone density scan' },
        author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
        reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
        lastReviewed: '2026-06-10',
        dateModified: '2026-06-10',
        offers: providers.map((p) => ({
          '@type': 'Offer',
          name: `${p.name} DEXA scan`,
          priceSpecification: { '@type': 'PriceSpecification', price: p.pricingDisplay, priceCurrency: 'USD' },
          seller: { '@type': 'Organization', name: p.name, url: p.url },
        })),
      }
    : null;

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryListSchema) }}
      />
      {dexaWebPageSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dexaWebPageSchema) }}
        />
      )}
      {dexaFaqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dexaFaqSchema) }}
        />
      )}
      <Navigation />

      <div className="lg:flex lg:items-stretch">
        <SidebarNav />
        <div className="min-w-0 flex-1">

      {/* Category Header */}
      <section className={`px-4 py-12 ${hasMedicalTourism ? 'bg-gradient-to-b from-purple-50 to-white' : 'bg-gray-50'}`}>
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{category.icon}</span>
            <h1 className="text-3xl font-bold text-gray-900">{category.name}</h1>
          </div>
          <p className="text-lg text-gray-600">{category.description}</p>

          {/* Direct-answer lead for the "how much is a DEXA scan" query.
              Numbers are grounded in the live provider data below. */}
          {isDexa && (
            <div className="mt-6 rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                A cash-pay DEXA scan typically costs <strong>$40-150</strong> without insurance.
                Budget providers like BodySpec run about <strong>$40-45 per scan</strong>, while
                full-service providers like DexaFit run about <strong>$100-150 per scan</strong>,
                sometimes bundled with VO2 max or RMR testing. A DEXA scan measures body fat, lean
                muscle, visceral fat, and bone density &mdash; more precisely than BMI. Prices are
                estimates that vary by city; confirm current pricing with the provider.
              </p>
            </div>
          )}

          {hasMedicalTourism && (
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-700">
                Save {category.typicalSavings} abroad
              </span>
              {destinations && destinations.length > 0 && (
                <span className="text-sm text-gray-500">
                  Top destinations: {destinations.join(', ')}
                </span>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Verified pricing module — labs only, category-gated like the DEXA AEO block */}
      {isLabs && <LabsPriceComparison providers={providers} />}

      {/* Quick Stats for Medical Tourism Categories */}
      {hasMedicalTourism && (
        <section className="border-b border-gray-100 px-4 py-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {category.typicalSavings}
                </div>
                <div className="text-xs text-gray-500">Typical Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {destinations?.length || 0}+
                </div>
                <div className="text-xs text-gray-500">Destinations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {providers.length}
                </div>
                <div className="text-xs text-gray-500">Vetted Providers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">5-10</div>
                <div className="text-xs text-gray-500">Days Typical Trip</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Providers List */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        {hasMedicalTourism && destinations && destinations.length > 0 && (
          <div className="mb-8">
            <h2 className="text-sm font-medium text-gray-500 mb-3">Filter by Destination</h2>
            <div className="flex flex-wrap gap-2">
              <button className="rounded-full bg-gray-900 px-4 py-1.5 text-sm text-white">
                All
              </button>
              {destinations.map((dest) => (
                <button
                  key={dest}
                  className="rounded-full border border-gray-300 px-4 py-1.5 text-sm text-gray-700 hover:border-gray-400"
                >
                  {dest}
                </button>
              ))}
              {category.hasLocalUS && (
                <button className="rounded-full border border-gray-300 px-4 py-1.5 text-sm text-gray-700 hover:border-gray-400">
                  🇺🇸 US Clinics
                </button>
              )}
            </div>
          </div>
        )}

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">
            {providers.length > 0 ? `${providers.length} Providers` : 'Providers'}
          </h2>
          <div className="text-sm text-gray-500">Sort: Recommended</div>
        </div>

        {providers.length > 0 ? (
          <div className="space-y-4">
            {providers.map((provider) => (
              <ProviderCard key={provider.slug} provider={provider} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border-2 border-dashed border-gray-200 p-12 text-center">
            <div className="text-4xl mb-4">{category.icon}</div>
            <h3 className="text-lg font-medium text-gray-900">Coming Soon</h3>
            <p className="mt-2 text-gray-500">
              We&apos;re currently researching and vetting {category.name.toLowerCase()} providers.
            </p>
          </div>
        )}

        {/* Editorial Section */}
        {hasMedicalTourism && (
          <div className="mt-12 rounded-lg bg-gray-50 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">
              Should You Travel for {category.name}?
            </h3>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="text-sm font-medium text-green-700 mb-2">Why Travel</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Save {category.typicalSavings} vs US prices</li>
                  <li>• Access to high-volume specialists</li>
                  <li>• Often shorter wait times</li>
                  <li>• All-inclusive packages simplify planning</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-red-700 mb-2">Considerations</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Travel time and recovery logistics</li>
                  <li>• Follow-up care after returning home</li>
                  <li>• Research and vet providers carefully</li>
                  <li>• Factor in all travel costs</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Related Resources */}
        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Related Resources
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Category-specific guide links */}
            {categorySlug === 'glp1' && (
              <>
                <Link href="/guides/glp1-weight-loss-complete-guide" className="block rounded-lg bg-white border border-blue-200 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📖</span>
                    <div>
                      <div className="font-semibold text-gray-900">GLP-1 Complete Guide</div>
                      <div className="text-sm text-gray-600 mt-1">How GLP-1s work, results, and side effects</div>
                    </div>
                  </div>
                </Link>
                <Link href="/faq/glp1" className="block rounded-lg bg-white border border-blue-200 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">❓</span>
                    <div>
                      <div className="font-semibold text-gray-900">GLP-1 FAQ</div>
                      <div className="text-sm text-gray-600 mt-1">Common questions about insurance, stopping, and more</div>
                    </div>
                  </div>
                </Link>
                <Link href="/guides/wegovy-vs-ozempic" className="block rounded-lg bg-white border border-blue-200 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">⚖️</span>
                    <div>
                      <div className="font-semibold text-gray-900">Wegovy vs Ozempic</div>
                      <div className="text-sm text-gray-600 mt-1">How the two semaglutide brands compare on cost and use</div>
                    </div>
                  </div>
                </Link>
                <Link href="/guides/cheapest-glp1-without-insurance" className="block rounded-lg bg-white border border-blue-200 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💰</span>
                    <div>
                      <div className="font-semibold text-gray-900">Cheapest GLP-1 Without Insurance</div>
                      <div className="text-sm text-gray-600 mt-1">Lowest cash-pay paths to semaglutide and tirzepatide</div>
                    </div>
                  </div>
                </Link>
                <Link href="/guides/best-glp1-weight-loss-programs" className="block rounded-lg bg-white border border-blue-200 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🏆</span>
                    <div>
                      <div className="font-semibold text-gray-900">Best GLP-1 Weight-Loss Programs</div>
                      <div className="text-sm text-gray-600 mt-1">Compared on price, telehealth, and ongoing support</div>
                    </div>
                  </div>
                </Link>
                <Link href="/guides/ozempic-alternatives" className="block rounded-lg bg-white border border-blue-200 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🔁</span>
                    <div>
                      <div className="font-semibold text-gray-900">Ozempic Alternatives</div>
                      <div className="text-sm text-gray-600 mt-1">Other GLP-1 and non-GLP-1 options to consider</div>
                    </div>
                  </div>
                </Link>
              </>
            )}
            {categorySlug === 'hair_transplant' && (
              <>
                <Link href="/guides/hair-transplant-turkey-guide" className="block rounded-lg bg-white border border-purple-200 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📖</span>
                    <div>
                      <div className="font-semibold text-gray-900">Turkey Safety Guide</div>
                      <div className="text-sm text-gray-600 mt-1">FUE vs DHI, choosing clinics, safety checklist</div>
                    </div>
                  </div>
                </Link>
                <Link href="/guides/turkey-hair-transplant-trip-planner" className="block rounded-lg bg-white border border-purple-200 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✈️</span>
                    <div>
                      <div className="font-semibold text-gray-900">Trip Planner</div>
                      <div className="text-sm text-gray-600 mt-1">7-day Istanbul itinerary and packing list</div>
                    </div>
                  </div>
                </Link>
              </>
            )}
            {categorySlug === 'labs' && (
              <>
                <Link href="/guides/at-home-lab-testing-guide" className="block rounded-lg bg-white border border-blue-200 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📖</span>
                    <div>
                      <div className="font-semibold text-gray-900">Lab Testing Guide</div>
                      <div className="text-sm text-gray-600 mt-1">How it works, accuracy, and what to test</div>
                    </div>
                  </div>
                </Link>
                <Link href="/faq/labs" className="block rounded-lg bg-white border border-blue-200 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">❓</span>
                    <div>
                      <div className="font-semibold text-gray-900">Labs FAQ</div>
                      <div className="text-sm text-gray-600 mt-1">Fasting, accuracy, interpreting results</div>
                    </div>
                  </div>
                </Link>
                <Link href="/guides/best-at-home-lab-tests" className="block rounded-lg bg-white border border-blue-200 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🏆</span>
                    <div>
                      <div className="font-semibold text-gray-900">Best At-Home Lab Tests</div>
                      <div className="text-sm text-gray-600 mt-1">Top kits compared on panels, price, and turnaround</div>
                    </div>
                  </div>
                </Link>
                <Link href="/guides/cheapest-blood-test-panels" className="block rounded-lg bg-white border border-blue-200 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💰</span>
                    <div>
                      <div className="font-semibold text-gray-900">Cheapest Blood Test Panels</div>
                      <div className="text-sm text-gray-600 mt-1">Lowest cash-pay panels and where to order them</div>
                    </div>
                  </div>
                </Link>
                <Link href="/guides/quest-vs-labcorp-pricing" className="block rounded-lg bg-white border border-blue-200 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">⚖️</span>
                    <div>
                      <div className="font-semibold text-gray-900">Quest vs Labcorp Pricing</div>
                      <div className="text-sm text-gray-600 mt-1">How the two major labs compare on cash-pay cost</div>
                    </div>
                  </div>
                </Link>
                <Link href="/guides/are-at-home-blood-tests-accurate" className="block rounded-lg bg-white border border-blue-200 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🔬</span>
                    <div>
                      <div className="font-semibold text-gray-900">Are At-Home Blood Tests Accurate?</div>
                      <div className="text-sm text-gray-600 mt-1">What the evidence says on reliability and limits</div>
                    </div>
                  </div>
                </Link>
                <Link href="/guides/how-to-read-blood-test-results" className="block rounded-lg bg-white border border-blue-200 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📊</span>
                    <div>
                      <div className="font-semibold text-gray-900">How to Read Blood Test Results</div>
                      <div className="text-sm text-gray-600 mt-1">Reference ranges and what common markers mean</div>
                    </div>
                  </div>
                </Link>
                <Link href="/guides/at-home-thyroid-test" className="block rounded-lg bg-white border border-blue-200 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🦋</span>
                    <div>
                      <div className="font-semibold text-gray-900">At-Home Thyroid Test</div>
                      <div className="text-sm text-gray-600 mt-1">TSH, T3, and T4 testing from home and what to expect</div>
                    </div>
                  </div>
                </Link>
                <Link href="/guides/everlywell-review" className="block rounded-lg bg-white border border-blue-200 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📝</span>
                    <div>
                      <div className="font-semibold text-gray-900">Everlywell Review</div>
                      <div className="text-sm text-gray-600 mt-1">Panels, pricing, and accuracy of the at-home kits</div>
                    </div>
                  </div>
                </Link>
                <Link href="/guides/function-health-review" className="block rounded-lg bg-white border border-blue-200 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📝</span>
                    <div>
                      <div className="font-semibold text-gray-900">Function Health Review</div>
                      <div className="text-sm text-gray-600 mt-1">The 100+ biomarker membership, tested and priced</div>
                    </div>
                  </div>
                </Link>
              </>
            )}
            {categorySlug === 'bariatric' && (
              <>
                <Link href="/guides/gastric-sleeve-mexico-safety" className="block rounded-lg bg-white border border-green-200 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📖</span>
                    <div>
                      <div className="font-semibold text-gray-900">Gastric Sleeve Safety Guide</div>
                      <div className="text-sm text-gray-600 mt-1">Safety data, complications, and expectations</div>
                    </div>
                  </div>
                </Link>
                <Link href="/guides/mexico-medical-tourism-planner" className="block rounded-lg bg-white border border-green-200 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✈️</span>
                    <div>
                      <div className="font-semibold text-gray-900">Mexico Trip Planner</div>
                      <div className="text-sm text-gray-600 mt-1">Border crossing, packing, and timeline</div>
                    </div>
                  </div>
                </Link>
              </>
            )}
            {categorySlug === 'dexa' && (
              <>
                <Link href="/guides/dexa-scan-guide" className="block rounded-lg bg-white border border-blue-200 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📖</span>
                    <div>
                      <div className="font-semibold text-gray-900">DEXA Scan Complete Guide</div>
                      <div className="text-sm text-gray-600 mt-1">What DEXA measures, why it beats BMI, and how to use it</div>
                    </div>
                  </div>
                </Link>
                <Link href="/guides/cheapest-dexa-scan" className="block rounded-lg bg-white border border-blue-200 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💰</span>
                    <div>
                      <div className="font-semibold text-gray-900">Cheapest DEXA Scan</div>
                      <div className="text-sm text-gray-600 mt-1">Lowest cash-pay options and how to find them near you</div>
                    </div>
                  </div>
                </Link>
                <Link href="/guides/are-dexa-scans-worth-it" className="block rounded-lg bg-white border border-blue-200 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🤔</span>
                    <div>
                      <div className="font-semibold text-gray-900">Are DEXA Scans Worth It?</div>
                      <div className="text-sm text-gray-600 mt-1">When the cost makes sense for tracking body composition</div>
                    </div>
                  </div>
                </Link>
                <Link href="/guides/dexa-vs-inbody-vs-bodpod" className="block rounded-lg bg-white border border-blue-200 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">⚖️</span>
                    <div>
                      <div className="font-semibold text-gray-900">DEXA vs InBody vs BodPod</div>
                      <div className="text-sm text-gray-600 mt-1">Accuracy, cost, and access of the three methods compared</div>
                    </div>
                  </div>
                </Link>
                <Link href="/guides/dexafit-cost" className="block rounded-lg bg-white border border-blue-200 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🏷️</span>
                    <div>
                      <div className="font-semibold text-gray-900">DexaFit Cost</div>
                      <div className="text-sm text-gray-600 mt-1">DexaFit pricing, memberships, and what is included</div>
                    </div>
                  </div>
                </Link>
              </>
            )}
            {(categorySlug === 'dental' || categorySlug === 'plastic_surgery' || categorySlug === 'fertility') && (
              <>
                <Link href="/guides/mexico-medical-tourism-planner" className="block rounded-lg bg-white border border-purple-200 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✈️</span>
                    <div>
                      <div className="font-semibold text-gray-900">Mexico Trip Planner</div>
                      <div className="text-sm text-gray-600 mt-1">Complete border crossing and planning guide</div>
                    </div>
                  </div>
                </Link>
                <Link href="/faq/medical-tourism" className="block rounded-lg bg-white border border-purple-200 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">❓</span>
                    <div>
                      <div className="font-semibold text-gray-900">Medical Tourism FAQ</div>
                      <div className="text-sm text-gray-600 mt-1">Safety, insurance, and planning questions</div>
                    </div>
                  </div>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* DEXA FAQ — visible block mirrors the FAQPage schema above exactly */}
        {isDexa && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div>
              {DEXA_FAQ_ITEMS.map((item) => (
                <details key={item.question} className="group border-b border-gray-200 py-5">
                  <summary className="flex cursor-pointer items-start justify-between text-base font-semibold text-gray-900 hover:text-blue-600">
                    <span className="pr-4">{item.question}</span>
                    <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-3 text-sm text-gray-700">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        )}
      </section>

      {isDexa && <MedicalDisclaimer />}

        </div>
      </div>

      <Footer />
    </main>
  );
}
