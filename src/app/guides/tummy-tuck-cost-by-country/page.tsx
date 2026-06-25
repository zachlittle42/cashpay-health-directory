import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Tummy Tuck Cost by Country (2026): US vs Mexico & More' },
  alternates: { canonical: 'https://vitalityscout.com/guides/tummy-tuck-cost-by-country' },
  description:
    'Tummy tuck cost by country: abdominoplasty prices in Mexico, Colombia & Turkey vs the US, what each package includes, savings, and accreditation.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// stated on this page. Every price answer ends with the verify-with-clinic
// hedge, consistent with the medical disclaimer. The visible FAQ block below
// mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a tummy tuck cost abroad compared to the US?',
    answer:
      'A full tummy tuck (abdominoplasty) is commonly estimated around $8,000-$15,000 all-in in the US, versus roughly $3,500-$6,500 in Mexico, $3,500-$6,000 in Colombia, and about $3,700-$5,400 for an all-inclusive package in Turkey. The American Society of Plastic Surgeons lists an average US surgeon fee alone of about $8,174, which excludes anesthesia and the facility. Most published comparisons describe 50-75% savings abroad. These are estimates that vary by surgeon, the extent of the procedure, and whether liposuction or muscle repair is included — get a written, itemized quote before you travel.',
  },
  {
    question: 'Which country is cheapest for a tummy tuck?',
    answer:
      'On the comparisons we reviewed, Turkey often posts the lowest all-inclusive package price (around $3,700-$5,400), with Mexico and Colombia close behind at roughly $3,500-$6,500 and $3,500-$6,000 for a standard abdominoplasty. Cheapest is not automatically best: a low headline price can reflect a less-experienced surgeon, fewer safety protocols, or a quote that excludes liposuction, muscle repair, or hospital nights. Confirm exactly what each quote includes, and weigh travel cost and surgeon credentials alongside price.',
  },
  {
    question: 'What does an all-inclusive tummy tuck package abroad include?',
    answer:
      'Package contents vary widely. A typical package may bundle the surgeon fee, anesthesia, the operating room and any hospital nights, pre-operative testing, a compression garment, post-op follow-ups during your stay, airport transfers, and (especially in Turkey) several hotel nights. It often does NOT include your international flights, liposuction or muscle-repair add-ons, a second compression garment, or revision and complication care after you return home. Ask the clinic for a written, itemized list of what is and is not included before you pay a deposit.',
  },
  {
    question: 'Is a tummy tuck abroad safe?',
    answer:
      'Quality ranges clinic to clinic, so the standard advice is to use accredited facilities and board-certified plastic surgeons. Look for JCI-accredited hospitals, surgeon membership in the national plastic-surgery society (SCCP in Colombia, CMCPER board certification in Mexico) or ISAPS, and COFEPRIS-registered facilities in Mexico. Abdominoplasty is major surgery with real risks (blood clots, infection, fluid collection, poor healing), and combining it with liposuction or other procedures raises anesthesia time and risk. This is information, not medical advice — discuss candidacy, risks, and a complication plan with a qualified clinician.',
  },
  {
    question: 'How long do I need to stay abroad for a tummy tuck?',
    answer:
      'Most surgeons advise staying roughly 7-10 days after a full abdominoplasty so drains can be removed and an early follow-up can confirm you are healing before you fly. Flying too soon after major abdominal surgery raises the risk of blood clots, so many programs build in this recovery window before clearing you for a long-haul flight. Extended or combined procedures may need longer. Confirm the exact stay and your fly-home clearance with the operating surgeon, not a booking coordinator.',
  },
  {
    question: 'Will US insurance cover a tummy tuck done abroad?',
    answer:
      'A cosmetic tummy tuck is almost never covered by US insurance, whether done at home or overseas, because it is considered elective. Limited exceptions can apply when abdominal repair is medically necessary (for example, a panniculectomy after major weight loss or hernia repair), and even then coverage rarely extends to treatment performed abroad. That is why cash-pay pricing is the relevant comparison for most travelers. Separate medical-travel insurance that covers complications is worth considering. Confirm any coverage with your insurer before you commit.',
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

export default function TummyTuckCostByCountry() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Tummy Tuck Cost by Country (2026): US vs Mexico, Colombia & Turkey',
    description:
      'A side-by-side cost comparison of a tummy tuck (abdominoplasty) — estimated prices in Mexico, Colombia, and Turkey versus the US, what each package includes, the savings, accreditation to verify, and how to choose.',
    url: 'https://vitalityscout.com/guides/tummy-tuck-cost-by-country',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/tummy-tuck-cost-by-country#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalProcedure',
      name: 'Tummy tuck (abdominoplasty)',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'Tummy Tuck Cost (surgeon-fee average) — American Society of Plastic Surgeons', url: 'https://www.plasticsurgery.org/cosmetic-procedures/tummy-tuck/cost' },
      { '@type': 'CreativeWork', name: 'Tummy Tuck Abroad — 2026 Cost Guide by Country (123.clinic)', url: 'https://www.123.clinic/en/blog/cosmetic-plastic-surgery/tummy-tuck-abroad-cost-guide/100' },
      { '@type': 'CreativeWork', name: 'Tummy Tuck in Latin America — Mexico & Colombia costs and accreditation (Medical Tourism Packages)', url: 'https://www.medicaltourismpackages.com/abdominoplasty-tummy-tuck-latin-america/' },
      { '@type': 'CreativeWork', name: 'Tummy Tuck in Tijuana — 2026 prices across 361 clinics (Bookimed)', url: 'https://us-uk.bookimed.com/clinics/country=mexico/city=tijuana/procedure=abdominoplasty/' },
      { '@type': 'CreativeWork', name: 'Tummy Tuck Surgery in Colombia — 2026 Prices (Flymedi)', url: 'https://www.flymedi.com/colombia/plastic-surgery/tummy-tuck' },
      { '@type': 'CreativeWork', name: 'Tummy Tuck Cost Turkey 2026 — all-inclusive packages & JCI hospitals (HayatMed)', url: 'https://www.hayatmed.com/blog/plastic-surgeries/tummy-tuck/cost-of-a-tummy-tuck/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/tummy-tuck-cost-by-country#faq', url: 'https://vitalityscout.com/guides/tummy-tuck-cost-by-country' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-cyan-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/medical-tourism" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Medical Tourism Hub
          </Link>

          <div className="mb-4 flex items-center gap-3">
            <span className="text-4xl">💲</span>
            <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700">
              Comparison Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tummy Tuck Cost by Country: US vs Mexico, Colombia &amp; Turkey
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            The three most-searched abdominoplasty destinations for US patients — Mexico, Colombia, and
            Turkey — side by side against US prices. Estimated costs, what each package includes, the real
            savings, and how to weigh price against travel and surgeon credentials.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-cyan-500 bg-cyan-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A full tummy tuck (abdominoplasty) runs roughly <strong>$8,000-$15,000</strong> all-in in the
              US, versus an estimated <strong>$3,500-$6,500</strong> in Mexico, <strong>$3,500-$6,000</strong>{' '}
              in Colombia, and about <strong>$3,700-$5,400</strong> for an all-inclusive package in Turkey —
              savings of 50-75% on published comparisons. Turkey often posts the lowest package price.
              Cheapest is not automatically best: weigh surgeon credentials, accreditation, what the quote
              includes, and travel cost. Verify every quote with the clinic. This is information, not medical
              advice.
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
            <strong>A tummy tuck is major surgery, not a cosmetic quick fix.</strong> Abdominoplasty carries
            real risks — blood clots, infection, fluid collection (seroma), poor wound healing, and
            anesthesia complications — and combining it with liposuction or other procedures lengthens
            anesthesia time and raises risk. A low headline price means little until you know the surgeon&apos;s
            credentials, the facility&apos;s accreditation, and exactly what the quote covers.
          </p>
          <p className="text-sm text-red-800">
            This guide is for informational purposes only and is not medical advice. Outcomes depend on your
            case, the surgeon, and the facility. Discuss candidacy, alternatives, risks, and a complication
            plan with a qualified, board-certified plastic surgeon before pursuing treatment abroad.
          </p>
        </div>
      </section>

      {/* At a Glance */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-cyan-900 mb-3">Tummy Tuck Cost by Country at a Glance</h2>
          <ul className="text-sm text-gray-700 space-y-1 mb-0">
            <li>✓ <strong>50-75% savings</strong> vs US prices on most published comparisons (estimates)</li>
            <li>✓ <strong>Lowest all-inclusive package:</strong> Turkey (~$3,700-$5,400, hotel often bundled)</li>
            <li>✓ <strong>Closest to the US:</strong> Mexico (Tijuana is a short trip or drive-across from California)</li>
            <li>✓ <strong>Body-contouring reputation:</strong> Colombia (Medellín, Bogotá; SCCP surgeons)</li>
            <li>✓ <strong>US baseline:</strong> ~$8,000-$15,000 all-in; ASPS lists an ~$8,174 surgeon fee alone</li>
            <li>✓ <strong>Recovery before flying:</strong> commonly 7-10 days after a full abdominoplasty</li>
            <li>✓ <strong>Verify:</strong> board certification + JCI-accredited facility, every time</li>
          </ul>
        </div>
      </section>

      {/* Why people travel */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why a Tummy Tuck Drives So Much Cosmetic Travel</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              An abdominoplasty is almost always paid out of pocket. US insurance treats a cosmetic tummy
              tuck as elective, so the typical patient is paying cash either way — and the American Society of
              Plastic Surgeons lists an average surgeon fee of roughly $8,174 before anesthesia, the operating
              facility, and the rest of the bill are added. All-in, a US full tummy tuck commonly lands in the
              $8,000-$15,000 range, and more for extended or combined cases.
            </p>
            <p>
              That makes the comparison stark. The same procedure, performed by board-certified plastic
              surgeons in accredited facilities, is widely estimated at half to a quarter of the US price in
              Mexico, Colombia, and Turkey. The trade-offs are real — travel time, a mandatory recovery
              window before you can fly, the logistics of follow-up across borders, and a quality range that
              makes vetting non-negotiable — but the dollar gap on an elective surgery is large enough that an
              entire cosmetic-tourism industry has grown around it. This guide compares the three markets US
              patients search for most, then gives you a way to choose between them.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Comparison Table (REQUIRED) */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Tummy Tuck Cost by Country (Estimates)</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Prices below are estimates for a standard full abdominoplasty, compiled from public cosmetic-tourism
          cost-comparison sources for 2026. They are estimates, not quotes — extended, combined (with
          liposuction or muscle repair), or revision cases cost more.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Country</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-green-700">Typical Cost (est.)</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">What&apos;s Often Included</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Est. Savings vs US</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Accreditation to Verify</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">United States (baseline)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$8,000 - $15,000+ all-in</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Surgeon, anesthesia, facility billed separately; ASPS lists ~$8,174 surgeon fee alone</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">—</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">ABPS board-certified surgeon</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Turkey</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~$3,700 - $5,400 package</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Surgeon, anesthesia, hospital night, garment, transfers, 5-7 hotel nights</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~55-70%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">JCI hospital; ISAPS; board-certified</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Colombia</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$3,500 - $6,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Surgeon, anesthesia, OR, garment, follow-ups; hotel usually separate</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~55-70%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">SCCP member; JCI hospitals (Bogotá)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Mexico</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$3,500 - $6,500</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Surgeon, anesthesia, OR, garment, transfers; some bundle hotel nights</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~50-70%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">COFEPRIS facility; CMCPER board; JCI hospitals</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Ranges vary by surgeon, city, and how extensive the procedure is. A tummy tuck combined with
          liposuction, muscle repair (diastasis recti), or a body lift costs more than a standalone
          abdominoplasty. Tijuana data across 361 clinics put the average around $4,900 in early 2026.
          European and combined quotes are often given in other currencies and converted here for comparison.
          Always request a written, itemized quote.
        </p>
      </section>

      {/* Per-market breakdown */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">The Three Markets, Country by Country</h2>
          <p className="text-gray-600 mb-8 text-sm">
            Each market trades price, travel, and surgical reputation differently. Here is how they actually
            differ for a US patient considering an abdominoplasty.
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Mexico</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Closest to US</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Mexico is the logistically easiest option for most US patients — Tijuana is a short trip or a
                drive-across from California, and pricing for a standard abdominoplasty is widely estimated at
                $3,500-$6,500, with Tijuana clinic data putting the average near $4,900 in early 2026. The
                short travel makes the mandatory post-op recovery window easier to manage close to home, and
                many surgeons trained or did residencies in the US. Quality ranges widely between
                storefront operations and established practices, so confirm the surgeon&apos;s CMCPER board
                certification and that the facility is COFEPRIS-registered.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Colombia</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Body-contouring hub</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Colombia — chiefly Medellín, Bogotá, Cali, and Cartagena — built a deep body-contouring
                reputation, and a standard abdominoplasty is commonly estimated at $3,500-$6,000, with
                Medellín often running 10-20% below Bogotá for equivalent work. The country&apos;s surgeons are
                frequently members of the Sociedad Colombiana de Cirugía Plástica (SCCP), which maintains a
                public member registry you can check. A short-to-medium flight keeps it accessible. As
                everywhere, the country average matters less than the specific surgeon, so vet the named
                provider, not the destination.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Turkey</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Lowest package price</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Turkey, centered on Istanbul, often posts the lowest all-inclusive tummy-tuck package in this
                comparison — roughly $3,700-$5,400 — frequently bundling the JCI-accredited hospital stay,
                surgeon and anesthesia fees, a compression garment, transfers, and five to seven hotel
                nights. Turkey performs tens of thousands of abdominoplasties a year, so experience is deep,
                but the market has a very wide quality range and the longest flight. The low headline price
                makes verifying the surgeon&apos;s board certification, ISAPS membership, and the hospital&apos;s
                JCI status especially important.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What an All-Inclusive Tummy Tuck Package Does — and Does Not — Cover</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-bold text-green-900 mt-0 mb-3">Commonly included</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>✓ The surgeon&apos;s fee and the abdominoplasty itself</li>
              <li>✓ General anesthesia and the operating room</li>
              <li>✓ Pre-operative testing (bloodwork, ECG)</li>
              <li>✓ One or more hospital/recovery nights</li>
              <li>✓ A compression garment</li>
              <li>✓ Post-op follow-up visits and drain removal during your stay</li>
              <li>✓ Airport transfers, and (in Turkey) several hotel nights</li>
            </ul>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-bold text-yellow-900 mt-0 mb-3">Often NOT included</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>✗ Your international flights</li>
              <li>✗ Liposuction or muscle-repair (diastasis recti) add-ons</li>
              <li>✗ Upgrading to an extended or fleur-de-lis tummy tuck</li>
              <li>✗ A second compression garment</li>
              <li>✗ Extra hotel nights if recovery runs long</li>
              <li>✗ Revisions or complication care after you return home</li>
            </ul>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
          <p className="text-sm text-yellow-800 mb-0">
            <strong>The single most useful question:</strong> ask for a written, itemized quote that states
            whether the price is a standalone abdominoplasty or includes liposuction and muscle repair, then
            ask what is excluded. A &ldquo;$3,900 tummy tuck&rdquo; that excludes liposuction, the hospital
            night, and the garment is not the same product as one that includes them.
          </p>
        </div>
      </section>

      {/* Accreditation / safety explainer */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Safety &amp; Quality Signals to Verify</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Surgeon board certification</h3>
              <p className="text-sm text-gray-700 mb-0">
                Confirm the surgeon is a board-certified plastic surgeon — not just a licensed physician.
                Check the national society directly: the Sociedad Colombiana de Cirugía Plástica (SCCP) in
                Colombia and the Consejo Mexicano de Cirugía Plástica (CMCPER) in Mexico both maintain
                credential lookups, and many surgeons across these markets list{' '}
                <a href="https://www.isaps.org" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">ISAPS</a>{' '}
                membership. Verify with the issuing body, not a third-party listing.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Facility accreditation</h3>
              <p className="text-sm text-gray-700 mb-0">
                Look for hospital-level accreditation such as{' '}
                <a href="https://www.jointcommissioninternational.org" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">JCI</a>{' '}
                — JCI-accredited hospitals operate in all three markets, including in Bogotá and Mexico City,
                and Turkish cosmetic-tourism programs commonly advertise JCI facilities. In Mexico, confirm
                the facility is COFEPRIS-registered. Accreditation must be renewed, so confirm current status
                on the accrediting body&apos;s site. For abdominoplasty specifically, ask how blood-clot
                prevention, fluid-collection (seroma) management, and complications are handled.
              </p>
            </div>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-6">
            <p className="text-sm text-red-800 mb-0">
              <strong>Why this matters more for surgery than for a scan:</strong> abdominoplasty is an
              invasive operation under general anesthesia. The risks — blood clots, infection, seroma, poor
              healing — are managed by surgeon skill, facility standards, and a clear complication plan, not
              by a low price. Combining a tummy tuck with liposuction or other procedures in one sitting
              raises anesthesia time and risk.
            </p>
          </div>
        </div>
      </section>

      {/* What affects price */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What Actually Moves the Price</h2>
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">Standalone vs combined procedure</h4>
            <p className="text-sm text-gray-600 mb-0">
              A standalone abdominoplasty sits at the low end of a country&apos;s range. Adding liposuction,
              muscle repair (diastasis recti), or rolling it into a mommy makeover or body lift raises both
              the price and the anesthesia time. Make sure two quotes describe the same procedure before you
              compare them.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">Full vs mini vs extended</h4>
            <p className="text-sm text-gray-600 mb-0">
              A mini tummy tuck addresses only the area below the navel and costs less; a full abdominoplasty
              treats the whole abdomen; an extended or fleur-de-lis version removes more skin and costs more.
              The technique drives a large part of the price gap within a single country.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">Surgeon experience and clinic reputation</h4>
            <p className="text-sm text-gray-600 mb-0">
              A more experienced, higher-volume board-certified surgeon and an accredited facility command
              higher fees — and that premium is usually where you do not want to economize on a major
              operation. The lowest quote in a market can reflect a less-experienced surgeon or fewer safety
              protocols.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">What the package absorbs</h4>
            <p className="text-sm text-gray-600 mb-0">
              Turkey&apos;s packages typically bundle hotel nights and transfers, which can make a slightly
              higher headline price the better all-in value. Mexico and Colombia more often quote the surgery
              alone, with hotel separate. Add flights, hotel, and a possible extended stay to compare real
              totals, not headline quotes.
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
              <h4 className="font-bold text-gray-900 mt-0 mb-2">1. Define the exact procedure first</h4>
              <p className="text-sm text-gray-600 mb-0">
                Decide whether you need a mini, full, or extended tummy tuck, and whether liposuction or
                muscle repair is part of it. Quotes are only comparable once the procedure is the same.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-gray-900 mt-0 mb-2">2. Add the all-in cost, not the headline</h4>
              <p className="text-sm text-gray-600 mb-0">
                Flights, hotel nights, a mandatory recovery window before you fly, and possible add-ons can
                move the real total well past the quote. Mexico&apos;s short trip can beat a cheaper Turkey
                quote once two long-haul flights and a week of hotel are added.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-gray-900 mt-0 mb-2">3. Decide what you optimize for</h4>
              <p className="text-sm text-gray-600 mb-0">
                If proximity and an easy recovery close to home matter most, Mexico wins. If a deep
                body-contouring reputation appeals, Colombia moves up. If the lowest all-inclusive package
                price drives the decision, Turkey leads — paired with stricter vetting.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-gray-900 mt-0 mb-2">4. Vet the surgeon, not the country</h4>
              <p className="text-sm text-gray-600 mb-0">
                Country averages are a starting point, not a verdict. Confirm board certification, the
                facility&apos;s accreditation, how many of your exact procedure the surgeon performs, a written
                itemized quote, and how revisions and complications are handled once you fly home.
              </p>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
            <p className="text-sm text-yellow-800 mb-0">
              <strong>Red flag:</strong> any clinic that quotes a tummy-tuck price without naming the surgeon
              or specifying full vs mini and whether liposuction is included, pressures a deposit before you
              have a written itemized quote, or cannot connect you with the operating surgeon. Legitimate
              programs set realistic expectations and put the details in writing.
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

      {/* CTA / money-page links */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Compare Plastic-Surgery Options Side by Side</h3>
          <p className="text-gray-600 mb-6">
            Browse vetted plastic-surgery providers, then dig into the destination profiles for the markets
            you are weighing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/plastic_surgery" className="inline-block rounded-lg bg-cyan-600 px-6 py-3 font-medium text-white hover:bg-cyan-700">
              Plastic Surgery Providers
            </Link>
            <Link href="/destinations/mexico" className="inline-block rounded-lg border-2 border-cyan-600 px-6 py-3 font-medium text-cyan-600 hover:bg-cyan-50">
              Mexico Destination Guide
            </Link>
            <Link href="/destinations/colombia" className="inline-block rounded-lg border-2 border-cyan-600 px-6 py-3 font-medium text-cyan-600 hover:bg-cyan-50">
              Colombia Destination Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/plastic-surgery-abroad-cost-comparison" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌍</span>
              <div>
                <div className="font-bold text-gray-900">Plastic Surgery Abroad: Cost Comparison</div>
                <div className="text-sm text-gray-600">All procedures across 6 countries vs the US</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/colombia-plastic-surgery-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💲</span>
              <div>
                <div className="font-bold text-gray-900">Colombia Plastic Surgery Cost</div>
                <div className="text-sm text-gray-600">BBL, lipo, breast &amp; tummy tuck vs US, by city</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/mommy-makeover-mexico" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">👶</span>
              <div>
                <div className="font-bold text-gray-900">Mommy Makeover in Mexico</div>
                <div className="text-sm text-gray-600">Tummy tuck + breast + lipo bundled, costs &amp; clinics</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/thailand-cosmetic-surgery-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💲</span>
              <div>
                <div className="font-bold text-gray-900">Cosmetic Surgery Thailand Cost</div>
                <div className="text-sm text-gray-600">Tummy tuck, lipo &amp; more in Bangkok vs the US</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/is-plastic-surgery-in-turkey-safe" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🛡️</span>
              <div>
                <div className="font-bold text-gray-900">Is Plastic Surgery in Turkey Safe?</div>
                <div className="text-sm text-gray-600">What JCI means, the real risks, how to vet a surgeon</div>
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
            <li>• <a href="https://www.plasticsurgery.org/cosmetic-procedures/tummy-tuck/cost" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Tummy Tuck Cost — surgeon-fee average ~$8,174 (American Society of Plastic Surgeons)</a></li>
            <li>• <a href="https://www.123.clinic/en/blog/cosmetic-plastic-surgery/tummy-tuck-abroad-cost-guide/100" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Tummy Tuck Abroad — 2026 Cost Guide by Country (123.clinic)</a></li>
            <li>• <a href="https://www.medicaltourismpackages.com/abdominoplasty-tummy-tuck-latin-america/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Tummy Tuck in Latin America — Mexico &amp; Colombia costs and accreditation (Medical Tourism Packages)</a></li>
            <li>• <a href="https://us-uk.bookimed.com/clinics/country=mexico/city=tijuana/procedure=abdominoplasty/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Tummy Tuck in Tijuana — 2026 prices across 361 clinics (Bookimed)</a></li>
            <li>• <a href="https://www.flymedi.com/colombia/plastic-surgery/tummy-tuck" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Tummy Tuck Surgery in Colombia — 2026 Prices (Flymedi)</a></li>
            <li>• <a href="https://www.hayatmed.com/blog/plastic-surgeries/tummy-tuck/cost-of-a-tummy-tuck/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Tummy Tuck Cost Turkey 2026 — all-inclusive packages &amp; JCI hospitals (HayatMed)</a></li>
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Comparing a Tummy Tuck Abroad?"
          description="Get our cosmetic-tourism checklist: how to read an itemized quote, the board-certification and accreditation questions to ask, and how to budget the all-in cost."
          source="guide_tummy_tuck_cost_by_country"
        />
      </div>

      <Footer />
    </main>
  );
}
