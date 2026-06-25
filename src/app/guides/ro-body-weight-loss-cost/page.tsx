import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'Ro Body Weight Loss Cost (2026): Membership + GLP-1',
  description: 'Ro Body weight loss cost in 2026: membership $39 first month then $149/mo, what is included, and GLP-1 medication prices with and without insurance.',
};

// Real GSC long-tail questions we already earn impressions for, answered only
// from facts stated on this page. Every price answer carries the
// verify-with-provider hedge. The visible FAQ block below mirrors this schema
// exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much is Ro Body weight loss per month?',
    answer: 'Ro lists the Ro Body membership at $39 for the first month, then $149/month on a monthly plan, or as low as $74/month if you prepay for an annual plan. That membership fee is separate from the cost of any GLP-1 medication, which Ro bills on its own. So a realistic all-in monthly cost is the membership plus your medication price, which varies widely by drug, dose, and whether insurance covers it. These are estimates that change with promotions — confirm current pricing on Ro before you enroll.',
  },
  {
    question: 'Does the Ro Body membership include medication?',
    answer: 'No. Ro states plainly that the cost of medication is not included in the Ro Body membership. The membership covers the program — access to a GLP-1 prescription, a personalized treatment plan, an insurance concierge, 1:1 provider messaging, regular check-ins, coaching, and lab testing if needed — but the medication itself is a separate charge. You pay the membership fee and the drug cost as two line items. Budget for both, and confirm the exact figures with Ro.',
  },
  {
    question: 'What is the Ro GLP-1 cost without insurance?',
    answer: 'Without insurance, Ro lists cash prices that depend on the specific medication and dose. As examples Ro publishes, the Wegovy pen runs about $199 for early doses and up to roughly $399/month thereafter, and Zepbound is tiered from about $299/month (2.5 mg) to $449/month (higher doses) with a manufacturer offer. The Wegovy pill can start around $149 for the first dose. These are cash, membership-separate prices and are estimates that move with promotions — verify the current number on Ro before paying.',
  },
  {
    question: 'How much is Ozempic through Ro?',
    answer: 'Ro positions brand-name semaglutide pens like Ozempic in the roughly $900-$1,100 per month range when paid in cash without insurance, which is why Ro steers most weight-loss members toward Wegovy or Zepbound options that it prices lower. Ozempic is FDA-approved for type 2 diabetes, not weight loss, so weight-loss access differs. Ro also runs an insurance concierge that may bring an insured copay far below cash. Treat all figures as estimates and confirm current Ozempic pricing and eligibility with Ro.',
  },
  {
    question: 'How much does tirzepatide (Zepbound) cost through Ro?',
    answer: 'Ro lists Zepbound (tirzepatide) cash prices in tiers: about $299/month for the 2.5 mg dose, about $399/month for 5 mg, and about $449/month for 7.5 mg through 15 mg with a manufacturer offer. Ro says commercially insured patients whose plan covers Zepbound may pay as little as around $25/month after meeting plan requirements. These are medication prices that sit on top of the Ro Body membership — they are estimates that change, so verify the live price with Ro.',
  },
  {
    question: 'Is Ro Body worth it compared to other GLP-1 programs?',
    answer: 'It depends on what you value. Ro Body bundles a brand-name GLP-1 pathway, an insurance concierge, coaching, and provider messaging into one membership, which suits people who want brand-name medication and help fighting for coverage. Budget-focused or compounded-medication shoppers may find a lower headline price elsewhere. Because the membership and the drug are billed separately, compare the all-in monthly cost — membership plus medication — not just the advertised starting price.',
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

export default function RoBodyWeightLossCost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Ro Body Weight Loss Cost (2026): Membership Price + GLP-1 Medication Costs',
    description:
      'A cost-focused review of the Ro Body weight-loss program in 2026 — the membership price, exactly what it includes, whether medication is included, and Ro GLP-1 cash and insured prices for Wegovy, Zepbound, and Ozempic.',
    url: 'https://vitalityscout.com/guides/ro-body-weight-loss-cost',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/ro-body-weight-loss-cost#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalTherapy', name: 'GLP-1 weight-loss treatment' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'Ro — Weight Loss Program Pricing', url: 'https://ro.co/weight-loss/pricing/' },
      { '@type': 'CreativeWork', name: 'Ro — Weight Loss Program & Ro Body Membership', url: 'https://ro.co/weight-loss/' },
      { '@type': 'CreativeWork', name: 'Ro — How Much Does Tirzepatide Cost With and Without Insurance?', url: 'https://ro.co/weight-loss/tirzepatide-cost/' },
      { '@type': 'CreativeWork', name: 'Ro — Cost of Weight Loss Injections With and Without Insurance', url: 'https://ro.co/weight-loss/injections-cost/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/ro-body-weight-loss-cost#faq', url: 'https://vitalityscout.com/guides/ro-body-weight-loss-cost' };

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
              <span className="text-gray-900">Ro Body Weight Loss Cost</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/weight-loss" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Weight Loss Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Cost &amp; Review
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Ro Body Weight Loss Cost (2026): Membership Price + GLP-1 Medication
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              Ro splits its weight-loss program into two bills: a Ro Body membership and the GLP-1
              medication itself. Here is exactly what each costs in 2026, what the membership
              actually includes, and how the all-in number really adds up.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                The <strong>Ro Body membership costs $39 the first month, then $149/month</strong> (as low as
                <strong> $74/month prepaid annually</strong>). <strong>Medication is not included</strong> — Ro bills the
                GLP-1 separately. Cash medication prices range from about <strong>$149-$449/month</strong> for Ro&apos;s
                Wegovy and Zepbound options, while brand pens like Ozempic run roughly <strong>$900-$1,100/month</strong>;
                insured copays can be far lower. Prices are estimates — verify on Ro. This is information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: June 2026 • 10 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Cost Box */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Ro Body at a Glance (2026)</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">The membership (program)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• $39 first month (estimate)</li>
                  <li>• $149/month ongoing (monthly plan)</li>
                  <li>• As low as $74/month prepaid annually</li>
                  <li>• Includes provider support + coaching</li>
                  <li>• Insurance concierge included</li>
                  <li>• Does NOT include the medication</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">The medication (separate)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Wegovy pen ~$199-$399/mo cash (estimate)</li>
                  <li>• Wegovy pill from ~$149 first dose</li>
                  <li>• Zepbound ~$299-$449/mo cash by dose</li>
                  <li>• Ozempic ~$900-$1,100/mo cash</li>
                  <li>• Insured copay can be ~$25/mo</li>
                  <li>• Varies by drug, dose, and coverage</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line on Cost</h3>
            <p className="text-sm text-gray-700 mb-3">
              Your real Ro Body cost is <strong>membership + medication</strong>, billed as two separate
              charges. The advertised &quot;from $39&quot; is the program intro price only — not the drug.
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">Lowest realistic all-in:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Prepaid membership (~$74/mo) + insured copay (~$25/mo)</li>
                  <li>• Or membership + a lower-cost cash GLP-1 option</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">Highest realistic all-in:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Monthly membership ($149) + brand pen cash (~$900-$1,100)</li>
                  <li>• Brand-name without any insurance is the priciest path</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#what-is" className="text-blue-600 hover:underline">1. What the Ro Body program is</a></li>
              <li><a href="#membership-cost" className="text-blue-600 hover:underline">2. How much is Ro Body per month</a></li>
              <li><a href="#includes" className="text-blue-600 hover:underline">3. What the membership includes</a></li>
              <li><a href="#med-included" className="text-blue-600 hover:underline">4. Does the membership include medication?</a></li>
              <li><a href="#med-cost" className="text-blue-600 hover:underline">5. Ro GLP-1 cost with vs without insurance</a></li>
              <li><a href="#ozempic-tirz" className="text-blue-600 hover:underline">6. Ro Ozempic price &amp; Ro tirzepatide cost</a></li>
              <li><a href="#alternatives" className="text-blue-600 hover:underline">7. How Ro compares to alternatives</a></li>
              <li><a href="#worth-it" className="text-blue-600 hover:underline">8. Is Ro Body worth it?</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              If you have searched &quot;how much is Ro weight loss per month&quot; and gotten three
              different answers, that is because Ro charges for two things, not one: a program
              membership and the GLP-1 medication. Confuse the two and the math falls apart. This
              guide separates them, prices each from Ro&apos;s own published figures, and shows the
              honest all-in cost.
            </p>

            <h2 id="what-is" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What the Ro Body Program Is</h2>

            <p className="text-gray-700 mb-4">
              Ro (formerly Roman) is a national telehealth company. Its weight-loss arm, the
              <strong> Ro Body Program</strong>, is a membership that connects you with a licensed provider
              who can prescribe a GLP-1 medication, then wraps that prescription in coaching,
              check-ins, and an insurance team. Ro&apos;s differentiator is its push toward
              <strong> brand-name GLP-1s</strong> — Wegovy and Zepbound — rather than compounded versions, plus an
              insurance concierge that tries to get your medication covered.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why the two-bill structure matters:</strong> the price you see in Ro&apos;s ads
                is the membership, not the drug. Because the medication is billed separately and varies
                enormously by drug and coverage, the only number that tells you your true cost is
                <em> membership + medication</em> together.
              </p>
            </div>

            <h2 id="membership-cost" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How Much Is Ro Body Per Month?</h2>

            <p className="text-gray-700 mb-4">
              Ro lists the Ro Body membership at <strong>$39 for the first month</strong>, then
              <strong> $149/month</strong> on a standard monthly plan, or <strong>as low as $74/month</strong> if you
              prepay for an annual plan. That fee buys the program and the provider relationship — not
              the medication. The figures below are drawn from Ro&apos;s published pricing and are
              <strong> estimates that move with promotions</strong>; confirm the live number on Ro before enrolling.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Membership plan</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Price (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">First month</td>
                    <td className="border border-gray-300 px-4 py-3">~$39</td>
                    <td className="border border-gray-300 px-4 py-3">Intro price; program only, no medication</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Monthly plan (ongoing)</td>
                    <td className="border border-gray-300 px-4 py-3">~$149/mo</td>
                    <td className="border border-gray-300 px-4 py-3">Standard recurring membership</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Annual prepay</td>
                    <td className="border border-gray-300 px-4 py-3">As low as ~$74/mo</td>
                    <td className="border border-gray-300 px-4 py-3">Lowest membership rate; paid upfront</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="includes" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What the Membership Includes</h2>

            <p className="text-gray-700 mb-4">
              Per Ro, the Ro Body membership covers the program around your prescription:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Access to a GLP-1 prescription</strong> through a licensed provider (the drug itself is billed separately)</li>
              <li><strong>A personalized treatment plan</strong> built around your goals and history</li>
              <li><strong>A dedicated insurance concierge</strong> that works to get your medication covered</li>
              <li><strong>Ongoing provider support</strong> with 1:1 messaging</li>
              <li><strong>Regular check-ins and coaching</strong> as you titrate dose</li>
              <li><strong>Lab testing, if necessary</strong>, as part of the program</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">The insurance concierge is the real differentiator</h4>
              <p className="text-gray-700">
                The most valuable thing the membership buys, for many people, is the team that fights
                for coverage. If they succeed, your medication can drop from a four-figure cash price
                to a copay — which can more than offset the membership fee. If your plan excludes
                weight-loss drugs, that lever does not exist, and you are paying cash for both lines.
              </p>
            </div>

            <h2 id="med-included" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Does the Ro Body Membership Include Medication?</h2>

            <p className="text-gray-700 mb-4">
              <strong>No.</strong> Ro states directly that the cost of medication is not included in the Ro Body
              membership. You pay the membership fee for the program, and you pay separately for the
              GLP-1 itself. This is the single most common point of confusion about Ro&apos;s pricing —
              the &quot;from $39&quot; or &quot;$149/month&quot; figure is the program, never the drug.
            </p>

            <p className="text-gray-700 mb-4">
              Practically, that means your monthly statement has two parts. To compare Ro honestly to
              any other program, add the membership and the medication together, then compare that
              all-in figure to the rival&apos;s all-in figure.
            </p>

            <h2 id="med-cost" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Ro GLP-1 Cost: With vs Without Insurance</h2>

            <p className="text-gray-700 mb-4">
              Here is where the range is widest. Ro publishes cash prices for several medications, and
              separately notes that insured patients whose plan covers the drug can pay far less. The
              table below reflects Ro&apos;s published cash figures; all are <strong>estimates that change with
              dose and promotions</strong> — verify the current price on Ro for your specific medication.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Medication (via Ro)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cash price, no insurance (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">With insurance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Wegovy pen (semaglutide)</td>
                    <td className="border border-gray-300 px-4 py-3">~$199 early doses, up to ~$399/mo</td>
                    <td className="border border-gray-300 px-4 py-3">Copay varies by plan</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Wegovy pill (oral)</td>
                    <td className="border border-gray-300 px-4 py-3">From ~$149 first dose</td>
                    <td className="border border-gray-300 px-4 py-3">Copay varies by plan</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Zepbound (tirzepatide)</td>
                    <td className="border border-gray-300 px-4 py-3">~$299/mo (2.5 mg) to ~$449/mo (higher doses)</td>
                    <td className="border border-gray-300 px-4 py-3">As little as ~$25/mo if covered</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Ozempic / brand pens</td>
                    <td className="border border-gray-300 px-4 py-3">~$900-$1,100/mo</td>
                    <td className="border border-gray-300 px-4 py-3">Copay varies; concierge may help</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>The pattern:</strong> Ro&apos;s own lower-priced cash options (the Wegovy pen/pill and
              Zepbound tiers) are what most weight-loss members land on. The four-figure brand-pen
              cash prices are the high end and are usually avoided by routing through coverage or a
              lower-cost option. If insurance covers your drug, the medication line can collapse to a
              copay — sometimes around $25/month for Zepbound, per Ro.
            </p>

            <h2 id="ozempic-tirz" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Ro Ozempic Price &amp; Ro Tirzepatide Cost</h2>

            <p className="text-gray-700 mb-4">
              Two of the most-searched Ro questions deserve their own note, because they pull in
              opposite directions on price.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Ro Ozempic price</h3>
            <p className="text-gray-700 mb-4">
              Ozempic is brand-name semaglutide that is FDA-approved for type 2 diabetes, not weight
              loss. Paid in cash without insurance, brand pens in this class run roughly
              <strong> $900-$1,100/month</strong> through Ro — which is exactly why Ro generally steers
              weight-loss members toward Wegovy or Zepbound options it prices lower. If you specifically
              want Ozempic, expect the high end unless insurance applies. Confirm eligibility and the
              current price with Ro.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Ro tirzepatide cost</h3>
            <p className="text-gray-700 mb-4">
              Tirzepatide is the active ingredient in Zepbound. Ro lists it in cash tiers:
              <strong> ~$299/month for 2.5 mg</strong>, <strong>~$399/month for 5 mg</strong>, and
              <strong> ~$449/month for 7.5 mg through 15 mg</strong> with a manufacturer offer. Insured patients
              whose plan covers Zepbound may pay as little as roughly <strong>$25/month</strong> after meeting
              plan requirements. Ro offers Zepbound pens, single-dose vials, and KwikPens — these
              prices are separate from the Ro Body membership.
            </p>

            <h2 id="alternatives" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How Ro Body Compares to Alternatives</h2>

            <p className="text-gray-700 mb-4">
              Ro is one of several national telehealth weight-loss programs. The clean way to compare
              is on three axes: the program (membership) cost, the medication pathway (brand vs
              compounded vs insurance), and the all-in monthly figure. For a full three-way breakdown,
              see our <Link href="/guides/hims-vs-ro-vs-calibrate" className="text-blue-600 hover:underline">Hims vs Ro vs Calibrate comparison</Link>;
              this guide goes deeper on Ro&apos;s numbers specifically.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Brand-name access:</strong> Ro&apos;s strength is real Wegovy/Zepbound plus an insurance concierge, not the cheapest compounded option.</li>
              <li><strong>Cheapest cash GLP-1:</strong> if a low headline number is the goal, compare against the lowest-cost cash routes in our <Link href="/guides/cheapest-glp1-without-insurance" className="text-blue-600 hover:underline">cheapest GLP-1 without insurance guide</Link>.</li>
              <li><strong>The medication itself:</strong> for how GLP-1s work, results, and side effects regardless of provider, see the <Link href="/guides/glp1-weight-loss-complete-guide" className="text-blue-600 hover:underline">complete GLP-1 weight-loss guide</Link>.</li>
              <li><strong>Provider detail:</strong> see our <Link href="/providers/ro-body" className="text-blue-600 hover:underline">Ro Body provider profile</Link> for services, coverage, and our take.</li>
            </ul>

            <h2 id="worth-it" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Is Ro Body Worth It?</h2>

            <div className="bg-blue-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Ro Body fits if:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You want brand-name Wegovy or Zepbound, not a compounded version</li>
                <li>You have insurance that might cover the drug and want help fighting for it</li>
                <li>You value coaching, 1:1 provider messaging, and structured check-ins</li>
                <li>You can budget for the membership and the medication as two line items</li>
              </ul>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Look elsewhere if:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Your only goal is the lowest possible headline price</li>
                <li>You have no coverage and want a low-cost compounded route (where legal/available)</li>
                <li>You do not want to pay a separate program fee on top of the medication</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">A simple way to price your real cost</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li>Pick your membership plan: ~$39 first month, then ~$149/mo or ~$74/mo prepaid annually</li>
              <li>Add the specific medication&apos;s cash price (Wegovy/Zepbound tiers above) OR your insured copay</li>
              <li>Run Ro&apos;s insurance check first — coverage can collapse the medication line to a copay</li>
              <li>Compare that all-in number to a rival program&apos;s all-in number, not its headline price</li>
            </ol>

            <p className="text-gray-700 mb-4">
              Ready to compare options side by side? Browse cash-pay and telehealth weight-loss
              providers in our directory and price your all-in cost before you commit.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Weight-Loss Programs &amp; GLP-1 Pricing</h3>
            <p className="mb-6 text-blue-100">
              See telehealth and local weight-loss providers side by side, with transparent cash-pay pricing.
            </p>
            <Link
              href="/weight-loss"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse Weight-Loss Providers
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
              This guide is for general informational purposes only and is not medical advice. We are
              not affiliated with Ro. Pricing is based on publicly available information from Ro&apos;s
              own pages and is presented as estimates that vary by plan, dose, location, and current
              promotions — always verify the current membership and medication price directly on
              ro.co before enrolling. GLP-1 medications are prescription drugs; eligibility,
              suitability, and dosing must be decided with a licensed clinician, and abnormal or
              concerning symptoms should be reviewed with a healthcare provider. We may earn a
              commission from some links, at no additional cost to you; this never affects how we
              describe a provider.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Ro — Weight Loss Program Pricing (ro.co/weight-loss/pricing): membership $39 first month / $149 monthly / ~$74 prepaid, medication not included, what membership includes</li>
              <li>• Ro — Weight Loss Program &amp; Ro Body Membership (ro.co/weight-loss): program overview, GLP-1 access, insurance concierge</li>
              <li>• Ro — How Much Does Tirzepatide Cost With and Without Insurance? (ro.co/weight-loss/tirzepatide-cost): Zepbound $299/$399/$449 tiers, ~$25/mo insured</li>
              <li>• Ro — Cost of Weight Loss Injections With and Without Insurance (ro.co/weight-loss/injections-cost): Wegovy and Zepbound cash pricing, brand-pen ranges</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our GLP-1 All-In Cost Cheat Sheet"
            description="How to price a weight-loss program correctly: membership plus medication, with and without insurance."
            source="guide_ro_body_weight_loss_cost"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
