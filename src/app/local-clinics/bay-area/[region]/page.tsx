import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BAYAREA_REGIONS, getRegionBySlug, LocalClinic } from '@/lib/bayarea-clinics-data';

// Generate static params for all regions
export function generateStaticParams() {
  return BAYAREA_REGIONS.map((region) => ({
    region: region.slug,
  }));
}

// Generate metadata for each region
export function generateMetadata({ params }: { params: { region: string } }): Metadata {
  const region = getRegionBySlug(params.region);

  if (!region) {
    return { title: 'Region Not Found' };
  }

  return {
    title: `${region.name} Cash-Pay Clinics: DEXA, IV Therapy, Longevity | VitalityScout`,
    description: `Find cash-pay health clinics in ${region.cities.slice(0, 3).join(', ')}. ${region.clinics.length} clinics offering DEXA scans, IV therapy, longevity services. No insurance needed.`,
    keywords: [
      `DEXA scan ${region.cities[0]}`,
      `IV therapy ${region.name}`,
      `longevity clinic ${region.cities[0]}`,
      `cash pay health ${region.name}`,
    ],
  };
}

// Category display helpers
const categoryLabels: Record<string, { label: string; icon: string; color: string }> = {
  dexa: { label: 'DEXA / Body Composition', icon: '📊', color: 'green' },
  vo2: { label: 'VO2 Max Testing', icon: '🫀', color: 'blue' },
  iv: { label: 'IV Therapy', icon: '💧', color: 'purple' },
  longevity: { label: 'Longevity Clinics', icon: '⏳', color: 'indigo' },
  performance: { label: 'Sports Performance', icon: '🏃', color: 'orange' },
  labs: { label: 'Labs & Testing', icon: '🧪', color: 'teal' },
  wellness: { label: 'Wellness Centers', icon: '✨', color: 'pink' },
};

function ClinicCard({ clinic }: { clinic: LocalClinic }) {
  const cat = categoryLabels[clinic.category] || { label: clinic.category, icon: '🏥', color: 'gray' };

  return (
    <div className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-gray-300 hover:shadow-lg transition-all">
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span>{cat.icon}</span>
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full bg-${cat.color}-100 text-${cat.color}-700`}>
              {cat.label}
            </span>
          </div>
          <h3 className="text-lg font-bold text-gray-900">{clinic.name}</h3>
        </div>
        {clinic.rating && (
          <div className="text-right">
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">★</span>
              <span className="font-semibold text-gray-900">{clinic.rating}</span>
            </div>
            {clinic.reviewCount && (
              <div className="text-xs text-gray-500">
                {clinic.reviewCount} reviews
              </div>
            )}
          </div>
        )}
      </div>

      <p className="text-sm text-gray-500 mb-2">
        {clinic.neighborhoods.join(' • ')}
      </p>

      <p className="text-sm text-gray-600 mb-3">{clinic.description}</p>

      <div className="flex flex-wrap gap-1 mb-3">
        {clinic.services.slice(0, 4).map((service) => (
          <span key={service} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
            {service}
          </span>
        ))}
        {clinic.services.length > 4 && (
          <span className="text-xs text-gray-500">+{clinic.services.length - 4} more</span>
        )}
      </div>

      <div className="flex flex-wrap gap-1 mb-4">
        {clinic.highlights.slice(0, 3).map((h) => (
          <span key={h} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
            {h}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div>
          <div className="text-lg font-bold text-green-600">{clinic.priceRange}</div>
          <div className="text-xs text-gray-500">Best for: {clinic.bestFor}</div>
        </div>
        <a
          href={clinic.website.startsWith('http') ? clinic.website : `https://${clinic.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition"
        >
          Visit Site →
        </a>
      </div>
    </div>
  );
}

