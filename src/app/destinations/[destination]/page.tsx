import Link from 'next/link';
import { notFound } from 'next/navigation';

// Sample destination data - would come from database
const DESTINATIONS = {
  mexico: {
    slug: 'mexico',
    country: 'Mexico',
    displayName: 'Mexico',
    flag: '🇲🇽',
    heroDescription: 'The #1 destination for American medical tourists. Border towns offer quick access, while resort cities combine treatment with vacation.',
    stats: {
      tourists: '1.2M+ Americans/year',
      savings: '50-80%',
      topProcedures: 'Dental, Bariatric, Plastic Surgery',
      flightTime: '2-5 hours',
    },
    whyGoHere: [
      'Closest destination for Americans - some clinics walkable from US border',
      'Largest volume of American medical tourists = experienced with US patients',
      'No visa required for US citizens',
      'Many US-trained doctors',
      'Spanish widely spoken, English common in medical tourism clinics',
    ],
    considerations: [
      'Quality varies widely - research is essential',
      'Border towns are functional, not luxurious',
      'Check travel advisories for specific regions',
      'Bring all medications you need (some harder to get)',
    ],
    topCities: [
      {
        name: 'Tijuana',
        description: 'Border city across from San Diego. Hub for bariatric surgery.',
        bestFor: ['Bariatric', 'Dental', 'Plastic Surgery'],
      },
      {
        name: 'Los Algodones',
        description: 'Tiny border town known as "Molar City". Walking distance from Arizona.',
        bestFor: ['Dental'],
      },
      {
        name: 'Cancun',
        description: 'Resort city combining treatment with beach vacation.',
        bestFor: ['Dental', 'Plastic Surgery'],
      },
      {
        name: 'Mexico City',
        description: 'Capital with top hospitals and specialists.',
        bestFor: ['Complex procedures', 'Specialty care'],
      },
    ],
    categories: ['dental', 'bariatric', 'plastic_surgery', 'vision'],
    practicalInfo: {
      visa: 'Not required for US citizens (up to 180 days)',
      currency: 'Mexican Peso (MXN). USD widely accepted in tourist areas.',
      language: 'Spanish. English common in medical tourism facilities.',
      timezone: 'Central to Pacific (same as US)',
    },
  },
  turkey: {
    slug: 'turkey',
    country: 'Turkey',
    displayName: 'Turkey',
    flag: '🇹🇷',
    heroDescription: 'The global capital of hair transplants. Istanbul clinics perform 40% of the world\'s hair restoration procedures.',
    stats: {
      tourists: '1M+ for hair transplants alone',
      savings: '60-80%',
      topProcedures: 'Hair Transplant, Dental, Plastic Surgery',
      flightTime: '10-12 hours',
    },
    whyGoHere: [
      'World leader in hair transplants - unmatched volume and experience',
      'All-inclusive packages standard (hotel, transfers, translator)',
      'Modern facilities with JCI accreditation',
      'Competitive pricing due to currency and competition',
      'Istanbul is a fascinating city to explore during recovery',
    ],
    considerations: [
      'Long flight from US (10-12 hours)',
      'High volume clinics can feel like factories',
      'Quality varies - research clinics carefully',
      'E-visa required (easy to get online)',
      'Language barrier outside medical facilities',
    ],
    topCities: [
      {
        name: 'Istanbul',
        description: 'Home to 90%+ of Turkey\'s medical tourism. Thousands of clinics.',
        bestFor: ['Hair Transplant', 'Dental', 'Plastic Surgery'],
      },
      {
        name: 'Antalya',
        description: 'Mediterranean resort city with growing medical tourism.',
        bestFor: ['Dental', 'Plastic Surgery'],
      },
    ],
    categories: ['hair_transplant', 'dental', 'plastic_surgery'],
    practicalInfo: {
      visa: 'E-visa required for US citizens ($50, online)',
      currency: 'Turkish Lira (TRY). USD/EUR accepted at clinics.',
      language: 'Turkish. English common in medical tourism facilities.',
      timezone: 'GMT+3 (7-8 hours ahead of US)',
    },
  },
  'south-korea': {
    slug: 'south-korea',
    country: 'South Korea',
    displayName: 'South Korea',
    flag: '🇰🇷',
    heroDescription: 'The world\'s plastic surgery capital. Seoul\'s Gangnam district has the highest concentration of cosmetic clinics globally.',
    stats: {
      tourists: '1.2M foreign patients (2024)',
      savings: '30-50%',
      topProcedures: 'Plastic Surgery, Dermatology, Dental',
      flightTime: '13-15 hours',
    },
    whyGoHere: [
      'Global leader in plastic surgery innovation and technique',
      'Highest per-capita plastic surgery rate in the world',
      'Advanced technology and meticulous attention to detail',
      'Strong aesthetic sensibility and natural-looking results',
      'K-beauty culture means dermatology is world-class too',
    ],
    considerations: [
      'Longest flight from US (13-15 hours)',
      'Savings less dramatic than other destinations (30-50%)',
      'Language barrier can be significant',
      'Beauty standards may differ from Western preferences',
      'Medical tourism agencies vary in quality',
    ],
    topCities: [
      {
        name: 'Seoul (Gangnam)',
        description: 'The global epicenter of plastic surgery. Hundreds of clinics in one district.',
        bestFor: ['Plastic Surgery', 'Dermatology'],
      },
    ],
    categories: ['plastic_surgery'],
    practicalInfo: {
      visa: 'Not required for US citizens (up to 90 days)',
      currency: 'Korean Won (KRW). Cards widely accepted.',
      language: 'Korean. English limited outside tourist areas.',
      timezone: 'GMT+9 (13-14 hours ahead of US)',
    },
  },
};

