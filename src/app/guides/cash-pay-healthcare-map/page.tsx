import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import RelatedGuides from '@/components/RelatedGuides';
import { getRelatedGuides } from '@/data/related-guides';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Cash-Pay Healthcare Map 2026: Every Price, One Page' },
  alternates: { canonical: 'https://vitalityscout.com/guides/cash-pay-healthcare-map' },
  description:
    "From $29 blood panels to $4,500 surgery in Mexico — one-page map of cash-pay healthcare: verified US prices, what's worth a flight, how not to get burned.",
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
const FAQ_ITEMS = [
  {
    question: 'What is cash-pay healthcare, and where do the prices start?',
    answer:
      'Cash-pay healthcare means paying a posted or quoted price directly — no insurance claim, no chargemaster surprise. On the US side, self-order lab markers can start in the low tens of dollars and some retail/telehealth visits are advertised from about $29; a transparent surgery center can post an all-inclusive knee replacement at $17,679 (Surgery Center of Oklahoma) or a gastric-sleeve bundle around $9,995 (WeightWise, Edmond, OK). Abroad, published Mexico bariatric packages often land near $4,500–$4,900. Every figure on this map is an estimate to confirm with the provider. This is information, not medical advice.',
  },
  {
    question: 'Which cash-pay procedures are worth flying for, and which should stay at home?',
    answer:
      'The big four that commonly repay a flight are dental implants, hair transplants, bariatric surgery, and many plastic-surgery cases — Mexico and Turkey are the two highest-volume destinations. Fertility (especially donor-egg IVF) and some orthopedic joints can also pencil out after travel. Cardiac work and experimental stem-cell therapy usually belong at home or need a much higher safety bar; a GLP-1 program is often the first comparison before a sleeve. Always get a written US cash quote and a written foreign package quote before you buy a ticket.',
  },
  {
    question: 'How do I compare a US cash quote to a hospital bill?',
    answer:
      'Compare all-in cash bundles to hospital averages, not list prices. A Surgery Center of Oklahoma total knee is posted at $17,679 all-in (surgeon, facility, anesthesia, implant, ~30 days of PT). US hospital knee bills commonly run $30,000–$50,000+ once facility, surgeon, anesthesia, and implant are stacked. A published US gastric-sleeve cash bundle around $9,995 sits well below typical hospital/insured sleeve ranges in the high teens to mid-$20,000s. Ask what is excluded: consult, pre-op imaging, implants, and complication care are the usual extras. Confirm the live quote in writing.',
  },
  {
    question: 'Will insurance, an HSA, or an FSA cover cash-pay care or care abroad?',
    answer:
      'A cash payment to a transparent US center usually does not count toward your deductible. US health insurance almost never covers elective surgery abroad; some dental PPOs reimburse a share of Mexico work, DHMOs usually do not. HSA/FSA funds can pay qualified medical or dental care abroad when it is legal, medically necessary, and not cosmetic — travel is rarely eligible. Confirm coverage with your plan administrator and a tax professional before you spend account funds.',
  },
  {
    question: 'How do I avoid getting burned on a cash-pay or medical-tourism quote?',
    answer:
      'Never accept a “contact us for price” as a comparison number. Get a written, itemized quote; confirm what “all-inclusive” excludes; verify the surgeon’s credentials and the facility’s accreditation; keep an implant passport or batch sticker for devices; and buy medical-travel insurance that covers complications, not just trip cancellation. For Turkey dental, treat sub-$2,500 All-on-4 teaser prices as a different product (often acrylic, per jaw). For stem cells, read the FDA/CDC warnings before you travel. This is information, not medical advice — consult a licensed clinician.',
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

export default function CashPayHealthcareMapGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'The Cash-Pay Healthcare Map: Every Price, One Page (2026)',
    description:
      'One-page map of cash-pay healthcare in 2026 — US labs, imaging, meds, local care, and the procedures worth a flight — with honest cash comparators and the links to verify.',
    url: 'https://vitalityscout.com/guides/cash-pay-healthcare-map',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/cash-pay-healthcare-map#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalProcedure', name: 'Cash-pay (self-pay) healthcare and medical travel' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-09-04',
    dateModified: '2026-09-04',
    citation: [
      { '@type': 'CreativeWork', name: 'Surgery Center of Oklahoma — Total Knee Arthroplasty transparent pricing ($17,679)', url: 'https://surgerycenterok.com/pricing/total-knee-arthroplasty-knee-replacement/' },
      { '@type': 'CreativeWork', name: 'Surgery Center of Oklahoma — surgery prices', url: 'https://surgerycenterok.com/surgery-prices/' },
      { '@type': 'CreativeWork', name: 'WeightWise — cash-pay gastric sleeve bundles from $9,995', url: 'https://weightwise.com/blogs/blog/how-much-does-gastric-bypass-cost-out-of-pocket' },
    ],
  };

  const faqSchema = {
    ...buildFAQSchema(FAQ_ITEMS),
    '@id': 'https://vitalityscout.com/guides/cash-pay-healthcare-map#faq',
    url: 'https://vitalityscout.com/guides/cash-pay-healthcare-map',
  };

  return (
    <>
      <Navigation />
      <SidebarShell>
      <main className="min-h-screen bg-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        <div className="bg-gray-50 border-b border-gray-200">
          <div className="mx-auto max-w-4xl px-4 py-3">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">→</span>
              <Link href="/guides" className="hover:text-blue-600">Guides</Link>
              <span className="mx-2">→</span>
              <span className="text-gray-900">Cash-Pay Healthcare Map</span>
            </nav>
          </div>
        </div>

        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/guides" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; All guides
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Price Map
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              The Cash-Pay Healthcare Map: Every Price, One Page (2026)
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              From cheap blood work at home to a surgery that might repay a flight — one map of
              the cash-pay market, with hubs first, the best cost guides second, and no
              &quot;contact us for price&quot; placeholders.
            </p>

            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                <strong>Cash-pay healthcare</strong> is a posted or quoted price you pay directly.
                US self-order labs and retail visits start in the low tens of dollars (some
                advertised from about <strong>$29</strong>); a named US surgery center posts{' '}
                <strong>$17,679</strong> all-in for a total knee; published US gastric-sleeve
                bundles start around <strong>$9,995</strong>. Mexico bariatric packages often land
                near <strong>$4,500–$4,900</strong>. This page maps what to buy at home, what is
                worth a flight, and how not to get burned. Prices are estimates — verify in
                writing. This is information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last reviewed: September 2026 • 12 min read
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12">
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Five buckets, no overlap</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#diagnose" className="text-blue-600 hover:underline">1. Find out what&apos;s wrong — labs, DEXA, imaging</a></li>
              <li><a href="#meds" className="text-blue-600 hover:underline">2. Ongoing meds from home — GLP-1, TRT, telehealth</a></li>
              <li><a href="#near-you" className="text-blue-600 hover:underline">3. Cash-pay care near you — primary care, clinics, med-spa</a></li>
              <li><a href="#flight" className="text-blue-600 hover:underline">4. Procedures worth a flight? — dental, hair, bariatric, plastics</a></li>
              <li><a href="#dont-get-burned" className="text-blue-600 hover:underline">5. Compare, pay, and don&apos;t get burned</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Most people do not need a directory of every clinic on earth. They need to know
              which price to look up first, whether a flight changes the math, and which
              &quot;all-inclusive&quot; quote is a different product. This map is MECE: each
              bucket is a different buying decision. We link hubs first, then the cost guides
              that already earn the traffic — never a phone-number price.
            </p>

            <h2 id="diagnose" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              1. Find out what&apos;s wrong (labs, DEXA, imaging)
            </h2>

            <p className="text-gray-700 mb-4">
              Start here if you want a number on a biomarker, a body-comp scan, or a picture of
              a joint — not a procedure. Cash-pay labs and freestanding imaging are where US
              prices are most shoppable. A single marker can list in the low teens; some
              retail/telehealth visits advertise from about $29; a full-body MRI is a different
              product entirely.
            </p>

            <p className="text-gray-700 mb-3 font-semibold">Hubs</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><Link href="/labs" className="text-blue-600 hover:underline">At-home and self-order labs</Link> — panels you can buy without a doctor visit</li>
              <li><Link href="/dexa-scans" className="text-blue-600 hover:underline">DEXA scan directory</Link> — body-comp and bone-density bookings by city</li>
              <li><Link href="/imaging" className="text-blue-600 hover:underline">Cash-pay imaging</Link> — MRI, CT, ultrasound with transparent prices</li>
            </ul>

            <p className="text-gray-700 mb-3 font-semibold">Best guides</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><Link href="/guides/quest-vs-labcorp-pricing" className="text-blue-600 hover:underline">Quest vs Labcorp self-pay prices</Link></li>
              <li><Link href="/guides/cheapest-blood-test-panels" className="text-blue-600 hover:underline">Cheapest blood-test panels</Link></li>
              <li><Link href="/guides/cheapest-dexa-scan" className="text-blue-600 hover:underline">Cheapest DEXA scan (under $50)</Link></li>
              <li><Link href="/guides/mri-cost-without-insurance" className="text-blue-600 hover:underline">MRI cost without insurance</Link></li>
              <li><Link href="/guides/full-body-mri-scan-cost" className="text-blue-600 hover:underline">Full-body MRI (Prenuvo, Ezra, SimonMed)</Link></li>
              <li><Link href="/guides/ct-scan-cost-without-insurance" className="text-blue-600 hover:underline">CT scan cost without insurance</Link></li>
            </ul>

            <h2 id="meds" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              2. Ongoing meds from home
            </h2>

            <p className="text-gray-700 mb-4">
              If the decision is a monthly prescription — GLP-1s or testosterone — you almost
              never need a flight. The shoppable question is brand vs compounded vs
              manufacturer self-pay, and what the monthly number actually includes.
            </p>

            <p className="text-gray-700 mb-3 font-semibold">Hubs</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><Link href="/glp1" className="text-blue-600 hover:underline">GLP-1 programs</Link></li>
              <li><Link href="/trt" className="text-blue-600 hover:underline">TRT &amp; hormones</Link></li>
              <li><Link href="/telehealth" className="text-blue-600 hover:underline">Telehealth hub</Link></li>
            </ul>

            <p className="text-gray-700 mb-3 font-semibold">Best guides</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><Link href="/guides/semaglutide-cost" className="text-blue-600 hover:underline">Semaglutide cost (verified monthly programs)</Link></li>
              <li><Link href="/guides/tirzepatide-cost" className="text-blue-600 hover:underline">Tirzepatide cost (verified monthly programs)</Link></li>
              <li><Link href="/guides/cheapest-glp1-without-insurance" className="text-blue-600 hover:underline">Cheapest GLP-1 without insurance</Link></li>
              <li><Link href="/guides/zepbound-cost" className="text-blue-600 hover:underline">Zepbound cost (LillyDirect ladder &amp; savings card)</Link></li>
              <li><Link href="/guides/trt-cost" className="text-blue-600 hover:underline">TRT cost (verified monthly prices)</Link></li>
            </ul>

            <h2 id="near-you" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              3. Cash-pay care near you
            </h2>

            <p className="text-gray-700 mb-4">
              In-person US care you can drive to: a virtual or walk-in primary-care visit, a
              local clinic, or a med-spa. Use this bucket when the procedure is shoppable but
              not worth airport security.
            </p>

            <p className="text-gray-700 mb-3 font-semibold">Hubs</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><Link href="/primary_care" className="text-blue-600 hover:underline">Online doctor &amp; urgent care</Link></li>
              <li><Link href="/care-by-state" className="text-blue-600 hover:underline">Care by state</Link></li>
              <li><Link href="/local-clinics" className="text-blue-600 hover:underline">Local clinics</Link></li>
              <li><Link href="/med-spa" className="text-blue-600 hover:underline">Med-spa directory</Link></li>
            </ul>

            <p className="text-gray-700 mb-3 font-semibold">Best guides</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><Link href="/guides/urgent-care-cost-without-insurance" className="text-blue-600 hover:underline">Urgent care cost without insurance</Link></li>
              <li><Link href="/guides/cash-pay-telehealth-visits" className="text-blue-600 hover:underline">Cash-pay telehealth visits vs urgent care</Link></li>
              <li><Link href="/guides/botox-cost-per-unit" className="text-blue-600 hover:underline">Botox cost per unit</Link></li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Most common US cash-pay procedures
            </h3>
            <p className="text-gray-700 mb-4">
              These are the shoppable US procedures people actually price out. Links go only to
              guides that exist; gaps are named in prose, not as fake URLs.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Dental:</strong> <Link href="/guides/dental-implant-cost-usa" className="text-blue-600 hover:underline">US dental implant cost</Link>, <Link href="/guides/root-canal-cost-without-insurance" className="text-blue-600 hover:underline">root canal without insurance</Link></li>
              <li><strong>Labs:</strong> covered in bucket 1 — start with <Link href="/labs" className="text-blue-600 hover:underline">/labs</Link></li>
              <li><strong>MRI:</strong> <Link href="/guides/mri-cost-without-insurance" className="text-blue-600 hover:underline">MRI without insurance</Link></li>
              <li><strong>Colonoscopy:</strong> <Link href="/guides/colonoscopy-cost-without-insurance" className="text-blue-600 hover:underline">colonoscopy cash-pay prices</Link></li>
              <li><strong>GLP-1:</strong> covered in bucket 2 — <Link href="/guides/cheapest-glp1-without-insurance" className="text-blue-600 hover:underline">cheapest GLP-1</Link></li>
              <li><strong>TRT:</strong> <Link href="/guides/trt-cost" className="text-blue-600 hover:underline">verified TRT monthly prices</Link></li>
              <li><strong>Botox:</strong> <Link href="/guides/botox-cost-per-unit" className="text-blue-600 hover:underline">per-unit Botox</Link></li>
              <li><strong>LASIK:</strong> <Link href="/guides/lasik-cost-usa" className="text-blue-600 hover:underline">LASIK cost without insurance</Link></li>
            </ul>
            <p className="text-gray-700 mb-6">
              <strong>Gaps we do not pretend to fill:</strong> there is no standalone VitalityScout
              cash-pay guide yet for US hip replacement, gallbladder removal, hernia repair, or
              wisdom-tooth extraction. For those, start at the{' '}
              <Link href="/surgery" className="text-blue-600 hover:underline">cash-pay surgery hub</Link>{' '}
              and the{' '}
              <Link href="/guides/cash-pay-surgery-guide" className="text-blue-600 hover:underline">transparent-pricing surgery guide</Link>,
              then request a written bundled quote. Cataract is covered separately in the vision
              cost guide, not in this short list.
            </p>

            <h2 id="flight" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              4. Procedures worth a flight?
            </h2>

            <p className="text-gray-700 mb-4">
              A flight only wins when the <em>all-in</em> foreign package — procedure, hotel,
              transfers, a second trip if needed — beats a real US cash bundle, not a hospital
              chargemaster. Get both quotes in writing before you book.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8 not-prose">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Honest US cash comparators (this page only)</h3>
              <p className="text-sm text-gray-700 mb-4">
                Hospital &quot;averages&quot; are a different product from a posted cash bundle.
                Use the named cash prices below as the US baseline, then compare a foreign
                package to <em>that</em> — not to a chargemaster.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Procedure</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Named US cash bundle</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical US hospital context</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-medium">Total knee replacement</td>
                      <td className="border border-gray-300 px-4 py-3">Surgery Center of Oklahoma <strong>$17,679</strong> all-in (posted)</td>
                      <td className="border border-gray-300 px-4 py-3">~$30,000–$50,000+ once facility, surgeon, anesthesia, and implant are billed separately</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-medium">Gastric sleeve</td>
                      <td className="border border-gray-300 px-4 py-3">Published US cash bundles from about <strong>$9,995</strong> (e.g. WeightWise Tier 1, Edmond, OK)</td>
                      <td className="border border-gray-300 px-4 py-3">Hospital/insured sleeve ranges commonly cited in the high teens to mid-$20,000s</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 mt-3 mb-0">
                SCO price from the center&apos;s published total-knee page (confirm live). WeightWise
                publishes a $9,995 sleeve-only tier; SCO&apos;s own laparoscopic sleeve list is
                higher (~$16,750). Mexico verified sleeve packages run a median of about $4,900.
                All figures are estimates — get a current written quote.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              US baseline first:{' '}
              <Link href="/surgery" className="text-blue-600 hover:underline">cash-pay surgery hub</Link>{' '}
              and the{' '}
              <Link href="/guides/cash-pay-surgery-guide" className="text-blue-600 hover:underline">cash-pay surgery guide</Link>.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">The big four</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Dental:</strong> <Link href="/dental" className="text-blue-600 hover:underline">/dental</Link> + <Link href="/guides/mexico-dental-implant-prices" className="text-blue-600 hover:underline">Mexico dental implant prices</Link> + <Link href="/guides/all-on-4-los-algodones-cost" className="text-blue-600 hover:underline">All-on-4 Los Algodones cost</Link></li>
              <li><strong>Hair:</strong> <Link href="/hair_transplant" className="text-blue-600 hover:underline">/hair_transplant</Link> + <Link href="/guides/hair-transplant-turkey-cost" className="text-blue-600 hover:underline">hair transplant Turkey cost</Link> + <Link href="/guides/fue-hair-transplant-istanbul-cost" className="text-blue-600 hover:underline">FUE Istanbul cost</Link></li>
              <li><strong>Bariatric:</strong> <Link href="/bariatric" className="text-blue-600 hover:underline">/bariatric</Link> + <Link href="/guides/mexico-bariatric-surgery-prices" className="text-blue-600 hover:underline">Mexico bariatric surgery prices</Link> + <Link href="/guides/gastric-sleeve-tijuana-cost" className="text-blue-600 hover:underline">gastric sleeve Tijuana cost</Link></li>
              <li><strong>Plastic surgery:</strong> <Link href="/plastic_surgery" className="text-blue-600 hover:underline">/plastic_surgery</Link> + <Link href="/guides/plastic-surgery-abroad-cost-comparison" className="text-blue-600 hover:underline">plastic surgery abroad cost comparison</Link></li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Sometimes worth the flight</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Fertility:</strong> <Link href="/fertility" className="text-blue-600 hover:underline">/fertility</Link> + <Link href="/guides/ivf-cost-by-country" className="text-blue-600 hover:underline">IVF cost by country</Link> (donor-egg cycles are the usual arbitrage — see the <Link href="/guides/donor-egg-ivf-abroad" className="text-blue-600 hover:underline">donor-egg IVF abroad guide</Link>)</li>
              <li><strong>Orthopedic:</strong> <Link href="/orthopedic" className="text-blue-600 hover:underline">/orthopedic</Link> + <Link href="/guides/knee-replacement-cost-by-country" className="text-blue-600 hover:underline">knee replacement cost by country</Link>. Compare any foreign quote to the SCO <strong>$17,679</strong> cash bundle before you fly.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Usually stay home</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Cardiac:</strong> <Link href="/cardiac" className="text-blue-600 hover:underline">/cardiac</Link> — high-stakes, follow-up-heavy; a flight is rarely the first lever</li>
              <li><strong>Stem cells:</strong> <Link href="/stem-cells" className="text-blue-600 hover:underline">/stem-cells</Link> — treatments offered abroad are <strong>not FDA-approved</strong> for most marketed uses; the FDA has warned about unproven therapies. Read the safety guides before you treat a marketing brochure as a protocol.</li>
              <li><strong>Sleeve vs a GLP-1 first:</strong> <Link href="/guides/gastric-sleeve-mexico-vs-glp1-program" className="text-blue-600 hover:underline">gastric sleeve in Mexico vs a GLP-1 program</Link> — run the verified monthly math before you book surgery</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Destinations</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><Link href="/destinations/mexico" className="text-blue-600 hover:underline">Mexico destination guide</Link></li>
              <li><Link href="/destinations/turkey" className="text-blue-600 hover:underline">Turkey destination guide</Link></li>
              <li><Link href="/medical-tourism" className="text-blue-600 hover:underline">Medical tourism hub</Link> — the real index (there is no thin /destinations list)</li>
            </ul>

            <h2 id="dont-get-burned" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              5. Compare, pay, and don&apos;t get burned
            </h2>

            <p className="text-gray-700 mb-4">
              The last bucket is process, not a procedure. Price the same product, fund it
              without lighting a tax bill on fire, and leave a paper trail if something goes wrong.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><Link href="/price-index" className="text-blue-600 hover:underline">Cash-pay price index</Link> — the citable numbers, dated</li>
              <li><Link href="/guides/can-you-use-hsa-fsa-for-medical-care-abroad" className="text-blue-600 hover:underline">Can you use an HSA/FSA for care abroad?</Link></li>
              <li><Link href="/guides/hsa-letter-of-medical-necessity-rules" className="text-blue-600 hover:underline">HSA letter of medical necessity rules</Link></li>
              <li><Link href="/guides/medical-tourism-tax-deduction-rules" className="text-blue-600 hover:underline">Medical tourism tax-deduction rules</Link></li>
              <li><Link href="/guides/paying-for-medical-tourism" className="text-blue-600 hover:underline">How to pay for medical tourism</Link></li>
              <li><Link href="/guides/medical-travel-insurance-guide" className="text-blue-600 hover:underline">Medical travel insurance</Link></li>
              <li><Link href="/guides/gastric-sleeve-mexico-safety" className="text-blue-600 hover:underline">Gastric sleeve in Mexico: safety</Link></li>
              <li><Link href="/guides/is-plastic-surgery-in-turkey-safe" className="text-blue-600 hover:underline">Is plastic surgery in Turkey safe?</Link></li>
              <li><Link href="/faq/medical-tourism" className="text-blue-600 hover:underline">Medical tourism FAQ</Link></li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Never accept &quot;contact us for price&quot;</h4>
              <p className="text-gray-700 mb-0">
                A quote you cannot screenshot is not a price. If a clinic will not put the
                inclusions, exclusions, implant brand, and revision policy in writing, treat the
                headline number as marketing. Compare only itemized quotes — same procedure, same
                prosthetic or implant, same number of trips.
              </p>
            </div>

            <h2 id="verdict" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to use this map</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li>Identify the bucket — diagnose, refill, local care, or a flight.</li>
              <li>Open the hub, then the one cost guide that matches the procedure.</li>
              <li>Get a written US cash quote (or the named bundle above) and, if relevant, one foreign package quote.</li>
              <li>Check HSA/insurance/tax rules and buy complication coverage before you send a deposit.</li>
              <li>Talk to a licensed clinician about whether the procedure is appropriate for you.</li>
            </ol>
          </div>

          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Browse every cost guide</h3>
            <p className="mb-6 text-blue-100">
              This map is the index. The numbered guides have the itemized prices and the caveats.
            </p>
            <Link
              href="/guides"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              All VitalityScout guides
            </Link>
          </div>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div>
              {FAQ_ITEMS.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </section>

          <div className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Surgery Center of Oklahoma — posted total knee arthroplasty cash price $17,679 (surgerycenterok.com/pricing/total-knee-arthroplasty-knee-replacement/)</li>
              <li>• Surgery Center of Oklahoma — surgery-prices index and pricing disclaimer (bundled facility + surgeon + anesthesia + uncomplicated follow-up; consult often extra)</li>
              <li>• WeightWise (Edmond, OK) — published cash-pay gastric sleeve from $9,995 (Tier 1 surgery-only bundle)</li>
              <li>• VitalityScout verified Mexico bariatric cluster — gastric-sleeve package median ~$4,900 (n=12 all-inclusive; confirm current clinic quote)</li>
              <li>• VitalityScout knee-replacement and cash-pay surgery guides — hospital/uninsured ranges used only as context against named cash bundles</li>
            </ul>
          </div>
        </article>

        <RelatedGuides items={getRelatedGuides('/guides/cash-pay-healthcare-map')} />

        <MedicalDisclaimer />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get the Cash-Pay Map Checklist"
            description="The five buckets, the written-quote questions, and which procedures are worth a flight — updated as prices change."
            source="guide_cash_pay_healthcare_map"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
