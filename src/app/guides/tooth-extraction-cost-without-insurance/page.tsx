import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Tooth Extraction Cost Without Insurance (2026): Prices' },
  alternates: { canonical: 'https://vitalityscout.com/guides/tooth-extraction-cost-without-insurance' },
  description: 'Tooth extraction cost without insurance in 2026 — simple vs surgical vs wisdom teeth prices, sedation add-ons, $131 dental school visits, and savings plans.',
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a tooth extraction cost without insurance?',
    answer: 'A simple extraction of a visible (erupted) tooth commonly runs $75-$250 cash — CareCredit\'s 2024 cost study puts the national average at $177, and Aspen Dental publishes an average around $179 per tooth (range roughly $104-$279). Surgical extractions — broken or impacted teeth requiring bone removal or sectioning — typically run $225-$600 per tooth. Quoted prices usually include local anesthesia but not sedation. These are estimates that vary by market and complexity; get a written per-tooth quote after the exam.',
  },
  {
    question: 'How much does wisdom teeth removal cost without insurance?',
    answer: 'Per tooth, published estimates run from about $75-$200 for an erupted wisdom tooth to $225-$700 for an impacted one — CareCredit\'s study averages $363 per impacted tooth, with soft-tissue impactions around $350 and full bony impactions around $550. Removing all four with sedation averaged about $2,685, with an overall range of roughly $1,200-$4,175. Regional flat-fee programs advertise all-four packages around $1,500-$1,875 including IV sedation. Impaction depth drives the price — the panoramic X-ray determines your actual quote.',
  },
  {
    question: 'How much does sedation add to an extraction?',
    answer: 'Local anesthesia (numbing) is typically included in the quoted extraction fee. Beyond that, published estimates put sedation at roughly $100-$500 depending on depth, often billed by time — around $50-$200 per increment, with general anesthesia the most expensive at roughly $250 per 15 minutes. In CareCredit\'s all-four wisdom teeth data, sedation averaged $349 total. Choosing local anesthesia only, when the surgeon agrees it\'s appropriate for your case, is one of the biggest single savings available.',
  },
  {
    question: 'Can the ER pull a tooth if I don\'t have insurance?',
    answer: 'No. Emergency room physicians generally cannot extract teeth — they can manage pain, prescribe antibiotics, and drain an abscess, but the tooth problem remains. The ADA reports the average ER dental visit costs about $749 (versus roughly $90-$200 at a dentist), and around 40% of patients return because the underlying cause wasn\'t treated. The ER is right for spreading facial swelling, trouble breathing or swallowing, uncontrolled bleeding, or a suspected jaw fracture. For the tooth itself, an urgent dental appointment or dental school clinic is both cheaper and actually curative.',
  },
  {
    question: 'What is the cheapest way to get a tooth pulled without insurance?',
    answer: 'Verified budget routes: dental school clinics — Texas A&M\'s urgent care clinic in Dallas publishes a $131 flat fee covering the exam, X-ray, and first extraction ($43 for an additional same-side tooth); dental savings plans — the Careington Care 500 plan (roughly $99/year) lists an erupted-tooth extraction around $80 on its fee schedule, and DentalPlans.com reports members save around 64-72% on extractions; and regional flat-fee wisdom teeth programs around $1,500 for all four with sedation. Verify current fees directly — school clinics have waitlists and savings-plan fees vary by ZIP code.',
  },
  {
    question: 'Is a tooth extraction HSA or FSA eligible, and can I finance it?',
    answer: 'Yes on both. Extractions treat a dental condition, making them qualified expenses payable with HSA, FSA, HRA, or limited-purpose FSA funds — keep the itemized receipt. Financing through healthcare credit products like CareCredit is widely accepted at dental offices, but read the deferred-interest terms carefully: promotional 0% periods can trigger retroactive interest on the full balance if not paid off in time. A dental savings plan plus HSA dollars is often the cheaper combination.',
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

export default function ToothExtractionCostWithoutInsurance() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Tooth Extraction Cost Without Insurance: Cash-Pay Price Guide',
    description:
      'What a tooth extraction costs without insurance in 2026 — simple vs surgical vs wisdom teeth pricing, sedation add-ons, dental school flat fees, savings plans, and why the ER can\'t help.',
    url: 'https://vitalityscout.com/guides/tooth-extraction-cost-without-insurance',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/tooth-extraction-cost-without-insurance#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalProcedure', name: 'Tooth extraction' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-07-31',
    dateModified: '2026-07-31',
    citation: [
      { '@type': 'CreativeWork', name: 'CareCredit — tooth extraction and wisdom teeth removal cost studies', url: 'https://www.carecredit.com/well-u/health-wellness/tooth-extraction-cost-financing/' },
      { '@type': 'CreativeWork', name: 'Aspen Dental — published tooth extraction cost page', url: 'https://www.aspendental.com/dental-services/oral-surgery/tooth-extraction/tooth-extraction-cost/' },
      { '@type': 'CreativeWork', name: 'ADA — emergency department referrals for dental pain (Action for Dental Health)', url: 'https://www.ada.org/resources/community-initiatives/action-for-dental-health/emergency-department-referrals' },
      { '@type': 'CreativeWork', name: 'Texas A&M College of Dentistry — urgent care clinic flat fees', url: 'https://dentistry.tamu.edu/patient-care/urgent-care-clinic.html' },
      { '@type': 'CreativeWork', name: 'GoodRx — wisdom teeth removal cost and sedation fees', url: 'https://www.goodrx.com/conditions/dental-care/wisdom-teeth-removal-cost' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/tooth-extraction-cost-without-insurance#faq', url: 'https://vitalityscout.com/guides/tooth-extraction-cost-without-insurance' };

  return (
    <>
      <Navigation />
      <SidebarShell>
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
              <span className="text-gray-900">Tooth Extraction Cost Without Insurance</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/dental" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Cash-Pay Dental Directory
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Dental
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Tooth Extraction Cost Without Insurance: Simple, Surgical &amp; Wisdom Teeth
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              A visible tooth might cost $150 to pull. Four impacted wisdom teeth with IV sedation
              can quote at $4,000. Here is what drives that spread, what real providers publish,
              and the $131 route most people don&apos;t know exists.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                Without insurance, a simple extraction typically costs <strong>$75-$250</strong>{' '}
                (national average ~<strong>$177</strong>; Aspen Dental publishes ~
                <strong>$179</strong>), a surgical extraction <strong>$225-$600</strong>, and an
                impacted wisdom tooth averages <strong>$363</strong> per tooth. All four wisdom
                teeth with sedation average about <strong>$2,685</strong> ($1,200-$4,175), while
                dental school clinics publish extractions from <strong>$131</strong>. Estimates to
                verify after an exam. This is information, not dental advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: July 2026 • 11 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#by-type" className="text-blue-600 hover:underline">1. Extraction cost by type</a></li>
              <li><a href="#wisdom" className="text-blue-600 hover:underline">2. Wisdom teeth: the all-four math</a></li>
              <li><a href="#sedation" className="text-blue-600 hover:underline">3. What sedation adds</a></li>
              <li><a href="#providers" className="text-blue-600 hover:underline">4. Published prices: chains, schools, flat-fee programs</a></li>
              <li><a href="#savings-plans" className="text-blue-600 hover:underline">5. Savings plans and financing</a></li>
              <li><a href="#er" className="text-blue-600 hover:underline">6. Why the ER can&apos;t fix a tooth</a></li>
              <li><a href="#save" className="text-blue-600 hover:underline">7. How to pay the least</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Extractions are where uninsured dental costs get real: unlike a skippable cleaning, a
              failing tooth forces the purchase, often on a deadline of pain. The price depends
              almost entirely on two questions — is the tooth visible or impacted, and will you be
              sedated? Answer those, and the wild-looking quotes sort themselves into a fairly
              predictable menu.
            </p>

            <h2 id="by-type" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Extraction Cost by Type</h2>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Extraction type</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical cash price per tooth (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Simple (erupted tooth)</td>
                    <td className="border border-gray-300 px-4 py-3">~$75 - $250 (avg ~$177)</td>
                    <td className="border border-gray-300 px-4 py-3">Local anesthesia included; visible tooth, no cutting</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Surgical (broken / requires bone removal)</td>
                    <td className="border border-gray-300 px-4 py-3">~$225 - $600</td>
                    <td className="border border-gray-300 px-4 py-3">Sectioning or bone removal; Humana lists ~$325 benchmark</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Wisdom tooth, erupted</td>
                    <td className="border border-gray-300 px-4 py-3">~$75 - $300</td>
                    <td className="border border-gray-300 px-4 py-3">Priced like a simple/surgical extraction</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Wisdom tooth, soft-tissue impaction</td>
                    <td className="border border-gray-300 px-4 py-3">~$350 average</td>
                    <td className="border border-gray-300 px-4 py-3">Gum covers the tooth</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Wisdom tooth, bony impaction</td>
                    <td className="border border-gray-300 px-4 py-3">~$550 average (range to ~$700)</td>
                    <td className="border border-gray-300 px-4 py-3">Tooth in bone; the most surgical case</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              The quoted fee typically includes <strong>local anesthesia only</strong>. X-rays and
              the exam are usually separate line items unless bundled into a new-patient special —
              our <Link href="/guides/dental-cleaning-cost-without-insurance" className="text-blue-600 hover:underline">dental cleaning cost guide</Link>{' '}
              covers those bundles.
            </p>

            <h2 id="wisdom" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Wisdom Teeth: The All-Four Math</h2>

            <p className="text-gray-700 mb-4">
              CareCredit&apos;s 2024 cost research puts an impacted wisdom tooth at an average of{' '}
              <strong>$363 per tooth</strong> (range $281-$702), and removing{' '}
              <strong>all four with sedation at an average of $2,685</strong>, with an overall
              range of roughly <strong>$1,200-$4,175</strong>. The arithmetic of the low end: four
              uncomplicated surgical extractions (~$363 each) plus average sedation (~$349) lands
              near <strong>$1,800</strong>.
            </p>

            <p className="text-gray-700 mb-4">
              Below the national averages sits a flat-fee tier worth knowing about: regional
              wisdom-teeth-focused practices publish all-inclusive packages — examples include{' '}
              <strong>$1,500 for all four with IV sedation</strong> (Best Dental, Houston area) and{' '}
              <strong>$1,875 all-inclusive</strong> (Story City Dental, Iowa). These are
              single-practice prices, not national benchmarks, but they show what the procedure can
              cost when a practice specializes in it.
            </p>

            <h2 id="sedation" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Sedation Adds</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Local anesthesia:</strong> included in the extraction fee. You&apos;re numb, awake, and it&apos;s the cheapest path.</li>
              <li><strong>Sedation (nitrous, oral, or IV):</strong> adds roughly <strong>$100-$500</strong> depending on depth, often billed by time (~$50-$200 per increment). CareCredit&apos;s all-four data averaged <strong>$349</strong> for sedation.</li>
              <li><strong>General anesthesia:</strong> the most expensive tier — published estimates around <strong>$250 per 15 minutes</strong>, delivered by residency-trained providers.</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>The honest cost conversation:</strong> for straightforward extractions,
                asking the surgeon &quot;is local anesthesia clinically reasonable for my
                case?&quot; can remove $300-$500 from the bill. For deep bony impactions, sedation
                is often the right call — this is a clinical decision to make with the surgeon,
                not a line item to strip automatically.
              </p>
            </div>

            <h2 id="providers" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Published Prices: Chains, Schools, Flat-Fee Programs</h2>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Provider</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Published price (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Aspen Dental</td>
                    <td className="border border-gray-300 px-4 py-3">Simple avg $179 ($104-$279); complex/wisdom $184-$488</td>
                    <td className="border border-gray-300 px-4 py-3">Self-reported 2026 internal data; varies by office</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Texas A&amp;M College of Dentistry (Dallas)</td>
                    <td className="border border-gray-300 px-4 py-3">$131 flat: exam + X-ray + first extraction (+$43 same-side tooth)</td>
                    <td className="border border-gray-300 px-4 py-3">Urgent care clinic; does not remove wisdom teeth</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Dental schools generally (e.g., NYU OMS clinic)</td>
                    <td className="border border-gray-300 px-4 py-3">Tiered student/resident clinics below private-practice fees</td>
                    <td className="border border-gray-300 px-4 py-3">Evaluation visit first; longer timelines</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Regional flat-fee wisdom teeth programs</td>
                    <td className="border border-gray-300 px-4 py-3">~$1,500-$1,875 all four incl. IV sedation</td>
                    <td className="border border-gray-300 px-4 py-3">Single-practice examples (TX, IA); ask what&apos;s included</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="savings-plans" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Savings Plans and Financing</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Careington Care 500 (~$99/year):</strong> its published fee schedule lists an erupted-tooth extraction around <strong>$80</strong>, and the plan takes 20% off oral surgeon specialist fees. Fee schedules vary by ZIP — check yours before buying.</li>
              <li><strong>DentalPlans.com marketplace:</strong> reports member savings around <strong>72% on basic and 64% on surgical extractions</strong> versus regular fees, with no annual caps.</li>
              <li><strong>Aspen Dental&apos;s $49/year plan — read the fine print:</strong> its discounts do <strong>not</strong> apply to specialist services, including oral surgery. Useful for the exam and simple work; not for a referral to an oral surgeon.</li>
              <li><strong>Financing (CareCredit and similar):</strong> widely accepted, with promotional 0% periods — but deferred-interest terms can apply the full accrued interest retroactively if the balance isn&apos;t cleared in time. Pair a savings plan with HSA/FSA dollars first; extractions are qualified medical expenses.</li>
            </ul>

            <h2 id="er" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why the ER Can&apos;t Fix a Tooth</h2>

            <p className="text-gray-700 mb-4">
              More than 2 million ER visits a year are for dental pain, per the ADA — and the ER
              cannot pull the tooth. Emergency physicians can prescribe antibiotics and pain
              relief and drain an abscess, but the average ER dental visit costs about{' '}
              <strong>$749</strong> (vs roughly <strong>$90-$200</strong> at a dentist) and around{' '}
              <strong>40% of patients return</strong> because the cause was never treated. Go to
              the ER for spreading facial swelling, difficulty breathing or swallowing,
              uncontrolled bleeding, or a suspected jaw fracture. For the tooth itself, an urgent
              dental appointment, a dental school clinic, or a cash-pay dentist from our{' '}
              <Link href="/dental" className="text-blue-600 hover:underline">dental directory</Link>{' '}
              is both cheaper and curative.
            </p>

            <h2 id="save" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Pay the Least for an Extraction</h2>

            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Get the diagnosis cheap.</strong> A new-patient exam special or dental school visit produces the X-ray and treatment plan you&apos;ll price everything against.</li>
              <li><strong>Ask for the per-tooth, per-complexity quote in writing</strong> — simple vs surgical vs impaction level, with anesthesia spelled out.</li>
              <li><strong>Price a dental school if your timeline allows.</strong> Flat fees like Texas A&amp;M&apos;s $131 are the verified floor for non-wisdom extractions.</li>
              <li><strong>For wisdom teeth, get a flat-fee program quote</strong> as your benchmark before accepting an oral surgeon&apos;s unbundled estimate.</li>
              <li><strong>Discuss local-only anesthesia</strong> where clinically reasonable.</li>
              <li><strong>Apply a savings plan that covers oral surgery</strong> (verify specialist coverage — plans differ exactly here).</li>
              <li><strong>Pay with HSA/FSA funds</strong>, and treat deferred-interest financing as a last resort with a payoff plan.</li>
              <li><strong>Replacing the tooth after?</strong> Our <Link href="/guides/dental-implant-cost-usa" className="text-blue-600 hover:underline">dental implant cost guide</Link> and <Link href="/guides/mexico-dental-guide" className="text-blue-600 hover:underline">Mexico dental guide</Link> cover the cash-pay math for what comes next.</li>
            </ol>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Cash-Pay Dental Options</h3>
            <p className="mb-6 text-blue-100">
              Extractions, implants, and full-mouth work — US and abroad, with real prices compared.
            </p>
            <Link
              href="/dental"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse Dental Options
            </Link>
          </div>

          {/* FAQ — visible block mirrors the FAQPage schema above exactly */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div>
              {FAQ_ITEMS.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </section>

          {/* Disclaimer */}
          <div className="mt-12 rounded-lg bg-gray-100 p-6">
            <h3 className="font-semibold text-gray-800 mb-2">Medical &amp; Pricing Disclaimer</h3>
            <p className="text-sm text-gray-600">
              This guide is for general informational purposes only and is not dental or medical
              advice. We are not affiliated with Aspen Dental, CareCredit, Careington, or the
              schools and practices named above. Pricing is based on publicly available data and
              provider websites and is presented as estimates that vary by market, office, tooth
              condition, and anesthesia choices — always verify the current price with the provider
              after an examination. Whether and how a tooth should be extracted, and the appropriate
              anesthesia, are clinical decisions for a licensed dentist or oral surgeon. Seek
              emergency care immediately for spreading facial swelling, difficulty breathing or
              swallowing, uncontrolled bleeding, or suspected jaw fracture. VitalityScout may earn a
              commission from some links, at no additional cost to you, and this never affects how
              we describe a provider.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• CareCredit 2024 cost studies — carecredit.com (extraction, impacted wisdom teeth, all-four averages)</li>
              <li>• Aspen Dental — aspendental.com (published extraction and wisdom teeth pricing pages)</li>
              <li>• Humana — humana.com (procedure pricing tool benchmarks)</li>
              <li>• NewMouth / Authority Dental — extraction and impaction price ranges; dental school directory</li>
              <li>• GoodRx — goodrx.com (sedation fees; ER vs dentist guidance)</li>
              <li>• ADA Action for Dental Health — ada.org (ER dental visit costs and return rates)</li>
              <li>• Texas A&amp;M College of Dentistry — dentistry.tamu.edu (published urgent-care flat fees)</li>
              <li>• NYU College of Dentistry — dental.nyu.edu (oral surgery clinic structure)</li>
              <li>• Careington / DentalPlans.com — savings plan fee schedules and reported savings</li>
              <li>• Regional flat-fee programs — richmondtxdentists.com, storycitydental.com (published package prices)</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Cash-Pay Dental Price Guide"
            description="Extraction, implant, and crown benchmarks — and when a dental school or savings plan beats the quote."
            source="guide_tooth_extraction_cost_without_insurance"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
