import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

const URL = 'https://vitalityscout.com/guides/coolsculpting-vs-emsculpt-cost';

export const metadata: Metadata = {
  title: { absolute: 'CoolSculpting vs Emsculpt Cost (2026): Fat vs Muscle, Priced' },
  alternates: { canonical: URL },
  description:
    'CoolSculpting freezes fat; Emsculpt builds muscle. They solve different goals and are priced differently — per applicator vs per session package. How the cost and results compare.',
  keywords: [
    'coolsculpting vs emsculpt cost',
    'emsculpt vs coolsculpting',
    'coolsculpting vs emsculpt price',
    'is emsculpt or coolsculpting better',
    'coolsculpting cost per cycle',
    'emsculpt cost per session',
    'fat reduction vs muscle building treatment',
  ],
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price line ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'Is CoolSculpting or Emsculpt cheaper?',
    answer:
      'They are priced differently because they do different things, so it is not a straight comparison. CoolSculpting is priced per applicator or cycle, with a typical treatment plan commonly running roughly $2,000 to $4,000 across the cycles needed. Emsculpt is priced per session and usually sold as a package of about four sessions, commonly running roughly $750 to $1,000 per session or a few thousand dollars per package, plus maintenance. Which is "cheaper" depends on your goal — reducing fat or building muscle. These are typical ranges that vary by clinic and body area — confirm current pricing with the provider.',
  },
  {
    question: 'What is the difference between CoolSculpting and Emsculpt?',
    answer:
      'CoolSculpting uses cryolipolysis — controlled cooling that targets and reduces fat cells in a treated area. Emsculpt uses HIFEM (high-intensity focused electromagnetic) energy to trigger strong muscle contractions that build and tone muscle; the Emsculpt NEO version adds radiofrequency to also reduce fat. In short, CoolSculpting removes fat and Emsculpt builds muscle. Both are FDA-cleared for body contouring, but for different purposes, so they are often complementary rather than substitutes. A licensed provider can advise which fits your goal.',
  },
  {
    question: 'Can you do CoolSculpting and Emsculpt together?',
    answer:
      'Yes, many clinics offer them as complementary treatments because they address different things — CoolSculpting reduces a pocket of fat while Emsculpt builds the muscle underneath. Combining them costs more up front since you are paying for two separate treatment courses. Whether a combined plan makes sense, and in what order, is a clinical judgment for your provider based on your body and goals. Confirm the full itemized cost of any combined plan before starting.',
  },
  {
    question: 'How is each one priced?',
    answer:
      'CoolSculpting is typically priced per applicator or per cycle, and most areas need more than one cycle, so the plan price scales with how many applicators and rounds you need. Emsculpt is typically priced per session and sold as a package (often around four sessions over two weeks), with periodic maintenance sessions after. Always ask for the number of cycles or sessions your area is expected to need and the all-in total, not the single-cycle or single-session headline number; prices vary by clinic and city, so verify.',
  },
  {
    question: 'Are the results permanent, and are there risks?',
    answer:
      'CoolSculpting reduces fat cells in the treated area, and the reduction can be long-lasting with a stable weight, though remaining fat cells can still enlarge with weight gain. A rare complication called paradoxical adipose hyperplasia (PAH) — an enlargement of fat in the treated area — has been reported after cryolipolysis; it is specific to cooling-based treatment, not Emsculpt. Emsculpt muscle gains require maintenance to sustain, like any muscle. Neither guarantees a specific result; discuss risks and expectations with a licensed provider.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-gray-200 py-6">
      <summary className="flex cursor-pointer items-start justify-between text-lg font-semibold text-gray-900 hover:text-blue-600">
        <span className="pr-4">{question}</span>
        <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
      </summary>
      <p className="mt-4 text-gray-700">{answer}</p>
    </details>
  );
}

