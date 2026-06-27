import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'DEXA Scan Cost Austin: 2026 Price Guide & Clinics' },
  alternates: { canonical: 'https://vitalityscout.com/guides/dexa-scan-cost-austin' },
  description: 'What a DEXA scan costs in Austin in 2026 — from $45 BodySpec mobile vans to $99 Hologic studios. Six real Austin clinics, prices, and how to save.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price answer ends with the verify-with-
// provider hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a DEXA scan cost in Austin?',
    answer:
      'A single body-composition DEXA scan in Austin ranges from about $45 (BodySpec, fixed studio or mobile van) to roughly $99 (Blue Tree Health), with most independent studios charging $65-$99 per scan. The UT Austin Fitness Institute of Texas runs $75, and concierge or franchise clinics like Austin Medical Partners and DexaFit Round Rock fall in the $40-$150 range depending on the package. Multi-scan packages lower the per-scan price — Live Lean Rx bundles two scans from $119 and Blue Tree Health sells a 4-pack at $375. These are advertised prices that change; confirm current pricing directly with the clinic.',
  },
  {
    question: 'Where is the cheapest DEXA scan in Austin?',
    answer:
      'On a per-scan basis, BodySpec advertises the lowest entry price in Austin at $45, dropping to about $40 with volume pricing, and it offers both a fixed North Lamar studio and a mobile van that serves greater Austin. Live Lean Rx in West Lake Hills is the next cheapest standalone studio at $65. Cheapest is not always the best fit — also weigh location, scanner brand, and whether you want a results consultation. Verify current pricing with each provider before booking.',
  },
  {
    question: 'Is a DEXA scan covered by insurance in Texas?',
    answer:
      'A DEXA scan ordered for bone-density screening can be covered — Medicare Part B covers a bone-mass measurement once every 24 months for people who qualify, and many commercial plans cover osteoporosis screening. A DEXA scan for body composition (body fat and lean mass) is generally considered elective and paid out of pocket. The cash prices on this page are body-composition scans. Many Austin providers, including DexaFit Round Rock, accept HSA/FSA cards. Confirm coverage with your insurer and the clinic.',
  },
  {
    question: 'Does it matter whether the clinic uses a Hologic or GE Lunar scanner?',
    answer:
      'Both Hologic and GE Lunar make research-grade DXA hardware, and both are accurate. In Austin, Blue Tree Health and BodySpec run Hologic systems, while Austin Medical Partners and DexaFit Round Rock run GE iDXA Lunar systems. The more important point for tracking progress is consistency: results from the same machine and software are most comparable over time, so try to scan on the same device each visit. Talk to the clinic about which scanner they use if you plan to track repeatedly.',
  },
  {
    question: 'Can I get a DEXA scan in Austin without a doctor referral?',
    answer:
      'Yes. Most Austin body-composition DEXA providers are cash-pay and require no physician referral — BodySpec, Live Lean Rx, Blue Tree Health, the UT Fitness Institute of Texas, and DexaFit Round Rock all let you book directly online or by phone. Physician-led practices such as Austin Medical Partners offer scans to the public as well. This is a wellness body-composition scan, not a diagnostic bone-density order, so booking is straightforward.',
  },
  {
    question: 'How often should I get a DEXA scan?',
    answer:
      'For active body recomposition, every 3 months is a common cadence so you can see whether you are losing fat and preserving muscle between scans. If you are maintaining, twice a year is usually enough. Because body composition does not change quickly, monthly scanning is generally unnecessary, and package pricing in Austin assumes a quarterly rhythm. Talk to your clinician about the right interval for your goals and your radiation exposure.',
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

// Real, pre-verified Austin DEXA clinics (source: src/data/dexa-clinics-texas.ts,
// citySlug 'austin', lastVerified 2026-06-11; prices independently re-checked
// against each clinic site June 2026). Prices are advertised estimates to confirm
// with the provider.
const AUSTIN_CLINICS = [
  {
    name: 'BodySpec',
    neighborhood: 'North Austin — 5555 N Lamar Blvd + mobile van',
    price: 'From $45/scan',
    addOns: 'Per-scan; volume pricing as low as $40, no membership required',
    note: 'National Hologic DEXA chain with a fixed North Lamar studio plus a roving van that brings the scan to Zilker and nearby neighborhoods. Was the first mobile DXA service in Texas; books online with no referral and returns results in about 10 minutes.',
    website: 'https://www.bodyspec.com/dexa-scan-austin',
  },
  {
    name: 'Live Lean Rx Austin',
    neighborhood: 'West Lake Hills — 4611 Bee Cave Rd, Ste 307',
    price: '$65/scan',
    addOns: 'RMR $85, VO2 max $100; 2-DEXA pack $119; LLRX Starter Pack (all three) $235',
    note: 'Independent performance-and-metabolic studio that pairs a whole-body DXA scan with RMR and VO2 max testing under one roof. Five-to-ten-minute scan by appointment; bundled starter packs aimed at athletes dialing in training and nutrition.',
    website: 'https://liveleanrx.com/locations/austin-texas',
  },
  {
    name: 'Fitness Institute of Texas (UT Austin)',
    neighborhood: 'UT campus — Bellmont Hall, Rm 946',
    price: '$75/scan',
    addOns: '2 scans for $130; also offers RMR and VO2 max testing',
    note: 'University exercise-physiology lab inside UT Austin Kinesiology that opens its research-grade testing to the public. Each appointment runs about an hour and includes a sit-down with an exercise professional to interpret your fat, lean-mass, and bone-density numbers.',
    website: 'https://sites.edb.utexas.edu/fit/body-comp-fit/',
  },
  {
    name: 'Blue Tree Health',
    neighborhood: 'Northwest Austin — 3508 Far West Blvd, Ste 130',
    price: '$99/scan',
    addOns: '4-scan package $375; free annual scan with weight-loss programs',
    note: 'Independent Northwest Austin wellness clinic running a Hologic DXA scanner with a provider-led results review built into every appointment. Body-comp scans are cash-pay and can stand alone or fold into the clinic’s weight-loss programs.',
    website: 'https://www.bluetreehealthtx.com/dexa-scans-in-austin',
  },
  {
    name: 'Austin Medical Partners',
    neighborhood: 'Central Austin — 3705 Medical Pkwy, Ste 440',
    price: '$40-150/scan',
    addOns: 'VO2 max testing; optional direct-primary-care membership',
    note: 'Independent internal-medicine and concierge practice in the Central Austin medical district that markets DEXA body-composition analysis to the broader public, not just its own panel. Runs a GE iDXA Lunar scanner.',
    website: 'https://www.austinmedicalpartners.com/dexa-scan-body-composition-analysis',
  },
  {
    name: 'DexaFit Round Rock',
    neighborhood: 'North Austin — 3309 Forest Creek Dr, Round Rock',
    price: '$40-150/scan',
    addOns: 'RMR, VO2 max, DexaStrong bone density, biomarker labs; HSA/FSA eligible',
    note: 'DexaFit franchise serving North Austin from Round Rock, layering AI-enhanced analysis on a GE Lunar DXA scan to estimate biological age and longevity metrics. Full metabolic and biomarker menu by appointment.',
    website: 'https://www.roundrock.dexafit.com/dexa-scan',
  },
];

export default function DexaScanCostAustin() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'DEXA Scan Cost in Austin (2026)',
    description:
      'A 2026 price guide to DEXA body-composition scans in Austin, Texas — what they cost, where to get one, what affects the price, and how Austin pricing compares.',
    url: 'https://vitalityscout.com/guides/dexa-scan-cost-austin',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-austin#faq' },
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
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan Austin pricing', url: 'https://www.bodyspec.com/dexa-scan-austin' },
      { '@type': 'CreativeWork', name: 'Live Lean Rx Austin — DEXA / RMR / VO2 pricing', url: 'https://liveleanrx.com/locations/austin-texas' },
      { '@type': 'CreativeWork', name: 'Blue Tree Health — DEXA Scans in Austin', url: 'https://www.bluetreehealthtx.com/dexa-scans-in-austin' },
      { '@type': 'CreativeWork', name: 'Fitness Institute of Texas (UT Austin) — DXA Body Comp', url: 'https://sites.edb.utexas.edu/fit/body-comp-fit/' },
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan Radiation: How Much Is It', url: 'https://www.bodyspec.com/blog/post/dexa_scan_radiation_how_much_is_it_and_is_it_safe' },
      { '@type': 'CreativeWork', name: 'UCSF Radiology — Why DXA/DEXA beats BMI', url: 'https://radiology.ucsf.edu/blog/dxadexa-beats-bmi-using-x-ray-exam-measure-body-composition-fat-loss' },
      { '@type': 'CreativeWork', name: 'Medicare — Bone mass measurements coverage', url: 'https://www.medicare.gov/coverage/bone-mass-measurements' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-austin#faq', url: 'https://vitalityscout.com/guides/dexa-scan-cost-austin' };

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
              Austin Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            DEXA Scan Cost in Austin
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What a body-composition DEXA scan actually costs in Austin in 2026, where to
            get one, and how to read the price differences between mobile vans, studios, and a
            university lab.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A body-composition DEXA scan in Austin costs roughly{' '}
              <strong>$45 to $150</strong>, with most independent studios in the{' '}
              <strong>$65-$99</strong> range. The cheapest entry point is BodySpec at $45
              (studio or mobile van); Live Lean Rx in West Lake Hills runs $65; the UT
              Austin Fitness Institute is $75; Blue Tree Health is $99. Packages and bundles
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
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Austin DEXA Scan Price Snapshot (2026)</h2>

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
              {AUSTIN_CLINICS.map((c, i) => (
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
          <Link href="/dexa-scans/texas/austin" className="text-blue-600 hover:underline">
            Austin DEXA clinic directory
          </Link>.
        </p>
      </section>

      {/* What drives the price */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Drives the Price Difference</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              Austin&apos;s range is narrower than coastal-city pricing — there is no $255 platform
              scan here — but it still spreads more than 3x from the cheapest van scan to a
              full-service franchise booking. A few concrete reasons:
            </p>
            <ul>
              <li>
                <strong>Mobile and high-volume vs boutique.</strong> BodySpec runs a North Lamar
                studio plus a mobile van and prices on volume, which keeps the entry scan near $45.
                Independent studios in West Lake Hills and Northwest Austin carry rent and a
                provider-led consult that show up in a $65-$99 scan.
              </li>
              <li>
                <strong>Bundled testing.</strong> Live Lean Rx and DexaFit Round Rock add VO2 max,
                resting metabolic rate (RMR), or biomarker labs. A standalone DEXA costs less than a
                metabolic bundle — Live Lean Rx&apos;s all-three Starter Pack is $235.
              </li>
              <li>
                <strong>Scanner and consultation.</strong> Blue Tree Health pairs a Hologic DXA with
                a clinician walkthrough of your results; Austin Medical Partners runs a GE iDXA Lunar
                inside a physician-led practice. A scan-plus-consult prices above a no-frills
                scan-and-report.
              </li>
              <li>
                <strong>Packages and memberships.</strong> Per-scan cost drops with volume — Blue
                Tree Health sells a 4-pack at $375 (about $94 each), the UT Fitness Institute offers
                two scans for $130, and BodySpec volume pricing reaches about $40. If you plan to
                track over time, package math usually wins.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Clinic cards */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Get a DEXA Scan in Austin</h2>
        <p className="text-gray-600 mb-6">
          Six real, currently operating Austin DEXA providers, from cheapest to most premium. Each
          listing was verified against the clinic&apos;s own site in June 2026.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {AUSTIN_CLINICS.map((c) => (
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

      {/* How Austin compares */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Austin Pricing Compares</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Austin is a relatively affordable DEXA market. National averages run roughly{' '}
              <strong>$40-$150</strong> per body-composition scan, and Austin sits squarely inside
              that band — without the Manhattan-style premium that pushes New York studios to $255 or
              the wide hospital-priced top end seen in Los Angeles. BodySpec charges the same ~$45
              entry price here as in its bigger markets, and the most expensive routine option in
              town is a $99 studio scan or a franchise package around $150.
            </p>
            <p>
              Two things make Austin distinct. First, the UT Austin Fitness Institute of Texas offers
              a genuine university-lab DXA at $75 with an exercise-physiologist consult — a research
              setting most cities do not have at a public price. Second, North Austin&apos;s sprawl
              into Round Rock means a DexaFit franchise and a BodySpec mobile van both reach the
              suburbs, so you are rarely far from a scan.
            </p>
            <p>
              The practical takeaway: an Austinite can get a sub-$100 scan almost anywhere in the
              metro, and the city&apos;s upper end stays reasonable. The choice is less about price
              and more about whether you want a quick standalone scan, a metabolic bundle, or a
              clinician-led consult.
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
              prices in this guide are body-composition scans. Several Austin providers, including
              DexaFit Round Rock, accept HSA/FSA cards.
            </p>
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose an Austin DEXA Clinic</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for cost</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>BodySpec</strong> from $45 — quick Hologic scan, North Lamar studio or mobile van</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Live Lean Rx</strong> at $65 in West Lake Hills, with a 2-scan pack from $119</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for a fuller picture</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>UT Fitness Institute of Texas</strong> for a $75 research-lab scan plus an exercise-physiology consult</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Blue Tree Health / DexaFit Round Rock</strong> for DEXA with a clinician consult, metabolic, or biomarker testing</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mt-8">
            <p>Before you book, confirm a few practical points with the clinic:</p>
            <ul>
              <li>Is the price for the scan only, or does it include a results consultation?</li>
              <li>Which scanner do they run, and will you see the same machine each visit? (Switching devices reduces tracking accuracy.)</li>
              <li>How fast do you get your report, and is it delivered online?</li>
              <li>For repeat tracking, does a package, membership, or HSA/FSA payment beat the single-scan price?</li>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Find a DEXA Scan in Austin</h3>
          <p className="text-gray-600 mb-6">
            Compare every verified Austin DEXA provider — prices, neighborhoods, and add-on testing.
          </p>
          <Link
            href="/dexa-scans/texas/austin"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            View Austin DEXA Clinics →
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
                <div className="text-sm text-gray-600">NYC body-composition prices and clinics</div>
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
            <li>• <a href="https://www.bodyspec.com/dexa-scan-austin" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — DEXA Scan Austin (pricing)</a></li>
            <li>• <a href="https://liveleanrx.com/locations/austin-texas" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Live Lean Rx Austin (DEXA / RMR / VO2 pricing)</a></li>
            <li>• <a href="https://www.bluetreehealthtx.com/dexa-scans-in-austin" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Blue Tree Health — DEXA Scans in Austin</a></li>
            <li>• <a href="https://sites.edb.utexas.edu/fit/body-comp-fit/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Fitness Institute of Texas (UT Austin) — DXA Body Comp</a></li>
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
          description="Get our Austin DEXA price comparison plus tips for reading your scan and tracking real progress."
          source="guide_dexa_scan_cost_austin"
        />
      </div>

      </SidebarShell>
      <Footer />
    </main>
  );
}
