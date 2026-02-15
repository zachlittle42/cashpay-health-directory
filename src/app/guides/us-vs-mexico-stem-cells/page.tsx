import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';

export const metadata: Metadata = {
  title: 'US vs Mexico Stem Cell Therapy: Cost, Legality & Safety Comparison | VitalityScout',
  description: 'Compare stem cell therapy in the US vs Mexico. Cost differences ($15K-$50K vs $5K-$20K), FDA regulations vs COFEPRIS, and which is right for your condition.',
};

export default function USvsMexicoStemCells() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'US vs Mexico Stem Cell Therapy Comparison',
    description: 'Comprehensive comparison of stem cell therapy options in the United States versus Mexico',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    dateModified: '2024-12-21',
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/longevity" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Longevity Hub
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">🇺🇸</span>
            <span className="text-2xl text-gray-400">vs</span>
            <span className="text-4xl">🇲🇽</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            US vs Mexico for Stem Cell Therapy
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            A practical comparison: cost, legality, treatment options, and how to decide
            which approach is right for your situation.
          </p>
        </div>
      </section>

      {/* FDA Disclaimer */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-red-900 mb-3">Important Regulatory Notice</h3>
          <p className="text-sm text-red-800 mb-3">
            <strong>Most stem cell therapies are NOT FDA-approved for clinical use.</strong> The FDA has approved only a limited number of stem cell products (primarily for blood disorders). Many treatments advertised in both countries are considered experimental.
          </p>
          <p className="text-sm text-red-800">
            This comparison is for informational purposes. Always consult qualified medical professionals before pursuing any stem cell treatment.
          </p>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Comparison</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Factor</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">
                  <span className="flex items-center gap-2">🇺🇸 United States</span>
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">
                  <span className="flex items-center gap-2">🇲🇽 Mexico</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Cost Range</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$15,000 - $50,000+</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$5,000 - $20,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Regulatory Body</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">FDA (strict enforcement)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">COFEPRIS (more permissive)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Legal Status</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Most treatments prohibited or restricted</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Broader range of treatments available</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Cell Types Available</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Mostly autologous (your own cells)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Autologous + allogeneic (donor) + expanded</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Travel Required</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Depends on clinic location</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Yes, typically Tijuana or Mexico City</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Follow-up Care</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Easy access to treating physician</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Remote + local physician coordination</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Insurance Coverage</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Almost never covered</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Never covered</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* The US Situation */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="text-3xl">🇺🇸</span> Stem Cell Therapy in the US
          </h2>

          <div className="prose prose-lg max-w-none">
            <h3>What&apos;s Actually Legal</h3>
            <p>
              The FDA has approved only a handful of stem cell products, primarily:
            </p>
            <ul>
              <li>Cord blood stem cells for blood disorders (leukemia, lymphoma)</li>
              <li>Bone marrow transplants for cancer treatment</li>
              <li>Hematopoietic stem cell transplants for specific conditions</li>
            </ul>

            <p>
              For conditions like arthritis, back pain, or anti-aging, the FDA allows only
              <strong>&quot;minimal manipulation&quot;</strong> of your own cells. This means clinics can:
            </p>
            <ul>
              <li>Extract your fat or bone marrow</li>
              <li>Process it minimally (centrifuge, filter)</li>
              <li>Inject it back into you the same day</li>
            </ul>

            <p>
              They <strong>cannot</strong> expand cells in a lab, add growth factors, or use
              donor cells for most conditions. This significantly limits treatment potency.
            </p>

            <h3>US Clinic Reality</h3>
            <p>
              Despite FDA restrictions, hundreds of US clinics offer stem cell treatments.
              Many operate in legal gray areas, marketing &quot;stem cell therapy&quot; when they&apos;re
              actually providing PRP (platelet-rich plasma) or minimally processed fat injections.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 not-prose my-6">
              <p className="text-sm text-yellow-800">
                <strong>Watch out:</strong> Many US clinics charge $5,000-$15,000 for treatments
                that may contain very few actual stem cells due to regulatory limitations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Mexico Situation */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
          <span className="text-3xl">🇲🇽</span> Stem Cell Therapy in Mexico
        </h2>

        <div className="prose prose-lg max-w-none">
          <h3>Why Mexico?</h3>
          <p>
            Mexico&apos;s regulatory environment (COFEPRIS) allows treatments that aren&apos;t permitted
            in the US. Key differences:
          </p>
          <ul>
            <li><strong>Expanded cells:</strong> Labs can multiply your cells over weeks, yielding 50-200 million cells vs 1-5 million from same-day procedures</li>
            <li><strong>Allogeneic (donor) cells:</strong> Umbilical cord, placental, and Wharton&apos;s jelly MSCs are widely available</li>
            <li><strong>Multiple injection sites:</strong> IV, intrathecal (spinal), and localized injections common</li>
            <li><strong>More conditions treated:</strong> Clinics openly treat autism, MS, Parkinson&apos;s, and other conditions the FDA won&apos;t allow</li>
          </ul>

          <h3>Top Mexico Stem Cell Destinations</h3>
        </div>

        <div className="grid gap-4 md:grid-cols-2 mt-6">
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h4 className="font-bold text-gray-900 mb-2">Tijuana</h4>
            <p className="text-sm text-gray-600 mb-3">
              Most accessible for Americans. Walk across the border from San Diego.
              Home to GIOSTAR, Regenamex, and numerous clinics.
            </p>
            <div className="text-sm text-green-600 font-semibold">1-hour from San Diego</div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h4 className="font-bold text-gray-900 mb-2">Mexico City</h4>
            <p className="text-sm text-gray-600 mb-3">
              More established medical infrastructure. Hospitals like Angeles and ABC
              have regenerative medicine departments.
            </p>
            <div className="text-sm text-green-600 font-semibold">Direct flights from most US cities</div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h4 className="font-bold text-gray-900 mb-2">Puerto Vallarta</h4>
            <p className="text-sm text-gray-600 mb-3">
              Clinic-resort combinations. Recovery-friendly beach destination with
              several regenerative medicine clinics.
            </p>
            <div className="text-sm text-green-600 font-semibold">Combine treatment with vacation</div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h4 className="font-bold text-gray-900 mb-2">Cancun</h4>
            <p className="text-sm text-gray-600 mb-3">
              Similar to Puerto Vallarta—tourism infrastructure with emerging
              regenerative medicine options.
            </p>
            <div className="text-sm text-green-600 font-semibold">2.5-hour flight from Miami</div>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cost Comparison by Condition</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Condition</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">US Price</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Mexico Price</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Knee Osteoarthritis</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$8,000 - $25,000</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$3,500 - $8,000</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">50-70%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Systemic Anti-Aging</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$15,000 - $35,000</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$8,000 - $18,000</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">40-60%</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Autoimmune Conditions</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Not available</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$12,000 - $25,000</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-blue-600">Only option</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Neurological (MS, Parkinson&apos;s)</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Clinical trials only</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$15,000 - $30,000</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-blue-600">Only option</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Note: Mexico prices often include hotel, transportation, and follow-up care. US prices typically do not.
          </p>
        </div>
      </section>

      {/* Who Should Go Where */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Who Should Go Where?</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🇺🇸</span> Consider the US If...
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>You have a condition with FDA-approved treatments (certain cancers, blood disorders)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>You qualify for a clinical trial (free or reduced-cost treatment)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>You want orthopedic treatment and your insurance may cover it</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>You need ongoing follow-up care and can&apos;t travel repeatedly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>You prefer the legal protection of US medical malpractice laws</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border-2 border-green-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🇲🇽</span> Consider Mexico If...
            </h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Your condition isn&apos;t treatable under FDA regulations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>You want expanded (lab-grown) cells with higher cell counts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Cost is a major factor and you can pay out-of-pocket</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>You&apos;re seeking anti-aging or regenerative medicine protocols</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>You&apos;re comfortable coordinating care across borders</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Safety Considerations */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Safety Considerations</h2>

          <div className="prose prose-lg max-w-none">
            <h3>US Safety</h3>
            <p>
              FDA oversight means more consistent quality control, but doesn&apos;t eliminate risk.
              The FDA has shut down clinics for contamination issues and false claims.
              Always verify any US clinic isn&apos;t under FDA warning.
            </p>

            <h3>Mexico Safety</h3>
            <p>
              Quality varies dramatically. Key safety checks:
            </p>
            <ul>
              <li>Is the clinic licensed by COFEPRIS?</li>
              <li>Does the lab have proper certifications (GMP, ISO)?</li>
              <li>Can they provide batch testing results for cell products?</li>
              <li>What&apos;s the physician&apos;s training and experience?</li>
              <li>What hospital backup exists for emergencies?</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 not-prose my-6">
              <p className="text-sm text-yellow-800">
                <strong>Red flag:</strong> Any clinic that guarantees results or claims stem cells can &quot;cure&quot; your condition. Legitimate clinics present realistic expectations and discuss potential risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/mexico-stem-cell-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇲🇽</span>
              <div>
                <div className="font-bold text-gray-900">Mexico Stem Cell Guide</div>
                <div className="text-sm text-gray-600">Clinic profiles, costs, what to expect</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/panama-stem-cell-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇵🇦</span>
              <div>
                <div className="font-bold text-gray-900">Panama Stem Cell Guide</div>
                <div className="text-sm text-gray-600">Premium &quot;Golden Cells&quot; option</div>
              </div>
            </div>
          </Link>

          <Link href="/longevity" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⏳</span>
              <div>
                <div className="font-bold text-gray-900">Longevity Hub</div>
                <div className="text-sm text-gray-600">US clinics, treatments, regional guides</div>
              </div>
            </div>
          </Link>

          <Link href="/longevity/california" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌴</span>
              <div>
                <div className="font-bold text-gray-900">California Longevity Clinics</div>
                <div className="text-sm text-gray-600">Human Longevity, Next Health, and more</div>
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
            This guide is for informational purposes only and does not constitute medical advice.
            Stem cell therapy outcomes vary significantly based on condition, cell type, and
            individual factors. Always consult with qualified healthcare providers before
            pursuing any treatment. VitalityScout does not endorse any specific clinic or
            guarantee treatment outcomes.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Get Our Stem Cell Clinic Comparison Guide"
          description="US vs Mexico: detailed cost breakdowns, clinic profiles, and patient outcomes."
          source="guide_us_vs_mexico_stem_cells"
        />
      </div>

      <Footer />
    </main>
  );
}
