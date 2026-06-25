import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Best GLP-1 Weight Loss Programs Compared (2026)' },
  alternates: { canonical: 'https://vitalityscout.com/guides/best-glp1-weight-loss-programs' },
  description:
    'Best GLP-1 weight loss programs in 2026 compared — Hims, Ro, Calibrate, Found, WeightWatchers, Henry Meds — on meds, coaching, cost, and who each fits.',
};

// Real PAA / GSC long-tail questions (best glp-1 program / providers / subscription /
// compare glp-1 providers), answered only from facts stated on this page. Every price
// answer ends with the verify-with-provider hedge. The visible FAQ block below mirrors
// this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'What is the best GLP-1 program in 2026?',
    answer:
      'There is no single best GLP-1 program — the right one depends on whether you want the lowest medication price, brand-name access, or hands-on coaching. For the cheapest membership plus brand-name medication, Hims and Ro both start memberships around $39 the first month then roughly $149/month, with self-pay Wegovy and Zepbound billed separately. For structured coaching, Calibrate and WeightWatchers Clinic add a full program. For flat compounded pricing with no membership fee, Henry Meds and Found compete on price. These are estimates that change often — confirm current pricing on each provider\'s own site before you sign up.',
  },
  {
    question: 'Which GLP-1 providers are cheapest without insurance?',
    answer:
      'Going self-pay, the lowest published medication prices in 2026 come from manufacturer-direct programs and compounding-focused providers: the NovoCare Wegovy pill is offered from about $149/month on its lowest doses (limited-time), LillyDirect Zepbound self-pay vials start around $299/month, Found advertises compounded GLP-1s from about $99/month, and Henry Meds lists compounded liraglutide from about $179/month. Telehealth programs like Hims and Ro add a membership on top of the medication. Compounded availability and offers change frequently — verify the current price and legal status with each provider.',
  },
  {
    question: 'How do I compare GLP-1 providers — what should I look at?',
    answer:
      'Compare five things, not just the headline price: (1) the medication offered — brand-name Wegovy/Zepbound versus compounded semaglutide/tirzepatide; (2) whether membership and medication are billed separately; (3) coaching depth — minimal, included, or a full structured program; (4) whether the provider works with your insurance for the medication or visits; and (5) commitment — monthly flexibility versus a prepaid multi-month or one-year plan. The same medication often costs similar amounts across providers, so coaching, insurance support, and commitment usually decide the fit.',
  },
  {
    question: 'Do these GLP-1 subscription programs take insurance?',
    answer:
      'It varies by provider. WeightWatchers Clinic, Calibrate, Ro, and Found offer insurance support or coordination to try to get your GLP-1 covered, which can drop the medication to a copay if your plan covers it. Hims and Henry Meds are primarily self-pay and do not bill insurance, though most accept HSA/FSA for payment. None guarantees coverage — eligibility depends on your specific plan. Confirm insurance handling and HSA/FSA acceptance with the provider before enrolling.',
  },
  {
    question: 'Is a GLP-1 telehealth subscription better than buying direct from the manufacturer?',
    answer:
      'Each serves a different need. Manufacturer-direct programs (NovoCare for Wegovy, LillyDirect for Zepbound) often list the lowest self-pay prices on brand-name medication but provide little ongoing coaching, and you still need a prescription. Telehealth subscriptions (Hims, Ro, WeightWatchers, Calibrate, Found, Henry Meds) bundle the prescriber visit, refills, and varying levels of coaching for a membership fee. If you already have a prescriber and want the lowest brand-name price, direct can win on cost; if you want the whole process handled in one place, a subscription can be worth the fee.',
  },
  {
    question: 'What is the best GLP-1 provider for coaching and support?',
    answer:
      'For structured, long-term coaching, Calibrate and WeightWatchers Clinic stand out. Calibrate runs a one-year metabolic-health program with regular video coaching across food, sleep, exercise, and emotional health; WeightWatchers Clinic pairs GLP-1 access with its nutrition program, workshops, and an insurance coordinator. Ro and Found include lighter coaching alongside medication, while Hims and Henry Meds are leaner on hand-holding and lower on price. Pick more coaching if accountability is your gap; pick a leaner program if you are self-directed. Verify what each program includes before enrolling.',
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

export default function BestGlp1WeightLossPrograms() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Best GLP-1 Weight Loss Programs Compared (2026)',
    description:
      'A wide roundup comparing the leading GLP-1 weight-loss programs in 2026 — Hims, Ro, Calibrate, Found, WeightWatchers Clinic, and Henry Meds, plus manufacturer-direct options — on medications offered, coaching, monthly cost with and without insurance, and who each is best for.',
    url: 'https://vitalityscout.com/guides/best-glp1-weight-loss-programs',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/best-glp1-weight-loss-programs#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalTherapy', name: 'GLP-1 receptor agonist therapy for weight management' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'Ro — Weight Loss Program Pricing', url: 'https://ro.co/weight-loss/pricing/' },
      { '@type': 'CreativeWork', name: 'Hims — Cost of Weight Loss Drugs (drug pricing)', url: 'https://www.hims.com/weight-loss/drug-pricing' },
      { '@type': 'CreativeWork', name: 'WeightWatchers — Medical Weight-Loss Clinic Pricing & Plans', url: 'https://www.weightwatchers.com/us/plans/clinic' },
      { '@type': 'CreativeWork', name: 'Calibrate — Weight Loss Pricing', url: 'https://www.joincalibrate.com/pricing' },
      { '@type': 'CreativeWork', name: 'Found — Weight Loss Medication Personalized for You', url: 'https://joinfound.com/' },
      { '@type': 'CreativeWork', name: 'LillyDirect — Zepbound (tirzepatide) self-pay vials', url: 'https://www.lilly.com/lillydirect/medicines/zepbound' },
      { '@type': 'CreativeWork', name: 'NovoCare — Wegovy (semaglutide) cost & coverage', url: 'https://www.novocare.com/patient/medicines/wegovy.html' },
    ],
  };

  const faqSchema = {
    ...buildFAQSchema(FAQ_ITEMS),
    '@id': 'https://vitalityscout.com/guides/best-glp1-weight-loss-programs#faq',
    url: 'https://vitalityscout.com/guides/best-glp1-weight-loss-programs',
  };

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
              <span className="text-gray-900">Best GLP-1 Weight Loss Programs</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/glp1" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; GLP-1 Providers Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Comparison
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Best GLP-1 Weight Loss Programs Compared (2026)
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              Six leading GLP-1 programs and the manufacturer-direct options behind them — what
              medication each offers, how much coaching you get, the real monthly cost with and
              without insurance, and which is best for you.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                <strong>The best GLP-1 program depends on your priority.</strong> For brand-name
                medication with light coaching, <strong>Hims and Ro</strong> start memberships near
                $39 then about $149/month, medication billed separately. For structured coaching,
                <strong> Calibrate and WeightWatchers Clinic</strong> run full programs. For the
                lowest self-pay price, <strong>Found, Henry Meds, and manufacturer-direct</strong>
                {' '}(NovoCare, LillyDirect) compete hardest. All prices are 2026 estimates that
                change often — verify on each provider&apos;s site. This is information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: June 2026 • 12 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Recommendations Box */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Best GLP-1 Provider, By What You Want</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-1">Best for lowest self-pay price</div>
                <div className="text-gray-900 font-semibold">Manufacturer-direct / Found / Henry Meds</div>
                <div className="text-gray-600">From ~$99-$299/mo medication (estimate)</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-green-600 mb-1">Best for brand-name + flexibility</div>
                <div className="text-gray-900 font-semibold">Ro / Hims</div>
                <div className="text-gray-600">~$39 first month, ~$149/mo membership</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-purple-600 mb-1">Best for coaching + insurance</div>
                <div className="text-gray-900 font-semibold">Calibrate / WeightWatchers Clinic</div>
                <div className="text-gray-600">Structured program, meds separate</div>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              Membership and medication are billed separately at most programs. Figures are 2026
              estimates — confirm current pricing with each provider.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#how-to-compare" className="text-blue-600 hover:underline">1. How to compare GLP-1 providers (the 5 levers)</a></li>
              <li><a href="#comparison" className="text-blue-600 hover:underline">2. Side-by-side comparison table</a></li>
              <li><a href="#providers" className="text-blue-600 hover:underline">3. The providers, one by one</a></li>
              <li><a href="#manufacturer-direct" className="text-blue-600 hover:underline">4. Manufacturer-direct: NovoCare &amp; LillyDirect</a></li>
              <li><a href="#with-vs-without-insurance" className="text-blue-600 hover:underline">5. Cost with vs without insurance</a></li>
              <li><a href="#best-for" className="text-blue-600 hover:underline">6. Who each program is best for</a></li>
              <li><a href="#considerations" className="text-blue-600 hover:underline">7. Things to know before you sign up</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              GLP-1 medications like semaglutide (Wegovy, Ozempic) and tirzepatide (Zepbound,
              Mounjaro) are now sold through a crowded field of online programs — and they are
              <em> not</em> interchangeable. Some bundle a prescriber visit and light coaching for a
              membership fee; some run a full year-long program; some just compete on the cheapest
              compounded price. This is a wide roundup of the leading options in 2026, so you can
              match the program to what you actually need. For a deeper three-way look at the most
              searched telehealth trio, see our{' '}
              <Link href="/guides/hims-vs-ro-vs-calibrate" className="text-blue-600 hover:underline">Hims vs Ro vs Calibrate comparison</Link>.
            </p>

            <h2 id="how-to-compare" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Compare GLP-1 Providers (the 5 levers)</h2>

            <p className="text-gray-700 mb-4">
              The headline membership price tells you almost nothing on its own, because the
              medication is usually billed separately and is the bigger cost. Compare these five
              levers instead:
            </p>

            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Medication offered:</strong> brand-name Wegovy/Zepbound versus compounded semaglutide/tirzepatide. Brand-name is FDA-approved; compounded availability and legality have tightened since the shortage ended.</li>
              <li><strong>Cost structure:</strong> is there a separate membership fee on top of the medication, and is it monthly or prepaid?</li>
              <li><strong>Coaching depth:</strong> minimal (medication only), included (light), or a full structured program with regular human coaching.</li>
              <li><strong>Insurance handling:</strong> does the provider try to get your medication or visits covered, or is it strictly self-pay?</li>
              <li><strong>Commitment:</strong> month-to-month flexibility versus a prepaid multi-month or one-year plan.</li>
            </ol>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why this matters:</strong> the same molecule does the same work no matter who
                ships it. The real differences between programs are price structure, medication
                source, how much coaching you get, and whether anyone fights your insurance for you.
              </p>
            </div>

            <h2 id="comparison" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Side-by-Side Comparison</h2>

            <p className="text-gray-700 mb-4">
              Prices below are <strong>2026 estimates drawn from each provider&apos;s published pricing</strong>,
              not live quotes, and many run promotions that move them. Membership and medication are
              billed separately unless noted. Confirm the current number on the provider&apos;s own
              site before enrolling.
            </p>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-3 py-3 text-left font-semibold">Program</th>
                  <th className="border border-gray-300 px-3 py-3 text-left font-semibold">Medication</th>
                  <th className="border border-gray-300 px-3 py-3 text-left font-semibold">Coaching</th>
                  <th className="border border-gray-300 px-3 py-3 text-left font-semibold">Monthly cost (estimate)</th>
                  <th className="border border-gray-300 px-3 py-3 text-left font-semibold">Insurance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-3 font-medium">Hims</td>
                  <td className="border border-gray-300 px-3 py-3">Brand Wegovy / Zepbound; oral kits</td>
                  <td className="border border-gray-300 px-3 py-3">Minimal</td>
                  <td className="border border-gray-300 px-3 py-3">~$39 first mo, then ~$149 membership; meds ~$199-$399</td>
                  <td className="border border-gray-300 px-3 py-3">Self-pay; HSA/FSA</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-3 font-medium">Ro (Ro Body)</td>
                  <td className="border border-gray-300 px-3 py-3">Brand Wegovy pen/pill, Zepbound</td>
                  <td className="border border-gray-300 px-3 py-3">Included (light)</td>
                  <td className="border border-gray-300 px-3 py-3">~$39 first mo, ~$149 (or ~$74 annual); meds ~$149-$449</td>
                  <td className="border border-gray-300 px-3 py-3">Insurance concierge</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-3 font-medium">Calibrate</td>
                  <td className="border border-gray-300 px-3 py-3">Brand-name GLP-1s</td>
                  <td className="border border-gray-300 px-3 py-3">Extensive (1-yr program)</td>
                  <td className="border border-gray-300 px-3 py-3">~$199/mo program (~$1,649/yr); meds separate</td>
                  <td className="border border-gray-300 px-3 py-3">Works w/ insurance for meds</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-3 font-medium">WeightWatchers Clinic</td>
                  <td className="border border-gray-300 px-3 py-3">Brand GLP-1s; some orals included</td>
                  <td className="border border-gray-300 px-3 py-3">Included (program)</td>
                  <td className="border border-gray-300 px-3 py-3">~$20/mo intro, then ~$74/mo (12-mo); meds separate</td>
                  <td className="border border-gray-300 px-3 py-3">Insurance coordinator</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-3 py-3 font-medium">Found</td>
                  <td className="border border-gray-300 px-3 py-3">Compounded + brand GLP-1s; non-GLP-1 plans</td>
                  <td className="border border-gray-300 px-3 py-3">Included (app + clinical)</td>
                  <td className="border border-gray-300 px-3 py-3">Compounded from ~$99/mo; non-GLP-1 from ~$49/mo</td>
                  <td className="border border-gray-300 px-3 py-3">Works w/ insurance for visits</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-3 py-3 font-medium">Henry Meds</td>
                  <td className="border border-gray-300 px-3 py-3">Compounded semaglutide/tirzepatide; liraglutide</td>
                  <td className="border border-gray-300 px-3 py-3">Minimal (no membership fee)</td>
                  <td className="border border-gray-300 px-3 py-3">All-in: liraglutide ~$179; compounded sema ~$297+</td>
                  <td className="border border-gray-300 px-3 py-3">Self-pay only</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">
              <strong>The pattern:</strong> for brand-name medication, the all-in monthly cost lands
              in a similar band across telehealth programs once you add membership plus medication.
              The biggest swing is whether you go compounded (cheaper, but availability and legality
              have narrowed) or brand-name, and whether your insurance covers the drug. For more on
              the brand-name floor, see our{' '}
              <Link href="/guides/cheapest-glp1-without-insurance" className="text-blue-600 hover:underline">cheapest GLP-1 without insurance guide</Link>.
            </p>

            <h2 id="providers" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Providers, One by One</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Hims &amp; Hers — leanest brand-name path</h3>
            <p className="text-gray-700 mb-4">
              Hims built its reputation on affordable telehealth and expanded into weight loss. After
              settling with Novo Nordisk in March 2026, Hims exited compounded semaglutide for new
              patients and now focuses on brand-name medication. Published self-pay estimates: oral
              Wegovy from about $249/month, injectable Wegovy about $299/month, and Zepbound about
              $399/month, with oral weight-loss kits starting around $69/month on a longer prepaid
              plan. The weight-loss membership is roughly $39 the first month, then about $149/month
              (medication not included). Coaching is light — this is a self-directed option.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Ro (Ro Body) — brand-name with an insurance concierge</h3>
            <p className="text-gray-700 mb-4">
              Ro offers brand-name Wegovy (pen and pill) and Zepbound with an insurance concierge that
              tries to secure coverage so you may pay only a copay. The Ro Body membership is about $39
              the first month and roughly $149/month ongoing, dropping to about $74/month if you prepay
              annually. Self-pay medication estimates: Wegovy pill from about $149 (first month) then
              roughly $199-$299, Wegovy pen from about $199 then up to $399, and Zepbound vials from
              about $299 (starting dose) up to $449. Coaching is included but lighter than a full
              program. See our{' '}
              <Link href="/guides/wegovy-vs-ozempic" className="text-blue-600 hover:underline">Wegovy vs Ozempic guide</Link> to understand the medication itself.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Calibrate — the structured one-year program</h3>
            <p className="text-gray-700 mb-4">
              Calibrate is a metabolic-health program rather than a pure medication service. It pairs
              brand-name GLP-1s with a one-year curriculum and regular video coaching across food,
              sleep, exercise, and emotional health. The program is about $199/month (roughly $1,649
              for the full year), with medication billed separately — a copay if your insurance covers
              it, or full brand price if not. It is the most hands-on option here, and the most
              expensive program fee, so it fits people who want accountability and have (or want to
              pursue) insurance coverage for the drug.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">WeightWatchers Clinic — program + insurance coordination</h3>
            <p className="text-gray-700 mb-4">
              WeightWatchers Clinic (its medical weight-loss arm) bundles GLP-1 access with the
              familiar WeightWatchers nutrition program, workshops, and a dedicated insurance
              coordinator who handles prior authorizations and refills. The membership runs an intro
              rate around $20/month for the first three months, then about $74/month on a 12-month
              plan (up to ~$149/month if you go month-to-month). GLP-1 medication is billed separately,
              though some non-GLP-1 orals are included in the membership. Good fit if you want the
              brand&apos;s coaching ecosystem plus help working your insurance.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Found — compounded value + insurance for visits</h3>
            <p className="text-gray-700 mb-4">
              Found leans on lower-cost compounded GLP-1s — advertised from about $99/month — alongside
              brand-name options with insurance navigation, plus non-GLP-1 medication plans starting
              around $49/month. It works with your insurance for the clinical visits (not necessarily
              the medication), and pricing drops on prepaid 3-, 6-, and 12-month plans. Labs are billed
              separately. Found suits price-sensitive users who are comfortable with compounded
              options where available — check the current legal status of compounding before relying on it.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Henry Meds — flat compounded pricing, no membership fee</h3>
            <p className="text-gray-700 mb-4">
              Henry Meds charges no separate membership fee — its prices are all-in (medication,
              supplies, shipping, and provider visits). Published estimates: compounded liraglutide
              from about $179/month, compounded semaglutide injection from about $297/month (lower on
              6- and 12-month prepaid plans, to roughly $197-$247), oral/sublingual semaglutide about
              $249-$349, and oral tirzepatide about $349-$449. It does not accept insurance, and its
              GLP-1s are compounded, not brand-name. Good for self-pay users who want one transparent
              all-in number and minimal hand-holding.
            </p>

            <h2 id="manufacturer-direct" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Manufacturer-Direct: NovoCare &amp; LillyDirect</h2>

            <p className="text-gray-700 mb-4">
              The two drugmakers now sell their own brand-name medication directly to self-pay patients,
              and their list prices are often the lowest brand-name option — though they offer little to
              no coaching and you still need a prescription.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>NovoCare (Wegovy, semaglutide):</strong> the Wegovy pill is offered from about $149/month on its lowest doses as a limited-time offer, with higher doses and the pen running higher. Confirm current dose pricing and offer end dates on NovoCare.</li>
              <li><strong>LillyDirect (Zepbound, tirzepatide):</strong> self-pay single-dose vials start at about $299/month (2.5mg), $399/month (5mg), and $449/month for higher doses (with a 45-day refill requirement to keep the discounted higher-dose price). Needles/syringes are purchased separately.</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">When direct beats a subscription</h4>
              <p className="text-gray-700">
                If you already have a prescriber and want the lowest price on brand-name medication,
                buying direct from NovoCare or LillyDirect can undercut a telehealth membership plus
                medication. If you want the prescriber visit, refills, and coaching handled in one
                place, a subscription&apos;s fee may be worth it. Many people start with a subscription
                to get prescribed, then compare the direct price at refill time.
              </p>
            </div>

            <h2 id="with-vs-without-insurance" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cost With vs Without Insurance</h2>

            <p className="text-gray-700 mb-4">
              Insurance is the single biggest variable in your real cost — and it is unpredictable.
              When a commercial plan covers a GLP-1, programs with an insurance concierge or
              coordinator (Ro, Calibrate, WeightWatchers, Found) can get the medication down to a
              copay, sometimes as low as $0-$25/month, on top of the program fee. When a plan does not
              cover it, you pay self-pay: roughly $149-$449/month for brand-name medication depending
              on drug and dose, or less for compounded options where available.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Scenario</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical monthly cost (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Best-fit programs</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Insurance covers the GLP-1</td>
                    <td className="border border-gray-300 px-4 py-3">Copay (often ~$0-$25) + program fee</td>
                    <td className="border border-gray-300 px-4 py-3">Calibrate, WeightWatchers, Ro, Found</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">No coverage, want brand-name</td>
                    <td className="border border-gray-300 px-4 py-3">~$149-$449 medication (+ membership)</td>
                    <td className="border border-gray-300 px-4 py-3">NovoCare/LillyDirect, Ro, Hims</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">No coverage, want lowest price</td>
                    <td className="border border-gray-300 px-4 py-3">~$99-$299 (compounded, where available)</td>
                    <td className="border border-gray-300 px-4 py-3">Found, Henry Meds</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              HSA/FSA funds can typically be used for the medication and visits, effectively
              discounting the cost by your tax rate. Confirm eligibility with your plan administrator
              before assuming a charge qualifies.
            </p>

            <h2 id="best-for" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Who Each Program Is Best For</h2>

            <div className="bg-blue-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: lowest self-pay price</h3>
              <p className="text-gray-700 mb-2"><strong>Manufacturer-direct (NovoCare/LillyDirect), Found, Henry Meds.</strong> Direct programs list the lowest brand-name prices; Found and Henry Meds compete on compounded pricing with flat or all-in fees.</p>
              <p className="text-gray-700 font-semibold">Good fit for: self-directed, price-sensitive users who do not need much coaching.</p>
            </div>

            <div className="bg-green-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: brand-name with flexibility</h3>
              <p className="text-gray-700 mb-2"><strong>Ro and Hims.</strong> Month-friendly memberships, brand-name Wegovy/Zepbound, and (for Ro) an insurance concierge that tries to get the drug covered.</p>
              <p className="text-gray-700 font-semibold">Good fit for: people who want FDA-approved medication without a long commitment.</p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: coaching and accountability</h3>
              <p className="text-gray-700 mb-2"><strong>Calibrate and WeightWatchers Clinic.</strong> Full structured programs with regular human coaching and insurance coordination — the most support, at a higher program fee or longer commitment.</p>
              <p className="text-gray-700 font-semibold">Good fit for: people whose gap is habits and accountability, not just access to a prescription.</p>
            </div>

            <h2 id="considerations" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Things to Know Before You Sign Up</h2>

            <p className="text-gray-700 mb-4">
              GLP-1 programs are convenient, but a few things deserve a clear-eyed look:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Membership and medication are usually separate.</strong> A low membership fee does not mean a low total — add the medication cost before comparing.</li>
              <li><strong>Compounded is not brand-name.</strong> Compounded GLP-1s can be cheaper but are not FDA-approved products, and availability and legality have narrowed since the shortage ended. Verify status before relying on it. See our <Link href="/guides/glp1-weight-loss-complete-guide" className="text-blue-600 hover:underline">complete GLP-1 guide</Link>.</li>
              <li><strong>Muscle loss is real.</strong> A meaningful share of weight lost on a GLP-1 can be lean mass; resistance training and adequate protein matter. See our <Link href="/guides/glp1-and-muscle-loss" className="text-blue-600 hover:underline">GLP-1 and muscle loss guide</Link>.</li>
              <li><strong>Prices and offers change often.</strong> Promotional first-month rates, limited-time direct offers, and dose-based pricing all shift — the number you see today may differ next month.</li>
              <li><strong>No program guarantees results.</strong> Medication, coaching, and adherence all contribute; eligibility and treatment decisions belong with a licensed clinician.</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Watch for: the &quot;cheap intro, pricier later&quot; pattern</h4>
              <p className="text-gray-700">
                Many programs advertise a low first-month or intro rate that rises afterward, and
                medication pricing often climbs as your dose increases. Check the ongoing price and the
                full first-year total — membership plus medication — not just the headline figure.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare GLP-1 Providers &amp; Local Clinics</h3>
            <p className="mb-6 text-blue-100">
              See telehealth GLP-1 options side by side, or find a local weight-loss clinic near you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/glp1"
                className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                All GLP-1 Providers
              </Link>
              <Link
                href="/weight-loss"
                className="inline-block rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Local Weight-Loss Clinics
              </Link>
            </div>
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
              not affiliated with Hims, Ro, Calibrate, WeightWatchers, Found, Henry Meds, Novo Nordisk,
              or Eli Lilly. Pricing is based on publicly available data and is presented as estimates
              that vary by program, medication, dose, insurance, and current promotions — always
              verify the current price directly on each provider&apos;s site before purchasing. GLP-1
              medications are prescription drugs; eligibility and treatment decisions must be made with
              a licensed healthcare provider. We may earn a commission from some links, at no
              additional cost to you, which never affects how we describe a program.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Ro — Weight Loss Program Pricing (ro.co/weight-loss/pricing) — membership and medication estimates</li>
              <li>• Hims — Cost of Weight Loss Drugs (hims.com/weight-loss/drug-pricing) — self-pay medication estimates</li>
              <li>• WeightWatchers — Medical Weight-Loss Clinic Pricing &amp; Plans (weightwatchers.com/us/plans/clinic)</li>
              <li>• Calibrate — Weight Loss Pricing (joincalibrate.com/pricing) — program fee and structure</li>
              <li>• Found — joinfound.com — compounded and non-GLP-1 plan pricing</li>
              <li>• Henry Meds — published 2026 pricing tiers (compounded GLP-1, all-in, no membership fee)</li>
              <li>• LillyDirect — Zepbound self-pay vial pricing (lilly.com/lillydirect/medicines/zepbound)</li>
              <li>• NovoCare — Wegovy cost &amp; coverage (novocare.com/patient/medicines/wegovy.html)</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our GLP-1 Program Price Cheat Sheet"
            description="Membership vs medication, brand vs compounded, and how to compare the all-in monthly cost across providers."
            source="guide_best_glp1_weight_loss_programs"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
