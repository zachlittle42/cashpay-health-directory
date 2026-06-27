import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'DEXA Scan Cost Los Angeles: Prices by Provider (2026)' },
  alternates: { canonical: 'https://vitalityscout.com/guides/dexa-scan-cost-los-angeles' },
  description: 'What a DEXA scan costs in Los Angeles in 2026: mobile units from ~$39, studios $99-179, hospital $150-400. Real LA providers and how to save.',
};

// Real conversational / People-Also-Ask questions for "dexa scan cost los angeles".
// Every answer is sourced only from facts stated on this page, and each price
// answer ends with the verify-with-provider hedge. The visible FAQ block at the
// foot mirrors this array exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a DEXA scan cost in Los Angeles?',
    answer:
      'In Los Angeles, a body-composition DEXA scan typically runs from about $39 at mobile units (BodySpec advertises LA scans starting at $39) up to roughly $99-$179 at dedicated studios such as DexaFit West Hollywood or Fitnescity, and $150-$400 at hospital imaging departments. University labs like the UCLA Exercise Physiology Lab fall in the middle (~$75-$150). These are estimates that change by location and package — confirm current pricing directly with the provider.',
  },
  {
    question: 'Why are mobile DEXA scans so much cheaper in LA?',
    answer:
      'Mobile providers like BodySpec park a scanning van at gyms and wellness centers, so they carry almost no real-estate or staffing overhead and run high volume. That lets them advertise LA scans from roughly $39-$50, often dropping toward $40 with a package. Brick-and-mortar studios charge more because they add consultations and extra tests (RMR, VO2 max). Verify the current price and what is included before booking.',
  },
  {
    question: 'Does insurance cover a DEXA scan in Los Angeles?',
    answer:
      'For body-composition (fitness) purposes, standard insurance generally does not cover DEXA scans because they are treated as wellness rather than diagnostic services. Bone-density DEXA ordered by a physician for osteoporosis screening can be covered, but that is a different clinical pathway. Body-composition scans are usually HSA/FSA-eligible. Confirm coverage with your plan and the provider.',
  },
  {
    question: 'Where can I get a DEXA scan in Los Angeles?',
    answer:
      'Verified LA-area options include BodySpec mobile units across the Westside, South Bay, and San Fernando Valley; DexaFit West Hollywood (8383 Wilshire Blvd, Beverly Hills); Fitnescity in Beverly Hills; and the UCLA Exercise Physiology Lab in Westwood. Always confirm the current schedule, address, and price with the provider before you go.',
  },
  {
    question: 'Is a more expensive DEXA scan more accurate?',
    answer:
      'Not meaningfully for body composition. DEXA is regarded as the gold standard for body-composition testing with whole-body precision generally cited around 1-2% in the literature, and that accuracy comes from the technology, not the price. A higher-priced studio typically buys extra services (RMR, VO2 max, a consultation) rather than a more accurate fat or muscle reading. This is information, not medical advice.',
  },
  {
    question: 'How much radiation is in a DEXA scan?',
    answer:
      'Very little. A DEXA scan delivers roughly 0.001-0.01 mSv of radiation — a tiny fraction of the natural background radiation you absorb in a year, and less than a cross-country flight (about 0.035 mSv). The scan itself usually takes about 10-30 minutes depending on the sites measured. Discuss any radiation concerns, including pregnancy, with the provider and your clinician.',
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

export default function DexaScanCostLosAngeles() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'DEXA Scan Cost in Los Angeles',
    description:
      'A 2026 cost guide to body-composition DEXA scans in Los Angeles — prices by provider type (mobile, studio, university, hospital), real LA-area providers, and how to save.',
    url: 'https://vitalityscout.com/guides/dexa-scan-cost-los-angeles',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-los-angeles#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalTest',
      name: 'Dual-energy X-ray absorptiometry (DEXA) body composition scan',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-23',
    dateModified: '2026-06-23',
    citation: [
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan in Los Angeles (pricing)', url: 'https://www.bodyspec.com/dexa-scan-los-angeles' },
      { '@type': 'CreativeWork', name: 'GoodRx — What Is a DEXA Scan? Procedure, Results, and Cost', url: 'https://www.goodrx.com/conditions/osteoporosis/dexa-scan' },
      { '@type': 'CreativeWork', name: 'UCSF Radiology — DXA/DEXA Beats BMI for Body Composition', url: 'https://radiology.ucsf.edu/news/dxadexa-beats-bmi-using-x-ray-exam-measure-body-composition-fat-loss' },
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan Accuracy: Understanding the Gold Standard (whole-body precision ~1-2%, Shepherd et al. 2017)', url: 'https://www.bodyspec.com/blog/post/dexa_scan_accuracy_understanding_the_gold_standard' },
      { '@type': 'CreativeWork', name: 'Cleveland Clinic — DEXA (DXA) Scan / Bone Density Test', url: 'https://my.clevelandclinic.org/health/diagnostics/10683-dexa-dxa-scan-bone-density-test' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-los-angeles#faq', url: 'https://vitalityscout.com/guides/dexa-scan-cost-los-angeles' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <SidebarShell>
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
            <span className="text-gray-900">DEXA Scan Cost Los Angeles</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/dexa-scans" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; DEXA Scan Directory
          </Link>

          <div className="mb-4">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              Los Angeles Cost Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            DEXA Scan Cost in Los Angeles
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What a body-composition DEXA scan actually costs across LA in 2026 — from
            mobile vans to premium studios — plus real providers and how to pay less.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating figures detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A body-composition DEXA scan in Los Angeles typically costs from about{' '}
              <strong>$39 at mobile units</strong> (BodySpec advertises LA scans starting at $39) up to{' '}
              <strong>$99-$179 at dedicated studios</strong> like DexaFit West Hollywood or Fitnescity, and{' '}
              <strong>$150-$400 at hospital imaging</strong> departments. Insurance rarely covers fitness
              body-composition scans, but they are usually HSA/FSA-eligible. Prices are estimates — confirm
              current pricing with the provider. This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 10 min read
          </p>
        </div>
      </section>

      {/* At a glance */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">DEXA in LA: At a Glance</h3>
          <div className="grid md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
              <div className="text-2xl font-bold text-green-600">~$39</div>
              <div className="text-gray-600">Mobile van, starting</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
              <div className="text-2xl font-bold text-green-600">$99-$179</div>
              <div className="text-gray-600">Studio (DexaFit, Fitnescity)</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
              <div className="text-2xl font-bold text-green-600">$150-$400</div>
              <div className="text-gray-600">Hospital imaging</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
              <div className="text-2xl font-bold text-green-600">~10 min</div>
              <div className="text-gray-600">Typical scan time</div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Figures are 2026 estimates for body-composition (fitness) scans and vary by location and
            package. Verify current pricing directly with each provider.
          </p>
        </div>
      </section>

      {/* Medical disclaimer (YMYL) */}
      <section className="mx-auto max-w-4xl px-4 py-2">
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-900">
          <p className="mb-2">
            <strong>Medical disclaimer:</strong> This page is general information, not medical advice.
            Prices are estimates aggregated from public sources and may be out of date &mdash; confirm
            current pricing, scan types, and provider credentials directly with each clinic. A
            body-composition DEXA scan is a wellness measurement, not a diagnostic test; talk to a
            licensed clinician about interpreting results or screening for any condition.
          </p>
          <p>
            <strong>Affiliate disclosure:</strong> VitalityScout may earn a commission from some links,
            at no additional cost to you. This never affects which providers we list or how we describe
            them.
          </p>
        </div>
      </section>

      {/* Cost by provider type */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">DEXA Scan Cost by Provider Type</h2>
        <p className="text-gray-700 mb-6 max-w-3xl">
          The single biggest driver of what you pay in Los Angeles is not accuracy — it is the kind of
          provider. The DEXA hardware is similar across the city; the price reflects overhead, volume, and
          which extra tests are bundled in. Here is the 2026 landscape, cheapest to most expensive.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Provider type</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Typical LA price (estimate)</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">What you get</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Best for</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Mobile van (e.g. BodySpec)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~$39-$50/scan</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">DEXA only, same-day results, ~15-min visit</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Frequent, budget-friendly tracking</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">University lab (e.g. UCLA)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~$75-$150/scan</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Research-grade Hologic equipment, clinical protocols</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Maximum-accuracy, methodical users</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Brick-and-mortar studio</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~$99-$179/scan</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">DEXA plus optional RMR, VO2 max, consultation</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">A full metabolic workup in one visit</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Hospital / imaging center</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~$150-$400/scan</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Often requires a referral; bone-density focus</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Clinical osteoporosis screening</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Range basis: BodySpec advertises Los Angeles scans starting at $39; DexaFit lists single
          body-composition scans around $119 (more with bundles); GoodRx reports hospital outpatient DEXA
          averaging ~$207 with a $40-$300 out-of-pocket spread nationally. All figures are estimates to
          confirm with the provider.
        </p>
      </section>

      {/* Why the spread is so wide */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why the Price Spread Is So Wide</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              A $39 scan and a $179 scan in Los Angeles can use comparable technology and produce a similar
              body-fat and lean-mass reading. The gap is mostly business model, not measurement quality:
            </p>
            <ul>
              <li>
                <strong>Overhead.</strong> Mobile units have no storefront rent; a Beverly Hills studio
                does. That difference flows straight to the sticker price.
              </li>
              <li>
                <strong>Volume.</strong> A van that scans dozens of gym members in a day can charge far less
                per scan than a boutique studio that books fewer, longer appointments.
              </li>
              <li>
                <strong>Bundled extras.</strong> The premium tier is usually buying a consultation plus RMR
                (resting metabolic rate) and VO2 max testing — useful, but separate from the DEXA number
                itself.
              </li>
              <li>
                <strong>Clinical vs. wellness.</strong> Hospital pricing reflects a diagnostic imaging
                workflow (and often a referral), which carries more cost than a fitness body-composition
                scan.
              </li>
            </ul>
            <p>
              DEXA is widely regarded as the gold standard for body composition, with whole-body precision
              generally cited around 1-2% in the literature. That accuracy is a property of the method, so
              for tracking fat loss and muscle the cheaper LA options are not a meaningful accuracy
              compromise — the main trade-off is fewer add-on services.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 not-prose my-6">
              <p className="text-sm text-yellow-800">
                <strong>Tracking tip:</strong> If you plan to retest over time, scan on the same machine /
                provider each time. Mixing a mobile unit one quarter and a studio the next can introduce
                small machine-to-machine differences that muddy your trend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real LA providers */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Where to Get a DEXA Scan in Los Angeles</h2>
        <p className="text-gray-700 mb-6">
          These are verified LA-area providers from our directory. Availability for mobile units rotates by
          week — always confirm the current schedule, address, and price before you go.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="font-bold text-gray-900 mb-1">BodySpec (mobile units)</h3>
            <div className="text-green-600 font-semibold text-sm mb-2">~$45-$50/scan (packages ~$40)</div>
            <p className="text-sm text-gray-600">
              The most affordable option in LA. Mobile vans rotate through Westside (Santa Monica, Venice),
              the South Bay (Torrance, Redondo Beach, El Segundo), and the San Fernando Valley (Sherman
              Oaks, Encino, Van Nuys). DEXA only, same-day results.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="font-bold text-gray-900 mb-1">DexaFit West Hollywood</h3>
            <div className="text-blue-600 font-semibold text-sm mb-2">~$119-$179/scan</div>
            <p className="text-sm text-gray-600">
              Premium body-composition studio at 8383 Wilshire Blvd, Beverly Hills. Higher price buys a
              detailed consultation and access to a fuller metabolic suite including RMR and VO2 max.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="font-bold text-gray-900 mb-1">Fitnescity (Beverly Hills)</h3>
            <div className="text-blue-600 font-semibold text-sm mb-2">~$99-$149/scan</div>
            <p className="text-sm text-gray-600">
              Health-optimization testing geared to athletes and executives. Offers DEXA alongside blood
              work and fitness testing through a partner-lab network, with multiple bundles.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h3 className="font-bold text-gray-900 mb-1">UCLA Exercise Physiology Lab</h3>
            <div className="text-orange-600 font-semibold text-sm mb-2">~$75-$150/scan</div>
            <p className="text-sm text-gray-600">
              University research lab in Westwood offering DEXA to the public on clinical-grade Hologic
              equipment at academic pricing. A strong pick when maximum accuracy matters.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-lg bg-green-50 border border-green-200 p-5 text-center">
          <p className="text-gray-700 mb-3">
            See the full, filterable list of verified Los Angeles DEXA providers with current details.
          </p>
          <Link
            href="/dexa-scans/california/los-angeles"
            className="inline-block rounded-lg bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700"
          >
            View LA DEXA Providers →
          </Link>
        </div>
      </section>

      {/* Insurance / HSA */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Insurance, HSA, and Saving Money</h2>
          <div className="prose prose-lg max-w-none">
            <h3>Will insurance pay for it?</h3>
            <p>
              For body-composition (fitness) scans, usually no. Insurers generally treat these as wellness
              services rather than diagnostic care, so you pay out of pocket. A bone-density DEXA ordered by
              a physician to screen for osteoporosis is a different, often-covered pathway — but that is a
              clinical test, not the fitness scan most LA studios sell.
            </p>
            <h3>HSA and FSA</h3>
            <p>
              Body-composition DEXA scans are typically HSA/FSA-eligible, which effectively lowers the cost
              with pre-tax dollars. Keep your itemized receipt for reimbursement and confirm eligibility
              with your plan administrator.
            </p>
            <h3>Other ways to pay less in LA</h3>
            <ul>
              <li><strong>Buy a package.</strong> Mobile and studio providers both discount multi-scan bundles, dropping the per-scan price.</li>
              <li><strong>Pay cash up front.</strong> Many facilities discount 20-40% off list when you skip insurance billing.</li>
              <li><strong>Pick the right tier.</strong> If you only need the body-comp number, a mobile unit at ~$40 does the same core job as a $150 studio scan.</li>
              <li><strong>Watch for first-scan promos.</strong> New-customer pricing is common; ask before booking.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Expect From the Scan</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            A DEXA body-composition scan is fast and low-effort. You lie still on a padded table while a
            scanning arm passes over you. It is painless and typically takes about 10-30 minutes depending
            on the sites measured, and the radiation dose is very low — roughly 0.001-0.01 mSv, a small
            fraction of the natural background radiation you absorb in a year and less than a cross-country
            flight.
          </p>
          <h3>Get a consistent result</h3>
          <ul>
            <li>Wear soft clothing without metal (no zippers, underwire, or clasps).</li>
            <li>Remove jewelry and accessories before the scan.</li>
            <li>Scan at a similar time of day and hydration state each time.</li>
            <li>Avoid a heavy workout the same day — it can shift hydration and glycogen.</li>
            <li>If you might be pregnant, tell the provider; discuss any radiation concerns with your clinician.</li>
          </ul>
          <p>
            For a fuller breakdown of what the scan measures (body-fat percentage, lean mass, visceral fat,
            bone density, and regional data) and how to read your results, see the complete DEXA guide.
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

      {/* Related */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides &amp; Directory</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/dexa-scans" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="font-bold text-gray-900">DEXA Scan Directory</div>
            <div className="text-sm text-gray-600">Find verified DEXA providers by state and city.</div>
          </Link>

          <Link href="/dexa-scans/california/los-angeles" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="font-bold text-gray-900">Los Angeles DEXA Providers</div>
            <div className="text-sm text-gray-600">The full, filterable LA list with current details.</div>
          </Link>

          <Link href="/guides/dexa-scan-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="font-bold text-gray-900">DEXA Scan: Complete Guide</div>
            <div className="text-sm text-gray-600">What it measures, accuracy, and why it beats BMI.</div>
          </Link>

          <Link href="/guides/bodyspec-vs-dexafit" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="font-bold text-gray-900">BodySpec vs DexaFit</div>
            <div className="text-sm text-gray-600">The two leading scan services compared head-to-head.</div>
          </Link>

          <Link href="/local-clinics" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="font-bold text-gray-900">Local Cash-Pay Clinics</div>
            <div className="text-sm text-gray-600">Compare local services and transparent pricing.</div>
          </Link>

          <Link href="/local-clinics/southern-california" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="font-bold text-gray-900">Southern California Clinics</div>
            <div className="text-sm text-gray-600">Cash-pay providers across the LA region.</div>
          </Link>
        </div>
      </section>

      {/* Sources */}
      <section className="mx-auto max-w-4xl px-4 pb-4">
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sources &amp; References</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <a href="https://www.bodyspec.com/dexa-scan-los-angeles" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — DEXA Scan in Los Angeles (LA pricing from $39)</a></li>
            <li>• <a href="https://www.goodrx.com/conditions/osteoporosis/dexa-scan" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">GoodRx — DEXA Scan: procedure, results &amp; cost (hospital ~$207 average)</a></li>
            <li>• <a href="https://www.dexafit.com/plans-and-pricing-1" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DexaFit — Plans &amp; Pricing (single scan ~$119, bundles)</a></li>
            <li>• <a href="https://radiology.ucsf.edu/news/dxadexa-beats-bmi-using-x-ray-exam-measure-body-composition-fat-loss" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">UCSF Radiology — DXA/DEXA beats BMI for body composition</a></li>
            <li>• <a href="https://www.bodyspec.com/blog/post/dexa_scan_accuracy_understanding_the_gold_standard" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — DEXA scan accuracy: the gold standard (whole-body precision ~1-2%)</a></li>
            <li>• <a href="https://my.clevelandclinic.org/health/diagnostics/10683-dexa-dxa-scan-bone-density-test" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Cleveland Clinic — DEXA (DXA) scan overview (scan time, low dose)</a></li>
          </ul>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-gray-100 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-2">Important Disclaimer</h3>
          <p className="text-sm text-gray-600">
            This guide is for informational purposes only and does not constitute medical advice. Prices
            are estimates that vary by provider, package, and date — confirm current pricing and provider
            credentials directly with each clinic. A body-composition DEXA scan is a wellness measurement,
            not a diagnostic test. Consult a qualified clinician about screening for any condition or
            interpreting your results. VitalityScout does not endorse any specific provider or guarantee
            pricing or outcomes.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Get the LA DEXA Scan Pricing Cheat-Sheet"
          description="Provider-by-provider costs, neighborhoods, and money-saving tips for body-composition scans in Los Angeles."
          source="guide_dexa_scan_cost_los_angeles"
        />
      </div>

      </SidebarShell>
      <Footer />
    </main>
  );
}
