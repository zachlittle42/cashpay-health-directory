import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Medical Tourism Packages: What All-Inclusive Covers' },
  alternates: { canonical: 'https://vitalityscout.com/guides/medical-tourism-packages' },
  description: 'How all-inclusive medical vacation packages work: what is bundled, what is NOT, prices by procedure and destination, and how to vet an operator.',
};

// Real GSC / PAA queries this page already earns impressions for, answered only
// from facts stated on this page. Every price answer ends with the
// verify-with-provider hedge. The visible FAQ block below mirrors this schema
// exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'What do medical vacation packages include?',
    answer: 'An all-inclusive medical tourism (medical vacation) package usually bundles the procedure and surgeon/anesthesia fees, the required hospital nights, a 3-5 star hotel stay for a set number of nights, private airport and hotel-to-clinic transfers, a patient coordinator or interpreter, prescribed medications and garments, and basic pre-departure follow-up. International flights and complications insurance are almost always excluded. Exact inclusions vary by operator — always get the bundle itemized in writing before you pay.',
  },
  {
    question: 'How much do medical tourism packages cost?',
    answer: 'Package prices are estimates that vary by procedure, destination, clinic tier, and what is bundled. As rough ranges to verify: Turkey all-inclusive hair-transplant packages from about €1,450-€5,000; Turkey all-inclusive plastic-surgery packages roughly $1,500-$15,000+; Mexico gastric sleeve roughly $4,000-$7,000 and full-arch dental implants roughly $9,000-$15,000; Thailand breast augmentation around $3,200. These typically run 50-80% below US self-pay prices. Confirm the current, itemized price directly with the clinic or operator.',
  },
  {
    question: 'What is the price of medical treatment abroad versus the US?',
    answer: 'For many elective procedures, medical treatment abroad is estimated at 50-80% less than US self-pay prices — for example gastric sleeve roughly $4,000-$7,000 in Mexico versus $10,000-$25,000+ in the US, and full-arch implants roughly $9,000-$15,000 versus $25,000-$35,000. But the package price is not the all-in price: budget an extra 30-50% for flights, meals, extended stays, and complications insurance. Treat every figure as an estimate to confirm with the provider.',
  },
  {
    question: 'What are Turkey medical tourism prices for all-inclusive packages?',
    answer: 'Turkey is the most package-driven destination. All-inclusive hair-transplant packages are commonly advertised from about €1,450 up to €5,000, typically bundling the procedure, 2-3 nights in a 4-5 star hotel, VIP transfers, an interpreter, and an aftercare kit. Broader all-inclusive plastic-surgery packages span roughly $1,500-$15,000+ depending on the operation. These are advertised estimates that change with the lira and clinic tier — request a current itemized quote before booking.',
  },
  {
    question: 'What is NOT included in an all-inclusive package?',
    answer: 'Common exclusions are international flights, travel and complications insurance, visa fees, meals (unless full board is stated), a companion\'s flights and expenses, extended hotel nights beyond the included stay, treatment for unforeseen complications, and long-term follow-up back home. Some low quotes also leave out operating-room time, overnight stays, blood tests, or imaging. Get a written, itemized inclusion-and-exclusion list so the headline price is not the only number you are comparing.',
  },
  {
    question: 'Should I book through a package operator or directly with the hospital?',
    answer: 'Both can work. A certified facilitator or operator adds coordination, translation, and logistics support — useful for a first trip, a complex procedure, or an unfamiliar destination — but may add a markup. Booking directly with an accredited hospital can be cheaper for experienced travelers who can manage logistics. Either way, verify hospital accreditation (for example JCI) and surgeon credentials yourself, and ask for an itemized cost breakdown so you can compare the package against a direct quote.',
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

export default function MedicalTourismPackages() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Medical Tourism Packages: What All-Inclusive Medical Vacation Packages Cover and Cost',
    description:
      'How all-inclusive medical tourism (medical vacation) packages work — what is bundled (procedure, hospital, hotel, transfers, aftercare), what is NOT, typical package prices by procedure and destination, and how to vet a package operator versus booking direct.',
    url: 'https://vitalityscout.com/guides/medical-tourism-packages',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/medical-tourism-packages#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'Thing', name: 'All-inclusive medical tourism packages' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'CDC — Medical Tourism (Travelers\' Health)', url: 'https://wwwnc.cdc.gov/travel/page/medical-tourism' },
      { '@type': 'CreativeWork', name: 'CDC — Adverse Outcomes Linked to Travel-Related Cosmetic Procedures (2026)', url: 'https://www.cdc.gov/media/releases/2026/cdc-highlights-adverse-outcomes-linked-to-travel-related-cosmetic-procedures.html' },
      { '@type': 'CreativeWork', name: 'PlacidWay — What Is Typically Included in Medical Tourism Packages', url: 'https://www.placidway.com/answer-detail/568016/What-are-Typically-Included-in-Medical-Tourism-Packages' },
      { '@type': 'CreativeWork', name: 'Medical Tourism Association — What Is a Medical Tourism Facilitator', url: 'https://www.medicaltourismassociation.com/content/what-is-a-medical-tourism-facilitator' },
      { '@type': 'CreativeWork', name: 'Global Healthcare Accreditation — Medical Travel Facilitator Certification', url: 'https://www.globalhealthcareaccreditation.com/medical-travel-facilitator-certification' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/medical-tourism-packages#faq', url: 'https://vitalityscout.com/guides/medical-tourism-packages' };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
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
              <span className="text-gray-900">Medical Tourism Packages</span>
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
                Medical Tourism
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Medical Tourism Packages: How All-Inclusive Medical Vacation Deals Actually Work
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              &quot;All-inclusive&quot; bundles the procedure, hotel, transfers, and aftercare into one
              price. Here is exactly what is in the bundle, what is quietly left out, what packages
              cost by procedure and destination, and how to vet an operator before you pay.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                An <strong>all-inclusive medical tourism package</strong> bundles the procedure and
                surgeon fees, hospital nights, a 3-5 star hotel stay, private airport and clinic
                transfers, a coordinator or interpreter, and basic aftercare into one price &mdash;
                typically <strong>50-80% below US self-pay costs</strong>. It almost always
                <strong> excludes international flights and complications insurance</strong>. Prices
                are estimates that vary by clinic and destination; always get an itemized quote and
                verify it with the provider. This is information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: June 2026 • 12 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Comparison Box */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">The Package, At a Glance</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-green-600 mb-2">Usually IN the bundle</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Procedure + surgeon/anesthesia fees</li>
                  <li>• Required hospital nights</li>
                  <li>• 3-5 star hotel for set nights</li>
                  <li>• Private airport + clinic transfers</li>
                  <li>• Coordinator / interpreter</li>
                  <li>• Meds, garments, pre-flight follow-up</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-red-600 mb-2">Usually NOT in the bundle</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• International flights</li>
                  <li>• Complications / travel insurance</li>
                  <li>• Visa fees, meals (unless stated)</li>
                  <li>• A companion&apos;s flights + expenses</li>
                  <li>• Extra hotel nights beyond the stay</li>
                  <li>• Long-term follow-up back home</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              Inclusions vary by operator. Get the exact bundle itemized in writing before paying.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#what-is" className="text-blue-600 hover:underline">1. What an all-inclusive package actually is</a></li>
              <li><a href="#included" className="text-blue-600 hover:underline">2. What medical vacation packages include</a></li>
              <li><a href="#not-included" className="text-blue-600 hover:underline">3. What is NOT included (the hidden costs)</a></li>
              <li><a href="#prices" className="text-blue-600 hover:underline">4. Medical treatment abroad prices by procedure</a></li>
              <li><a href="#turkey" className="text-blue-600 hover:underline">5. Turkey package prices (the most bundled market)</a></li>
              <li><a href="#vet" className="text-blue-600 hover:underline">6. How to vet a package operator vs booking direct</a></li>
              <li><a href="#safety" className="text-blue-600 hover:underline">7. Safety: what the CDC actually found</a></li>
              <li><a href="#faq" className="text-blue-600 hover:underline">8. FAQ</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              The medical-vacation package is the product most clinics abroad actually sell. Instead of
              quoting a bare surgical fee, they wrap the procedure, the hotel, the transfers, and the
              aftercare into a single headline number. That bundle is convenient &mdash; and it is also
              where the real cost comparison lives, because what an operator chooses to include (and
              quietly leave out) is what decides whether the package is a genuine deal or a number
              designed to look like one. This guide is about the bundle itself: how to read it, price
              it, and vet it.
            </p>

            <h2 id="what-is" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What an All-Inclusive Package Actually Is</h2>

            <p className="text-gray-700 mb-4">
              &quot;All-inclusive&quot; in medical tourism means a clinic or facilitator packages the
              clinical work together with the travel logistics around it, so you pay one price rather
              than assembling surgery, lodging, and transport separately. The model is most developed
              in destinations built around international patients &mdash; Turkey for hair transplants
              and cosmetic surgery, Mexico for dental and bariatric work, Thailand for cosmetic and
              wellness procedures &mdash; where bundling and a dedicated coordinator are the norm, not
              the exception.
            </p>

            <p className="text-gray-700 mb-4">
              The honest framing: a package is a convenience product. It removes the friction of
              booking a hotel near the clinic, arranging airport pickup in a country you do not know,
              and finding an interpreter. It does not remove the two things that matter most &mdash;
              the surgeon&apos;s competence and the facility&apos;s safety &mdash; and it does not, by
              itself, make a procedure cheaper than booking the same components directly. Treat the
              bundle as logistics, and vet the medicine separately.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why this matters:</strong> two clinics can advertise the same headline package
                price while including very different things. One &quot;$4,000 gastric sleeve&quot; may
                cover surgery, three hospital nights, hotel, and transfers; another may cover only the
                surgery, with operating-room time, imaging, and the overnight stay billed on top. The
                price is only comparable once you have both itemized lists side by side.
              </p>
            </div>

            <h2 id="included" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Medical Vacation Packages Include</h2>

            <p className="text-gray-700 mb-4">
              Across operators and destinations, a comprehensive all-inclusive package typically
              bundles the following. Use it as a checklist when you read a quote &mdash; if a line is
              missing, ask whether it is excluded or simply unstated.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>The procedure + clinical fees:</strong> surgeon, anesthesiologist, and operating-room fees for the agreed operation</li>
              <li><strong>Hospital stay:</strong> the required post-procedure nights in the hospital or clinic</li>
              <li><strong>Pre-op consultation + basic post-op care:</strong> initial workup, plus follow-up appointments and stitch removal before you are cleared to fly</li>
              <li><strong>Hotel accommodation:</strong> a set number of nights, commonly in a 3-5 star hotel near the facility</li>
              <li><strong>Ground transfers:</strong> private airport pickup/drop-off and all hotel-to-clinic trips for appointments</li>
              <li><strong>Coordinator / interpreter:</strong> a dedicated patient coordinator and, in non-English destinations, a bilingual interpreter</li>
              <li><strong>Aftercare items:</strong> prescribed medications, dressings, compression garments, and recovery instructions</li>
              <li><strong>Sometimes flights:</strong> a minority of premium packages add airfare; most do not (see exclusions)</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">&quot;Full board&quot; vs room-only</h4>
              <p className="text-gray-700">
                A hotel night in the package is often room-only. Meals are included only if the quote
                says &quot;full board&quot; or &quot;all meals.&quot; For a recovery stay where you may
                not want to leave the hotel, that distinction matters &mdash; confirm whether food is in
                the price or a daily add-on.
              </p>
            </div>

            <h2 id="not-included" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Is NOT Included (The Hidden Costs)</h2>

            <p className="text-gray-700 mb-4">
              This is the section that decides whether a package is actually a deal. &quot;All-inclusive&quot;
              is a marketing term, not a guarantee &mdash; the following are commonly excluded even from
              packages that use that label:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>International flights:</strong> almost always your responsibility, because airfare varies by departure city and changes daily</li>
              <li><strong>Complications &amp; travel insurance:</strong> standard travel insurance generally excludes planned medical treatment; complications coverage is a separate, optional purchase</li>
              <li><strong>Visa fees, meals (unless &quot;full board&quot;), and personal expenses:</strong> shopping, sightseeing, and souvenirs are not in the bundle</li>
              <li><strong>A companion&apos;s costs:</strong> the price is for the patient; a partner&apos;s flights, food, and activities are extra</li>
              <li><strong>Extended stays:</strong> hotel nights beyond the included number, if recovery runs long</li>
              <li><strong>Treatment for unforeseen complications:</strong> revision surgery, extra hospital time, or infection treatment may not be covered</li>
              <li><strong>Long-term follow-up at home:</strong> care after you return is managed (and paid for) by your home-country doctors</li>
              <li><strong>Sometimes the &quot;basics&quot;:</strong> low quotes occasionally exclude operating-room time, overnight stays, blood tests, or X-rays &mdash; ask explicitly</li>
            </ul>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-red-900 mb-2">Budget 30-50% on top of the package</h4>
              <p className="text-gray-700">
                Industry guidance commonly suggests planning for an extra <strong>30-50% over the
                package price</strong> to cover flights, meals, extended stays, insurance, and
                incidentals. And the tail risk is real: published reporting puts the cost of treating
                serious medical-tourism complications back home in the range of roughly $26,000 to
                $154,000 &mdash; the case for buying dedicated complications coverage. Treat all of
                these as estimates to confirm for your specific trip.
              </p>
            </div>

            <h2 id="prices" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Medical Treatment Abroad Prices by Procedure</h2>

            <p className="text-gray-700 mb-4">
              The figures below are <strong>estimates drawn from published 2026 destination pricing
              guides</strong>, framed as ranges to set expectations &mdash; not live quotes. They show
              the typical all-inclusive package price abroad against a US self-pay reference. Savings of
              50-80% are common for elective work, but the package price is not the all-in price (see
              the hidden-cost note above). Confirm the current, itemized number with the clinic or
              operator before you commit.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Procedure</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Destination (typical)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Package estimate abroad</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">US self-pay reference</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Hair transplant (FUE/DHI)</td>
                    <td className="border border-gray-300 px-4 py-3">Turkey (Istanbul)</td>
                    <td className="border border-gray-300 px-4 py-3">~€1,450 - €5,000</td>
                    <td className="border border-gray-300 px-4 py-3">Often $8,000+</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Gastric sleeve (bariatric)</td>
                    <td className="border border-gray-300 px-4 py-3">Mexico</td>
                    <td className="border border-gray-300 px-4 py-3">~$4,000 - $7,000</td>
                    <td className="border border-gray-300 px-4 py-3">~$10,000 - $25,000+</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Full-arch implants (All-on-4)</td>
                    <td className="border border-gray-300 px-4 py-3">Mexico</td>
                    <td className="border border-gray-300 px-4 py-3">~$9,000 - $15,000</td>
                    <td className="border border-gray-300 px-4 py-3">~$25,000 - $35,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Breast augmentation</td>
                    <td className="border border-gray-300 px-4 py-3">Thailand</td>
                    <td className="border border-gray-300 px-4 py-3">~$3,200</td>
                    <td className="border border-gray-300 px-4 py-3">~$8,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">All-inclusive plastic surgery (range)</td>
                    <td className="border border-gray-300 px-4 py-3">Turkey</td>
                    <td className="border border-gray-300 px-4 py-3">~$1,500 - $15,000+</td>
                    <td className="border border-gray-300 px-4 py-3">Varies by procedure</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              For a destination-by-procedure deep dive, our planners go further: the
              {' '}<Link href="/guides/mexico-medical-tourism-planner" className="text-blue-600 hover:underline">Mexico medical tourism trip planner</Link>{' '}
              covers border-town vs resort-city logistics, and the
              {' '}<Link href="/guides/turkey-vs-mexico-medical-tourism" className="text-blue-600 hover:underline">Turkey vs Mexico comparison</Link>{' '}
              weighs the two biggest destinations head to head.
            </p>

            <h2 id="turkey" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Turkey Package Prices (The Most Bundled Market)</h2>

            <p className="text-gray-700 mb-4">
              Turkey searches like <em>medical tourism Turkey prices</em> are common because Turkey
              runs the most package-driven model of any major destination. Istanbul clinics compete
              almost entirely on bundled offers rather than bare surgical fees, especially for hair
              transplants and cosmetic surgery.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Hair transplant packages:</strong> commonly advertised from about <strong>€1,450 up to €5,000</strong>, typically bundling the FUE or DHI procedure, 2-3 nights in a 4-5 star hotel, VIP airport transfers, an in-clinic interpreter, an aftercare kit, and follow-up support (estimates that move with the lira and clinic tier)</li>
              <li><strong>All-inclusive plastic surgery:</strong> broader cosmetic packages span roughly <strong>$1,500 to $15,000+</strong> depending on the operation, generally covering surgical fees, 4-5 star accommodation, VIP transfers, 24/7 care, translators, and post-op garments</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Because Turkey&apos;s prices are quoted as packages and shift with currency, the headline
              number you see in an ad is a starting estimate. Request a current itemized quote, and
              confirm what graft count, hotel tier, or revision policy the price assumes. For the
              procedure-level detail, see our dedicated
              {' '}<Link href="/guides/hair-transplant-turkey-cost" className="text-blue-600 hover:underline">Turkey hair transplant cost guide</Link>.
            </p>

            <h2 id="vet" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Vet a Package Operator vs Booking Direct</h2>

            <p className="text-gray-700 mb-4">
              You can buy a package two ways: through a facilitator/operator who coordinates everything,
              or directly with the hospital. Neither is automatically better &mdash; the right choice
              depends on your experience and the procedure.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Factor</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Package operator / facilitator</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Booking direct with the hospital</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Best for</td>
                    <td className="border border-gray-300 px-4 py-3">First-time travelers, complex cases, unfamiliar destinations</td>
                    <td className="border border-gray-300 px-4 py-3">Experienced travelers who can manage logistics</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Coordination</td>
                    <td className="border border-gray-300 px-4 py-3">Handles travel, translation, scheduling end to end</td>
                    <td className="border border-gray-300 px-4 py-3">You arrange flights, hotel, transfers yourself</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Cost</td>
                    <td className="border border-gray-300 px-4 py-3">May add a markup over direct pricing</td>
                    <td className="border border-gray-300 px-4 py-3">Often the most competitive base price</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Regulation</td>
                    <td className="border border-gray-300 px-4 py-3">Facilitation is largely unregulated; look for GHA / MTA certification</td>
                    <td className="border border-gray-300 px-4 py-3">Verify hospital accreditation (e.g. JCI) directly</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">A vetting checklist for either route</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Verify hospital accreditation yourself</strong> &mdash; the CDC names Joint Commission International (JCI), DNV GL, and ISQua as recognized standards; confirm it on the accreditor&apos;s own site, not just the operator&apos;s</li>
              <li><strong>Check the surgeon&apos;s credentials</strong> &mdash; board certification and who is actually performing the procedure (not just the clinic name)</li>
              <li><strong>Demand an itemized cost breakdown</strong> &mdash; hospital, surgeon, accommodation, transfers, and any facilitator fee, so you can compare package vs direct</li>
              <li><strong>For facilitators, look for certification</strong> &mdash; Global Healthcare Accreditation (GHA) Medical Travel Facilitator Certification or Medical Tourism Association membership; resistance to sharing accreditation or surgeon CVs is a red flag</li>
              <li><strong>Ask about complications and follow-up</strong> &mdash; what the revision policy is, whether complications are covered, and who manages care once you are home</li>
              <li><strong>Plan communication</strong> &mdash; the CDC advises deciding in advance how you will communicate with your clinician in a non-English destination</li>
            </ol>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">The regulation gap</h4>
              <p className="text-gray-700">
                Medical-travel facilitation is largely unregulated &mdash; nearly anyone can build a
                polished website and sell &quot;packages.&quot; That is exactly why you verify
                accreditation and surgeon credentials independently, rather than trusting the operator&apos;s
                own marketing. Certification programs (GHA, MTA) exist precisely because the field has
                no licensing floor.
              </p>
            </div>

            <h2 id="safety" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Safety: What the CDC Actually Found</h2>

            <p className="text-gray-700 mb-4">
              A 2026 CDC review of consultations from 2014-2024 identified <strong>21 reports involving
              roughly 145 patients</strong> with adverse outcomes after traveling for cosmetic
              procedures. Postsurgical infections appeared in 20 consultations, including 12 cases of
              suspected or confirmed <strong>nontuberculous mycobacteria</strong> infections; four
              consultations involved patient deaths. Investigators found gaps in environmental
              cleaning, PPE use, hand hygiene, and surgical-equipment reprocessing at some facilities.
            </p>

            <p className="text-gray-700 mb-4">
              The CDC&apos;s own framing matters here: <strong>accreditation does not guarantee a
              positive outcome</strong>, and patients should fully understand the risks and consult their
              own healthcare professional before traveling. None of this means medical tourism is
              unsafe &mdash; it means a low package price is never the metric to optimize. Optimize for
              an accredited facility and a credentialed surgeon first; price the bundle second.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">The honest bottom line</h4>
              <p className="text-gray-700">
                An all-inclusive package is a logistics convenience that can genuinely save 50-80% on
                elective care &mdash; but only after you (1) get the bundle itemized, (2) budget 30-50%
                on top for what it excludes, (3) verify accreditation and the surgeon yourself, and (4)
                buy dedicated complications coverage. Do those four things and the package works for
                you; skip them and the headline number is just bait.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Related guides</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Insurance:</strong> the package excludes complications coverage &mdash; our <Link href="/guides/medical-travel-insurance-guide" className="text-blue-600 hover:underline">medical travel insurance guide</Link> covers what you actually need</li>
              <li><strong>Trip logistics:</strong> the <Link href="/guides/mexico-medical-tourism-planner" className="text-blue-600 hover:underline">Mexico medical tourism trip planner</Link> handles border crossing, city choice, and timeline</li>
              <li><strong>Destination overview:</strong> the <Link href="/destinations/mexico" className="text-blue-600 hover:underline">Mexico destination guide</Link> lists procedures, cost comparisons, and hubs</li>
              <li><strong>Country comparison:</strong> <Link href="/guides/turkey-vs-mexico-medical-tourism" className="text-blue-600 hover:underline">Turkey vs Mexico</Link> for choosing between the two biggest markets</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Medical Tourism Destinations &amp; Providers</h3>
            <p className="mb-6 text-blue-100">
              Browse accredited destinations, procedures, and provider listings with transparent,
              estimate-based pricing &mdash; so you can price a package against booking direct.
            </p>
            <Link
              href="/medical-tourism"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Explore Medical Tourism
            </Link>
          </div>

          {/* FAQ — visible block mirrors the FAQPage schema above exactly */}
          <section id="faq" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div>
              {FAQ_ITEMS.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </section>
        </article>

        {/* Shared YMYL medical + affiliate disclosure */}
        <MedicalDisclaimer />

        <article className="mx-auto max-w-4xl px-4 pb-12">
          {/* Sources */}
          <div className="mt-4 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• CDC — Medical Tourism, Travelers&apos; Health (vetting, accreditation, risks): wwwnc.cdc.gov/travel/page/medical-tourism</li>
              <li>• CDC — Adverse Outcomes Linked to Travel-Related Cosmetic Procedures, 2026 (21 reports / ~145 patients, 2014-2024): cdc.gov/media/releases/2026</li>
              <li>• PlacidWay — What Is Typically Included in Medical Tourism Packages (inclusions and exclusions)</li>
              <li>• Medical Tourism Association — What Is a Medical Tourism Facilitator (facilitator vs direct, regulation)</li>
              <li>• Global Healthcare Accreditation — Medical Travel Facilitator Certification</li>
              <li>• Published 2026 destination pricing guides (Turkey, Mexico, Thailand package price ranges — estimates)</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Medical Tourism Package Checklist"
            description="The itemized inclusion-vs-exclusion list to vet any package and price it against booking direct."
            source="guide_medical_tourism_packages"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
