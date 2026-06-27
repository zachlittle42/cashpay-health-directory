import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Singapore Medical Tourism Cost: Premium Care Guide' },
  alternates: { canonical: 'https://vitalityscout.com/guides/singapore-medical-tourism-guide' },
  description:
    'Singapore medical tourism cost guide: why complex cardiac, oncology & transplant care costs more, the JCI hospitals, the visa, and who it fits.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// stated on this page. Every price answer ends with the verify-with-provider
// hedge, consistent with the medical disclaimer. The visible FAQ block below
// mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does medical treatment in Singapore cost compared to the US?',
    answer:
      'Singapore is a premium destination, so the savings are smaller than budget hubs but still large on complex care. Cost-comparison sources put heart bypass (CABG) at roughly $17,200-$18,000 in Singapore versus about $123,000-$130,000 in the US, heart valve replacement near $16,900 versus about $170,000, and spinal fusion around $12,800 versus roughly $110,000. Hip and knee replacement run closer to $12,800-$16,350. These are estimates that vary by hospital, surgeon, and case complexity — confirm a written, itemized quote with the hospital before you travel.',
  },
  {
    question: 'Why is Singapore more expensive than India, Thailand, or Mexico?',
    answer:
      'Singapore competes on outcomes and infrastructure rather than on the lowest price. It runs one of the densest concentrations of JCI-accredited hospitals in Asia, English-speaking specialists, advanced technology such as proton therapy, and strict government regulation. The result is care often described as comparable to top Western institutions at a fraction of US prices — but a premium over lower-cost Asian hubs. The trade-off is paying more to reduce variability, which is why it is most chosen for complex, high-stakes procedures rather than routine cosmetic work.',
  },
  {
    question: 'Are Singapore hospitals safe and accredited for international patients?',
    answer:
      'Singapore is consistently ranked among the world’s top medical-tourism destinations and placed second in the 2020-2021 Medical Tourism Index. Cost-comparison sources cite 23 Singapore facilities accredited by Joint Commission International (JCI). Large private hospitals such as Mount Elizabeth, Mount Elizabeth Novena, Gleneagles, Parkway East, and Raffles operate dedicated international-patient services. Verify a specific hospital’s current accreditation directly before booking, because accreditation status can change. This is information, not medical advice.',
  },
  {
    question: 'What is Singapore best known for in medical tourism?',
    answer:
      'Singapore is most established for complex, high-value care: cardiac surgery, oncology (cancer treatment), organ transplants, advanced diagnostics, and specialist orthopedics. It is one of the few destinations offering proton therapy — the National Cancer Centre Singapore runs the Goh Cheng Liang Proton Therapy Centre, and Mount Elizabeth operates a separate proton therapy centre. The right hospital depends on your specific condition — discuss candidacy with a qualified clinician.',
  },
  {
    question: 'Do US citizens need a visa for medical treatment in Singapore?',
    answer:
      'US passport holders generally do not need a visa for a short visit and are typically granted a stay of up to 90 days on arrival. If your pre-op workup, surgery, and recovery will run longer, you can apply to extend your Short-Term Visit Pass through Singapore’s Immigration & Checkpoints Authority (ICA), with a registered Singapore doctor endorsing the medical reason. Entry rules change — confirm current requirements with the official ICA website and your hospital’s international office.',
  },
  {
    question: 'How long should I plan to stay in Singapore for treatment?',
    answer:
      'It depends entirely on the procedure. Advanced diagnostics or a consult may need only a short trip, while cardiac surgery, a transplant, or a multi-week oncology course requires a longer stay covering pre-op workup, the hospital stay, and supervised recovery before an 18-22 hour flight home. The standard visitor stay is up to 90 days for US citizens. Always confirm the expected timeline and fitness-to-fly date with your surgeon before booking return flights.',
  },
  {
    question: 'Will my US health insurance cover treatment in Singapore?',
    answer:
      'Most US health plans do not cover elective treatment abroad, which is why Singapore’s self-pay (cash) pricing is the relevant comparison for most travelers. Separate travel medical insurance that covers complications is widely recommended. Confirm coverage details with both your insurer and the hospital’s international-patient office before you commit.',
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

export default function SingaporeMedicalTourismGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Singapore Medical Tourism Cost: Premium Care Guide',
    description:
      'A practical guide to medical tourism in Singapore — why complex cardiac, oncology, transplant, and orthopedic care costs more than lower-cost Asian hubs, the JCI-accredited hospitals, the visa, and how to vet a hospital.',
    url: 'https://vitalityscout.com/guides/singapore-medical-tourism-guide',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/singapore-medical-tourism-guide#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalProcedure',
      name: 'Cardiac, oncology, transplant, and orthopedic treatment abroad',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'Singapore Medical Tourism: Costs & Comparisons (Medical Tourism Council)', url: 'https://www.medicaltourismcouncil.org/medical-tourism-singapore' },
      { '@type': 'CreativeWork', name: 'Goh Cheng Liang Proton Therapy Centre — National Cancer Centre Singapore', url: 'https://www.nccs.com.sg/our-specialties/goh-cheng-liang-proton-therapy-centre' },
      { '@type': 'CreativeWork', name: 'Joint Commission International (JCI)', url: 'https://www.jointcommission.org/en/what-we-offer/accreditation/health-care-settings/international/' },
      { '@type': 'CreativeWork', name: 'Singapore Immigration & Checkpoints Authority — Visa Requirements', url: 'https://www.ica.gov.sg/enter-transit-depart/entering-singapore/visa_requirements' },
      { '@type': 'CreativeWork', name: 'Raffles Hospital — About Us (JCI-accredited, 35 specialties)', url: 'https://www.rafflesmedicalgroup.com/services/hospital/about-raffles-hospital/about-us/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/singapore-medical-tourism-guide#faq', url: 'https://vitalityscout.com/guides/singapore-medical-tourism-guide' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <SidebarShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-red-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/medical-tourism" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Medical Tourism Hub
          </Link>

          <div className="mb-4 flex items-center gap-3">
            <span className="text-4xl">🇸🇬</span>
            <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
              Destination Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Singapore Medical Tourism Cost: The Premium-Care Guide
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Singapore is the high end of Asian medical tourism. It is not where you go for the
            cheapest dental crown — it is where people fly for complex cardiac, cancer, transplant,
            and advanced-diagnostic care. Here is what it actually costs, why it costs more, and who
            it is right for.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              Singapore medical tourism costs <strong>more than India, Thailand, or Mexico</strong>{' '}
              but far less than the US on complex care: heart bypass is quoted around{' '}
              <strong>$17,200-$18,000</strong> vs <strong>$123,000-$130,000</strong>, heart valve
              replacement near <strong>$16,900</strong> vs <strong>$170,000</strong>, and spinal
              fusion about <strong>$12,800</strong> vs <strong>$110,000</strong>. Care concentrates in
              JCI-accredited hospitals (Mount Elizabeth, Gleneagles, Raffles, Parkway East). US
              travelers get up to a 90-day visa-free stay. Verify all pricing and accreditation
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
            <strong>Singapore competes on quality, not the lowest price.</strong> If your goal is the
            absolute cheapest procedure, lower-cost hubs will undercut it. Singapore makes sense when
            you want to reduce variability on a high-stakes case. Confirm a hospital&apos;s current{' '}
            <a href="https://www.jointcommission.org/en/what-we-offer/accreditation/health-care-settings/international/" target="_blank" rel="noopener noreferrer nofollow" className="underline">
              JCI accreditation
            </a>{' '}
            directly — accreditation status can change.
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
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-red-900 mb-3">Singapore at a Glance</h2>
          <ul className="text-sm text-gray-700 space-y-1 mb-0">
            <li>✓ <strong>~646,000 international patients in 2024</strong> (~US$270M sector revenue) — a top regional hub</li>
            <li>✓ <strong>Ranked #2</strong> in the 2020-2021 Medical Tourism Index</li>
            <li>✓ <strong>Premium pricing:</strong> deepest savings on complex cardiac, oncology, transplant, spinal cases</li>
            <li>✓ <strong>~23 JCI-accredited facilities</strong> (cost-comparison sources) — one of Asia&apos;s densest concentrations</li>
            <li>✓ <strong>English</strong> is an official language — minimal language barrier</li>
            <li>✓ <strong>Flight time:</strong> ~18-22 hours from the US (with connections)</li>
            <li>✓ <strong>Visa:</strong> US citizens typically get up to 90 days visa-free; extend via ICA for longer treatment</li>
          </ul>
        </div>
      </section>

      {/* Why Singapore */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why People Travel to Singapore for Care</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Singapore built its medical-tourism reputation on a different bet than its neighbors.
              Where India and Thailand lead on cost and Mexico leads on proximity, Singapore leads on
              <strong> outcomes, technology, and regulation</strong>. It is widely described as
              offering care comparable to top Western institutions — at prices that are a steep
              premium over budget Asian hubs, yet still a fraction of US figures on complex work.
            </p>
            <p>
              That positioning shapes who actually goes. Singapore is most chosen for the cases where
              variability is dangerous and the downside of a bad outcome is severe: cardiac surgery,
              cancer treatment, organ transplants, and complex orthopedic and spinal procedures. It is
              one of the few destinations offering <strong>proton therapy</strong> for certain
              cancers. The draw is the combination of a dense field of JCI-accredited hospitals,
              English-speaking specialists, advanced equipment, and a strict regulatory environment.
              The trade-off is the price premium and the long flight — which is why Singapore rarely
              wins a pure cost shoot-out for routine cosmetic or dental work.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Cost Comparison: US vs Singapore (Estimates)</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Procedure</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">US Price</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-green-700">Singapore Price</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Est. Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Heart Bypass (CABG)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$123,000 - $130,000+</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$17,200 - $18,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~80-86%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Heart Valve Replacement</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">~$170,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~$16,900</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~90%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Spinal Fusion</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">~$110,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~$12,800</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~88%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Hip Replacement</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">~$40,364</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$13,900 - $16,350</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~59-65%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Knee Replacement</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$28,000 - $43,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$12,800 - $16,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~43-63%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Angioplasty</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">~$28,200</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~$13,400</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~52%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Prices are estimates compiled from medical-tourism cost-comparison sources and vary by
          hospital, surgeon, implant choice, and case complexity. Notice the pattern: Singapore&apos;s
          savings are largest on the most complex procedures (bypass, valve, spinal fusion) and
          thinnest on routine work — the opposite of a budget hub. Cancer and transplant pricing is
          highly case-dependent and is not shown here; always request a written, itemized quote from
          the hospital before you travel.
        </p>
      </section>

      {/* The premium-positioning explainer (distinctive section) */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Singapore Costs More Than Other Asian Hubs</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-2">You are paying to reduce variability</h3>
            <p className="text-sm text-gray-700 mb-0">
              In lower-cost destinations, quality ranges enormously between facilities, so vetting is
              everything. Singapore&apos;s edge is a high floor: a dense field of accredited hospitals,
              strict regulation, and consistent standards. The premium buys a narrower band of
              outcomes — which matters most on high-stakes cases.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-2">Technology and subspecialty depth</h3>
            <p className="text-sm text-gray-700 mb-0">
              Singapore offers treatments many destinations do not — proton therapy for certain
              cancers, advanced transplant programs, and deep cardiac and neurosurgical subspecialties.
              That capital-intensive infrastructure is part of why the bill is higher than a hub
              focused on volume cosmetic work.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-2">A high-cost city</h3>
            <p className="text-sm text-gray-700 mb-0">
              Singapore is one of the world&apos;s most expensive cities. Land, labor, and your own
              accommodation, food, and transport during recovery all cost more than in Bangkok, Delhi,
              or Tijuana. Budget for the trip, not just the procedure.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-2">When the premium is worth it</h3>
            <p className="text-sm text-gray-700 mb-0">
              For routine cosmetic or dental work, the premium is usually hard to justify versus a
              budget hub. For a complex cardiac, oncology, transplant, or spinal case — where the cost
              of a poor outcome dwarfs the price gap — many travelers decide the higher floor is the
              point.
            </p>
          </div>
        </div>
      </section>

      {/* Leading Hospitals */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Leading Accredited Hospitals</h2>
          <p className="text-gray-600 mb-8 text-sm">
            These are large, established hospitals that operate accredited facilities and dedicated
            international-patient services. Inclusion here is informational, not an endorsement —
            verify a specific hospital&apos;s current accreditation and confirm that it performs your
            exact procedure before booking.
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Mount Elizabeth Hospitals (Orchard &amp; Novena)</h3>
                <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded">JCI</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Two flagship Parkway/IHH private hospitals in central Singapore, long associated with
                cardiac surgery, oncology, and complex specialist care. Mount Elizabeth also operates a
                dedicated proton therapy centre, which it reports has treated over 100 patients from 16
                countries. Both run international-patient services.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-gray-700">Often used for:</strong>
                  <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                    <li>• Cardiac surgery</li>
                    <li>• Oncology / proton therapy</li>
                    <li>• Organ transplants</li>
                    <li>• Neurosurgery</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-gray-700">Locations:</strong>
                  <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                    <li>• Orchard (Mount Elizabeth)</li>
                    <li>• Novena (Mount Elizabeth Novena)</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-blue-600 mt-3 mb-0">
                <a href="https://www.mountelizabeth.com.sg" target="_blank" rel="noopener noreferrer nofollow">mountelizabeth.com.sg</a>
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Gleneagles Hospital</h3>
                <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded">JCI</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                A long-established Parkway/IHH private hospital popular with international patients. It
                runs the Gleneagles Patient Assistance Centre (GPAC), a one-stop service covering
                appointments, transfers, and visa support, and is known for cardiology,
                gastroenterology, and oncology.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-gray-700">Often used for:</strong>
                  <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                    <li>• Cardiology</li>
                    <li>• Oncology</li>
                    <li>• Gastroenterology</li>
                    <li>• Orthopedics</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-gray-700">International support:</strong>
                  <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                    <li>• GPAC concierge</li>
                    <li>• Airport transfers</li>
                    <li>• Visa support</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-blue-600 mt-3 mb-0">
                <a href="https://www.gleneagles.com.sg" target="_blank" rel="noopener noreferrer nofollow">gleneagles.com.sg</a>
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Raffles Hospital</h3>
                <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded">JCI</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                A large private multispecialty hospital, JCI-accredited since 2008, covering roughly 35
                specialties and serving patients from over 100 countries. It offers language
                interpretation, concierge support, and health-screening packages, and is a member of the
                Mayo Clinic Care Network. It sits about 17 minutes from Changi Airport.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-gray-700">Often used for:</strong>
                  <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                    <li>• Multispecialty surgery</li>
                    <li>• Oncology</li>
                    <li>• Cardiology</li>
                    <li>• Health screening</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-gray-700">International support:</strong>
                  <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                    <li>• 35 specialties</li>
                    <li>• Interpreters &amp; concierge</li>
                    <li>• Mayo Clinic Care Network</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-blue-600 mt-3 mb-0">
                <a href="https://www.rafflesmedicalgroup.com" target="_blank" rel="noopener noreferrer nofollow">rafflesmedicalgroup.com</a>
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">National Cancer Centre Singapore (NCCS)</h3>
                <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded">Public / SingHealth</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                A specialist public cancer institution within the SingHealth network. NCCS operates the
                Goh Cheng Liang Proton Therapy Centre — funded by a $50 million Goh Foundation gift — and
                is the only public healthcare institution in Singapore to offer proton therapy, an
                advanced form of radiation. International-patient access is coordinated through SingHealth.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-gray-700">Often used for:</strong>
                  <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                    <li>• Oncology (comprehensive)</li>
                    <li>• Proton therapy</li>
                    <li>• Radiation oncology</li>
                    <li>• Clinical trials</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-gray-700">Note:</strong>
                  <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                    <li>• Public institution</li>
                    <li>• SingHealth network</li>
                    <li>• Proton therapy centre</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-blue-600 mt-3 mb-0">
                <a href="https://www.nccs.com.sg" target="_blank" rel="noopener noreferrer nofollow">nccs.com.sg</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation explainer */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding the Accreditations</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-2">JCI (Joint Commission International)</h3>
            <p className="text-sm text-gray-700 mb-0">
              A US-based body that accredits hospitals worldwide to an international gold standard. JCI
              accreditation signals that a facility meets globally recognized patient-safety and quality
              benchmarks. Cost-comparison sources count roughly 23 JCI-accredited facilities in
              Singapore — one of the densest concentrations in Asia. Confirm a hospital&apos;s current
              status directly, because accreditation must be renewed.
            </p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-2">Singapore&apos;s regulatory environment</h3>
            <p className="text-sm text-gray-700 mb-0">
              Beyond JCI, Singapore is known for strict government oversight of its health system and
              consistently high international rankings — it placed second in the 2020-2021 Medical
              Tourism Index. That regulatory floor is a large part of why care here is described as
              comparable to top Western institutions, and part of what you are paying for.
            </p>
          </div>
        </div>
      </section>

      {/* Travel & Logistics */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Travel &amp; Trip Logistics</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-gray-900 mt-0 mb-3">Visa &amp; Entry</h4>
              <ul className="text-sm text-gray-700 space-y-2 mb-0">
                <li><strong>US citizens:</strong> typically no visa for short visits, up to a 90-day stay on arrival</li>
                <li><strong>Longer treatment:</strong> extend your Short-Term Visit Pass through ICA</li>
                <li><strong>Endorsement:</strong> a registered Singapore doctor documents the medical reason</li>
                <li><strong>Confirm:</strong> verify current rules on the official ICA website</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-gray-900 mt-0 mb-3">Getting There &amp; Around</h4>
              <ul className="text-sm text-gray-700 space-y-2 mb-0">
                <li><strong>Flight time:</strong> ~18-22 hours from the US with connections</li>
                <li><strong>Airport:</strong> Changi (SIN) — one of the world&apos;s most awarded hubs</li>
                <li><strong>Transfers:</strong> hospitals like Gleneagles arrange airport pickup</li>
                <li><strong>Getting around:</strong> the MRT and taxis are clean, safe, and efficient</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-gray-900 mt-0 mb-3">Money &amp; Payment</h4>
              <ul className="text-sm text-gray-700 space-y-2 mb-0">
                <li><strong>Currency:</strong> Singapore Dollar (SGD); cards widely accepted</li>
                <li><strong>High-cost city:</strong> budget for accommodation, food, and transport too</li>
                <li><strong>Packages:</strong> many hospitals quote bundled package pricing</li>
                <li><strong>Insurance:</strong> separate travel medical insurance with complications cover is recommended</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-gray-900 mt-0 mb-3">Language &amp; Communication</h4>
              <ul className="text-sm text-gray-700 space-y-2 mb-0">
                <li><strong>English:</strong> an official language — minimal barrier in clinical settings</li>
                <li><strong>Interpreters:</strong> available at major international-patient departments</li>
                <li><strong>Coordinators:</strong> dedicated international-patient teams (e.g., GPAC)</li>
                <li><strong>Stay reachable:</strong> keep your coordinator&apos;s contact handy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who it is right for (distinctive section) */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Who Singapore Is — and Is Not — Right For</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="font-bold text-green-900 mb-3">A good fit if you:</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>• Need a complex cardiac, oncology, transplant, or spinal procedure</li>
              <li>• Want a high quality floor and are willing to pay a premium for it</li>
              <li>• Want a treatment (like proton therapy) not widely available elsewhere</li>
              <li>• Value English-language care and strict regulation</li>
              <li>• Can absorb a long flight and a high-cost-city stay</li>
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="font-bold text-amber-900 mb-3">Probably not the best fit if you:</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>• Want the absolute cheapest dental, cosmetic, or routine procedure</li>
              <li>• Are optimizing primarily on price rather than outcome variability</li>
              <li>• Need same-day or near-border access (consider Mexico)</li>
              <li>• Cannot tolerate an 18-22 hour flight for your condition</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-6">
          Candidacy for any procedure depends on your specific condition — discuss it with a qualified
          clinician before deciding where to travel.
        </p>
      </section>

      {/* How to vet */}
      <section className="bg-red-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Vet a Hospital Before You Book</h2>
          <div className="prose prose-lg max-w-none">
            <ul>
              <li><strong>Confirm accreditation directly:</strong> check current JCI status on the hospital&apos;s own site or the accrediting body — do not rely on a third-party listing.</li>
              <li><strong>Verify the specific procedure and surgeon:</strong> ask how many of your exact procedure the named surgeon performs, and request their training and credentials.</li>
              <li><strong>Get a written, itemized quote:</strong> what the package includes (surgeon, hospital stay, implants, follow-up) and what it does not — Singapore pricing is highly case-dependent.</li>
              <li><strong>Price the whole trip:</strong> Singapore is an expensive city, so add accommodation, food, transport, and a companion&apos;s costs to the procedure estimate.</li>
              <li><strong>Ask about complications and continuity:</strong> what happens if something goes wrong, what remote follow-up is provided, and how care continues once you return home.</li>
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
        <div className="bg-gradient-to-r from-red-50 to-blue-50 border border-red-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Compare Singapore Against Other Hubs</h3>
          <p className="text-gray-600 mb-6">
            Singapore is the premium end. See how it stacks up against lower-cost Asian destinations
            before you decide where to travel.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/medical-tourism" className="inline-block rounded-lg bg-red-600 px-6 py-3 font-medium text-white hover:bg-red-700">
              Medical Tourism Hub
            </Link>
            <Link href="/destinations/thailand" className="inline-block rounded-lg border-2 border-red-600 px-6 py-3 font-medium text-red-600 hover:bg-red-50">
              Compare: Thailand
            </Link>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/india-medical-tourism-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇮🇳</span>
              <div>
                <div className="font-bold text-gray-900">India Medical Tourism Guide</div>
                <div className="text-sm text-gray-600">Lower-cost complex care: cardiac, ortho, oncology, IVF</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/thailand-medical-tourism-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇹🇭</span>
              <div>
                <div className="font-bold text-gray-900">Thailand Medical Tourism Guide</div>
                <div className="text-sm text-gray-600">Bangkok&apos;s JCI hospitals, costs, trip planning</div>
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

      {/* Shared YMYL trust + affiliate-disclosure block */}
      <MedicalDisclaimer />

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
            <li>• <a href="https://www.medicaltourismcouncil.org/medical-tourism-singapore" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Singapore Medical Tourism: Costs &amp; Comparisons (Medical Tourism Council)</a></li>
            <li>• <a href="https://www.nccs.com.sg/our-specialties/goh-cheng-liang-proton-therapy-centre" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Goh Cheng Liang Proton Therapy Centre — National Cancer Centre Singapore</a></li>
            <li>• <a href="https://www.jointcommission.org/en/what-we-offer/accreditation/health-care-settings/international/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Joint Commission International (JCI)</a></li>
            <li>• <a href="https://www.ica.gov.sg/enter-transit-depart/entering-singapore/visa_requirements" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Singapore Immigration &amp; Checkpoints Authority — Visa Requirements</a></li>
            <li>• <a href="https://www.ica.gov.sg/enter-depart/extend_short_stay" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">ICA — Seeking Extension of Visit Pass (medical)</a></li>
            <li>• <a href="https://www.rafflesmedicalgroup.com/services/hospital/about-raffles-hospital/about-us/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Raffles Hospital — About Us (JCI-accredited since 2008, 35 specialties)</a></li>
            <li>• <a href="https://www.aseanbriefing.com/news/singapores-medical-tourism-industry-growth-opportunities-and-future-trends/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">ASEAN Briefing — Singapore Medical Tourism (~646,000 patients / ~US$270M, 2024)</a></li>
            <li>• <a href="https://www.ihhhealthcare.com/newsroom/care-in-action/stamp-of-excellence" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">IHH Healthcare — JCI Gold Seal (Mount Elizabeth, Gleneagles, Parkway East)</a></li>
            <li>• <a href="https://www.mountelizabeth.com.sg/proton-therapy-singapore-au.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Mount Elizabeth Proton Therapy Centre (100+ patients, 16 countries)</a></li>
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Considering Treatment in Singapore?"
          description="Get our medical-tourism checklist: accreditation verification, the questions to ask before you book, and how to price the whole trip — not just the procedure."
          source="guide_singapore_medical_tourism"
        />
      </div>

      </SidebarShell>
      <Footer />
    </main>
  );
}
