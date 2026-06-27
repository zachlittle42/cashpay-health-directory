import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'DEXA Scan Cost Washington, DC: 2026 Price Guide' },
  alternates: { canonical: 'https://vitalityscout.com/guides/dexa-scan-cost-washington-dc' },
  description: 'What a body-composition DEXA scan costs in Washington, DC in 2026 — $150-$255, the physician-order rule, real DC clinics, and how to save.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price answer ends with the verify-with-
// provider hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a DEXA scan cost in Washington, DC?',
    answer:
      'A single body-composition DEXA scan in Washington, DC runs roughly $150 to $255. Composition ID in Shaw is the lowest fixed-studio price at $150, GWU’s university exercise lab charges $200, and the Fitnescity marketplace ranges $180-$255 depending on the partner facility. BodySpec’s $39.95 mobile vans are not live in DC yet — the company is taking a waitlist. These are advertised prices that change; confirm current pricing directly with the clinic.',
  },
  {
    question: 'Do I need a doctor’s order for a DEXA scan in DC?',
    answer:
      'Often, yes — and this is more visible in DC than in many markets. Hospital and bone-density DEXA providers in the DC area generally require a physician’s prescription. For a cash-pay body-composition scan, the dedicated studios (Composition ID, GWU) book you directly, and the Fitnescity marketplace states it will facilitate the physician order “when needed.” If you have known cardiovascular issues, GWU asks for physician consent before testing. Confirm the requirement with the specific clinic when you book.',
  },
  {
    question: 'Where is the cheapest body-composition DEXA scan in DC?',
    answer:
      'Among fixed DC studios, Composition ID in Shaw is the lowest at $150 for a single scan, with discounts on multi-scan bundles. GWU’s lab is $200 (with military, first-responder, and student discounts). The lowest theoretical price — BodySpec’s $39.95 mobile van — is not yet available in DC; they are running a waitlist. Cheapest is not always best; also weigh location, equipment, and whether you want bundled testing. Verify current pricing with each provider before booking.',
  },
  {
    question: 'Is a body-composition DEXA scan covered by insurance in DC?',
    answer:
      'A DEXA scan ordered for bone-density screening can be covered — Medicare Part B covers a bone-mass measurement once every 24 months for people who qualify, and many commercial plans cover osteoporosis screening. A DEXA scan for body composition (body fat and lean mass) is generally considered elective and paid out of pocket. The DC cash prices on this page are body-composition scans. Confirm coverage with your insurer and the clinic.',
  },
  {
    question: 'How much radiation is in a body-composition DEXA scan?',
    answer:
      'A full-body composition DEXA scan delivers roughly 4-5 microsieverts (µSv) of radiation, per BodySpec’s published figures; GWU describes its DXA dose as less than 1% of a traditional chest X-ray. For context, the U.S. average background dose is about 8-10 µSv per day. The dose is low, but it is still ionizing radiation — discuss frequency with a clinician if you are pregnant or scan often. This is information, not medical advice.',
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

// Real, pre-verified Washington DC DEXA clinics (source:
// src/data/dexa-clinics-washington-dc.ts, lastVerified 2026-06-11; prices
// independently re-checked against each clinic site June 2026). Prices are
// advertised estimates to confirm with the provider.
const DC_CLINICS = [
  {
    name: 'Composition ID',
    neighborhood: 'Shaw — 760 N St NW',
    price: '$150/scan',
    addOns: 'Bundle discounts; RMR, VO2 max, nutrition coaching; DMV "Scan Van"',
    note: 'Dedicated body-composition studio in Shaw, billed as DC’s first exercise and sports-performance testing lab. Pairs DEXA with RMR, VO2 max, and nutrition coaching, and also runs a mobile "Scan Van" across the DMV.',
    website: 'https://www.compositionid.com/locations/washington-dc/services/dexa-scan/',
  },
  {
    name: 'Fitnescity',
    neighborhood: 'Multiple DC-area partner facilities',
    price: '$180-255/scan',
    addOns: 'Coordinates the required physician order; RMR, VO2 max, Bod Pod',
    note: 'A booking marketplace that places cash-pay DEXA scans at fixed partner facilities (hospitals, diagnostic and academic centers) — never mobile units — and coordinates the physician order DC requires, then delivers results via dashboard plus a follow-up call.',
    website: 'https://www.fitnescity.com/dexa-scan-in-washington-dc',
  },
  {
    name: 'GWU Metabolism & Exercise Testing Lab',
    neighborhood: 'Foggy Bottom — 950 New Hampshire Ave NW',
    price: '$200/scan',
    addOns: 'DXA+RMR package $240; VO2 max $165; RMR $100; InBody $100',
    note: 'A university exercise-physiology lab inside GW’s Milken Institute School of Public Health that opens research-grade testing to the public. Cash-pay only, no insurance; military, first-responder, and student discounts.',
    website: 'https://bodycomposition.gwu.edu/tests-services',
  },
  {
    name: 'BodySpec',
    neighborhood: 'Mobile vans + pop-ups (waitlist / pre-launch in DC)',
    price: 'From $39.95/scan',
    addOns: 'DEXA + RMR; no added fees',
    note: 'A national mobile-DEXA chain (under-15-minute scans) that is the cheapest option nationally but is not yet live in DC — it is expanding into the metro via a waitlist. Listed here for price context; not currently bookable in DC.',
    website: 'https://www.bodyspec.com/dexa-scan-washington-dc',
  },
];

export default function DexaScanCostWashingtonDc() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'DEXA Scan Cost in Washington, DC (2026)',
    description:
      'A 2026 price guide to body-composition DEXA scans in Washington, DC — what they cost, the physician-order rule, where to get one, what affects the price, and how DC pricing compares.',
    url: 'https://vitalityscout.com/guides/dexa-scan-cost-washington-dc',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-washington-dc#faq' },
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
      { '@type': 'CreativeWork', name: 'Composition ID — DEXA Scan Washington DC pricing', url: 'https://www.compositionid.com/locations/washington-dc/services/dexa-scan/' },
      { '@type': 'CreativeWork', name: 'Composition ID — Top DEXA Scan Providers in the Washington DC Area', url: 'https://www.compositionid.com/blog/dexa/blog-dexa-top-dexa-scan-providers-washington-dc/' },
      { '@type': 'CreativeWork', name: 'GWU Metabolism & Exercise Testing Laboratory — Tests & Services', url: 'https://bodycomposition.gwu.edu/tests-services' },
      { '@type': 'CreativeWork', name: 'Fitnescity — DEXA Body Composition Scan in Washington, DC', url: 'https://www.fitnescity.com/dexa-scan-in-washington-dc' },
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan Washington DC (pricing & waitlist)', url: 'https://www.bodyspec.com/dexa-scan-washington-dc' },
      { '@type': 'CreativeWork', name: 'UCSF Radiology — Why DXA/DEXA beats BMI', url: 'https://radiology.ucsf.edu/blog/dxadexa-beats-bmi-using-x-ray-exam-measure-body-composition-fat-loss' },
      { '@type': 'CreativeWork', name: 'Medicare — Bone mass measurements coverage', url: 'https://www.medicare.gov/coverage/bone-mass-measurements' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-washington-dc#faq', url: 'https://vitalityscout.com/guides/dexa-scan-cost-washington-dc' };

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
              Washington, DC Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            DEXA Scan Cost in Washington, DC
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What a body-composition DEXA scan actually costs in DC in 2026, the
            physician-order rule that catches people out, and where to get one.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A body-composition DEXA scan in Washington, DC costs roughly{' '}
              <strong>$150 to $255</strong>. The lowest fixed-studio price is{' '}
              <strong>Composition ID</strong> at $150 in Shaw; <strong>GWU&apos;s</strong>{' '}
              university lab is $200; the <strong>Fitnescity</strong> marketplace runs
              $180-$255. BodySpec&apos;s $39.95 mobile vans are not live in DC yet
              (waitlist only), so DC&apos;s real floor is higher than van markets.
              These are advertised estimates to confirm with the provider. This is
              information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 9 min read
          </p>
        </div>
      </section>

      {/* Quick price snapshot */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">DC DEXA Scan Price Snapshot (2026)</h2>

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
              {DC_CLINICS.map((c, i) => (
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
          <Link href="/dexa-scans/washington-dc/washington" className="text-blue-600 hover:underline">
            Washington, DC DEXA clinic directory
          </Link>.
        </p>
      </section>

      {/* DC-specific: the physician-order rule */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The DC Quirk: You May Need a Physician&apos;s Order</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              The detail that surprises DC scan-seekers more than the price is the{' '}
              <strong>physician-order requirement</strong>. In the District, hospital and
              bone-density DEXA providers generally require a doctor&apos;s prescription before
              they will scan you. That is why the Fitnescity marketplace explicitly states it will
              &ldquo;facilitate the physician order&rdquo; when one is needed for a DC booking — it
              is solving a real local friction, not an upsell.
            </p>
            <p>
              The dedicated body-composition studios sidestep most of this. Composition ID and
              GWU&apos;s exercise lab book you directly for a cash-pay body-composition scan. GWU
              does ask for physician consent if you have known cardiovascular issues. The practical
              rule: if you book a hospital or imaging-center DEXA, expect to need a referral; if you
              book a dedicated body-comp studio, you usually don&apos;t — but confirm when you call.
            </p>
          </div>
        </div>
      </section>

      {/* What drives the price */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Drives the Price Difference</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              The DC range — roughly $150 to $255 for a body-composition scan — is narrower at the
              bottom than markets like NYC or LA, for one big reason: the cheap mobile-van option
              isn&apos;t live here yet. A few concrete factors set the spread:
            </p>
            <ul>
              <li>
                <strong>No budget van floor (yet).</strong> BodySpec, which anchors the under-$50
                tier in other cities, is still pre-launch in DC and running a waitlist. Until it
                arrives, DC&apos;s realistic floor is Composition ID at $150 — not the $40 you see
                advertised nationally.
              </li>
              <li>
                <strong>Dedicated studio vs marketplace vs university lab.</strong> Composition ID
                runs its own Shaw studio at $150. GWU&apos;s research lab charges $200 for
                research-grade hardware. Fitnescity is a marketplace that routes you to a partner
                facility, so its $180-$255 reflects the host site, not a single price.
              </li>
              <li>
                <strong>Bundled testing.</strong> Composition ID, GWU, and Fitnescity all add VO2
                max, resting metabolic rate (RMR), or other testing. GWU&apos;s DXA+RMR package is
                $240; a standalone DEXA costs less than a metabolic bundle.
              </li>
              <li>
                <strong>The physician-order coordination.</strong> Where a referral is required,
                Fitnescity folds the order facilitation into its service — convenience that is part
                of why a marketplace booking can sit at the top of the range.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Clinic cards */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Get a DEXA Scan in DC</h2>
        <p className="text-gray-600 mb-6">
          Four real DC-area DEXA providers, from the lowest currently-bookable price to the
          national budget option that is still pre-launch here. Each listing was verified against
          the clinic&apos;s own site in June 2026.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {DC_CLINICS.map((c) => (
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

      {/* How DC compares */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How DC Pricing Compares</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              DC body-composition DEXA pricing sits in the upper-middle of the national picture, but
              for a different reason than New York. National body-comp scans run roughly{' '}
              <strong>$40-$255</strong>: van services like BodySpec anchor the bottom ($40-$50) and
              full studios run $99-$255. In DC, the bottom of that range is simply missing for now —
              BodySpec hasn&apos;t launched — so the entry point is Composition ID&apos;s $150 rather
              than a sub-$100 walk-in.
            </p>
            <p>
              The practical takeaway: a DC resident can still get a high-quality scan in the
              $150-$200 zone, and the university-lab option (GWU) is a genuinely DC-specific
              advantage you won&apos;t find in most cities. But if you want the rock-bottom van
              price, you may need to join BodySpec&apos;s waitlist or cross into Virginia, where
              lower-cost options exist.
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
            figures; GWU describes its DXA dose as less than 1% of a traditional chest X-ray. For
            perspective:
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose a DC DEXA Clinic</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for cost</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Composition ID</strong> at $150 in Shaw — lowest currently-bookable DC studio, with bundle discounts for repeat tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>BodySpec</strong> from $39.95 if you can wait — join the DC waitlist for the cheapest option once it launches</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for a fuller picture</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>GWU Metabolism Lab</strong> for research-grade DXA plus RMR, VO2 max, and InBody under one roof</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Fitnescity</strong> if you need the physician order handled — it coordinates the referral and the booking together</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mt-8">
            <p>Before you book, confirm a few practical points with the clinic:</p>
            <ul>
              <li>Does this provider require a physician&apos;s order, or can I book directly?</li>
              <li>Is the price for the scan only, or does it include a results consultation?</li>
              <li>Will you see the same machine each visit? (Switching devices reduces tracking accuracy.)</li>
              <li>For repeat tracking, does a package or bundle beat the single-scan price?</li>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Find a DEXA Scan in Washington, DC</h3>
          <p className="text-gray-600 mb-6">
            Compare every verified DC DEXA provider — prices, neighborhoods, and add-on testing.
          </p>
          <Link
            href="/dexa-scans/washington-dc/washington"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            View Washington, DC DEXA Clinics →
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
                <div className="text-sm text-gray-600">Accuracy, cost, and what each test measures</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/is-dexa-scan-hsa-fsa-eligible" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💳</span>
              <div>
                <div className="font-bold text-gray-900">Is a DEXA Scan HSA/FSA Eligible?</div>
                <div className="text-sm text-gray-600">Rules, costs, and Letters of Medical Necessity</div>
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
            <li>• <a href="https://www.compositionid.com/locations/washington-dc/services/dexa-scan/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Composition ID — DEXA Scan Washington DC (pricing)</a></li>
            <li>• <a href="https://www.compositionid.com/blog/dexa/blog-dexa-top-dexa-scan-providers-washington-dc/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Composition ID — Top DEXA Providers in the DC Area</a></li>
            <li>• <a href="https://bodycomposition.gwu.edu/tests-services" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">GWU Metabolism & Exercise Testing Lab — Tests & Services</a></li>
            <li>• <a href="https://www.fitnescity.com/dexa-scan-in-washington-dc" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Fitnescity — DEXA Body Composition Scan in Washington, DC</a></li>
            <li>• <a href="https://www.bodyspec.com/dexa-scan-washington-dc" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — DEXA Scan Washington DC (pricing & waitlist)</a></li>
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
          description="Get our Washington, DC DEXA price comparison plus tips for reading your scan and tracking real progress."
          source="guide_dexa_scan_cost_washington_dc"
        />
      </div>

      </SidebarShell>
      <Footer />
    </main>
  );
}
