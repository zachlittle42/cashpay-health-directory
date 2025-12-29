import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Peptide Therapy Guide: BPC-157, TB-500, CJC-1295 & More (2025) | VitalityScout',
  description: 'Complete peptide therapy guide covering BPC-157, TB-500, CJC-1295, and other peptides. Learn about uses, costs, FDA regulations, and what the science says.',
  keywords: ['peptide therapy', 'BPC-157', 'TB-500', 'CJC-1295', 'peptides for healing', 'peptides for muscle', 'growth hormone peptides'],
};

export default function PeptideTherapyGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Peptide Therapy Guide: BPC-157, TB-500, CJC-1295 & More',
    description: 'Comprehensive guide to peptide therapy covering popular peptides, uses, costs, and regulatory status.',
    author: {
      '@type': 'Organization',
      name: 'VitalityScout'
    },
    publisher: {
      '@type': 'Organization',
      name: 'VitalityScout',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vitalityscout.com/logo.png'
      }
    },
    datePublished: '2025-01-01',
    dateModified: '2025-01-01',
    mainEntityOfPage: 'https://vitalityscout.com/guides/peptide-therapy-guide',
    articleSection: 'Longevity Guides',
    keywords: ['peptides', 'BPC-157', 'TB-500', 'regenerative medicine']
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="mx-auto max-w-4xl px-4 py-3">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">→</span>
              <Link href="/guides" className="hover:text-blue-600">Guides</Link>
              <span className="mx-2">→</span>
              <span className="text-gray-900">Peptide Therapy</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-emerald-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4">
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                Longevity
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Peptide Therapy: What You Need to Know
            </h1>
            <p className="text-xl text-gray-600">
              A comprehensive guide to peptide therapy—BPC-157, TB-500, growth hormone secretagogues, and more. What the science says, what&apos;s legal, and what you should know before trying them.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Last updated: January 2025 • 18 min read
            </p>
          </div>
        </section>

        {/* Critical Regulatory Warning */}
        <div className="bg-red-50 border-b-2 border-red-200">
          <div className="mx-auto max-w-4xl px-4 py-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">⚠️</div>
              <div>
                <h3 className="font-bold text-red-900 text-lg mb-2">Critical Regulatory Information</h3>
                <p className="text-red-800 text-sm">
                  Most peptides discussed here are NOT FDA-approved medications. In late 2023, the FDA moved many popular peptides (including BPC-157, TB-500, and some growth hormone secretagogues) to Category 2 of its &quot;Bulk Drug Substances&quot; list, effectively restricting their use even by compounding pharmacies. The legal and safety landscape is rapidly evolving.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Overview Box */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Peptide Therapy Overview</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-emerald-600 mb-1">Cost Range</div>
                <div className="text-gray-900 font-semibold">$150 - $500+/month</div>
                <div className="text-gray-600">Depending on peptide(s)</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-teal-600 mb-1">Administration</div>
                <div className="text-gray-900 font-semibold">Mostly injectable</div>
                <div className="text-gray-600">Some oral/nasal options</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-amber-600 mb-1">Evidence Level</div>
                <div className="text-gray-900 font-semibold">Mixed</div>
                <div className="text-gray-600">Mostly animal/cell studies</div>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What This Guide Covers</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#what-are-peptides" className="text-blue-600 hover:underline">1. What Are Peptides?</a></li>
              <li><a href="#popular" className="text-blue-600 hover:underline">2. Popular Peptides Explained</a></li>
              <li><a href="#evidence" className="text-blue-600 hover:underline">3. What Does the Science Say?</a></li>
              <li><a href="#regulations" className="text-blue-600 hover:underline">4. Legal & Regulatory Status</a></li>
              <li><a href="#sourcing" className="text-blue-600 hover:underline">5. How People Get Peptides</a></li>
              <li><a href="#risks" className="text-blue-600 hover:underline">6. Risks & Side Effects</a></li>
              <li><a href="#verdict" className="text-blue-600 hover:underline">7. Our Assessment</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Peptide therapy has become one of the hottest trends in biohacking and longevity medicine. Athletes swear by them for recovery, anti-aging clinics promote them for everything from healing to fat loss, and they&apos;ve become a multi-hundred-million dollar industry. But what&apos;s real, what&apos;s hype, and what&apos;s the legal reality?
            </p>

            <h2 id="what-are-peptides" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Are Peptides?</h2>

            <p className="text-gray-700 mb-4">
              Peptides are short chains of amino acids—essentially small proteins. Your body makes thousands of peptides naturally, and they serve as signaling molecules that regulate various biological processes.
            </p>

            <p className="text-gray-700 mb-4">
              &quot;Peptide therapy&quot; typically refers to using synthetic versions of these signaling molecules to achieve specific effects: accelerating healing, building muscle, improving sleep, or stimulating growth hormone.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Important distinction:</strong> Peptides are different from anabolic steroids. They work through signaling pathways rather than directly forcing hormonal changes. However, some (like growth hormone secretagogues) do affect hormone levels.
              </p>
            </div>

            <h2 id="popular" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Popular Peptides Explained</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Healing & Recovery Peptides</h3>

            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h4 className="font-bold text-gray-900 mb-2">BPC-157 (Body Protection Compound)</h4>
              <p className="text-gray-700 mb-3">
                <strong>What it is:</strong> A synthetic peptide based on a protective compound found in gastric juice.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Claimed benefits:</strong> Accelerated healing of tendons, ligaments, muscles, and gut tissue. Often called the &quot;Wolverine peptide&quot; for supposed rapid healing.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Administration:</strong> Subcutaneous injection near injury site, or oral/sublingual.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Typical dose:</strong> 250-500mcg 1-2x daily
              </p>
              <p className="text-gray-700">
                <strong>Cost:</strong> $80-150/month
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h4 className="font-bold text-gray-900 mb-2">TB-500 (Thymosin Beta-4)</h4>
              <p className="text-gray-700 mb-3">
                <strong>What it is:</strong> Synthetic version of a naturally occurring protein involved in tissue repair.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Claimed benefits:</strong> Promotes new blood vessel growth, reduces inflammation, supports healing. Often stacked with BPC-157.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Administration:</strong> Subcutaneous or intramuscular injection.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Typical dose:</strong> 2-5mg 1-2x weekly
              </p>
              <p className="text-gray-700">
                <strong>Cost:</strong> $100-200/month
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Growth Hormone Secretagogues</h3>

            <p className="text-gray-700 mb-4">
              These peptides stimulate your pituitary gland to produce more growth hormone naturally, rather than injecting synthetic HGH directly.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h4 className="font-bold text-gray-900 mb-2">CJC-1295 (with or without DAC)</h4>
              <p className="text-gray-700 mb-3">
                <strong>What it is:</strong> Growth hormone releasing hormone (GHRH) analog.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Claimed benefits:</strong> Increases growth hormone levels, may improve body composition, sleep, and recovery.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Administration:</strong> Subcutaneous injection, often before bed.
              </p>
              <p className="text-gray-700">
                <strong>Cost:</strong> $150-300/month
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h4 className="font-bold text-gray-900 mb-2">Ipamorelin</h4>
              <p className="text-gray-700 mb-3">
                <strong>What it is:</strong> Growth hormone secretagogue (GHS) that stimulates the ghrelin receptor.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Claimed benefits:</strong> Selective GH release without affecting cortisol or prolactin. Often combined with CJC-1295.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Administration:</strong> Subcutaneous injection, usually before bed.
              </p>
              <p className="text-gray-700">
                <strong>Cost:</strong> $100-200/month
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 my-6">
              <h4 className="font-bold text-gray-900 mb-2">Tesamorelin</h4>
              <p className="text-gray-700 mb-3">
                <strong>What it is:</strong> GHRH analog—notably, the only FDA-approved peptide in this category.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>FDA-approved for:</strong> Reducing abdominal fat in HIV patients with lipodystrophy.
              </p>
              <p className="text-gray-700 mb-3">
                <strong>Off-label use:</strong> Body composition, anti-aging. This is the one GH peptide you can legally get prescribed.
              </p>
              <p className="text-gray-700">
                <strong>Cost:</strong> $400-800/month (expensive due to FDA approval)
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Other Notable Peptides</h3>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Peptide</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Primary Use</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">PT-141 (Bremelanotide)</td>
                    <td className="border border-gray-300 px-4 py-3">Sexual dysfunction</td>
                    <td className="border border-gray-300 px-4 py-3">FDA-approved as Vyleesi for female HSDD</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Melanotan II</td>
                    <td className="border border-gray-300 px-4 py-3">Tanning, libido</td>
                    <td className="border border-gray-300 px-4 py-3">NOT FDA-approved; significant safety concerns</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Selank</td>
                    <td className="border border-gray-300 px-4 py-3">Anxiety, cognition</td>
                    <td className="border border-gray-300 px-4 py-3">Approved in Russia, not US</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Semax</td>
                    <td className="border border-gray-300 px-4 py-3">Cognitive enhancement</td>
                    <td className="border border-gray-300 px-4 py-3">Approved in Russia, not US</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">GHK-Cu</td>
                    <td className="border border-gray-300 px-4 py-3">Skin, wound healing</td>
                    <td className="border border-gray-300 px-4 py-3">Copper peptide; topical and injectable</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Epithalon</td>
                    <td className="border border-gray-300 px-4 py-3">Longevity (telomeres)</td>
                    <td className="border border-gray-300 px-4 py-3">Heavily marketed but weak evidence</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="evidence" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Does the Science Say?</h2>

            <p className="text-gray-700 mb-4">
              Here&apos;s the honest assessment of the evidence for popular peptides:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">BPC-157: Promising in Animals, Unproven in Humans</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Dozens of animal studies showing accelerated healing of various tissues</li>
              <li>Works through multiple mechanisms: angiogenesis, growth factors, gut-brain axis</li>
              <li><strong>But:</strong> Almost no controlled human trials published</li>
              <li>Anecdotal reports are extremely positive, but this is weak evidence</li>
              <li>Systematic reviews conclude more research is needed</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">TB-500: Similar Story</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Strong mechanistic rationale and animal data</li>
              <li>Used extensively in veterinary medicine (racehorses)</li>
              <li><strong>But:</strong> Very limited human studies</li>
              <li>The one human wound-healing study was small and inconclusive</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Growth Hormone Secretagogues: Better Evidence</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>CJC-1295 and Ipamorelin: Small human studies confirm they do raise GH/IGF-1</li>
              <li>Tesamorelin: Well-studied with FDA approval for specific use</li>
              <li>Whether raising GH provides meaningful benefits for healthy adults is debated</li>
              <li>Long-term safety data in healthy populations is limited</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">The Evidence Gap</h4>
              <p className="text-gray-700">
                The peptide industry is built largely on: (1) animal studies, (2) mechanistic plausibility, and (3) anecdotes. While some peptides may genuinely work, we don&apos;t have the rigorous human clinical trial data that would typically be required to make health claims. This doesn&apos;t mean they don&apos;t work—it means we don&apos;t know for certain.
              </p>
            </div>

            <h2 id="regulations" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Legal & Regulatory Status</h2>

            <p className="text-gray-700 mb-4">
              The regulatory landscape for peptides changed dramatically in 2023-2024:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">The FDA&apos;s Category 2 List</h3>

            <p className="text-gray-700 mb-4">
              In late 2023, the FDA finalized a rule moving numerous peptides to &quot;Category 2&quot; of its bulk drug substances list. Category 2 means these peptides cannot be used by compounding pharmacies to make patient-specific medications.
            </p>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
              <h4 className="font-bold text-red-900 mb-2">Peptides Restricted by FDA (Category 2)</h4>
              <ul className="text-red-800 space-y-1">
                <li>• BPC-157</li>
                <li>• TB-500 (Thymosin Beta-4)</li>
                <li>• AOD-9604</li>
                <li>• CJC-1295 (both versions)</li>
                <li>• Ipamorelin</li>
                <li>• Sermorelin</li>
                <li>• GHRP-2, GHRP-6</li>
                <li>• Epithalon</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">What This Means Practically</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Licensed US pharmacies can no longer legally compound these peptides</li>
              <li>Doctors cannot legally prescribe them from compounding pharmacies</li>
              <li>&quot;Research chemical&quot; websites still sell them, but this is a legal gray area</li>
              <li>Quality and contamination risks increase with unregulated sources</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Peptides That Are Still Available</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Tesamorelin:</strong> FDA-approved, available by prescription</li>
              <li><strong>PT-141 (Bremelanotide):</strong> FDA-approved as Vyleesi</li>
              <li><strong>Semaglutide/Tirzepatide:</strong> FDA-approved GLP-1 medications</li>
              <li><strong>GHK-Cu:</strong> Currently not restricted for cosmetic use</li>
            </ul>

            <h2 id="sourcing" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How People Get Peptides</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Before 2024 (Historical)</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Telehealth clinics:</strong> Prescribed via online consultation, filled by compounding pharmacies</li>
              <li><strong>Anti-aging/longevity clinics:</strong> In-person or telemedicine prescriptions</li>
              <li><strong>Compounding pharmacies:</strong> Made patient-specific preparations</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Current Reality (Post-FDA Restrictions)</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>&quot;Research chemical&quot; vendors:</strong> Sell peptides labeled &quot;not for human consumption&quot;</li>
              <li><strong>International pharmacies:</strong> Some people order from overseas</li>
              <li><strong>Underground sources:</strong> Quality completely unverified</li>
            </ul>

            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-red-900 mb-3">Quality & Safety Concerns</h4>
              <p className="text-red-800 mb-4">
                With FDA restrictions pushing the market underground, quality concerns have increased significantly:
              </p>
              <ul className="text-red-800 space-y-2">
                <li>• Third-party testing shows many products are mislabeled or contaminated</li>
                <li>• Some &quot;peptides&quot; contain little to no active ingredient</li>
                <li>• Bacterial contamination is a real risk with injectable products</li>
                <li>• No recourse if products cause harm</li>
              </ul>
            </div>

            <h2 id="risks" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Risks & Side Effects</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">General Injection Risks</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Injection site reactions (redness, swelling, pain)</li>
              <li>Infection risk (if contaminated product or poor technique)</li>
              <li>Abscess formation</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Peptide-Specific Concerns</h3>

            <p className="text-gray-700 mb-4">
              <strong>Growth hormone secretagogues:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Water retention, joint pain</li>
              <li>Potential for glucose intolerance</li>
              <li>Theoretical cancer concerns (GH promotes cell growth)</li>
              <li>Unknown long-term effects</li>
            </ul>

            <p className="text-gray-700 mb-4">
              <strong>BPC-157:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Generally well-tolerated in animal studies</li>
              <li>Theoretical concern: promoting blood vessel growth could affect tumors</li>
              <li>Unknown long-term human effects</li>
            </ul>

            <p className="text-gray-700 mb-4">
              <strong>Melanotan II:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Nausea, flushing, appetite suppression</li>
              <li>Changes to moles (potential melanoma risk)</li>
              <li>Uncontrolled erections in men</li>
              <li>The FDA has issued explicit warnings about this one</li>
            </ul>

            <h2 id="verdict" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Our Assessment</h2>

            <div className="bg-emerald-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">The Balanced View</h3>
              <p className="text-gray-700 mb-4">
                Peptides are genuinely interesting molecules with real biological effects. Some may truly help with healing, body composition, or performance. The science is plausible and animal data is often impressive.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>However:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Human clinical trial data is largely missing</li>
                <li>The FDA has restricted most popular peptides, making legal access difficult</li>
                <li>Unregulated sources pose real quality and safety risks</li>
                <li>Long-term effects are unknown</li>
                <li>Marketing claims often far exceed evidence</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">When Peptides Might Make Sense</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>FDA-approved options (Tesamorelin, PT-141) with physician supervision</li>
              <li>You&apos;ve exhausted conventional treatment options</li>
              <li>You understand you&apos;re experimenting with uncertain benefits</li>
              <li>You can verify product quality (challenging now)</li>
              <li>You&apos;re working with a knowledgeable physician</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">When to Skip Them</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>You&apos;re expecting guaranteed results</li>
              <li>You&apos;d be using unverified sources</li>
              <li>You have a history of cancer (especially with GH peptides)</li>
              <li>You&apos;re not comfortable with the legal/regulatory uncertainty</li>
              <li>You haven&apos;t optimized the basics (sleep, nutrition, training)</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Exploring Longevity Options?</h3>
            <p className="mb-6 text-emerald-100">
              Learn about other longevity interventions and their evidence base.
            </p>
            <Link
              href="/longevity"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-emerald-600 hover:bg-emerald-50 transition-colors"
            >
              Longevity Hub
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 rounded-lg bg-red-50 border-2 border-red-200 p-6">
            <h3 className="font-bold text-red-900 mb-2">Important Disclaimer</h3>
            <p className="text-sm text-red-800 mb-4">
              Most peptides discussed in this guide are NOT FDA-approved for human use. Their sale, purchase, and use may violate federal and state laws. This information is for educational purposes only and does not constitute medical advice, legal advice, or encouragement to use any peptide.
            </p>
            <p className="text-sm text-red-800">
              The FDA has explicitly warned against the use of many peptides. Using products from unregulated sources carries significant health risks. Consult with a licensed healthcare provider before considering any peptide therapy.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources & References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• FDA Final Rule: Bulk Drug Substances That Can Be Used To Compound Drug Products (2023)</li>
              <li>• Sikiric et al. - Multiple BPC-157 studies in Journal of Physiology and Pharmacology</li>
              <li>• Tesamorelin FDA approval documents and clinical trial data</li>
              <li>• Endocrine Society: Position on growth hormone secretagogues</li>
              <li>• Journal of Clinical Endocrinology: GH secretagogue studies</li>
            </ul>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
