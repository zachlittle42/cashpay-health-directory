import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Cheapest Way to Get Semaglutide Without Insurance (2026)' },
  alternates: { canonical: 'https://vitalityscout.com/guides/cheapest-way-to-get-semaglutide' },
  description:
    'The cheapest legitimate ways to get semaglutide without insurance in 2026 — NovoCare self-pay from $149-$349/mo, plus what changed with compounding.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price is framed as an advertised estimate
// to confirm with the provider (consistent with MedicalDisclaimer). The visible
// FAQ block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'What is the cheapest way to get semaglutide without insurance in 2026?',
    answer:
      'For an FDA-approved product, the lowest published cash price is the oral Wegovy pill at about $149 per month for the 1.5 mg and 4 mg doses through NovoCare Pharmacy (the 4 mg price rises to $199 after August 31, 2026). The injectable pen runs about $199 per month introductory then a standard $349 per month self-pay. New starters on the two lowest pen doses (0.25 mg and 0.5 mg) qualified for $199 per month through March 31, 2026. These are advertised prices that change; confirm current pricing with the manufacturer or pharmacy.',
  },
  {
    question: 'How much does semaglutide cost without insurance at a regular pharmacy?',
    answer:
      'At a retail pharmacy without any program, the list price is high: GoodRx reports Wegovy around $1,349 per month and Ozempic around $1,219 per month for the most common version. Discount-card coupons cut some products sharply, but for the brand-name injectable pens, the manufacturer’s direct NovoCare self-pay program ($199-$499 depending on dose and stage) is usually cheaper than walking into a pharmacy at the cash counter. Verify the current number at your specific pharmacy.',
  },
  {
    question: 'Is compounded semaglutide still a cheaper option in 2026?',
    answer:
      'Much less than it was. The FDA declared the semaglutide shortage resolved on February 21, 2025, and the enforcement grace period for compounders ended on April 22, 2025 (503A pharmacies) and May 22, 2025 (503B outsourcing facilities). Large-scale compounding of a copy of approved semaglutide is no longer permitted. Compounded semaglutide may still be dispensed in limited, clinically justified cases (for example, a documented allergy to an inactive ingredient), but it is no longer the broadly available $99-$199 option many people remember. This is information, not legal or medical advice.',
  },
  {
    question: 'Is the oral semaglutide pill really cheaper than the injectable pen?',
    answer:
      'On the current NovoCare self-pay menu, yes for the starting dose: the oral Wegovy and Ozempic pill formulations are listed from about $149 per month, while the injectable pens start near $199 per month introductory and settle at a standard $349 per month. The pill and the pen are different products with different dosing and tolerability, so the right choice is clinical, not just price. Discuss which form fits you with a licensed prescriber, and confirm the current price before you start.',
  },
  {
    question: 'How do I avoid a semaglutide scam when buying it cheaply?',
    answer:
      'Treat unusually low prices as a warning sign. Since late 2025 the FDA has sent dozens of warning letters to sellers marketing GLP-1 medications improperly. Reasonable red flags include claims of “FDA-approved compounded” semaglutide (compounded drugs are not FDA-approved), no licensed prescriber involved, refusal to name the dispensing pharmacy, overseas shipping of injectables, or research-chemical “not for human use” listings. Buy through a licensed US pharmacy or telehealth service with prescriber oversight, and verify before you pay.',
  },
  {
    question: 'Does semaglutide qualify for HSA or FSA payment?',
    answer:
      'A prescription medication used for a diagnosed medical condition is generally an eligible HSA/FSA expense, which can lower the effective cost of paying cash. Eligibility depends on it being prescribed care, not the brand or the pharmacy. Some plans may ask for documentation. Keep your receipt and prescription records, and confirm the specifics with your HSA/FSA administrator before assuming a purchase is reimbursable.',
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

// Real, currently-published cash-pay routes to semaglutide (sources: NovoCare
// Pharmacy + Novo Nordisk press release Nov 2025; GoodRx 2026 retail figures;
// FDA compounding policy). Prices are advertised estimates to confirm with the
// provider — every dollar figure here traces to a cited source in the manifest.
const ROUTES = [
  {
    route: 'Oral Wegovy / Ozempic pill (NovoCare)',
    type: 'FDA-approved, self-pay direct',
    price: 'From ~$149/mo',
    note: 'Lowest published cash price for an FDA-approved semaglutide. $149/mo for the 1.5 mg and 4 mg oral doses; the 4 mg price rises to $199/mo after Aug 31, 2026. Requires a prescription.',
  },
  {
    route: 'Injectable pen (NovoCare self-pay)',
    type: 'FDA-approved, self-pay direct',
    price: '~$199 intro → ~$349/mo',
    note: 'Wegovy/Ozempic pens: ~$199/mo introductory for new starters on the two lowest doses (through Mar 31, 2026), then a standard self-pay price of ~$349/mo. Ozempic 2 mg stays ~$499/mo.',
  },
  {
    route: 'Telehealth + manufacturer self-pay',
    type: 'Prescription + delivery',
    price: 'Visit fee + drug price',
    note: 'A telehealth visit (often a modest one-time fee) gets you the prescription, then you pay the manufacturer self-pay price above. The platform may bundle coaching. Compare the all-in number, not just the headline.',
  },
  {
    route: 'Compounded semaglutide',
    type: 'Limited / clinically justified only',
    price: 'No longer broadly available',
    note: 'Once the cheapest route (~$99-$199/mo), but the shortage resolved Feb 21, 2025 and routine compounding of a copy is no longer permitted. May still be dispensed for documented clinical needs (e.g., ingredient allergy).',
  },
  {
    route: 'Retail pharmacy cash price',
    type: 'List price, no program',
    price: '~$1,219-$1,349/mo',
    note: 'The most expensive route. GoodRx lists Wegovy near $1,349/mo and Ozempic near $1,219/mo for the common version. Discount-card coupons help on some products, but the manufacturer self-pay program usually beats the cash counter for the pens.',
  },
];

export default function CheapestWayToGetSemaglutide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Cheapest Way to Get Semaglutide Without Insurance (2026)',
    description:
      'A 2026 guide to the cheapest legitimate ways to get semaglutide without insurance — manufacturer self-pay pricing, the oral pill, telehealth, what changed with compounding, and how to avoid scams.',
    url: 'https://vitalityscout.com/guides/cheapest-way-to-get-semaglutide',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/cheapest-way-to-get-semaglutide#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'Drug',
      name: 'Semaglutide (Wegovy, Ozempic)',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'NovoCare Pharmacy — Wegovy & Ozempic self-pay pricing', url: 'https://www.novocare.com/pharmacy.html' },
      { '@type': 'CreativeWork', name: 'Novo Nordisk — Introductory $199/mo self-pay offer (press release)', url: 'https://www.prnewswire.com/news-releases/novo-nordisk-launches-introductory-self-pay-offer-for-wegovy-and-ozempic-for-199-per-month-302617100.html' },
      { '@type': 'CreativeWork', name: 'GoodRx — Wegovy cost without insurance', url: 'https://www.goodrx.com/wegovy/wegovy-for-weight-loss-cost-coverage' },
      { '@type': 'CreativeWork', name: 'FDA — Clarifies policies for compounders as GLP-1 supply stabilizes', url: 'https://www.fda.gov/drugs/drug-alerts-and-statements/fda-clarifies-policies-compounders-national-glp-1-supply-begins-stabilize' },
      { '@type': 'CreativeWork', name: 'McDermott Will & Emery — Semaglutide shortage resolved (compounding deadlines)', url: 'https://www.mcdermottlaw.com/insights/semaglutide-shortage-resolved/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/cheapest-way-to-get-semaglutide#faq', url: 'https://vitalityscout.com/guides/cheapest-way-to-get-semaglutide' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/weight-loss" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Weight-Loss Hub
          </Link>

          <div className="mb-4">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              GLP-1 Cost Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cheapest Way to Get Semaglutide Without Insurance
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What the legitimate budget routes to semaglutide actually cost in 2026 —
            after the compounding rules changed and manufacturers cut their cash prices.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              The cheapest legitimate way to get semaglutide without insurance in 2026 is the
              manufacturer&apos;s direct self-pay program. The oral Wegovy/Ozempic pill is listed
              from <strong>~$149/month</strong>; the injectable pen runs about <strong>$199 intro
              to $349/month</strong> through NovoCare Pharmacy. That undercuts the ~$1,200-$1,350
              retail cash price. Broad cheap compounding ended when the shortage resolved. All are
              advertised estimates to confirm with the provider. This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 10 min read
          </p>
        </div>
      </section>

      {/* Quick price snapshot table */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Semaglutide Without Insurance: Routes Compared (2026)</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Route</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Type</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Cash Price</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">What to Know</th>
              </tr>
            </thead>
            <tbody>
              {ROUTES.map((r, i) => (
                <tr key={r.route} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{r.route}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{r.type}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-700">{r.price}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Prices are advertised rates checked in June 2026 and change frequently. Confirm current
          pricing, dose eligibility, and program terms directly with the manufacturer or pharmacy
          before relying on a number. Compare programs on the{' '}
          <Link href="/weight-loss" className="text-blue-600 hover:underline">
            weight-loss provider directory
          </Link>.
        </p>
      </section>

      {/* The cheapest route, explained */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Cheapest Legitimate Route Today: Manufacturer Self-Pay</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              For most uninsured people in 2026, the lowest legitimate price comes straight from the
              drugmaker. Novo Nordisk sells Wegovy and Ozempic to cash payers through its NovoCare
              Pharmacy program, and in late 2025 it cut those prices sharply under public and
              government pressure.
            </p>
            <ul>
              <li>
                <strong>The oral pill is the budget entry point.</strong> The oral Wegovy and Ozempic
                pill formulations are listed from about <strong>$149/month</strong> for the 1.5 mg and
                4 mg doses. Note the 4 mg price is scheduled to rise to $199/month after August 31, 2026.
              </li>
              <li>
                <strong>The injectable pen starts low, then steps up.</strong> New starters on the two
                lowest pen doses (0.25 mg and 0.5 mg) could get an introductory <strong>$199/month</strong>
                {' '}through March 31, 2026, then move to the standard self-pay price of <strong>~$349/month</strong>.
                Ozempic 2 mg stays at about $499/month.
              </li>
              <li>
                <strong>You still need a prescription.</strong> Self-pay does not skip the clinical step.
                A licensed prescriber has to determine semaglutide is appropriate for you and write the
                script before the pharmacy will dispense.
              </li>
            </ul>
            <p>
              The practical takeaway: a cash payer can now start an FDA-approved semaglutide for around
              $149-$199 a month instead of four figures. That is the single biggest change versus a year
              ago, and it is why &quot;the cheapest way&quot; no longer points at a compounding pharmacy
              for most people.
            </p>
          </div>
        </div>
      </section>

      {/* What changed with compounding */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Cheap Compounded Semaglutide Mostly Went Away</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Through 2023-2024, the cheapest semaglutide was usually compounded — telehealth programs
            advertised it for roughly $99-$199 a month because a drug shortage gave compounding
            pharmacies a legal lane. That lane closed.
          </p>
          <ul>
            <li>
              The FDA declared the semaglutide shortage <strong>resolved on February 21, 2025</strong>.
            </li>
            <li>
              The enforcement grace period to stop compounding a copy ended <strong>April 22, 2025</strong>
              {' '}for 503A pharmacies and <strong>May 22, 2025</strong> for 503B outsourcing facilities.
            </li>
            <li>
              Routine, mass compounding of a copy of an approved semaglutide is no longer permitted.
              Compounded versions may still be dispensed in <strong>limited, clinically justified cases</strong>
              {' '}— for example, a documented allergy to an inactive ingredient, where a prescriber notes the
              clinical difference on the prescription.
            </li>
          </ul>
          <p>
            If a website is still selling broad, no-questions compounded semaglutide as a cheap copy of
            Wegovy or Ozempic, treat that as a reason to slow down, not a deal. For the fuller picture
            of the rules and what they mean, see our{' '}
            <Link href="/guides/compounded-semaglutide" className="text-blue-600 hover:underline">
              compounded semaglutide guide
            </Link>.
          </p>
        </div>
      </section>

      {/* Route cards */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Every Cash-Pay Route, From Cheapest to Priciest</h2>
          <p className="text-gray-600 mb-6">
            Five real routes to semaglutide without insurance in 2026. Prices are advertised rates
            checked in June 2026 — confirm the current number before you commit.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {ROUTES.map((r) => (
              <div key={r.route} className="bg-white rounded-lg border border-gray-200 p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-gray-900">{r.route}</h3>
                  <span className="text-sm font-semibold text-green-700 whitespace-nowrap pl-2">{r.price}</span>
                </div>
                <div className="text-xs text-gray-500 mb-2">{r.type}</div>
                <p className="text-sm text-gray-600">{r.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How retail compares */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Self-Pay Compares to the Retail Cash Counter</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              The reason manufacturer self-pay matters is the gap to retail. Without any program, GoodRx
              lists Wegovy around <strong>$1,349/month</strong> and Ozempic around <strong>$1,219/month</strong>
              {' '}for the most common version. Discount-card coupons cut some products meaningfully — the FDA-approved
              oral pill has shown coupon prices near $149 — but for the brand-name injectable pens, the
              manufacturer&apos;s direct program is usually cheaper than the cash counter.
            </p>
            <p>
              So the order of operations for an uninsured patient is straightforward: check the manufacturer
              self-pay price first, check a discount card for the specific product and dose second, and treat
              the bare retail list price as the number to avoid.
            </p>
          </div>
        </div>
      </section>

      {/* Avoiding scams */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Avoiding Scams When You Shop on Price</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Chasing the lowest price is exactly where people get hurt. Since late 2025 the FDA has issued
            dozens of warning letters to sellers marketing GLP-1 medications improperly. Use these red flags
            as a checklist:
          </p>
          <ul>
            <li>Claims of <strong>&quot;FDA-approved compounded&quot;</strong> semaglutide — compounded drugs are not FDA-approved.</li>
            <li><strong>No licensed prescriber</strong> involved, or a &quot;questionnaire only&quot; with no real clinical review.</li>
            <li>The seller <strong>won&apos;t name the dispensing pharmacy</strong> or its state license.</li>
            <li><strong>Overseas shipping</strong> of injectable medication, or vials sold as &quot;research chemicals / not for human use.&quot;</li>
            <li>Prices that are <strong>far below</strong> even the manufacturer self-pay floor with no clinical explanation.</li>
          </ul>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 not-prose my-6">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> Buy through a licensed US pharmacy or a telehealth service with real
              prescriber oversight. A slightly higher price from a legitimate source is cheaper than a bad
              outcome from an unsafe one.
            </p>
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Pick the Cheapest Route for You</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for lowest price</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Oral Wegovy/Ozempic pill</strong> from ~$149/mo via NovoCare — the cheapest FDA-approved entry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Pen, lowest doses</strong> at ~$199/mo introductory if you qualify as a new starter</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for support + convenience</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Telehealth program</strong> for the prescription, delivery, and coaching bundled together</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Compare the <strong>all-in</strong> number (visit fee + drug), not just the headline price</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mt-8">
            <p>Before you commit to a route, confirm a few practical points:</p>
            <ul>
              <li>Is the price for the medication only, or does it include the clinical visit and shipping?</li>
              <li>Which dose does the advertised price apply to, and what happens when you titrate up?</li>
              <li>Is there an introductory price that expires, and what is the standard price after it?</li>
              <li>Can you pay with HSA/FSA funds to lower the effective cost of a prescribed medication?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ — visible block mirrors the FAQPage schema above exactly */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div>
          {FAQ_ITEMS.map((item) => (
            <FAQItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </section>

      {/* CTA to money page */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Compare GLP-1 Weight-Loss Programs</h3>
          <p className="text-gray-600 mb-6">
            See cash-pay semaglutide and GLP-1 programs side by side — pricing, what is included, and how to get started.
          </p>
          <Link
            href="/weight-loss"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            View Weight-Loss Programs →
          </Link>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/glp1-weight-loss-complete-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💊</span>
              <div>
                <div className="font-bold text-gray-900">GLP-1 for Weight Loss: Complete Guide</div>
                <div className="text-sm text-gray-600">How semaglutide and tirzepatide work, results, and costs</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/compounded-semaglutide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚠️</span>
              <div>
                <div className="font-bold text-gray-900">Compounded Semaglutide</div>
                <div className="text-sm text-gray-600">FDA status, legality, and what changed after the shortage</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/hims-vs-ro-vs-calibrate" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚖️</span>
              <div>
                <div className="font-bold text-gray-900">Hims vs Ro vs Calibrate</div>
                <div className="text-sm text-gray-600">GLP-1 telehealth programs compared on price and service</div>
              </div>
            </div>
          </Link>

          <Link href="/telehealth" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🩺</span>
              <div>
                <div className="font-bold text-gray-900">Telehealth Services</div>
                <div className="text-sm text-gray-600">Online prescribing and delivery for cash-pay care</div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Sources */}
      <section className="mx-auto max-w-4xl px-4 pb-4">
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <a href="https://www.novocare.com/pharmacy.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">NovoCare Pharmacy — Wegovy &amp; Ozempic self-pay pricing</a></li>
            <li>• <a href="https://www.prnewswire.com/news-releases/novo-nordisk-launches-introductory-self-pay-offer-for-wegovy-and-ozempic-for-199-per-month-302617100.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Novo Nordisk — Introductory $199/mo self-pay offer (press release)</a></li>
            <li>• <a href="https://www.goodrx.com/wegovy/wegovy-for-weight-loss-cost-coverage" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">GoodRx — Wegovy cost without insurance</a></li>
            <li>• <a href="https://www.fda.gov/drugs/drug-alerts-and-statements/fda-clarifies-policies-compounders-national-glp-1-supply-begins-stabilize" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">FDA — Clarifies policies for compounders as GLP-1 supply stabilizes</a></li>
            <li>• <a href="https://www.mcdermottlaw.com/insights/semaglutide-shortage-resolved/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">McDermott Will &amp; Emery — Semaglutide shortage resolved (compounding deadlines)</a></li>
          </ul>
        </div>
      </section>

      {/* Medical + affiliate disclosure */}
      <MedicalDisclaimer />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Starting a GLP-1 on a Budget?"
          description="Get our cash-pay semaglutide price comparison plus what to ask before you commit to a program."
          source="guide_cheapest_way_to_get_semaglutide"
        />
      </div>

      <Footer />
    </main>
  );
}
