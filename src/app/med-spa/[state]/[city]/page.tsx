import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import { getMedspaClinicsByCity, getMedspaCitiesWithClinics } from '@/data/medspa-clinics-index';
import { MEDSPA_STATES } from '@/lib/medspa-clinic-types';

interface Props {
  params: Promise<{ state: string; city: string }>;
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
  return {
    title: `Med Spas in ${cityName}: Botox, Fillers & Laser Hair Removal`,
    description: `Find ${clinics.length}+ med-spa and aesthetics providers in ${cityName}, ${stateInfo.name}. Botox, dermal fillers, laser hair removal, microneedling, body contouring, and IV therapy — with typical cash-pay costs.`,
    alternates: { canonical: `/med-spa/${stateSlug}/${citySlug}` },
    // Thin-content guard: cities with < 3 clinics stay out of the index.
    ...(clinics.length < 3 ? { robots: { index: false, follow: true } } : {}),
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: `${cityName} Med Spas`,
    description: `Directory of med-spa and aesthetics providers in ${cityName}, ${stateInfo.name}`,
    author: { '@type': 'Organization', name: 'VitalityScout' },
    dateModified: '2026-06-13',
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <SidebarShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Med-Spa &amp; Aesthetics Providers in {cityName}</h2>
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
                  <div className="text-lg font-bold text-rose-600 mb-1">{clinic.priceRange}</div>
                  <div className="text-xs text-gray-400 mb-2">estimate — verify with provider</div>
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
