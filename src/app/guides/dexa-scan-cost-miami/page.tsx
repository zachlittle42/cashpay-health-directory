import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'DEXA Scan Cost Miami: 2026 Price Guide & Clinics' },
  alternates: { canonical: 'https://vitalityscout.com/guides/dexa-scan-cost-miami' },
  description: 'What a body-composition DEXA scan costs in Miami in 2026 — from ~$35 BOD POD to $260 Fitnescity. Real clinics, the price spread, and how to save.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price answer ends with the verify-with-
// provider hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a DEXA scan cost in Miami?',
    answer:
      'A single body-composition DEXA scan in Miami generally runs about $100 to $260. Independent clinics like Infinity Sports Institute (Midtown), PURE Executive Health (Coral Gables), and My Health & Wellness Medical Group (Edgewater) sit in the roughly $100-$150 range, while the national Fitnescity network charges $260 for a single Coral Gables scan, dropping to $235 in a 4-scan package. The cheapest body-composition number in the city is actually a BOD POD test at the University of Miami Fitness Laboratory, from about $35 for student-members. These are advertised prices that change; confirm current pricing directly with the clinic.',
  },
  {
    question: 'Why is BodySpec not the cheapest DEXA option in Miami?',
    answer:
      'In cities like New York and Los Angeles, BodySpec mobile vans set the floor at $39.95. In Miami, BodySpec has not launched yet — its own page reads "Convenient and Affordable Miami Dexa Scans Coming Soon!" with a waitlist instead of booking. So Miami has no $39.95 mobile-van entry point today. The budget floor here is the University of Miami Fitness Laboratory BOD POD (from ~$35, but that is air-displacement, not DEXA) and independent clinic DEXA scans starting around $100. Confirm current availability and pricing with each provider.',
  },
  {
    question: 'Where can I get a body-composition DEXA scan in Coral Gables?',
    answer:
      'Coral Gables is the densest cluster for body-composition testing in Miami. PURE Executive Health & Wellness on Salzedo Street offers a six-minute DEXA scan and recommends rescanning every three to six months. The Fitnescity network fulfills its Miami DEXA scans through Coral Gables-area partner facilities at $260 per single scan with a 1:1 MD results call. The University of Miami Fitness Laboratory, also in Coral Gables, runs BOD POD body composition rather than DEXA. Verify current pricing with each clinic before booking.',
  },
  {
    question: 'Is a DEXA scan covered by insurance in Florida?',
    answer:
      'A DEXA scan ordered for bone-density screening can be covered — Medicare Part B covers a bone-mass measurement once every 24 months for people who qualify, and many commercial plans cover osteoporosis screening. A DEXA scan for body composition (body fat and lean mass) is generally considered elective and paid out of pocket. The cash prices on this page are body-composition scans. Confirm coverage with your insurer and the clinic.',
  },
  {
    question: 'How much radiation is in a body-composition DEXA scan?',
    answer:
      'A full-body composition DEXA scan delivers roughly 4-5 microsieverts (µSv) of radiation, per BodySpec’s published figures. For context, the U.S. average background dose is about 8-10 µSv per day, and a chest X-ray is roughly 20 µSv. The dose is low, but it is still ionizing radiation — discuss frequency with a clinician if you are pregnant or scan often. This is information, not medical advice.',
  },
  {
    question: 'What does a DEXA scan actually measure?',
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

// Real, pre-verified Miami body-composition providers (source:
// src/data/dexa-clinics-florida.ts, lastVerified 2026-06-11; prices
// independently re-checked against each clinic site June 2026). Prices are
// advertised estimates to confirm with the provider.
const MIAMI_CLINICS = [
  {
    name: 'University of Miami Fitness Laboratory',
    neighborhood: 'Coral Gables — 1241 Dickinson Dr',
    price: 'From $35/test',
    addOns: 'BOD POD body comp, VO2 max, RMR; student/member/non-member tiers',
    note: 'University exercise-physiology lab open to the public, with transparent tiered pricing. It runs BOD POD (air-displacement) body composition, VO2 max, and RMR rather than DEXA — the budget body-comp option in Miami.',
    website: 'https://wellness.studentaffairs.miami.edu/services-and-spaces/fitness-services/fitness-assessments/index.html',
  },
  {
    name: 'PURE Executive Health & Wellness',
    neighborhood: 'Coral Gables — 4100 Salzedo St, Suite 4',
    price: '$40-150/scan',
    addOns: 'DEXA only; rescan every 3-6 months recommended',
    note: 'Concierge / executive-health practice offering a quick, six-minute DEXA scan that breaks body weight into bone, fat, and lean muscle, framed as a longitudinal tracking metric.',
    website: 'https://purehealthmiami.com/body-composition-scan/',
  },
  {
    name: 'My Health & Wellness Medical Group',
    neighborhood: 'Edgewater / Downtown — 1717 N Bayshore Dr',
    price: '$40-150/scan',
    addOns: 'DEXA; pairs with medical weight loss + hormone therapy',
    note: 'Physician-led wellness group on N Bayshore Dr offering regional DEXA analysis of fat and muscle by body area, with results reviewed about ten minutes after the scan.',
    website: 'https://mhw-medicalgroup.com/services/dexa-body-composition-scan-in-miami/',
  },
  {
    name: 'Infinity Sports Institute',
    neighborhood: 'Midtown / Edgewater — 163 NE 24th St',
    price: '$100-150/scan',
    addOns: 'DEXA, VO2 max, RMR, DARI motion capture; packages valid 12 months',
    note: 'Independent Midtown sport-science lab pairing DEXA (body fat %, lean mass, visceral fat, bone density) with VO2 max, RMR, and DARI motion-capture testing. Geared to athletes wanting gold-standard diagnostics.',
    website: 'https://infinitysi.com/',
  },
  {
    name: 'Fitnescity',
    neighborhood: 'Coral Gables-area partner sites',
    price: '$260/scan',
    addOns: '4-scan pack $235/scan; DEXA + RMR $420; + VO2 max $610',
    note: 'National DEXA / VO2 max / RMR network that fulfills Miami scans through partner facilities, with a physician order and a 1:1 MD results call included. Standardized pricing and an online results dashboard.',
    website: 'https://www.fitnescity.com/dexa-scan-body-composition-in-miami-fl',
  },
];

export default function DexaScanCostMiami() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'DEXA Scan Cost in Miami (2026)',
    description:
      'A 2026 price guide to DEXA body-composition scans in Miami — what they cost, where to get one, what affects the price, and how Miami pricing compares.',
    url: 'https://vitalityscout.com/guides/dexa-scan-cost-miami',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-miami#faq' },
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
      { '@type': 'CreativeWork', name: 'Fitnescity — DEXA Scan Body Composition in Miami, FL (pricing)', url: 'https://www.fitnescity.com/dexa-scan-body-composition-in-miami-fl' },
      { '@type': 'CreativeWork', name: 'Infinity Sports Institute — Miami sport-science lab', url: 'https://infinitysi.com/' },
      { '@type': 'CreativeWork', name: 'PURE Executive Health & Wellness — Body Composition Scan', url: 'https://purehealthmiami.com/body-composition-scan/' },
      { '@type': 'CreativeWork', name: 'University of Miami — Fitness Laboratory assessments & pricing', url: 'https://wellness.studentaffairs.miami.edu/services-and-spaces/fitness-services/fitness-assessments/index.html' },
      { '@type': 'CreativeWork', name: 'BodySpec — Miami DEXA Scans (coming soon / waitlist)', url: 'https://www.bodyspec.com/dexa-scan-miami' },
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan Radiation: How Much Is It', url: 'https://www.bodyspec.com/blog/post/dexa_scan_radiation_how_much_is_it_and_is_it_safe' },
      { '@type': 'CreativeWork', name: 'UCSF Radiology — Why DXA/DEXA beats BMI', url: 'https://radiology.ucsf.edu/blog/dxadexa-beats-bmi-using-x-ray-exam-measure-body-composition-fat-loss' },
      { '@type': 'CreativeWork', name: 'Medicare — Bone mass measurements coverage', url: 'https://www.medicare.gov/coverage/bone-mass-measurements' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-miami#faq', url: 'https://vitalityscout.com/guides/dexa-scan-cost-miami' };

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
              Miami Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            DEXA Scan Cost in Miami
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What a body-composition DEXA scan actually costs in Miami in 2026, where to
            get one, and why the city has no $40 mobile-van scan the way New York and LA do.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A body-composition DEXA scan in Miami costs roughly <strong>$100 to $260</strong>.
              Independent clinics in Coral Gables, Midtown, and Edgewater sit near{' '}
              <strong>$100-$150</strong>; the national Fitnescity network charges <strong>$260</strong>{' '}
              per Coral Gables scan ($235 in a 4-pack). Unlike NYC or LA, Miami has no $39.95 BodySpec
              van yet. The cheapest body-comp number is a University of Miami BOD POD test from ~$35.
              These are advertised estimates to confirm with the provider. This is information, not
              medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 9 min read
          </p>
        </div>
      </section>

      {/* Quick price snapshot */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Miami DEXA Scan Price Snapshot (2026)</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Provider</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Where</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Single Scan</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Add-ons / Packages</th>
              </tr>
            </thead>
            <tbody>
              {MIAMI_CLINICS.map((c, i) => (
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
          Prices are advertised rates checked in June 2026 and change frequently. The University of
          Miami line is a BOD POD test, not DEXA. Confirm current pricing, scan type, location, and
          equipment directly with each clinic before booking. See the full, regularly updated list on
          the{' '}
          <Link href="/dexa-scans/florida/miami" className="text-blue-600 hover:underline">
            Miami DEXA clinic directory
          </Link>.
        </p>
      </section>

      {/* What drives the price */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Drives the Price Difference in Miami</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              Miami&apos;s body-composition market looks different from the national pattern. There is
              no cheap mobile-van floor, the providers cluster in two neighborhoods, and the spread
              between a university lab test and a concierge scan is driven by a few concrete things:
            </p>
            <ul>
              <li>
                <strong>No BodySpec van yet.</strong> In NYC and LA, BodySpec mobile vans set the floor
                at $39.95. In Miami, BodySpec&apos;s own page still reads &ldquo;Miami Dexa Scans Coming
                Soon&rdquo; with a waitlist — so the sub-$50 mobile option that anchors other cities
                does not exist here today. That pushes Miami&apos;s practical DEXA floor up to about
                $100 at an independent clinic.
              </li>
              <li>
                <strong>DEXA vs BOD POD.</strong> The single cheapest body-composition number in Miami
                — from about $35 — is a BOD POD (air-displacement) test at the University of Miami
                Fitness Laboratory, not a DEXA scan. If you specifically want DEXA, you are starting
                around $100, not $35.
              </li>
              <li>
                <strong>Concierge and sport-science positioning.</strong> Several Miami providers sell
                DEXA inside a higher-touch experience. PURE Executive Health is a concierge practice in
                Coral Gables; Infinity Sports Institute is a Midtown sport-science lab bundling VO2 max,
                RMR, and DARI motion capture. That positioning prices above a no-frills scan.
              </li>
              <li>
                <strong>National network vs local clinic.</strong> Fitnescity, the national aggregator,
                charges $260 for a single Coral Gables scan because it includes a physician order and a
                1:1 MD results call. Local clinics like My Health &amp; Wellness Medical Group review
                results in-house about ten minutes after the scan for less.
              </li>
              <li>
                <strong>Packages.</strong> Per-scan cost falls with volume — Fitnescity&apos;s 4-scan
                pack drops to $235 each, and Infinity sells packages valid for 12 months. If you plan to
                track over time, package math usually wins.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Clinic cards */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Get a DEXA Scan in Miami</h2>
        <p className="text-gray-600 mb-6">
          Five real, currently operating Miami body-composition providers, from budget to premium. Each
          listing was verified against the provider&apos;s own site in June 2026. (The University of
          Miami line runs BOD POD, not DEXA.)
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {MIAMI_CLINICS.map((c) => (
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
                Visit provider site →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* How Miami compares */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Miami Pricing Compares</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              National body-composition DEXA pricing runs roughly <strong>$40-$150</strong> per scan,
              with BodySpec mobile vans at the bottom ($45-$50 typical) and DexaFit studios at
              $119-$179. Miami&apos;s range looks tighter at the top but higher at the bottom: because
              the cheap mobile-van tier has not launched here, the practical floor for an actual DEXA
              scan is around <strong>$100</strong>, and the ceiling is Fitnescity at <strong>$260</strong>.
            </p>
            <p>
              The practical takeaway: a Miami resident who wants the lowest body-composition number can
              use the University of Miami BOD POD lab from ~$35, but the lowest true DEXA scan in the
              city is roughly $100 at an independent Coral Gables, Midtown, or Edgewater clinic — not the
              sub-$50 van scan available in New York or Los Angeles. If BodySpec launches its Miami
              service off the current waitlist, expect that floor to drop.
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
            background exposure. The dose is low, but it is still radiation — if you are pregnant, or
            scanning very frequently, discuss the cadence with a clinician. A BOD POD test, like the one
            at the University of Miami lab, uses air displacement and no radiation at all, which is one
            reason it can be a useful budget alternative.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose a Miami DEXA Clinic</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for cost</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>University of Miami Fitness Laboratory</strong> BOD POD from ~$35 — budget body comp (not DEXA)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>PURE Executive Health</strong> or <strong>My Health &amp; Wellness</strong> for a true DEXA scan from around $100</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for a fuller picture</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Infinity Sports Institute</strong> for DEXA plus VO2 max, RMR, and DARI motion capture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Fitnescity</strong> for a standardized report with a physician order and 1:1 MD results call</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mt-8">
            <p>Before you book, confirm a few practical points with the clinic:</p>
            <ul>
              <li>Is it actually a DEXA scan, or a BOD POD / InBody test? (They are not the same measurement.)</li>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Find a DEXA Scan in Miami</h3>
          <p className="text-gray-600 mb-6">
            Compare every verified Miami body-composition provider — prices, neighborhoods, and add-on testing.
          </p>
          <Link
            href="/dexa-scans/florida/miami"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            View Miami DEXA Clinics →
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
                <div className="text-sm text-gray-600">How NYC DEXA pricing compares</div>
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
            <li>• <a href="https://www.fitnescity.com/dexa-scan-body-composition-in-miami-fl" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Fitnescity — DEXA Scan Body Composition in Miami, FL (pricing)</a></li>
            <li>• <a href="https://infinitysi.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Infinity Sports Institute (Miami sport-science lab)</a></li>
            <li>• <a href="https://purehealthmiami.com/body-composition-scan/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">PURE Executive Health &amp; Wellness — Body Composition Scan</a></li>
            <li>• <a href="https://wellness.studentaffairs.miami.edu/services-and-spaces/fitness-services/fitness-assessments/index.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">University of Miami — Fitness Laboratory assessments &amp; pricing</a></li>
            <li>• <a href="https://www.bodyspec.com/dexa-scan-miami" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — Miami DEXA Scans (coming soon / waitlist)</a></li>
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
          description="Get our Miami DEXA price comparison plus tips for reading your scan and tracking real progress."
          source="guide_dexa_scan_cost_miami"
        />
      </div>

      </SidebarShell>
      <Footer />
    </main>
  );
}
