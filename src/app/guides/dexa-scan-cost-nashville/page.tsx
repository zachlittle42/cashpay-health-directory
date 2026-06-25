import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'DEXA Scan Cost Nashville: 2026 Prices & Local Clinics' },
  alternates: { canonical: 'https://vitalityscout.com/guides/dexa-scan-cost-nashville' },
  description: 'What a body-composition DEXA scan costs in Nashville in 2026 — $39.95 to $215 across real local clinics, the Tennessee physician-order rule, how to save.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price answer ends with the verify-with-
// provider hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a DEXA scan cost in Nashville?',
    answer:
      'A single body-composition DEXA scan in Nashville ranges from about $39.95 (BodySpec mobile, on a launch waitlist locally) to roughly $215 (Fitnescity), with the two independent local labs sitting in the middle — Live Lean Rx at $150 and Transformat10n Lab at $159 per scan. Multi-scan bundles drop the per-scan price: Live Lean Rx reaches about $58.33 per scan on a 12-pack, and Fitnescity falls to roughly $200 per scan on a 4-pack. These are advertised prices that change; confirm current pricing directly with the clinic.',
  },
  {
    question: 'Do I need a doctor’s order for a DEXA scan in Tennessee?',
    answer:
      'Yes. Tennessee state law requires a physician order for a DEXA scan even when it is elective body-composition testing, not just bone-density screening. Nashville providers handle this for you in different ways: Transformat10n Lab issues the order in-house after a clinician reviews a pre-test journal at no extra fee, and Fitnescity coordinates the order remotely through a national network of board-certified physicians. You generally do not need to visit your own doctor first. Confirm the exact process with the clinic when you book.',
  },
  {
    question: 'Where is the cheapest DEXA scan in Nashville?',
    answer:
      'On a single-scan basis, BodySpec advertises the lowest price at $39.95, but as of June 2026 BodySpec lists Nashville on a launch waitlist rather than running active vans, so verify availability before counting on it. Among clinics operating today, Live Lean Rx is the lowest fixed-studio single scan at $150, and its 12-pack bundle drops to about $58.33 per scan for repeat tracking. Cheapest is not always best — also weigh location, the physician-order handling, and whether you want add-on testing. Verify current pricing with each provider.',
  },
  {
    question: 'Is a body-composition DEXA scan covered by insurance in Nashville?',
    answer:
      'Generally no. A DEXA scan ordered for bone-density screening can be covered — Medicare Part B covers a bone-mass measurement once every 24 months for people who qualify, and many commercial plans cover osteoporosis screening. A DEXA scan for body composition (body fat and lean mass) is typically considered elective and paid out of pocket. The Nashville clinics on this page are cash-pay for body composition; several accept HSA/FSA cards. Confirm coverage with your insurer and the clinic.',
  },
  {
    question: 'How often should I get a DEXA scan?',
    answer:
      'For active body recomposition, every 3 months is a common cadence so you can see whether you are losing fat and preserving muscle between scans — which is why Nashville labs sell 4-, 6-, and 12-scan bundles. If you are maintaining, twice a year is usually enough. Because body composition does not change quickly, monthly scanning is generally unnecessary. Talk to your clinician about the right interval for your goals and your radiation exposure.',
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

// Real, pre-verified Nashville DEXA clinics (source: src/data/dexa-clinics-tennessee.ts,
// lastVerified 2026-06-11; prices independently re-checked against each clinic
// site June 2026). Prices are advertised estimates to confirm with the provider.
const NASHVILLE_CLINICS = [
  {
    name: 'BodySpec',
    neighborhood: 'Mobile vans + pop-ups (launch waitlist as of June 2026)',
    price: 'From $39.95/scan',
    addOns: 'DEXA only; no membership required',
    note: 'National mobile-DEXA provider known for the lowest cash-pay pricing in the category. As of June 2026 Nashville is on a launch waitlist rather than running active vans — verify current availability before booking.',
    website: 'https://www.bodyspec.com/dexa-scan-nashville',
  },
  {
    name: 'Live Lean Rx Nashville',
    neighborhood: 'South Nashville — 4633 Trousdale Dr, Suite 210',
    price: '$150/scan',
    addOns: '4-pack $280 ($70/scan); 12-pack mix $750 (~$58.33/scan); RMR, VO2 max',
    note: 'Independent metabolic-testing and body-composition clinic offering a 5-10 minute whole-body DXA scan, with discounted multi-scan bundles for progress tracking and RMR / VO2 max under one roof.',
    website: 'https://liveleanrx.com/locations/nashville-tn',
  },
  {
    name: 'Transformat10n Lab',
    neighborhood: 'North Nashville — 3228 Clarksville Pike (37218)',
    price: '$159/scan',
    addOns: 'FUS10N membership credits; RMR, VO2 max, BOD POD, Fit3D',
    note: 'Independent Nashville exercise-physiology lab pairing whole-body DEXA (lean / bone / fat mass, ALMI, visceral fat) with a full performance menu. Issues the Tennessee-required physician order in-house after a clinician reviews a pre-test journal; HSA/FSA accepted, no insurance.',
    website: 'https://transformat10n.com/services/nashville-dexa-scan/',
  },
  {
    name: 'Fitnescity (Nashville)',
    neighborhood: 'Fixed Nashville-area partner facilities',
    price: '$215/scan',
    addOns: '4-pack ~$200/scan; DEXA + RMR $425; DEXA + RMR + VO2 max $700',
    note: 'National cash-pay booking platform that schedules scans into vetted fixed Nashville-area facilities (never mobile units) and coordinates the Tennessee-required physician order remotely through a national doctor network.',
    website: 'https://www.fitnescity.com/dexa-scan-in-nashville-tn',
  },
];

export default function DexaScanCostNashville() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'DEXA Scan Cost in Nashville (2026)',
    description:
      'A 2026 price guide to DEXA body-composition scans in Nashville — what they cost, where to get one, the Tennessee physician-order rule, and how Nashville pricing compares.',
    url: 'https://vitalityscout.com/guides/dexa-scan-cost-nashville',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-nashville#faq' },
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
      { '@type': 'CreativeWork', name: 'Transformat10n Lab — Nashville DEXA Scan pricing', url: 'https://transformat10n.com/services/nashville-dexa-scan/' },
      { '@type': 'CreativeWork', name: 'Live Lean Rx Nashville — pricing & packages', url: 'https://liveleanrx.com/locations/nashville-tn' },
      { '@type': 'CreativeWork', name: 'Fitnescity — DEXA Scan Nashville (pricing & Tennessee physician order)', url: 'https://www.fitnescity.com/dexa-scan-in-nashville-tn' },
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan Nashville', url: 'https://www.bodyspec.com/dexa-scan-nashville' },
      { '@type': 'CreativeWork', name: 'UCSF Radiology — Why DXA/DEXA beats BMI', url: 'https://radiology.ucsf.edu/blog/dxadexa-beats-bmi-using-x-ray-exam-measure-body-composition-fat-loss' },
      { '@type': 'CreativeWork', name: 'Medicare — Bone mass measurements coverage', url: 'https://www.medicare.gov/coverage/bone-mass-measurements' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-nashville#faq', url: 'https://vitalityscout.com/guides/dexa-scan-cost-nashville' };

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
              Nashville Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            DEXA Scan Cost in Nashville
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What a body-composition DEXA scan actually costs in Nashville in 2026, where to
            get one, and the one Tennessee rule that makes booking here different.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A body-composition DEXA scan in Nashville costs roughly{' '}
              <strong>$39.95 to $215</strong>, with the two independent local labs at{' '}
              <strong>$150 (Live Lean Rx)</strong> and <strong>$159 (Transformat10n Lab)</strong>.
              BodySpec advertises $39.95 but lists Nashville on a launch waitlist; Fitnescity reaches
              $215. Tennessee law requires a physician order even for elective scans — local clinics
              handle that for you. Multi-scan bundles lower the per-scan price. These are advertised
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
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Nashville DEXA Scan Price Snapshot (2026)</h2>

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
              {NASHVILLE_CLINICS.map((c, i) => (
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
          <Link href="/dexa-scans/tennessee/nashville" className="text-blue-600 hover:underline">
            Nashville DEXA clinic directory
          </Link>.
        </p>
      </section>

      {/* The Tennessee physician-order rule — the Nashville-distinctive section */}
      <section className="bg-amber-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Tennessee Physician-Order Rule</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              The single biggest difference between booking a DEXA scan in Nashville and booking one
              in California or New York is paperwork. Tennessee state law requires a{' '}
              <strong>physician order for a DEXA scan even when it is elective body-composition
              testing</strong> — not just for medical bone-density screening. In many other states you
              can walk up to a mobile van and pay cash with no order at all.
            </p>
            <p>
              The good news for Nashville buyers: the local clinics absorb this step so you almost
              never need to see your own doctor first. They handle it two different ways:
            </p>
            <ul>
              <li>
                <strong>In-house order.</strong> Transformat10n Lab issues the order itself after a
                clinician reviews a short pre-test journal — at no additional fee — so the
                requirement is handled before you arrive.
              </li>
              <li>
                <strong>Remote network order.</strong> Fitnescity coordinates the order through a
                national network of board-certified physicians when you book online; you complete a
                form and the order is issued without a separate doctor visit.
              </li>
            </ul>
            <p>
              When you compare Nashville prices, factor this in: a clinic that bundles the physician
              order into its price is doing real work a no-order out-of-state van does not. Ask each
              provider how they satisfy the Tennessee order requirement before you book.
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
              The Nashville range is wide — more than a 5x spread from the cheapest advertised van
              scan to the most expensive platform booking — for a few concrete reasons:
            </p>
            <ul>
              <li>
                <strong>Independent lab vs national platform.</strong> Nashville&apos;s middle of the
                market is two independent, owner-run labs — Live Lean Rx ($150) and Transformat10n Lab
                ($159) — that run their own machines. Fitnescity ($215) is a national booking layer on
                top of fixed partner facilities and prices the coordination it provides.
              </li>
              <li>
                <strong>The physician order.</strong> Because Tennessee requires an order, every legit
                Nashville scan carries that overhead. Clinics that handle it in-house or through a
                remote network build it into the price.
              </li>
              <li>
                <strong>Bundled testing.</strong> Live Lean Rx, Transformat10n, and Fitnescity all add
                RMR or VO2 max; Transformat10n also offers BOD POD and Fit3D. A standalone DEXA costs
                less than a metabolic bundle.
              </li>
              <li>
                <strong>Packages and memberships.</strong> Per-scan cost drops sharply with volume —
                Live Lean Rx&apos;s 4-pack lands at $70/scan and its 12-pack at about $58.33/scan,
                while Fitnescity&apos;s 4-pack falls to roughly $200/scan. If you plan to track over
                time, package math usually wins.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Clinic cards */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Get a DEXA Scan in Nashville</h2>
        <p className="text-gray-600 mb-6">
          Four real Nashville-area DEXA providers, from cheapest advertised to most premium. Each
          listing was verified against the clinic&apos;s own site in June 2026.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {NASHVILLE_CLINICS.map((c) => (
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

      {/* How Nashville compares */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Nashville Pricing Compares</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Nashville sits in the middle of the national body-composition DEXA picture, not the top.
              National pricing runs roughly <strong>$40-$215</strong> per scan: BodySpec anchors the
              bottom nationwide ($45-$50 typical) and platform bookings reach the low $200s. Nashville
              lacks the sub-$100 budget studio that exists in a denser market like NYC, so the
              practical floor for an operating local clinic is the <strong>$150</strong> Live Lean Rx
              single scan rather than a $99 walk-in.
            </p>
            <p>
              The practical takeaway: Nashville body-composition pricing is reasonable and clustered —
              two independent labs within nine dollars of each other ($150 and $159) form the core of
              the market. The cheapest advertised option, BodySpec at $39.95, depends on its mobile
              vans actually launching here; until then, the independent labs are the dependable choice,
              and bundles are the real way to lower your per-scan cost.
            </p>
          </div>
        </div>
      </section>

      {/* Is it safe / radiation */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Is a DEXA Scan Safe? Radiation in Context</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            A DEXA scan uses low-dose ionizing X-rays. A full-body composition scan delivers a small
            fraction of the radiation of a standard medical X-ray. For perspective:
          </p>
          <ul>
            <li>A chest X-ray: roughly <strong>20 microsieverts (&micro;Sv)</strong></li>
            <li>Average U.S. background radiation: about <strong>8-10 &micro;Sv per day</strong></li>
            <li>A cross-country flight: about <strong>35 &micro;Sv</strong></li>
          </ul>
          <p>
            A single body-composition scan is in the neighborhood of an ordinary day of background
            exposure. The dose is low, but it is still radiation — if you are pregnant, or scanning
            very frequently, discuss the cadence with a clinician. The Tennessee physician-order
            requirement means a clinician is involved in your scan regardless.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 not-prose my-6">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> A DEXA scan for bone density may be covered by insurance, but a
              DEXA scan for body composition is generally elective and paid out of pocket. The cash
              prices in this guide are body-composition scans; several Nashville clinics accept
              HSA/FSA.
            </p>
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose a Nashville DEXA Clinic</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for cost</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Live Lean Rx</strong> at $150, dropping to ~$58.33/scan on the 12-pack for repeat tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>BodySpec</strong> at $39.95 if its mobile vans launch in Nashville — check the waitlist first</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for a fuller picture</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Transformat10n Lab</strong> for DEXA plus RMR, VO2 max, BOD POD and Fit3D, with the physician order handled in-house</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Fitnescity</strong> for turnkey online booking that coordinates the Tennessee order for you</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mt-8">
            <p>Before you book, confirm a few practical points with the clinic:</p>
            <ul>
              <li>How do they satisfy the Tennessee physician-order requirement — in-house, or remotely?</li>
              <li>Is the price for the scan only, or does it include a results consultation?</li>
              <li>Will you see the same machine each visit? (Switching devices reduces tracking accuracy.)</li>
              <li>For repeat tracking, does a 4-, 6-, or 12-scan bundle beat the single-scan price?</li>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Find a DEXA Scan in Nashville</h3>
          <p className="text-gray-600 mb-6">
            Compare every verified Nashville DEXA provider — prices, neighborhoods, and add-on testing.
          </p>
          <Link
            href="/dexa-scans/tennessee/nashville"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            View Nashville DEXA Clinics →
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
                <div className="text-sm text-gray-600">How LA prices compare across the metro</div>
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
            <li>• <a href="https://transformat10n.com/services/nashville-dexa-scan/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Transformat10n Lab — Nashville DEXA Scan (pricing)</a></li>
            <li>• <a href="https://liveleanrx.com/locations/nashville-tn" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Live Lean Rx Nashville (pricing & packages)</a></li>
            <li>• <a href="https://www.fitnescity.com/dexa-scan-in-nashville-tn" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Fitnescity — DEXA Scan Nashville (pricing & Tennessee physician order)</a></li>
            <li>• <a href="https://www.bodyspec.com/dexa-scan-nashville" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — DEXA Scan Nashville</a></li>
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
          description="Get our Nashville DEXA price comparison plus tips for reading your scan and tracking real progress."
          source="guide_dexa_scan_cost_nashville"
        />
      </div>

      <Footer />
    </main>
  );
}
