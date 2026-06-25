import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'All-Inclusive Bariatric Surgery Abroad: What’s Bundled',
  description:
    'All-inclusive gastric sleeve & bypass packages abroad in 2026 — Mexico ~$4,295–$7,000, Turkey ~$3,200–$6,000. What’s bundled, what isn’t, and how to vet.',
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge, matching the
// MedicalDisclaimer wording. The visible FAQ block mirrors this schema exactly.
const FAQ_ITEMS = [
  {
    question: 'What does an all-inclusive bariatric surgery package include?',
    answer:
      'A true all-inclusive bariatric package abroad usually bundles the surgeon and anaesthetist fees, the procedure itself, a 2-3 night hospital stay, pre-op lab work and tests, post-op medications, hotel nights for recovery, airport and clinic transfers, a nutritionist program, and initial follow-up before you fly home. Mexican packages add a US surgeon liaison and lifetime remote post-op care; Turkish packages add a multilingual coordinator and often a year of remote dietitian support. International flights, travel insurance, extended stays, and lifelong vitamins are commonly excluded. Always request a written, itemized list — these are estimates that vary by clinic, so confirm exactly what your quote covers.',
  },
  {
    question: 'How much is an all-inclusive gastric sleeve or bypass package abroad?',
    answer:
      'In Mexico (Tijuana), all-inclusive gastric sleeve packages are commonly estimated around $4,295-$5,200 and gastric bypass around $5,595-$7,000. In Turkey (Istanbul), all-inclusive gastric sleeve packages are commonly estimated around $3,200-$6,000. Both compare to roughly $15,000-$25,000 self-pay in the US. The price gap reflects lower labor, facility, and exchange-rate costs plus high procedure volume — not necessarily a quality difference. These are estimates that change with the exchange rate and what is bundled; confirm an itemized written quote directly with the provider before booking.',
  },
  {
    question: 'Is a gastric sleeve or bypass package abroad cheaper in Mexico or Turkey?',
    answer:
      'On the sticker price, Turkish all-inclusive gastric sleeve packages (commonly estimated ~$3,200-$6,000) often look lower than Mexican ones (~$4,295-$5,200), but the real total flips once travel is added. Mexico is a short drive or domestic-style flight from much of the US, so flights are cheap and a complication is hours away; Turkey adds a 10+ hour flight and 5-7 days on the ground. For most US patients the all-in cost — package plus flights, companion, and time — is closer than the headline numbers suggest. Compare itemized quotes plus your real travel cost, not just the package price.',
  },
  {
    question: 'What is NOT included in an all-inclusive bariatric package?',
    answer:
      'Even genuinely all-inclusive packages routinely exclude international flights, travel and complication insurance, extended hotel nights if recovery runs long, lifelong vitamins and supplements after discharge, in-person long-term aftercare back home, and a travel companion’s costs. A low headline price that drops most of these is not a real all-inclusive comparison. Ask for a written, itemized breakdown of inclusions and exclusions before you compare two quotes.',
  },
  {
    question: 'How do I vet an all-inclusive bariatric surgery program abroad?',
    answer:
      'Confirm the hospital’s accreditation independently — JCI for international hospitals, or COFEPRIS licensing plus a board-certified surgeon in Mexico. Verify the named surgeon’s board certification and annual case volume independently, not just the clinic’s marketing. Get a written itemized quote, a clear complication protocol with 24/7 contact, a realistic flying-home timeline, and a long-term aftercare plan. Read reviews on independent platforms, not only the clinic site. Treat a price far below the typical range, an unnamed surgeon, or any guaranteed result as red flags.',
  },
  {
    question: 'Is bariatric surgery abroad safe?',
    answer:
      'It can be when performed by an experienced, board-certified surgeon at a properly accredited facility. The ASMBS reports the overall risk of a major bariatric complication is about 4% and the risk of death is about 0.1%, which may vary by procedure — a safety profile it describes as comparable to common operations like gallbladder removal, appendectomy, and knee replacement. Those figures reflect accredited US data; your individual risk depends on your health, the surgeon, and the facility. Continuity of care matters most abroad: line up a US clinician for follow-up before you travel. This is information, not medical advice.',
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

export default function AllInclusiveBariatricSurgeryAbroad() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'All-Inclusive Bariatric Surgery Abroad (2026)',
    description:
      'A guide to all-inclusive gastric sleeve and bypass packages abroad — what Mexico and Turkey packages bundle, what they exclude, the price ranges, accreditation, and how to vet a program.',
    url: 'https://vitalityscout.com/guides/all-inclusive-bariatric-surgery-abroad',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/all-inclusive-bariatric-surgery-abroad#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalProcedure',
      name: 'Bariatric surgery (gastric sleeve and gastric bypass)',
      procedureType: 'https://schema.org/SurgicalProcedure',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'ASMBS — Metabolic and Bariatric Surgery Fact Sheet (safety profile)', url: 'https://asmbs.org/wp-content/uploads/2024/06/MBSFactSheet2024.pdf' },
      { '@type': 'CreativeWork', name: 'Mexico Bariatric Center — all-inclusive weight-loss surgery package pricing and inclusions', url: 'https://mexicobariatriccenter.com/weight-loss-surgery-costs/' },
      { '@type': 'CreativeWork', name: 'Tijuana Bariatric Surgery — what an all-inclusive bariatric package includes', url: 'https://tijuanabariatricsurgery.com/all-inclusive-bariatric-surgery/' },
      { '@type': 'CreativeWork', name: 'Bookimed — gastric sleeve in Turkey, all-inclusive package costs and inclusions', url: 'https://us-uk.bookimed.com/clinics/country=turkey/procedure=sleeve-resection/' },
      { '@type': 'CreativeWork', name: 'Surgery Cost Guide — US self-pay gastric sleeve average (2026)', url: 'https://surgerycostguide.com/gastric-sleeve-cost/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/all-inclusive-bariatric-surgery-abroad#faq', url: 'https://vitalityscout.com/guides/all-inclusive-bariatric-surgery-abroad' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-4 py-3">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">→</span>
            <Link href="/guides" className="hover:text-blue-600">Guides</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-900">All-Inclusive Bariatric Surgery Abroad</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/medical-tourism" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Medical Tourism Hub
          </Link>

          <div className="mb-4">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              Package Cost Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            All-Inclusive Bariatric Surgery Abroad (2026): What&apos;s Actually Bundled
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            The phrase &quot;all-inclusive&quot; hides a lot. Here is exactly what a gastric sleeve
            or bypass package bundles in Mexico and Turkey, what it quietly leaves out, and how
            to read a quote before you wire a deposit.
          </p>

          {/* Direct-answer lead: self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              An all-inclusive bariatric surgery package abroad bundles the{' '}
              <strong>surgery, a 2-3 night hospital stay, hotel nights, transfers, pre-op tests,
              medications, a nutritionist program, and initial follow-up</strong>. Gastric sleeve
              packages run roughly <strong>$4,295-$5,200 in Mexico</strong> and{' '}
              <strong>$3,200-$6,000 in Turkey</strong>; bypass in Mexico runs ~$5,595-$7,000 —
              versus ~$15,000-$25,000 US self-pay. Flights, insurance, and lifelong vitamins are
              usually excluded. Prices are estimates; confirm an itemized quote. This is
              information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last reviewed: June 2026 • 13 min read
          </p>
        </div>
      </section>

      {/* Quick Stats Box */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">All-Inclusive Packages: At a Glance</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="font-bold text-blue-600 mb-1">Mexico (Tijuana)</div>
              <div className="text-gray-900 font-semibold">Sleeve ~$4,295-$5,200</div>
              <div className="text-gray-600">Bypass ~$5,595-$7,000 (estimate)</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="font-bold text-indigo-600 mb-1">Turkey (Istanbul)</div>
              <div className="text-gray-900 font-semibold">Sleeve ~$3,200-$6,000</div>
              <div className="text-gray-600">all-inclusive package (estimate)</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="font-bold text-gray-700 mb-1">US Self-Pay</div>
              <div className="text-gray-900 font-semibold">~$15,000-$25,000</div>
              <div className="text-gray-600">sleeve (~$19,000 national average)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical / cost disclaimer */}
      <section className="mx-auto max-w-4xl px-4 py-2">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-amber-900 mb-2">Read Before You Use These Numbers</h3>
          <p className="text-sm text-amber-900 mb-2">
            <strong>Pricing is an estimate, not a quote.</strong> All-inclusive package prices move with
            exchange rates, technique, surgeon experience, and what is actually bundled. The figures here
            are ranges aggregated from public clinic and price-comparison sources to help you budget —
            always request a written, itemized quote directly from the program.
          </p>
          <p className="text-sm text-amber-900">
            Bariatric surgery is major, life-changing surgery (and gastric bypass is irreversible). This
            guide is educational only and is not medical advice. Talk to a qualified bariatric surgeon and
            complete a full medical evaluation before deciding on any procedure.
          </p>
        </div>
      </section>

      {/* Anatomy of an all-inclusive package */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What &quot;All-Inclusive&quot; Actually Means</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            &quot;All-inclusive&quot; is a marketing phrase, not a regulated definition. Two programs can
            both advertise an all-inclusive gastric sleeve and bundle very different things. The only way
            to compare is to break the package into its parts and check each one against the written quote.
            Based on published Mexican and Turkish program pages, here is what a genuinely all-inclusive
            bariatric package usually does — and does not — cover.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <div className="bg-white rounded-lg border-2 border-green-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Typically Included</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Surgeon and anaesthetist fees, plus the procedure</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>2-3 night hospital stay in an accredited facility with ICU access</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Pre-op lab work, blood tests, and a post-op leak test / X-ray</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Hotel nights for recovery (often 1-3 in Mexico, 2-6 in Turkey)</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Airport and clinic transfers (often VIP / dedicated driver)</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Take-home medications (antibiotics, pain relief)</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Nutritionist program and a coordinator or interpreter</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Initial follow-up before you fly home (some add remote post-op care)</span></li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border-2 border-red-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Often Excluded</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✗</span><span>International flights</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✗</span><span>Travel and medical-complication insurance</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✗</span><span>Extended hotel nights if recovery runs long</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✗</span><span>Lifelong vitamins and supplements after discharge</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✗</span><span>In-person long-term aftercare back home</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✗</span><span>A travel companion&apos;s flight, hotel, and meals</span></li>
              <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✗</span><span>Revision surgery if a complication needs it later</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
          <p className="text-sm text-yellow-800">
            <strong>The comparison trap:</strong> a $3,200 package that excludes the hotel, transfers, and
            aftercare is not cheaper than a $4,800 package that bundles all three — it is just unbundled.
            Compare the same line items across quotes, then add your real travel cost, before deciding
            which program is actually the better value.
          </p>
        </div>
      </section>

      {/* Mexico vs Turkey package comparison table */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Mexico vs Turkey: All-Inclusive Bariatric Packages</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Factor</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">
                  <span className="flex items-center gap-2">🇲🇽 Mexico (Tijuana)</span>
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">
                  <span className="flex items-center gap-2">🇹🇷 Turkey (Istanbul)</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Gastric sleeve package (estimate)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~$4,295 - $5,200</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~$3,200 - $6,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Gastric bypass package (estimate)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~$5,595 - $7,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~$4,000 - $7,200 (see bypass guide)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Travel from the US</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Drive / short flight; Tijuana is ~20 min from San Diego</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">10+ hour flight; 5-7 days on the ground</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Hotel nights typically bundled</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~1-3 (1 pre-op + recovery)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~2-6 at 4-5 star hotels</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Accreditation to verify</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">COFEPRIS license + board-certified surgeon (verify independently)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">JCI-accredited hospital + board-certified surgeon</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Proximity to follow-up if complication</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Hours from the US border</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">A long-haul flight away</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Mexican ranges reflect published Tijuana program pricing; Turkish sleeve ranges aggregate public
          all-inclusive package pricing via price-comparison sources. For Turkey bypass specifically, see our{' '}
          <Link href="/guides/gastric-bypass-turkey-cost" className="text-blue-600 hover:underline">Gastric Bypass Turkey Cost guide</Link>.
          All figures are estimates to verify with the provider.
        </p>
      </section>

      {/* Sleeve vs bypass: which procedure */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sleeve or Bypass: Which Package Are You Pricing?</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              The package price depends on the procedure, so it helps to know the difference before you
              compare quotes. Both are sold all-inclusive abroad, and the bundled services are usually the
              same — bypass simply costs more because it is the more complex operation, often with a
              three-night hospital stay rather than two.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 mt-6">
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">Gastric Sleeve</h3>
              <p className="text-sm text-gray-600">
                <strong>Restrictive only.</strong> About two-thirds of the stomach is removed, leaving a
                narrow, banana-shaped tube that holds less food and reduces the hunger hormone ghrelin.
                Typically the lower-priced package and a 2-night hospital stay. Read our{' '}
                <Link href="/guides/gastric-sleeve-mexico-safety" className="text-blue-600 hover:underline">gastric sleeve Mexico safety guide</Link>{' '}
                for the safety picture.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">Gastric Bypass (Roux-en-Y)</h3>
              <p className="text-sm text-gray-600">
                <strong>Restrictive + malabsorptive.</strong> A small pouch is created and rerouted to a
                lower section of small intestine, so you eat less and absorb fewer calories. Often discussed
                for significant acid reflux or type 2 diabetes; usually the higher-priced package with a
                3-night stay. See the{' '}
                <Link href="/guides/gastric-bypass-turkey-cost" className="text-blue-600 hover:underline">gastric bypass Turkey cost guide</Link>.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
            <p className="text-sm text-gray-700">
              <strong>Which procedure fits you is a clinical decision</strong> for you and a qualified
              surgeon — not a price decision. Do not pick the cheaper package over the right operation.
            </p>
          </div>
        </div>
      </section>

      {/* How prices abroad compare to US */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Packages Abroad Cost a Fraction of US Self-Pay</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Self-pay gastric sleeve in the US is commonly estimated around{' '}
            <strong>$15,000-$25,000</strong> (a frequently cited 2026 national average is roughly $19,000),
            of which roughly $930-$1,730 typically covers post-op visits and nutritional counseling.
            All-inclusive packages in Mexico and Turkey land far below that for several structural reasons:
          </p>
          <ul>
            <li><strong>Lower labor and facility costs</strong> and a favorable exchange rate.</li>
            <li><strong>High procedure volume</strong> — Tijuana and Istanbul both run very high bariatric caseloads, which supports competitive packaging.</li>
            <li><strong>Lower malpractice-insurance overhead</strong> baked into each case.</li>
            <li><strong>Bundled, fixed pricing</strong> rather than a hospital, surgeon, and anaesthesia each billing separately.</li>
          </ul>
          <p>
            A lower price does not by itself signal lower quality — but it is also not a guarantee of
            quality. The savings are real; so is the need to verify credentials independently. The next two
            sections are how you do that.
          </p>
        </div>
      </section>

      {/* Accreditation */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Accreditation: What Actually Signals Quality</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">Mexico — COFEPRIS + board certification</h3>
              <p className="text-sm text-gray-600">
                COFEPRIS is Mexico&apos;s federal health authority — the rough equivalent of the FDA —
                and licenses healthcare facilities. Confirm the hospital is COFEPRIS-licensed and that the
                individual surgeon is board-certified (verify certification independently). JCI
                accreditation, where a Mexican hospital holds it, is a further quality signal.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">Turkey — JCI</h3>
              <p className="text-sm text-gray-600">
                Turkey has one of the highest counts of JCI-accredited hospitals in the world. Joint
                Commission International is the global gold standard for international hospital quality.
                Verify the hospital&apos;s JCI accreditation directly, and confirm the surgeon&apos;s board
                certification separately.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
            <p className="text-sm text-yellow-800">
              <strong>Important nuance:</strong> accreditation applies to the <em>hospital</em>, not
              automatically to every surgeon who operates there. Many all-inclusive packages are sold by
              clinics or agencies that book a surgeon into an accredited hospital. Verify both the
              facility&apos;s accreditation <em>and</em> the named surgeon&apos;s certification and case
              volume — on the official COFEPRIS or JCI sources, not the package marketing. We do not
              endorse any specific clinic; confirm everything independently.
            </p>
          </div>
        </div>
      </section>

      {/* Risks — balanced */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Risks and Considerations for Surgery Abroad</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Bariatric surgery is well-studied. Per the ASMBS fact sheet, the overall risk of a major
            complication is about <strong>4%</strong> and the risk of death is about <strong>0.1%</strong>,
            which may vary by procedure — a safety profile the ASMBS describes as comparable to gallbladder
            removal, appendectomy, and knee replacement. Those numbers reflect accredited US data; your
            individual risk depends on your health, the surgeon, and the facility. The added considerations
            when the program is abroad:
          </p>
          <ul>
            <li><strong>Continuity of care:</strong> a complication can appear after you fly home. Line up a US clinician willing to manage post-bariatric follow-up before you travel. This is why proximity matters — Mexico is hours away, Turkey is a long-haul flight.</li>
            <li><strong>Flying after surgery:</strong> long-haul flights raise blood-clot risk; follow your surgeon&apos;s clearance timing and move during the flight.</li>
            <li><strong>Lifelong nutrition:</strong> both procedures require daily vitamins and lab monitoring; bypass is malabsorptive, so B12, iron, and calcium tracking is required for life.</li>
            <li><strong>What the package excludes:</strong> revision surgery, extended stays, and long-term aftercare are usually not bundled — budget for them.</li>
            <li><strong>Recourse:</strong> cross-border malpractice and revision pathways differ from the US. Understand them before booking.</li>
          </ul>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 not-prose my-6">
            <p className="text-sm text-red-800">
              <strong>Red flags:</strong> a package price far below the typical range, no named or
              board-certified surgeon, an &quot;all-inclusive&quot; quote that excludes the hotel or
              aftercare, pressure to book immediately, surgery in an unaccredited facility, or any
              &quot;guaranteed result.&quot; Legitimate programs set realistic expectations and explain how
              complications are handled.
            </p>
          </div>
        </div>
      </section>

      {/* How to vet the program */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Vet an All-Inclusive Bariatric Program</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-2"><span>□</span><span>Hospital is JCI-accredited (Turkey) or COFEPRIS-licensed (Mexico) — and you confirmed it independently</span></li>
              <li className="flex gap-2"><span>□</span><span>Surgeon is named and board-certified (verified independently), with a stated annual case volume</span></li>
              <li className="flex gap-2"><span>□</span><span>Written, itemized quote — you know exactly which inclusions and exclusions apply</span></li>
              <li className="flex gap-2"><span>□</span><span>The &quot;all-inclusive&quot; price actually covers hospital, hotel, transfers, and aftercare</span></li>
              <li className="flex gap-2"><span>□</span><span>Clear complication protocol and a way to reach the team 24/7</span></li>
              <li className="flex gap-2"><span>□</span><span>Realistic flying-home timeline and a long-term aftercare plan back home</span></li>
              <li className="flex gap-2"><span>□</span><span>Verifiable reviews on independent platforms, not just the clinic site</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA to money pages */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Comparing Bariatric Surgery Options?</h3>
          <p className="mb-6 text-blue-100">
            Browse verified bariatric providers and weigh medical-tourism packages against US cash-pay weight-loss care.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/bariatric"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              View Bariatric Providers
            </Link>
            <Link
              href="/weight-loss"
              className="inline-block rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Weight-Loss Care Options
            </Link>
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

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/gastric-bypass-turkey-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💲</span>
              <div>
                <div className="font-bold text-gray-900">Gastric Bypass Turkey Cost</div>
                <div className="text-sm text-gray-600">Bypass package pricing, JCI hospitals, surgeon vetting</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/gastric-sleeve-mexico-safety" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚖️</span>
              <div>
                <div className="font-bold text-gray-900">Gastric Sleeve in Mexico: Safety</div>
                <div className="text-sm text-gray-600">The sleeve alternative, complication data, vetting surgeons</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/tijuana-medical-tourism-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇲🇽</span>
              <div>
                <div className="font-bold text-gray-900">Tijuana Medical Tourism Guide</div>
                <div className="text-sm text-gray-600">Mexico&apos;s busiest hub: dental, bariatric, border logistics</div>
              </div>
            </div>
          </Link>

          <Link href="/medical-tourism" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌍</span>
              <div>
                <div className="font-bold text-gray-900">Medical Tourism Hub</div>
                <div className="text-sm text-gray-600">Destinations, procedures, and how to compare safely</div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Disclaimer + affiliate disclosure */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-900">
          <p className="mb-2">
            <strong>Medical disclaimer:</strong> This page is general information, not medical advice.
            Prices are estimates aggregated from public sources and may be out of date — confirm
            current pricing, inclusions, and provider credentials directly with each program. Bariatric
            surgery is major surgery (and gastric bypass is irreversible); consult a licensed bariatric
            surgeon and complete a full medical evaluation before deciding on any procedure.
          </p>
          <p>
            <strong>Affiliate disclosure:</strong> VitalityScout may earn a commission from some
            links, at no additional cost to you. This never affects which providers we list or how we
            describe them.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="mx-auto max-w-4xl px-4 pb-8">
        <div className="border-t border-gray-200 pt-8">
          <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• <a href="https://asmbs.org/wp-content/uploads/2024/06/MBSFactSheet2024.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">ASMBS — Metabolic and Bariatric Surgery Fact Sheet (safety profile, complication and mortality rates)</a></li>
            <li>• <a href="https://mexicobariatriccenter.com/weight-loss-surgery-costs/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Mexico Bariatric Center — all-inclusive sleeve (~$4,295) and bypass (~$5,595) package pricing and inclusions</a></li>
            <li>• <a href="https://tijuanabariatricsurgery.com/all-inclusive-bariatric-surgery/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Tijuana Bariatric Surgery — what an all-inclusive bariatric package includes (sleeve $3,500-$5,000, bypass $5,000-$7,000)</a></li>
            <li>• <a href="https://us-uk.bookimed.com/clinics/country=turkey/procedure=sleeve-resection/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Bookimed — gastric sleeve in Turkey, all-inclusive package costs (~$3,200-$6,000) and inclusions</a></li>
            <li>• <a href="https://surgerycostguide.com/gastric-sleeve-cost/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Surgery Cost Guide — US self-pay gastric sleeve average (~$19,000; $15,000-$25,000 range)</a></li>
            <li>• <a href="https://www.medicaltourismco.com/medical-tourism-in-mexico/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Medical Tourism Co. — Mexico accreditation (COFEPRIS, JCI, surgeon board certification)</a></li>
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Get Our All-Inclusive Bariatric Package Checklist"
          description="A line-by-line inclusions/exclusions worksheet and surgeon-vetting questions for Mexico and Turkey."
          source="guide_all_inclusive_bariatric_surgery_abroad"
        />
      </div>

      <Footer />
    </main>
  );
}
