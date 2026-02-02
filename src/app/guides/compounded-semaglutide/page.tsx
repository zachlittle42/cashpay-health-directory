import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compounded Semaglutide: What You Need to Know in 2025 | VitalityScout',
  description: 'Complete guide to compounded semaglutide: FDA status, legal changes, safety concerns, costs vs brand-name, and what alternatives exist now that the shortage has ended.',
  keywords: ['compounded semaglutide', 'compounding pharmacy', 'Ozempic alternative', 'semaglutide cost', 'FDA shortage', 'telehealth weight loss'],
};

export default function CompoundedSemaglutideGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Compounded Semaglutide: What You Need to Know in 2025',
    description: 'Complete guide to compounded semaglutide including FDA status, legal changes, safety, costs, and alternatives after the shortage ended.',
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
    mainEntityOfPage: 'https://vitalityscout.com/guides/compounded-semaglutide',
    articleSection: 'Health Guides',
    keywords: ['compounded semaglutide', 'FDA', 'Ozempic', 'weight loss', 'telehealth', 'compounding pharmacy']
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
              <span className="text-gray-900">Compounded Semaglutide</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-orange-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700">
                Guide
              </span>
              <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
                FDA Update 2025
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Compounded Semaglutide: What You Need to Know in 2025
            </h1>
            <p className="text-xl text-gray-600">
              The FDA has declared the semaglutide shortage over. Here&apos;s what that means for compounded versions, your options going forward, and what&apos;s actually still legal.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Last updated: January 2025 • 10 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Alert Box */}
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-red-900 mt-0 mb-2">⚠️ Important: Regulatory Landscape Has Changed</h3>
            <p className="text-red-800 mb-3">
              In February 2025, the FDA declared the semaglutide shortage &quot;resolved.&quot; This triggered significant changes to compounding rules.
              Most compounded semaglutide became technically illegal to manufacture, with limited exceptions.
            </p>
            <p className="text-red-800 mb-0 text-sm">
              <strong>Bottom line:</strong> If you&apos;re currently using compounded semaglutide, your provider may need to transition you to brand-name options or other alternatives. Check with your telehealth provider about their current offerings.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Quick Takeaway */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 not-prose">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Quick Takeaway</h3>
              <p className="text-gray-700 mb-0">
                Compounded semaglutide offered a cheaper alternative ($150-300/month vs $1,000+) during the drug shortage.
                With the shortage resolved, the legal landscape has shifted dramatically. Options now include brand-name at reduced prices through partnerships (like Ro&apos;s $499/month),
                or waiting to see how ongoing lawsuits play out. The days of $199 compounded semaglutide appear to be ending.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Is Compounded Semaglutide?</h2>
            <p>
              Let&apos;s start with the basics. <strong>Compounded semaglutide</strong> is the same active ingredient found in Ozempic and Wegovy,
              but it&apos;s mixed by a <em>compounding pharmacy</em> rather than manufactured by Novo Nordisk (the pharmaceutical company that makes the brand-name versions).
            </p>
            <p>
              Think of it like this: Novo Nordisk makes the &quot;Coca-Cola&quot; version. Compounding pharmacies were making the &quot;generic cola&quot;—same basic ingredient,
              but not the official product.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Why Did Compounded Versions Exist?</h3>
            <p>
              Under normal circumstances, compounding pharmacies can&apos;t just copy FDA-approved drugs. But there&apos;s an exception:
              when there&apos;s a <strong>drug shortage</strong>, compounders can step in to meet patient demand.
            </p>
            <p>
              And that&apos;s exactly what happened. The explosive demand for GLP-1 medications (thanks to their effectiveness for weight loss)
              created a massive shortage. Novo Nordisk couldn&apos;t make enough Ozempic and Wegovy to meet demand.
              Enter compounding pharmacies, which filled the gap with their own versions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The February 2025 FDA Announcement: What Changed</h2>
            <p>
              On February 21, 2025, the FDA officially declared the semaglutide shortage &quot;resolved.&quot;
              This wasn&apos;t just a status update—it fundamentally changed what compounders can legally do.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 not-prose">
              <h4 className="font-bold text-gray-900 mb-4">Key Dates & Deadlines</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-gray-700 whitespace-nowrap">Feb 21, 2025:</span>
                  <span className="text-gray-600">FDA declares semaglutide shortage resolved</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-gray-700 whitespace-nowrap">Apr 22, 2025:</span>
                  <span className="text-gray-600">Deadline for state-licensed pharmacies to stop compounding semaglutide (may be extended by court rulings)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-gray-700 whitespace-nowrap">May 22, 2025:</span>
                  <span className="text-gray-600">Final deadline for 503B outsourcing facilities</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What This Means Practically</h3>
            <p>
              <strong>For most people:</strong> Compounded semaglutide will become unavailable or already has.
              Telehealth companies that built their business on compounded versions are scrambling to pivot.
            </p>
            <p>
              <strong>The exceptions:</strong> Compounding is still allowed if your doctor can demonstrate a specific medical reason why FDA-approved versions don&apos;t work for you—like
              an allergy to a dye in the brand-name product, or needing a different delivery method. This is a narrow exception, not a loophole for everyone.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Legal Battles: It&apos;s Not Settled Yet</h2>
            <p>
              The compounding industry isn&apos;t going quietly. On February 24, 2025, the <strong>Outsourcing Facilities Association filed a lawsuit</strong> challenging
              the FDA&apos;s determination that the shortage is actually resolved. Their argument: just because Novo Nordisk says they can meet demand doesn&apos;t mean patients can actually afford or access the medication.
            </p>
            <p>
              This lawsuit could extend the timeline. Federal Judge Mark Pittman is hearing the case, and a preliminary injunction could delay enforcement.
              But betting your treatment plan on legal proceedings is risky.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Compounded vs. Brand-Name: What&apos;s the Actual Difference?</h2>

            <div className="overflow-x-auto my-6 not-prose">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Factor</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Brand-Name (Ozempic/Wegovy)</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Compounded Semaglutide</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="px-4 py-3 font-medium">FDA Approved</td>
                    <td className="px-4 py-3 text-green-600">✓ Yes</td>
                    <td className="px-4 py-3 text-red-600">✗ No</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Cost (cash-pay)</td>
                    <td className="px-4 py-3">$1,000-1,800/month</td>
                    <td className="px-4 py-3">$150-300/month</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Quality Control</td>
                    <td className="px-4 py-3">Standardized, rigorous</td>
                    <td className="px-4 py-3">Varies by pharmacy</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Dosing Consistency</td>
                    <td className="px-4 py-3">Exact, batch-to-batch</td>
                    <td className="px-4 py-3">May vary slightly</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Clinical Trial Data</td>
                    <td className="px-4 py-3">Extensive</td>
                    <td className="px-4 py-3">Limited (same ingredient)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Legal Status (2025)</td>
                    <td className="px-4 py-3 text-green-600">Fully legal</td>
                    <td className="px-4 py-3 text-red-600">Restricted/phasing out</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">The Semaglutide Salt Controversy</h3>
            <p>
              Here&apos;s something the FDA has specifically warned about: some compounders use <strong>semaglutide salts</strong> (like semaglutide sodium or semaglutide acetate)
              instead of the base form of semaglutide used in approved products.
            </p>
            <p>
              The FDA says these salt forms are <strong>not the same</strong> as the approved medication, and their safety and effectiveness haven&apos;t been evaluated.
              If you&apos;ve been using compounded semaglutide, it&apos;s worth asking your provider whether they use the base form or a salt version.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Was Compounded Semaglutide Actually Safe?</h2>
            <p>
              This is the million-dollar question. The honest answer: <em>probably, for most people, from reputable sources</em>—but with important caveats.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What We Know</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Hims published data on 10,000+ patients</strong> using their compounded semaglutide, showing similar safety and effectiveness to brand-name versions.
                Patients lost an average of 9.3 pounds in the first month with tolerable side effects.
              </li>
              <li>
                <strong>The active ingredient is the same</strong>—semaglutide is semaglutide. The concerns are about purity, dosing accuracy, and sterility, not the molecule itself.
              </li>
              <li>
                <strong>Reputable compounding pharmacies follow standards</strong>—they&apos;re licensed, inspected, and have quality control processes. They&apos;re not sketchy overseas operations.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">The Concerns</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Less oversight</strong>—compounded drugs don&apos;t go through FDA approval, meaning no independent verification of safety data.
              </li>
              <li>
                <strong>Quality varies</strong>—not all compounding pharmacies are equal. Some have had contamination issues in the past (with other drugs).
              </li>
              <li>
                <strong>Dosing precision</strong>—brand-name manufacturers have extremely tight tolerances. Compounders may have more batch-to-batch variation.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Your Options Going Forward</h2>
            <p>
              If you&apos;ve been on compounded semaglutide (or were considering it), here&apos;s what you can actually do now:
            </p>

            <div className="space-y-6 my-8 not-prose">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="font-bold text-gray-900 mb-2">Option 1: Brand-Name Through Insurance</h4>
                <p className="text-gray-700 mb-2">
                  If you have commercial insurance, Wegovy or Zepbound may be covered—especially if you have obesity with a comorbidity (diabetes, hypertension, etc.).
                  Copays with coverage can be $25-200/month.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Downside:</strong> Many insurers still don&apos;t cover weight loss medications, and prior authorizations can be a hassle.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h4 className="font-bold text-gray-900 mb-2">Option 2: Brand-Name via Telehealth Partnerships</h4>
                <p className="text-gray-700 mb-2">
                  Ro has partnered with Novo Nordisk to offer brand-name medications at reduced prices. Their Body program offers Wegovy/Zepbound starting at $499/month—still expensive,
                  but nearly half the retail price.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Best for:</strong> People who want FDA-approved medication without fighting insurance.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h4 className="font-bold text-gray-900 mb-2">Option 3: Tirzepatide (While Supplies Last)</h4>
                <p className="text-gray-700 mb-2">
                  As of late 2024, tirzepatide (Mounjaro/Zepbound) was still in shortage, meaning compounded versions remained available. However,
                  this situation is also evolving. Check current shortage status before assuming availability.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Note:</strong> The FDA has also been scrutinizing tirzepatide compounding.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4 py-2">
                <h4 className="font-bold text-gray-900 mb-2">Option 4: Manufacturer Savings Programs</h4>
                <p className="text-gray-700 mb-2">
                  Novo Nordisk (for Wegovy) and Eli Lilly (for Zepbound) offer savings programs for eligible patients. These can significantly reduce costs if you don&apos;t have insurance coverage.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Check:</strong> NovoCare.com and Lilly.com for current programs.
                </p>
              </div>

              <div className="border-l-4 border-gray-400 pl-4 py-2">
                <h4 className="font-bold text-gray-900 mb-2">Option 5: Wait and See</h4>
                <p className="text-gray-700 mb-2">
                  The lawsuit challenging the FDA&apos;s shortage determination could change things. If you&apos;re not in a rush, monitoring the legal situation over the next few months might reveal new options.
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Risk:</strong> No guarantee of any change, and you&apos;ll be without medication in the meantime.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Are Telehealth Companies Doing?</h2>
            <p>
              The major players who built businesses on compounded semaglutide are pivoting in different ways:
            </p>

            <div className="overflow-x-auto my-6 not-prose">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Company</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Current Approach</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Starting Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="px-4 py-3 font-medium">Hims/Hers</td>
                    <td className="px-4 py-3">Transitioning to brand-name; check current availability</td>
                    <td className="px-4 py-3">~$199/mo (was compounded)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Ro Body</td>
                    <td className="px-4 py-3">Brand-name via Novo Nordisk partnership</td>
                    <td className="px-4 py-3">$499/mo</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Calibrate</td>
                    <td className="px-4 py-3">Brand-name only (always was)</td>
                    <td className="px-4 py-3">$199/mo + insurance for meds</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Noom Med</td>
                    <td className="px-4 py-3">Check current offerings</td>
                    <td className="px-4 py-3">Varies</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Found</td>
                    <td className="px-4 py-3">Transitioning; multiple medication options</td>
                    <td className="px-4 py-3">$99-399/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              <strong>Key insight:</strong> The GLP-1 telehealth landscape is in flux. Prices and availability change frequently.
              Before signing up with any provider, confirm exactly what medication they&apos;re currently offering and at what price.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Bottom Line</h2>
            <p>
              Compounded semaglutide served an important role during the shortage—it made effective weight loss medication accessible to people
              who couldn&apos;t afford $1,500/month. But the regulatory window is closing.
            </p>
            <p>
              <strong>If you&apos;re currently on compounded semaglutide:</strong> Talk to your provider now about transition plans. Don&apos;t wait until you run out of medication.
            </p>
            <p>
              <strong>If you were considering starting:</strong> Your realistic options are now brand-name (through insurance, savings programs, or telehealth partnerships)
              or waiting to see how the legal situation evolves.
            </p>
            <p>
              The silver lining: the intense demand has pushed manufacturers and telehealth companies to find ways to reduce costs.
              Brand-name options at $499/month—while still expensive—represent a significant drop from the $1,500+ retail price. Competition and innovation may continue to improve access.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Find GLP-1 Treatment Options</h3>
            <p className="text-gray-600 mb-6">
              Compare telehealth providers or find local weight loss clinics with in-person care.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/glp1"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 transition-colors"
              >
                Telehealth GLP-1 Providers →
              </Link>
              <Link
                href="/weight-loss"
                className="inline-block rounded-lg border-2 border-blue-600 px-6 py-3 font-medium text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Local Weight Loss Clinics →
              </Link>
            </div>
          </div>

          {/* Related Resources */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
            <h4 className="font-bold text-gray-900 mb-4">Related Resources</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/guides/glp1-weight-loss-complete-guide" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">Complete GLP-1 Guide</div>
                <div className="text-sm text-gray-600">Everything about semaglutide and tirzepatide</div>
              </Link>
              <Link href="/guides/hims-vs-ro-vs-calibrate" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-colors">
                <div className="font-medium text-gray-900 mb-1">Hims vs Ro vs Calibrate</div>
                <div className="text-sm text-gray-600">Compare the top telehealth weight loss programs</div>
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 my-8">
            <h4 className="text-gray-900 font-bold mb-2">Medical Disclaimer</h4>
            <p className="text-sm text-gray-700 mb-0">
              This guide is for educational purposes only and does not constitute medical advice. GLP-1 medications are prescription drugs
              that should only be used under physician supervision. Regulatory information in this article reflects the situation at the time
              of publication and may change. Always verify current regulations and consult with a qualified healthcare provider.
            </p>
          </div>

          {/* Sources */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Sources & Further Reading</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• <a href="https://www.fda.gov/drugs/drug-safety-and-availability/fda-clarifies-policies-compounders-national-glp-1-supply-begins-stabilize" target="_blank" rel="noopener" className="text-blue-600 hover:underline">FDA: Clarifies Policies for Compounders as GLP-1 Supply Stabilizes</a></li>
              <li>• <a href="https://www.mwe.com/insights/semaglutide-shortage-resolved/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">McDermott: Semaglutide Shortage Resolved - Legal Analysis</a></li>
              <li>• <a href="https://ncpa.org/newsroom/qam/2025/03/13/fda-ends-compounding-discretion-tirzepatide-maintains-discretion" target="_blank" rel="noopener" className="text-blue-600 hover:underline">NCPA: FDA Ends Compounding Discretion for Tirzepatide</a></li>
              <li>• <a href="https://www.americanboardcosmeticsurgery.org/news/may-2025-glp-1-fda-policy-changes/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">ABCS: What Patients Need to Know About GLP-1 FDA Policy Changes</a></li>
              <li>• <a href="https://www.bloomberg.com/news/articles/2024-10-29/hims-says-weight-loss-shot-just-as-safe-as-ozempic-and-wegovy" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Bloomberg: Hims Says Weight-Loss Shot &apos;Just as Safe&apos; as Ozempic and Wegovy</a></li>
            </ul>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
