import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'BodySpec Cost (2026): DEXA Scan Prices & Membership' },
  alternates: { canonical: 'https://vitalityscout.com/guides/bodyspec-dexa-scan-cost' },
  description: 'What a BodySpec DEXA scan costs in 2026: one-time scans from ~$40 (baseline ~$59.95), $39.95/mo & $49.95/qtr memberships, and how it compares.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price answer ends with the verify-with-
// provider hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a BodySpec DEXA scan cost?',
    answer:
      'A one-time BodySpec DEXA body-composition appointment starts around $40, with single scans typically in the $40-$60 range depending on city; BodySpec’s pricing page lists a one-time baseline scan at $59.95. Memberships lower the per-scan price: a monthly plan is $39.95/month for one credit and a quarterly plan is $49.95/quarter for one credit, with two-credit tiers at $64.95/month and $79.95/quarter. Credits never expire and can be transferred to friends or family. These are advertised prices that change by location and over time; confirm current pricing on BodySpec’s own pricing page before booking.',
  },
  {
    question: 'Is BodySpec cheaper than a hospital DEXA scan?',
    answer:
      'Usually, yes. BodySpec’s one-time body-composition scans run about $40-$60, while hospital-based DEXA scans commonly run $150-$300 or more out of pocket, and some facilities add a $50-$100 radiologist reading fee. The trade-off is purpose: BodySpec scans are for body composition (fat, lean mass, visceral fat), whereas a hospital DEXA is typically ordered for bone-density diagnosis and may be billable to insurance. Compare the actual scan you need, and verify current pricing with each provider.',
  },
  {
    question: 'What is included in a BodySpec DEXA scan?',
    answer:
      'A BodySpec scan reports total body-fat percentage, lean (muscle) mass, bone mineral density shown as an age- and sex-matched percentile, a visceral-fat area in cm², and a segmental breakdown of lean mass across your arms, legs, and trunk. A technician reviews the results with you, typically the same day. The scan itself takes roughly 6-10 minutes. What is included can vary by location, so confirm the report contents when you book.',
  },
  {
    question: 'How does the BodySpec mobile van work?',
    answer:
      'BodySpec runs DEXA machines inside mobile vans that park at gyms, offices, and public locations, plus fixed pop-up sites, rather than operating only out of leased clinics. You book a time slot online, show up at the scheduled van or location, and complete a sub-15-minute scan. The mobile model is a big reason the entry price stays near $40 — there is no permanent storefront rent baked into every scan. Check BodySpec’s site for the nearest van or location to you.',
  },
  {
    question: 'How much radiation is in a BodySpec scan?',
    answer:
      'A BodySpec full-body composition DEXA scan delivers roughly 4-5 microsieverts (µSv), per BodySpec’s published figures — about half a day of ordinary U.S. background radiation, which averages 8-10 µSv per day. For context, a chest X-ray is around 20 µSv and a cross-country flight about 35 µSv. The dose is low, but it is still ionizing radiation; if you are pregnant or scan very often, discuss the cadence with a clinician. This is information, not medical advice.',
  },
  {
    question: 'Is a BodySpec scan covered by insurance?',
    answer:
      'Generally no. A DEXA scan for body composition (body fat and lean mass) — which is what BodySpec provides — is considered elective and paid out of pocket. A diagnostic DEXA ordered for bone-density screening can be covered; Medicare Part B, for example, covers a qualifying bone-mass measurement once every 24 months. The cash prices on this page are body-composition scans. Confirm coverage with your insurer and the provider before assuming it applies.',
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

// BodySpec pricing tiers — advertised rates checked June 2026 against
// bodyspec.com/pricing-packages and BodySpec's own pricing blog posts. Prices
// are estimates that change by location; confirm with the provider before booking.
const BODYSPEC_PRICING = [
  {
    plan: 'Single scan (one-time)',
    price: 'From ~$40',
    perScan: 'Baseline scan $59.95',
    note: 'Pay-as-you-go DEXA, no commitment. Appointments start near $40; the listed one-time baseline scan is $59.95. Best for a one-off baseline or an occasional check.',
  },
  {
    plan: 'Monthly membership — 1 credit',
    price: '$39.95/mo',
    perScan: '$39.95/scan',
    note: 'One scan credit per month. Credits never expire and roll over, so they suit aggressive tracking.',
  },
  {
    plan: 'Monthly membership — 2 credits',
    price: '$64.95/mo',
    perScan: '~$32.48/scan',
    note: 'Two credits a month, the lowest per-scan rate — useful for couples or fast recomp tracking.',
  },
  {
    plan: 'Quarterly membership — 1 credit',
    price: '$49.95/qtr',
    perScan: '$49.95/scan',
    note: 'BodySpec’s most popular plan. One scan credit per quarter lines up with the 8-12 weeks composition takes to shift.',
  },
  {
    plan: 'Quarterly membership — 2 credits',
    price: '$79.95/qtr',
    perScan: '~$39.98/scan',
    note: 'Two scan credits a quarter for the heaviest trackers. Credits are transferable to friends and family.',
  },
];

// Cross-method / cross-provider comparison points — advertised ranges checked
// June 2026 from BodySpec's comparison guides and a representative DexaFit
// location page. Ranges are estimates to verify with each provider.
const COMPARISON_ROWS = [
  {
    option: 'BodySpec (mobile + pop-up DEXA)',
    typical: '~$40-$60 single ($39.95/mo membership)',
    measures: 'Body fat %, lean mass, bone density, visceral fat',
    notes: 'Lowest national entry price; mobile-van model; same-day results consult.',
  },
  {
    option: 'DexaFit (fixed franchise DEXA)',
    typical: '~$139/scan (Las Vegas)',
    measures: 'DEXA plus optional VO2 max, RMR, 3D scan bundles',
    notes: 'Brick-and-mortar studios; bundles metabolic testing; price varies by franchise.',
  },
  {
    option: 'Hospital / imaging center DEXA',
    typical: '$150-$300+',
    measures: 'Usually bone density (diagnostic), sometimes composition',
    notes: 'May be insurance-billable for bone screening; can add a $50-$100 reading fee.',
  },
  {
    option: 'InBody / BIA (bioimpedance)',
    typical: '$15-$30 (often free at gyms)',
    measures: 'Estimated fat and lean mass via electrical impedance',
    notes: 'Cheapest and fastest, but less accurate than DEXA; no radiation.',
  },
  {
    option: 'Bod Pod (air displacement)',
    typical: '$30-$45',
    measures: 'Body fat % and lean mass via air displacement',
    notes: 'No radiation; no bone-density or segmental data.',
  },
];

export default function BodySpecDexaScanCost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'BodySpec DEXA Scan Cost (2026)',
    description:
      'A 2026 price guide to BodySpec DEXA body-composition scans — single-scan and membership pricing, the mobile-van model, what each scan includes, and how BodySpec compares to hospital, DexaFit, InBody, and Bod Pod testing.',
    url: 'https://vitalityscout.com/guides/bodyspec-dexa-scan-cost',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/bodyspec-dexa-scan-cost#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalTest',
      name: 'DEXA (dual-energy X-ray absorptiometry) body composition scan',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'BodySpec — Pricing & Packages', url: 'https://www.bodyspec.com/pricing-packages' },
      { '@type': 'CreativeWork', name: 'BodySpec — What Is a DEXA Membership', url: 'https://www.bodyspec.com/blog/post/what_is_a_dexa_membership' },
      { '@type': 'CreativeWork', name: 'BodySpec — What’s the Real Cost of a DEXA Scan', url: 'https://www.bodyspec.com/blog/post/whats_the_real_cost_of_a_dexa_scan' },
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Body Scan: Complete Guide to Procedure, Cost & Booking', url: 'https://www.bodyspec.com/blog/post/dexa_body_scan_complete_guide_to_procedure_cost_booking' },
      { '@type': 'CreativeWork', name: 'BodySpec — Body Scan Near Me: Pricing & Comparison Guide 2026', url: 'https://www.bodyspec.com/blog/post/body_scan_near_me_pricing_comparison_guide_2026' },
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan Radiation: How Much Is It', url: 'https://www.bodyspec.com/blog/post/dexa_scan_radiation_how_much_is_it_and_is_it_safe' },
      { '@type': 'CreativeWork', name: 'DexaFit Las Vegas — Pricing', url: 'https://www.dexafitlv.com/pricing' },
      { '@type': 'CreativeWork', name: 'Medicare — Bone mass measurements coverage', url: 'https://www.medicare.gov/coverage/bone-mass-measurements' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/bodyspec-dexa-scan-cost#faq', url: 'https://vitalityscout.com/guides/bodyspec-dexa-scan-cost' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <SidebarShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/dexa-scans" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; DEXA Scan Hub
          </Link>

          <div className="mb-4">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              Provider Cost Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            BodySpec DEXA Scan Cost
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What a BodySpec scan actually costs in 2026, how the mobile-van model
            keeps the price near $40, what is in the report, and how it compares.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A one-time BodySpec DEXA body-composition scan starts around <strong>$40</strong>, with
              most single scans in the <strong>$40-$60</strong> range (a one-time baseline scan is
              listed at <strong>$59.95</strong>). Memberships cut the per-scan price:
              <strong> $39.95/month</strong> or <strong>$49.95/quarter</strong> for one credit, and
              credits never expire. BodySpec runs DEXA inside mobile vans rather than leased clinics,
              which is why it undercuts the $150-$300 hospital scan. These are advertised estimates to
              confirm with the provider. This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 9 min read
          </p>
        </div>
      </section>

      {/* Pricing table */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">BodySpec Pricing at a Glance (2026)</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Plan</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Price</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Effective per scan</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Best for</th>
              </tr>
            </thead>
            <tbody>
              {BODYSPEC_PRICING.map((row, i) => (
                <tr key={row.plan} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{row.plan}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-700">{row.price}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{row.perScan}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Membership per-scan figures assume you use every credit. Advertised rates checked June 2026
          and change by city and over time. Confirm current pricing on{' '}
          <a href="https://www.bodyspec.com/pricing-packages" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">
            BodySpec&apos;s pricing page
          </a>{' '}
          before booking.
        </p>
      </section>

      {/* The mobile-van model */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Mobile-Van Model: Why BodySpec Is Cheap</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              Most DEXA providers operate a fixed clinic or imaging suite and price every scan to
              cover that rent. BodySpec built a different model: it runs DEXA machines inside{' '}
              <strong>mobile vans</strong> that park at gyms, offices, and public sites, plus fixed
              pop-up locations. You book a slot online, show up at the scheduled van, and finish a
              scan in roughly 6-10 minutes.
            </p>
            <p>
              That structure is the reason the entry price sits near $40 instead of the $150-$300 a
              hospital charges. There is no permanent storefront baked into the cost of each scan, and
              one machine can serve many neighborhoods in a week. BodySpec advertises coverage across
              roughly ten-plus US metros — including Los Angeles, San Francisco, San Diego, Austin,
              Dallas, Houston, Seattle, Chicago, Boston, Manhattan, and Denver — with new locations
              added over time.
            </p>
            <p>
              The practical takeaway: the van model trades the polished clinic waiting room for a lower
              price and a scan that comes to your gym. If you want a no-frills, accurate body-composition
              number at the lowest price, that is the entire pitch.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What a BodySpec Scan Includes</h2>
        <p className="text-gray-600 mb-6">
          A standard BodySpec DEXA scan reports the following, per the company&apos;s own
          procedure guide. What is included can vary by location, so confirm when you book.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            { h: 'Body-fat percentage', d: 'Total fat mass and your overall body-fat percentage.' },
            { h: 'Lean (muscle) mass', d: 'Muscle, organs, and water — everything that is not fat or bone.' },
            { h: 'Bone mineral density', d: 'Shown as a percentile versus age- and sex-matched peers.' },
            { h: 'Visceral fat area', d: 'Organ-surrounding fat, measured in cm².' },
            { h: 'Segmental breakdown', d: 'Lean-mass distribution across left/right arms, legs, and trunk.' },
            { h: 'Results consultation', d: 'A technician reviews your data, typically same-day.' },
          ].map((item) => (
            <div key={item.h} className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-1">{item.h}</h3>
              <p className="text-sm text-gray-600">{item.d}</p>
            </div>
          ))}
        </div>

        <div className="prose prose-lg max-w-none mt-8">
          <p>
            BodySpec cites peer-reviewed research showing DEXA typically carries an error of about
            2% for body fat and roughly 1% for bone-mineral density — which is why it is widely used
            to track recomposition over time. Because the report breaks lean mass down by limb, it
            tells a clearer story than a single body-fat number from a bathroom scale or a BIA reading.
          </p>
        </div>
      </section>

      {/* How BodySpec compares */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How BodySpec Compares to Other Options</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-white">
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Option</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Typical price</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">What it measures</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Notes</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={row.option} className={i % 2 === 1 ? 'bg-white' : ''}>
                    <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{row.option}</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-700">{row.typical}</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{row.measures}</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Comparison prices are advertised ranges checked June 2026; the DexaFit figure is from one
            representative location ($139, Las Vegas) and varies by franchise. Confirm current pricing
            with each provider. For a deeper head-to-head, see our{' '}
            <Link href="/guides/bodyspec-vs-dexafit" className="text-blue-600 hover:underline">
              BodySpec vs DexaFit comparison
            </Link>{' '}
            and the{' '}
            <Link href="/guides/dexa-vs-inbody-vs-bodpod" className="text-blue-600 hover:underline">
              DEXA vs InBody vs Bod Pod guide
            </Link>.
          </p>
        </div>
      </section>

      {/* Membership math */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Single Scan vs Membership: The Math</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            If you are getting one baseline scan, the one-time single-scan price (from ~$40; a listed
            baseline scan is $59.95) is the simplest choice — no commitment. The membership math only
            wins if you actually scan on a cadence:
          </p>
          <ul>
            <li>
              <strong>Quarterly, one credit ($49.95/quarter)</strong> is BodySpec&apos;s most popular
              plan and lines up with biology — most measurable composition change takes about 8-12
              weeks to show on a scan, so a quarterly cadence avoids paying to measure noise.
            </li>
            <li>
              <strong>Monthly ($39.95/month)</strong> suits aggressive cuts or bulks where you want
              tighter feedback. Because credits never expire, an unused month is not wasted.
            </li>
            <li>
              <strong>Two-credit tiers ($64.95/month, $79.95/quarter)</strong> give the lowest
              per-scan rate when you use both credits — the monthly two-credit plan works out to about
              $32 a scan — and credits are transferable, so a couple can split one plan.
            </li>
          </ul>
          <p>
            The honest version: do not buy a membership to feel committed. Buy it only if you will use
            the credits on a sensible interval. One quarterly scan a year is a single scan, not a
            membership.
          </p>
        </div>
      </section>

      {/* Is it safe / radiation */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Is a BodySpec Scan Safe? Radiation in Context</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              A BodySpec full-body composition DEXA scan delivers roughly{' '}
              <strong>4-5 microsieverts (&micro;Sv)</strong> per scan, per BodySpec&apos;s published
              figures — about half a day of ordinary background radiation. For perspective:
            </p>
            <ul>
              <li>Average U.S. background radiation: about <strong>8-10 &micro;Sv per day</strong></li>
              <li>A chest X-ray: roughly <strong>20 &micro;Sv</strong></li>
              <li>A cross-country flight: about <strong>35 &micro;Sv</strong></li>
            </ul>
            <p>
              So a single body-composition scan is in the neighborhood of half a day of normal
              background exposure, and even a year of quarterly scans is a few days&apos; worth. The
              dose is low, but it is still ionizing radiation — if you are pregnant, or scanning very
              frequently, discuss the cadence with a clinician.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 not-prose my-6">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> A DEXA scan for bone density may be covered by insurance, but a
                DEXA scan for body composition is generally elective and paid out of pocket. The cash
                prices in this guide are body-composition scans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best for */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Who BodySpec Is Best For</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-lg border-2 border-green-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Best for cost &amp; convenience</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>You want the lowest-priced accurate DEXA — single scans from ~$40, mobile vans citywide</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>You track recomposition quarterly and want the $49.95/quarter membership math</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Look elsewhere if</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>You need a diagnostic bone-density scan billed to insurance — that is a clinic, not a van</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>You want VO2 max, RMR, or bloodwork bundled in — a studio like DexaFit fits better</span>
              </li>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Compare DEXA Providers Near You</h3>
          <p className="text-gray-600 mb-6">
            BodySpec is one of many. Compare verified body-composition clinics by city — prices,
            locations, and add-on testing — on the DEXA hub.
          </p>
          <Link
            href="/dexa-scans"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            Browse DEXA Clinics →
          </Link>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/bodyspec-vs-dexafit" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚖️</span>
              <div>
                <div className="font-bold text-gray-900">BodySpec vs DexaFit</div>
                <div className="text-sm text-gray-600">The two leading DEXA services compared</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/dexa-vs-inbody-vs-bodpod" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <div className="font-bold text-gray-900">DEXA vs InBody vs Bod Pod</div>
                <div className="text-sm text-gray-600">Accuracy, cost, and what each measures</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/dexa-scan-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <div className="font-bold text-gray-900">DEXA Scan: Complete Guide</div>
                <div className="text-sm text-gray-600">What it measures and how to use it</div>
              </div>
            </div>
          </Link>

          <Link href="/dexa-scans" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧭</span>
              <div>
                <div className="font-bold text-gray-900">DEXA Scan Hub</div>
                <div className="text-sm text-gray-600">Find body-composition clinics by city</div>
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
            <li>• <a href="https://www.bodyspec.com/pricing-packages" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — Pricing &amp; Packages</a></li>
            <li>• <a href="https://www.bodyspec.com/blog/post/what_is_a_dexa_membership" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — What Is a DEXA Membership (membership prices)</a></li>
            <li>• <a href="https://www.bodyspec.com/blog/post/whats_the_real_cost_of_a_dexa_scan" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — What&apos;s the Real Cost of a DEXA Scan</a></li>
            <li>• <a href="https://www.bodyspec.com/blog/post/dexa_body_scan_complete_guide_to_procedure_cost_booking" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — DEXA Body Scan: Procedure, Cost &amp; Booking (what is included)</a></li>
            <li>• <a href="https://www.bodyspec.com/blog/post/body_scan_near_me_pricing_comparison_guide_2026" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — Body Scan Near Me: Pricing &amp; Comparison 2026 (coverage, method comparison)</a></li>
            <li>• <a href="https://www.bodyspec.com/blog/post/dexa_scan_radiation_how_much_is_it_and_is_it_safe" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — DEXA Scan Radiation: How Much Is It</a></li>
            <li>• <a href="https://www.dexafitlv.com/pricing" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DexaFit Las Vegas — Pricing (comparison data point)</a></li>
            <li>• <a href="https://www.medicare.gov/coverage/bone-mass-measurements" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Medicare — Bone mass measurements coverage</a></li>
          </ul>
        </div>
      </section>

      {/* Medical + affiliate disclosure */}
      <MedicalDisclaimer />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Tracking Your Body Composition?"
          description="Get our DEXA provider price comparison plus tips for reading your scan and tracking real progress."
          source="guide_bodyspec_dexa_scan_cost"
        />
      </div>

      </SidebarShell>
      <Footer />
    </main>
  );
}
