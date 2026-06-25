import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'DEXA Scan Cost Orange County: 2026 Price Guide' },
  alternates: { canonical: 'https://vitalityscout.com/guides/dexa-scan-cost-orange-county' },
  description: 'What a DEXA body-composition scan costs in Orange County in 2026 — from ~$39 BodySpec mobile to $119-179 DexaFit Irvine. OC clinics and how to save.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price answer ends with the verify-with-
// provider hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a DEXA scan cost in Orange County?',
    answer:
      'A single body-composition DEXA scan in Orange County ranges from about $39 (BodySpec, which serves OC through mobile vans) up to roughly $119-$179 at DexaFit in Irvine, where the scan is bundled with metabolic testing. BodySpec packages bring the per-scan price down further for repeat tracking. These are advertised prices that change frequently; confirm current pricing directly with the clinic before booking.',
  },
  {
    question: 'Where is the cheapest DEXA scan in Orange County?',
    answer:
      'BodySpec advertises the lowest entry price in Orange County, from about $39 per scan, and serves OC through mobile vans that visit Irvine, Newport Beach, Costa Mesa, Huntington Beach, and South OC stops. Its multi-scan packages lower the per-scan cost further. Cheapest is not always the best fit — also weigh location, whether you want add-on testing, and using the same machine each visit. Verify current pricing with the provider.',
  },
  {
    question: 'Is there a DEXA scan in Irvine?',
    answer:
      'Yes. DexaFit operates an Orange County studio in Irvine (Sky Park Circle) offering DEXA body composition alongside VO2 max, RMR, and 3D body scanning, typically in the $119-$179 range for a scan. BodySpec mobile vans also make regular Irvine stops from about $39. Irvine is the densest part of the OC market for body-composition testing. Confirm current pricing and the Irvine schedule with each provider.',
  },
  {
    question: 'Is a DEXA scan covered by insurance in California?',
    answer:
      'A DEXA scan ordered for bone-density screening can be covered — Medicare Part B covers a bone-mass measurement once every 24 months for people who qualify, and many commercial plans cover osteoporosis screening. A DEXA scan for body composition (body fat and lean mass) is generally treated as elective and paid out of pocket. The cash prices on this page are body-composition scans. Confirm coverage with your insurer and the clinic.',
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

// Real, pre-verified Orange County DEXA clinics (source: src/data/dexa-clinics-
// california.ts rows where citySlug === 'orange-county', lastVerified 2026-06-10;
// BodySpec entry price ("as low as $39") and the DexaFit Irvine address
// independently re-checked against each clinic's own site, June 2026). Prices are
// advertised estimates to confirm with the provider.
const OC_CLINICS = [
  {
    name: 'BodySpec — Orange County',
    where: 'Mobile vans (Irvine, Newport Beach, Costa Mesa, Huntington Beach)',
    price: 'From ~$39/scan',
    addOns: 'DEXA only; multi-scan packages',
    note: 'The most affordable DEXA in OC. BodySpec runs mobile vans that visit Irvine, Newport Beach, Costa Mesa, and Huntington Beach on a weekly rotating schedule — book where you live or work. Under-15-minute scan with segmental and visceral-fat analysis.',
    website: 'https://www.bodyspec.com/dexa-scan-orange-county',
  },
  {
    name: 'BodySpec — South OC',
    where: 'Mobile vans (Mission Viejo, Laguna Niguel, San Juan Capistrano)',
    price: 'From ~$39/scan',
    addOns: 'DEXA only; multi-scan packages',
    note: 'Same BodySpec service covering the South County corridor, where fixed studios are sparse. Mobile units visit gyms in Mission Viejo, Laguna Niguel, and San Juan Capistrano on a rotating schedule — check the site for the current stop list.',
    website: 'https://www.bodyspec.com/dexa-scan-orange-county',
  },
  {
    name: 'DexaFit Irvine',
    where: 'Irvine — 18001 Sky Park Circle, Suite K',
    price: '$119-179/scan',
    addOns: 'VO2 max, RMR, 3D body scan, biomarker analysis',
    note: 'The full-suite OC studio. Bundles a fixed-studio DEXA with VO2 max, resting metabolic rate, and a 3D body scan under one roof in central Irvine — the priciest single scan in OC, but the only one-stop metabolic workup in the county.',
    website: 'https://www.dexafit.com/locations/california/orange-county',
  },
];

export default function DexaScanCostOrangeCounty() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'DEXA Scan Cost in Orange County (2026)',
    description:
      'A 2026 price guide to DEXA body-composition scans in Orange County — what they cost, where to get one in Irvine, Santa Ana, Newport Beach and South OC, what affects the price, and how to save.',
    url: 'https://vitalityscout.com/guides/dexa-scan-cost-orange-county',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-orange-county#faq' },
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
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan Orange County (pricing)', url: 'https://www.bodyspec.com/dexa-scan-orange-county' },
      { '@type': 'CreativeWork', name: 'DexaFit — Orange County (Irvine) location', url: 'https://www.dexafit.com/locations/california/orange-county' },
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan Radiation: How Much Is It', url: 'https://www.bodyspec.com/blog/post/dexa_scan_radiation_how_much_is_it_and_is_it_safe' },
      { '@type': 'CreativeWork', name: 'UCSF Radiology — Why DXA/DEXA beats BMI', url: 'https://radiology.ucsf.edu/blog/dxadexa-beats-bmi-using-x-ray-exam-measure-body-composition-fat-loss' },
      { '@type': 'CreativeWork', name: 'Medicare — Bone mass measurements coverage', url: 'https://www.medicare.gov/coverage/bone-mass-measurements' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-orange-county#faq', url: 'https://vitalityscout.com/guides/dexa-scan-cost-orange-county' };

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
              Orange County Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            DEXA Scan Cost in Orange County
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What a body-composition DEXA scan actually costs across OC in 2026 — from
            mobile vans to the Irvine metabolic studios — and how to read the price gap.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A body-composition DEXA scan in Orange County costs roughly{' '}
              <strong>$39 to $179</strong>. The cheapest option is BodySpec, from{' '}
              <strong>~$39</strong> via mobile vans across the county; the priciest is
              DexaFit in Irvine at <strong>$119-$179</strong>, where the scan is bundled
              with VO2 max and metabolic testing. BodySpec packages lower the per-scan
              price for repeat tracking. These are advertised estimates to confirm with
              the provider. This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 9 min read
          </p>
        </div>
      </section>

      {/* Quick price snapshot */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Orange County DEXA Scan Price Snapshot (2026)</h2>

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
              {OC_CLINICS.map((c, i) => (
                <tr key={c.name} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{c.name}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{c.where}</td>
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
          <Link href="/dexa-scans/california/orange-county" className="text-blue-600 hover:underline">
            Orange County DEXA clinic directory
          </Link>.
        </p>
      </section>

      {/* What drives the price */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Drives the Price Difference</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              The OC range is roughly a 4x spread — from a ~$40 mobile-van scan to a $179
              full-suite studio booking — and the gap comes down to a few concrete things:
            </p>
            <ul>
              <li>
                <strong>Mobile vans vs a fixed studio.</strong> BodySpec runs mobile vans across
                OC rather than leasing a studio in every city, which keeps the entry price near $40.
                DexaFit&apos;s fixed Irvine studio carries Spectrum-corridor rent and staffing that
                show up in a $119-$179 scan.
              </li>
              <li>
                <strong>Standalone scan vs a metabolic bundle.</strong> BodySpec sells the DEXA on
                its own. DexaFit Irvine bundles the scan with VO2 max, resting metabolic rate (RMR),
                a 3D body scan, and biomarker analysis — a fuller workup that prices above a plain
                scan-and-report.
              </li>
              <li>
                <strong>Geography inside the county.</strong> Central OC (Irvine, Santa Ana, Costa
                Mesa) has the densest options and the most competition. South County — Mission Viejo,
                Laguna Niguel, San Juan Capistrano — leans on BodySpec&apos;s mobile route because
                fixed studios are sparse there.
              </li>
              <li>
                <strong>Packages and repeat tracking.</strong> Per-scan cost drops with volume —
                BodySpec&apos;s multi-scan packages bring the price toward ~$40 each. If you plan to
                track body recomposition over months, package math usually wins over single scans.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Clinic cards */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Get a DEXA Scan in Orange County</h2>
        <p className="text-gray-600 mb-6">
          Real, currently operating OC DEXA providers, from cheapest to most comprehensive. Each
          listing was verified against the clinic&apos;s own site in June 2026.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {OC_CLINICS.map((c) => (
            <div key={c.name} className="bg-white rounded-lg border border-gray-200 p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-gray-900">{c.name}</h3>
                <span className="text-sm font-semibold text-green-700 whitespace-nowrap pl-2">{c.price}</span>
              </div>
              <div className="text-xs text-gray-500 mb-2">{c.where}</div>
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

        <p className="text-sm text-gray-500 mt-6">
          OC has a handful of other body-composition providers (for example, performance and
          wellness studios in Newport Beach and Aliso Viejo) that advertise DEXA alongside VO2 max
          testing but do not publish a fixed scan price. We list only providers we could verify with
          a checkable price; call them directly for a current quote.
        </p>
      </section>

      {/* How OC compares */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Orange County Pricing Compares</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Orange County DEXA pricing sits close to the national picture and a touch below the
              Los Angeles range — OC has fewer ultra-premium boutique labs than LA or NYC, so the
              top of the range stops near <strong>$179</strong> rather than the $255+ you see in
              Manhattan. National body-composition DEXA prices run roughly <strong>$40-$179</strong>:
              BodySpec sits at the bottom nationwide (from ~$39) and DexaFit studios at $119-$179,
              and OC tracks both of those chains directly.
            </p>
            <p>
              The practical takeaway: an Orange County resident can get a sub-$50 scan almost
              anywhere in the county thanks to BodySpec&apos;s mobile route, while the fully-bundled
              Irvine metabolic workup costs about what it would in any major metro. Compared with
              neighboring{' '}
              <Link href="/guides/dexa-scan-cost-los-angeles" className="text-blue-600 hover:underline">
                Los Angeles
              </Link>
              , OC has a tighter spread — no hospital-imaging $400 outliers in the consumer
              body-composition lane, and no $39 floor that LA&apos;s denser van network occasionally
              undercuts.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose an Orange County DEXA Clinic</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for cost</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>BodySpec</strong> from ~$39 — mobile vans countywide, quick and no-frills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>BodySpec multi-scan packages</strong> toward ~$40/scan for repeat body-recomp tracking</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for a fuller picture</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>DexaFit Irvine</strong> for DEXA bundled with VO2 max, RMR, and a 3D body scan in one visit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Central OC (Irvine / Santa Ana / Costa Mesa)</strong> if you want the densest set of options and easy rebooking</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mt-8">
            <p>Before you book, confirm a few practical points with the clinic:</p>
            <ul>
              <li>Is the price for the scan only, or does it include a results consultation?</li>
              <li>Will you see the same machine each visit? (Switching devices reduces tracking accuracy.)</li>
              <li>If you are in South County, what is the current BodySpec mobile-stop schedule near you?</li>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Find a DEXA Scan in Orange County</h3>
          <p className="text-gray-600 mb-6">
            Compare every verified OC DEXA provider — prices, locations, and add-on testing.
          </p>
          <Link
            href="/dexa-scans/california/orange-county"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            View Orange County DEXA Clinics →
          </Link>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/dexa-scan-cost-los-angeles" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <div className="font-bold text-gray-900">DEXA Scan Cost in Los Angeles</div>
                <div className="text-sm text-gray-600">The neighboring metro&apos;s prices and providers</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/dexa-scan-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <div className="font-bold text-gray-900">DEXA Scan: Complete Guide</div>
                <div className="text-sm text-gray-600">What it measures, accuracy, and how to use it</div>
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
            <li>• <a href="https://www.bodyspec.com/dexa-scan-orange-county" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BodySpec — DEXA Scan Orange County (pricing & locations)</a></li>
            <li>• <a href="https://www.dexafit.com/locations/california/orange-county" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DexaFit — Orange County (Irvine) location</a></li>
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
          description="Get our Orange County DEXA price comparison plus tips for reading your scan and tracking real progress."
          source="guide_dexa_scan_cost_orange_county"
        />
      </div>

      <Footer />
    </main>
  );
}
