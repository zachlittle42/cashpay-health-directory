import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spain vs Czech Republic for IVF: Which Is Better? (2024)',
  description: 'Compare IVF in Spain vs Czech Republic. Costs, success rates, donor availability, and which country is right for your fertility journey.',
};

export default function SpainVsCzechIVF() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Spain vs Czech Republic for IVF: Complete Comparison',
    description: 'Compare IVF treatment in Spain and Czech Republic including costs, success rates, donor availability, and patient experience.',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    publisher: { '@type': 'Organization', name: 'VitalityScout' },
    datePublished: '2024-12-01',
    dateModified: '2024-12-21',
    mainEntityOfPage: 'https://vitalityscout.com/guides/spain-vs-czech-ivf',
    keywords: ['Spain vs Czech IVF', 'IVF abroad', 'fertility tourism Europe', 'donor eggs Europe', 'IVF cost comparison']
  };

  return (
    <main className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="border-b border-gray-200 px-4 py-4">
        <div className="mx-auto max-w-4xl">
          <Link href="/guides" className="text-sm text-blue-600 hover:underline">
            ← Back to all guides
          </Link>
        </div>
      </header>

      <section className="bg-gradient-to-b from-purple-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-3xl">🇪🇸</span>
            <span className="text-2xl">vs</span>
            <span className="text-3xl">🇨🇿</span>
            <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
              Comparison
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Spain vs Czech Republic for IVF
          </h1>
          <p className="text-xl text-gray-600">
            Europe&apos;s two most popular IVF destinations. Here&apos;s how to choose.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Last updated: December 2024 • 10 min read
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-12 prose prose-lg">

        <h2>The Quick Answer</h2>
        <div className="grid gap-4 md:grid-cols-2 my-8">
          <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-6">
            <h3 className="text-xl font-bold text-orange-800 mt-0 mb-3">🇪🇸 Choose Spain If:</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>✓ You need <strong>donor eggs</strong> (largest pool)</li>
              <li>✓ You&apos;re over 40 and using own eggs</li>
              <li>✓ You want <strong>top success rates</strong></li>
              <li>✓ Budget is flexible ($6,000-10,000)</li>
              <li>✓ You want warm weather and beaches</li>
            </ul>
          </div>
          <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-800 mt-0 mb-3">🇨🇿 Choose Czech Republic If:</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>✓ You need the <strong>lowest cost</strong></li>
              <li>✓ You&apos;re using your own eggs</li>
              <li>✓ You want <strong>great value</strong> donor eggs</li>
              <li>✓ Budget is tight ($3,000-6,000)</li>
              <li>✓ You like European charm (Prague)</li>
            </ul>
          </div>
        </div>

        <h2>Price Comparison</h2>
        <p>
          Czech Republic is significantly cheaper. Spain offers higher success rates but at a premium:
        </p>

        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 my-8">
          <div className="overflow-x-auto">
            <table className="text-sm w-full">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left py-2">Treatment</th>
                  <th className="text-left py-2 text-orange-700">Spain</th>
                  <th className="text-left py-2 text-blue-700">Czech Republic</th>
                  <th className="text-left py-2 text-gray-500">US</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">IVF (own eggs)</td>
                  <td className="py-2 text-orange-600">$5,000-7,000</td>
                  <td className="py-2 text-blue-600 font-semibold">$2,500-4,000</td>
                  <td className="py-2 text-gray-500">$15,000-20,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">IVF + Donor Eggs</td>
                  <td className="py-2 text-orange-600">$8,000-12,000</td>
                  <td className="py-2 text-blue-600 font-semibold">$5,000-7,000</td>
                  <td className="py-2 text-gray-500">$25,000-40,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Egg Freezing</td>
                  <td className="py-2 text-orange-600">$3,500-5,000</td>
                  <td className="py-2 text-blue-600 font-semibold">$2,000-3,500</td>
                  <td className="py-2 text-gray-500">$8,000-15,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Medications</td>
                  <td className="py-2 text-orange-600">$1,500-3,000</td>
                  <td className="py-2 text-blue-600 font-semibold">$1,000-2,000</td>
                  <td className="py-2 text-gray-500">$3,000-5,000</td>
                </tr>
                <tr>
                  <td className="py-2">FET (Frozen Transfer)</td>
                  <td className="py-2 text-orange-600">$2,000-3,000</td>
                  <td className="py-2 text-blue-600 font-semibold">$1,500-2,500</td>
                  <td className="py-2 text-gray-500">$4,000-6,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 mb-0">
            <strong>Bottom line:</strong> Czech is 30-40% cheaper. Both save 60-75% vs US.
          </p>
        </div>

        <h2>Success Rates</h2>
        <p>
          This is where Spain pulls ahead, especially for donor eggs:
        </p>

        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 my-8">
          <div className="overflow-x-auto">
            <table className="text-sm w-full">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left py-2">Patient Profile</th>
                  <th className="text-left py-2 text-orange-700">Spain</th>
                  <th className="text-left py-2 text-blue-700">Czech Republic</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Own eggs, under 35</td>
                  <td className="py-2 text-orange-600 font-semibold">50-55%</td>
                  <td className="py-2 text-blue-600">45-50%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Own eggs, 35-40</td>
                  <td className="py-2 text-orange-600 font-semibold">35-45%</td>
                  <td className="py-2 text-blue-600">30-40%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Own eggs, over 40</td>
                  <td className="py-2 text-orange-600 font-semibold">15-25%</td>
                  <td className="py-2 text-blue-600">10-20%</td>
                </tr>
                <tr>
                  <td className="py-2">Donor eggs</td>
                  <td className="py-2 text-orange-600 font-semibold">55-65%</td>
                  <td className="py-2 text-blue-600">45-55%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 mb-0">
            Success rates per embryo transfer. Spain&apos;s advantage is most pronounced with donor eggs.
          </p>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8">
          <h4 className="text-orange-900 mt-0 mb-3">Why Spain Has Higher Success Rates</h4>
          <ul className="text-sm text-orange-800 space-y-2 mb-0">
            <li>• <strong>Larger donor pool</strong> - More donors = better matching</li>
            <li>• <strong>Higher volume</strong> - Clinics perform more cycles, refining techniques</li>
            <li>• <strong>Research investment</strong> - Major clinics (IVI) are globally recognized</li>
            <li>• <strong>No age limits</strong> - Can treat patients up to 50 (Czech limits at 49)</li>
          </ul>
        </div>

        <h2>Donor Availability</h2>
        <p>
          If you need donor eggs, this is a critical factor:
        </p>

        <div className="grid gap-4 md:grid-cols-2 my-8">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
            <h4 className="font-bold text-orange-900 mt-0 mb-3">🇪🇸 Spain Donors</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Wait time:</strong> 1-3 months</li>
              <li><strong>Pool:</strong> Largest in Europe</li>
              <li><strong>Ethnicity:</strong> Primarily Southern European, some diversity</li>
              <li><strong>Anonymous:</strong> Yes (required by law)</li>
              <li><strong>Matching:</strong> Excellent - phenotype matching standard</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h4 className="font-bold text-blue-900 mt-0 mb-3">🇨🇿 Czech Donors</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Wait time:</strong> 2-4 months</li>
              <li><strong>Pool:</strong> Smaller but growing</li>
              <li><strong>Ethnicity:</strong> Primarily Eastern European</li>
              <li><strong>Anonymous:</strong> Yes (with some limited info)</li>
              <li><strong>Matching:</strong> Good, but fewer options</li>
            </ul>
          </div>
        </div>

        <h2>Legal Considerations</h2>

        <div className="bg-white border border-gray-200 rounded-lg p-6 my-8">
          <div className="overflow-x-auto">
            <table className="text-sm w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-4 border-b">Factor</th>
                  <th className="text-left py-3 px-4 border-b text-orange-700">Spain</th>
                  <th className="text-left py-3 px-4 border-b text-blue-700">Czech Republic</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Age limit (own eggs)</td>
                  <td className="py-3 px-4">50 years</td>
                  <td className="py-3 px-4">49 years</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Age limit (donor eggs)</td>
                  <td className="py-3 px-4">50 years</td>
                  <td className="py-3 px-4">49 years</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Single women</td>
                  <td className="py-3 px-4 text-green-600">Allowed</td>
                  <td className="py-3 px-4 text-green-600">Allowed</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Same-sex couples (female)</td>
                  <td className="py-3 px-4 text-green-600">Allowed</td>
                  <td className="py-3 px-4 text-green-600">Allowed</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Embryo genetic testing (PGT)</td>
                  <td className="py-3 px-4 text-green-600">Allowed</td>
                  <td className="py-3 px-4 text-green-600">Allowed</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium">Sex selection</td>
                  <td className="py-3 px-4 text-red-600">Not allowed</td>
                  <td className="py-3 px-4 text-red-600">Not allowed</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Donor anonymity</td>
                  <td className="py-3 px-4">Anonymous (mandatory)</td>
                  <td className="py-3 px-4">Anonymous (limited info available)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2>Travel Comparison</h2>

        <div className="grid gap-4 md:grid-cols-2 my-8">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
            <h4 className="font-bold text-orange-900 mt-0 mb-3">🇪🇸 Spain</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Main cities:</strong> Barcelona, Madrid, Valencia, Alicante</li>
              <li><strong>Flight from NYC:</strong> 7-8 hours direct</li>
              <li><strong>Climate:</strong> Mediterranean, warm</li>
              <li><strong>Language:</strong> Spanish (English at clinics)</li>
              <li><strong>Vibe:</strong> Beaches, culture, great food</li>
              <li><strong>Visa:</strong> Not needed &lt;90 days</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h4 className="font-bold text-blue-900 mt-0 mb-3">🇨🇿 Czech Republic</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Main city:</strong> Prague (most clinics)</li>
              <li><strong>Flight from NYC:</strong> 8-9 hours (usually 1 stop)</li>
              <li><strong>Climate:</strong> Continental, cold winters</li>
              <li><strong>Language:</strong> Czech (English at clinics)</li>
              <li><strong>Vibe:</strong> Historic, charming, affordable</li>
              <li><strong>Visa:</strong> Not needed &lt;90 days</li>
            </ul>
          </div>
        </div>

        <h2>Top Clinics</h2>

        <div className="space-y-4 my-8">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
            <h4 className="font-bold text-orange-900 mt-0 mb-2">🇪🇸 Spain Top Clinics</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>IVI (multiple locations)</strong> - Largest fertility group in world, pioneers in egg vitrification</li>
              <li><strong>Institut Marquès (Barcelona)</strong> - Known for music therapy, luxury experience</li>
              <li><strong>Eugin (Barcelona)</strong> - High volume, excellent donor program</li>
              <li><strong>Ginefiv (Madrid)</strong> - Excellent success rates, good value</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h4 className="font-bold text-blue-900 mt-0 mb-2">🇨🇿 Czech Republic Top Clinics</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>IVF Cube (Prague)</strong> - Modern facility, strong international reputation</li>
              <li><strong>Reprofit (Brno)</strong> - Highest volume in Czech, excellent success rates</li>
              <li><strong>Prague Fertility Centre</strong> - English-speaking staff, personalized care</li>
              <li><strong>Gennet (Prague)</strong> - Genetic testing specialty</li>
            </ul>
          </div>
        </div>

        <h2>Our Recommendation</h2>

        <div className="bg-gradient-to-r from-orange-50 to-blue-50 border border-gray-200 rounded-lg p-6 my-8">
          <p className="text-gray-700 mb-4">
            <strong>For donor egg IVF:</strong> Choose <strong>Spain</strong>. The larger donor pool, higher success rates, and proven track record justify the extra cost. When you&apos;re investing this much emotionally and financially, maximizing success matters.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>For own-egg IVF on a budget:</strong> Choose <strong>Czech Republic</strong>. Success rates are only slightly lower, and you&apos;ll save $2,000-4,000 that could fund additional cycles if needed.
          </p>
          <p className="text-gray-700 mb-0">
            <strong>For single women or same-sex couples:</strong> Both are equally welcoming. Choose based on budget and whether you need donors.
          </p>
        </div>

        <h2>Related Guides</h2>
        <div className="grid gap-4 md:grid-cols-2 my-8">
          <Link href="/guides/spain-fertility-ivf-guide" className="block bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow">
            <span className="text-2xl">🇪🇸</span>
            <h4 className="font-bold text-gray-900 mt-2 mb-1">Spain IVF Guide</h4>
            <p className="text-sm text-gray-600 mb-0">Complete guide to fertility treatment in Spain</p>
          </Link>
          <Link href="/destinations/czech-republic" className="block bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow">
            <span className="text-2xl">🇨🇿</span>
            <h4 className="font-bold text-gray-900 mt-2 mb-1">Czech Republic Destination Guide</h4>
            <p className="text-sm text-gray-600 mb-0">Medical tourism in Prague and beyond</p>
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 my-8">
          <p className="text-sm text-gray-700 mb-0">
            This comparison is for informational purposes only and does not constitute medical advice. Success rates vary by individual circumstances. Consult with fertility specialists before making treatment decisions. Verify all pricing and clinic information directly.
          </p>
        </div>
      </article>

      <footer className="border-t border-gray-200 px-4 py-8">
        <div className="mx-auto max-w-4xl text-center">
          <Link href="/guides" className="text-blue-600 hover:underline text-sm">
            ← Back to all guides
          </Link>
        </div>
      </footer>
    </main>
  );
}
