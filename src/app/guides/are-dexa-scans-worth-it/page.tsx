import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Are DEXA Scans Worth It? 2026 Value & Reviews Guide' },
  alternates: { canonical: 'https://vitalityscout.com/guides/are-dexa-scans-worth-it' },
  description: 'Are DEXA scans worth it in 2026? What a body-comp DEXA tells you, how accurate it is, who benefits, the real cost, and what reviewers report.',
};

// Real GSC queries we already earn impressions for, answered only from facts on
// this page: "dexa scan reviews / review", "are dexa scans expensive", "dexa plus".
// Every price answer ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'Are DEXA scans worth it?',
    answer: 'For most people tracking body recomposition, bone health, or a GLP-1/TRT journey, a body-composition DEXA scan is worth the typical $40-$60 cash-pay cost because it measures fat, lean mass, visceral fat, and bone density to within roughly a 1-2% margin of error — far more precise than a scale, BMI, or a bathroom bioimpedance device. It is most valuable as a repeated baseline-and-retest, not a one-off. People with no body-composition goal, or who already have reliable data, can reasonably skip it. Prices are estimates that vary by provider — verify before booking.',
  },
  {
    question: 'What do DEXA scan reviews actually say?',
    answer: 'Across published provider data and user feedback, the recurring theme in DEXA scan reviews is precision and convenience: a body-comp DEXA reports body-fat percentage by region, lean mass, visceral fat, and bone-mineral density in a 7-12 minute scan you take fully clothed. Reviewers most often value seeing muscle imbalances and real fat-vs-muscle change the scale hides. Common criticisms are price variability between providers and that a single scan is a snapshot, not a trend. We aggregate provider claims and public sources; we do not publish invented review counts or star ratings.',
  },
  {
    question: 'Are DEXA scans expensive?',
    answer: 'A body-composition DEXA scan costs roughly $40 to $300 out-of-pocket in 2026 depending on where you go. Community providers like BodySpec start around $40-$60 (about $40 with a monthly membership), while a hospital or imaging-center scan often runs $150-$300+. So it is not inherently expensive — the price spread is wide, and the cheapest options are mobile vans and memberships. These are estimates that change with promotions and location; confirm the current price with the provider.',
  },
  {
    question: 'What is a DEXA Plus scan, and is the premium tier worth it?',
    answer: 'A "DEXA Plus" or premium DEXA tier layers extra analysis on top of the standard fat/lean/bone report. DexaFit\'s AI-enhanced report, for example, states it adds a biological-age and longevity estimate, visceral-fat and disease-risk insights, peer-average comparisons, and a color-coded heat map. The underlying scan and its 1-2% accuracy are the same; you are paying for richer interpretation, not better measurement. Branding and exact contents vary by studio, so it is worth it only if you want that extra context and will act on it — the standard scan is enough for tracking fat and muscle change. Confirm exactly what each tier includes and its price with the provider.',
  },
  {
    question: 'How accurate is a DEXA scan for body composition?',
    answer: 'DEXA is widely treated as the practical reference standard for body composition. Published research shows whole-body DEXA error rates of about 1-2% for fat and lean mass, and providers like BodySpec cite an internal precision target near 0.5% for body-fat percentage under standardized conditions. UCSF Radiology notes that, used incrementally, DXA tells a more accurate progress story than BMI for muscle development and fat loss. To keep your own numbers comparable, scan at the same provider, same time of day, similar hydration.',
  },
  {
    question: 'How often is a DEXA scan worth repeating?',
    answer: 'Because body composition changes slowly, most people get the most value from a baseline plus a retest every 8-12 weeks during active recomposition, or roughly twice a year for maintenance. The radiation is very low — a body-comp DEXA is roughly 4 microsieverts, about the same as eating four bananas and less than a single day of natural background radiation — so cadence is driven by how fast your body actually changes, not safety. For a full cadence breakdown, see our guide on how often to get a DEXA scan.',
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

export default function AreDexaScansWorthIt() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Are DEXA Scans Worth It? A 2026 Value & Reviews Guide',
    description:
      'A decision guide to whether a body-composition DEXA scan is worth it in 2026 — what it actually tells you, how accurate it is, who benefits most, who can skip it, the real cost, and what reviewers report.',
    url: 'https://vitalityscout.com/guides/are-dexa-scans-worth-it',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/are-dexa-scans-worth-it#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalTest', name: 'Dual-energy X-ray absorptiometry (DEXA) body-composition scan' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'BodySpec — Are DEXA Scans Worth It? Cost & Benefit Analysis', url: 'https://www.bodyspec.com/blog/post/are_dexa_scans_worth_it_cost_benefit_analysis' },
      { '@type': 'CreativeWork', name: 'BodySpec — What’s the Real Cost of a DEXA Scan?', url: 'https://www.bodyspec.com/blog/post/whats_the_real_cost_of_a_dexa_scan' },
      { '@type': 'CreativeWork', name: 'UCSF Radiology — DXA/DEXA Beats BMI: Using an X-ray Exam to Measure Body Composition', url: 'https://radiology.ucsf.edu/news/dxadexa-beats-bmi-using-x-ray-exam-measure-body-composition-fat-loss' },
      { '@type': 'CreativeWork', name: 'DexaFit — DEXA (DXA) Scans / Body Fat Testing', url: 'https://www.dexafit.com/services/dexa-scan' },
      { '@type': 'CreativeWork', name: 'DexaFit — AI-Enhanced DEXA Body Scans (biological age, color-coded heat map, peer-average comparison, disease-risk insights)', url: 'https://www.alaska.dexafit.com/dexa-scan' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/are-dexa-scans-worth-it#faq', url: 'https://vitalityscout.com/guides/are-dexa-scans-worth-it' };

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
              <span className="text-gray-900">Are DEXA Scans Worth It?</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/dexa-scans" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; DEXA Scan Directory
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Decision Guide
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Are DEXA Scans Worth It? A 2026 Value &amp; Reviews Guide
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              Not whether a DEXA scan is accurate &mdash; it is. The real question is whether
              it is worth the money for <em>you</em>. Here is the honest cost-vs-value read,
              what reviewers report, and who should book versus skip.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                A body-composition DEXA scan is <strong>worth it for most people with a body
                recomposition, bone-health, or GLP-1/TRT goal</strong>, because it measures fat,
                lean mass, visceral fat, and bone density to within about a <strong>1-2% margin of
                error</strong> &mdash; far more precise than a scale or BMI &mdash; for a typical
                <strong> $40-$60</strong> cash-pay cost at community providers. Anyone with no
                composition goal can reasonably skip it. Prices are estimates &mdash; verify with
                the provider. This is information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: June 2026 • 10 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Verdict box */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">The Verdict, Up Front</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-green-700 mb-2">Worth it if you...</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Are actively recomping (cutting or bulking)</li>
                  <li>• Are on a GLP-1 or TRT and want to protect muscle</li>
                  <li>• Want a real bone-density and visceral-fat read</li>
                  <li>• Will retest to see a trend, not just one number</li>
                  <li>• Distrust the scale and bathroom-scale body-fat %</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-amber-700 mb-2">Probably skip it if you...</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Have no body-composition or bone goal right now</li>
                  <li>• Won&apos;t change anything based on the result</li>
                  <li>• Already track reliable data you act on</li>
                  <li>• Are pregnant (wait until after delivery)</li>
                  <li>• Want a one-off curiosity scan with no follow-up</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#what-it-tells" className="text-blue-600 hover:underline">1. What a body-comp DEXA actually tells you</a></li>
              <li><a href="#accuracy" className="text-blue-600 hover:underline">2. How accurate it really is</a></li>
              <li><a href="#reviews" className="text-blue-600 hover:underline">3. What DEXA scan reviews report</a></li>
              <li><a href="#expensive" className="text-blue-600 hover:underline">4. Are DEXA scans expensive? The real cost</a></li>
              <li><a href="#dexa-plus" className="text-blue-600 hover:underline">5. What &quot;DEXA Plus&quot; / premium tiers add</a></li>
              <li><a href="#who" className="text-blue-600 hover:underline">6. Who benefits most (and who can skip)</a></li>
              <li><a href="#cadence" className="text-blue-600 hover:underline">7. How often it is worth repeating</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              &quot;Worth it&quot; is a different question from &quot;accurate.&quot; A DEXA scan
              is precise &mdash; that is well established. The decision is whether that precision
              earns its cost for your specific situation. This guide answers it the way a buyer
              actually decides: what you get, what the numbers mean, what reviewers say, what it
              costs, and whether the premium tier is worth it.
            </p>

            <h2 id="what-it-tells" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What a Body-Comp DEXA Actually Tells You</h2>

            <p className="text-gray-700 mb-4">
              DEXA (dual-energy X-ray absorptiometry) was built to measure bone density, but the
              same scan separates your body into bone, lean tissue, and fat &mdash; region by
              region. A body-composition scan reports, per BodySpec and DexaFit provider data:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Total and regional body-fat percentage</strong> &mdash; not just an overall number, but arms, legs, and trunk separately</li>
              <li><strong>Lean (muscle) mass by limb and trunk</strong> &mdash; which exposes left-vs-right imbalances a mirror hides</li>
              <li><strong>Visceral fat</strong> &mdash; the fat around your organs that DexaFit describes as a leading predictor of metabolic and cardiovascular risk</li>
              <li><strong>Bone-mineral density (BMD)</strong> &mdash; the original clinical use, useful for osteoporosis-risk tracking</li>
            </ul>

            <p className="text-gray-700 mb-4">
              UCSF Radiology makes the case for why this matters more than BMI: in one analysis,
              <strong> 18.5% of women with a &quot;normal&quot; BMI had excess fat visible on
              DXA</strong> &mdash; data a scale would never surface. The scan is quick &mdash;
              DexaFit states <strong>7-12 minutes</strong> and BodySpec puts it at about 10 &mdash;
              you stay fully clothed (minus metal), and there is no tube or noise like an MRI.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Want the line-by-line read?</strong> This guide is about whether to book.
                For how to interpret each number on the report &mdash; T-scores, Z-scores,
                android/gynoid ratio, VAT &mdash; see our companion guide on{' '}
                <Link href="/guides/how-to-read-dexa-results" className="text-blue-600 hover:underline">how to read DEXA scan results</Link>.
              </p>
            </div>

            <h2 id="accuracy" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How Accurate It Really Is</h2>

            <p className="text-gray-700 mb-4">
              The accuracy is the strongest argument in DEXA&apos;s favor. Published research cited
              by BodySpec shows whole-body DEXA error rates of about <strong>1-2% for fat and lean
              mass</strong>; DexaFit states the same <strong>1-2% margin of error</strong>. BodySpec
              cites an internal precision target near <strong>0.5% for body-fat percentage</strong>
              under standardized conditions. UCSF Radiology summarizes it plainly: DXA is &quot;highly
              accurate compared with most other methods,&quot; and &quot;used incrementally&quot; it
              &quot;tells a more accurate story than BMI&hellip; for muscle development and fat
              loss.&quot;
            </p>

            <p className="text-gray-700 mb-4">
              The practical caveat: precision depends on consistency. To make your own numbers
              comparable scan to scan, use the same provider, same time of day, and a similar
              hydration state. The instrument is precise; sloppy conditions add noise.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">The radiation is genuinely trivial</h4>
              <p className="text-gray-700">
                A body-comp DEXA exposes you to roughly <strong>4 microsieverts</strong> &mdash;
                BodySpec&apos;s comparison is &quot;about the same as eating four bananas,&quot; and
                less than a single day of natural background radiation. So whether a scan is
                &quot;worth it&quot; is a cost-and-value decision, not a safety one.
              </p>
            </div>

            <h2 id="reviews" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What DEXA Scan Reviews Report</h2>

            <p className="text-gray-700 mb-4">
              Search for <strong>DEXA scan reviews</strong> and the same themes recur across provider
              data and user feedback. We aggregate from public sources &mdash; we do not invent star
              ratings or review counts. The honest pattern:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">What reviewers praise</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">What reviewers criticize</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Precision the scale and BMI can&apos;t match</td>
                    <td className="border border-gray-300 px-4 py-3">Price varies a lot between providers</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Seeing real fat-vs-muscle change, not just weight</td>
                    <td className="border border-gray-300 px-4 py-3">A single scan is a snapshot, not a trend</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Catching left/right muscle imbalances</td>
                    <td className="border border-gray-300 px-4 py-3">Upsells (VO2 max, RMR) can add cost</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Fast, fully-clothed, non-claustrophobic scan</td>
                    <td className="border border-gray-300 px-4 py-3">Numbers vary if conditions aren&apos;t standardized</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              The most useful takeaway from reviews is not a rating &mdash; it is that satisfaction
              tracks with <em>why you scanned</em>. People who used the scan to change a protein
              target or training plan report it was worth it; people who scanned once out of
              curiosity and did nothing with the data often felt it wasn&apos;t.
            </p>

            <h2 id="expensive" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Are DEXA Scans Expensive? The Real Cost</h2>

            <p className="text-gray-700 mb-4">
              Short answer: not inherently &mdash; but the price spread is wide. BodySpec states a
              body-composition DEXA scan costs <strong>$40 to $300 out-of-pocket in 2026</strong>,
              depending entirely on where you go. The figures below are <strong>estimates drawn from
              published provider pricing</strong>, not live quotes; confirm the current number with
              the provider before booking.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Where you scan</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical cash price (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Mobile van (e.g. BodySpec)</td>
                    <td className="border border-gray-300 px-4 py-3">~$40 - $60</td>
                    <td className="border border-gray-300 px-4 py-3">~$40 with a monthly membership; cheapest option</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Body-comp studio (e.g. DexaFit)</td>
                    <td className="border border-gray-300 px-4 py-3">~$100 - $180</td>
                    <td className="border border-gray-300 px-4 py-3">More analysis, bundles with VO2/RMR available</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Hospital / imaging center</td>
                    <td className="border border-gray-300 px-4 py-3">~$150 - $300+</td>
                    <td className="border border-gray-300 px-4 py-3">May need a physician order; per BodySpec, $300+</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">University / research lab</td>
                    <td className="border border-gray-300 px-4 py-3">~$35 - $150</td>
                    <td className="border border-gray-300 px-4 py-3">UCSF offers self-assessment scans without a referral</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              So the answer to <strong>&quot;are DEXA scans expensive?&quot;</strong> depends on the
              door you walk through. The same precise scan can cost $40 at a van or $300+ at a
              hospital. If cost is your blocker, the value question changes &mdash; chase the floor.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Hunting the lowest price?</strong> Our{' '}
                <Link href="/guides/cheapest-dexa-scan" className="text-blue-600 hover:underline">cheapest DEXA scan guide</Link>{' '}
                breaks down vans, memberships, multi-scan packages, and university labs &mdash; and
                the trade-offs of booking the absolute cheapest option.
              </p>
            </div>

            <h2 id="dexa-plus" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What &quot;DEXA Plus&quot; and Premium Tiers Add</h2>

            <p className="text-gray-700 mb-4">
              Searches for <strong>DEXA Plus</strong> usually land on a premium tier &mdash; some
              studios brand an upgraded report this way, and AI-enhanced providers layer extra
              interpretation on top of the standard scan. DexaFit&apos;s AI-enhanced report, for
              example, states it adds:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>A <strong>biological-age</strong> and longevity estimate derived from the scan&apos;s body-composition metrics</li>
              <li>Visceral-fat (VAT) and <strong>disease-risk insights</strong> tied to concerns like heart disease and diabetes</li>
              <li><strong>Peer-average comparisons</strong> that set personalized targets</li>
              <li>A <strong>color-coded heat map</strong> and richer visualizations of the same underlying data</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Branding and exact contents vary by studio &mdash; the bullets above describe
              DexaFit&apos;s stated AI report; another provider&apos;s &quot;Plus&quot; tier may
              include a different mix. Confirm what each tier covers before paying for it.
            </p>

            <p className="text-gray-700 mb-4">
              The key thing to understand: <strong>the scan itself and its 1-2% accuracy are the
              same.</strong> A premium tier sells <em>interpretation</em>, not better measurement.
              It is worth the upcharge if you will actually use the extra context to change something.
              If you just want to track fat and muscle over time, the standard scan delivers that.
            </p>

            <h2 id="who" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Who Benefits Most (and Who Can Skip)</h2>

            <p className="text-gray-700 mb-4">
              Based on BodySpec&apos;s cost-benefit analysis and what reviewers consistently report,
              the value lands hardest for a few groups:
            </p>

            <div className="bg-blue-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Highest value</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Active recompositioners</strong> &mdash; cutting or bulking and need to know if it&apos;s working</li>
                <li><strong>People on GLP-1s or TRT</strong> &mdash; weight loss can strip muscle; DEXA shows whether you&apos;re protecting lean mass</li>
                <li><strong>Bone-health monitors</strong> &mdash; BodySpec flags adults concerned about fracture risk (e.g. women 65+, men 70+)</li>
                <li><strong>Athletes and data-driven biohackers</strong> &mdash; who will pair segmental data with other metrics</li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Can reasonably skip</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Anyone with no current body-composition or bone goal</li>
                <li>People who won&apos;t change behavior based on the result</li>
                <li>Those already tracking reliable data they act on</li>
                <li><strong>Pregnant people</strong> &mdash; per BodySpec, wait until after delivery</li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                The deciding factor is intent: a DEXA scan is worth it when you&apos;ll act on it.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              If you&apos;re still deciding between DEXA and a cheaper method like InBody or a Bod
              Pod, that&apos;s a separate trade-off &mdash; see our{' '}
              <Link href="/guides/dexa-vs-inbody-vs-bodpod" className="text-blue-600 hover:underline">DEXA vs InBody vs Bod Pod comparison</Link>{' '}
              for accuracy and cost head-to-head.
            </p>

            <h2 id="cadence" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How Often It Is Worth Repeating</h2>

            <p className="text-gray-700 mb-4">
              A single scan answers &quot;where am I now.&quot; The value compounds with repeat
              scans that show a trend. Because body composition changes slowly, most people get the
              best return from a baseline plus a retest <strong>every 8-12 weeks</strong> during
              active recomposition, or roughly <strong>twice a year</strong> for maintenance. Since
              the radiation is trivial (~4 µSv), cadence is set by how fast your body actually
              changes, not by safety.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Budget the cadence, not just the scan</h4>
              <p className="text-gray-700">
                If you&apos;ll scan four times a year, a membership or multi-scan package
                (e.g. BodySpec&apos;s ~$40/scan membership) changes the math &mdash; the per-scan
                cost drops and the trend is what delivers the value. Price the year, not the
                one-off, when deciding if it&apos;s worth it.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              For the full cadence logic &mdash; including the radiation math behind a safe
              scanning schedule &mdash; see our guide on{' '}
              <Link href="/guides/how-often-should-you-get-a-dexa-scan" className="text-blue-600 hover:underline">how often you should get a DEXA scan</Link>.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Find a DEXA Scan Near You</h3>
            <p className="mb-6 text-blue-100">
              Compare BodySpec, DexaFit, and other providers by city, with transparent cash-pay pricing.
            </p>
            <Link
              href="/dexa-scans"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse DEXA Providers
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
              not affiliated with BodySpec, DexaFit, or any imaging provider. Pricing is based on
              publicly available provider data and is presented as estimates that vary by location,
              provider, and current promotions &mdash; always verify the current price directly with
              the provider before booking. A DEXA scan is a measurement tool, not a diagnosis;
              bone-density or body-composition findings, and any abnormal result, should be reviewed
              with a licensed healthcare provider. Pregnant people should not have a body-composition
              DEXA scan.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• BodySpec — Are DEXA Scans Worth It? Cost &amp; Benefit Analysis (value, who benefits, accuracy, radiation)</li>
              <li>• BodySpec — What&apos;s the Real Cost of a DEXA Scan? ($40-$300 range, membership pricing, radiation dose)</li>
              <li>• UCSF Radiology — DXA/DEXA Beats BMI (accuracy vs BMI, normal-BMI excess-fat finding, tracking change)</li>
              <li>• DexaFit — DEXA (DXA) Scans / Body Fat Testing (what it measures, 1-2% accuracy, 7-12 min scan duration, VAT as risk predictor)</li>
              <li>• DexaFit — AI-Enhanced DEXA Body Scans (premium-tier features: biological age, color-coded heat map, peer-average comparison, disease-risk insights)</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our DEXA Scan Value Cheat Sheet"
            description="Is a DEXA scan worth it for you? Who benefits, the real cost spread, and how to make every scan count."
            source="guide_are_dexa_scans_worth_it"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
