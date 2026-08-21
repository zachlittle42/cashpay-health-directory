import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

const URL = 'https://vitalityscout.com/guides/zepbound-cost';

// Every price on this page was read off Lilly's own pages on 2026-08-21 and is
// reported as "what the published terms say," never as a promised savings.
const AS_OF = 'August 21, 2026';

export const metadata: Metadata = {
  title: { absolute: 'Zepbound Cost (2026): $299-$449 Self-Pay + Savings Card' },
  alternates: { canonical: URL },
  description:
    'Zepbound cost in 2026: LillyDirect self-pay runs $299/mo (2.5 mg), $399 (5 mg) and $449 (7.5-15 mg), and the savings card terms cap assistance at $25 with commercial coverage.',
};

// Real Bing/PAA phrasings for the coupon + savings-card + LillyDirect demand pocket.
// Answered only from facts stated on this page. The visible FAQ block below mirrors
// this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does Zepbound cost without insurance?',
    answer:
      `Without insurance, the published self-pay route is Lilly's own pharmacy. As of ${AS_OF}, LillyDirect lists Zepbound single-dose vials and the single-patient-use KwikPen at $299 per month for the 2.5 mg starting dose, $399 per month for 5 mg, and $449 per month for 7.5 mg, 10 mg, 12.5 mg and 15 mg. ` +
      'The $449 tier is conditional: it applies through the Zepbound Journey Program only if you refill within 45 days of receiving your previous fill. Lilly states the regular monthly prices otherwise are $299 for 2.5 mg, $399 for 5 mg, $499 for 7.5 mg, and $699 for 10 mg, 12.5 mg and 15 mg. A "month" is defined as 28 days. These are the manufacturer\'s published prices and terms, not a guaranteed amount you will pay — confirm the current price with LillyDirect before you order.',
  },
  {
    question: 'Is there a Zepbound coupon or manufacturer coupon?',
    answer:
      'There is no general-public Zepbound coupon code. What exists is the Zepbound Savings Card, a manufacturer copay-assistance program with written eligibility rules, and a separate KwikPen Self-Pay Savings Card for cash-paying patients. ' +
      'The savings-card terms require a prescription for an FDA-approved use, and they exclude anyone enrolled in a state, federal, or government-funded healthcare program. Both cards state plainly that the program is not insurance, that savings are subject to monthly and annual limits, and that Lilly may terminate or amend the program at any time. As published, both cards expire and savings end on 12/31/2026. Read the current terms before assuming a price.',
  },
  {
    question: 'How much does Zepbound cost through LillyDirect?',
    answer:
      `LillyDirect is Eli Lilly's own direct-to-patient pharmacy, and as of ${AS_OF} it is the published self-pay channel for Zepbound. Single-dose vials are described as exclusively available through LillyDirect and self-pay only; the KwikPen is available as self-pay and with select insurance accepted. ` +
      'Self-pay prices for both the vial and the KwikPen are listed as ranging from $299 to $449 per month across the dose tiers. Lilly notes the vial requires you to buy needles and syringes separately and the KwikPen requires a pen needle purchase, so those are additional costs. Prices and program terms change; verify on LillyDirect before ordering.',
  },
  {
    question: 'How does the Zepbound savings card work if I have commercial insurance?',
    answer:
      'The published terms split by whether your commercial plan covers the product. If you have commercial drug insurance that covers the Zepbound single-dose pen, the terms state you may pay as little as $25 for a 1-month, 2-month, or 3-month fill. ' +
      'That $25 figure is capped: the terms limit savings to a maximum of $100 per 1-month fill, $200 per 2-month fill, or $300 per 3-month fill, with a separate maximum annual savings of up to $1,300 per calendar year and up to 13 fills per calendar year. So the card takes up to $100 off a monthly fill — you reach $25 only if your plan already brings your share down near that. If your commercial plan does not cover the single-dose pen, the terms state you may pay as low as $499 for a 1-month fill.',
  },
  {
    question: 'Can Medicare or Medicaid patients use the Zepbound savings card?',
    answer:
      'No. The savings-card terms state that to be eligible you are not enrolled in any state, federal, or government-funded healthcare program, and Lilly lists Medicaid, Medicare, Medicare Part D, Medicare Advantage, Medigap, DoD, VA, TRICARE/CHAMPUS, and state prescription drug assistance programs as excluded. ' +
      'This exclusion is standard across manufacturer copay cards, not specific to Zepbound. Lilly does publish a separate Medicare GLP-1 Bridge program for eligible Medicare Part D patients with a Zepbound KwikPen prescription for weight management, described on the Zepbound site as coverage for no more than $50 per month, with its own terms. Government-insured patients may also pay cash, which sits outside insurance entirely. Check current eligibility with the program.',
  },
  {
    question: 'Is there a Zepbound KwikPen coupon?',
    answer:
      'The KwikPen is covered by two published programs rather than a coupon. The Zepbound Savings Card covers patients with commercial drug insurance that does not cover the KwikPen; the terms list $299 for a 1-month fill of 2.5 mg (maximum monthly savings up to $215), $399 for 5 mg (up to $115), $449 for 7.5 mg (up to $65), and $449 for 10 mg, 12.5 mg or 15 mg (up to $271). ' +
      'The separate KwikPen Self-Pay Savings Card carries the same price ladder for cash-paying patients, and it requires that you not seek reimbursement from any insurer or apply the cost toward a deductible. Both cap the KwikPen at a maximum of 11 prescription fills per calendar year. Terms and conditions apply and can change.',
  },
  {
    question: 'How much does Zepbound cost with insurance?',
    answer:
      'It depends entirely on your plan, and there is no single number. Zepbound coverage for weight management varies widely, prior authorization is common, and some employers exclude weight-management drugs from their pharmacy benefit altogether, which is why Lilly\'s own savings page asks you to pick your insurance type before it shows you anything. ' +
      'If your plan covers the single-dose pen, the savings card terms describe paying as little as $25 per fill, subject to the caps above. If your plan excludes it, you are effectively a self-pay patient and the LillyDirect ladder becomes the relevant price. Call the number on your insurance card and ask whether Zepbound is on formulary, what tier it sits on, and whether prior authorization is required.',
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

export default function ZepboundCostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Zepbound Cost: With Insurance, Without, and the Savings Card',
    description:
      'What Zepbound costs in 2026 — the LillyDirect self-pay price for every dose tier, what the Zepbound Savings Card terms actually promise and cap, who the program excludes, and the cheaper routes to compare.',
    url: URL,
    mainEntity: { '@type': 'FAQPage', '@id': `${URL}#faq` },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'Drug',
      name: 'Zepbound (tirzepatide)',
      activeIngredient: 'tirzepatide',
      manufacturer: { '@type': 'Organization', name: 'Eli Lilly and Company' },
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-08-21',
    dateModified: '2026-08-21',
    citation: [
      { '@type': 'CreativeWork', name: 'LillyDirect — Zepbound (tirzepatide) self-pay pricing by dose and device', url: 'https://www.lilly.com/lillydirect/medicines/zepbound' },
      { '@type': 'CreativeWork', name: 'Zepbound — Savings & Insurance Options', url: 'https://zepbound.lilly.com/savings' },
      { '@type': 'CreativeWork', name: 'Zepbound Single-Dose Pen and Single-Patient-Use KwikPen Savings Card Program — Terms and Conditions', url: 'https://zepbound.lilly.com/savings/terms-and-conditions' },
      { '@type': 'CreativeWork', name: 'Zepbound KwikPen Self-Pay Savings Card Program — Terms and Conditions', url: 'https://zepbound.lilly.com/savings/terms-and-conditions-kwikpen-self-pay' },
      { '@type': 'CreativeWork', name: 'Eli Lilly — Lilly lowers the price of Zepbound (tirzepatide) single-dose vials', url: 'https://investor.lilly.com/news-releases/news-release-details/lilly-lowers-price-zepboundr-tirzepatide-single-dose-vials' },
      { '@type': 'CreativeWork', name: 'Zepbound — official product site', url: 'https://zepbound.lilly.com/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${URL}#faq`, url: URL };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vitalityscout.com' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://vitalityscout.com/guides' },
      { '@type': 'ListItem', position: 3, name: 'Zepbound Cost', item: URL },
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
              <span className="text-gray-900">Zepbound Cost</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/weight-loss" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; GLP-1 &amp; Weight-Loss Clinics
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Cost Guide
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Zepbound Cost (2026): With Insurance, Without, and the Savings Card
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              Zepbound pricing changed more than once in the last year. Here is what Lilly publishes
              today — the self-pay price for every dose, and what the savings-card terms actually
              promise once you read the caps.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                As of {AS_OF}, <strong>LillyDirect</strong> lists Zepbound self-pay at{' '}
                <strong>$299/month</strong> (2.5 mg), <strong>$399</strong> (5 mg), and{' '}
                <strong>$449</strong> (7.5&ndash;15 mg) for vials and the KwikPen &mdash; the $449 tier
                requiring a refill within 45 days. The <strong>Zepbound Savings Card</strong> terms
                describe paying <strong>as little as $25</strong> per fill with commercial coverage,
                capped at $100 off a 1-month fill, and they exclude government-insured patients. These
                are published program terms, not guaranteed savings. This is information, not medical
                advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Prices verified from Lilly&apos;s own pages on {AS_OF} • 12 min read
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
                <div className="font-bold text-blue-600 mb-2">Paying cash (no coverage)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• LillyDirect vial or KwikPen</li>
                  <li>• $299 / $399 / $449 per month by dose</li>
                  <li>• $449 tier needs a 45-day refill</li>
                  <li>• &quot;Month&quot; = 28 days</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Commercial insurance that covers it</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Savings card on the single-dose pen</li>
                  <li>• Terms: as little as $25 per fill</li>
                  <li>• Capped at $100 off a 1-month fill</li>
                  <li>• $1,300 maximum per calendar year</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">Go self-pay through LillyDirect if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Your plan excludes weight-management drugs</li>
                  <li>• You have no drug coverage at all</li>
                  <li>• You can reliably refill inside 45 days</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">Work the benefit first if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Zepbound is on your plan&apos;s formulary</li>
                  <li>• You can clear a prior authorization</li>
                  <li>• You have commercial (not government) coverage</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#list-price" className="text-blue-600 hover:underline">1. Zepbound price: list price vs what people actually pay</a></li>
              <li><a href="#lilly-direct" className="text-blue-600 hover:underline">2. LillyDirect Zepbound cost: the self-pay price per dose</a></li>
              <li><a href="#savings-card" className="text-blue-600 hover:underline">3. The Zepbound savings card: what the terms actually say</a></li>
              <li><a href="#coupon" className="text-blue-600 hover:underline">4. Is there a Zepbound manufacturer coupon?</a></li>
              <li><a href="#kwikpen" className="text-blue-600 hover:underline">5. Zepbound KwikPen coupon and the self-pay card</a></li>
              <li><a href="#with-insurance" className="text-blue-600 hover:underline">6. Zepbound cost with insurance</a></li>
              <li><a href="#cheaper" className="text-blue-600 hover:underline">7. Cheaper routes worth comparing</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Zepbound is Eli Lilly&apos;s tirzepatide product approved for chronic weight management
              and for moderate-to-severe obstructive sleep apnea in adults with obesity. It is the
              same molecule as Mounjaro, but Mounjaro carries a type 2 diabetes indication and is a
              different product with different pricing — do not treat quotes for one as quotes for the
              other. What makes Zepbound&apos;s price confusing is that Lilly has cut and restructured
              it repeatedly, so most of the numbers circulating online are stale. Everything below was
              read off Lilly&apos;s own pages on {AS_OF}.
            </p>

            <h2 id="list-price" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Zepbound Price: List Price vs What People Actually Pay</h2>

            <p className="text-gray-700 mb-4">
              &quot;List price&quot; — the wholesale acquisition cost, or WAC — is the price at which
              Lilly sells to wholesalers. It is not a price a patient is quoted, and for Zepbound it
              has become close to irrelevant for anyone paying cash, because Lilly now runs its own
              lower-priced self-pay channel. Lilly publishes current list prices on its pricing
              information site, and the savings-card terms reference WAC directly: for a commercially
              insured patient whose plan does <em>not</em> cover the single-dose pen, the terms cap
              card savings at &quot;wholesale acquisition cost minus $499.&quot;
            </p>

            <p className="text-gray-700 mb-4">
              The practical read: <strong>the list price is the number the self-pay programs exist to
              route around.</strong> A cash patient going through LillyDirect is quoted $299 to $449 a
              month depending on dose; a patient whose commercial plan covers the pen is quoted as
              little as $25 a fill. The list price sits above both. Get the current WAC from
              Lilly&apos;s pricing information site rather than a third-party blog — the figure moved
              during 2026, and stale numbers are the most common error in Zepbound cost articles.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why this matters:</strong> almost every &quot;Zepbound costs $1,000+ a
                month&quot; headline describes the retail counter with no manufacturer program
                applied. That is a real price if you arrive with no coverage and no card — and it is
                the exact scenario Lilly&apos;s self-pay ladder was built to replace. Price the
                program before you price the counter.
              </p>
            </div>

            <h2 id="lilly-direct" className="text-2xl font-bold text-gray-900 mt-12 mb-6">LillyDirect Zepbound Cost: The Self-Pay Price Per Dose</h2>

            <p className="text-gray-700 mb-4">
              LillyDirect is Lilly&apos;s own direct-to-patient pharmacy, and it is where the published
              self-pay prices live. Zepbound comes in three formats there, and they are priced on two
              completely different logics — this is the part most people get wrong.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Dose</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Self-pay price per month</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Regular price if the 45-day refill is missed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">2.5 mg (starting dose)</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-green-700">$299</td>
                    <td className="border border-gray-300 px-4 py-3">$299</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">5 mg</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-green-700">$399</td>
                    <td className="border border-gray-300 px-4 py-3">$399</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">7.5 mg</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-green-700">$449</td>
                    <td className="border border-gray-300 px-4 py-3">$499</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">10 mg</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-green-700">$449</td>
                    <td className="border border-gray-300 px-4 py-3">$699</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">12.5 mg</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-green-700">$449</td>
                    <td className="border border-gray-300 px-4 py-3">$699</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">15 mg</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-green-700">$449</td>
                    <td className="border border-gray-300 px-4 py-3">$699</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-gray-500 mt-2">
                Source: LillyDirect Zepbound product page and the Zepbound savings-card terms, read{' '}
                {AS_OF}. The same ladder is published for both the single-dose vial and the
                single-patient-use KwikPen. Terms and conditions apply; prices change.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              The three formats differ in more than price:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Single-dose vial.</strong> Lilly describes it as exclusively available through LillyDirect and self-pay only. A &quot;month&quot; is defined as 28 days and 4 single-dose vials. Needles and syringes must be purchased separately.</li>
              <li><strong>Single-patient-use KwikPen.</strong> Self-pay accepted and select insurance accepted. A &quot;month&quot; is 28 days and 1 KwikPen. A pen needle purchase is required.</li>
              <li><strong>Single-dose pen.</strong> This is the insurance route, not the cash route. Lilly prices it through the savings card at as little as $25 for up to a 3-month prescription for eligible, commercially insured patients with coverage. A needle is included in each pen.</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">The 45-day refill condition is the real trap</h4>
              <p className="text-gray-700">
                For 7.5 mg, 10 mg, 12.5 mg and 15 mg, the $449 price is a <strong>Journey Program
                purchase offer</strong>, not a standing price. Lilly&apos;s terms state you receive it
                automatically on your first purchase, but to keep it you must complete your refill
                <strong> within 45 days of the delivery or receipt date of your previous fill</strong>.
                Miss that window and the regular price applies — which at 10 mg and above means $699
                instead of $449, a $250 swing for being late. A shipping delay, a prior-authorization
                fight, or a pause in therapy can all trigger it.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              One more piece of arithmetic worth doing before you budget: Lilly defines a
              &quot;month&quot; as <strong>28 days</strong>, not a calendar month. Thirteen 28-day
              cycles fit in a year. So a $449 &quot;monthly&quot; price is closer to $5,800 a year
              than $5,400, and the same is true at every tier. Budget on the cycle, not the calendar.
            </p>

            <h2 id="savings-card" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Zepbound Savings Card: What the Terms Actually Say</h2>

            <p className="text-gray-700 mb-4">
              This is the most-searched and most-misreported part of Zepbound pricing. The Zepbound
              Savings Card is a manufacturer copay-assistance program with written terms, and those
              terms are more specific than the marketing headline. Three things are true of every
              tier: <strong>the program is not insurance</strong>, savings are subject to monthly and
              annual limits, and Lilly reserves the right to terminate, rescind, revoke or amend the
              program at any time, without notice, for any reason. As published, the card expires and
              savings end on <strong>12/31/2026</strong>.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Your situation</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">What the terms state you may pay</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">The published cap</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Commercial insurance that <em>covers</em> the single-dose pen</td>
                    <td className="border border-gray-300 px-4 py-3">As little as $25 for a 1-, 2-, or 3-month fill</td>
                    <td className="border border-gray-300 px-4 py-3">Max savings $100 / $200 / $300 per fill; $1,300 max per calendar year; up to 13 fills</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Commercial insurance that does <em>not</em> cover the single-dose pen</td>
                    <td className="border border-gray-300 px-4 py-3">As low as $499 for a 1-month fill</td>
                    <td className="border border-gray-300 px-4 py-3">Max savings = WAC minus $499; up to 13 fills per calendar year</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Commercial insurance that does <em>not</em> cover the KwikPen</td>
                    <td className="border border-gray-300 px-4 py-3">$299 (2.5 mg) · $399 (5 mg) · $449 (7.5 mg) · $449 (10&ndash;15 mg)</td>
                    <td className="border border-gray-300 px-4 py-3">Max monthly savings $215 / $115 / $65 / $271 respectively; up to 11 fills per calendar year</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Enrolled in Medicare, Medicaid, or any government program</td>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-red-700">Not eligible for the savings card</td>
                    <td className="border border-gray-300 px-4 py-3">Excluded by the eligibility terms (see below)</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-gray-500 mt-2">
                Source: Zepbound Single-Dose Pen and Single-Patient-Use KwikPen Savings Card Program
                Terms and Conditions, read {AS_OF}. Reported as published terms; not a promise of what
                you will pay.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Read the cap, not the headline</h4>
              <p className="text-gray-700">
                &quot;Pay as little as $25&quot; is doing a lot of work. The same terms cap savings at{' '}
                <strong>up to $100 per 1-month fill</strong>. The card removes up to $100 — it does not
                reset your cost to $25 regardless of what your plan charges. You land at $25 only when
                your plan&apos;s own cost-share is already close to $125. If your plan puts Zepbound on
                a specialty tier with a $250 copay, the card as written takes you to roughly $150, not
                $25. Ask your pharmacy to run it and quote you the actual post-card price before you
                commit to a plan year.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Who the eligibility terms exclude</h3>

            <p className="text-gray-700 mb-4">
              The exclusion that catches the most people is government insurance. The terms require
              that you are <strong>not enrolled in any state, federal, or government-funded healthcare
              program</strong>, and Lilly names them: Medicaid, Medicare, Medicare Part D, Medicare
              Advantage, Medigap, DoD, VA, TRICARE/CHAMPUS, and state prescription drug assistance
              programs. This is not a Zepbound quirk — federal anti-kickback rules keep manufacturer
              copay cards away from government beneficiaries across the industry.
            </p>

            <p className="text-gray-700 mb-4">
              Other conditions in the published terms: you need a prescription for an FDA-approved use
              consistent with the labeling; participation requires a valid patient HIPAA
              authorization; and if your plan participates in an alternate funding program that
              requires you to apply to the savings card as a condition of coverage, the terms state
              you are prohibited from using the program.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>If you are on Medicare:</strong> Lilly publishes a separate{' '}
                <strong>Medicare GLP-1 Bridge</strong> program for eligible Medicare Part D patients
                with a Zepbound KwikPen prescription for weight management, described on the Zepbound
                site as coverage for no more than <strong>$50 per month</strong>, with its own terms.
                Paying cash is also an option, since self-pay sits outside insurance entirely. Confirm
                current eligibility directly with the program.
              </p>
            </div>

            <h2 id="coupon" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Is There a Zepbound Manufacturer Coupon?</h2>

            <p className="text-gray-700 mb-4">
              Not in the sense most searches mean. There is no public Zepbound coupon code you enter
              at checkout, and no printable discount that works for everyone. What Lilly operates are
              two named programs with eligibility rules and enrollment:
            </p>

            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>The Zepbound Savings Card</strong> — copay assistance for commercially insured patients, split into the covered and not-covered tiers above.</li>
              <li><strong>The Zepbound KwikPen Self-Pay Savings Card</strong> — a cash-patient program covered in the next section.</li>
            </ol>

            <p className="text-gray-700 mb-4">
              Third-party discount cards are a separate thing entirely. They are not manufacturer
              programs, they do not stack with manufacturer assistance, and the price they show is a
              negotiated cash price at a specific pharmacy on a specific day. If you are comparing,
              compare the all-in number for the same dose in the same week: the LillyDirect self-pay
              price, the post-savings-card price your pharmacy actually quotes, and any discount-card
              price. Then pick.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Watch for: sites selling &quot;Zepbound coupons&quot;</h4>
              <p className="text-gray-700">
                Lilly&apos;s programs are free to enroll in and are administered through Lilly&apos;s
                own sites. Anyone charging you for a Zepbound coupon, or offering Zepbound without a
                prescription, is not operating a manufacturer program. Zepbound is a prescription
                medication that requires a licensed prescriber.
              </p>
            </div>

            <h2 id="kwikpen" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Zepbound KwikPen Coupon and the Self-Pay Card</h2>

            <p className="text-gray-700 mb-4">
              The KwikPen has its own program, and this is where the naming gets genuinely confusing,
              because two different cards carry the same price ladder for two different people:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>The Savings Card KwikPen tier</strong> applies if you have commercial drug insurance that does <em>not</em> cover the KwikPen. Published prices: $299 for 2.5 mg (maximum monthly savings up to $215), $399 for 5 mg (up to $115), $449 for 7.5 mg (up to $65), and $449 for 10 mg, 12.5 mg or 15 mg (up to $271).</li>
              <li><strong>The KwikPen Self-Pay Savings Card</strong> applies to self-paying cash patients and carries the identical ladder. Its terms require that you not seek or accept reimbursement for the cost from any third-party payer — private insurance or government program — and that you not apply the cost toward a deductible or true out-of-pocket total.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Both cap the KwikPen at a maximum of <strong>11 prescription fills per calendar
              year</strong>. Put that next to the 28-day cycle: a year of continuous 28-day fills is
              about 13 fills, and the card as written covers 11 of them. Plan for the last fills of a
              calendar year to price differently, and ask the pharmacy to confirm before you assume
              December looks like June.
            </p>

            <p className="text-gray-700 mb-4">
              The self-pay card terms also describe a <strong>post-transaction reimbursement</strong>
              path: if you refilled inside the 45-day window and were otherwise eligible but Lilly
              could not verify it at the point of sale, you can submit a claim for the difference
              through the program&apos;s patient portal. As published, those claims must be submitted
              or postmarked no later than March 31, 2027. Keep your pharmacy receipts.
            </p>

            <h2 id="with-insurance" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Zepbound Cost With Insurance</h2>

            <p className="text-gray-700 mb-4">
              There is no single answer here, and any page that gives you one is guessing. Coverage
              for weight-management medication varies more than almost any other drug category.
              Lilly&apos;s own savings page reflects this: before it shows you anything, it asks you
              to select your insurance type from commercial-covered, commercial-not-covered, Medicare,
              other government, no insurance, or not sure. Those are genuinely different price worlds.
            </p>

            <p className="text-gray-700 mb-4">
              Three things drive what you pay:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Formulary status.</strong> Whether Zepbound is covered at all, and on which tier. Specialty tiers carry higher cost-share, and that is what the savings card is applied against.</li>
              <li><strong>Prior authorization.</strong> Common for weight-management drugs. Expect documentation requirements, and expect the process to take time — which interacts badly with the 45-day refill condition if you are toggling between routes.</li>
              <li><strong>Employer carve-outs.</strong> Some employers exclude weight-management drugs from the pharmacy benefit entirely, even on an otherwise generous plan. If that is your situation, you are functionally a self-pay patient and the LillyDirect ladder is your real price.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              The useful call to make: phone the number on your insurance card and ask three
              questions. Is Zepbound on formulary? What tier? Is prior authorization required? Those
              three answers tell you which column of this page applies to you.
            </p>

            <h2 id="cheaper" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cheaper Routes Worth Comparing</h2>

            <p className="text-gray-700 mb-4">
              Zepbound is one product. Tirzepatide is the molecule, and there are other ways to buy
              access to it — with real trade-offs, not just lower numbers.
            </p>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
              <li>
                <strong>Clinic and telehealth programs.</strong> Clinics bundle medication, visits and
                monitoring into one monthly price. Our{' '}
                <Link href="/guides/tirzepatide-cost" className="text-blue-600 hover:underline">tirzepatide cost guide</Link>{' '}
                tracks verified per-clinic pricing, each number quoted from the clinic&apos;s own site
                and dated. That page is canonical for program pricing; this one is canonical for what
                Lilly charges directly.
              </li>
              <li>
                <strong>The cross-molecule comparison.</strong> The cheapest FDA-approved GLP-1 may not
                be a tirzepatide product at all. See{' '}
                <Link href="/guides/cheapest-glp1-without-insurance" className="text-blue-600 hover:underline">cheapest GLP-1 without insurance</Link>{' '}
                and{' '}
                <Link href="/guides/semaglutide-vs-tirzepatide" className="text-blue-600 hover:underline">semaglutide vs tirzepatide</Link>.
                The choice is clinical, not only financial.
              </li>
              <li>
                <strong>Compounded versions — read this honestly.</strong> Compounded tirzepatide is
                not in the same position as compounded semaglutide: the FDA declared the tirzepatide
                shortage resolved on December 19, 2024, ending the shortage-based pathway that allowed
                widespread compounding of tirzepatide copies. Our{' '}
                <Link href="/guides/compounded-semaglutide" className="text-blue-600 hover:underline">compounded semaglutide guide</Link>{' '}
                explains why &quot;compounded&quot; is not a generic. There is no generic tirzepatide
                in the US.
              </li>
              <li>
                <strong>Know what you are comparing.</strong> Our{' '}
                <Link href="/guides/glp1-medications-list" className="text-blue-600 hover:underline">GLP-1 medications list</Link>{' '}
                maps every FDA-approved option to its indication — the fastest way to avoid pricing a
                diabetes-labeled product as a weight-management one. Browse{' '}
                <Link href="/weight-loss" className="text-blue-600 hover:underline">clinics by state</Link>{' '}
                or compare cash-pay services on the{' '}
                <Link href="/price-index" className="text-blue-600 hover:underline">price index</Link>.
              </li>
            </ul>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">How to price your situation in one sitting</h4>
              <ol className="list-decimal pl-6 space-y-1 text-gray-700">
                <li>Call your insurer: on formulary? what tier? prior authorization required?</li>
                <li>If covered — have the pharmacy run the savings card and quote the real post-card price.</li>
                <li>If not — price your dose on LillyDirect, including needles or pen needles.</li>
                <li>Check whether you can realistically refill inside 45 days at the $449 tiers.</li>
                <li>Price one clinic program for comparison: all-in, same dose, same week.</li>
              </ol>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">A note on Zepbound vs Mounjaro</h3>
            <p className="text-gray-700 mb-4">
              Both are tirzepatide and both are made by Lilly, but they are different products with
              different FDA-approved uses and separate pricing programs. Zepbound is approved for
              chronic weight management and for moderate-to-severe obstructive sleep apnea in adults
              with obesity; Mounjaro is approved for type 2 diabetes. A Mounjaro price is not a
              Zepbound price, and the savings programs are not interchangeable. See{' '}
              <Link href="/guides/mounjaro-vs-ozempic" className="text-blue-600 hover:underline">Mounjaro vs Ozempic</Link>{' '}
              if you are comparing diabetes-labeled products.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare GLP-1 Programs on Price</h3>
            <p className="mb-6 text-blue-100">
              Verified monthly program pricing from clinics that publish a number — quoted from their
              own sites and dated.
            </p>
            <Link
              href="/guides/tirzepatide-cost"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              See Verified Tirzepatide Prices
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
              This guide is for general educational purposes only and is not medical advice, and it is
              not a substitute for a conversation with a licensed clinician. We are not affiliated
              with Eli Lilly and Company or LillyDirect. Zepbound is a registered trademark of Eli
              Lilly and Company. All prices and program terms described here were read from Lilly&apos;s
              published pages on {AS_OF} and are reported as the manufacturer&apos;s stated terms — not
              as an offer, a quote, or a guarantee of what you will pay. Manufacturer programs carry
              eligibility requirements, monthly and annual limits, and expiration dates, and Lilly
              states it may terminate, rescind, revoke or amend them at any time without notice. The
              programs described are not insurance. Zepbound is a prescription medication approved for
              chronic weight management and for moderate-to-severe obstructive sleep apnea in adults
              with obesity; it requires a licensed prescriber and ongoing monitoring. Nothing here is
              dosing guidance. Verify current pricing, eligibility and terms directly with Lilly or
              your pharmacy before making a decision. VitalityScout may earn a commission from some
              links, at no additional cost to you, and this never affects how we describe a provider.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <a href="https://www.lilly.com/lillydirect/medicines/zepbound" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">LillyDirect — Zepbound (tirzepatide) self-pay pricing by dose and device</a></li>
              <li>• <a href="https://zepbound.lilly.com/savings" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Zepbound — Savings &amp; Insurance Options</a></li>
              <li>• <a href="https://zepbound.lilly.com/savings/terms-and-conditions" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Zepbound Single-Dose Pen and Single-Patient-Use KwikPen Savings Card Program — Terms and Conditions</a></li>
              <li>• <a href="https://zepbound.lilly.com/savings/terms-and-conditions-kwikpen-self-pay" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Zepbound KwikPen Self-Pay Savings Card Program — Terms and Conditions</a></li>
              <li>• <a href="https://investor.lilly.com/news-releases/news-release-details/lilly-lowers-price-zepboundr-tirzepatide-single-dose-vials" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Eli Lilly — Lilly lowers the price of Zepbound (tirzepatide) single-dose vials</a></li>
              <li>• <a href="https://zepbound.lilly.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Zepbound — official product site (indications and safety information)</a></li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our GLP-1 Cash-Price Cheat Sheet"
            description="What Zepbound, Wegovy and clinic programs actually cost per month, and which route is cheapest for your coverage."
            source="guide_zepbound_cost"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
