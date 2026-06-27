import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Dental Implants Abroad: Cost Comparison by Country (2026)' },
  alternates: { canonical: 'https://vitalityscout.com/guides/dental-implants-abroad-cost-comparison' },
  description:
    'Dental implants abroad cost comparison: per-implant & full-arch prices in Mexico, Costa Rica, Colombia, Turkey, Hungary & Poland vs the US.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// stated on this page. Every price answer ends with the verify-with-clinic
// hedge, consistent with the medical disclaimer. The visible FAQ block below
// mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much do dental implants cost abroad compared to the US?',
    answer:
      'A single implant (post, abutment, and crown) is commonly quoted around $3,000-$6,000 in the US versus roughly $400-$1,200 in Turkey, $600-$1,200 in Poland, $800-$1,200 in Costa Rica and Colombia, $700-$1,500 in Hungary, and $850-$2,000 in Mexico. Most published comparisons describe 50-80% savings on dental work abroad. These are estimates that vary by clinic, implant brand, and whether extractions or bone grafting are needed — get a written, itemized quote from the clinic before you travel.',
  },
  {
    question: 'Which country is cheapest for full-arch (All-on-4) dental implants?',
    answer:
      'On the per-arch comparisons we reviewed, Turkey ($3,000-$6,000), Colombia ($4,500-$11,000), Hungary ($5,000-$9,000), and Poland ($4,400-$8,000) tend to come out lowest, with Mexico ($8,000-$15,000) and Costa Rica ($8,500-$12,750) higher but still well below the US ($18,000-$35,000+ per arch). Cheapest is not automatically best — implant brand, the surgeon, accreditation, and travel cost all matter. Confirm exactly what each arch quote includes before comparing.',
  },
  {
    question: 'What does an all-inclusive dental implant package abroad include?',
    answer:
      'Package contents vary widely. A typical full-arch package may bundle the implants, the surgery, the prosthetic bridge, 3D imaging, post-op follow-ups, and sometimes airport transfers and a hotel stay. It often does NOT include bone grafts, sinus lifts, extractions, your flights, or unplanned revisions. Acrylic prosthetics sit at the low end of a quote and zirconia at the high end. Ask the clinic for a written, itemized list of what is and is not included before you pay a deposit.',
  },
  {
    question: 'Are dental implants abroad safe?',
    answer:
      'Quality ranges widely, so the standard advice is to use accredited clinics that use established implant systems. Look for international accreditation (such as JCI or ISO), clinic membership in bodies like the ICOI or AAID, EU clinical standards in Hungary and Poland, and recognized implant brands such as Straumann or Nobel Biocare. Verify the surgeon performs your exact procedure and ask how revisions and complications are handled once you return home. This is information, not medical advice — discuss candidacy with a qualified clinician.',
  },
  {
    question: 'How long do I need to stay abroad for dental implants?',
    answer:
      'It depends on the protocol. Same-day or immediate-load All-on-4 cases can sometimes be done in one trip of roughly 5-7 days. Traditional implants that require osseointegration usually need two trips several months apart: one to place the implants and one to fit the final crowns or bridge after healing. Bone grafting adds time. Confirm the exact number of trips and the timeline with your clinic before booking flights.',
  },
  {
    question: 'Will my US dental insurance cover implants done abroad?',
    answer:
      'Most US dental plans treat implants as a major procedure and reimburse at most around 50% of allowed charges, subject to annual maximums that rarely exceed $1,500-$2,000 — and many will not pay for treatment performed overseas at all. That is why cash-pay pricing is the relevant comparison for most travelers. Separate dental-travel or medical-travel insurance that covers complications is worth considering. Confirm coverage with both your insurer and the clinic before you commit.',
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

export default function DentalImplantsAbroadCostComparison() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Dental Implants Abroad: Cost Comparison by Country (2026)',
    description:
      'A side-by-side cost comparison of dental implants abroad — per-implant and full-arch (All-on-4) prices in Mexico, Costa Rica, Colombia, Turkey, Hungary, and Poland versus the US, what each package includes, and how to choose.',
    url: 'https://vitalityscout.com/guides/dental-implants-abroad-cost-comparison',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/dental-implants-abroad-cost-comparison#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalProcedure',
      name: 'Dental implant treatment abroad (single implant and full-arch All-on-4)',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'Dental Implant Cost by Country 2026 (Kristal Clinic)', url: 'https://kristalclinic.com/dental-implants/2025-dental-implant-costs-price-comparison-international-guide/' },
      { '@type': 'CreativeWork', name: 'All-on-4 Fixed Dental Implants Abroad — per-arch pricing (Medical Tourism Corporation)', url: 'https://www.medicaltourismco.com/all-on-four-fixed-dental-implants-abroad/' },
      { '@type': 'CreativeWork', name: 'Cheap Dental Implants Abroad — country cost table (Dentaly.org)', url: 'https://www.dentaly.org/us/dental-tourism-usa/' },
      { '@type': 'CreativeWork', name: 'Dental Implants in Costa Rica — 2026 costs & packages (Medical Tourism Corporation)', url: 'https://www.medicaltourismco.com/dental-implants-in-costa-rica/' },
      { '@type': 'CreativeWork', name: 'Dental Implants Poland Prices 2026 (MyDentalFly)', url: 'https://www.mydentalfly.com/blog/dental-implants-poland-prices' },
      { '@type': 'CreativeWork', name: 'Dental Implant Cost in the USA: 2025–2026 Guide', url: 'https://mainstreetdentalnewark.com/dental-implant-cost-in-the-usa/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/dental-implants-abroad-cost-comparison#faq', url: 'https://vitalityscout.com/guides/dental-implants-abroad-cost-comparison' };

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
            Dental Implants Abroad: Cost Comparison by Country
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Six of the most-searched dental-tourism markets — Mexico, Costa Rica, Colombia, Turkey,
            Hungary, and Poland — side by side against US prices. Per-implant and full-arch costs, what
            each package includes, and how to weigh price against travel and quality.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-cyan-500 bg-cyan-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A single dental implant runs about <strong>$3,000-$6,000</strong> in the US versus roughly{' '}
              <strong>$400-$1,200</strong> in Turkey, <strong>$600-$1,200</strong> in Poland,{' '}
              <strong>$800-$1,200</strong> in Costa Rica and Colombia, and <strong>$850-$2,000</strong> in
              Mexico — savings of 50-80% on published comparisons. Full-arch (All-on-4) is lowest in
              Turkey, Colombia, and Poland. Cheapest is not automatically best: weigh implant brand,
              accreditation, the surgeon, and travel cost. Verify every quote with the clinic. This is
              information, not medical advice.
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
            <strong>Quality varies clinic to clinic, not just country to country.</strong> A low headline
            price means little until you know the implant brand, the surgeon, the accreditation, and
            exactly what the quote covers. Look for recognized implant systems (e.g.{' '}
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
            This guide is for informational purposes only and is not medical or dental advice. Outcomes
            depend on your case, the surgeon, and the facility. Discuss candidacy, alternatives, and
            risks with a qualified clinician before pursuing treatment abroad.
          </p>
        </div>
      </section>

      {/* At a Glance */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-cyan-900 mb-3">Dental Implants Abroad at a Glance</h2>
          <ul className="text-sm text-gray-700 space-y-1 mb-0">
            <li>✓ <strong>50-80% savings</strong> vs US prices on most published comparisons (estimates)</li>
            <li>✓ <strong>Lowest single-implant pricing:</strong> Turkey, Poland, Costa Rica, Colombia</li>
            <li>✓ <strong>Lowest full-arch (All-on-4):</strong> Turkey, Colombia, Hungary, Poland</li>
            <li>✓ <strong>Closest to the US:</strong> Mexico (border crossings; no long-haul flight)</li>
            <li>✓ <strong>EU-regulated:</strong> Hungary and Poland operate under EU clinical standards</li>
            <li>✓ <strong>Implant brands to look for:</strong> Straumann, Nobel Biocare (premium systems)</li>
            <li>✓ <strong>Trips:</strong> 1 for immediate-load cases; often 2 for traditional implants</li>
          </ul>
        </div>
      </section>

      {/* Why people travel */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Implants Drive So Much Dental Tourism</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Dental implants are one of the most travel-friendly procedures in healthcare precisely
              because the math is stark. US dental insurance typically classifies implants as a major
              procedure and reimburses at most around half the allowed charge, capped by an annual
              maximum that rarely clears $1,500-$2,000. For a full-arch case quoted at $18,000-$35,000
              or more per arch, that coverage barely moves the bill — so most patients are effectively
              paying cash either way.
            </p>
            <p>
              That makes the comparison simple: the same implant brands, the same imaging, and similar
              prosthetic materials are available abroad at a fraction of the price. The trade-offs are
              real — travel time, the logistics of follow-up across borders, and a quality range that
              makes vetting non-negotiable — but the savings on a multi-tooth case are large enough that
              an entire dental-tourism industry has grown up around them. This guide compares the six
              markets US patients search for most, then gives you a way to decide between them.
            </p>
          </div>
        </div>
      </section>

      {/* Single Implant Cost Comparison Table */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Single Implant: Cost by Country (Estimates)</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Prices below are for a single implant including the post, abutment, and crown, compiled from
          public dental-tourism cost-comparison sources. They are estimates, not quotes.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Country</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-green-700">Single Implant (est.)</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Est. Savings vs US</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Travel from US</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">United States (baseline)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$3,000 - $6,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">—</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">None</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Turkey</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$400 - $1,200</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~70-85%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Long-haul (~10-12h)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Poland</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$600 - $1,200</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~65-80%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Long-haul (~9-11h)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Costa Rica</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$800 - $1,200</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~65-75%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Medium (~4-6h)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Colombia</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$800 - $1,200</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~65-75%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Medium (~4-6h)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Hungary</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$700 - $1,500</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~60-75%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Long-haul (~9-11h)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Mexico</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$850 - $2,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~50-70%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Short / drive-across</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Ranges vary by clinic, implant brand, city, and whether you need extractions or bone grafting.
          European prices are often quoted in euros and converted here for comparison. Always request a
          written, itemized quote.
        </p>
      </section>

      {/* Full-Arch Cost Comparison Table */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Full-Arch (All-on-4): Cost by Country (Estimates)</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Full-arch prices are per arch. The low end usually reflects acrylic prosthetics and a basic
          implant; the high end reflects zirconia and premium systems. US per-arch pricing is wide.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Country</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-green-700">All-on-4 per Arch (est.)</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Est. Savings vs US</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">United States (baseline)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$18,000 - $35,000+</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">—</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Insurance rarely covers more than ~$1,500-$2,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Turkey</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$3,000 - $6,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~75-85%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">All-inclusive packages common (Istanbul)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Colombia</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$4,500 - $11,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~65-80%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Medellín, Bogotá, Cali, Cartagena</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Poland</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$4,400 - $8,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~65-80%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Kraków cheapest; Warsaw ~10-15% more</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Mexico</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$8,000 - $15,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~50-65%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Tijuana, Cancún, Los Algodones</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Hungary</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$5,000 - $9,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~65-75%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Budapest; long EU dental-tourism history</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Costa Rica</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$8,500 - $12,750</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~55-65%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">San José; many US-trained dentists</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Full-arch quotes are not apples-to-apples until you compare implant brand, prosthetic material
          (acrylic vs zirconia), the number of implants (All-on-4 vs All-on-6), and what travel costs the
          package does or does not absorb. Two quotes at the same headline price can differ by thousands
          in real value.
        </p>
      </section>

      {/* Per-market breakdown */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">The Six Markets, Market by Market</h2>
          <p className="text-gray-600 mb-8 text-sm">
            Each market trades price, travel, and regulatory framework differently. Here is how they
            actually differ for a US patient.
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Mexico</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Closest to US</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Mexico is the logistically easiest option for most US patients — no long-haul flight, and
                border towns like Los Algodones and Tijuana are walk- or drive-across. Per-implant prices
                sit a little higher than the deepest-discount markets, but the time and travel savings
                often net out ahead for a smaller case or anyone who values being close to home. Cancún
                adds a vacation angle to a larger case. Verify the clinic and the specific implant brand;
                quality ranges widely between border storefronts and established practices.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Costa Rica</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">US-trained dentists</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Costa Rica built its dental-tourism reputation on San José clinics with US-trained
                dentists and premium materials, and prices reflect that positioning — savings are real
                but the country is rarely the outright cheapest. A short-to-medium flight and an
                established tourism infrastructure make it a popular middle-ground choice for patients
                who want the savings without the longest travel.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Colombia</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Strong value</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Colombia — chiefly Medellín, Bogotá, Cali, and Cartagena — has become a strong-value
                market, with full-arch pricing among the lowest of the Americas while keeping flight
                times to the medium range. It pairs well with patients already considering Colombia for
                other procedures. As everywhere, the country average matters less than the specific clinic
                and surgeon, so vet the named provider, not the destination.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Turkey</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Lowest pricing</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Turkey, centered on Istanbul, posts the lowest single-implant and full-arch pricing in
                this comparison, with all-inclusive packages that often bundle the hotel and transfers.
                The trade-off is the longest flight and a market with a very wide quality range — high-end
                clinics and high-volume operations sit side by side. The low headline price makes
                verifying the implant brand, the surgeon, and the accreditation especially important.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Hungary</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">EU standards</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Hungary — Budapest in particular — is the original European dental-tourism hub, drawing
                Western European patients for decades. It operates under EU clinical standards, which some
                patients weigh heavily. Pricing is higher than Turkey or Poland but still well below the
                US, and the long track record means deep experience with full-mouth restorations.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Poland</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">EU value</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Poland — led by Kraków, with Warsaw clinics running roughly 10-15% higher — has emerged as
                a lower-priced EU alternative to Hungary. Clinics operate under EU regulation and most
                stock premium implant brands such as Straumann and Nobel Biocare, so patients who want the
                EU framework at a sharper price increasingly look here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What an All-Inclusive Package Does — and Does Not — Cover</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-bold text-green-900 mt-0 mb-3">Commonly included</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>✓ The implants and surgical placement</li>
              <li>✓ Abutments and the crown or full-arch bridge</li>
              <li>✓ 3D imaging / CT diagnostics</li>
              <li>✓ Post-op follow-up visits during your stay</li>
              <li>✓ Airport transfers (many packages)</li>
              <li>✓ A hotel stay (some full-arch packages)</li>
            </ul>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-bold text-yellow-900 mt-0 mb-3">Often NOT included</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>✗ Bone grafts and sinus lifts</li>
              <li>✗ Extractions of remaining teeth</li>
              <li>✗ Your international flights</li>
              <li>✗ A premium prosthetic upgrade (acrylic → zirconia)</li>
              <li>✗ A second trip for the final restoration</li>
              <li>✗ Revisions or complication care after you return</li>
            </ul>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
          <p className="text-sm text-yellow-800 mb-0">
            <strong>The single most useful question:</strong> ask for a written, itemized quote that
            lists the implant brand, the prosthetic material, and every line item — then ask what is
            excluded. A &ldquo;$3,500 All-on-4&rdquo; that excludes grafting, extractions, and the final
            zirconia bridge is not the same product as one that includes them.
          </p>
        </div>
      </section>

      {/* Accreditation explainer */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quality Signals to Verify</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Accreditation &amp; certification</h3>
              <p className="text-sm text-gray-700 mb-0">
                Look for international hospital/clinic accreditation such as JCI or ISO, plus dentist
                membership in bodies like the ICOI or AAID. Hungary and Poland additionally operate under
                EU clinical standards. Accreditation must be renewed, so confirm current status on the
                clinic&apos;s own site or the accrediting body — not a third-party listing.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Implant brand &amp; materials</h3>
              <p className="text-sm text-gray-700 mb-0">
                Recognized implant systems such as{' '}
                <a href="https://www.straumann.com" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Straumann</a>{' '}
                and{' '}
                <a href="https://www.nobelbiocare.com" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Nobel Biocare</a>{' '}
                carry long-term documentation and replacement-part availability if something needs
                service later. Ask which brand is quoted, and whether the prosthetic is acrylic or
                zirconia — it materially changes both price and durability.
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
            <h4 className="font-bold text-gray-900 mt-0 mb-2">1. Size the case first</h4>
            <p className="text-sm text-gray-600 mb-0">
              A single implant rarely justifies a long-haul flight; the travel can eat the savings. A
              full-arch or full-mouth case is where the dollar gap is large enough that even a long trip
              pencils out. Match the destination to the size of the work.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">2. Add the all-in cost, not the headline</h4>
            <p className="text-sm text-gray-600 mb-0">
              Flights, hotel nights, possible second trips, grafting, and a prosthetic upgrade can move
              the real total well past the quote. Mexico&apos;s short trip can beat a cheaper Turkey
              quote once two long-haul flights are added — for a small case.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">3. Decide how much the regulatory framework matters</h4>
            <p className="text-sm text-gray-600 mb-0">
              If EU clinical standards give you confidence, Hungary or Poland move up your list. If
              proximity matters most, Mexico wins. If lowest headline price drives the decision, Turkey
              and Colombia lead — paired with stricter vetting.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">4. Vet the clinic, not the country</h4>
            <p className="text-sm text-gray-600 mb-0">
              Country averages are a starting point, not a verdict. Confirm the surgeon&apos;s experience
              with your exact procedure, the implant brand, the accreditation, and the written quote —
              and how revisions are handled once you fly home.
            </p>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
          <p className="text-sm text-yellow-800 mb-0">
            <strong>Red flag:</strong> any clinic that quotes a full-arch price without naming the implant
            brand and prosthetic material, pressures a deposit before you have a written itemized quote,
            or cannot connect you with the treating dentist. Legitimate clinics set realistic
            expectations and put the details in writing.
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
            Explore full destination profiles for the dental-tourism markets in this guide, then dig into
            the markets you are weighing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/medical-tourism" className="inline-block rounded-lg bg-cyan-600 px-6 py-3 font-medium text-white hover:bg-cyan-700">
              Medical Tourism Hub
            </Link>
            <Link href="/destinations/mexico" className="inline-block rounded-lg border-2 border-cyan-600 px-6 py-3 font-medium text-cyan-600 hover:bg-cyan-50">
              Mexico Destination Guide
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

          <Link href="/guides/hungary-dental-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🦷</span>
              <div>
                <div className="font-bold text-gray-900">Hungary Dental Cost Guide</div>
                <div className="text-sm text-gray-600">Implants, All-on-4 &amp; crowns across Budapest</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/panama-dental-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🦷</span>
              <div>
                <div className="font-bold text-gray-900">Panama Dental Cost Guide</div>
                <div className="text-sm text-gray-600">Implants &amp; crowns vs US prices</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/los-algodones-dental-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🦷</span>
              <div>
                <div className="font-bold text-gray-900">Los Algodones Dental Guide</div>
                <div className="text-sm text-gray-600">&ldquo;Molar City&rdquo; — choosing a dentist, border crossing</div>
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

          <Link href="/destinations/costa-rica" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇨🇷</span>
              <div>
                <div className="font-bold text-gray-900">Costa Rica Destination Guide</div>
                <div className="text-sm text-gray-600">Clinics, procedures, and trip logistics</div>
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
            <li>• <a href="https://kristalclinic.com/dental-implants/2025-dental-implant-costs-price-comparison-international-guide/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Dental Implant Cost by Country 2026 — international price comparison (Kristal Clinic)</a></li>
            <li>• <a href="https://www.medicaltourismco.com/all-on-four-fixed-dental-implants-abroad/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">All-on-4 Fixed Dental Implants Abroad — per-arch pricing (Medical Tourism Corporation)</a></li>
            <li>• <a href="https://www.dentaly.org/us/dental-tourism-usa/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Cheap Dental Implants Abroad — country cost table (Dentaly.org)</a></li>
            <li>• <a href="https://www.medicaltourismco.com/dental-implants-in-costa-rica/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Dental Implants in Costa Rica — 2026 costs &amp; packages (Medical Tourism Corporation)</a></li>
            <li>• <a href="https://www.mydentalfly.com/blog/dental-implants-poland-prices" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Dental Implants Poland Prices 2026 (MyDentalFly)</a></li>
            <li>• <a href="https://mainstreetdentalnewark.com/dental-implant-cost-in-the-usa/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Dental Implant Cost in the USA: 2025–2026 Guide (US baseline)</a></li>
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Comparing Dental Implants Abroad?"
          description="Get our dental-tourism checklist: how to read an itemized quote, the implant-brand and accreditation questions to ask, and how to budget the all-in cost."
          source="guide_dental_implants_abroad_cost_comparison"
        />
      </div>

      </SidebarShell>
      <Footer />
    </main>
  );
}