type DestinationSlug = keyof typeof DESTINATIONS;

export function generateStaticParams() {
  return Object.keys(DESTINATIONS).map((destination) => ({
    destination,
  }));
}

export default function DestinationPage({
  params,
}: {
  params: { destination: string };
}) {
  const destination = DESTINATIONS[params.destination as DestinationSlug];

  if (!destination) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 px-4 py-4">
        <div className="mx-auto max-w-6xl">
          <Link href="/" className="text-sm text-blue-600 hover:underline">
            ← Back to all categories
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{destination.flag}</span>
            <h1 className="text-4xl font-bold text-gray-900">{destination.displayName}</h1>
          </div>
          <p className="text-lg text-gray-600">{destination.heroDescription}</p>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-lg bg-white border border-gray-200 p-4 text-center">
              <div className="text-xl font-bold text-gray-900">{destination.stats.tourists}</div>
              <div className="text-xs text-gray-500">Medical Tourists</div>
            </div>
            <div className="rounded-lg bg-white border border-gray-200 p-4 text-center">
              <div className="text-xl font-bold text-green-600">{destination.stats.savings}</div>
              <div className="text-xs text-gray-500">Typical Savings</div>
            </div>
            <div className="rounded-lg bg-white border border-gray-200 p-4 text-center">
              <div className="text-xl font-bold text-gray-900">{destination.stats.flightTime}</div>
              <div className="text-xs text-gray-500">From US</div>
            </div>
            <div className="rounded-lg bg-white border border-gray-200 p-4 text-center">
              <div className="text-sm font-medium text-gray-900">{destination.stats.topProcedures}</div>
              <div className="text-xs text-gray-500">Top Procedures</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Go / Considerations */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-green-200 bg-green-50 p-6">
            <h2 className="font-semibold text-green-800 mb-4">Why {destination.displayName}?</h2>
            <ul className="space-y-2">
              {destination.whyGoHere.map((reason, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-700">
                  <span className="text-green-600">✓</span>
                  {reason}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-6">
            <h2 className="font-semibold text-yellow-800 mb-4">Things to Consider</h2>
            <ul className="space-y-2">
              {destination.considerations.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-700">
                  <span className="text-yellow-600">!</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Top Cities */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Where to Go</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {destination.topCities.map((city) => (
              <div key={city.name} className="rounded-lg bg-white border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-900">{city.name}</h3>
                <p className="mt-1 text-sm text-gray-600">{city.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {city.bestFor.map((proc) => (
                    <span
                      key={proc}
                      className="rounded-full bg-purple-50 px-3 py-1 text-xs text-purple-700"
                    >
                      {proc}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse Procedures */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Browse Procedures in {destination.displayName}</h2>
        <div className="flex flex-wrap gap-3">
          {destination.categories.map((cat) => (
            <Link
              key={cat}
              href={`/${cat}`}
              className="rounded-lg border border-gray-200 px-5 py-3 hover:border-purple-400 hover:bg-purple-50 transition-colors"
            >
              <span className="font-medium text-gray-900 capitalize">
                {cat.replace('_', ' ')}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Practical Info */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Practical Information</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white border border-gray-200 p-4">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Visa</h3>
              <p className="text-sm text-gray-900">{destination.practicalInfo.visa}</p>
            </div>
            <div className="rounded-lg bg-white border border-gray-200 p-4">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Currency</h3>
              <p className="text-sm text-gray-900">{destination.practicalInfo.currency}</p>
            </div>
            <div className="rounded-lg bg-white border border-gray-200 p-4">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Language</h3>
              <p className="text-sm text-gray-900">{destination.practicalInfo.language}</p>
            </div>
            <div className="rounded-lg bg-white border border-gray-200 p-4">
              <h3 className="text-sm font-medium text-gray-500 mb-1">Timezone</h3>
              <p className="text-sm text-gray-900">{destination.practicalInfo.timezone}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-4 py-8">
        <div className="mx-auto max-w-4xl text-center text-sm text-gray-500">
          <p>
            Information is for guidance only. Always verify current requirements and do your own research.
          </p>
        </div>
      </footer>
    </main>
  );
}
