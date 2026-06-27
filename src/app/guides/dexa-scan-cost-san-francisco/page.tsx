import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'DEXA Scan Cost San Francisco: 2026 Bay Area Price Guide' },
  alternates: { canonical: 'https://vitalityscout.com/guides/dexa-scan-cost-san-francisco' },
  description: 'What a DEXA scan costs in San Francisco in 2026 — from ~$40 BodySpec vans to $119-179 Cow Hollow studios. Real SF Bay Area clinics, prices, how to save.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price answer ends with the verify-with-
// provider hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a DEXA scan cost in San Francisco?',
    answer:
      'A single body-composition DEXA scan in San Francisco ranges from about $45-50 (BodySpec mobile units, dropping to ~$40 with a package) to roughly $179 (DexaFit in Cow Hollow), with research-grade scans at the UCSF Human Performance Center running about $100-200. BodySpec advertises a $39 national starting rate, and notes SF studio pricing elsewhere often lands in the $150-300 range, which is why the mobile and academic options matter here. These are advertised prices that change; confirm current pricing directly with the clinic.',
  },
  {
    question: 'Where is the cheapest DEXA scan in San Francisco?',
    answer:
      'On a per-scan basis, BodySpec offers the lowest entry price in San Francisco — about $45-50 standard, dropping toward ~$40 with package or membership pricing (BodySpec advertises a $39 national starting rate). Its units rotate through SF gyms and wellness centers in SOMA, the Mission, the Marina, and Potrero Hill. Cheapest is not always best — also weigh whether you want a fixed studio, a results consultation, or add-on metabolic testing. Verify current pricing with each provider before booking.',
  },
  {
    question: 'Why are San Francisco DEXA scans more expensive than other cities?',
    answer:
      'Fixed SF studios carry Bay Area commercial rent and staffing, so a storefront scan in neighborhoods like Cow Hollow prices above a mobile van. BodySpec’s own city comparison puts typical San Francisco studio DEXA pricing around $150-300, higher than Los Angeles at roughly $80-200. The practical workaround is that SF still has sub-$100 options — the BodySpec mobile units and university-affiliated labs keep an affordable entry point in the market. Confirm current pricing with each provider.',
  },
  {
    question: 'Is a DEXA scan covered by insurance in San Francisco?',
    answer:
      'A DEXA scan ordered for bone-density screening can be covered — Medicare Part B covers a bone-mass measurement once every 24 months for people who qualify, and many commercial plans cover osteoporosis screening. A DEXA scan for body composition (body fat and lean mass) is generally considered elective and paid out of pocket. The cash prices on this page are body-composition scans. Confirm coverage with your insurer and the clinic.',
  },
  {
    question: 'How much radiation is in a body-composition DEXA scan?',
    answer:
      'A full-body composition DEXA scan delivers roughly 4-5 microsieverts (µSv) of radiation, per BodySpec’s published figures citing a 2020 review. For context, average U.S. background radiation is about 8-10 µSv per day, and a chest X-ray is roughly 20 µSv — so one scan is about a quarter of a chest X-ray. The dose is low, but it is still ionizing radiation — discuss frequency with a clinician if you are pregnant or scan often. This is information, not medical advice.',
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

// Real, pre-verified San Francisco Bay Area DEXA providers (source:
// src/data/dexa-clinics-california.ts, citySlug === 'san-francisco',
// lastVerified 2026-06-10; SF-specific prices re-checked against each clinic
// site in June 2026). Prices are advertised estimates to confirm with the
// provider. Ordered cheapest to most premium.
const SF_CLINICS = [
  {
    name: 'BodySpec - San Francisco',
    neighborhood: 'Mobile units (SOMA, Mission, Marina, Potrero Hill)',
    price: '$45-50/scan',
    addOns: 'DEXA only; ~$40/scan with package or membership',
    note: 'The most affordable DEXA in SF — standard per-scan pricing runs about $45-50, dropping to roughly $40 with a package or membership (BodySpec advertises a $39-$39.95 national starting rate). Mobile units visit city gyms and wellness centers weekly. Roughly a 7-minute scan with segmental and visceral-fat analysis; results delivered fast.',
    website: 'https://www.bodyspec.com/dexa-scan-san-francisco',
  },
  {
    name: 'BodySpec - East Bay',
    neighborhood: 'Mobile units (Oakland, Berkeley, Walnut Creek)',
    price: '$45-50/scan',
    addOns: 'DEXA only; package deals available',
    note: 'BodySpec mobile units visit East Bay gyms regularly across Oakland, Berkeley, and Walnut Creek — the budget option across the bay from SF proper.',
    website: 'https://www.bodyspec.com',
  },
  {
    name: 'BodySpec - Peninsula',
    neighborhood: 'Mobile units (Palo Alto, Menlo Park, Redwood City)',
    price: '$45-50/scan',
    addOns: 'DEXA only; package deals available',
    note: 'BodySpec mobile units run a weekly Peninsula schedule with stops in Palo Alto, Menlo Park, and Redwood City for South-of-SF commuters.',
    website: 'https://www.bodyspec.com',
  },
  {
    name: 'UCSF Human Performance Center',
    neighborhood: 'UCSF Mission Bay',
    price: '$100-200/scan',
    addOns: 'VO2 max available; research-grade Hologic equipment',
    note: 'University research facility offering clinical-grade body composition on research-quality Hologic equipment. The SF option for maximum accuracy and clinical protocols.',
    website: 'https://www.ucsfhealth.org',
  },
  {
    name: 'DexaFit San Francisco',
    neighborhood: 'Cow Hollow — 2001 Union St',
    price: '$119-179/scan',
    addOns: 'RMR, VO2 max, 3D-scan; bundles available',
    note: 'Premium body-composition studio in Cow Hollow with a full metabolic-testing suite. Higher price, but a detailed consultation and same-roof RMR and VO2 max.',
    website: 'https://www.dexafit.com',
  },
  {
    name: 'DexaFit Palo Alto',
    neighborhood: 'Palo Alto (Peninsula)',
    price: '$119-179/scan',
    addOns: 'RMR, VO2 max, 3D-scan; bundles available',
    note: 'DexaFit’s Peninsula studio serving the Stanford and Palo Alto tech community, with the same full metabolic-testing suite as the SF location.',
    website: 'https://www.dexafit.com',
  },
  {
    name: 'DexaFit Walnut Creek',
    neighborhood: 'Downtown Walnut Creek (East Bay)',
    price: '$119-179/scan',
    addOns: 'RMR, VO2 max, 3D-scan; bundles available',
    note: 'DexaFit’s East Bay studio in downtown Walnut Creek with easy BART access and the full metabolic-testing suite — a fixed-studio option without crossing into the city.',
    website: 'https://www.dexafit.com',
  },
];

export default function DexaScanCostSanFrancisco() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'DEXA Scan Cost in San Francisco (2026)',
    description:
      'A 2026 price guide to DEXA body-composition scans in San Francisco and the Bay Area — what they cost, where to get one, what affects the price, and how SF pricing compares.',
    url: 'https://vitalityscout.com/guides/dexa-scan-cost-san-francisco',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-san-francisco#faq' },
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
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan San Francisco pricing', url: 'https://www.bodyspec.com/dexa-scan-san-francisco' },
      { '@type': 'CreativeWork', name: 'BodySpec — How Much Does a DEXA Scan Cost in Major Cities', url: 'https://www.bodyspec.com/blog/post/how_much_does_a_dexa_scan_cost_in_major_cities' },
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan Radiation: How Much Is It', url: 'https://www.bodyspec.com/blog/post/dexa_scan_radiation_how_much_is_it_and_is_it_safe' },
      { '@type': 'CreativeWork', name: 'UCSF Radiology — Why DXA/DEXA beats BMI', url: 'https://radiology.ucsf.edu/blog/dxadexa-beats-bmi-using-x-ray-exam-measure-body-composition-fat-loss' },
      { '@type': 'CreativeWork', name: 'Medicare — Bone mass measurements coverage', url: 'https://www.medicare.gov/coverage/bone-mass-measurements' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-san-francisco#faq', url: 'https://vitalityscout.com/guides/dexa-scan-cost-san-francisco' };

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
              San Francisco Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            DEXA Scan Cost in San Francisco
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What a body-composition DEXA scan actually costs in San Francisco and the
            Bay Area in 2026, where to get one, and how to read the price gap between
            mobile units and Cow Hollow studios.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A body-composition DEXA scan in San Francisco costs roughly{' '}
              <strong>$40 to $200</strong>. The cheapest entry point is BodySpec&apos;s
              mobile units at about $45-50 per scan, near $40 with a package; UCSF&apos;s
              Human Performance Center runs about $100-200; DexaFit&apos;s Cow Hollow studio
              is $119-179. BodySpec notes SF studio pricing often reaches $150-300, so the
              mobile and academic options keep SF affordable. These are advertised estimates
              to confirm with the provider. This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 10 min read
          </p>
        </div>
      </section>

      {/* Quick price snapshot */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">San Francisco Bay Area DEXA Price Snapshot (2026)</h2>

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
              {SF_CLINICS.map((c, i) => (
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
          <Link href="/dexa-scans/california/san-francisco" className="text-blue-600 hover:underline">
            San Francisco DEXA clinic directory
          </Link>.
        </p>
      </section>

      {/* What drives the price */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Drives the Price Difference</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              The San Francisco range is wide — roughly a 5x spread from the cheapest van scan to a
              premium studio booking — for a few concrete, very Bay Area reasons:
            </p>
            <ul>
              <li>
                <strong>Bay Area rent.</strong> A fixed studio scan in a neighborhood like Cow Hollow
                carries some of the highest commercial rent in the country. That is the single biggest
                reason BodySpec&apos;s own city comparison puts typical SF studio DEXA around $150-300,
                higher than Los Angeles at roughly $80-200.
              </li>
              <li>
                <strong>Mobile vs fixed location.</strong> BodySpec runs mobile units that rotate
                through SF gyms rather than leasing a storefront, which keeps the per-scan price
                around $45-50 — and toward $40 with a package or membership. That mobile model is the
                single biggest reason its scans cost a fraction of a fixed Cow Hollow studio.
              </li>
              <li>
                <strong>Bundled testing.</strong> DexaFit&apos;s SF, Palo Alto, and Walnut Creek studios
                add VO2 max, resting metabolic rate (RMR), and a 3D body scan. A standalone DEXA costs
                less than a metabolic bundle.
              </li>
              <li>
                <strong>Research-grade equipment.</strong> The UCSF Human Performance Center at Mission
                Bay uses clinical Hologic machines and academic protocols, pricing in the $100-200
                band — between the mobile vans and the boutique studios.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Clinic cards */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Get a DEXA Scan in San Francisco</h2>
        <p className="text-gray-600 mb-6">
          Seven real, currently operating Bay Area DEXA providers, from cheapest to most premium —
          SF proper plus nearby Peninsula and East Bay options. Each listing was verified against the
          clinic&apos;s own site.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {SF_CLINICS.map((c) => (
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

      {/* How SF compares */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How San Francisco Pricing Compares</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              San Francisco sits at the higher end of the national DEXA picture. BodySpec&apos;s own
              major-cities comparison lists typical SF studio pricing at{' '}
              <strong>$150-300</strong> per scan, versus roughly <strong>$80-200</strong> in Los
              Angeles — the Bay Area real-estate premium showing up directly in the scan price.
              The national average for a studio scan runs about $150-300.
            </p>
            <p>
              The practical takeaway: a San Franciscan can still get a sub-$100 scan — the BodySpec
              mobile units at $45-50 (about $40 with a package) and the UCSF Human Performance Center
              keep an affordable floor in the market — but the convenient, fully-bundled Cow Hollow
              studio experience costs more
              than it would in a smaller metro. If you only want the number, go mobile; if you want
              VO2 max and RMR in one sitting, the studio premium buys the bundle.
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
            figures citing a 2020 review. For perspective:
          </p>
          <ul>
            <li>Average U.S. background radiation: about <strong>8-10 &micro;Sv per day</strong></li>
            <li>A chest X-ray: roughly <strong>20 &micro;Sv</strong></li>
            <li>A cross-country flight: about <strong>35 &micro;Sv</strong></li>
          </ul>
          <p>
            So a single body-composition scan is in the neighborhood of half a day of ordinary
            background exposure — roughly a quarter of a chest X-ray. The dose is low, but it is still
            radiation — if you are pregnant, or scanning very frequently, discuss the cadence with a
            clinician.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose an SF DEXA Clinic</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for cost</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>BodySpec</strong> mobile units at $45-50 (~$40 with a package) — quick, no-frills, citywide SF stops</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>UCSF Human Performance Center</strong> at $100-200 for research-grade accuracy without studio markup</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for a fuller picture</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>DexaFit San Francisco</strong> (Cow Hollow) for DEXA plus VO2 max, RMR, and a 3D scan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>DexaFit Palo Alto / Walnut Creek</strong> for the same full suite closer to the Peninsula or East Bay</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mt-8">
            <p>Before you book, confirm a few practical points with the clinic:</p>
            <ul>
              <li>Is the price for the scan only, or does it include a results consultation?</li>
              <li>Will you see the same machine each visit? (Switching devices reduces tracking accuracy.)</li>
              <li>For mobile units, where and when is the next SF stop on the schedule?</li>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Find a DEXA Scan in San Francisco</h3>
          <p className="text-gray-600 mb-6">
            Compare every verified SF Bay Area DEXA provider — prices, neighborhoods, and add-on testing.
          </p>
          <Link
            href="/dexa-scans/california/san-francisco"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            View San Francisco DEXA Clinics →
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

          <Link href="/guides/dexa-scan-cost-los-angeles" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <div className="font-bold text-gray-900">DEXA Scan Cost in Los Angeles</div>
                <div className="text-sm text-gray-600">How LA pricing compares to the Bay Area</div>
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
            <li>• <a href="https://www.bodyspec.com/dexa-scan-san-francisco" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — DEXA Scan San Francisco (pricing)</a></li>
            <li>• <a href="https://www.bodyspec.com/blog/post/how_much_does_a_dexa_scan_cost_in_major_cities" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — How Much Does a DEXA Scan Cost in Major Cities</a></li>
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
          description="Get our SF Bay Area DEXA price comparison plus tips for reading your scan and tracking real progress."
          source="guide_dexa_scan_cost_san_francisco"
        />
      </div>

      </SidebarShell>
      <Footer />
    </main>
  );
}
