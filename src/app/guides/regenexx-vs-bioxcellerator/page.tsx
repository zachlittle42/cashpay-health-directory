import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'Regenexx vs BioXcellerator: Cost, Cells & Legality',
  description:
    'Regenexx vs BioXcellerator: US same-day autologous bone marrow vs Colombia lab-expanded umbilical-cord MSCs. Cost, cells, legality, evidence, safety.',
};

// Real GSC/PAA questions this page already earns impressions for (regenexx vs
// bioxcellerator, compare stem cell therapy mexico, cost/results). Answered only
// from facts stated on this page; every price answer ends with the
// verify-with-provider hedge consistent with the MedicalDisclaimer. The visible
// FAQ block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'Regenexx vs BioXcellerator: what is the core difference?',
    answer:
      'Regenexx is a US-based network that uses your own (autologous) bone-marrow-concentrate and platelet cells, processed and re-injected the same day for orthopedic problems like knees, hips, and spine. BioXcellerator is a Medellín, Colombia clinic that uses donor (allogeneic) umbilical-cord mesenchymal stem cells, lab-expanded over weeks to far higher cell counts, for a much wider list of conditions. One is a same-day joint procedure under US rules; the other is a cultured-cell protocol abroad. Verify any current protocol and pricing directly with each provider.',
  },
  {
    question: 'Regenexx vs BioXcellerator cost: which is more expensive?',
    answer:
      'They are hard to compare directly because the products differ. US same-day bone-marrow procedures (the Regenexx-SD type) are commonly estimated at roughly $5,000-$15,000+ per area, with one published patient account of $6,500 for one knee. BioXcellerator and similar Colombia lab-expanded protocols are commonly estimated around $8,000-$35,000 all-inclusive, often bundling lodging and follow-up. Regenexx does not publish prices and quotes per consultation. All figures are estimates that change — confirm the current price with each provider.',
  },
  {
    question: 'Why can BioXcellerator offer treatments Regenexx cannot in the US?',
    answer:
      'US FDA rules let clinics use your own cells only when they are "minimally manipulated," used for a matching (homologous) purpose, and not grown in a lab — which is why Regenexx in the US is same-day and autologous. Colombia permits lab-expanded and donor (allogeneic) umbilical-cord cells that the FDA does not allow for most uses, so BioXcellerator can offer higher cell counts and a broader condition list. More options is not the same as more proof — most of these treatments remain unproven. This is information, not medical advice.',
  },
  {
    question: 'Compare stem cell therapy in Mexico vs Colombia (BioXcellerator) vs US Regenexx',
    answer:
      'Mexico (COFEPRIS-regulated) and Colombia both allow lab-expanded and donor cells the US restricts, so both offer higher-cell-count protocols at lower prices than the US; BioXcellerator in Medellín is a well-known Colombia option using umbilical-cord MSCs. The US (Regenexx) stays same-day and autologous under FDA rules, with easier follow-up but lower cell yields and orthopedic-only scope. Clinic quality varies in every country — verify licensing, lab certification, and pricing before you travel.',
  },
  {
    question: 'What about BioXcellerator vs Regenexx results and evidence?',
    answer:
      'Neither clinic should be evaluated on testimonials. The FDA has approved only blood-forming stem cell products from cord blood, for blood disorders — not the orthopedic or systemic uses either company markets. Published, peer-reviewed outcome evidence for both same-day autologous and expanded-MSC therapies is still limited and condition-dependent. Ask each provider for outcome data and any registered trials, treat "cure" or guaranteed-results language as a red flag, and discuss expectations with a qualified physician.',
  },
  {
    question: 'Does Regenexx offer expanded (lab-grown) cells like BioXcellerator?',
    answer:
      'Not in the United States. Regenexx in the US is same-day and autologous only. Regenexx does offer a cultured option, Regenexx-C, that grows your own cells to much higher counts — but it is offered exclusively at Regenexx Cayman and requires two trips. That makes the real "expanded cells" comparison Regenexx Cayman vs BioXcellerator Colombia, not the US Regenexx clinics. Confirm the current Regenexx-C and BioXcellerator protocols and pricing directly with each provider.',
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

export default function RegenexxVsBioXcellerator() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Regenexx vs BioXcellerator: Stem Cell Therapy Compared',
    description:
      'A head-to-head comparison of Regenexx (US, same-day autologous bone-marrow concentrate) and BioXcellerator (Medellín, Colombia, lab-expanded umbilical-cord MSCs) — approach, cells, conditions, cost, legality, evidence, and safety.',
    url: 'https://vitalityscout.com/guides/regenexx-vs-bioxcellerator',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/regenexx-vs-bioxcellerator#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalProcedure',
      name: 'Stem cell therapy',
      procedureType: 'https://schema.org/PercutaneousProcedure',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'Regenexx — Procedure Experience (same-day autologous approach)', url: 'https://regenexx.com/our-approach/procedure-experience/' },
      { '@type': 'CreativeWork', name: 'Regenexx — How much do the procedures cost? (quoted per consultation)', url: 'https://www.regenexx.com/common-questions/how-much-do-the-procedures-cost/' },
      { '@type': 'CreativeWork', name: 'Regenexx Cayman — Regenexx-SD vs cultured Regenexx-C', url: 'https://regenexxcayman.com/treatments/regenexx-sd/' },
      { '@type': 'CreativeWork', name: 'BioXcellerator — World Leader in Stem Cell Therapy (Wharton’s jelly MSCs, Medellín)', url: 'https://www.bioxcellerator.com/' },
      { '@type': 'CreativeWork', name: 'FDA — Important Patient and Consumer Information About Regenerative Medicine Therapies', url: 'https://www.fda.gov/vaccines-blood-biologics/consumers-biologics/important-patient-and-consumer-information-about-regenerative-medicine-therapies' },
      { '@type': 'CreativeWork', name: 'FDA — Minimal Manipulation and Homologous Use (361 HCT/P guidance)', url: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/regulatory-considerations-human-cells-tissues-and-cellular-and-tissue-based-products-minimal' },
      { '@type': 'CreativeWork', name: 'BioInformant — The Cost of Stem Cell Therapy (US price ranges)', url: 'https://bioinformant.com/cost-of-stem-cell-therapy/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/regenexx-vs-bioxcellerator#faq', url: 'https://vitalityscout.com/guides/regenexx-vs-bioxcellerator' };

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
              <span className="text-gray-900">Regenexx vs BioXcellerator</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/stem-cells" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Stem Cell Therapy Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Comparison
              </span>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl">🇺🇸</span>
              <span className="text-2xl text-gray-400">vs</span>
              <span className="text-3xl">🇨🇴</span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Regenexx vs BioXcellerator: Two Very Different Stem Cell Models
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              These two brands get compared constantly, but they are not the same product. One is a
              US, same-day, your-own-cells joint procedure. The other is a Colombia, lab-expanded,
              donor-cell protocol for a much wider condition list. Here is the honest breakdown.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                <strong>Regenexx</strong> is a US network using your <strong>own bone-marrow and
                platelet cells, processed and re-injected the same day</strong> for orthopedic
                conditions under FDA &quot;minimal manipulation&quot; rules. <strong>BioXcellerator</strong>{' '}
                in Medellín, Colombia uses <strong>donor umbilical-cord cells lab-expanded</strong> to
                much higher counts for a broader condition list. US same-day procedures are commonly
                estimated at <strong>$5,000-$15,000+</strong>; Colombia expanded-cell protocols at
                <strong> $8,000-$35,000</strong>. Both are largely unproven and not FDA-approved —
                estimates only; verify with each provider. This is information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: June 2026 • 12 min read
            </p>
          </div>
        </section>

        {/* Regulatory Notice */}
        <section className="mx-auto max-w-4xl px-4 py-6">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-red-900 mb-3">Important Regulatory Notice</h3>
            <p className="text-sm text-red-800 mb-3">
              <strong>Most stem cell therapies are NOT FDA-approved.</strong> The only FDA-approved
              stem cell products are blood-forming cells derived from cord blood, approved for limited
              use in blood disorders. The orthopedic and systemic uses marketed by Regenexx,
              BioXcellerator, and similar clinics are not FDA-approved and are largely unproven.{' '}
              <a href="https://www.fda.gov/vaccines-blood-biologics/consumers-biologics/important-patient-and-consumer-information-about-regenerative-medicine-therapies" target="_blank" rel="noopener noreferrer nofollow" className="underline">
                (Source: FDA consumer guidance)
              </a>
            </p>
            <p className="text-sm text-red-800">
              This comparison is informational. Always consult a qualified physician before pursuing
              any stem cell treatment in any country.
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Comparison Box */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Comparison</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Regenexx (United States)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Your own (autologous) cells</li>
                  <li>• Same-day bone-marrow concentrate + PRP</li>
                  <li>• Orthopedic / joint / spine only</li>
                  <li>• No lab culturing in the US</li>
                  <li>• ~$5,000-$15,000+ per area (estimate)</li>
                  <li>• Easy US follow-up; price by consult</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">BioXcellerator (Medellín, Colombia)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Donor (allogeneic) umbilical-cord MSCs</li>
                  <li>• Lab-expanded &quot;Signature Cells&quot;</li>
                  <li>• Wide condition list (incl. systemic)</li>
                  <li>• Onsite GMP/ISO lab; high advertised cell counts</li>
                  <li>• ~$8,000-$35,000 all-inclusive (estimate)</li>
                  <li>• Travel + remote follow-up</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">Lean Regenexx if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Your issue is a specific joint, tendon, or disc</li>
                  <li>• You want your own cells, no travel abroad</li>
                  <li>• Easy in-person follow-up matters to you</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">Lean BioXcellerator if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You want lab-expanded, high-count cells</li>
                  <li>• Your target is systemic, not one joint</li>
                  <li>• You accept the trade-offs of care abroad</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#approach" className="text-blue-600 hover:underline">1. The two approaches (and why they aren&apos;t the same)</a></li>
              <li><a href="#table" className="text-blue-600 hover:underline">2. Head-to-head comparison table</a></li>
              <li><a href="#cost" className="text-blue-600 hover:underline">3. Cost: Regenexx vs BioXcellerator</a></li>
              <li><a href="#legality" className="text-blue-600 hover:underline">4. Legality: FDA rules vs Colombia</a></li>
              <li><a href="#mexico" className="text-blue-600 hover:underline">5. How Mexico fits the comparison</a></li>
              <li><a href="#evidence" className="text-blue-600 hover:underline">6. Evidence &amp; results</a></li>
              <li><a href="#safety" className="text-blue-600 hover:underline">7. Safety &amp; how to vet either</a></li>
              <li><a href="#verdict" className="text-blue-600 hover:underline">8. Which model fits you</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              People search &quot;Regenexx vs BioXcellerator&quot; expecting two competing versions of
              the same therapy. They are not. The most useful thing you can do before spending five
              figures is understand that you are choosing between two fundamentally different models —
              not picking the cheaper of two identical products.
            </p>

            <h2 id="approach" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Two Approaches</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Regenexx — same-day, your own cells, US</h3>
            <p className="text-gray-700 mb-4">
              Regenexx is a US-based network of affiliated physicians. Its signature orthopedic
              procedure (the Regenexx-SD type) harvests <strong>bone-marrow concentrate from your
              own hip</strong>, processes it the same day, and re-injects it into the target joint or
              tissue. A separate, lower-cost option uses concentrated platelets (PRP/SCP) from your
              blood. Crucially, in the US <strong>Regenexx does not grow or culture cells</strong> —
              everything happens within the same-day window.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Autologous (your own cells) — no donor cells, so no immune-rejection concern</li>
              <li>Bone-marrow concentrate or platelet-rich plasma, processed same day</li>
              <li>Orthopedic / musculoskeletal scope: knees, hips, shoulders, spine, hands, feet</li>
              <li>Yields cells for roughly one to two joints — no lab expansion, no cell storage in the US</li>
              <li>One important exception: a cultured option, <strong>Regenexx-C</strong>, exists only at Regenexx Cayman (more below)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">BioXcellerator — lab-expanded donor cells, Colombia</h3>
            <p className="text-gray-700 mb-4">
              BioXcellerator operates a clinic in <strong>Medellín, Colombia</strong> (with a
              corporate office in Arizona). It uses <strong>mesenchymal stem cells (MSCs) derived from
              Wharton&apos;s jelly umbilical-cord tissue</strong> — donor cells, not your own — which
              it culture-expands in an onsite GMP/ISO-certified lab into what it markets as
              &quot;Signature Cells.&quot; Because the cells are grown over weeks, protocols can deliver
              far higher cell counts (some BioXcellerator protocol pages advertise figures in the
              hundreds of millions of cells) than a same-day procedure. Confirm the exact cell count
              for any specific protocol directly with the clinic.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Allogeneic (donor) umbilical-cord MSCs, lab-expanded</li>
              <li>Onsite GMP/ISO-certified laboratory; high advertised cell counts</li>
              <li>Markets a wide condition list: orthopedic, autoimmune, neurological, anti-aging, and more</li>
              <li>All-inclusive packages typically bundle lodging, transfers, and follow-up</li>
              <li>Requires international travel to Colombia</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why this matters:</strong> the difference is not branding — it is the cell
                product itself. Same-day autologous cells and lab-expanded donor cells are different
                treatments with different cell counts, different regulatory status, and different (and
                still limited) evidence bases. &quot;Cheaper&quot; or &quot;more cells&quot; is not the
                same as &quot;better for your condition.&quot;
              </p>
            </div>

            <h2 id="table" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Head-to-Head Comparison</h2>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Factor</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Regenexx (US)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">BioXcellerator (Colombia)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Cell source</td>
                    <td className="border border-gray-300 px-4 py-3">Your own (autologous)</td>
                    <td className="border border-gray-300 px-4 py-3">Donor umbilical-cord (allogeneic)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Cell processing</td>
                    <td className="border border-gray-300 px-4 py-3">Same-day, no lab culturing (US)</td>
                    <td className="border border-gray-300 px-4 py-3">Lab-expanded over weeks</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Cell count</td>
                    <td className="border border-gray-300 px-4 py-3">Lower; cells for 1-2 joints</td>
                    <td className="border border-gray-300 px-4 py-3">Higher; hundreds of millions (advertised)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Conditions marketed</td>
                    <td className="border border-gray-300 px-4 py-3">Orthopedic / joints / spine</td>
                    <td className="border border-gray-300 px-4 py-3">Orthopedic + systemic (broad list)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Cost (estimate)</td>
                    <td className="border border-gray-300 px-4 py-3">~$5,000-$15,000+ per area</td>
                    <td className="border border-gray-300 px-4 py-3">~$8,000-$35,000 all-inclusive</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Regulation</td>
                    <td className="border border-gray-300 px-4 py-3">FDA &quot;minimal manipulation&quot; rules</td>
                    <td className="border border-gray-300 px-4 py-3">Colombian regulation; expanded/donor allowed</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Travel</td>
                    <td className="border border-gray-300 px-4 py-3">US clinics; no international travel</td>
                    <td className="border border-gray-300 px-4 py-3">Travel to Medellín</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Follow-up</td>
                    <td className="border border-gray-300 px-4 py-3">In-person, easy</td>
                    <td className="border border-gray-300 px-4 py-3">Remote / telemedicine</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">FDA-approved?</td>
                    <td className="border border-gray-300 px-4 py-3">No (for these uses)</td>
                    <td className="border border-gray-300 px-4 py-3">No (for these uses)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="cost" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cost: Regenexx vs BioXcellerator</h2>

            <p className="text-gray-700 mb-4">
              Direct price comparison is genuinely tricky because the two are different products and
              neither posts a simple sticker price. <strong>Regenexx does not publish pricing</strong>
              {' '}and states procedures are customized and quoted at consultation; it does note that
              platelet (PRP/SCP) procedures cost considerably less than bone-marrow-concentrate ones.
              Independent reporting puts US same-day bone-marrow procedures in the rough range below —
              all <strong>estimates to verify</strong>, not quotes.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Option</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical price (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Regenexx PRP / platelet (SCP)</td>
                    <td className="border border-gray-300 px-4 py-3">From ~$1,500+</td>
                    <td className="border border-gray-300 px-4 py-3">Cheapest tier; not the same as bone-marrow cells</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Regenexx-SD (bone-marrow, US)</td>
                    <td className="border border-gray-300 px-4 py-3">~$5,000-$15,000+ per area</td>
                    <td className="border border-gray-300 px-4 py-3">One published patient account: $6,500 / one knee</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Regenexx-C (cultured, Cayman)</td>
                    <td className="border border-gray-300 px-4 py-3">Higher; verify with clinic</td>
                    <td className="border border-gray-300 px-4 py-3">Two trips; offered only at Regenexx Cayman</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">BioXcellerator (Colombia)</td>
                    <td className="border border-gray-300 px-4 py-3">~$8,000-$35,000 all-inclusive</td>
                    <td className="border border-gray-300 px-4 py-3">Often bundles lodging, transfers, follow-up</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Compare all-in, not headline price</h4>
              <p className="text-gray-700">
                A US Regenexx quote usually covers the procedure only — flights, time off, and any
                repeat injections are extra. A Colombia package often bundles lodging, transfers, and
                follow-up but adds international travel and the cost of returning for issues. Add up
                the all-in total for your specific case, then compare. Every figure here is an estimate
                that changes — confirm current pricing directly with each provider.
              </p>
            </div>

            <h2 id="legality" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Legality: FDA Rules vs Colombia</h2>

            <p className="text-gray-700 mb-4">
              The single biggest reason these two clinics look so different is regulation. In the US,
              cell therapies escape full drug-style FDA review only when they are{' '}
              <strong>&quot;minimally manipulated,&quot; used for a matching (homologous) purpose, and
              not combined or expanded</strong> — and, for systemic effects, autologous. That is
              exactly why Regenexx in the US is same-day and uses your own cells: lab-expanding cells or
              using donor cells would push the product into the FDA&apos;s drug pathway.
            </p>
            <p className="text-gray-700 mb-4">
              Colombia permits <strong>lab-expanded and donor (allogeneic) umbilical-cord cells</strong>
              {' '}that the FDA does not allow for most uses. That regulatory difference — not a
              scientific breakthrough unavailable in the US — is what lets BioXcellerator offer higher
              cell counts and a broader condition list. It is also why Regenexx itself moved its own
              cultured option (Regenexx-C) offshore to Cayman. More legal latitude abroad is not the
              same as more proof; it means the burden of vetting shifts almost entirely to you.
            </p>

            <h2 id="mexico" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Where Mexico Fits the Comparison</h2>

            <p className="text-gray-700 mb-4">
              Many people researching &quot;compare stem cell therapy Mexico&quot; are really comparing
              three buckets: the <strong>US (Regenexx-style, same-day autologous)</strong>, and two
              Latin American expanded-cell destinations — <strong>Colombia (BioXcellerator)</strong> and
              <strong> Mexico (COFEPRIS-regulated clinics)</strong>. Mexico and Colombia are closer to
              each other than either is to the US: both allow lab-expanded and donor cells, both run
              lower than US pricing, and both vary widely in clinic quality. Mexico&apos;s edge is
              proximity (Tijuana is a short hop from San Diego); Colombia&apos;s pitch is Medellín&apos;s
              established medical-tourism infrastructure.
            </p>
            <p className="text-gray-700 mb-4">
              If you are weighing countries rather than these two specific brands, our{' '}
              <Link href="/guides/us-vs-mexico-stem-cells" className="text-blue-600 hover:underline">
                US vs Mexico stem cell comparison
              </Link>{' '}
              covers the FDA-vs-COFEPRIS framework, and the{' '}
              <Link href="/guides/colombia-stem-cell-guide" className="text-blue-600 hover:underline">
                Colombia stem cell guide
              </Link>{' '}
              profiles BioXcellerator and Medellín in depth. For a country-by-country price map, see the{' '}
              <Link href="/guides/stem-cell-therapy-cost" className="text-blue-600 hover:underline">
                stem cell therapy cost guide
              </Link>.
            </p>

            <h2 id="evidence" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Evidence &amp; Results</h2>

            <p className="text-gray-700 mb-4">
              This is where the honest answer disappoints both camps. <strong>The only FDA-approved
              stem cell products are blood-forming cells from cord blood, for blood disorders.</strong>
              {' '}Neither the orthopedic uses Regenexx markets nor the systemic uses BioXcellerator
              markets are FDA-approved, and high-quality, peer-reviewed outcome evidence for both
              same-day autologous and expanded-MSC therapies remains limited and condition-dependent.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Patient testimonials and before/after stories are marketing, not evidence</li>
              <li>Ask each clinic for outcome data and any registered clinical trials for your condition</li>
              <li>Higher cell counts have not been shown to reliably mean better outcomes</li>
              <li>The FDA actively warns about unproven products marketed for a wide range of diseases</li>
            </ul>

            <h2 id="safety" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Safety &amp; How to Vet Either Clinic</h2>

            <p className="text-gray-700 mb-4">
              Whichever model you consider, the vetting checklist is similar — and the same red flags
              apply on both sides of the border:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Confirm exactly what cells you are getting (autologous vs donor; same-day vs expanded; cell count)</li>
              <li>Ask for the lab&apos;s certifications (GMP/ISO) and batch/potency testing for the cell product</li>
              <li>Check the treating physician&apos;s training and what hospital backup exists for emergencies</li>
              <li>Demand realistic expectations and written informed consent — not guaranteed results</li>
              <li>For travel, plan for follow-up and complications back home before you book</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Red flag, either clinic, either country</h4>
              <p className="text-gray-700">
                Any provider — US or abroad — that <strong>guarantees results</strong> or claims stem
                cells will <strong>&quot;cure&quot;</strong> your condition is a warning sign. Legitimate
                clinics present realistic, uncertain expectations and discuss risks openly.
              </p>
            </div>

            <h2 id="verdict" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Which Model Fits You</h2>

            <div className="bg-blue-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: Regenexx</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Your problem is one specific joint, tendon, ligament, or disc</li>
                <li>You prefer your own cells and want to avoid donor-cell and travel questions</li>
                <li>Easy, in-person follow-up with the treating physician matters</li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                Good fit for: a localized orthopedic issue, treated in the US with autologous cells
              </p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: BioXcellerator</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You specifically want lab-expanded, high-count donor cells</li>
                <li>Your target is systemic, or a condition the FDA does not permit treating in the US</li>
                <li>You accept international travel and remote follow-up as trade-offs</li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                Good fit for: someone seeking expanded-cell protocols and comfortable with care abroad
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">A simple decision framework</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li>Define your condition: one joint (leans Regenexx) vs systemic (leans expanded-cell)</li>
              <li>Decide on cell source: your own cells vs donor umbilical-cord cells</li>
              <li>Get all-in quotes from each, including travel, repeats, and follow-up</li>
              <li>Vet the lab, the physician, and the evidence — and walk from any &quot;cure&quot; claim</li>
              <li>Review the whole plan with a qualified, independent physician before committing</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Keep researching</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>By condition:</strong> our <Link href="/guides/stem-cell-knees-mexico" className="text-blue-600 hover:underline">knee stem cell therapy guide</Link> covers what the evidence shows for joints</li>
              <li><strong>By destination:</strong> the <Link href="/guides/colombia-stem-cell-guide" className="text-blue-600 hover:underline">Colombia / BioXcellerator guide</Link> profiles Medellín in depth</li>
              <li><strong>All providers:</strong> browse the <Link href="/stem-cells" className="text-blue-600 hover:underline">stem cell therapy hub</Link> for clinics and regional guides</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Stem Cell Clinics &amp; Costs</h3>
            <p className="mb-6 text-blue-100">
              See US and international stem cell providers side by side, with transparent cost estimates
              and how to vet a clinic before you book.
            </p>
            <Link
              href="/stem-cells"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse the Stem Cell Hub
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

          {/* Sources */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Regenexx — Procedure Experience: same-day autologous approach, bone-marrow concentrate &amp; PRP (regenexx.com)</li>
              <li>• Regenexx — How much do procedures cost: customized, quoted at consultation; PRP costs less than bone-marrow (regenexx.com)</li>
              <li>• Regenexx Cayman — Regenexx-SD vs cultured Regenexx-C (two trips, Cayman-exclusive) (regenexxcayman.com)</li>
              <li>• BioXcellerator — Wharton&apos;s jelly umbilical-cord MSCs, Medellín, GMP/ISO lab, condition list (bioxcellerator.com)</li>
              <li>• FDA — &quot;Important Patient and Consumer Information About Regenerative Medicine Therapies&quot;: only blood-forming cord-blood products approved; orthopedic and neurological uses not approved (fda.gov)</li>
              <li>• FDA — Minimal Manipulation &amp; Homologous Use guidance (361 HCT/P framework) (fda.gov)</li>
              <li>• BioInformant — Cost of Stem Cell Therapy: US bone-marrow/adipose ~$15K-$30K range; $6,500 one-knee account; PRP from ~$1,500 (bioinformant.com)</li>
            </ul>
          </div>
        </article>

        {/* Shared YMYL medical + affiliate disclaimer */}
        <MedicalDisclaimer />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Stem Cell Clinic Comparison Guide"
            description="Regenexx vs BioXcellerator vs Mexico: cell types, cost estimates, and how to vet a clinic."
            source="guide_regenexx_vs_bioxcellerator"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
