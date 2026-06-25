import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'BBL Cost by Country (2026): US vs 4 Top Markets' },
  alternates: { canonical: 'https://vitalityscout.com/guides/bbl-cost-by-country' },
  description:
    'BBL cost by country: Brazilian butt lift prices in Colombia, Mexico, Turkey & Brazil vs the US, what packages include, savings, accreditation & safety.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// stated on this page. Every price answer is a labeled estimate ending in the
// verify-with-clinic hedge, consistent with the medical disclaimer. The visible
// FAQ block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much is a Brazilian butt lift (BBL) abroad versus the US?',
    answer:
      'A BBL is commonly estimated around $3,500-$7,000 in Colombia, $4,200-$6,500 in Mexico, $4,000-$7,000 in Turkey, and $3,000-$6,000 in Brazil, versus a US surgeon fee that averages roughly $4,800 but where the all-in surgical-center total commonly runs $8,000-$16,000+. Published comparisons describe savings of about 40-65% abroad. These are estimates that vary by surgeon, the number of liposuction areas, and what the package covers — get a written, itemized quote from the clinic before you travel.',
  },
  {
    question: 'Which is the cheapest country for a Brazilian butt lift (BBL)?',
    answer:
      'On the cost comparisons we reviewed, Brazil ($3,000-$6,000), Colombia ($3,500-$7,000), and Turkey ($4,000-$7,000) tend to post the lowest headline prices, with Mexico ($4,200-$6,500) close behind and easiest to reach overland. Cheapest is not automatically safest. BBL has the highest mortality rate of any cosmetic procedure, so surgeon board-certification, an accredited facility, and ultrasound-guided technique matter more than the price. Confirm exactly what each quote includes before comparing.',
  },
  {
    question: 'Is it safe to get a BBL abroad?',
    answer:
      'Safety depends far more on the surgeon and facility than on the country. A multi-society task force (ASPS, ASAPS, ISAPS) has warned that the BBL carries the highest mortality rate of any aesthetic procedure — estimated near 1 in 3,000 — driven by fatal fat embolism when fat is injected into or beneath the gluteal muscle. Current guidance is subcutaneous-only fat injection with ultrasound guidance, a board-certified plastic surgeon (SCCP in Colombia, CMCPER in Mexico, SBCP in Brazil, JCI-accredited facilities in Turkey), and an accredited operating facility. This is information, not medical advice — discuss candidacy and risks with a qualified surgeon.',
  },
  {
    question: 'What does an all-inclusive BBL package abroad include?',
    answer:
      'Package contents vary by clinic. A typical all-inclusive BBL package may bundle the surgery, anesthesia and facility fees, pre- and post-op testing, one overnight stay, nursing care, lymphatic drainage massages, a compression garment, and airport or hotel transfers. It often does NOT include your international flights, extended recovery accommodation, revision surgery, or complication care after you return home. Ask the clinic for a written, itemized list of what is and is not included before paying any deposit.',
  },
  {
    question: 'How long do I need to stay abroad for a BBL?',
    answer:
      'Most clinics ask BBL patients to stay roughly 7-10 days in-country for the surgery, initial healing, lymphatic drainage sessions, and a follow-up before clearance to fly. Long-haul flights soon after fat-grafting surgery raise clot risk, so do not book a tight return. Confirm the exact in-country timeline and the surgeon’s fly-home clearance with your clinic before booking flights.',
  },
  {
    question: 'Does insurance cover a BBL?',
    answer:
      'No. A Brazilian butt lift is a cosmetic procedure and is not covered by US health insurance, so cash-pay pricing is the relevant comparison whether you stay in the US or travel. Separate medical-travel insurance that covers complications abroad is worth considering, since revision and complication care after you return home is usually not bundled into a package. Confirm coverage with both your insurer and the clinic before you commit.',
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

export default function BblCostByCountry() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'BBL Cost by Country (2026): US vs Colombia, Mexico, Turkey & Brazil',
    description:
      'A side-by-side cost comparison of a Brazilian butt lift (BBL) — typical prices in Colombia, Mexico, Turkey, and Brazil versus the US, what each package includes, the accreditation to verify, BBL safety, and how to choose.',
    url: 'https://vitalityscout.com/guides/bbl-cost-by-country',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/bbl-cost-by-country#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalProcedure',
      name: 'Brazilian butt lift (BBL), gluteal fat grafting',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'BBL Cost 2026 — US average & price breakdown (Surgery Cost Guide)', url: 'https://surgerycostguide.com/bbl-cost/' },
      { '@type': 'CreativeWork', name: 'Brazilian Butt Lift in Tijuana — BBL price and packages (Medical Tourism Corporation)', url: 'https://www.medicaltourismco.com/brazilian-butt-lift-in-tijuana/' },
      { '@type': 'CreativeWork', name: 'BBL in Colombia — cost, safety & SCCP surgeon guide (Medical Tourism Packages)', url: 'https://www.medicaltourismpackages.com/butt-lift-gluteoplasty-colombia/' },
      { '@type': 'CreativeWork', name: 'BBL Cost in Turkey 2026 — prices & trip budget (HayatMed)', url: 'https://www.hayatmed.com/blog/plastic-surgeries/brazilian-butt-lift/bbl-cost-in-turkey/' },
      { '@type': 'CreativeWork', name: 'BBL Cost in Brazil 2026 — pricing & quality guide (SurgyTeam)', url: 'https://surgyteam.com/ar/bbl-in-brazil-cost-2026-pricing-quality-guide/' },
      { '@type': 'CreativeWork', name: 'Plastic Surgery Societies Issue Urgent Warning About the Risks of Brazilian Butt Lifts (ASPS)', url: 'https://www.plasticsurgery.org/news/press-releases/plastic-surgery-societies-issue-urgent-warning-about-the-risks-associated-with-brazilian-butt-lifts' },
      { '@type': 'CreativeWork', name: 'Brazilian Butt Lift–Associated Mortality: The South Florida Experience (NIH/PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9896146/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/bbl-cost-by-country#faq', url: 'https://vitalityscout.com/guides/bbl-cost-by-country' };

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
            <span className="text-4xl">🍑</span>
            <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700">
              Comparison Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            BBL Cost by Country: US vs Colombia, Mexico, Turkey &amp; Brazil
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            The four most-searched Brazilian butt lift markets — Colombia, Mexico, Turkey, and Brazil —
            side by side against US prices. Typical costs, what each package includes, the accreditation
            to verify, and why, for this procedure specifically, the surgeon matters more than the price.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-cyan-500 bg-cyan-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A Brazilian butt lift is commonly estimated at <strong>$3,500-$7,000</strong> in Colombia,{' '}
              <strong>$4,200-$6,500</strong> in Mexico, <strong>$4,000-$7,000</strong> in Turkey, and{' '}
              <strong>$3,000-$6,000</strong> in Brazil — versus a US surgeon fee averaging about{' '}
              <strong>$4,800</strong> and an all-in surgical-center total that commonly runs{' '}
              <strong>$8,000-$16,000+</strong>. That is roughly 40-65% savings on published comparisons.
              But the BBL has the highest mortality rate of any cosmetic surgery, so weigh
              board-certification, an accredited facility, and ultrasound-guided technique above price.
              Verify every quote with the clinic. This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">Last reviewed: June 2026 • 14 min read</p>
        </div>
      </section>

      {/* Safety-first Disclaimer — the BBL is the highest-risk cosmetic procedure */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-red-900 mb-3">Read This First — BBL Is the Highest-Risk Cosmetic Procedure</h3>
          <p className="text-sm text-red-800 mb-3">
            A multi-society task force led by the{' '}
            <a href="https://www.plasticsurgery.org/news/press-releases/plastic-surgery-societies-issue-urgent-warning-about-the-risks-associated-with-brazilian-butt-lifts" target="_blank" rel="noopener noreferrer nofollow" className="underline">
              American Society of Plastic Surgeons (ASPS), ASAPS, and ISAPS
            </a>{' '}
            has warned that the Brazilian butt lift has an estimated mortality rate near{' '}
            <strong>1 in 3,000</strong> — higher than any other aesthetic procedure. The cause is fatal
            fat embolism when fat is injected into or beneath the gluteal muscle. Current guidance is
            subcutaneous-only fat placement, ultrasound guidance, a board-certified plastic surgeon, and
            an accredited operating facility.
          </p>
          <p className="text-sm text-red-800">
            This guide is for informational purposes only and is not medical advice. A low headline price
            means nothing if the surgeon is not board-certified or the facility is not accredited. Discuss
            candidacy, technique, alternatives, and risks with a qualified plastic surgeon before pursuing
            a BBL anywhere.
          </p>
        </div>
      </section>

      {/* At a Glance */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-cyan-900 mb-3">BBL Cost by Country at a Glance</h2>
          <ul className="text-sm text-gray-700 space-y-1 mb-0">
            <li>✓ <strong>~40-65% savings</strong> vs the US all-in total on most published comparisons (estimates)</li>
            <li>✓ <strong>Lowest headline pricing:</strong> Brazil, Colombia, Turkey</li>
            <li>✓ <strong>Easiest to reach overland:</strong> Mexico (border crossings; no long-haul flight)</li>
            <li>✓ <strong>Birthplace of the procedure:</strong> Brazil (highest cosmetic-surgery volume per capita)</li>
            <li>✓ <strong>Board to verify:</strong> SCCP (Colombia), CMCPER (Mexico), TSPRAS + JCI facility (Turkey), SBCP (Brazil)</li>
            <li>✓ <strong>Never covered by insurance</strong> — cash-pay either way</li>
            <li>✓ <strong>In-country stay:</strong> commonly 7-10 days before fly-home clearance</li>
          </ul>
        </div>
      </section>

      {/* The headline comparison table — REQUIRED */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">BBL Cost by Country (Estimates)</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Prices below are typical surgeon/package estimates for a Brazilian butt lift, compiled from
          public medical-tourism cost-comparison sources. They are estimates, not quotes — and for this
          procedure, the accreditation column should weigh more heavily than the price column.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Country</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-green-700">Typical BBL Cost (est.)</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">What&apos;s Usually Included</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Est. Savings vs US</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Accreditation to Verify</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">United States (baseline)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">~$4,800 surgeon fee; $8,000-$16,000+ all-in</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Surgeon, facility, anesthesia, garment, follow-up</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">—</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">ABPS board-certified; accredited surgical facility</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Brazil</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$3,000 - $6,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Surgery, anesthesia, clinic fees, recovery stay, aftercare</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~40-60%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">SBCP board certification</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Colombia</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$3,500 - $7,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Surgery, anesthesia, aftercare; concierge add-ons common</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~40-55%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">SCCP board certification</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Mexico</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$4,200 - $6,500</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Surgery, 1-night stay, anesthesia, testing, drainage massages</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~50-60%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">CMCPER board; ISAPS membership</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Turkey</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$4,000 - $7,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">All-inclusive: surgery, hotel, transfers, interpreter, garments</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~50-65%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">JCI-accredited facility; TSPRAS; Ministry of Health</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Ranges vary by surgeon, the number of liposuction areas, the volume of fat transferred, the
          city, and what the package covers. The US figure splits two ways: the surgeon fee alone
          averages about $4,800, but the all-in cost at an accredited surgical center commonly lands
          between $8,000 and $16,000 or more. Always request a written, itemized quote.
        </p>
      </section>

      {/* Why people travel */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why the BBL Drives So Much Cosmetic Travel</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              The Brazilian butt lift sits at an unusual intersection: it is one of the most-requested
              body-contouring procedures in the world, it is never covered by insurance, and the price
              gap between the US and the major medical-tourism markets is wide. A US surgeon fee averages
              around $4,800, but once an accredited facility, anesthesia, garments, and follow-up are
              added, the all-in total commonly clears $8,000 and can run past $16,000. Abroad, comparable
              packages are routinely quoted in the $3,000-$7,000 range — so an entire travel industry has
              grown around the savings.
            </p>
            <p>
              The BBL also carries a complication that no other cosmetic procedure shares at the same
              scale. Because it transfers fat into the buttock, an improperly placed injection can cause a
              fatal pulmonary fat embolism. That is why this guide leads with safety, treats the
              accreditation column as more important than the price column, and frames the decision as
              choosing a surgeon, not a country. The four markets below are the ones US patients search
              for most — here is how they actually differ.
            </p>
          </div>
        </div>
      </section>

      {/* Per-country breakdown */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">The Four Markets, Country by Country</h2>
          <p className="text-gray-600 mb-8 text-sm">
            Each market trades price, travel, and surgical reputation differently. Here is how they
            actually differ for a US patient considering a BBL.
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Brazil</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Birthplace of the BBL</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Brazil performs more cosmetic surgery per capita than almost any country, and the modern
                buttock-contouring technique traces its lineage to São Paulo and Rio. Surgeon-fee
                estimates start around $3,000-$6,000, with premium São Paulo and Rio clinics charging
                more for all-inclusive packages. The draw is depth of surgeon experience; the trade-off is
                a 9-11 hour flight, which complicates a safe recovery window. Verify SBCP (Sociedade
                Brasileira de Cirurgia Plástica) board certification, and choose a high-volume,
                accredited surgeon — BBL safety scales with experience.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Colombia</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Strong value</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Colombia — chiefly Medellín, Bogotá, Cali, and Cartagena — has become a leading
                body-contouring market, with BBL estimates around $3,500-$7,000 and concierge packages
                that bundle transport and recovery accommodation. Flight times sit in the medium range,
                shorter than Brazil or Turkey. The country-average price matters less than the specific
                surgeon: confirm SCCP (Sociedad Colombiana de Cirugía Plástica) board certification and
                that the operating facility is accredited, not a converted office.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Mexico</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Closest to US</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Mexico is the logistically easiest option for most US patients — Tijuana is a short
                crossing from San Diego, and Cancún pairs surgery with a recovery setting. BBL estimates
                run about $4,200-$6,500, with Tijuana commonly around $4,400-$5,800, including the
                surgery, a one-night stay, testing, and lymphatic drainage sessions. The short trip can
                offset a slightly higher headline price for anyone who values staying near home. Verify
                CMCPER board certification and ISAPS membership; quality ranges widely between established
                practices and border storefronts.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Turkey</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">All-inclusive packages</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Turkey, centered on Istanbul, posts BBL estimates around $4,000-$7,000, typically as
                all-inclusive packages that bundle the hotel, VIP transfers, interpreter, and garments.
                The trade-off is the longest flight and a market with a very wide quality range — premium
                clinics and high-volume operations sit side by side. The low headline price makes
                verifying a JCI-accredited facility, TSPRAS board certification, and the surgeon&apos;s
                BBL volume especially important.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What an All-Inclusive BBL Package Does — and Does Not — Cover</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-bold text-green-900 mt-0 mb-3">Commonly included</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>✓ The surgery (liposuction + fat transfer)</li>
              <li>✓ Anesthesia and facility fees</li>
              <li>✓ Pre- and post-op testing</li>
              <li>✓ One overnight stay and nursing care</li>
              <li>✓ Lymphatic drainage massage sessions (some packages)</li>
              <li>✓ A compression garment; airport/hotel transfers (many packages)</li>
            </ul>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-bold text-yellow-900 mt-0 mb-3">Often NOT included</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>✗ Your international flights</li>
              <li>✗ Extended recovery accommodation (beyond bundled nights)</li>
              <li>✗ Additional liposuction areas beyond the base quote</li>
              <li>✗ A second garment or extra drainage sessions</li>
              <li>✗ Revision surgery</li>
              <li>✗ Complication care after you return home</li>
            </ul>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
          <p className="text-sm text-yellow-800 mb-0">
            <strong>The single most useful question:</strong> ask for a written, itemized quote that
            lists every liposuction area, the fat volume planned, the facility&apos;s accreditation, and
            who covers complication care. A &ldquo;$3,500 BBL&rdquo; that excludes extra lipo zones, the
            garment, and any revision is not the same product as one that includes them.
          </p>
        </div>
      </section>

      {/* Safety / accreditation explainer */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Safety Signals to Verify (Weigh These Above Price)</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Board certification &amp; facility accreditation</h3>
              <p className="text-sm text-gray-700 mb-0">
                Confirm the surgeon holds the national plastic-surgery board credential — SCCP in
                Colombia, CMCPER in Mexico, SBCP in Brazil, TSPRAS in Turkey — and that the operating
                facility is accredited (JCI is the international benchmark). Accreditation can lapse, so
                verify current status on the board&apos;s or facility&apos;s own site, not a third-party
                listing.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Technique &amp; surgical volume</h3>
              <p className="text-sm text-gray-700 mb-0">
                The mortality risk comes from fat injected into or beneath the gluteal muscle. Ask whether
                the surgeon uses subcutaneous-only placement and ultrasound guidance, how many BBLs they
                perform a year, and how revisions and complications are handled once you fly home.
                Published data show the procedure is far safer when these standards are followed — and far
                more dangerous when they are not.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What affects price */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What Actually Drives the Price</h2>
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">Number of liposuction areas</h4>
            <p className="text-sm text-gray-600 mb-0">
              A BBL harvests fat through liposuction before transferring it. More donor areas — flanks,
              back, abdomen, arms — means more surgical time and a higher quote. Many headline prices
              assume a single lipo zone; confirm exactly which areas your quote covers.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">Surgeon experience and city</h4>
            <p className="text-sm text-gray-600 mb-0">
              High-volume, internationally credentialed surgeons and clinics in major cities (São Paulo,
              Istanbul, Medellín) command more than regional operators. Surgeons accredited by bodies like
              ISAPS may charge a premium — for this procedure, that premium is usually money well spent.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">All-in cost vs the headline</h4>
            <p className="text-sm text-gray-600 mb-0">
              Flights, extra recovery nights, a second garment, and possible revisions can move the real
              total well past the quote. Mexico&apos;s short overland trip can beat a cheaper Brazil quote
              once two long-haul flights and extra hotel nights are added.
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
              <h4 className="font-bold text-gray-900 mt-0 mb-2">1. Vet the surgeon before the country</h4>
              <p className="text-sm text-gray-600 mb-0">
                For a BBL, this order is non-negotiable. Confirm national board certification, an
                accredited facility, subcutaneous-only technique with ultrasound guidance, and the
                surgeon&apos;s annual BBL volume. A cheaper country with an unaccredited operator is the
                wrong trade on this procedure.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-gray-900 mt-0 mb-2">2. Add the all-in cost, not the headline</h4>
              <p className="text-sm text-gray-600 mb-0">
                Flights, 7-10 nights of recovery accommodation, extra lipo areas, and a possible revision
                change the math. Price the whole trip, then compare.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-gray-900 mt-0 mb-2">3. Match the destination to your priorities</h4>
              <p className="text-sm text-gray-600 mb-0">
                If proximity matters most, Mexico wins. If you want all-inclusive packaging, Turkey leads.
                If you want the deepest pool of surgeon experience, Brazil. If you want strong value at a
                shorter flight, Colombia. Then narrow to the specific surgeon.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-gray-900 mt-0 mb-2">4. Plan the recovery window</h4>
              <p className="text-sm text-gray-600 mb-0">
                Long-haul flights soon after fat-grafting surgery raise clot risk. Build in the
                clinic&apos;s full in-country stay (commonly 7-10 days) and a fly-home clearance before
                booking your return.
              </p>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
            <p className="text-sm text-yellow-800 mb-0">
              <strong>Red flag:</strong> any clinic that quotes a BBL without naming the surgeon&apos;s
              board certification or the facility&apos;s accreditation, pressures a deposit before a
              written itemized quote, promises a specific result, or cannot describe its fat-placement
              technique. Legitimate surgeons set realistic expectations and put the details in writing.
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Compare Plastic-Surgery Destinations</h3>
          <p className="text-gray-600 mb-6">
            Browse vetted plastic-surgery providers, then dig into the destination profiles for the
            markets in this guide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/plastic_surgery" className="inline-block rounded-lg bg-cyan-600 px-6 py-3 font-medium text-white hover:bg-cyan-700">
              Plastic Surgery Providers
            </Link>
            <Link href="/destinations/colombia" className="inline-block rounded-lg border-2 border-cyan-600 px-6 py-3 font-medium text-cyan-600 hover:bg-cyan-50">
              Colombia Destination Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related Guides + destinations */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides &amp; Destinations</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/destinations/mexico" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇲🇽</span>
              <div>
                <div className="font-bold text-gray-900">Mexico Destination Guide</div>
                <div className="text-sm text-gray-600">Vetted providers, border-crossing logistics, costs vs US</div>
              </div>
            </div>
          </Link>

          <Link href="/destinations/brazil" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇧🇷</span>
              <div>
                <div className="font-bold text-gray-900">Brazil Destination Guide</div>
                <div className="text-sm text-gray-600">São Paulo &amp; Rio SBCP surgeons, the BBL&apos;s home</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/colombia-plastic-surgery-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💲</span>
              <div>
                <div className="font-bold text-gray-900">Colombia Plastic Surgery Cost</div>
                <div className="text-sm text-gray-600">BBL, lipo, breast &amp; tummy tuck vs US, procedure by procedure</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/plastic-surgery-abroad-cost-comparison" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌍</span>
              <div>
                <div className="font-bold text-gray-900">Plastic Surgery Abroad Cost Comparison</div>
                <div className="text-sm text-gray-600">Six countries, by procedure — the full multi-procedure picture</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/bbl-surgery-mexico" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🍑</span>
              <div>
                <div className="font-bold text-gray-900">BBL Surgery in Mexico</div>
                <div className="text-sm text-gray-600">Mexico-specific costs, safety data, choosing a surgeon</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/is-plastic-surgery-in-turkey-safe" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🛡️</span>
              <div>
                <div className="font-bold text-gray-900">Is Plastic Surgery in Turkey Safe?</div>
                <div className="text-sm text-gray-600">What JCI accreditation means and how to vet a surgeon</div>
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
            <li>• <a href="https://surgerycostguide.com/bbl-cost/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BBL Cost 2026 — US average &amp; price breakdown (Surgery Cost Guide, citing ASPS statistics)</a></li>
            <li>• <a href="https://www.medicaltourismco.com/brazilian-butt-lift-in-tijuana/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Brazilian Butt Lift in Tijuana — price and packages (Medical Tourism Corporation)</a></li>
            <li>• <a href="https://www.medicaltourismpackages.com/butt-lift-gluteoplasty-colombia/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BBL in Colombia — cost, safety &amp; SCCP surgeon guide (Medical Tourism Packages)</a></li>
            <li>• <a href="https://www.hayatmed.com/blog/plastic-surgeries/brazilian-butt-lift/bbl-cost-in-turkey/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BBL Cost in Turkey 2026 — prices &amp; trip budget (HayatMed)</a></li>
            <li>• <a href="https://surgyteam.com/ar/bbl-in-brazil-cost-2026-pricing-quality-guide/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BBL Cost in Brazil 2026 — pricing &amp; quality guide (SurgyTeam)</a></li>
            <li>• <a href="https://www.plasticsurgery.org/news/press-releases/plastic-surgery-societies-issue-urgent-warning-about-the-risks-associated-with-brazilian-butt-lifts" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Plastic Surgery Societies Issue Urgent Warning About BBL Risks (ASPS / ASAPS / ISAPS)</a></li>
            <li>• <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9896146/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Brazilian Butt Lift–Associated Mortality: The South Florida Experience (NIH/PMC)</a></li>
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Comparing a BBL Abroad?"
          description="Get our cosmetic-surgery-tourism checklist: how to verify board certification and facility accreditation, the BBL safety questions to ask, and how to budget the all-in cost."
          source="guide_bbl_cost_by_country"
        />
      </div>

      <Footer />
    </main>
  );
}
