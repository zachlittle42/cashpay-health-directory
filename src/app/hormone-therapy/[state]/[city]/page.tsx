import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getHormoneClinicsByCity, getCitiesWithClinics } from '@/data/hormone-clinics-index';
import { HORMONE_STATES } from '@/lib/hormone-clinic-types';

interface Props {
  params: Promise<{ state: string; city: string }>;
}

export async function generateStaticParams() {
  const params: { state: string; city: string }[] = [];

  for (const state of HORMONE_STATES) {
    const cities = getCitiesWithClinics(state.slug);
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
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state: stateSlug, city: citySlug } = await params;
  const stateInfo = HORMONE_STATES.find(s => s.slug === stateSlug);

  if (!stateInfo) {
    return { title: 'Not Found | VitalityScout' };
  }

  const clinics = getHormoneClinicsByCity(stateSlug, citySlug);
  const cityName = clinics.length > 0 ? clinics[0].city : formatCityName(citySlug);

  return {
    title: `${cityName} TRT & HRT Clinics: ${clinics.length} Hormone Therapy Options | VitalityScout`,
    description: `Find hormone therapy clinics in ${cityName}, ${stateInfo.name}. Compare ${clinics.length} TRT and HRT clinics with prices, reviews, and services.`,
  };
}

export default async function CityHormoneTherapy({ params }: Props) {
  const { state: stateSlug, city: citySlug } = await params;
  const stateInfo = HORMONE_STATES.find(s => s.slug === stateSlug);

  if (!stateInfo) {
    notFound();
  }

  const clinics = getHormoneClinicsByCity(stateSlug, citySlug);
  const allCities = getCitiesWithClinics(stateSlug);

  if (clinics.length === 0) {
    notFound();
  }

  const cityName = clinics[0].city;
  const mensClinics = clinics.filter(c => c.menOnly);
  const womensClinics = clinics.filter(c => c.womenOnly);
  const bothClinics = clinics.filter(c => !c.menOnly && !c.womenOnly);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: `${cityName} Hormone Therapy Clinics`,
    description: `Directory of TRT and HRT clinics in ${cityName}, ${stateInfo.name}`,
    author: { '@type': 'Organization', name: 'VitalityScout' },
    dateModified: '2026-02-01',
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="flex gap-2 text-sm text-gray-500 mb-4">
            <Link href="/hormone-therapy" className="hover:text-purple-600">Hormone Therapy</Link>
            <span>/</span>
            <Link href={`/hormone-therapy/${stateSlug}`} className="hover:text-purple-600">{stateInfo.name}</Link>
            <span>/</span>
            <span className="text-gray-900">{cityName}</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            TRT & HRT Clinics in {cityName}
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Compare {clinics.length} hormone therapy clinics in {cityName}, {stateInfo.name}.
            Find testosterone replacement, HRT, and bioidentical hormone options.
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-purple-100 text-purple-800 px-3 py-1.5 rounded-full font-medium">
              {clinics.length} Clinics
            </span>
            {mensClinics.length > 0 && (
              <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full font-medium">
                {mensClinics.length} Men&apos;s
              </span>
            )}
            {womensClinics.length > 0 && (
              <span className="bg-pink-100 text-pink-800 px-3 py-1.5 rounded-full font-medium">
                {womensClinics.length} Women&apos;s
              </span>
            )}
            {bothClinics.length > 0 && (
              <span className="bg-green-100 text-green-800 px-3 py-1.5 rounded-full font-medium">
                {bothClinics.length} All Genders
              </span>
            )}
          </div>
        </div>
      </section>

      {/* All Clinics */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">All Hormone Clinics in {cityName}</h2>

        <div className="space-y-6">
          {clinics.map((clinic) => (
            <div key={clinic.slug} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{clinic.name}</h3>
                    <div className="flex gap-1">
                      {clinic.menOnly && (
                        <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-800">Men Only</span>
                      )}
                      {clinic.womenOnly && (
                        <span className="text-xs px-2 py-0.5 rounded bg-pink-100 text-pink-800">Women Only</span>
                      )}
                      {!clinic.menOnly && !clinic.womenOnly && (
                        <span className="text-xs px-2 py-0.5 rounded bg-green-100 text-green-800">Men & Women</span>
                      )}
                      {clinic.telehealth && (
                        <span className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-700">Telehealth</span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 mb-2">{clinic.address}</p>
                  <p className="text-gray-600 mb-4">{clinic.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {clinic.services.map((service) => (
                      <span key={service} className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded uppercase font-medium">
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    {clinic.highlights.map((h) => (
                      <span key={h} className="flex items-center gap-1">
                        <span className="text-purple-500">✓</span> {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:text-right md:min-w-[200px]">
                  <div className="text-2xl font-bold text-green-600 mb-1">{clinic.priceRange}</div>
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
                      className="block text-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium"
                    >
                      Visit Website
                    </a>
                    {clinic.phone && (
                      <a
                        href={`tel:${clinic.phone}`}
                        className="block text-center px-4 py-2 border border-gray-200 rounded-lg hover:border-purple-400 font-medium"
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
              .filter(c => c.citySlug !== citySlug)
              .map((city) => (
                <Link
                  key={city.citySlug}
                  href={`/hormone-therapy/${stateSlug}/${city.citySlug}`}
                  className="px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-purple-400 text-sm font-medium"
                >
                  {city.city} ({city.count})
                </Link>
              ))}
            <Link
              href={`/hormone-therapy/${stateSlug}`}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm font-medium"
            >
              All {stateInfo.name} Clinics
            </Link>
          </div>
        </div>
      </section>

      {/* Consider Telehealth */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h2 className="text-xl font-bold text-blue-900 mb-3">Consider Telehealth TRT</h2>
          <p className="text-blue-800 mb-4">
            Can&apos;t find the right clinic in {cityName}? Telehealth TRT providers like Marek Health,
            Fountain TRT, and Hone Health serve most of {stateInfo.name} with at-home labs and meds shipped to your door.
          </p>
          <Link
            href="/trt"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
          >
            Compare Telehealth TRT Options →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
