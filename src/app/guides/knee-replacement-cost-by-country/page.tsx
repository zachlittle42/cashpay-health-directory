import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Knee Replacement Cost by Country: US vs India & More' },
  alternates: { canonical: 'https://vitalityscout.com/guides/knee-replacement-cost-by-country' },
  description:
    'Total knee replacement cost by country: India, Mexico, Thailand & Costa Rica vs the US — package prices, what is included, savings, and JCI accreditation.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// stated on this page. Every price answer ends with the verify-with-hospital
// hedge, consistent with the medical disclaimer. The visible FAQ block below
// mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a knee replacement cost abroad compared to the US?',
    answer:
      'A total knee replacement is commonly quoted around $30,000-$50,000 in the US (cash-pay packages often $28,000-$45,000) versus roughly $5,000-$8,000 in India, $9,000-$15,000 in Mexico, $10,000-$15,000 in Thailand, and $11,000-$15,000 in Costa Rica. Published comparisons describe savings of 50-80% or more, with India the deepest discount. These are estimates that vary by hospital, implant brand, and whether one or both knees are done — get a written, itemized quote from the hospital before you travel.',
  },
  {
    question: 'Which country is cheapest for a knee replacement?',
    answer:
      'On the comparisons we reviewed, India is consistently the lowest, with single-knee total replacement commonly estimated around $5,000-$8,000 at JCI/NABH-accredited hospitals — roughly 80% below typical US pricing. Mexico, Thailand, and Costa Rica are higher (about $9,000-$15,000) but still well under the US. Cheapest is not automatically best: the surgeon, the implant system, accreditation, and your travel and recovery time all matter. Confirm exactly what each quote includes before comparing.',
  },
  {
    question: 'Is it safe to get a knee replacement abroad?',
    answer:
      'Quality ranges widely by hospital, not just by country, so the standard advice is to use internationally accredited hospitals that use established implant systems. Look for Joint Commission International (JCI) accreditation (and NABH in India), surgeons with high case volumes, and recognized implant brands such as Stryker, Zimmer Biomet, or DePuy — the same systems used in US hospitals. Ask how complications and revisions are handled once you return home. This is information, not medical advice — discuss candidacy, anesthesia risk, and recovery with a qualified clinician.',
  },
  {
    question: 'What does an all-inclusive knee replacement package abroad include?',
    answer:
      'Package contents vary by hospital. A typical orthopedic package may bundle the surgeon and anesthesia fees, the implant, the operating room, a 3-5 night hospital stay, nursing care, initial in-hospital physiotherapy, and sometimes airport transfers and a companion room. It often does NOT include your international flights, extended hotel stays for the multi-week recovery, treatment of complications after discharge, or revision surgery. Ask the hospital for a written, itemized list of what is and is not included before you pay a deposit.',
  },
  {
    question: 'How long do I need to stay abroad for a knee replacement?',
    answer:
      'Plan for more time than the surgery alone. The hospital stay itself is commonly 3-5 days, but most programs recommend staying in-country for roughly 2-3 weeks total so the surgeon can clear you to fly and begin physiotherapy. Long flights too soon after major lower-limb surgery raise blood-clot risk, so confirm the recommended in-country recovery window and the fit-to-fly timeline with your surgeon before booking return travel.',
  },
  {
    question: 'Will US insurance or Medicare cover a knee replacement done abroad?',
    answer:
      'Most US health plans and Medicare generally do not pay for elective surgery performed overseas, which is why cash-pay pricing is the relevant comparison for medical travelers. Some employer plans and specialized medical-travel programs are exceptions, and separate medical-travel insurance that covers complications is worth considering. Confirm coverage with both your insurer and the hospital before you commit, and budget for the all-in cost — surgery, travel, recovery stay, and follow-up at home.',
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

export default function KneeReplacementCostByCountry() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Knee Replacement Cost by Country: US vs India, Mexico, Thailand & Costa Rica (2026)',
    description:
      'A side-by-side cost comparison of total knee replacement surgery — package prices in India, Mexico, Thailand, and Costa Rica versus the US, what each package includes, JCI accreditation, and how to choose.',
    url: 'https://vitalityscout.com/guides/knee-replacement-cost-by-country',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/knee-replacement-cost-by-country#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalProcedure',
      name: 'Total knee replacement (knee arthroplasty) abroad',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'Knee Replacement Surgery Cost — country comparison (Medical Tourism Corporation)', url: 'https://www.medicaltourismco.com/knee-replacement-surgery-cost/' },
      { '@type': 'CreativeWork', name: 'Knee Replacement Surgery in India — cost & JCI/NABH hospitals (Medical Tourism Corporation)', url: 'https://www.medicaltourismco.com/knee-replacement-surgery-in-india/' },
      { '@type': 'CreativeWork', name: 'Total Knee Replacement — Bumrungrad International Hospital (Thailand, JCI)', url: 'https://www.bumrungrad.com/en/treatments/total-knee-replacement-thailand' },
      { '@type': 'CreativeWork', name: 'Knee Replacement Surgery in Costa Rica — cost & JCI hospitals (Medical Tourism Corporation)', url: 'https://www.medicaltourismco.com/knee-replacement-surgery-in-costa-rica/' },
      { '@type': 'CreativeWork', name: 'Knee Replacement in Mexico — 2026 cost & top hospitals (Medical Tourism Packages)', url: 'https://www.medicaltourismpackages.com/knee-replacement-surgery-in-mexico/' },
      { '@type': 'CreativeWork', name: 'Total Knee Replacement Cost Without Insurance — US baseline (Medical Tourism Corporation)', url: 'https://www.medicaltourismco.com/total-knee-replacement-cost-without-insurance/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/knee-replacement-cost-by-country#faq', url: 'https://vitalityscout.com/guides/knee-replacement-cost-by-country' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <SidebarShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-cyan-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/medical-tourism" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Medical Tourism Hub
          </Link>

          <div className="mb-4 flex items-center gap-3">
            <span className="text-4xl">🦵</span>
            <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700">
              Comparison Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Knee Replacement Cost by Country
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Four of the most-searched orthopedic-tourism markets — India, Mexico, Thailand, and Costa
            Rica — side by side against US prices for a total knee replacement. Package costs, what each
            includes, accreditation, and how to weigh price against travel and recovery.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-cyan-500 bg-cyan-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A total knee replacement runs roughly <strong>$30,000-$50,000</strong> in the US versus about{' '}
              <strong>$5,000-$8,000</strong> in India, <strong>$9,000-$15,000</strong> in Mexico,{' '}
              <strong>$10,000-$15,000</strong> in Thailand, and <strong>$11,000-$15,000</strong> in Costa
              Rica — savings of 50-80% or more on published comparisons, with India lowest. Cheapest is
              not automatically best: weigh the surgeon, implant brand, JCI accreditation, and travel and
              recovery time. Verify every quote with the hospital. This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">Last reviewed: June 2026 • 13 min read</p>
        </div>
      </section>

      {/* Medical / Quality Disclaimer */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-red-900 mb-3">Read This First</h3>
          <p className="text-sm text-red-800 mb-3">
            <strong>A knee replacement is major surgery, not a dental crown.</strong> It involves general
            or spinal anesthesia, a multi-day hospital stay, and weeks of physiotherapy. Quality varies
            hospital to hospital, not just country to country, and a low headline price means little until
            you know the surgeon, the implant system, the accreditation, and exactly what the quote
            covers. Look for internationally recognized implant brands (e.g.{' '}
            <a href="https://www.stryker.com" target="_blank" rel="noopener noreferrer nofollow" className="underline">
              Stryker
            </a>
            ,{' '}
            <a href="https://www.zimmerbiomet.com" target="_blank" rel="noopener noreferrer nofollow" className="underline">
              Zimmer Biomet
            </a>
            , or DePuy) and confirm accreditation directly — status can change.
          </p>
          <p className="text-sm text-red-800">
            This guide is for informational purposes only and is not medical advice. Outcomes depend on
            your case, the surgeon, the facility, and your recovery. Surgery abroad adds anesthesia,
            blood-clot, and cross-border follow-up considerations. Discuss candidacy, alternatives, and
            risks with a qualified clinician before pursuing treatment abroad.
          </p>
        </div>
      </section>

      {/* At a Glance */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-cyan-900 mb-3">Knee Replacement Abroad at a Glance</h2>
          <ul className="text-sm text-gray-700 space-y-1 mb-0">
            <li>✓ <strong>50-80%+ savings</strong> vs US prices on most published comparisons (estimates)</li>
            <li>✓ <strong>Lowest pricing:</strong> India (often ~$5,000-$8,000 per knee)</li>
            <li>✓ <strong>Closest to the US:</strong> Mexico (border hospitals; short flight or drive-across)</li>
            <li>✓ <strong>Premium Asian hub:</strong> Thailand (Bumrungrad, BNH — JCI-accredited)</li>
            <li>✓ <strong>US-affiliated surgeons:</strong> Costa Rica (San José JCI hospitals)</li>
            <li>✓ <strong>Implant brands to look for:</strong> Stryker, Zimmer Biomet, DePuy</li>
            <li>✓ <strong>Time abroad:</strong> ~2-3 weeks total; hospital stay commonly 3-5 days</li>
          </ul>
        </div>
      </section>

      {/* Why people travel */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Knee Replacement Drives Orthopedic Tourism</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              A total knee replacement is one of the most common — and most expensive — elective surgeries
              in US healthcare. Without insurance, published cash-pay packages commonly land between
              $28,000 and $45,000, and hospital list prices can run higher still. For a patient without
              good orthopedic coverage, or facing a high deductible on both knees, that bill is large
              enough to make travel worth a serious look.
            </p>
            <p>
              The reason the math works abroad is that the same FDA-cleared implant systems — Stryker,
              Zimmer Biomet, DePuy — are used in accredited hospitals in India, Mexico, Thailand, and Costa
              Rica, often by high-volume surgeons, at a fraction of the US facility price. The trade-offs
              are real: this is major surgery with anesthesia and clot risk, the recovery is measured in
              weeks not days, and follow-up across borders takes planning. But on a procedure this
              expensive, the savings are large enough that an orthopedic-tourism industry has grown up
              around it. This guide compares the four markets US patients search for most, then gives you a
              way to decide between them.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Total Knee Replacement: Cost by Country (Estimates)</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Prices below are for a single-knee total replacement, compiled from public orthopedic-tourism
          cost-comparison sources. They are estimates, not quotes — bilateral (both knees) and revision
          surgery cost more.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Country</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-green-700">Typical Cost (est.)</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">What&apos;s Usually Included</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Est. Savings vs US</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Accreditation Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">United States (baseline)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$30,000 - $50,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Surgeon, implant, anesthesia, facility, initial PT</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">—</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Joint Commission (US); insurance rarely covers overseas care</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">India</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$5,000 - $8,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Surgery, implant, 3-5 night stay, often transfers + companion room</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~75-85%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">JCI + NABH hospitals (Apollo, Fortis, Max)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Mexico</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$9,000 - $15,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Surgery, implant, hospital nights, transfers, some PT</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~55-70%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">JCI at select hospitals (e.g. Galenia); COFEPRIS-regulated</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Thailand</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$10,000 - $15,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Surgeon, anesthesia, private room, nursing, in-hospital PT</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~55-70%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">JCI hospitals (Bumrungrad, BNH)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Costa Rica</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$11,000 - $15,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Surgery, implant, hospital stay, transfers, bilingual coordinator</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~55-65%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">JCI hospitals in San José (CIMA, Clínica Bíblica, La Católica)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Ranges vary by hospital, implant brand, city, surgeon, and whether you replace one knee or both.
          &ldquo;Surgery only&rdquo; quotes that exclude the implant can look far cheaper than all-inclusive
          packages — they are not the same product. Always request a written, itemized quote.
        </p>
      </section>

      {/* Per-market breakdown */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">The Four Markets, Market by Market</h2>
          <p className="text-gray-600 mb-8 text-sm">
            Each market trades price, travel, and recovery logistics differently. Here is how they
            actually differ for a US patient weighing a knee replacement.
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">India</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Lowest pricing</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                India posts the lowest knee-replacement pricing in this comparison, with single-knee total
                replacement commonly estimated around $5,000-$8,000 at JCI- and NABH-accredited hospital
                networks such as Apollo, Fortis, and Max. Surgeons at these hospitals are typically
                high-volume and use the same Stryker, Zimmer Biomet, and DePuy implants found in US ORs.
                The trade-off is the longest flight, which makes the recommended in-country recovery window
                and the fit-to-fly timeline especially important to confirm. Vet the specific hospital and
                surgeon, not the country average. See our{' '}
                <Link href="/destinations/india" className="text-blue-600 hover:underline">India destination guide</Link>{' '}
                for vetted providers and travel logistics.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Mexico</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Closest to US</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Mexico is the logistically easiest option for most US patients — border hospitals in
                Tijuana are a short flight or a drive-across from San Diego, and Cancún and Monterrey add
                full-service private hospitals (Galenia in Cancún holds JCI accreditation). Per-procedure
                pricing sits higher than India, but the short travel and the ability to return for
                follow-up more easily can net out ahead, especially for patients who value being close to
                home during a multi-week recovery. Quality ranges widely between hospitals, so confirm the
                facility, the surgeon, and the implant brand. Our{' '}
                <Link href="/destinations/mexico" className="text-blue-600 hover:underline">Mexico destination guide</Link>{' '}
                lists vetted providers and border-crossing logistics.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Thailand</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Premium Asian hub</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Thailand, centered on Bangkok, built its reputation on large JCI-accredited international
                hospitals such as Bumrungrad and BNH that are purpose-built for foreign patients, with
                English-speaking staff and dedicated international-patient services. Knee-replacement
                pricing is higher than India but still well below the US, and the hospitality
                infrastructure is a draw for a longer recovery stay. Note that some published Thai quotes
                are &ldquo;surgery only&rdquo; and exclude the implant, so confirm whether the implant is
                in the package. Our{' '}
                <Link href="/destinations/thailand" className="text-blue-600 hover:underline">Thailand destination guide</Link>{' '}
                covers hospitals, the visa, and trip logistics.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Costa Rica</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">US-affiliated surgeons</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Costa Rica anchors orthopedic tourism in the Americas with JCI-accredited San José
                hospitals — Hospital CIMA, Clínica Bíblica, and Hospital La Católica — and surgeons whose
                training and consultative relationships with US academic centers are part of the pitch.
                Pricing is the highest of the four markets here but still 55-65% below typical US cost, and
                a short-to-medium flight plus bilingual coordinators make it a popular middle ground for
                patients who want the savings without the longest travel. As everywhere, vet the named
                surgeon and what the package covers. See our{' '}
                <Link href="/destinations/costa-rica" className="text-blue-600 hover:underline">Costa Rica destination guide</Link>{' '}
                for vetted providers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What an All-Inclusive Knee Package Does — and Does Not — Cover</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-bold text-green-900 mt-0 mb-3">Commonly included</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>✓ Surgeon and anesthesia fees</li>
              <li>✓ The implant (confirm the brand and whether it is in the quote)</li>
              <li>✓ Operating room and a 3-5 night hospital stay</li>
              <li>✓ Nursing care and in-hospital physiotherapy</li>
              <li>✓ Airport transfers (many packages)</li>
              <li>✓ A bilingual coordinator / international-patient services</li>
            </ul>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-bold text-yellow-900 mt-0 mb-3">Often NOT included</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>✗ Your international flights</li>
              <li>✗ The hotel stay during multi-week recovery</li>
              <li>✗ Extended outpatient physiotherapy back home</li>
              <li>✗ Treatment of complications after discharge</li>
              <li>✗ Revision surgery if the implant later fails</li>
              <li>✗ The second knee, if you need bilateral replacement</li>
            </ul>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
          <p className="text-sm text-yellow-800 mb-0">
            <strong>The single most useful question:</strong> ask for a written, itemized quote that names
            the implant brand and states whether it is included, then ask what is excluded. A
            &ldquo;$7,000 knee replacement&rdquo; that excludes the implant, the recovery-stay hotel, and
            follow-up is not the same product as one that includes them.
          </p>
        </div>
      </section>

      {/* Accreditation explainer */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Safety &amp; Quality Signals to Verify</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Accreditation &amp; surgeon volume</h3>
              <p className="text-sm text-gray-700 mb-0">
                Look for Joint Commission International (JCI) accreditation — the international arm of the
                same body that accredits US hospitals — plus NABH in India. JCI accreditation must be
                renewed, so confirm current status on the hospital&apos;s own site or the JCI directory,
                not a third-party listing. For an orthopedic surgery, also ask the surgeon how many knee
                replacements they perform per year; case volume is a recognized quality signal.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Implant brand &amp; revision plan</h3>
              <p className="text-sm text-gray-700 mb-0">
                Recognized implant systems such as{' '}
                <a href="https://www.stryker.com" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Stryker</a>,{' '}
                <a href="https://www.zimmerbiomet.com" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Zimmer Biomet</a>, and DePuy carry long-term documentation and parts availability if a revision is
                ever needed. Ask which brand is quoted, and crucially, ask how complications and revisions
                are handled once you fly home — cross-border follow-up is the hardest part of orthopedic
                tourism to plan for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decision framework */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose: A Simple Framework</h2>
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">1. Add the all-in cost, not the headline</h4>
            <p className="text-sm text-gray-600 mb-0">
              Flights, a multi-week recovery hotel, a companion, and follow-up physiotherapy back home can
              move the real total well past the surgery quote. India&apos;s lowest headline price still
              carries the longest flight; Mexico&apos;s higher quote can win once travel and easier
              follow-up are added — especially for a single knee.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">2. Plan the recovery, not just the surgery</h4>
            <p className="text-sm text-gray-600 mb-0">
              The hospital stay is only a few days; the recovery is weeks. Confirm the recommended
              in-country stay (commonly ~2-3 weeks total) and the fit-to-fly timeline before booking
              return travel — flying too soon after lower-limb surgery raises blood-clot risk.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">3. Weigh proximity vs price</h4>
            <p className="text-sm text-gray-600 mb-0">
              If staying close to home and easy follow-up matter most, Mexico moves up your list. If the
              deepest discount drives the decision, India leads — paired with stricter vetting. Thailand
              and Costa Rica sit in between on price, with strong JCI hospital infrastructure.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">4. Vet the surgeon and hospital, not the country</h4>
            <p className="text-sm text-gray-600 mb-0">
              Country averages are a starting point, not a verdict. Confirm the surgeon&apos;s annual knee
              case volume, the implant brand, current JCI/NABH accreditation, the written itemized quote,
              and the revision plan — and how complications are handled once you fly home.
            </p>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
          <p className="text-sm text-yellow-800 mb-0">
            <strong>Red flag:</strong> any program that quotes a knee-replacement price without naming the
            implant brand or stating whether it is included, pressures a deposit before you have a written
            itemized quote, or cannot connect you with the operating surgeon. Legitimate hospitals set
            realistic recovery expectations and put the details in writing.
          </p>
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

      {/* CTA / money-page links */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Compare Destinations Side by Side</h3>
          <p className="text-gray-600 mb-6">
            Explore full destination profiles for the orthopedic-tourism markets in this guide, then dig
            into the markets you are weighing — each lists vetted, researched providers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/medical-tourism" className="inline-block rounded-lg bg-cyan-600 px-6 py-3 font-medium text-white hover:bg-cyan-700">
              Medical Tourism Hub
            </Link>
            <Link href="/destinations/india" className="inline-block rounded-lg border-2 border-cyan-600 px-6 py-3 font-medium text-cyan-600 hover:bg-cyan-50">
              India Destination Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/india-medical-tourism-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇮🇳</span>
              <div>
                <div className="font-bold text-gray-900">India Medical Tourism Guide</div>
                <div className="text-sm text-gray-600">Cardiac, orthopedic &amp; IVF costs, JCI/NABH hospitals, the e-Medical Visa</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/thailand-medical-tourism-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇹🇭</span>
              <div>
                <div className="font-bold text-gray-900">Thailand Medical Tourism Guide</div>
                <div className="text-sm text-gray-600">Bangkok JCI hospitals, costs &amp; trip planning</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/stem-cell-knees-mexico" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🦵</span>
              <div>
                <div className="font-bold text-gray-900">Stem Cell Therapy for Knees Abroad</div>
                <div className="text-sm text-gray-600">A non-surgical option for knee osteoarthritis — what the evidence shows</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/medical-travel-insurance-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🛡️</span>
              <div>
                <div className="font-bold text-gray-900">Medical Travel Insurance Guide</div>
                <div className="text-sm text-gray-600">What covers complications abroad — and what doesn&apos;t</div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Affiliate + Medical Disclaimer (shared component) */}
      <MedicalDisclaimer />

      {/* Sources */}
      <section className="mx-auto max-w-4xl px-4 pb-8">
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <a href="https://www.medicaltourismco.com/knee-replacement-surgery-cost/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Knee Replacement Surgery Cost — country comparison (Medical Tourism Corporation)</a></li>
            <li>• <a href="https://www.medicaltourismco.com/knee-replacement-surgery-in-india/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Knee Replacement Surgery in India — cost &amp; JCI/NABH hospitals (Medical Tourism Corporation)</a></li>
            <li>• <a href="https://www.bumrungrad.com/en/treatments/total-knee-replacement-thailand" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Total Knee Replacement — Bumrungrad International Hospital (Thailand, JCI)</a></li>
            <li>• <a href="https://www.medicaltourismco.com/knee-replacement-surgery-in-costa-rica/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Knee Replacement Surgery in Costa Rica — cost &amp; JCI hospitals (Medical Tourism Corporation)</a></li>
            <li>• <a href="https://www.medicaltourismpackages.com/knee-replacement-surgery-in-mexico/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Knee Replacement in Mexico — 2026 cost &amp; top hospitals (Medical Tourism Packages)</a></li>
            <li>• <a href="https://www.medicaltourismco.com/total-knee-replacement-cost-without-insurance/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Total Knee Replacement Cost Without Insurance — US baseline (Medical Tourism Corporation)</a></li>
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Comparing a Knee Replacement Abroad?"
          description="Get our orthopedic-tourism checklist: how to read an itemized surgical quote, the implant-brand and accreditation questions to ask, and how to budget the all-in cost including recovery."
          source="guide_knee_replacement_cost_by_country"
        />
      </div>

      </SidebarShell>
      <Footer />
    </main>
  );
}
