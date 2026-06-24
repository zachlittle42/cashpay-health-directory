import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'Gastric Bypass Turkey Cost (2026): Prices vs the US',
  description:
    'Gastric bypass in Turkey costs ~$4,000-$7,200 all-inclusive vs $15,000-$26,000 in the US. Istanbul package pricing, JCI hospitals, and surgeon vetting.',
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge, matching the
// MedicalDisclaimer wording. The visible FAQ block mirrors this schema exactly.
const FAQ_ITEMS = [
  {
    question: 'How much does gastric bypass cost in Turkey?',
    answer:
      'All-inclusive Roux-en-Y gastric bypass packages in Turkey are commonly estimated at roughly $4,000-$7,200, versus about $15,000-$26,000 self-pay in the US. The Turkish figure usually bundles the surgeon and anaesthetist fees, a 2-3 night hospital stay, hotel nights, pre-op tests, airport transfers, and an interpreter. These are estimates that vary by clinic and technique — confirm an itemized written quote directly with the hospital before booking.',
  },
  {
    question: 'Why is gastric bypass so much cheaper in Turkey than the US?',
    answer:
      'Lower labor, facility, and malpractice-insurance costs, a favorable exchange rate, and high procedure volume let Turkish hospitals price bariatric surgery far below US self-pay rates. Turkey treated roughly 2 million medical tourists in 2024, and that volume supports competitive all-inclusive packaging. Lower price does not by itself signal lower quality — but it also is not a guarantee of quality, so credentials still need independent verification.',
  },
  {
    question: 'What is the difference between gastric bypass and gastric sleeve?',
    answer:
      'Gastric bypass (Roux-en-Y) is both restrictive and malabsorptive: the surgeon creates a small egg-sized stomach pouch and reroutes it to a lower section of small intestine, so you eat less and absorb fewer calories. Gastric sleeve is restrictive only — about two-thirds of the stomach is removed, leaving a banana-shaped tube. Bypass is often discussed for patients with significant acid reflux or type 2 diabetes; the right choice is a clinical decision for you and a qualified surgeon.',
  },
  {
    question: 'Is bariatric surgery in Turkey safe?',
    answer:
      'It can be when performed by an experienced surgeon at an accredited facility. Several Istanbul-area hospitals hold Joint Commission International (JCI) accreditation, and Memorial Sisli was the first JCI-accredited hospital in Turkey. The ASMBS reports the overall risk of a major complication from bariatric surgery is about 4%, with a 30-day mortality near 0.3% for gastric bypass — but outcomes depend on the specific surgeon and hospital, so verify credentials and a complication-handling protocol yourself. This is information, not medical advice.',
  },
  {
    question: 'What hospitals in Turkey are JCI-accredited for bariatric surgery?',
    answer:
      'Joint Commission International accreditation is held by a number of Istanbul-area hospitals, including Memorial Sisli (the first JCI-accredited hospital in Turkey) and Anadolu Medical Center (JCI-accredited since 2007 and a Johns Hopkins Medicine International affiliate). Accreditation applies to the hospital, not automatically to every surgeon working there, so confirm both the facility accreditation and the individual surgeon’s board certification and case volume.',
  },
  {
    question: 'What is included in an all-inclusive Turkey gastric bypass package?',
    answer:
      'Packages typically cover the surgeon and anaesthetist fees, a fixed hospital stay (often 2-3 nights), pre-operative tests done in Turkey, hotel nights, airport transfers, an interpreter or patient coordinator, and initial follow-up before you fly home. Commonly excluded: international flights, travel insurance, extended stays, long-term aftercare, and vitamins after discharge. Ask for a written, itemized breakdown so you know exactly what the quoted price does and does not cover.',
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

export default function GastricBypassTurkeyCost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Gastric Bypass Turkey Cost (2026)',
    description:
      'Cost guide to Roux-en-Y gastric bypass in Turkey vs the US — all-inclusive package pricing, JCI-accredited Istanbul hospitals, risks, and how to vet a surgeon.',
    url: 'https://vitalityscout.com/guides/gastric-bypass-turkey-cost',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/gastric-bypass-turkey-cost#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalProcedure',
      name: 'Roux-en-Y gastric bypass',
      procedureType: 'https://schema.org/SurgicalProcedure',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-23',
    dateModified: '2026-06-23',
    citation: [
      { '@type': 'CreativeWork', name: 'ASMBS — Metabolic and Bariatric Surgery Fact Sheet (safety profile)', url: 'https://asmbs.org/wp-content/uploads/2024/06/MBSFactSheet2024.pdf' },
      { '@type': 'CreativeWork', name: 'Bookimed — Roux-en-Y Gastric Bypass in Turkey, costs and packages', url: 'https://us-uk.bookimed.com/clinics/country=turkey/procedure=roux-en-y-gastric-bypass/' },
      { '@type': 'CreativeWork', name: 'Memorial Hospitals Istanbul — JCI Accreditation', url: 'https://www.memorialistanbul.com/about/jci-accreditation' },
      { '@type': 'CreativeWork', name: 'Johns Hopkins Medicine International — Anadolu Medical Center affiliation', url: 'https://www.hopkinsmedicine.org/international/health-care-consulting/emea/anadolu-medical-center' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/gastric-bypass-turkey-cost#faq', url: 'https://vitalityscout.com/guides/gastric-bypass-turkey-cost' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
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
            <span className="text-gray-900">Gastric Bypass Turkey Cost</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/medical-tourism" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Medical Tourism Hub
          </Link>

          <div className="mb-4">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              Procedure Cost Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Gastric Bypass Turkey Cost (2026): Prices vs the US
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What Roux-en-Y gastric bypass actually costs in Istanbul, what an all-inclusive
            package covers, how to read a quote, and how to vet a surgeon before you travel.
          </p>

          {/* Direct-answer lead: self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              Gastric bypass in Turkey is commonly estimated at{' '}
              <strong>~$4,000-$7,200 all-inclusive</strong>, versus roughly{' '}
              <strong>$15,000-$26,000 self-pay in the US</strong>. The Turkish price usually bundles
              the surgeon and anaesthetist, a 2-3 night hospital stay, hotel, transfers, and
              pre-op tests. Several Istanbul hospitals hold JCI accreditation. Prices are estimates
              that vary by clinic and technique — confirm an itemized quote with the provider.
              This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last reviewed: June 2026 • 12 min read
          </p>
        </div>
      </section>

      {/* Quick Stats Box */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Gastric Bypass in Turkey: At a Glance</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="font-bold text-blue-600 mb-1">Estimated Cost</div>
              <div className="text-gray-900 font-semibold">~$4,000 - $7,200</div>
              <div className="text-gray-600">all-inclusive vs $15,000-$26,000 US</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="font-bold text-indigo-600 mb-1">Typical Stay</div>
              <div className="text-gray-900 font-semibold">6-8 days in Turkey</div>
              <div className="text-gray-600">2-3 nights hospital + hotel</div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="font-bold text-gray-700 mb-1">Procedure</div>
              <div className="text-gray-900 font-semibold">Roux-en-Y</div>
              <div className="text-gray-600">restrictive + malabsorptive</div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical / cost disclaimer */}
      <section className="mx-auto max-w-4xl px-4 py-2">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-amber-900 mb-2">Read Before You Use These Numbers</h3>
          <p className="text-sm text-amber-900 mb-2">
            <strong>Pricing is an estimate, not a quote.</strong> Bariatric package prices change with
            exchange rates, technique, surgeon experience, and what is bundled. Figures here are ranges
            aggregated from public clinic and price-comparison sources to help you budget — always
            request a written, itemized quote directly from the hospital.
          </p>
          <p className="text-sm text-amber-900">
            Gastric bypass is irreversible major surgery. This guide is educational only and is not
            medical advice. Talk to a qualified bariatric surgeon and complete a full medical
            evaluation before deciding on any procedure.
          </p>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Turkey vs US: Gastric Bypass Cost</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Factor</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">
                  <span className="flex items-center gap-2">🇹🇷 Turkey (Istanbul)</span>
                </th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">
                  <span className="flex items-center gap-2">🇺🇸 United States (self-pay)</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Typical Price (estimate)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~$4,000 - $7,200 all-inclusive</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~$15,000 - $26,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">What the Price Bundles</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Surgery, hospital + hotel, transfers, pre-op tests, interpreter</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Surgeon, OR, anesthesia, ~1 night; labs/vitamins often separate</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Travel Required</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Yes — ~10+ hour flight; 6-8 days on the ground</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Local / domestic</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Accreditation to Look For</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">JCI-accredited hospital + board-certified surgeon</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">ASMBS / MBSAQIP-accredited center</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Long-term Follow-up</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Remote; arrange a local US aftercare plan</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">In-person with the operating team</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Insurance Coverage</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Generally not covered (cash-pay)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Sometimes covered; strict criteria</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          US self-pay range reflects the ASMBS-cited national average of roughly $17,000-$26,000 for
          bariatric surgery, with directly listed self-pay gastric-bypass quotes seen around
          $15,000-$18,650. Turkey range aggregates public all-inclusive package pricing. All figures
          are estimates to verify with the provider.
        </p>
      </section>

      {/* What the price covers */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What an All-Inclusive Package Usually Covers</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Typically Included</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Surgeon and anaesthetist fees</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>2-3 night hospital stay</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Pre-operative tests performed in Turkey</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Hotel nights after discharge (often 4-6)</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Airport and clinic VIP transfers</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Interpreter / patient coordinator</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Initial follow-up before you fly home</span></li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border-2 border-red-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Often Excluded</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✗</span><span>International flights</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✗</span><span>Travel and medical-complication insurance</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✗</span><span>Extended hotel stays if recovery runs long</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✗</span><span>Vitamins and supplements after discharge</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✗</span><span>Long-term in-person aftercare back home</span></li>
                <li className="flex items-start gap-2"><span className="text-red-500 mt-1">✗</span><span>A travel companion&apos;s costs</span></li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
            <p className="text-sm text-yellow-800">
              <strong>Budget reality check:</strong> Add flights, a companion, travel insurance, and
              long-term vitamins to the package price for a true total. Even with extras, the all-in
              total is generally well below US self-pay — but a low headline price that excludes most
              of the above is not a real comparison.
            </p>
          </div>
        </div>
      </section>

      {/* How the procedure works */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Gastric Bypass vs Gastric Sleeve: The Difference</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Gastric bypass — the <strong>Roux-en-Y</strong> procedure — is both <em>restrictive</em>{' '}
            and <em>malabsorptive</em>. The surgeon staples off a small stomach pouch, roughly the
            size of an egg, then connects that pouch to a lower section of the small intestine in a
            &quot;Y&quot; shape. You eat less because the pouch is small, and you absorb fewer
            calories because food bypasses part of the intestine.
          </p>
          <p>
            A <Link href="/guides/gastric-sleeve-mexico-safety" className="text-blue-600 hover:underline">gastric sleeve</Link>{' '}
            is restrictive only: about two-thirds of the stomach is removed, leaving a narrow,
            banana-shaped tube and reducing the hunger hormone ghrelin. Studies have not found a
            large difference in total weight loss between the two, but bypass is more often discussed
            for patients with significant acid reflux or type 2 diabetes — reflux remission has been
            reported more frequently after bypass than after sleeve. Which procedure fits you is a
            clinical decision for you and a qualified surgeon, not a price decision.
          </p>
          <h3>Typical timeline in Turkey</h3>
          <ul>
            <li><strong>Days 1-2:</strong> Arrival, pre-op tests, surgeon consultation, consent.</li>
            <li><strong>Surgery day:</strong> Laparoscopic Roux-en-Y under general anesthesia, ~2-3 hours.</li>
            <li><strong>Days after surgery:</strong> 2-3 nights in hospital, then hotel; walking encouraged, liquids only.</li>
            <li><strong>Before you fly:</strong> Most patients are cleared after roughly 6-8 days total; carry a diet plan and aftercare contacts home.</li>
          </ul>
        </div>
      </section>

      {/* Accreditation / hospitals */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Accreditation: What Actually Signals Quality</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              The single most useful filter is <strong>Joint Commission International (JCI)</strong>{' '}
              accreditation — the same international hospital-quality standard used worldwide. Turkey
              has long had JCI-accredited hospitals; a few well-documented examples relevant to
              bariatric care:
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 mt-6">
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">Memorial Şişli, Istanbul</h3>
              <p className="text-sm text-gray-600 mb-3">
                The first JCI-accredited hospital in Turkey (and 21st worldwide). A large private
                hospital group with an international patient department.
              </p>
              <a href="https://www.memorialistanbul.com/about/jci-accreditation" target="_blank" rel="noopener noreferrer nofollow" className="text-sm text-blue-600 hover:underline">
                JCI accreditation source →
              </a>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">Anadolu Medical Center</h3>
              <p className="text-sm text-gray-600 mb-3">
                JCI-accredited since 2007 and a Johns Hopkins Medicine International affiliate,
                near Istanbul (Gebze). A full academic-style hospital, not a package shop.
              </p>
              <a href="https://www.hopkinsmedicine.org/international/health-care-consulting/emea/anadolu-medical-center" target="_blank" rel="noopener noreferrer nofollow" className="text-sm text-blue-600 hover:underline">
                Johns Hopkins affiliation source →
              </a>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
            <p className="text-sm text-yellow-800">
              <strong>Important nuance:</strong> JCI accreditation applies to the hospital, not
              automatically to every surgeon who operates there. Many bariatric packages are sold by
              clinics or agencies that book a surgeon into a hospital. Verify both the facility&apos;s
              accreditation <em>and</em> the individual surgeon&apos;s board certification and case
              volume. We do not endorse any specific clinic; confirm everything independently.
            </p>
          </div>
        </div>
      </section>

      {/* Risks — balanced */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Risks and Considerations</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Gastric bypass is a well-studied procedure with a safety profile the ASMBS compares to
            common operations like gallbladder removal or knee replacement. Per ASMBS data, the
            overall risk of a major complication is about <strong>4%</strong>, the 30-day mortality
            for gastric bypass is around <strong>0.3%</strong>, and the gastrointestinal-leak rate
            is roughly <strong>0.4%</strong>. Those numbers reflect accredited US settings — your
            individual risk depends on your health, the surgeon, and the facility.
          </p>
          <h3>What to weigh carefully for surgery abroad</h3>
          <ul>
            <li><strong>Continuity of care:</strong> A complication can appear after you fly home. Line up a US clinician willing to manage post-bariatric follow-up before you travel.</li>
            <li><strong>Flying after surgery:</strong> Long-haul flights raise blood-clot risk; follow your surgeon&apos;s clearance timing and move during the flight.</li>
            <li><strong>Lifelong nutrition:</strong> Bypass is malabsorptive, so daily vitamins and lab monitoring (B12, iron, calcium) are required for life.</li>
            <li><strong>Irreversibility:</strong> This is permanent major surgery, not a shortcut — durable results require permanent dietary and lifestyle change.</li>
            <li><strong>Recourse:</strong> Cross-border malpractice and revision pathways differ from the US. Understand them before booking.</li>
          </ul>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 not-prose my-6">
            <p className="text-sm text-red-800">
              <strong>Red flags:</strong> a price far below the typical range, no named or
              board-certified surgeon, pressure to book immediately, surgery in an unaccredited
              facility, or any &quot;guaranteed result.&quot; Legitimate programs set realistic
              expectations and explain how complications are handled.
            </p>
          </div>
        </div>
      </section>

      {/* How to vet a surgeon */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Vet a Bariatric Surgeon in Turkey</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-2"><span>□</span><span>Operates at a JCI-accredited hospital — and you have confirmed it independently</span></li>
              <li className="flex gap-2"><span>□</span><span>Board-certified in general / bariatric surgery; named, not anonymous</span></li>
              <li className="flex gap-2"><span>□</span><span>High annual gastric-bypass volume and a stated complication rate</span></li>
              <li className="flex gap-2"><span>□</span><span>Written, itemized quote — you know exactly what is and is not included</span></li>
              <li className="flex gap-2"><span>□</span><span>Clear complication protocol and a way to reach the team 24/7</span></li>
              <li className="flex gap-2"><span>□</span><span>A realistic flying-home timeline and a long-term aftercare plan</span></li>
              <li className="flex gap-2"><span>□</span><span>Verifiable reviews on independent platforms, not just the clinic site</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA to money pages */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Comparing Bariatric Surgery Options?</h3>
          <p className="mb-6 text-blue-100">
            Browse verified bariatric providers and weigh medical-tourism against US cash-pay weight-loss care.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/bariatric"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              View Bariatric Providers
            </Link>
            <Link
              href="/weight-loss"
              className="inline-block rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Weight-Loss Care Options
            </Link>
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

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/gastric-sleeve-mexico-safety" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚖️</span>
              <div>
                <div className="font-bold text-gray-900">Gastric Sleeve in Mexico: Safety &amp; Cost</div>
                <div className="text-sm text-gray-600">The sleeve alternative, complication data, vetting surgeons</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/bbl-surgery-mexico" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🩺</span>
              <div>
                <div className="font-bold text-gray-900">BBL Surgery in Mexico: Safety &amp; Cost</div>
                <div className="text-sm text-gray-600">How to read surgeon credentials and avoid &quot;mills&quot;</div>
              </div>
            </div>
          </Link>

          <Link href="/destinations/turkey" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇹🇷</span>
              <div>
                <div className="font-bold text-gray-900">Turkey Medical Tourism</div>
                <div className="text-sm text-gray-600">Istanbul clinics, costs, and travel logistics</div>
              </div>
            </div>
          </Link>

          <Link href="/medical-tourism" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌍</span>
              <div>
                <div className="font-bold text-gray-900">Medical Tourism Hub</div>
                <div className="text-sm text-gray-600">Destinations, procedures, and how to compare safely</div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Disclaimer + affiliate disclosure */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-900">
          <p className="mb-2">
            <strong>Medical disclaimer:</strong> This page is general information, not medical advice.
            Prices are estimates aggregated from public sources and may be out of date — confirm
            current pricing, inclusions, and provider credentials directly with each hospital. Gastric
            bypass is irreversible major surgery; consult a licensed bariatric surgeon and complete a
            full medical evaluation before deciding on any procedure.
          </p>
          <p>
            <strong>Affiliate disclosure:</strong> VitalityScout may earn a commission from some
            links, at no additional cost to you. This never affects which providers we list or how we
            describe them.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="mx-auto max-w-4xl px-4 pb-8">
        <div className="border-t border-gray-200 pt-8">
          <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• <a href="https://asmbs.org/wp-content/uploads/2024/06/MBSFactSheet2024.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">ASMBS — Metabolic and Bariatric Surgery Fact Sheet (safety profile, complication and mortality rates)</a></li>
            <li>• <a href="https://us-uk.bookimed.com/clinics/country=turkey/procedure=roux-en-y-gastric-bypass/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Bookimed — Roux-en-Y Gastric Bypass in Turkey, costs and package inclusions</a></li>
            <li>• <a href="https://www.hayatmed.com/blog/gastric-bypass/gastric-bypass-surgery-cost/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">HayatMed — Gastric Bypass Cost in Turkey vs UK/USA, package inclusions and exclusions</a></li>
            <li>• <a href="https://www.nourish.com/blog/bariatric-surgery-cost" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Nourish — US bariatric / gastric bypass self-pay costs (citing ASMBS average)</a></li>
            <li>• <a href="https://www.memorialistanbul.com/about/jci-accreditation" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Memorial Hospitals Istanbul — JCI accreditation (first in Turkey)</a></li>
            <li>• <a href="https://www.hopkinsmedicine.org/international/health-care-consulting/emea/anadolu-medical-center" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Johns Hopkins Medicine International — Anadolu Medical Center affiliation (JCI-accredited)</a></li>
            <li>• <a href="https://www.healthpartners.com/blog/gastric-sleeve-vs-gastric-bypass/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">HealthPartners — Gastric sleeve vs gastric bypass (mechanism comparison)</a></li>
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Get Our Bariatric Surgery Abroad Checklist"
          description="Turkey vs US gastric bypass: cost breakdowns, accreditation checks, and surgeon-vetting questions."
          source="guide_gastric_bypass_turkey_cost"
        />
      </div>

      <Footer />
    </main>
  );
}
