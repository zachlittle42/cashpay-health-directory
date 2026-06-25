import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'Best Longevity Clinics & Anti-Aging Companies (2026)',
  description: 'The best longevity and anti-aging companies in 2026 — what they offer, real membership prices ($149-$25,000+), and evidence vs hype before you buy.',
};

// Real GSC queries we already earn impressions for (anti-aging companies,
// longevity companies, life extension companies, advanced longevity) become
// the FAQ questions. Every price answer ends with the verify-with-provider
// hedge. The visible FAQ block below mirrors this schema exactly.
const FAQ_ITEMS = [
  {
    question: 'What are the best anti-aging companies in 2026?',
    answer: 'There is no single "best" anti-aging company — the right one depends on your budget and what you actually want measured. At the accessible end, biomarker-membership companies like Function Health (around $365/year for 100+ labs) and Lifeforce (about $349 to start, then ~$149/month, founded by Peter Diamandis and Tony Robbins) focus on blood testing and hormone optimization. At the premium imaging end, Fountain Life and Human Longevity, Inc. add whole-body MRI, coronary CT, and genome sequencing, with memberships running roughly $8,000 to $25,000+ per year. All figures are estimates that change often — confirm current pricing directly with each company, and remember none of these are FDA-approved "anti-aging" cures.',
  },
  {
    question: 'How much do longevity companies and clinics cost?',
    answer: 'Pricing spans a wide ladder. Biomarker-membership longevity companies are the cheapest entry point — roughly $200 to $500 per year (Superpower ~$199, Function Health ~$365, InsideTracker Ultimate ~$489 as published in 2026). Hormone-optimization platforms like Hone Health run about $25 to $149-$155 per month for membership plus medication. Full-diagnostic longevity clinics with advanced imaging — Fountain Life, Human Longevity — start around $8,000 and reach $25,000+ per year for the top tiers. These are estimates that move with promotions and tiers; verify the current price with the provider.',
  },
  {
    question: 'Do longevity and life extension companies actually work?',
    answer: 'The honest answer is mixed. Most legitimate longevity companies sell early detection and biomarker tracking — finding disease sooner and optimizing measurable markers — which is genuinely useful. What none of them can sell is a proven way to extend lifespan, because the FDA does not recognize aging as a disease and there is no FDA-approved anti-aging drug. Treatments marketed for "life extension" (NAD+, peptides, rapamycin, hormones for longevity) are largely off-label or unproven for that purpose. Treat the diagnostics as the real value and the life-extension claims with skepticism.',
  },
  {
    question: 'What does an advanced longevity clinic actually include?',
    answer: 'Advanced longevity clinics combine diagnostics and optimization. On the diagnostic side that typically means a comprehensive blood panel (often 100+ biomarkers), whole-body and brain MRI, coronary CT angiography, low-dose lung CT, bone-density/body-composition (DEXA) scanning, and sometimes whole-genome sequencing and AI cancer screening. On the optimization side: hormone management, supplements, lifestyle coaching, and follow-up physician visits. The top tiers bundle imaging that would cost thousands à la carte — which is most of why the membership prices are high.',
  },
  {
    question: 'Is a $20,000 longevity clinic worth it over a $400 testing membership?',
    answer: 'It depends on what you need. A $400/year biomarker membership (Function, Superpower) gets you broad blood testing and trend tracking — the highest-value, lowest-cost layer for most people. A $20,000+ clinic (Fountain Life APEX, Human Longevity) adds advanced imaging that can catch structural disease blood tests miss, plus concierge physicians. If you have specific risk factors or want full-body imaging, the premium tier can be justified; for general optimization, start with a low-cost membership and a DEXA scan. Prices are estimates — confirm with each provider.',
  },
  {
    question: 'Are longevity clinic costs HSA or FSA eligible?',
    answer: 'It depends on the service. Diagnostic testing that qualifies as medical care — many lab panels and physician-ordered imaging — is often HSA/FSA eligible, and some companies (for example Hone Health) explicitly accept HSA cards. Wellness-only memberships and supplements may not qualify. Eligibility is set by IRS rules and your plan, not the clinic — confirm with your plan administrator before assuming a charge qualifies, and keep itemized receipts.',
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

export default function BestLongevityClinics() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Best Longevity Clinics & Anti-Aging Companies (2026)',
    description:
      'A cost-transparency roundup of the leading longevity and anti-aging companies in 2026 — Fountain Life, Human Longevity, Lifeforce, Function Health, Hone Health and more — with real membership pricing, what each includes, and an honest evidence-vs-hype read.',
    url: 'https://vitalityscout.com/guides/best-longevity-clinics',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/best-longevity-clinics#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalTherapy', name: 'Longevity and preventive health programs' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'Fountain Life — Memberships (CORE, APEX, APEX Family)', url: 'https://www.fountainlife.com/membership' },
      { '@type': 'CreativeWork', name: 'Human Longevity, Inc. — Executive Health ($8,000 assessment)', url: 'https://www.humanlongevity.com/executive-health/' },
      { '@type': 'CreativeWork', name: 'Lifeforce — Get Started (Diamandis/Robbins longevity membership)', url: 'https://www.mylifeforce.com/landers/start-now' },
      { '@type': 'CreativeWork', name: 'Function Health — Pricing', url: 'https://www.functionhealth.com/pricing' },
      { '@type': 'CreativeWork', name: 'Hone Health — Membership overview (Basic, Plus, Premium)', url: 'https://help.honehealth.com/hc/en-us/articles/32991643445655-Hone-Health-Membership-Overview-Compare-Basic-Plus-Premium-Plans' },
      { '@type': 'CreativeWork', name: 'National Law Review — FDA and the Fountain of Youth: regulatory hurdles for anti-aging therapies', url: 'https://natlawreview.com/article/fda-and-fountain-youth-regulatory-hurdles-longevity-biotech-community' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/best-longevity-clinics#faq', url: 'https://vitalityscout.com/guides/best-longevity-clinics' };

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
              <span className="text-gray-900">Best Longevity Clinics</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/longevity" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Longevity Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Longevity
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Best Longevity Clinics &amp; Anti-Aging Companies (2026)
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              The longevity industry now runs from $200-a-year blood-testing memberships to
              $25,000 full-body-imaging clinics. Here is who the named players are, what they
              actually offer, what it costs, and where the evidence ends and the marketing begins.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                <strong>The best longevity and anti-aging companies in 2026 fall into three
                tiers.</strong> Biomarker memberships (Function Health ~$365/yr, Superpower ~$199/yr,
                Lifeforce ~$149/mo) are the accessible entry point. Hormone-optimization platforms
                (Hone Health ~$25-$155/mo) target testosterone and metabolic health. Premium
                diagnostic clinics (Fountain Life, Human Longevity) add MRI, CT, and genome
                sequencing for roughly $8,000-$25,000+/yr. None offer an FDA-approved way to extend
                lifespan. Prices are estimates — verify with each provider. This is information, not
                medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: June 2026 • 12 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick three-tier overview */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">The three tiers at a glance</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Biomarker membership</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• ~$200-$500/year (estimate)</li>
                  <li>• Function, Superpower, Lifeforce</li>
                  <li>• Blood testing + tracking</li>
                  <li>• Lowest cost, highest reach</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Hormone optimization</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• ~$25-$155/month (estimate)</li>
                  <li>• Hone Health, TRT platforms</li>
                  <li>• Hormones + metabolic care</li>
                  <li>• Membership + medication</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-purple-600 mb-2">Premium diagnostics</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• ~$8,000-$25,000+/yr (estimate)</li>
                  <li>• Fountain Life, Human Longevity</li>
                  <li>• MRI, CT, genome sequencing</li>
                  <li>• Concierge physicians</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The honest bottom line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-green-700 mb-1">What these companies genuinely deliver:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Early detection of disease via testing and imaging</li>
                  <li>• Biomarker trends you can act on</li>
                  <li>• Concierge-level access to physicians</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-amber-700 mb-1">What none of them can sell you:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• An FDA-approved way to slow or reverse aging</li>
                  <li>• A proven lifespan-extension treatment</li>
                  <li>• Guaranteed outcomes from any protocol</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What we&apos;ll cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#what" className="text-blue-600 hover:underline">1. What &quot;longevity company&quot; actually means</a></li>
              <li><a href="#table" className="text-blue-600 hover:underline">2. The named companies, compared</a></li>
              <li><a href="#premium" className="text-blue-600 hover:underline">3. Premium diagnostic clinics</a></li>
              <li><a href="#biomarker" className="text-blue-600 hover:underline">4. Biomarker &amp; testing memberships</a></li>
              <li><a href="#hormone" className="text-blue-600 hover:underline">5. Hormone-optimization platforms</a></li>
              <li><a href="#evidence" className="text-blue-600 hover:underline">6. Evidence vs hype: the FDA reality</a></li>
              <li><a href="#choose" className="text-blue-600 hover:underline">7. How to choose without overpaying</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              &quot;Longevity company,&quot; &quot;anti-aging company,&quot; and &quot;life extension
              company&quot; get used interchangeably, but they describe businesses doing very different
              things at very different prices. Some run a $200-a-year blood-test subscription. Some
              charge $25,000 for full-body imaging and a concierge doctor. Knowing which is which —
              and what the evidence actually supports — is the difference between smart spending and
              expensive hope. Here is the cost-transparent breakdown.
            </p>

            <h2 id="what" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What a &quot;Longevity Company&quot; Actually Means</h2>

            <p className="text-gray-700 mb-4">
              The advanced-longevity market sorts into three business models. Understanding the model
              tells you what you are really buying:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Diagnostic / early-detection clinics</strong> sell comprehensive testing and imaging to catch disease before symptoms — the value is information, not treatment.</li>
              <li><strong>Biomarker-membership platforms</strong> sell recurring blood testing and trend tracking, usually at-home or via a national lab, with software to interpret results.</li>
              <li><strong>Optimization platforms</strong> sell ongoing intervention — most commonly hormone therapy, supplements, and coaching — wrapped in a subscription.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              The most expensive companies blend all three. The cheapest do one well. Neither is
              inherently &quot;better&quot; — they serve different goals and budgets.
            </p>

            <h2 id="table" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Named Companies, Compared</h2>

            <p className="text-gray-700 mb-4">
              Below are real, currently operating companies, grouped by model, with published or
              widely reported pricing. Treat every figure as an <strong>estimate that changes with
              tiers and promotions</strong> — confirm the current number on each company&apos;s own
              site before committing.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Company</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Model</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical price (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">What stands out</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Fountain Life</td>
                    <td className="border border-gray-300 px-4 py-3">Premium diagnostics</td>
                    <td className="border border-gray-300 px-4 py-3">CORE ~$2,995/yr; APEX ~$19,500+/yr</td>
                    <td className="border border-gray-300 px-4 py-3">Whole-body &amp; brain MRI, coronary CT, genome sequencing</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Human Longevity, Inc.</td>
                    <td className="border border-gray-300 px-4 py-3">Premium diagnostics</td>
                    <td className="border border-gray-300 px-4 py-3">Executive Health from ~$8,000; 100+ tiers to ~$25,000</td>
                    <td className="border border-gray-300 px-4 py-3">Whole-genome sequencing + MRI heritage (J.C. Venter founded)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Lifeforce</td>
                    <td className="border border-gray-300 px-4 py-3">Biomarker + optimization</td>
                    <td className="border border-gray-300 px-4 py-3">~$349 to start, then ~$149/mo</td>
                    <td className="border border-gray-300 px-4 py-3">At-home phlebotomy; founded by Peter Diamandis &amp; Tony Robbins</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Function Health</td>
                    <td className="border border-gray-300 px-4 py-3">Biomarker membership</td>
                    <td className="border border-gray-300 px-4 py-3">~$365/yr</td>
                    <td className="border border-gray-300 px-4 py-3">100+ labs at intake, 60+ follow-up; runs on Quest</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Superpower</td>
                    <td className="border border-gray-300 px-4 py-3">Biomarker membership</td>
                    <td className="border border-gray-300 px-4 py-3">~$199/yr (~$399 in NY/NJ)</td>
                    <td className="border border-gray-300 px-4 py-3">Lowest-cost broad-panel entry point</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Hone Health</td>
                    <td className="border border-gray-300 px-4 py-3">Hormone optimization</td>
                    <td className="border border-gray-300 px-4 py-3">Basic ~$25/mo; Plus ~$135; Premium ~$149-$155 (+meds)</td>
                    <td className="border border-gray-300 px-4 py-3">TRT-focused; $65 at-home hormone assessment</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>The pattern:</strong> the price gap between tiers is mostly imaging. A
              biomarker membership is blood work and software; a premium clinic is MRI, CT, and
              genome sequencing bundled with a concierge physician. You are paying for hardware time
              and radiologists, not a secret protocol.
            </p>

            <h2 id="premium" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Premium Diagnostic Clinics</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Fountain Life</h3>
            <p className="text-gray-700 mb-4">
              Fountain Life sells preventive longevity memberships built around advanced imaging. Its
              tiers are publicly named CORE, APEX, and APEX Family. CORE is widely reported to start
              around $2,995/year for quarterly blood testing and physician televisits, while APEX —
              which adds whole-body and brain MRI, coronary CT angiography with AI analysis, low-dose
              lung CT, bone-density scanning, and whole-genome sequencing — is reported in the
              roughly $19,500-$21,500/year range, with family packages reported substantially higher.
              Fountain Life does not publish exact prices on its membership page, so treat these as
              reported estimates to confirm directly.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Human Longevity, Inc.</h3>
            <p className="text-gray-700 mb-4">
              Founded out of the genomics work of J. Craig Venter, Human Longevity, Inc. runs
              executive-health and &quot;100+&quot; programs that pair whole-genome sequencing with MRI
              and a broad clinical workup. Its published Executive Health assessment starts around
              $8,000, with higher 100+ tiers (adding continuous glucose monitoring, liquid-biopsy
              cancer screening, body-composition MRI, and concierge care) reported up to roughly
              $19,000, and Health Nucleus packages reaching $25,000 and beyond. As always, the
              company quotes individualized pricing — verify the current tier cost with them.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why the imaging matters:</strong> whole-body MRI and coronary CT can surface
                structural disease — aneurysms, tumors, coronary plaque — that no blood test detects.
                That is the real argument for the premium tier. The counter-argument is incidental
                findings: imaging healthy people can turn up ambiguous results that lead to anxiety
                and more testing. Both are true; weigh them with a clinician.
              </p>
            </div>

            <h2 id="biomarker" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Biomarker &amp; Testing Memberships</h2>

            <p className="text-gray-700 mb-4">
              This is the fastest-growing — and most accessible — corner of the longevity market.
              These companies sell recurring lab testing plus software to interpret it.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Function Health</strong> — around $365/year (reduced in 2026 from its earlier $499) for 100+ lab tests at your annual visit and 60+ at follow-up, processed through Quest. Strong for breadth of standard biomarkers. See our <Link href="/guides/function-health-review" className="text-blue-600 hover:underline">Function Health review</Link> for the full breakdown.</li>
              <li><strong>Superpower</strong> — reported around $199/year (about $399 in New York and New Jersey), positioned as the lowest-cost broad-panel membership.</li>
              <li><strong>Lifeforce</strong> — about $349 to start and roughly $149/month thereafter, testing 50+ biomarkers spanning hormones, metabolic, cardiovascular, inflammation, and nutrients, with at-home phlebotomy. Co-founded by Peter Diamandis and Tony Robbins, which gives it unusual consumer reach.</li>
              <li><strong>InsideTracker</strong> — its Ultimate plan is reported around $489/year, blending blood biomarkers with lifestyle recommendations.</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">A cheaper path to the same blood work</h4>
              <p className="text-gray-700">
                Most of these memberships run on the same national labs (Quest, Labcorp) you can
                access directly. If you mainly want bloodwork, compare the membership against buying
                the panel yourself — see our <Link href="/guides/quest-vs-labcorp-pricing" className="text-blue-600 hover:underline">Quest vs Labcorp self-pay guide</Link>. The membership&apos;s value is the curated panel and the
                software, not exclusive lab access.
              </p>
            </div>

            <h2 id="hormone" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Hormone-Optimization Platforms</h2>

            <p className="text-gray-700 mb-4">
              A large share of &quot;anti-aging&quot; spending is really hormone optimization — most
              commonly testosterone for men and HRT for women. These platforms sell a membership plus
              the medication.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Hone Health</strong> is a representative example. Its Basic membership is around
              $25/month (lab testing every six months and members-only pricing), with Plus around
              $135/month and Premium around $149-$155/month for fuller clinical care. The $65 at-home
              hormone assessment measures 50+ biomarkers; testosterone medication is reported from
              about $28/month for injections. Hone does not bill insurance but accepts HSA. Membership
              and medication are priced separately, so add both when comparing.
            </p>

            <p className="text-gray-700 mb-4">
              Hormone therapy is real medicine with real candidacy criteria and real risks — it is
              not a generic anti-aging button. Whether you need it is a clinical decision, not a
              subscription choice. For the deeper picture, see our companion guides on what these
              protocols involve.
            </p>

            <h2 id="evidence" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Evidence vs Hype: The FDA Reality</h2>

            <p className="text-gray-700 mb-4">
              This is the section the marketing pages skip. Here is the regulatory fact that frames
              every &quot;life extension&quot; claim: <strong>the FDA does not recognize aging as a
              disease, and there is no FDA-approved drug or therapy for anti-aging or life
              extension.</strong> Because the FDA approves drugs against specific diseases, and aging
              is not classified as one, there is currently no approval pathway for a treatment that
              simply &quot;slows aging.&quot;
            </p>

            <p className="text-gray-700 mb-4">
              What that means in practice:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>The diagnostics are legitimate.</strong> Blood panels, MRI, CT, and genome sequencing are established medical tools. Early detection has real value.</li>
              <li><strong>The popular &quot;longevity&quot; interventions are off-label or unproven for that purpose.</strong> NAD+ infusions, peptides, rapamycin, and hormones are not FDA-approved to extend lifespan; they are used off-label or sold as wellness. Read our honest breakdowns of <Link href="/guides/nad-therapy-guide" className="text-blue-600 hover:underline">NAD+ therapy</Link>, <Link href="/guides/peptide-therapy-guide" className="text-blue-600 hover:underline">peptide therapy</Link>, and <Link href="/guides/rapamycin-for-longevity" className="text-blue-600 hover:underline">rapamycin for longevity</Link> before buying any of them.</li>
              <li><strong>No company can guarantee a longevity outcome.</strong> Any provider promising a number of added years is overselling what the science supports.</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">The single most useful filter</h4>
              <p className="text-gray-700">
                Separate the <em>measurement</em> from the <em>protocol</em>. Pay for measurement
                (testing, imaging, biomarker trends) — it is evidence-based and actionable. Be far
                more skeptical of the protocol layer (proprietary supplement stacks, IV drips,
                &quot;anti-aging&quot; injections) where claims routinely outrun the data.
              </p>
            </div>

            <h2 id="choose" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Choose Without Overpaying</h2>

            <p className="text-gray-700 mb-4">
              A practical ladder, cheapest first — most people never need to climb past the second
              rung:
            </p>

            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Start with a biomarker membership</strong> (Function ~$365, Superpower ~$199) for broad blood work and trend tracking.</li>
              <li><strong>Add a body-composition scan</strong> — a DEXA scan ($40-$180) tells you more about recomposition than most premium panels. See our <Link href="/guides/cheapest-dexa-scan" className="text-blue-600 hover:underline">cheapest DEXA scan guide</Link>.</li>
              <li><strong>Treat specific findings with a clinician,</strong> not a generic subscription — abnormal hormones or risk markers warrant real care.</li>
              <li><strong>Climb to a premium imaging clinic only with a reason</strong> — strong family history, specific risk factors, or a genuine desire for full-body imaging — and budget $8,000-$25,000+/year.</li>
              <li><strong>Verify every price and ask what is à la carte,</strong> because headline membership figures often exclude add-on imaging and medication.</li>
            </ol>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">The location and luxury premium</h4>
              <p className="text-gray-700">
                Some of the highest prices are for hospitality and setting, not better medicine. If
                you want the destination-clinic experience, our <Link href="/guides/dubai-longevity-guide" className="text-blue-600 hover:underline">Dubai longevity guide</Link> covers the luxury end. The underlying diagnostics
                are often the same tests available far cheaper at home.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Cash-Pay Longevity &amp; Diagnostic Options</h3>
            <p className="mb-6 text-blue-100">
              See longevity clinics, biomarker memberships, and body-composition scanning side by
              side, with transparent self-pay pricing.
            </p>
            <Link
              href="/longevity"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse Longevity Providers
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
              not affiliated with Fountain Life, Human Longevity, Lifeforce, Function Health, Hone
              Health, or any company named here. Pricing is based on publicly available data and
              third-party reporting and is presented as estimates that vary by tier, location, and
              current promotions — always verify the current price directly with each company before
              purchasing. No longevity or anti-aging treatment is FDA-approved to extend lifespan, and
              no provider can guarantee a health outcome. Discuss any testing, imaging, hormone, or
              supplement decision with a licensed healthcare provider, and review abnormal results
              with a clinician who knows your history.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Fountain Life — fountainlife.com/membership (CORE, APEX, APEX Family tiers and included diagnostics)</li>
              <li>• Human Longevity, Inc. — humanlongevity.com/executive-health (Executive Health assessment ~$8,000; 100+ / Health Nucleus tiers reported higher)</li>
              <li>• Lifeforce — mylifeforce.com (membership model, founders Peter Diamandis &amp; Tony Robbins); pricing via independent provider review</li>
              <li>• Function Health — functionhealth.com/pricing (annual membership, lab counts, 2026 price change)</li>
              <li>• Hone Health — help.honehealth.com (Basic/Plus/Premium membership tiers, hormone assessment, medication pricing)</li>
              <li>• National Law Review / Womble Bond Dickinson — FDA regulatory hurdles for anti-aging therapies (aging not classified as a disease; no FDA-approved anti-aging drug)</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Longevity Company Price Cheat Sheet"
            description="The three tiers, real prices, and the evidence-vs-hype questions to ask before you pay."
            source="guide_best_longevity_clinics"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
