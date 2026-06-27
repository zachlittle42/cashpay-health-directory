import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Quest Diagnostics vs Labcorp Prices: Self-Pay Cost Guide' },
  alternates: { canonical: 'https://vitalityscout.com/guides/quest-vs-labcorp-pricing' },
  description: 'Quest Diagnostics vs Labcorp prices for self-pay lab tests. Compare questhealth.com and Labcorp OnDemand on cost, panels, locations, and turnaround.',
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'Is Quest Diagnostics cheaper than Labcorp for self-pay lab tests?',
    answer: 'Neither is universally cheaper. Both Quest (via questhealth.com) and Labcorp (via Labcorp OnDemand) list individual self-pay tests starting around $29, and head-to-head prices for the same common panels usually land within a few dollars of each other. The bigger cost lever is buying directly online versus walking in without an order, plus whichever provider is running a sale that week. These are estimates that change often — confirm current pricing on each provider\'s own site before you buy.',
  },
  {
    question: 'Can I order lab tests from Quest or Labcorp without a doctor?',
    answer: 'Yes. Both questhealth.com and Labcorp OnDemand let you purchase many tests online without a doctor\'s visit; an independent physician reviews and authorizes the order as part of the purchase. You then go to a collection site or use an at-home kit. This is a convenience pathway, not a substitute for clinical care — abnormal results should be reviewed with your own clinician.',
  },
  {
    question: 'How much does a basic blood panel cost without insurance at Quest or Labcorp?',
    answer: 'For self-pay, common single tests are often estimated in the range of roughly $25-$90 (for example a lipid panel or CBC), with comprehensive metabolic panels around $40-$120 and broader hormone or wellness panels running higher. Bundled multi-marker panels cost more but lower the per-test price. Treat all of these as estimates that vary by test, location, and current promotions — verify the exact price with the provider.',
  },
  {
    question: 'Do Quest Health and Labcorp OnDemand accept HSA or FSA?',
    answer: 'Both generally let you pay with HSA or FSA funds, and lab testing is typically an eligible expense. Labcorp OnDemand states most of its health tests are HSA/FSA eligible; Quest notes you may be able to use FSA/HSA but advises checking your plan. Confirm eligibility with your plan administrator before assuming a test qualifies.',
  },
  {
    question: 'How fast do Quest and Labcorp self-pay results come back?',
    answer: 'Both Quest Health and Labcorp OnDemand state most results are available within 1-2 days of your sample arriving at the lab. More specialized tests can take longer. Turnaround depends on the specific test and is set by the provider — check the listing for the test you are buying.',
  },
  {
    question: 'Quest vs Labcorp: which has more locations near me?',
    answer: 'Coverage is comparable. Quest advertises 2,000+ patient locations nationwide, and Labcorp advertises over 2,000 Patient Service Centers plus 400+ Labcorp at Walgreens sites. The practical answer is local: check both provider locators for your ZIP code, because density varies by metro and some states have gaps (Quest, for example, lists tests as unavailable in Arizona, Hawaii, and Puerto Rico).',
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

export default function QuestVsLabcorpPricing() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Quest Diagnostics vs Labcorp: Self-Pay Lab Pricing Comparison',
    description:
      'A practical comparison of self-pay lab test pricing at Quest Diagnostics (questhealth.com) versus Labcorp (Labcorp OnDemand) — starting costs, panel pricing, locations, turnaround, and how to decide.',
    url: 'https://vitalityscout.com/guides/quest-vs-labcorp-pricing',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/quest-vs-labcorp-pricing#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalTest', name: 'Self-pay clinical laboratory testing' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-23',
    dateModified: '2026-06-23',
    citation: [
      { '@type': 'CreativeWork', name: 'Quest Diagnostics — questhealth.com (buy your own lab tests)', url: 'https://www.questhealth.com/' },
      { '@type': 'CreativeWork', name: 'Labcorp OnDemand — purchase your own health tests', url: 'https://www.ondemand.labcorp.com/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/quest-vs-labcorp-pricing#faq', url: 'https://vitalityscout.com/guides/quest-vs-labcorp-pricing' };

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
              <span className="text-gray-900">Quest vs Labcorp Pricing</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/telehealth" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Telehealth &amp; Labs Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Comparison
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Quest Diagnostics vs Labcorp Prices: The Self-Pay Lab Cost Guide
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              The two largest US labs both sell tests directly to consumers now. Here is how
              questhealth.com and Labcorp OnDemand actually compare on price, panels,
              locations, and turnaround when you pay cash.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                For self-pay lab tests, <strong>Quest Diagnostics and Labcorp price very
                similarly</strong> — both sell directly to consumers (questhealth.com and Labcorp
                OnDemand), list individual tests starting around <strong>$25-29</strong>, return most
                results in <strong>1-2 days</strong>, and require no doctor&apos;s visit because an
                independent physician authorizes the order. Neither is reliably cheaper; the real
                savings come from buying online and timing a sale. Prices are estimates that change
                often — verify on each provider&apos;s site. This is information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: June 2026 • 9 min read
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
                <div className="font-bold text-blue-600 mb-2">Quest (questhealth.com)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Individual tests from ~$25-29 (estimate)</li>
                  <li>• 150+ tests purchasable online</li>
                  <li>• 2,000+ Quest patient locations</li>
                  <li>• At-home collection ~$79 (estimate)</li>
                  <li>• Results typically in 1-2 days</li>
                  <li>• Not sold in AZ, HI, PR</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Labcorp (OnDemand)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Individual tests from ~$29 (estimate)</li>
                  <li>• Broad panel + single-test menu</li>
                  <li>• 2,000+ centers + 400+ at Walgreens</li>
                  <li>• HSA/FSA accepted on most tests</li>
                  <li>• Results typically in 1-2 days</li>
                  <li>• Does not bill your insurance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">Lean Quest if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• A Quest draw site is closest to you</li>
                  <li>• You want at-home collection as an option</li>
                  <li>• Quest is running the better sale this week</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">Lean Labcorp if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• A Labcorp or Walgreens site is closest</li>
                  <li>• You live in AZ, HI, or PR (Quest gap)</li>
                  <li>• You want to pay with HSA/FSA easily</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#overview" className="text-blue-600 hover:underline">1. The two labs and their self-pay arms</a></li>
              <li><a href="#pricing" className="text-blue-600 hover:underline">2. Price comparison by common test</a></li>
              <li><a href="#how-cheaper" className="text-blue-600 hover:underline">3. Why self-pay can beat insurance</a></li>
              <li><a href="#locations" className="text-blue-600 hover:underline">4. Locations &amp; collection options</a></li>
              <li><a href="#process" className="text-blue-600 hover:underline">5. How ordering works</a></li>
              <li><a href="#considerations" className="text-blue-600 hover:underline">6. Things to know before you buy</a></li>
              <li><a href="#verdict" className="text-blue-600 hover:underline">7. Which to choose</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              If you want bloodwork without a primary-care appointment and without surprise insurance
              billing, Quest Diagnostics and Labcorp now both sell tests straight to you. Quest does
              it through questhealth.com; Labcorp does it through Labcorp OnDemand. The pricing is
              closer than most people expect — so the decision usually comes down to location,
              specific test, and who&apos;s running a promotion. Here is the honest breakdown.
            </p>

            <h2 id="overview" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Two Labs and Their Self-Pay Arms</h2>

            <p className="text-gray-700 mb-4">
              Quest Diagnostics and Labcorp are two of the largest independent clinical laboratories in
              the United States, running the national lab networks most hospitals and clinics rely on.
              For decades you could only reach them through a doctor&apos;s order. That changed when
              both launched consumer self-pay storefronts that let you buy a test, get it
              authorized by an independent physician, and walk into a draw site — no office visit, no
              insurance claim.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Quest — questhealth.com</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>150+ lab tests purchasable online, no doctor visit required for purchase</li>
              <li>Collection at any of 2,000+ Quest patient locations nationwide</li>
              <li>Optional at-home collection (estimated ~$79) or self-collection kits for some tests</li>
              <li>Most results back within 1-2 days of the sample reaching the lab</li>
              <li>Tests are overseen by an independent healthcare provider who orders each one</li>
              <li>Not currently available in Arizona, Hawaii, or Puerto Rico</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Labcorp — Labcorp OnDemand</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Buy the same tests doctors order, directly from Labcorp, with no doctor&apos;s visit</li>
              <li>An independent physician reviews and approves each order before collection</li>
              <li>Collection at over 2,000 Patient Service Centers plus 400+ Labcorp at Walgreens sites</li>
              <li>Most results back within 1-2 days of the sample reaching the lab</li>
              <li>Does not bill your insurance — you pay directly, HSA/FSA accepted on most tests</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why this matters:</strong> because both run on the same national lab
                infrastructure that hospitals and clinics use, the test you buy self-pay is the same
                assay a physician would order. The difference is the purchasing pathway and the
                price you see up front — not the science.
              </p>
            </div>

            <h2 id="pricing" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Price Comparison by Common Test</h2>

            <p className="text-gray-700 mb-4">
              Both storefronts list individual tests starting around <strong>$25-29</strong> (Labcorp&apos;s
              published floor is about $29; Quest&apos;s lowest tests run a few dollars less). Exact
              prices are not always shown publicly the same way and they move with frequent sales, so
              the figures below are <strong>estimates drawn from published self-pay pricing
              guides</strong>, not live quotes. Use them to set expectations, then confirm the
              current number on the provider&apos;s own product page.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Test</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical self-pay range (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Lipid / cholesterol panel</td>
                    <td className="border border-gray-300 px-4 py-3">~$30 - $90</td>
                    <td className="border border-gray-300 px-4 py-3">Comparable at both labs</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Complete blood count (CBC)</td>
                    <td className="border border-gray-300 px-4 py-3">~$25 - $65</td>
                    <td className="border border-gray-300 px-4 py-3">Often the cheapest line item</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Comprehensive metabolic panel (CMP)</td>
                    <td className="border border-gray-300 px-4 py-3">~$40 - $120</td>
                    <td className="border border-gray-300 px-4 py-3">14 markers; kidney/liver/glucose</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Thyroid (TSH / panel)</td>
                    <td className="border border-gray-300 px-4 py-3">~$40 - $200</td>
                    <td className="border border-gray-300 px-4 py-3">TSH alone is cheaper than a full panel</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Testosterone / hormone</td>
                    <td className="border border-gray-300 px-4 py-3">~$50 - $300</td>
                    <td className="border border-gray-300 px-4 py-3">Total vs free; multi-hormone runs higher</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Vitamin D (25-OH)</td>
                    <td className="border border-gray-300 px-4 py-3">~$35 - $150</td>
                    <td className="border border-gray-300 px-4 py-3">Common add-on to wellness panels</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Hemoglobin A1c (diabetes)</td>
                    <td className="border border-gray-300 px-4 py-3">~$38 - $75</td>
                    <td className="border border-gray-300 px-4 py-3">Often bundled into men&apos;s/wellness panels</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>The pattern:</strong> for the same common test, Quest and Labcorp self-pay
              prices usually land within a few dollars of each other. Where one looks dramatically
              cheaper, it is almost always a temporary sale or a slightly different bundle, not a
              durable advantage. That is why the smarter move is to price the exact test at both,
              the same week, before buying.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Bundled panels lower the per-test price</h4>
              <p className="text-gray-700">
                Both labs sell broad wellness panels (CBC + CMP + lipids + thyroid + vitamins, etc.)
                that cost more in total but far less per marker than buying each test individually.
                If you want a full snapshot, a single panel is usually the better value than five
                separate orders — compare the bundle price, not just the line items.
              </p>
            </div>

            <h2 id="how-cheaper" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why Self-Pay Can Beat Going Through Insurance</h2>

            <p className="text-gray-700 mb-4">
              This surprises people: paying cash can cost less than using insurance. If you have a
              high deductible you haven&apos;t met, the &quot;insured&quot; price is just the full
              negotiated rate billed to you — often higher than the transparent self-pay price on
              questhealth.com or Labcorp OnDemand. For many common tests, the self-pay price can be
              lower than your out-of-pocket cost with insurance before the deductible is met.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>One transparent price:</strong> you see the cost before you commit — no surprise bill weeks later</li>
              <li><strong>HSA/FSA eligible:</strong> lab testing typically qualifies, effectively discounting it by your tax rate</li>
              <li><strong>No claim, no referral:</strong> nothing routes through a payer, so there&apos;s no authorization step</li>
            </ul>

            <p className="text-gray-700 mb-4">
              The trade-off: self-pay results do not automatically land in your insurer&apos;s or
              primary-care record, and the cost does not count toward your deductible. If you have
              already met your deductible, running it through insurance may be cheaper. Check both
              before assuming.
            </p>

            <h2 id="locations" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Locations &amp; Collection Options</h2>

            <p className="text-gray-700 mb-4">
              Footprint is roughly even, and that is the single biggest practical differentiator
              between the two for most people.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Factor</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Quest</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Labcorp</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Draw sites</td>
                    <td className="border border-gray-300 px-4 py-3">2,000+ Quest locations</td>
                    <td className="border border-gray-300 px-4 py-3">2,000+ Patient Service Centers</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Retail-pharmacy sites</td>
                    <td className="border border-gray-300 px-4 py-3">Select retail partnerships</td>
                    <td className="border border-gray-300 px-4 py-3">400+ Labcorp at Walgreens</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">At-home collection</td>
                    <td className="border border-gray-300 px-4 py-3">Yes (estimate ~$79) + kits</td>
                    <td className="border border-gray-300 px-4 py-3">At-home kits for select tests</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">State availability</td>
                    <td className="border border-gray-300 px-4 py-3">Not in AZ, HI, PR</td>
                    <td className="border border-gray-300 px-4 py-3">Broad US coverage</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">The location winner is local</h4>
              <p className="text-gray-700">
                There is no national winner here. Pull up both provider locators with your ZIP code.
                Whichever has a draw site on your commute wins, because for a one-off blood draw, ten
                minutes of convenience beats a few dollars of price difference. If you&apos;re in
                Arizona, Hawaii, or Puerto Rico, Labcorp is effectively the self-pay option.
              </p>
            </div>

            <h2 id="process" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How Ordering Works (Both Labs)</h2>

            <p className="text-gray-700 mb-4">
              The flow is nearly identical between Quest Health and Labcorp OnDemand:
            </p>

            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Pick your test online</strong> and pay (credit card or, in most cases, HSA/FSA)</li>
              <li><strong>An independent physician reviews and authorizes</strong> the order — this is what replaces the doctor visit</li>
              <li><strong>Book a collection:</strong> walk into a draw site, use a retail-pharmacy location, or order an at-home kit where offered</li>
              <li><strong>Get the sample taken</strong> by a phlebotomist (or self-collect for kit tests)</li>
              <li><strong>Receive results online</strong> — most within 1-2 days of the lab receiving your sample</li>
            </ol>

            <p className="text-gray-700 mb-4">
              Both also offer the option to discuss results with an independent provider for certain
              tests. That is helpful, but it is not the same as ongoing care from a clinician who
              knows your history.
            </p>

            <h2 id="considerations" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Things to Know Before You Buy</h2>

            <p className="text-gray-700 mb-4">
              Self-pay direct lab testing is convenient, but it carries real considerations. A
              balanced view:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>It is screening, not diagnosis.</strong> A self-ordered result is a data point. Diagnosis and treatment decisions require a clinician who can see the full picture.</li>
              <li><strong>Abnormal results need follow-up.</strong> An out-of-range value should be reviewed with your healthcare provider, not acted on alone.</li>
              <li><strong>Results may not reach your records.</strong> Self-pay tests don&apos;t automatically sync to your primary-care chart or insurer.</li>
              <li><strong>Prices and availability change.</strong> Sales, bundles, and state availability shift; the number you see today may differ next week.</li>
              <li><strong>No test guarantees an outcome.</strong> Lab values inform decisions; they don&apos;t predict or prevent disease on their own.</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Watch for: the &quot;cheap list price, pricey add-ons&quot; pattern</h4>
              <p className="text-gray-700">
                A low headline price can climb once you add at-home collection, expedited results, or
                a follow-up consultation. Check the full cart total, including any collection fee,
                before deciding which lab is actually cheaper for your specific order.
              </p>
            </div>

            <h2 id="verdict" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Which to Choose</h2>

            <div className="bg-blue-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: Quest (questhealth.com)</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Your nearest convenient draw site is a Quest location</li>
                <li>You specifically want the at-home collection option</li>
                <li>Quest is running the better sale on your exact test that week</li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                Good fit for: anyone with a Quest site nearby who wants flexible collection
              </p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: Labcorp (OnDemand)</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>A Labcorp center or Labcorp at Walgreens is closest to you</li>
                <li>You live in Arizona, Hawaii, or Puerto Rico (Quest gaps)</li>
                <li>You want straightforward HSA/FSA checkout on most tests</li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                Good fit for: anyone near a Labcorp/Walgreens site or in a Quest-gap state
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">A simple decision framework</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li>Find the exact test on both questhealth.com and Labcorp OnDemand</li>
              <li>Compare the all-in cart price, including any collection fee, the same week</li>
              <li>Check which has a more convenient draw site near you</li>
              <li>If prices and convenience tie, pick whichever is running a sale</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Other self-pay lab options to consider</h3>
            <p className="text-gray-700 mb-4">
              Quest and Labcorp aren&apos;t the only way to get cash-pay bloodwork. Membership and
              at-home platforms often run on the same two labs&apos; infrastructure but package it
              differently — sometimes with broader panels or coaching, sometimes at a premium.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>At-home test kits:</strong> see our <Link href="/guides/everlywell-vs-letsgetchecked" className="text-blue-600 hover:underline">Everlywell vs LetsGetChecked comparison</Link> for finger-prick options</li>
              <li><strong>Body-composition scanning:</strong> our <Link href="/guides/bodyspec-vs-dexafit" className="text-blue-600 hover:underline">BodySpec vs DexaFit guide</Link> covers DEXA self-pay pricing</li>
              <li><strong>Membership lab platforms:</strong> compare options on the <Link href="/labs" className="text-blue-600 hover:underline">cash-pay labs directory</Link></li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Cash-Pay Lab Testing Options</h3>
            <p className="mb-6 text-blue-100">
              See membership and at-home lab platforms side by side, with transparent self-pay pricing.
            </p>
            <Link
              href="/labs"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse Cash-Pay Labs
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
              This guide is for general informational purposes only and is not medical advice. We are
              not affiliated with Quest Diagnostics or Labcorp. Pricing is based on publicly available
              data and third-party self-pay pricing guides and is presented as estimates that vary by
              test, location, and current promotions — always verify the current price directly on
              questhealth.com or ondemand.labcorp.com before purchasing. Self-ordered lab tests are
              for wellness and screening; they are not a substitute for clinical care. Abnormal or
              concerning results should be reviewed with a licensed healthcare provider.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Quest Diagnostics — questhealth.com (buy your own lab tests, pricing, locations, turnaround)</li>
              <li>• Labcorp OnDemand — ondemand.labcorp.com (self-pay tests, HSA/FSA, locations, turnaround)</li>
              <li>• Labcorp — labcorp.com (Patient Service Centers and Labcorp at Walgreens counts)</li>
              <li>• Published self-pay lab pricing guides (typical price ranges for common tests)</li>
              <li>• Self-pay lab comparison reporting on the two largest US clinical labs (Quest &amp; Labcorp)</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Self-Pay Lab Pricing Cheat Sheet"
            description="Quest vs Labcorp: how to price the same test at both labs and time a sale."
            source="guide_quest_vs_labcorp_pricing"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