export default function RegionPage({ params }: { params: { region: string } }) {
  const region = getRegionBySlug(params.region);

  if (!region) {
    notFound();
  }

  // Group clinics by category
  const clinicsByCategory = region.clinics.reduce((acc, clinic) => {
    if (!acc[clinic.category]) {
      acc[clinic.category] = [];
    }
    acc[clinic.category].push(clinic);
    return acc;
  }, {} as Record<string, LocalClinic[]>);

  // Order categories
  const categoryOrder = ['dexa', 'vo2', 'iv', 'longevity', 'performance', 'labs', 'wellness'];
  const sortedCategories = categoryOrder.filter(cat => clinicsByCategory[cat]);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: `${region.name} Cash-Pay Health Clinics`,
    description: region.description,
    url: `https://vitalityscout.com/local-clinics/bay-area/${region.slug}`,
    author: { '@type': 'Organization', name: 'VitalityScout' },
    dateModified: '2026-01-03',
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">→</span>
              <Link href="/local-clinics" className="hover:text-blue-600">Local Clinics</Link>
              <span className="mx-2">→</span>
              <Link href="/local-clinics/bay-area" className="hover:text-blue-600">Bay Area</Link>
              <span className="mx-2">→</span>
              <span className="text-gray-900">{region.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🌉</span>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                {region.clinics.length} Clinics
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Cash-Pay Clinics in {region.name}
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              {region.description}
            </p>

            <div className="flex flex-wrap gap-2 text-sm">
              {region.cities.map((city) => (
                <span key={city} className="bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-full">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Jump */}
        <section className="mx-auto max-w-6xl px-4 py-6">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-gray-500 py-2">Jump to:</span>
            {sortedCategories.map((cat) => {
              const catInfo = categoryLabels[cat];
              return (
                <a
                  key={cat}
                  href={`#${cat}`}
                  className="text-sm bg-gray-100 text-gray-700 px-3 py-2 rounded-full hover:bg-gray-200 transition"
                >
                  {catInfo.icon} {catInfo.label} ({clinicsByCategory[cat].length})
                </a>
              );
            })}
          </div>
        </section>

        {/* Clinics by Category */}
        {sortedCategories.map((category) => {
          const catInfo = categoryLabels[category];
          const clinics = clinicsByCategory[category];

          return (
            <section key={category} id={category} className="mx-auto max-w-6xl px-4 py-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{catInfo.icon}</span>
                <h2 className="text-2xl font-bold text-gray-900">{catInfo.label}</h2>
                <span className="text-sm text-gray-500">({clinics.length} options)</span>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {clinics.map((clinic) => (
                  <ClinicCard key={clinic.slug} clinic={clinic} />
                ))}
              </div>
            </section>
          );
        })}

        {/* Other Regions */}
        <section className="bg-gray-50 px-4 py-12">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore Other Regions</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {BAYAREA_REGIONS.filter(r => r.slug !== region.slug).map((r) => (
                <Link
                  key={r.slug}
                  href={`/local-clinics/bay-area/${r.slug}`}
                  className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-lg hover:border-blue-300 transition"
                >
                  <div className="font-semibold text-gray-900 mb-1">{r.name}</div>
                  <div className="text-sm text-gray-500">{r.clinics.length} clinics</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link href="/guides/bodyspec-vs-dexafit" className="group flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
              <span className="text-2xl">📊</span>
              <div>
                <div className="font-medium text-gray-900 group-hover:text-blue-600">BodySpec vs DexaFit</div>
                <div className="text-sm text-gray-500">Compare DEXA providers</div>
              </div>
            </Link>
            <Link href="/guides/dexa-scan-guide" className="group flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
              <span className="text-2xl">📖</span>
              <div>
                <div className="font-medium text-gray-900 group-hover:text-blue-600">DEXA Scan Guide</div>
                <div className="text-sm text-gray-500">Understand your results</div>
              </div>
            </Link>
            <Link href="/longevity/california" className="group flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
              <span className="text-2xl">⏳</span>
              <div>
                <div className="font-medium text-gray-900 group-hover:text-blue-600">CA Longevity Clinics</div>
                <div className="text-sm text-gray-500">Full state guide</div>
              </div>
            </Link>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mx-auto max-w-6xl px-4 pb-12">
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-6">
            <h3 className="font-semibold text-gray-800 mb-2">Disclaimer</h3>
            <p className="text-sm text-gray-600">
              This directory is for informational purposes only. Prices, availability, and services may change—always verify directly with providers before booking.
              We are not affiliated with any listed clinic. Ratings are from public sources ({region.clinics[0]?.reviewSource || 'Google'}) and may not reflect current status.
              Some services may not be FDA-approved for marketed uses. Consult with qualified healthcare providers before pursuing any treatment.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
