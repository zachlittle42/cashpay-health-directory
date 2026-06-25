import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import { getDexaClinicsByCity, getDexaCitiesWithClinics } from '@/data/dexa-clinics-index';
import { DEXA_STATES } from '@/lib/dexa-clinic-types';

interface Props {
  params: Promise<{ state: string; city: string }>;
}

// City-specific DEXA cost guides, keyed by `${stateSlug}/${citySlug}`.
// When a city has a dedicated cost guide, the directory page links to it
// (reciprocal internal link — the guide already links back to this page).
const CITY_COST_GUIDES: Record<string, string> = {
  'new-york/new-york-city': 'dexa-scan-cost-new-york',
  'california/los-angeles': 'dexa-scan-cost-los-angeles',
  'california/san-francisco': 'dexa-scan-cost-san-francisco',
  'california/san-diego': 'dexa-scan-cost-san-diego',
  'california/orange-county': 'dexa-scan-cost-orange-county',
  'texas/houston': 'dexa-scan-cost-houston',
  'texas/austin': 'dexa-scan-cost-austin',
  'texas/dallas': 'dexa-scan-cost-dallas',
  'illinois/chicago': 'dexa-scan-cost-chicago',
  'arizona/phoenix': 'dexa-scan-cost-phoenix',
  'washington/seattle': 'dexa-scan-cost-seattle',
  'nevada/las-vegas': 'dexa-scan-cost-las-vegas',
  'florida/miami': 'dexa-scan-cost-miami',
  'colorado/denver': 'dexa-scan-cost-denver',
  'washington-dc/washington': 'dexa-scan-cost-washington-dc',
  'tennessee/nashville': 'dexa-scan-cost-nashville',
  'north-carolina/raleigh': 'dexa-scan-cost-raleigh',
  'massachusetts/boston': 'dexa-scan-cost-boston',
  'georgia/atlanta': 'dexa-scan-cost-atlanta',
};

export async function generateStaticParams() {
  const params: { state: string; city: string }[] = [];

  for (const state of DEXA_STATES) {
    const cities = getDexaCitiesWithClinics(state.slug);
    for (const city of cities) {
      params.push({
        state: state.slug,
        city: city.citySlug,
      });
    }
  }

  return params;
}

function formatCityName(citySlug: string): string {
  return citySlug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state: stateSlug, city: citySlug } = await params;
  const stateInfo = DEXA_STATES.find((s) => s.slug === stateSlug);

  if (!stateInfo) {
    return { title: 'Not Found' };
  }

  const clinics = getDexaClinicsByCity(stateSlug, citySlug);
  const cityName = clinics.length > 0 ? clinics[0].city : formatCityName(citySlug);

  return {
    title: `DEXA Scans in ${cityName}: ${clinics.length} Body Composition Clinics`,
    description: `Find DEXA scan and body-composition studios in ${cityName}, ${stateInfo.name}. Compare ${clinics.length} clinics — prices, mobile vs studio, RMR and VO2 max add-ons.`,
  };
}

