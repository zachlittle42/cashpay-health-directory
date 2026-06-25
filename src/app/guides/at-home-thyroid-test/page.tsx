import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'At-Home Thyroid Test: TSH, T3, T4 & Antibodies (2026)',
  description: 'What at-home thyroid tests measure (TSH, T3, T4, TPO/Tg antibodies), how accurate finger-prick kits are, what they cost ($75-$149), and top options.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price answer ends with the verify-with-
// provider hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does an at-home thyroid test cost?',
    answer:
      'A full at-home thyroid panel (TSH, Free T3, Free T4, and TPO antibodies) generally costs about $75 to $149 with no insurance. Paloma Health lists its kit at $119, or $75 with a membership; Everlywell lists $149; and LetsGetChecked’s thyroid antibody test — which adds thyroglobulin antibodies — lists around $119. Most kits are HSA/FSA eligible. These are advertised prices that change; confirm current pricing directly with the provider.',
  },
  {
    question: 'Are at-home thyroid tests accurate?',
    answer:
      'When the sample is collected correctly and run by a CLIA-certified (and ideally CAP-accredited) lab, finger-prick thyroid testing correlates closely with a standard venous draw — published research reports correlations above 0.90 for TSH, and roughly 0.97-0.98 for Free T4. Accuracy depends on a clean collection and careful shipping; a smeared card or a hemolyzed sample can require a re-test. An abnormal at-home result should be confirmed by a clinician with a venous panel.',
  },
  {
    question: 'What do TSH, T3, and T4 actually measure?',
    answer:
      'Per the NIH (NIDDK), TSH is made in the pituitary gland and tells the thyroid how much T4 and T3 to make, so it is the most sensitive first-line marker: a high TSH most often means an underactive thyroid (hypothyroidism), and a low TSH usually means an overactive thyroid (hyperthyroidism). Free T4 and Free T3 measure the active thyroid hormones themselves. A normal TSH reference range is typically about 0.4-4.0 mIU/L, though ranges vary by lab.',
  },
  {
    question: 'What are thyroid antibodies (TPO and Tg) and why test them?',
    answer:
      'Thyroid antibodies are made when the immune system attacks the thyroid by mistake. Per the NIH, measuring them helps identify autoimmune thyroid disease such as Hashimoto’s (often elevated TPO antibodies) and Graves’ disease. Most at-home kits include TPO antibodies; LetsGetChecked also includes thyroglobulin (Tg) antibodies. Antibodies explain the cause behind an abnormal TSH — interpret results with a clinician, not on your own.',
  },
  {
    question: 'Can I use my HSA or FSA to pay for an at-home thyroid test?',
    answer:
      'Usually, yes. Everlywell, Paloma Health, and LetsGetChecked all state that they accept HSA/FSA cards for their thyroid kits because the test is a qualified medical expense. Reimbursement rules vary by plan, and some administrators want an itemized receipt, so save your documentation and confirm with your HSA/FSA administrator. See our HSA/FSA eligibility guide for how letters of medical necessity work.',
  },
  {
    question: 'Should an at-home thyroid result replace seeing a doctor?',
    answer:
      'No. An at-home thyroid test is a convenient screening and monitoring tool, not a diagnosis. TSH fluctuates with time of day, illness, pregnancy, and some medications, so a single number is a snapshot. Use the result to start an informed conversation with a clinician, who can order a confirmatory venous panel and interpret it against your symptoms and history. This page is information, not medical advice.',
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

// Real, currently operating at-home thyroid test providers, verified against
// each provider's own site in June 2026. Prices are advertised estimates to
// confirm with the provider. Markers reflect each provider's listed default
// panel.
const THYROID_KITS = [
  {
    name: 'Paloma Health',
    price: '$119 ($75 w/ membership)',
    markers: 'TSH, Free T3, Free T4, TPO antibodies',
    addOns: 'Reverse T3 and Vitamin D available at checkout',
    note: 'Thyroid-focused virtual clinic. Finger-prick kit analyzed by CLIA-certified labs and reviewed by US physicians; add-ons extend the panel beyond the core four markers.',
    website: 'https://www.palomahealth.com/home-thyroid-blood-test-kit',
  },
  {
    name: 'LetsGetChecked',
    price: 'Around $119 (antibody test)',
    markers: 'TSH, Free T4, Free T3, TPO + thyroglobulin antibodies',
    addOns: 'A hormone-only thyroid test (no antibodies) for repeat tracking',
    note: 'Its thyroid antibody test is the broadest common panel — it adds thyroglobulin (Tg) antibodies on top of TPO. Labs are CLIA-certified and CAP-accredited; clinical team calls you if a result is abnormal.',
    website: 'https://www.letsgetchecked.com/home-thyroid-test/',
  },
  {
    name: 'Everlywell',
    price: '$149',
    markers: 'TSH, Free T3, Free T4, TPO antibodies',
    addOns: 'Part of a broader at-home test catalog',
    note: 'Widely available finger-prick kit with physician-reviewed results in a few days. Covers the standard four-marker panel; HSA/FSA accepted.',
    website: 'https://www.everlywell.com/products/thyroid-test/',
  },
];

export default function AtHomeThyroidTest() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'At-Home Thyroid Test: TSH, T3, T4 & Antibodies (2026)',
    description:
      'A 2026 guide to at-home thyroid tests — what they measure (TSH, Free T3, Free T4, TPO/Tg antibodies), how accurate finger-prick kits are, what they cost, and the leading options compared.',
    url: 'https://vitalityscout.com/guides/at-home-thyroid-test',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/at-home-thyroid-test#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalTest',
      name: 'At-home thyroid panel (TSH, Free T3, Free T4, thyroid antibodies)',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'Paloma Health — At-home thyroid blood test kit', url: 'https://www.palomahealth.com/home-thyroid-blood-test-kit' },
      { '@type': 'CreativeWork', name: 'Everlywell — Thyroid Test', url: 'https://www.everlywell.com/products/thyroid-test/' },
      { '@type': 'CreativeWork', name: 'LetsGetChecked — At-home thyroid test', url: 'https://www.letsgetchecked.com/home-thyroid-test/' },
      { '@type': 'CreativeWork', name: 'NIDDK (NIH) — Thyroid Tests', url: 'https://www.niddk.nih.gov/health-information/diagnostic-tests/thyroid' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/at-home-thyroid-test#faq', url: 'https://vitalityscout.com/guides/at-home-thyroid-test' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/guides" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Health Guides
          </Link>

          <div className="mb-4">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              Lab Testing Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            At-Home Thyroid Test
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What at-home thyroid kits measure, how accurate the finger-prick approach
            really is, what they cost in 2026, and how the leading options compare.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              An at-home thyroid test is a finger-prick blood kit that measures{' '}
              <strong>TSH, Free T3, Free T4, and thyroid antibodies (TPO, sometimes Tg)</strong>,
              run by a CLIA-certified lab. Full panels cost roughly <strong>$75 to $149</strong> cash
              (Paloma $119/$75 membership, LetsGetChecked ~$119, Everlywell $149), and most are
              HSA/FSA eligible. Done correctly, finger-prick results track closely with a venous draw,
              but an abnormal result should be confirmed with a clinician. This is information,
              not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 10 min read
          </p>
        </div>
      </section>

      {/* Price snapshot table */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">At-Home Thyroid Test Price Snapshot (2026)</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Provider</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Cash Price</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Markers Measured</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Notable Add-ons</th>
              </tr>
            </thead>
            <tbody>
              {THYROID_KITS.map((k, i) => (
                <tr key={k.name} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{k.name}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-700">{k.price}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{k.markers}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{k.addOns}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Prices are advertised rates checked in June 2026 and change frequently. Confirm current
          pricing and the exact markers directly with each provider before buying. For broader
          self-order lab options, see our guide to{' '}
          <Link href="/guides/blood-test-without-a-doctor" className="text-blue-600 hover:underline">
            ordering a blood test without a doctor
          </Link>.
        </p>
      </section>

      {/* What an at-home thyroid test measures */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What an At-Home Thyroid Test Measures</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              A complete thyroid panel looks at the signal, the hormones, and the immune system that
              acts on the gland. Per the NIH (NIDDK):
            </p>
            <ul>
              <li>
                <strong>TSH (thyroid-stimulating hormone).</strong> Made in the pituitary gland, TSH
                &ldquo;tells the thyroid how much T4 and T3 to make.&rdquo; It is the most sensitive
                first-line marker. A high TSH most often means an underactive thyroid
                (hypothyroidism); a low TSH usually means an overactive thyroid (hyperthyroidism). A
                normal TSH range is typically about <strong>0.4&ndash;4.0 mIU/L</strong>, though ranges
                vary by lab.
              </li>
              <li>
                <strong>Free T4 and Free T3.</strong> These are the active thyroid hormones
                themselves. A high T4 may point to hyperthyroidism and a low T4 to hypothyroidism; T3
                helps catch hyperthyroidism when T4 still looks normal. &ldquo;Free&rdquo; means the
                unbound, biologically available fraction.
              </li>
              <li>
                <strong>Thyroid antibodies (TPO and Tg).</strong> Antibodies are made &ldquo;when your
                immune system attacks the thyroid gland by mistake.&rdquo; Measuring them helps
                identify autoimmune thyroid disease &mdash; elevated TPO antibodies are common in
                Hashimoto&apos;s, and antibody testing also supports a Graves&apos; disease picture.
                Most kits include TPO; LetsGetChecked also includes thyroglobulin (Tg) antibodies.
              </li>
            </ul>
            <p>
              The practical point: TSH alone tells you <em>that</em> something may be off; the free
              hormones and antibodies start to tell you <em>why</em>. A four-marker panel (TSH + Free
              T3 + Free T4 + TPO) is the common &ldquo;complete&rdquo; at-home configuration.
            </p>
          </div>
        </div>
      </section>

      {/* Accuracy section */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How Accurate Is a Finger-Prick Thyroid Test?</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            The biggest worry with at-home testing is the finger-prick sample. The reassuring answer:
            when the sample is collected correctly and analyzed by a{' '}
            <strong>CLIA-certified</strong> (and ideally <strong>CAP-accredited</strong>) lab,
            finger-prick and dried-blood-spot thyroid testing track closely with a standard venous
            draw. Published research reports correlation coefficients <strong>above 0.90 for
            TSH</strong> and roughly <strong>0.97&ndash;0.98 for Free T4</strong> between capillary and
            venous samples.
          </p>
          <p>Two caveats keep this honest:</p>
          <ul>
            <li>
              <strong>Collection and shipping matter.</strong> A skimpy or smeared blood-spot card, or
              a hemolyzed (broken-down) sample, can throw off a reading or force a re-test. Follow the
              kit instructions, fill the card fully, and ship promptly.
            </li>
            <li>
              <strong>One reading is a snapshot.</strong> TSH fluctuates with time of day, recent
              illness, stress, pregnancy, and some medications. A single number is a starting point,
              not a verdict.
            </li>
          </ul>
          <p>
            The rule of thumb: treat a normal, symptom-free result as reassuring, and treat any
            abnormal result as a prompt to confirm with a clinician using a venous panel &mdash; not as
            a self-diagnosis.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 not-prose my-6">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> Look for the words &ldquo;CLIA-certified&rdquo; (and CAP) on the
              provider&apos;s site. That certification &mdash; not the brand name &mdash; is what tells
              you the lab meets federal quality standards.
            </p>
          </div>
        </div>
      </section>

      {/* Provider cards */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Top At-Home Thyroid Test Options</h2>
        <p className="text-gray-600 mb-6">
          Three widely available, currently operating at-home thyroid kits, verified against each
          provider&apos;s own site in June 2026. Markers and prices are what each provider listed at
          the time &mdash; confirm before you buy.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {THYROID_KITS.map((k) => (
            <div key={k.name} className="bg-white rounded-lg border border-gray-200 p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-gray-900">{k.name}</h3>
                <span className="text-sm font-semibold text-green-700 whitespace-nowrap pl-2">{k.price}</span>
              </div>
              <div className="text-xs text-gray-500 mb-2">{k.markers}</div>
              <p className="text-sm text-gray-600 mb-3">{k.note}</p>
              <a
                href={k.website}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Visit provider site →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* How to choose */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose an At-Home Thyroid Test</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for thyroid-specific care</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Paloma Health</strong> pairs the kit with a thyroid-focused virtual clinic and add-on markers (reverse T3, vitamin D)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Membership pricing ($75) lowers the cost if you plan to retest over time</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for the broadest antibody panel</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>LetsGetChecked</strong> adds thyroglobulin (Tg) antibodies on top of TPO &mdash; useful if autoimmune disease is the question</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Everlywell</strong> for a widely stocked, physician-reviewed standard four-marker panel</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mt-8">
            <p>Before you buy, check a few practical points with the provider:</p>
            <ul>
              <li>Is the lab <strong>CLIA-certified</strong> (and CAP-accredited)?</li>
              <li>Does the price include the full four-marker panel, or just TSH?</li>
              <li>Are results <strong>physician-reviewed</strong>, and is clinical follow-up included if a result is abnormal?</li>
              <li>Is the kit <strong>HSA/FSA eligible</strong>, and will you get an itemized receipt?</li>
              <li>If you take thyroid medication, ask whether and when to take it before sampling.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Payment / HSA-FSA */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Insurance, HSA & FSA</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Most health plans do not reimburse at-home blood tests, so a thyroid kit is usually a
            cash-pay purchase. The good news: Everlywell, Paloma Health, and LetsGetChecked all state
            that they accept <strong>HSA/FSA</strong> cards, because thyroid testing is a qualified
            medical expense. Rules vary by plan administrator &mdash; some want an itemized receipt or
            documentation &mdash; so save your paperwork and confirm before you assume reimbursement.
            For how letters of medical necessity work, see our{' '}
            <Link href="/guides/is-dexa-scan-hsa-fsa-eligible" className="text-blue-600 hover:underline">
              HSA/FSA eligibility guide
            </Link>.
          </p>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Find Cash-Pay Lab Testing &amp; Telehealth</h3>
          <p className="text-gray-600 mb-6">
            Compare self-order labs and telehealth providers for thyroid, hormones, and more.
          </p>
          <Link
            href="/telehealth"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            Browse Telehealth &amp; Lab Options →
          </Link>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/at-home-lab-testing-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧪</span>
              <div>
                <div className="font-bold text-gray-900">At-Home Lab Testing Guide</div>
                <div className="text-sm text-gray-600">How at-home blood tests work and accuracy vs doctor labs</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/everlywell-vs-letsgetchecked" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧪</span>
              <div>
                <div className="font-bold text-gray-900">Everlywell vs LetsGetChecked</div>
                <div className="text-sm text-gray-600">Two at-home lab platforms compared</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/blood-test-without-a-doctor" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🩸</span>
              <div>
                <div className="font-bold text-gray-900">Blood Test Without a Doctor</div>
                <div className="text-sm text-gray-600">How self-order labs work and what they cost</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/cheapest-blood-test-panels" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💉</span>
              <div>
                <div className="font-bold text-gray-900">Cheapest Blood Test Panels</div>
                <div className="text-sm text-gray-600">Self-order panel pricing compared</div>
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
            <li>• <a href="https://www.palomahealth.com/home-thyroid-blood-test-kit" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Paloma Health — At-home thyroid blood test kit (pricing &amp; markers)</a></li>
            <li>• <a href="https://www.everlywell.com/products/thyroid-test/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Everlywell — Thyroid Test (pricing &amp; markers)</a></li>
            <li>• <a href="https://www.letsgetchecked.com/home-thyroid-test/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">LetsGetChecked — At-home thyroid &amp; antibody test</a></li>
            <li>• <a href="https://www.niddk.nih.gov/health-information/diagnostic-tests/thyroid" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">NIDDK (NIH) — Thyroid Tests</a></li>
          </ul>
        </div>
      </section>

      {/* Medical + affiliate disclosure */}
      <MedicalDisclaimer />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Tracking Your Thyroid Health?"
          description="Get our at-home thyroid test comparison plus tips for reading TSH, T3, T4, and antibody results."
          source="guide_at_home_thyroid_test"
        />
      </div>

      <Footer />
    </main>
  );
}
