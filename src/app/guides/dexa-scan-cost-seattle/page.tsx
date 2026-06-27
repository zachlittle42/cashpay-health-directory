import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'DEXA Scan Cost Seattle: 2026 Prices & Clinics' },
  alternates: { canonical: 'https://vitalityscout.com/guides/dexa-scan-cost-seattle' },
  description: 'What a body-composition DEXA scan costs in Seattle in 2026 — from $39 BodySpec scans to $195 bookings. Real clinics, the price spread, and how to save.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price answer ends with the verify-with-
// provider hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a DEXA scan cost in Seattle?',
    answer:
      'A single body-composition DEXA scan in Seattle ranges from about $39 (BodySpec, South Lake Union and mobile vans) to roughly $195 (Fitnescity marketplace booking in Burien). Fixed studios sit in between — DexaFit in Queen Anne is $150, Nomad Fit Lab is $59.95 one-time, and Seattle Performance Medicine runs $40-150 depending on what is bundled. Multi-scan packages lower the per-scan price; Nomad Fit Lab is about $50 per scan in a 3-pack and Fitnescity drops to $170 per scan in a 4-pack. These are advertised prices that change; confirm current pricing directly with the clinic.',
  },
  {
    question: 'Where is the cheapest DEXA scan in Seattle?',
    answer:
      'On a per-scan basis, BodySpec advertises the lowest entry price in Seattle at $39, with a fixed South Lake Union storefront plus mobile vans across the metro and no doctor referral required. Nomad Fit Lab is the next cheapest at $59.95 for a one-time scan, dropping to about $50 per scan in a 3-pack or $39.95 a month on its annual plan. Cheapest is not always best — also weigh location, equipment, and whether you want add-on testing. Verify current pricing with each provider before booking.',
  },
  {
    question: 'Do I need a prescription for a DEXA scan in Washington?',
    answer:
      'It depends on the provider and the scan type. Direct-to-consumer wellness providers like BodySpec offer whole-body, non-diagnostic body-composition scans with no doctor referral required. Some marketplace bookings handle the paperwork for you — Fitnescity notes a physician order is included when needed. A diagnostic bone-density DEXA billed to insurance generally still requires a doctor order. Confirm the requirement with the specific clinic, because it varies by facility and by whether the scan is wellness or diagnostic.',
  },
  {
    question: 'Is a DEXA scan covered by insurance in Seattle?',
    answer:
      'A DEXA scan ordered for bone-density screening can be covered — Medicare Part B covers a bone-mass measurement once every 24 months for people who qualify, and many commercial plans cover osteoporosis screening. A DEXA scan for body composition (body fat and lean mass) is generally considered elective and paid out of pocket. The cash prices on this page are body-composition scans, and several Seattle providers note they are HSA/FSA eligible. Confirm coverage with your insurer and the clinic.',
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

// Real, pre-verified Seattle DEXA clinics (source: src/data/dexa-clinics-washington.ts,
// lastVerified 2026-06-11; prices independently re-checked against each clinic
// site June 2026). Prices are advertised estimates to confirm with the provider.
const SEATTLE_CLINICS = [
  {
    name: 'BodySpec',
    neighborhood: 'South Lake Union — 2300 7th Ave (+ Bellevue + mobile vans)',
    price: 'From $39/scan',
    addOns: 'DEXA only; multi-scan packages and memberships available',
    note: 'The lowest-cost DEXA in Seattle. Fixed South Lake Union storefront plus a Bellevue location and mobile vans that pop up at gyms across the city. No doctor referral required; HSA/FSA eligible.',
    website: 'https://www.bodyspec.com/dexa-scan-seattle',
  },
  {
    name: 'Nomad Fit Lab',
    neighborhood: 'Mobile — Seattle / King County',
    price: '$59.95/scan',
    addOns: '3-pack $149.95 (~$50/scan); annual plan $39.95/mo with rollover scans',
    note: 'Independent mobile DEXA operator bringing the scanner to partner gyms and pop-ups rather than a fixed studio. Full-body scan in under 15 minutes; reports body fat, lean mass, and bone mineral density with results emailed in minutes.',
    website: 'https://www.nomadfitlab.com/seattle-dexa-scans/',
  },
  {
    name: 'Seattle Performance Medicine',
    neighborhood: 'Shoreline — 19930 Ballinger Way NE',
    price: '$40-150/scan',
    addOns: 'VO2max and RMR testing; self-book via the SPM app',
    note: 'Independent physician-led performance-medicine clinic (part of the Cooper Center for Metabolism) just north of Seattle, opening its physiology lab to the public. Self-schedule DEXA, VO2max, or RMR through the SPM app without being an existing patient.',
    website: 'https://coopermetabolic.com/seattle-performance-medicine/',
  },
  {
    name: 'DexaFit Seattle',
    neighborhood: 'Queen Anne — 111 W John St (+ Renton)',
    price: '$150/scan',
    addOns: 'VO2max, RMR, Proteus 3D power, grip-strength; AI-enhanced reporting',
    note: 'The DexaFit franchise for the Seattle area, running a research-grade stationary DEXA in lower Queen Anne with a second DEXA-only site in Renton. Layers AI-enhanced reporting plus a full performance-testing suite on top of body composition.',
    website: 'https://www.seattle.dexafit.com/dexa-scan',
  },
  {
    name: 'Fitnescity',
    neighborhood: 'Burien — 122 SW 156th St (+ Bellevue)',
    price: '$170-195/scan',
    addOns: '2-pack $370; 3-pack $540; 4-pack $680 ($170/scan); VO2max, RMR, BodPod, calcium score',
    note: 'National testing marketplace booking cash-pay DEXA at vetted partner facilities, with its Seattle-area DEXA site in Burien and additional Bellevue testing. Handles the physician order when one is needed and returns an online results dashboard.',
    website: 'https://www.fitnescity.com/dexa-scan-in-seattle-wa',
  },
];

export default function DexaScanCostSeattle() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'DEXA Scan Cost in Seattle (2026)',
    description:
      'A 2026 price guide to DEXA body-composition scans in Seattle — what they cost, where to get one, what affects the price, and how Seattle pricing compares.',
    url: 'https://vitalityscout.com/guides/dexa-scan-cost-seattle',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-seattle#faq' },
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
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan Seattle pricing', url: 'https://www.bodyspec.com/dexa-scan-seattle' },
      { '@type': 'CreativeWork', name: 'Nomad Fit Lab — Seattle DEXA scans & pricing', url: 'https://www.nomadfitlab.com/seattle-dexa-scans/' },
      { '@type': 'CreativeWork', name: 'DexaFit Seattle — DEXA scan pricing', url: 'https://www.seattle.dexafit.com/dexa-scan' },
      { '@type': 'CreativeWork', name: 'Fitnescity — DEXA scan in Seattle, WA pricing', url: 'https://www.fitnescity.com/dexa-scan-in-seattle-wa' },
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan Without a Referral: How It Works', url: 'https://www.bodyspec.com/blog/post/dexa_scan_without_a_referral_how_it_works' },
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan Radiation: How Much Is It', url: 'https://www.bodyspec.com/blog/post/dexa_scan_radiation_how_much_is_it_and_is_it_safe' },
      { '@type': 'CreativeWork', name: 'UCSF Radiology — Why DXA/DEXA beats BMI', url: 'https://radiology.ucsf.edu/blog/dxadexa-beats-bmi-using-x-ray-exam-measure-body-composition-fat-loss' },
      { '@type': 'CreativeWork', name: 'Medicare — Bone mass measurements coverage', url: 'https://www.medicare.gov/coverage/bone-mass-measurements' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-seattle#faq', url: 'https://vitalityscout.com/guides/dexa-scan-cost-seattle' };

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
              Seattle Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            DEXA Scan Cost in Seattle
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What a body-composition DEXA scan actually costs in Seattle in 2026, where to
            get one, and how to read the price differences between mobile vans, studios, and
            marketplace bookings.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A body-composition DEXA scan in Seattle costs roughly{' '}
              <strong>$39 to $195</strong>, with most options between{' '}
              <strong>$60 and $150</strong>. The cheapest is BodySpec at $39 in South Lake
              Union and on mobile vans; Nomad Fit Lab runs $59.95; DexaFit in Queen Anne is
              $150; the Fitnescity marketplace reaches $195 in Burien. Packages and memberships
              lower the per-scan price. These are advertised estimates to confirm with the
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
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Seattle DEXA Scan Price Snapshot (2026)</h2>

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
              {SEATTLE_CLINICS.map((c, i) => (
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
          <Link href="/dexa-scans/washington/seattle" className="text-blue-600 hover:underline">
            Seattle DEXA clinic directory
          </Link>.
        </p>
      </section>

      {/* What drives the price */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Drives the Price Difference</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              The Seattle range is wide — roughly a 5x spread from the cheapest BodySpec scan to
              the most expensive marketplace booking — for a few concrete reasons:
            </p>
            <ul>
              <li>
                <strong>Mobile vs fixed location.</strong> BodySpec and Nomad Fit Lab run mobile
                vans and gym pop-ups rather than a leased storefront, which keeps the entry price
                near $40-60. A fixed Queen Anne studio like DexaFit carries rent and staffing that
                show up in a $150 scan.
              </li>
              <li>
                <strong>Bundled testing.</strong> Seattle Performance Medicine, DexaFit, and
                Fitnescity layer on VO2max, resting metabolic rate (RMR), Proteus 3D power, or
                calcium-score testing. A standalone DEXA costs less than a metabolic bundle.
              </li>
              <li>
                <strong>Equipment, coaching, and reporting.</strong> Seattle Performance Medicine
                is staffed by an exercise physiologist for follow-up; DexaFit adds AI-enhanced
                reporting. An in-person walkthrough prices above a no-frills scan-and-report.
              </li>
              <li>
                <strong>Packages and memberships.</strong> Per-scan cost drops sharply with volume —
                Nomad Fit Lab&apos;s 3-pack is $149.95 (about $50 a scan) and its annual plan is
                $39.95 a month, while Fitnescity&apos;s 4-pack reaches $170 per scan. If you plan to
                track over time, package math usually wins.
              </li>
              <li>
                <strong>Who handles the paperwork.</strong> Most Seattle wellness scans need no
                referral, but a marketplace like Fitnescity includes a physician order when one is
                needed, which is part of what its higher price covers.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Clinic cards */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Get a DEXA Scan in Seattle</h2>
        <p className="text-gray-600 mb-6">
          Five real, currently operating Seattle-area DEXA providers, from cheapest to most premium.
          Each listing was verified against the clinic&apos;s own site in June 2026.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {SEATTLE_CLINICS.map((c) => (
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

      {/* How Seattle compares */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Seattle Pricing Compares</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Seattle body-composition DEXA pricing tracks the national picture and actually sits at
              the friendly end of it. National averages run roughly <strong>$40-$150</strong> per
              scan: BodySpec sits at the bottom nationwide ($45-$50 typical) and DexaFit studios at
              $119-$179. In Seattle the same chains show similar or lower numbers — BodySpec at $39
              and DexaFit at $150 — and an independent mobile option, Nomad Fit Lab, undercuts most
              fixed studios at $59.95.
            </p>
            <p>
              The practical takeaway: a Seattleite can comfortably get a sub-$60 scan without a
              referral, because two mobile operators (BodySpec and Nomad Fit Lab) compete on price
              across the metro. The premium experience — bundled metabolic testing, a marketplace
              booking that handles the physician order — costs more, but the budget floor here is
              genuinely low.
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
              prices in this guide are body-composition scans, and several Seattle providers note
              they are HSA/FSA eligible.
            </p>
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose a Seattle DEXA Clinic</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for cost</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>BodySpec</strong> from $39 in South Lake Union or on a mobile van — quick, no-frills, no referral</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Nomad Fit Lab</strong> at $59.95, or about $50 a scan in a 3-pack for repeat tracking</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for a fuller picture</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Seattle Performance Medicine</strong> for physician-led DEXA plus clinical VO2max and RMR</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>DexaFit / Fitnescity</strong> for DEXA bundled with 3D power, RMR, or BodPod testing</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mt-8">
            <p>Before you book, confirm a few practical points with the clinic:</p>
            <ul>
              <li>Do you need a referral, or does the provider handle the physician order for you?</li>
              <li>Is the price for the scan only, or does it include a results consultation?</li>
              <li>Will you see the same machine each visit? (Switching devices reduces tracking accuracy.)</li>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Find a DEXA Scan in Seattle</h3>
          <p className="text-gray-600 mb-6">
            Compare every verified Seattle DEXA provider — prices, neighborhoods, and add-on testing.
          </p>
          <Link
            href="/dexa-scans/washington/seattle"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            View Seattle DEXA Clinics →
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
                <div className="text-sm text-gray-600">LA prices by provider and how to save</div>
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
            <li>• <a href="https://www.bodyspec.com/dexa-scan-seattle" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — DEXA Scan Seattle (pricing)</a></li>
            <li>• <a href="https://www.nomadfitlab.com/seattle-dexa-scans/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Nomad Fit Lab — Seattle DEXA scans &amp; pricing</a></li>
            <li>• <a href="https://www.seattle.dexafit.com/dexa-scan" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DexaFit Seattle — DEXA scan pricing</a></li>
            <li>• <a href="https://www.fitnescity.com/dexa-scan-in-seattle-wa" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Fitnescity — DEXA scan in Seattle, WA (pricing)</a></li>
            <li>• <a href="https://www.bodyspec.com/blog/post/dexa_scan_without_a_referral_how_it_works" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — DEXA Scan Without a Referral: How It Works</a></li>
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
          description="Get our Seattle DEXA price comparison plus tips for reading your scan and tracking real progress."
          source="guide_dexa_scan_cost_seattle"
        />
      </div>

      </SidebarShell>
      <Footer />
    </main>
  );
}
