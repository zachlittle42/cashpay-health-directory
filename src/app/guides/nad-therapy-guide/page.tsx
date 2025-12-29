import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NAD+ Therapy Guide: IV Infusions, Costs & Evidence (2025) | VitalityScout',
  description: 'Complete NAD+ therapy guide covering IV infusions, oral supplements, costs ($250-2,000), what the science actually shows, and whether it\'s worth the investment.',
  keywords: ['NAD+ therapy', 'NAD+ IV infusion', 'NAD+ supplement', 'anti-aging', 'longevity', 'NAD+ cost', 'nicotinamide riboside', 'NMN'],
};

export default function NADTherapyGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'NAD+ Therapy Guide: IV Infusions, Costs & Evidence',
    description: 'Comprehensive guide to NAD+ therapy covering science, delivery methods, costs, and evidence-based assessment.',
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
    mainEntityOfPage: 'https://vitalityscout.com/guides/nad-therapy-guide',
    articleSection: 'Longevity Guides',
    keywords: ['NAD+', 'longevity', 'anti-aging', 'IV therapy', 'supplements']
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
              <span className="text-gray-900">NAD+ Therapy</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-purple-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4">
              <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
                Longevity
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              NAD+ Therapy: What the Science Actually Says
            </h1>
            <p className="text-xl text-gray-600">
              A balanced look at NAD+ therapy—IV infusions vs supplements, what research supports (and doesn&apos;t), real costs, and how to evaluate if it&apos;s right for you.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Last updated: January 2025 • 15 min read
            </p>
          </div>
        </section>

        {/* Important Context */}
        <div className="bg-yellow-50 border-b-2 border-yellow-200">
          <div className="mx-auto max-w-4xl px-4 py-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">⚠️</div>
              <div>
                <h3 className="font-bold text-yellow-900 text-lg mb-2">Evidence Context</h3>
                <p className="text-yellow-800 text-sm">
                  NAD+ therapy is heavily marketed by longevity clinics, but the human evidence is limited. Most impressive results come from animal or cell studies. This guide presents the current state of research honestly—including what we don&apos;t know yet.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Facts Box */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">NAD+ Therapy: Quick Facts</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-purple-600 mb-1">IV Infusion Cost</div>
                <div className="text-gray-900 font-semibold">$250 - $2,000+</div>
                <div className="text-gray-600">Per session (2-4 hours)</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-1">Supplement Cost</div>
                <div className="text-gray-900 font-semibold">$40 - $150/month</div>
                <div className="text-gray-600">NR or NMN oral supplements</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-amber-600 mb-1">Evidence Level</div>
                <div className="text-gray-900 font-semibold">Preliminary</div>
                <div className="text-gray-600">Limited human trials</div>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What This Guide Covers</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#what-is-nad" className="text-blue-600 hover:underline">1. What Is NAD+ and Why Does It Matter?</a></li>
              <li><a href="#the-science" className="text-blue-600 hover:underline">2. The Science: What We Know (and Don&apos;t)</a></li>
              <li><a href="#delivery-methods" className="text-blue-600 hover:underline">3. IV vs Oral: Delivery Methods Compared</a></li>
              <li><a href="#costs" className="text-blue-600 hover:underline">4. Real Costs Breakdown</a></li>
              <li><a href="#claims" className="text-blue-600 hover:underline">5. Common Claims vs Evidence</a></li>
              <li><a href="#who-uses" className="text-blue-600 hover:underline">6. Who Uses NAD+ Therapy?</a></li>
              <li><a href="#verdict" className="text-blue-600 hover:underline">7. Our Honest Assessment</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              NAD+ (nicotinamide adenine dinucleotide) is a molecule that exists in every cell of your body and plays a crucial role in energy production and cellular repair. As we age, NAD+ levels decline—and an entire industry has emerged around boosting them. But does it actually work?
            </p>

            <h2 id="what-is-nad" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Is NAD+ and Why Does It Matter?</h2>

            <p className="text-gray-700 mb-4">
              NAD+ is a coenzyme found in all living cells. It&apos;s essential for:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Energy metabolism:</strong> Helps convert nutrients into cellular energy (ATP)</li>
              <li><strong>DNA repair:</strong> Activates enzymes (sirtuins, PARPs) that repair damaged DNA</li>
              <li><strong>Cellular signaling:</strong> Regulates circadian rhythm and stress responses</li>
              <li><strong>Mitochondrial function:</strong> Maintains the &quot;powerhouses&quot; of your cells</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">The Decline with Age</h3>

            <p className="text-gray-700 mb-4">
              Here&apos;s what got longevity researchers excited: NAD+ levels appear to decline by approximately 50% between ages 40 and 60 in some tissues. This decline correlates with many age-related conditions—leading to the hypothesis that restoring NAD+ might slow aspects of aging.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Important distinction:</strong> Correlation is not causation. NAD+ declining with age doesn&apos;t prove that boosting it will reverse aging effects. That&apos;s the hypothesis being tested, not a proven fact.
              </p>
            </div>

            <h2 id="the-science" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Science: What We Know (and Don&apos;t)</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Strong Evidence (Animal Studies)</h3>

            <p className="text-gray-700 mb-4">
              In mice and other animal models, boosting NAD+ has shown impressive results:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Improved mitochondrial function</li>
              <li>Enhanced muscle endurance and strength</li>
              <li>Better insulin sensitivity</li>
              <li>Extended lifespan in some models</li>
              <li>Improved cognitive function in older mice</li>
            </ul>

            <p className="text-gray-700 mb-4">
              These results drove much of the excitement around NAD+ therapy. However...
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Weaker Evidence (Human Studies)</h3>

            <p className="text-gray-700 mb-4">
              Human trials have been more modest:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>NR supplementation:</strong> Safely increases blood NAD+ levels (proven)</li>
              <li><strong>NMN supplementation:</strong> Also raises NAD+ levels (proven)</li>
              <li><strong>Functional benefits:</strong> Mixed results, mostly small or no effects</li>
              <li><strong>Lifespan extension:</strong> No human data (would take decades)</li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-3">Key Human Studies to Know</h4>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li>
                  <strong>NR in overweight adults (2018):</strong> 1,000mg/day for 6 weeks raised NAD+ by 60%, but no measurable effect on metabolism, body composition, or blood pressure.
                </li>
                <li>
                  <strong>NMN in older adults (2022):</strong> 250mg/day for 12 weeks showed modest improvement in walking speed in some participants.
                </li>
                <li>
                  <strong>IV NAD+:</strong> Very limited published data. Most &quot;evidence&quot; is anecdotal or from uncontrolled clinic observations.
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">The Honest Summary</h3>

            <p className="text-gray-700 mb-4">
              NAD+ precursor supplements (NR, NMN) can effectively raise NAD+ levels in humans. What&apos;s unclear is whether higher NAD+ levels translate to meaningful health benefits. The impressive mouse results haven&apos;t consistently replicated in humans—at least not yet.
            </p>

            <h2 id="delivery-methods" className="text-2xl font-bold text-gray-900 mt-12 mb-6">IV vs Oral: Delivery Methods Compared</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">IV NAD+ Infusions</h3>

            <p className="text-gray-700 mb-4">
              IV infusions deliver NAD+ directly into your bloodstream:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Duration:</strong> 2-4 hours per session (sometimes longer)</li>
              <li><strong>Dose:</strong> Typically 250-1,000mg per infusion</li>
              <li><strong>Frequency:</strong> Often 2-4 sessions initially, then monthly maintenance</li>
              <li><strong>Side effects:</strong> Nausea, flushing, chest tightness during infusion (common)</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Controversial point:</strong> Some researchers argue that IV NAD+ is rapidly metabolized and may not actually reach cells more effectively than oral precursors. The premium price may not reflect superior bioavailability.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Oral Supplements (NR & NMN)</h3>

            <p className="text-gray-700 mb-4">
              Rather than taking NAD+ directly (which is poorly absorbed), oral supplements use precursors:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Precursor</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Full Name</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">NR</td>
                    <td className="border border-gray-300 px-4 py-3">Nicotinamide Riboside</td>
                    <td className="border border-gray-300 px-4 py-3">Most studied, FDA GRAS status, Tru Niagen brand</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">NMN</td>
                    <td className="border border-gray-300 px-4 py-3">Nicotinamide Mononucleotide</td>
                    <td className="border border-gray-300 px-4 py-3">Popular in longevity community, more variable quality</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Niacin</td>
                    <td className="border border-gray-300 px-4 py-3">Vitamin B3</td>
                    <td className="border border-gray-300 px-4 py-3">Cheapest option, but causes flushing and may have limits</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Which Is Better?</h3>

            <p className="text-gray-700 mb-4">
              There&apos;s no clear evidence that IV NAD+ produces better outcomes than oral precursors. The research on oral NR/NMN is actually more robust than IV NAD+ research. The main argument for IV is faster acute effects (you may feel something immediately)—but lasting benefits are unproven either way.
            </p>

            <h2 id="costs" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Real Costs Breakdown</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">IV NAD+ Infusions</h3>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Dose</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Price Range</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">250mg</td>
                    <td className="border border-gray-300 px-4 py-3">$250 - $500</td>
                    <td className="border border-gray-300 px-4 py-3">1-2 hours</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">500mg</td>
                    <td className="border border-gray-300 px-4 py-3">$500 - $900</td>
                    <td className="border border-gray-300 px-4 py-3">2-3 hours</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">1,000mg</td>
                    <td className="border border-gray-300 px-4 py-3">$800 - $1,500</td>
                    <td className="border border-gray-300 px-4 py-3">3-4 hours</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Luxury/concierge</td>
                    <td className="border border-gray-300 px-4 py-3">$1,500 - $2,500+</td>
                    <td className="border border-gray-300 px-4 py-3">Home service premium</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>Typical protocol cost:</strong> A &quot;loading phase&quot; of 4 infusions ($2,000-6,000) plus monthly maintenance ($500-1,500/month) = $8,000-24,000/year.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Oral Supplements</h3>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Product</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Monthly Cost</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Daily Dose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Tru Niagen (NR)</td>
                    <td className="border border-gray-300 px-4 py-3">$40-50</td>
                    <td className="border border-gray-300 px-4 py-3">300mg</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Generic NMN</td>
                    <td className="border border-gray-300 px-4 py-3">$40-80</td>
                    <td className="border border-gray-300 px-4 py-3">500-1,000mg</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Premium NMN (liposomal)</td>
                    <td className="border border-gray-300 px-4 py-3">$100-150</td>
                    <td className="border border-gray-300 px-4 py-3">500mg</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>Annual oral cost:</strong> $480-1,800/year—a fraction of IV therapy.
            </p>

            <h2 id="claims" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Common Claims vs Evidence</h2>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">&quot;NAD+ reverses aging&quot;</h4>
                <p className="text-gray-700 mb-2"><strong>Reality:</strong> No human evidence for this. Animal studies are promising but don&apos;t translate directly.</p>
                <div className="text-sm text-gray-500">Evidence: ❌ Not supported</div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">&quot;NAD+ boosts energy dramatically&quot;</h4>
                <p className="text-gray-700 mb-2"><strong>Reality:</strong> Many people report feeling more energetic, but placebo-controlled trials haven&apos;t shown consistent energy improvements.</p>
                <div className="text-sm text-gray-500">Evidence: ⚠️ Anecdotal only</div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">&quot;NAD+ helps with addiction/withdrawal&quot;</h4>
                <p className="text-gray-700 mb-2"><strong>Reality:</strong> Some clinics specialize in this. Evidence is limited to case reports; no randomized trials.</p>
                <div className="text-sm text-gray-500">Evidence: ⚠️ Very limited</div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">&quot;NAD+ supplements raise NAD+ levels&quot;</h4>
                <p className="text-gray-700 mb-2"><strong>Reality:</strong> This is actually proven. NR and NMN do increase blood NAD+ levels in humans.</p>
                <div className="text-sm text-gray-500">Evidence: ✅ Supported</div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">&quot;Higher NAD+ improves health outcomes&quot;</h4>
                <p className="text-gray-700 mb-2"><strong>Reality:</strong> The key unanswered question. We can raise levels, but benefit evidence is mixed.</p>
                <div className="text-sm text-gray-500">Evidence: ⚠️ Under investigation</div>
              </div>
            </div>

            <h2 id="who-uses" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Who Uses NAD+ Therapy?</h2>

            <p className="text-gray-700 mb-4">
              NAD+ therapy has found several distinct user groups:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
              <li><strong>Longevity enthusiasts:</strong> Willing to try unproven interventions based on biological plausibility</li>
              <li><strong>Biohackers:</strong> Experimenting with various interventions, tracking with labs</li>
              <li><strong>Executives/high performers:</strong> Seeking any edge, often through concierge medicine</li>
              <li><strong>Addiction recovery:</strong> Some use IV NAD+ as part of detox protocols</li>
              <li><strong>Chronic fatigue sufferers:</strong> Trying various treatments for persistent fatigue</li>
            </ul>

            <h2 id="verdict" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Our Honest Assessment</h2>

            <div className="bg-purple-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">The Balanced View</h3>
              <p className="text-gray-700 mb-4">
                NAD+ is genuinely important for cellular function, and levels do decline with age. The science is real and interesting. However, the marketing has far outpaced the evidence.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>If you&apos;re considering NAD+ therapy:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Start with oral supplements (NR or NMN) rather than expensive IV infusions—similar evidence base, fraction of the cost</li>
                <li>Don&apos;t expect dramatic results; most human trials show modest or no measurable effects</li>
                <li>Prioritize proven health interventions first: exercise, sleep, nutrition</li>
                <li>If you try it, consider it an experiment, not a proven treatment</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">When NAD+ Therapy Might Make Sense</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>You&apos;ve already optimized the basics (sleep, exercise, nutrition, stress)</li>
              <li>You understand you&apos;re experimenting with uncertain benefits</li>
              <li>You can afford it without financial strain</li>
              <li>You&apos;re working with a knowledgeable practitioner who tracks outcomes</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">When to Skip It</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>You&apos;re expecting dramatic, proven results</li>
              <li>The cost would cause financial stress</li>
              <li>You haven&apos;t addressed basic health factors first</li>
              <li>You&apos;re using it instead of seeking care for a real medical condition</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Exploring Longevity Options?</h3>
            <p className="mb-6 text-purple-100">
              Learn about other evidence-based and experimental longevity interventions.
            </p>
            <Link
              href="/longevity"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-purple-600 hover:bg-purple-50 transition-colors"
            >
              Longevity Hub
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 rounded-lg bg-red-50 border-2 border-red-200 p-6">
            <h3 className="font-bold text-red-900 mb-2">Important Disclaimer</h3>
            <p className="text-sm text-red-800 mb-4">
              NAD+ therapy (IV or oral) is not FDA-approved for any medical condition. The anti-aging and longevity claims made by many providers are not supported by rigorous human clinical trials. This information is educational only and should not be considered medical advice.
            </p>
            <p className="text-sm text-red-800">
              Consult with a healthcare provider before starting any supplement regimen, especially if you have existing health conditions or take medications.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources & References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Elhassan et al. (2019). &quot;Nicotinamide Riboside Augments the Aged Human Skeletal Muscle NAD+ Metabolome&quot; - Cell Reports</li>
              <li>• Yoshino et al. (2021). &quot;Nicotinamide mononucleotide increases muscle insulin sensitivity in prediabetic women&quot; - Science</li>
              <li>• Martens et al. (2018). &quot;Chronic nicotinamide riboside supplementation is well-tolerated and elevates NAD+ in healthy middle-aged and older adults&quot; - Nature Communications</li>
              <li>• Covarrubias et al. (2021). &quot;NAD+ metabolism and its roles in cellular processes during ageing&quot; - Nature Reviews Molecular Cell Biology</li>
            </ul>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
