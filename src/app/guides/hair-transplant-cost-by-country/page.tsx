import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Hair Transplant Cost by Country (2026): 5 vs the US' },
  alternates: { canonical: 'https://vitalityscout.com/guides/hair-transplant-cost-by-country' },
  description:
    'Hair transplant cost by country: FUE/DHI prices in Turkey, Mexico, India, Thailand & Hungary vs the US, what packages include, savings & accreditation.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// stated on this page. Every price answer ends with the verify-with-clinic
// hedge, consistent with the medical disclaimer. The visible FAQ block below
// mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a hair transplant cost abroad vs the US?',
    answer:
      'In the US an FUE or DHI hair transplant is commonly quoted around $8,000-$17,000+ (roughly $4-$10 per graft). Abroad, all-inclusive packages run far lower: about $2,500-$4,500 in Turkey, $750-$2,500 in India, $3,000-$4,100 in Mexico, $2,600-$6,500 in Thailand, and $1,375-$4,126 in Hungary on the comparison sources we reviewed — savings most sources put at 40-80%. These are estimates that vary by graft count, technique (FUE vs DHI), and clinic. Get a written, itemized quote before you travel.',
  },
  {
    question: 'Which country is cheapest for a hair transplant?',
    answer:
      'On the country comparisons we reviewed, India tends to post the lowest headline pricing ($750-$2,500), followed by Hungary ($1,375-$4,126) and Turkey ($2,500-$4,500 all-inclusive). Turkey is the highest-volume destination and bundles hotel and transfers into most packages. Cheapest is not automatically best: a low price means little until you confirm the graft count quoted, the technique, who actually performs the extraction and implantation, and the surgeon\'s credentials. Compare the all-in cost including flights, not just the headline.',
  },
  {
    question: 'Is a hair transplant abroad safe?',
    answer:
      'Quality varies clinic to clinic more than country to country. The standard advice is to use a physician-led clinic and verify credentials directly. Look for ABHRS (American Board of Hair Restoration Surgery) diplomate status — the only hair-restoration board recognized by the ISHRS — or ISHRS membership, plus facility accreditation such as JCI internationally, NABH in India, COFEPRIS registration in Mexico, or EU clinical standards in Hungary. The ISHRS has warned about unlicensed "black market" clinics where technicians, not surgeons, perform the procedure. Confirm the surgeon performs your exact technique and ask how revisions are handled. This is information, not medical advice.',
  },
  {
    question: 'What does an all-inclusive hair transplant package include?',
    answer:
      'Contents vary widely. A typical Turkey or Thailand package may bundle the procedure (a set graft count), the clinic facility, consultation, blood tests, local anesthesia, post-op medications and shampoo, follow-up, and often a hotel stay, airport transfers, and a translator. It usually does NOT include your international flights, PRP add-ons, a second session if more grafts are needed, or revision care after you return home. A "1,000-graft" price and a "4,000-graft" price are different products — ask exactly how many grafts are included and what happens if you need more.',
  },
  {
    question: 'How many grafts will I need and how does that change the price?',
    answer:
      'Graft count is the main price driver. Early thinning may need 1,000-2,000 grafts; more advanced loss often needs 3,000-5,000+. Because many clinics price per graft or per session, the same destination can span a wide range — Turkey, for example, runs roughly $0.70-$2.50 per graft, India and Hungary often quote per-session, and US clinics typically bill $4-$10+ per graft. Your real number depends on your hair-loss pattern and donor density, which a clinician assesses. Treat any quote tied to a graft count you have not been individually assessed for as an estimate to confirm.',
  },
  {
    question: 'Will my US insurance cover a hair transplant?',
    answer:
      'Almost never. Hair transplants are classified as cosmetic, so US health and FSA/HSA plans generally do not cover them, which makes cash-pay pricing the relevant comparison for nearly everyone. That is also why the dollar gap between the US and destinations like Turkey, India, and Hungary drives so much hair-restoration travel. Budget the all-in cost — procedure, flights, hotel, and any second session — and confirm the clinic\'s payment terms and what a revision would cost before you commit.',
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

export default function HairTransplantCostByCountry() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Hair Transplant Cost by Country (2026): 5 Countries vs the US',
    description:
      'A side-by-side cost comparison of FUE and DHI hair transplants by country — typical prices in Turkey, Mexico, India, Thailand, and Hungary versus the US, what each package includes, savings, and the accreditation to verify.',
    url: 'https://vitalityscout.com/guides/hair-transplant-cost-by-country',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/hair-transplant-cost-by-country#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalProcedure',
      name: 'Hair transplant surgery (FUE and DHI follicular unit transplantation)',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'Average Cost of Hair Transplant in Different Countries 2026', url: 'https://turkeyluxuryclinics.com/en/blog/cost-of-hair-transplant-in-different-countries' },
      { '@type': 'CreativeWork', name: 'Hair Transplant in Thailand — Costs & Packages 2026 (Bookimed)', url: 'https://us-uk.bookimed.com/clinics/country=thailand/procedure=hair-transplant/' },
      { '@type': 'CreativeWork', name: 'FUE Hair Transplant in Hungary — Costs & Packages 2026 (Bookimed)', url: 'https://us-uk.bookimed.com/clinics/country=hungary/procedure=fue-hair-transplant/' },
      { '@type': 'CreativeWork', name: 'Hair Transplant in Mexico — Costs & Packages 2026 (Bookimed)', url: 'https://us-uk.bookimed.com/clinics/country=mexico/procedure=hair-transplant/' },
      { '@type': 'CreativeWork', name: 'Hair Transplant in India — Costs & Packages 2026 (Bookimed)', url: 'https://us-uk.bookimed.com/clinics/country=india/procedure=hair-transplant/' },
      { '@type': 'CreativeWork', name: 'Hair Transplant Turkey Cost 2026 (Cosmedica)', url: 'https://cosmedica.com/price/' },
      { '@type': 'CreativeWork', name: 'American Board of Hair Restoration Surgery (ABHRS)', url: 'https://abhrs.org/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/hair-transplant-cost-by-country#faq', url: 'https://vitalityscout.com/guides/hair-transplant-cost-by-country' };

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
            <span className="text-4xl">💇</span>
            <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700">
              Comparison Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hair Transplant Cost by Country
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Five of the most-searched hair-restoration markets — Turkey, Mexico, India, Thailand, and
            Hungary — side by side against US prices. FUE and DHI costs, what each package includes, the
            savings, and the accreditation to verify before you book.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-cyan-500 bg-cyan-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A hair transplant (FUE/DHI) runs about <strong>$8,000-$17,000+</strong> in the US versus
              roughly <strong>$2,500-$4,500</strong> all-inclusive in Turkey, <strong>$750-$2,500</strong>{' '}
              in India, <strong>$3,000-$4,100</strong> in Mexico, <strong>$2,600-$6,500</strong> in
              Thailand, and <strong>$1,375-$4,126</strong> in Hungary — savings most sources put at
              40-80%. Cheapest is not automatically best: verify the graft count, the technique, and the
              surgeon&apos;s credentials. Confirm every quote with the clinic. This is information, not
              medical advice.
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
            <strong>The price you compare is not the procedure you compare.</strong> A hair transplant is
            priced by graft count and technique, so a $2,500 package and a $6,000 package may simply be
            different graft counts — or one may use a surgeon and the other a technician. The single most
            useful safeguard is to confirm who performs the extraction and implantation and to verify
            credentials such as{' '}
            <a href="https://abhrs.org/" target="_blank" rel="noopener noreferrer nofollow" className="underline">
              ABHRS
            </a>{' '}
            board status or ISHRS membership directly.
          </p>
          <p className="text-sm text-red-800">
            This guide is for informational purposes only and is not medical advice. Outcomes depend on
            your hair-loss pattern, donor density, the surgeon, and the facility. Hair transplants are
            cosmetic and rarely covered by insurance. Discuss candidacy, alternatives, and risks with a
            qualified clinician before pursuing treatment abroad.
          </p>
        </div>
      </section>

      {/* At a Glance */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-cyan-900 mb-3">Hair Transplant Costs Abroad at a Glance</h2>
          <ul className="text-sm text-gray-700 space-y-1 mb-0">
            <li>✓ <strong>40-80% savings</strong> vs US prices on most published comparisons (estimates)</li>
            <li>✓ <strong>Lowest headline pricing:</strong> India, Hungary, Turkey</li>
            <li>✓ <strong>Highest volume / most packages:</strong> Turkey (Istanbul) — hotel + transfers bundled</li>
            <li>✓ <strong>Closest to the US:</strong> Mexico (Tijuana; short flight or border crossing)</li>
            <li>✓ <strong>EU-regulated:</strong> Hungary operates under EU clinical standards</li>
            <li>✓ <strong>Techniques:</strong> FUE (extraction) and DHI (implanter-pen) are the two common methods</li>
            <li>✓ <strong>Credential to verify:</strong> ABHRS diplomate / ISHRS membership; facility JCI / NABH / COFEPRIS</li>
          </ul>
        </div>
      </section>

      {/* Why people travel */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Hair Restoration Drives So Much Medical Travel</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Hair transplants are almost never covered by insurance — they are classified as cosmetic — so
              essentially everyone pays cash. That single fact makes the price gap the whole story. A
              comparable FUE or DHI procedure in the US is commonly quoted at $8,000-$17,000 or more, while
              the same graft count abroad is often a few thousand dollars all-inclusive, hotel and transfers
              included. On a larger case, the dollar difference is large enough to cover the flight several
              times over.
            </p>
            <p>
              The trade-offs are real: a long-haul flight to Turkey or Thailand, follow-up across borders,
              and a quality range wide enough that vetting the surgeon — not the country — is the part that
              actually matters. Hair restoration is also a field with a known regulatory gap. In most
              countries any licensed physician can perform it without dedicated training, and the ISHRS has
              flagged unlicensed "black market" clinics where technicians, not surgeons, do the work. This
              guide compares the five markets US patients search for most, then gives you a way to decide
              between them.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Hair Transplant: Cost by Country (Estimates)</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Typical all-inclusive or full-procedure pricing for an FUE/DHI hair transplant, compiled from
          public medical-tourism cost-comparison sources. Ranges reflect graft count and technique. These
          are estimates, not quotes.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Country</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-green-700">Typical Cost (est.)</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">What's Usually Included</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Est. Savings vs US</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Accreditation to Verify</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">United States (baseline)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$8,000 - $17,000+</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Procedure only; ~$4-$10 per graft</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">—</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">ABHRS diplomate / ISHRS</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Turkey</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$2,500 - $4,500</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">All-inclusive: procedure, hotel, transfers, aftercare</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~60-80%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">JCI; Turkish Ministry of Health</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">India</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$750 - $2,500</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Procedure; per-graft or per-session; +18% GST common</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~75-90%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">NABH / NABL; JCI (major hospitals)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Mexico</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$3,000 - $4,100</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Often all-in: procedure, meds, sometimes hotel/transfers</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~60-75%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">COFEPRIS; ISAPS</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Thailand</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$2,600 - $6,500</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Procedure, consult, bloodwork, meds; PRP add-on common</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~50-70%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">JCI; Royal College of Surgeons Thailand</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Hungary</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$1,375 - $4,126</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Procedure; per-hair/per-graft pricing; EU clinical standards</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~65-85%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">EU clinical standards (Budapest)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Ranges vary by graft count, technique (FUE vs DHI), city, and surgeon involvement. European and
          Asian prices are often quoted in local currency and converted here for comparison. A quote is not
          comparable until you know how many grafts it covers — always request a written, itemized quote.
        </p>
      </section>

      {/* Per-market breakdown */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">The Five Markets, Market by Market</h2>
          <p className="text-gray-600 mb-8 text-sm">
            Each market trades price, travel, and regulatory framework differently. Here is how they
            actually differ for a US patient.
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Turkey</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Highest volume</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Turkey — centered on Istanbul — is the world&apos;s busiest hair-transplant destination, and
                its packages reflect that scale: all-inclusive deals from roughly $2,500-$4,500 commonly
                bundle the procedure, a hotel stay, VIP transfers, a translator, and aftercare, often with
                per-graft pricing as low as $0.70-$2.50. The very volume that drives the low price also
                creates the widest quality range, from physician-led practices to high-throughput operations
                where technicians do much of the work. Verify who performs your extraction and implantation,
                and look for surgeon credentials, not just a clinic brand. See our deeper{' '}
                <Link href="/guides/hair-transplant-turkey-cost" className="text-blue-600 hover:underline">
                  Turkey hair transplant cost guide
                </Link>{' '}
                and{' '}
                <Link href="/guides/turkey-hair-transplant-clinics" className="text-blue-600 hover:underline">
                  Turkey clinics comparison
                </Link>
                .
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">India</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Lowest pricing</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                India posts the lowest headline pricing in this comparison — roughly $750-$2,500 for a
                full procedure, with FUE often from about $1,900 — and large NABH-accredited hospital
                groups offer hair restoration alongside broader medical care. Watch the line items: many
                Indian quotes add 18% GST, and PRP sessions, bloodwork, and a post-op kit are frequently
                billed separately, so the all-in total can sit above the advertised graft price. Metro
                clinics in Delhi and Mumbai cost more than smaller cities. Confirm the surgeon&apos;s
                experience and exactly what the quote includes. See our{' '}
                <Link href="/guides/india-medical-tourism-guide" className="text-blue-600 hover:underline">
                  India medical tourism guide
                </Link>
                .
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Mexico</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Closest to US</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Mexico — chiefly Tijuana, a short flight or border crossing from San Diego — is the
                logistically easiest option for US patients, with FUE packages commonly around
                $3,000-$4,100. The pricing sits a little above Turkey or India, but no long-haul flight and
                the ability to return easily for follow-up often net out ahead for someone who values
                proximity. Look for COFEPRIS registration and confirm the specific surgeon; quality ranges
                between established practices and border storefronts.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Thailand</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">JCI hospitals</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Thailand — primarily Bangkok — pairs a mature medical-tourism infrastructure and
                JCI-accredited facilities with FUE/DHI pricing of roughly $2,600-$6,500, or about
                $1.35-$3.70 per graft at mid-range clinics. It is rarely the outright cheapest, but the
                quality positioning and the vacation angle make it a popular middle-ground choice for a
                larger case. As everywhere, vet the surgeon and confirm whether PRP and bloodwork are
                inside or outside the quoted package.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Hungary</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">EU standards</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Hungary — Budapest in particular — is a long-established European medical-tourism hub that
                operates under EU clinical standards, with FUE pricing roughly $1,375-$4,126 (averaging
                near $2,750 on the comparisons we reviewed). Clinics often quote per hair or per graft. For
                patients who want the EU regulatory framework at a sharper price than Western Europe — and a
                shorter trip than Turkey from much of Europe — it is a strong value, though the flight from
                the US is still long-haul.
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
              <li>✓ The procedure for a set graft count (FUE or DHI)</li>
              <li>✓ Consultation, blood tests, and local anesthesia</li>
              <li>✓ Post-op medications and special shampoo</li>
              <li>✓ Follow-up visits during your stay</li>
              <li>✓ Hotel stay (most Turkey / many Thailand packages)</li>
              <li>✓ Airport transfers and a translator (many packages)</li>
            </ul>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-bold text-yellow-900 mt-0 mb-3">Often NOT included</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>✗ Your international flights</li>
              <li>✗ Grafts beyond the package count (a larger case)</li>
              <li>✗ PRP sessions (frequently an add-on)</li>
              <li>✗ Local taxes (e.g., 18% GST in India)</li>
              <li>✗ A second session if more density is wanted</li>
              <li>✗ Revision or complication care after you return</li>
            </ul>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
          <p className="text-sm text-yellow-800 mb-0">
            <strong>The single most useful question:</strong> ask exactly how many grafts the quote covers,
            the technique, who performs the extraction and implantation, and what a second session would
            cost. A &ldquo;$2,500 hair transplant&rdquo; for 1,500 grafts is not the same product as a
            4,000-graft case — and an unlimited-graft offer means little if a technician runs it.
          </p>
        </div>
      </section>

      {/* Accreditation explainer */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quality &amp; Safety Signals to Verify</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Surgeon credentials</h3>
              <p className="text-sm text-gray-700 mb-0">
                The strongest hair-restoration credential is{' '}
                <a href="https://abhrs.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">ABHRS</a>{' '}
                diplomate status — the only board recognized by the ISHRS, requiring case logs, exams, and a
                multi-year track record. ISHRS membership signals interest in the specialty but is open and
                fee-based. Crucially, in most countries any licensed physician can perform a transplant
                without dedicated training, and the ISHRS has warned of unlicensed clinics where technicians
                do the work — so confirm the surgeon personally performs your procedure.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Facility accreditation</h3>
              <p className="text-sm text-gray-700 mb-0">
                Look for international accreditation such as JCI (used by leading clinics in Turkey,
                Thailand, and India), NABH in India, COFEPRIS registration in Mexico, and EU clinical
                standards in Hungary. Accreditation must be renewed, so confirm current status on the
                clinic&apos;s own materials or the accrediting body — not a third-party listing. Facility
                accreditation is a floor, not a guarantee of surgeon skill, so verify both.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FUE vs DHI primer */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">FUE vs DHI: A Quick Note on Technique</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700">
            Both methods are forms of follicular unit transplantation. <strong>FUE</strong> (follicular unit
            extraction) harvests individual follicles and places them into pre-made channels. <strong>DHI</strong>{' '}
            (direct hair implantation) uses an implanter pen to extract and place in one step, which some
            clinics price as a premium. DHI commonly costs more per graft, and the &ldquo;best&rdquo; method
            depends on your hair-loss pattern, donor density, and the surgeon&apos;s experience with each —
            not on price alone. The technique you are quoted changes the number in every country column
            above, which is why a country-to-country price is only comparable once the technique is fixed.
          </p>
          <p className="text-sm text-gray-600">
            For a deeper breakdown of the two methods, see our{' '}
            <Link href="/guides/fue-vs-dhi" className="text-blue-600 hover:underline">
              FUE vs DHI comparison
            </Link>{' '}
            and our{' '}
            <Link href="/guides/hair-transplant-grafts-guide" className="text-blue-600 hover:underline">
              graft-count guide
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Decision framework */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose: A Simple Framework</h2>
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">1. Get assessed for a graft count first</h4>
            <p className="text-sm text-gray-600 mb-0">
              Price is driven by grafts, and grafts are driven by your hair-loss pattern and donor density.
              A quote tied to a graft number you have not been individually assessed for is a guess. Get a
              realistic estimate before you compare countries.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">2. Add the all-in cost, not the headline</h4>
            <p className="text-sm text-gray-600 mb-0">
              Flights, hotel nights beyond the package, PRP add-ons, local taxes, and a possible second
              session can move the real total well past the quote. Mexico&apos;s short trip can beat a
              cheaper India or Turkey quote once two long-haul flights are added — for a smaller case.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">3. Decide how much the regulatory framework matters</h4>
            <p className="text-sm text-gray-600 mb-0">
              If EU clinical standards give you confidence, Hungary moves up your list. If proximity matters
              most, Mexico wins. If lowest headline price drives the decision, India and Turkey lead —
              paired with stricter surgeon vetting.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">4. Vet the surgeon, not the country</h4>
            <p className="text-sm text-gray-600 mb-0">
              Country averages are a starting point, not a verdict. Confirm the surgeon&apos;s credentials
              (ABHRS / ISHRS), that they — not a technician — perform your procedure, the facility
              accreditation, and how revisions are handled once you fly home.
            </p>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
          <p className="text-sm text-yellow-800 mb-0">
            <strong>Red flag:</strong> any clinic that quotes &ldquo;unlimited grafts&rdquo; without naming
            the technique or the surgeon, will not confirm who performs the extraction and implantation, or
            pressures a deposit before a written, itemized quote. Legitimate clinics set realistic graft
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
            Explore full destination profiles for the hair-transplant markets in this guide, then dig into
            the markets you are weighing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/medical-tourism" className="inline-block rounded-lg bg-cyan-600 px-6 py-3 font-medium text-white hover:bg-cyan-700">
              Medical Tourism Hub
            </Link>
            <Link href="/destinations/turkey" className="inline-block rounded-lg border-2 border-cyan-600 px-6 py-3 font-medium text-cyan-600 hover:bg-cyan-50">
              Turkey Destination Guide
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
          <Link href="/guides/hair-transplant-turkey-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💇</span>
              <div>
                <div className="font-bold text-gray-900">Hair Transplant Turkey Cost</div>
                <div className="text-sm text-gray-600">FUE vs DHI per-graft &amp; package prices in Istanbul</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/turkey-hair-transplant-clinics" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💇</span>
              <div>
                <div className="font-bold text-gray-900">Turkey Hair Transplant Clinics Compared</div>
                <div className="text-sm text-gray-600">The most-searched Istanbul clinics, side by side</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/fue-vs-dhi" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💇</span>
              <div>
                <div className="font-bold text-gray-900">FUE vs DHI Hair Transplant</div>
                <div className="text-sm text-gray-600">How the two techniques differ on cost &amp; recovery</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/hair-transplant-grafts-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <div className="font-bold text-gray-900">How Many Hair Grafts Do I Need?</div>
                <div className="text-sm text-gray-600">Norwood scale &amp; graft estimates by hair-loss stage</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/india-medical-tourism-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇮🇳</span>
              <div>
                <div className="font-bold text-gray-900">India Medical Tourism Guide</div>
                <div className="text-sm text-gray-600">NABH/JCI hospitals, costs, and how to vet a clinic</div>
              </div>
            </div>
          </Link>

          <Link href="/destinations/turkey" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇹🇷</span>
              <div>
                <div className="font-bold text-gray-900">Turkey Destination Guide</div>
                <div className="text-sm text-gray-600">Vetted providers, procedures, and trip logistics</div>
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
            <li>• <a href="https://turkeyluxuryclinics.com/en/blog/cost-of-hair-transplant-in-different-countries" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Average Cost of Hair Transplant in Different Countries 2026 (multi-country comparison)</a></li>
            <li>• <a href="https://us-uk.bookimed.com/clinics/country=thailand/procedure=hair-transplant/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Hair Transplant in Thailand — Costs &amp; Packages 2026 (Bookimed)</a></li>
            <li>• <a href="https://us-uk.bookimed.com/clinics/country=hungary/procedure=fue-hair-transplant/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">FUE Hair Transplant in Hungary — Costs &amp; Packages 2026 (Bookimed)</a></li>
            <li>• <a href="https://us-uk.bookimed.com/clinics/country=mexico/procedure=hair-transplant/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Hair Transplant in Mexico — Costs &amp; Packages 2026 (Bookimed)</a></li>
            <li>• <a href="https://us-uk.bookimed.com/clinics/country=india/procedure=hair-transplant/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Hair Transplant in India — Costs &amp; Packages 2026 (Bookimed)</a></li>
            <li>• <a href="https://cosmedica.com/price/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Turkey Hair Transplant Cost 2026 — packages &amp; per-graft (Cosmedica)</a></li>
            <li>• <a href="https://abhrs.org/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">American Board of Hair Restoration Surgery (ABHRS) — surgeon credentialing</a></li>
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Comparing Hair Transplants Abroad?"
          description="Get our hair-restoration checklist: how to read a graft-count quote, the ABHRS / ISHRS surgeon questions to ask, and how to budget the all-in cost."
          source="guide_hair_transplant_cost_by_country"
        />
      </div>

      <Footer />
    </main>
  );
}
