import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'DEXA Scan Cost Boston: 2026 Price Guide & Clinics',
  description: 'What a body-composition DEXA scan costs in Boston in 2026 — $39.95 BodySpec vans to $180 Brookline studios. Real clinics, the spread, how to save.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price answer ends with the verify-with-
// provider hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a DEXA scan cost in Boston?',
    answer:
      'A single body-composition DEXA scan in the Boston metro runs from about $39.95 (BodySpec mobile vans) to $180 (Fitnescity, single scan at its Brookline partner). The two Brookline and Cambridge studios — DEXA Scan Boston and DexaFit Boston — price in a roughly $40-$150 per-scan band that they confirm at booking. Multi-scan bundles lower the cost: Fitnescity drops to $155 per scan on a 4-pack. These are advertised estimates that change; confirm current pricing directly with the clinic.',
  },
  {
    question: 'Where is the cheapest DEXA scan in Boston?',
    answer:
      'On a per-scan basis, BodySpec advertises the lowest entry price in Boston at $39.95 through its mobile vans and neighborhood pop-ups. Unlike some larger metros, Boston does not have a sub-$100 fixed independent studio — the budget tier here is mobile. DEXA Scan Boston offers 40% off a first scan with code FIRST40, which can bring an introductory visit down. Cheapest is not always best; also weigh location, equipment, and whether you want physician review. Verify current pricing with each provider before booking.',
  },
  {
    question: 'Is a DEXA scan covered by insurance in Massachusetts?',
    answer:
      'A DEXA scan ordered for bone-density screening can be covered — Medicare Part B covers a bone-mass measurement once every 24 months for people who qualify, and many commercial Massachusetts plans cover osteoporosis screening. A DEXA scan for body composition (body fat and lean mass) is generally considered elective and paid out of pocket. The cash prices on this page are body-composition scans. Confirm coverage with your insurer and the clinic.',
  },
  {
    question: 'How much radiation is in a body-composition DEXA scan?',
    answer:
      'A full-body composition DEXA scan delivers roughly 4-5 microsieverts (µSv) of radiation, per BodySpec’s published figures. For context, the U.S. average background dose is about 8-10 µSv per day, and a chest X-ray is roughly 20 µSv. The dose is low, but it is still ionizing radiation — discuss frequency with a clinician if you are pregnant or scan often. This is information, not medical advice.',
  },
  {
    question: 'Where can I get a DEXA scan near Boston?',
    answer:
      'The Boston metro has four verified body-composition providers: BodySpec (mobile vans and pop-ups citywide), DEXA Scan Boston and a Fitnescity partner location both on Beacon Street in Brookline, and DexaFit Boston in Cambridge on Concord Ave. Several are physician-supervised or pair DEXA with VO2 max and RMR metabolic testing. See the full, regularly updated list on the Boston DEXA clinic directory and confirm hours and pricing before you book.',
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

// Real, pre-verified Boston-metro DEXA clinics (source:
// src/data/dexa-clinics-massachusetts.ts, citySlug 'boston', lastVerified
// 2026-06-11; prices independently re-checked against each clinic site June
// 2026). Prices are advertised estimates to confirm with the provider.
const BOSTON_CLINICS = [
  {
    name: 'BodySpec',
    neighborhood: 'Mobile vans + pop-ups (metro-wide)',
    price: 'From $39.95/scan',
    addOns: 'DEXA only; flat pricing, no added fees',
    note: 'National mobile DEXA chain that serves Boston through vans and neighborhood pop-ups rather than a fixed lab. Under-15-minute scan with segmental and visceral-fat analysis; the cheapest entry point in the metro.',
    website: 'https://www.bodyspec.com/dexa-scan-boston',
  },
  {
    name: 'DexaFit Boston',
    neighborhood: 'Cambridge — 799 Concord Ave',
    price: '$40-150/scan (verify)',
    addOns: 'VO2 max + RMR metabolism testing',
    note: 'Boston-area studio of the DexaFit chain, in Cambridge near the Harvard/MIT corridor. Quotes DEXA precision at about +/-1% and benchmarks against age- and sex-matched reference data. Live price is confirmed at booking; the studio runs limited-time promos.',
    website: 'https://www.boston.dexafit.com/',
  },
  {
    name: 'DEXA Scan Boston',
    neighborhood: 'Brookline — 1101 Beacon St, Ste 8W-3',
    price: '$40-150/scan (verify)',
    addOns: 'DEXA-only; first scan 40% off with code FIRST40',
    note: 'Independent, physician-run, DEXA-only clinic in the Brookline/Beacon Street corridor, led by Harvard Medical School-trained clinicians. Focuses purely on fat %, lean mass, visceral fat, and regional composition. Posted price is confirmed at booking.',
    website: 'https://www.dexascanboston.com/',
  },
  {
    name: 'Fitnescity (Boston)',
    neighborhood: 'Brookline — 1101 Beacon St (partner site)',
    price: '$180/scan',
    addOns: '4-pack $155/scan; DEXA + RMR $320',
    note: 'Insurance-free booking marketplace that routes Boston clients to hospital, academic, and diagnostic partners, with a Brookline DEXA partner location. Transparent posted pricing and bundle discounts; physician review included.',
    website: 'https://www.fitnescity.com/dexa-scan-in-boston-ma',
  },
];

export default function DexaScanCostBoston() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'DEXA Scan Cost in Boston (2026)',
    description:
      'A 2026 price guide to DEXA body-composition scans in Boston — what they cost, where to get one, what drives the price spread, and how Boston pricing compares.',
    url: 'https://vitalityscout.com/guides/dexa-scan-cost-boston',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-boston#faq' },
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
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan Boston pricing', url: 'https://www.bodyspec.com/dexa-scan-boston' },
      { '@type': 'CreativeWork', name: 'Fitnescity — DEXA Scan in Boston, MA (pricing & bundles)', url: 'https://www.fitnescity.com/dexa-scan-in-boston-ma' },
      { '@type': 'CreativeWork', name: 'DEXA Scan Boston — Brookline clinic (FIRST40 offer)', url: 'https://www.dexascanboston.com/' },
      { '@type': 'CreativeWork', name: 'DexaFit Boston — Cambridge studio', url: 'https://www.boston.dexafit.com/' },
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan Radiation: How Much Is It', url: 'https://www.bodyspec.com/blog/post/dexa_scan_radiation_how_much_is_it_and_is_it_safe' },
      { '@type': 'CreativeWork', name: 'UCSF Radiology — Why DXA/DEXA beats BMI', url: 'https://radiology.ucsf.edu/blog/dxadexa-beats-bmi-using-x-ray-exam-measure-body-composition-fat-loss' },
      { '@type': 'CreativeWork', name: 'Medicare — Bone mass measurements coverage', url: 'https://www.medicare.gov/coverage/bone-mass-measurements' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-boston#faq', url: 'https://vitalityscout.com/guides/dexa-scan-cost-boston' };

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
              Boston Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            DEXA Scan Cost in Boston
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What a body-composition DEXA scan actually costs across the Boston metro in
            2026, where to get one, and how to read the price gap between mobile vans
            and Brookline studios.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A body-composition DEXA scan in Boston costs roughly{' '}
              <strong>$39.95 to $180</strong>. The cheapest entry point is BodySpec&apos;s
              mobile vans at $39.95; the Brookline and Cambridge studios price in a{' '}
              <strong>$40-$150</strong> band confirmed at booking; Fitnescity&apos;s single
              scan is $180, dropping to $155 on a 4-pack. Boston has no sub-$100 fixed
              independent studio. These are advertised estimates to confirm with the
              provider. This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 9 min read
          </p>
        </div>
      </section>

      {/* Quick price snapshot */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Boston DEXA Scan Price Snapshot (2026)</h2>

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
              {BOSTON_CLINICS.map((c, i) => (
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
          Prices are advertised rates checked in June 2026 and change frequently. DexaFit
          Boston and DEXA Scan Boston confirm the exact per-scan figure at booking; both
          run limited-time promotions. Confirm current pricing, location, and equipment
          directly with each clinic before booking. See the full, regularly updated list on the{' '}
          <Link href="/dexa-scans/massachusetts/boston" className="text-blue-600 hover:underline">
            Boston DEXA clinic directory
          </Link>.
        </p>
      </section>

      {/* What drives the price */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Drives the Price Difference</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              The Boston range is roughly a 4.5x spread from the cheapest van scan to the
              most expensive studio booking. A few concrete factors explain it:
            </p>
            <ul>
              <li>
                <strong>Mobile vs fixed location.</strong> BodySpec runs vans and pop-ups
                rather than a leased Brookline or Cambridge storefront, which keeps the
                entry price near $40. Fixed studios carry rent and staffing that show up in
                the per-scan price.
              </li>
              <li>
                <strong>Physician supervision.</strong> DEXA Scan Boston is physician-run,
                led by Harvard Medical School-trained clinicians, and Fitnescity includes a
                physician review with its booking. Doctor-supervised reads cost more than a
                no-frills scan-and-report.
              </li>
              <li>
                <strong>Bundled testing.</strong> DexaFit Boston adds direct VO2 max and
                breath-analysis RMR metabolism testing, and Fitnescity sells a DEXA + RMR
                combo at $320. A standalone DEXA costs less than a metabolic bundle.
              </li>
              <li>
                <strong>Packages.</strong> Per-scan cost drops with volume — Fitnescity&apos;s
                4-pack works out to $155 per scan versus $180 for a single. If you plan to
                track body composition over time, package math usually wins.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Clinic cards */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Get a DEXA Scan in Boston</h2>
        <p className="text-gray-600 mb-6">
          Four real, currently operating Boston-metro DEXA providers, from cheapest to most
          premium. Each listing was verified against the clinic&apos;s own site in June 2026.
          Two of them sit at the same Brookline address on Beacon Street.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {BOSTON_CLINICS.map((c) => (
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

      {/* How Boston compares */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Boston Pricing Compares</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Boston body-composition DEXA pricing tracks the national picture, with a
              narrower top end than the priciest metros. National per-scan rates run roughly{' '}
              <strong>$40-$180</strong>: BodySpec sits at the bottom nationwide
              ($39.95-$50 typical) and DexaFit studios at $119-$179. Boston shows the same
              chains at similar numbers, with the local independent and marketplace options
              topping out at $180 (Fitnescity single scan).
            </p>
            <p>
              The Boston quirk worth knowing: there is no sub-$100 fixed independent studio
              the way some larger metros have. Here the budget tier is mobile-only
              (BodySpec), and the fixed Brookline and Cambridge studios cluster in the
              physician-supervised, $40-$180 band. A first-time scanner can still go cheap
              with a van — or shave a Brookline visit with DEXA Scan Boston&apos;s FIRST40
              code on a first scan.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose a Boston DEXA Clinic</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for cost</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>BodySpec</strong> mobile vans from $39.95 — quick, no-frills, metro-wide</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>DEXA Scan Boston</strong> with 40% off a first scan via code FIRST40</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for a fuller picture</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>DexaFit Boston</strong> for DEXA plus direct VO2 max and RMR metabolic testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Fitnescity / DEXA Scan Boston</strong> for physician-reviewed, packaged Brookline scans</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mt-8">
            <p>Before you book, confirm a few practical points with the clinic:</p>
            <ul>
              <li>Is the price for the scan only, or does it include a physician or results consultation?</li>
              <li>Will you see the same machine each visit? (Switching devices reduces tracking accuracy.)</li>
              <li>How fast do you get your report, and is it delivered online?</li>
              <li>For repeat tracking, does a Fitnescity bundle beat the single-scan price?</li>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Find a DEXA Scan in Boston</h3>
          <p className="text-gray-600 mb-6">
            Compare every verified Boston-metro DEXA provider — prices, neighborhoods, and add-on testing.
          </p>
          <Link
            href="/dexa-scans/massachusetts/boston"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            View Boston DEXA Clinics →
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

          <Link href="/guides/dexa-vs-inbody-vs-bodpod" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚖️</span>
              <div>
                <div className="font-bold text-gray-900">DEXA vs InBody vs Bod Pod</div>
                <div className="text-sm text-gray-600">Body-composition tests compared on accuracy and cost</div>
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
            <li>• <a href="https://www.bodyspec.com/dexa-scan-boston" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — DEXA Scan Boston (pricing)</a></li>
            <li>• <a href="https://www.fitnescity.com/dexa-scan-in-boston-ma" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Fitnescity — DEXA Scan in Boston, MA (pricing & bundles)</a></li>
            <li>• <a href="https://www.dexascanboston.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DEXA Scan Boston — Brookline clinic (FIRST40 offer)</a></li>
            <li>• <a href="https://www.boston.dexafit.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DexaFit Boston — Cambridge studio</a></li>
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
          description="Get our Boston DEXA price comparison plus tips for reading your scan and tracking real progress."
          source="guide_dexa_scan_cost_boston"
        />
      </div>

      <Footer />
    </main>
  );
}
