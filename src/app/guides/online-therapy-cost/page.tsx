import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Online Therapy Cost Without Insurance (2026 Guide)' },
  alternates: { canonical: 'https://vitalityscout.com/guides/online-therapy-cost' },
  description: 'Online therapy cost without insurance: BetterHelp, Talkspace, Brightside and Open Path on per-session vs subscription pricing, plus how to find cheap care.',
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does online therapy cost without insurance?',
    answer: 'For subscription platforms, online therapy without insurance is commonly estimated at roughly $260-$400 per month. BetterHelp lists about $70-$100 per week (billed every 4 weeks), and Talkspace lists its video + messaging therapy plan at about $99 per week. A traditional out-of-pocket therapy session, by comparison, often runs $100-$200. Sliding-scale networks like Open Path Collective list sessions as low as $40-$70. These are estimates that change with plan, location, and current promotions — confirm the live price on each provider\'s own site before you sign up.',
  },
  {
    question: 'Is BetterHelp or Talkspace cheaper without insurance?',
    answer: 'They price similarly. BetterHelp lists about $70-$100 per week (billed every 4 weeks), which works out to roughly $280-$400 per month. Talkspace lists its standard video + messaging therapy plan at about $99 per week (roughly $396 per month), with a messaging-only plan around $69 per week. The week-to-week winner usually depends on your exact plan tier and whichever is running a discount, not a durable price gap. Verify the current price on each platform before deciding.',
  },
  {
    question: 'What is the cheapest way to get therapy without insurance?',
    answer: 'The lowest-cost legitimate route is usually a sliding-scale therapist rather than a flat-rate subscription. Open Path Collective lists individual sessions at about $40-$70 (and $30 with a student intern) after a one-time membership fee of about $65, for people who lack adequate mental-health coverage. University training clinics, community mental-health centers, and therapists who post a sliding scale on directories like Psychology Today are other low-cost options. Eligibility and pricing vary — confirm current rates and qualification rules directly with the provider.',
  },
  {
    question: 'Can I use my HSA or FSA to pay for online therapy?',
    answer: 'Generally yes. Therapy and psychiatry are typically HSA/FSA-eligible medical expenses, and platforms such as Brightside Health state you can use HSA or FSA funds for treatment, copays, and prescriptions. Many subscription platforms accept HSA/FSA cards at checkout. Confirm eligibility with your plan administrator before assuming a specific service or membership qualifies.',
  },
  {
    question: 'Do online therapy platforms cost less than seeing a therapist in person?',
    answer: 'Often, but not always. The reported US average for an out-of-pocket in-person session is around $174 (Milliman, 2023), and many sessions run $100-$200. A subscription platform spreads a weekly session plus messaging across a monthly fee that can land near or below the cost of weekly in-person sessions. The trade-off is format: subscriptions bundle messaging and shorter sessions, while a per-session therapist gives you a full 50-minute hour. Compare the all-in monthly cost, not just the headline, and verify current pricing with each provider.',
  },
  {
    question: 'Do online therapy services include medication, or just talk therapy?',
    answer: 'It depends on the platform. BetterHelp and Talkspace are primarily talk-therapy services (Talkspace also offers separate psychiatry). Brightside Health offers psychiatry (medication management) from about $95 per month, therapy from about $299 per month, and a combined plan around $349 per month. A therapy plan does not by itself include prescriptions. Any medication decision is made by a licensed prescriber — confirm what a plan covers on the provider\'s site before enrolling.',
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

export default function OnlineTherapyCost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Online Therapy Cost Without Insurance: 2026 Price Guide',
    description:
      'What online therapy costs without insurance in 2026 — per-session vs subscription pricing across BetterHelp, Talkspace, Brightside, and Open Path Collective, plus HSA/FSA and how to find affordable care.',
    url: 'https://vitalityscout.com/guides/online-therapy-cost',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/online-therapy-cost#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalTherapy', name: 'Psychotherapy and online mental health care' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'Talkspace — out-of-pocket therapy plan pricing', url: 'https://www.talkspace.com/blog/blog-how-much-talkspace-costs/' },
      { '@type': 'CreativeWork', name: 'Brightside Health — cash-pay (no insurance) pricing', url: 'https://www.brightside.com/online-care-no-insurance/' },
      { '@type': 'CreativeWork', name: 'Open Path Psychotherapy Collective — pricing and eligibility', url: 'https://openpathcollective.org/pricing-and-eligibility-for-affordable-therapy/' },
      { '@type': 'CreativeWork', name: 'GoodRx — how much does therapy cost without insurance', url: 'https://www.goodrx.com/health-topic/mental-health/therapy-without-insurance' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/online-therapy-cost#faq', url: 'https://vitalityscout.com/guides/online-therapy-cost' };

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
              <span className="text-gray-900">Online Therapy Cost</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/mental-health" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Mental Health Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Comparison
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Online Therapy Cost Without Insurance: The 2026 Price Guide
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              What you actually pay for therapy when you skip insurance — subscription
              platforms, per-session therapists, and the sliding-scale networks most
              people never hear about. Here is the honest breakdown.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                Online therapy without insurance usually costs <strong>about $260-$400 per
                month</strong> on subscription platforms — BetterHelp lists roughly{' '}
                <strong>$70-$100/week</strong> and Talkspace about <strong>$99/week</strong> for
                video + messaging. A traditional out-of-pocket session runs <strong>$100-$200</strong>,
                while sliding-scale networks like <strong>Open Path Collective</strong> list sessions from{' '}
                <strong>$40-$70</strong>. Prices are estimates that change often — verify on each
                provider&apos;s site. This is information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: June 2026 • 11 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Comparison Box */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Comparison (self-pay, estimates)</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Subscription platforms</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• BetterHelp: ~$70-$100/week (billed every 4 weeks)</li>
                  <li>• Talkspace: ~$99/week video + messaging</li>
                  <li>• Brightside therapy: ~$299/month</li>
                  <li>• Weekly session + unlimited messaging</li>
                  <li>• HSA/FSA generally accepted</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Per-session &amp; sliding scale</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Traditional session: ~$100-$200</li>
                  <li>• US out-of-pocket average: ~$174 (Milliman 2023)</li>
                  <li>• Open Path: ~$40-$70/session</li>
                  <li>• Open Path intern: ~$30/session</li>
                  <li>• Open Path one-time fee: ~$65</li>
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
                  <li>• You want weekly contact plus messaging in between</li>
                  <li>• A predictable monthly fee is easier than per-visit billing</li>
                  <li>• You may also need psychiatry (Brightside, Talkspace)</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">Per-session / sliding scale fits if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You want a full 50-minute hour, not bundled messaging</li>
                  <li>• Cost is the deciding factor and you may qualify for a low rate</li>
                  <li>• You prefer one consistent therapist over a platform</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#two-models" className="text-blue-600 hover:underline">1. The two pricing models</a></li>
              <li><a href="#platform-pricing" className="text-blue-600 hover:underline">2. What each platform costs without insurance</a></li>
              <li><a href="#per-session" className="text-blue-600 hover:underline">3. Per-session and sliding-scale therapy</a></li>
              <li><a href="#affordable" className="text-blue-600 hover:underline">4. How to find affordable care</a></li>
              <li><a href="#hsa-fsa" className="text-blue-600 hover:underline">5. HSA/FSA and the insurance question</a></li>
              <li><a href="#considerations" className="text-blue-600 hover:underline">6. Things to know before you pay</a></li>
              <li><a href="#verdict" className="text-blue-600 hover:underline">7. Which model to choose</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              The hardest part of paying for therapy without insurance is that the price you
              see depends entirely on which door you walk through. A subscription platform
              quotes you a weekly fee. A private therapist quotes a per-session rate. A
              sliding-scale network quotes a number based on your income. They are not
              comparable apples-to-apples, so this guide breaks each one down with current,
              sourced numbers — and then helps you decide which model is cheapest for how you
              actually want to be treated.
            </p>

            <h2 id="two-models" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Two Pricing Models</h2>

            <p className="text-gray-700 mb-4">
              Almost every online therapy option falls into one of two camps, and the camp
              decides how you pay:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Subscription / membership:</strong> a flat weekly or monthly fee that bundles a recurring session (often 30-45 minutes) with unlimited messaging in between. BetterHelp, Talkspace, and Brightside Health work this way. You pay the same whether you message once or daily.</li>
              <li><strong>Per-session / fee-for-service:</strong> you pay for each visit, usually a full 50-minute hour. This covers traditional private-practice therapists, marketplace therapists, and sliding-scale networks like Open Path Collective. No subscription, no bundled messaging — you book and pay per appointment.</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why this matters:</strong> a $99/week subscription and a $174 per-session
                therapist can cost almost the same per month — but you get very different things.
                The subscription buys frequency and messaging access; the per-session buys a longer,
                deeper hour with one clinician. Price the format you want, not just the headline.
              </p>
            </div>

            <h2 id="platform-pricing" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Each Platform Costs Without Insurance</h2>

            <p className="text-gray-700 mb-4">
              Below are current self-pay estimates for the most-searched platforms. Prices move
              with frequent promotions and vary by location and plan tier, so treat these as
              <strong> estimates to confirm on each provider&apos;s own site</strong>, not live quotes.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Provider</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Self-pay price (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">What it includes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">BetterHelp</td>
                    <td className="border border-gray-300 px-4 py-3">~$70-$100/week (~$280-$400/mo)</td>
                    <td className="border border-gray-300 px-4 py-3">Weekly live session (chat/phone/video) + unlimited messaging</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Talkspace (messaging only)</td>
                    <td className="border border-gray-300 px-4 py-3">~$69/week (~$276/mo)</td>
                    <td className="border border-gray-300 px-4 py-3">Unlimited text/audio/video messaging, no scheduled live session</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Talkspace (video + messaging)</td>
                    <td className="border border-gray-300 px-4 py-3">~$99/week (~$396/mo)</td>
                    <td className="border border-gray-300 px-4 py-3">Four 30-min live sessions/month + unlimited messaging</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Brightside (therapy)</td>
                    <td className="border border-gray-300 px-4 py-3">~$299/month</td>
                    <td className="border border-gray-300 px-4 py-3">Four video sessions/month + unlimited messaging</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Brightside (psychiatry)</td>
                    <td className="border border-gray-300 px-4 py-3">~$95/month (+ pharmacy copay)</td>
                    <td className="border border-gray-300 px-4 py-3">Psychiatric evaluation + medication management</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Brightside (therapy + psychiatry)</td>
                    <td className="border border-gray-300 px-4 py-3">~$349/month</td>
                    <td className="border border-gray-300 px-4 py-3">Medication management + four therapy sessions/month</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Open Path Collective</td>
                    <td className="border border-gray-300 px-4 py-3">~$40-$70/session (~$30 intern)</td>
                    <td className="border border-gray-300 px-4 py-3">50-min session; one-time membership fee ~$65; income-eligible</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">BetterHelp</h3>
            <p className="text-gray-700 mb-4">
              BetterHelp is the largest subscription teletherapy platform. Self-pay pricing is
              listed at roughly <strong>$70-$100 per week, billed every four weeks</strong> — so a
              monthly charge in the <strong>$280-$400</strong> range, with the exact number set by
              your location, preferences, and therapist availability. A subscription typically
              covers one weekly live session (chat, phone, or video) plus the ability to message
              your counselor between sessions. BetterHelp has also begun expanding insurance
              acceptance with select payers, and offers financial-assistance discounts for those
              who qualify. It is therapy-only — no psychiatry or prescriptions.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Talkspace</h3>
            <p className="text-gray-700 mb-4">
              Talkspace prices by tier. The <strong>messaging-only</strong> plan is listed at about{' '}
              <strong>$69/week</strong>; the standard <strong>video + messaging</strong> plan, which
              includes four 30-minute live sessions a month, is about <strong>$99/week</strong>; and a
              higher tier with weekly workshops runs about <strong>$109/week</strong>. Billing
              quarterly or biannually can lower the effective rate. Talkspace also offers psychiatry
              separately, with an initial evaluation listed around <strong>$299</strong>. It accepts a
              number of insurance plans, which can substantially reduce cost for the covered.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Brightside Health</h3>
            <p className="text-gray-700 mb-4">
              Brightside is the one to look at if you may need medication as well as therapy. Its
              self-pay tiers are listed as <strong>psychiatry from ~$95/month</strong> (plus your
              pharmacy copay), <strong>therapy at ~$299/month</strong> for four video sessions and
              unlimited messaging, and a <strong>combined plan at ~$349/month</strong> that bundles
              both. The combined plan is priced below buying the two separately. Brightside notes you
              can pay with HSA or FSA funds.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Therapy vs psychiatry is a cost fork</h4>
              <p className="text-gray-700">
                Talk therapy (BetterHelp, Talkspace therapy, Brightside therapy) and psychiatry
                (medication management) are priced separately. A therapy plan does not include
                prescriptions. If you want both, look at a combined plan (Brightside) rather than
                stacking two subscriptions. For a deeper feature-by-feature breakdown of the
                platforms themselves, see our{' '}
                <Link href="/guides/betterhelp-vs-talkspace" className="text-blue-600 hover:underline">BetterHelp vs Talkspace vs Brightside comparison</Link>.
              </p>
            </div>

            <h2 id="per-session" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Per-Session and Sliding-Scale Therapy</h2>

            <p className="text-gray-700 mb-4">
              Outside the subscription world, you pay per visit. A traditional out-of-pocket therapy
              session commonly runs <strong>$100-$200</strong>, and a widely cited 2023 Milliman
              report put the US out-of-pocket average near <strong>$174 per session</strong>. In
              higher-cost metros like New York or San Francisco, a single session can reach{' '}
              <strong>$250 or more</strong>. Weekly sessions at those rates add up fast — which is why
              the sliding-scale route matters.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Open Path Collective</h3>
            <p className="text-gray-700 mb-4">
              Open Path Psychotherapy Collective is a nonprofit network built specifically for people
              who lack adequate mental-health coverage or cannot afford market rates. Individual
              sessions are listed at about <strong>$40-$70</strong> (and around <strong>$30</strong>
              {' '}with a supervised student intern), based on a standard 50-minute session, after a
              one-time membership fee of about <strong>$65</strong>. Couples and family sessions are
              listed slightly higher. It is income-eligibility based, so check whether you qualify
              before enrolling.
            </p>

            <p className="text-gray-700 mb-4">
              Open Path is the clearest example of a broader truth: a real, licensed therapist on a
              sliding scale is frequently <em>cheaper per session</em> than a subscription platform —
              you just have to look for it and may need to meet an income threshold.
            </p>

            <h2 id="affordable" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Find Affordable Care</h2>

            <p className="text-gray-700 mb-4">
              If cost is the constraint, work down this list before defaulting to the most-advertised
              option:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Sliding-scale networks:</strong> Open Path Collective and many independent therapists post reduced, income-based rates.</li>
              <li><strong>University training clinics:</strong> graduate-program clinics offer supervised sessions at low or sliding-scale rates.</li>
              <li><strong>Community mental-health centers:</strong> federally funded centers serve patients regardless of ability to pay.</li>
              <li><strong>Platform financial assistance:</strong> BetterHelp and others offer need-based discounts — ask before assuming the list price.</li>
              <li><strong>Directories with a price filter:</strong> Psychology Today and similar directories let you filter therapists by sliding scale and fee.</li>
              <li><strong>Billing cadence:</strong> on subscriptions, quarterly or biannual billing often lowers the effective weekly rate.</li>
            </ul>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">The cheapest option is rarely the most advertised one</h4>
              <p className="text-gray-700">
                Subscription platforms spend heavily on marketing, so they are what most people find
                first. A sliding-scale therapist or a community clinic can cost a fraction as much per
                session — but you have to go looking. Start with the network that matches your budget,
                not the brand you have heard of.
              </p>
            </div>

            <h2 id="hsa-fsa" className="text-2xl font-bold text-gray-900 mt-12 mb-6">HSA/FSA and the Insurance Question</h2>

            <p className="text-gray-700 mb-4">
              Therapy and psychiatry are typically <strong>HSA/FSA-eligible</strong> medical expenses.
              Many subscription platforms accept HSA/FSA cards at checkout, and Brightside states you
              can use those funds for treatment, copays, and prescriptions. Paying with pre-tax HSA/FSA
              dollars effectively discounts care by your marginal tax rate — confirm eligibility with
              your plan administrator first.
            </p>

            <p className="text-gray-700 mb-4">
              On the insurance side, the picture is shifting. BetterHelp began expanding acceptance of
              select insurers in 2026, and Talkspace and Brightside both contract with a range of plans.
              If you do have coverage, a copay can come in well below any self-pay price — so it is worth
              checking your plan even if you assumed therapy was out of reach.
            </p>

            <h2 id="considerations" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Things to Know Before You Pay</h2>

            <p className="text-gray-700 mb-4">
              Online therapy is convenient and often cheaper, but a balanced view matters:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Format is not interchangeable.</strong> A messaging-only plan is not the same as weekly live therapy; price the format you will actually use.</li>
              <li><strong>Subscriptions auto-renew.</strong> Weekly billing continues until you cancel — set a reminder if you are trialing a platform.</li>
              <li><strong>Therapy is not crisis care.</strong> Subscription and sliding-scale therapy are for ongoing support, not emergencies. In a crisis, call or text 988 (US Suicide &amp; Crisis Lifeline) or 911.</li>
              <li><strong>Prices change.</strong> Promotions, plan tiers, and insurance acceptance shift; the number you see today may differ next month.</li>
              <li><strong>Fit matters as much as price.</strong> The cheapest plan is not a deal if you do not connect with the therapist — most platforms let you switch.</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Watch for: the &quot;low weekly rate, big monthly charge&quot; framing</h4>
              <p className="text-gray-700">
                Platforms advertise a per-week number, but you are usually billed every four weeks.
                A &quot;$70/week&quot; plan is a ~$280 charge to your card at once. Look at the all-in
                monthly cost and the billing cadence before deciding which option is actually cheaper.
              </p>
            </div>

            <h2 id="verdict" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Which Model to Choose</h2>

            <div className="bg-blue-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: a subscription platform</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You want regular contact plus messaging access between sessions</li>
                <li>A predictable monthly fee is easier to manage than per-visit billing</li>
                <li>You may also need psychiatry/medication (Brightside or Talkspace)</li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                Good fit for: anyone who values frequency, convenience, and a single monthly bill
              </p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: per-session or sliding scale</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You want a full 50-minute hour, not bundled messaging</li>
                <li>Cost is the deciding factor and you may qualify for a reduced rate</li>
                <li>You prefer one consistent therapist over a platform-assigned match</li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                Good fit for: budget-first seekers and anyone who wants depth over frequency
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">A simple decision framework</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li>Decide whether you need therapy only, or therapy + medication (psychiatry)</li>
              <li>Check if you have insurance coverage or HSA/FSA funds — that can beat any self-pay price</li>
              <li>If paying cash, compare the all-in monthly cost of a subscription against four sliding-scale sessions</li>
              <li>If budget is tight, check Open Path, a university clinic, or platform financial assistance before the list price</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Related guides</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Platform deep-dive:</strong> our <Link href="/guides/betterhelp-vs-talkspace" className="text-blue-600 hover:underline">BetterHelp vs Talkspace vs Brightside comparison</Link> covers features and format side by side</li>
              <li><strong>Online psychiatry &amp; medication:</strong> browse cash-pay options in the <Link href="/telehealth" className="text-blue-600 hover:underline">telehealth providers directory</Link></li>
              <li><strong>Hormone-related mood symptoms:</strong> see our <Link href="/guides/online-menopause-treatment" className="text-blue-600 hover:underline">online menopause treatment guide</Link> if symptoms are tied to perimenopause</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Cash-Pay Mental Health Care</h3>
            <p className="mb-6 text-blue-100">
              See online therapy and psychiatry options side by side, with transparent self-pay pricing.
            </p>
            <Link
              href="/mental-health"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse Mental Health Care
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
              not affiliated with BetterHelp, Talkspace, Brightside Health, or Open Path Collective.
              Pricing is based on publicly available data and is presented as estimates that vary by
              plan, location, and current promotions — always verify the current price directly on each
              provider&apos;s site before purchasing. Online therapy is not a substitute for emergency
              care; if you are in crisis, call or text 988 (US Suicide &amp; Crisis Lifeline) or 911.
              Talk to a licensed clinician about your care.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Talkspace — how much Talkspace costs (out-of-pocket plan pricing: messaging $69/wk, video + messaging $99/wk)</li>
              <li>• Brightside Health — cash pay / no insurance pricing (psychiatry $95/mo, therapy $299/mo, combined $349/mo)</li>
              <li>• Open Path Psychotherapy Collective — pricing &amp; eligibility ($40-$70/session, $30 intern, ~$65 membership)</li>
              <li>• Therapyhelpers / Healthline — BetterHelp 2026 pricing (~$70-$100/week, billed every 4 weeks)</li>
              <li>• GoodRx &amp; Milliman (2023) — average out-of-pocket therapy cost (~$100-$200/session; ~$174 average)</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Affordable-Therapy Cheat Sheet"
            description="How to compare online therapy plans and find sliding-scale care without insurance."
            source="guide_online_therapy_cost"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
