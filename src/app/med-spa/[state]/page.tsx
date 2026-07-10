import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import { getMedspaClinicsByState, getMedspaCitiesWithClinics, medspaStateMetadata } from '@/data/medspa-clinics-index';
import { MEDSPA_STATES } from '@/lib/medspa-clinic-types';

interface Props {
  params: Promise<{ state: string }>;
}

export async function generateStaticParams() {
  // Only states with >=1 shippable city render a page (others notFound()).
  return MEDSPA_STATES.filter((state) => getMedspaCitiesWithClinics(state.slug).length > 0).map(
    (state) => ({ state: state.slug }),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const stateInfo = MEDSPA_STATES.find((s) => s.slug === stateSlug);
  if (!stateInfo) return { title: 'State Not Found' };
  const clinics = getMedspaClinicsByState(stateSlug);
  return {
    title: `${stateInfo.name} Med Spas: Botox, Fillers & Laser by City`,
    description: `Find med-spa and aesthetics providers in ${stateInfo.name}. Botox, fillers, laser hair removal, and body contouring in ${stateInfo.cities.slice(0, 3).join(', ')}. Compare ${clinics.length}+ listings.`,
    alternates: { canonical: `/med-spa/${stateSlug}` },
    // Thin-content guard: states with < 3 clinics stay out of the index.
    ...(clinics.length < 3 ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function StateMedspa({ params }: Props) {
  const { state: stateSlug } = await params;
  const stateInfo = MEDSPA_STATES.find((s) => s.slug === stateSlug);
  if (!stateInfo) notFound();

  const clinics = getMedspaClinicsByState(stateSlug);
  const cities = getMedspaCitiesWithClinics(stateSlug);
  const meta = medspaStateMetadata[stateSlug] || { heroColor: 'rose', description: '' };

  if (clinics.length === 0 || cities.length === 0) notFound();

  const colorClasses: Record<string, { bg: string; badge: string }> = {
    red: { bg: 'from-red-50', badge: 'bg-red-100 text-red-800' },
    blue: { bg: 'from-blue-50', badge: 'bg-blue-100 text-blue-800' },
    rose: { bg: 'from-rose-50', badge: 'bg-rose-100 text-rose-800' },
  };
  const colors = colorClasses[meta.heroColor] || colorClasses.rose;
  const dotColor = meta.heroColor === 'red' ? '#ef4444' : meta.heroColor === 'blue' ? '#3b82f6' : '#f43f5e';

  const shippableCitySlugs = new Set(cities.map((c) => c.citySlug));
  const shippableClinics = clinics.filter((c) => shippableCitySlugs.has(c.citySlug));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: `${stateInfo.name} Med Spas`,
    description: `Directory of med-spa and aesthetics providers in ${stateInfo.name}`,
    author: { '@type': 'Organization', name: 'VitalityScout' },
    dateModified: '2026-06-13',
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <SidebarShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className={`bg-gradient-to-b ${colors.bg} to-white px-4 py-12`}>
        <div className="mx-auto max-w-4xl">
          <Link href="/med-spa" className="text-sm text-rose-600 hover:underline mb-4 inline-block">
            &larr; Med Spas Near You
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Med Spas in {stateInfo.name}</h1>
          <p className="text-xl text-gray-600 mb-6">{meta.description}</p>

          <div className="flex flex-wrap gap-3 mb-6">
            {cities.map((city) => (
              <Link
                key={city.citySlug}
                href={`/med-spa/${stateSlug}/${city.citySlug}`}
                className={`px-3 py-1.5 rounded-full text-sm font-medium ${colors.badge} hover:opacity-80`}
              >
                {city.city} ({city.count})
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-rose-100 text-rose-800 px-3 py-1.5 rounded-full font-medium">
              {shippableClinics.length} Listings
            </span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1.5 rounded-full font-medium">Injectables</span>
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-full font-medium">Laser &amp; Body</span>
          </div>
        </div>
      </section>

      {/* Clinics by City */}
      {cities.map((city) => {
        const cityClinics = clinics.filter((c) => c.citySlug === city.citySlug);
        return (
          <section key={city.citySlug} id={city.citySlug} className="mx-auto max-w-6xl px-4 py-10 border-b border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: dotColor }}></span>
                {city.city}
              </h2>
              <Link href={`/med-spa/${stateSlug}/${city.citySlug}`} className="text-sm font-medium text-rose-600 hover:text-rose-700">
                View all {city.city} providers →
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {cityClinics.map((clinic) => (
                <div key={clinic.slug} className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900">{clinic.name}</h3>
                    {clinic.chain && <span className="text-xs px-2 py-0.5 rounded bg-rose-50 text-rose-700">Chain</span>}
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{clinic.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {clinic.services.slice(0, 4).map((svc) => (
                      <span key={svc} className="text-xs bg-rose-100 text-rose-800 px-2 py-0.5 rounded">{svc}</span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                    <span className="text-sm font-semibold text-rose-600">{clinic.priceRange}</span>
                    <a href={clinic.website} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-rose-600 hover:text-rose-700">
                      Find locations →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      <MedicalDisclaimer />
      </SidebarShell>
      <Footer />
    </main>
  );
}
