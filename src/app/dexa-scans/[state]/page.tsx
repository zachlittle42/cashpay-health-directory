import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import { getDexaClinicsByState, getDexaCitiesWithClinics, dexaStateMetadata } from '@/data/dexa-clinics-index';
import { DEXA_STATES } from '@/lib/dexa-clinic-types';

interface Props {
  params: Promise<{ state: string }>;
}

export async function generateStaticParams() {
  return DEXA_STATES.map((state) => ({
    state: state.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const stateInfo = DEXA_STATES.find((s) => s.slug === stateSlug);

  if (!stateInfo) {
    return { title: 'State Not Found' };
  }

  const clinics = getDexaClinicsByState(stateSlug);

  return {
    title: `${stateInfo.name} DEXA Scan Clinics: ${clinics.length}+ Body Composition Studios`,
    description: `Find DEXA scan and body-composition clinics in ${stateInfo.name}. Mobile units, premium studios, and research-grade options in ${stateInfo.cities.slice(0, 3).join(', ')}. Compare prices and reviews.`,
  };
}

export default async function StateDexa({ params }: Props) {
  const { state: stateSlug } = await params;
  const stateInfo = DEXA_STATES.find((s) => s.slug === stateSlug);

  if (!stateInfo) {
    notFound();
  }

  const clinics = getDexaClinicsByState(stateSlug);
  const cities = getDexaCitiesWithClinics(stateSlug);
  const meta = dexaStateMetadata[stateSlug] || { heroColor: 'blue', description: '' };

  if (clinics.length === 0 || cities.length === 0) {
    notFound();
  }

  const colorClasses: Record<string, { bg: string; badge: string }> = {
    red: { bg: 'from-red-50', badge: 'bg-red-100 text-red-800' },
    blue: { bg: 'from-blue-50', badge: 'bg-blue-100 text-blue-800' },
    orange: { bg: 'from-orange-50', badge: 'bg-orange-100 text-orange-800' },
    green: { bg: 'from-green-50', badge: 'bg-green-100 text-green-800' },
  };

  const colors = colorClasses[meta.heroColor] || colorClasses.blue;
  const dotColor =
    meta.heroColor === 'red' ? '#ef4444' : meta.heroColor === 'orange' ? '#f97316' : meta.heroColor === 'green' ? '#22c55e' : '#3b82f6';

  // Only count clinics in shippable (>=3) cities for the headline total.
  const shippableCitySlugs = new Set(cities.map((c) => c.citySlug));
  const shippableClinics = clinics.filter((c) => shippableCitySlugs.has(c.citySlug));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: `${stateInfo.name} DEXA Scan Clinics`,
    description: `Directory of DEXA scan and body-composition clinics in ${stateInfo.name}`,
    author: { '@type': 'Organization', name: 'VitalityScout' },
    dateModified: '2026-06-10',
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <SidebarShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className={`bg-gradient-to-b ${colors.bg} to-white px-4 py-12`}>
        <div className="mx-auto max-w-4xl">
          <Link href="/dexa-scans" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; DEXA Scans Near You
          </Link>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            DEXA Scan Clinics in {stateInfo.name}
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            {meta.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            {cities.map((city) => (
              <Link
                key={city.citySlug}
                href={`/dexa-scans/${stateSlug}/${city.citySlug}`}
                className={`px-3 py-1.5 rounded-full text-sm font-medium ${colors.badge} hover:opacity-80`}
              >
                {city.city} ({city.count})
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full font-medium">
              {shippableClinics.length} Total Clinics
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
              <Link
                href={`/dexa-scans/${stateSlug}/${city.citySlug}`}
                className="text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                View all {city.city} clinics →
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {cityClinics.map((clinic) => (
                <div key={clinic.slug} className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900">{clinic.name}</h3>
                    {clinic.mobile && (
                      <span className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-700">Mobile</span>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 mb-3">{clinic.description}</p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {clinic.scanTypes.slice(0, 4).map((scan) => (
                      <span key={scan} className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                        {scan}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {clinic.highlights.slice(0, 3).map((h) => (
                      <span key={h} className="text-xs text-blue-700">• {h}</span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                    <div>
                      <span className="text-sm font-semibold text-blue-600">{clinic.priceRange}</span>
                      {clinic.rating && (
                        <span className="ml-2 text-xs text-gray-500">
                          ★ {clinic.rating} ({clinic.reviewCount} reviews)
                        </span>
                      )}
                    </div>
                    <a
                      href={clinic.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-blue-600 hover:text-blue-700"
                    >
                      Website →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="rounded-lg p-8 text-center" style={{ backgroundColor: meta.heroColor === 'red' ? '#fef2f2' : meta.heroColor === 'orange' ? '#fff7ed' : meta.heroColor === 'green' ? '#f0fdf4' : '#eff6ff' }}>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Compare DEXA Providers</h2>
          <p className="text-gray-600 mb-6">
            Read how BodySpec mobile units stack up against DexaFit studios, then browse the national comparison.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/guides/bodyspec-vs-dexafit"
              className="px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-blue-400 text-sm font-medium"
            >
              BodySpec vs DexaFit
            </Link>
            <Link
              href="/dexa"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
            >
              Compare DEXA Nationally
            </Link>
            <Link
              href="/dexa-scans"
              className="px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-blue-400 text-sm font-medium"
            >
              DEXA Scans Near You
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
