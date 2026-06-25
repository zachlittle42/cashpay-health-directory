import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'Everlywell Review Cost (2026): Prices, Accuracy & Value',
  description:
    'An Everlywell review focused on cost: real 2026 prices ($49-$299), the Everlywell+ membership, lab accuracy, pros and cons, and cheaper alternatives.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price answer ends with the verify-with-
// provider hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does Everlywell cost?',
    answer:
      'Most Everlywell at-home tests cost between $49 and $299, and Everlywell says more than half of its tests cost under $100. Specific examples checked in 2026: the Testosterone Test is $69, the Metabolism Test is $99, the Thyroid Test is $149, the Food Sensitivity Test is $199, and the 10-marker Women’s Health Test is $249. The Galleri multi-cancer early-detection test is a separate, much higher-priced product at about $949. These are advertised prices that change and run frequent promotions; confirm the current price on each product page before ordering.',
  },
  {
    question: 'Is the Everlywell membership worth it?',
    answer:
      'Everlywell+ costs $39 per month (or $449 per year) and includes one test or virtual-care credit each month plus free shipping, with unused credits able to roll over. The math works if you test at least monthly or want recurring panels, because a single mid-range test can cost more than a month of membership. If you only need one or two tests a year, buying them individually — ideally during a Target, Amazon, or email-list promotion — is usually cheaper. Confirm current membership terms with Everlywell.',
  },
  {
    question: 'Is Everlywell accurate and legit?',
    answer:
      'Everlywell is a legitimate company whose samples are processed by CLIA-certified laboratories, some of which are also CAP-accredited, and Everlywell says a clinician reviews your lab requisition and, when eligible, your results. Everlywell states its at-home collection methods are clinically validated against traditional methods. That said, the tests are laboratory-developed tests (LDTs) and are not FDA-approved, accuracy depends heavily on you collecting the sample correctly, and any abnormal result should be confirmed with a clinician through a standard lab draw. This is information, not a diagnosis.',
  },
  {
    question: 'Does the Everlywell food sensitivity test actually work?',
    answer:
      'The Everlywell Food Sensitivity Test measures IgG antibody reactivity to dozens of foods, but major allergy bodies do not endorse IgG testing for diagnosing food allergies or intolerances. A subgroup of the American Academy of Allergy, Asthma & Immunology has called IgG food testing irrelevant for the work-up of food allergy or intolerance, and experts note IgG can simply reflect recent exposure to a food rather than a problem. It is not a food-allergy, celiac, or lactose-intolerance test. Treat results as a starting point to discuss with a clinician, not a diagnosis.',
  },
  {
    question: 'What are cheaper alternatives to Everlywell?',
    answer:
      'For standard blood biomarkers, self-order lab marketplaces that use Quest or Labcorp draw stations — such as Ulta Lab Tests, Labcorp OnDemand, and Quest’s questhealth.com — are often cheaper per panel than an Everlywell finger-prick kit, because you skip the at-home kit and get a venous draw. LetsGetChecked is the closest direct at-home competitor. The right pick depends on whether you value the convenience of testing at home or the lower price and larger panels of a lab draw. Compare current prices before you buy.',
  },
  {
    question: 'Are Everlywell tests covered by insurance or HSA/FSA?',
    answer:
      'Everlywell tests are generally bought out of pocket rather than billed to insurance, but many are eligible for payment with an HSA or FSA card because they qualify as medical care. Eligibility and whether you need a Letter of Medical Necessity can vary by plan and by test. Confirm with your HSA/FSA administrator, and check Everlywell’s checkout for current HSA/FSA payment support before ordering.',
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

// Real Everlywell test prices, checked June 2026 against Everlywell product
// pages and high-authority reviews (Medical News Today, Fortune). Prices are
// advertised estimates that change and run frequent promotions — confirm on the
// product page before ordering.
const PRICE_ROWS = [
  {
    test: 'Testosterone Test',
    price: '$69',
    measures: 'Total testosterone (finger-prick blood)',
    note: 'One of the cheapest single-hormone kits in the catalog.',
  },
  {
    test: 'Metabolism Test',
    price: '$99',
    measures: 'Cortisol, total testosterone, TSH (3 hormones)',
    note: 'Entry point into hormone panels.',
  },
  {
    test: 'Thyroid Test',
    price: '$149',
    measures: 'TSH, free T3, free T4, TPO antibodies',
    note: 'Four-marker panel; price varies by promotion.',
  },
  {
    test: 'Food Sensitivity Test',
    price: '$199',
    measures: 'IgG reactivity to dozens of foods',
    note: 'IgG testing is not endorsed by allergy bodies (see below).',
  },
  {
    test: "Women's Health Test",
    price: '$249',
    measures: '9 hormones + 1 thyroid antibody (10 markers)',
    note: 'Broadest hormone panel; toward the top of the range.',
  },
  {
    test: 'Catalog range',
    price: '$49–$299',
    measures: 'Most individual at-home tests',
    note: 'Everlywell says more than half its tests are under $100.',
  },
  {
    test: 'Galleri (multi-cancer)',
    price: '~$949',
    measures: 'Blood-based multi-cancer early detection',
    note: 'A separate premium product, far above the core range.',
  },
];

export default function EverlywellReviewCost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Everlywell Review: Cost, Accuracy, Pros & Cons (2026)',
    description:
      'A cost-focused 2026 Everlywell review — real test prices, the Everlywell+ membership, lab accuracy and certification, pros and cons, and cheaper alternatives.',
    url: 'https://vitalityscout.com/guides/everlywell-review',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/everlywell-review#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalTest',
      name: 'Everlywell at-home laboratory testing',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'Everlywell — Testosterone Test (pricing)', url: 'https://www.everlywell.com/products/testosterone-test/' },
      { '@type': 'CreativeWork', name: "Everlywell — Women's Health Test (pricing)", url: 'https://www.everlywell.com/products/womens-health-test/' },
      { '@type': 'CreativeWork', name: 'Everlywell — Metabolism Test (pricing)', url: 'https://www.everlywell.com/products/metabolism/' },
      { '@type': 'CreativeWork', name: 'Everlywell — Thyroid Test (pricing)', url: 'https://www.everlywell.com/products/thyroid-test/' },
      { '@type': 'CreativeWork', name: 'Everlywell+ — At-Home Lab Testing Membership', url: 'https://www.everlywell.com/monthly-at-home-lab-testing-membership/' },
      { '@type': 'CreativeWork', name: 'Everlywell — Science & lab certification', url: 'https://www.everlywell.com/science/' },
      { '@type': 'CreativeWork', name: 'Medical News Today — Everlywell Review 2026', url: 'https://www.medicalnewstoday.com/articles/everlywell-review' },
      { '@type': 'CreativeWork', name: 'Fortune — Everlywell Review (2026)', url: 'https://fortune.com/article/everlywell-review/' },
      { '@type': 'CreativeWork', name: 'STAT News — Everlywell food sensitivity test, experts on IgG', url: 'https://www.statnews.com/2018/01/23/everlywell-food-sensitivity-test/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/everlywell-review#faq', url: 'https://vitalityscout.com/guides/everlywell-review' };

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
              At-Home Lab Test Review
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Everlywell Review: Cost, Accuracy &amp; Value
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What Everlywell actually costs in 2026, whether the membership is worth it,
            how accurate the tests are, and the cheaper alternatives worth comparing first.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              Everlywell is a legitimate at-home lab-testing service whose kits cost{' '}
              <strong>$49 to $299</strong> (the Galleri cancer test is a separate{' '}
              <strong>~$949</strong>), with Everlywell+ membership at <strong>$39/month</strong>.
              Samples are processed by CLIA-certified labs and a clinician reviews your order
              and results. Its convenience and breadth are the draw; the trade-offs are premium
              per-test pricing, finger-prick collection quality, and an IgG food test that
              allergy experts do not endorse. Prices are estimates to verify; this is
              information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 10 min read
          </p>
        </div>
      </section>

      {/* Price snapshot */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Everlywell Cost Snapshot (2026)</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Test</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Price</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">What it measures</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Note</th>
              </tr>
            </thead>
            <tbody>
              {PRICE_ROWS.map((r, i) => (
                <tr key={r.test} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{r.test}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-700">{r.price}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{r.measures}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Prices are advertised rates checked in June 2026 and change frequently; Everlywell
          runs regular promotions and is often discounted at Target and Amazon. Confirm the
          current price on each product page before ordering. For a head-to-head with the
          nearest at-home competitor, see{' '}
          <Link href="/guides/everlywell-vs-letsgetchecked" className="text-blue-600 hover:underline">
            Everlywell vs LetsGetChecked
          </Link>.
        </p>
      </section>

      {/* What is Everlywell */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Is Everlywell?</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Everlywell is a direct-to-consumer health-testing company that sells at-home
              collection kits for blood (finger-prick), saliva, and urine samples. You order
              a kit online, collect the sample at home, mail it back in prepaid packaging, and
              get results through an online dashboard, typically within a few days. The catalog
              spans hormones, thyroid, metabolic markers, vitamins, sexual-health/STI panels,
              and food sensitivity, plus the separately priced Galleri multi-cancer test.
            </p>
            <p>
              The model is convenience: no appointment, no waiting room, results at home. The
              flip side is that you do the collection yourself, the per-test price often sits
              above what a self-order lab draw costs, and a kit is a screening tool, not a
              diagnosis. For a broader primer on how this category works, see our{' '}
              <Link href="/guides/at-home-lab-testing-guide" className="text-blue-600 hover:underline">
                at-home lab testing guide
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Membership math */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Everlywell+ Membership: Does the Math Work?</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Everlywell+ costs <strong>$39 per month</strong> (or about <strong>$449 per year</strong>)
            and includes one test-or-virtual-care credit each month, free shipping, and the
            ability to roll unused credits forward. Because a single mid-range test ($99–$249)
            can cost more than a month of membership, the subscription pencils out for people
            who test at least monthly or want recurring panels over time.
          </p>
          <p>
            If you only need one or two tests a year, individual purchases — ideally timed to a
            Target, Amazon, or email-list promotion — are usually cheaper than a 12-month
            commitment. Run the simple check: multiply the number of tests you realistically
            want this year by their list price, and compare it to $449.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 not-prose my-6">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> Membership terms, included tests, and credit values change.
              Confirm the current monthly/annual price and what each credit covers on Everlywell&apos;s
              membership page before subscribing.
            </p>
          </div>
        </div>
      </section>

      {/* Accuracy */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Accurate Is Everlywell?</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              On the lab side, the fundamentals are sound. Everlywell states that the
              laboratories processing its samples hold a current{' '}
              <strong>CLIA certificate</strong> (the federal standard for lab quality), maintain
              state licenses, and undergo routine inspections and third-party proficiency
              testing; <strong>some labs are also CAP-accredited</strong>. Everlywell says a{' '}
              <strong>clinician reviews your lab requisition</strong> and, when eligible, your
              results, and that its at-home collection methods are clinically validated against
              traditional methods.
            </p>
            <p>
              The honest caveats: Everlywell tests are{' '}
              <strong>laboratory-developed tests and are not FDA-approved</strong>, accuracy
              depends heavily on you collecting the sample correctly (a poor finger-prick draw
              degrades results), and reviewers do report occasional discordant results that a
              standard lab draw later corrected. The practical rule: treat a kit as a screening
              step, and confirm anything abnormal or decision-changing with a clinician and a
              venous draw.
            </p>
          </div>
        </div>
      </section>

      {/* Food sensitivity caveat */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">The Food Sensitivity Test Caveat</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            The $199 Food Sensitivity Test is one of Everlywell&apos;s best-known products, and
            it deserves a specific flag. It measures <strong>IgG antibody reactivity</strong> to
            dozens of foods — and major allergy authorities do not endorse IgG testing for
            diagnosing food allergies or intolerances. A subgroup of the American Academy of
            Allergy, Asthma &amp; Immunology has called IgG food testing irrelevant for the
            work-up of food allergy or intolerance, and experts note that IgG can simply reflect
            recent exposure to a food, not a problem with it.
          </p>
          <p>
            It is explicitly <strong>not</strong> a food-allergy test, and it cannot diagnose
            celiac disease or lactose intolerance. If those are your concerns, an
            allergist-ordered work-up or a targeted lab test is the appropriate path. Use the
            IgG result, at most, as a conversation starter with a clinician — not as a diet
            prescription.
          </p>
        </div>
      </section>

      {/* Pros and cons */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Everlywell Pros and Cons</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pros</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Genuine convenience — collect at home, no appointment</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>CLIA-certified labs; some CAP-accredited; clinician-reviewed</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Broad catalog (hormones, thyroid, STI, vitamins, metabolic)</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Clean results dashboard with plain-language context</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Frequent promotions; often discounted at Target and Amazon</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-red-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cons</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✕</span><span>Per-test price often above a self-order lab draw</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✕</span><span>Finger-prick collection quality affects accuracy</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✕</span><span>Tests are not FDA-approved (laboratory-developed tests)</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✕</span><span>IgG food sensitivity test not endorsed by allergy bodies</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✕</span><span>Abnormal results still need clinician confirmation</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Alternatives */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Cheaper Everlywell Alternatives</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Everlywell&apos;s premium is largely paid for the at-home convenience. If you can get
            to a draw station, self-order lab marketplaces are frequently cheaper per panel and
            give you a venous draw (more blood, larger panels, fewer collection errors):
          </p>
          <ul>
            <li>
              <strong>Quest (questhealth.com) and Labcorp OnDemand</strong> — the two national
              reference labs sell directly to consumers. Compare them in our{' '}
              <Link href="/guides/quest-vs-labcorp-pricing" className="text-blue-600 hover:underline">
                Quest vs Labcorp self-pay pricing guide
              </Link>.
            </li>
            <li>
              <strong>Ulta Lab Tests and other marketplaces</strong> — often the cheapest way to
              buy common panels. See the{' '}
              <Link href="/guides/cheapest-blood-test-panels" className="text-blue-600 hover:underline">
                cheapest blood test panels
              </Link>{' '}
              comparison.
            </li>
            <li>
              <strong>LetsGetChecked</strong> — the closest direct at-home competitor; trade-offs
              in our{' '}
              <Link href="/guides/everlywell-vs-letsgetchecked" className="text-blue-600 hover:underline">
                Everlywell vs LetsGetChecked
              </Link>{' '}
              comparison.
            </li>
          </ul>
          <p>
            Want to order labs yourself without a doctor in the first place? Start with{' '}
            <Link href="/guides/blood-test-without-a-doctor" className="text-blue-600 hover:underline">
              blood test without a doctor
            </Link>.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Who Everlywell Is Best For</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Good fit</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>You value testing at home over the lowest price</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>You want discreet sexual-health or hormone screening</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>You test regularly and the membership pencils out</span></li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Look elsewhere if</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">→</span><span>You want the cheapest panel and can visit a draw station</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">→</span><span>You need a diagnostic food-allergy or celiac work-up</span></li>
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">→</span><span>You need an FDA-approved or insurance-billed test</span></li>
              </ul>
            </div>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Compare Cash-Pay Lab Testing Options</h3>
          <p className="text-gray-600 mb-6">
            See telehealth and self-order lab services side by side — prices, panels, and how to book.
          </p>
          <Link
            href="/telehealth"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            Browse Telehealth &amp; Lab Services →
          </Link>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/everlywell-vs-letsgetchecked" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧪</span>
              <div>
                <div className="font-bold text-gray-900">Everlywell vs LetsGetChecked</div>
                <div className="text-sm text-gray-600">The two biggest at-home lab brands compared</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/cheapest-blood-test-panels" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💉</span>
              <div>
                <div className="font-bold text-gray-900">Cheapest Blood Test Panels</div>
                <div className="text-sm text-gray-600">Lowest-cost panels without a doctor</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/quest-vs-labcorp-pricing" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧪</span>
              <div>
                <div className="font-bold text-gray-900">Quest vs Labcorp Pricing</div>
                <div className="text-sm text-gray-600">Self-pay reference-lab prices compared</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/at-home-lab-testing-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧭</span>
              <div>
                <div className="font-bold text-gray-900">At-Home Lab Testing Guide</div>
                <div className="text-sm text-gray-600">How at-home tests work and what to track</div>
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
            <li>• <a href="https://www.everlywell.com/products/testosterone-test/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Everlywell — Testosterone Test ($69)</a></li>
            <li>• <a href="https://www.everlywell.com/products/womens-health-test/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Everlywell — Women&apos;s Health Test ($249)</a></li>
            <li>• <a href="https://www.everlywell.com/products/metabolism/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Everlywell — Metabolism Test ($99)</a></li>
            <li>• <a href="https://www.everlywell.com/products/thyroid-test/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Everlywell — Thyroid Test ($149)</a></li>
            <li>• <a href="https://www.everlywell.com/monthly-at-home-lab-testing-membership/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Everlywell+ — Membership ($39/mo, $449/yr)</a></li>
            <li>• <a href="https://www.everlywell.com/science/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Everlywell — Science &amp; lab certification (CLIA/CAP)</a></li>
            <li>• <a href="https://www.medicalnewstoday.com/articles/everlywell-review" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Medical News Today — Everlywell Review 2026 (price range, membership)</a></li>
            <li>• <a href="https://fortune.com/article/everlywell-review/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Fortune — Everlywell Review (Food Sensitivity $199, turnaround)</a></li>
            <li>• <a href="https://www.statnews.com/2018/01/23/everlywell-food-sensitivity-test/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">STAT News — Experts on Everlywell IgG food sensitivity testing</a></li>
          </ul>
        </div>
      </section>

      {/* Medical + affiliate disclosure */}
      <MedicalDisclaimer />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Comparing At-Home Lab Tests?"
          description="Get our cash-pay lab price comparison plus tips for reading your results and confirming abnormal findings."
          source="guide_everlywell_review"
        />
      </div>

      <Footer />
    </main>
  );
}
