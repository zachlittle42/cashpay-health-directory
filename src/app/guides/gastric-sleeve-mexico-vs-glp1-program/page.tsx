import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import SubjectiveBridgeUnit from '@/components/SubjectiveBridgeUnit';
import { buildFAQSchema } from '@/lib/jsonLd';
import { getDestinationStat, fmtUsd } from '@/lib/destination-pricing';

const URL = 'https://vitalityscout.com/guides/gastric-sleeve-mexico-vs-glp1-program';

// Candidate ownership-disclosure wording per monetization-plan §5 / §6-D2. NOT
// yet founder-confirmed — the Subjective house unit ships OFF (see the component)
// and this string is passed only so the prop contract is exercised.
const OWNERSHIP_DISCLOSURE_CANDIDATE =
  'Subjective Health and VitalityScout are operated by the same parent company.';

export const metadata: Metadata = {
  title: { absolute: 'Gastric Sleeve in Mexico vs a GLP-1 Program: The Verified Math (2026)' },
  alternates: { canonical: URL },
  description:
    'A gastric sleeve in Mexico is a verified $4,900 median one-time cost; a GLP-1 program a verified $262.50/month. The honest, cited comparison of cost, outcomes, and eligibility — not the $120k facilitator myth.',
};

const FAQ_ITEMS = [
  {
    question: 'Is a gastric sleeve in Mexico cheaper than a GLP-1 program?',
    answer:
      'It depends on your time horizon. A gastric sleeve in Mexico is a one-time cost with a verified median of $4,900 (n=12 all-inclusive packages) plus travel. A GLP-1 program is a recurring verified median of $262.50/month, or $3,150 a year. The cumulative medication cost passes the surgery’s one-time cost during the second year if you stay on treatment continuously and the surgery price holds. Decide with a licensed clinician; this is information, not medical advice.',
  },
  {
    question: 'How much more weight does surgery lose than a GLP-1?',
    answer:
      'Published averages: a sleeve gastrectomy loses about 29.5% of total body weight at one year, versus about 14.9% for semaglutide and about 22% for tirzepatide while on treatment (ASMBS). Surgery is larger and more durable; GLP-1 loss depends on staying on the drug, with roughly half of lost weight regained within a year of stopping. These are population averages and do not predict any individual’s result.',
  },
  {
    question: 'Is the "$120,000 over 10 years on GLP-1" figure real?',
    answer:
      'No. That figure assumes brand-name US list pricing paid indefinitely and is not sourced — it exists to make surgery look inevitable. VitalityScout’s verified median GLP-1 program is $262.50/month, which is about $3,150 a year or roughly $31,500 over ten years, not $120,000. Confirm current pricing and your own eligibility with licensed clinicians.',
  },
];

