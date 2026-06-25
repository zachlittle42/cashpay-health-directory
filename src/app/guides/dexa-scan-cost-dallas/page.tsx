import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'DEXA Scan Cost Dallas: 2026 Price Guide & DFW Clinics',
  description: 'What a DEXA scan costs in Dallas in 2026 — from $99 DexaFit specials to $235 Fitnescity scans. Real DFW clinics, the price spread, and how to save.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price answer ends with the verify-with-
// provider hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a DEXA scan cost in Dallas?',
    answer:
      'A single body-composition DEXA scan in the Dallas-Fort Worth metro runs roughly $99 to $235. DexaFit Dallas advertises a $99 new-client special (plus a free 3D body scan); independent studios such as DEXA Scan Near Me on Turtle Creek and Live Lean Rx in Arlington sit at $149-$150 per scan; and the concierge platform Fitnescity is the premium end at $235. Multi-scan packages lower the per-scan price. These are advertised prices that change; confirm current pricing directly with the clinic.',
  },
  {
    question: 'Where is the cheapest DEXA scan in Dallas?',
    answer:
      'On an advertised single-scan basis, DexaFit Dallas is the lowest entry point at $99 for new clients (and it includes a free 3D body scan). For repeat tracking, package math goes lower: Live Lean Rx DFW drops the effective price to about $54 per test in its 12-pack, and DexaFit’s four-pack works out to roughly $82 per visit. Cheapest is not always best — also weigh location, equipment, and whether you want add-on testing. Verify current pricing with each provider before booking.',
  },
  {
    question: 'Is a DEXA scan covered by insurance in Texas?',
    answer:
      'A DEXA scan ordered for bone-density screening can be covered — Medicare Part B covers a bone-mass measurement once every 24 months for people who qualify, and many commercial Texas plans cover osteoporosis screening. A DEXA scan for body composition (body fat and lean mass) is generally considered elective and paid out of pocket. The cash prices on this page are body-composition scans. Several Dallas providers are HSA/FSA eligible. Confirm coverage with your insurer and the clinic.',
  },
  {
    question: 'Why is there no BodySpec mobile van DEXA in Dallas?',
    answer:
      'BodySpec’s sub-$50 mobile vans — the cheapest national option — operate in markets like Austin, Houston, Los Angeles, and New York, but as of 2026 they do not run a regular Dallas route. That absence is the main reason the Dallas floor sits near $99 rather than $40: the metro’s low end is set by fixed studios and new-client specials, not roving vans. If a van schedule changes, the entry price could fall; check provider sites for the current footprint.',
  },
  {
    question: 'How much radiation is in a body-composition DEXA scan?',
    answer:
      'A full-body composition DEXA scan delivers roughly 4-5 microsieverts (µSv) of radiation, per BodySpec’s published figures. For context, the U.S. average background dose is about 8-10 µSv per day, and a chest X-ray is roughly 20 µSv. The dose is low, but it is still ionizing radiation — discuss frequency with a clinician if you are pregnant or scan often. This is information, not medical advice.',
  },
  {
    question: 'What does a DEXA scan measure?',
    answer:
      'A DEXA (dual-energy X-ray absorptiometry) scan measures body fat, lean (muscle) mass, and bone density, and breaks those down by region — arms, legs, and trunk — plus a visceral-fat estimate. UCSF notes DXA is highly accurate compared with most other body-composition methods and tells a clearer story than BMI; in one UCSF figure, 18.5% of women with a normal BMI had excess fat visible on DXA.',
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

// Real, pre-verified Dallas DEXA clinics (source: src/data/dexa-clinics-texas.ts,
// citySlug === 'dallas', lastVerified 2026-06-11; prices independently re-checked
// against each clinic site June 2026). Prices are advertised estimates to confirm
// with the provider.
const DALLAS_CLINICS = [
  {
    name: 'DexaFit Dallas',
    neighborhood: 'North Dallas — 4222 Trinity Mills Rd',
    price: '$99-149/scan',
    addOns: 'New-client $99 + free 3D scan; 4-/8-/12-packs ($329/$529/$729); RMR, VO2 max',
    note: 'Franchise body-composition studio bundling DEXA with RMR, VO2 max, and a complimentary 3D body scan. New clients pay $99 for any single test; recovery add-ons include NormaTec compression and Joovv red-light therapy.',
    website: 'https://www.dexafit.com/locations/texas/dallas',
  },
  {
    name: 'DEXA Scan Near Me (Turtle Creek)',
    neighborhood: 'Turtle Creek Blvd, Dallas',
    price: '$149/scan',
    addOns: 'RMR + VO2 max bundle from $299; segmental fat reporting',
    note: 'Clinical-grade DEXA testing on Turtle Creek with segmental regional fat-distribution reports and same-account scheduling across multiple Dallas neighborhoods. Single scan $149; optional metabolic bundles.',
    website: 'https://dexascan.com/products/dexa-scan-in-dallas-tx-turtle-creek-blvd',
  },
  {
    name: 'Live Lean Rx DFW',
    neighborhood: 'Arlington — 2500 NE Green Oaks Blvd',
    price: '$58-150/scan',
    addOns: 'Single $150; multi-test 4-/6-/12-packs to ~$54/test; food-sensitivity panels',
    note: 'Independent body-composition and performance studio serving greater DFW from Arlington, pairing DEXA with RMR, VO2 max, and food-sensitivity testing. Fast 5-10 minute scans; packages can be shared between people.',
    website: 'https://liveleanrx.com/locations/dallas-fort-worth-texas',
  },
  {
    name: 'Fitnescity (Dallas)',
    neighborhood: 'North Dallas — 12201 Merit Dr',
    price: '$235/scan',
    addOns: '4-pack at $220/scan; combos $390-745; RMR + VO2 max at separate sites',
    note: 'Concierge wellness-testing platform that books DEXA at vetted Dallas imaging centers and returns an online results dashboard with a follow-up call. The premium end of the local range; multi-packs and DEXA + RMR/VO2 combos available.',
    website: 'https://www.fitnescity.com/dexa-scan-in-dallas-tx',
  },
];

export default function DexaScanCostDallas() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'DEXA Scan Cost in Dallas (2026)',
    description:
      'A 2026 price guide to DEXA body-composition scans in Dallas-Fort Worth — what they cost, where to get one, what affects the price, and how DFW pricing compares.',
    url: 'https://vitalityscout.com/guides/dexa-scan-cost-dallas',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-dallas#faq' },
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
      { '@type': 'CreativeWork', name: 'DexaFit Dallas — DEXA pricing & specials', url: 'https://www.dexafit.com/locations/texas/dallas' },
      { '@type': 'CreativeWork', name: 'Fitnescity — DEXA Scan in Dallas, TX (pricing)', url: 'https://www.fitnescity.com/dexa-scan-in-dallas-tx' },
      { '@type': 'CreativeWork', name: 'DEXA Scan Near Me — Dallas Turtle Creek (pricing)', url: 'https://dexascan.com/products/dexa-scan-in-dallas-tx-turtle-creek-blvd' },
      { '@type': 'CreativeWork', name: 'Live Lean Rx — Dallas/Fort Worth (pricing & packages)', url: 'https://liveleanrx.com/locations/dallas-fort-worth-texas' },
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan Radiation: How Much Is It', url: 'https://www.bodyspec.com/blog/post/dexa_scan_radiation_how_much_is_it_and_is_it_safe' },
      { '@type': 'CreativeWork', name: 'UCSF Radiology — Why DXA/DEXA beats BMI', url: 'https://radiology.ucsf.edu/blog/dxadexa-beats-bmi-using-x-ray-exam-measure-body-composition-fat-loss' },
      { '@type': 'CreativeWork', name: 'Medicare — Bone mass measurements coverage', url: 'https://www.medicare.gov/coverage/bone-mass-measurements' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-dallas#faq', url: 'https://vitalityscout.com/guides/dexa-scan-cost-dallas' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
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
              Dallas-Fort Worth Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            DEXA Scan Cost in Dallas
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What a body-composition DEXA scan actually costs across Dallas-Fort Worth in
            2026, where to get one, and how to read the price spread between studios.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A body-composition DEXA scan in Dallas costs roughly{' '}
              <strong>$99 to $235</strong>, with most studios in the{' '}
              <strong>$149-$150</strong> range. The cheapest entry point is DexaFit
              Dallas&apos;s $99 new-client special (with a free 3D scan); Turtle Creek and
              Arlington studios sit at $149-$150; the concierge platform Fitnescity is the
              premium end at $235. Packages lower the per-scan price. These are advertised
              estimates to confirm with the provider. This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 9 min read
          </p>
        </div>
      </section>

      {/* Quick price snapshot */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Dallas DEXA Scan Price Snapshot (2026)</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Clinic</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Where</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Single Scan</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Add-ons / Packages</th>
              </tr>
            </thead>
            <tbody>
              {DALLAS_CLINICS.map((c, i) => (
                <tr key={c.name} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{c.name}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{c.neighborhood}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-700">{c.price}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{c.addOns}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Prices are advertised rates checked in June 2026 and change frequently. Confirm current
          pricing, location, and equipment directly with each clinic before booking. See the full,
          regularly updated list on the{' '}
          <Link href="/dexa-scans/texas/dallas" className="text-blue-600 hover:underline">
            Dallas DEXA clinic directory
          </Link>.
        </p>
      </section>

      {/* What drives the price */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Drives the Price Difference</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              The Dallas range runs roughly $99 to $235 per scan — a little over a 2x spread, and
              narrower than coastal metros — for a few concrete reasons:
            </p>
            <ul>
              <li>
                <strong>No mobile-van floor.</strong> Coastal markets get a sub-$50 floor from
                BodySpec&apos;s mobile vans. As of 2026 those vans do not run a regular Dallas route,
                so the metro&apos;s low end is set by fixed studios and new-client specials (DexaFit&apos;s
                $99) rather than $40 pop-ups. That is why Dallas starts near $99, not $40.
              </li>
              <li>
                <strong>Independent studio vs concierge platform.</strong> DexaFit Dallas, the Turtle
                Creek studio, and Live Lean Rx in Arlington own their own scanners and price in the
                $99-$150 band. Fitnescity is a concierge marketplace that books you into vetted Dallas
                imaging centers and layers on a results dashboard and follow-up call — that service
                wrapper prices at $235.
              </li>
              <li>
                <strong>Bundled testing and recovery extras.</strong> Studios add VO2 max, resting
                metabolic rate (RMR), 3D body scans, food-sensitivity panels, and even NormaTec or
                red-light recovery. A standalone DEXA costs less than a metabolic bundle.
              </li>
              <li>
                <strong>Packages and memberships.</strong> Per-scan cost drops sharply with volume —
                DexaFit&apos;s four-pack works out to about $82 per visit, and Live Lean Rx&apos;s 12-pack
                drops the effective price to roughly $54 per test (packages can be shared between
                people). If you plan to track over time, package math usually wins.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Clinic cards */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Get a DEXA Scan in Dallas</h2>
        <p className="text-gray-600 mb-6">
          Four real, currently operating Dallas-Fort Worth DEXA providers, from cheapest entry price
          to most premium. Each listing was verified against the clinic&apos;s own site in June 2026.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {DALLAS_CLINICS.map((c) => (
            <div key={c.name} className="bg-white rounded-lg border border-gray-200 p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-gray-900">{c.name}</h3>
                <span className="text-sm font-semibold text-green-700 whitespace-nowrap pl-2">{c.price}</span>
              </div>
              <div className="text-xs text-gray-500 mb-2">{c.neighborhood}</div>
              <p className="text-sm text-gray-600 mb-3">{c.note}</p>
              <a
                href={c.website}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Visit clinic site →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* How Dallas compares */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Dallas Pricing Compares</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Dallas body-composition DEXA pricing tracks the national picture but is missing the very
              bottom of the range. National averages run roughly <strong>$40-$150</strong> per scan:
              the cheapest national tier comes from BodySpec&apos;s mobile vans ($40-$50), which operate
              in Austin and Houston but not Dallas. Without those vans, the DFW floor is the $99 DexaFit
              new-client special, and the typical studio scan is $149-$150 — right in line with what
              Austin and Houston fixed studios charge.
            </p>
            <p>
              The practical takeaway: a Texan in Austin or Houston can find a $40-$45 van scan, but in
              Dallas the realistic floor is about $99. The upside is that a $99 starter (with a free 3D
              scan) and sub-$60 package pricing are both available here, so repeat tracking in DFW can
              still be cheap — you just won&apos;t find a $40 single scan.
            </p>
          </div>
        </div>
      </section>

      {/* Is it safe / radiation */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Is a DEXA Scan Safe? Radiation in Context</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            A DEXA scan uses low-dose ionizing X-rays. A full-body composition scan delivers roughly{' '}
            <strong>4-5 microsieverts (&micro;Sv)</strong> per scan, per BodySpec&apos;s published
            figures. For perspective:
          </p>
          <ul>
            <li>Average U.S. background radiation: about <strong>8-10 &micro;Sv per day</strong></li>
            <li>A chest X-ray: roughly <strong>20 &micro;Sv</strong></li>
            <li>A cross-country flight: about <strong>35 &micro;Sv</strong></li>
          </ul>
          <p>
            So a single body-composition scan is in the neighborhood of half a day of ordinary
            background exposure. The dose is low, but it is still radiation — if you are pregnant,
            or scanning very frequently, discuss the cadence with a clinician.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 not-prose my-6">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> A DEXA scan for bone density may be covered by insurance, but a
              DEXA scan for body composition is generally elective and paid out of pocket. Several
              Dallas providers (including Live Lean Rx) accept HSA/FSA cards. The cash prices in this
              guide are body-composition scans.
            </p>
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose a Dallas DEXA Clinic</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for cost</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>DexaFit Dallas</strong> $99 new-client special with a free 3D scan — the lowest single-scan entry in DFW</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Live Lean Rx DFW</strong> packages drop to ~$54/test in the 12-pack — best for repeat tracking</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for a fuller picture</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>DexaFit Dallas / Live Lean Rx</strong> for DEXA bundled with RMR, VO2 max, and 3D scans</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Fitnescity</strong> for concierge booking at clinical imaging centers with a results dashboard and follow-up call</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mt-8">
            <p>Before you book, confirm a few practical points with the clinic:</p>
            <ul>
              <li>Is the price for the scan only, or does it include a results consultation?</li>
              <li>Will you see the same machine each visit? (Switching devices reduces tracking accuracy.)</li>
              <li>How fast do you get your report, and is it delivered online?</li>
              <li>For repeat tracking, does a package or membership beat the single-scan price?</li>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Find a DEXA Scan in Dallas</h3>
          <p className="text-gray-600 mb-6">
            Compare every verified Dallas-Fort Worth DEXA provider — prices, neighborhoods, and add-on testing.
          </p>
          <Link
            href="/dexa-scans/texas/dallas"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            View Dallas DEXA Clinics →
          </Link>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/dexa-scan-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <div className="font-bold text-gray-900">DEXA Scan: Complete Guide</div>
                <div className="text-sm text-gray-600">What it measures, accuracy, and how to use it</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/dexa-scan-cost-new-york" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <div className="font-bold text-gray-900">DEXA Scan Cost in New York City</div>
                <div className="text-sm text-gray-600">The NYC price spread, van vs studio</div>
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

          <Link href="/local-clinics" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <div className="font-bold text-gray-900">Local Clinics</div>
                <div className="text-sm text-gray-600">Cash-pay health services near you</div>
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
            <li>• <a href="https://www.dexafit.com/locations/texas/dallas" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DexaFit Dallas — DEXA pricing & specials</a></li>
            <li>• <a href="https://www.fitnescity.com/dexa-scan-in-dallas-tx" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Fitnescity — DEXA Scan in Dallas, TX (pricing)</a></li>
            <li>• <a href="https://dexascan.com/products/dexa-scan-in-dallas-tx-turtle-creek-blvd" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DEXA Scan Near Me — Dallas Turtle Creek (pricing)</a></li>
            <li>• <a href="https://liveleanrx.com/locations/dallas-fort-worth-texas" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Live Lean Rx — Dallas/Fort Worth (pricing & packages)</a></li>
            <li>• <a href="https://www.bodyspec.com/blog/post/dexa_scan_radiation_how_much_is_it_and_is_it_safe" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — DEXA Scan Radiation: How Much Is It</a></li>
            <li>• <a href="https://radiology.ucsf.edu/blog/dxadexa-beats-bmi-using-x-ray-exam-measure-body-composition-fat-loss" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">UCSF Radiology — Why DXA/DEXA beats BMI</a></li>
            <li>• <a href="https://www.medicare.gov/coverage/bone-mass-measurements" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Medicare — Bone mass measurements coverage</a></li>
          </ul>
        </div>
      </section>

      {/* Medical + affiliate disclosure */}
      <MedicalDisclaimer />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Tracking Your Body Composition?"
          description="Get our Dallas DEXA price comparison plus tips for reading your scan and tracking real progress."
          source="guide_dexa_scan_cost_dallas"
        />
      </div>

      <Footer />
    </main>
  );
}
