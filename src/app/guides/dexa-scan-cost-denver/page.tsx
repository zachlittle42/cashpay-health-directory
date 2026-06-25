import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'DEXA Scan Cost Denver: 2026 Price Guide & CO Clinics' },
  alternates: { canonical: 'https://vitalityscout.com/guides/dexa-scan-cost-denver' },
  description: 'What a DEXA scan costs in Denver in 2026 — from $39.95 BodySpec vans to $235 Fitnescity. Real Denver clinics, the price spread, and how to save.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price answer ends with the verify-with-
// provider hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a DEXA scan cost in Denver?',
    answer:
      'A single body-composition DEXA scan in Denver ranges from about $39.95 (BodySpec mobile/storefront) to roughly $235 (Fitnescity), with most fixed studios charging $75-$150 per scan. Live Lean Rx Denver South advertises $75 and Body Fat USA $85, making Denver one of the more affordable major metros for a fixed-studio scan. Multi-scan packages lower the per-scan price further. These are advertised prices that change; confirm current pricing directly with the clinic.',
  },
  {
    question: 'Where is the cheapest DEXA scan in Denver?',
    answer:
      'On a per-scan basis, BodySpec advertises the lowest entry price at $39.95 through its Cherry Creek storefront plus mobile vans and pop-ups across the metro. Among full-service fixed studios, Live Lean Rx Denver South in Greenwood Village markets a $75 scan and Body Fat USA in the University neighborhood charges $85. Cheapest is not always best — also weigh location, equipment, and whether you want a results consultation. Verify current pricing with each provider before booking.',
  },
  {
    question: 'Is a DEXA scan covered by insurance in Colorado?',
    answer:
      'A DEXA scan ordered for bone-density screening can be covered — Medicare Part B covers a bone-mass measurement once every 24 months for people who qualify, and many commercial plans cover osteoporosis screening. A DEXA scan for body composition (body fat and lean mass) is generally considered elective and paid out of pocket. The cash prices on this page are body-composition scans, and several Denver providers note that scans are HSA/FSA eligible. Confirm coverage with your insurer and the clinic.',
  },
  {
    question: 'How much radiation is in a body-composition DEXA scan?',
    answer:
      'A full-body composition DEXA scan delivers roughly 4-5 microsieverts (µSv) of radiation, per BodySpec’s published figures. For context, the U.S. average background dose is about 8-10 µSv per day, and a chest X-ray is roughly 20 µSv. The dose is low, but it is still ionizing radiation — and Denver’s mile-high elevation already raises everyday background exposure versus sea level. Discuss frequency with a clinician if you are pregnant or scan often. This is information, not medical advice.',
  },
  {
    question: 'How often should I get a DEXA scan?',
    answer:
      'For active body recomposition, every 3 months is a common cadence so you can see whether you are losing fat and preserving muscle between scans. If you are maintaining, twice a year is usually enough. Because body composition does not change quickly, monthly scanning is generally unnecessary. If you plan to track over time, a Denver studio package or combo usually beats paying single-scan rates. Talk to your clinician about the right interval for your goals.',
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

// Real, pre-verified Denver DEXA clinics (source: src/data/dexa-clinics-colorado.ts,
// lastVerified 2026-06-11; prices independently re-checked against each clinic
// site June 2026). Prices are advertised estimates to confirm with the provider.
const DENVER_CLINICS = [
  {
    name: 'BodySpec',
    neighborhood: 'Cherry Creek — 250 Steele St + mobile vans (metro-wide)',
    price: 'From $39.95/scan',
    addOns: 'DEXA only; package/multi-scan pricing available',
    note: 'National DEXA chain reaching Denver through a Cherry Creek storefront plus mobile vans and neighborhood pop-ups. In and out under 15 minutes, no doctor referral, AI-driven analysis — the most accessible low-cost option in the metro.',
    website: 'https://www.bodyspec.com/dexa-scan-denver',
  },
  {
    name: 'Live Lean Rx Denver South',
    neighborhood: 'Greenwood Village — 9350 E Arapahoe Rd, Ste 205',
    price: '$75/scan',
    addOns: 'VO2 Max $125; RMR $105; food-sensitivity panels; tiered packages',
    note: 'Metabolic-testing studio in the Denver Tech Center area running a 5-10 minute whole-body DXA with segmental breakdown. Part of a regional chain that bundles scans with optional nutrition coaching. The cheapest fixed studio in this set.',
    website: 'https://liveleanrx.com/locations/denver-south-colorado',
  },
  {
    name: 'Body Fat USA',
    neighborhood: 'University — 1776 S Jackson St #1111',
    price: '$85/scan',
    addOns: 'RMR $100; DEXA+RMR combo $175 (no membership)',
    note: 'Independent, locally owned testing center running a GE Lunar densitometer (the clinic describes its hardware as medical-grade). Positions itself as a testing facility, not a coaching or supplement program — results in about 5 minutes with no upsell.',
    website: 'https://www.bodyfatusa.com/',
  },
  {
    name: 'DexaFit Denver',
    neighborhood: 'Auraria / downtown — 1143 Auraria Pkwy #204',
    price: '$40-150/scan (est.)',
    addOns: 'VO2 Max; RMR; one-on-one consult; HSA/FSA eligible',
    note: 'Denver franchise of the DexaFit chain near downtown, pairing a 5-minute GE Lunar scan with a one-on-one results consultation and access to dietitians and health coaches. Pricing not posted publicly — confirm the current rate when booking.',
    website: 'https://www.denver.dexafit.com/',
  },
  {
    name: 'Fitnescity (Denver)',
    neighborhood: 'Central Park / Northfield — 8560 Northfield Blvd',
    price: '$235/scan',
    addOns: 'Multi-scan packs to ~$210/scan; DEXA + bone-density $435; RMR; VO2 Max',
    note: 'A booking marketplace rather than its own studio, routing Denver clients to a partner imaging center with physician review included. Results return within two business days via a secure online dashboard — the clinical-grade, premium end of the local range.',
    website: 'https://www.fitnescity.com/dexa-scan-in-denver-co',
  },
];

export default function DexaScanCostDenver() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'DEXA Scan Cost in Denver (2026)',
    description:
      'A 2026 price guide to DEXA body-composition scans in Denver — what they cost, where to get one, what affects the price, and how Denver pricing compares.',
    url: 'https://vitalityscout.com/guides/dexa-scan-cost-denver',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-denver#faq' },
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
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan Denver pricing', url: 'https://www.bodyspec.com/dexa-scan-denver' },
      { '@type': 'CreativeWork', name: 'Live Lean Rx Denver South — pricing', url: 'https://liveleanrx.com/locations/denver-south-colorado' },
      { '@type': 'CreativeWork', name: 'Body Fat USA — DEXA & RMR pricing', url: 'https://www.bodyfatusa.com/' },
      { '@type': 'CreativeWork', name: 'Fitnescity — DEXA Scan in Denver, CO pricing', url: 'https://www.fitnescity.com/dexa-scan-in-denver-co' },
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan Radiation: How Much Is It', url: 'https://www.bodyspec.com/blog/post/dexa_scan_radiation_how_much_is_it_and_is_it_safe' },
      { '@type': 'CreativeWork', name: 'UCSF Radiology — Why DXA/DEXA beats BMI', url: 'https://radiology.ucsf.edu/blog/dxadexa-beats-bmi-using-x-ray-exam-measure-body-composition-fat-loss' },
      { '@type': 'CreativeWork', name: 'Medicare — Bone mass measurements coverage', url: 'https://www.medicare.gov/coverage/bone-mass-measurements' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-denver#faq', url: 'https://vitalityscout.com/guides/dexa-scan-cost-denver' };

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
              Denver Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            DEXA Scan Cost in Denver
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What a body-composition DEXA scan actually costs in the Denver metro in 2026, where to
            get one, and how to read the price gap between mobile vans and clinical studios.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A body-composition DEXA scan in Denver costs roughly{' '}
              <strong>$39.95 to $235</strong>, with most fixed studios in the{' '}
              <strong>$75-$150</strong> range. The cheapest entry point is BodySpec at $39.95;
              Live Lean Rx Denver South markets a $75 fixed-studio scan and Body Fat USA $85;
              the marketplace Fitnescity reaches $235 with physician review. Packages lower the
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
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Denver DEXA Scan Price Snapshot (2026)</h2>

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
              {DENVER_CLINICS.map((c, i) => (
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
          <Link href="/dexa-scans/colorado/denver" className="text-blue-600 hover:underline">
            Denver DEXA clinic directory
          </Link>.
        </p>
      </section>

      {/* What drives the price */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Drives the Price Difference</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              Denver runs from BodySpec at $39.95 to Fitnescity at $235 — roughly six times the
              floor — and the gap tracks four concrete differences between these five providers:
            </p>
            <ul>
              <li>
                <strong>Mobile / chain vs marketplace.</strong> BodySpec runs a Cherry Creek
                storefront plus mobile vans and pop-ups, keeping the entry price near $40. At the
                other end, Fitnescity isn&apos;t a studio at all — it&apos;s a booking marketplace
                that routes you to a partner imaging center with physician review, which is why it
                lands at $235.
              </li>
              <li>
                <strong>Bundled testing and coaching.</strong> Live Lean Rx Denver South and DexaFit
                Denver pair the scan with VO2 max, resting metabolic rate (RMR), or a consultation
                and coaching. A standalone DEXA costs less than a metabolic-plus-coaching bundle.
              </li>
              <li>
                <strong>Equipment and reporting.</strong> Body Fat USA scans on a GE Lunar
                densitometer and returns results in about five minutes with no upsell; Fitnescity
                includes physician review and a two-business-day clinical report. Different reporting
                depth, different price.
              </li>
              <li>
                <strong>Packages and combos.</strong> Per-scan cost drops with volume — Fitnescity
                multi-scan packs fall to about $210 per scan, and Body Fat USA bundles DEXA + RMR at
                $175 versus $185 bought separately. If you plan to track over time, the package math
                usually wins.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Clinic cards */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Get a DEXA Scan in Denver</h2>
        <p className="text-gray-600 mb-6">
          Five real, currently operating Denver-metro DEXA providers, from cheapest to most premium.
          Each listing was verified against the clinic&apos;s own site in June 2026.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {DENVER_CLINICS.map((c) => (
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

      {/* How Denver compares */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Denver Pricing Compares</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Denver is one of the friendlier major metros for a body-composition DEXA. National
              cash prices generally run <strong>$75-$200</strong> per scan; the cheapest fixed
              studio here, Live Lean Rx Denver South at <strong>$75</strong>, sits right at the
              bottom of that band. For a direct comparison, our{' '}
              <Link href="/guides/dexa-scan-cost-new-york" className="text-blue-600 hover:underline">
                NYC guide
              </Link>{' '}
              found the cheapest fixed studio there (NYC Dexa Scans, West Village) at <strong>$99</strong> —
              so a Denver scan-seeker has a genuinely lower floor for a full-service studio scan, on
              top of BodySpec&apos;s sub-$40 mobile option.
            </p>
            <p>
              The practical takeaway: an active, outdoors-leaning city full of cyclists, climbers,
              and runners has produced real DEXA supply and competitive pricing. You can get a
              standalone scan under $90 across several neighborhoods, and the premium, physician-
              reviewed marketplace option ($235 Fitnescity) is there when you want a clinical-grade
              report rather than a quick body-fat number.
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
            background exposure. One Denver-specific note: at a mile of elevation, everyday cosmic
            background radiation is already somewhat higher than at sea level, which is a reason
            Denverites&apos; total annual dose runs above the national average — but a single DEXA
            scan&apos;s contribution remains very small. The dose is low, but it is still radiation;
            if you are pregnant or scanning very frequently, discuss the cadence with a clinician.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 not-prose my-6">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> A DEXA scan for bone density may be covered by insurance, but a
              DEXA scan for body composition is generally elective and paid out of pocket. The cash
              prices in this guide are body-composition scans. Several Denver providers note these
              scans are HSA/FSA eligible.
            </p>
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose a Denver DEXA Clinic</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for cost</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>BodySpec</strong> from $39.95 — quick, no-frills, Cherry Creek storefront plus mobile vans</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Live Lean Rx Denver South</strong> at $75 — the cheapest full-service fixed studio</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for a fuller picture</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Body Fat USA</strong> for an objective GE Lunar scan with no upsell</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>DexaFit Denver / Fitnescity</strong> for DEXA bundled with a consultation, VO2 max, RMR, or physician review</span>
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
              <li>For repeat tracking, does a package or combo beat the single-scan price?</li>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Find a DEXA Scan in Denver</h3>
          <p className="text-gray-600 mb-6">
            Compare every verified Denver DEXA provider — prices, neighborhoods, and add-on testing.
          </p>
          <Link
            href="/dexa-scans/colorado/denver"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            View Denver DEXA Clinics →
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
                <div className="text-sm text-gray-600">LA prices by provider, and how to save</div>
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
            <li>• <a href="https://www.bodyspec.com/dexa-scan-denver" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — DEXA Scan Denver (pricing)</a></li>
            <li>• <a href="https://liveleanrx.com/locations/denver-south-colorado" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Live Lean Rx Denver South (pricing)</a></li>
            <li>• <a href="https://www.bodyfatusa.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Body Fat USA — DEXA & RMR (pricing)</a></li>
            <li>• <a href="https://www.fitnescity.com/dexa-scan-in-denver-co" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Fitnescity — DEXA Scan in Denver, CO (pricing)</a></li>
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
          description="Get our Denver DEXA price comparison plus tips for reading your scan and tracking real progress."
          source="guide_dexa_scan_cost_denver"
        />
      </div>

      <Footer />
    </main>
  );
}
