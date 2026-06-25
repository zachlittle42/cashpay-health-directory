import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'IUI Cost Without Insurance (2026): Per-Cycle Price Guide' },
  alternates: { canonical: 'https://vitalityscout.com/guides/iui-cost' },
  description:
    'IUI cost without insurance in 2026 — typical $500-$4,000 per cycle, plus medications, donor sperm, monitoring, success rates by age, and IUI vs IVF cost.',
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does IUI cost without insurance per cycle?',
    answer:
      'Without insurance, a single IUI cycle is commonly estimated at roughly $500 to $4,000, with many clinics quoting a typical $1,200 to $2,350 for a standard medicated cycle. The low end is a natural (unmedicated) cycle; the high end reflects injectable gonadotropin medications and heavier monitoring. Published self-pay examples include CCRM Fertility (~$950 natural to ~$4,305 stimulated) and CNY Fertility (from ~$650). These are estimates that vary by clinic, protocol, and region — confirm the all-in price with the clinic before you start.',
  },
  {
    question: 'How much do IUI medications cost out of pocket?',
    answer:
      'It depends entirely on the protocol. Oral medications like Clomid (clomiphene) or letrozole are the cheapest tier — often estimated around $30 to $100 a cycle, and sometimes as low as $10-$20 with a pharmacy discount card. Injectable gonadotropins are the expensive tier, frequently estimated up to roughly $2,000 per cycle. A "trigger shot" to time ovulation typically adds about $50 to $300. Medication pricing changes often and depends on your dose and pharmacy — verify the current cost with the clinic and pharmacy.',
  },
  {
    question: 'How much does donor sperm add to the cost of IUI?',
    answer:
      'If you use a sperm bank, a single IUI-prepared donor vial is commonly estimated at roughly $900 to $2,400, plus a shipping fee often around $400 to $500. For example, California Cryobank lists IUI vials around $2,397 (with lower-priced Heritage Collection vials from ~$897-$1,897), and Fairfax Cryobank vials are frequently cited near $1,895. Because most people need several cycles, banks often suggest buying multiple vials up front. These are estimates that change with promotions and donor type — confirm current vial pricing directly with the cryobank.',
  },
  {
    question: 'How many IUI cycles should I budget for?',
    answer:
      'Plan for more than one. The American Society for Reproductive Medicine (ASRM) describes a course of about three to four IUI cycles as a typical initial approach for unexplained infertility before considering IVF, and most IUI pregnancies that happen tend to occur within the first few cycles. Practically, that means budgeting for three or four attempts, not one. Your clinician sets the right number for your situation — this is general information, not a treatment plan.',
  },
  {
    question: 'Is IUI cheaper than IVF?',
    answer:
      'Yes, per cycle, by a wide margin. A self-pay IUI cycle is commonly estimated around $500 to $4,000, while a single IVF cycle without insurance is commonly estimated at roughly $15,000 to $30,000+ all-in (FertilityIQ puts a single cycle at around $23,474). The nuance: IUI has a lower success rate per cycle, so several IUI attempts may be needed. For some people three or four IUI cycles still costs far less than one IVF cycle; for others, going to IVF sooner is the better value. A fertility clinician can model which path fits your diagnosis. These are estimates to verify with the clinic.',
  },
  {
    question: 'What is the success rate of IUI?',
    answer:
      'Per-cycle IUI success is modest and falls with age. Published clinic estimates put women under 35 at roughly 15-20% per cycle, declining to about 10-15% at 35-37, around 5-10% at 38-40, and lower still over 40. Diagnosis matters as much as age. Because rates are per cycle, the cumulative chance over three to four cycles is higher than any single attempt. These are general estimates, not a prediction for any individual — no fertility treatment guarantees a pregnancy, and your clinician can give you a personalized estimate.',
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

export default function IuiCostGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'IUI Cost Without Insurance: 2026 Per-Cycle Price Guide',
    description:
      'A practical cost breakdown of intrauterine insemination (IUI) without insurance — per-cycle pricing, medications, donor sperm, monitoring, success rates by age, and how IUI cost compares to IVF.',
    url: 'https://vitalityscout.com/guides/iui-cost',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/iui-cost#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalProcedure', name: 'Intrauterine insemination (IUI)' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'Illume Fertility — IUI Costs (per-cycle and component pricing)', url: 'https://www.illumefertility.com/pricing-and-insurance/iui-costs' },
      { '@type': 'CreativeWork', name: 'CNY Fertility — How Much Does IUI Cost', url: 'https://www.cnyfertility.com/iui-cost/' },
      { '@type': 'CreativeWork', name: 'CCRM Fertility — IUI Costs', url: 'https://www.ccrmivf.com/become-a-patient/fertility-financing-options/iui-cost/' },
      { '@type': 'CreativeWork', name: 'California Cryobank — Donor Sperm Pricing', url: 'https://www.cryobank.com/pricing/' },
      { '@type': 'CreativeWork', name: 'CNY Fertility — IUI Success Rates by Age', url: 'https://www.cnyfertility.com/iui-success-rates/' },
      { '@type': 'CreativeWork', name: 'FertilityIQ — The Cost of IUI (trigger-shot $50-$250, oral meds, gonadotropins, $500-$4,000 cycle range)', url: 'https://www.fertilityiq.com/fertilityiq/iui-or-artificial-insemination/the-cost-of-iui' },
      { '@type': 'CreativeWork', name: 'FertilityIQ — Costs of IVF (single-cycle average ~$23,474)', url: 'https://www.fertilityiq.com/fertilityiq/ivf-in-vitro-fertilization/costs-of-ivf' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/iui-cost#faq', url: 'https://vitalityscout.com/guides/iui-cost' };

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
              <span className="text-gray-900">IUI Cost Without Insurance</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/womens-health" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Women&apos;s Health Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Fertility
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              IUI Cost Without Insurance: The 2026 Per-Cycle Price Guide
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              Intrauterine insemination is the lower-cost first step in fertility treatment.
              Here is what a cycle actually costs when you pay cash — medications, donor
              sperm, monitoring, success rates, and how it stacks up against IVF.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                Without insurance, <strong>one IUI cycle is commonly estimated at $500-$4,000</strong>,
                with many clinics quoting a typical <strong>$1,200-$2,350</strong>. A natural
                (unmedicated) cycle sits at the low end; injectable medications and heavy monitoring
                push the high end. Add medications (~$30-$2,000), donor sperm (~$900-$2,400/vial) if
                used, and plan for <strong>3-4 cycles</strong>. IUI costs far less per cycle than
                IVF (~$15,000-$30,000). Prices are estimates — verify with the clinic. This is
                information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: June 2026 • 11 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Cost Box */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Cost Snapshot (Self-Pay, Estimates)</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">A typical medicated cycle</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Per-cycle total: ~$1,200 - $2,350</li>
                  <li>• Oral meds (Clomid/letrozole): ~$30 - $100</li>
                  <li>• Trigger shot: ~$50 - $300</li>
                  <li>• Monitoring + bloodwork: ~$300 - $1,200</li>
                  <li>• Insemination + sperm wash: ~$300 - $1,000</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">What pushes it higher</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Injectable gonadotropins: up to ~$2,000</li>
                  <li>• Donor sperm vial: ~$900 - $2,400</li>
                  <li>• Vial shipping: ~$400 - $500</li>
                  <li>• Annual sperm storage: ~$150 - $520</li>
                  <li>• Diagnostic testing: ~$50 - $300+ per test</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">IUI may fit if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You want the lowest-cost first treatment</li>
                  <li>• You are under ~35 or have a favorable diagnosis</li>
                  <li>• You can budget for 3-4 attempts</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">Talk to your doctor about IVF if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Several IUI cycles have not worked</li>
                  <li>• Age or diagnosis makes IUI odds low</li>
                  <li>• The math favors one IVF cycle over many IUIs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#what-is-iui" className="text-blue-600 hover:underline">1. What IUI is and what you pay for</a></li>
              <li><a href="#cost-breakdown" className="text-blue-600 hover:underline">2. Cost breakdown, line by line</a></li>
              <li><a href="#medications" className="text-blue-600 hover:underline">3. Medication costs (the biggest swing)</a></li>
              <li><a href="#donor-sperm" className="text-blue-600 hover:underline">4. Donor sperm pricing</a></li>
              <li><a href="#clinics" className="text-blue-600 hover:underline">5. Real clinic pricing examples</a></li>
              <li><a href="#cycles" className="text-blue-600 hover:underline">6. How many cycles to budget for</a></li>
              <li><a href="#success" className="text-blue-600 hover:underline">7. Success rates by age</a></li>
              <li><a href="#iui-vs-ivf" className="text-blue-600 hover:underline">8. IUI vs IVF cost</a></li>
              <li><a href="#save" className="text-blue-600 hover:underline">9. How to lower the cost</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Intrauterine insemination (IUI) is usually the first, lowest-cost rung on the
              fertility-treatment ladder — far cheaper per cycle than IVF. But &quot;cheaper&quot;
              still means real money, and the sticker price you see at one clinic can hide a stack
              of separate fees: medications, monitoring, sperm washing, and donor vials. If you are
              paying out of pocket, the only honest way to budget is to break the cycle into its
              parts. Here is that breakdown.
            </p>

            <h2 id="what-is-iui" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What IUI Is and What You Actually Pay For</h2>

            <p className="text-gray-700 mb-4">
              In an IUI cycle, a clinic times your ovulation, &quot;washes&quot; a sperm sample to
              concentrate the healthiest sperm, and places it directly into the uterus with a thin
              catheter around the time you ovulate. It is far less involved than IVF — there is no egg
              retrieval and no lab fertilization — which is why it costs a fraction as much.
            </p>

            <p className="text-gray-700 mb-4">
              The cost confusion comes from <strong>bundling</strong>. Some clinics quote a single
              &quot;IUI cycle&quot; price that includes monitoring and the procedure; others itemize
              everything. When you compare clinics, you are really comparing four buckets: the
              <strong> consultation and diagnostics</strong>, the <strong>cycle medications</strong>,
              the <strong>monitoring</strong> (ultrasounds and bloodwork), and the
              <strong> procedure itself</strong> (sperm wash plus the insemination). Donor sperm, if
              you need it, is a fifth bucket that often dwarfs the rest.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why this matters:</strong> a clinic advertising a low IUI &quot;procedure&quot;
                price may not be cheaper overall once monitoring and medications are added. Always ask
                for the all-in per-cycle estimate, in writing, including the parts billed separately.
              </p>
            </div>

            <h2 id="cost-breakdown" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cost Breakdown, Line by Line</h2>

            <p className="text-gray-700 mb-4">
              The figures below are <strong>estimates drawn from published clinic and sperm-bank
              pricing</strong>, not live quotes for your specific plan. They move with clinic,
              region, protocol, and promotions. Use them to set expectations, then get an itemized
              estimate from the clinic.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cost component</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical self-pay range (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Initial consultation</td>
                    <td className="border border-gray-300 px-4 py-3">~$100 - $560</td>
                    <td className="border border-gray-300 px-4 py-3">One-time; some clinics fold in basic testing</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Diagnostic testing</td>
                    <td className="border border-gray-300 px-4 py-3">~$50 - $300+ per test</td>
                    <td className="border border-gray-300 px-4 py-3">Bloodwork, semen analysis, tubal check</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Cycle monitoring</td>
                    <td className="border border-gray-300 px-4 py-3">~$300 - $1,200 per cycle</td>
                    <td className="border border-gray-300 px-4 py-3">Tracking ultrasounds + bloodwork</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Insemination procedure</td>
                    <td className="border border-gray-300 px-4 py-3">~$150 - $650 per cycle</td>
                    <td className="border border-gray-300 px-4 py-3">Some clinics quote closer to ~$1,000 all-in</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Sperm washing</td>
                    <td className="border border-gray-300 px-4 py-3">~$150 - $350 per cycle</td>
                    <td className="border border-gray-300 px-4 py-3">May be billed separately or bundled</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Oral meds (Clomid/letrozole)</td>
                    <td className="border border-gray-300 px-4 py-3">~$30 - $100 per cycle</td>
                    <td className="border border-gray-300 px-4 py-3">Sometimes ~$10-$20 with a discount card</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Injectable gonadotropins</td>
                    <td className="border border-gray-300 px-4 py-3">up to ~$2,000 per cycle</td>
                    <td className="border border-gray-300 px-4 py-3">Only if a stronger response is needed</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Trigger shot</td>
                    <td className="border border-gray-300 px-4 py-3">~$50 - $300</td>
                    <td className="border border-gray-300 px-4 py-3">Times ovulation for the insemination</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Donor sperm vial (if used)</td>
                    <td className="border border-gray-300 px-4 py-3">~$900 - $2,400 + ~$400-$500 shipping</td>
                    <td className="border border-gray-300 px-4 py-3">Often buy multiple vials up front</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>The takeaway:</strong> a natural-cycle IUI with no donor sperm can land near the
              bottom of the range, while a gonadotropin cycle with donor vials and full monitoring can
              run several thousand dollars. The two biggest swing factors are <strong>which medications
              you use</strong> and <strong>whether you need donor sperm</strong>.
            </p>

            <h2 id="medications" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Medication Costs (the Biggest Swing)</h2>

            <p className="text-gray-700 mb-4">
              Medications are where IUI budgets split in two. There are three broad tiers, and the
              difference between the cheapest and most expensive is enormous.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Oral medications (cheapest):</strong> Clomid (clomiphene) or letrozole, often estimated around $30-$100 a cycle, and sometimes as low as $10-$20 with a pharmacy discount card. Most first IUI cycles use these.</li>
              <li><strong>Trigger shot (modest):</strong> a single injection (commonly hCG) to time ovulation, typically ~$50-$300.</li>
              <li><strong>Injectable gonadotropins (most expensive):</strong> if oral meds do not produce a strong enough response, injectables can add up to roughly $2,000 a cycle. This tier is what turns a sub-$1,500 cycle into a $3,000+ one.</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Ask before you assume the cheap tier</h4>
              <p className="text-gray-700">
                Many people start on oral medications, but your clinician decides the protocol based on
                your diagnosis and how you respond. Ask up front whether your plan is likely to use
                injectables, because that single choice can more than double the cycle cost. Pharmacy
                discount cards and specialty fertility pharmacies can also change the medication number
                significantly — price the exact prescription, not the category.
              </p>
            </div>

            <h2 id="donor-sperm" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Donor Sperm Pricing</h2>

            <p className="text-gray-700 mb-4">
              If you are using donor sperm — single parents by choice, same-sex couples, or where there
              is a male-factor diagnosis — the vial is often the single largest line item, sometimes
              bigger than the IUI procedure itself.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>California Cryobank</strong> lists IUI-prepared vials around <strong>$2,397</strong> for its latest ID-disclosure donors, with lower-priced Heritage Collection vials from roughly <strong>$897-$1,897</strong>; FedEx next-day shipping is listed near <strong>$499</strong>, and one year of storage around <strong>$520</strong> (estimates).</li>
              <li><strong>Fairfax Cryobank</strong> IUI vials are frequently cited near <strong>$1,895</strong>, with the exact fee depending on donor type, preparation, and panel testing (estimate).</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Because most people need several attempts, banks commonly recommend buying multiple vials
              at once (and may discount bulk purchases), which front-loads a large cost. Treat all of
              these as <strong>estimates that change with promotions and donor availability</strong> —
              confirm the current vial, shipping, and storage prices directly with the cryobank.
            </p>

            <h2 id="clinics" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Real Clinic Pricing Examples</h2>

            <p className="text-gray-700 mb-4">
              A few fertility groups publish self-pay IUI pricing, which is useful for calibration even
              if you treat elsewhere. These are the clinics&apos; own posted estimates, not negotiated
              quotes for your plan.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Clinic</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Published self-pay IUI estimate</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Where</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">CCRM Fertility</td>
                    <td className="border border-gray-300 px-4 py-3">~$950 natural to ~$4,305 stimulated (plus consult ~$100-$560)</td>
                    <td className="border border-gray-300 px-4 py-3">Colorado (figures shown for CO location)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">CNY Fertility</td>
                    <td className="border border-gray-300 px-4 py-3">From ~$650 (natural) up the range with meds/monitoring</td>
                    <td className="border border-gray-300 px-4 py-3">NY (Syracuse, Albany, Buffalo) + multi-state</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Illume Fertility</td>
                    <td className="border border-gray-300 px-4 py-3">~$1,200-$2,350+ per cycle (component pricing published)</td>
                    <td className="border border-gray-300 px-4 py-3">Connecticut (Norwalk) + Harrison, NY</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Use posted prices as a calibration, not a guarantee</h4>
              <p className="text-gray-700">
                Published clinic prices are a sanity check on the quote you receive locally. If a clinic
                near you quotes far above these ranges for the same protocol, ask what is included and
                whether monitoring and medications are bundled. Several clinics also offer financing
                (CCRM, for example, partners with a financing provider) to spread the cost over months.
              </p>
            </div>

            <h2 id="cycles" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How Many Cycles to Budget For</h2>

            <p className="text-gray-700 mb-4">
              The most common budgeting mistake is planning for one cycle. IUI is a numbers game: the
              American Society for Reproductive Medicine (ASRM) describes a course of about
              <strong> three to four IUI cycles</strong> as a typical initial approach for unexplained
              infertility before moving to consider IVF, and most IUI pregnancies that do happen tend
              to occur within the first few cycles.
            </p>

            <p className="text-gray-700 mb-4">
              Practically, that means your real budget is the per-cycle cost times three or four. A
              $1,500 cycle is a $4,500-$6,000 plan; a $3,000 gonadotropin-plus-donor cycle is a
              $9,000-$12,000 plan. Build the multi-cycle number before you start, so a second or third
              attempt is not a financial surprise. Your clinician sets the right stopping point for your
              situation.
            </p>

            <h2 id="success" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Success Rates by Age</h2>

            <p className="text-gray-700 mb-4">
              Cost only makes sense next to the odds. Per-cycle IUI success is modest and declines with
              age. These are published clinic estimates, not a prediction for any individual — and
              diagnosis matters as much as age.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Age band</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Estimated success per cycle</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Under 35</td>
                    <td className="border border-gray-300 px-4 py-3">~15% - 20%</td>
                    <td className="border border-gray-300 px-4 py-3">Highest IUI odds; favorable diagnosis helps</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">35 - 37</td>
                    <td className="border border-gray-300 px-4 py-3">~10% - 15%</td>
                    <td className="border border-gray-300 px-4 py-3">Begins to decline</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">38 - 40</td>
                    <td className="border border-gray-300 px-4 py-3">~5% - 10%</td>
                    <td className="border border-gray-300 px-4 py-3">Lower per-cycle odds</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Over 40</td>
                    <td className="border border-gray-300 px-4 py-3">~2% - 5%</td>
                    <td className="border border-gray-300 px-4 py-3">Clinicians often discuss IVF sooner</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              Because rates are <strong>per cycle</strong>, the cumulative chance across three to four
              cycles is higher than any single attempt — which is exactly why budgeting for multiple
              cycles matters. No fertility treatment guarantees a pregnancy; a clinician can give you a
              personalized estimate based on your age and diagnosis.
            </p>

            <h2 id="iui-vs-ivf" className="text-2xl font-bold text-gray-900 mt-12 mb-6">IUI vs IVF Cost</h2>

            <p className="text-gray-700 mb-4">
              The headline difference is dramatic: IUI is a fraction of IVF per cycle. But the per-cycle
              comparison alone is misleading, because IVF has a much higher success rate per attempt.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Factor</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">IUI</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">IVF</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Self-pay cost per cycle (estimate)</td>
                    <td className="border border-gray-300 px-4 py-3">~$500 - $4,000</td>
                    <td className="border border-gray-300 px-4 py-3">~$15,000 - $30,000+ (FertilityIQ avg ~$23,474)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Invasiveness</td>
                    <td className="border border-gray-300 px-4 py-3">No egg retrieval; in-office insemination</td>
                    <td className="border border-gray-300 px-4 py-3">Egg retrieval + lab fertilization</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Success per cycle</td>
                    <td className="border border-gray-300 px-4 py-3">Lower (single digits to ~20% by age)</td>
                    <td className="border border-gray-300 px-4 py-3">Higher per attempt</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Typical first step?</td>
                    <td className="border border-gray-300 px-4 py-3">Yes, for many diagnoses</td>
                    <td className="border border-gray-300 px-4 py-3">After IUI, or first if indicated</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>The real decision:</strong> for some people, three or four IUI cycles still costs
              far less than one IVF cycle, so starting with IUI is the rational, lower-cost path. For
              others — older patients, or specific diagnoses where IUI odds are low — spending several
              thousand dollars on IUI cycles that are unlikely to work can be more expensive than going
              to IVF sooner. A fertility clinician can model your specific odds and walk through the
              math. For the international IVF-cost picture, see our companion guides linked below.
            </p>

            <h2 id="save" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Lower the Cost</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Get an itemized all-in estimate.</strong> Ask the clinic to list monitoring, procedure, sperm wash, and medications separately so you can compare true totals.</li>
              <li><strong>Price the medication, not the category.</strong> Oral meds with a pharmacy discount card can be a small fraction of injectables — confirm which protocol you are on.</li>
              <li><strong>Ask about natural-cycle IUI.</strong> Where appropriate, skipping medications and heavy monitoring lowers cost (your clinician decides if it fits).</li>
              <li><strong>Use HSA/FSA funds.</strong> Fertility treatment is often an eligible expense — confirm with your plan administrator.</li>
              <li><strong>Compare donor-sperm banks and buy strategically.</strong> Vial prices, shipping, and storage differ between banks; bulk purchases may be discounted.</li>
              <li><strong>Ask about multi-cycle or financing programs.</strong> Some clinics bundle several cycles or offer monthly payment plans.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Related guides</h3>
            <p className="text-gray-700 mb-4">
              If IUI is not the right fit, or you are weighing IVF abroad to manage cost, these
              companion guides go deeper on price by country:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>IVF pricing worldwide:</strong> our <Link href="/guides/ivf-cost-by-country" className="text-blue-600 hover:underline">IVF cost by country guide</Link> compares the US to Mexico, Spain, and more</li>
              <li><strong>Lowest-cost IVF in Europe:</strong> the <Link href="/guides/cheapest-ivf-in-europe" className="text-blue-600 hover:underline">cheapest IVF in Europe guide</Link> compares five countries on per-cycle price</li>
              <li><strong>Preserving fertility:</strong> our <Link href="/guides/egg-freezing-abroad-cost" className="text-blue-600 hover:underline">egg freezing abroad cost guide</Link> covers oocyte cryopreservation pricing</li>
              <li><strong>More options:</strong> browse the <Link href="/womens-health" className="text-blue-600 hover:underline">women&apos;s health</Link> directory for cash-pay fertility and reproductive care</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Cash-Pay Fertility &amp; Women&apos;s Health Care</h3>
            <p className="mb-6 text-blue-100">
              See women&apos;s health and fertility-adjacent providers with transparent self-pay pricing.
            </p>
            <Link
              href="/womens-health"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse Women&apos;s Health
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
              not affiliated with any clinic or sperm bank named here. Pricing is based on publicly
              available clinic and cryobank data and third-party cost guides and is presented as
              estimates that vary by clinic, protocol, region, and current promotions — always verify
              the current price directly with the provider before treatment. IUI is a medical procedure
              with risks and no guaranteed outcome; candidacy, protocol, and the number of cycles are
              decisions for a licensed fertility clinician who knows your history.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Illume Fertility — IUI Costs (per-cycle and component pricing, success-rate context): illumefertility.com</li>
              <li>• CNY Fertility — How Much Does IUI Cost (cycle pricing, medications, IUI vs IVF): cnyfertility.com</li>
              <li>• CCRM Fertility — IUI Costs (natural vs stimulated cycle pricing, financing): ccrmivf.com</li>
              <li>• California Cryobank — Donor Sperm Pricing (IUI vial, shipping, storage): cryobank.com</li>
              <li>• CNY Fertility — IUI Success Rates by Age (per-cycle estimates): cnyfertility.com</li>
              <li>• FertilityIQ — The Cost of IUI (trigger shot $50-$250, oral meds, gonadotropins, $500-$4,000 cycle range): fertilityiq.com</li>
              <li>• FertilityIQ — Costs of IVF (single-cycle average ~$23,474): fertilityiq.com</li>
              <li>• ASRM guidance referenced via clinic summaries (typical 3-4 IUI cycles before IVF)</li>
              <li>• Published self-pay IUI and IVF cost guides (typical ranges for medications, monitoring, IVF per cycle)</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Fertility Cost Cheat Sheet"
            description="IUI vs IVF, what each cycle includes, and how to budget for multiple attempts."
            source="guide_iui_cost"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
