import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

const URL = 'https://vitalityscout.com/guides/mounjaro-cost';

export const metadata: Metadata = {
  // 55 chars — front-loads "Mounjaro Cost" and carries the two highest-volume
  // query heads ("coupon", "savings card") inside the SERP truncation window.
  title: { absolute: 'Mounjaro Cost (2026): Savings Card, Coupons & Cash Price' },
  alternates: { canonical: URL },
  description:
    'Mounjaro lists at $1,079.77 per 28-day supply. The Mounjaro Savings Card can cut an eligible commercially insured fill to $25, or $499 without coverage. Government insurance is excluded, and Mounjaro is FDA-approved for type 2 diabetes only.',
};

// Real long-tail / PAA phrasings drawn from the Bing query set, answered only
// from facts stated on this page. Every savings answer reports Lilly's published
// terms verbatim and ends with the eligibility hedge. The visible FAQ block
// below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does Mounjaro cost with the savings card?',
    answer:
      'Under Lilly’s published Mounjaro Savings Card terms, if you have commercial drug insurance that covers Mounjaro and a prescription for an approved use consistent with FDA-approved labeling, you may pay as little as $25 for a 1-month, 2-month, or 3-month fill of the Mounjaro single-dose pen. Savings on that tier are capped at $150 per 1-month fill, $300 per 2-month fill, or $450 per 3-month fill, and at $1,950 per calendar year. If your commercial plan does not cover Mounjaro, the published floor is $499 for a 1-month fill, capped at $647 per month and $8,411 per calendar year. Both tiers are limited to 13 fills per calendar year. Eligibility and terms are set by Lilly and can change — confirm the current terms on Lilly’s savings page before you rely on a number.',
  },
  {
    question: 'Is there a Mounjaro coupon or manufacturer coupon?',
    answer:
      'The manufacturer program is the Mounjaro Savings Card, offered by Eli Lilly. There is no separate Lilly "coupon" beyond it. The card is a copay-assistance program, not a discount card for the uninsured: the published eligibility terms require that you are enrolled in a commercial drug insurance plan and that you are not enrolled in any state, federal, or government-funded healthcare program. The terms also state that card savings cannot be combined with any other program, discount, discount card, cash discount card, coupon, incentive, or similar offer involving Mounjaro — so you cannot stack it with a pharmacy discount card. Savings apply only to the listed single-dose pen NDCs; other methods of administration are not eligible.',
  },
  {
    question: 'How much does Mounjaro cost without insurance?',
    answer:
      'If you have no drug insurance at all, you are not eligible for the Mounjaro Savings Card, because its published terms require enrollment in a commercial drug insurance plan. Lilly’s own direct channel is the usual route instead: LillyDirect lists a Mounjaro self-pay price starting at $499 per month for the single-dose prefilled pen, and lists that same starting price at every strength from 2.5 mg through 15 mg. That compares with a published list price of $1,079.77 for a 28-day supply. Self-pay pricing carries its own terms and can change — confirm the current price with LillyDirect before you order.',
  },
  {
    question: 'Can I use the Mounjaro savings card for weight loss?',
    answer:
      'Mounjaro is FDA-approved as an adjunct to diet and exercise to improve glycemic control in adults and pediatric patients 10 years of age and older with type 2 diabetes mellitus. It is not approved for weight management; Lilly’s own consumer site states plainly that "Mounjaro is not a weight loss drug." The Savings Card terms are written around that approval: eligibility requires that you have been prescribed Mounjaro "for an approved use consistent with FDA approved product labeling." Prescribing Mounjaro for weight loss is off-label. The FDA-approved tirzepatide brand for chronic weight management is Zepbound, which has its own manufacturer savings program and its own self-pay pricing. If weight management is your goal, that is the product to price and to discuss with a licensed clinician.',
  },
  {
    question: 'Who is not eligible for the Mounjaro Savings Card?',
    answer:
      'Lilly’s published terms exclude anyone enrolled in any state, federal, or government-funded healthcare program, naming Medicaid, Medicare, Medicare Part D, Medicare Advantage, Medigap, DoD, VA, TRICARE/CHAMPUS, and any state prescription drug assistance program. People with no insurance at all are also outside the program, since the terms require a commercial drug insurance plan. You must additionally be 18 or older and a resident of the United States or Puerto Rico. The terms further state that savings are not valid for Massachusetts residents if an AB-rated generic equivalent is available, or for California residents if an FDA-approved therapeutic equivalent is available. Lilly reserves the right to terminate, rescind, revoke, or amend the program.',
  },
  {
    question: 'Does insurance cover Mounjaro?',
    answer:
      'Coverage varies by plan and is decided by your insurer, not by Lilly. In general, a drug is most likely to be covered when it is prescribed for its FDA-approved indication, which for Mounjaro is type 2 diabetes. Many commercial plans cover it for that indication, frequently with a prior authorization requiring documentation of the diagnosis. Coverage for off-label use is much less predictable and is often denied outright. The savings card itself distinguishes the two situations: it has one tier for commercial plans that cover Mounjaro and a separate, higher-cost tier for commercial plans that do not. Check your plan’s formulary and prior-authorization rules directly.',
  },
  {
    question: 'What is the list price of Mounjaro?',
    answer:
      'Lilly’s published state WAC disclosure sheets list a wholesale acquisition cost of $1,079.77 for a pack of four single-dose pens — a 28-day supply — and list that identical figure for all six strengths (2.5, 5, 7.5, 10, 12.5, and 15 mg per 0.5 mL). That flat-price structure means the list price does not rise as your dose is titrated up. WAC is the price to the distribution channel before any rebates, discounts, or chargebacks, so it is not what most patients pay at the counter; it is the ceiling that copays, savings cards, and self-pay prices are all discounted from. List prices change — verify the current figure before relying on it.',
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

export default function MounjaroCostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Mounjaro Cost: List Price, Savings Card, and Cash Price',
    description:
      'What Mounjaro costs in 2026 — the published list price, exactly what the Mounjaro Savings Card terms say at each tier, who is excluded, what you pay without insurance, and why much of the "Mounjaro coupon" search demand is really Zepbound demand.',
    url: URL,
    mainEntity: { '@type': 'FAQPage', '@id': `${URL}#faq` },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'Drug',
      name: 'Mounjaro (tirzepatide)',
      activeIngredient: 'tirzepatide',
      manufacturer: { '@type': 'Organization', name: 'Eli Lilly and Company' },
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-08-21',
    dateModified: '2026-08-21',
    citation: [
      { '@type': 'CreativeWork', name: 'Mounjaro (Lilly) — Savings & Coverage: Savings Card terms, eligibility, and per-tier caps', url: 'https://mounjaro.lilly.com/savings-coverage' },
      { '@type': 'CreativeWork', name: 'Mounjaro (Lilly) — approved use and "Mounjaro is not a weight loss drug"', url: 'https://mounjaro.lilly.com/' },
      { '@type': 'CreativeWork', name: 'LillyDirect — Mounjaro self-pay pricing by strength', url: 'https://www.lilly.com/lillydirect/mounjaro' },
      { '@type': 'CreativeWork', name: 'Lilly Pricing Info — Mounjaro wholesale acquisition cost (WAC) disclosure sheet', url: 'https://pricinginfo.lilly.com/assets/pdf/Colorado_WAC_Disclosure_Sheet-Mounjaro.pdf' },
      { '@type': 'CreativeWork', name: 'DailyMed — MOUNJARO (tirzepatide) FDA prescribing information', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d2d7da5d-ad07-4228-955f-cf7e355c8cc0' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${URL}#faq`, url: URL };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vitalityscout.com' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://vitalityscout.com/guides' },
      { '@type': 'ListItem', position: 3, name: 'Mounjaro Cost', item: URL },
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
              <span className="text-gray-900">Mounjaro Cost</span>
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
              Mounjaro Cost: With Insurance, Without, and the Savings Card
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              What Mounjaro actually costs at each tier, what the savings card terms really require,
              and the honest answer for the large share of people searching &quot;Mounjaro
              coupon&quot; who are actually looking for a weight-loss drug.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                Mounjaro&apos;s published list price is <strong>$1,079.77</strong> for a 28-day supply
                (four single-dose pens), the same at every dose. Almost nobody pays that. With
                commercial insurance that <em>covers</em> Mounjaro, the Mounjaro Savings Card can bring
                a fill to as little as <strong>$25</strong>. With commercial insurance that does not
                cover it, the card&apos;s published floor is <strong>$499</strong>. Government
                insurance is excluded. Mounjaro is FDA-approved for type 2 diabetes only.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: August 2026 • 12 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Answer */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Answer</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Commercial plan that covers Mounjaro</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• As little as <strong>$25</strong> per fill (1, 2, or 3 months)</li>
                  <li>• Savings capped $150 / $300 / $450 per fill</li>
                  <li>• Annual savings cap <strong>$1,950</strong></li>
                  <li>• Up to 13 fills per calendar year</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Commercial plan with no Mounjaro coverage</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• As low as <strong>$499</strong> per 1-month fill</li>
                  <li>• Monthly savings capped at <strong>$647</strong></li>
                  <li>• Annual savings cap <strong>$8,411</strong></li>
                  <li>• Up to 13 fills per calendar year</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-600">
              Figures are Lilly&apos;s published Savings Card terms as stated today. Eligibility
              required; Lilly may terminate, rescind, revoke, or amend the program.
            </p>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">The savings card fits you if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You have commercial (employer or marketplace) drug insurance</li>
                  <li>• You have a type 2 diabetes diagnosis and an on-label prescription</li>
                  <li>• You are 18+ and in the US or Puerto Rico</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">Look elsewhere if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You are on Medicare, Medicaid, TRICARE, VA, or DoD coverage</li>
                  <li>• You have no insurance at all</li>
                  <li>• Your goal is weight loss rather than blood-sugar control</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#list-price" className="text-blue-600 hover:underline">1. Mounjaro&apos;s list price and what actually sets your cost</a></li>
              <li><a href="#savings-card" className="text-blue-600 hover:underline">2. The Mounjaro Savings Card: the published terms, tier by tier</a></li>
              <li><a href="#coupon" className="text-blue-600 hover:underline">3. &quot;Mounjaro coupon&quot; vs the manufacturer savings card</a></li>
              <li><a href="#weight-loss" className="text-blue-600 hover:underline">4. If you want this for weight loss, read this first</a></li>
              <li><a href="#insurance" className="text-blue-600 hover:underline">5. Insurance coverage: on-label vs off-label</a></li>
              <li><a href="#without-insurance" className="text-blue-600 hover:underline">6. What Mounjaro costs without insurance</a></li>
              <li><a href="#cheaper" className="text-blue-600 hover:underline">7. Cheaper routes to tirzepatide</a></li>
              <li><a href="#before" className="text-blue-600 hover:underline">8. Things to know before you fill</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Mounjaro pricing is confusing for one specific reason: the number you pay depends less on
              the drug than on which of four buckets you fall into. Commercially insured with coverage,
              commercially insured without coverage, government insured, or uninsured — those four
              paths land at wildly different prices, and only two of them can use the manufacturer
              card at all. Below is what each one costs according to Lilly&apos;s published terms, with
              nothing rounded, inferred, or wished into existence.
            </p>

            <h2 id="list-price" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Mounjaro&apos;s List Price and What Actually Sets Your Cost</h2>

            <p className="text-gray-700 mb-4">
              Lilly publishes Mounjaro&apos;s wholesale acquisition cost (WAC) in the state pricing
              disclosure sheets it is required to file. Those sheets list{' '}
              <strong>$1,079.77</strong> for a pack of four single-dose pens — a 28-day supply — and
              they list that <em>identical</em> figure for all six strengths: 2.5, 5, 7.5, 10, 12.5,
              and 15 mg per 0.5 mL.
            </p>

            <p className="text-gray-700 mb-4">
              That flat structure is worth understanding, because it is the opposite of how most
              people assume drug pricing works. Titrating from a starting dose up to a higher
              maintenance dose does not raise Mounjaro&apos;s list price. One 28-day supply costs the
              same at 15 mg as it does at 2.5 mg.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>What WAC is not:</strong> Lilly&apos;s disclosure sheets define WAC as the
                price to the distribution channel, before prompt-pay, service or administrative fees,
                stocking or distribution allowances, and before any discounts, rebates, or chargebacks.
                It is not the counter price for most patients. Treat it as the ceiling that every
                copay, savings card, and self-pay price below is discounted from.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              So the real question is never &quot;what does Mounjaro cost.&quot; It is{' '}
              <strong>which bucket are you in</strong>. Here is the whole map on one line each:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Your situation</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Published price you may pay</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Route</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Commercial plan that covers Mounjaro</td>
                    <td className="border border-gray-300 px-4 py-3">As little as <strong>$25</strong> per fill</td>
                    <td className="border border-gray-300 px-4 py-3">Mounjaro Savings Card</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Commercial plan that does not cover Mounjaro</td>
                    <td className="border border-gray-300 px-4 py-3">As low as <strong>$499</strong> per 1-month fill</td>
                    <td className="border border-gray-300 px-4 py-3">Mounjaro Savings Card</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Medicare, Medicaid, TRICARE, VA, DoD</td>
                    <td className="border border-gray-300 px-4 py-3">Plan cost-sharing only</td>
                    <td className="border border-gray-300 px-4 py-3">Card excluded by its terms</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">No insurance at all</td>
                    <td className="border border-gray-300 px-4 py-3">From <strong>$499</strong>/month</td>
                    <td className="border border-gray-300 px-4 py-3">LillyDirect self-pay</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">No discount applied</td>
                    <td className="border border-gray-300 px-4 py-3"><strong>$1,079.77</strong> per 28 days (WAC)</td>
                    <td className="border border-gray-300 px-4 py-3">List price</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="savings-card" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Mounjaro Savings Card: The Published Terms, Tier by Tier</h2>

            <p className="text-gray-700 mb-4">
              The Mounjaro Savings Card is Lilly&apos;s copay-assistance program. It has two tiers, and
              which one you land in depends entirely on whether your commercial plan covers Mounjaro.
              Both tiers apply only to the <strong>single-dose pen</strong> NDCs listed in the terms;
              the terms state that other methods of administration are not eligible for program
              savings.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Term</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Commercial plan <em>with</em> Mounjaro coverage</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Commercial plan <em>without</em> Mounjaro coverage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">What you may pay</td>
                    <td className="border border-gray-300 px-4 py-3">As little as $25 for a 1-, 2-, or 3-month fill</td>
                    <td className="border border-gray-300 px-4 py-3">As low as $499 for a 1-month fill</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Maximum savings per fill</td>
                    <td className="border border-gray-300 px-4 py-3">$150 (1-mo) / $300 (2-mo) / $450 (3-mo)</td>
                    <td className="border border-gray-300 px-4 py-3">Up to $647 per month</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Maximum savings per calendar year</td>
                    <td className="border border-gray-300 px-4 py-3">$1,950</td>
                    <td className="border border-gray-300 px-4 py-3">$8,411</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Fills allowed per calendar year</td>
                    <td className="border border-gray-300 px-4 py-3">Up to 13</td>
                    <td className="border border-gray-300 px-4 py-3">Up to 13</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">How a &quot;month&quot; is defined</td>
                    <td className="border border-gray-300 px-4 py-3" colSpan={2}>28 days and up to 4 single-dose pens; 2 months = 56 days / 8 pens; 3 months = 84 days / 12 pens</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Eligibility, as the terms state it</h3>

            <p className="text-gray-700 mb-4">
              To use the card, Lilly&apos;s terms require that you attest to all of the following:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>You have been prescribed the Mounjaro single-dose pen <strong>for an approved use consistent with FDA-approved product labeling</strong>.</li>
              <li>You are <strong>enrolled in a commercial drug insurance plan</strong>.</li>
              <li>You are <strong>not</strong> enrolled in any state, federal, or government-funded healthcare program — the terms name Medicaid, Medicare, Medicare Part D, Medicare Advantage, Medigap, DoD, VA, TRICARE/CHAMPUS, and any state prescription drug assistance program.</li>
              <li>You are a resident of the United States or Puerto Rico.</li>
              <li>You are 18 years of age or older.</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">The clause most people miss</h4>
              <p className="text-gray-700">
                The eligibility criteria must be met <em>every time</em> you use the card, not just at
                sign-up. The terms also state that if you begin receiving drug coverage under a
                government program, you are no longer eligible. And card savings cannot be combined
                with any other program, discount, discount card, cash discount card, coupon, incentive,
                or similar offer involving Mounjaro — so stacking a pharmacy discount card on top is
                not permitted.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              Two additional state-level carve-outs appear in the terms: savings are not valid for
              Massachusetts residents if an AB-rated generic equivalent is available, or for California
              residents if an FDA-approved therapeutic equivalent is available. Participation also
              requires a valid patient HIPAA authorization, and Lilly reserves the right to terminate,
              rescind, revoke, or amend eligibility criteria and terms at any time.
            </p>

            <h2 id="coupon" className="text-2xl font-bold text-gray-900 mt-12 mb-6">&quot;Mounjaro Coupon&quot; vs the Manufacturer Savings Card</h2>

            <p className="text-gray-700 mb-4">
              &quot;Mounjaro coupon,&quot; &quot;Mounjaro manufacturer coupon,&quot; and &quot;Mounjaro
              coupon card&quot; are all searches for the same thing, and the answer is the same in
              every case: <strong>the manufacturer program is the Mounjaro Savings Card</strong>. There
              is no separate Lilly coupon sitting alongside it, and no code that unlocks a lower price
              for people the card excludes.
            </p>

            <p className="text-gray-700 mb-4">
              This matters because &quot;coupon&quot; sets the wrong expectation. A grocery coupon works
              for anyone holding it. A manufacturer copay card is a different instrument: it is
              designed to reduce cost-sharing for people who <em>already have commercial insurance</em>,
              which is precisely why government-insured patients are excluded — federal anti-kickback
              rules bar manufacturer copay assistance for beneficiaries of federal healthcare programs.
              That exclusion is not an oversight in the terms; it is the reason the terms exist in that
              shape.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>The practical read:</strong> if you have commercial insurance, the savings card
                is the single highest-leverage thing you can do about the price, and it is free to
                request from Lilly&apos;s site. If you have Medicare, Medicaid, TRICARE, VA, or DoD
                coverage, or no insurance at all, the card is closed to you and you should be pricing
                a different route entirely — see below.
              </p>
            </div>

            <h2 id="weight-loss" className="text-2xl font-bold text-gray-900 mt-12 mb-6">If You Want This for Weight Loss, Read This First</h2>

            <p className="text-gray-700 mb-4">
              This is the most important section on the page, because a large share of people searching
              for a Mounjaro coupon are not managing type 2 diabetes. They want the weight-loss effect
              tirzepatide is known for. The honest answer changes what you should be pricing.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Mounjaro is FDA-approved for type 2 diabetes.</strong> The prescribing
              information describes it as a GIP and GLP-1 receptor agonist &quot;indicated as an
              adjunct to diet and exercise to improve glycemic control in adults and pediatric patients
              10 years of age and older with type 2 diabetes mellitus.&quot; Lilly&apos;s own consumer
              site puts the corollary in five words: <strong>&quot;Mounjaro is not a weight loss
              drug.&quot;</strong> Prescribing it for weight loss is off-label.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Why this determines your price, not just your paperwork</h4>
              <p className="text-gray-700">
                The savings card terms are written around the diabetes indication. Eligibility requires
                a prescription &quot;for an approved use consistent with FDA approved product
                labeling,&quot; and Mounjaro&apos;s only approved use is type 2 diabetes. Insurers
                apply the same logic from the other direction: coverage decisions and prior
                authorizations for Mounjaro are generally built around a documented type 2 diabetes
                diagnosis. Off-label weight-loss use tends to fail on both sides at once — no coverage,
                and the best savings tier out of reach.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              There is a same-molecule product built for this purpose.{' '}
              <strong>Zepbound is the FDA-approved tirzepatide brand for chronic weight
              management</strong> — same active ingredient, different indication, different label,
              its own manufacturer savings program, and its own self-pay pricing. If weight management
              is the goal, that is the product to price and the conversation to have with a licensed
              clinician. See our{' '}
              <Link href="/guides/zepbound-cost" className="text-blue-600 hover:underline">Zepbound cost guide</Link>{' '}
              for that side of the ledger.
            </p>

            <p className="text-gray-700 mb-4">
              For background on how the two tirzepatide brands and the semaglutide brands differ, our{' '}
              <Link href="/guides/semaglutide-vs-tirzepatide" className="text-blue-600 hover:underline">semaglutide vs tirzepatide comparison</Link>{' '}
              maps the molecules to their indications, and the{' '}
              <Link href="/guides/tirzepatide-dosing-guide" className="text-blue-600 hover:underline">tirzepatide dosing guide</Link>{' '}
              covers what the FDA labels specify for each. None of that is a substitute for a
              prescriber&apos;s judgment about which product, if any, fits your situation.
            </p>

            <h2 id="insurance" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Insurance Coverage: On-Label vs Off-Label</h2>

            <p className="text-gray-700 mb-4">
              Coverage is decided by your insurer, not by the manufacturer, and it varies plan to plan.
              But the general pattern is consistent enough to plan around.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Prescribed for type 2 diabetes.</strong> This is the indication the drug is approved for, and many commercial plans cover it — frequently behind a prior authorization that asks the prescriber to document the diagnosis, and sometimes behind step therapy requiring you to try another agent first.</li>
              <li><strong>Prescribed off-label for weight loss.</strong> Much less predictable. Many plans exclude weight-management drugs entirely as a benefit category, and an off-label request for a diabetes drug is a common denial. Some plans cover weight-management medications, but if so they will generally want the drug that is actually approved for it.</li>
              <li><strong>Medicare and Medicaid.</strong> Coverage rules differ by plan and by state, and these are exactly the beneficiaries the savings card excludes. If you are in this group, your plan&apos;s cost-sharing is your price; the manufacturer card is not available to lower it.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              The single most useful thing you can do before you fill is call the number on your
              insurance card and ask three questions: is Mounjaro on the formulary, what tier is it on,
              and does it require prior authorization. That call tells you which savings-card tier you
              are in, which is the number that actually decides your cost.
            </p>

            <h2 id="without-insurance" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Mounjaro Costs Without Insurance</h2>

            <p className="text-gray-700 mb-4">
              If you have no drug insurance, the savings card is not available to you — its terms
              require enrollment in a commercial drug insurance plan. Lilly&apos;s direct-to-patient
              channel is the published alternative.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>LillyDirect</strong> lists Mounjaro for self-pay at a price{' '}
              <strong>starting at $499 per month</strong> for the single-dose prefilled pen, and lists
              that same starting price at every strength from 2.5 mg through 15 mg. Against a{' '}
              $1,079.77 list price for the same 28-day supply, that is the difference between the
              sticker and the direct channel — and it is the same $499 floor the savings card offers
              commercially insured patients whose plans do not cover the drug.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Ask the pharmacy for the all-in number</h4>
              <p className="text-gray-700">
                Whichever route you use, get the total for a full 28-day supply — four pens — not a
                per-pen or per-dose figure. Savings-card tiers, self-pay prices, and plan cost-sharing
                are all quoted per fill, and comparing a per-pen number against a per-month number is
                the easiest way to misjudge which route is cheaper.
              </p>
            </div>

            <h2 id="cheaper" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cheaper Routes to Tirzepatide</h2>

            <p className="text-gray-700 mb-4">
              Brand Mounjaro through a pharmacy is one of several ways people access tirzepatide, and
              it is usually not the cheapest. The trade-offs are real in both directions, so price the
              alternatives with your eyes open:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Clinic programs that bundle the medication.</strong> Cash-pay weight-loss clinics often quote a single monthly fee covering the drug, prescriber visits, and titration. Our <Link href="/guides/tirzepatide-cost" className="text-blue-600 hover:underline">tirzepatide cost guide</Link> carries verified per-clinic monthly prices pulled from clinic websites and dated, with membership-only prices tagged separately so a membership fee is never mistaken for an all-in price.</li>
              <li><strong>Cross-drug price comparison.</strong> If you are flexible on molecule, our <Link href="/guides/cheapest-glp1-without-insurance" className="text-blue-600 hover:underline">cheapest GLP-1 without insurance guide</Link> compares the self-pay routes across the class rather than within one brand.</li>
              <li><strong>Know the full brand map first.</strong> The <Link href="/guides/glp1-medications-list" className="text-blue-600 hover:underline">complete GLP-1 medications list</Link> maps every approved GLP-1 and dual GIP/GLP-1 product to its generic name and its FDA-approved indication — the fastest way to see which brand matches your actual goal.</li>
              <li><strong>Compare local clinics.</strong> Browse cash-pay options by state in the <Link href="/weight-loss" className="text-blue-600 hover:underline">GLP-1 and weight-loss clinic directory</Link>, or see how this sits against other cash-pay services in our <Link href="/price-index" className="text-blue-600 hover:underline">price index</Link>.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              One caution worth stating plainly: a lower monthly number is not automatically the better
              deal. What the price includes — the medication itself, prescriber visits, lab work,
              titration support — varies enormously between programs, and a low membership fee that
              bills the drug separately can cost more all-in than a mid-priced bundled program.
            </p>

            <h2 id="before" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Things to Know Before You Fill</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Mounjaro is a prescription medication.</strong> It requires a licensed prescriber, and the FDA label carries a boxed warning about the risk of thyroid C-cell tumors, with contraindications including a personal or family history of medullary thyroid carcinoma or Multiple Endocrine Neoplasia syndrome type 2.</li>
              <li><strong>The savings card covers pens only.</strong> The terms list specific single-dose pen NDCs and state that other methods of administration are not eligible for program savings.</li>
              <li><strong>Eligibility is checked at every fill.</strong> Meeting the criteria once does not lock in the price; a change in your insurance can end eligibility mid-year.</li>
              <li><strong>Savings caps can bind before the year ends.</strong> With a $1,950 annual cap on the covered tier and $8,411 on the uncovered tier, it is worth knowing where you stand against the cap rather than being surprised at a later fill.</li>
              <li><strong>Do not stack discounts.</strong> The terms prohibit combining card savings with any other coupon, discount card, or cash discount card for Mounjaro.</li>
              <li><strong>Prices and terms change.</strong> List prices, self-pay prices, and savings-card terms are all revised periodically. Verify the current figures with Lilly and your pharmacy before you rely on them.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Related guides</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Same molecule, weight-management brand:</strong> <Link href="/guides/zepbound-cost" className="text-blue-600 hover:underline">Zepbound cost guide</Link></li>
              <li><strong>Clinic program pricing:</strong> <Link href="/guides/tirzepatide-cost" className="text-blue-600 hover:underline">verified monthly tirzepatide program prices</Link></li>
              <li><strong>Brand comparison:</strong> <Link href="/guides/mounjaro-vs-ozempic" className="text-blue-600 hover:underline">Mounjaro vs Ozempic</Link></li>
              <li><strong>What the labels specify:</strong> <Link href="/guides/tirzepatide-dosing-guide" className="text-blue-600 hover:underline">tirzepatide dosing guide</Link></li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Cash-Pay GLP-1 Programs</h3>
            <p className="mb-6 text-blue-100">
              Verified monthly prices from clinics that publish a number — quoted from their own sites
              and dated.
            </p>
            <Link
              href="/weight-loss"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse Weight-Loss Clinics
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
              This guide is for general educational purposes only and is not medical advice. We are not
              affiliated with Eli Lilly and Company, and Mounjaro and Zepbound are registered
              trademarks of their owner. Mounjaro is a prescription medication FDA-approved as an
              adjunct to diet and exercise to improve glycemic control in adults and pediatric patients
              10 years of age and older with type 2 diabetes mellitus; it is not approved for weight
              management. Nothing here is a recommendation to take, avoid, or change any medication,
              and no dosing guidance is given — those decisions belong to you and a licensed clinician.
              All savings figures are Lilly&apos;s published program terms as stated at the time of
              writing, are subject to eligibility criteria, caps, and limits, and may be terminated,
              rescinded, revoked, or amended by Lilly at any time. List prices and self-pay prices
              change without notice — verify current pricing and eligibility directly with Lilly, your
              insurer, and your pharmacy before making any decision. VitalityScout may earn a
              commission from some links, at no additional cost to you, and this never affects how we
              describe a provider or a price.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Mounjaro (Lilly) — <a href="https://mounjaro.lilly.com/savings-coverage" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">mounjaro.lilly.com/savings-coverage</a> (Savings Card terms and conditions, both tiers, eligibility criteria, per-fill and annual caps, fill limits, exclusions)</li>
              <li>• Mounjaro (Lilly) — <a href="https://mounjaro.lilly.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">mounjaro.lilly.com</a> (approved use; &quot;Mounjaro is not a weight loss drug&quot;)</li>
              <li>• LillyDirect — <a href="https://www.lilly.com/lillydirect/mounjaro" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">lilly.com/lillydirect/mounjaro</a> (self-pay price starting at $499/month, single-dose prefilled pen, all strengths)</li>
              <li>• Lilly Pricing Info — <a href="https://pricinginfo.lilly.com/assets/pdf/Colorado_WAC_Disclosure_Sheet-Mounjaro.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Mounjaro WAC disclosure sheet (PDF)</a> ($1,079.77 per 4-pen 28-day supply, identical across all six strengths)</li>
              <li>• DailyMed (NIH) — <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d2d7da5d-ad07-4228-955f-cf7e355c8cc0" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">MOUNJARO (tirzepatide) prescribing information</a> (indications and usage, boxed warning, contraindications)</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our GLP-1 Price Cheat Sheet"
            description="What Mounjaro, Zepbound, and compounded tirzepatide actually cost by route — savings card, self-pay, and clinic programs."
            source="guide_mounjaro_cost"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
