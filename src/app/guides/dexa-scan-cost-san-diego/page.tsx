import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'DEXA Scan Cost San Diego: 2026 Prices & Clinics' },
  alternates: { canonical: 'https://vitalityscout.com/guides/dexa-scan-cost-san-diego' },
  description: 'What a body-composition DEXA scan costs in San Diego in 2026 — from ~$45 BodySpec mobile vans to $210 La Jolla studio scans. Real clinics and how to save.',
};

// Real conversational / People-Also-Ask questions for "dexa scan cost San Diego".
// Every answer is sourced only from facts stated on this page, and each price
// answer ends with the verify-with-provider hedge (consistent with the
// MedicalDisclaimer). The visible FAQ block at the foot mirrors this array
// exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a DEXA scan cost in San Diego?',
    answer:
      'A single body-composition DEXA scan in San Diego ranges from about $45 (BodySpec mobile vans, advertised as low as $39) to roughly $210 (Fitnescity at the UC San Diego site in La Jolla), with dedicated studios such as DexaFit San Diego in the $119-$179 range. Multi-scan packages lower the per-scan price — Fitnescity drops to about $185-$200 per scan in its 2-4 scan bundles, and BodySpec memberships reach roughly $40 per scan. These are advertised estimates that change; confirm current pricing directly with the clinic.',
  },
  {
    question: 'Where is the cheapest DEXA scan in San Diego?',
    answer:
      'On a per-scan basis, BodySpec advertises the lowest entry price in San Diego, as low as $39, with mobile vans that rotate through Pacific Beach, La Jolla, Hillcrest, and Downtown, plus North County stops in Carlsbad and Oceanside. Memberships and packages can bring the effective price near $40 per scan. Cheapest is not always best — also weigh location, equipment, and whether you want add-on testing like RMR or VO2 max. Verify current pricing with each provider before booking.',
  },
  {
    question: 'Is a DEXA scan covered by insurance in San Diego?',
    answer:
      'A DEXA scan ordered for bone-density screening can be covered — Medicare Part B covers a bone-mass measurement once every 24 months for people who qualify, and many commercial plans cover osteoporosis screening. A DEXA scan for body composition (body fat and lean mass) is generally treated as elective and paid out of pocket. The cash prices on this page are body-composition scans, which are usually HSA/FSA-eligible. Confirm coverage with your insurer and the clinic.',
  },
  {
    question: 'How much radiation is in a body-composition DEXA scan?',
    answer:
      'A full-body composition DEXA scan delivers roughly 4-5 microsieverts (µSv) of radiation, per BodySpec’s published figures. For context, the U.S. average background dose is about 8-10 µSv per day, and a chest X-ray is roughly 20 µSv. The dose is low, but it is still ionizing radiation — discuss frequency with a clinician if you are pregnant or scan often. This is information, not medical advice.',
  },
  {
    question: 'Why is there such a wide price range for DEXA in San Diego?',
    answer:
      'The San Diego spread is roughly 4-5x from the cheapest van scan to the most expensive studio booking, and the gap is mostly business model, not measurement quality. Mobile vans like BodySpec carry no storefront rent and run high volume, so they price near $45. Fixed studios and university-affiliated sites add staffing, consultation, and bundled tests (RMR, VO2 max), which pushes the scan toward $119-$210. The DEXA hardware is comparable across providers — confirm what is included with each clinic.',
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

// Real, pre-verified San Diego DEXA providers (source:
// src/data/dexa-clinics-california.ts, rows where citySlug === 'san-diego',
// lastVerified 2026-06-10; prices independently re-checked against each clinic
// site in June 2026). Fitnescity is the same national wellness-testing platform
// listed in the repo's NYC DEXA data; its San Diego pricing and UC San Diego
// site were confirmed on fitnescity.com. Prices are advertised estimates to
// confirm with the provider.
const SD_CLINICS = [
  {
    name: 'BodySpec',
    neighborhood: 'Mobile vans (Pacific Beach, La Jolla, Hillcrest, Downtown)',
    price: 'From ~$45/scan',
    addOns: 'DEXA only; membership pricing reaches ~$40/scan',
    note: 'National mobile DEXA chain and the cheapest entry point in San Diego. Vans rotate through central-city gyms and wellness centers; under-15-minute scan with segmental and visceral-fat analysis, same-day results.',
    website: 'https://www.bodyspec.com/dexa-scan-san-diego',
  },
  {
    name: 'BodySpec — North County',
    neighborhood: 'Mobile vans (Carlsbad, Oceanside)',
    price: 'From ~$45/scan',
    addOns: 'DEXA only; package deals',
    note: 'The same BodySpec mobile service covering North County gyms, CrossFit boxes, and training facilities in Carlsbad and Oceanside. Convenient if you are north of the I-8 corridor and want the budget option.',
    website: 'https://www.bodyspec.com/dexa-scan-san-diego',
  },
  {
    name: 'DexaFit San Diego',
    neighborhood: 'Central San Diego (Hillcrest / Mission Valley / Downtown)',
    price: '$119-$179/scan',
    addOns: 'RMR, VO2 max, 3D body scan; bundles available',
    note: 'San Diego location of the national DexaFit chain, bundling DEXA with a full metabolic-testing suite (RMR, VO2 max) and a detailed consultation under one roof.',
    website: 'https://www.dexafit.com',
  },
  {
    name: 'Fitnescity San Diego',
    neighborhood: 'La Jolla — 9500 Gilman Dr (UC San Diego site)',
    price: '$210/scan',
    addOns: '2-/3-/4-scan packs ~$185-$200/scan; DEXA+RMR $385; +VO2 max $650',
    note: 'Wellness-testing platform that books DEXA at the UC San Diego site in La Jolla and returns an online results dashboard. The most premium San Diego option, geared to athletes and executives wanting a full workup.',
    website: 'https://www.fitnescity.com/dexa-scan-in-san-diego-ca',
  },
];

export default function DexaScanCostSanDiego() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'DEXA Scan Cost in San Diego (2026)',
    description:
      'A 2026 price guide to DEXA body-composition scans in San Diego — what they cost, where to get one, what affects the price, and how San Diego pricing compares.',
    url: 'https://vitalityscout.com/guides/dexa-scan-cost-san-diego',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-san-diego#faq' },
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
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan San Diego pricing', url: 'https://www.bodyspec.com/dexa-scan-san-diego' },
      { '@type': 'CreativeWork', name: 'Fitnescity — DEXA Scan in San Diego, CA (pricing & UC San Diego site)', url: 'https://www.fitnescity.com/dexa-scan-in-san-diego-ca' },
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan Radiation: How Much Is It', url: 'https://www.bodyspec.com/blog/post/dexa_scan_radiation_how_much_is_it_and_is_it_safe' },
      { '@type': 'CreativeWork', name: 'UCSF Radiology — Why DXA/DEXA beats BMI', url: 'https://radiology.ucsf.edu/blog/dxadexa-beats-bmi-using-x-ray-exam-measure-body-composition-fat-loss' },
      { '@type': 'CreativeWork', name: 'Medicare — Bone mass measurements coverage', url: 'https://www.medicare.gov/coverage/bone-mass-measurements' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-san-diego#faq', url: 'https://vitalityscout.com/guides/dexa-scan-cost-san-diego' };

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
              San Diego Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            DEXA Scan Cost in San Diego
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What a body-composition DEXA scan actually costs in San Diego in 2026, where to
            get one from Pacific Beach to La Jolla, and how to read the price differences
            between mobile vans and studios.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A body-composition DEXA scan in San Diego costs roughly{' '}
              <strong>$45 to $210</strong>, with dedicated studios in the{' '}
              <strong>$119-$179</strong> range. The cheapest entry point is BodySpec&apos;s
              mobile vans from about $45; DexaFit San Diego runs $119-$179; and Fitnescity at
              the UC San Diego site in La Jolla reaches $210. Packages and memberships lower the
              per-scan price. These are advertised estimates to confirm with the provider.
              This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 9 min read
          </p>
        </div>
      </section>

      {/* Quick price snapshot */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">San Diego DEXA Scan Price Snapshot (2026)</h2>

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
              {SD_CLINICS.map((c, i) => (
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
          <Link href="/dexa-scans/california/san-diego" className="text-blue-600 hover:underline">
            San Diego DEXA clinic directory
          </Link>.
        </p>
      </section>

      {/* What drives the price */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Drives the Price Difference</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              The San Diego range is wide — roughly a 4-5x spread from the cheapest van scan to
              the most expensive La Jolla studio booking — for a few concrete reasons:
            </p>
            <ul>
              <li>
                <strong>Mobile vs fixed location.</strong> BodySpec runs mobile vans that rotate
                through Pacific Beach, La Jolla, Hillcrest, and Downtown rather than a leased
                storefront, which keeps the entry price near $45. Fixed and university-affiliated
                sites carry rent and staffing that show up in a $119-$210 scan.
              </li>
              <li>
                <strong>Bundled testing.</strong> DexaFit San Diego and Fitnescity add VO2 max,
                resting metabolic rate (RMR), or a calcium-score option. A standalone DEXA costs
                far less than a metabolic bundle — Fitnescity&apos;s DEXA+RMR runs about $385 and
                its DEXA+RMR+VO2 max reaches $650.
              </li>
              <li>
                <strong>Geography within the county.</strong> A central-city or coastal-La Jolla
                address prices above a North County mobile stop. The same BodySpec service that
                covers Carlsbad and Oceanside also serves central San Diego at the same low rate,
                so where you scan matters less for the budget option.
              </li>
              <li>
                <strong>Packages and memberships.</strong> Per-scan cost drops with volume —
                Fitnescity&apos;s 2-4 scan packs fall to roughly $185-$200 each, and BodySpec
                memberships reach about $40 per scan. If you plan to track over time, package math
                usually wins.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Clinic cards */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Get a DEXA Scan in San Diego</h2>
        <p className="text-gray-600 mb-6">
          Four real, currently operating San Diego DEXA providers, from cheapest to most premium.
          Each listing was checked against the clinic&apos;s own site in June 2026; mobile-van
          schedules rotate weekly, so confirm the current location before you go.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {SD_CLINICS.map((c) => (
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

      {/* How San Diego compares */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How San Diego Pricing Compares</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              San Diego body-composition DEXA pricing tracks the national picture, with a budget
              floor that matches the rest of California and a premium tier set by the La Jolla /
              UC San Diego cluster. National averages run roughly <strong>$40-$150</strong> per
              scan: BodySpec sits at the bottom nationwide ($45-$50 typical) and DexaFit studios
              at $119-$179. In San Diego the same chains show those numbers, with the high end
              reaching $210 at Fitnescity&apos;s La Jolla site — a touch above the typical studio
              ceiling because it pairs the scan with university-site logistics and bundled testing.
            </p>
            <p>
              Compared with Los Angeles, San Diego looks similar at the budget and studio tiers but
              lacks LA&apos;s glut of independent storefront studios, so the practical choice here
              is usually mobile-van value (BodySpec) versus a full metabolic workup (DexaFit or
              Fitnescity). A San Diegan can still get a sub-$50 scan easily — the mobile-van option
              is strong across both the central city and North County.
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
              prices in this guide are body-composition scans, which are usually HSA/FSA-eligible.
            </p>
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose a San Diego DEXA Clinic</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for cost</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>BodySpec</strong> mobile vans from ~$45 — quick, no-frills, central San Diego</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>BodySpec North County</strong> for the same low rate in Carlsbad and Oceanside</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for a fuller picture</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>DexaFit San Diego</strong> for DEXA plus RMR, VO2 max, and a 3D body scan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Fitnescity (La Jolla)</strong> for a university-site scan with metabolic bundles</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mt-8">
            <p>Before you book, confirm a few practical points with the clinic:</p>
            <ul>
              <li>Is the price for the scan only, or does it include a results consultation?</li>
              <li>Will you see the same machine each visit? (Switching devices reduces tracking accuracy.)</li>
              <li>For mobile vans, where and when is the next San Diego stop on the schedule?</li>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Find a DEXA Scan in San Diego</h3>
          <p className="text-gray-600 mb-6">
            Compare every verified San Diego DEXA provider — prices, neighborhoods, and add-on testing.
          </p>
          <Link
            href="/dexa-scans/california/san-diego"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            View San Diego DEXA Clinics →
          </Link>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/dexa-scan-cost-los-angeles" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <div className="font-bold text-gray-900">DEXA Scan Cost: Los Angeles</div>
                <div className="text-sm text-gray-600">How SoCal&apos;s biggest metro prices body-comp scans</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/dexa-scan-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <div className="font-bold text-gray-900">DEXA Scan: Complete Guide</div>
                <div className="text-sm text-gray-600">What it measures, accuracy, and how to use it</div>
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
            <li>• <a href="https://www.bodyspec.com/dexa-scan-san-diego" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — DEXA Scan San Diego (pricing & locations)</a></li>
            <li>• <a href="https://www.fitnescity.com/dexa-scan-in-san-diego-ca" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Fitnescity — DEXA Scan in San Diego, CA (pricing & UC San Diego site)</a></li>
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
          description="Get our San Diego DEXA price comparison plus tips for reading your scan and tracking real progress."
          source="guide_dexa_scan_cost_san_diego"
        />
      </div>

      <Footer />
    </main>
  );
}
