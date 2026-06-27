import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'DEXA Scan Cost Atlanta: 2026 Price Guide & Clinics' },
  alternates: { canonical: 'https://vitalityscout.com/guides/dexa-scan-cost-atlanta' },
  description: 'What a body-composition DEXA scan costs in Atlanta in 2026 — DEXA from $75 at Sandy Springs and Buckhead studios, plus the price spread and how to save.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price answer ends with the verify-with-
// provider hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a DEXA scan cost in Atlanta?',
    answer:
      'A single body-composition DEXA scan in Atlanta runs roughly $75 to $150. Live Lean Rx in Sandy Springs and Dexa Body in Buckhead both advertise a $75 DEXA scan, while DexaFit Atlanta in Chamblee lists a $40-150 per-scan range. Multi-test packages lower the effective price — Live Lean Rx bundles a DEXA, RMR, and VO2 max into a $275 Longevity package. These are advertised prices that change; confirm current pricing directly with the clinic.',
  },
  {
    question: 'Where is the cheapest DEXA scan in Atlanta?',
    answer:
      'On a per-scan basis, Live Lean Rx (Sandy Springs) and Dexa Body (Buckhead) tie at $75 for a standalone DEXA body-composition scan, the lowest advertised fixed-studio prices in metro Atlanta. Live Lean Rx also offers a two-DEXA path inside its $425 Starting Line package and 15% off any four or more tests, and Dexa Body sells a two-scan package at $125. Cheapest is not always best — also weigh location, coaching, and whether you want add-on testing. Verify current pricing with each provider before booking.',
  },
  {
    question: 'Is a DEXA scan covered by insurance in Atlanta?',
    answer:
      'A DEXA scan ordered for bone-density screening can be covered — Medicare Part B covers a bone-mass measurement once every 24 months for people who qualify, and many commercial plans cover osteoporosis screening. A DEXA scan for body composition (body fat and lean mass) is generally elective and paid out of pocket. The good news for Atlanta: all three studios on this page accept HSA/FSA funds for body-composition testing. Confirm coverage with your insurer and the clinic.',
  },
  {
    question: 'How much radiation is in a body-composition DEXA scan?',
    answer:
      'A full-body composition DEXA scan delivers roughly 4-5 microsieverts (µSv) of radiation, per BodySpec’s published figures. For context, the U.S. average background dose is about 8-10 µSv per day, and a chest X-ray is roughly 20 µSv. The dose is low, but it is still ionizing radiation — discuss frequency with a clinician if you are pregnant or scan often. This is information, not medical advice.',
  },
  {
    question: 'How long does a DEXA scan take in Atlanta?',
    answer:
      'Fast. Live Lean Rx advertises a head-to-toe DXA scan completed in five to ten minutes with same-day emailed data, and DexaFit Atlanta lists a roughly five-to-seven-minute scan with an instant interactive report. Plan for a little extra time on a first visit for check-in and, at studios like Dexa Body, a results walkthrough with a registered dietitian.',
  },
  {
    question: 'What does a DEXA scan measure?',
    answer:
      'A DEXA (dual-energy X-ray absorptiometry) scan measures body fat, lean (muscle) mass, and bone density, and breaks those down by region — arms, legs, and trunk — plus a visceral-fat estimate. UCSF notes DXA is highly accurate compared with most other body-composition methods and tells a clearer story than BMI; in one UCSF-cited study, 18.5% of women with a normal BMI had excess fat visible on DXA.',
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

// Real, pre-verified Atlanta DEXA clinics (source: src/data/dexa-clinics-georgia.ts,
// lastVerified 2026-06-11; prices independently re-checked against each clinic
// site June 2026). Prices are advertised estimates to confirm with the provider.
const ATL_CLINICS = [
  {
    name: 'Live Lean Rx Atlanta',
    neighborhood: 'Sandy Springs — 6100 Lake Forrest Dr, Ste 125',
    price: '$75/scan',
    addOns: 'RMR $105; VO2 max $125; Longevity pack $275; 15% off 4+ tests',
    note: 'Sandy Springs performance-testing clinic with transparent a-la-carte pricing. DEXA completed in under six minutes with same-day emailed data; leans toward physique and athletic clients tracking bulk/cut cycles.',
    website: 'https://liveleanrx.com/locations/atlanta-georgia',
  },
  {
    name: 'Dexa Body Atlanta',
    neighborhood: 'Buckhead — 3355 Lenox Rd, Ste 750',
    price: '$75/scan',
    addOns: 'RMR $100; VO2 max $150; 2-scan pack $125; dietitian coaching',
    note: 'Buckhead studio that pairs the DEXA with an in-house registered dietitian and health coaching rather than a scan-and-go model. Also runs a mobile testing unit for corporate-wellness and group bookings.',
    website: 'https://dexabody.com/',
  },
  {
    name: 'DexaFit Atlanta',
    neighborhood: 'Chamblee — 5553 Peachtree Rd, Ste 180',
    price: '$40-150/scan',
    addOns: 'VO2 max, RMR; AI-enhanced interactive digital report',
    note: 'Chamblee body-composition studio delivering an AI-enhanced DEXA with an interactive digital report (visceral fat, ALMI, regional composition, bone density, biological age) rather than a static printout. Roughly 5-7 minute scan.',
    website: 'https://www.atlanta.dexafit.com/',
  },
];

export default function DexaScanCostAtlanta() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'DEXA Scan Cost in Atlanta (2026)',
    description:
      'A 2026 price guide to DEXA body-composition scans in Atlanta — what they cost, where to get one across Buckhead, Sandy Springs, and Chamblee, what affects the price, and how to save.',
    url: 'https://vitalityscout.com/guides/dexa-scan-cost-atlanta',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-atlanta#faq' },
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
      { '@type': 'CreativeWork', name: 'Live Lean Rx — Atlanta location pricing', url: 'https://liveleanrx.com/locations/atlanta-georgia' },
      { '@type': 'CreativeWork', name: 'Dexa Body — Plans & Pricing', url: 'https://dexabody.com/plans-pricing/' },
      { '@type': 'CreativeWork', name: 'DexaFit Atlanta', url: 'https://www.atlanta.dexafit.com/' },
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan Radiation: How Much Is It', url: 'https://www.bodyspec.com/blog/post/dexa_scan_radiation_how_much_is_it_and_is_it_safe' },
      { '@type': 'CreativeWork', name: 'UCSF Radiology — Why DXA/DEXA beats BMI', url: 'https://radiology.ucsf.edu/blog/dxadexa-beats-bmi-using-x-ray-exam-measure-body-composition-fat-loss' },
      { '@type': 'CreativeWork', name: 'Medicare — Bone mass measurements coverage', url: 'https://www.medicare.gov/coverage/bone-mass-measurements' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-atlanta#faq', url: 'https://vitalityscout.com/guides/dexa-scan-cost-atlanta' };

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
              Atlanta Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            DEXA Scan Cost in Atlanta
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What a body-composition DEXA scan actually costs across metro Atlanta in 2026,
            where to get one from Buckhead to Sandy Springs, and how to read the price spread.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A body-composition DEXA scan in Atlanta costs roughly{' '}
              <strong>$75 to $150</strong>. Live Lean Rx in Sandy Springs and Dexa Body in
              Buckhead both advertise a <strong>$75</strong> standalone scan; DexaFit Atlanta in
              Chamblee lists a <strong>$40-150</strong> per-scan range. Multi-test packages, like
              Live Lean Rx&apos;s $275 DEXA-plus-RMR-plus-VO2 max bundle, lower the effective price,
              and all three studios accept HSA/FSA. These are advertised estimates to confirm with
              the provider. This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 9 min read
          </p>
        </div>
      </section>

      {/* Quick price snapshot */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Atlanta DEXA Scan Price Snapshot (2026)</h2>

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
              {ATL_CLINICS.map((c, i) => (
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
          <Link href="/dexa-scans/georgia/atlanta" className="text-blue-600 hover:underline">
            Atlanta DEXA clinic directory
          </Link>.
        </p>
      </section>

      {/* What drives the price */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Drives the Price Difference</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              Atlanta&apos;s DEXA market is tighter than coastal cities like New York or LA — there
              is no race-to-the-bottom $40 mobile van here, and the fixed studios cluster between
              $75 and $150. A few concrete factors explain the spread:
            </p>
            <ul>
              <li>
                <strong>Standalone scan vs bundled service.</strong> Live Lean Rx and Dexa Body
                both list the scan itself at $75. DexaFit Atlanta&apos;s $40-150 range reflects how
                the price moves once you add its AI-enhanced report tier or pair the scan with other
                testing.
              </li>
              <li>
                <strong>What comes with the result.</strong> Dexa Body builds an in-house registered
                dietitian and health coaching into the experience; DexaFit returns an AI-enhanced
                interactive digital report with visceral fat, ALMI, regional composition, and a
                biological-age estimate. A bare scan-and-email costs less than a coached readout.
              </li>
              <li>
                <strong>Add-on metabolic testing.</strong> All three studios sell VO2 max and
                resting metabolic rate (RMR) alongside DEXA — Live Lean Rx at RMR $105 / VO2 $125,
                Dexa Body at RMR $100 / VO2 $150. Stacking tests in one visit raises the ticket but
                lowers the per-test cost.
              </li>
              <li>
                <strong>Packages and repeat tracking.</strong> Per-scan cost drops with volume —
                Live Lean Rx&apos;s $275 Longevity package folds in RMR and VO2 max, its Starting
                Line package ($425) includes two scans, and it discounts 15% on four or more tests;
                Dexa Body sells a two-scan package at $125. If you plan to track a cut or bulk over
                months, package math usually wins.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Clinic cards */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Get a DEXA Scan in Atlanta</h2>
        <p className="text-gray-600 mb-6">
          Three real, currently operating Atlanta-area DEXA providers, spread across Sandy Springs,
          Buckhead, and Chamblee. Each listing was verified against the clinic&apos;s own site in
          June 2026.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {ATL_CLINICS.map((c) => (
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

      {/* How Atlanta compares */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Atlanta Pricing Compares</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Atlanta sits comfortably in the middle of the national DEXA picture. A single
              body-composition scan in the U.S. runs roughly <strong>$40 to $300</strong> out of
              pocket — BodySpec&apos;s mobile-van model anchors the bottom nationally at about
              $45 per scan (or $40 with a membership), while hospital bone-density exams average
              $300 or more. Atlanta&apos;s independent studios at <strong>$75</strong> land toward
              the affordable end of that range.
            </p>
            <p>
              The practical difference from a coastal market: Atlanta has no ultra-cheap $40 mobile
              van blanketing the metro the way BodySpec does in NYC or LA, but its fixed-studio floor
              ($75) is actually lower than the typical $99-$179 Manhattan studio scan. A body-comp
              tracker in Atlanta trades the sub-$50 van option for a consistently affordable
              studio scan with coaching or AI reporting built in.
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
              prices in this guide are body-composition scans — and all three Atlanta studios accept
              HSA/FSA funds for them.
            </p>
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose an Atlanta DEXA Clinic</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for cost & repeat tracking</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Live Lean Rx</strong> (Sandy Springs) at $75, with package discounts and 15% off 4+ tests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Dexa Body</strong> (Buckhead) at $75, with a $125 two-scan package for tracking</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for a fuller picture</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>DexaFit Atlanta</strong> (Chamblee) for an AI-enhanced interactive report plus VO2 max and RMR</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Dexa Body</strong> for DEXA paired with an in-house registered dietitian and coaching</span>
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
              <li>For repeat tracking, does a package beat the single-scan price?</li>
              <li>Can you pay with HSA/FSA funds? (All three studios here say yes.)</li>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Find a DEXA Scan in Atlanta</h3>
          <p className="text-gray-600 mb-6">
            Compare every verified Atlanta DEXA provider — prices, neighborhoods, and add-on testing.
          </p>
          <Link
            href="/dexa-scans/georgia/atlanta"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            View Atlanta DEXA Clinics →
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

          <Link href="/guides/is-dexa-scan-hsa-fsa-eligible" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💳</span>
              <div>
                <div className="font-bold text-gray-900">Is a DEXA Scan HSA/FSA Eligible?</div>
                <div className="text-sm text-gray-600">Rules, Letters of Medical Necessity, and how to pay</div>
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
            <li>• <a href="https://liveleanrx.com/locations/atlanta-georgia" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Live Lean Rx — Atlanta location (pricing & packages)</a></li>
            <li>• <a href="https://dexabody.com/plans-pricing/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Dexa Body — Plans &amp; Pricing</a></li>
            <li>• <a href="https://www.atlanta.dexafit.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DexaFit Atlanta (services & report)</a></li>
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
          description="Get our Atlanta DEXA price comparison plus tips for reading your scan and tracking real progress."
          source="guide_dexa_scan_cost_atlanta"
        />
      </div>

      </SidebarShell>
      <Footer />
    </main>
  );
}
