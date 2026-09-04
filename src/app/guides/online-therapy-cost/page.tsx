import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

const PAGE_URL = 'https://vitalityscout.com/guides/online-therapy-cost';
const AS_OF = 'September 4, 2026';

export const metadata: Metadata = {
  title: { absolute: 'Online Therapy Cost (2026): BetterHelp $70-$100/Week' },
  alternates: { canonical: PAGE_URL },
  description:
    'Online therapy without insurance (2026): BetterHelp $70-$100/wk, Talkspace $69-$109/wk, Brightside $95-$349/mo, Open Path $40-$70. Confirm live prices.',
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does online therapy cost without insurance?',
    answer:
      `As of ${AS_OF}, BetterHelp's own site lists self-pay subscriptions at about $70-$100 per week (billed weekly or monthly). Talkspace's pricing page lists messaging therapy at $69/week, video + messaging at $99/week, and video + messaging + workshops at $109/week. Brightside's FAQ lists psychiatry at $95/month, therapy at $299/month, and combined at $349/month. Open Path Collective lists individual sessions at $40-$70 after a one-time $65 membership. These are published figures that change — confirm the live price on each provider's own site before you sign up.`,
  },
  {
    question: 'Is BetterHelp or Talkspace cheaper without insurance?',
    answer:
      `They still price in the same band. As of ${AS_OF}, BetterHelp lists about $70-$100 per week. Talkspace lists messaging-only at $69/week and video + messaging at $99/week. The week-to-week winner depends on your exact plan tier and whichever is running a discount, not a durable price gap. Verify the current price on each platform before deciding.`,
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
    answer:
      `It depends on the platform. BetterHelp is talk therapy (its site also mentions psychiatry through a separate UpLift option). Talkspace offers therapy subscriptions plus separate psychiatry. Brightside Health's FAQ lists psychiatry at $95 per month, therapy at $299 per month, and a combined plan at $349 per month as of ${AS_OF}. A therapy plan does not by itself include prescriptions. Any medication decision is made by a licensed prescriber — confirm what a plan covers on the provider's site before enrolling.`,
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
    url: PAGE_URL,
    mainEntity: { '@type': 'FAQPage', '@id': `${PAGE_URL}#faq` },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalTherapy', name: 'Psychotherapy and online mental health care' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-09-04',
    dateModified: '2026-09-04',
    citation: [
      { '@type': 'CreativeWork', name: 'BetterHelp — published self-pay weekly range', url: 'https://www.betterhelp.com/' },
      { '@type': 'CreativeWork', name: 'Talkspace — How Talkspace pricing works', url: 'https://www.talkspace.com/pricing' },
      { '@type': 'CreativeWork', name: 'Brightside Health — FAQ self-pay plans', url: 'https://www.brightside.com/faq/' },
      { '@type': 'CreativeWork', name: 'Open Path Psychotherapy Collective — pricing and eligibility', url: 'https://openpathcollective.org/pricing-and-eligibility-for-affordable-therapy/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${PAGE_URL}#faq`, url: PAGE_URL };

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
              Online Therapy Cost (2026): BetterHelp $70-$100/Week
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              What you actually pay for therapy when you skip insurance — subscription
              platforms, per-session therapists, and the sliding-scale networks most
              people never hear about. Here is the honest breakdown.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                As of {AS_OF}, BetterHelp lists self-pay at <strong>$70-$100/week</strong>.
                Talkspace lists <strong>$69/week</strong> messaging-only and{' '}
                <strong>$99/week</strong> video + messaging. Brightside lists psychiatry at{' '}
                <strong>$95/month</strong>, therapy at <strong>$299/month</strong>, and both at{' '}
                <strong>$349/month</strong>. Open Path lists sessions at <strong>$40-$70</strong>{' '}
                after a <strong>$65</strong> membership. These are published prices — verify on each
                provider&apos;s site. This is information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Prices read from BetterHelp, Talkspace, Brightside, and Open Path on {AS_OF} • 11 min read
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
                  <li>• BetterHelp: $70-$100/week (billed weekly or monthly)</li>
                  <li>• Talkspace: $69-$109/week by plan</li>
                  <li>• Brightside therapy: $299/month</li>
                  <li>• Weekly session + unlimited messaging</li>
                  <li>• HSA/FSA generally accepted</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Per-session &amp; sliding scale</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Traditional session: ~$100-$200</li>
                  <li>• US out-of-pocket average: ~$174 (Milliman 2023)</li>
                  <li>• Open Path: $40-$70/session</li>
                  <li>• Open Path intern: $30/session</li>
                  <li>• Open Path one-time fee: $65</li>
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
                    <td className="border border-gray-300 px-4 py-3">$70-$100/week (~$280-$400/mo)</td>
                    <td className="border border-gray-300 px-4 py-3">Weekly live session (chat/phone/video) + unlimited messaging</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Talkspace (messaging only)</td>
                    <td className="border border-gray-300 px-4 py-3">$69/week (~$276/mo)</td>
                    <td className="border border-gray-300 px-4 py-3">Unlimited text/audio/video messaging, no scheduled live session</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Talkspace (video + messaging)</td>
                    <td className="border border-gray-300 px-4 py-3">$99/week (~$396/mo)</td>
                    <td className="border border-gray-300 px-4 py-3">Four 30-min live sessions/month + unlimited messaging</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Brightside (therapy)</td>
                    <td className="border border-gray-300 px-4 py-3">$299/month</td>
                    <td className="border border-gray-300 px-4 py-3">Four video sessions/month + unlimited messaging</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Brightside (psychiatry)</td>
                    <td className="border border-gray-300 px-4 py-3">$95/month (+ pharmacy copay)</td>
                    <td className="border border-gray-300 px-4 py-3">Psychiatric evaluation + medication management</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Brightside (therapy + psychiatry)</td>
                    <td className="border border-gray-300 px-4 py-3">$349/month</td>
                    <td className="border border-gray-300 px-4 py-3">Medication management + four therapy sessions/month</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Open Path Collective</td>
                    <td className="border border-gray-300 px-4 py-3">$40-$70/session ($30 intern)</td>
                    <td className="border border-gray-300 px-4 py-3">50-min session; one-time membership fee ~$65; income-eligible</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">BetterHelp</h3>
            <p className="text-gray-700 mb-4">
              BetterHelp is the largest subscription teletherapy platform. As of {AS_OF}, its own
              site lists self-pay at roughly <strong>$70-$100 per week</strong>, billed weekly or
              monthly — so a monthly charge in the <strong>$280-$400</strong> range, with the exact
              number set by location, referral source, preferences, therapist availability, and
              promotions. A subscription typically covers one weekly live session (chat, phone, or
              video) plus messaging between sessions. BetterHelp now says many therapists accept
              major insurance, with an <strong>average copay of about $23 per session</strong> for
              eligible members. Financial-assistance discounts may apply. The core product is talk
              therapy; psychiatry, if offered, is a separate path (BetterHelp has mentioned UpLift).
            </p>
            <a
              href="https://www.betterhelp.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mb-6 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Visit BetterHelp →
            </a>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Talkspace</h3>
            <p className="text-gray-700 mb-4">
              Talkspace&apos;s official pricing page (as of {AS_OF}) lists three self-pay therapy
              tiers: <strong>messaging-only at $69/week</strong>; <strong>video + messaging at
              $99/week</strong> (up to four 30-minute live sessions a month); and{' '}
              <strong>video + messaging + workshops at $109/week</strong>. Billing monthly,
              quarterly, or biannually can change the effective rate. Talkspace also offers
              psychiatry separately. It is in-network with many plans and says most insured members
              have a $0 copay — your plan decides.
            </p>
            <a
              href="https://www.talkspace.com/pricing"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mb-6 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Visit Talkspace →
            </a>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Brightside Health</h3>
            <p className="text-gray-700 mb-4">
              Brightside is the one to look at if you may need medication as well as therapy. Its
              FAQ (as of {AS_OF}) lists <strong>psychiatry at $95/month</strong> (plus your
              pharmacy copay), <strong>therapy at $299/month</strong> for four video sessions and
              unlimited messaging, and a <strong>combined plan at $349/month</strong>. Extra
              55-minute therapy sessions are listed at $59. You can pay with a card or HSA/FSA.
            </p>
            <a
              href="https://www.brightside.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mb-6 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Visit Brightside →
            </a>

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
              who lack adequate mental-health coverage or cannot afford market rates. As of {AS_OF},
              individual sessions are listed at <strong>$40-$70</strong> (and <strong>$30</strong>
              {' '}with a supervised student intern) for a standard 50-minute session, after a
              one-time membership fee of <strong>$65</strong>. Couples and family sessions are
              listed slightly higher. Household income must be below $100,000 (US). Check whether
              you qualify before enrolling.
            </p>
            <a
              href="https://openpathcollective.org/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mb-6 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Visit Open Path →
            </a>

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
              On the insurance side, the picture is shifting. As of {AS_OF}, BetterHelp says many
              therapists accept major carriers (average copay about $23 for eligible members),
              Talkspace says most insured members have a $0 copay, and Brightside accepts insurance
              in many states. If you do have coverage, a copay can come in well below any self-pay
              price — check your plan even if you assumed therapy was out of reach.
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
              <li><strong>Where therapy sits next to labs and GLP-1:</strong> the <Link href="/guides/cash-pay-healthcare-map" className="text-blue-600 hover:underline">cash-pay healthcare map</Link></li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Cash-Pay Mental Health Care</h3>
            <p className="mb-6 text-blue-100">
              See online therapy and psychiatry options side by side, with transparent self-pay pricing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/telehealth"
                className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Browse Telehealth Options
              </Link>
              <a
                href="https://www.betterhelp.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Visit BetterHelp →
              </a>
              <a
                href="https://www.talkspace.com/pricing"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Visit Talkspace →
              </a>
            </div>
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
              <li>• <a href="https://www.betterhelp.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BetterHelp — published self-pay range $70-$100/week; insurance copay about $23 for eligible members</a></li>
              <li>• <a href="https://www.talkspace.com/pricing" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Talkspace — official pricing ($69 / $99 / $109 per week)</a></li>
              <li>• <a href="https://www.brightside.com/faq/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Brightside Health FAQ — self-pay $95 / $299 / $349 per month</a></li>
              <li>• <a href="https://openpathcollective.org/pricing-and-eligibility-for-affordable-therapy/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Open Path — $40-$70/session, $30 intern, $65 membership</a></li>
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
        <MedicalDisclaimer />
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
