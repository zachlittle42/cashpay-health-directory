import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Biological Age Test Cost (2026): TruDiagnostic, Elysium' },
  alternates: { canonical: 'https://vitalityscout.com/guides/epigenetic-age-test-cost' },
  description: 'Biological age test cost compared: TruDiagnostic, Elysium Index, GlycanAge & Tally Health prices, what each measures, accuracy, and whether it is worth it.',
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a biological age test cost?',
    answer: 'Consumer epigenetic biological age tests are typically estimated at around $249-$549 for a single test as of 2026. TruDiagnostic TruAge Complete and Elysium Index both list near $499 one-time (each drops to roughly $249-$299 on a subscription), GlycanAge runs about $499-$549, and Tally Health\'s cheek-swab test is around $249. Most accept HSA/FSA but are not covered by insurance. These are estimates that change with promotions — confirm the current price on each provider\'s own site.',
  },
  {
    question: 'Is a biological age test worth it?',
    answer: 'It depends on what you want from it. If you are actively changing your habits and want a molecular data point to track over time, a validated test can be useful feedback. For one-time curiosity, the value is weaker: biological age is a model-based estimate, the same sample can score several years apart across different algorithms, and no number diagnoses or predicts disease on its own. Treat it as a trackable wellness metric, not a medical test, and discuss anything concerning with a clinician.',
  },
  {
    question: 'How accurate are epigenetic age tests?',
    answer: 'Accuracy varies a lot by which clock the test uses. Newer "pace of aging" measures like DunedinPACE were built from high-reliability methylation sites and report test-retest reliability (ICC) above 0.90 in technical-replicate studies, while several earlier clocks showed only moderate reliability. Because results are statistical estimates rather than fixed measurements, the most useful signal is the trend across repeat tests on the same platform, not a single absolute number. Verify what clock a test uses before buying.',
  },
  {
    question: 'What is the difference between TruDiagnostic, Elysium Index, and GlycanAge?',
    answer: 'They measure aging differently. TruDiagnostic TruAge uses a finger-prick blood sample and reports DNA-methylation clocks (including DunedinPACE and OMICmAge) plus organ-system ages. Elysium Index uses a saliva sample and DNA methylation to report a biological age and nine system ages. GlycanAge uses a finger-prick blood sample but measures IgG glycans tied to inflammation rather than DNA methylation, so it is a different biology entirely. None is a substitute for clinical care.',
  },
  {
    question: 'Are biological age tests covered by insurance or HSA/FSA?',
    answer: 'They are generally not covered by health insurance because they are wellness tests, not diagnostic ones. Several providers, including TruDiagnostic, state you can pay with HSA or FSA funds, which effectively discounts the test by your tax rate. Eligibility depends on your specific plan, so confirm with your plan administrator before assuming a test qualifies.',
  },
  {
    question: 'How long do biological age test results take?',
    answer: 'Most providers quote roughly three to six weeks from when the lab receives your sample. TruDiagnostic and similar blood-based tests commonly estimate about 3-4 weeks (up to 4-6 for some panels), Elysium Index estimates around six weeks, and GlycanAge estimates about 3-5 weeks because it runs the sample multiple times. Turnaround is set by each provider — check the current estimate on the product page.',
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

export default function EpigeneticAgeTestCost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Biological Age Test Cost: TruDiagnostic, Elysium Index & GlycanAge Compared',
    description:
      'A practical, cost-focused comparison of consumer biological / epigenetic age tests — TruDiagnostic TruAge, Elysium Index, GlycanAge and Tally Health — covering price, what each measures, accuracy, and whether it is worth buying.',
    url: 'https://vitalityscout.com/guides/epigenetic-age-test-cost',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/epigenetic-age-test-cost#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalTest', name: 'Epigenetic biological age testing' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'TruDiagnostic — TruAge Complete epigenetic collection (pricing, clocks, turnaround)', url: 'https://shop.trudiagnostic.com/products/truage-complete-epigenetic-collection' },
      { '@type': 'CreativeWork', name: 'Elysium Health — Index biological age test kit', url: 'https://www.elysiumhealth.com/products/index' },
      { '@type': 'CreativeWork', name: 'GlycanAge — test, how it works, accuracy & cost', url: 'https://glycanage.com/frequently-asked-questions/glycanage-test-how-it-works-accuracy-cost' },
      { '@type': 'CreativeWork', name: 'Tally Health — TallyAge test kit', url: 'https://tallyhealth.com/products/test-kit' },
      { '@type': 'CreativeWork', name: 'DunedinPACE, a DNA methylation biomarker of the pace of aging (eLife / PMC8853656)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8853656/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/epigenetic-age-test-cost#faq', url: 'https://vitalityscout.com/guides/epigenetic-age-test-cost' };

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
              <span className="text-gray-900">Biological Age Test Cost</span>
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
              Biological Age Test Cost (2026): What You Pay and Whether It Is Worth It
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              TruDiagnostic, Elysium Index, GlycanAge and Tally Health all sell a number for
              how old your body really is. Here is what each costs, what it actually measures,
              how accurate it is, and when the spend makes sense.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                A consumer <strong>biological age test typically costs about $249-$549</strong> for a
                single kit in 2026. TruDiagnostic TruAge Complete and Elysium Index both list near
                <strong> $499 one-time</strong> (roughly $249-$299 on a subscription), GlycanAge runs
                about <strong>$499-$549</strong>, and Tally Health&apos;s cheek-swab test is around
                <strong> $249</strong>. Most accept HSA/FSA but are not insured. Results are
                model-based estimates best tracked over time — prices change, so verify on each
                provider&apos;s site. This is information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: June 2026 • 11 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Comparison Box */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Cost Snapshot (estimates)</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">DNA-methylation clocks</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• TruDiagnostic TruAge: ~$499 one-time / ~$249 sub</li>
                  <li>• Elysium Index: ~$499 one-time / ~$299 sub</li>
                  <li>• Tally Health (TallyAge): ~$249 per test</li>
                  <li>• Sample: blood (TruAge), saliva (Index), cheek swab (Tally)</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Glycan (inflammation) clock</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• GlycanAge: ~$499-$549 single (US estimate)</li>
                  <li>• ~$849-$899 two-test bundle (estimate)</li>
                  <li>• Measures IgG glycans, not DNA methylation</li>
                  <li>• Includes a 1:1 specialist call</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              All figures are estimates that change with promotions and exchange rates — confirm the
              current price on each provider&apos;s own site before buying.
            </p>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">A test may be worth it if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You are actively changing habits and want feedback</li>
                  <li>• You will retest on the same platform over time</li>
                  <li>• You can pay with HSA/FSA and treat it as wellness</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">Probably skip it if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You want one number out of curiosity</li>
                  <li>• You expect a diagnosis or disease prediction</li>
                  <li>• You will not act on or re-measure the result</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#what" className="text-blue-600 hover:underline">1. What a biological age test measures</a></li>
              <li><a href="#cost" className="text-blue-600 hover:underline">2. Cost comparison by brand</a></li>
              <li><a href="#brands" className="text-blue-600 hover:underline">3. The main tests, one by one</a></li>
              <li><a href="#accuracy" className="text-blue-600 hover:underline">4. How accurate are they really?</a></li>
              <li><a href="#payment" className="text-blue-600 hover:underline">5. HSA/FSA and payment</a></li>
              <li><a href="#worth" className="text-blue-600 hover:underline">6. Is it worth it?</a></li>
              <li><a href="#related" className="text-blue-600 hover:underline">7. Related longevity testing</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              A biological age test promises to tell you how old your body is, as opposed to how many
              birthdays you have had. The pitch is compelling and the price is real: most kits land
              somewhere between roughly $249 and $549. Before you spend it, it helps to know that
              &quot;biological age&quot; is not one thing — different tests measure different biology,
              with different accuracy, and the number you get is an estimate, not a fact. Here is the
              honest, cost-first breakdown.
            </p>

            <h2 id="what" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What a Biological Age Test Actually Measures</h2>

            <p className="text-gray-700 mb-4">
              Most consumer tests fall into two camps, and they measure genuinely different things.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">DNA-methylation (epigenetic) clocks</h3>
            <p className="text-gray-700 mb-4">
              These read chemical tags called methylation marks on your DNA. The pattern of those
              tags changes predictably with age, so an algorithm — an &quot;epigenetic clock&quot; —
              converts the pattern into an estimated biological age. Newer clocks go further: instead
              of a static age, DunedinPACE estimates your current <em>pace</em> of aging, like a
              speedometer rather than an odometer. TruDiagnostic, Elysium Index and Tally Health all
              sit in this camp, though they use different samples and different proprietary clocks.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Glycan (inflammation) clocks</h3>
            <p className="text-gray-700 mb-4">
              GlycanAge takes a different route. It measures glycans — sugar molecules attached to
              your IgG antibodies — which reflect chronic, low-grade inflammation that builds over
              months. Because it integrates a longer-term signal rather than DNA methylation, it is a
              separate biology, and its number is not directly comparable to an epigenetic-clock
              result.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why this matters for cost:</strong> you are not buying the same product at
                different prices. A blood-based methylation panel that reports organ-system ages is a
                different test than a saliva clock or a glycan inflammation score. Decide which
                biology you actually want before comparing dollar figures.
              </p>
            </div>

            <h2 id="cost" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cost Comparison by Brand</h2>

            <p className="text-gray-700 mb-4">
              The figures below are <strong>estimates drawn from each provider&apos;s published
              pricing and third-party reviews</strong>, not live quotes. Subscription prices assume an
              ongoing plan; promotions move these numbers frequently. Confirm the current price on the
              provider&apos;s own product page before buying.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Test</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Single-test cost (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Sample</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">What it measures</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">TruDiagnostic TruAge Complete</td>
                    <td className="border border-gray-300 px-4 py-3">~$499 one-time / ~$249 subscribe &amp; save</td>
                    <td className="border border-gray-300 px-4 py-3">Finger-prick blood</td>
                    <td className="border border-gray-300 px-4 py-3">DNA methylation; DunedinPACE, OMICmAge, organ-system ages</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Elysium Index</td>
                    <td className="border border-gray-300 px-4 py-3">~$499 one-time / ~$299 on subscription</td>
                    <td className="border border-gray-300 px-4 py-3">Saliva</td>
                    <td className="border border-gray-300 px-4 py-3">DNA methylation; biological age + nine system ages</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">GlycanAge</td>
                    <td className="border border-gray-300 px-4 py-3">~$499-$549 single (US); ~$849-$899 bundle</td>
                    <td className="border border-gray-300 px-4 py-3">Finger-prick blood</td>
                    <td className="border border-gray-300 px-4 py-3">IgG glycans (inflammation); includes specialist call</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Tally Health (TallyAge)</td>
                    <td className="border border-gray-300 px-4 py-3">~$249 per test (membership ~$129/mo)</td>
                    <td className="border border-gray-300 px-4 py-3">Cheek swab</td>
                    <td className="border border-gray-300 px-4 py-3">DNA methylation; proprietary TallyAge clock</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>The pattern:</strong> single-test pricing clusters near $499, with subscriptions
              and cheek-swab options pulling the floor down toward roughly $249. The cheapest sticker
              is not automatically the best value — a less-validated clock or a one-off test you never
              repeat may cost less but tell you less.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Subscriptions cut the per-test price — if you actually retest</h4>
              <p className="text-gray-700">
                Both TruDiagnostic and Elysium roughly halve the per-test price on a subscription,
                because the model is built around tracking change over time. That is genuinely the
                better use of these tests. But only commit to a subscription if you will retest;
                otherwise the one-time price is the honest number to compare.
              </p>
            </div>

            <h2 id="brands" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Main Tests, One by One</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">TruDiagnostic — TruAge</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>TruAge Complete is estimated at ~$499 one-time, dropping to ~$249 on subscribe &amp; save; a TruAge + TruHealth combo runs ~$849</li>
              <li>Finger-prick blood sample; reports DNA-methylation clocks including DunedinPACE (pace of aging) and OMICmAge, plus organ-system ages and a methylation-based telomere estimate</li>
              <li>Results estimated in about 3-4 weeks (up to 4-6 for some panels) from lab receipt</li>
              <li>HSA/FSA accepted; not covered by insurance</li>
              <li>The most data-rich option of the group, which is why reviewers tend to frame it as the &quot;track over time&quot; pick rather than the curiosity pick</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Elysium Health — Index</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Index is estimated at ~$499 one-time, or starting around ~$299 on an annual or semi-annual subscription</li>
              <li>Saliva sample analyzed for DNA methylation; reports a biological age plus nine system ages (brain, heart, metabolic, immune, inflammation, kidney, liver, hormone, blood)</li>
              <li>Results estimated about six weeks after the lab receives your saliva sample</li>
              <li>Does not include telomere length or DunedinPACE; focuses on system-level aging</li>
              <li>The saliva collection is the easiest of the methylation tests for the squeamish</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">GlycanAge</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>US pricing is estimated around $499-$549 for a single test and ~$849-$899 for a two-test bundle</li>
              <li>Finger-prick blood; measures IgG glycans tied to chronic inflammation rather than DNA methylation</li>
              <li>Every plan includes a full report, glycan profile and a 1:1 specialist call</li>
              <li>Results estimated in about 3-5 weeks because the sample is run multiple times</li>
              <li>Best understood as an inflammation-aging signal, not an epigenetic-clock number</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Tally Health — TallyAge</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>TallyAge is estimated around $249 per test, or about $129/month for a membership that includes two tests a year plus supplements</li>
              <li>Painless cheek-swab sample; DNA-methylation based proprietary TallyAge clock</li>
              <li>Co-founded with longevity researcher David Sinclair; the lowest single-test entry price among the major players</li>
              <li>Caveat: the cheek-swab method is less validated than blood-based tests, and the proprietary clock is not independently peer-validated — weigh that against the lower price</li>
            </ul>

            <h2 id="accuracy" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How Accurate Are They Really?</h2>

            <p className="text-gray-700 mb-4">
              This is where the honest answer matters most. Biological age is a <strong>model-based
              estimate</strong>, not a direct measurement like blood pressure. Two things follow from
              that.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>First, the clock matters more than the brand.</strong> Reliability varies a lot
              by which algorithm a test uses. In technical-replicate studies, the pace-of-aging measure
              DunedinPACE was built from methylation sites pre-selected for stability and reported
              test-retest reliability (ICC) above 0.90 — roughly 0.96-0.97 in same-platform replicates.
              Several earlier-generation clocks showed only moderate reliability by comparison. So a
              test reporting DunedinPACE is using one of the more reproducible measures available.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Second, a single number is fragile.</strong> Reviews note that scores can differ
              by several years across different algorithms applied to the same sample, and TruDiagnostic
              itself reports roughly 95% reproducibility on repeat samples — meaning even the same test
              can wobble a bit run to run. The practical takeaway: the trend across repeat tests on the
              same platform is far more meaningful than any one absolute age.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">The accuracy rule of thumb</h4>
              <p className="text-gray-700">
                Trust the direction, not the decimal. If your pace-of-aging or biological age moves
                steadily down across several same-platform tests while you change your habits, that is
                a credible signal. A one-time number that says you are &quot;four years younger&quot; is
                a fun headline and a weak fact. Never read these as a diagnosis.
              </p>
            </div>

            <h2 id="payment" className="text-2xl font-bold text-gray-900 mt-12 mb-6">HSA/FSA and Payment</h2>

            <p className="text-gray-700 mb-4">
              Biological age tests are wellness products, so health insurance generally does not cover
              them. The good news is that several providers — TruDiagnostic among them — state you can
              pay with HSA or FSA funds, which effectively discounts the test by your marginal tax rate.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>HSA/FSA may apply:</strong> confirm eligibility with your plan administrator before assuming a kit qualifies</li>
              <li><strong>Subscriptions lower the per-test price:</strong> useful only if you genuinely plan to retest</li>
              <li><strong>Watch for add-ons:</strong> coaching, supplements and consultations can raise the all-in cost above the kit price</li>
            </ul>

            <h2 id="worth" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Is a Biological Age Test Worth It?</h2>

            <p className="text-gray-700 mb-4">
              Honestly, it depends on how you will use it. A balanced view:
            </p>

            <div className="bg-blue-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Worth considering if:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You are actively changing diet, training, sleep or other habits and want molecular feedback</li>
                <li>You will retest on the same platform so the trend means something</li>
                <li>You can pay with HSA/FSA and treat the number as a wellness metric, not a verdict</li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                Good fit for: data-driven people running a deliberate, trackable longevity routine
              </p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Probably skip it if:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You want a single number out of one-time curiosity</li>
                <li>You expect a diagnosis, a disease prediction, or a guaranteed outcome</li>
                <li>You will not act on the result or measure it again</li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                Better fit: put the $499 toward established basics first (bloodwork, a clinician visit)
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">A simple decision framework</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li>Decide which biology you want — DNA-methylation clock vs glycan inflammation score</li>
              <li>Check whether the test reports a well-validated measure (e.g., DunedinPACE) you can track</li>
              <li>Compare the all-in cost, including any subscription, coaching or supplement add-ons</li>
              <li>Commit to retesting on the same platform, or buy the cheaper one-off and keep expectations modest</li>
              <li>Confirm HSA/FSA eligibility and the current price on the provider&apos;s own site</li>
            </ol>

            <h2 id="related" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Related Longevity Testing</h2>
            <p className="text-gray-700 mb-4">
              An epigenetic age number is one data point. For most people, conventional biomarkers and
              a real clinician relationship do more, for less. A few companions worth comparing:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Comprehensive biomarker panels:</strong> our <Link href="/guides/function-health-review" className="text-blue-600 hover:underline">Function Health review</Link> covers a ~100-biomarker membership that tracks the basics most clocks build on</li>
              <li><strong>Full-service longevity programs:</strong> see the <Link href="/guides/best-longevity-clinics" className="text-blue-600 hover:underline">best longevity clinics guide</Link> for memberships that bundle testing with a care team</li>
              <li><strong>Supplements in the longevity stack:</strong> our <Link href="/guides/best-nad-supplement" className="text-blue-600 hover:underline">NMN vs NR (NAD+) guide</Link> weighs the evidence behind a common add-on</li>
              <li><strong>Browse the category:</strong> the <Link href="/longevity" className="text-blue-600 hover:underline">longevity hub</Link> and the full <Link href="/guides" className="text-blue-600 hover:underline">guides library</Link> cover more cash-pay options</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Cash-Pay Longevity Options</h3>
            <p className="mb-6 text-blue-100">
              See biomarker memberships, longevity clinics and testing platforms side by side, with
              transparent self-pay pricing.
            </p>
            <Link
              href="/longevity"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Explore Longevity Testing
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
              not affiliated with TruDiagnostic, Elysium Health, GlycanAge, or Tally Health. Pricing is
              based on publicly available data and third-party reviews and is presented as estimates
              that vary by provider, subscription, region, and current promotions — always verify the
              current price directly on each provider&apos;s site before purchasing. Biological and
              epigenetic age results are model-based estimates for wellness and self-tracking; they are
              not diagnostic, do not predict or prevent disease, and are not a substitute for clinical
              care. Abnormal or concerning health questions should be reviewed with a licensed
              healthcare provider.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• TruDiagnostic — shop.trudiagnostic.com (TruAge Complete pricing, clocks, sample type, turnaround, HSA/FSA)</li>
              <li>• Elysium Health — elysiumhealth.com/products/index (Index pricing, saliva sample, nine system ages, turnaround)</li>
              <li>• GlycanAge — glycanage.com (single/bundle pricing, IgG-glycan method, specialist call, turnaround)</li>
              <li>• Tally Health — tallyhealth.com (TallyAge cheek-swab test pricing and membership)</li>
              <li>• DunedinPACE, a DNA methylation biomarker of the pace of aging — eLife / PMC8853656 (test-retest reliability)</li>
              <li>• Third-party reviews (KnowYourDNA, GlycanAge, NOVOS) for cross-checked price ranges and reproducibility context</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Longevity Testing Cost Cheat Sheet"
            description="Biological age tests, biomarker panels and longevity clinics, with transparent self-pay pricing."
            source="guide_epigenetic_age_test_cost"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
