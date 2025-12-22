import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mexico vs Costa Rica for Dental Work: Which Is Better? (2024)',
  description: 'Honest comparison of dental tourism in Mexico vs Costa Rica. Costs, quality, safety, convenience. Which is right for your dental work?',
};

export default function MexicoVsCostaRicaDental() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Mexico vs Costa Rica for Dental Work: Complete Comparison',
    description: 'Compare dental tourism in Mexico and Costa Rica including costs, quality, safety, and convenience for American patients.',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    publisher: { '@type': 'Organization', name: 'VitalityScout' },
    datePublished: '2024-12-01',
    dateModified: '2024-12-21',
    mainEntityOfPage: 'https://vitalityscout.com/guides/mexico-vs-costa-rica-dental',
    keywords: ['Mexico vs Costa Rica dental', 'dental tourism comparison', 'best country for dental work', 'dental implants abroad']
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

      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-3xl">🇲🇽</span>
            <span className="text-2xl">vs</span>
            <span className="text-3xl">🇨🇷</span>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              Comparison
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mexico vs Costa Rica for Dental Work
          </h1>
          <p className="text-xl text-gray-600">
            Both are excellent choices. Here&apos;s how to decide which is right for you.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Last updated: December 2024 • 8 min read
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-12 prose prose-lg">

        <h2>The Quick Answer</h2>
        <div className="grid gap-4 md:grid-cols-2 my-8">
          <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-800 mt-0 mb-3">🇲🇽 Choose Mexico If:</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>✓ You want the <strong>lowest prices</strong></li>
              <li>✓ You live in California, Arizona, or Texas</li>
              <li>✓ You can drive across the border</li>
              <li>✓ You need <strong>same-day work</strong> (Los Algodones)</li>
              <li>✓ You&apos;re doing simpler procedures</li>
            </ul>
          </div>
          <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-800 mt-0 mb-3">🇨🇷 Choose Costa Rica If:</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>✓ You want <strong>US-trained dentists</strong></li>
              <li>✓ You prefer a more <strong>premium experience</strong></li>
              <li>✓ You live on the East Coast</li>
              <li>✓ You want <strong>lifetime warranties</strong></li>
              <li>✓ Safety and quality are top priorities</li>
            </ul>
          </div>
        </div>

        <h2>Price Comparison</h2>
        <p>
          Mexico is cheaper, but not by as much as you might think when comparing apples to apples:
        </p>

        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 my-8">
          <div className="overflow-x-auto">
            <table className="text-sm w-full">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left py-2">Procedure</th>
                  <th className="text-left py-2 text-green-700">Mexico</th>
                  <th className="text-left py-2 text-blue-700">Costa Rica</th>
                  <th className="text-left py-2 text-gray-500">US</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Single Implant</td>
                  <td className="py-2 text-green-600 font-semibold">$750-1,200</td>
                  <td className="py-2 text-blue-600">$800-1,200</td>
                  <td className="py-2 text-gray-500">$3,000-5,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Implant + Crown</td>
                  <td className="py-2 text-green-600 font-semibold">$1,400-1,800</td>
                  <td className="py-2 text-blue-600">$1,700-2,200</td>
                  <td className="py-2 text-gray-500">$4,000-6,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">All-on-4 (per arch)</td>
                  <td className="py-2 text-green-600 font-semibold">$7,500-10,000</td>
                  <td className="py-2 text-blue-600">$8,500-12,000</td>
                  <td className="py-2 text-gray-500">$20,000-30,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Porcelain Crown</td>
                  <td className="py-2 text-green-600 font-semibold">$180-350</td>
                  <td className="py-2 text-blue-600">$395-500</td>
                  <td className="py-2 text-gray-500">$1,000-1,500</td>
                </tr>
                <tr>
                  <td className="py-2">Veneer</td>
                  <td className="py-2 text-green-600 font-semibold">$350-450</td>
                  <td className="py-2 text-blue-600">$375-450</td>
                  <td className="py-2 text-gray-500">$1,000-2,500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 mb-0">
            <strong>Bottom line:</strong> Mexico is 10-30% cheaper than Costa Rica, but both save 50-70% vs US.
          </p>
        </div>

        <h2>Quality Comparison</h2>

        <div className="space-y-4 my-8">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="text-lg font-bold text-gray-900 mt-0 mb-2">Materials</h4>
            <p className="text-sm text-gray-700 mb-0">
              <strong>Costa Rica</strong> consistently uses premium implant brands (Straumann, Nobel Biocare, Zimmer) - the same brands as top US practices. <strong>Mexico</strong> varies more widely - top clinics use the same premium brands, but cheaper clinics use generic implants. In Mexico, you need to specifically ask what brand is being used.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="text-lg font-bold text-gray-900 mt-0 mb-2">Training</h4>
            <p className="text-sm text-gray-700 mb-0">
              <strong>Costa Rica</strong> has a higher percentage of US-trained dentists (DDS from American dental schools). <strong>Mexico</strong> dentists are typically trained in Mexico, which is perfectly adequate, but there&apos;s more variability. Both countries have excellent dentists - but Costa Rica is more consistently premium.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="text-lg font-bold text-gray-900 mt-0 mb-2">Warranties</h4>
            <p className="text-sm text-gray-700 mb-0">
              <strong>Costa Rica:</strong> Some clinics (like Flikier) offer <strong>lifetime warranties</strong> - genuinely rare in dental tourism. <strong>Mexico:</strong> Warranties are less common and typically shorter (1-5 years). This is a real differentiator for Costa Rica.
            </p>
          </div>
        </div>

        <h2>Travel Comparison</h2>

        <div className="overflow-x-auto my-8">
          <table className="text-sm w-full border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-4 border-b">Factor</th>
                <th className="text-left py-3 px-4 border-b text-green-700">Mexico</th>
                <th className="text-left py-3 px-4 border-b text-blue-700">Costa Rica</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4 font-medium">From West Coast</td>
                <td className="py-3 px-4 text-green-600">Drive across or 1-2 hr flight</td>
                <td className="py-3 px-4 text-blue-600">5-6 hour flight</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-medium">From East Coast</td>
                <td className="py-3 px-4">3-4 hour flight to Cancun</td>
                <td className="py-3 px-4 text-blue-600">4-5 hour flight</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-medium">Visa Required</td>
                <td className="py-3 px-4">No (180 days)</td>
                <td className="py-3 px-4">No (90 days)</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-medium">Timezone</td>
                <td className="py-3 px-4">Same as US West/Central</td>
                <td className="py-3 px-4">Same as US Central</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4 font-medium">English Widely Spoken</td>
                <td className="py-3 px-4">At dental clinics, yes</td>
                <td className="py-3 px-4 text-blue-600">More broadly, yes</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">Safety Perception</td>
                <td className="py-3 px-4">Varies by location</td>
                <td className="py-3 px-4 text-blue-600">Very safe (no army)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>The Honest Tradeoffs</h2>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h4 className="text-yellow-900 mt-0 mb-3">Mexico Advantages</h4>
          <ul className="text-sm text-yellow-800 space-y-2 mb-0">
            <li>✓ <strong>Cheapest prices available</strong> - especially at Los Algodones</li>
            <li>✓ <strong>Drive across</strong> - no flights needed from border states</li>
            <li>✓ <strong>Same-day options</strong> - Los Algodones is set up for quick visits</li>
            <li>✓ <strong>Massive selection</strong> - 350+ clinics in Los Algodones alone</li>
            <li>✓ <strong>Tijuana has premium options</strong> - when you want high-end</li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h4 className="text-blue-900 mt-0 mb-3">Costa Rica Advantages</h4>
          <ul className="text-sm text-blue-800 space-y-2 mb-0">
            <li>✓ <strong>More consistent quality</strong> - less variance between clinics</li>
            <li>✓ <strong>US-trained dentists</strong> - many have American DDS degrees</li>
            <li>✓ <strong>Lifetime warranties</strong> - genuinely rare benefit</li>
            <li>✓ <strong>Beautiful country</strong> - combine with eco-tourism</li>
            <li>✓ <strong>Safer perception</strong> - less concern about security</li>
            <li>✓ <strong>Premium implants standard</strong> - Straumann, Nobel Biocare</li>
          </ul>
        </div>

        <h2>Our Recommendation</h2>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-gray-200 rounded-lg p-6 my-8">
          <p className="text-gray-700 mb-4">
            <strong>For most Americans:</strong> If you live in California, Arizona, or Texas and want the best price, <strong>Mexico</strong> is the obvious choice - you can literally drive there. Choose a reputable Tijuana clinic for complex work, or Los Algodones for simpler procedures.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>For East Coasters or quality-focused patients:</strong> <strong>Costa Rica</strong> makes more sense. Flight times are similar, the quality floor is higher, and you get the peace of mind of US-trained dentists and lifetime warranties.
          </p>
          <p className="text-gray-700 mb-0">
            <strong>For complex work (All-on-4, full-mouth):</strong> Either can work, but we&apos;d lean <strong>Costa Rica</strong> for the warranty and consistency - you&apos;re investing $10,000+, so the extra $1,000-2,000 for Costa Rica is worth the quality assurance.
          </p>
        </div>

        <h2>Related Guides</h2>
        <div className="grid gap-4 md:grid-cols-2 my-8">
          <Link href="/guides/mexico-dental-guide" className="block bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow">
            <span className="text-2xl">🇲🇽</span>
            <h4 className="font-bold text-gray-900 mt-2 mb-1">Mexico Dental Guide</h4>
            <p className="text-sm text-gray-600 mb-0">Complete guide to Tijuana, Los Algodones, Cancun</p>
          </Link>
          <Link href="/guides/costa-rica-dental-guide" className="block bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow">
            <span className="text-2xl">🇨🇷</span>
            <h4 className="font-bold text-gray-900 mt-2 mb-1">Costa Rica Dental Guide</h4>
            <p className="text-sm text-gray-600 mb-0">San Jose clinics, US-trained dentists, trip planning</p>
          </Link>
        </div>

        {/* Disclaimer */}
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 my-8">
          <p className="text-sm text-gray-700 mb-0">
            This comparison is for informational purposes only. Prices and details change frequently. Verify all information directly with clinics before making decisions.
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
