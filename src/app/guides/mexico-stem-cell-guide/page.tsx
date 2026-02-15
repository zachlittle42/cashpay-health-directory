import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';

export const metadata: Metadata = {
  title: 'Stem Cell Therapy in Mexico: Clinics, Costs & What to Know (2024)',
  description: 'Complete guide to stem cell therapy in Mexico. Tijuana, Los Cabos, Cancun clinics. Costs from $3,500. What treatments are available, safety considerations, and how to choose a clinic.',
};

export default function MexicoStemCellGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Stem Cell Therapy in Mexico: Complete Guide for Americans',
    description: 'Educational guide to stem cell and regenerative medicine options in Mexico, including clinics, costs, treatments offered, and important safety considerations.',
    author: { '@type': 'Organization', name: 'VitalityScout' },
    publisher: { '@type': 'Organization', name: 'VitalityScout' },
    datePublished: '2024-12-21',
    dateModified: '2024-12-21',
    mainEntityOfPage: 'https://vitalityscout.com/guides/mexico-stem-cell-guide',
    keywords: ['Mexico stem cell therapy', 'Tijuana stem cells', 'regenerative medicine Mexico', 'stem cell tourism', 'MSC therapy Mexico']
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="mx-auto max-w-4xl px-4 py-3">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">→</span>
              <Link href="/guides" className="hover:text-blue-600">Guides</Link>
              <span className="mx-2">→</span>
              <span className="text-gray-900">Mexico Stem Cell Guide</span>
            </nav>
          </div>
        </div>

      <section className="bg-gradient-to-b from-emerald-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-4xl">🇲🇽</span>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
              Regenerative Medicine
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Stem Cell Therapy in Mexico: What Americans Need to Know
          </h1>
          <p className="text-xl text-gray-600">
            A balanced look at regenerative medicine options south of the border—costs, clinics, and critical considerations.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Last updated: December 2024 • 20 min read
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-12 prose prose-lg">

        {/* Critical Disclaimer - Top of Article */}
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-red-900 mt-0 mb-3">Important Regulatory Notice</h3>
          <p className="text-sm text-red-800 mb-3">
            <strong>These treatments are NOT approved by the US FDA.</strong> The FDA has issued warnings about unproven stem cell therapies, citing risks including infection, tumor formation, and treatment failure.
          </p>
          <p className="text-sm text-red-800 mb-3">
            Stem cell therapies in Mexico are regulated by COFEPRIS (Mexico&apos;s equivalent of the FDA) and are legal in Mexico for certain applications. However, many treatments offered have not been validated in rigorous clinical trials.
          </p>
          <p className="text-sm text-red-800 mb-0">
            <strong>This guide is educational only.</strong> Consult with your physician before pursuing any treatment. We do not endorse or guarantee the efficacy of any treatment or clinic mentioned.
          </p>
        </div>

        <h2>Why Americans Go to Mexico for Stem Cells</h2>
        <p>
          Over the past decade, Mexico has become one of the top destinations for Americans seeking stem cell and regenerative medicine treatments. Here&apos;s what&apos;s driving this trend:
        </p>
        <ul>
          <li><strong>Regulatory differences</strong> - Treatments available in Mexico are restricted or unavailable in the US</li>
          <li><strong>Cost savings</strong> - 50-70% less than comparable US treatments (where available)</li>
          <li><strong>Proximity</strong> - Tijuana is 20 minutes from San Diego; no long flights required</li>
          <li><strong>Established infrastructure</strong> - Clinics have treated international patients for 10+ years</li>
          <li><strong>Frustration with US options</strong> - Patients with chronic conditions seeking alternatives</li>
        </ul>

        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-bold text-emerald-900 mt-0 mb-2">Mexico Stem Cell Overview</h3>
          <ul className="mb-0 text-sm text-gray-700 space-y-1">
            <li>✓ <strong>COFEPRIS-regulated</strong> clinics (Mexico&apos;s FDA)</li>
            <li>✓ <strong>$3,500-$15,000</strong> typical treatment range</li>
            <li>✓ <strong>50-70% savings</strong> vs. US prices (where treatments exist)</li>
            <li>✓ <strong>2-4 hour travel</strong> from most US cities</li>
            <li>✓ <strong>Mesenchymal stem cells (MSCs)</strong> most commonly used</li>
            <li>✓ <strong>English-speaking staff</strong> at most clinics</li>
          </ul>
        </div>

        <h2>What Treatments Are Offered?</h2>
        <p>
          Mexico clinics offer a range of regenerative treatments. The most common involve mesenchymal stem cells (MSCs) derived from umbilical cord tissue (Wharton&apos;s jelly) or placental tissue:
        </p>

        <div className="bg-white border-2 border-gray-200 rounded-lg p-6 my-8">
          <h3 className="text-lg font-bold text-gray-900 mt-0 mb-4">Common Treatment Categories</h3>
          <div className="overflow-x-auto">
            <table className="text-sm w-full">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left py-2">Category</th>
                  <th className="text-left py-2">Conditions Treated</th>
                  <th className="text-left py-2">Typical Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 font-medium">Orthopedic</td>
                  <td className="py-2">Osteoarthritis, joint pain, back pain, sports injuries</td>
                  <td className="py-2">$3,500-$8,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Anti-Aging/Longevity</td>
                  <td className="py-2">General wellness, energy, &quot;biological age reduction&quot;</td>
                  <td className="py-2">$5,000-$15,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Autoimmune</td>
                  <td className="py-2">MS, lupus, rheumatoid arthritis, Crohn&apos;s</td>
                  <td className="py-2">$8,000-$20,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Neurological</td>
                  <td className="py-2">Parkinson&apos;s, stroke recovery, neuropathy</td>
                  <td className="py-2">$10,000-$25,000</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Cardiac</td>
                  <td className="py-2">Heart failure, cardiomyopathy</td>
                  <td className="py-2">$10,000-$25,000</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Exosome Therapy</td>
                  <td className="py-2">Various (newer, cell-free approach)</td>
                  <td className="py-2">$3,000-$10,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 mb-0">
            Costs vary by clinic, number of cells, and treatment protocol. Multiple sessions may be recommended.
          </p>
        </div>

        <h2>Major Clinics by Location</h2>

        <h3>Tijuana</h3>
        <p>
          The closest option for most Americans. Just 20 minutes from San Diego, Tijuana has the highest concentration of stem cell clinics in Mexico.
        </p>

        <div className="space-y-4 my-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="text-lg font-bold text-gray-900 mt-0 mb-2">R3 Stem Cell</h4>
            <p className="text-sm text-gray-600 mb-2">
              One of the largest stem cell networks in Mexico with locations in Tijuana, Cancun, and Puerto Vallarta. Claims 27,000+ patients treated over 12 years.
            </p>
            <ul className="text-sm text-gray-600 mb-0 space-y-1">
              <li>• 25 million stem cells: $3,750</li>
              <li>• Uses umbilical cord MSCs</li>
              <li>• English-speaking staff</li>
              <li>• Free consultations available</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="text-lg font-bold text-gray-900 mt-0 mb-2">ProgenCell</h4>
            <p className="text-sm text-gray-600 mb-2">
              Located 3 minutes from San Diego. Awards from International Board of Medicine and Surgery. Specializes in neurological conditions.
            </p>
            <ul className="text-sm text-gray-600 mb-0 space-y-1">
              <li>• Neurological specialty (Parkinson&apos;s, MS, stroke)</li>
              <li>• Anti-aging protocols</li>
              <li>• Established 10+ years</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="text-lg font-bold text-gray-900 mt-0 mb-2">Cellular Regeneration Clinic (CRC)</h4>
            <p className="text-sm text-gray-600 mb-2">
              Features in-house lab (Institute of Cellular Therapy) that is federally licensed in Mexico. GMP-certified laboratory.
            </p>
            <ul className="text-sm text-gray-600 mb-0 space-y-1">
              <li>• In-house, federally licensed lab</li>
              <li>• Bilingual medical team</li>
              <li>• GMP-certified facility</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="text-lg font-bold text-gray-900 mt-0 mb-2">Novastem</h4>
            <p className="text-sm text-gray-600 mb-2">
              Providing neurological stem cell treatments since 2014.
            </p>
            <ul className="text-sm text-gray-600 mb-0 space-y-1">
              <li>• Neurological focus</li>
              <li>• 10+ years experience</li>
            </ul>
          </div>
        </div>

        <h3>Los Cabos (San José del Cabo)</h3>
        <p>
          A more upscale, resort-oriented experience. Combines treatment with vacation in a beautiful setting.
        </p>

        <div className="space-y-4 my-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="text-lg font-bold text-gray-900 mt-0 mb-2">Longevity Medical Institute</h4>
            <p className="text-sm text-gray-600 mb-2">
              COFEPRIS-licensed facility focusing on anti-aging and longevity. Located in San José del Cabo.
            </p>
            <ul className="text-sm text-gray-600 mb-0 space-y-1">
              <li>• Anti-aging stem cell package: $7,500</li>
              <li>• IV MSCs, localized injections, exosomes</li>
              <li>• NK-cell immunotherapy available</li>
              <li>• Peptides (BPC-157, Epithalon, etc.) and NAD+</li>
              <li>• GMP-manufactured products</li>
            </ul>
          </div>
        </div>

        <h3>Puerto Vallarta</h3>
        <div className="space-y-4 my-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="text-lg font-bold text-gray-900 mt-0 mb-2">Regenamex</h4>
            <p className="text-sm text-gray-600 mb-2">
              5+ years experience with locations in Puerto Vallarta and Tijuana. Uses only Wharton&apos;s jelly and placental MSCs.
            </p>
            <ul className="text-sm text-gray-600 mb-0 space-y-1">
              <li>• Non-embryonic, ethically sourced cells</li>
              <li>• Expanded in sterile laboratory conditions</li>
              <li>• Beach town recovery environment</li>
            </ul>
          </div>
        </div>

        <h3>Cancun</h3>
        <div className="space-y-4 my-6">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="text-lg font-bold text-gray-900 mt-0 mb-2">CKM Stem Cells</h4>
            <p className="text-sm text-gray-600 mb-2">
              Located in Cancún with additional location in Ajijic. COFEPRIS-certified medical team.
            </p>
            <ul className="text-sm text-gray-600 mb-0 space-y-1">
              <li>• MSC and exosome therapies</li>
              <li>• Tissue repair, immune balance, anti-aging focus</li>
              <li>• Caribbean recovery setting</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="text-lg font-bold text-gray-900 mt-0 mb-2">Cellular Hope Institute</h4>
            <p className="text-sm text-gray-600 mb-2">
              Advanced stem cell and exosome therapies with personalized treatment protocols.
            </p>
            <ul className="text-sm text-gray-600 mb-0 space-y-1">
              <li>• Aesthetics and anti-aging</li>
              <li>• Collagen production, skin rejuvenation</li>
              <li>• Modern facility</li>
            </ul>
          </div>
        </div>

        <h2>What Does Treatment Involve?</h2>
        <p>
          A typical stem cell treatment trip to Mexico follows this general pattern:
        </p>

        <div className="space-y-4 my-8">
          <div className="border-l-4 border-emerald-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">Before Your Trip</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-0">
              <li>• Virtual consultation with clinic (usually free)</li>
              <li>• Medical history review</li>
              <li>• Treatment plan and pricing provided</li>
              <li>• Book appointment, flights, accommodation</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">Day 1: Arrival & Evaluation</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-0">
              <li>• Airport pickup (most clinics offer this)</li>
              <li>• In-person consultation and examination</li>
              <li>• Blood work and any imaging needed</li>
              <li>• Treatment plan finalized</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">Day 2-3: Treatment</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-0">
              <li>• IV administration of stem cells (most common)</li>
              <li>• Localized injections if for joint/orthopedic issues</li>
              <li>• May include supporting therapies (NAD+, peptides, etc.)</li>
              <li>• Treatment typically takes 2-4 hours</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">Day 3-5: Recovery & Departure</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-0">
              <li>• Rest and recovery (minimal downtime for most treatments)</li>
              <li>• Follow-up check with medical team</li>
              <li>• Aftercare instructions provided</li>
              <li>• Fly home</li>
            </ul>
          </div>
        </div>

        <h2>The Science: What We Know and Don&apos;t Know</h2>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
          <h4 className="text-blue-900 mt-0 mb-3">What Research Suggests</h4>
          <ul className="text-sm text-blue-800 space-y-2 mb-0">
            <li>• <strong>Orthopedic applications</strong> have the strongest evidence base, with studies showing benefit for osteoarthritis and some joint conditions</li>
            <li>• <strong>MSCs have anti-inflammatory properties</strong> that are well-documented in laboratory and animal studies</li>
            <li>• <strong>Safety profile</strong> of properly processed MSCs appears favorable in most studies</li>
            <li>• <strong>Autoimmune and neurological</strong> applications show promise in early research but need larger trials</li>
          </ul>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
          <h4 className="text-yellow-900 mt-0 mb-3">What We Don&apos;t Know</h4>
          <ul className="text-sm text-yellow-800 space-y-2 mb-0">
            <li>• <strong>Long-term effects</strong> are not well studied for most applications</li>
            <li>• <strong>Optimal dosing</strong> (how many cells, how often) is not established</li>
            <li>• <strong>Which patients respond best</strong> is unclear</li>
            <li>• <strong>Durability of effects</strong> - how long do benefits last?</li>
            <li>• <strong>Comparative effectiveness</strong> vs. other treatments is often unknown</li>
          </ul>
        </div>

        <h2>Risks and Considerations</h2>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h4 className="text-red-900 mt-0 mb-3">Known Risks</h4>
          <ul className="text-sm text-red-800 space-y-2 mb-0">
            <li><strong>Infection:</strong> Any injection carries infection risk; proper sterile technique is critical</li>
            <li><strong>Tumor formation:</strong> Rare but documented cases of abnormal cell growth</li>
            <li><strong>Treatment failure:</strong> Many patients see no benefit</li>
            <li><strong>Immune reaction:</strong> Possible with donor cells, though rare with MSCs</li>
            <li><strong>Financial loss:</strong> Treatments are expensive and not guaranteed to work</li>
            <li><strong>Delayed proper treatment:</strong> Patients may postpone proven therapies</li>
          </ul>
        </div>

        <h2>How to Evaluate a Clinic</h2>
        <p>
          If you&apos;re considering stem cell therapy in Mexico, here&apos;s how to do your due diligence:
        </p>

        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 my-8">
          <h4 className="text-emerald-900 mt-0 mb-3">Green Flags (Good Signs)</h4>
          <ul className="text-sm text-emerald-800 space-y-2 mb-0">
            <li>✓ COFEPRIS license/certification</li>
            <li>✓ Transparent about what cells they use and source</li>
            <li>✓ Provides realistic expectations (not promising cures)</li>
            <li>✓ Experienced physicians with verifiable credentials</li>
            <li>✓ In-house or certified lab facilities</li>
            <li>✓ Willing to share lab certifications and testing protocols</li>
            <li>✓ Provides detailed treatment protocols in writing</li>
            <li>✓ Has been operating for 5+ years</li>
            <li>✓ Responds to questions thoroughly before you pay</li>
          </ul>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
          <h4 className="text-red-900 mt-0 mb-3">Red Flags (Warning Signs)</h4>
          <ul className="text-sm text-red-800 space-y-2 mb-0">
            <li>✗ Promises of &quot;cures&quot; or guaranteed results</li>
            <li>✗ Unwilling to disclose cell source or type</li>
            <li>✗ No verifiable physician credentials</li>
            <li>✗ Pressure to book immediately or &quot;limited availability&quot;</li>
            <li>✗ No COFEPRIS license</li>
            <li>✗ Uses embryonic stem cells (ethical and legal issues)</li>
            <li>✗ Claims to treat every condition</li>
            <li>✗ No facility tour or virtual tour available</li>
            <li>✗ Only accepts cash, no documentation provided</li>
          </ul>
        </div>

        <h2>Questions to Ask Before Booking</h2>
        <ol>
          <li><strong>What type of stem cells do you use?</strong> (MSCs from umbilical cord/placenta are most common)</li>
          <li><strong>Where do you source your cells?</strong> (Should have clear answer about donor screening)</li>
          <li><strong>What is your COFEPRIS certification status?</strong></li>
          <li><strong>How many patients have you treated with my condition?</strong></li>
          <li><strong>What results do your patients typically see?</strong> (Be wary of claims of 90%+ success)</li>
          <li><strong>What are the risks specific to my situation?</strong></li>
          <li><strong>What happens if I have a complication after returning home?</strong></li>
          <li><strong>Can I speak to previous patients?</strong> (Some clinics can connect you with references)</li>
          <li><strong>What is included in the quoted price?</strong> (Labs, imaging, follow-up?)</li>
          <li><strong>Do you have before/after data or outcome tracking?</strong></li>
        </ol>

        <h2>Practical Considerations</h2>

        <div className="grid gap-4 md:grid-cols-2 my-8">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Travel</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Tijuana:</strong> Fly to San Diego, cross border (20 min)</li>
              <li><strong>Los Cabos:</strong> Direct flights from many US cities</li>
              <li><strong>Cancun:</strong> Direct flights, 2-4 hours</li>
              <li><strong>Passport:</strong> Required for re-entry to US</li>
            </ul>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Costs Beyond Treatment</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Flights:</strong> $200-$600 round trip</li>
              <li><strong>Hotel:</strong> $80-$200/night (3-5 nights typical)</li>
              <li><strong>Meals:</strong> $30-$75/day</li>
              <li><strong>Transport:</strong> Many clinics include airport pickup</li>
            </ul>
          </div>
        </div>

        <h2>Who Should NOT Go</h2>
        <ul>
          <li><strong>Active cancer patients</strong> - Stem cells may theoretically promote tumor growth</li>
          <li><strong>Active infections</strong> - Need to be healthy for treatment</li>
          <li><strong>Those who can&apos;t afford the risk</strong> - These treatments are expensive and unproven</li>
          <li><strong>Those seeking a &quot;cure&quot;</strong> - Manage expectations carefully</li>
          <li><strong>Those who haven&apos;t exhausted proven options</strong> - Try evidence-based treatments first</li>
        </ul>

        <h2>The Bottom Line</h2>
        <p>
          Stem cell therapy in Mexico offers access to treatments unavailable or heavily restricted in the United States, at significantly lower costs. However, these treatments remain largely experimental, with limited clinical trial data for most applications.
        </p>
        <p>
          If you&apos;re considering this option:
        </p>
        <ul>
          <li>Go in with realistic expectations - this is not a guaranteed cure for anything</li>
          <li>Do thorough research on any clinic you consider</li>
          <li>Consult with your existing physicians before making a decision</li>
          <li>Ensure you can afford the financial risk if the treatment doesn&apos;t work</li>
          <li>Choose established, transparent clinics with proper regulatory credentials</li>
        </ul>

        {/* Final Disclaimer */}
        <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-6 my-8">
          <h4 className="text-gray-900 font-bold mb-3">Medical & Regulatory Disclaimer</h4>
          <p className="text-sm text-gray-700 mb-3">
            This guide is for <strong>educational and informational purposes only</strong> and does not constitute medical advice. The treatments described are legal in Mexico under COFEPRIS regulation but are <strong>NOT approved by the US FDA</strong>.
          </p>
          <p className="text-sm text-gray-700 mb-3">
            The FDA has issued consumer warnings about stem cell therapies, noting that &quot;there are only a few stem cell treatments that have been proven safe and effective&quot; and that unproven treatments may carry significant risks.
          </p>
          <p className="text-sm text-gray-700 mb-3">
            We do not endorse, recommend, or guarantee the efficacy or safety of any treatment, clinic, or provider mentioned in this guide. All information should be independently verified with the clinics directly.
          </p>
          <p className="text-sm text-gray-700 mb-0">
            <strong>Always consult with your physician</strong> before pursuing any treatment, especially for serious medical conditions.
          </p>
        </div>

        {/* Primary CTA - View Mexico Clinics */}
        <div className="bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 rounded-lg p-8 my-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Explore Mexico Stem Cell Clinics?</h3>
          <p className="text-gray-600 mb-6">
            Compare top-rated stem cell clinics in Tijuana, Los Cabos, Puerto Vallarta, and Cancun with pricing and treatment details.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/stem-cells/mexico" className="inline-block rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white hover:bg-emerald-700">
              View Mexico Clinics →
            </Link>
            <Link href="/destinations/mexico" className="inline-block rounded-lg border-2 border-emerald-600 px-6 py-3 font-medium text-emerald-600 hover:bg-emerald-50">
              Mexico Destination Guide
            </Link>
          </div>
        </div>

        {/* Related Resources */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
          <h4 className="font-bold text-gray-900 mb-4">Related Resources</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/stem-cells" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-indigo-400 transition-colors">
              <div className="font-medium text-gray-900 mb-1">Stem Cell Hub</div>
              <div className="text-sm text-gray-600">Compare Mexico, Panama, and US options</div>
            </Link>
            <Link href="/stem-cells/panama" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-indigo-400 transition-colors">
              <div className="font-medium text-gray-900 mb-1">Panama Stem Cells</div>
              <div className="text-sm text-gray-600">Premium clinics with culture-expanded cells</div>
            </Link>
            <Link href="/guides/mexico-medical-tourism-planner" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-indigo-400 transition-colors">
              <div className="font-medium text-gray-900 mb-1">Mexico Trip Planner</div>
              <div className="text-sm text-gray-600">Plan your medical tourism trip</div>
            </Link>
            <Link href="/longevity" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-indigo-400 transition-colors">
              <div className="font-medium text-gray-900 mb-1">Longevity Hub</div>
              <div className="text-sm text-gray-600">Explore all longevity treatment options</div>
            </Link>
          </div>
        </div>

        {/* Sources */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sources & Further Reading</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <a href="https://www.fda.gov/vaccines-blood-biologics/consumers-biologics/consumer-alert-regenerative-medicine-products-including-stem-cells-and-exosomes" target="_blank" rel="noopener" className="text-blue-600 hover:underline">FDA Consumer Alert on Regenerative Medicine Products</a></li>
            <li>• <a href="https://r3stemcell.com/tijuana-mexico/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">R3 Stem Cell - Tijuana</a></li>
            <li>• <a href="https://regenamex.com/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Regenamex</a></li>
            <li>• <a href="https://progencell.com/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">ProgenCell</a></li>
            <li>• <a href="https://www.longevity-institute.com/locations/mexico" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Longevity Medical Institute</a></li>
            <li>• <a href="https://www.isscr.org/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">International Society for Stem Cell Research</a></li>
          </ul>
        </div>
      </article>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Get Our Stem Cell Clinic Comparison Guide"
          description="Side-by-side pricing, accreditations, and patient reviews for top Mexico clinics."
          source="guide_mexico_stem_cell"
        />
      </div>

      </main>
      <Footer />
    </>
  );
}
