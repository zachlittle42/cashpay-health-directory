import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Plastic Surgery Abroad Cost Comparison (2026): 6 Countries' },
  alternates: { canonical: 'https://vitalityscout.com/guides/plastic-surgery-abroad-cost-comparison' },
  description:
    'Plastic surgery abroad cost comparison: Mexico, Colombia, Brazil, Turkey, Thailand & South Korea vs the US, by procedure, with safety and how to choose.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// stated on this page. Every price answer ends with the verify-with-provider
// hedge, consistent with the medical disclaimer. The visible FAQ block below
// mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much can you save getting plastic surgery abroad versus the US?',
    answer:
      'Published cost-comparison sources commonly describe savings of 40-80% versus US prices, varying by procedure and country. As a rough anchor, US average surgeon-plus-facility fees reported by The Aesthetic Society (2022 data) were about $4,617 for breast augmentation, $5,999 for rhinoplasty, $2,764 for liposuction, $7,465 for a tummy tuck, and $9,679 for a facelift — and those figures exclude anesthesia, tests, and other costs, so true US totals run higher. Abroad, the same procedures are frequently quoted at a fraction of that. These are estimates that vary by surgeon, clinic, technique, and case; always confirm a written, itemized quote.',
  },
  {
    question: 'Which country is cheapest for plastic surgery?',
    answer:
      'On headline price, Turkey is frequently described as the lowest-cost major destination, with Thailand, Mexico, and Colombia close behind. South Korea typically sits at the higher end of the "abroad" range because it focuses on premium, high-volume aesthetic work. But cheapest on the quote is not the same as cheapest all-in: long-haul destinations add more travel, accommodation, and recovery time, and the lowest price can reflect a less-experienced surgeon or fewer safety protocols. Price should be one input, not the deciding one.',
  },
  {
    question: 'Is plastic surgery abroad safe?',
    answer:
      'Safety depends far more on the specific surgeon and facility than on the country. The widely repeated advice is to use an internationally accredited facility (look for JCI accreditation) and a surgeon who is board-certified in plastic surgery and verifiable through a recognized body such as ISAPS or the relevant national plastic-surgery society. Risks that matter abroad include limited recourse if something goes wrong, complications that surface after you fly home, and the danger of flying too soon after surgery. This is information, not medical advice — discuss candidacy and risk with a qualified clinician.',
  },
  {
    question: 'Why is the Brazilian Butt Lift (BBL) treated as a special-risk procedure?',
    answer:
      'Because it is. US plastic-surgery societies issued an urgent 2018 warning describing a gluteal-fat-grafting mortality rate estimated as high as 1 in 3,000 — far greater than any other cosmetic surgery — driven by fat entering large gluteal veins. Subsequent ASERF task-force safety guidelines (subcutaneous-only fat placement, ultrasound guidance, avoiding the deep muscle) are associated with sharply lower reported risk. If you are considering a BBL anywhere, choosing a board-certified surgeon who follows current safety protocols matters more than the price. Discuss the specific risks with a qualified clinician.',
  },
  {
    question: 'What is usually included in an all-inclusive plastic surgery package abroad?',
    answer:
      'Package contents vary widely, so this is exactly what to pin down in writing. Many international packages bundle the surgeon fee, operating-room and anesthesia, a hospital or recovery-house stay, some hotel nights, and airport transfers; some add post-op garments and a set of follow-up visits. What is frequently NOT included: your flights, extended recovery accommodation, treatment of complications, and any follow-up care once you are home. Always get an itemized quote that states what is and is not covered before you pay a deposit.',
  },
  {
    question: 'Will US health insurance cover cosmetic surgery done abroad?',
    answer:
      'Elective cosmetic surgery is generally not covered by US health insurance whether it is done at home or abroad, which is why cash-pay pricing is the relevant comparison for most people. Separate medical-travel insurance that specifically covers surgical complications is widely recommended, because a standard travel policy often excludes anything related to an elective procedure. Confirm coverage details with both your insurer and the clinic before you commit.',
  },
  {
    question: 'How do I verify a plastic surgeon abroad before booking?',
    answer:
      'Confirm the surgeon is board-certified in plastic surgery — not just a licensed physician — and check membership in a recognized body such as ISAPS (which runs a public Find a Surgeon directory) or the national plastic-surgery society (for example SBCP in Brazil, SCCP in Colombia, CMCP in Mexico). Confirm the facility holds current JCI or equivalent accreditation, ask how many of your exact procedure the surgeon performs, request before/after cases, and get a written itemized quote plus a clear plan for complications and remote follow-up. Verify accreditation directly with the issuing body, not a third-party listing.',
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

export default function PlasticSurgeryAbroadCostComparison() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Plastic Surgery Abroad Cost Comparison (2026)',
    description:
      'A cost-and-safety comparison of plastic surgery abroad across Mexico, Colombia, Brazil, Turkey, Thailand, and South Korea versus the US — by procedure, what packages include, accreditation, and how to choose.',
    url: 'https://vitalityscout.com/guides/plastic-surgery-abroad-cost-comparison',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/plastic-surgery-abroad-cost-comparison#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalProcedure',
      name: 'Cosmetic and plastic surgery abroad',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'The Aesthetic Society — Average Plastic Surgery Costs', url: 'https://www.theaestheticsociety.org/patient-resources/cost/average-plastic-surgery-costs' },
      { '@type': 'CreativeWork', name: 'ASPS — Plastic Surgery Societies Issue Urgent Warning About BBL Risks (2018)', url: 'https://www.plasticsurgery.org/news/press-releases/plastic-surgery-societies-issue-urgent-warning-about-the-risks-associated-with-brazilian-butt-lifts' },
      { '@type': 'CreativeWork', name: 'Report on Mortality from Gluteal Fat Grafting — ASERF Task Force (PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5846701/' },
      { '@type': 'CreativeWork', name: 'Joint Commission International (JCI)', url: 'https://www.jointcommission.org/en/what-we-offer/accreditation/health-care-settings/international/' },
      { '@type': 'CreativeWork', name: 'ISAPS — Find a Surgeon directory', url: 'https://www.isaps.org/discover/find-a-surgeon/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/plastic-surgery-abroad-cost-comparison#faq', url: 'https://vitalityscout.com/guides/plastic-surgery-abroad-cost-comparison' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <SidebarShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/medical-tourism" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Medical Tourism Hub
          </Link>

          <div className="mb-4 flex items-center gap-3">
            <span className="text-4xl">🌍</span>
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
              Comparison Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Plastic Surgery Abroad Cost Comparison
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Six of the most-searched destinations &mdash; Mexico, Colombia, Brazil, Turkey, Thailand,
            and South Korea &mdash; compared against US prices, procedure by procedure, with what
            packages actually include and how to choose safely.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-indigo-500 bg-indigo-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              Plastic surgery abroad typically costs <strong>40-80% less</strong> than the US.
              Headline prices are lowest in <strong>Turkey, Thailand, Mexico, and Colombia</strong>;
              <strong> Brazil</strong> leads body-contouring; <strong>South Korea</strong> sits at the
              premium end for facial work. A breast augmentation runs roughly{' '}
              <strong>$2,500-$5,500 abroad</strong> versus a US average near <strong>$4,617</strong>{' '}
              (surgeon + facility only). Cheapest quote is not cheapest all-in &mdash; weigh surgeon
              board-certification, JCI accreditation, travel, and recovery. This is information, not
              medical advice; verify every price and credential with the clinic.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">Last reviewed: June 2026 • 15 min read</p>
        </div>
      </section>

      {/* Medical / Safety Disclaimer */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-red-900 mb-3">Read This First</h3>
          <p className="text-sm text-red-800 mb-3">
            <strong>Safety depends on the surgeon and facility, not the country.</strong> Use an
            internationally{' '}
            <a href="https://www.jointcommission.org/en/what-we-offer/accreditation/health-care-settings/international/" target="_blank" rel="noopener noreferrer nofollow" className="underline">
              JCI-accredited
            </a>{' '}
            facility and a board-certified plastic surgeon you can verify through a recognized body
            such as{' '}
            <a href="https://www.isaps.org/discover/find-a-surgeon/" target="_blank" rel="noopener noreferrer nofollow" className="underline">
              ISAPS
            </a>
            . The Brazilian Butt Lift (BBL) carries a documented elevated mortality risk and deserves
            extra scrutiny regardless of price.
          </p>
          <p className="text-sm text-red-800">
            This guide is for informational purposes only and is not medical advice. It does not
            recommend a specific surgeon, clinic, or country. Outcomes and risks depend on your
            health, the procedure, and the surgical team. Discuss candidacy and risks with a qualified
            clinician before pursuing any treatment abroad.
          </p>
        </div>
      </section>

      {/* At a Glance */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-indigo-900 mb-3">The Six Destinations at a Glance</h2>
          <ul className="text-sm text-gray-700 space-y-1 mb-0">
            <li>✓ <strong>Turkey (Istanbul):</strong> often the lowest headline prices; dense cluster of accredited cosmetic clinics</li>
            <li>✓ <strong>Thailand (Bangkok, Phuket):</strong> JCI hospital infrastructure; ~50-70% below Western prices (estimates)</li>
            <li>✓ <strong>Mexico (Tijuana, Cancún, Monterrey):</strong> closest to the US; short flight; American-trained surgeons common</li>
            <li>✓ <strong>Colombia (Medellín, Bogotá, Cali):</strong> body-contouring specialty; verify SCCP plastic-surgery certification</li>
            <li>✓ <strong>Brazil (São Paulo, Rio):</strong> the home of body sculpting and the BBL; SBCP-affiliated surgeons</li>
            <li>✓ <strong>South Korea (Seoul / Gangnam):</strong> premium facial aesthetics; higher-end of the abroad range</li>
            <li>✓ <strong>Across all six:</strong> savings are real, but so is the need to vet the surgeon, facility, and complication plan</li>
          </ul>
        </div>
      </section>

      {/* Why people travel / how to read this */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Read a Plastic-Surgery-Abroad Price</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              The savings are genuine: published cost-comparison sources consistently describe
              cosmetic surgery abroad running <strong>40-80% below US prices</strong>, driven by lower
              labor and facility costs rather than lower-quality implants or instruments. Many of the
              same FDA-cleared implants and the same surgical equipment used in the US are used abroad,
              and a large share of top international surgeons trained or did fellowships in the US,
              UK, or Europe.
            </p>
            <p>
              But a quoted price is not an all-in price, and the gap between them is where people get
              surprised. A US &ldquo;average cost&rdquo; you read online usually reflects the surgeon
              and facility fee only &mdash; anesthesia, tests, garments, and revisions are extra. The
              same is true abroad. The honest comparison is <strong>your written, itemized quote
              abroad (plus flights, accommodation, and recovery time)</strong> against your written
              quote at home &mdash; not headline number against headline number. The country sets the
              rough range; the surgeon and the package set the real cost.
            </p>
          </div>
        </div>
      </section>

      {/* Headline cost-comparison TABLE (comparative — has thead) */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Cost Comparison by Procedure (Estimates)</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-3 py-3 text-left text-sm font-semibold text-gray-900">Procedure</th>
                <th className="border border-gray-200 px-3 py-3 text-left text-sm font-semibold text-gray-900">US (avg, surgeon + facility)</th>
                <th className="border border-gray-200 px-3 py-3 text-left text-sm font-semibold text-green-700">Mexico</th>
                <th className="border border-gray-200 px-3 py-3 text-left text-sm font-semibold text-green-700">Colombia</th>
                <th className="border border-gray-200 px-3 py-3 text-left text-sm font-semibold text-green-700">Brazil</th>
                <th className="border border-gray-200 px-3 py-3 text-left text-sm font-semibold text-green-700">Turkey</th>
                <th className="border border-gray-200 px-3 py-3 text-left text-sm font-semibold text-green-700">Thailand</th>
                <th className="border border-gray-200 px-3 py-3 text-left text-sm font-semibold text-green-700">S. Korea</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-3 py-3 text-sm text-gray-700">Breast Augmentation</td>
                <td className="border border-gray-200 px-3 py-3 text-sm text-gray-500">~$4,617</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$3,500-$5,500</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$2,800-$4,500</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$3,500-$6,000</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$2,500-$4,500</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$3,200-$5,000</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$3,500-$7,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-3 text-sm text-gray-700">Rhinoplasty</td>
                <td className="border border-gray-200 px-3 py-3 text-sm text-gray-500">~$5,999</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$2,000-$4,000</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$3,000-$7,000</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$3,000-$6,000</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$2,500-$5,000</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$1,800-$4,000</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$3,000-$8,000</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-3 text-sm text-gray-700">Liposuction (per area)</td>
                <td className="border border-gray-200 px-3 py-3 text-sm text-gray-500">~$2,764</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$3,000-$5,000</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$2,000-$5,000</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$2,000-$6,000</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$2,000-$4,000</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$2,500-$5,000</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$3,000-$6,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-3 text-sm text-gray-700">Tummy Tuck</td>
                <td className="border border-gray-200 px-3 py-3 text-sm text-gray-500">~$7,465</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$4,500-$7,000</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$4,000-$8,000</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$4,000-$6,500</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$3,500-$6,000</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$4,000-$6,500</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$6,000-$10,000</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-3 py-3 text-sm text-gray-700">BBL (gluteal fat grafting)</td>
                <td className="border border-gray-200 px-3 py-3 text-sm text-gray-500">~$3,522+</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$4,000-$9,700</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$4,500-$8,500</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$4,000-$6,500</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$3,500-$6,500</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$4,000-$7,000</td>
                <td className="border border-gray-200 px-3 py-3 text-sm text-gray-400">Less common</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-3 py-3 text-sm text-gray-700">Facelift</td>
                <td className="border border-gray-200 px-3 py-3 text-sm text-gray-500">~$9,679</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$4,500-$8,000</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$4,000-$8,000</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$4,000-$8,000</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$3,500-$7,000</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$4,000-$8,000</td>
                <td className="border border-gray-200 px-3 py-3 text-sm font-semibold text-green-600">$6,000-$13,500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          US figures are average surgeon-plus-facility fees from The Aesthetic Society&apos;s 2022
          data and <strong>exclude anesthesia, tests, and other costs</strong>, so true US totals run
          higher. Abroad figures are estimate ranges compiled from medical-tourism cost-comparison
          sources and vary by surgeon, technique, implant choice, number of areas, and city. Some
          abroad ranges (notably Mexico and Colombia BBL) reflect bundled multi-area liposuction.
          Always request a written, itemized quote from the clinic; these numbers are for orientation,
          not a price guarantee.
        </p>
      </section>

      {/* Country profiles */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Country-by-Country: Strengths and Trade-offs</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">🇲🇽 Mexico</h3>
              <p className="text-sm text-gray-600 mb-3">
                The closest and most convenient option for US patients &mdash; Tijuana is minutes from
                San Diego, and Cancún and Monterrey are short flights. American-trained surgeons are
                common. Verify Mexican Board of Plastic Surgery (CMCP) certification, which is separate
                from facility accreditation.
              </p>
              <div className="text-sm text-green-600 font-semibold">Best for: proximity, short recovery travel, body and breast work</div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">🇨🇴 Colombia</h3>
              <p className="text-sm text-gray-600 mb-3">
                Medellín, Bogotá, Cali, and Cartagena are body-contouring hubs with competitive
                pricing. Important caveat: Colombian law lets licensed physicians who are not plastic
                surgeons perform some cosmetic procedures &mdash; confirm SCCP (national plastic-surgery
                society) membership and board certification directly.
              </p>
              <div className="text-sm text-green-600 font-semibold">Best for: body contouring, value &mdash; with strict surgeon vetting</div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">🇧🇷 Brazil</h3>
              <p className="text-sm text-gray-600 mb-3">
                The birthplace of the BBL and a global body-sculpting leader; São Paulo and Rio host
                university-trained surgeons and SBCP-affiliated clinics. Strong reputation for
                aesthetic artistry. Long flight from the US, and BBL safety scrutiny applies in full.
              </p>
              <div className="text-sm text-green-600 font-semibold">Best for: body sculpting, lipo, tummy tuck &mdash; with BBL caution</div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">🇹🇷 Turkey</h3>
              <p className="text-sm text-gray-600 mb-3">
                Istanbul offers some of the lowest headline prices and a dense cluster of cosmetic
                clinics, many JCI-accredited, with a mature international-patient machine. The flip
                side of high volume is variability &mdash; vet the individual surgeon, not just the
                package.
              </p>
              <div className="text-sm text-green-600 font-semibold">Best for: lowest headline price, rhinoplasty, packages</div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">🇹🇭 Thailand</h3>
              <p className="text-sm text-gray-600 mb-3">
                Bangkok and Phuket pair ~50-70% savings with serious hospital infrastructure,
                including multiple JCI-accredited facilities (e.g., Bumrungrad International). Strong
                recovery-tourism environment. Long-haul travel and flight-after-surgery timing are the
                main constraints.
              </p>
              <div className="text-sm text-green-600 font-semibold">Best for: hospital-grade infrastructure, breast and body work</div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">🇰🇷 South Korea</h3>
              <p className="text-sm text-gray-600 mb-3">
                Seoul&apos;s Gangnam district is the world capital of facial aesthetics &mdash;
                rhinoplasty, double-eyelid, and facial-contouring volume is unmatched. Prices are at
                the higher end of the &ldquo;abroad&rdquo; range (often 30-50% below US) but still
                below US facial-surgery pricing. Verify clinic registration via the Korea Health
                Industry Development Institute (KHIDI) foreign-patient directory.
              </p>
              <div className="text-sm text-green-600 font-semibold">Best for: facial aesthetics, rhinoplasty, eyelid &mdash; premium tier</div>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What an &ldquo;All-Inclusive&rdquo; Package Usually Covers</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-bold text-green-900 mb-3">Often Included</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>✓ Surgeon&apos;s professional fee</li>
              <li>✓ Operating room and anesthesia</li>
              <li>✓ Hospital or recovery-house stay (1+ nights)</li>
              <li>✓ Some hotel nights and airport transfers</li>
              <li>✓ Post-op compression garments (sometimes)</li>
              <li>✓ A set number of in-country follow-up visits</li>
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="font-bold text-amber-900 mb-3">Often NOT Included</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>✕ International flights</li>
              <li>✕ Extended recovery accommodation (1-2+ weeks)</li>
              <li>✕ Treatment of complications</li>
              <li>✕ Follow-up care once you are home</li>
              <li>✕ Lab tests / medical clearance, if extra</li>
              <li>✕ Revision surgery, if needed later</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-6">
          Travel and accommodation commonly add <strong>$1,500-$3,500</strong>, more for long-haul
          destinations like Thailand or South Korea, and post-surgery care back home can add several
          hundred to a couple thousand dollars. Build these into the comparison, and get the inclusions
          in writing before paying a deposit.
        </p>
      </section>

      {/* BBL special-risk callout */}
      <section className="bg-red-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-red-900 mb-6">A Specific Warning on the BBL</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              The Brazilian Butt Lift is the one procedure on this list where price should be the
              <em> last</em> thing you optimize. In a 2018 urgent warning, US plastic-surgery societies
              described gluteal-fat-grafting mortality estimated <strong>as high as 1 in 3,000</strong>
              {' '}&mdash; far greater than any other cosmetic surgery &mdash; caused by fat entering large
              veins in the buttock and traveling to the lungs (fat embolism).
            </p>
            <p>
              Subsequent ASERF task-force safety guidance &mdash; placing fat only in the subcutaneous
              layer (never deep into the muscle), using ultrasound guidance, and limiting volume &mdash;
              is associated with substantially lower reported risk in follow-up data. The takeaway is
              not &ldquo;avoid the BBL&rdquo; or &ldquo;avoid a country.&rdquo; It is that a
              board-certified surgeon who demonstrably follows current safety protocols matters more
              than any quote, anywhere &mdash; including the US.
            </p>
            <div className="bg-white border border-red-200 rounded-lg p-4 not-prose my-6">
              <p className="text-sm text-red-800 mb-0">
                <strong>Before a BBL anywhere:</strong> ask the surgeon directly whether they place fat
                subcutaneously only, whether they use ultrasound guidance, how many they perform, and
                what their complication plan is. A surgeon who cannot answer these clearly is a red
                flag. Discuss the risks with a qualified clinician &mdash; this is information, not
                medical advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decision framework */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">A Decision Framework (Not a Ranking)</h2>
        <div className="prose prose-lg max-w-none">
          <ul>
            <li><strong>Start with the surgeon, not the country.</strong> Board certification in plastic surgery, verifiable through ISAPS or the national society, and real before/after cases of your exact procedure come first.</li>
            <li><strong>Match the destination to the procedure.</strong> Facial work (rhinoplasty, eyelid) skews toward South Korea and Turkey; body contouring toward Brazil, Colombia, and Mexico; proximity and short recovery travel toward Mexico.</li>
            <li><strong>Price the whole trip, not the quote.</strong> Add flights, accommodation, recovery time, and complication-coverage insurance to the itemized surgical quote before comparing to your home option.</li>
            <li><strong>Confirm the facility&apos;s accreditation directly.</strong> Look for current JCI accreditation (or the national equivalent) on the issuing body&apos;s site, not a third-party listing.</li>
            <li><strong>Plan for complications and aftercare.</strong> Know who manages a problem in-country, how remote follow-up works, and how care continues once you are home. Buy medical-travel insurance that covers complications.</li>
            <li><strong>Down-weight any quote that is suspiciously cheap.</strong> A price far below the ranges above can signal a non-specialist surgeon, an unaccredited facility, or skipped safety steps.</li>
          </ul>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 not-prose my-6">
            <p className="text-sm text-yellow-800 mb-0">
              <strong>Red flags:</strong> a clinic that guarantees a result, pressures a deposit before
              you have an itemized quote and accreditation confirmation, will not connect you with the
              operating surgeon, or quotes a price dramatically below the market. Legitimate surgeons
              set realistic expectations and discuss risks openly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ — visible block mirrors the FAQPage schema above exactly */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div>
          {FAQ_ITEMS.map((item) => (
            <FAQItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </section>

      {/* CTA / hub + money-page links */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Compare Destinations in Depth</h3>
          <p className="text-gray-600 mb-6">
            Start with the medical-tourism hub, then dig into the destination profile for the country
            you are weighing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/medical-tourism" className="inline-block rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700">
              Medical Tourism Hub
            </Link>
            <Link href="/destinations/colombia" className="inline-block rounded-lg border-2 border-indigo-600 px-6 py-3 font-medium text-indigo-600 hover:bg-indigo-50">
              Colombia Destination Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related Guides — internal links to EXISTING pages */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/colombia-plastic-surgery-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇨🇴</span>
              <div>
                <div className="font-bold text-gray-900">Colombia Plastic Surgery Cost</div>
                <div className="text-sm text-gray-600">BBL, lipo, breast &amp; tummy tuck, procedure by procedure</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/brazil-plastic-surgery-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇧🇷</span>
              <div>
                <div className="font-bold text-gray-900">Brazil Plastic Surgery Cost</div>
                <div className="text-sm text-gray-600">BBL, liposuction &amp; tummy tuck vs the US</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/korea-plastic-surgery-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇰🇷</span>
              <div>
                <div className="font-bold text-gray-900">South Korea Plastic Surgery Cost</div>
                <div className="text-sm text-gray-600">Rhinoplasty, double eyelid, V-line &amp; more</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/thailand-cosmetic-surgery-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇹🇭</span>
              <div>
                <div className="font-bold text-gray-900">Thailand Cosmetic Surgery Cost</div>
                <div className="text-sm text-gray-600">Bangkok &amp; Phuket prices and what is included</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/is-plastic-surgery-in-turkey-safe" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🛡️</span>
              <div>
                <div className="font-bold text-gray-900">Is Plastic Surgery in Turkey Safe?</div>
                <div className="text-sm text-gray-600">What JCI means, the real risks, and how to vet a surgeon</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/medical-travel-insurance-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🛡️</span>
              <div>
                <div className="font-bold text-gray-900">Medical Travel Insurance Guide</div>
                <div className="text-sm text-gray-600">What covers complications abroad &mdash; and what doesn&apos;t</div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Shared YMYL + affiliate disclosure */}
      <MedicalDisclaimer />

      {/* Sources */}
      <section className="mx-auto max-w-4xl px-4 pb-8">
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <a href="https://www.theaestheticsociety.org/patient-resources/cost/average-plastic-surgery-costs" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">The Aesthetic Society — Average Plastic Surgery Costs (US, 2022 data)</a></li>
            <li>• <a href="https://www.plasticsurgery.org/news/press-releases/plastic-surgery-societies-issue-urgent-warning-about-the-risks-associated-with-brazilian-butt-lifts" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">ASPS — Urgent Warning About the Risks of Brazilian Butt Lifts (2018)</a></li>
            <li>• <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5846701/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Report on Mortality from Gluteal Fat Grafting — ASERF Task Force (PMC)</a></li>
            <li>• <a href="https://www.jointcommission.org/en/what-we-offer/accreditation/health-care-settings/international/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Joint Commission International (JCI)</a></li>
            <li>• <a href="https://www.isaps.org/discover/find-a-surgeon/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">ISAPS — Find a Surgeon directory</a></li>
            <li>• <a href="https://cosmedconnect.com/most-affordable-countries-for-plastic-surgery/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">COS MEDCONNECT — Affordable Countries for Plastic Surgery (2026, cost ranges)</a></li>
            <li>• <a href="https://universalmedicaltravel.com/cheapest-countries-for-breast-implants-in-the-world/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Universal Medical Travel — Cheapest Countries for Breast Implants (2026)</a></li>
            <li>• <a href="https://www.flymedi.com/thailand/plastic-surgery" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Flymedi — Plastic Surgery in Thailand 2026 Prices</a></li>
            <li>• <a href="https://koreaexperience.com/blog/korea-plastic-surgery-cost-guide-2026" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Korea Experience — Korea Plastic Surgery Cost Guide 2026</a></li>
            <li>• <a href="https://kurbuo.com/en/blog/plastic-surgery-cost-colombia" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">KURBUO — Plastic Surgery Cost in Colombia 2026</a></li>
            <li>• <a href="https://surgerycostguide.com/bbl-cost/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Surgery Cost Guide — BBL Cost by Country (2026)</a></li>
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Weighing Surgery Abroad?"
          description="Get our plastic-surgery-abroad checklist: surgeon board-certification verification, the questions to ask before you book, and how to price the whole trip."
          source="guide_plastic_surgery_abroad_cost_comparison"
        />
      </div>

      </SidebarShell>
      <Footer />
    </main>
  );
}