export default function GastricSleeveVsGlp1Page() {
  // Verified surgery-side anchor: the audited $4,900 sleeve median (USD
  // standard+package all-inclusive packages, floors/intro excluded).
  const sleeve = getDestinationStat({ serviceKey: 'gastric-sleeve', clusters: ['mexico-bariatric'] });

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Gastric Sleeve in Mexico vs a GLP-1 Program: The Verified Math',
    description:
      'A cited, honest comparison of a Mexican gastric sleeve versus a GLP-1 medication program on cost, outcomes, and eligibility.',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    publisher: { '@type': 'Organization', name: 'VitalityScout' },
    datePublished: '2026-07-13',
    dateModified: '2026-07-13',
    mainEntityOfPage: URL,
  };
  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${URL}#faq`, url: URL };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Guides', item: 'https://vitalityscout.com/guides' },
      { '@type': 'ListItem', position: 2, name: 'Gastric Sleeve Mexico vs GLP-1 Program', item: URL },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <SidebarShell>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        <nav className="border-b border-gray-200 px-4 py-3 text-sm" aria-label="Breadcrumb">
          <div className="mx-auto max-w-4xl text-gray-500">
            <Link href="/guides" className="text-blue-600 hover:underline">Guides</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Gastric Sleeve Mexico vs GLP-1 Program</span>
          </div>
        </nav>

        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-10">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              Gastric Sleeve in Mexico vs a GLP-1 Program: The Verified Math
            </h1>
            {/* Direct answer — hardened with the verified $4,900 sleeve median */}
            <p className="text-lg text-gray-700">
              <strong>Direct answer.</strong> A gastric sleeve in Mexico is a one-time surgical cost —
              a verified median of {sleeve ? fmtUsd(sleeve.median) : '$4,900'} (n={sleeve?.n ?? 12}{' '}
              all-inclusive packages) plus travel — and produces roughly 25–30% total body weight loss
              in year one. A GLP-1 program is a recurring cost — a verified median of $262.50/month —
              producing about 15% (semaglutide) to 22% (tirzepatide) while you stay on it, with
              substantial regain common if you stop. Your BMI, risk tolerance, and treatment horizon
              decide the choice.
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-10">
          <div className="mb-8 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            This guide is general information, not medical, financial, or tax advice. It does not
            recommend surgery or medication for any individual. Weight-loss decisions must be made with
            a licensed clinician who knows your history. Do not act on this page alone.
          </div>

          <h2 className="mb-3 text-2xl font-bold text-gray-900">Why this comparison is usually framed dishonestly</h2>
          <p className="mb-4 text-gray-700">
            The most common online version of this comparison comes from surgery facilitators and reads
            like this: <em>&quot;$120,000 over 10 years on semaglutide versus a one-time $4,500
            surgery.&quot;</em> That $120,000 figure assumes brand-name US list pricing paid
            indefinitely, and it is not sourced. It exists to make surgery look inevitable.
          </p>
          <p className="mb-4 text-gray-700">
            The honest recurring number is far lower. VitalityScout&apos;s verified pricing dataset puts
            the <strong>median GLP-1 program at $262.50/month (n=58, verified 2026-07)</strong> —
            $3,150 a year, or about $31,500 over ten years, not $120,000. That single correction changes
            the entire decision. Below we hold both sides to the same standard: cited prices, cited
            outcomes, and a clear statement of what each figure does and does not include.
          </p>

          <h2 className="mb-3 mt-10 text-2xl font-bold text-gray-900">The two options, side by side</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50 text-left">
                  <th className="px-3 py-2 font-semibold text-gray-700">Dimension</th>
                  <th className="px-3 py-2 font-semibold text-gray-700">Gastric sleeve (Mexico)</th>
                  <th className="px-3 py-2 font-semibold text-gray-700">GLP-1 program</th>
                </tr>
              </thead>
              <tbody className="align-top">
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2 font-medium text-gray-800">Cost structure</td>
                  <td className="px-3 py-2 text-gray-700">One-time procedure</td>
                  <td className="px-3 py-2 text-gray-700">Recurring monthly</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2 font-medium text-gray-800">Price</td>
                  <td className="px-3 py-2 text-gray-700">
                    <strong>$4,900 verified median (n=12 all-inclusive packages)¹</strong> + travel/lodging
                  </td>
                  <td className="px-3 py-2 text-gray-700"><strong>$262.50/mo median (verified, n=58)²</strong></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2 font-medium text-gray-800">First-year weight loss</td>
                  <td className="px-3 py-2 text-gray-700">~25–30% total body weight (sleeve ~29.5% at 1 yr)³</td>
                  <td className="px-3 py-2 text-gray-700">~15% semaglutide / ~22% tirzepatide, on treatment³</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2 font-medium text-gray-800">Durability</td>
                  <td className="px-3 py-2 text-gray-700">Structural; more durable, some regain over years³</td>
                  <td className="px-3 py-2 text-gray-700">Depends on staying on the drug; ~half of lost weight regained within a year of stopping³</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2 font-medium text-gray-800">Reversibility</td>
                  <td className="px-3 py-2 text-gray-700">Permanent (stomach is resected)</td>
                  <td className="px-3 py-2 text-gray-700">Reversible; effect ends when treatment ends</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2 font-medium text-gray-800">Typical eligibility</td>
                  <td className="px-3 py-2 text-gray-700">BMI ≥ 40, or ≥ 35 with a weight-related condition⁴</td>
                  <td className="px-3 py-2 text-gray-700">BMI ≥ 30, or ≥ 27 with a weight-related condition⁵</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2 font-medium text-gray-800">Main risks</td>
                  <td className="px-3 py-2 text-gray-700">Surgical + anesthesia risk; leaks, strictures; abroad = fragmented follow-up</td>
                  <td className="px-3 py-2 text-gray-700">GI side effects (nausea, vomiting); cost of continuation; supply/access</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium text-gray-800">Ongoing costs</td>
                  <td className="px-3 py-2 text-gray-700">Lifelong vitamins, labs, follow-up</td>
                  <td className="px-3 py-2 text-gray-700">The monthly program cost, for as long as you continue</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ol className="mt-3 space-y-1 text-xs text-gray-500">
            <li>¹ VitalityScout verified pricing, 2026-07; median across n=12 all-inclusive Mexican gastric-sleeve packages (range $4,100–$8,900). Inclusions vary; airfare excluded.</li>
            <li>² VitalityScout verified pricing, 2026-07; median across n=58 GLP-1 programs.</li>
            <li>³ American Society for Metabolic and Bariatric Surgery, GLP-1 vs bariatric-surgery evidence review.</li>
            <li>⁴ ASMBS/IFSO clinical guidance on bariatric eligibility.</li>
            <li>⁵ FDA-approved indications for chronic weight-management GLP-1 medications.</li>
          </ol>

          <h2 className="mb-3 mt-10 text-2xl font-bold text-gray-900">A note on price verification</h2>
          <p className="mb-4 text-gray-700">
            We hold both numbers to the same verified standard, and we say so. The{' '}
            <strong>$262.50/month GLP-1 median (n=58)</strong> and the{' '}
            <strong>$4,900 gastric-sleeve median (n=12 all-inclusive packages)</strong> are both
            extracted from published prices, sourced per row, and dated in our pricing dataset. Two
            honest caveats remain on the surgery side: &quot;all-inclusive&quot; means different things
            at different clinics (several bundle hospital and hotel nights; airfare is excluded), and
            surgeon credentials, technique, and follow-up vary widely at any price. Treat the median as
            a verified market midpoint, then confirm the specific clinic&apos;s itemized price,
            inclusions, and surgeon credentials before you commit. See the{' '}
            <Link href="/guides/mexico-bariatric-surgery-prices" className="text-blue-600 hover:underline">
              per-clinic verified bariatric prices
            </Link>.
          </p>

          <h2 className="mb-3 mt-10 text-2xl font-bold text-gray-900">The clinical trade-off, stated plainly</h2>
          <p className="mb-4 text-gray-700">
            Surgery wins on magnitude and durability of weight loss. A sleeve gastrectomy averages about{' '}
            <strong>29.5% total body weight loss at one year</strong>, and because it changes the
            anatomy, the effect does not depend on adherence to a daily or weekly treatment. That is a
            real, structural advantage.
          </p>
          <p className="mb-4 text-gray-700">
            GLP-1 medications win on reversibility and lower acuity. Semaglutide averages about{' '}
            <strong>14.9%</strong> and tirzepatide about <strong>22%</strong> total body weight loss
            while taken — meaningful, non-surgical, and titratable. The catch is continuation: when
            treatment stops, <strong>roughly half of the lost weight returns within a year</strong>. A
            GLP-1 is a treatment you stay on, not a procedure you finish.
          </p>
          <p className="mb-4 text-gray-700">
            Neither is &quot;better&quot; in the abstract. Surgery trades permanence and higher upfront
            risk for larger, more durable loss. Medication trades ongoing cost and adherence for
            reversibility and no operation. The regain reality applies to both routes if the underlying
            treatment stops or is never maintained.
          </p>

          <h2 className="mb-3 mt-10 text-2xl font-bold text-gray-900">The eligibility split most people miss</h2>
          <p className="mb-4 text-gray-700">The two options are not aimed at the same patient.</p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-gray-700">
            <li>
              <strong>GLP-1 medications</strong> are indicated at <strong>BMI ≥ 30, or ≥ 27 with a
              weight-related condition</strong> (e.g., type 2 diabetes, hypertension). This captures a
              large middle band of people who are not surgical candidates.
            </li>
            <li>
              <strong>Bariatric surgery</strong> has traditionally been reserved for <strong>BMI ≥ 40,
              or ≥ 35 with a comorbidity</strong>; updated 2022 society guidance lowered thresholds
              toward ≥ 35 (or ≥ 30 with metabolic disease).
            </li>
          </ul>
          <p className="mb-4 text-gray-700">
            Practical read: if your BMI is in the high-20s to mid-30s, a GLP-1 program may be indicated
            where surgery is not. If your BMI is 40+, surgery is on the table in a way medication
            guidelines don&apos;t fully address. Many people shopping &quot;sleeve in Mexico&quot; are
            price-shopping a procedure they may not clinically need yet — which is exactly why the
            medication comparison belongs in the decision.
          </p>

          <h2 className="mb-3 mt-10 text-2xl font-bold text-gray-900">Total cost at 1, 3, and 5 years</h2>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200 bg-gray-50 text-left">
                  <th className="px-3 py-2 font-semibold text-gray-700">Horizon</th>
                  <th className="px-3 py-2 font-semibold text-gray-700">GLP-1 program (verified $262.50/mo)</th>
                  <th className="px-3 py-2 font-semibold text-gray-700">Gastric sleeve Mexico (verified, one-time)</th>
                </tr>
              </thead>
              <tbody className="align-top">
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2 font-medium text-gray-800">Year 1</td>
                  <td className="px-3 py-2 text-gray-700">$3,150</td>
                  <td className="px-3 py-2 text-gray-700">$4,900 + ~$1,000–$2,000 travel/lodging = <strong>~$5,900–$6,900</strong></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-3 py-2 font-medium text-gray-800">Year 3</td>
                  <td className="px-3 py-2 text-gray-700">$9,450</td>
                  <td className="px-3 py-2 text-gray-700">same one-time cost + vitamins/labs/follow-up</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium text-gray-800">Year 5</td>
                  <td className="px-3 py-2 text-gray-700">$15,750</td>
                  <td className="px-3 py-2 text-gray-700">same one-time cost + vitamins/labs/follow-up</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-gray-700">
            The crossover is the real story. A GLP-1 program&apos;s cumulative cost passes the
            surgery&apos;s one-time cost <strong>during the second year</strong> — <em>if</em> you stay
            on medication continuously and <em>if</em> the surgery price holds. Beyond that horizon, the
            recurring cost of medication exceeds the one-time cost of surgery. This is the legitimate
            core of the facilitator argument — but the honest crossover is measured in low-thousands per
            year and a roughly two-year horizon, not the $120,000 headline. Whether continuous
            medication is even the plan matters: many patients use a GLP-1 for a defined period, not for
            life.
          </p>

          <h2 className="mb-3 mt-10 text-2xl font-bold text-gray-900">A decision framework</h2>
          <p className="mb-4 text-gray-700">Weigh these together with a clinician — not in isolation:</p>
          <ol className="mb-4 list-decimal space-y-2 pl-6 text-gray-700">
            <li><strong>BMI and comorbidities.</strong> Do you meet surgical thresholds, or only medication thresholds? This can decide the question before cost does.</li>
            <li><strong>Time horizon.</strong> Planning to treat weight for 1–2 years, or indefinitely? Short horizons favor medication economically; very long horizons narrow the gap.</li>
            <li><strong>Risk tolerance.</strong> Are you willing to accept surgical and anesthesia risk, and abroad, fragmented follow-up — for larger, more durable loss?</li>
            <li><strong>Reversibility.</strong> Do you want an option you can stop, or a permanent change?</li>
            <li><strong>Continuation realism.</strong> Will you actually stay on a medication? If not, its weight-loss advantage erodes with regain.</li>
            <li><strong>Total landed cost, honestly.</strong> Surgery&apos;s price is not just the quote; medication&apos;s price is not just one month.</li>
          </ol>

          {/* Subjective house unit — SHIPS OFF (NEXT_PUBLIC_SH_BRIDGE_UNIT !== 'on').
              Renders nothing until the disclosure wording is founder-confirmed
              (§6-D2) AND the creative passes the compliance eval. */}
          <SubjectiveBridgeUnit ownershipDisclosure={OWNERSHIP_DISCLOSURE_CANDIDATE} />

          <h2 className="mb-3 mt-10 text-2xl font-bold text-gray-900">The neutral close</h2>
          <p className="mb-4 text-gray-700">
            There is no universally correct answer here. For a patient with a BMI in the low-30s who
            wants a reversible, lower-risk option and may treat for a defined period, a GLP-1 program is
            often the more proportionate first step — and it is cheaper for the first two years or so.
            For a patient at BMI 40+ seeking the largest, most durable weight loss and willing to accept
            surgical risk, a sleeve may be the better-matched intervention. The costs are knowable, the
            outcomes are documented, and the eligibility rules are real. Take this page, the sourced
            figures below, and your own numbers to a licensed clinician, and decide there.
          </p>

          {/* FAQ */}
          <h2 className="mb-4 mt-10 text-2xl font-bold text-gray-900">Frequently asked questions</h2>
          <div className="space-y-5">
            {FAQ_ITEMS.map((f) => (
              <div key={f.question}>
                <h3 className="mb-1 font-bold text-gray-900">{f.question}</h3>
                <p className="text-sm text-gray-700">{f.answer}</p>
              </div>
            ))}
          </div>

          {/* Related */}
          <div className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-3 font-bold text-gray-900">Related VitalityScout guides</h3>
            <ul className="space-y-1 text-sm text-blue-700">
              <li><Link href="/guides/mexico-bariatric-surgery-prices" className="hover:underline">Verified Mexico bariatric surgery prices (per clinic)</Link></li>
              <li><Link href="/guides/does-insurance-cover-bariatric-surgery-abroad" className="hover:underline">Does US insurance cover bariatric surgery abroad?</Link></li>
              <li><Link href="/guides/can-you-use-hsa-fsa-for-medical-care-abroad" className="hover:underline">Using HSA/FSA funds for care abroad</Link></li>
              <li><Link href="/guides/hsa-letter-of-medical-necessity-rules" className="hover:underline">Letter of medical necessity rules</Link></li>
              <li><Link href="/guides/paying-for-medical-tourism" className="hover:underline">How to pay for medical tourism safely</Link></li>
            </ul>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="mb-4 text-lg font-bold text-gray-900">Sources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                American Society for Metabolic and Bariatric Surgery (ASMBS), <em>GLP-1 Medications vs.
                Bariatric Surgery: What the Latest Research Shows</em> — sleeve ~29.5% TBWL at 1 yr;
                semaglutide ~14.9%; tirzepatide ~22%; ~half of lost weight regained within a year of
                stopping GLP-1.{' '}
                <a href="https://asmbs.org/resources/glp-1-medications-vs-bariatric-surgery-what-the-latest-research-shows/" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">asmbs.org</a>
              </li>
              <li>
                ASMBS, <em>Head-to-head Study Shows Bariatric Surgery Superior to GLP-1 Drugs for Weight
                Loss</em> — durability/magnitude comparison.{' '}
                <a href="https://asmbs.org/news_releases/head-to-head-study-shows-bariatric-surgery-superior-to-glp-1-drugs-for-weight-loss/" target="_blank" rel="nofollow noopener" className="text-blue-600 hover:underline">asmbs.org</a>
              </li>
              <li>FDA-approved indications for chronic weight-management GLP-1 medications (BMI ≥ 30, or ≥ 27 with a weight-related comorbidity).</li>
              <li>ASMBS/IFSO 2022 guidelines on metabolic and bariatric surgery indications (BMI thresholds).</li>
              <li><strong>VitalityScout verified pricing dataset, 2026-07</strong> — gastric-sleeve median $4,900 (n=12 all-inclusive packages); GLP-1 program median $262.50/month (n=58). Methodology-stated, dated.</li>
            </ul>
            <p className="mt-4 text-sm italic text-gray-500">
              Clinical figures are population averages from published reviews and do not predict any
              individual&apos;s result. Prices are dated and verified from published sources; inclusions
              on the surgery side vary by clinic. Confirm all figures and your eligibility with licensed
              clinicians before deciding.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-lg border border-gray-300 bg-gray-100 p-6">
            <h3 className="mb-2 font-bold text-gray-900">Disclaimer</h3>
            <p className="text-sm text-gray-700">
              This page is general information, not medical, surgical, financial, or tax advice, and it
              does not recommend surgery or medication for any individual. Both routes carry real risks
              and require a licensed clinician who knows your history. Prices are estimates that change;
              verify everything directly before acting.
            </p>
          </div>
        </article>
      </SidebarShell>
      <Footer />
    </main>
  );
}
