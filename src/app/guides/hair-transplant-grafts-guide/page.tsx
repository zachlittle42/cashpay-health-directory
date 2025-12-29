import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Many Hair Grafts Do I Need? Complete Guide & Calculator (2025) | VitalityScout',
  description: 'Find out how many hair grafts you need based on your Norwood scale level. Includes graft calculator, cost estimates, and what affects your hair transplant results.',
  keywords: ['hair grafts', 'hair transplant grafts', 'Norwood scale', 'hair transplant calculator', 'FUE grafts', 'DHI grafts', 'hair transplant cost per graft'],
};

export default function HairGraftsGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How Many Hair Grafts Do I Need? Complete Guide',
    description: 'Comprehensive guide to understanding hair transplant grafts, the Norwood scale, and how many grafts you need for natural-looking results.',
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
    mainEntityOfPage: 'https://vitalityscout.com/guides/hair-transplant-grafts-guide',
    articleSection: 'Hair Transplant Guides',
    keywords: ['hair grafts', 'Norwood scale', 'hair transplant', 'FUE', 'DHI']
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
              <span className="text-gray-900">Hair Graft Guide</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-amber-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700">
                Guide
              </span>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Hair Transplant
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How Many Hair Grafts Do I Need? The Complete Guide
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about hair graft numbers: the Norwood scale, how density works, realistic expectations, and what your specific hair loss pattern means for your transplant.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Last updated: January 2025 • 10 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Takeaway */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-blue-900 mb-2">Quick Takeaway</h3>
            <p className="text-gray-700 mb-0">
              Most hair transplants use 2,000-4,000 grafts, with each graft containing 1-4 hairs. The exact number depends on your Norwood level (hair loss stage),
              desired density (30-50 grafts per cm²), and available donor hair. Early-stage loss (Norwood 2-3) typically needs 1,500-2,500 grafts;
              advanced loss (Norwood 5-7) may require 4,000-6,000+ grafts across multiple sessions.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding Grafts vs. Hairs</h2>
            <p>
              First, let&apos;s clear up the most common confusion: <strong>grafts and hairs aren&apos;t the same thing</strong>.
            </p>
            <p>
              A <strong>graft</strong> (also called a follicular unit) is a small piece of tissue containing 1-4 hair follicles.
              When clinics quote graft numbers, they&apos;re counting these units, not individual hairs.
            </p>

            <div className="bg-gray-50 rounded-lg p-4 my-6 not-prose">
              <h4 className="font-bold text-gray-900 mb-3">Grafts to Hairs Conversion</h4>
              <div className="grid gap-2 text-sm">
                <div className="flex justify-between items-center">
                  <span>Average hairs per graft:</span>
                  <span className="font-semibold">2.0 - 2.5 hairs</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>2,000 grafts =</span>
                  <span className="font-semibold">4,000 - 5,000 hairs</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>3,000 grafts =</span>
                  <span className="font-semibold">6,000 - 7,500 hairs</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>4,000 grafts =</span>
                  <span className="font-semibold">8,000 - 10,000 hairs</span>
                </div>
              </div>
            </div>

            <p>
              <strong>Why this matters:</strong> Some clinics advertise in &quot;hairs&quot; rather than grafts, making their numbers seem higher.
              Always confirm whether you&apos;re discussing grafts (follicular units) or individual hairs.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Norwood Scale Explained</h2>
            <p>
              The Norwood scale is the standard classification system for male pattern baldness. It ranges from Stage 1 (no significant hair loss) to Stage 7 (only a horseshoe of hair remains).
              Your Norwood level is the starting point for estimating graft needs.
            </p>

            {/* Norwood Scale Visual */}
            <div className="overflow-x-auto my-8 not-prose">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Norwood Stage</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Description</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Grafts Needed</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Typical Hair Count</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="px-4 py-3 font-medium text-green-600">Stage 1</td>
                    <td className="px-4 py-3">No significant hair loss</td>
                    <td className="px-4 py-3">0 (not a candidate)</td>
                    <td className="px-4 py-3 text-gray-500">—</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-green-600">Stage 2</td>
                    <td className="px-4 py-3">Minor recession at temples (mature hairline)</td>
                    <td className="px-4 py-3">800 - 1,500</td>
                    <td className="px-4 py-3 text-gray-600">1,600 - 3,750</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-yellow-600">Stage 3</td>
                    <td className="px-4 py-3">Deeper temple recession, early baldness</td>
                    <td className="px-4 py-3">1,500 - 2,500</td>
                    <td className="px-4 py-3 text-gray-600">3,000 - 6,250</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-yellow-600">Stage 3 Vertex</td>
                    <td className="px-4 py-3">Stage 3 + thinning crown (bald spot)</td>
                    <td className="px-4 py-3">2,500 - 3,500</td>
                    <td className="px-4 py-3 text-gray-600">5,000 - 8,750</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-orange-600">Stage 4</td>
                    <td className="px-4 py-3">Significant recession + crown thinning</td>
                    <td className="px-4 py-3">3,000 - 4,000</td>
                    <td className="px-4 py-3 text-gray-600">6,000 - 10,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-orange-600">Stage 5</td>
                    <td className="px-4 py-3">Thin band between front and crown</td>
                    <td className="px-4 py-3">3,500 - 5,000</td>
                    <td className="px-4 py-3 text-gray-600">7,000 - 12,500</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-red-600">Stage 6</td>
                    <td className="px-4 py-3">Front and crown merge, large bald area</td>
                    <td className="px-4 py-3">4,500 - 6,000</td>
                    <td className="px-4 py-3 text-gray-600">9,000 - 15,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-red-600">Stage 7</td>
                    <td className="px-4 py-3">Only horseshoe pattern remains</td>
                    <td className="px-4 py-3">6,000 - 7,000+</td>
                    <td className="px-4 py-3 text-gray-600">12,000 - 17,500+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6">
              <h4 className="text-amber-900 font-bold mb-2">Important Limitation</h4>
              <p className="text-sm text-amber-800 mb-0">
                Most people have 5,000-8,000 grafts available in their donor area (the back and sides of the head).
                This limits what&apos;s possible in a lifetime—advanced Norwood 6-7 patients often can&apos;t achieve full coverage.
                This is why surgeons recommend treating hair loss early, before you need more grafts than you have.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Hair Density: What Makes Results Look Natural</h2>
            <p>
              Graft numbers alone don&apos;t determine results—<strong>density</strong> is what creates the appearance of a full head of hair.
              Density is measured in grafts (or follicular units) per square centimeter.
            </p>

            <div className="space-y-4 my-6 not-prose">
              <div className="border-l-4 border-gray-300 pl-4 py-2">
                <h4 className="font-bold text-gray-900 mb-1">Natural Density: 80-100 FU/cm²</h4>
                <p className="text-gray-700 text-sm">
                  A person with no hair loss has roughly 80-100 follicular units per square centimeter. This is what we&apos;re trying to approximate.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h4 className="font-bold text-gray-900 mb-1">Transplant Target: 35-50 FU/cm²</h4>
                <p className="text-gray-700 text-sm">
                  Hair transplants typically aim for 35-50 grafts per cm². At 40+ grafts/cm², most people perceive hair as &quot;full.&quot;
                  This is because each graft contains multiple hairs, and strategic placement maximizes visual coverage.
                </p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4 py-2">
                <h4 className="font-bold text-gray-900 mb-1">Minimum Viable: 25-35 FU/cm²</h4>
                <p className="text-gray-700 text-sm">
                  Below 35 grafts/cm², hair starts looking thin. Some patients opt for lower density to spread limited donor hair over a larger area—functional but not as thick.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Estimate Your Graft Needs</h2>
            <p>
              Here&apos;s a simplified calculation method (this is what clinics use as a starting point):
            </p>

            <div className="bg-gray-50 rounded-lg p-6 my-6 not-prose">
              <h4 className="font-bold text-gray-900 mb-4">Basic Calculation Formula</h4>
              <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
                <code className="text-lg font-mono">
                  Grafts Needed = Treatment Area (cm²) × Target Density (grafts/cm²)
                </code>
              </div>
              <div className="space-y-3 text-sm">
                <p><strong>Example 1: Hairline restoration only</strong></p>
                <p>Treatment area: ~30 cm² | Target density: 40 FU/cm²</p>
                <p>30 × 40 = <strong>1,200 grafts</strong></p>

                <p className="pt-3"><strong>Example 2: Hairline + crown</strong></p>
                <p>Treatment area: ~100 cm² | Target density: 40 FU/cm²</p>
                <p>100 × 40 = <strong>4,000 grafts</strong></p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What Affects Your Personal Estimate</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Hair color vs. skin color</strong> — Dark hair on light skin is more forgiving (higher contrast needs less density). Blonde on fair skin can look thinner.</li>
              <li><strong>Hair texture</strong> — Curly and wavy hair provides more coverage per graft than straight hair.</li>
              <li><strong>Hair thickness</strong> — Coarse, thick hair covers more scalp than fine hair.</li>
              <li><strong>Future hair loss</strong> — A good surgeon plans for continued loss. Going too aggressive now may look odd later.</li>
              <li><strong>Your goals</strong> — Do you want dense coverage or just framing? Maximum restoration or conservative improvement?</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Donor Area: Your Limiting Factor</h2>
            <p>
              Here&apos;s the uncomfortable truth: <strong>you can&apos;t transplant more than you have</strong>.
            </p>
            <p>
              The donor area (back and sides of your head) is finite. Most people have 5,000-8,000 total grafts available for extraction over their lifetime.
              This is why surgeons talk about &quot;donor management&quot; and why multiple sessions are sometimes needed.
            </p>

            <div className="overflow-x-auto my-6 not-prose">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Donor Capacity</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Available Grafts</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">What This Means</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="px-4 py-3 font-medium text-green-600">Excellent</td>
                    <td className="px-4 py-3">7,000 - 8,000+</td>
                    <td className="px-4 py-3 text-gray-600">Can cover most Norwood levels with good density</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-yellow-600">Average</td>
                    <td className="px-4 py-3">5,000 - 7,000</td>
                    <td className="px-4 py-3 text-gray-600">Good for Norwood 3-5; may need to prioritize areas</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-red-600">Limited</td>
                    <td className="px-4 py-3">&lt;5,000</td>
                    <td className="px-4 py-3 text-gray-600">Challenging; requires careful planning and expectations</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              <strong>Body hair transplants (BHT)</strong> can supplement donor hair in some cases, using beard or chest hair.
              But body hair has different characteristics and growth cycles—it&apos;s not a perfect substitute.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">One Session or Multiple?</h2>
            <p>
              Most clinics can transplant 3,000-5,000 grafts in a single session (a full day, 6-10 hours).
              Mega sessions of 5,000-6,000 grafts are possible but require experienced teams.
            </p>

            <div className="space-y-4 my-6 not-prose">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">When One Session Works</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Norwood 2-4 patients (typically need 1,500-4,000 grafts)</li>
                  <li>• Focused restoration (just hairline or just crown)</li>
                  <li>• Good donor density</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">When Multiple Sessions Are Needed</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Norwood 5-7 patients (5,000+ grafts for full coverage)</li>
                  <li>• Limited donor density requiring careful extraction</li>
                  <li>• Planning for future hair loss (staged approach)</li>
                  <li>• Want to preserve donor area for future needs</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Cost Per Graft: What to Expect</h2>

            <div className="overflow-x-auto my-6 not-prose">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Location</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Cost Per Graft</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">3,000 Grafts Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="px-4 py-3 font-medium">United States</td>
                    <td className="px-4 py-3">$4 - $10/graft</td>
                    <td className="px-4 py-3 text-red-600 font-semibold">$12,000 - $30,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">UK/Europe</td>
                    <td className="px-4 py-3">$3 - $7/graft</td>
                    <td className="px-4 py-3">$9,000 - $21,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Turkey</td>
                    <td className="px-4 py-3">$0.50 - $2/graft</td>
                    <td className="px-4 py-3 text-green-600 font-semibold">$1,500 - $6,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Mexico</td>
                    <td className="px-4 py-3">$1.50 - $3/graft</td>
                    <td className="px-4 py-3 text-green-600 font-semibold">$4,500 - $9,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Thailand</td>
                    <td className="px-4 py-3">$2 - $4/graft</td>
                    <td className="px-4 py-3 text-green-600 font-semibold">$6,000 - $12,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              <strong>Note on Turkey pricing:</strong> Many Turkish clinics offer all-inclusive packages (flight, hotel, procedure) for $2,000-4,000 total,
              which is why the per-graft cost can seem artificially low. Be cautious of &quot;graft mill&quot; clinics that prioritize volume over quality.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Mistakes to Avoid</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Chasing maximum grafts</strong> — More isn&apos;t always better. Over-harvesting damages your donor area and can look unnatural.</li>
              <li><strong>Ignoring future hair loss</strong> — If you&apos;re 25 and Norwood 3, you may progress further. A conservative approach now leaves options later.</li>
              <li><strong>Choosing solely on graft count</strong> — A skilled surgeon extracting 2,500 grafts will outperform a graft mill doing 5,000 poorly.</li>
              <li><strong>Unrealistic expectations</strong> — Transplanted hair is still your hair. If you have fine, light hair, results will differ from someone with thick, dark hair.</li>
              <li><strong>Ignoring medical therapy</strong> — Finasteride and minoxidil can maintain existing hair and reduce how many grafts you&apos;ll need over time.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Bottom Line</h2>
            <p>
              <strong>General guidelines:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Norwood 2-3:</strong> 1,000-2,500 grafts, usually one session</li>
              <li><strong>Norwood 3 Vertex - 4:</strong> 2,500-4,000 grafts, one session often sufficient</li>
              <li><strong>Norwood 5-6:</strong> 4,000-6,000 grafts, may require two sessions</li>
              <li><strong>Norwood 7:</strong> 6,000+ grafts, multiple sessions, may not achieve full coverage</li>
            </ul>
            <p>
              These are estimates. The only way to know your actual needs is an in-person or virtual consultation with a qualified surgeon who can assess your donor area, hair characteristics, and goals.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
              <h4 className="text-blue-900 font-bold mb-2">Next Steps</h4>
              <p className="text-sm text-blue-800 mb-0">
                Get consultations from 2-3 clinics before deciding. A good surgeon will give you a range, not a single number.
                Be wary of anyone who quotes grafts without seeing your scalp. And remember: you can always add more grafts later, but you can&apos;t undo a bad transplant.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Compare Hair Transplant Clinics</h3>
            <p className="text-gray-600 mb-6">
              See top-rated clinics in Turkey and compare pricing, techniques, and patient results.
            </p>
            <Link
              href="/hair-transplant"
              className="inline-block rounded-lg bg-amber-600 px-8 py-4 text-lg font-medium text-white hover:bg-amber-700 transition-colors"
            >
              View Hair Transplant Clinics →
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 my-8">
            <h4 className="text-gray-900 font-bold mb-2">Medical Disclaimer</h4>
            <p className="text-sm text-gray-700 mb-0">
              This guide provides general information about hair transplant grafts and is not a substitute for professional medical advice.
              Graft estimates vary significantly based on individual factors. Always consult with a board-certified hair transplant surgeon for personalized assessment.
            </p>
          </div>

          {/* Sources */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• <a href="https://www.bernsteinmedical.com/hair-transplant/basics/graft-numbers/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Bernstein Medical: Hair Transplant Graft Numbers</a></li>
              <li>• <a href="https://www.hims.com/blog/how-many-hair-grafts-do-i-need" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Hims: How Many Hair Grafts Do I Need?</a></li>
              <li>• <a href="https://wimpoleclinic.com/blog/many-grafts-needed-hair-transplant/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Wimpole Clinic: Grafts Needed for Hair Transplant</a></li>
              <li>• <a href="https://www.dentalhairclinicturkey.com/how-many-grafts-do-i-need/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Dental Hair Clinic Turkey: Norwood Scale Grafts Guide</a></li>
            </ul>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