export default async function CityDexa({ params }: Props) {
  const { state: stateSlug, city: citySlug } = await params;
  const stateInfo = DEXA_STATES.find((s) => s.slug === stateSlug);

  if (!stateInfo) {
    notFound();
  }

  const clinics = getDexaClinicsByCity(stateSlug, citySlug);
  const allCities = getDexaCitiesWithClinics(stateSlug);

  if (clinics.length === 0) {
    notFound();
  }

  const cityName = clinics[0].city;
  const cityCostGuide = CITY_COST_GUIDES[`${stateSlug}/${citySlug}`];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: `${cityName} DEXA Scan Clinics`,
    description: `Directory of DEXA scan and body-composition clinics in ${cityName}, ${stateInfo.name}`,
    author: { '@type': 'Organization', name: 'VitalityScout' },
    dateModified: '2026-06-10',
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-4">
            <Link href="/dexa" className="hover:text-blue-600">DEXA Scans</Link>
            <span>/</span>
            <Link href="/dexa-scans" className="hover:text-blue-600">Find Near You</Link>
            <span>/</span>
            <Link href={`/dexa-scans/${stateSlug}`} className="hover:text-blue-600">{stateInfo.name}</Link>
            <span>/</span>
            <span className="text-gray-900">{cityName}</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            DEXA Scans in {cityName}
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Compare {clinics.length} DEXA scan and body-composition clinics in {cityName}, {stateInfo.name}.
            Find affordable mobile units, premium studios with RMR and VO2 max, and research-grade options.
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full font-medium">
              {clinics.length} Clinics
            </span>
            <span className="bg-green-100 text-green-800 px-3 py-1.5 rounded-full font-medium">
              Body Composition
            </span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1.5 rounded-full font-medium">
              Bone Density
            </span>
          </div>
        </div>
      </section>

      {/* All Clinics */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">All DEXA Scan Clinics in {cityName}</h2>

        <div className="space-y-6">
          {clinics.map((clinic) => (
            <div key={clinic.slug} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{clinic.name}</h3>
                    {clinic.mobile && (
                      <span className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-700">Mobile Unit</span>
                    )}
                    {clinic.equipment && (
                      <span className="text-xs px-2 py-0.5 rounded bg-purple-50 text-purple-700">{clinic.equipment} equipment</span>
                    )}
                  </div>

                  {clinic.address && <p className="text-sm text-gray-500 mb-2">{clinic.address}</p>}
                  <p className="text-gray-600 mb-4">{clinic.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {clinic.scanTypes.map((scan) => (
                      <span key={scan} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">
                        {scan}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    {clinic.highlights.map((h) => (
                      <span key={h} className="flex items-center gap-1">
                        <span className="text-blue-500">✓</span> {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:text-right md:min-w-[200px]">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{clinic.priceRange}</div>
                  <div className="text-xs text-gray-400 mb-2">estimate — verify with provider</div>
                  {clinic.membership && (
                    <div className="text-sm text-gray-600 mb-2">{clinic.membership}</div>
                  )}
                  {clinic.rating && (
                    <div className="text-sm text-gray-600 mb-3">
                      <span className="text-yellow-500">★</span> {clinic.rating} ({clinic.reviewCount} {clinic.reviewSource} reviews)
                    </div>
                  )}
                  <div className="text-sm text-gray-500 mb-4">
                    Best for: {clinic.bestFor}
                  </div>
                  <div className="flex flex-col gap-2">
                    <a
                      href={clinic.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                    >
                      Visit Website
                    </a>
                    {clinic.phone && (
                      <a
                        href={`tel:${clinic.phone}`}
                        className="block text-center px-4 py-2 border border-gray-200 rounded-lg hover:border-blue-400 font-medium"
                      >
                        {clinic.phone}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Cities */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Other {stateInfo.name} Cities
          </h2>
          <div className="flex flex-wrap gap-3">
            {allCities
              .filter((c) => c.citySlug !== citySlug)
              .map((city) => (
                <Link
                  key={city.citySlug}
                  href={`/dexa-scans/${stateSlug}/${city.citySlug}`}
                  className="px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-blue-400 text-sm font-medium"
                >
                  {city.city} ({city.count})
                </Link>
              ))}
            <Link
              href={`/dexa-scans/${stateSlug}`}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
            >
              All {stateInfo.name} Clinics
            </Link>
          </div>
        </div>
      </section>

      {/* Compare BodySpec vs DexaFit cross-sell */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h2 className="text-xl font-bold text-blue-900 mb-3">BodySpec vs DexaFit: Which Should You Pick?</h2>
          <p className="text-blue-800 mb-4">
            Not sure which {cityName} option fits? BodySpec mobile units are the cheapest way to track body
            composition over time, while DexaFit studios bundle RMR and VO2 max for a fuller metabolic picture.
            Compare the national chains and read our DEXA scan guide before you book.
          </p>
          <div className="flex flex-wrap gap-3">
            {cityCostGuide && (
              <Link
                href={`/guides/${cityCostGuide}`}
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
              >
                {cityName} DEXA Cost Guide →
              </Link>
            )}
            <Link
              href="/guides/bodyspec-vs-dexafit"
              className={`inline-block px-4 py-2 rounded-lg font-medium ${cityCostGuide ? 'border border-blue-300 text-blue-700 hover:bg-blue-100' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            >
              BodySpec vs DexaFit →
            </Link>
            <Link
              href="/dexa"
              className="inline-block px-4 py-2 border border-blue-300 text-blue-700 rounded-lg hover:bg-blue-100 font-medium"
            >
              Compare DEXA Nationally →
            </Link>
            <Link
              href="/guides/dexa-scan-guide"
              className="inline-block px-4 py-2 border border-blue-300 text-blue-700 rounded-lg hover:bg-blue-100 font-medium"
            >
              Read the DEXA Scan Guide →
            </Link>
          </div>
        </div>
      </section>

      <MedicalDisclaimer />
      <Footer />
    </main>
  );
}
