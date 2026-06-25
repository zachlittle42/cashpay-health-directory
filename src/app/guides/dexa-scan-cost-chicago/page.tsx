import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'DEXA Scan Cost Chicago: 2026 Price Guide & Clinics' },
  alternates: { canonical: 'https://vitalityscout.com/guides/dexa-scan-cost-chicago' },
  description: 'What a DEXA scan costs in Chicago in 2026 — from $39.95 BodySpec vans to $150 Hologic clinics. Real Chicago providers, prices, and how to save.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price answer ends with the verify-with-
// provider hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a DEXA scan cost in Chicago?',
    answer:
      'A single body-composition DEXA scan in Chicago ranges from about $39.95 (BodySpec, Gold Coast clinic and mobile pop-ups) to roughly $150 (Moonshot Medical in Park Ridge), with most Chicago studios charging $75-$150 per scan. Packages lower the per-scan price — Live Lean Rx markets a $425 Starting Line bundle of 2 DEXA scans plus RMR and consults. BodySpec itself cites a $90-$250 Chicago average for the broader market. These are advertised prices that change; confirm current pricing directly with the clinic.',
  },
  {
    question: 'Where is the cheapest DEXA scan in Chicago?',
    answer:
      'On a per-scan basis, BodySpec advertises the lowest entry price at $39.95 from its Gold Coast clinic and mobile pop-ups, and Live Lean Rx in Andersonville is the cheapest independent studio at $75 per scan. Cheapest is not always best — also weigh the neighborhood, the scanner, and whether you want bundled metabolic or bloodwork testing. Verify current pricing with each provider before booking.',
  },
  {
    question: 'Do any Chicago clinics accept HSA or FSA for a DEXA scan?',
    answer:
      'Yes. Moonshot Medical and Performance in Park Ridge is a direct-pay clinic that accepts HSA and FSA cards for its $150 DEXA scan, though it does not bill insurance. A DEXA scan for body composition is generally elective and paid out of pocket; a DEXA scan ordered for bone-density screening may instead be billed to insurance. The cash prices on this page are body-composition scans. See our HSA/FSA eligibility guide and confirm with the clinic and your plan administrator.',
  },
  {
    question: 'Is a DEXA scan covered by insurance in Illinois?',
    answer:
      'A DEXA scan ordered for bone-density screening can be covered — Medicare Part B covers a bone-mass measurement once every 24 months for people who qualify, and many commercial plans cover osteoporosis screening. A DEXA scan for body composition (body fat and lean mass) is generally considered elective and paid out of pocket. The cash prices on this page are body-composition scans. Confirm coverage with your insurer and the clinic.',
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

// Real, pre-verified Chicago DEXA clinics (source: src/data/dexa-clinics-illinois.ts,
// lastVerified 2026-06-11; BodySpec + Moonshot prices independently re-checked
// against each clinic site in June 2026). Ordered cheapest to most premium.
// Prices are advertised estimates to confirm with the provider.
const CHICAGO_CLINICS = [
  {
    name: 'BodySpec Chicago',
    neighborhood: 'Gold Coast — 1 E Delaware Pl, Ste 310 (+ mobile pop-ups)',
    price: 'From $39.95/scan',
    addOns: 'DEXA only; multi-scan packages lower per-scan cost',
    note: 'National DEXA chain running a fixed Gold Coast clinic plus mobile vans and pop-ups across Chicago neighborhoods. Flat $39.95 entry fee, no referral, in and out in under 15 minutes; over 500,000 scans performed.',
    website: 'https://www.bodyspec.com/dexa-scan-chicago',
  },
  {
    name: 'Live Lean Rx Chicago',
    neighborhood: 'Andersonville — 1519 W Foster Ave',
    price: '$75/scan',
    addOns: 'Starting Line Package $425: 2 DEXA + 1 RMR + 2 consults; RMR, VO2 max, food-sensitivity testing',
    note: 'Andersonville franchise of the Live Lean Rx network bundling DEXA with RMR, VO2 max, and food-sensitivity testing. The cheapest independent fixed studio in the city; scans run 5-10 minutes.',
    website: 'https://liveleanrx.com/locations/chicago-illinois',
  },
  {
    name: 'DexaFit Chicago (Wheaton)',
    neighborhood: 'Western suburbs — 2100 Manchester Rd, Wheaton',
    price: '$99-185/scan',
    addOns: '3D body scan, VO2 max, RMR; New Client Special bundle',
    note: 'Western-suburbs DexaFit franchise pairing DEXA with 3D body scanning, VO2 max, and RMR. Markets an AI-enhanced report with biological-age and longevity estimates; ~7-minute scan, rescans every 3-6 months.',
    website: 'https://www.dexafit.com/',
  },
  {
    name: 'Bracey Performance',
    neighborhood: 'River West — 833 W Chicago Ave, Lower Level',
    price: '$100-150/scan',
    addOns: 'DEXA only; per-scan, no membership',
    note: 'Independent, owner-run performance studio in River West scanning out of its lower-level lab. Built for athletes tracking body comp over time; ~15-minute scan with regional muscle/fat, visceral fat, and bone density.',
    website: 'https://braceyperformance.com/dexa-dxa-body-composition-scan/',
  },
  {
    name: 'BZ Longevity',
    neighborhood: 'Downtown — N Elston Ave',
    price: '$125/scan',
    addOns: 'VO2 testing; packages valid 12 months',
    note: 'Downtown longevity-focused provider on N Elston Ave bookable through the DEXA Scan Near Me network. Pairs body-composition scanning with VO2 and wellness testing; full appointment runs 20-30 minutes.',
    website: 'https://dexascan.com/products/dexa-scan-in-downtown-chicago-il-n-elston-ave',
  },
  {
    name: 'Moonshot Medical and Performance',
    neighborhood: 'Park Ridge — 542 Busse Hwy (~25 min from downtown)',
    price: '$150/scan',
    addOns: '$405 bundle with 60+ biomarker blood panel; HSA/FSA accepted',
    note: 'Independent direct-pay clinic running an on-site Hologic Horizon scanner with provider-reviewed results, no referral. Standalone $150 or $405 bundled with a 60+ biomarker panel; accommodates patients up to 400 lbs.',
    website: 'https://moonshotmp.com/learn/dexa-scan-chicago/',
  },
];

export default function DexaScanCostChicago() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'DEXA Scan Cost in Chicago (2026)',
    description:
      'A 2026 price guide to DEXA body-composition scans in Chicago — what they cost, where to get one, what affects the price, and how Chicago pricing compares.',
    url: 'https://vitalityscout.com/guides/dexa-scan-cost-chicago',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-chicago#faq' },
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
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan Chicago pricing', url: 'https://www.bodyspec.com/dexa-scan-chicago' },
      { '@type': 'CreativeWork', name: 'BodySpec — How Much Does a DEXA Scan Cost in Major Cities', url: 'https://www.bodyspec.com/blog/post/how_much_does_a_dexa_scan_cost_in_major_cities' },
      { '@type': 'CreativeWork', name: 'Moonshot Medical — DEXA Scan in Chicago ($150, no referral)', url: 'https://moonshotmp.com/learn/dexa-scan-chicago/' },
      { '@type': 'CreativeWork', name: 'Live Lean Rx — DEXA Scan Chicago, Illinois', url: 'https://liveleanrx.com/locations/chicago-illinois' },
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan Radiation: How Much Is It', url: 'https://www.bodyspec.com/blog/post/dexa_scan_radiation_how_much_is_it_and_is_it_safe' },
      { '@type': 'CreativeWork', name: 'UCSF Radiology — Why DXA/DEXA beats BMI', url: 'https://radiology.ucsf.edu/blog/dxadexa-beats-bmi-using-x-ray-exam-measure-body-composition-fat-loss' },
      { '@type': 'CreativeWork', name: 'Medicare — Bone mass measurements coverage', url: 'https://www.medicare.gov/coverage/bone-mass-measurements' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-chicago#faq', url: 'https://vitalityscout.com/guides/dexa-scan-cost-chicago' };

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
              Chicago Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            DEXA Scan Cost in Chicago
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What a body-composition DEXA scan actually costs in Chicago in 2026, where to
            get one, and how to read the price gap between mobile pop-ups and clinic scanners.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A body-composition DEXA scan in Chicago costs roughly{' '}
              <strong>$39.95 to $150</strong>, with most independent studios in the{' '}
              <strong>$75-$150</strong> range. The cheapest entry point is BodySpec&apos;s
              Gold Coast clinic and mobile pop-ups at $39.95; Live Lean Rx in Andersonville
              runs $75; Park Ridge&apos;s Moonshot Medical charges $150 with a Hologic scanner.
              Packages and bundles lower the per-scan price. These are advertised estimates to
              confirm with the provider. This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 9 min read
          </p>
        </div>
      </section>

      {/* Quick price snapshot */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Chicago DEXA Scan Price Snapshot (2026)</h2>

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
              {CHICAGO_CLINICS.map((c, i) => (
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
          <Link href="/dexa-scans/illinois/chicago" className="text-blue-600 hover:underline">
            Chicago DEXA clinic directory
          </Link>.
        </p>
      </section>

      {/* What drives the price */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Drives the Price Difference</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              Chicago&apos;s cash-pay DEXA range is roughly $40 to $150 for a single scan — and
              BodySpec&apos;s own market survey pegs the broader Chicago average at $90-$250 once
              hospital and radiology pricing is folded in. A few concrete things move the number:
            </p>
            <ul>
              <li>
                <strong>Chain pop-up vs independent clinic.</strong> BodySpec runs a single Gold
                Coast storefront plus mobile pop-ups rather than a network of leased studios, which
                keeps the entry price at $39.95. Independent clinics like Bracey Performance in River
                West or Moonshot in Park Ridge carry their own lab, scanner, and staff, landing at
                $100-$150.
              </li>
              <li>
                <strong>Bundled testing.</strong> Live Lean Rx, DexaFit, and BZ Longevity add VO2
                max, resting metabolic rate (RMR), or 3D body scanning. A standalone DEXA costs less
                than a metabolic bundle — Moonshot&apos;s $150 scan jumps to $405 once you add a 60+
                biomarker blood panel.
              </li>
              <li>
                <strong>Scanner and clinical read.</strong> Moonshot scans on a Hologic Horizon and
                a provider reviews your results during the visit; BodySpec&apos;s Chicago clinic runs
                a GE Lunar iDXA. A provider-reviewed result prices above a self-serve scan-and-report.
              </li>
              <li>
                <strong>Location inside the metro.</strong> The cheapest fixed options sit in the
                city core (Gold Coast, Andersonville), while bundled and suburban clinics (Wheaton,
                Park Ridge) trade a longer drive for fuller testing. Match the location to whether
                you want a quick number or a full workup.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Clinic cards */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Get a DEXA Scan in Chicago</h2>
        <p className="text-gray-600 mb-6">
          Six real, currently operating Chicago-area DEXA providers, from cheapest to most premium.
          Each listing was verified against the clinic&apos;s own site in June 2026.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {CHICAGO_CLINICS.map((c) => (
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

      {/* How Chicago compares */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Chicago Pricing Compares</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Chicago body-composition DEXA pricing sits a touch below the coastal markets. BodySpec
              advertises its flat <strong>$39.95</strong> scan nationwide, and its own survey puts a
              U.S. average around <strong>$150-$300</strong> per scan once hospitals and radiology
              centers are included, with Chicago specifically at <strong>$90-$250</strong>. By
              comparison, New York&apos;s independent studios reach $255 (Fitnescity) and Los Angeles
              hospital pricing climbs to $400.
            </p>
            <p>
              The practical takeaway: Chicago is a relatively affordable DEXA market. A sub-$80 scan
              is easy to find in the city core — BodySpec at $39.95, Live Lean Rx at $75 — while the
              fuller, provider-reviewed or fully-bundled experience runs $125-$150, still under what
              the same workup costs in NYC or LA.
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
              DEXA scan for body composition is generally elective and paid out of pocket. Some
              Chicago clinics, such as Moonshot Medical in Park Ridge, accept HSA/FSA cards for the
              cash price. The prices in this guide are body-composition scans.
            </p>
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose a Chicago DEXA Clinic</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for cost</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>BodySpec Chicago</strong> from $39.95 — Gold Coast clinic plus citywide pop-ups</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Live Lean Rx</strong> at $75 in Andersonville, with a $425 bundle for repeat tracking</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for a fuller picture</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Moonshot Medical</strong> for a Hologic scan, provider read, and a $405 bloodwork bundle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>DexaFit Wheaton / BZ Longevity</strong> for DEXA bundled with 3D scan, VO2 max, or RMR</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mt-8">
            <p>Before you book, confirm a few practical points with the clinic:</p>
            <ul>
              <li>Is the price for the scan only, or does it include a results consultation?</li>
              <li>Will you see the same machine each visit? (Switching devices reduces tracking accuracy.)</li>
              <li>Does the clinic accept HSA/FSA if you want to use pre-tax dollars?</li>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Find a DEXA Scan in Chicago</h3>
          <p className="text-gray-600 mb-6">
            Compare every verified Chicago DEXA provider — prices, neighborhoods, and add-on testing.
          </p>
          <Link
            href="/dexa-scans/illinois/chicago"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            View Chicago DEXA Clinics →
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
                <div className="font-bold text-gray-900">DEXA Scan Cost: New York City</div>
                <div className="text-sm text-gray-600">How NYC DEXA pricing compares to Chicago</div>
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
            <li>• <a href="https://www.bodyspec.com/dexa-scan-chicago" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — DEXA Scan Chicago (pricing)</a></li>
            <li>• <a href="https://www.bodyspec.com/blog/post/how_much_does_a_dexa_scan_cost_in_major_cities" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — How Much Does a DEXA Scan Cost in Major Cities</a></li>
            <li>• <a href="https://moonshotmp.com/learn/dexa-scan-chicago/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Moonshot Medical — DEXA Scan in Chicago ($150, no referral)</a></li>
            <li>• <a href="https://liveleanrx.com/locations/chicago-illinois" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Live Lean Rx — DEXA Scan Chicago, Illinois</a></li>
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
          description="Get our Chicago DEXA price comparison plus tips for reading your scan and tracking real progress."
          source="guide_dexa_scan_cost_chicago"
        />
      </div>

      <Footer />
    </main>
  );
}