export default function CoolSculptingVsEmsculptCost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'CoolSculpting vs Emsculpt Cost: Fat vs Muscle, Priced',
    description:
      'A practical comparison of CoolSculpting and Emsculpt — how each works, what each is for, how they are priced, results and risks, and how to choose.',
    url: URL,
    mainEntity: { '@type': 'FAQPage', '@id': `${URL}#faq` },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalProcedure', name: 'Non-invasive body contouring (cryolipolysis and HIFEM)' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-07-21',
    dateModified: '2026-07-21',
    citation: [
      { '@type': 'CreativeWork', name: 'StatPearls (NCBI Bookshelf) — Paradoxical Adipose Hyperplasia (rare cryolipolysis complication; specific to cooling)', url: 'https://www.ncbi.nlm.nih.gov/books/NBK606530/' },
      { '@type': 'CreativeWork', name: 'PubMed — HIFEM Energy With and Without Radiofrequency for Noninvasive Body Contouring: A Systematic Review (HIFEM builds muscle; NEO adds RF for fat)', url: 'https://pubmed.ncbi.nlm.nih.gov/37957393/' },
      { '@type': 'CreativeWork', name: 'FDA (accessdata) — ZELTIQ CoolSculpting System 510(k) clearance for non-invasive fat reduction', url: 'https://www.accessdata.fda.gov/cdrh_docs/pdf15/k151179.pdf' },
      { '@type': 'CreativeWork', name: 'PMC — Feasibility Study of Electromagnetic Muscle Stimulation and Cryolipolysis for Abdominal Contouring (complementary fat reduction and muscle building)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7515474/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${URL}#faq`, url: URL };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Guides', item: 'https://vitalityscout.com/guides' },
      { '@type': 'ListItem', position: 2, name: 'CoolSculpting vs Emsculpt Cost', item: URL },
    ],
  };

  return (
    <>
      <Navigation />
      <SidebarShell>
      <main className="min-h-screen bg-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="mx-auto max-w-4xl px-4 py-3">
            <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">→</span>
              <Link href="/guides" className="hover:text-blue-600">Guides</Link>
              <span className="mx-2">→</span>
              <span className="text-gray-900">CoolSculpting vs Emsculpt Cost</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/med-spa" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Med Spa &amp; Aesthetics Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Comparison
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              CoolSculpting vs Emsculpt Cost (2026): Fat vs Muscle, Priced
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              They are often compared, but they do opposite jobs: CoolSculpting reduces fat and Emsculpt
              builds muscle. That is why they are priced differently — and why the &quot;cheaper&quot;
              one depends entirely on your goal.
            </p>

            {/* Direct-answer lead: self-contained ~70-word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                <strong>CoolSculpting freezes fat; Emsculpt builds muscle.</strong> They solve different
                goals, so they are not true substitutes. CoolSculpting is priced per applicator or cycle
                (a typical plan often <strong>$2,000-$4,000</strong>); Emsculpt is priced per session,
                usually a package of about four (commonly <strong>$750-$1,000 a session</strong>). Both
                are FDA-cleared for body contouring, and clinics often combine them. Prices are typical
                ranges — verify with the provider. This is information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: July 2026 • 9 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Comparison Box */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Comparison</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">CoolSculpting (cryolipolysis)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Reduces fat by controlled cooling</li>
                  <li>• Priced per applicator / cycle</li>
                  <li>• For a pinchable pocket of fat</li>
                  <li>• Typical plan ~$2,000-$4,000 (estimate)</li>
                  <li>• FDA-cleared for fat reduction</li>
                  <li>• Rare risk: paradoxical adipose hyperplasia</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Emsculpt (HIFEM)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Builds muscle via strong contractions</li>
                  <li>• Priced per session (package of ~4)</li>
                  <li>• For muscle tone and definition</li>
                  <li>• Typical ~$750-$1,000 / session (estimate)</li>
                  <li>• FDA-cleared to tone and firm</li>
                  <li>• NEO version also reduces fat (adds RF)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">Lean CoolSculpting if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Your goal is reducing a stubborn pocket of fat</li>
                  <li>• You can pinch the area you want treated</li>
                  <li>• Diet and exercise have not shifted that spot</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">Lean Emsculpt if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Your goal is muscle tone and definition</li>
                  <li>• You want abdominal or glute strengthening</li>
                  <li>• You are already fairly lean over the area</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#jobs" className="text-blue-600 hover:underline">1. Two treatments, two different jobs</a></li>
              <li><a href="#table" className="text-blue-600 hover:underline">2. Cost compared side by side</a></li>
              <li><a href="#pricing" className="text-blue-600 hover:underline">3. Why the pricing models differ</a></li>
              <li><a href="#results" className="text-blue-600 hover:underline">4. Results, maintenance, and risks</a></li>
              <li><a href="#combine" className="text-blue-600 hover:underline">5. Why clinics combine them</a></li>
              <li><a href="#save" className="text-blue-600 hover:underline">6. How to choose safely</a></li>
              <li><a href="#verdict" className="text-blue-600 hover:underline">7. Which to choose</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              People search &quot;CoolSculpting vs Emsculpt&quot; as if they are two versions of the same
              thing. They are not. One removes fat by freezing it; the other builds muscle by contracting
              it. Confusing the two is how people pay for the wrong result. This guide breaks down what
              each does, how each is priced, and how to compare honest quotes before you book.
            </p>

            <h2 id="jobs" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Two Treatments, Two Different Jobs</h2>

            <p className="text-gray-700 mb-4">
              <strong>CoolSculpting</strong> uses cryolipolysis: an applicator cools a treated area to a
              temperature that damages fat cells while sparing skin and other tissue, and the body
              gradually clears the affected fat cells over the following weeks. It is FDA-cleared for
              non-invasive fat reduction in specific areas such as the flanks and abdomen. It is designed
              to reduce a <em>pinchable pocket of fat</em>, not to build tone.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Emsculpt</strong> uses HIFEM (high-intensity focused electromagnetic) energy to
              trigger powerful, involuntary muscle contractions — far more than you could do voluntarily
              — which over a course of sessions builds and firms the muscle. The newer Emsculpt NEO adds
              radiofrequency heating to also reduce fat in the same treatment. Base Emsculpt is about
              <em> muscle</em>, not fat clearance.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why this matters before you pay:</strong> if your concern is a soft pocket of fat,
                Emsculpt alone will not remove it; if your concern is a flat-but-untoned midsection,
                CoolSculpting will not build definition. Naming your actual goal — fat down or muscle up —
                is the first step, and it decides which price you should even be comparing.
              </p>
            </div>

            <h2 id="table" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cost Compared Side by Side</h2>

            <p className="text-gray-700 mb-4">
              The figures below are <strong>typical ranges drawn from general market pricing</strong>,
              not live quotes, and vary widely by clinic, city, body area, and how many cycles or
              sessions you need. Confirm current pricing with the provider.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Factor</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">CoolSculpting</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Emsculpt</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">What it does</td>
                    <td className="border border-gray-300 px-4 py-3">Reduces fat (cryolipolysis)</td>
                    <td className="border border-gray-300 px-4 py-3">Builds muscle (HIFEM)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">How it is priced</td>
                    <td className="border border-gray-300 px-4 py-3">Per applicator / cycle</td>
                    <td className="border border-gray-300 px-4 py-3">Per session (package of ~4)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Unit price (estimate)</td>
                    <td className="border border-gray-300 px-4 py-3">~$600-$1,200 per cycle</td>
                    <td className="border border-gray-300 px-4 py-3">~$750-$1,000 per session</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Typical full plan (estimate)</td>
                    <td className="border border-gray-300 px-4 py-3">~$2,000-$4,000 (multiple cycles)</td>
                    <td className="border border-gray-300 px-4 py-3">~$3,000-$4,000 (package + maintenance)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Sessions / cycles typical</td>
                    <td className="border border-gray-300 px-4 py-3">1-3 rounds per area</td>
                    <td className="border border-gray-300 px-4 py-3">~4 sessions over 2 weeks + upkeep</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">FDA clearance</td>
                    <td className="border border-gray-300 px-4 py-3">Non-invasive fat reduction</td>
                    <td className="border border-gray-300 px-4 py-3">Strengthen, firm, and tone muscle</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Best-fit candidate</td>
                    <td className="border border-gray-300 px-4 py-3">Pinchable fat pocket</td>
                    <td className="border border-gray-300 px-4 py-3">Fairly lean, wants tone</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="pricing" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why the Pricing Models Differ</h2>

            <p className="text-gray-700 mb-4">
              The two are billed on different logic because the work is different:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>CoolSculpting is per applicator or cycle.</strong> Each applicator treats one area, and many areas need more than one cycle to reach the target, so the plan cost scales with applicators and rounds.</li>
              <li><strong>Emsculpt is per session, sold as a package.</strong> Muscle building requires a course — commonly about four sessions over two weeks — followed by periodic maintenance, so the package price reflects the full protocol.</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Watch the cycle and session count</h4>
              <p className="text-gray-700">
                A single CoolSculpting cycle price can look modest until you learn an area needs two or
                three cycles and both flanks. An Emsculpt per-session price adds up across a four-session
                package plus maintenance. Always ask for the expected total number of cycles or sessions
                — and the all-in price — before you commit, not the single-unit headline.
              </p>
            </div>

            <h2 id="results" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Results, Maintenance, and Risks</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>CoolSculpting results</strong> come from reducing fat cells in the treated area and can be long-lasting at a stable weight, though the fat cells that remain can still enlarge if you gain weight.</li>
              <li><strong>Emsculpt results</strong> are muscle gains, and like any muscle they require maintenance sessions and activity to sustain over time.</li>
              <li><strong>A rare CoolSculpting risk</strong> is paradoxical adipose hyperplasia (PAH) — an enlargement of fat in the treated area that can appear weeks to months later. It is a recognized, uncommon complication specific to cryolipolysis and is not associated with Emsculpt. Discuss the risk with your provider.</li>
              <li><strong>Neither guarantees a specific outcome.</strong> Results vary by person, body area, and baseline. These are contouring tools, not weight-loss treatments.</li>
            </ul>

            <h2 id="combine" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why Clinics Combine Them</h2>

            <p className="text-gray-700 mb-4">
              Because they do opposite jobs, CoolSculpting and Emsculpt are often used together rather
              than chosen against each other: reduce a pocket of fat with cooling, then build the muscle
              underneath for definition. Early studies pairing electromagnetic muscle stimulation with
              cryolipolysis have explored this complementary approach for abdominal contouring. A
              combined plan costs more up front because you are buying two treatment courses — whether it
              makes sense, and in what order, is a clinical judgment for your provider. Confirm the full
              itemized cost of any combined plan before starting.
            </p>

            <h2 id="save" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Choose Safely</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Name the goal first.</strong> Fat down points to CoolSculpting; muscle up points to Emsculpt. This alone rules one in or out.</li>
              <li><strong>Get an itemized plan.</strong> Ask for the number of cycles or sessions and the all-in total, not the single-unit price.</li>
              <li><strong>Choose a licensed, trained provider.</strong> Verify the device is genuine and the operator is qualified.</li>
              <li><strong>Have realistic expectations.</strong> Both are contouring tools for people near their goal weight, not substitutes for weight loss.</li>
              <li><strong>Ask about risks.</strong> For CoolSculpting, ask specifically about paradoxical adipose hyperplasia.</li>
            </ul>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Safety beats the lowest price</h4>
              <p className="text-gray-700">
                Body-contouring results depend on candidacy and technique. A discount plan aimed at the
                wrong goal is money spent on a result you did not want. To compare vetted local options,
                browse the <Link href="/med-spa" className="text-blue-600 hover:underline">med spa directory</Link>.
              </p>
            </div>

            <h2 id="verdict" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Which to Choose</h2>

            <div className="bg-blue-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: CoolSculpting</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Your goal is reducing a stubborn, pinchable pocket of fat</li>
                <li>Diet and exercise have not shifted that specific spot</li>
                <li>You want fat reduction, not muscle tone</li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                Good fit for: reducing a localized fat pocket in a near-goal-weight body
              </p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: Emsculpt</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Your goal is muscle tone and definition</li>
                <li>You are already fairly lean over the target area</li>
                <li>You want abdominal or glute strengthening</li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                Good fit for: building tone and definition on a fairly lean frame
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">A simple decision framework</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li>Name the goal: reduce fat (CoolSculpting) or build muscle (Emsculpt)?</li>
              <li>If you want both, ask about a combined plan and its total cost</li>
              <li>Get the expected cycle or session count from each provider</li>
              <li>Compare the full-plan total, not the per-cycle or per-session headline</li>
              <li>Pick a licensed, qualified provider and confirm the device is genuine</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Related guides</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Injectables cost:</strong> our <Link href="/guides/botox-vs-fillers-cost" className="text-blue-600 hover:underline">Botox vs fillers cost guide</Link> covers per-unit vs per-syringe pricing.</li>
              <li><strong>Hair removal cost:</strong> see the <Link href="/guides/laser-hair-removal-cost" className="text-blue-600 hover:underline">laser hair removal cost guide</Link>.</li>
              <li><strong>Other med-spa cost lookups:</strong> our upcoming <Link href="/guides/botox-cost-per-unit" className="text-blue-600 hover:underline">Botox cost per unit</Link> index.</li>
              <li><strong>Browse providers:</strong> compare local options in the <Link href="/med-spa" className="text-blue-600 hover:underline">med spa directory</Link> or <Link href="/guides" className="text-blue-600 hover:underline">all health guides</Link>.</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Find a Med Spa Near You</h3>
            <p className="mb-6 text-blue-100">
              Compare local med spas for CoolSculpting and Emsculpt body contouring, with transparent
              cash-pay pricing.
            </p>
            <Link
              href="/med-spa"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse Med Spas
            </Link>
          </div>

          {/* FAQ — visible block mirrors the FAQPage schema above exactly */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div>
              {FAQ_ITEMS.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </section>

          {/* Sources */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• StatPearls (NCBI Bookshelf) — <em>Paradoxical Adipose Hyperplasia</em> (rare cryolipolysis complication; specific to cooling-based treatment). <a href="https://www.ncbi.nlm.nih.gov/books/NBK606530/" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">ncbi.nlm.nih.gov/books/NBK606530</a></li>
              <li>• PubMed — <em>HIFEM Energy With and Without Radiofrequency for Noninvasive Body Contouring: A Systematic Review</em> (HIFEM builds muscle; NEO adds RF for fat). <a href="https://pubmed.ncbi.nlm.nih.gov/37957393/" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">pubmed.ncbi.nlm.nih.gov/37957393</a></li>
              <li>• FDA (accessdata) — <em>ZELTIQ CoolSculpting System 510(k)</em> (clearance for non-invasive fat reduction). <a href="https://www.accessdata.fda.gov/cdrh_docs/pdf15/k151179.pdf" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">accessdata.fda.gov</a></li>
              <li>• PMC — <em>Feasibility Study of Electromagnetic Muscle Stimulation and Cryolipolysis for Abdominal Contouring</em> (complementary fat reduction and muscle building). <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7515474/" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">pmc.ncbi.nlm.nih.gov/articles/PMC7515474</a></li>
            </ul>
            <p className="mt-4 text-xs italic text-gray-500">
              Cycle and session counts, results, and prices vary by body area, provider, and city.
              Figures are typical ranges, not quotes — confirm current pricing and candidacy with a
              licensed provider.
            </p>
          </div>
        </article>

        <MedicalDisclaimer />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Body Contouring Cost Cheat Sheet"
            description="CoolSculpting vs Emsculpt: how to match the treatment to your goal and compare a full plan, not one cycle."
            source="guide_coolsculpting_vs_emsculpt_cost"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
