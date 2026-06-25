import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Rhinoplasty Cost by Country (2026): US vs Turkey & More' },
  alternates: { canonical: 'https://vitalityscout.com/guides/rhinoplasty-cost-by-country' },
  description:
    'Rhinoplasty cost by country: nose job prices in Turkey, Mexico, South Korea & Thailand vs the US, package inclusions, accreditation & how to choose.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// stated on this page. Every price answer ends with the verify-with-clinic
// hedge, consistent with the medical disclaimer. The visible FAQ block below
// mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much is a rhinoplasty (nose job) abroad compared to the US?',
    answer:
      'A primary rhinoplasty carries an average US surgeon fee of about $7,637 (ASPS), and most patients pay roughly $8,000-$18,000 all-in once anesthesia and facility fees are added. Abroad, common 2026 estimates run about $1,750-$4,000 in Turkey, $2,500-$5,100 in Mexico, $2,000-$5,500 in Thailand, and $5,000-$7,200 in South Korea — frequently 40-80% less than a US all-in total. These are estimates that vary by surgeon, technique (primary, ultrasonic, ethnic, or revision), and what the quote includes. Get a written, itemized quote before you travel.',
  },
  {
    question: 'Which is the cheapest country for a rhinoplasty (nose job)?',
    answer:
      'On the 2026 medical-tourism estimates we reviewed, Turkey tends to post the lowest headline pricing (roughly $1,750-$4,000, often as an all-inclusive Istanbul package), with Thailand and Mexico close behind for straightforward primary cases. South Korea sits highest of the four, reflecting its specialist Gangnam positioning. Cheapest is not automatically best: a low headline price means little until you confirm the surgeon, the accreditation, whether anesthesia and follow-up are included, and what a revision would cost. Compare what each quote actually covers, not just the number.',
  },
  {
    question: 'Is it safe to get a rhinoplasty abroad?',
    answer:
      'Quality ranges widely clinic to clinic, so the standard guidance is to use accredited facilities and board-certified surgeons. Look for international hospital accreditation such as JCI (Thailand has 60+ JCI-accredited facilities, and Bumrungrad was the first hospital in Asia to earn it), national surgeon boards (AMCPER/CMCPER in Mexico, ISAPS internationally), and Korea-specific certifications like KAHF or KOIHA for clinics registered to treat foreign patients. Confirm the surgeon performs your exact procedure and ask how revisions and complications are handled after you fly home. This is information, not medical advice — discuss candidacy with a qualified clinician.',
  },
  {
    question: 'What does an all-inclusive rhinoplasty package abroad include?',
    answer:
      'Package contents vary widely. A typical all-inclusive nose-job package may bundle the surgeon fee, anesthesia, pre-op tests and 3D imaging, the facility/operating room, medications, post-op follow-ups during your stay, and sometimes hotel nights and airport transfers. It often does NOT include your international flights, a revision if one is later needed, extended recovery beyond the planned stay, or complication care once you return home. Acrylic add-ons and grafting (e.g., rib or ear cartilage for some ethnic or revision cases) can sit outside the headline price. Ask the clinic for a written, itemized list of what is and is not included before paying a deposit.',
  },
  {
    question: 'How long should I stay abroad for a nose job, and when can I fly home?',
    answer:
      'Most cosmetic rhinoplasty trips run roughly 7-10 days so the surgeon can remove the splint and check early healing before you travel. Surgeons commonly advise waiting until after the splint comes off (about a week) before a flight, and swelling continues to settle for months — final shape can take up to a year. Revision and complex ethnic cases may need a longer stay. Confirm the exact stay length, the follow-up schedule, and when your surgeon clears you to fly before booking return travel.',
  },
  {
    question: 'Will US insurance cover a rhinoplasty done abroad?',
    answer:
      'US insurance generally covers nasal surgery only when it is medically necessary — for example a septoplasty to correct a deviated septum or repair after a fracture — and almost never covers a purely cosmetic reshaping, at home or overseas. That is why cash-pay pricing is the relevant comparison for most rhinoplasty travelers. Separate medical-travel insurance that covers complications abroad is worth considering. Confirm coverage with both your insurer and the clinic before you commit.',
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

export default function RhinoplastyCostByCountry() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Rhinoplasty Cost by Country (2026): US vs Turkey, Mexico, South Korea & Thailand',
    description:
      'A side-by-side cost comparison of rhinoplasty (nose job) by country — typical 2026 prices in Turkey, Mexico, South Korea, and Thailand versus the US, what each package includes, accreditation to verify, and how to choose.',
    url: 'https://vitalityscout.com/guides/rhinoplasty-cost-by-country',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/rhinoplasty-cost-by-country#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalProcedure',
      name: 'Rhinoplasty (nose job) abroad — primary, ethnic, and revision',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'Rhinoplasty Cost — average US surgeon fee (American Society of Plastic Surgeons)', url: 'https://www.plasticsurgery.org/cosmetic-procedures/rhinoplasty/cost' },
      { '@type': 'CreativeWork', name: 'Cheapest Countries for Rhinoplasty — Turkey & Mexico cost ranges (Medical Center Turkey)', url: 'https://www.medicalcenterturkey.com/top-5-cheapest-countries-for-rhinoplasty-in-the-world/' },
      { '@type': 'CreativeWork', name: 'Rhinoplasty (Nose Job) in the Republic of Korea — 2026 costs & packages (Bookimed)', url: 'https://us-uk.bookimed.com/clinics/country=republic-of-korea/procedure=rhinoplasty-nose-job/' },
      { '@type': 'CreativeWork', name: 'Rhinoplasty (Nose Job) in Mexico — 2026 costs & packages (Bookimed)', url: 'https://us-uk.bookimed.com/clinics/country=mexico/procedure=rhinoplasty-nose-job/' },
      { '@type': 'CreativeWork', name: 'Rhinoplasty in Thailand — costs, JCI hospitals & packages (Medical Tourism Corporation)', url: 'https://www.medicaltourismco.com/rhinoplasty-in-thailand/' },
      { '@type': 'CreativeWork', name: 'Rhinoplasty (Nose Job) in Thailand — 2026 costs & packages (Bookimed)', url: 'https://us-uk.bookimed.com/clinics/country=thailand/procedure=rhinoplasty-nose-job/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/rhinoplasty-cost-by-country#faq', url: 'https://vitalityscout.com/guides/rhinoplasty-cost-by-country' };

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
            <span className="text-4xl">👃</span>
            <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700">
              Comparison Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Rhinoplasty Cost by Country: US vs Turkey, Mexico, South Korea &amp; Thailand
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            The four most-searched nose-job destinations — Turkey, Mexico, South Korea, and Thailand —
            side by side against US prices. Typical 2026 costs, what each package includes, the
            accreditation to verify, and how to weigh price against travel and quality.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-cyan-500 bg-cyan-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A nose job averages a <strong>$7,637</strong> US surgeon fee (ASPS) and roughly{' '}
              <strong>$8,000-$18,000</strong> all-in. Abroad, 2026 estimates run about{' '}
              <strong>$1,750-$4,000</strong> in Turkey, <strong>$2,500-$5,100</strong> in Mexico,{' '}
              <strong>$2,000-$5,500</strong> in Thailand, and <strong>$5,000-$7,200</strong> in South
              Korea — often 40-80% below a US total. Turkey usually posts the lowest headline price.
              Cheapest is not automatically best: weigh the surgeon, accreditation, and revision policy.
              Verify every quote with the clinic. This is information, not medical advice.
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
            <strong>The surgeon matters more than the country.</strong> Rhinoplasty is one of the most
            technically demanding cosmetic operations, and a low headline price means little until you
            know who is operating, their board certification, the facility&apos;s accreditation, and what
            the quote actually covers. Confirm credentials directly with the surgeon and the accrediting
            body — listings can be out of date, and a quote that excludes anesthesia, follow-up, or a
            possible revision is not the same product as one that includes them.
          </p>
          <p className="text-sm text-red-800">
            This guide is for informational purposes only and is not medical advice. Outcomes depend on
            your anatomy, the surgeon, and the facility, and no result can be guaranteed. Discuss
            candidacy, alternatives, and risks with a qualified clinician before pursuing surgery abroad.
          </p>
        </div>
      </section>

      {/* At a Glance */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-cyan-900 mb-3">Rhinoplasty Abroad at a Glance</h2>
          <ul className="text-sm text-gray-700 space-y-1 mb-0">
            <li>✓ <strong>US baseline:</strong> ~$7,637 average surgeon fee (ASPS); ~$8,000-$18,000 all-in</li>
            <li>✓ <strong>Lowest headline pricing:</strong> Turkey (often all-inclusive Istanbul packages)</li>
            <li>✓ <strong>Specialist market:</strong> South Korea — Gangnam clinic density, highest of the four</li>
            <li>✓ <strong>Closest to the US:</strong> Mexico (border crossings; no long-haul flight)</li>
            <li>✓ <strong>JCI density:</strong> Thailand has 60+ JCI-accredited facilities (Bumrungrad, the first in Asia)</li>
            <li>✓ <strong>Boards to look for:</strong> AMCPER/CMCPER (Mexico), KAHF/KOIHA (Korea), JCI (Thailand), ISAPS</li>
            <li>✓ <strong>Trip length:</strong> typically ~7-10 days so the splint comes off before you fly</li>
          </ul>
        </div>
      </section>

      {/* Why people travel */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why a Nose Job Drives So Much Medical Tourism</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Cosmetic rhinoplasty is almost always cash-pay. US insurance covers nasal surgery only when
              it is medically necessary — a septoplasty for a deviated septum, or repair after a fracture
              — and essentially never covers a purely aesthetic reshaping. With the average US surgeon fee
              around $7,637 before anesthesia and facility costs, and all-in totals commonly landing
              between $8,000 and $18,000, the patient is paying out of pocket either way.
            </p>
            <p>
              That makes the comparison stark. The same techniques — open and closed approaches,
              ultrasonic (piezo) reshaping, ethnic and revision rhinoplasty — are offered abroad by
              board-certified surgeons at a fraction of the US total, often bundled into all-inclusive
              packages that fold in anesthesia, imaging, and a hotel stay. The trade-offs are real: travel
              time, the logistics of follow-up across borders, and a quality range that makes vetting the
              individual surgeon non-negotiable. This guide compares the four markets US patients search
              for most, then gives you a way to decide between them.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Rhinoplasty Cost by Country (2026 Estimates)</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Figures below are typical 2026 cosmetic-rhinoplasty estimates compiled from public
          medical-tourism cost sources. They are estimates, not quotes; revision and complex ethnic cases
          run higher. The US baseline is the ASPS average surgeon fee, which excludes anesthesia and
          facility costs (all-in US totals commonly reach $8,000-$18,000).
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Country</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-green-700">Typical Cost (est.)</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">What&apos;s Typically Included</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Est. Savings vs US</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Accreditation to Verify</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">United States (baseline)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">~$7,637 surgeon fee; $8,000-$18,000 all-in</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Surgeon fee only (ASPS); anesthesia &amp; facility extra</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">—</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">ABPS / ABFPRS board certification</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Turkey</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$1,750 - $4,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Often all-inclusive: surgery, anesthesia, hotel, transfers</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~55-80%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">JCI hospital + Turkish Medical Assoc. surgeon</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Thailand</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$2,000 - $5,500</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Surgery, anesthesia, follow-up; some bundle hotel</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~45-75%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">JCI (60+ facilities; Bumrungrad first in Asia)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Mexico</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$2,500 - $5,100</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Surgery, anesthesia, consults; some add transfers</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~45-70%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">AMCPER / CMCPER board-certified surgeon</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">South Korea</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$5,000 - $7,200</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">3D/CT imaging, surgery, follow-up; some add accommodation</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~40-60%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">KAHF / KOIHA + foreign-patient registration</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Ranges vary by surgeon experience, technique (primary vs ultrasonic vs ethnic vs revision),
          city, and what the package absorbs. Savings are shown against a typical US all-in total, not the
          surgeon fee alone. Always request a written, itemized quote that names the surgeon and lists
          what is and is not included.
        </p>
      </section>

      {/* Per-market breakdown */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">The Four Markets, Market by Market</h2>
          <p className="text-gray-600 mb-8 text-sm">
            Each market trades price, travel, technique focus, and regulatory framework differently. Here
            is how they actually differ for a US patient.
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Turkey</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Lowest pricing</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Turkey, centered on Istanbul, posts the lowest headline rhinoplasty pricing in this
                comparison, frequently as an all-inclusive package that folds in anesthesia, the hotel
                stay, and airport transfers. It is a very high-volume cosmetic market with a wide quality
                range — premier surgeons and high-throughput operations sit side by side — so the low
                price makes verifying the individual surgeon, the JCI hospital, and the revision policy
                especially important. Read more in our{' '}
                <Link href="/guides/rhinoplasty-turkey-cost" className="text-blue-600 hover:underline">
                  Rhinoplasty Turkey cost guide
                </Link>{' '}
                and{' '}
                <Link href="/destinations/turkey" className="text-blue-600 hover:underline">
                  Turkey destination guide
                </Link>
                .
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Thailand</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">JCI density</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Thailand pairs low-to-mid pricing with the deepest accreditation infrastructure of the
                four — 60-plus JCI-accredited facilities, the highest concentration in Southeast Asia, led
                by hospitals such as Bumrungrad International (the first in Asia to earn JCI accreditation
                in 2002) and Yanhee. Bangkok and Phuket cosmetic hospitals routinely treat international
                patients with 3D imaging and English-speaking coordinators. The trade-off is the long-haul
                flight; the upside is an established, accredited system around the procedure.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Mexico</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Closest to US</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Mexico is the logistically easiest option for most US patients — Tijuana is minutes from
                San Diego, and Cancún or Guadalajara are short flights with no long-haul leg. Pricing sits
                in the mid-range of this comparison; the time and travel savings often net out ahead for
                anyone who values being close to home for follow-up. Look for surgeons board-certified by
                AMCPER (and clinics accredited by CMCPER); quality ranges widely between border storefronts
                and established practices, so vet the named surgeon, not the city.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">South Korea</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Specialist market</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                South Korea — chiefly Seoul&apos;s Gangnam district, the densest concentration of cosmetic
                clinics on Earth — is the specialist market, particularly strong on rhinoplasty for Asian
                noses and revision work. Pricing is the highest of the four, reflecting that positioning,
                but still typically below a US all-in total. Only clinics registered with Korea&apos;s
                Ministry of Health and Welfare may legally treat foreign patients; look for KAHF or KOIHA
                certification and dedicated international programs. See our{' '}
                <Link href="/guides/korea-plastic-surgery-cost" className="text-blue-600 hover:underline">
                  South Korea plastic surgery cost guide
                </Link>{' '}
                and{' '}
                <Link href="/destinations/south-korea" className="text-blue-600 hover:underline">
                  South Korea destination guide
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What an All-Inclusive Rhinoplasty Package Does — and Does Not — Cover</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-bold text-green-900 mt-0 mb-3">Commonly included</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>✓ The surgeon fee and operating-room/facility cost</li>
              <li>✓ Anesthesia and the anesthesiologist</li>
              <li>✓ Pre-op tests and 3D / CT imaging</li>
              <li>✓ Medications and the post-op splint</li>
              <li>✓ Follow-up visits during your stay (splint removal)</li>
              <li>✓ Hotel nights and airport transfers (many packages)</li>
            </ul>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-bold text-yellow-900 mt-0 mb-3">Often NOT included</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>✗ Your international flights</li>
              <li>✗ A revision if one is later needed</li>
              <li>✗ Cartilage grafting (rib/ear) for some ethnic or revision cases</li>
              <li>✗ Extended recovery beyond the planned stay</li>
              <li>✗ Complication care after you return home</li>
              <li>✗ Medical-travel insurance for complications</li>
            </ul>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
          <p className="text-sm text-yellow-800 mb-0">
            <strong>The single most useful question:</strong> ask for a written, itemized quote that names
            the operating surgeon, the technique, and every line item — then ask what a revision would
            cost and who pays for it. A &ldquo;$2,800 rhinoplasty&rdquo; that excludes anesthesia,
            follow-up, and any revision is not the same product as one that includes them.
          </p>
        </div>
      </section>

      {/* What affects price */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Actually Moves the Price</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Technique &amp; case complexity</h3>
              <p className="text-sm text-gray-700 mb-0">
                A primary closed reshaping is the lowest-cost case. Ultrasonic (piezo) rhinoplasty, ethnic
                rhinoplasty requiring cartilage grafts, and especially revision rhinoplasty — correcting a
                prior surgery — sit materially higher everywhere, because they take longer and demand more
                specialized skill. Korea&apos;s Bookimed estimates, for instance, put tip rhinoplasty far
                below a full nasal-hump or revision case. Compare like-for-like cases, not headline
                minimums.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Surgeon, city &amp; what&apos;s bundled</h3>
              <p className="text-sm text-gray-700 mb-0">
                A board-certified, high-demand surgeon in Seoul&apos;s Gangnam or a JCI hospital in Bangkok
                charges more than a high-volume operation, and resort cities (Cancún, Phuket) can add a
                premium over border or capital clinics. An all-inclusive package that absorbs anesthesia,
                imaging, and hotel can be better value than a lower &ldquo;surgery-only&rdquo; quote once
                you add those back. Read what the number covers before you compare two countries.
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
            <h4 className="font-bold text-gray-900 mt-0 mb-2">1. Match the destination to the case</h4>
            <p className="text-sm text-gray-600 mb-0">
              A straightforward primary nose job pencils out almost anywhere. A revision or a complex
              ethnic case is where surgeon specialization matters most — that pushes South Korea (revision
              and Asian-nose expertise) or a top JCI Thailand hospital up the list, even at a higher price.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">2. Add the all-in cost, not the headline</h4>
            <p className="text-sm text-gray-600 mb-0">
              Flights, a 7-10 day stay, and a possible revision can move the real total well past the
              quote. Mexico&apos;s short trip can beat a cheaper Turkey or Thailand quote once two
              long-haul flights and extra hotel nights are added — for someone who also values being close
              to home for follow-up.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">3. Decide how much accreditation matters</h4>
            <p className="text-sm text-gray-600 mb-0">
              If JCI hospital accreditation gives you confidence, Thailand moves up. If proximity matters
              most, Mexico wins. If lowest headline price drives the decision, Turkey leads — paired with
              stricter vetting. For specialist or revision work, Korea&apos;s KAHF/KOIHA clinics lead.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">4. Vet the surgeon, not the country</h4>
            <p className="text-sm text-gray-600 mb-0">
              Country averages are a starting point, not a verdict. Confirm the surgeon&apos;s board
              certification, their before/after gallery for your exact case, the facility accreditation,
              the written quote, and how revisions and complications are handled once you fly home.
            </p>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
          <p className="text-sm text-yellow-800 mb-0">
            <strong>Red flag:</strong> any clinic that quotes a price without naming the operating surgeon,
            pressures a deposit before you have a written itemized quote, guarantees a specific result, or
            cannot explain how a revision would be handled. Legitimate clinics set realistic expectations
            and put the details in writing.
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Compare Rhinoplasty Providers &amp; Destinations</h3>
          <p className="text-gray-600 mb-6">
            Browse vetted plastic-surgery providers, then dig into the destinations you are weighing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/plastic_surgery" className="inline-block rounded-lg bg-cyan-600 px-6 py-3 font-medium text-white hover:bg-cyan-700">
              Plastic Surgery Providers
            </Link>
            <Link href="/destinations/turkey" className="inline-block rounded-lg border-2 border-cyan-600 px-6 py-3 font-medium text-cyan-600 hover:bg-cyan-50">
              Turkey Destination Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/rhinoplasty-turkey-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💲</span>
              <div>
                <div className="font-bold text-gray-900">Rhinoplasty Turkey Cost</div>
                <div className="text-sm text-gray-600">Istanbul prices vs the US, package details, vetting</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/korea-plastic-surgery-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💲</span>
              <div>
                <div className="font-bold text-gray-900">South Korea Plastic Surgery Cost</div>
                <div className="text-sm text-gray-600">Rhinoplasty, double eyelid &amp; more across Seoul</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/thailand-cosmetic-surgery-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💲</span>
              <div>
                <div className="font-bold text-gray-900">Thailand Cosmetic Surgery Cost</div>
                <div className="text-sm text-gray-600">Bangkok &amp; Phuket prices, JCI hospitals</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/plastic-surgery-abroad-cost-comparison" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌍</span>
              <div>
                <div className="font-bold text-gray-900">Plastic Surgery Abroad: Cost Comparison</div>
                <div className="text-sm text-gray-600">Six countries across all major procedures</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/is-plastic-surgery-in-turkey-safe" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🛡️</span>
              <div>
                <div className="font-bold text-gray-900">Is Plastic Surgery in Turkey Safe?</div>
                <div className="text-sm text-gray-600">What JCI means, the risks, and how to vet a surgeon</div>
              </div>
            </div>
          </Link>

          <Link href="/destinations/south-korea" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇰🇷</span>
              <div>
                <div className="font-bold text-gray-900">South Korea Destination Guide</div>
                <div className="text-sm text-gray-600">Gangnam clinics, vetted providers &amp; trip logistics</div>
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
            <li>• <a href="https://www.plasticsurgery.org/cosmetic-procedures/rhinoplasty/cost" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Rhinoplasty Cost — average US surgeon fee (American Society of Plastic Surgeons)</a></li>
            <li>• <a href="https://www.medicalcenterturkey.com/top-5-cheapest-countries-for-rhinoplasty-in-the-world/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Cheapest Countries for Rhinoplasty — Turkey &amp; Mexico cost ranges (Medical Center Turkey)</a></li>
            <li>• <a href="https://us-uk.bookimed.com/clinics/country=republic-of-korea/procedure=rhinoplasty-nose-job/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Rhinoplasty (Nose Job) in the Republic of Korea — 2026 costs &amp; packages (Bookimed)</a></li>
            <li>• <a href="https://us-uk.bookimed.com/clinics/country=mexico/procedure=rhinoplasty-nose-job/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Rhinoplasty (Nose Job) in Mexico — 2026 costs &amp; packages (Bookimed)</a></li>
            <li>• <a href="https://www.medicaltourismco.com/rhinoplasty-in-thailand/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Rhinoplasty in Thailand — costs, JCI hospitals &amp; packages (Medical Tourism Corporation)</a></li>
            <li>• <a href="https://us-uk.bookimed.com/clinics/country=thailand/procedure=rhinoplasty-nose-job/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Rhinoplasty (Nose Job) in Thailand — 2026 costs &amp; packages (Bookimed)</a></li>
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Comparing a Rhinoplasty Abroad?"
          description="Get our cosmetic-surgery-tourism checklist: how to read an itemized quote, the surgeon board-certification and accreditation questions to ask, and how to budget the all-in cost including a possible revision."
          source="guide_rhinoplasty_cost_by_country"
        />
      </div>

      <Footer />
    </main>
  );
}
