import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'DEXA Scan Cost Phoenix: 2026 Price Guide & AZ Clinics' },
  alternates: { canonical: 'https://vitalityscout.com/guides/dexa-scan-cost-phoenix' },
  description: 'What a body-composition DEXA scan costs in Phoenix in 2026 — from ~$75 Scottsdale studios to $180 bookings. Real Valley clinics, prices, how to save.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price answer ends with the verify-with-
// provider hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a DEXA scan cost in Phoenix?',
    answer:
      'A single body-composition DEXA scan in metro Phoenix runs from about $75 (Dexa Body in Scottsdale) to $180 (Fitnescity), with most independent studios charging $99 for a body-composition scan. Packages lower the per-scan price — Dexa Body sells a 2-scan pack at $125 (about $62.50 each) and Fitnescity bundles drop to roughly $155-170 per scan. These are advertised prices that change; confirm current pricing directly with the clinic.',
  },
  {
    question: 'Where is the cheapest DEXA scan in Phoenix?',
    answer:
      'On a per-scan basis, Dexa Body in north Scottsdale advertises the lowest entry price at $75 for a single body-composition scan, dropping to about $62.50 per scan in its 2-scan package. Valley Healthspan in the Biltmore area and Preamble Health in Scottsdale both list $99 body-composition scans. Cheapest is not always best — also weigh location, equipment, and whether you want a clinician to review results. Verify current pricing with each provider before booking.',
  },
  {
    question: 'Is a DEXA scan HSA or FSA eligible in Arizona?',
    answer:
      'Several Phoenix studios — including Dexa Body and the DexaFit Phoenix and Tempe locations — state their scans are HSA/FSA eligible, and Fitnescity bills as cash-pay with no insurance required. A DEXA scan ordered for bone-density screening (osteoporosis) is more clearly a medical expense; a body-composition scan may need a Letter of Medical Necessity for some plans. Confirm eligibility with your plan administrator and ask the clinic for an itemized receipt. See our HSA/FSA eligibility guide for details.',
  },
  {
    question: 'Does insurance cover a body-composition DEXA scan in Phoenix?',
    answer:
      'Generally no. A DEXA scan for bone-density screening can be covered — Medicare Part B covers a bone-mass measurement once every 24 months for people who qualify, and many commercial plans cover osteoporosis screening. A DEXA scan for body composition (body fat and lean mass) is usually treated as elective and paid out of pocket. The cash prices on this page are body-composition scans. Confirm coverage with your insurer and the clinic.',
  },
  {
    question: 'How much radiation is in a body-composition DEXA scan?',
    answer:
      'A full-body composition DEXA scan delivers roughly 4-5 microsieverts (µSv) of radiation, per BodySpec’s published figures. For context, the U.S. average background dose is about 8-10 µSv per day, and a chest X-ray is roughly 20 µSv — about four times a single scan. The dose is low, but it is still ionizing radiation, so discuss frequency with a clinician if you are pregnant or scan often. This is information, not medical advice.',
  },
  {
    question: 'What does a DEXA scan measure?',
    answer:
      'A DEXA (dual-energy X-ray absorptiometry) scan measures body fat, lean (muscle) mass, and bone density, broken down by region — arms, legs, and trunk — plus a visceral-fat estimate. UCSF notes DXA is highly accurate compared with most other body-composition methods and tells a clearer story than BMI; in one 50-patient abstract UCSF cites, 18.5% of women with a normal BMI had excess fat visible on DXA.',
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

// Real, pre-verified Phoenix-metro DEXA clinics (source: src/data/dexa-clinics-
// arizona.ts, lastVerified 2026-06-11; prices independently re-checked against
// each clinic site in June 2026). Prices are advertised estimates to confirm
// with the provider.
const PHOENIX_CLINICS = [
  {
    name: 'Dexa Body',
    neighborhood: 'North Scottsdale — 11111 N. Scottsdale Rd',
    price: 'From $75/scan',
    addOns: '2-scan pack $125 (~$62.50/scan); +RMR $150, +VO2 max $200',
    note: 'Independent body-composition studio in north Scottsdale pairing DEXA with VO2 max and RMR metabolic testing. An in-house registered dietitian reviews results; all services are HSA/FSA eligible.',
    website: 'https://dexabody.com/',
  },
  {
    name: 'Valley Healthspan',
    neighborhood: 'Biltmore — 3333 E. Camelback Rd',
    price: '$99/scan',
    addOns: 'Bone-density scan also $99; VO2 max and RMR available',
    note: 'Physician-led longevity and age-management clinic in the Biltmore area where Dr. Micah Olson, MD personally reviews each DEXA result. Whole-body composition or bone-density scan is a flat $99 and takes about 20 minutes.',
    website: 'https://valleyhealthspan.com/services/dexa-scan/',
  },
  {
    name: 'Preamble Health Scottsdale',
    neighborhood: 'Scottsdale — 16430 N Scottsdale Rd',
    price: '$99/scan',
    addOns: 'Bone density + FRAX $149; body-comp + bone-density combo $249',
    note: 'Scottsdale longevity practice with transparent cash-pay pricing: body composition $99 (promo from $149), bone density with a FRAX fracture-risk score $149, or a combo of both for $249. Online booking.',
    website: 'https://preamblehealth.com/dexa-scan-scottsdale/',
  },
  {
    name: 'DexaFit Phoenix (North Phoenix)',
    neighborhood: 'North Phoenix — 706 E. Bell Rd',
    price: '$40-150/scan',
    addOns: 'VO2 max, RMR; HSA/FSA eligible',
    note: 'North Phoenix studio of the national DexaFit chain offering AI-enhanced DEXA reports alongside VO2 max and resting metabolic rate testing. Price not published online — confirm by phone; cash-pay and HSA/FSA eligible.',
    website: 'https://www.phoenix.dexafit.com/dexa-scan',
  },
  {
    name: 'DexaFit Tempe',
    neighborhood: 'Tempe / East Valley — 1730 E. Warner Rd',
    price: '$40-150/scan',
    addOns: 'VO2 max, RMR; HSA/FSA eligible',
    note: 'Tempe location of the DexaFit chain serving the East Valley with AI-enhanced DEXA plus VO2 max and RMR testing. Price not published online — confirm by phone; open Tuesday through Saturday.',
    website: 'https://www.phoenix.dexafit.com/tempe',
  },
  {
    name: 'Fitnescity (Phoenix)',
    neighborhood: 'Arcadia — 4840 E. Indian School Rd',
    price: '$180/scan',
    addOns: 'Bundles ~$155-170/scan; body-comp + bone-density $355',
    note: 'National health-testing booking platform that schedules cash-pay DEXA at a partner facility on E. Indian School Rd. A single DEXA is $180, dropping to about $155-170 per scan in bundles; results return in an online dashboard.',
    website: 'https://www.fitnescity.com/dexa-scan-in-phoenix-az',
  },
];

export default function DexaScanCostPhoenix() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'DEXA Scan Cost in Phoenix (2026)',
    description:
      'A 2026 price guide to DEXA body-composition scans in metro Phoenix — what they cost, where to get one across the Valley, what affects the price, and how to save.',
    url: 'https://vitalityscout.com/guides/dexa-scan-cost-phoenix',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-phoenix#faq' },
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
      { '@type': 'CreativeWork', name: 'Dexa Body — Plans & Pricing (Scottsdale)', url: 'https://dexabody.com/plans-pricing/' },
      { '@type': 'CreativeWork', name: 'Valley Healthspan — DEXA Scan (pricing)', url: 'https://valleyhealthspan.com/services/dexa-scan/' },
      { '@type': 'CreativeWork', name: 'Preamble Health — DEXA Scan Scottsdale (pricing)', url: 'https://preamblehealth.com/dexa-scan-scottsdale/' },
      { '@type': 'CreativeWork', name: 'Fitnescity — DEXA Scan in Phoenix, AZ (pricing)', url: 'https://www.fitnescity.com/dexa-scan-in-phoenix-az' },
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan Radiation: How Much Is It', url: 'https://www.bodyspec.com/blog/post/dexa_scan_radiation_how_much_is_it_and_is_it_safe' },
      { '@type': 'CreativeWork', name: 'UCSF Radiology — Why DXA/DEXA beats BMI', url: 'https://radiology.ucsf.edu/blog/dxadexa-beats-bmi-using-x-ray-exam-measure-body-composition-fat-loss' },
      { '@type': 'CreativeWork', name: 'Medicare — Bone mass measurements coverage', url: 'https://www.medicare.gov/coverage/bone-mass-measurements' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-phoenix#faq', url: 'https://vitalityscout.com/guides/dexa-scan-cost-phoenix' };

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
              Phoenix Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            DEXA Scan Cost in Phoenix
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What a body-composition DEXA scan actually costs across metro Phoenix in 2026,
            where to get one from Scottsdale to Tempe, and how to read the price differences.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A body-composition DEXA scan in Phoenix costs roughly{' '}
              <strong>$75 to $180</strong>, with most independent studios charging{' '}
              <strong>$99</strong>. The cheapest entry point is Dexa Body in north Scottsdale at $75
              (about $62.50/scan in a 2-pack); Valley Healthspan and Preamble Health list $99 scans;
              the Fitnescity platform booking reaches $180. Packages lower the per-scan price. These
              are advertised estimates to confirm with the provider. This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 9 min read
          </p>
        </div>
      </section>

      {/* Quick price snapshot */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Phoenix DEXA Scan Price Snapshot (2026)</h2>

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
              {PHOENIX_CLINICS.map((c, i) => (
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
          <Link href="/dexa-scans/arizona/phoenix" className="text-blue-600 hover:underline">
            Phoenix DEXA clinic directory
          </Link>.
        </p>
      </section>

      {/* What drives the price */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Drives the Price Difference</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              The Phoenix range is narrower than coastal metros — roughly a 2.5x spread from the
              cheapest Scottsdale studio scan to the most expensive platform booking — for a few
              concrete reasons:
            </p>
            <ul>
              <li>
                <strong>Independent studio vs national platform.</strong> Locally owned studios like
                Dexa Body and Valley Healthspan set their own flat cash rate ($75-$99). Fitnescity is
                a national booking platform that routes you to a partner lab and prices the same scan
                at $180, with the convenience built into the markup.
              </li>
              <li>
                <strong>Bundled testing.</strong> Most Valley DEXA studios add VO2 max, resting
                metabolic rate (RMR), or bone-density testing. A standalone DEXA costs less than a
                metabolic bundle — Dexa Body&apos;s DEXA + RMR + VO2 package runs $300, versus $75
                for the scan alone.
              </li>
              <li>
                <strong>Clinician review and scope.</strong> Valley Healthspan has Dr. Micah Olson,
                MD walk you through results, and Preamble Health includes a FRAX fracture-risk score
                on its bone-density scan. Physician-reviewed scans inside a longevity practice price
                differently from a scan-and-report.
              </li>
              <li>
                <strong>Packages.</strong> Per-scan cost drops with volume — Dexa Body&apos;s 2-scan
                pack works out to about $62.50 each, and Fitnescity bundles reach $155-170 per scan.
                If you plan to track recomposition over time, package math usually wins.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Clinic cards */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Get a DEXA Scan in Phoenix</h2>
        <p className="text-gray-600 mb-6">
          Six real, currently operating Phoenix-metro DEXA providers, from cheapest to most premium —
          spanning Scottsdale, the Biltmore, North Phoenix, and the East Valley. Each listing was
          verified against the clinic&apos;s own site in June 2026.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {PHOENIX_CLINICS.map((c) => (
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

      {/* How Phoenix compares */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Phoenix Pricing Compares</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Phoenix is a relative bargain for body-composition DEXA. National per-scan pricing runs
              roughly <strong>$40-$180</strong>, and the Valley sits in the friendly middle: a flat
              $99 is the going rate at independent studios here, versus $99-$179 at fixed studios in
              New York and the same general band in Los Angeles. Lower commercial rents across
              Scottsdale and the East Valley keep studio prices below what Manhattan charges, where
              the top of the range reaches $255.
            </p>
            <p>
              The practical takeaway: a Phoenix resident can get a sub-$100 physician-reviewed scan
              without much hunting — that is harder in higher-cost metros. The only premium option is
              the national Fitnescity platform at $180, which you pay for the convenience of online
              booking and a results dashboard, not for a different scan.
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
            <li>A chest X-ray: roughly <strong>20 &micro;Sv</strong> (about four times a scan)</li>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose a Phoenix DEXA Clinic</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for cost</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Dexa Body</strong> (Scottsdale) from $75, ~$62.50/scan in a 2-pack — HSA/FSA eligible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Valley Healthspan</strong> or <strong>Preamble Health</strong> at a flat $99 body-composition scan</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for a fuller picture</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Valley Healthspan</strong> for a physician-reviewed scan with Dr. Olson, or <strong>Preamble Health</strong> for bone density + a FRAX score</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Dexa Body / DexaFit / Fitnescity</strong> for DEXA bundled with VO2 max or RMR</span>
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
              <li>For repeat tracking, does a package or bundle beat the single-scan price?</li>
              <li>If you plan to pay with HSA/FSA, can the clinic provide an itemized receipt?</li>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Find a DEXA Scan in Phoenix</h3>
          <p className="text-gray-600 mb-6">
            Compare every verified Phoenix-metro DEXA provider — prices, neighborhoods, and add-on testing.
          </p>
          <Link
            href="/dexa-scans/arizona/phoenix"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            View Phoenix DEXA Clinics →
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
                <div className="text-sm text-gray-600">How another big metro&apos;s prices compare</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/is-dexa-scan-hsa-fsa-eligible" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💳</span>
              <div>
                <div className="font-bold text-gray-900">Is a DEXA Scan HSA/FSA Eligible?</div>
                <div className="text-sm text-gray-600">Rules, costs, and when you need an LMN</div>
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
        </div>
      </section>

      {/* Sources */}
      <section className="mx-auto max-w-4xl px-4 pb-4">
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <a href="https://dexabody.com/plans-pricing/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Dexa Body — Plans &amp; Pricing (Scottsdale)</a></li>
            <li>• <a href="https://valleyhealthspan.com/services/dexa-scan/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Valley Healthspan — DEXA Scan (pricing)</a></li>
            <li>• <a href="https://preamblehealth.com/dexa-scan-scottsdale/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Preamble Health — DEXA Scan Scottsdale (pricing)</a></li>
            <li>• <a href="https://www.fitnescity.com/dexa-scan-in-phoenix-az" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Fitnescity — DEXA Scan in Phoenix, AZ (pricing)</a></li>
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
          description="Get our Phoenix DEXA price comparison plus tips for reading your scan and tracking real progress."
          source="guide_dexa_scan_cost_phoenix"
        />
      </div>

      </SidebarShell>
      <Footer />
    </main>
  );
}
