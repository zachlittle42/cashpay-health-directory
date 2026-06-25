import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Online Psychiatry Cost Without Insurance (2026 Guide)' },
  alternates: { canonical: 'https://vitalityscout.com/guides/online-psychiatry-cost' },
  description:
    'Online psychiatry cost without insurance — Brightside ~$95/mo, Hims/Hers from ~$49/mo, Cerebral ~$60/mo, per-visit options, and how it beats therapy cost.',
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does online psychiatry cost without insurance?',
    answer:
      'Cash-pay online psychiatry usually runs about $49 to $199 per month for medication management on a subscription model, or roughly $250 to $500 for a one-time initial evaluation plus $100 to $300 per follow-up on a per-visit model. Subscription examples include Brightside at an estimated $95/month for psychiatry and Hims/Hers from about $49/month billed quarterly. The medication itself is usually a separate cost. These are estimates that change often — confirm current self-pay pricing on each provider\'s own site.',
  },
  {
    question: 'Is online psychiatry cheaper than seeing a psychiatrist in person?',
    answer:
      'Usually, yes, for cash payers. A traditional in-person psychiatrist commonly charges an estimated $250 to $500 for the initial evaluation and $80 to $300 per follow-up. Subscription telepsychiatry can bundle the visit and ongoing messaging for an estimated $49 to $199 per month, which often works out lower over a year for routine medication management. The trade-off is that subscriptions typically handle straightforward anxiety and depression, not complex cases — and most do not prescribe controlled substances. Treat all figures as estimates to verify.',
  },
  {
    question: 'Does online psychiatry cost more than online therapy?',
    answer:
      'Often, no — medication-management psychiatry can be cheaper than talk therapy. Subscription psychiatry (medication management) is commonly estimated at $49 to $199 per month, while online therapy with weekly live sessions is commonly estimated at about $240 to $400 per month. The two solve different problems: psychiatry manages medication; therapy provides talk-based treatment. Some people use one, some use both. Combined therapy-plus-psychiatry plans (for example, an estimated $349/month at Brightside) cost more than either alone. Verify current pricing with each provider.',
  },
  {
    question: 'Does the price of online psychiatry include the medication?',
    answer:
      'Usually not — the subscription fee covers the provider visit and ongoing care, and the prescription is billed separately. Some platforms offer mail-order delivery for a flat fee (Brightside lists an estimated $15 per fill), while others send the prescription to your local pharmacy where the cash price varies by drug. A GoodRx-style discount card can lower the medication cost. Always check whether a quoted monthly price is medication-included or medication-separate before comparing plans.',
  },
  {
    question: 'Can I get psychiatric medication online without insurance?',
    answer:
      'Yes. Cash-pay platforms such as Brightside, Hims/Hers, and Cerebral let you complete an evaluation and, where clinically appropriate, receive a prescription without using insurance. Most of these services do not prescribe controlled substances (for example, ADHD stimulants or benzodiazepines), and prescribing rules vary by state and continue to evolve. A medication prescribed online still requires a licensed clinician\'s evaluation. Confirm what a platform can prescribe where you live before signing up.',
  },
  {
    question: 'Can I use an HSA or FSA to pay for online psychiatry?',
    answer:
      'Often, yes — psychiatric care is typically an eligible HSA/FSA expense, which effectively discounts it by your tax rate. Coverage depends on the platform: some accept HSA/FSA cards directly, while others (Hims/Hers, for example, does not accept HSA/FSA) require you to pay out of pocket and seek reimbursement. Confirm both the platform\'s payment options and your plan administrator\'s rules before assuming a service qualifies.',
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

export default function OnlinePsychiatryCost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Online Psychiatry Cost Without Insurance: 2026 Self-Pay Guide',
    description:
      'What online psychiatry and medication management cost without insurance in 2026 — subscription vs per-visit pricing, real provider examples (Brightside, Hims/Hers, Cerebral, Talkiatry), and how it compares to therapy and to an in-person psychiatrist.',
    url: 'https://vitalityscout.com/guides/online-psychiatry-cost',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/online-psychiatry-cost#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalTherapy', name: 'Psychiatric medication management (telepsychiatry)' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'Brightside Health — how much does it cost (self-pay psychiatry, therapy, combined plans)', url: 'https://www.brightside.com/faqs/how-much-does-it-cost/' },
      { '@type': 'CreativeWork', name: 'Talkiatry — psychiatrist costs: how much can I expect to pay', url: 'https://www.talkiatry.com/blog/how-much-does-a-psychiatrist-cost' },
      { '@type': 'CreativeWork', name: 'GoodRx — how much does psychiatry cost without insurance', url: 'https://www.goodrx.com/health-topic/neurological/psychiatrist-cost-without-insurance' },
      { '@type': 'CreativeWork', name: 'Cerebral — plans and pricing', url: 'https://cerebral.com/plans' },
      { '@type': 'CreativeWork', name: 'Doctor On Demand — online psychiatry self-pay pricing', url: 'https://doctorondemand.com/online-psychiatry/' },
      { '@type': 'CreativeWork', name: 'ChoosingTherapy — Hims mental health review (cost, model)', url: 'https://www.choosingtherapy.com/hims-mental-health-review/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/online-psychiatry-cost#faq', url: 'https://vitalityscout.com/guides/online-psychiatry-cost' };

  return (
    <>
      <Navigation />
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
              <span className="text-gray-900">Online Psychiatry Cost</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/mental-health" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Online Therapy &amp; Psychiatry Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Mental Health
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Online Psychiatry Cost Without Insurance: The 2026 Self-Pay Guide
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              If you want medication management without an insurance claim, online psychiatry is
              often the cheapest route. Here is what cash-pay psychiatry actually costs — by the
              month and by the visit — and how it compares to therapy.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                Without insurance, <strong>online psychiatry typically costs about $49&ndash;$199 per
                month</strong> for subscription medication management (for example, Brightside ~$95/mo,
                Hims/Hers from ~$49/mo billed quarterly, Cerebral ~$60/mo), or about{' '}
                <strong>$250&ndash;$500 for an initial evaluation plus $100&ndash;$300 per follow-up</strong>{' '}
                on a per-visit model. The medication is usually a separate cost. Most cash-pay
                platforms do not prescribe controlled substances. Prices are estimates that change —
                verify on each provider&apos;s site. This is information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: June 2026 • 11 min read
            </p>
          </div>
        </section>

        {/* Prominent Safety Notice */}
        <div className="bg-red-50 border-b-2 border-red-200">
          <div className="mx-auto max-w-4xl px-4 py-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🆘</div>
              <div>
                <h3 className="font-bold text-red-900 text-lg mb-2">If You Are in Crisis, Get Help Now</h3>
                <p className="text-red-800 text-sm">
                  If you are in crisis or thinking about harming yourself, call or text{' '}
                  <strong>988</strong> (the Suicide &amp; Crisis Lifeline) in the US, available 24/7,
                  or go to your nearest emergency room. The online psychiatry services discussed on
                  this page are <strong>not for emergencies</strong> and are not a substitute for
                  crisis or emergency care.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Comparison Box */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Cash-Pay Psychiatry at a Glance</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Subscription model (per month)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Hims / Hers: from ~$49/mo, billed quarterly (estimate)</li>
                  <li>• Cerebral: ~$60/mo medication management (estimate)</li>
                  <li>• Brightside: ~$95/mo psychiatry plan (estimate)</li>
                  <li>• Visit + ongoing messaging usually bundled</li>
                  <li>• Medication usually billed separately</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Per-visit model (cash)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Initial evaluation: ~$250&ndash;$500 (estimate)</li>
                  <li>• Follow-up: ~$100&ndash;$300 (estimate)</li>
                  <li>• Doctor On Demand: ~$299 intake / ~$129 follow-up</li>
                  <li>• You pay per appointment, not monthly</li>
                  <li>• Closer to a traditional psychiatrist fee</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">A subscription fits if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You want straightforward anxiety/depression med management</li>
                  <li>• You prefer one predictable monthly price</li>
                  <li>• You are comfortable with messaging-based care</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">Per-visit fits if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You want live video with a psychiatrist</li>
                  <li>• You only need an occasional appointment</li>
                  <li>• Your situation is more complex than a subscription handles</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#what-you-pay" className="text-blue-600 hover:underline">1. What you actually pay for</a></li>
              <li><a href="#by-provider" className="text-blue-600 hover:underline">2. Cost by provider (Brightside, Hims/Hers, Cerebral, more)</a></li>
              <li><a href="#per-visit" className="text-blue-600 hover:underline">3. Per-visit vs subscription pricing</a></li>
              <li><a href="#medication" className="text-blue-600 hover:underline">4. The medication is a separate cost</a></li>
              <li><a href="#vs-therapy" className="text-blue-600 hover:underline">5. Psychiatry cost vs therapy cost</a></li>
              <li><a href="#vs-in-person" className="text-blue-600 hover:underline">6. Online vs an in-person psychiatrist</a></li>
              <li><a href="#considerations" className="text-blue-600 hover:underline">7. Things to know before you sign up</a></li>
              <li><a href="#how-to-save" className="text-blue-600 hover:underline">8. How to keep the cost down</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              &quot;Psychiatry&quot; online almost always means <strong>medication management</strong> — a
              prescriber evaluates you and, where appropriate, prescribes and adjusts medication for
              conditions like anxiety or depression. That is a different service, and a different price,
              from talk therapy. If you are paying cash, the headline number is usually a monthly
              subscription, but the medication is billed on top. Here is the honest cost breakdown.
            </p>

            <h2 id="what-you-pay" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What You Actually Pay For</h2>

            <p className="text-gray-700 mb-4">
              Online psychiatry costs split into two or three line items. Conflating them is the most
              common reason a &quot;$49 a month&quot; plan ends up costing more than expected.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>The provider visit / ongoing care:</strong> the evaluation plus follow-ups and messaging. On subscription platforms this is the monthly fee; on per-visit platforms it is the appointment charge.</li>
              <li><strong>The medication:</strong> almost always separate. You pay the pharmacy (cash price or your Rx-benefit copay), or a flat mail-order fee on platforms that deliver.</li>
              <li><strong>Optional add-ons:</strong> some platforms layer therapy onto psychiatry for a combined (higher) price, or charge for extra sessions.</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why this matters:</strong> when you compare two plans, check whether the price
                is <em>medication-included</em> or <em>medication-separate</em>. A higher subscription
                that bundles delivery can be cheaper all-in than a lower one where the drug is extra.
              </p>
            </div>

            <h2 id="by-provider" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cost by Provider (Self-Pay)</h2>

            <p className="text-gray-700 mb-4">
              The figures below are <strong>estimates drawn from each provider&apos;s published self-pay
              pricing and credible review sources</strong>, not live quotes. Plans and promotions
              change frequently, so confirm the current number on the provider&apos;s own page before
              you sign up.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Provider</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Self-pay psychiatry price (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Model &amp; notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Hims / Hers</td>
                    <td className="border border-gray-300 px-4 py-3">From ~$49/mo (billed ~$147/quarter)</td>
                    <td className="border border-gray-300 px-4 py-3">Async messaging; anxiety/depression only; no insurance, no controlled substances</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Cerebral</td>
                    <td className="border border-gray-300 px-4 py-3">~$60/mo medication management (~$180/quarter)</td>
                    <td className="border border-gray-300 px-4 py-3">Subscription; med+therapy plan higher; no controlled substances</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Brightside Health</td>
                    <td className="border border-gray-300 px-4 py-3">~$95/mo psychiatry plan</td>
                    <td className="border border-gray-300 px-4 py-3">Depression/anxiety focus; combined therapy+psychiatry ~$349/mo; mail-order Rx ~$15/fill</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Nurx</td>
                    <td className="border border-gray-300 px-4 py-3">~$59 initial + ~$69/mo ongoing</td>
                    <td className="border border-gray-300 px-4 py-3">Med management for select conditions; check state availability</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Doctor On Demand</td>
                    <td className="border border-gray-300 px-4 py-3">~$299 initial / ~$129 follow-up</td>
                    <td className="border border-gray-300 px-4 py-3">Per-visit live video with a psychiatrist; insurance also accepted</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Talkiatry</td>
                    <td className="border border-gray-300 px-4 py-3">Insurance-based (cash ref: ~$300&ndash;$500 intake)</td>
                    <td className="border border-gray-300 px-4 py-3">Operates in-network; not built for self-pay — check eligibility first</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Talkiatry is the exception, not the rule</h4>
              <p className="text-gray-700">
                Talkiatry is one of the most-searched names in online psychiatry, but it is built
                around <strong>insurance</strong> — it accepts patients whose plans it is in-network
                with rather than running a flat cash subscription. If you have coverage it accepts,
                visits can be low-cost; if you do not, the platforms above are the practical cash-pay
                options. Confirm your eligibility before assuming a price.
              </p>
            </div>

            <h2 id="per-visit" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Per-Visit vs Subscription Pricing</h2>

            <p className="text-gray-700 mb-4">
              The two pricing models suit different needs, and the cheaper one depends on how often
              you actually need care.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Subscription (monthly):</strong> one predictable price covering the visit plus messaging between appointments. Best for ongoing medication management where you want regular check-ins. Estimated ~$49&ndash;$199/month.</li>
              <li><strong>Per-visit (pay-as-you-go):</strong> you pay for each appointment. Best if you only need an occasional review and do not want a recurring charge. Estimated ~$250&ndash;$500 initial, ~$100&ndash;$300 per follow-up.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              <strong>The math:</strong> if you need monthly contact, a subscription usually wins over
              a year. If you are stable and only need a couple of reviews a year, per-visit can be
              cheaper. Add up a realistic year of care under each model before choosing.
            </p>

            <h2 id="medication" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Medication Is a Separate Cost</h2>

            <p className="text-gray-700 mb-4">
              This is the line item people forget. The subscription pays the prescriber; the drug is
              billed on top. The good news for cash payers: many common psychiatric medications are
              generic and inexpensive.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Mail-order delivery:</strong> some platforms ship for a flat fee (Brightside lists an estimated $15 per fill).</li>
              <li><strong>Local pharmacy:</strong> the cash price varies by drug; common generic antidepressants are often inexpensive, and a GoodRx-style discount card can lower it further.</li>
              <li><strong>Rx benefits:</strong> if you have a prescription-drug plan, your copay may apply even when you are paying cash for the visit.</li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">A note on what can be prescribed online</h4>
              <p className="text-gray-700 text-sm">
                Prescribing of <strong>controlled substances</strong> via telehealth (for example,
                certain ADHD stimulants or anti-anxiety benzodiazepines) is restricted, varies by
                platform and by state, and the rules continue to evolve. Most cash-pay subscription
                platforms — including Hims/Hers, Cerebral, and Brightside — do not prescribe
                controlled medications. If a specific medication matters to you, confirm directly with
                the platform whether they can prescribe it where you live.
              </p>
            </div>

            <h2 id="vs-therapy" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Psychiatry Cost vs Therapy Cost</h2>

            <p className="text-gray-700 mb-4">
              People often assume psychiatry is the pricier of the two. For cash payers it is
              frequently the opposite: <strong>medication management can cost less than weekly talk
              therapy</strong>, because a med-management visit is shorter and less frequent than a
              therapy session.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Service</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">What it does</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical cash cost (estimate)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Online psychiatry (med management)</td>
                    <td className="border border-gray-300 px-4 py-3">Prescribes &amp; adjusts medication</td>
                    <td className="border border-gray-300 px-4 py-3">~$49&ndash;$199/month</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Online therapy (talk)</td>
                    <td className="border border-gray-300 px-4 py-3">Counseling / talk-based treatment</td>
                    <td className="border border-gray-300 px-4 py-3">~$240&ndash;$400/month (weekly sessions)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Combined (therapy + psychiatry)</td>
                    <td className="border border-gray-300 px-4 py-3">Both, on one platform</td>
                    <td className="border border-gray-300 px-4 py-3">~$349/month (e.g., Brightside estimate)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              They are not substitutes. A psychiatrist or psychiatric prescriber manages medication;
              a therapist provides talk therapy and generally cannot prescribe. Some people use one,
              some use both. If you want to compare therapy-first platforms head to head, see our{' '}
              <Link href="/guides/betterhelp-vs-talkspace" className="text-blue-600 hover:underline">BetterHelp vs Talkspace vs Brightside comparison</Link>.
            </p>

            <h2 id="vs-in-person" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Online vs an In-Person Psychiatrist</h2>

            <p className="text-gray-700 mb-4">
              A traditional in-person psychiatrist paid in cash commonly charges an estimated{' '}
              <strong>$250&ndash;$500 for the initial evaluation</strong> and{' '}
              <strong>$80&ndash;$300 per follow-up</strong>, with rates running higher in major metros
              and for highly specialized providers. Over a year of routine medication management, a
              cash subscription often comes out lower.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Online is usually cheaper</strong> for straightforward, ongoing anxiety/depression med management.</li>
              <li><strong>In-person may be necessary</strong> for complex diagnoses, controlled-substance treatment, or when a hands-on evaluation matters.</li>
              <li><strong>Both require a licensed clinician.</strong> An online prescription is still a real evaluation, not an automatic refill.</li>
            </ul>

            <h2 id="considerations" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Things to Know Before You Sign Up</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Quarterly billing inflates the first charge.</strong> A &quot;$49/month&quot; plan billed every three months hits your card as one larger payment up front.</li>
              <li><strong>Cancellation terms vary.</strong> Check whether you are locked into a quarter and how to cancel before the next cycle.</li>
              <li><strong>Async vs live matters.</strong> Some platforms (e.g., Hims/Hers) are messaging-only with no live appointment; if you want video, confirm it is offered in your state.</li>
              <li><strong>Scope is limited on subscriptions.</strong> Many handle only anxiety and depression and do not treat ADHD, bipolar disorder, or prescribe controlled substances.</li>
              <li><strong>It is not for emergencies.</strong> These services are for routine care; use the crisis resources at the top of this page if your situation is urgent.</li>
            </ul>

            <h2 id="how-to-save" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Keep the Cost Down</h2>

            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li>Match the model to your need — subscription for ongoing care, per-visit if you are stable and rarely need a review.</li>
              <li>Price the medication separately and ask about flat-fee mail-order vs a local pharmacy with a discount card.</li>
              <li>Use HSA/FSA dollars where the platform and your plan allow it — that effectively discounts care by your tax rate.</li>
              <li>Compare the all-in first quarter, not just the headline monthly number, before committing.</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Related telehealth cost guides</h3>
            <p className="text-gray-700 mb-4">
              Psychiatry is one of several conditions that moved to cash-pay telehealth. If you are
              pricing virtual care more broadly, these companion guides cover the same self-pay lens:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Therapy and psychiatry platforms head to head:</strong> our <Link href="/guides/betterhelp-vs-talkspace" className="text-blue-600 hover:underline">BetterHelp vs Talkspace vs Brightside</Link> comparison</li>
              <li><strong>Menopause / HRT online:</strong> see <Link href="/guides/online-menopause-treatment" className="text-blue-600 hover:underline">online menopause treatment &amp; HRT</Link> for hormone-care pricing</li>
              <li><strong>Other telehealth options:</strong> browse the full <Link href="/telehealth" className="text-blue-600 hover:underline">telehealth directory</Link> to compare cash-pay virtual care</li>
            </ul>
          </div>

          {/* Money-page CTA */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Online Psychiatry &amp; Therapy Platforms</h3>
            <p className="mb-6 text-blue-100">
              See psychiatry and therapy services side by side — what they prescribe, whether they
              take insurance, and transparent self-pay pricing.
            </p>
            <Link
              href="/mental-health"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Compare mental health platforms →
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
              <li>• Brightside Health — brightside.com (self-pay psychiatry $95/mo, therapy $299/mo, combined $349/mo, mail-order Rx ~$15/fill)</li>
              <li>• Talkiatry — talkiatry.com (psychiatrist cost ranges; insurance-based model)</li>
              <li>• GoodRx — goodrx.com (psychiatry cost without insurance)</li>
              <li>• Cerebral — cerebral.com/plans (medication-management self-pay pricing)</li>
              <li>• Doctor On Demand — doctorondemand.com (per-visit online psychiatry pricing)</li>
              <li>• ChoosingTherapy — choosingtherapy.com (Hims/Hers and Cerebral review pricing &amp; service model)</li>
              <li>• Nurx — nurx.com (mental-health medication-management pricing)</li>
              <li>• Published self-pay / telehealth pricing guides (typical online psychiatry &amp; therapy ranges)</li>
            </ul>
          </div>

          <MedicalDisclaimer />
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Cash-Pay Mental Health Pricing Cheat Sheet"
            description="Online psychiatry vs therapy: how to compare the all-in monthly cost and avoid surprise medication charges."
            source="guide_online_psychiatry_cost"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
