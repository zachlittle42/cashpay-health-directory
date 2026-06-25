import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Gastric Sleeve Cost by Country (2026): US vs Mexico, Turkey' },
  alternates: { canonical: 'https://vitalityscout.com/guides/gastric-sleeve-cost-by-country' },
  description:
    'Gastric sleeve cost by country: all-inclusive sleeve gastrectomy prices in Mexico, Turkey & India vs the US, plus what packages include and how to choose.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// stated on this page. Every price answer ends with the verify-with-clinic
// hedge, consistent with the medical disclaimer. The visible FAQ block below
// mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much is a gastric sleeve abroad vs the US?',
    answer:
      'A self-pay gastric sleeve (sleeve gastrectomy) averages about $19,000 in the US (commonly $15,000-$25,000). All-inclusive packages abroad are far lower: roughly $3,795-$7,500 in Mexico (Tijuana), $2,800-$6,000 in Turkey (Istanbul), and $4,950-$6,000 in India. That is typically 60-80% savings, with the overseas figure usually bundling surgeon and hospital fees, a 2-3 night stay, transfers, and aftercare. These are estimates that vary by clinic and exchange rate — get a written, itemized quote from the provider before you travel.',
  },
  {
    question: 'Which country is cheapest for a gastric sleeve?',
    answer:
      'On the published package comparisons we reviewed, Turkey (Istanbul) tends to post the lowest all-inclusive sticker price, commonly estimated around $2,800-$6,000, with Mexico (~$3,795-$7,500) and India (~$4,950-$6,000) close behind — all well under the ~$19,000 US average. But cheapest on paper is not cheapest all-in: Mexico is a short flight or drive for most US patients, while Turkey and India add a long-haul flight and 7-12 days on the ground. Compare the itemized quote plus your real travel cost, not just the headline price.',
  },
  {
    question: 'Is a gastric sleeve abroad safe?',
    answer:
      'It can be when performed by an experienced, board-certified surgeon at an accredited facility. Across all settings, ASMBS-cited data put the 30-day mortality for sleeve gastrectomy near 0.08% and the serious-complication rate under 1% (about 0.96%) — lower than gallbladder or hip-replacement surgery — but those figures assume accredited centers and skilled surgeons. Look for Joint Commission International (JCI) accreditation in Turkey and India, NABH accreditation in India, and an SRC or CMCOEM Center of Excellence plus COFEPRIS licensing in Mexico. Verify the surgeon and a complication-handling protocol yourself. This is information, not medical advice.',
  },
  {
    question: 'Why is a gastric sleeve so much cheaper in Mexico, Turkey, and India?',
    answer:
      'Lower labor, facility, and malpractice-insurance costs, favorable exchange rates, and high procedure volume let hospitals in Mexico, Turkey, and India price bariatric surgery far below US self-pay rates. Turkey treated roughly 2 million medical tourists in 2024, and that volume supports competitive all-inclusive packaging. A lower price does not by itself signal lower quality — but it is also not a guarantee of quality, so credentials and accreditation still need independent verification.',
  },
  {
    question: 'What does an all-inclusive gastric sleeve package abroad include?',
    answer:
      'A typical package bundles the surgeon and anesthesia fees, the operating room, a 2-3 night hospital stay, pre-op tests (bloodwork, ECG, sometimes endoscopy), one course of post-op medication, airport and clinic transfers, hotel nights for recovery, an interpreter, and a nutrition or aftercare program. It usually does NOT include your international flights, a companion ticket, revision surgery, treatment of pre-existing conditions, or complication care once you return home. Ask the clinic for a written, itemized list of what is and is not included before paying a deposit.',
  },
  {
    question: 'Will US insurance cover a gastric sleeve done abroad?',
    answer:
      'Most US plans that cover bariatric surgery only do so at in-network domestic facilities and after a documented medical-necessity and supervised-diet process — they generally will not reimburse a sleeve performed overseas. That is why cash-pay package pricing is the relevant comparison for most medical travelers. Separate medical-travel insurance that covers complications abroad is worth considering. Confirm coverage with both your insurer and the clinic before you commit.',
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

export default function GastricSleeveCostByCountry() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Gastric Sleeve Cost by Country (2026): US vs Mexico, Turkey, India',
    description:
      'A side-by-side cost comparison of gastric sleeve (sleeve gastrectomy) surgery — all-inclusive package prices in Mexico, Turkey, and India versus US self-pay pricing, what each package includes, accreditation, and how to choose.',
    url: 'https://vitalityscout.com/guides/gastric-sleeve-cost-by-country',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/gastric-sleeve-cost-by-country#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalProcedure',
      name: 'Gastric sleeve (laparoscopic sleeve gastrectomy)',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'Gastric Sleeve Surgery Cost With Insurance vs Without — $19,000 avg 2026 (Surgery Cost Guide)', url: 'https://surgerycostguide.com/gastric-sleeve-cost/' },
      { '@type': 'CreativeWork', name: 'Gastric Sleeve Surgery in Tijuana, Mexico — all-inclusive package (Medical Tourism Corporation)', url: 'https://www.medicaltourismco.com/gastric-sleeve-tijuana-mexico/' },
      { '@type': 'CreativeWork', name: 'Bariatric Surgery Cost Mexico 2026 — package pricing (Lighter Dream)', url: 'https://lighterdream.com/bariatric-surgery-cost-mexico-guide/' },
      { '@type': 'CreativeWork', name: 'Gastric Sleeve Surgery in Turkey — costs & packages 2026 (Bookimed)', url: 'https://us-uk.bookimed.com/clinics/country=turkey/procedure=sleeve-resection/' },
      { '@type': 'CreativeWork', name: 'Gastric Sleeve Cost in Turkey 2026, prices & packages (Turkey Luxury Clinics)', url: 'https://turkeyluxuryclinics.com/en/blog/gastric-sleeve-cost-in-turkey' },
      { '@type': 'CreativeWork', name: 'Gastric Sleeve Surgery Cost in India (IndiCure)', url: 'https://www.indicure.com/gastric-sleeve-surgery-cost-india/' },
      { '@type': 'CreativeWork', name: 'Studies on Safety and Effectiveness of Sleeve Gastrectomy — 30-day mortality & complication rates (ASMBS)', url: 'https://asmbs.org/resources/studies-weigh-in-on-safety-and-effectiveness-of-newer-bariatric-and-metabolic-surgery-procedure/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/gastric-sleeve-cost-by-country#faq', url: 'https://vitalityscout.com/guides/gastric-sleeve-cost-by-country' };

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
            <span className="text-4xl">⚖️</span>
            <span className="rounded-full bg-cyan-100 px-3 py-1 text-sm font-medium text-cyan-700">
              Comparison Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Gastric Sleeve Cost by Country
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            The three markets US patients search most for sleeve gastrectomy — Mexico, Turkey, and
            India — side by side against US self-pay pricing. All-inclusive package costs, what each one
            bundles, accreditation to look for, and how to weigh price against travel and quality.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-cyan-500 bg-cyan-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              A self-pay gastric sleeve averages about <strong>$19,000</strong> in the US
              ($15,000-$25,000). All-inclusive packages abroad run roughly{' '}
              <strong>$3,795-$7,500</strong> in Mexico, <strong>$2,800-$6,000</strong> in Turkey, and{' '}
              <strong>$4,950-$6,000</strong> in India — about 60-80% savings. Turkey usually posts the
              lowest sticker price; Mexico wins on travel for most US patients. Cheapest is not
              automatically best: weigh accreditation, the surgeon, and your all-in travel cost, and
              verify every quote with the clinic. This is information, not medical advice.
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
            <strong>A gastric sleeve is major, permanent surgery.</strong> Sleeve gastrectomy removes
            roughly two-thirds of the stomach; it cannot be reversed. Quality varies clinic to clinic, not
            just country to country, so a low headline price means little until you know the surgeon&apos;s
            credentials, the facility accreditation, and exactly what the quote covers. Verify accreditation
            directly with the body or the hospital — status can change.
          </p>
          <p className="text-sm text-red-800">
            This guide is for informational purposes only and is not medical advice. Candidacy, the right
            procedure, and the risks depend on your individual case. Discuss your options, alternatives, and
            a complication plan with a qualified bariatric surgeon before pursuing treatment abroad.
          </p>
        </div>
      </section>

      {/* At a Glance */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-cyan-900 mb-3">Gastric Sleeve Abroad at a Glance</h2>
          <ul className="text-sm text-gray-700 space-y-1 mb-0">
            <li>✓ <strong>60-80% savings</strong> vs the ~$19,000 US self-pay average (estimates)</li>
            <li>✓ <strong>Lowest sticker price:</strong> Turkey (Istanbul), commonly ~$2,800-$6,000 all-inclusive</li>
            <li>✓ <strong>Easiest travel for US patients:</strong> Mexico (short flight or border drive)</li>
            <li>✓ <strong>Highest-volume international hubs:</strong> Turkey and India (JCI-accredited hospitals)</li>
            <li>✓ <strong>Accreditation to look for:</strong> JCI, NABH (India), SRC / CMCOEM Center of Excellence + COFEPRIS (Mexico)</li>
            <li>✓ <strong>Safety (accredited centers):</strong> ~0.08% 30-day mortality, &lt;1% serious complications for sleeve</li>
            <li>✓ <strong>Typical stay abroad:</strong> ~4-7 days Mexico/Turkey; ~10-12 days India</li>
          </ul>
        </div>
      </section>

      {/* Country Price Comparison Table (REQUIRED) */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Gastric Sleeve: Cost by Country (Estimates)</h2>
        <p className="text-gray-600 mb-6 text-sm">
          All-inclusive package prices for a laparoscopic sleeve gastrectomy, compiled from public
          medical-tourism cost sources and a US self-pay benchmark. These are estimates, not quotes —
          always confirm a written, itemized price with the provider.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Country</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-green-700">Typical Cost (est.)</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">What&apos;s Typically Included</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Est. Savings vs US</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Accreditation Note</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">United States (baseline)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$15,000 - $25,000 (avg ~$19,000)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Surgeon, anesthesia, facility, pre-op tests, follow-up (surgery only)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">—</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">MBSAQIP-accredited centers; insurance rarely covers self-pay abroad</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Turkey (Istanbul)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$2,800 - $6,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Surgery, 2-5 nights hospital, hotel, transfers, interpreter, aftercare</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~70-85%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">30+ JCI-accredited hospitals; verify surgeon + facility</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">Mexico (Tijuana)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$3,795 - $7,500</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Surgery, hospital + hotel, transfers, dietitian, post-op meds, follow-up</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~60-75%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">COFEPRIS-licensed; look for SRC / CMCOEM Center of Excellence</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700">India</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$4,950 - $6,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">Surgery, 2-3 nights hospital, pre-op tests, meds, airport transfers</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~65-75%</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-600">JCI + NABH-accredited hospitals (e.g. Apollo, Fortis, Max)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Ranges vary by clinic, surgeon, city, BMI, and any add-ons (endoscopy, treatment of
          pre-existing conditions). Turkish prices are often quoted in euros and converted here for
          comparison. The US figure is the procedure only; the overseas figures are all-inclusive
          packages, so add your own flights and a companion to the foreign totals before comparing.
        </p>
      </section>

      {/* Per-country breakdown */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">The Three Markets, Country by Country</h2>
          <p className="text-gray-600 mb-8 text-sm">
            Each market trades price, travel, and regulatory framework differently. Here is how they
            actually differ for a US patient considering a sleeve.
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Mexico (Tijuana)</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Closest to US</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Mexico is the logistically easiest option for most US patients — Tijuana sits 20 minutes
                from the San Diego border, so there is no long-haul flight and a complication is hours away.
                All-inclusive sleeve packages are commonly estimated from about $3,795 up to roughly $7,500,
                bundling the surgery, hospital and hotel, transfers, post-op medication, and a dietitian
                program. Per-package pricing sits a little above Turkey&apos;s deepest discounts, but the
                short trip and proximity often net out ahead. Look for a COFEPRIS-licensed hospital and a
                board-certified surgeon, and favor facilities carrying an SRC or CMCOEM Center of Excellence
                accreditation; quality ranges widely between border storefronts and established practices.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Turkey (Istanbul)</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Lowest sticker</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                Turkey, centered on Istanbul, posts the lowest all-inclusive sleeve pricing in this
                comparison — commonly estimated around $2,800-$6,000, with packages that often bundle a
                4- or 5-star hotel, VIP transfers, an interpreter, and 12-month nutritional support. Turkey
                treated roughly 2 million medical tourists in 2024, and more than 30 of its hospitals hold
                Joint Commission International (JCI) accreditation. The trade-offs are the longest flight of
                the three and a market with a very wide quality range — high-end clinics and high-volume
                operations sit side by side. The low headline price makes verifying the surgeon&apos;s
                credentials, the specific hospital&apos;s accreditation, and a complication protocol
                especially important.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">India</h3>
                <span className="bg-cyan-100 text-cyan-700 text-xs px-2 py-1 rounded">Strong infrastructure</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                India is the value-and-infrastructure option, with sleeve gastrectomy commonly estimated
                from about $4,950, performed at large hospital groups — Apollo, Fortis, Max, and others —
                many of which hold JCI and NABH (National Accreditation Board for Hospitals) accreditation.
                English is widely spoken in the major hospitals, which eases communication. The package
                usually covers the surgery, a 2-3 night stay, pre-op tests, medication, and airport
                transfers, but typically excludes flights, the visa, and accommodation beyond the hospital.
                Plan for the longest total stay of the three — often 10-12 days — to allow for evaluation,
                surgery, and initial recovery before flying home.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">United States (baseline)</h3>
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">No travel</span>
              </div>
              <p className="text-sm text-gray-600 mb-0">
                A US self-pay sleeve averages about $19,000 and commonly runs $15,000-$25,000, varying by
                state — the lowest-cost states (Mississippi, West Virginia, Alabama) sit near $17,000 while
                Hawaii, California, and New York top $21,000. The US quote usually covers only the surgery,
                anesthesia, facility, pre-op tests, and follow-up; flights and hotels are not part of the
                equation because there is no travel. Domestic accredited centers (look for MBSAQIP) and
                continuity of care if a complication arises are the trade-up you are paying for. Insurance
                that covers bariatric surgery generally applies only to in-network domestic facilities, so
                it rarely offsets an overseas package.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What an All-Inclusive Sleeve Package Does — and Does Not — Cover</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-bold text-green-900 mt-0 mb-3">Commonly included</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>✓ Surgeon, anesthesiologist, and operating-room fees</li>
              <li>✓ 2-3 night hospital stay (private room in most packages)</li>
              <li>✓ Pre-op tests (bloodwork, ECG, sometimes endoscopy)</li>
              <li>✓ One course of post-op medication</li>
              <li>✓ Airport and clinic transfers</li>
              <li>✓ Hotel nights for recovery (varies by program)</li>
              <li>✓ Interpreter and a nutrition / aftercare program</li>
            </ul>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-bold text-yellow-900 mt-0 mb-3">Often NOT included</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>✗ Your international flights and a companion ticket</li>
              <li>✗ The visa (relevant for India and Turkey)</li>
              <li>✗ Treatment of pre-existing conditions found at evaluation</li>
              <li>✗ Revision surgery if needed later</li>
              <li>✗ Extended hotel nights beyond the package window</li>
              <li>✗ Complication or readmission care after you return home</li>
              <li>✗ Long-term vitamin and protein supplementation</li>
            </ul>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
          <p className="text-sm text-yellow-800 mb-0">
            <strong>The single most useful question:</strong> ask for a written, itemized quote, then ask
            what happens if a complication occurs after you fly home, and who pays. A &ldquo;$3,500
            sleeve&rdquo; that excludes flights, a companion, the visa, and any complication coverage is
            not the same product as a higher quote that absorbs them.
          </p>
        </div>
      </section>

      {/* Safety & accreditation explainer */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Safety and Accreditation: What to Verify</h2>
          <p className="text-gray-700 mb-6 text-sm">
            Bariatric surgery is well studied. ASMBS-cited data put the 30-day mortality for sleeve
            gastrectomy near <strong>0.08%</strong> and the serious-complication rate under{' '}
            <strong>1% (about 0.96%)</strong> — lower than gallbladder or hip-replacement surgery. Those
            figures assume an accredited center and an experienced surgeon, which is exactly what you are
            verifying when you travel.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Accreditation by country</h3>
              <p className="text-sm text-gray-700 mb-0">
                In <strong>Turkey</strong> and <strong>India</strong>, look for Joint Commission
                International (JCI) accreditation; India adds the national NABH standard, held by major
                groups like Apollo, Fortis, and Max. In <strong>Mexico</strong>, the facility should be
                COFEPRIS-licensed, and the strongest bariatric signal is an SRC or CMCOEM Center of
                Excellence. Accreditation applies to the hospital, not automatically to every surgeon
                working there — confirm both, on the accrediting body&apos;s site or the hospital&apos;s,
                not a third-party listing.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Surgeon &amp; aftercare</h3>
              <p className="text-sm text-gray-700 mb-0">
                Confirm the named surgeon is board-certified in your procedure and ask for annual case
                volume. The bigger risk in medical travel is the gap in care after you fly home, so ask how
                leaks, bleeding, or readmission are handled across borders, who is reachable 24/7, and what
                the long-term nutrition follow-up looks like. A clinic that names the surgeon, sets realistic
                expectations, and puts a complication plan in writing is the baseline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What affects price */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What Actually Moves the Price</h2>
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">Surgeon experience and hospital tier</h4>
            <p className="text-sm text-gray-600 mb-0">
              A high-volume, board-certified surgeon at a JCI- or SRC-accredited hospital costs more than a
              budget storefront — and that gap is usually where the safety difference lives. The cheapest
              quote in a market is rarely the safest one.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">Your BMI and health profile</h4>
            <p className="text-sm text-gray-600 mb-0">
              A higher BMI or conditions like sleep apnea, diabetes, or reflux can mean extra testing, a
              longer stay, or a different surgical plan — all of which move the quote. A package built for a
              straightforward case can change after evaluation.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">What the package bundles</h4>
            <p className="text-sm text-gray-600 mb-0">
              Hotel nights, transfers, an interpreter, post-op medication, and aftercare length differ
              between programs. Two quotes at the same headline price can deliver very different value once
              you compare the line items.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-2">Travel and the exchange rate</h4>
            <p className="text-sm text-gray-600 mb-0">
              Flights, a companion, and the visa can add four figures, and Turkish and Indian package
              prices are often quoted in euros or rupees, so the dollar figure shifts with the exchange
              rate. The all-in number, not the package sticker, is the real comparison.
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
                Flights, a companion, the visa, and any extended stay can move the real total well past the
                package quote. Mexico&apos;s short trip can beat a cheaper Turkey quote once two long-haul
                flights and more days off work are added.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-gray-900 mt-0 mb-2">2. Weigh proximity against price</h4>
              <p className="text-sm text-gray-600 mb-0">
                If being a short flight from home — and from your surgeon if something goes wrong — matters
                most, Mexico leads. If the lowest sticker price drives the decision, Turkey is hard to beat,
                paired with stricter vetting. India fits patients who value large accredited hospital groups
                and don&apos;t mind the longer trip.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-gray-900 mt-0 mb-2">3. Plan for the trip home, not just the surgery</h4>
              <p className="text-sm text-gray-600 mb-0">
                The hardest part of bariatric medical travel is care after you land back in the US. Confirm
                a 24/7 contact, a written complication protocol, and a long-term nutrition plan before you
                book — and consider medical-travel insurance that covers complications.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-gray-900 mt-0 mb-2">4. Vet the surgeon and hospital, not the country</h4>
              <p className="text-sm text-gray-600 mb-0">
                Country averages are a starting point, not a verdict. Confirm the surgeon&apos;s board
                certification and case volume, the facility accreditation (JCI / NABH / SRC / COFEPRIS), and
                the written itemized quote — then read reviews on independent platforms, not only the
                clinic&apos;s site.
              </p>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
            <p className="text-sm text-yellow-800 mb-0">
              <strong>Red flag:</strong> any clinic that quotes a sleeve price without naming the surgeon,
              pressures a deposit before you have a written itemized quote, guarantees a specific weight-loss
              result, or cannot explain how a complication is handled after you return home. Legitimate
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Compare Bariatric Options Side by Side</h3>
          <p className="text-gray-600 mb-6">
            Explore the bariatric surgery hub and full destination profiles for the markets in this guide,
            then dig into the ones you are weighing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/bariatric" className="inline-block rounded-lg bg-cyan-600 px-6 py-3 font-medium text-white hover:bg-cyan-700">
              Bariatric Surgery Hub
            </Link>
            <Link href="/destinations/mexico" className="inline-block rounded-lg border-2 border-cyan-600 px-6 py-3 font-medium text-cyan-600 hover:bg-cyan-50">
              Mexico Destination Guide
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
          <Link href="/guides/gastric-sleeve-mexico-safety" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚖️</span>
              <div>
                <div className="font-bold text-gray-900">Gastric Sleeve in Mexico: Safety Guide</div>
                <div className="text-sm text-gray-600">Is bariatric surgery in Tijuana safe? Vetting a surgeon</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/gastric-bypass-turkey-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💲</span>
              <div>
                <div className="font-bold text-gray-900">Gastric Bypass Turkey Cost</div>
                <div className="text-sm text-gray-600">Bypass package prices in Istanbul vs the US</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/all-inclusive-bariatric-surgery-abroad" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧳</span>
              <div>
                <div className="font-bold text-gray-900">All-Inclusive Bariatric Surgery Abroad</div>
                <div className="text-sm text-gray-600">What the package actually bundles — and excludes</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/india-medical-tourism-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇮🇳</span>
              <div>
                <div className="font-bold text-gray-900">India Medical Tourism Guide</div>
                <div className="text-sm text-gray-600">JCI/NABH hospitals, the e-Medical Visa, and how to vet</div>
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

          <Link href="/destinations/india" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇮🇳</span>
              <div>
                <div className="font-bold text-gray-900">India Destination Guide</div>
                <div className="text-sm text-gray-600">Hospitals, procedures, and trip logistics</div>
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
            <li>• <a href="https://surgerycostguide.com/gastric-sleeve-cost/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Gastric Sleeve Surgery Cost 2026 — US self-pay average $19,000 (Surgery Cost Guide)</a></li>
            <li>• <a href="https://www.medicaltourismco.com/gastric-sleeve-tijuana-mexico/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Gastric Sleeve in Tijuana, Mexico — all-inclusive package (Medical Tourism Corporation)</a></li>
            <li>• <a href="https://lighterdream.com/bariatric-surgery-cost-mexico-guide/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Bariatric Surgery Cost Mexico 2026 — package pricing (Lighter Dream)</a></li>
            <li>• <a href="https://us-uk.bookimed.com/clinics/country=turkey/procedure=sleeve-resection/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Gastric Sleeve in Turkey — costs &amp; packages 2026 (Bookimed)</a></li>
            <li>• <a href="https://turkeyluxuryclinics.com/en/blog/gastric-sleeve-cost-in-turkey" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Gastric Sleeve Cost in Turkey 2026 — prices &amp; packages (Turkey Luxury Clinics)</a></li>
            <li>• <a href="https://www.indicure.com/gastric-sleeve-surgery-cost-india/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Gastric Sleeve Surgery Cost in India — from ~$4,950 (IndiCure)</a></li>
            <li>• <a href="https://asmbs.org/resources/studies-weigh-in-on-safety-and-effectiveness-of-newer-bariatric-and-metabolic-surgery-procedure/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Sleeve gastrectomy 30-day mortality &amp; complication rates (ASMBS)</a></li>
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Comparing a Gastric Sleeve Abroad?"
          description="Get our bariatric-travel checklist: how to read an itemized package quote, the surgeon and accreditation questions to ask, and how to plan complication coverage and aftercare."
          source="guide_gastric_sleeve_cost_by_country"
        />
      </div>

      <Footer />
    </main>
  );
}
