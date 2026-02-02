import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getWeightLossClinicsByCity, getWeightLossCitiesWithClinics } from '@/data/weightloss-clinics-index';
import { WEIGHTLOSS_STATES } from '@/lib/weightloss-clinic-types';

interface Props {
  params: Promise<{ state: string; city: string }>;
}

export async function generateStaticParams() {
  const params: { state: string; city: string }[] = [];

  for (const state of WEIGHTLOSS_STATES) {
    const cities = getWeightLossCitiesWithClinics(state.slug);
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
  const stateInfo = WEIGHTLOSS_STATES.find(s => s.slug === stateSlug);

  if (!stateInfo) {
    return { title: 'Not Found | VitalityScout' };
  }

  const clinics = getWeightLossClinicsByCity(stateSlug, citySlug);
  const cityName = clinics.length > 0 ? clinics[0].city : formatCityName(citySlug);

  return {
    title: `${cityName} GLP-1 & Weight Loss Clinics: ${clinics.length} Options | VitalityScout`,
    description: `Find medical weight loss clinics in ${cityName}, ${stateInfo.name}. Compare ${clinics.length} GLP-1, semaglutide, and tirzepatide clinics with prices and reviews.`,
  };
}

export default async function CityWeightLoss({ params }: Props) {
  const { state: stateSlug, city: citySlug } = await params;
  const stateInfo = WEIGHTLOSS_STATES.find(s => s.slug === stateSlug);

  if (!stateInfo) {
    notFound();
  }

  const clinics = getWeightLossClinicsByCity(stateSlug, citySlug);
  const allCities = getWeightLossCitiesWithClinics(stateSlug);

  if (clinics.length === 0) {
    notFound();
  }

  const cityName = clinics[0].city;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: `${cityName} Weight Loss Clinics`,
    description: `Directory of GLP-1 and medical weight loss clinics in ${cityName}, ${stateInfo.name}`,
    author: { '@type': 'Organization', name: 'VitalityScout' },
    dateModified: '2026-02-01',
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="flex gap-2 text-sm text-gray-500 mb-4">
            <Link href="/weight-loss" className="hover:text-green-600">Weight Loss</Link>
            <span>/</span>
            <Link href={`/weight-loss/${stateSlug}`} className="hover:text-green-600">{stateInfo.name}</Link>
            <span>/</span>
            <span className="text-gray-900">{cityName}</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            GLP-1 Weight Loss Clinics in {cityName}
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Compare {clinics.length} medical weight loss clinics in {cityName}, {stateInfo.name}.
            Find semaglutide, tirzepatide, and comprehensive GLP-1 programs.
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <span className="bg-green-100 text-green-800 px-3 py-1.5 rounded-full font-medium">
              {clinics.length} Clinics
            </span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1.5 rounded-full font-medium">
              Semaglutide
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full font-medium">
              Tirzepatide
            </span>
          </div>
        </div>
      </section>

      {/* All Clinics */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">All Weight Loss Clinics in {cityName}</h2>

        <div className="space-y-6">
          {clinics.map((clinic) => (
            <div key={clinic.slug} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{clinic.name}</h3>
                    {clinic.telehealth && (
                      <span className="text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-700">Telehealth Available</span>
                    )}
                  </div>

                  <p className="text-sm text-gray-500 mb-2">{clinic.address}</p>
                  <p className="text-gray-600 mb-4">{clinic.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {clinic.medications.map((med) => (
                      <span key={med} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded font-medium">
                        {med}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                    {clinic.highlights.map((h) => (
                      <span key={h} className="flex items-center gap-1">
                        <span className="text-green-500">✓</span> {h}
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
                      className="block text-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
                    >
                      Visit Website
                    </a>
                    {clinic.phone && (
                      <a
                        href={`tel:${clinic.phone}`}
                        className="block text-center px-4 py-2 border border-gray-200 rounded-lg hover:border-green-400 font-medium"
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
                  href={`/weight-loss/${stateSlug}/${city.citySlug}`}
                  className="px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-green-400 text-sm font-medium"
                >
                  {city.city} ({city.count})
                </Link>
              ))}
            <Link
              href={`/weight-loss/${stateSlug}`}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-medium"
            >
              All {stateInfo.name} Clinics
            </Link>
          </div>
        </div>
      </section>

      {/* Telehealth Option */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h2 className="text-xl font-bold text-blue-900 mb-3">Consider Telehealth GLP-1</h2>
          <p className="text-blue-800 mb-4">
            Want more affordable options? Telehealth GLP-1 providers like Hims/Hers, Calibrate, and Found
            offer compounded semaglutide shipped to your door in {cityName} for less than most local clinics.
          </p>
          <Link
            href="/glp1"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
          >
            Compare Telehealth GLP-1 Options →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
