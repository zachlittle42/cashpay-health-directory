import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Malaysia Medical Tourism Cost: Hospitals & Safety Guide' },
  alternates: { canonical: 'https://vitalityscout.com/guides/malaysia-medical-tourism-guide' },
  description: 'Malaysia medical tourism cost: cardiac, IVF, dental & ortho prices vs the US, JCI hospitals in KL & Penang, the visa-free rule, and how to vet a hospital.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// stated on this page. Every price answer ends with the verify-with-provider
// hedge, consistent with the medical disclaimer. The visible FAQ block below
// mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does medical treatment in Malaysia cost compared to the US?',
    answer:
      'Estimates commonly cited put heart bypass (CABG) at roughly $5,400-$17,200 in Malaysia (RM25,000-RM80,000) versus $57,000-$100,000+ in the US, knee replacement at about $7,000-$14,000 versus $15,000-$70,000, and a standard IVF cycle at roughly $2,100-$3,800 versus $12,000-$19,500. The Malaysia Healthcare Travel Council describes savings on the order of 50-80% vs Western prices. These are estimates that vary by hospital, surgeon, and case complexity — confirm a written package quote with the hospital before you travel.',
  },
  {
    question: 'Are hospitals in Malaysia safe for international patients?',
    answer:
      'Malaysia is one of the most established medical-tourism destinations in Asia: the Malaysia Healthcare Travel Council (MHTC), a Ministry of Health body, reports about 1.6 million healthcare travellers in 2024 and works with roughly 80 member hospitals. The standard advice is still to use accredited facilities. Look for Joint Commission International (JCI) accreditation, plus Malaysia’s own MSQH (Malaysian Society for Quality in Health) standard. Networks such as Prince Court Medical Centre, Sunway Medical Centre, and Gleneagles run dedicated international-patient services. Verify a specific hospital’s current accreditation before booking. This is information, not medical advice.',
  },
  {
    question: 'Do US citizens need a visa for medical treatment in Malaysia?',
    answer:
      'US passport holders can generally enter Malaysia visa-free for tourism or short medical visits of up to 90 days — no advance visa is required for that window. You do, however, need to submit the free Malaysia Digital Arrival Card (MDAC) online within 72 hours before arrival, and your passport must be valid for at least 6 months. Treatment that requires a longer stay may need a different pass. Visa and entry rules change — confirm current requirements with the official Malaysian Immigration Department and the US State Department before you travel.',
  },
  {
    question: 'Which procedures is Malaysia best known for in medical tourism?',
    answer:
      'Malaysia is most established for cardiology and cardiac surgery, fertility (IVF), orthopedics, oncology, health screening, and dental work. Kuala Lumpur is a hub for IVF, heart care, and oncology; Penang is known for cardiology and diagnostics; and Johor Bahru, next to Singapore, draws fertility and elective patients. The right hospital depends on your specific condition — discuss candidacy with a qualified clinician.',
  },
  {
    question: 'Is Penang or Kuala Lumpur cheaper for treatment?',
    answer:
      'Both are major hubs, but Penang is frequently described as 10-20% less expensive than Kuala Lumpur for comparable procedures, while KL concentrates the largest flagship hospitals. For example, single-tooth dental implants are often quoted around RM6,000-RM9,000 in Penang versus RM7,000-RM10,000 in KL. The gap is procedure-specific and the difference is usually smaller than the savings vs the US either way. Get an itemized quote from a hospital in each city before deciding.',
  },
  {
    question: 'Will my US health insurance cover treatment in Malaysia?',
    answer:
      'Most US health plans do not cover elective treatment abroad, which is why Malaysia’s self-pay (cash) pricing is the relevant comparison for most travelers. Separate travel medical insurance that covers complications is widely recommended. Confirm coverage details with both your insurer and the hospital’s international-patient office before you commit.',
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

export default function MalaysiaMedicalTourismGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Malaysia Medical Tourism: Cost, Hospitals & Safety Guide',
    description:
      'A practical guide to medical tourism in Malaysia — cardiac, fertility, orthopedic, and dental costs versus the US, JCI-accredited hospitals in Kuala Lumpur and Penang, the 90-day visa-free entry, and how to vet a clinic.',
    url: 'https://vitalityscout.com/guides/malaysia-medical-tourism-guide',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/malaysia-medical-tourism-guide#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalProcedure',
      name: 'Cardiac, fertility, orthopedic, and dental treatment abroad',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'Malaysia Healthcare Travel Council (MHTC) — official body', url: 'https://www.mhtc.org.my/' },
      { '@type': 'CreativeWork', name: 'MHTC — 2024 Healthcare Traveller Performance Highlights (1.6M travellers, RM2.72B)', url: 'https://www.mhtc.org.my/2024-healthcare-traveller-performance-highlights/' },
      { '@type': 'CreativeWork', name: 'Prince Court Medical Centre — first private hospital in Klang Valley with JCI accreditation', url: 'https://princecourt.com/' },
      { '@type': 'CreativeWork', name: 'Gleneagles Hospital Penang — JCI-accredited tertiary care (IHH Healthcare Malaysia)', url: 'https://www.ihhhealthcare.com/my/our-brands/our-hospitals/gleneagles' },
      { '@type': 'CreativeWork', name: 'Joint Commission International (JCI)', url: 'https://www.jointcommission.org/en/what-we-offer/accreditation/health-care-settings/international/' },
      { '@type': 'CreativeWork', name: 'Malaysia Digital Arrival Card (MDAC) — Malaysian Immigration Department', url: 'https://www.imi.gov.my/index.php/en/pengumuman/malaysia-digital-arrival-card-mdac/' },
      { '@type': 'CreativeWork', name: 'US Department of State — Malaysia Travel Advisory & entry requirements', url: 'https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Malaysia.html' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/malaysia-medical-tourism-guide#faq', url: 'https://vitalityscout.com/guides/malaysia-medical-tourism-guide' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/medical-tourism" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Medical Tourism Hub
          </Link>

          <div className="mb-4 flex items-center gap-3">
            <span className="text-4xl">🇲🇾</span>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              Destination Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Malaysia Medical Tourism: Cost, Hospitals &amp; Safety Guide
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Malaysia is one of Asia&apos;s most established medical-tourism destinations. Here is what
            cardiac, fertility, orthopedic, and dental care actually costs, how to find an accredited
            hospital in Kuala Lumpur or Penang, and how to plan the trip from the US.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              Medical tourism in Malaysia can cost <strong>50-80% less</strong> than the US on many
              procedures: heart bypass is often quoted around <strong>$5,400-$17,200</strong> vs{' '}
              <strong>$57,000-$100,000+</strong>, a standard IVF cycle around{' '}
              <strong>$2,100-$3,800</strong>, and a single dental implant around{' '}
              <strong>$1,400-$2,300</strong>. Care concentrates in JCI- and MSQH-accredited hospitals
              (Prince Court, Sunway, Gleneagles) across Kuala Lumpur and Penang. US travelers enter
              visa-free for up to 90 days with a free MDAC. Verify all pricing and accreditation
              directly with the hospital. This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">Last reviewed: June 2026 • 15 min read</p>
        </div>
      </section>

      {/* Medical / Regulatory Disclaimer */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-red-900 mb-3">Read This First</h3>
          <p className="text-sm text-red-800 mb-3">
            <strong>Quality varies between facilities.</strong> Malaysia has a large, well-regulated
            private-hospital sector, but the standard advice is still to use accredited hospitals.
            Confirm a hospital&apos;s current{' '}
            <a href="https://www.jointcommission.org/en/what-we-offer/accreditation/health-care-settings/international/" target="_blank" rel="noopener noreferrer nofollow" className="underline">
              JCI
            </a>{' '}
            and/or{' '}
            <a href="https://www.msqh.com.my/" target="_blank" rel="noopener noreferrer nofollow" className="underline">
              MSQH
            </a>{' '}
            accreditation directly — accreditation status can change.
          </p>
          <p className="text-sm text-red-800">
            This guide is for informational purposes only and is not medical advice. Outcomes depend
            on your condition, the surgeon, and the facility. Discuss candidacy and risks with a
            qualified clinician before pursuing any treatment abroad.
          </p>
        </div>
      </section>

      {/* At a Glance */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-blue-900 mb-3">Malaysia at a Glance</h2>
          <ul className="text-sm text-gray-700 space-y-1 mb-0">
            <li>✓ <strong>~1.6 million healthcare travellers in 2024</strong> (MHTC) — RM2.72 billion in revenue, up ~21% YoY</li>
            <li>✓ <strong>50-80% savings</strong> vs US prices on many procedures (estimates)</li>
            <li>✓ <strong>Strongest for:</strong> cardiology, fertility / IVF, orthopedics, oncology, dental, health screening</li>
            <li>✓ <strong>Accreditation to look for:</strong> JCI (international) + MSQH (Malaysia&apos;s national standard)</li>
            <li>✓ <strong>English</strong> is widely spoken in clinical settings — minimal language barrier</li>
            <li>✓ <strong>Flight time:</strong> ~18-22 hours from the US (with connections)</li>
            <li>✓ <strong>Visa:</strong> US citizens visa-free up to 90 days; free MDAC submitted online before arrival</li>
          </ul>
        </div>
      </section>

      {/* Why Malaysia */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why People Travel to Malaysia for Care</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Malaysia built its medical-tourism reputation on a specific combination: a large
              private-hospital sector, prices well below US levels, widespread English in clinical
              settings, and a government body — the <strong>Malaysia Healthcare Travel Council
              (MHTC)</strong>, established in 2009 under the Ministry of Health — that coordinates the
              industry across roughly 80 member hospitals. In 2024 MHTC reported about 1.6 million
              healthcare travellers and RM2.72 billion in revenue.
            </p>
            <p>
              Unlike destinations known mainly for cosmetic walk-ins, Malaysia&apos;s draw skews toward
              cardiology, fertility, orthopedics, oncology, and comprehensive health screening. Many
              specialists trained in the UK, Australia, or the US, and the large networks run dedicated
              international-patient departments with interpreters, concierge, and travel assistance. The
              trade-offs are the long flight from the US and the same rule that applies everywhere
              abroad: stick to accredited hospitals and confirm everything in writing.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Cost Comparison: US vs Malaysia (Estimates)</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Procedure</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">US Price</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-green-700">Malaysia Price</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Est. Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Heart Bypass (CABG)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$57,000 - $100,000+</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$5,400 - $17,200</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~70-85%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Angioplasty (with stent)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$28,000 - $50,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$3,300 - $8,800</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~75-85%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Knee Replacement</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$15,000 - $70,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$7,000 - $14,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~55-75%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">IVF Cycle (standard)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$12,000 - $19,500</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$2,100 - $3,800</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~75-85%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Dental Implant (single)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$3,000 - $6,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$1,400 - $2,300</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~55-70%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Malaysia figures are converted from Ringgit (RM) at an approximate rate of RM4.6 per USD and
          are estimates compiled from medical-tourism and clinic cost-comparison sources; they vary by
          hospital, surgeon, implant choice, and case complexity. Private-hospital package pricing often
          bundles surgeon fees, hospital stay, and some follow-up; US figures usually do not. Always
          request a written, itemized quote from the hospital before you travel.
        </p>
      </section>

      {/* Top Cities */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Go: Major Medical Hubs</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">Kuala Lumpur (KL)</h3>
              <p className="text-sm text-gray-600 mb-3">
                The capital concentrates Malaysia&apos;s largest flagship hospitals, including Prince
                Court Medical Centre and Sunway Medical Centre in the Klang Valley. A primary hub for
                IVF, cardiac care, and oncology, with the widest choice of specialists and the busiest
                international airport (KLIA).
              </p>
              <div className="text-sm text-green-600 font-semibold">Best for: IVF, cardiac, oncology, complex care</div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">Penang</h3>
              <p className="text-sm text-gray-600 mb-3">
                An island long known as a medical-tourism magnet, with Gleneagles Penang and Island
                Hospital among its leading facilities. Often cited as 10-20% cheaper than KL for
                comparable procedures, and especially strong in cardiology and diagnostics.
              </p>
              <div className="text-sm text-green-600 font-semibold">Best for: cardiology, diagnostics, value pricing</div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">Johor Bahru (JB)</h3>
              <p className="text-sm text-gray-600 mb-3">
                On the border with Singapore, JB attracts patients seeking Singapore-adjacent quality at
                Malaysian prices. Demand is heaviest for fertility treatment and elective procedures,
                with a steady flow of cross-border patients.
              </p>
              <div className="text-sm text-green-600 font-semibold">Best for: fertility / IVF, elective procedures</div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">Malacca &amp; Selangor</h3>
              <p className="text-sm text-gray-600 mb-3">
                Beyond the big three, Selangor (around KL) hosts facilities such as Subang Jaya Medical
                Centre, and Malacca has a growing medical-travel sector. These can offer shorter waits
                and competitive pricing for routine and orthopedic care.
              </p>
              <div className="text-sm text-green-600 font-semibold">Best for: orthopedics, routine and elective care</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leading Hospital Networks */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Leading Accredited Hospitals</h2>
        <p className="text-gray-600 mb-8 text-sm">
          These are established hospitals that operate accredited facilities and dedicated
          international-patient services. Inclusion here is informational, not an endorsement — verify a
          specific hospital&apos;s current accreditation and confirm that it performs your exact
          procedure before booking.
        </p>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Prince Court Medical Centre</h3>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">JCI</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              A 277-bed multi-specialty hospital in Kuala Lumpur, and the first private hospital in the
              Klang Valley to earn JCI accreditation. It runs a dedicated International Patient Centre
              with interpreter services, medical concierge, and travel assistance, and has been
              recognized as Malaysia&apos;s Medical Tourism Hospital of the Year in recent years.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-700">Often used for:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Cardiac care</li>
                  <li>• Oncology</li>
                  <li>• Orthopedics</li>
                  <li>• Health screening</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-700">Location:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Kuala Lumpur</li>
                  <li>• ~277 beds</li>
                  <li>• Int&apos;l Patient Centre</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-blue-600 mt-3 mb-0">
              <a href="https://princecourt.com" target="_blank" rel="noopener noreferrer nofollow">princecourt.com</a>
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Sunway Medical Centre</h3>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">JCI &amp; MSQH</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              A large quaternary-care hospital in the Klang Valley, reported as the first private
              hospital in Malaysia to hold triple accreditation (JCI, ACHS, and MSQH). With roughly 700+
              beds and one of Malaysia&apos;s largest radiotherapy centers, it handles complex cardiac,
              oncology, and neurology cases.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-700">Often used for:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Oncology / radiotherapy</li>
                  <li>• Cardiac care</li>
                  <li>• Neurosciences</li>
                  <li>• Complex / tertiary care</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-700">Location:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Sunway City, Selangor</li>
                  <li>• (Greater KL)</li>
                  <li>• 700+ beds</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-blue-600 mt-3 mb-0">
              <a href="https://www.sunwaymedical.com" target="_blank" rel="noopener noreferrer nofollow">sunwaymedical.com</a>
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Gleneagles Penang</h3>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">JCI</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              A JCI-accredited tertiary-care hospital in Penang, part of the IHH Healthcare Malaysia
              group. Strong in cardiology, interventional cardiology, and cardiothoracic surgery, with a
              one-stop international-patient service covering appointments, transfers, interpretation,
              and accommodation.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-700">Often used for:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Cardiology</li>
                  <li>• Cardiothoracic surgery</li>
                  <li>• Orthopedics</li>
                  <li>• Diagnostics</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-700">Location:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Penang</li>
                  <li>• IHH Healthcare group</li>
                  <li>• Int&apos;l patient desk</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-blue-600 mt-3 mb-0">
              <a href="https://www.ihhhealthcare.com/my/our-brands/our-hospitals/gleneagles" target="_blank" rel="noopener noreferrer nofollow">ihhhealthcare.com</a>
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Island Hospital, Penang</h3>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">ACHS</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              A long-running Penang hospital recognized by the Australian Council on Healthcare
              Standards (ACHS). It received an International Centre of Excellence certificate for its
              cardiology services in 2024 and a high regional ranking in Newsweek&apos;s World&apos;s
              Best Hospitals listing for Malaysia. A frequent choice for international cardiology and
              screening patients in Penang.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-700">Often used for:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Cardiology</li>
                  <li>• Oncology</li>
                  <li>• Health screening</li>
                  <li>• General surgery</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-700">Location:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Penang</li>
                  <li>• ACHS-accredited</li>
                  <li>• Int&apos;l patient service</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-blue-600 mt-3 mb-0">
              <a href="https://islandhospital.com" target="_blank" rel="noopener noreferrer nofollow">islandhospital.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* Accreditation explainer */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding the Accreditations</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">JCI (Joint Commission International)</h3>
              <p className="text-sm text-gray-700 mb-0">
                A US-based body that accredits hospitals worldwide to an international gold standard.
                JCI accreditation signals that a facility meets globally recognized patient-safety and
                quality benchmarks. Several Malaysian private hospitals hold it. Confirm a hospital&apos;s
                current status directly — accreditation must be renewed.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">MSQH (Malaysia&apos;s national standard)</h3>
              <p className="text-sm text-gray-700 mb-0">
                The Malaysian Society for Quality in Health runs the country&apos;s own hospital
                accreditation program, alongside international standards like JCI and Australia&apos;s
                ACHS. Look for a hospital that carries JCI and/or MSQH, and ask the international-patient
                office which certifications are current.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel & Logistics */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Travel &amp; Trip Logistics</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Visa &amp; Entry</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Visa-free:</strong> US passport holders for stays up to 90 days (short visits)</li>
              <li><strong>MDAC:</strong> free Malaysia Digital Arrival Card, submitted online within 72 hours of arrival</li>
              <li><strong>Passport:</strong> valid at least 6 months beyond your arrival date</li>
              <li><strong>Longer stays:</strong> extended treatment may need a different pass — ask the hospital</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Getting There &amp; Around</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Flight time:</strong> ~18-22 hours from the US with connections</li>
              <li><strong>Major airports:</strong> Kuala Lumpur (KUL), Penang (PEN), Johor Bahru (JHB)</li>
              <li><strong>Transfers:</strong> many hospitals arrange airport pickup for international patients</li>
              <li><strong>Getting around:</strong> ride-hailing (Grab) is widely available in cities</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Money &amp; Payment</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Currency:</strong> Malaysian Ringgit (RM); cards widely accepted at major hospitals</li>
              <li><strong>Packages:</strong> many hospitals quote bundled package pricing</li>
              <li><strong>Quotes:</strong> request itemized estimates; ask what is and is not included</li>
              <li><strong>Insurance:</strong> separate travel medical insurance with complications cover is recommended</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Language &amp; Communication</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>English:</strong> widely spoken in clinical and hospital settings</li>
              <li><strong>Interpreters:</strong> available at large international-patient departments</li>
              <li><strong>Coordinators:</strong> dedicated international-patient teams at the big hospitals</li>
              <li><strong>Stay reachable:</strong> keep your coordinator&apos;s contact (often WhatsApp) handy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How to vet */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Vet a Hospital Before You Book</h2>
          <div className="prose prose-lg max-w-none">
            <ul>
              <li><strong>Confirm accreditation directly:</strong> check current JCI and/or MSQH status on the hospital&apos;s own site or the accrediting body — do not rely on a third-party listing.</li>
              <li><strong>Verify the specific procedure and surgeon:</strong> ask how many of your exact procedure the named surgeon performs, and request their training and credentials.</li>
              <li><strong>Get a written, itemized quote:</strong> what the package includes (surgeon, hospital stay, implants, follow-up) and what it does not.</li>
              <li><strong>Ask about complications:</strong> what happens if something goes wrong, what aftercare and remote follow-up are provided, and how care continues once you return home.</li>
              <li><strong>Buy travel medical insurance</strong> that covers complications, and keep your US physician in the loop before and after.</li>
            </ul>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 not-prose my-6">
              <p className="text-sm text-yellow-800 mb-0">
                <strong>Red flag:</strong> any clinic that guarantees a result, pressures a deposit before
                you have a written quote and accreditation confirmation, or cannot connect you with the
                operating surgeon. Legitimate hospitals set realistic expectations and discuss risks.
              </p>
            </div>
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

      {/* CTA / money-page links */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Compare Malaysia Against Other Hubs</h3>
          <p className="text-gray-600 mb-6">
            Weighing Malaysia against Thailand, India, or Mexico? Start at the Medical Tourism Hub to
            compare destinations, procedures, and costs side by side.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/medical-tourism" className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
              Medical Tourism Hub
            </Link>
            <Link href="/guides/medical-tourism-packages" className="inline-block rounded-lg border-2 border-blue-600 px-6 py-3 font-medium text-blue-600 hover:bg-blue-50">
              How Packages Work
            </Link>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/thailand-medical-tourism-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇹🇭</span>
              <div>
                <div className="font-bold text-gray-900">Thailand Medical Tourism Guide</div>
                <div className="text-sm text-gray-600">Bangkok&apos;s JCI hospitals, costs, trip planning</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/india-medical-tourism-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇮🇳</span>
              <div>
                <div className="font-bold text-gray-900">India Medical Tourism Guide</div>
                <div className="text-sm text-gray-600">Cardiac, ortho, oncology &amp; IVF costs, JCI/NABH hospitals</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/medical-travel-insurance-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🛡️</span>
              <div>
                <div className="font-bold text-gray-900">Medical Travel Insurance Guide</div>
                <div className="text-sm text-gray-600">What covers complications abroad — and what doesn&apos;t</div>
              </div>
            </div>
          </Link>

          <Link href="/medical-tourism" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌍</span>
              <div>
                <div className="font-bold text-gray-900">Medical Tourism Hub</div>
                <div className="text-sm text-gray-600">All destinations, procedures, and comparisons</div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-gray-100 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-2">Medical &amp; Travel Disclaimer</h3>
          <p className="text-sm text-gray-600">
            This guide is for informational purposes only and does not constitute medical advice.
            Pricing figures are estimates compiled from public cost-comparison sources and vary by
            hospital, surgeon, and case; confirm current pricing and accreditation directly with each
            provider. Visa and travel requirements change — verify with official government sources.
            Always consult qualified healthcare professionals before pursuing any treatment.
            VitalityScout does not endorse any specific hospital or guarantee treatment outcomes.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="mx-auto max-w-4xl px-4 pb-8">
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <a href="https://www.mhtc.org.my/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Malaysia Healthcare Travel Council (MHTC) — official body</a></li>
            <li>• <a href="https://www.mhtc.org.my/2024-healthcare-traveller-performance-highlights/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">MHTC — 2024 Healthcare Traveller Performance Highlights (1.6M travellers, RM2.72B)</a></li>
            <li>• <a href="https://princecourt.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Prince Court Medical Centre — first private hospital in Klang Valley with JCI accreditation</a></li>
            <li>• <a href="https://www.ihhhealthcare.com/my/our-brands/our-hospitals/gleneagles" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Gleneagles Hospital Penang — JCI-accredited tertiary care (IHH Healthcare Malaysia)</a></li>
            <li>• <a href="https://www.jointcommission.org/en/what-we-offer/accreditation/health-care-settings/international/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Joint Commission International (JCI)</a></li>
            <li>• <a href="https://www.msqh.com.my/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Malaysian Society for Quality in Health (MSQH)</a></li>
            <li>• <a href="https://www.imi.gov.my/index.php/en/pengumuman/malaysia-digital-arrival-card-mdac/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Malaysia Digital Arrival Card (MDAC) — Malaysian Immigration Department</a></li>
            <li>• <a href="https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Malaysia.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">US Department of State — Malaysia Travel Advisory &amp; entry requirements</a></li>
            <li>• <a href="https://curemeabroad.com/blogs/malaysia-medical-tourism-guide-2026-cost-treatment-hospitals" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Malaysia Medical Tourism Guide — cost &amp; hospital overview (Cure Me Abroad)</a></li>
            <li>• <a href="https://www.ihhmalaysia-international.com/articles/known-for-outstanding-service-quality-discover-the-best-hospitals-in-penang" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Best Hospitals in Penang — IHH Malaysia International</a></li>
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Planning Treatment in Malaysia?"
          description="Get our medical-tourism checklist: accreditation verification, the questions to ask before you book, and trip-planning steps."
          source="guide_malaysia_medical_tourism"
        />
      </div>

      <Footer />
    </main>
  );
}
