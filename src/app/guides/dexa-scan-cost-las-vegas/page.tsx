import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'DEXA Scan Cost Las Vegas: 2026 Prices & Clinics',
  description: 'What a body-composition DEXA scan costs in Las Vegas in 2026 — DexaFit $139, cash-pay studios, accredited imaging. Real LV clinics and how to save.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price answer ends with the verify-with-
// provider hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a DEXA scan cost in Las Vegas?',
    answer:
      'A single body-composition DEXA scan in Las Vegas runs roughly $139 to $200. DexaFit Las Vegas on W. Charleston Blvd advertises a single DEXA at $139, cash-pay performance clinics like Project Wellbeing and the Fitnescity partner network fall in a $40-$150 per-scan range, and accredited imaging through SDMI is closer to $90-$200. Unlike larger metros, Las Vegas has no mobile-van scan, so $139 is effectively the cheapest transparent single-scan price. These are advertised estimates that change; confirm current pricing with the clinic.',
  },
  {
    question: 'Where is the cheapest DEXA scan in Las Vegas?',
    answer:
      'On a flat, published single-scan price, DexaFit Las Vegas at $139 is the cheapest clearly-listed body-composition DEXA in the city. Cash-pay performance studios such as Project Wellbeing advertise a $40-$150 range and can be lower depending on the package, but they quote on request rather than a fixed web price. Las Vegas does not have the sub-$50 mobile-van option that bigger metros do. Cheapest is not always best — also weigh location, scanner, and whether you want a results consult. Verify current pricing with each provider before booking.',
  },
  {
    question: 'Do I need a doctor’s order for a DEXA scan in Las Vegas?',
    answer:
      'It depends where you go. Cash-pay performance and wellness clinics — DexaFit Las Vegas and Project Wellbeing — let you book a body-composition DEXA directly with no referral. Accredited medical imaging at SDMI (Steinberg Diagnostic Medical Imaging) requires a physician’s order before scheduling. Fitnescity’s booking platform coordinates any required order remotely so you do not need a separate doctor visit. If you want a no-referral scan, choose a cash-pay studio. Confirm the booking requirement with the provider.',
  },
  {
    question: 'Is a DEXA scan covered by insurance in Nevada?',
    answer:
      'A DEXA ordered for bone-density (osteoporosis) screening can be covered — Medicare Part B covers a bone-mass measurement once every 24 months for people who qualify, and many commercial Nevada plans cover osteoporosis screening with a physician order. A DEXA for body composition (body fat and lean mass) is generally treated as elective and paid out of pocket. The cash prices on this page are body-composition scans. Confirm coverage with your insurer and the clinic.',
  },
  {
    question: 'How much radiation is in a body-composition DEXA scan?',
    answer:
      'A full-body composition DEXA scan delivers roughly 4-5 microsieverts (µSv) of radiation, per BodySpec’s published figures. For context, the U.S. average background dose is about 8-10 µSv per day, a chest X-ray is roughly 20 µSv, and a cross-country flight is about 35 µSv. The dose is low, but it is still ionizing radiation — discuss frequency with a clinician if you are pregnant or scan often. This is information, not medical advice.',
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

// Real, pre-verified Las Vegas DEXA clinics (source: src/data/dexa-clinics-nevada.ts,
// lastVerified 2026-06-11; prices independently re-checked against each clinic
// site in June 2026). Prices are advertised estimates to confirm with the provider.
const LV_CLINICS = [
  {
    name: 'DexaFit Las Vegas',
    neighborhood: 'W. Charleston Blvd — 6883 W. Charleston Blvd, Ste A',
    price: '$139/scan',
    addOns: 'RMR $149, VO2 max $179, Styku 3D $65; bundles Premium $269 / MAX $289 / Elite $419',
    note: 'Las Vegas franchise of the national DexaFit chain. The only LV clinic publishing a flat single-DEXA price ($139), with metabolic and cardio testing bundled under one roof and a no-referral booking.',
    website: 'https://www.dexafitlv.com',
  },
  {
    name: 'Project Wellbeing',
    neighborhood: 'Summerlin / 215 Beltway — 7155 S. Buffalo Dr., Ste 165',
    price: '$40-150/scan',
    addOns: 'Optional 1-on-1 medical consult; VO2 max, bloodwork, movement screen; repeat-friendly packages',
    note: 'Independent cash-pay sports-science clinic near the 215 Beltway. Positions DEXA as the gold standard over InBody, with an optional clinician walkthrough to interpret fat, lean, and bone results.',
    website: 'https://www.projectwellbeing.co/dexa-scan-las-vegas',
  },
  {
    name: 'Fitnescity (Las Vegas Network)',
    neighborhood: 'Spring Valley — partner facilities',
    price: '$40-150/scan',
    addOns: 'RMR, VO2 max; coordinates any required physician order remotely',
    note: 'National insurance-free booking platform that schedules DEXA, RMR, and VO2 max through partner facilities in Spring Valley. Handles any required order for you and returns results to an online dashboard within two business days.',
    website: 'https://www.fitnescity.com/dexa-scan-in-las-vegas-nv',
  },
  {
    name: 'Las Vegas Medical Institute',
    neighborhood: 'S. Rampart Blvd — 851 S Rampart Blvd #220',
    price: '$40-150/scan',
    addOns: 'Standalone, or folded into age-management / BHRT membership programs',
    note: 'Physician-staffed age-management and hormone clinic running total-body composition on a research-grade GE Lunar iDXA scanner. The 6-8 minute scan is offered standalone or inside its longevity programs.',
    website: 'https://lasvegasmedicalinstitute.com/las-vegas-nv/body-composition-analysis-dxa/',
  },
  {
    name: 'SDMI (Steinberg Diagnostic Medical Imaging)',
    neighborhood: 'Valley-wide — 2950 S Maryland Pkwy + ~12 sites',
    price: '$90-200/scan',
    addOns: 'Body composition and fat content reported; doctor’s order required to book',
    note: 'ACR-accredited independent imaging group with roughly a dozen locations across the Las Vegas Valley and Henderson. Reports both bone mineral density and total body composition, but a physician’s order is required before scheduling.',
    website: 'https://www.sdmi-lv.com/services/dexa-scan',
  },
];

export default function DexaScanCostLasVegas() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'DEXA Scan Cost in Las Vegas (2026)',
    description:
      'A 2026 price guide to DEXA body-composition scans in Las Vegas — what they cost, where to get one, why prices vary, and how Las Vegas pricing compares to other US metros.',
    url: 'https://vitalityscout.com/guides/dexa-scan-cost-las-vegas',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-las-vegas#faq' },
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
      { '@type': 'CreativeWork', name: 'DexaFit Las Vegas — Pricing', url: 'https://www.dexafitlv.com/pricing' },
      { '@type': 'CreativeWork', name: 'Project Wellbeing — DEXA Scan Las Vegas', url: 'https://www.projectwellbeing.co/dexa-scan-las-vegas' },
      { '@type': 'CreativeWork', name: 'SDMI — DEXA Scan services', url: 'https://www.sdmi-lv.com/services/dexa-scan' },
      { '@type': 'CreativeWork', name: 'BodySpec — DEXA Scan Radiation: How Much Is It', url: 'https://www.bodyspec.com/blog/post/dexa_scan_radiation_how_much_is_it_and_is_it_safe' },
      { '@type': 'CreativeWork', name: 'UCSF Radiology — Why DXA/DEXA beats BMI', url: 'https://radiology.ucsf.edu/blog/dxadexa-beats-bmi-using-x-ray-exam-measure-body-composition-fat-loss' },
      { '@type': 'CreativeWork', name: 'Medicare — Bone mass measurements coverage', url: 'https://www.medicare.gov/coverage/bone-mass-measurements' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/dexa-scan-cost-las-vegas#faq', url: 'https://vitalityscout.com/guides/dexa-scan-cost-las-vegas' };

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
              Las Vegas Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            DEXA Scan Cost in Las Vegas
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What a body-composition DEXA scan actually costs in Las Vegas in 2026, where to
            get one, and why a Vegas scan splits between cash-pay studios and physician-led imaging.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A body-composition DEXA scan in Las Vegas costs roughly{' '}
              <strong>$139 to $200</strong> for a single scan. DexaFit Las Vegas advertises the
              lowest flat price at <strong>$139</strong>; cash-pay performance clinics like Project
              Wellbeing fall in a $40-$150 range; accredited imaging through SDMI runs about $90-$200
              with a doctor&apos;s order. Las Vegas has no mobile-van scan, so $139 is the cheapest
              transparent single-scan price. These are advertised estimates to confirm with the
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
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Las Vegas DEXA Scan Price Snapshot (2026)</h2>

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
              {LV_CLINICS.map((c, i) => (
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
          <Link href="/dexa-scans/nevada/las-vegas" className="text-blue-600 hover:underline">
            Las Vegas DEXA clinic directory
          </Link>.
        </p>
      </section>

      {/* What drives the price */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Drives the Price Difference</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              The Las Vegas DEXA market is tighter and higher-floored than bigger coastal metros.
              There is no $40 mobile van here, so the spread runs from about $139 to $200 — and the
              real difference is less about rent and more about <strong>who books you and on what
              machine</strong>:
            </p>
            <ul>
              <li>
                <strong>Cash-pay studio vs medical imaging.</strong> DexaFit Las Vegas and Project
                Wellbeing are walk-up, no-referral performance clinics — you book the scan directly.
                SDMI is accredited diagnostic imaging that requires a physician&apos;s order, which
                is part of why its scan sits higher in the range.
              </li>
              <li>
                <strong>Bundled testing.</strong> DexaFit, Project Wellbeing, and Fitnescity add
                resting metabolic rate (RMR), VO2 max, or a Styku 3D scan. A standalone DEXA ($139
                at DexaFit) costs far less than a metabolic bundle (DexaFit&apos;s Premium is $269,
                Elite $419).
              </li>
              <li>
                <strong>Scanner and consultation.</strong> Las Vegas Medical Institute runs a
                research-grade GE Lunar iDXA inside a physician-led clinic, and Project Wellbeing
                offers an optional one-on-one medical consult to interpret results. That clinical
                layer prices above a bare scan-and-report.
              </li>
              <li>
                <strong>Order handling and turnaround.</strong> Fitnescity coordinates any required
                physician order remotely and returns results to an online dashboard within two
                business days — convenience that a self-booked studio scan does not include.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Clinic cards */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Get a DEXA Scan in Las Vegas</h2>
        <p className="text-gray-600 mb-6">
          Five real, currently operating Las Vegas DEXA providers, from the cheapest published price
          to physician-gated imaging. Each listing was verified against the clinic&apos;s own site
          in June 2026.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {LV_CLINICS.map((c) => (
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

      {/* How LV compares */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Las Vegas Pricing Compares</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Las Vegas body-composition DEXA pricing lands in the middle of the national picture on
              the top end, but its <strong>floor is higher</strong> than big coastal metros. National
              single-scan prices run roughly <strong>$40-$179</strong>: BodySpec&apos;s mobile vans
              anchor the cheap end nationwide ($45-$50 typical) and DexaFit studios run $119-$179.
              Las Vegas does not have the mobile-van or sub-$100 budget-studio options that New York
              and Los Angeles do, so the cheapest clearly-listed single scan here is DexaFit&apos;s
              <strong> $139</strong>.
            </p>
            <p>
              The practical takeaway: a Las Vegas resident pays a bit more for the cheapest scan than
              a New Yorker would, but the city makes up for it with no-referral access at performance
              clinics and a research-grade GE Lunar option — and accredited valley-wide imaging
              (SDMI) for anyone who already has a doctor&apos;s order.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose a Las Vegas DEXA Clinic</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for cost &amp; no referral</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>DexaFit Las Vegas</strong> at $139 — the cheapest flat single-scan price, book directly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Project Wellbeing</strong> ($40-150 range) with repeat-friendly packages for tracking</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for a fuller / clinical picture</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Las Vegas Medical Institute</strong> for a research-grade GE Lunar iDXA in a physician-led clinic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>SDMI</strong> for ACR-accredited imaging valley-wide (doctor&apos;s order required); <strong>Fitnescity</strong> to bundle DEXA with metabolic tests and have the order handled</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mt-8">
            <p>Before you book, confirm a few practical points with the clinic:</p>
            <ul>
              <li>Do you need a doctor&apos;s order, or can you book the scan directly?</li>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Find a DEXA Scan in Las Vegas</h3>
          <p className="text-gray-600 mb-6">
            Compare every verified Las Vegas DEXA provider — prices, neighborhoods, and add-on testing.
          </p>
          <Link
            href="/dexa-scans/nevada/las-vegas"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            View Las Vegas DEXA Clinics →
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
                <div className="font-bold text-gray-900">DEXA Scan Cost: Los Angeles</div>
                <div className="text-sm text-gray-600">How prices compare in the nearby LA market</div>
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
            <li>• <a href="https://www.dexafitlv.com/pricing" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">DexaFit Las Vegas — Pricing</a></li>
            <li>• <a href="https://www.projectwellbeing.co/dexa-scan-las-vegas" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Project Wellbeing — DEXA Scan Las Vegas</a></li>
            <li>• <a href="https://www.sdmi-lv.com/services/dexa-scan" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">SDMI — DEXA Scan services</a></li>
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
          description="Get our Las Vegas DEXA price comparison plus tips for reading your scan and tracking real progress."
          source="guide_dexa_scan_cost_las_vegas"
        />
      </div>

      <Footer />
    </main>
  );
}
