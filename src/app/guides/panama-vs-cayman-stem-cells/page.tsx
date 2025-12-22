import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Panama vs Cayman Islands Stem Cells: Which Premium Destination? | VitalityScout',
  description: 'Compare premium stem cell destinations: Panama (Stem Cell Institute, Golden Cells) vs Cayman Islands (DVC Stem, Regenexx). Cost, approach, and who each is best for.',
};

export default function PanamaVsCaymanStemCells() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Panama vs Cayman Islands Stem Cell Comparison',
    description: 'Comprehensive comparison of premium stem cell therapy destinations',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    dateModified: '2024-12-21',
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-teal-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/longevity" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Longevity Hub
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">🇵🇦</span>
            <span className="text-2xl text-gray-400">vs</span>
            <span className="text-4xl">🇰🇾</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Panama vs Cayman Islands for Stem Cells
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Two premium destinations, two different approaches. Both are considered
            &quot;gold standard&quot; options for Americans seeking expanded stem cell therapy.
            Here&apos;s how to choose.
          </p>

          <div className="flex flex-wrap gap-3 text-sm">
            <span className="bg-teal-100 text-teal-800 px-3 py-1.5 rounded-full">Premium Tier</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full">$25K-$60K Range</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1.5 rounded-full">Expanded Cells</span>
          </div>
        </div>
      </section>

      {/* FDA Disclaimer */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-red-900 mb-3">Important Regulatory Notice</h3>
          <p className="text-sm text-red-800">
            <strong>Stem cell treatments in both Panama and Cayman Islands are NOT approved by the US FDA.</strong> The FDA has issued warnings about unproven stem cell therapies. Treatments are considered experimental. This comparison is for informational purposes—always consult qualified medical professionals.
          </p>
        </div>
      </section>

      {/* Quick Comparison */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Comparison</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Factor</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">
                  <span className="flex items-center gap-2">🇵🇦 Panama</span>
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">
                  <span className="flex items-center gap-2">🇰🇾 Cayman Islands</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Cost Range</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$25,000 - $40,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$35,000 - $60,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Cell Type</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">&quot;Golden Cells&quot; (umbilical cord MSCs)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Expanded autologous (your own cells)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Key Provider</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Stem Cell Institute (Neil Riordan)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">DVC Stem, Regenexx Cayman</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Trips Required</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">One (4-5 days)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Two (harvest + injection, 6-8 weeks apart)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Cell Count</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">100-300 million+ per treatment</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">50-200 million (expanded from your cells)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Flight Time (from US)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">3-5 hours direct</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">3-4 hours direct</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Primary Focus</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Degenerative diseases, autoimmune, anti-aging</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Orthopedic, systemic, personalized protocols</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Track Record</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">20+ years, 10,000+ patients</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">10-15 years, thousands of patients</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Panama Deep Dive */}
      <section className="bg-teal-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">🇵🇦</span> Panama: The &quot;Golden Cells&quot; Approach
          </h2>

          <div className="prose prose-lg max-w-none">
            <h3>The Stem Cell Institute Story</h3>
            <p>
              Dr. Neil Riordan founded the Stem Cell Institute in Panama in 2006, making it
              one of the world&apos;s pioneering regenerative medicine clinics. His proprietary
              &quot;Golden Cells&quot; (umbilical cord-derived mesenchymal stem cells) have treated
              thousands of patients, including professional athletes and high-profile individuals.
            </p>

            <h3>Why Panama Uses Donor Cells</h3>
            <p>
              Panama&apos;s approach uses <strong>allogeneic</strong> (donor) cells rather than your own.
              The argument:
            </p>
            <ul>
              <li>Younger donor cells are more potent than older autologous cells</li>
              <li>No need for patient cell harvesting or multiple trips</li>
              <li>Cells can be banked and quality-controlled at scale</li>
              <li>Higher cell counts achievable (100-300 million+)</li>
            </ul>

            <h3>What Treatment Looks Like</h3>
            <p>
              A typical Panama protocol:
            </p>
            <ul>
              <li><strong>Day 1:</strong> Arrival, initial consultation, bloodwork</li>
              <li><strong>Days 2-3:</strong> IV infusions of Golden Cells (multiple sessions)</li>
              <li><strong>Day 4:</strong> Localized injections if needed (joints, etc.)</li>
              <li><strong>Day 5:</strong> Final consultation, departure</li>
            </ul>

            <div className="bg-white border border-teal-200 rounded-lg p-4 not-prose my-6">
              <h4 className="font-bold text-gray-900 mb-2">Panama Best For:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Neurological conditions (MS, Parkinson&apos;s, autism spectrum)</li>
                <li>• Autoimmune diseases (lupus, rheumatoid arthritis)</li>
                <li>• Systemic anti-aging and longevity</li>
                <li>• Patients who can&apos;t make multiple trips</li>
                <li>• Those seeking highest cell counts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cayman Deep Dive */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <span className="text-3xl">🇰🇾</span> Cayman Islands: The Personalized Approach
        </h2>

        <div className="prose prose-lg max-w-none">
          <h3>Why the Caymans?</h3>
          <p>
            The Cayman Islands developed a unique regulatory framework (the Health Practice Law)
            that allows treatments not permitted in the US while maintaining rigorous oversight.
            Clinics like DVC Stem and Regenexx Cayman operate under this framework.
          </p>

          <h3>The Autologous Difference</h3>
          <p>
            Cayman clinics typically use <strong>autologous</strong> (your own) cells, expanded
            in a lab. The argument:
          </p>
          <ul>
            <li>No risk of rejection—they&apos;re your own cells</li>
            <li>Cells are &quot;personalized&quot; to your biology</li>
            <li>Some evidence suggests better integration</li>
            <li>Can be combined with growth factors from your blood</li>
          </ul>

          <h3>The Two-Trip Process</h3>
          <p>
            The Cayman approach requires two visits:
          </p>
          <ul>
            <li><strong>Trip 1 (Day 1-2):</strong> Cell harvest—fat tissue or bone marrow extraction</li>
            <li><strong>Waiting period (6-8 weeks):</strong> Cells expand in lab</li>
            <li><strong>Trip 2 (Day 1-3):</strong> Cell injection(s), follow-up</li>
          </ul>

          <div className="bg-white border border-blue-200 rounded-lg p-4 not-prose my-6">
            <h4 className="font-bold text-gray-900 mb-2">Cayman Best For:</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Orthopedic conditions (knee, hip, spine)</li>
              <li>• Patients who prefer using their own cells</li>
              <li>• Those who want personalized protocols</li>
              <li>• Sports injuries and joint degeneration</li>
              <li>• Patients comfortable with two trips</li>
            </ul>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 mt-8">
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h4 className="font-bold text-gray-900 mb-2">DVC Stem</h4>
            <p className="text-sm text-gray-600 mb-3">
              Founded by practitioners from the US. Focus on autologous expanded MSCs
              for orthopedic and systemic conditions.
            </p>
            <div className="text-sm text-green-600 font-semibold">$35,000 - $55,000</div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h4 className="font-bold text-gray-900 mb-2">Regenexx Cayman</h4>
            <p className="text-sm text-gray-600 mb-3">
              Extension of US-based Regenexx network. Specializes in orthopedic
              applications with extensive outcome tracking.
            </p>
            <div className="text-sm text-green-600 font-semibold">$25,000 - $45,000</div>
          </div>
        </div>
      </section>

      {/* Decision Matrix */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Decision Matrix: Which Is Right for You?</h2>

          <div className="space-y-4">
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h4 className="font-bold text-gray-900 mb-2">If your condition is primarily orthopedic...</h4>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-blue-600">Consider Cayman.</span> Regenexx and DVC Stem have extensive orthopedic focus and outcome data for joint conditions.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h4 className="font-bold text-gray-900 mb-2">If your condition is neurological or autoimmune...</h4>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-teal-600">Consider Panama.</span> The Stem Cell Institute has 20+ years treating MS, Parkinson&apos;s, autism, and autoimmune conditions.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h4 className="font-bold text-gray-900 mb-2">If you can only make one trip...</h4>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-teal-600">Choose Panama.</span> Complete treatment in 4-5 days. Cayman requires two trips 6-8 weeks apart.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h4 className="font-bold text-gray-900 mb-2">If you prefer using your own cells...</h4>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-blue-600">Choose Cayman.</span> Autologous (your own) cells are the standard approach there.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h4 className="font-bold text-gray-900 mb-2">If cost is a major factor...</h4>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-teal-600">Panama is typically less expensive</span> ($25K-40K vs $35K-60K), plus you only need one trip (saving flights and hotels).
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h4 className="font-bold text-gray-900 mb-2">If you want the longest track record...</h4>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-teal-600">Panama&apos;s Stem Cell Institute</span> has been operating since 2006 with 10,000+ patients. Cayman clinics are newer (10-15 years).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Logistics */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Travel Logistics</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🇵🇦</span> Getting to Panama
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Flights:</strong> Direct from Miami (3h), Houston (3.5h), NYC (5.5h)</li>
              <li><strong>Visa:</strong> US passport—no visa required (up to 180 days)</li>
              <li><strong>Currency:</strong> US Dollar accepted everywhere</li>
              <li><strong>Stay:</strong> 4-5 nights typically</li>
              <li><strong>Hotels:</strong> Most patients stay in Panama City; clinic often arranges</li>
              <li><strong>Weather:</strong> Tropical year-round (75-90°F)</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🇰🇾</span> Getting to Cayman Islands
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Flights:</strong> Direct from Miami (1.5h), Atlanta (2.5h), Dallas (3h)</li>
              <li><strong>Visa:</strong> US passport—no visa required (up to 30 days)</li>
              <li><strong>Currency:</strong> Cayman Dollar (US$ widely accepted)</li>
              <li><strong>Stay:</strong> 2-3 nights per trip (two trips required)</li>
              <li><strong>Hotels:</strong> Grand Cayman has luxury resorts; clinics can recommend</li>
              <li><strong>Weather:</strong> Caribbean tropical (75-88°F)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Full Cost Comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Cost Element</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Panama</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Cayman Islands</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Treatment Package</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$25,000 - $40,000</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$35,000 - $60,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Flights (roundtrip)</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$400 - $800 (1 trip)</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$600 - $1,200 (2 trips)</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Hotel</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$500 - $1,000 (4-5 nights)</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$800 - $2,000 (4-6 nights total)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Ground Transport</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Often included</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$100 - $300</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-bold text-gray-900">Estimated Total</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-bold text-green-600">$26,000 - $42,000</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-bold text-green-600">$37,000 - $63,500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/panama-stem-cell-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇵🇦</span>
              <div>
                <div className="font-bold text-gray-900">Panama Stem Cell Guide</div>
                <div className="text-sm text-gray-600">Full guide to Golden Cells and the Stem Cell Institute</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/cayman-islands-stem-cell-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇰🇾</span>
              <div>
                <div className="font-bold text-gray-900">Cayman Islands Stem Cell Guide</div>
                <div className="text-sm text-gray-600">DVC Stem, Regenexx, and the two-trip process</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/us-vs-mexico-stem-cells" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🆚</span>
              <div>
                <div className="font-bold text-gray-900">US vs Mexico Stem Cells</div>
                <div className="text-sm text-gray-600">Budget-friendly alternative comparison</div>
              </div>
            </div>
          </Link>

          <Link href="/longevity" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⏳</span>
              <div>
                <div className="font-bold text-gray-900">Longevity Hub</div>
                <div className="text-sm text-gray-600">All longevity clinics and treatments</div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-gray-100 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-2">Important Disclaimer</h3>
          <p className="text-sm text-gray-600">
            This comparison is for informational purposes only. Stem cell therapy outcomes
            vary significantly. Neither Panama nor Cayman treatments are FDA-approved.
            Always consult with qualified healthcare providers and do thorough research
            before pursuing treatment. VitalityScout does not endorse specific clinics
            or guarantee outcomes.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
