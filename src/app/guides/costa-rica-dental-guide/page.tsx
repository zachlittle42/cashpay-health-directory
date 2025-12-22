import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Costa Rica Dental Tourism: Complete Guide for Americans (2024)',
  description: 'Plan your dental trip to Costa Rica. San Jose clinics, implant costs ($800-1,200), veneers, All-on-4. Short flights, US-trained dentists, lifetime warranties.',
};

export default function CostaRicaDentalGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Costa Rica Dental Tourism: Complete Guide for Americans',
    description: 'Everything you need to know about dental tourism in Costa Rica including top clinics, costs, travel planning, and what to expect.',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    publisher: { '@type': 'Organization', name: 'VitalityScout' },
    datePublished: '2024-12-01',
    dateModified: '2024-12-21',
    mainEntityOfPage: 'https://vitalityscout.com/guides/costa-rica-dental-guide',
    keywords: ['Costa Rica dental tourism', 'San Jose dentist', 'dental implants Costa Rica', 'Costa Rica veneers', 'dental vacation']
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

      <section className="bg-gradient-to-b from-green-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-4xl">🇨🇷</span>
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              Dental Guide
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Costa Rica Dental Tourism: The Premium Alternative
          </h1>
          <p className="text-xl text-gray-600">
            US-trained dentists, American-brand implants, and 50-70% savings - just a 4-hour flight from Miami.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Last updated: December 2024 • 14 min read
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-12 prose prose-lg">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-green-900 mt-0 mb-2">Costa Rica At a Glance</h3>
          <ul className="mb-0 text-sm text-gray-700 space-y-1">
            <li>✓ <strong>50K+ dental tourists annually</strong></li>
            <li>✓ <strong>50-70% savings</strong> vs. US prices</li>
            <li>✓ <strong>4-7 hour flight</strong> from most US cities (4 hrs from Miami)</li>
            <li>✓ <strong>No visa required</strong> for US citizens (90 days)</li>
            <li>✓ <strong>Same implant brands</strong> as US (Straumann, Nobel Biocare, Zimmer)</li>
            <li>✓ <strong>Same timezone</strong> as Central US (easy communication)</li>
          </ul>
        </div>

        <h2>Why Costa Rica for Dental Work?</h2>
        <p>
          Costa Rica offers a compelling middle ground between the rock-bottom prices of Mexico&apos;s border towns and the quality-at-any-cost approach of staying in the US. It&apos;s not the cheapest option, but many Americans prefer it because:
        </p>
        <ul>
          <li><strong>Many dentists trained in the US</strong> - You&apos;ll find DDS degrees from American dental schools</li>
          <li><strong>Premium implant brands</strong> - Straumann, Nobel Biocare, Zimmer (same as US)</li>
          <li><strong>Lifetime warranties</strong> - Some clinics (like Flikier) offer real lifetime warranties</li>
          <li><strong>Political stability</strong> - One of the most stable countries in Latin America</li>
          <li><strong>Short, direct flights</strong> - 4 hours from Miami, 5-7 from most US cities</li>
          <li><strong>Beautiful country</strong> - Combine treatment with eco-tourism</li>
        </ul>

        <div className="bg-white border-2 border-green-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-bold text-green-900 mt-0 mb-4">Cost Comparison: US vs. Costa Rica</h3>
          <div className="overflow-x-auto">
            <table className="text-sm w-full">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left py-2">Procedure</th>
                  <th className="text-left py-2">US Price</th>
                  <th className="text-left py-2 text-green-700">Costa Rica Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">Single Dental Implant</td>
                  <td className="py-2 text-gray-500">$3,000-5,000</td>
                  <td className="py-2 text-green-600 font-semibold">$800-1,200</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Implant + Crown</td>
                  <td className="py-2 text-gray-500">$4,000-6,000</td>
                  <td className="py-2 text-green-600 font-semibold">$1,700-2,200</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">All-on-4 (full arch)</td>
                  <td className="py-2 text-gray-500">$20,000-30,000</td>
                  <td className="py-2 text-green-600 font-semibold">$8,500-12,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Porcelain Crown</td>
                  <td className="py-2 text-gray-500">$1,000-1,500</td>
                  <td className="py-2 text-green-600 font-semibold">$395-500</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">Zirconia Veneer</td>
                  <td className="py-2 text-gray-500">$1,000-2,000</td>
                  <td className="py-2 text-green-600 font-semibold">$375-450</td>
                </tr>
                <tr>
                  <td className="py-2">Root Canal</td>
                  <td className="py-2 text-gray-500">$800-1,500</td>
                  <td className="py-2 text-green-600 font-semibold">$250-400</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 mb-0">
            Prices are estimates. Costa Rica is pricier than Mexico but uses premium materials consistently.
          </p>
        </div>

        <h2>Costa Rica vs. Mexico: Which to Choose?</h2>
        <p>
          This is the most common question for dental tourists. Here&apos;s a honest comparison:
        </p>

        <div className="grid gap-4 md:grid-cols-2 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h4 className="font-bold text-green-800 mt-0 mb-3">Choose Costa Rica if:</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>✓ You want US-trained dentists and premium implants</li>
              <li>✓ You prefer a more upscale experience</li>
              <li>✓ You&apos;re willing to pay slightly more for quality assurance</li>
              <li>✓ You want to combine with eco-tourism (rainforests, beaches)</li>
              <li>✓ Safety is a primary concern</li>
            </ul>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h4 className="font-bold text-blue-800 mt-0 mb-3">Choose Mexico if:</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>• You want the lowest possible price</li>
              <li>• You live in California, Texas, or Arizona (drive across)</li>
              <li>• You need same-day treatment (Los Algodones)</li>
              <li>• You&apos;re comfortable with more research to find good clinics</li>
              <li>• You&apos;re doing simpler procedures (cleanings, fillings)</li>
            </ul>
          </div>
        </div>

        <h2>Top Dental Clinics in San Jose</h2>

        <div className="space-y-6 my-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Flikier Dental Institute</h3>
            <p className="text-sm text-gray-600 mb-3">
              The only implant center in Costa Rica offering a <strong>real lifetime warranty</strong> on all dental implants and work. Located in Rohrmoser, San Jose.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-700">Specializes in:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Dental implants</li>
                  <li>• Full mouth restoration</li>
                  <li>• All-on-4 / All-on-6</li>
                  <li>• Cosmetic dentistry</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-700">Notable:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Lifetime warranty (unique in Latin America)</li>
                  <li>• On-site dental lab</li>
                  <li>• Nobel Biocare implants</li>
                  <li>• Arranges hotels and transport</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Prisma Dental</h3>
            <p className="text-sm text-gray-600 mb-3">
              Over 30 years serving international patients. 80%+ of clients travel from North America and Europe. Full-service dental tourism clinic.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-700">Specializes in:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Dental implants</li>
                  <li>• Veneers and crowns</li>
                  <li>• Full mouth reconstruction</li>
                  <li>• Dental tourism packages</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-700">Notable:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• 30+ years experience</li>
                  <li>• Complete packages available</li>
                  <li>• On-site CBCT/3D imaging</li>
                  <li>• Multiple languages</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">New Smile Dental Group</h3>
            <p className="text-sm text-gray-600 mb-3">
              Internationally accredited clinic with 25+ years experience. Affiliated with ADA, ICOI, and AAID. State-of-the-art on-site dental lab.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-700">Specializes in:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Dental implants</li>
                  <li>• Cosmetic dentistry</li>
                  <li>• Restorative work</li>
                  <li>• Same-day crowns</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-700">Notable:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• ADA, ICOI, AAID affiliations</li>
                  <li>• On-site lab and 3D imaging</li>
                  <li>• CAD/CAM same-day dentistry</li>
                  <li>• 25+ years experience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h2>Trip Planning Timeline</h2>

        <div className="space-y-4 my-8">
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">2-4 Weeks Before</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-0">
              <li>• Send X-rays and photos to clinics for quotes (most offer free virtual consults)</li>
              <li>• Compare treatment plans and pricing</li>
              <li>• Book your clinic and get cost estimate in writing</li>
              <li>• Book flights to San Jose (SJO airport)</li>
              <li>• Book hotel - ask clinic for recommendations</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">1 Week Before</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-0">
              <li>• Confirm appointment with clinic</li>
              <li>• Arrange airport pickup (most clinics offer this)</li>
              <li>• Pack copies of medical records and X-rays</li>
              <li>• Notify your bank of travel dates</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">Typical 5-Day Trip (Implants)</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-0">
              <li><strong>Day 1:</strong> Arrive San Jose, clinic pickup, initial consultation</li>
              <li><strong>Day 2:</strong> Treatment day - implant placement</li>
              <li><strong>Day 3:</strong> Rest day, follow-up check if needed</li>
              <li><strong>Day 4:</strong> Any additional work, or free for tourism</li>
              <li><strong>Day 5:</strong> Final check, receive aftercare instructions, fly home</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h4 className="text-yellow-900 mt-0 mb-3">Two-Trip Procedures</h4>
          <p className="text-sm text-yellow-800 mb-3">
            Some dental work requires two trips separated by 3-6 months:
          </p>
          <ul className="text-sm text-yellow-800 space-y-1 mb-0">
            <li><strong>Trip 1:</strong> Implant placement (implants need to fuse with bone)</li>
            <li><strong>Wait:</strong> 3-6 months for osseointegration</li>
            <li><strong>Trip 2:</strong> Crown/bridge placement</li>
          </ul>
          <p className="text-sm text-yellow-800 mt-3 mb-0">
            Some clinics offer &quot;immediate load&quot; techniques where you get temporary teeth same-day, but permanent crowns still require a second visit.
          </p>
        </div>

        <h2>Practical Information</h2>

        <div className="grid gap-4 md:grid-cols-2 my-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Getting There</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Airport:</strong> Juan Santamaria (SJO), 10 miles from San Jose</li>
              <li><strong>Direct flights:</strong> Miami (4 hrs), Houston (4.5 hrs), LA (6 hrs), NYC (5.5 hrs)</li>
              <li><strong>Airlines:</strong> United, American, Delta, Southwest, JetBlue</li>
              <li><strong>Pickup:</strong> Most clinics arrange complimentary airport pickup</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Money</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Currency:</strong> Costa Rican Colon (CRC), but USD widely accepted</li>
              <li><strong>Clinic payments:</strong> Cash, credit card, wire transfer</li>
              <li><strong>ATMs:</strong> Widely available in San Jose</li>
              <li><strong>Budget tip:</strong> Pay in colones at local restaurants for better rates</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Where to Stay</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Escazu:</strong> Upscale suburb, safest area, many clinics here</li>
              <li><strong>Santa Ana:</strong> Similar to Escazu, slightly more affordable</li>
              <li><strong>Budget:</strong> $60-100/night for comfortable hotels</li>
              <li><strong>Clinic packages:</strong> Many include hotel at partner properties</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Climate & Timing</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Dry season:</strong> December-April (ideal for travel)</li>
              <li><strong>Rainy season:</strong> May-November (afternoon showers)</li>
              <li><strong>Temperature:</strong> 70-80°F year-round in San Jose</li>
              <li><strong>Timezone:</strong> Central Time (same as Chicago/Houston)</li>
            </ul>
          </div>
        </div>

        <h2>Combine with Tourism</h2>
        <p>
          Costa Rica is famous for its natural beauty. If you have time before or after treatment:
        </p>
        <ul>
          <li><strong>Arenal Volcano</strong> - Hot springs and rainforest (3 hours from San Jose)</li>
          <li><strong>Manuel Antonio</strong> - Beaches and wildlife (3.5 hours)</li>
          <li><strong>Monteverde Cloud Forest</strong> - Zip-lining and nature (4 hours)</li>
          <li><strong>Caribbean Coast</strong> - Beaches and snorkeling (4-5 hours)</li>
        </ul>
        <p className="text-sm text-gray-600">
          <strong>Note:</strong> Plan tourism for BEFORE dental work or after full recovery. You don&apos;t want to be zip-lining the day after implant surgery.
        </p>

        <h2>Common Questions</h2>

        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-gray-900 mb-2">&quot;Are the implants really the same quality as the US?&quot;</h4>
            <p className="text-sm text-gray-700">
              Yes, at reputable Costa Rica clinics. They use Straumann (Swiss), Nobel Biocare (Swedish), and other premium brands - the exact same implants used at top US practices. Always ask which brand before treatment and verify it&apos;s not a generic substitute.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-2">&quot;What if I have a problem after returning home?&quot;</h4>
            <p className="text-sm text-gray-700">
              Good clinics provide detailed aftercare instructions and direct contact with your dentist via WhatsApp or email. For minor issues, they can often advise remotely. For complications requiring treatment, you&apos;d need to see a local dentist or return to Costa Rica. This is why choosing a clinic with a strong warranty matters.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-2">&quot;Is Costa Rica safe?&quot;</h4>
            <p className="text-sm text-gray-700">
              Costa Rica is one of the safest countries in Latin America. It has no army (abolished in 1949) and a stable democracy. That said, use common sense: stay in tourist areas, don&apos;t flash valuables, use clinic-arranged transportation. Escazu and Santa Ana are very safe neighborhoods.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-2">&quot;Should I get dental insurance for the trip?&quot;</h4>
            <p className="text-sm text-gray-700">
              Your US dental insurance won&apos;t cover work done abroad. Travel medical insurance is recommended for emergencies, but won&apos;t cover elective dental procedures. Some clinics include complication coverage in their packages - ask about this.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 my-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Explore Costa Rica Dental Options?</h3>
          <p className="text-gray-600 mb-6">
            Browse our directory of Costa Rica dental providers and compare pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/destinations/costa-rica" className="inline-block rounded-lg bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700">
              Costa Rica Destination Guide
            </Link>
            <Link href="/dental" className="inline-block rounded-lg border-2 border-green-600 px-6 py-3 font-medium text-green-600 hover:bg-green-50">
              Browse Dental Providers
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 my-8">
          <h4 className="text-gray-900 font-bold mb-2">Dental Disclaimer</h4>
          <p className="text-sm text-gray-700 mb-0">
            This guide is for informational purposes only. Always consult with qualified dental professionals before making decisions about dental treatment. Verify all pricing and credentials directly with clinics.
          </p>
        </div>

        {/* Sources */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <a href="https://www.dentavacation.com/dental-tourism-costa-rica/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">DentaVacation - Costa Rica Dental Tourism</a></li>
            <li>• <a href="https://www.medicaltourismco.com/dental-tourism-in-costa-rica/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Medical Tourism Co - Costa Rica Dental</a></li>
            <li>• <a href="https://prismadental.com/dental-tourism/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Prisma Dental - Dental Tourism</a></li>
          </ul>
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
