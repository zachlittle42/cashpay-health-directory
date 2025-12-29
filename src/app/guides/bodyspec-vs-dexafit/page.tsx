import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BodySpec vs DexaFit: DEXA Scan Comparison (2025) | VitalityScout',
  description: 'BodySpec vs DexaFit DEXA scan comparison. Compare pricing ($40-60 vs $119-179), locations, reports, and which body composition scanning service is best for you.',
  keywords: ['BodySpec', 'DexaFit', 'DEXA scan', 'body composition', 'body fat test', 'DEXA near me', 'bone density scan'],
};

export default function BodySpecVsDexaFitGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'BodySpec vs DexaFit: DEXA Scan Comparison',
    description: 'Detailed comparison of BodySpec and DexaFit body composition scanning services.',
    author: {
      '@type': 'Organization',
      name: 'VitalityScout'
    },
    publisher: {
      '@type': 'Organization',
      name: 'VitalityScout',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vitalityscout.com/logo.png'
      }
    },
    datePublished: '2025-01-01',
    dateModified: '2025-01-01',
    mainEntityOfPage: 'https://vitalityscout.com/guides/bodyspec-vs-dexafit',
    articleSection: 'Comparison Guides',
    keywords: ['BodySpec', 'DexaFit', 'DEXA', 'body composition', 'body fat']
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
          <div className="mx-auto max-w-4xl px-4 py-3">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">→</span>
              <Link href="/guides" className="hover:text-blue-600">Guides</Link>
              <span className="mx-2">→</span>
              <span className="text-gray-900">BodySpec vs DexaFit</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-green-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4">
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                Comparison
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              BodySpec vs DexaFit: Which DEXA Scan Service Is Right for You?
            </h1>
            <p className="text-xl text-gray-600">
              A complete comparison of the two leading body composition scanning services—pricing, locations, reporting, and which delivers the best value.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Last updated: January 2025 • 8 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Comparison Box */}
          <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Comparison</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-green-600 mb-2">BodySpec</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• $45-50 per scan (packages from $40)</li>
                  <li>• Mobile vans + fixed locations</li>
                  <li>• California, Texas, Washington, Arizona</li>
                  <li>• Best for: Budget-conscious, tracking over time</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-teal-600 mb-2">DexaFit</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• $119-179 per scan (packages lower)</li>
                  <li>• Premium studios in malls/offices</li>
                  <li>• 35+ locations nationwide</li>
                  <li>• Best for: Premium experience, RMR/VO2 bundles</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Winner Summary */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">Choose BodySpec if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Price is your primary concern</li>
                  <li>• You&apos;re in California or Texas</li>
                  <li>• You want to track body composition over time affordably</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-blue-600 mb-1">Choose DexaFit if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You want additional tests (RMR, VO2max)</li>
                  <li>• You&apos;re outside BodySpec&apos;s coverage area</li>
                  <li>• You prefer a premium, spa-like experience</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#what-is-dexa" className="text-blue-600 hover:underline">1. What Is a DEXA Scan?</a></li>
              <li><a href="#pricing" className="text-blue-600 hover:underline">2. Pricing Comparison</a></li>
              <li><a href="#locations" className="text-blue-600 hover:underline">3. Locations & Availability</a></li>
              <li><a href="#experience" className="text-blue-600 hover:underline">4. The Scan Experience</a></li>
              <li><a href="#reports" className="text-blue-600 hover:underline">5. Reports & Data</a></li>
              <li><a href="#additional" className="text-blue-600 hover:underline">6. Additional Services</a></li>
              <li><a href="#verdict" className="text-blue-600 hover:underline">7. Final Verdict</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              If you&apos;re looking to get a DEXA scan for body composition analysis, you&apos;ve probably come across BodySpec and DexaFit—the two major consumer-focused DEXA scanning services. But with significant price differences, how do you choose? Let&apos;s break it down.
            </p>

            <h2 id="what-is-dexa" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Is a DEXA Scan?</h2>

            <p className="text-gray-700 mb-4">
              DEXA (Dual-Energy X-ray Absorptiometry) uses low-dose X-rays to measure your body composition with exceptional accuracy. Unlike bathroom scales or bioelectrical impedance (like InBody), DEXA provides:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Precise body fat percentage</strong> (±1-2% accuracy)</li>
              <li><strong>Lean muscle mass</strong> in total and by region (arms, legs, trunk)</li>
              <li><strong>Bone mineral density</strong> (important for osteoporosis screening)</li>
              <li><strong>Visceral fat measurement</strong> (the dangerous fat around organs)</li>
              <li><strong>Left-right asymmetry</strong> detection (muscle imbalances)</li>
            </ul>

            <p className="text-gray-700 mb-4">
              DEXA is the clinical gold standard—the same technology used in medical research and osteoporosis diagnosis. Both BodySpec and DexaFit use legitimate, medical-grade DEXA machines.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Pro tip:</strong> For tracking progress, consistency matters more than absolute accuracy. Use the same provider and follow the same protocols (fasting, hydration, time of day) for comparable results.
              </p>
            </div>

            <h2 id="pricing" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Pricing Comparison</h2>

            <p className="text-gray-700 mb-4">
              This is where the services differ most dramatically:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Service</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Single Scan</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">2-Pack</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">4-Pack</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">BodySpec</td>
                    <td className="border border-gray-300 px-4 py-3">$45-50</td>
                    <td className="border border-gray-300 px-4 py-3">$80 ($40/scan)</td>
                    <td className="border border-gray-300 px-4 py-3">$150 ($37.50/scan)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">DexaFit</td>
                    <td className="border border-gray-300 px-4 py-3">$119-179</td>
                    <td className="border border-gray-300 px-4 py-3">$199-249 ($99-125/scan)</td>
                    <td className="border border-gray-300 px-4 py-3">$349-449 ($87-112/scan)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>The math:</strong> BodySpec is roughly 60-70% cheaper than DexaFit. For regular tracking (quarterly scans), you&apos;d spend $150-200/year with BodySpec vs $500-700/year with DexaFit.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Why the Price Difference?</h3>

            <p className="text-gray-700 mb-4">
              BodySpec operates a high-volume, lower-margin model with mobile vans that visit multiple locations. DexaFit runs premium studios with more staff, additional equipment (RMR, VO2max, 3D body scanning), and higher rent in retail locations.
            </p>

            <p className="text-gray-700 mb-4">
              If you only need DEXA body composition scans, BodySpec offers essentially the same test for significantly less.
            </p>

            <h2 id="locations" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Locations & Availability</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">BodySpec Coverage</h3>

            <p className="text-gray-700 mb-4">
              BodySpec operates primarily in:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>California:</strong> Los Angeles, San Francisco Bay Area, San Diego, Orange County, Sacramento</li>
              <li><strong>Texas:</strong> Dallas-Fort Worth, Houston, Austin</li>
              <li><strong>Washington:</strong> Seattle area</li>
              <li><strong>Arizona:</strong> Phoenix metro</li>
            </ul>

            <p className="text-gray-700 mb-4">
              They use a mix of fixed locations (gyms, wellness centers) and mobile vans that visit on scheduled days. The mobile van model means they can serve more areas, but you may need to plan around their schedule.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">DexaFit Coverage</h3>

            <p className="text-gray-700 mb-4">
              DexaFit has 35+ studio locations across the US, including:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>West Coast:</strong> California, Washington, Oregon, Arizona</li>
              <li><strong>Southwest:</strong> Texas, Colorado</li>
              <li><strong>Midwest:</strong> Illinois, Ohio, Michigan, Minnesota</li>
              <li><strong>East Coast:</strong> New York, New Jersey, Massachusetts, Florida, Georgia</li>
            </ul>

            <p className="text-gray-700 mb-4">
              DexaFit studios are typically in shopping centers or office buildings, open 7 days a week with flexible scheduling.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Location Winner: DexaFit</h4>
              <p className="text-gray-700">
                If you&apos;re in California or Texas, BodySpec likely has convenient options. For everyone else, DexaFit&apos;s nationwide footprint makes it the only choice for consumer DEXA scans.
              </p>
            </div>

            <h2 id="experience" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Scan Experience</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">BodySpec Experience</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Mobile vans or shared spaces in gyms/wellness centers</li>
              <li>Efficient, no-frills approach (in and out in 15-20 minutes)</li>
              <li>Scan takes about 7 minutes</li>
              <li>Brief results review immediately after</li>
              <li>Detailed PDF report emailed within 24-48 hours</li>
            </ul>

            <p className="text-gray-700 mb-4">
              BodySpec is utilitarian but professional. You&apos;re there for data, not ambiance. The technicians are knowledgeable and the process is streamlined.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">DexaFit Experience</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Dedicated retail studios with modern design</li>
              <li>More spa-like atmosphere</li>
              <li>Longer appointments (30-45 minutes) with detailed consultation</li>
              <li>In-depth results review with a consultant</li>
              <li>Digital dashboard to track results over time</li>
            </ul>

            <p className="text-gray-700 mb-4">
              DexaFit positions itself as a premium wellness experience. If you value a polished environment and more hand-holding through your results, DexaFit delivers that.
            </p>

            <h2 id="reports" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Reports & Data Quality</h2>

            <p className="text-gray-700 mb-4">
              Both services use medical-grade Hologic or GE DEXA machines and provide comprehensive reports. Here&apos;s what you get:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Standard Report Includes:</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Total body fat percentage and mass</li>
              <li>Lean tissue mass (total and regional)</li>
              <li>Bone mineral density and content</li>
              <li>Visceral adipose tissue (VAT) measurement</li>
              <li>Regional breakdown (arms, legs, trunk, android/gynoid)</li>
              <li>Comparison to previous scans (if applicable)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Key Differences</h3>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Feature</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">BodySpec</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">DexaFit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Report Format</td>
                    <td className="border border-gray-300 px-4 py-3">PDF via email</td>
                    <td className="border border-gray-300 px-4 py-3">PDF + online dashboard</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Historical Tracking</td>
                    <td className="border border-gray-300 px-4 py-3">Manual comparison</td>
                    <td className="border border-gray-300 px-4 py-3">Built-in trending</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Results Review</td>
                    <td className="border border-gray-300 px-4 py-3">Brief overview</td>
                    <td className="border border-gray-300 px-4 py-3">Detailed consultation</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Data Export</td>
                    <td className="border border-gray-300 px-4 py-3">PDF download</td>
                    <td className="border border-gray-300 px-4 py-3">PDF + CSV export</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              The core DEXA data is equivalent between both services. DexaFit&apos;s advantage is the digital platform for long-term tracking. BodySpec&apos;s PDF reports contain the same information; you just need to manually compare them or create your own tracking spreadsheet.
            </p>

            <h2 id="additional" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Additional Services</h2>

            <p className="text-gray-700 mb-4">
              This is where DexaFit pulls ahead for those wanting comprehensive metabolic testing:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">DexaFit Additional Tests</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>RMR (Resting Metabolic Rate):</strong> $99-129 standalone, often bundled with DEXA</li>
              <li><strong>VO2max Testing:</strong> $175-250 for true cardiorespiratory fitness measurement</li>
              <li><strong>3D Body Scanning:</strong> Visual tracking of body shape changes</li>
              <li><strong>Fit3D or Styku:</strong> Body circumference measurements</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">BodySpec Additional Services</h3>

            <p className="text-gray-700 mb-4">
              BodySpec focuses primarily on DEXA. Some locations offer RMR testing, but it&apos;s not universally available. They don&apos;t offer VO2max or 3D scanning.
            </p>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Bundle Value at DexaFit</h4>
              <p className="text-gray-700">
                If you want DEXA + RMR together, DexaFit bundles often bring the combined price to $199-249—still more than BodySpec&apos;s DEXA alone, but reasonable for two tests. The RMR data is genuinely useful for understanding your calorie needs.
              </p>
            </div>

            <h2 id="verdict" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Final Verdict: Who Should Choose What</h2>

            <div className="bg-green-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Choose BodySpec If:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You&apos;re in California, Texas, Seattle, or Phoenix</li>
                <li>You want the most affordable DEXA scans for regular tracking</li>
                <li>You&apos;re comfortable with a mobile van or gym location</li>
                <li>You only need body composition data (not RMR/VO2)</li>
                <li>You&apos;re budget-conscious but want gold-standard accuracy</li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                Best value for: Athletes, fitness enthusiasts, anyone wanting to track body comp quarterly
              </p>
            </div>

            <div className="bg-teal-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Choose DexaFit If:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You&apos;re outside BodySpec&apos;s coverage area</li>
                <li>You want additional metabolic testing (RMR, VO2max)</li>
                <li>You prefer a premium, retail wellness studio experience</li>
                <li>You value the digital dashboard for long-term tracking</li>
                <li>You want more detailed in-person consultation on your results</li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                Best value for: Those needing comprehensive metabolic testing, anyone not near BodySpec locations
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Other Options to Consider</h3>

            <p className="text-gray-700 mb-4">
              If neither service is available in your area:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>University research labs:</strong> Some offer DEXA scans to the public for $50-100</li>
              <li><strong>Hospital radiology departments:</strong> May do body composition DEXA (typically need physician order)</li>
              <li><strong>Local wellness centers:</strong> Increasingly offering DEXA, often using the same machines</li>
              <li><strong>InBody scans:</strong> Less accurate but widely available at gyms ($25-50)</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Ready to Track Your Body Composition?</h3>
            <p className="mb-6 text-green-100">
              Learn more about DEXA scans and what the results mean.
            </p>
            <Link
              href="/guides/dexa-scan-guide"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-green-600 hover:bg-green-50 transition-colors"
            >
              Complete DEXA Scan Guide
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 rounded-lg bg-gray-100 p-6">
            <h3 className="font-semibold text-gray-800 mb-2">Disclaimer</h3>
            <p className="text-sm text-gray-600">
              Pricing and availability information is based on publicly available data as of January 2025 and may vary by location. We are not affiliated with BodySpec or DexaFit. Always verify current pricing directly with the provider before booking. DEXA involves minimal radiation exposure and may not be appropriate for pregnant women or those who have had recent contrast imaging.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources & References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• BodySpec official website: pricing and location information</li>
              <li>• DexaFit official website: service offerings and pricing</li>
              <li>• Journal of Clinical Densitometry: DEXA accuracy standards</li>
              <li>• International Society for Clinical Densitometry guidelines</li>
            </ul>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
