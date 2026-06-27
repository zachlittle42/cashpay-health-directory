import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Full Mouth Dental Implants Cost by Country (2026)' },
  alternates: { canonical: 'https://vitalityscout.com/guides/full-mouth-dental-implants-cost-by-country' },
  description:
    'Full mouth dental implants abroad: how to choose All-on-4 vs All-on-6 and read a per-arch package quote in Mexico, Costa Rica, Colombia, Hungary & Turkey.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// stated on this page. This guide is scoped to FULL-MOUTH (All-on-4 / All-on-6)
// fixed-arch cases — not single implants — so prices are per arch and full
// mouth (both arches). Every price answer ends with the verify-with-clinic
// hedge, consistent with the medical disclaimer. The visible FAQ block below
// mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much do full-mouth dental implants (All-on-4/6) cost abroad vs the US?',
    answer:
      'Per arch, an All-on-4 full-arch case is commonly quoted around $18,000-$35,000+ in the US (full mouth $40,000-$60,000+), versus roughly $3,000-$6,000 in Turkey, $4,500-$11,000 in Colombia, $5,000-$9,000 in Hungary, $8,000-$15,000 in Mexico, and $8,500-$12,750 in Costa Rica on the comparisons we reviewed. That is broadly 50-80% in savings. The bigger lever for a full-mouth case is what the per-arch quote actually contains: All-on-4 vs All-on-6, acrylic vs zirconia, and whether extractions, grafting, the final bridge, and a second trip are inside the package or billed on top. Get a written, itemized per-arch quote before you travel.',
  },
  {
    question: 'All-on-4 vs All-on-6: which protocol should I choose, and what does each package include?',
    answer:
      'This is the decision that actually moves a full-mouth quote. All-on-4 anchors a full fixed arch on four implants; All-on-6 uses six, which can spread bite load and may suit lower bone density or higher bite demands, and it costs more in the same clinic. Just as important is what the package bundles: implants, surgery, the prosthetic bridge, and imaging are usually in, while bone grafts, extractions, a zirconia upgrade, flights, and a second trip for the final bridge are often extra. Two "All-on-4" quotes at the same price can be different products. (For a straight cheapest-country ranking that also covers single implants and Poland, see our dental implants abroad cost comparison.)',
  },
  {
    question: 'How many trips does a full-mouth (All-on-4/6) case abroad take?',
    answer:
      'It depends on the protocol your jaw needs. An immediate-load full-arch case can sometimes be done in a single trip of roughly one to two weeks: the surgeon places the implants and fits a temporary fixed bridge, then the final bridge is made on the same visit. Many cases instead run across two trips a few months apart, especially if you need extractions, bone grafting, or a sinus lift first, or if the clinic waits for osseointegration before fitting the final zirconia bridge. Confirm the number of trips and whether the second visit and final bridge are inside the quoted package before you book flights. This is information, not medical advice.',
  },
  {
    question: 'Are full-mouth dental implants abroad safe?',
    answer:
      'Quality ranges by clinic more than by country, so the standard advice is to use accredited clinics that place established implant systems. Look for international accreditation (such as JCI or ISO), dentist membership in bodies like the ICOI or AAID, EU clinical standards in Hungary, COFEPRIS regulation in Mexico, and recognized brands such as Straumann or Nobel Biocare. Confirm the surgeon performs full-arch cases routinely, and ask how revisions are handled after you return home. This is information, not medical advice — discuss candidacy with a qualified clinician.',
  },
  {
    question: 'What does an all-inclusive All-on-4 full-mouth package abroad include?',
    answer:
      'Package contents vary widely. A typical full-arch package may bundle the implants, the surgery, the prosthetic bridge, 3D CT imaging, post-op follow-ups during your stay, and sometimes airport transfers and a hotel. It often does NOT include bone grafts, sinus lifts, extractions, your flights, a prosthetic upgrade from acrylic to zirconia, or a second trip for the final bridge. Ask the clinic for a written, itemized per-arch list of what is and is not included before you pay a deposit.',
  },
  {
    question: 'Will my US dental insurance cover full-mouth implants done abroad?',
    answer:
      'Most US dental plans treat implants as a major procedure and reimburse at most around 50% of allowed charges, subject to annual maximums that rarely exceed $1,500-$2,000 — and many will not pay for treatment performed overseas at all. On a $40,000+ full-mouth case that coverage barely moves the bill, so cash-pay pricing is the relevant comparison for most travelers. Separate dental-travel or medical-travel insurance that covers complications is worth considering. Confirm coverage with both your insurer and the clinic before you commit.',
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

export default function FullMouthDentalImplantsCostByCountry() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Full Mouth Dental Implants Cost by Country (2026)',
    description:
      'A side-by-side cost comparison of full-mouth dental implants (All-on-4 and All-on-6) — per-arch and full-mouth prices in Mexico, Costa Rica, Colombia, Hungary, and Turkey versus the US, what each package includes, safety and accreditation, and how to choose.',
    url: 'https://vitalityscout.com/guides/full-mouth-dental-implants-cost-by-country',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/full-mouth-dental-implants-cost-by-country#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalProcedure',
      name: 'Full-mouth dental implant treatment abroad (All-on-4 and All-on-6 fixed full-arch implants)',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'All-on-4 Fixed Dental Implants Abroad — per-arch pricing by country (Medical Tourism Corporation)', url: 'https://www.medicaltourismco.com/all-on-four-fixed-dental-implants-abroad/' },
      { '@type': 'CreativeWork', name: 'Best Country for All-on-4 Dental Implants 2026 — cost & safety compared (Kristal Clinic)', url: 'https://kristalclinic.com/dental-implants/best-country-for-all-on-4-dental-implants-2026-cost-guide/' },
      { '@type': 'CreativeWork', name: 'Dental Implants in Costa Rica — 2026 costs & All-on-4 packages (Medical Tourism Corporation)', url: 'https://www.medicaltourismco.com/dental-implants-in-costa-rica/' },
      { '@type': 'CreativeWork', name: 'All-On-4 Dental Implants Cost in Colombia (Dental Tourism Colombia)', url: 'https://www.dentaltourismcolombia.com/all-on-4' },
      { '@type': 'CreativeWork', name: 'Full-Mouth Dental Implants in Hungary — package pricing (Medical Tourism Corporation)', url: 'https://www.medicaltourismco.com/full-mouth-dental-implants-in-hungary/' },
      { '@type': 'CreativeWork', name: 'All-on-6 Dental Implants in Turkey 2026 — costs & packages (Turkey Luxury Clinics)', url: 'https://turkeyluxuryclinics.com/en/blog/all-on-6-dental-implants-in-turkey' },
      { '@type': 'CreativeWork', name: 'All-on-4 Dental Implant Cost 2026 — US complete price guide (Kristal Clinic)', url: 'https://kristalclinic.com/dental-implants/all-on-4-dental-implants-cost-2026-complete-price-guide/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/full-mouth-dental-implants-cost-by-country#faq', url: 'https://vitalityscout.com/guides/full-mouth-dental-implants-cost-by-country' };

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
            <span className="text-4xl">🦷</span>
            <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700">
              Comparison Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Full Mouth Dental Implants Cost by Country
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            The full-mouth decision is All-on-4 vs All-on-6 and what the package actually includes — not
            just the country. This guide walks the protocol and inclusions choice across the five markets
            US patients search most (Mexico, Costa Rica, Colombia, Hungary, Turkey), with per-arch price
            context and the accreditation to verify. For a straight cheapest-country ranking, see the
            comparison guide linked below.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-cyan-500 bg-cyan-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A full-arch All-on-4 runs about <strong>$18,000-$35,000+ per arch</strong> in the US versus
              roughly <strong>$3,000-$6,000</strong> in Turkey, <strong>$4,500-$11,000</strong> in
              Colombia, <strong>$5,000-$9,000</strong> in Hungary, <strong>$8,000-$15,000</strong> in
              Mexico, and <strong>$8,500-$12,750</strong> in Costa Rica — broadly 50-80% in savings. But
              what moves your bill is the protocol and package: <strong>All-on-6</strong> and{' '}
              <strong>zirconia</strong> cost more, and grafting, extractions, and a second trip are often
              billed on top. Verify every per-arch quote with the clinic. This is not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">Last reviewed: June 2026 • 14 min read</p>
        </div>
      </section>

      {/* Medical / Quality Disclaimer */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-red-900 mb-3">Read This First</h3>
          <p className="text-sm text-red-800 mb-3">
            <strong>A full-mouth case is the highest-stakes dental purchase you will make.</strong> A low
            headline price means little until you know the implant brand, the surgeon, the accreditation,
            whether it is All-on-4 or All-on-6, and exactly what the per-arch quote covers. Look for
            recognized implant systems (e.g.{' '}
            <a href="https://www.straumann.com" target="_blank" rel="noopener noreferrer nofollow" className="underline">
              Straumann
            </a>{' '}
            or{' '}
            <a href="https://www.nobelbiocare.com" target="_blank" rel="noopener noreferrer nofollow" className="underline">
              Nobel Biocare
            </a>
            ), and confirm accreditation directly — status can change.
          </p>
          <p className="text-sm text-red-800">
            This guide is for informational purposes only and is not medical or dental advice. Whether you
            are a candidate for All-on-4 or All-on-6, and which is appropriate for your jaw, is a clinical
            decision. Discuss candidacy, alternatives, and risks with a qualified clinician before
            pursuing treatment abroad.
          </p>
        </div>
      </section>

      {/* At a Glance */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-cyan-900 mb-3">Full-Mouth Implants Abroad at a Glance</h2>
          <ul className="text-sm text-gray-700 space-y-1 mb-0">
            <li>✓ <strong>50-80% savings</strong> vs US per-arch prices on most published comparisons (estimates)</li>
            <li>✓ <strong>The real decision:</strong> All-on-4 vs All-on-6 and what the package includes, not just the country</li>
            <li>✓ <strong>All-on-4 vs All-on-6:</strong> six implants cost more than four, per arch</li>
            <li>✓ <strong>Material:</strong> acrylic at the low end of a quote, zirconia at the high end</li>
            <li>✓ <strong>Closest to the US:</strong> Mexico (border crossings; no long-haul flight)</li>
            <li>✓ <strong>EU-regulated:</strong> Hungary operates under EU clinical standards</li>
            <li>✓ <strong>Brands to look for:</strong> Straumann, Nobel Biocare (premium systems)</li>
            <li>✓ <strong>Trips:</strong> 1 for immediate-load full-arch; sometimes 2 with grafting or healing time</li>
          </ul>
        </div>
      </section>

      {/* Why full-mouth drives travel */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Full-Mouth Cases Drive the Most Dental Travel</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              A single implant rarely justifies a passport. Full-mouth restoration is where the dollar gap
              gets large enough to move people across borders. A full-arch All-on-4 in the US is commonly
              quoted at $18,000-$35,000 or more <em>per arch</em>, and a both-arches full-mouth case can
              run $40,000-$60,000 and up. US dental insurance treats implants as a major procedure and
              caps annual reimbursement at a level that barely dents a five-figure bill — so almost
              everyone is paying cash either way.
            </p>
            <p>
              That makes the comparison stark: the same implant brands, the same 3D imaging, and similar
              prosthetic materials are available abroad at a fraction of the price, often as all-inclusive
              packages built around a single trip. The trade-offs are real — travel time, the logistics of
              follow-up across borders, and a quality range that makes vetting non-negotiable — but on a
              full-mouth case the savings clear the cost of two flights with room to spare. This guide
              compares the five markets US patients search for most, then gives you a framework to choose.
            </p>
          </div>
        </div>
      </section>

      {/* Headline Country Price Comparison Table (REQUIRED) */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Full-Mouth (All-on-4) Per-Arch Price Context by Country</h2>
        <p className="text-gray-600 mb-6 text-sm">
          This table is <strong>context for the protocol-and-package decision below</strong>, not a
          cheapest-country ranking — for that, plus single implants and Poland, see our{' '}
          <Link href="/guides/dental-implants-abroad-cost-comparison" className="text-blue-600 hover:underline">
            dental implants abroad cost comparison
          </Link>
          . Prices are <strong>per arch</strong> for an All-on-4 fixed full-arch case, compiled from public
          dental-tourism cost sources. The low end usually reflects acrylic prosthetics and a basic
          implant; the high end reflects zirconia and premium systems. All-on-6 generally costs more than
          All-on-4. These are estimates, not quotes.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Country</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-green-700">All-on-4 per Arch (est.)</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">What&apos;s Typically Included</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Est. Savings vs US</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Accreditation Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">United States (baseline)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$18,000 - $35,000+</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Implants, surgery, bridge; extras often billed separately</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">—</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">ADA-member dentists; state licensure</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Turkey</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$3,000 - $6,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">All-inclusive common: implants, bridge, imaging, hotel, transfers</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~75-85%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Look for JCI / ISO; confirm per clinic</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Colombia</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$4,500 - $11,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Implants, abutments, fixed hybrid bridge; imaging</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~65-80%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Some JCI-accredited clinics; verify directly</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Hungary</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$5,000 - $9,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Multi-visit package: extractions, implants, temp + final bridge</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~65-75%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">EU clinical standards (Budapest)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Mexico</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$8,000 - $15,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Implant, abutment, fixed bridge; some include hotel/transfers</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~50-65%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">COFEPRIS regulation; ADA-member dentists at top clinics</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Costa Rica</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$8,500 - $12,750</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Full-arch package; many US-trained dentists in San José</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~55-65%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Accredited clinics; confirm credentials directly</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Published ranges differ a lot by source: some quote the bare All-on-4 procedure, others bundle
          extractions, the final zirconia bridge, hotel, and transfers, which raises the headline. These
          ranges are aligned with our country and comparison guides; where a number differs, this guide
          uses bare-to-bundled per-arch procedure sources rather than a single clinic&apos;s package list.
          European prices are often quoted in euros and converted here for comparison. Two quotes at the
          same per-arch price can differ by thousands in real value. Always request a written, itemized,
          per-arch quote.
        </p>
      </section>

      {/* All-on-4 vs All-on-6 explainer */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-blue-900 mb-3">All-on-4 vs All-on-6: What Changes the Price</h2>
          <p className="text-sm text-gray-700 mb-3">
            <strong>All-on-4</strong> anchors a full fixed arch on four implants. <strong>All-on-6</strong>{' '}
            uses six, which can spread bite load and may suit lower bone density or higher bite demands.
            All-on-6 generally costs more than All-on-4 in the same clinic because of the two extra
            implants — in Turkey, for example, All-on-6 packages are commonly quoted above All-on-4.
          </p>
          <p className="text-sm text-gray-700 mb-0">
            The bigger price lever is often the prosthetic: an <strong>acrylic</strong> bridge sits at the
            low end of a quote and <strong>zirconia</strong> at the high end. Which protocol and material
            fit your jaw is a clinical decision — ask the surgeon to justify the implant count and material
            for your specific case, not the cheapest option on the menu.
          </p>
        </div>
      </section>

      {/* Per-market breakdown */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">The Five Markets, Market by Market</h2>
          <p className="text-gray-600 mb-8 text-sm">
            Each market trades price, travel, and regulatory framework differently for a US full-mouth
            patient. Here is how they actually differ.
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Turkey</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Lowest pricing</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Turkey, centered on Istanbul, posts the lowest full-arch pricing in this comparison, with
                all-inclusive packages that often bundle the hotel, transfers, 3D imaging, and a temporary
                bridge. All-on-6 packages run higher than All-on-4. The trade-off is the longest flight and
                a market with a very wide quality range — high-end clinics and high-volume operations sit
                side by side. The low headline price makes verifying the implant brand, the surgeon, and the
                accreditation especially important for a full-mouth case.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Colombia</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Strong value</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Colombia — chiefly Medellín, Bogotá, Cali, and Cartagena — has become a strong-value
                full-arch market, with All-on-4 pricing among the lowest of the Americas while keeping
                flight times to the medium range. Some clinics in Bogotá are JCI-accredited, which patients
                weigh for a major surgery. As everywhere, the country average matters less than the specific
                clinic and surgeon, so vet the named provider, not the destination.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Hungary</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">EU standards</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Hungary — Budapest in particular — is the original European dental-tourism hub, drawing
                Western European patients for full-mouth work for decades. It operates under EU clinical
                standards, which some patients weigh heavily for an irreversible procedure. Pricing is
                higher than Turkey but still well below the US, packages typically run across two or more
                visits, and the long track record means deep experience with full-mouth restorations.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Mexico</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Closest to US</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Mexico is the logistically easiest option for most US patients — no long-haul flight, and
                border towns like Tijuana and Los Algodones are walk- or drive-across, while Cancún adds a
                vacation angle to a larger case. Full-arch prices sit a little above the deepest-discount
                markets, but proximity matters for a full-mouth case that may need follow-up. Clinics operate
                under COFEPRIS regulation and top practices employ ADA-member dentists; quality still ranges
                widely between border storefronts and established surgical centers, so verify the clinic.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Costa Rica</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">US-trained dentists</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Costa Rica built its dental-tourism reputation on San José clinics with many US-trained
                dentists and premium materials, and full-arch prices reflect that positioning — savings are
                real but the country is rarely the outright cheapest. A short-to-medium flight and an
                established tourism infrastructure make it a popular middle-ground choice for a full-mouth
                patient who wants the savings without the longest travel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What an All-Inclusive Full-Arch Package Does — and Does Not — Cover</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-bold text-green-900 mt-0 mb-3">Commonly included</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>✓ The implants and surgical placement (four or six)</li>
              <li>✓ Abutments and the full-arch fixed bridge</li>
              <li>✓ 3D CT imaging / diagnostics</li>
              <li>✓ A temporary bridge fitted at surgery (immediate-load cases)</li>
              <li>✓ Post-op follow-up visits during your stay</li>
              <li>✓ Airport transfers and a hotel stay (many packages)</li>
            </ul>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-bold text-yellow-900 mt-0 mb-3">Often NOT included</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>✗ Bone grafts and sinus lifts</li>
              <li>✗ Extractions of remaining teeth</li>
              <li>✗ Your international flights</li>
              <li>✗ A prosthetic upgrade (acrylic → zirconia)</li>
              <li>✗ A second trip for the final bridge after healing</li>
              <li>✗ Revisions or complication care after you return</li>
            </ul>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
          <p className="text-sm text-yellow-800 mb-0">
            <strong>The single most useful question:</strong> ask for a written, itemized per-arch quote
            that lists the implant brand, the implant count (All-on-4 vs All-on-6), the prosthetic material,
            and every line item — then ask what is excluded. A &ldquo;$5,000 All-on-4&rdquo; that excludes
            grafting, extractions, and the final zirconia bridge is not the same product as one that
            includes them.
          </p>
        </div>
      </section>

      {/* Safety & accreditation explainer */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Safety and Accreditation: What to Verify</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Accreditation &amp; certification</h3>
              <p className="text-sm text-gray-700 mb-0">
                For a full-mouth surgery, look for international accreditation such as JCI or ISO, dentist
                membership in bodies like the ICOI or AAID, EU clinical standards in Hungary, and COFEPRIS
                regulation in Mexico. Accreditation must be renewed, so confirm current status on the
                clinic&apos;s own site or the accrediting body — not a third-party listing. Safety tracks the
                clinic and surgeon more than the country.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Implant brand &amp; surgeon</h3>
              <p className="text-sm text-gray-700 mb-0">
                Recognized implant systems such as{' '}
                <a href="https://www.straumann.com" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Straumann</a>{' '}
                and{' '}
                <a href="https://www.nobelbiocare.com" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Nobel Biocare</a>{' '}
                carry long-term documentation and replacement-part availability if something needs service
                later. Confirm the surgeon places full-arch cases routinely, ask which brand and prosthetic
                material are quoted, and ask how revisions are handled once you fly home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What affects price */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What Actually Moves a Full-Mouth Quote</h2>
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">Implant count: All-on-4 vs All-on-6</h4>
            <p className="text-sm text-gray-600 mb-0">
              Six implants cost more than four per arch. The right number is a clinical call based on your
              bone and bite, not a budgeting choice.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">Prosthetic material: acrylic vs zirconia</h4>
            <p className="text-sm text-gray-600 mb-0">
              The bridge material is often the single biggest swing in a quote. Acrylic sits at the low end;
              zirconia, more durable and natural-looking, at the high end.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">Bone grafting, sinus lifts, and extractions</h4>
            <p className="text-sm text-gray-600 mb-0">
              These add cost and sometimes a second trip. Lower bone density can require grafting that a
              headline package price excludes — ask whether your case needs it.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">One arch vs both arches</h4>
            <p className="text-sm text-gray-600 mb-0">
              Most prices are quoted per arch. A both-arches full-mouth case roughly doubles the procedure
              cost, though some clinics discount the second arch.
            </p>
          </div>
        </div>
      </section>

      {/* Decision framework */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose: A Simple Framework</h2>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-gray-900 mt-0 mb-2">1. Add the all-in cost, not the headline</h4>
              <p className="text-sm text-gray-600 mb-0">
                Flights, hotel nights, a possible second trip, grafting, and a zirconia upgrade can move the
                real total well past the quote. Mexico&apos;s short trip can beat a cheaper Turkey quote once
                two long-haul flights are added.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-gray-900 mt-0 mb-2">2. Decide how much the regulatory framework matters</h4>
              <p className="text-sm text-gray-600 mb-0">
                If EU clinical standards give you confidence, Hungary moves up your list. If proximity for
                follow-up matters most, Mexico wins. If lowest headline price drives the decision, Turkey and
                Colombia lead — paired with stricter vetting.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-gray-900 mt-0 mb-2">3. Confirm the protocol before you compare prices</h4>
              <p className="text-sm text-gray-600 mb-0">
                Get each clinic to specify All-on-4 vs All-on-6, the implant brand, and the prosthetic
                material on the same basis. Otherwise you are comparing different products at different
                prices.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-gray-900 mt-0 mb-2">4. Vet the clinic, not the country</h4>
              <p className="text-sm text-gray-600 mb-0">
                Country averages are a starting point, not a verdict. Confirm the surgeon&apos;s experience
                with full-arch cases, the accreditation, and the written quote — and how revisions are
                handled once you fly home.
              </p>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
            <p className="text-sm text-yellow-800 mb-0">
              <strong>Red flag:</strong> any clinic that quotes a full-arch price without naming the implant
              brand, the implant count, and the prosthetic material, pressures a deposit before you have a
              written itemized quote, or cannot connect you with the treating surgeon. Legitimate clinics
              set realistic expectations and put the details in writing.
            </p>
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

      {/* CTA / money-page + destination links */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Compare Destinations Side by Side</h3>
          <p className="text-gray-600 mb-6">
            Explore full destination profiles — with vetted providers — for the dental-tourism markets in
            this guide, then dig into the ones you are weighing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/medical-tourism" className="inline-block rounded-lg bg-cyan-600 px-6 py-3 font-medium text-white hover:bg-cyan-700">
              Medical Tourism Hub
            </Link>
            <Link href="/destinations/mexico" className="inline-block rounded-lg border-2 border-cyan-600 px-6 py-3 font-medium text-cyan-600 hover:bg-cyan-50">
              Mexico Destination Guide
            </Link>
            <Link href="/destinations/costa-rica" className="inline-block rounded-lg border-2 border-cyan-600 px-6 py-3 font-medium text-cyan-600 hover:bg-cyan-50">
              Costa Rica Destination Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/all-on-4-dental-implants-mexico" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🦷</span>
              <div>
                <div className="font-bold text-gray-900">All-on-4 Dental Implants in Mexico</div>
                <div className="text-sm text-gray-600">Full-arch costs, Tijuana &amp; Cancún clinics, trip planning</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/dental-implants-abroad-cost-comparison" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🦷</span>
              <div>
                <div className="font-bold text-gray-900">Dental Implants Abroad: Cost Comparison</div>
                <div className="text-sm text-gray-600">Cheapest-country ranking — single implants and All-on-4, incl. Poland</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/hungary-dental-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🦷</span>
              <div>
                <div className="font-bold text-gray-900">Hungary Dental Cost Guide</div>
                <div className="text-sm text-gray-600">Implants, All-on-4 &amp; crowns across Budapest</div>
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

          <Link href="/destinations/colombia" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇨🇴</span>
              <div>
                <div className="font-bold text-gray-900">Colombia Destination Guide</div>
                <div className="text-sm text-gray-600">Vetted providers, procedures, and trip logistics</div>
              </div>
            </div>
          </Link>

          <Link href="/destinations/hungary" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇭🇺</span>
              <div>
                <div className="font-bold text-gray-900">Hungary Destination Guide</div>
                <div className="text-sm text-gray-600">EU-standard clinics and trip logistics</div>
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
            <li>• <a href="https://www.medicaltourismco.com/all-on-four-fixed-dental-implants-abroad/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">All-on-4 Fixed Dental Implants Abroad — per-arch pricing by country (Medical Tourism Corporation)</a></li>
            <li>• <a href="https://kristalclinic.com/dental-implants/best-country-for-all-on-4-dental-implants-2026-cost-guide/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Best Country for All-on-4 Dental Implants 2026 — cost &amp; safety compared (Kristal Clinic)</a></li>
            <li>• <a href="https://www.medicaltourismco.com/dental-implants-in-costa-rica/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Dental Implants in Costa Rica — 2026 costs &amp; All-on-4 packages (Medical Tourism Corporation)</a></li>
            <li>• <a href="https://www.dentaltourismcolombia.com/all-on-4" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">All-On-4 Dental Implants Cost in Colombia (Dental Tourism Colombia)</a></li>
            <li>• <a href="https://www.medicaltourismco.com/full-mouth-dental-implants-in-hungary/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Full-Mouth Dental Implants in Hungary — package pricing (Medical Tourism Corporation)</a></li>
            <li>• <a href="https://turkeyluxuryclinics.com/en/blog/all-on-6-dental-implants-in-turkey" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">All-on-6 Dental Implants in Turkey 2026 — costs &amp; packages (Turkey Luxury Clinics)</a></li>
            <li>• <a href="https://kristalclinic.com/dental-implants/all-on-4-dental-implants-cost-2026-complete-price-guide/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">All-on-4 Dental Implant Cost 2026 — US complete price guide (Kristal Clinic)</a></li>
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Comparing Full-Mouth Implants Abroad?"
          description="Get our dental-tourism checklist: how to read an itemized per-arch quote, the All-on-4 vs All-on-6 and implant-brand questions to ask, and how to budget the all-in cost."
          source="guide_full_mouth_dental_implants_cost_by_country"
        />
      </div>

      </SidebarShell>
      <Footer />
    </main>
  );
}
