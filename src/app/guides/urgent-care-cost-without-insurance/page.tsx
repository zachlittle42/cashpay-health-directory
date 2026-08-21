import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Urgent Care Cost Without Insurance (2026): $120-$350 Visits' },
  alternates: { canonical: 'https://vitalityscout.com/guides/urgent-care-cost-without-insurance' },
  description:
    'Urgent care cost without insurance in 2026: chains publish self-pay visits from about $120 to $350, and x-rays, labs and stitches are billed separately.',
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does urgent care cost without insurance?',
    answer:
      'At the chains that publish self-pay rates, a visit runs roughly $120 to $350 depending on what happens during it. GoHealth Urgent Care posts $120-$160 in New York and $200-$235 in Virginia for a clinical exam with one instant lab test, rising to $275-$350 for an exam with a procedure like wound repair or splinting. AFC Urgent Care Roxborough posts a $140 simple visit; AFC West University posts tiered visits at $169, $199 and $249. Solv puts the typical self-pay visit at $150-$280. All of these are published estimates that vary by location and by what you actually need — confirm the price with the specific clinic before you are seen.',
  },
  {
    question: 'What does the base urgent care price actually include?',
    answer:
      'Usually the clinician evaluation and little else. GoHealth defines its lowest tier as an in-center clinical exam with one instant lab test, and prices an x-ray, a medication administration, or a procedure as higher tiers. AFC West University bundles by the number of in-house lab tests — one, two, or three — and states that additional charges may apply for medications and injectables. Both chains warn that outside labs bill you separately. Treat the advertised number as the floor for a simple visit, not the total.',
  },
  {
    question: 'How much do x-rays, labs and stitches add to an urgent care bill?',
    answer:
      'They are priced separately and they are what turns a $150 visit into a $400 one. AFC Urgent Care Roxborough publishes x-rays at $75 for up to two views, a complete blood count at $70, a metabolic panel at $60, an ECG at $75, laceration repairs at $75-$190, and abscess drainage at $55-$190. Solv estimates an x-ray add-on at $100-$250, a rapid strep, flu or COVID test at $25-$75, and a minor laceration repair at $150-$250, with a visit plus x-ray landing at $250-$500. Ask for the itemized price of each add-on before it is performed.',
  },
  {
    question: 'Is urgent care really cheaper than the emergency room?',
    answer:
      'By a wide margin for conditions that do not need emergency care. UnitedHealth Group analyzed ten common primary-care-treatable conditions and found an average cost of $2,032 at a hospital emergency department versus $193 at an urgent care center — ten times higher — and $167 at a physician office. That analysis reflects 2018 costs for privately insured patients, not 2026 self-pay prices, but the shape of the gap holds. Solv estimates an uninsured ER visit for common conditions at $1,000-$2,500. Cost is never the reason to avoid the ER in a real emergency.',
  },
  {
    question: 'Is a virtual visit cheaper than going in?',
    answer:
      'Often, but not automatically, and it depends on the market. GoHealth prices a virtual visit at $75 in New York and Houston, well below its $120-$215 in-center exam in those markets. In Virginia the same chain prices a virtual visit at $200, essentially level with its $200-$235 in-center exam. Telehealth also cannot do what needs hands or a machine — an x-ray, stitches, or an in-person exam. Check your specific market before assuming virtual is the cheaper door.',
  },
  {
    question: 'Can I get a discount for paying cash at urgent care?',
    answer:
      'Frequently, yes, but you usually have to ask. Solv reports that most urgent care centers offer 10-30% self-pay or cash-pay discounts to patients who pay at the time of service, and notes these discounts are often not advertised. The chains that publish self-pay rates already price them for payment in full at the visit. Ask for the self-pay or prompt-pay rate before you register, and ask whether it is cheaper than running your insurance if you have an unmet deductible.',
  },
  {
    question: 'Can I use HSA or FSA funds at urgent care?',
    answer:
      'Generally yes. An urgent care visit is a qualified medical expense, so HSA and FSA funds typically cover it. CVS MinuteClinic, for example, states it accepts cash, checks, credit and debit cards, and FSA and HSA cards for the services on its published price list. Paying with pre-tax dollars effectively discounts the visit by your tax rate. Confirm eligibility with your plan administrator and keep the itemized receipt.',
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

export default function UrgentCareCostWithoutInsurance() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Urgent Care Cost Without Insurance: Self-Pay Visit Prices Explained',
    description:
      'What urgent care costs without insurance in 2026 — published self-pay visit prices from GoHealth, AFC and MinuteClinic, how x-rays and labs are billed separately, and how urgent care compares to the ER and telehealth.',
    url: 'https://vitalityscout.com/guides/urgent-care-cost-without-insurance',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/urgent-care-cost-without-insurance#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalBusiness', name: 'Urgent care center' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-08-21',
    dateModified: '2026-08-21',
    citation: [
      { '@type': 'CreativeWork', name: 'Northwell Health-GoHealth Urgent Care — published uninsured self-pay pricing (New York)', url: 'https://www.gohealthuc.com/northwell/insurance-and-pricing' },
      { '@type': 'CreativeWork', name: 'Memorial Hermann-GoHealth Urgent Care — published uninsured self-pay pricing (Houston)', url: 'https://www.gohealthuc.com/memorialhermann/insurance-and-pricing' },
      { '@type': 'CreativeWork', name: 'Inova-GoHealth Urgent Care — published uninsured self-pay pricing (Virginia)', url: 'https://www.gohealthuc.com/inova/insurance-and-pricing' },
      { '@type': 'CreativeWork', name: 'AFC Urgent Care Roxborough — no-insurance self-pay price list', url: 'https://www.afcurgentcare.com/roxborough/resources/no-insurance-self-pay-pricing/' },
      { '@type': 'CreativeWork', name: 'AFC Urgent Care West University — tiered self-pay pricing', url: 'https://www.afcurgentcare.com/west-university/resources/self-pay-pricing/' },
      { '@type': 'CreativeWork', name: 'CVS MinuteClinic — published service price lists', url: 'https://www.cvs.com/minuteclinic/services/price-lists' },
      { '@type': 'CreativeWork', name: 'CityMD — payment and uninsured rates', url: 'https://www.citymd.com/payment' },
      { '@type': 'CreativeWork', name: 'Solv Health — how much urgent care costs without insurance (updated June 2026)', url: 'https://www.solvhealth.com/health/how-much-does-urgent-care-cost-without-insurance' },
      { '@type': 'CreativeWork', name: 'UnitedHealth Group — 18 Million Avoidable Hospital Emergency Department Visits (July 2019)', url: 'https://www.unitedhealthgroup.com/content/dam/UHG/PDF/2019/UHG-Avoidable-ED-Visits.pdf' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/urgent-care-cost-without-insurance#faq', url: 'https://vitalityscout.com/guides/urgent-care-cost-without-insurance' };

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
              <span className="text-gray-900">Urgent Care Cost Without Insurance</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/traditional-healthcare" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Traditional Healthcare Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Cost Guide
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Urgent Care Cost Without Insurance: Visit Prices Explained
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              The advertised price is the exam. The bill is the exam plus everything else. Here is
              what the big chains actually publish for self-pay patients, what gets added on top,
              and how to keep the number down.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                Without insurance, urgent care chains that publish self-pay rates charge roughly{' '}
                <strong>$120 to $350</strong> per visit. <strong>GoHealth</strong> posts{' '}
                <strong>$120-$160</strong> (New York) to <strong>$200-$235</strong> (Virginia) for an
                exam with one instant lab test, and <strong>$275-$350</strong> with a procedure.{' '}
                <strong>AFC Roxborough</strong> posts a <strong>$140</strong> simple visit. X-rays,
                labs and stitches bill separately. These are estimates to verify with the clinic.
                This is information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: August 2026 • 11 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Comparison Box */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Answer</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">A simple self-pay visit</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• ~$120-$250 at chains that publish rates</li>
                  <li>• Covers the clinician exam</li>
                  <li>• Often includes one instant lab test</li>
                  <li>• Paid in full at time of service</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">A visit with add-ons</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• ~$250-$500+ once imaging or a procedure lands</li>
                  <li>• X-ray, labs, stitches priced separately</li>
                  <li>• Outside labs bill you directly</li>
                  <li>• Ask the itemized price before it happens</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">Urgent care fits when:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• The problem is same-day but not dangerous</li>
                  <li>• You need an x-ray, stitches, or a rapid test</li>
                  <li>• Your primary care office cannot see you today</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">Go to the ER instead when:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You have symptoms of a medical emergency</li>
                  <li>• The situation is worsening fast</li>
                  <li>• You are unsure and it feels serious — call 911</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#base-price" className="text-blue-600 hover:underline">1. What a self-pay visit costs at named chains</a></li>
              <li><a href="#add-ons" className="text-blue-600 hover:underline">2. The add-on reality: x-rays, labs, stitches</a></li>
              <li><a href="#vs-er" className="text-blue-600 hover:underline">3. Urgent care vs ER vs telehealth vs retail clinic</a></li>
              <li><a href="#pay-less" className="text-blue-600 hover:underline">4. How to pay less cash</a></li>
              <li><a href="#not-urgent-care" className="text-blue-600 hover:underline">5. When urgent care is the wrong door</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Urgent care is one of the few corners of American healthcare where real prices are
              published before you walk in — but only by some chains, only in some markets, and only
              for the exam itself. The number on the website is almost never the number on the
              receipt. This guide uses the rates those chains publish today, shows exactly where the
              extra money comes from, and gives you the questions that keep the bill near the
              advertised price.
            </p>

            <h2 id="base-price" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What a Self-Pay Visit Costs at Named Chains</h2>

            <p className="text-gray-700 mb-4">
              <strong>GoHealth Urgent Care</strong> publishes the most systematic self-pay pricing in
              the category. It operates through joint ventures with regional health systems, and each
              market posts its own uninsured rates in the same three-tier structure: an exam with one
              instant lab test, an exam with an x-ray or medication administration, and an exam with
              one procedure. The tiers are consistent; the prices are not.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">GoHealth market</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Exam + 1 instant lab</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Exam + x-ray or medication</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Exam + 1 procedure</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Virtual visit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">New York (Northwell)</td>
                    <td className="border border-gray-300 px-4 py-3">$120 - $160</td>
                    <td className="border border-gray-300 px-4 py-3">$225 - $250</td>
                    <td className="border border-gray-300 px-4 py-3">$175 - $325</td>
                    <td className="border border-gray-300 px-4 py-3">$75</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Houston (Memorial Hermann)</td>
                    <td className="border border-gray-300 px-4 py-3">$180 - $215</td>
                    <td className="border border-gray-300 px-4 py-3">$240 - $270</td>
                    <td className="border border-gray-300 px-4 py-3">$250 - $350+</td>
                    <td className="border border-gray-300 px-4 py-3">$75</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Virginia (Inova)</td>
                    <td className="border border-gray-300 px-4 py-3">$200 - $235</td>
                    <td className="border border-gray-300 px-4 py-3">$235 - $275</td>
                    <td className="border border-gray-300 px-4 py-3">$275 - $350</td>
                    <td className="border border-gray-300 px-4 py-3">$200</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              Read the spread, not the average. The identical lowest-tier visit is{' '}
              <strong>$120 in New York and $235 in Virginia</strong> at the same brand. GoHealth
              attaches the same caution to every market: &quot;All pricing ranges are estimates.
              Please note, the cost could increase if there are medical complications or if your
              provider recommends laboratory or other testing from a third party.&quot;
            </p>

            <p className="text-gray-700 mb-4">
              <strong>AFC Urgent Care</strong> is franchised, so pricing is set location by location
              and the structure differs from clinic to clinic. AFC Roxborough in Philadelphia
              publishes a line-item list built around a <strong>$140</strong> simple visit, with a{' '}
              <strong>$75</strong> revisit and a <strong>$75</strong> follow-up for the same complaint
              within seven days. AFC West University in Houston does the opposite and bundles, with
              tiers effective January 1, 2024: <strong>$169</strong> for a visit with one in-house lab
              test, <strong>$199</strong> for two, and <strong>$249</strong> for three. That page
              excludes occupational medicine, workers&apos; compensation, and school or immigration
              physicals from self-pay pricing, and notes that additional charges may apply for
              medications and injectables.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why this matters:</strong> there is no national urgent care price, even inside
                one brand. A chain-level answer is worthless; a location-level page is worth real
                money. Search the exact clinic name plus &quot;self-pay pricing&quot; before you go.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              Not every chain publishes numbers. <strong>CityMD</strong> says only that &quot;we offer
              competitive and affordable uninsured rates&quot; and directs uninsured patients to call
              or stop in. That is a fair policy and a bad shopping experience — if the price is not
              posted, you have to ask for it before you register, not after you are seen.
            </p>

            <p className="text-gray-700 mb-4">
              For a wider view of what cash-pay medicine costs across categories, our{' '}
              <Link href="/price-index" className="text-blue-600 hover:underline">cash-pay price index</Link>{' '}
              tracks the same published-rate approach across services, and the{' '}
              <Link href="/traditional-healthcare" className="text-blue-600 hover:underline">traditional healthcare directory</Link>{' '}
              covers the in-person side of the system.
            </p>

            <h2 id="add-ons" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Add-On Reality: X-Rays, Labs and Stitches</h2>

            <p className="text-gray-700 mb-4">
              This is where the bill actually gets made. The advertised visit price buys the
              clinician&apos;s evaluation. Imaging, bloodwork, wound repair, injections and vaccines
              are separate charges, and the chains that publish itemized lists make that explicit. The
              figures below are AFC Roxborough&apos;s published self-pay prices — a useful reference
              point for what individual add-ons should cost.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Add-on service</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">AFC Roxborough published self-pay price</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Broader estimate (Solv)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">X-ray (up to 2 views)</td>
                    <td className="border border-gray-300 px-4 py-3">$75</td>
                    <td className="border border-gray-300 px-4 py-3">$100 - $250</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Rapid strep / flu / COVID test</td>
                    <td className="border border-gray-300 px-4 py-3">Bundled or per-test</td>
                    <td className="border border-gray-300 px-4 py-3">$25 - $75</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Complete blood count</td>
                    <td className="border border-gray-300 px-4 py-3">$70</td>
                    <td className="border border-gray-300 px-4 py-3">$40 - $150 (draw + basic panel)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Urinalysis / urine culture</td>
                    <td className="border border-gray-300 px-4 py-3">$45 (culture)</td>
                    <td className="border border-gray-300 px-4 py-3">$30 - $60 (urinalysis)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Laceration repair (stitches)</td>
                    <td className="border border-gray-300 px-4 py-3">$75 - $190</td>
                    <td className="border border-gray-300 px-4 py-3">$150 - $250</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Abscess drainage</td>
                    <td className="border border-gray-300 px-4 py-3">$55 - $190</td>
                    <td className="border border-gray-300 px-4 py-3">—</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              The same list prices a metabolic panel at <strong>$60</strong>, an ECG at{' '}
              <strong>$75</strong>, an ortho-glass splint at <strong>$25</strong>, a flu shot at{' '}
              <strong>$45</strong>, and foreign-object removal at <strong>$45-$103</strong>. Stack
              two or three of those onto a visit and the arithmetic is obvious. Solv estimates a
              basic visit plus one rapid test at <strong>$175-$350</strong>, a visit with an x-ray at{' '}
              <strong>$250-$500</strong>, and a visit with multiple tests plus wound care at{' '}
              <strong>$300-$500 or more</strong>. GoHealth prices the same escalation into its tiers
              rather than as line items, which is why its top tier reaches $350 and above.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Watch for: the outside-lab bill that arrives weeks later</h4>
              <p className="text-gray-700">
                Anything the clinic cannot run on site goes to a reference lab that bills you
                separately, on its own timeline. GoHealth warns the cost can rise &quot;if your
                provider recommends laboratory or other testing from a third party,&quot; and AFC
                West University warns patients may receive additional bills from external entities.
                GoHealth New York prices COVID-19 testing at $120-$195 and states plainly that this{' '}
                <em>does not</em> include the external lab fee. Before any sample leaves the room,
                ask: is this run here, or sent out — and who bills me?
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>Ask for the itemized bill, every time.</strong> An itemized statement lists each
              charge with its code, which is the only way to catch a service you did not receive or a
              test you were never told the price of. If you are routinely paying cash for bloodwork,
              pricing it yourself is usually cheaper than having urgent care order it — see{' '}
              <Link href="/guides/blood-test-without-a-doctor" className="text-blue-600 hover:underline">how to get a blood test without a doctor</Link>{' '}
              and the <Link href="/labs" className="text-blue-600 hover:underline">at-home lab testing directory</Link>.
            </p>

            <h2 id="vs-er" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Urgent Care vs ER vs Telehealth vs Retail Clinic</h2>

            <p className="text-gray-700 mb-4">
              For conditions that do not need emergency care, the door you choose moves the price by
              an order of magnitude. UnitedHealth Group examined ten common primary-care-treatable
              conditions — including bronchitis, cough, flu, headache, sore throat, strep throat and
              upper respiratory infection — and found the average cost of treating them at a hospital
              emergency department was <strong>$2,032</strong>, against <strong>$193</strong> at an
              urgent care center and <strong>$167</strong> at a physician office. That is{' '}
              <strong>ten times higher</strong> than urgent care and twelve times higher than a
              doctor&apos;s office.
            </p>

            <p className="text-gray-700 mb-4">
              The report also names where the ED money goes: hospital facility fees increase the cost
              of an average ED visit by <strong>$1,069</strong>, and lab, pathology and radiology
              services average <strong>$335</strong> at an ED versus <strong>$31</strong> at a
              physician office — ten times more for the same category of service.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Read those figures carefully.</strong> They come from UnitedHealth
                Group&apos;s July 2019 analysis of 2018 costs for privately insured patients, so they
                are not 2026 self-pay prices. They describe the <em>shape</em> of the gap between
                settings, not what you personally will be charged. For an uninsured patient, Solv
                estimates an ER visit for common conditions at <strong>$1,000-$2,500</strong>.
              </p>
            </div>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Setting</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cited figure</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Source basis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Hospital emergency department</td>
                    <td className="border border-gray-300 px-4 py-3">$2,032 average; $1,000-$2,500 uninsured estimate</td>
                    <td className="border border-gray-300 px-4 py-3">UnitedHealth Group (2018 data); Solv estimate</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Urgent care center</td>
                    <td className="border border-gray-300 px-4 py-3">$193 average; $120-$350 published self-pay</td>
                    <td className="border border-gray-300 px-4 py-3">UnitedHealth Group; GoHealth and AFC price lists</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Physician office</td>
                    <td className="border border-gray-300 px-4 py-3">$167 average</td>
                    <td className="border border-gray-300 px-4 py-3">UnitedHealth Group (2018 data)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Telehealth / virtual visit</td>
                    <td className="border border-gray-300 px-4 py-3">$75 (GoHealth NY, Houston); $200 (GoHealth Virginia); $50-$100 estimate</td>
                    <td className="border border-gray-300 px-4 py-3">GoHealth market pages; Solv estimate</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Retail clinic (published list services)</td>
                    <td className="border border-gray-300 px-4 py-3">$39-$245 depending on service</td>
                    <td className="border border-gray-300 px-4 py-3">CVS MinuteClinic published price list</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>Retail clinics are worth knowing about, with a caveat.</strong> CVS MinuteClinic
              publishes flat prices for a defined set of services it does <em>not</em> bill to
              insurance — camp and sports physicals at <strong>$82</strong>, DOT physicals at{' '}
              <strong>$150</strong>, a DOT follow-up at <strong>$39</strong>, travel health consults
              at <strong>$107-$126</strong>, and a typhoid vaccine at <strong>$245</strong>. For those
              services it accepts &quot;cash, checks, credit/debit cards and FSA/HSA cards.&quot; The
              caveat is that this published list is not the whole menu: MinuteClinic states it offers
              195 further services where insurance or payment at time of service is accepted, and it
              does not post a flat price for a general illness visit. Retail clinics also handle a
              narrower range of problems than urgent care — no x-ray, no stitches.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Telehealth is the cheapest door only sometimes.</strong> GoHealth prices a
              virtual visit at $75 in New York and Houston — roughly half its in-center exam. In
              Virginia the same chain prices a virtual visit at $200, level with its in-center rate.
              Price your own market rather than assuming. Telehealth is a strong fit for problems that
              need a conversation and a prescription rather than hands or a machine; our guides on{' '}
              <Link href="/guides/online-ed-treatment" className="text-blue-600 hover:underline">online ED treatment</Link>{' '}
              and{' '}
              <Link href="/guides/online-therapy-cost" className="text-blue-600 hover:underline">online therapy cost</Link>{' '}
              walk through how that pricing works, and the{' '}
              <Link href="/telehealth" className="text-blue-600 hover:underline">telehealth directory</Link>{' '}
              compares platforms.
            </p>

            <h2 id="pay-less" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Pay Less Cash</h2>

            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Ask for the self-pay rate before you register.</strong> Solv reports most urgent care centers offer 10-30% self-pay or cash-pay discounts to patients who pay at time of service, and that these discounts are often not advertised. The discount you never ask for is never applied.</li>
              <li><strong>Find your specific clinic&apos;s price page.</strong> AFC franchises and GoHealth markets each post their own rates. A location page is a real quote; a national brand page is not.</li>
              <li><strong>Price the visit tier you actually need.</strong> If you need an x-ray, you are in the middle tier, not the base one. Knowing that before you arrive stops the bill from being a surprise.</li>
              <li><strong>Ask what is run on site versus sent out.</strong> In-house tests are in the published price. Send-out labs arrive as a second bill from a company you did not choose.</li>
              <li><strong>Try telehealth first for conversation-shaped problems.</strong> Where a virtual visit is $75 against a $180-$215 in-center exam, triaging online first is a real saving — and it costs nothing to check your market&apos;s posted rate.</li>
              <li><strong>Check membership and prompt-pay programs where a chain publishes them.</strong> Some clinics post flat-fee or discounted self-pay programs; ask directly, and only trust a program with a written price.</li>
              <li><strong>Pay with HSA or FSA funds.</strong> Urgent care is a qualified medical expense, and pre-tax dollars effectively discount it by your tax rate. MinuteClinic, for instance, accepts FSA and HSA cards on its published-price services.</li>
              <li><strong>Request the itemized bill and keep it.</strong> It is your only defense against a charge for something that did not happen, and your documentation if you need it later.</li>
            </ol>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">The one question to ask at the front desk</h4>
              <p className="text-gray-700">
                &quot;What is your self-pay price for this visit, what does it include, and what would
                be billed separately?&quot; A clinic with published rates will answer in one sentence.
                A clinic that cannot answer is telling you the total will be assembled after you are
                seen — which is exactly when you have lost the ability to shop.
              </p>
            </div>

            <h2 id="not-urgent-care" className="text-2xl font-bold text-gray-900 mt-12 mb-6">When Urgent Care Is the Wrong Door</h2>

            <p className="text-gray-700 mb-4">
              Everything above is about price. None of it applies in an emergency.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 my-6">
              <p className="text-gray-800">
                <strong>If you think you are having a medical emergency, call 911 or go to the
                nearest emergency room.</strong> Urgent care centers are not equipped to handle
                emergencies, and the cost difference is not a reason to delay emergency care. Nothing
                on this page is medical advice or triage guidance — if you are unsure how serious your
                situation is, contact a licensed healthcare professional or emergency services.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              Two practical notes that are about money rather than medicine. First, an emergency
              department is legally required to screen and stabilize you regardless of ability to pay,
              and hospitals have financial assistance and charity care policies — ask for the
              financial counselor rather than assuming the first bill is final. Second, a self-pay
              visit does not automatically reach your insurer or your primary care chart, and it may
              not count toward a deductible; if you have an unmet deductible, ask whether the self-pay
              rate or the insured rate is lower before you decide.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Other cash-pay services to price-shop</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Cash-pay labs:</strong> compare self-pay bloodwork in the <Link href="/labs" className="text-blue-600 hover:underline">at-home lab testing directory</Link></li>
              <li><strong>Virtual-first care:</strong> browse platforms in the <Link href="/telehealth" className="text-blue-600 hover:underline">telehealth directory</Link></li>
              <li><strong>In-person care:</strong> see the <Link href="/traditional-healthcare" className="text-blue-600 hover:underline">traditional healthcare directory</Link> for clinics by state</li>
              <li><strong>Everything else:</strong> the <Link href="/price-index" className="text-blue-600 hover:underline">cash-pay price index</Link> tracks published self-pay prices across categories</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Cash-Pay Health Services</h3>
            <p className="mb-6 text-blue-100">
              From same-day care to labs to telehealth — see transparent self-pay pricing in one place.
            </p>
            <Link
              href="/price-index"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse the Price Index
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
              This guide is for general informational purposes only and is not medical advice, a
              diagnosis, or triage guidance. If you think you are having a medical emergency, call 911
              or go to the nearest emergency room. We are not affiliated with GoHealth Urgent Care,
              AFC Urgent Care, CityMD, CVS MinuteClinic, Solv, or UnitedHealth Group. Pricing is taken
              from publicly available provider price pages and published cost research and is
              presented as estimates that vary by location, franchise, visit complexity, and current
              rates — always verify the current price directly with the clinic before you are seen.
              Cost figures attributed to UnitedHealth Group reflect 2018 costs for privately insured
              patients and are not self-pay prices. VitalityScout may earn a commission from some
              links, at no additional cost to you, and this never affects how we describe a provider.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Northwell Health-GoHealth Urgent Care — gohealthuc.com/northwell/insurance-and-pricing (New York uninsured rates, virtual visit, COVID testing)</li>
              <li>• Memorial Hermann-GoHealth Urgent Care — gohealthuc.com/memorialhermann/insurance-and-pricing (Houston uninsured rates)</li>
              <li>• Inova-GoHealth Urgent Care — gohealthuc.com/inova/insurance-and-pricing (Virginia uninsured rates, virtual visit)</li>
              <li>• AFC Urgent Care Roxborough — afcurgentcare.com/roxborough/resources/no-insurance-self-pay-pricing (itemized self-pay price list)</li>
              <li>• AFC Urgent Care West University — afcurgentcare.com/west-university/resources/self-pay-pricing (tiered self-pay visits, effective January 2024)</li>
              <li>• CVS MinuteClinic — cvs.com/minuteclinic/services/price-lists (published cash-price services, FSA/HSA acceptance)</li>
              <li>• CityMD — citymd.com/payment (uninsured rates policy statement)</li>
              <li>• Solv Health — solvhealth.com (self-pay visit and add-on cost estimates, self-pay discount range; updated June 2026)</li>
              <li>• UnitedHealth Group — &quot;18 Million Avoidable Hospital Emergency Department Visits&quot; (July 2019; ED vs urgent care vs physician office costs, 2018 data)</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Urgent Care Self-Pay Price Cheat Sheet"
            description="The questions that keep an urgent care bill near the advertised price — and the add-ons that blow past it."
            source="guide_urgent_care_cost"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
