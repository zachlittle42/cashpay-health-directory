import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getHormoneClinicsByState, getCitiesWithClinics, stateMetadata } from '@/data/hormone-clinics-index';
import { HORMONE_STATES } from '@/lib/hormone-clinic-types';

interface Props {
  params: Promise<{ state: string }>;
}

export async function generateStaticParams() {
  return HORMONE_STATES.map((state) => ({
    state: state.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const stateInfo = HORMONE_STATES.find(s => s.slug === stateSlug);

  if (!stateInfo) {
    return { title: 'State Not Found | VitalityScout' };
  }

  const clinics = getHormoneClinicsByState(stateSlug);

  return {
    title: `${stateInfo.name} TRT & HRT Clinics: ${clinics.length}+ Hormone Therapy Options | VitalityScout`,
    description: `Find hormone therapy clinics in ${stateInfo.name}. TRT for men, HRT for women. ${stateInfo.cities.slice(0, 3).join(', ')} and more. Compare prices, services, and reviews.`,
  };
}

export default async function StateHormoneTherapy({ params }: Props) {
  const { state: stateSlug } = await params;
  const stateInfo = HORMONE_STATES.find(s => s.slug === stateSlug);

  if (!stateInfo) {
    notFound();
  }

  const clinics = getHormoneClinicsByState(stateSlug);
  const cities = getCitiesWithClinics(stateSlug);
  const meta = stateMetadata[stateSlug] || { heroColor: 'purple', description: '' };

  if (clinics.length === 0) {
    notFound();
  }

  const mensClinics = clinics.filter(c => c.menOnly);
  const womensClinics = clinics.filter(c => c.womenOnly);
  const bothClinics = clinics.filter(c => !c.menOnly && !c.womenOnly);

  const colorClasses: Record<string, { bg: string; text: string; border: string; badge: string }> = {
    red: { bg: 'from-red-50', text: 'text-red-800', border: 'border-red-400', badge: 'bg-red-100 text-red-800' },
    blue: { bg: 'from-blue-50', text: 'text-blue-800', border: 'border-blue-400', badge: 'bg-blue-100 text-blue-800' },
    orange: { bg: 'from-orange-50', text: 'text-orange-800', border: 'border-orange-400', badge: 'bg-orange-100 text-orange-800' },
    purple: { bg: 'from-purple-50', text: 'text-purple-800', border: 'border-purple-400', badge: 'bg-purple-100 text-purple-800' },
  };

  const colors = colorClasses[meta.heroColor] || colorClasses.purple;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: `${stateInfo.name} Hormone Therapy Clinics`,
    description: `Directory of TRT and HRT clinics in ${stateInfo.name}`,
    author: { '@type': 'Organization', name: 'VitalityScout' },
    dateModified: '2026-02-01',
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className={`bg-gradient-to-b ${colors.bg} to-white px-4 py-12`}>
        <div className="mx-auto max-w-4xl">
          <Link href="/hormone-therapy" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Hormone Therapy Hub
          </Link>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hormone Therapy Clinics in {stateInfo.name}
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            {meta.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            {cities.map((city) => (
              <Link
                key={city.citySlug}
                href={`/hormone-therapy/${stateSlug}/${city.citySlug}`}
                className={`px-3 py-1.5 rounded-full text-sm font-medium ${colors.badge} hover:opacity-80`}
              >
                {city.city} ({city.count})
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-purple-100 text-purple-800 px-3 py-1.5 rounded-full font-medium">
              {clinics.length} Total Clinics
            </span>
            {mensClinics.length > 0 && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full font-medium">
                {mensClinics.length} Men&apos;s Clinics
              </span>
            )}
            {womensClinics.length > 0 && (
              <span className="bg-pink-100 text-pink-800 px-3 py-1.5 rounded-full font-medium">
                {womensClinics.length} Women&apos;s Clinics
              </span>
            )}
            {bothClinics.length > 0 && (
              <span className="bg-green-100 text-green-800 px-3 py-1.5 rounded-full font-medium">
                {bothClinics.length} Serve Both
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Clinics by City */}
      {cities.map((city) => {
        const cityClinics = clinics.filter(c => c.citySlug === city.citySlug);
        return (
          <section key={city.citySlug} id={city.citySlug} className="mx-auto max-w-6xl px-4 py-10 border-b border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full bg-${meta.heroColor}-500`} style={{ backgroundColor: meta.heroColor === 'red' ? '#ef4444' : meta.heroColor === 'blue' ? '#3b82f6' : meta.heroColor === 'orange' ? '#f97316' : '#a855f7' }}></span>
                {city.city}
              </h2>
              <Link
                href={`/hormone-therapy/${stateSlug}/${city.citySlug}`}
                className="text-sm font-medium text-purple-600 hover:text-purple-700"
              >
                View all {city.city} clinics →
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {cityClinics.map((clinic) => (
                <div key={clinic.slug} className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900">{clinic.name}</h3>
                    <div className="flex gap-1">
                      {clinic.menOnly && (
                        <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-800">Men</span>
                      )}
                      {clinic.womenOnly && (
                        <span className="text-xs px-2 py-0.5 rounded bg-pink-100 text-pink-800">Women</span>
                      )}
                      {!clinic.menOnly && !clinic.womenOnly && (
                        <span className="text-xs px-2 py-0.5 rounded bg-green-100 text-green-800">All</span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-3">{clinic.description}</p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {clinic.services.map((service) => (
                      <span key={service} className="text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-700 uppercase">
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {clinic.highlights.slice(0, 3).map((h) => (
                      <span key={h} className="text-xs text-purple-700">• {h}</span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                    <div>
                      <span className="text-sm font-semibold text-green-600">{clinic.priceRange}</span>
                      {clinic.rating && (
                        <span className="ml-2 text-xs text-gray-500">
                          ★ {clinic.rating} ({clinic.reviewCount} reviews)
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      {clinic.telehealth && (
                        <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded">Telehealth</span>
                      )}
                      <a
                        href={clinic.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-purple-600 hover:text-purple-700"
                      >
                        Website →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className={`bg-${meta.heroColor}-50 rounded-lg p-8 text-center`} style={{ backgroundColor: meta.heroColor === 'red' ? '#fef2f2' : meta.heroColor === 'blue' ? '#eff6ff' : meta.heroColor === 'orange' ? '#fff7ed' : '#faf5ff' }}>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Other States</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {HORMONE_STATES.filter(s => s.slug !== stateSlug).map((state) => (
              <Link
                key={state.slug}
                href={`/hormone-therapy/${state.slug}`}
                className="px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-purple-400 text-sm font-medium"
              >
                {state.name}
              </Link>
            ))}
            <Link
              href="/hormone-therapy"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm font-medium"
            >
              Hormone Hub
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
