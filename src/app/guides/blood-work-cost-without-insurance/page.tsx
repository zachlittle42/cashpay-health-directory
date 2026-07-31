import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Blood Work Cost Without Insurance (2026): Cash Prices' },
  alternates: { canonical: 'https://vitalityscout.com/guides/blood-work-cost-without-insurance' },
  description: 'Blood work cost without insurance in 2026 — cash prices for CBC, CMP, lipid, A1c and thyroid panels, why hospitals charge 3-10x more, and where to order for less.',
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does blood work cost without insurance?',
    answer: 'It depends almost entirely on where the order goes. Individual panels commonly run $29-$99 cash at direct-to-consumer lab services, while the same tests through a hospital lab can total hundreds — one published estimate puts a full uninsured bloodwork workup at an average around $432, with a range of roughly $50 to $1,000+. Ordered directly, a CBC runs about $29, a metabolic panel $8-$49, and a lipid panel $20-$100. These are estimates that change by provider and region — confirm the all-in price, including any physician-order fee, before you buy.',
  },
  {
    question: 'How much is a CBC or metabolic panel without insurance?',
    answer: 'Direct-to-consumer prices are low: a CBC is commonly around $29 (as low as $5 at Jason Health before its $18-per-order requisition fee, or about $27 plus a $6 physician fee at Walk-In Lab), and a comprehensive metabolic panel typically runs $21-$49 through DTC platforms. The identical tests through a hospital outpatient lab are commonly quoted at $50-$400+ for the CBC and $150-$350 for the CMP. Always compare the all-in price including order fees — the panels are processed by the same major labs either way.',
  },
  {
    question: 'Why is blood work so expensive at a hospital?',
    answer: 'Markup and facility fees, not the chemistry. GoodRx reports hospital outpatient labs charge roughly 246% more for a lipid panel, 402% more for a CBC, and 531% more for a metabolic panel than a doctor\'s office or standalone lab, and a 2022 Health Affairs study found hospital facility fees added an average of $182 per visit for lab services. Many hospital labs even send samples to the same Quest or Labcorp facilities a consumer can use directly. For routine panels, ordering direct removes the middleman.',
  },
  {
    question: 'Can I get blood work done without a doctor\'s order?',
    answer: 'In most states, yes — functionally. Consumer-initiated platforms like Quest Health and Labcorp OnDemand route your purchase through an independent physician network that reviews and places the order (Quest adds a physician service fee starting at $6), so no doctor\'s visit is needed. The main exceptions are New York, New Jersey, and Rhode Island, where direct-access testing is restricted and most DTC services don\'t operate. Results should still be reviewed with a clinician — self-ordering is not self-diagnosis.',
  },
  {
    question: 'What does a full annual blood panel cost without insurance?',
    answer: 'Published bundle prices make a good benchmark: Ulta Lab Tests has offered a CBC + CMP + lipid + TSH bundle around $62, Quest Health\'s Basic Health Profile (CBC, CMP, lipid panel, urinalysis) lists around $170, and subscription services like Function Health run $499/year for 100+ biomarkers with physician review. A comparable draw through a hospital lab can reach the published $432 average for uninsured bloodwork. Prices move frequently — verify current pricing with the provider.',
  },
  {
    question: 'Is blood work HSA or FSA eligible?',
    answer: 'Generally yes, when the testing is for diagnosis, treatment, or prevention — the IRS standard — which includes preventive screening like cholesterol and diabetes panels even if you have no symptoms. Collection and processing fees count as part of the eligible expense, and some membership-based services state their panels are HSA/FSA eligible. Purely curiosity-driven testing can face scrutiny, so keep documentation and confirm specifics with your plan administrator.',
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

export default function BloodWorkCostWithoutInsurance() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Blood Work Cost Without Insurance: Cash-Pay Price Guide',
    description:
      'What blood work costs without insurance in 2026 — cash prices for common panels, why hospital labs charge 3-10x more for the same tests, direct-to-consumer lab options, and how to order for less.',
    url: 'https://vitalityscout.com/guides/blood-work-cost-without-insurance',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/blood-work-cost-without-insurance#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalTest', name: 'Blood test (laboratory panel)' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-07-31',
    dateModified: '2026-07-31',
    citation: [
      { '@type': 'CreativeWork', name: 'GoodRx — how much is blood work without insurance; self-pay lab markup data', url: 'https://www.goodrx.com/health-topic/diagnostics/how-much-is-blood-work-without-insurance' },
      { '@type': 'CreativeWork', name: 'Quest Health — consumer-initiated testing, how it works and physician service fee', url: 'https://www.questhealth.com/how-it-works.html' },
      { '@type': 'CreativeWork', name: 'Labcorp OnDemand — order lab tests online without a doctor visit', url: 'https://www.ondemand.labcorp.com/' },
      { '@type': 'CreativeWork', name: 'Solv — blood test cost without insurance by setting', url: 'https://www.solvhealth.com/health/cost-blood-test-without-insurance' },
      { '@type': 'CreativeWork', name: 'Mira — the cost of bloodwork without insurance', url: 'https://www.talktomira.com/post/the-cost-of-bloodwork-without-insurance-2021' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/blood-work-cost-without-insurance#faq', url: 'https://vitalityscout.com/guides/blood-work-cost-without-insurance' };

  return (
    <>
      <Navigation />
      <SidebarShell>
      <main className="min-h-screen bg-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="mx-auto max-w-4xl px-4 py-3">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">→</span>
              <Link href="/guides" className="hover:text-blue-600">Guides</Link>
              <span className="mx-2">→</span>
              <span className="text-gray-900">Blood Work Cost Without Insurance</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/labs" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; At-Home Lab Testing Directory
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Lab Testing
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Blood Work Cost Without Insurance: The Cash-Pay Price Guide
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              A CBC costs about $29 ordered directly — and can bill $400 through a hospital. Same
              tube, same machines, often the same lab. Here is what every common panel costs cash,
              and how to order it yourself.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                Without insurance, individual blood panels typically cost{' '}
                <strong>$29-$99</strong> through direct-to-consumer lab services — a CBC around{' '}
                <strong>$29</strong>, a metabolic panel <strong>$21-$49</strong>, a lipid panel{' '}
                <strong>$20-$100</strong> — while hospital labs charge roughly{' '}
                <strong>3-10x more</strong> for the same tests, and a full uninsured workup averages
                about <strong>$432</strong> the traditional route. These are estimates to verify
                with the provider. This is information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: July 2026 • Reviewed by the VitalityScout editorial team • 11 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Comparison Box */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Answer</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Order it yourself (DTC)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• CBC ~$29 · CMP ~$21-$49 · lipid ~$21-$59</li>
                  <li>• 4-panel bundles from ~$62 (estimate)</li>
                  <li>• Drawn at Quest/Labcorp sites or at home</li>
                  <li>• Physician-order fee often ~$6-$18 extra</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Hospital / clinic route</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Same panels commonly $150-$400+</li>
                  <li>• Facility fees average ~$182 per lab visit</li>
                  <li>• Full workup averages ~$432 uninsured</li>
                  <li>• Often sent to the same Quest/Labcorp anyway</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#by-panel" className="text-blue-600 hover:underline">1. Blood work cost by panel</a></li>
              <li><a href="#why-hospital" className="text-blue-600 hover:underline">2. Why hospital blood work costs 3-10x more</a></li>
              <li><a href="#dtc" className="text-blue-600 hover:underline">3. Where to order it yourself</a></li>
              <li><a href="#bundles" className="text-blue-600 hover:underline">4. Annual-panel bundles compared</a></li>
              <li><a href="#order" className="text-blue-600 hover:underline">5. The doctor&apos;s-order question (and NY/NJ/RI)</a></li>
              <li><a href="#save" className="text-blue-600 hover:underline">6. How to pay the least</a></li>
              <li><a href="#considerations" className="text-blue-600 hover:underline">7. Before you order</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Blood work is the clearest case in American healthcare where the uninsured price can
              actually be the <em>better</em> price — if you order it the right way. The
              direct-to-consumer lab market has turned routine panels into commodities with posted
              prices, while the hospital route still bills the same tubes at chargemaster rates.
              Knowing which door to walk through is worth hundreds of dollars a year.
            </p>

            <h2 id="by-panel" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Blood Work Cost by Panel</h2>

            <p className="text-gray-700 mb-4">
              The figures below are <strong>estimates compiled from published cost guides and
              provider price lists</strong> as of mid-2026. DTC means ordering directly through a
              consumer lab platform; the hospital column is what published sources report for the
              same test through a hospital outpatient lab.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Panel</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">DTC cash price (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Hospital lab (estimate)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">CBC (complete blood count)</td>
                    <td className="border border-gray-300 px-4 py-3">~$29 typical (from ~$5 + order fee)</td>
                    <td className="border border-gray-300 px-4 py-3">~$50 - $400+</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">CMP (comprehensive metabolic)</td>
                    <td className="border border-gray-300 px-4 py-3">~$21 - $49</td>
                    <td className="border border-gray-300 px-4 py-3">~$150 - $350</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Lipid panel (cholesterol)</td>
                    <td className="border border-gray-300 px-4 py-3">~$21 - $59</td>
                    <td className="border border-gray-300 px-4 py-3">Median charge ~$220</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Hemoglobin A1c</td>
                    <td className="border border-gray-300 px-4 py-3">~$25 - $50 (from ~$8 at discount providers)</td>
                    <td className="border border-gray-300 px-4 py-3">Higher; varies widely</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">TSH / thyroid panel</td>
                    <td className="border border-gray-300 px-4 py-3">TSH ~$20-$70; full panel ~$30-$150</td>
                    <td className="border border-gray-300 px-4 py-3">Higher; varies widely</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Total testosterone</td>
                    <td className="border border-gray-300 px-4 py-3">~$59 - $89 (Labcorp OnDemand $69)</td>
                    <td className="border border-gray-300 px-4 py-3">Higher; varies widely</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Vitamin D (25-OH)</td>
                    <td className="border border-gray-300 px-4 py-3">~$45 - $110</td>
                    <td className="border border-gray-300 px-4 py-3">~$40 - $120+ list</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="why-hospital" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why Hospital Blood Work Costs 3-10x More</h2>

            <p className="text-gray-700 mb-4">
              GoodRx&apos;s self-pay lab analysis found hospital outpatient labs charge roughly{' '}
              <strong>246% more for a lipid panel, 402% more for a CBC, and 531% more for a
              metabolic panel</strong> than a doctor&apos;s office or standalone lab. A 2022 Health
              Affairs study found hospital facility fees added an average of{' '}
              <strong>$182 per visit</strong> for laboratory services.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Chargemaster pricing.</strong> Hospital list prices are negotiation anchors for insurers — but they become the actual bill for self-pay patients who don&apos;t ask for a discount.</li>
              <li><strong>Facility fees.</strong> The draw happens inside a hospital, so a facility fee rides along.</li>
              <li><strong>The send-out irony.</strong> Many hospital labs forward samples to the same Quest or Labcorp facilities you could use directly — the markup buys you a middleman.</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>The rule of thumb:</strong> for routine, non-urgent panels, never let the
                order default to a hospital lab. Take the requisition to a standalone draw site, or
                skip the middleman and order the panel yourself.
              </p>
            </div>

            <h2 id="dtc" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Where to Order Blood Work Yourself</h2>

            <p className="text-gray-700 mb-4">
              These platforms publish real cash prices. Most route the order through an independent
              physician network and draw your blood at Quest or Labcorp locations; some ship at-home
              kits.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Provider</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Published pricing (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Quest Health</td>
                    <td className="border border-gray-300 px-4 py-3">100+ tests online; Basic Health Profile ~$170</td>
                    <td className="border border-gray-300 px-4 py-3">Independent physician places the order; service fee from ~$6</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Labcorp OnDemand</td>
                    <td className="border border-gray-300 px-4 py-3">~$29-$689 by test; testosterone $69</td>
                    <td className="border border-gray-300 px-4 py-3">Order online, draw at Labcorp locations</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Ulta Lab Tests</td>
                    <td className="border border-gray-300 px-4 py-3">CBC ~$20, CMP ~$21; 4-panel bundle ~$62</td>
                    <td className="border border-gray-300 px-4 py-3">Draws at Quest sites; frequent promotions</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Walk-In Lab</td>
                    <td className="border border-gray-300 px-4 py-3">CBC $27; CBC+CMP panel $45 (+$6 physician fee/order)</td>
                    <td className="border border-gray-300 px-4 py-3">Physician-order fee is per order, not per test</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Jason Health</td>
                    <td className="border border-gray-300 px-4 py-3">CBC from $5, CMP $8, lipid $10 + $18 requisition/order</td>
                    <td className="border border-gray-300 px-4 py-3">Cheapest list prices; always compute the all-in total</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Own Your Labs</td>
                    <td className="border border-gray-300 px-4 py-3">Tests from ~$9; CMP ~$10</td>
                    <td className="border border-gray-300 px-4 py-3">Labcorp draw sites and results portal</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Everlywell / LetsGetChecked</td>
                    <td className="border border-gray-300 px-4 py-3">Most kits ~$49-$149</td>
                    <td className="border border-gray-300 px-4 py-3">At-home collection; not available in NY/NJ/RI</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              We compare these services in more depth in our{' '}
              <Link href="/guides/cheapest-blood-test-panels" className="text-blue-600 hover:underline">cheapest blood test panels guide</Link>{' '}
              and the{' '}
              <Link href="/guides/at-home-lab-testing-guide" className="text-blue-600 hover:underline">at-home lab testing guide</Link>, and
              head-to-head in{' '}
              <Link href="/guides/quest-vs-labcorp-pricing" className="text-blue-600 hover:underline">Quest vs Labcorp pricing</Link>.
            </p>

            <h2 id="bundles" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Annual-Panel Bundles Compared</h2>

            <p className="text-gray-700 mb-4">
              If you want the &quot;annual physical bloodwork&quot; set — CBC, metabolic, lipids,
              thyroid — bundles are the efficient buy. Published examples: Ulta Lab Tests has
              offered the four-panel bundle around <strong>$62</strong>; Quest Health&apos;s Basic
              Health Profile (CBC, CMP, lipid, urinalysis) lists around <strong>$170</strong>; and
              membership services like <strong>Function Health</strong> charge{' '}
              <strong>$499/year</strong> for 100+ biomarkers with physician review (our{' '}
              <Link href="/guides/function-health-review" className="text-blue-600 hover:underline">Function Health review</Link>{' '}
              covers whether that&apos;s worth it), while <strong>Marek Health</strong> panels run{' '}
              <strong>$150-$495+</strong> with optional clinician review. Against the published{' '}
              <strong>~$432 average</strong> for uninsured bloodwork through traditional channels,
              any of these is a large saving — pick based on how many markers you actually want.
            </p>

            <h2 id="order" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Doctor&apos;s-Order Question (and NY/NJ/RI)</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Most states: no visit needed.</strong> Consumer-initiated platforms route your purchase through an independent physician network that reviews and signs the order — that&apos;s what the small physician fee covers.</li>
              <li><strong>New York, New Jersey, and Rhode Island restrict direct-access testing.</strong> Requisitions generally need your own licensed provider&apos;s signature, and most DTC services (including at-home kits like Everlywell) don&apos;t operate there. A telehealth or in-person visit that generates the order is the workaround.</li>
              <li><strong>Self-order is not self-diagnosis.</strong> Abnormal results need a clinician&apos;s interpretation in the context of your health — our guide on <Link href="/guides/how-to-read-blood-test-results" className="text-blue-600 hover:underline">how to read blood test results</Link> is a starting point, not a substitute.</li>
            </ul>

            <h2 id="save" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Pay the Least for Blood Work</h2>

            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Price the DTC route first.</strong> For routine panels, direct ordering is usually the floor — compare options on our <Link href="/labs" className="text-blue-600 hover:underline">lab testing directory</Link>.</li>
              <li><strong>Compute the all-in price.</strong> Add per-order physician/requisition fees ($6-$18 at some platforms) — a $5 CBC with an $18 fee is a $23 CBC.</li>
              <li><strong>Bundle if you want multiple panels.</strong> One order fee, one draw, better per-test pricing.</li>
              <li><strong>If a doctor orders it, choose the draw site.</strong> Ask for the requisition and take it to a standalone Quest/Labcorp location instead of the hospital lab.</li>
              <li><strong>Ask for the self-pay rate.</strong> If you must use a hospital or clinic lab, ask for the cash price and a discount — list prices are negotiable.</li>
              <li><strong>Use HSA/FSA funds.</strong> Diagnostic and preventive lab testing is generally a qualified expense, including collection and processing fees.</li>
            </ol>

            <h2 id="considerations" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Before You Order</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Fasting requirements.</strong> Lipid and glucose panels may require fasting — check before you book the draw.</li>
              <li><strong>Cash results may not reach your chart.</strong> Self-ordered results don&apos;t automatically sync to your doctor&apos;s records or count toward a deductible; bring them to your next visit.</li>
              <li><strong>Accuracy is about the lab, not the storefront.</strong> Most DTC platforms use the same CLIA-certified Quest/Labcorp infrastructure as clinics; see our guide on <Link href="/guides/are-at-home-blood-tests-accurate" className="text-blue-600 hover:underline">whether at-home blood tests are accurate</Link>.</li>
              <li><strong>Prices and promotions move constantly.</strong> Every figure here is an estimate — verify the current price at checkout.</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Cash-Pay Lab Testing</h3>
            <p className="mb-6 text-blue-100">
              At-home kits and direct-order panels with transparent pricing — compared in one directory.
            </p>
            <Link
              href="/labs"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse Lab Testing Options
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

          {/* Disclaimer */}
          <div className="mt-12 rounded-lg bg-gray-100 p-6">
            <h3 className="font-semibold text-gray-800 mb-2">Medical &amp; Pricing Disclaimer</h3>
            <p className="text-sm text-gray-600">
              This guide is for general informational purposes only and is not medical advice.
              Pricing is based on publicly available data and provider websites and is presented as
              estimates that vary by test, provider, location, order fees, and current promotions —
              always verify the current all-in price with the provider before purchasing. Lab
              results should be reviewed with a licensed healthcare provider; self-ordering a test
              is not a substitute for medical care. Direct-access testing is restricted in some
              states (notably NY, NJ, and RI). VitalityScout may earn a commission from some links,
              at no additional cost to you, and this never affects how we describe a provider.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• GoodRx — goodrx.com (blood work cash prices; hospital vs standalone lab markup analysis)</li>
              <li>• Quest Health — questhealth.com (consumer-initiated testing, physician service fee, bundle pricing)</li>
              <li>• Labcorp OnDemand — ondemand.labcorp.com (published direct-order test prices)</li>
              <li>• Ulta Lab Tests / Walk-In Lab / Jason Health / Own Your Labs — published cash price lists</li>
              <li>• Solv — solvhealth.com (blood test costs by setting)</li>
              <li>• Mira — talktomira.com (average uninsured bloodwork workup cost)</li>
              <li>• Health Affairs 2022 facility-fee finding (as reported in published cost guides)</li>
              <li>• NY Wadsworth Center / state direct-access-testing rules (NY/NJ/RI restrictions)</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Cash-Pay Lab Testing Cheat Sheet"
            description="Which panels to order, where they're cheapest, and the order fees to watch for."
            source="guide_blood_work_cost_without_insurance"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
