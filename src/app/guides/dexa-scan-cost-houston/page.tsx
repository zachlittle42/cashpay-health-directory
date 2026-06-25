import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'DEXA Scan Cost Houston: 2026 Price Guide & Clinics',
  description: 'What a body-composition DEXA scan costs in Houston in 2026 — $39.95 mobile vans to ~$200 studios. Six real Houston clinics, what drives price, how to save.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price answer ends with the verify-with-
// provider hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a DEXA scan cost in Houston?',
    answer:
      'A single body-composition DEXA scan in Houston ranges from about $39.95 (BodySpec mobile vans) to roughly $200 at a concierge or boutique studio, with most independent studios advertising $40-$150 per scan. Live Lean Rx in Clear Lake runs a $99 new-client special that pairs a DEXA with a Fit3D scan, and several DexaFit franchises sit in the $40-$150 band. These are advertised prices that change frequently; confirm current pricing directly with the clinic.',
  },
  {
    question: 'Where is the cheapest DEXA scan in Houston?',
    answer:
      'On a per-scan basis, BodySpec’s mobile vans advertise the lowest entry price in Houston at $39.95. Among fixed locations, Live Lean Rx Houston in Clear Lake markets a $99 new-client DEXA that also includes a Fit3D 3D body scan. Cheapest is not always best — also weigh location, whether a results consult is included, and whether you want metabolic add-ons. Verify current pricing with each provider before booking.',
  },
  {
    question: 'Is a DEXA scan covered by insurance in Texas?',
    answer:
      'A DEXA scan ordered for bone-density screening can be covered — Medicare Part B covers a bone-mass measurement once every 24 months for people who qualify, and many commercial Texas plans cover osteoporosis screening. A DEXA scan for body composition (body fat and lean mass) is generally considered elective and paid out of pocket. The cash prices on this page are body-composition scans. Confirm coverage with your insurer and the clinic.',
  },
  {
    question: 'Do I need a doctor’s referral for a DEXA scan in Houston?',
    answer:
      'For a cash-pay body-composition DEXA scan, generally no. Houston providers like BodySpec, Live Lean Rx, Composition ID, and the DexaFit franchises let you book directly online or by phone without a physician referral. Houston Concierge Medicine has a medical director who screens clients, so no outside referral is needed there either. A referral is more likely to matter only if you are seeking insurance coverage for a bone-density scan. Confirm the booking process with the clinic.',
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

// Real, pre-verified Houston DEXA clinics (source: src/data/dexa-clinics-texas.ts,
// citySlug === 'houston', lastVerified 2026-06-11; prices independently re-checked
// against each clinic site June 2026). Prices are advertised estimates to confirm
// with the provider. Ordered cheapest → most premium.
const HOUSTON_CLINICS = [
  {
    name: 'BodySpec',
    neighborhood: 'Mobile vans + pop-ups (citywide)',
    price: 'From $39.95/scan',
    addOns: 'DEXA only; multi-scan packages available',
    note: 'National mobile DEXA chain serving Houston via roving vans and neighborhood pop-ups rather than a fixed clinic. Under-15-minute scan, no doctor referral, the lowest entry price in the metro.',
    website: 'https://www.bodyspec.com/dexa-scan-houston',
  },
  {
    name: 'Live Lean Rx Houston',
    neighborhood: 'Clear Lake — 17000 El Camino Real',
    price: '$99 new-client special',
    addOns: 'DEXA + Fit3D included; DEXA + RMR + Fit3D combo $189',
    note: 'Independent Clear Lake-area studio on GE Lunar hardware focused on athletic and weight-loss assessment. The $99 new-client DEXA bundles a Fit3D 3D body scan; HSA/FSA accepted, by appointment Tuesday-Saturday.',
    website: 'https://www.liveleanrxhouston.com/our-services/dexa-scan/',
  },
  {
    name: 'Houston Concierge Medicine & Wellness Center',
    neighborhood: 'Greater Houston (behind Meridian Hospital)',
    price: 'From $100/scan',
    addOns: 'RMR, VO2 max, Fit3D, functional-movement assessment',
    note: 'Physician-led concierge practice running a Hologic Horizon DXA with BodyLogic analysis. A medical director reviews every client, so no outside referral is required.',
    website: 'https://www.houstonconciergemedicine.com/dexa-scan',
  },
  {
    name: 'Composition ID Houston',
    neighborhood: 'Upper Kirby — 3801 Kirby Dr',
    price: '$40-150/scan',
    addOns: 'RMR, VO2 max, blood chemistry; Scan Van mobile testing',
    note: 'Branded body-composition and performance studio in Upper Kirby pairing DEXA with metabolic and blood-chemistry testing and in-house nutrition coaching. Also runs a mobile Scan Van for on-site testing.',
    website: 'https://www.compositionid.com/locations/houston/',
  },
  {
    name: 'DexaFit West Houston',
    neighborhood: 'Spring Branch — 9432 Katy Freeway',
    price: '$40-150/scan',
    addOns: 'VO2 max, RMR, ShapeScale 3D, labs, DNA, Galleri screening',
    note: 'DexaFit-franchise wellness studio on the Katy Freeway layering AI-enhanced analysis on the DEXA report, then extending into a broad longevity menu of labs and screening.',
    website: 'https://www.dexafitwesthouston.com/dexa-scan',
  },
  {
    name: 'DexaFit Clear Lake',
    neighborhood: 'Clear Lake — 1150 Clear Lake City Blvd',
    price: '$40-150/scan',
    addOns: 'VO2 max, RMR, 3D body scan, specialty lab panels',
    note: 'Southeast-Houston DexaFit franchise pairing DEXA with VO2 max, RMR, and 3D scanning, plus movement assessments and specialty biomarker panels. By appointment only.',
    website: 'https://clearlake.dexafit.com/',
  },
];

export default function DexaScanCostHouston() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'DEXA Scan Cost in Houston (2026)',
    description:
      'A 2026 price guide to DEXA body-composition scans in Houston — what they cost, where to get one, what affects the price, and how Houston pricing compares.',
    url: 'https://vitalityscout.com/guides/dexa-scan-cost-houston',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-houston#faq' },
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
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan Houston pricing', url: 'https://www.bodyspec.com/dexa-scan-houston' },
      { '@type': 'CreativeWork', name: 'BodySpec — How Much Does a DEXA Scan Cost in Major Cities', url: 'https://www.bodyspec.com/blog/post/how_much_does_a_dexa_scan_cost_in_major_cities' },
      { '@type': 'CreativeWork', name: 'Live Lean Rx Houston — $99 DEXA Body Composition Scan', url: 'https://www.liveleanrxhouston.com/our-services/dexa-scan/' },
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan Radiation: How Much Is It', url: 'https://www.bodyspec.com/blog/post/dexa_scan_radiation_how_much_is_it_and_is_it_safe' },
      { '@type': 'CreativeWork', name: 'UCSF Radiology — Why DXA/DEXA beats BMI', url: 'https://radiology.ucsf.edu/blog/dxadexa-beats-bmi-using-x-ray-exam-measure-body-composition-fat-loss' },
      { '@type': 'CreativeWork', name: 'Medicare — Bone mass measurements coverage', url: 'https://www.medicare.gov/coverage/bone-mass-measurements' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-houston#faq', url: 'https://vitalityscout.com/guides/dexa-scan-cost-houston' };

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
              Houston Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            DEXA Scan Cost in Houston
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What a body-composition DEXA scan actually costs across Houston in 2026,
            where to get one, and how to read the price gap between mobile vans and studios.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A body-composition DEXA scan in Houston costs roughly{' '}
              <strong>$39.95 to about $200</strong>, with most independent studios in the{' '}
              <strong>$40-$150</strong> range. The cheapest entry point is BodySpec&apos;s
              mobile vans at $39.95; Live Lean Rx in Clear Lake runs a $99 new-client DEXA
              that includes a Fit3D scan; concierge and boutique studios reach about $200.
              Bundles and packages lower the per-scan price. These are advertised estimates
              to confirm with the provider. This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 9 min read
          </p>
        </div>
      </section>

      {/* Quick price snapshot */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Houston DEXA Scan Price Snapshot (2026)</h2>

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
              {HOUSTON_CLINICS.map((c, i) => (
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
          <Link href="/dexa-scans/texas/houston" className="text-blue-600 hover:underline">
            Houston DEXA clinic directory
          </Link>.
        </p>
      </section>

      {/* What drives the price */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Drives the Price Difference</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              The Houston range is wide — about a 5x spread from the cheapest van scan to a
              concierge studio booking — for a few concrete reasons:
            </p>
            <ul>
              <li>
                <strong>Mobile vs fixed location.</strong> BodySpec runs vans and pop-ups across
                Houston rather than leasing a clinic, which keeps the entry price near $40. Fixed
                studios in Clear Lake, Upper Kirby, and along the Katy Freeway carry rent and
                staffing that show up in a $99-$150 scan.
              </li>
              <li>
                <strong>Bundled testing.</strong> Studios like the DexaFit franchises, Composition
                ID, and Live Lean Rx add VO2 max, resting metabolic rate (RMR), Fit3D scanning, or
                bloodwork. A standalone DEXA costs less than a metabolic bundle — though Live Lean
                Rx folds a Fit3D into its $99 new-client scan at no extra charge.
              </li>
              <li>
                <strong>Equipment and consultation.</strong> Physician-led settings such as Houston
                Concierge Medicine pair a Hologic Horizon DXA with a medical-director review, and
                university or concierge consults price above a no-frills scan-and-report.
              </li>
              <li>
                <strong>New-client specials and packages.</strong> Per-scan cost drops with intro
                offers and volume — Live Lean Rx&apos;s $99 new-client DEXA includes a Fit3D, and
                DexaFit and Composition ID offer multi-scan packages. If you plan to track over
                time, ask about package math before paying single-scan rates.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Clinic cards */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Get a DEXA Scan in Houston</h2>
        <p className="text-gray-600 mb-6">
          Six real, currently operating Houston DEXA providers, from cheapest to most premium. Each
          listing was verified against the clinic&apos;s own site in June 2026.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {HOUSTON_CLINICS.map((c) => (
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

      {/* How Houston compares */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Houston Pricing Compares</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Houston is one of the friendlier major US metros for DEXA pricing. BodySpec&apos;s own
              major-cities breakdown puts the Houston range at roughly <strong>$70-$250</strong> per
              scan, below the national average of <strong>$150-$300</strong> and comparable to or
              cheaper than coastal markets like New York ($150-$250) and San Francisco ($150-$300).
              Houston&apos;s lower commercial real-estate costs, relative to Manhattan or the Bay
              Area, help keep studio pricing in check.
            </p>
            <p>
              The practical takeaway: a Houstonian can get a sub-$100 body-composition scan without
              much trouble — the BodySpec vans and the Live Lean Rx new-client special both clear
              that bar — and even the fully-bundled, physician-supervised options top out around
              $200, which would be the entry price in some pricier cities.
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
              DEXA scan for body composition is generally elective and paid out of pocket. The cash
              prices in this guide are body-composition scans.
            </p>
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose a Houston DEXA Clinic</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for cost</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>BodySpec</strong> mobile vans from $39.95 — quick, no-frills, citywide</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Live Lean Rx</strong> $99 new-client DEXA in Clear Lake, with a Fit3D scan included</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for a fuller picture</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Houston Concierge Medicine</strong> for a physician-supervised Hologic DXA</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>DexaFit / Composition ID</strong> for DEXA bundled with VO2 max, RMR, 3D scanning, or labs</span>
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
              <li>For repeat tracking, does a package or new-client special beat the single-scan price?</li>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Find a DEXA Scan in Houston</h3>
          <p className="text-gray-600 mb-6">
            Compare every verified Houston DEXA provider — prices, neighborhoods, and add-on testing.
          </p>
          <Link
            href="/dexa-scans/texas/houston"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            View Houston DEXA Clinics →
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
                <div className="text-sm text-gray-600">NYC prices, clinics, and how they compare</div>
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
            <li>• <a href="https://www.bodyspec.com/dexa-scan-houston" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — DEXA Scan Houston (pricing)</a></li>
            <li>• <a href="https://www.bodyspec.com/blog/post/how_much_does_a_dexa_scan_cost_in_major_cities" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — DEXA Scan Cost in Major Cities (Houston range)</a></li>
            <li>• <a href="https://www.liveleanrxhouston.com/our-services/dexa-scan/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Live Lean Rx Houston — $99 DEXA scan</a></li>
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
          description="Get our Houston DEXA price comparison plus tips for reading your scan and tracking real progress."
          source="guide_dexa_scan_cost_houston"
        />
      </div>

      <Footer />
    </main>
  );
}
