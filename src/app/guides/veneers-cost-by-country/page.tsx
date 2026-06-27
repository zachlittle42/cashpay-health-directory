import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Veneers Cost by Country: US vs Mexico, Turkey & More' },
  alternates: { canonical: 'https://vitalityscout.com/guides/veneers-cost-by-country' },
  description:
    'Veneers cost by country: per-tooth porcelain prices in Mexico, Turkey, Costa Rica & Hungary vs the US, what packages include, and how to choose.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// stated on this page. Every price answer ends with the verify-with-clinic
// hedge, consistent with the medical disclaimer. The visible FAQ block below
// mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much do dental veneers cost abroad compared to the US?',
    answer:
      'A single porcelain veneer is commonly quoted around $1,000-$2,500 per tooth in the US (roughly a $1,765 national average) versus about $250-$450 in Turkey, $300-$600 in Mexico, $400-$550 in Hungary, and $450-$600 in Costa Rica. Published comparisons describe 50-80% savings on veneers abroad. These are estimates that vary by clinic, material (porcelain vs composite, e.max vs zirconia), and how many veneers you need — get a written, itemized quote from the clinic before you travel.',
  },
  {
    question: 'Which is the cheapest country for dental veneers?',
    answer:
      'On the per-tooth comparisons we reviewed, Turkey is consistently the lowest, with porcelain veneers commonly quoted around $250-$450 per tooth and all-inclusive "smile makeover" packages bundling 16-20 veneers with a hotel stay. Mexico, Hungary, and Costa Rica are higher but still well below US pricing. Cheapest is not automatically best — the dentist, the veneer brand, accreditation, and travel cost all matter, and a very low headline price for a full set of 20 veneers can signal over-treatment of healthy teeth. Confirm exactly what each quote includes before comparing.',
  },
  {
    question: 'What does an all-inclusive veneer package abroad include?',
    answer:
      'Package contents vary widely. A typical "smile makeover" package may bundle the veneers, the dentist fees, 3D imaging or digital smile design, a temporary set, and sometimes airport transfers and a hotel stay. It often does NOT include needed fillings, gum treatment, root canals, crowns on heavily damaged teeth, your flights, or future replacements. Composite veneers sit at the low end of a quote and porcelain or e.max at the high end. Ask the clinic for a written, itemized list of the material, the number of teeth, and what is and is not included before you pay a deposit.',
  },
  {
    question: 'Are veneers abroad safe?',
    answer:
      'Quality ranges clinic to clinic, so the standard advice is to use accredited clinics with documented materials. Look for international accreditation (such as JCI or ISO 9001), EU clinical standards in Hungary, dentists registered with the national licensing body (for example the Colegio de Cirujanos Dentistas de Costa Rica), and recognized veneer materials such as IPS e.max. Be cautious of clinics that propose shaving down many healthy teeth for "Turkey teeth" full-mouth crowns when minimal-prep veneers would do. Verify the dentist performs your exact procedure and ask how repairs are handled after you return home. This is information, not medical or dental advice — discuss candidacy with a qualified clinician.',
  },
  {
    question: 'What is the difference between porcelain and composite veneers abroad?',
    answer:
      'Porcelain (including e.max) veneers are lab-made, more stain-resistant, and commonly cited as lasting around 10-15 years; they sit at the higher end of every country quote. Composite veneers are applied chair-side in resin, cost less (often $80-$275 per tooth abroad), and are usually cited as lasting around 5-7 years. The material you choose moves the price more than the country does in some cases. Ask which material a quote covers — a "$250 veneer" in composite is a different product from a $250 porcelain veneer.',
  },
  {
    question: 'Will my US dental insurance cover veneers done abroad?',
    answer:
      'Most US dental plans classify veneers as a cosmetic procedure and do not cover them at all; partial coverage may apply only when a veneer restores a fractured or damaged tooth, subject to annual maximums that rarely exceed $1,500-$2,000. That is why cash-pay pricing is the relevant comparison for most people considering veneers abroad. Separate dental-travel or medical-travel insurance that covers complications is worth considering. Confirm coverage with both your insurer and the clinic before you commit.',
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

export default function VeneersCostByCountry() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Veneers Cost by Country: US vs Mexico, Turkey, Costa Rica & Hungary (2026)',
    description:
      'A side-by-side cost comparison of dental veneers by country — per-tooth porcelain prices in Mexico, Turkey, Costa Rica, and Hungary versus the US, what each package includes, accreditation signals, and how to choose.',
    url: 'https://vitalityscout.com/guides/veneers-cost-by-country',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/veneers-cost-by-country#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalProcedure',
      name: 'Dental veneers (porcelain and composite)',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'Dental Veneers Abroad — country price comparison (Medical Tourism Corporation)', url: 'https://www.medicaltourismco.com/dental-veneers-abroad/' },
      { '@type': 'CreativeWork', name: 'Low-Cost Dental Veneers Abroad — per-tooth porcelain & composite by country (Dentavacation)', url: 'https://www.dentavacation.com/low-cost-dental-veneers-abroad/' },
      { '@type': 'CreativeWork', name: 'Veneers Cost Comparison: USA, Turkey, Mexico (Mednfly)', url: 'https://mednfly.com/blog/dental-treatments/veneers/veneers-cost-comparison-usa-turkey-mexico' },
      { '@type': 'CreativeWork', name: 'Cheapest Countries for Veneers 2026 — Turkey, Mexico, Hungary (Turkey Luxury Clinics)', url: 'https://turkeyluxuryclinics.com/en/blog/cheapest-country-for-veneers' },
      { '@type': 'CreativeWork', name: 'How Much Do Veneers Cost in 2026? US prices by type (Veneers Authority)', url: 'https://www.veneersauthority.com/cost-guide' },
      { '@type': 'CreativeWork', name: 'Colegio de Cirujanos Dentistas de Costa Rica — dental licensing body', url: 'https://thetreatmentregistry.com/regulatory-bodies/colegio-cirujanos-dentistas-costa-rica' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/veneers-cost-by-country#faq', url: 'https://vitalityscout.com/guides/veneers-cost-by-country' };

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
            <span className="text-4xl">😁</span>
            <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700">
              Comparison Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Veneers Cost by Country: US vs Mexico, Turkey, Costa Rica &amp; Hungary
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Four of the most-searched veneer-tourism markets — Mexico, Turkey, Costa Rica, and Hungary —
            side by side against US prices. Per-tooth porcelain and composite costs, what each package
            includes, and how to weigh price against travel, material, and quality.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-cyan-500 bg-cyan-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A single porcelain veneer runs about <strong>$1,000-$2,500</strong> in the US versus roughly{' '}
              <strong>$250-$450</strong> in Turkey, <strong>$300-$600</strong> in Mexico,{' '}
              <strong>$400-$550</strong> in Hungary, and <strong>$450-$600</strong> in Costa Rica —
              savings of 50-80% on published comparisons. Turkey is consistently the cheapest; Mexico is
              the closest to home. Cheapest is not automatically best: weigh the material, accreditation,
              the dentist, and travel cost. Verify every quote with the clinic. This is information, not
              dental advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">Last reviewed: June 2026 • 12 min read</p>
        </div>
      </section>

      {/* Medical / Quality Disclaimer */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-red-900 mb-3">Read This First</h3>
          <p className="text-sm text-red-800 mb-3">
            <strong>Quality varies clinic to clinic, not just country to country.</strong> A low headline
            price means little until you know the veneer material, the dentist, the accreditation, and
            exactly how many teeth the quote covers. Be especially wary of any clinic that proposes
            shaving down a mouthful of healthy teeth for full-coverage crowns (sometimes marketed as
            &ldquo;Turkey teeth&rdquo;) when minimal-prep veneers would do — aggressive prep is
            irreversible. Look for recognized materials such as{' '}
            <a href="https://www.ivoclar.com" target="_blank" rel="noopener noreferrer nofollow" className="underline">
              IPS e.max
            </a>{' '}
            and confirm accreditation directly, because status can change.
          </p>
          <p className="text-sm text-red-800">
            This guide is for informational purposes only and is not medical or dental advice. Outcomes
            depend on your case, the dentist, and the facility. Discuss candidacy, alternatives, and
            risks with a qualified clinician before pursuing treatment abroad.
          </p>
        </div>
      </section>

      {/* At a Glance */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-cyan-900 mb-3">Veneers Abroad at a Glance</h2>
          <ul className="text-sm text-gray-700 space-y-1 mb-0">
            <li>✓ <strong>50-80% savings</strong> vs US prices on most published comparisons (estimates)</li>
            <li>✓ <strong>Cheapest per tooth:</strong> Turkey (porcelain ~$250-$450)</li>
            <li>✓ <strong>Closest to the US:</strong> Mexico (border crossings; no long-haul flight)</li>
            <li>✓ <strong>EU-regulated:</strong> Hungary operates under EU clinical standards</li>
            <li>✓ <strong>Licensed oversight:</strong> Costa Rica dentists register with the CCDCR</li>
            <li>✓ <strong>Materials to look for:</strong> IPS e.max / porcelain (premium), composite (budget)</li>
            <li>✓ <strong>Insurance:</strong> US plans treat veneers as cosmetic — usually no coverage</li>
          </ul>
        </div>
      </section>

      {/* Why people travel */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Veneers Drive So Much Dental Tourism</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Veneers are one of the most travel-friendly procedures in cosmetic dentistry precisely
              because the math is stark. US dental insurance classifies veneers as cosmetic and typically
              pays nothing toward them, so almost everyone is paying cash either way. A full smile usually
              needs 6-8 veneers — and many people opt for 16-20 across the visible smile line — which puts
              a US porcelain case anywhere from roughly $8,000 to $20,000 or more.
            </p>
            <p>
              That makes the comparison simple: the same porcelain and e.max materials, the same digital
              smile-design workflow, and similar lab work are available abroad at a fraction of the price.
              The trade-offs are real — travel time, the logistics of any follow-up or repair across
              borders, and a quality range that makes vetting non-negotiable — but the savings on a
              full-mouth case are large enough that an entire dental-tourism industry has grown up around
              them. This guide compares the four markets US patients search for most, then gives you a way
              to decide between them.
            </p>
          </div>
        </div>
      </section>

      {/* Porcelain Veneer Cost Comparison Table (the required country price table) */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Veneers Cost by Country: Porcelain, Per Tooth (Estimates)</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Prices below are for a single porcelain veneer, compiled from public dental-tourism
          cost-comparison sources. They are estimates, not quotes. Composite veneers run lower (see the
          notes after the table).
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Country</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-green-700">Porcelain Veneer (est., per tooth)</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">What&apos;s Typically Included</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Est. Savings vs US</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Accreditation / Quality Signal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">United States (baseline)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$1,000 - $2,500 (~$1,765 avg)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Dentist fee + lab + crown if needed</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">—</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">State dental board; ADA membership</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Turkey</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$250 - $450</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">All-inclusive package: hotel + transfers common</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~75-85%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">JCI / ISO 9001 at top clinics; verify</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Mexico</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$300 - $600</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Dentist fee + lab; transfers at some clinics</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~60-75%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">COFEPRIS oversight; verify dentist credentials</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Hungary</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$400 - $550</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Dentist fee + lab; multi-trip planning common</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~55-70%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">EU clinical standards (Budapest hub)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Costa Rica</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$450 - $600</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Dentist fee + lab; English-speaking clinics</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~50-65%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">CCDCR licensing; some AAAASF clinics</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Ranges vary by clinic, material (porcelain vs e.max vs composite), city, and how many teeth you
          treat. <strong>Composite veneers</strong> are cheaper everywhere — roughly $80-$275 per tooth
          abroad versus around $250-$1,500 in the US — but are usually cited as lasting ~5-7 years vs
          ~10-15 for porcelain. European prices are often quoted in euros and converted here. Always
          request a written, itemized quote that names the material and the tooth count.
        </p>
      </section>

      {/* Per-market breakdown */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">The Four Markets, Market by Market</h2>
          <p className="text-gray-600 mb-8 text-sm">
            Each market trades price, travel, and regulatory framework differently. Here is how they
            actually differ for a US patient considering veneers.
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Mexico</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Closest to US</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Mexico is the logistically easiest option for most US patients — no long-haul flight, and
                border towns like Los Algodones and Tijuana are walk- or drive-across, while Cancún adds a
                vacation angle to a larger case. Per-tooth porcelain prices sit a little above Turkey, but
                the short trip can net out ahead for a smaller smile case or anyone who values being close
                to home for any adjustment visit. Quality ranges widely between border storefronts and
                established practices, so verify the dentist and the veneer material, not just the
                destination. See our{' '}
                <Link href="/guides/mexico-dental-guide" className="text-blue-600 hover:underline">
                  Mexico dental guide
                </Link>{' '}
                for clinic-by-clinic detail.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Turkey</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Lowest pricing</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Turkey, centered on Istanbul, posts the lowest per-tooth veneer pricing in this
                comparison, with all-inclusive &ldquo;smile makeover&rdquo; packages that often bundle the
                hotel and transfers across 16-20 teeth. The trade-off is the longest flight and a market
                with a very wide quality range — high-end clinics and high-volume operations sit side by
                side. The low headline price makes two things especially important: verify the material
                (e.max vs generic porcelain) and the accreditation, and push back if a clinic wants to
                crown many healthy teeth rather than place minimal-prep veneers.
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
                patients weigh heavily, and the long track record means deep experience with cosmetic and
                full-mouth work. Pricing is higher than Turkey but still well below the US. Because some
                cases need two trips a few months apart, factor the second set of flights into the all-in
                cost.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Costa Rica</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">US-friendly</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Costa Rica built its dental-tourism reputation on San José clinics with English-speaking,
                often US-trained dentists, and prices reflect that positioning — savings are real but the
                country is rarely the outright cheapest. Dentists register with the Colegio de Cirujanos
                Dentistas de Costa Rica (CCDCR), whose public registry lets you confirm a license, and
                some clinics carry international accreditation. A short-to-medium flight makes it a popular
                middle-ground choice. Our{' '}
                <Link href="/guides/costa-rica-dental-guide" className="text-blue-600 hover:underline">
                  Costa Rica dental guide
                </Link>{' '}
                covers clinics and trip logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What a Veneer &ldquo;Smile Package&rdquo; Does — and Does Not — Cover</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-bold text-green-900 mt-0 mb-3">Commonly included</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>✓ The veneers themselves and dentist fees</li>
              <li>✓ Digital smile design / mock-up</li>
              <li>✓ 3D imaging / X-rays</li>
              <li>✓ A temporary set while the lab works</li>
              <li>✓ Airport transfers (many packages)</li>
              <li>✓ A hotel stay (some full-smile packages)</li>
            </ul>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-bold text-yellow-900 mt-0 mb-3">Often NOT included</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>✗ Fillings, root canals, or gum treatment first</li>
              <li>✗ Crowns on heavily damaged teeth</li>
              <li>✗ A premium material upgrade (composite → e.max)</li>
              <li>✗ Your international flights</li>
              <li>✗ A second trip for the final fit</li>
              <li>✗ Repairs or replacements after you return</li>
            </ul>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
          <p className="text-sm text-yellow-800 mb-0">
            <strong>The single most useful question:</strong> ask for a written, itemized quote that
            lists the veneer material, the exact number of teeth, and every line item — then ask what is
            excluded. A &ldquo;$3,000 full smile&rdquo; in composite over 20 teeth is not the same product
            as a porcelain or e.max case over 8 teeth, and a quote that excludes the fillings or gum work
            your mouth actually needs is not the real price.
          </p>
        </div>
      </section>

      {/* Accreditation explainer */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quality Signals to Verify</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Accreditation &amp; licensing</h3>
              <p className="text-sm text-gray-700 mb-0">
                Look for international clinic accreditation such as JCI or ISO 9001, EU clinical standards
                in Hungary, and dentists registered with the national licensing body — for example the{' '}
                <a href="https://thetreatmentregistry.com/regulatory-bodies/colegio-cirujanos-dentistas-costa-rica" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">
                  Colegio de Cirujanos Dentistas de Costa Rica
                </a>{' '}
                or COFEPRIS oversight in Mexico. Accreditation must be renewed, so confirm current status
                on the clinic&apos;s own site or the accrediting body — not a third-party listing.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Material &amp; tooth prep</h3>
              <p className="text-sm text-gray-700 mb-0">
                Recognized materials such as{' '}
                <a href="https://www.ivoclar.com" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">IPS e.max</a>{' '}
                (a lithium-disilicate porcelain) carry documented durability. Ask which material is
                quoted, whether it is porcelain/e.max or composite, and exactly how much natural tooth
                will be removed — minimal-prep veneers preserve enamel, while aggressive full-coverage
                prep is irreversible and changes both the price and the long-term outlook.
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
              A single chipped tooth rarely justifies a long-haul flight; the travel can eat the savings.
              A full smile of 6-8 (or 16-20) veneers is where the dollar gap is large enough that even a
              long trip pencils out. Match the destination to the size of the work.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">2. Add the all-in cost, not the headline</h4>
            <p className="text-sm text-gray-600 mb-0">
              Flights, hotel nights, possible second trips, and any fillings or gum work you need first
              can move the real total well past the quote. Mexico&apos;s short trip can beat a cheaper
              Turkey quote once two long-haul flights are added — for a small case.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">3. Decide how much the regulatory framework matters</h4>
            <p className="text-sm text-gray-600 mb-0">
              If EU clinical standards give you confidence, Hungary moves up your list. If proximity
              matters most, Mexico wins. If lowest headline price drives the decision, Turkey leads —
              paired with stricter vetting and a hard look at how many teeth are being treated.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">4. Vet the clinic, not the country</h4>
            <p className="text-sm text-gray-600 mb-0">
              Country averages are a starting point, not a verdict. Confirm the dentist&apos;s experience
              with veneers, the material, the accreditation, the written quote, and how repairs are
              handled once you fly home.
            </p>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
          <p className="text-sm text-yellow-800 mb-0">
            <strong>Red flag:</strong> any clinic that quotes a full-smile price without naming the veneer
            material and tooth count, pressures a deposit before you have a written itemized quote,
            proposes crowning many healthy teeth, or cannot connect you with the treating dentist.
            Legitimate clinics set realistic expectations and put the details in writing.
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Compare Dental Clinics &amp; Destinations</h3>
          <p className="text-gray-600 mb-6">
            Browse vetted dental providers, then dig into the destination profiles for the veneer markets
            in this guide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/dental" className="inline-block rounded-lg bg-cyan-600 px-6 py-3 font-medium text-white hover:bg-cyan-700">
              Browse Dental Providers
            </Link>
            <Link href="/destinations/turkey" className="inline-block rounded-lg border-2 border-cyan-600 px-6 py-3 font-medium text-cyan-600 hover:bg-cyan-50">
              Turkey Destination Guide
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
          <Link href="/guides/dental-implants-abroad-cost-comparison" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🦷</span>
              <div>
                <div className="font-bold text-gray-900">Dental Implants Abroad: Cost by Country</div>
                <div className="text-sm text-gray-600">Per-implant &amp; All-on-4 prices across six countries vs the US</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/mexico-dental-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇲🇽</span>
              <div>
                <div className="font-bold text-gray-900">Mexico Dental Guide</div>
                <div className="text-sm text-gray-600">Tijuana, Los Algodones &amp; Cancún — clinics and costs</div>
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

          <Link href="/guides/costa-rica-dental-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇨🇷</span>
              <div>
                <div className="font-bold text-gray-900">Costa Rica Dental Guide</div>
                <div className="text-sm text-gray-600">US-trained dentists, San José clinics, trip planning</div>
              </div>
            </div>
          </Link>

          <Link href="/destinations/costa-rica" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇨🇷</span>
              <div>
                <div className="font-bold text-gray-900">Costa Rica Destination Guide</div>
                <div className="text-sm text-gray-600">Vetted clinics, procedures, and trip logistics</div>
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
            <li>• <a href="https://www.medicaltourismco.com/dental-veneers-abroad/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Dental Veneers Abroad — country price comparison (Medical Tourism Corporation)</a></li>
            <li>• <a href="https://www.dentavacation.com/low-cost-dental-veneers-abroad/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Low-Cost Dental Veneers Abroad — per-tooth porcelain &amp; composite by country (Dentavacation)</a></li>
            <li>• <a href="https://mednfly.com/blog/dental-treatments/veneers/veneers-cost-comparison-usa-turkey-mexico" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Veneers Cost Comparison: USA, Turkey, Mexico (Mednfly)</a></li>
            <li>• <a href="https://turkeyluxuryclinics.com/en/blog/cheapest-country-for-veneers" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Cheapest Countries for Veneers 2026 (Turkey Luxury Clinics)</a></li>
            <li>• <a href="https://www.veneersauthority.com/cost-guide" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">How Much Do Veneers Cost in 2026? — US prices by type (Veneers Authority)</a></li>
            <li>• <a href="https://thetreatmentregistry.com/regulatory-bodies/colegio-cirujanos-dentistas-costa-rica" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Colegio de Cirujanos Dentistas de Costa Rica — dental licensing body (The Treatment Registry)</a></li>
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Comparing Veneers Abroad?"
          description="Get our dental-tourism checklist: how to read an itemized veneer quote, the material and accreditation questions to ask, and how to budget the all-in cost."
          source="guide_veneers_cost_by_country"
        />
      </div>

      </SidebarShell>
      <Footer />
    </main>
  );
}
