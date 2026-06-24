import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'DEXA Scan Cost New York: 2026 Price Guide & NYC Clinics',
  description: 'What a DEXA scan costs in NYC in 2026 — from $39.95 mobile vans to $255 studio packages. Real New York clinics, prices, and how to book a scan.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price answer ends with the verify-with-
// provider hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a DEXA scan cost in New York City?',
    answer:
      'A single body-composition DEXA scan in NYC ranges from about $39.95 (BodySpec mobile vans) to roughly $255 (Fitnescity), with most fixed studios charging $99-$179 per scan. Multi-scan packages and memberships lower the per-scan price — for example, NYC Dexa Scans offers a 3-pack at $250 and Dexaslim group challenges drop to about $66 per scan. These are advertised prices that change; confirm current pricing directly with the clinic.',
  },
  {
    question: 'Where is the cheapest DEXA scan in NYC?',
    answer:
      'On a per-scan basis, BodySpec’s mobile vans advertise the lowest entry price at $39.95, and NYC Dexa Scans in the West Village markets itself as the cheapest fixed studio at $99 per scan. Package and group pricing can go lower still. Cheapest is not always best — also weigh location, equipment, and whether you want add-on testing. Verify current pricing with each provider before booking.',
  },
  {
    question: 'Is a DEXA scan covered by insurance in New York?',
    answer:
      'A DEXA scan ordered for bone-density screening can be covered — Medicare Part B covers a bone-mass measurement once every 24 months for people who qualify, and many commercial plans cover osteoporosis screening. A DEXA scan for body composition (body fat and lean mass) is generally considered elective and paid out of pocket. The cash prices on this page are body-composition scans. Confirm coverage with your insurer and the clinic.',
  },
  {
    question: 'How much radiation is in a body-composition DEXA scan?',
    answer:
      'A full-body composition DEXA scan delivers roughly 4-5 microsieverts (µSv) of radiation, per BodySpec’s published figures. For context, the U.S. average background dose is about 8-10 µSv per day, and a chest X-ray is roughly 20 µSv. The dose is low, but it is still ionizing radiation — discuss frequency with a clinician if you are pregnant or scan often. This is information, not medical advice.',
  },
  {
    question: 'How often should I get a DEXA scan?',
    answer:
      'For active body recomposition, every 3 months is a common cadence so you can see whether you are losing fat and preserving muscle between scans. If you are maintaining, twice a year is usually enough. Because body composition does not change quickly, monthly scanning is generally unnecessary. Talk to your clinician about the right interval for your goals and your radiation exposure.',
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

// Real, pre-verified NYC DEXA clinics (source: src/data/dexa-clinics-new-york.ts,
// lastVerified 2026-06-11; prices independently re-checked against each clinic
// site). Prices are advertised estimates to confirm with the provider.
const NYC_CLINICS = [
  {
    name: 'BodySpec',
    neighborhood: 'Mobile vans + pop-ups (citywide)',
    price: 'From $39.95/scan',
    addOns: 'DEXA only; package and membership pricing available',
    note: 'National mobile DEXA chain. Under-15-minute scan with segmental and visceral-fat analysis; among the cheapest in NYC.',
    website: 'https://www.bodyspec.com/dexa-scan-nyc',
  },
  {
    name: 'NYC Dexa Scans',
    neighborhood: 'West Village — 77 Greenwich Ave',
    price: '$99/scan',
    addOns: '3-pack $250; unlimited membership $299/mo',
    note: 'Independent, DEXA-focused West Village studio that markets itself as the cheapest fixed DEXA in NYC. 10-15 minute scan, online booking.',
    website: 'https://nycdexascans.com/',
  },
  {
    name: 'NYC Performance Lab',
    neighborhood: 'Midtown — 11 West 36th St',
    price: '$40-150/scan',
    addOns: '3D scan, VO2 max, RMR, lactate-threshold testing',
    note: 'Boutique human-performance lab pairing a latest-model Hologic DXA with a 3D body scan and full performance testing under one roof.',
    website: 'https://www.nycperformancelab.com/dexa-scan-3d-body-composition-analysis',
  },
  {
    name: 'DexaFit NY',
    neighborhood: 'Midtown — 352 7th Ave (+ Long Island)',
    price: '$179/scan',
    addOns: 'VO2 max $199; RMR $179; 50+ biomarker panel',
    note: 'New York franchise of the national DexaFit chain, bundling DEXA with metabolic and bloodwork testing.',
    website: 'https://www.dexafitny.com/',
  },
  {
    name: 'Dexaslim',
    neighborhood: 'New York City',
    price: '$179/scan',
    addOns: '2-/3-session packs; group challenges from ~$66/scan',
    note: 'Body-composition and longevity studio offering DEXA alongside VO2 max, RMR, bone-density scans, and a longevity blood panel.',
    website: 'https://dexaslim.com/',
  },
  {
    name: 'Fitnescity',
    neighborhood: 'Multiple Manhattan partner sites',
    price: '$255/scan',
    addOns: 'Multi-scan packs to ~$230/scan; RMR $400; VO2 max $500',
    note: 'Wellness-testing platform that books DEXA across several Manhattan sites and returns an online results dashboard.',
    website: 'https://www.fitnescity.com/dexa-scan-in-nyc',
  },
];

export default function DexaScanCostNewYork() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'DEXA Scan Cost in New York City (2026)',
    description:
      'A 2026 price guide to DEXA body-composition scans in New York City — what they cost, where to get one, what affects the price, and how NYC pricing compares.',
    url: 'https://vitalityscout.com/guides/dexa-scan-cost-new-york',
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalTest',
      name: 'DEXA (dual-energy X-ray absorptiometry) body composition scan',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-23',
    dateModified: '2026-06-23',
    citation: [
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan NYC pricing', url: 'https://www.bodyspec.com/dexa-scan-nyc' },
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan Radiation: How Much Is It', url: 'https://www.bodyspec.com/blog/post/dexa_scan_radiation_how_much_is_it_and_is_it_safe' },
      { '@type': 'CreativeWork', name: 'UCSF Radiology — Why DXA/DEXA beats BMI', url: 'https://radiology.ucsf.edu/blog/dxadexa-beats-bmi-using-x-ray-exam-measure-body-composition-fat-loss' },
      { '@type': 'CreativeWork', name: 'Medicare — Bone mass measurements coverage', url: 'https://www.medicare.gov/coverage/bone-mass-measurements' },
    ],
  };

  const faqSchema = buildFAQSchema(FAQ_ITEMS);

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
              New York City Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            DEXA Scan Cost in New York City
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What a body-composition DEXA scan actually costs in NYC in 2026, where to
            get one, and how to read the price differences between mobile vans and studios.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A body-composition DEXA scan in New York City costs roughly{' '}
              <strong>$39.95 to $255</strong>, with most fixed studios in the{' '}
              <strong>$99-$179</strong> range. The cheapest entry point is BodySpec&apos;s
              mobile vans at $39.95; NYC Dexa Scans markets a $99 West Village studio scan;
              premium platforms like Fitnescity reach $255. Packages and memberships lower the
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
        <h2 className="text-2xl font-bold text-gray-900 mb-6">NYC DEXA Scan Price Snapshot (2026)</h2>

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
              {NYC_CLINICS.map((c, i) => (
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
          <Link href="/dexa-scans/new-york/new-york-city" className="text-blue-600 hover:underline">
            NYC DEXA clinic directory
          </Link>.
        </p>
      </section>

      {/* What drives the price */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Drives the Price Difference</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              The NYC range is wide — about a 6x spread from the cheapest van scan to the most
              expensive platform booking — for a few concrete reasons:
            </p>
            <ul>
              <li>
                <strong>Mobile vs fixed location.</strong> BodySpec runs mobile vans and pop-ups
                rather than a leased Manhattan storefront, which keeps the entry price near $40.
                Fixed studios in Midtown and the West Village carry rent and staffing that show up
                in a $99-$179 scan.
              </li>
              <li>
                <strong>Bundled testing.</strong> Studios like DexaFit NY, Dexaslim, and Fitnescity
                add VO2 max, resting metabolic rate (RMR), or biomarker bloodwork. A standalone DEXA
                costs less than a metabolic bundle.
              </li>
              <li>
                <strong>Equipment and consultation.</strong> Boutique labs such as NYC Performance
                Lab pair a latest-model Hologic DXA with a 3D body scan and an in-person walkthrough,
                which prices above a no-frills scan-and-report.
              </li>
              <li>
                <strong>Packages and memberships.</strong> Per-scan cost drops sharply with volume —
                NYC Dexa Scans sells a 3-pack at $250, and Dexaslim group challenges reach about
                $66 per scan. If you plan to track over time, package math usually wins.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Clinic cards */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Get a DEXA Scan in NYC</h2>
        <p className="text-gray-600 mb-6">
          Six real, currently operating NYC DEXA providers, from cheapest to most premium. Each
          listing was verified against the clinic&apos;s own site in June 2026.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {NYC_CLINICS.map((c) => (
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

      {/* How NYC compares */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How NYC Pricing Compares</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              NYC body-composition DEXA pricing tracks the national picture, just shifted toward the
              top of the range because Manhattan real estate pushes studio prices up. National
              averages run roughly <strong>$40-$150</strong> per scan: BodySpec sits at the bottom
              nationwide ($45-$50 typical) and DexaFit studios at $119-$179. In NYC the same chains
              show similar numbers, with independent studios from $99 (NYC Dexa Scans) up to $255
              (Fitnescity).
            </p>
            <p>
              The practical takeaway: a New Yorker can still get a sub-$100 scan — the mobile-van and
              budget-studio options exist here — but the convenient, fully-bundled Midtown experience
              costs more than it would in a smaller market.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose a NYC DEXA Clinic</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for cost</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>BodySpec</strong> mobile vans from $39.95 — quick, no-frills, citywide</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>NYC Dexa Scans</strong> at $99, with a $250 3-pack for repeat tracking</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for a fuller picture</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>NYC Performance Lab</strong> for DEXA plus 3D scan and performance testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>DexaFit NY / Dexaslim / Fitnescity</strong> for DEXA bundled with VO2 max, RMR, or bloodwork</span>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Find a DEXA Scan in New York City</h3>
          <p className="text-gray-600 mb-6">
            Compare every verified NYC DEXA provider — prices, neighborhoods, and add-on testing.
          </p>
          <Link
            href="/dexa-scans/new-york/new-york-city"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            View NYC DEXA Clinics →
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

          <Link href="/guides/bodyspec-vs-dexafit" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚖️</span>
              <div>
                <div className="font-bold text-gray-900">BodySpec vs DexaFit</div>
                <div className="text-sm text-gray-600">The two leading DEXA services compared</div>
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
            <li>• <a href="https://www.bodyspec.com/dexa-scan-nyc" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — DEXA Scan NYC (pricing)</a></li>
            <li>• <a href="https://nycdexascans.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">NYC Dexa Scans (pricing & packages)</a></li>
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
          description="Get our NYC DEXA price comparison plus tips for reading your scan and tracking real progress."
          source="guide_dexa_scan_cost_new_york"
        />
      </div>

      <Footer />
    </main>
  );
}
