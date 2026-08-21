import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

const URL = 'https://vitalityscout.com/guides/wegovy-cost';

// Every price on this page is transcribed from the Novo Nordisk "Wegovy Price
// Guide" PDF (doc code US26NC00049, April 2026) and the NovoCare product pages,
// verified 2026-08-21. Nothing here is estimated or averaged — if Novo does not
// publish it, it is not on this page.
const VERIFIED_AS_OF = 'August 21, 2026';

export const metadata: Metadata = {
  // 56 chars — front-loads "Wegovy Cost" and the published self-pay band.
  title: { absolute: 'Wegovy Cost (2026): $149-$399/mo Self-Pay + Coupon' },
  alternates: { canonical: URL },
  description:
    'Wegovy cost in 2026: list price is $1,349.02/package, but NovoCare Pharmacy self-pay runs $149-$399/mo depending on dose and form. The Wegovy pill starts at $149/mo; the savings offer caps at $100/mo.',
};

// Real long-tail / PAA questions phrased the way people search them, answered
// only from facts stated on this page. Prices always carry the as-of date and
// the verify-with-the-program hedge. The visible FAQ block below mirrors this
// schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'Is there a Wegovy coupon or manufacturer coupon?',
    answer:
      'Novo Nordisk publishes the Wegovy Savings Offer, which is the manufacturer program people usually mean by "Wegovy coupon." It has two separate halves. If you have commercial insurance that covers Wegovy, the published copay term is "pay as little as $25, subject to a maximum savings of $100/month" — that $100 ceiling is the part most coupon pages omit, and it means a large copay is reduced by up to $100, not down to $25. If you are uninsured or paying cash, the offer instead routes you to NovoCare Pharmacy self-pay pricing, which ran $149 to $399 per month by dose and form as of ' +
      VERIFIED_AS_OF +
      '. Government beneficiaries are excluded from the copay half. Terms and prices change; confirm current terms at NovoCare before you fill.',
  },
  {
    question: 'How much does the Wegovy pill cost?',
    answer:
      'Novo Nordisk publishes NovoCare Pharmacy self-pay prices for Wegovy tablets by strength: $149/mo for 1.5 mg, $149/mo for 4 mg as a limited-time offer running only until August 31, 2026 (then $199/mo), $299/mo for 9 mg, and $299/mo for 25 mg. One month is defined as one bottle of 30 tablets. The widely repeated "Wegovy pill starts at $149" is true but describes the two lowest strengths — the published price at the highest strengths is $299/mo. Verified ' +
      VERIFIED_AS_OF +
      '. Which strength you are prescribed is a clinical decision, not a shopping decision; confirm current pricing with NovoCare.',
  },
  {
    question: 'Is there a Wegovy pill coupon or Wegovy tablet coupon?',
    answer:
      'There is no separate tablet-only coupon. Wegovy tablets and Wegovy pens run through the same Wegovy Savings Offer. On the commercial-insurance side, Novo publishes the same term for all doses of both forms: pay as little as $25, subject to a maximum savings of $100 per month. On the self-pay side, the tablets have their own published price ladder ($149 to $299/mo) separate from the pen ladder ($199 to $399/mo). So the answer to "is there a Wegovy tablet coupon" is yes, but it is the same program as the injection coupon, applied to a different price ladder. Verified ' +
      VERIFIED_AS_OF +
      '.',
  },
  {
    question: 'How much does Wegovy cost without insurance?',
    answer:
      'Without insurance, the published list price is $1,349.02 per package for the Wegovy pill, the Wegovy pen, and the Wegovy HD pen. Almost nobody pays that. Novo sells directly to cash payers through NovoCare Pharmacy at published self-pay prices: tablets $149/mo (1.5 mg), $149/mo (4 mg, only until August 31, 2026, then $199/mo), and $299/mo (9 mg and 25 mg); pens $199/mo for the first two monthly fills of 0.25 mg or 0.5 mg for new patients through December 31, 2026, then $349/mo, and $399/mo for the Wegovy HD 7.2 mg pen. Verified ' +
      VERIFIED_AS_OF +
      '. These are the manufacturer\'s published numbers and can change without notice.',
  },
  {
    question: 'What is NovoCare Wegovy?',
    answer:
      'NovoCare is Novo Nordisk\'s own patient-support and direct pharmacy channel. "NovoCare Wegovy" refers to two things people search interchangeably: the NovoCare savings and coverage pages that publish the Wegovy Savings Offer terms, and NovoCare Pharmacy, the manufacturer-run pharmacy that ships Wegovy to cash-paying patients at the published self-pay prices. It is a direct-from-manufacturer channel, not a third-party coupon site or a discount card marketplace. You still need a valid prescription from a licensed prescriber. Novo also states you must be a U.S. resident to sign up for Wegovy savings.',
  },
  {
    question: 'Does insurance cover Wegovy, and what will I pay?',
    answer:
      'It varies more than for almost any other drug class, and there is no single answer. Some commercial plans cover Wegovy for chronic weight management, some cover it only under the cardiovascular risk-reduction indication, some exclude weight-management drugs entirely, and many require prior authorization or documented step therapy first. Because Wegovy injection carries an FDA-approved indication to reduce major adverse cardiovascular events in adults with established cardiovascular disease and obesity or overweight, some plans that exclude weight-loss drugs will still cover it for that use. If your plan covers it, the manufacturer copay term is pay as little as $25 with a maximum savings of $100 per month. Check your specific plan\'s formulary and prior-authorization rules — that document, not a coupon page, determines your cost.',
  },
  {
    question: 'Can Medicare or Medicaid patients use the Wegovy savings offer?',
    answer:
      'Not the copay half. Novo\'s published footnote on the copay card is explicit: "Government beneficiaries excluded." Novo separately clarifies that the Federal Employees Health Benefits (FEHB) Program, health-exchange plans, and state employee plans are not treated as government healthcare programs for purposes of this offer. Government-insured patients can, however, pay the NovoCare self-pay price if they process the prescription outside their insurance. Separately, Novo launched the Medicare GLP-1 Bridge on July 1, 2026, offering eligible Medicare beneficiaries a $50 monthly copay for Wegovy injection and the Wegovy pill, currently set to run through December 31, 2027. Eligibility rules apply; confirm with NovoCare and your plan.',
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

export default function WegovyCostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Wegovy Cost: List Price, NovoCare Self-Pay Prices, and the Savings Offer',
    description:
      'What Wegovy costs in 2026 — the published list price, NovoCare Pharmacy self-pay prices for the pen and the tablets by dose, the Wegovy Savings Offer terms and its $100/month cap, and how coverage changes the number.',
    url: URL,
    mainEntity: { '@type': 'FAQPage', '@id': `${URL}#faq` },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'Drug',
      name: 'Wegovy (semaglutide)',
      activeIngredient: 'semaglutide',
      manufacturer: { '@type': 'Organization', name: 'Novo Nordisk' },
      // Two dosage forms across many strengths (pen 0.25-7.2 mg, tablet 1.5-25 mg),
      // so no single availableStrength value would be accurate here.
      dosageForm: ['Injection, solution', 'Tablet'],
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-08-21',
    dateModified: '2026-08-21',
    citation: [
      {
        '@type': 'CreativeWork',
        name: 'Novo Nordisk — Wegovy Price Guide (self-pay and commercial copay price tables, doc US26NC00049, April 2026)',
        url: 'https://www.novocare.com/content/dam/novonordisk/novocare/redesign/pdf/Wegovy_Price_Guide.pdf',
      },
      {
        '@type': 'CreativeWork',
        name: 'NovoCare — Wegovy cost, coverage, and savings resources (list price $1,349.02/package)',
        url: 'https://www.novocare.com/patient/medicines/wegovy.html',
      },
      {
        '@type': 'CreativeWork',
        name: 'NovoCare — Wegovy Savings Offer program terms and eligibility exclusions',
        url: 'https://www.novocare.com/patient/medicines/wegovy/savings-offer.html',
      },
      {
        '@type': 'CreativeWork',
        name: 'NovoCare Pharmacy — Wegovy direct-from-manufacturer self-pay ordering',
        url: 'https://www.novocare.com/pharmacy/wegovy.html',
      },
      {
        '@type': 'CreativeWork',
        name: 'Wegovy.com — cost and coverage information',
        url: 'https://www.wegovy.com/obesity/what-to-pay-for-wegovy.html',
      },
      {
        '@type': 'CreativeWork',
        name: 'DailyMed — WEGOVY (semaglutide) injection and tablet prescribing information (label revised June 18, 2026)',
        url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee06186f-2aa3-4990-a760-757579d8f77b',
      },
      {
        '@type': 'CreativeWork',
        name: 'Wegovy.com — Medicare Part D information and the Medicare GLP-1 Bridge',
        url: 'https://www.wegovy.com/medicare.html',
      },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${URL}#faq`, url: URL };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vitalityscout.com' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://vitalityscout.com/guides' },
      { '@type': 'ListItem', position: 3, name: 'Wegovy Cost', item: URL },
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
              <span className="text-gray-900">Wegovy Cost</span>
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
              Wegovy Cost: With Insurance, Without, and the Savings Offer
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              Every published Wegovy price in one place — the list price, the NovoCare self-pay
              ladder for both the pen and the new tablets, and what the manufacturer coupon
              actually pays once you read the cap.
            </p>

            {/* Direct-answer lead: self-contained ~80-word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                Wegovy&apos;s published list price is <strong>$1,349.02 per package</strong> for the
                pen, the HD pen, and the tablets. Almost nobody pays it. Through{' '}
                <strong>NovoCare Pharmacy</strong>, Novo Nordisk&apos;s published self-pay prices run{' '}
                <strong>$149&ndash;$299/mo for the Wegovy pill</strong> and{' '}
                <strong>$199&ndash;$399/mo for the pen</strong>, by dose. With commercial coverage,
                the savings offer is &quot;as little as $25&quot; but{' '}
                <strong>capped at $100/month</strong>. Verified {VERIFIED_AS_OF}. This is
                information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: August 2026 • 12 min read • All prices verified {VERIFIED_AS_OF}
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
                <div className="font-bold text-blue-600 mb-2">Paying cash (NovoCare Pharmacy)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Pill: $149/mo (1.5 mg) up to $299/mo (25 mg)</li>
                  <li>• Pen: $199/mo intro, then $349/mo</li>
                  <li>• HD pen (7.2 mg): $399/mo</li>
                  <li>• Direct from the manufacturer, prescription required</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Using commercial insurance</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• &quot;Pay as little as $25&quot; per month</li>
                  <li>• <strong>Capped at $100/mo of savings</strong></li>
                  <li>• Prior authorization is common</li>
                  <li>• Government beneficiaries excluded</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Time-sensitive flag */}
          <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Dated offer: the 4 mg tablet price changes August 31, 2026
            </h3>
            <p className="text-sm text-gray-700">
              Novo&apos;s published price guide states the <strong>4 mg Wegovy tablet</strong> is{' '}
              <strong>$149/mo only until August 31, 2026</strong>, after which the published price
              is <strong>$199/mo</strong>. The new-patient <strong>$199/mo pen</strong> offer for
              0.25 mg and 0.5 mg is published as good for two monthly fills{' '}
              <strong>through December 31, 2026</strong>. Both are the manufacturer&apos;s own dated
              terms, not our projection. Confirm current pricing at NovoCare before you fill.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#without-insurance" className="text-blue-600 hover:underline">1. Wegovy cost without insurance: the self-pay prices</a></li>
              <li><a href="#pill" className="text-blue-600 hover:underline">2. Wegovy pill cost: what the tablets run</a></li>
              <li><a href="#coupon" className="text-blue-600 hover:underline">3. The Wegovy manufacturer coupon and its $100 cap</a></li>
              <li><a href="#pill-coupon" className="text-blue-600 hover:underline">4. Wegovy pill coupon vs Wegovy tablet coupon</a></li>
              <li><a href="#novocare" className="text-blue-600 hover:underline">5. NovoCare Wegovy: what the channel actually is</a></li>
              <li><a href="#with-insurance" className="text-blue-600 hover:underline">6. Wegovy cost with insurance</a></li>
              <li><a href="#medicare" className="text-blue-600 hover:underline">7. Medicare, Medicaid, and government insurance</a></li>
              <li><a href="#cheaper" className="text-blue-600 hover:underline">8. Cheaper routes to semaglutide</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Wegovy is one of the few drugs where the manufacturer publishes its own cash prices, so
              you do not have to guess. The problem is that most pages quoting &quot;Wegovy
              cost&quot; are running on numbers from a prior offer cycle, and almost none of them
              cover the tablets. Below is the full published ladder for both forms, transcribed from
              Novo Nordisk&apos;s own price guide, with the dates the offers expire.
            </p>

            <h2 id="without-insurance" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Wegovy Cost Without Insurance: The NovoCare Self-Pay Prices</h2>

            <p className="text-gray-700 mb-4">
              The number that scares people is the list price. Novo publishes it as{' '}
              <strong>$1,349.02 per package</strong> — and it is the same $1,349.02 whether you are
              looking at the Wegovy pen, the Wegovy HD pen, or the Wegovy tablets. That is the
              pre-rebate sticker, not what a cash payer is asked to pay.
            </p>

            <p className="text-gray-700 mb-4">
              What a cash payer is actually asked to pay is published separately, as the{' '}
              <strong>NovoCare Pharmacy self-pay price</strong>. Novo runs its own pharmacy that
              ships direct, and it prints the price by dose. Here is the pen ladder as published:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Wegovy pen (injection)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Limited-time offer</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Standard self-pay price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">0.25 mg/0.5 mL</td>
                    <td className="border border-gray-300 px-4 py-3">$199/mo — first 2 months, new patients</td>
                    <td className="border border-gray-300 px-4 py-3">$349/mo</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">0.5 mg/0.5 mL</td>
                    <td className="border border-gray-300 px-4 py-3">$199/mo — first 2 months, new patients</td>
                    <td className="border border-gray-300 px-4 py-3">$349/mo</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">1 mg/0.5 mL</td>
                    <td className="border border-gray-300 px-4 py-3">—</td>
                    <td className="border border-gray-300 px-4 py-3">$349/mo</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">1.7 mg/0.75 mL</td>
                    <td className="border border-gray-300 px-4 py-3">—</td>
                    <td className="border border-gray-300 px-4 py-3">$349/mo</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">2.4 mg/0.75 mL</td>
                    <td className="border border-gray-300 px-4 py-3">—</td>
                    <td className="border border-gray-300 px-4 py-3">$349/mo</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Wegovy HD pen, 7.2 mg/0.75 mL</td>
                    <td className="border border-gray-300 px-4 py-3">—</td>
                    <td className="border border-gray-300 px-4 py-3">$399/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              Two details in Novo&apos;s footnotes matter more than the headline. First,{' '}
              <strong>&quot;one month&quot; is defined as one box of four pens</strong> — so the
              monthly price is a four-week supply, not a calendar month of flexibility. Second, the{' '}
              <strong>$199 intro price applies to two monthly fills only</strong>, for patients new
              to the Wegovy Savings Offer and NovoCare Pharmacy, through December 31, 2026. After
              that the published price is $349/mo. Budget against $349, not $199.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why this matters:</strong> the honest self-pay number for someone staying on
                Wegovy injection long-term is <strong>$349/mo</strong> at standard doses and{' '}
                <strong>$399/mo</strong> at the HD 7.2 mg dose. The $199 you see in headlines is a
                two-fill on-ramp. Any page quoting $199 as &quot;the price&quot; is quoting the
                first two months.
              </p>
            </div>

            <h2 id="pill" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Wegovy Pill Cost: What the Tablets Run</h2>

            <p className="text-gray-700 mb-4">
              This is the part almost no competing cost page has caught up to. Wegovy is now
              available as a <strong>once-daily tablet</strong> in addition to the weekly injection,
              and Novo publishes a completely separate self-pay price ladder for it. Per the FDA
              label, Wegovy tablets are supplied in <strong>1.5 mg, 4 mg, 9 mg, and 25 mg</strong>{' '}
              strengths.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Wegovy pill (tablet)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Limited-time offer</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Standard self-pay price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">1.5 mg</td>
                    <td className="border border-gray-300 px-4 py-3">—</td>
                    <td className="border border-gray-300 px-4 py-3">$149/mo</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">4 mg</td>
                    <td className="border border-gray-300 px-4 py-3">$149/mo — <strong>only until Aug 31, 2026</strong></td>
                    <td className="border border-gray-300 px-4 py-3">$199/mo</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">9 mg</td>
                    <td className="border border-gray-300 px-4 py-3">—</td>
                    <td className="border border-gray-300 px-4 py-3">$299/mo</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">25 mg</td>
                    <td className="border border-gray-300 px-4 py-3">—</td>
                    <td className="border border-gray-300 px-4 py-3">$299/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              Novo defines <strong>one month of tablets as one bottle of 30</strong>. Note what the
              ladder does: the price <em>rises</em> with strength, from $149 to $299. So &quot;the
              Wegovy pill starts at $149&quot; is accurate and also incomplete — $149 is the entry
              strength, and the published price at the top of the ladder is roughly double that.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Dose strengths appear here for pricing only</h4>
              <p className="text-gray-700">
                We list strengths because Novo prices by strength — you cannot answer &quot;what
                does the Wegovy pill cost&quot; without them. Nothing on this page is dosing
                guidance. Which strength is appropriate, and how anyone moves between strengths, is
                a decision for a licensed prescriber working from the FDA label and your medical
                history.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              One compliance point worth stating plainly, because search results blur it constantly:{' '}
              <strong>Wegovy tablets are not Rybelsus</strong>. Both are oral semaglutide, but they
              are different products with different approved uses — Rybelsus is indicated for type 2
              diabetes, while Wegovy tablets are indicated for chronic weight management and
              cardiovascular risk reduction. Wegovy is also not Ozempic, which is the type 2 diabetes
              injection. Same molecule, different products, different labels, different prices. Our{' '}
              <Link href="/guides/glp1-medications-list" className="text-blue-600 hover:underline">GLP-1 medications list</Link>{' '}
              maps every brand to its approved indication, and the{' '}
              <Link href="/guides/glp1-pill-guide" className="text-blue-600 hover:underline">GLP-1 pill guide</Link>{' '}
              compares the oral options side by side.
            </p>

            <h2 id="coupon" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Wegovy Manufacturer Coupon: Read the Cap</h2>

            <p className="text-gray-700 mb-4">
              Search &quot;Wegovy coupon&quot; and you will get thousands of pages promising $25.
              Here is the actual published term, in Novo&apos;s own words:{' '}
              <strong>&quot;Pay as little as $25, subject to a maximum savings of $100/month.&quot;</strong>{' '}
              That applies to all doses of both the pen and the pill, for people with commercial
              insurance that covers Wegovy.
            </p>

            <p className="text-gray-700 mb-4">
              The two halves of that sentence pull in opposite directions, and the second half is the
              one that governs. <strong>The card reduces your copay by up to $100 per month.</strong>{' '}
              If your plan leaves you a $125 copay, the card can bring you to $25. If your plan
              leaves you a $400 copay, the card brings you to $300 — not $25. &quot;As little
              as&quot; is a floor you reach only if your copay was already close to it.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Watch for: the &quot;$25 Wegovy&quot; headline</h4>
              <p className="text-gray-700">
                A page that says &quot;get Wegovy for $25&quot; without stating the $100/month
                maximum is quoting half a sentence. Before you count on a number, look up your
                plan&apos;s Wegovy copay first, then subtract up to $100. That is your real cost, and
                it is the only calculation that works.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              The savings offer has a second half that gets much less coverage. If you are{' '}
              <strong>uninsured or paying cash</strong>, the same program routes you to NovoCare
              Pharmacy self-pay pricing instead of a copay reduction — the ladders in the two tables
              above. Novo states savings are available to people using commercial insurance or those
              who are uninsured or self-paying with a valid prescription, and that{' '}
              <strong>you must be a U.S. resident</strong> to sign up.
            </p>

            <p className="text-gray-700 mb-4">
              Everything here is a description of published program terms as of {VERIFIED_AS_OF}. We
              are not affiliated with Novo Nordisk, we cannot enroll you, and we are not promising
              you will qualify or save. Novo states it reserves the right to modify or cancel the
              program at any time.
            </p>

            <h2 id="pill-coupon" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Wegovy Pill Coupon vs Wegovy Tablet Coupon</h2>

            <p className="text-gray-700 mb-4">
              These are the same thing, and there is no tablet-specific coupon separate from the
              injection coupon. Both forms run through the one Wegovy Savings Offer. What differs is
              which side of the program you land on:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Your situation</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Wegovy pill</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Wegovy pen</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Commercial insurance that covers Wegovy</td>
                    <td className="border border-gray-300 px-4 py-3">As little as $25, max $100/mo savings</td>
                    <td className="border border-gray-300 px-4 py-3">As little as $25, max $100/mo savings</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Uninsured or paying cash</td>
                    <td className="border border-gray-300 px-4 py-3">$149&ndash;$299/mo by strength</td>
                    <td className="border border-gray-300 px-4 py-3">$199 intro, then $349&ndash;$399/mo</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Government insurance (Medicare, Medicaid)</td>
                    <td className="border border-gray-300 px-4 py-3" colSpan={2}>Excluded from the copay card. May pay the self-pay price outside insurance. See the Medicare GLP-1 Bridge below.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              The practical read: <strong>on the copay side the two forms cost the same</strong>{' '}
              (same $25 floor, same $100 cap), and{' '}
              <strong>on the cash side the pill is the cheaper published product</strong> at every
              rung of its ladder. Whether the pill is the right form for you is a clinical question,
              not a pricing one.
            </p>

            <h2 id="novocare" className="text-2xl font-bold text-gray-900 mt-12 mb-6">NovoCare Wegovy: What the Channel Actually Is</h2>

            <p className="text-gray-700 mb-4">
              &quot;NovoCare Wegovy&quot; is a high-volume search, and it usually means one of two
              things:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>NovoCare, the support program.</strong> Novo Nordisk&apos;s patient-support arm, which publishes the Wegovy Savings Offer terms, the coverage explainers, and the price guide the tables above come from.</li>
              <li><strong>NovoCare Pharmacy, the direct pharmacy.</strong> A manufacturer-operated pharmacy that fills and ships Wegovy to cash-paying patients at the published self-pay prices. Novo states its self-pay pricing is available for home delivery or, with a savings offer, local pharmacy pickup.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              What it is <em>not</em> is a third-party discount-card marketplace or a telehealth
              clinic. You still need a valid prescription from a licensed prescriber, and NovoCare
              does not prescribe for you. If you do not already have a prescriber, that is the step
              that comes first — our{' '}
              <Link href="/guides/best-glp1-weight-loss-programs" className="text-blue-600 hover:underline">GLP-1 program comparison</Link>{' '}
              and the{' '}
              <Link href="/weight-loss" className="text-blue-600 hover:underline">weight-loss clinic directory</Link>{' '}
              cover the prescribing side.
            </p>

            <h2 id="with-insurance" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Wegovy Cost With Insurance</h2>

            <p className="text-gray-700 mb-4">
              There is no honest single number here, and any page that gives you one is guessing.
              Commercial coverage for Wegovy varies more than for almost any other drug class. What
              we can describe accurately is the shape of the variation:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Some plans exclude weight-management drugs entirely.</strong> This is a plan-design choice, not a clinical one, and it is common enough that it should be the first thing you check on your formulary.</li>
              <li><strong>Prior authorization is routine.</strong> Plans that do cover Wegovy commonly require documentation before approving it, and some require a step-therapy trial of another agent first.</li>
              <li><strong>The indication you are prescribed under can change the answer.</strong> Wegovy injection carries an FDA-approved indication to reduce the risk of major adverse cardiovascular events in adults with established cardiovascular disease and either obesity or overweight — alongside its chronic weight-management indication. Some plans that exclude weight-loss drugs will still cover it under the cardiovascular indication. This is a conversation for your prescriber, who determines which indication applies to you.</li>
              <li><strong>The copay card sits on top.</strong> If the plan covers it, the savings offer reduces what is left by up to $100/month.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              For completeness on the label: per the prescribing information, Wegovy injection is
              indicated for cardiovascular risk reduction, for weight reduction in adults and in
              pediatric patients aged 12 and older with obesity, for adults with overweight plus at
              least one weight-related condition, and — under accelerated approval — for
              noncirrhotic MASH with moderate to advanced liver fibrosis in adults.{' '}
              <strong>Wegovy tablets carry a narrower set</strong>: cardiovascular risk reduction and
              weight reduction in adults, without the pediatric or MASH indications. If coverage
              hinges on indication, that difference between the two forms can matter.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">The one call that settles it</h4>
              <p className="text-gray-700">
                Call the member-services number on your insurance card and ask three questions: Is
                Wegovy on my formulary, what tier, and does it require prior authorization? Then ask
                the same for Wegovy tablets specifically, since a plan can treat the two forms
                differently. Those answers beat every estimate on the internet, including ours.
              </p>
            </div>

            <h2 id="medicare" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Medicare, Medicaid, and Government Insurance</h2>

            <p className="text-gray-700 mb-4">
              The manufacturer copay card is not available to you. Novo&apos;s footnote is one
              sentence: <strong>&quot;Government beneficiaries excluded.&quot;</strong> That covers
              Medicare and Medicaid. This is not a Novo quirk — federal anti-kickback rules generally
              bar manufacturer copay assistance for patients in federal healthcare programs, which is
              why nearly every drug coupon carries the same exclusion.
            </p>

            <p className="text-gray-700 mb-4">
              Two published carve-outs are worth knowing:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>You can still pay the self-pay price.</strong> Novo states that government-insured patients may use the program if they self-pay and process the prescription outside of their insurance. You give up any plan benefit, but you get the NovoCare cash ladder.</li>
              <li><strong>FEHB, exchange plans, and state employee plans are not treated as government programs here.</strong> Novo states explicitly that the Federal Employees Health Benefits Program, health-exchange (ACA) plans, and state employee plans are not federal or state government healthcare programs for purposes of this savings offer — so those members are not swept into the exclusion.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Separately, Novo launched the <strong>Medicare GLP-1 Bridge</strong> on{' '}
              <strong>July 1, 2026</strong>, offering eligible Medicare beneficiaries a{' '}
              <strong>$50 monthly copay</strong> for Wegovy — covering both the injection and the
              pill — currently set to run through <strong>December 31, 2027</strong>. Eligibility
              conditions apply and the program is administered separately from your Part D plan.
              Confirm your eligibility with NovoCare and your plan rather than assuming it.
            </p>

            <h2 id="cheaper" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cheaper Routes to Semaglutide</h2>

            <p className="text-gray-700 mb-4">
              Brand Wegovy at $149&ndash;$399/mo is one option among several, and it is not always
              the cheapest. The trade-offs are real in both directions — brand product has an FDA
              label behind it, while cheaper routes vary in what they include and how they are
              regulated. These guides cover the alternatives honestly:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Clinic program pricing:</strong> our <Link href="/guides/semaglutide-cost" className="text-blue-600 hover:underline">semaglutide cost guide</Link> tracks verified monthly prices at clinics that publish them, tagged for whether the medication is included</li>
              <li><strong>The cheapest overall path:</strong> <Link href="/guides/cheapest-glp1-without-insurance" className="text-blue-600 hover:underline">cheapest GLP-1 without insurance</Link> compares across molecules and brands, not just Wegovy</li>
              <li><strong>Semaglutide specifically:</strong> <Link href="/guides/cheapest-way-to-get-semaglutide" className="text-blue-600 hover:underline">the cheapest way to get semaglutide</Link> walks the routes in price order</li>
              <li><strong>Compounded versions:</strong> <Link href="/guides/compounded-semaglutide" className="text-blue-600 hover:underline">compounded semaglutide</Link> explains what compounding is, what it costs, and what the FDA has said about it</li>
              <li><strong>Every approved option:</strong> the <Link href="/guides/glp1-medications-list" className="text-blue-600 hover:underline">complete GLP-1 medications list</Link> maps brand to molecule to approved indication</li>
              <li><strong>Oral options compared:</strong> the <Link href="/guides/glp1-pill-guide" className="text-blue-600 hover:underline">GLP-1 pill guide</Link> covers every FDA-approved oral GLP-1 side by side</li>
              <li><strong>Cross-service pricing:</strong> the <Link href="/price-index" className="text-blue-600 hover:underline">cash-pay price index</Link> tracks published prices across categories</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Things to Know Before You Fill</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Offers here are dated and they expire.</strong> The 4 mg tablet price changes August 31, 2026; the $199 pen on-ramp ends after two fills or December 31, 2026. Re-check before you budget.</li>
              <li><strong>&quot;One month&quot; is a defined quantity.</strong> One box of four pens, or one bottle of 30 tablets. Compare like for like.</li>
              <li><strong>Price rises with tablet strength.</strong> The pill ladder runs $149 to $299/mo, so an entry price is not a maintenance price.</li>
              <li><strong>The copay card is capped at $100/month.</strong> It reduces a copay; it does not set one.</li>
              <li><strong>A prescription is required either way.</strong> NovoCare Pharmacy fills prescriptions; it does not write them.</li>
              <li><strong>Wegovy, Ozempic, and Rybelsus are different products.</strong> Same molecule, different approved uses and prices. Do not price one from another.</li>
              <li><strong>Prices change without notice.</strong> Every figure here was verified {VERIFIED_AS_OF} against Novo&apos;s published materials, and Novo states it can modify or cancel the program at any time.</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare GLP-1 Programs and Prices</h3>
            <p className="mb-6 text-blue-100">
              Brand, compounded, and clinic-program pricing side by side — with the source for every
              number.
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
              This guide is for general informational purposes only and is not medical advice, and it
              contains no dosing guidance. VitalityScout is not affiliated with, endorsed by, or
              sponsored by Novo Nordisk, NovoCare, or Wegovy. All prices and program terms described
              here are transcribed from Novo Nordisk&apos;s own published materials as of{' '}
              {VERIFIED_AS_OF} and are subject to change without notice — Novo states it reserves the
              right to modify or cancel these programs at any time, and eligibility restrictions
              apply. We describe published program terms; we do not promise savings, eligibility, or
              any outcome. Wegovy (semaglutide) is a prescription medication that requires a licensed
              prescriber and ongoing clinical monitoring. Wegovy injection is FDA-approved for
              chronic weight management and to reduce the risk of major adverse cardiovascular events
              in adults with established cardiovascular disease and obesity or overweight, and, under
              accelerated approval, for noncirrhotic MASH with moderate to advanced fibrosis in
              adults; Wegovy tablets are FDA-approved for chronic weight management and cardiovascular
              risk reduction in adults. Wegovy is a distinct product from Ozempic and Rybelsus, which
              are indicated for type 2 diabetes. Verify all pricing and coverage directly with
              NovoCare, your pharmacy, and your insurer, and discuss treatment decisions with a
              licensed clinician. VitalityScout may earn a commission from some links, at no
              additional cost to you, and this never affects how we describe a product or program.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Novo Nordisk — <a href="https://www.novocare.com/content/dam/novonordisk/novocare/redesign/pdf/Wegovy_Price_Guide.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Wegovy Price Guide (PDF)</a>, doc US26NC00049, April 2026 — the self-pay and commercial-copay price tables, offer expiration dates, and the &quot;one month&quot; definitions</li>
              <li>• NovoCare — <a href="https://www.novocare.com/patient/medicines/wegovy.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Wegovy cost, coverage &amp; savings</a> — the $1,349.02/package list price for the pill, pen, and HD pen</li>
              <li>• NovoCare — <a href="https://www.novocare.com/patient/medicines/wegovy/savings-offer.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Wegovy Savings Offer</a> — eligibility, the government-beneficiary exclusion, the FEHB/exchange/state-plan clarification, and the U.S.-residency requirement</li>
              <li>• NovoCare Pharmacy — <a href="https://www.novocare.com/pharmacy/wegovy.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Wegovy direct self-pay ordering</a></li>
              <li>• Wegovy.com — <a href="https://www.wegovy.com/obesity/what-to-pay-for-wegovy.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">what to pay for Wegovy</a> and <a href="https://www.wegovy.com/medicare.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Medicare Part D information</a> (Medicare GLP-1 Bridge)</li>
              <li>• DailyMed — <a href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ee06186f-2aa3-4990-a760-757579d8f77b" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">WEGOVY (semaglutide) injection and tablet prescribing information</a>, label revised June 18, 2026 — indications and the tablet strengths (1.5, 4, 9, 25 mg)</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our GLP-1 Price Cheat Sheet"
            description="Brand, compounded, and clinic-program semaglutide pricing in one page — with the source and date behind every number."
            source="guide_wegovy_cost"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
