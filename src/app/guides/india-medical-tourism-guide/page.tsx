import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'India Medical Tourism: Cost, Hospitals & Safety Guide',
  description: 'India medical tourism guide: cardiac, ortho, oncology & IVF costs vs the US, JCI/NABH hospitals (Apollo, Fortis, Max), e-Medical Visa, and vetting tips.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// stated on this page. Every price answer ends with the verify-with-provider
// hedge, consistent with the medical disclaimer. The visible FAQ block below
// mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does medical treatment in India cost compared to the US?',
    answer:
      'Estimates commonly cited put heart bypass (CABG) at roughly $7,000-$15,000 in India versus $70,000-$150,000 in the US, knee replacement at about $4,000-$7,000 versus $35,000-$60,000, and an IVF cycle at roughly $3,000-$5,000 versus $15,000-$25,000. Government and industry sources describe savings of 70-90% on many procedures. These are estimates that vary by hospital, surgeon, and case complexity — confirm a written package quote with the hospital before you travel.',
  },
  {
    question: 'Are hospitals in India safe for international patients?',
    answer:
      'Quality varies widely across the country, so the standard advice is to stick to internationally and nationally accredited hospitals. Look for Joint Commission International (JCI) accreditation and NABH (India’s National Accreditation Board for Hospitals & Healthcare Providers, recognized by ISQua) accreditation. Large networks such as Apollo, Fortis, Max, Manipal, Medanta, and Narayana Health operate accredited facilities with dedicated international-patient departments. Verify a specific hospital’s current accreditation before booking. This is information, not medical advice.',
  },
  {
    question: 'What visa do US citizens need for medical treatment in India?',
    answer:
      'US citizens traveling for treatment generally apply for India’s e-Medical Visa (e-MV), which is issued online and is tied to a recognized hospital. It typically permits a stay of up to 60 days with triple entry, and an e-Medical Attendant Visa (e-MAV) is available for accompanying family. Apply 1-2 months ahead because the process requires hospital documentation. Visa rules change — confirm current requirements with the official Indian government e-Visa portal and your hospital’s international office.',
  },
  {
    question: 'Which procedures is India best known for in medical tourism?',
    answer:
      'India is most established for complex, high-value care: cardiac surgery (bypass, valve, angioplasty), orthopedics (knee and hip replacement), oncology (cancer treatment), and fertility (IVF), along with organ transplants and dental work. Cardiovascular procedures account for a large share of India’s medical-tourism volume. The right hospital depends on your specific condition — discuss candidacy with a qualified clinician.',
  },
  {
    question: 'How long should I plan to stay in India for treatment?',
    answer:
      'It depends entirely on the procedure. A straightforward dental or fertility consult may need only a short trip, while cardiac or major orthopedic surgery often requires several weeks including pre-op workup, hospital stay, and supervised recovery before a 15-20 hour flight home. The e-Medical Visa allows up to 60 days. Always confirm the expected timeline and fitness-to-fly date with your surgeon before booking return flights.',
  },
  {
    question: 'Will my US health insurance cover treatment in India?',
    answer:
      'Most US health plans do not cover elective treatment abroad, which is why India’s self-pay (cash) pricing is the relevant comparison for most travelers. Separate travel medical insurance that covers complications is widely recommended. Confirm coverage details with both your insurer and the hospital’s international-patient office before you commit.',
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

export default function IndiaMedicalTourismGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'India Medical Tourism: Cost, Hospitals & Safety Guide',
    description:
      'A practical guide to medical tourism in India — cardiac, orthopedic, oncology, and fertility costs versus the US, JCI/NABH-accredited hospitals, the e-Medical Visa, and how to vet a clinic.',
    url: 'https://vitalityscout.com/guides/india-medical-tourism-guide',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/india-medical-tourism-guide#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalProcedure',
      name: 'Cardiac, orthopedic, oncology, and fertility treatment abroad',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-23',
    dateModified: '2026-06-23',
    citation: [
      { '@type': 'CreativeWork', name: 'Apollo Hospitals — Accreditations (JCI / NABH)', url: 'https://www.apollohospitals.com/clinical-quality-and-outcomes/accreditations' },
      { '@type': 'CreativeWork', name: 'Apollo Hospital, Indraprastha — India’s first JCI-accredited hospital (2005)', url: 'https://en.wikipedia.org/wiki/Apollo_Hospital,_Indraprastha' },
      { '@type': 'CreativeWork', name: 'NABH — National Accreditation Board for Hospitals & Healthcare Providers', url: 'https://nabh.co/' },
      { '@type': 'CreativeWork', name: 'Joint Commission International (JCI)', url: 'https://www.jointcommission.org/en/what-we-offer/accreditation/health-care-settings/international/' },
      { '@type': 'CreativeWork', name: 'India e-Visa — Official Government of India portal', url: 'https://indianvisaonline.gov.in/evisa/tvoa.html' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/india-medical-tourism-guide#faq', url: 'https://vitalityscout.com/guides/india-medical-tourism-guide' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-orange-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/medical-tourism" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Medical Tourism Hub
          </Link>

          <div className="mb-4 flex items-center gap-3">
            <span className="text-4xl">🇮🇳</span>
            <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700">
              Destination Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            India Medical Tourism: Cost, Hospitals &amp; Safety Guide
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            India is one of the largest medical-tourism destinations in the world. Here is what
            cardiac, orthopedic, oncology, and fertility care actually costs, how to find an
            accredited hospital, and how to plan the trip from the US.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              Medical tourism in India can cost <strong>70-90% less</strong> than the US on many
              procedures: heart bypass is often quoted around <strong>$7,000-$15,000</strong> vs{' '}
              <strong>$70,000-$150,000</strong>, and knee replacement around{' '}
              <strong>$4,000-$7,000</strong>. Care concentrates in JCI- and NABH-accredited networks
              (Apollo, Fortis, Max, Manipal, Medanta, Narayana Health) across Delhi, Mumbai, Chennai,
              and Bangalore. US travelers use the e-Medical Visa. Verify all pricing and accreditation
              directly with the hospital. This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">Last reviewed: June 2026 • 16 min read</p>
        </div>
      </section>

      {/* Medical / Regulatory Disclaimer */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-red-900 mb-3">Read This First</h3>
          <p className="text-sm text-red-800 mb-3">
            <strong>Quality varies dramatically across India.</strong> The widely repeated advice is
            to use internationally accredited hospitals only. Confirm a hospital&apos;s current{' '}
            <a href="https://www.jointcommission.org/en/what-we-offer/accreditation/health-care-settings/international/" target="_blank" rel="noopener noreferrer nofollow" className="underline">
              JCI
            </a>{' '}
            and{' '}
            <a href="https://nabh.co/" target="_blank" rel="noopener noreferrer nofollow" className="underline">
              NABH
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
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-orange-900 mb-3">India at a Glance</h2>
          <ul className="text-sm text-gray-700 space-y-1 mb-0">
            <li>✓ <strong>600,000+ medical tourists in 2024</strong> (government data) — one of the world&apos;s top destinations</li>
            <li>✓ <strong>70-90% savings</strong> vs US prices on many procedures (estimates)</li>
            <li>✓ <strong>Strongest for:</strong> cardiac, orthopedic, oncology, fertility, transplants</li>
            <li>✓ <strong>Accreditation to look for:</strong> JCI (international) + NABH (India, ISQua-recognized)</li>
            <li>✓ <strong>English</strong> is common in major hospital settings — no language barrier</li>
            <li>✓ <strong>Flight time:</strong> ~15-20 hours from the US (with connections)</li>
            <li>✓ <strong>Visa:</strong> e-Medical Visa (e-MV), tied to a recognized hospital</li>
          </ul>
        </div>
      </section>

      {/* Why India */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why People Travel to India for Care</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              India built a medical-tourism industry around <strong>complex, high-value procedures</strong> — not
              cosmetic walk-ins. Government and industry sources describe a multi-billion-dollar sector
              growing at a double-digit annual rate, drawing patients who need cardiac surgery, joint
              replacement, cancer treatment, transplants, and fertility care at a fraction of US prices.
              Cardiovascular procedures alone make up a large share of that volume.
            </p>
            <p>
              The draw is a specific combination: very low cash prices, surgeons who frequently trained
              at US and UK institutions, the same implants and equipment used in Western facilities, and
              minimal waiting times. Because English is common in clinical settings and the large
              networks run dedicated international-patient departments, the logistics are more navigable
              than the distance suggests. The trade-off is the long flight, the cultural adjustment, and
              a quality range that makes accreditation non-negotiable.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Cost Comparison: US vs India (Estimates)</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Procedure</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">US Price</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-green-700">India Price</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Est. Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Heart Bypass (CABG)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$70,000 - $150,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$7,000 - $15,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~80-90%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Knee Replacement</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$35,000 - $60,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$4,000 - $7,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~80-90%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Hip Replacement</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$40,000 - $65,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$5,000 - $8,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~80-90%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">IVF Cycle</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$15,000 - $25,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$3,000 - $5,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~75-85%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Dental Implant (single)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$3,000 - $5,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$600 - $1,200</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~70-80%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Prices are estimates compiled from medical-tourism cost-comparison sources and vary by
          hospital, surgeon, implant choice, and case complexity. India package pricing often bundles
          surgeon fees, hospital stay, and some follow-up; US figures usually do not. Always request a
          written, itemized quote from the hospital before you travel.
        </p>
      </section>

      {/* Top Cities */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Go: Major Medical Hubs</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">Delhi / NCR</h3>
              <p className="text-sm text-gray-600 mb-3">
                The capital region concentrates flagship facilities from Max, Fortis, and Apollo. A
                major hub for cardiac and orthopedic surgery. Plan for significant traffic; staying in
                South Delhi or Gurgaon keeps you close to the big hospitals.
              </p>
              <div className="text-sm text-green-600 font-semibold">Best for: cardiac, orthopedic, neurology, oncology</div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">Mumbai</h3>
              <p className="text-sm text-gray-600 mb-3">
                India&apos;s financial capital, home to large multispecialty hospitals including
                Kokilaben Dhirubhai Ambani and Lilavati. Cosmopolitan, with well-developed tourism
                infrastructure; Bandra and South Mumbai are convenient bases.
              </p>
              <div className="text-sm text-green-600 font-semibold">Best for: cardiac, orthopedic, oncology</div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">Chennai</h3>
              <p className="text-sm text-gray-600 mb-3">
                Often called India&apos;s health capital. Home to Apollo&apos;s flagship hospital and a
                major cardiac and transplant center, with a deep ecosystem of international-patient
                coordinators. The climate is humid.
              </p>
              <div className="text-sm text-green-600 font-semibold">Best for: cardiac, transplants, orthopedic</div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">Bangalore</h3>
              <p className="text-sm text-gray-600 mb-3">
                India&apos;s tech capital, with strong hospitals including Narayana Health — founded by
                Dr. Devi Shetty and known for high-volume, affordable cardiac care. Pleasant climate
                year-round.
              </p>
              <div className="text-sm text-green-600 font-semibold">Best for: cardiac, orthopedic, IVF</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leading Hospital Networks */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Leading Accredited Hospital Networks</h2>
        <p className="text-gray-600 mb-8 text-sm">
          These are large, established networks that operate accredited facilities and dedicated
          international-patient services. Inclusion here is informational, not an endorsement — verify a
          specific hospital&apos;s current accreditation and confirm that it performs your exact
          procedure before booking.
        </p>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Apollo Hospitals</h3>
              <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded">JCI &amp; NABH</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              One of India&apos;s largest private hospital networks, with dozens of owned and managed
              facilities. Indraprastha Apollo in Delhi was India&apos;s first JCI-accredited hospital,
              and the Chennai flagship is a major cardiac and transplant center. Apollo runs
              international-patient services including interpreters and dietary accommodation.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-700">Often used for:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Cardiac surgery</li>
                  <li>• Organ transplants</li>
                  <li>• Oncology</li>
                  <li>• Robotic procedures</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-700">Hubs:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Chennai (flagship)</li>
                  <li>• Delhi (Indraprastha)</li>
                  <li>• Hyderabad, Bangalore</li>
                  <li>• Navi Mumbai, Kolkata</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-blue-600 mt-3 mb-0">
              <a href="https://www.apollohospitals.com" target="_blank" rel="noopener noreferrer nofollow">apollohospitals.com</a>
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Fortis Healthcare</h3>
              <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded">JCI &amp; NABH</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              A large multispecialty network. Its quaternary-care Fortis Memorial Research Institute in
              Gurgaon (opened 2013, ~330 beds) is built for complex, high-risk cases, while other Fortis
              hospitals have long track records in cardiac care and organ transplants.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-700">Often used for:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Cardiac surgery</li>
                  <li>• Oncology</li>
                  <li>• Neurosciences</li>
                  <li>• Organ transplants</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-700">Hubs:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Gurgaon (FMRI)</li>
                  <li>• Delhi NCR</li>
                  <li>• Mumbai</li>
                  <li>• Bangalore, Chennai</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-blue-600 mt-3 mb-0">
              <a href="https://www.fortishealthcare.com" target="_blank" rel="noopener noreferrer nofollow">fortishealthcare.com</a>
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Max Healthcare</h3>
              <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded">NABH</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              A leading North-India network of roughly 20+ hospitals concentrated around Delhi NCR, with
              30+ specialties and thousands of clinicians. Strong in cardiac, orthopedic, and oncology
              care, with package pricing available for international patients.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-700">Often used for:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Cardiac surgery</li>
                  <li>• Orthopedics</li>
                  <li>• Oncology</li>
                  <li>• Fertility / IVF</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-700">Hubs:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Delhi NCR</li>
                  <li>• Haryana, Punjab</li>
                  <li>• Uttarakhand</li>
                  <li>• Maharashtra</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-blue-600 mt-3 mb-0">
              <a href="https://www.maxhealthcare.in" target="_blank" rel="noopener noreferrer nofollow">maxhealthcare.in</a>
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Narayana Health</h3>
              <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded">NABH</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Founded in Bangalore in 2001 by cardiac surgeon Dr. Devi Shetty, Narayana built its
              reputation on high-volume, affordable cardiac care using a cross-subsidy model. A common
              choice for heart surgery on a tighter budget.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-700">Often used for:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Cardiac surgery</li>
                  <li>• Pediatric cardiac</li>
                  <li>• Orthopedics</li>
                  <li>• Oncology</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-700">Hubs:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Bangalore</li>
                  <li>• Kolkata</li>
                  <li>• Multiple cities</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-blue-600 mt-3 mb-0">
              <a href="https://www.narayanahealth.org" target="_blank" rel="noopener noreferrer nofollow">narayanahealth.org</a>
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
                quality benchmarks. Several Indian hospitals were among the first in the country to earn
                it. Confirm a hospital&apos;s current status directly — accreditation must be renewed.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">NABH (India&apos;s national standard)</h3>
              <p className="text-sm text-gray-700 mb-0">
                The National Accreditation Board for Hospitals &amp; Healthcare Providers, formed in
                2005, is India&apos;s apex hospital-accreditation authority and is recognized by ISQua,
                the international quality body. Hospitals are assessed on 600+ parameters. Look for both
                JCI and NABH where possible.
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
              <li><strong>e-Medical Visa (e-MV):</strong> applied for online, tied to a recognized hospital</li>
              <li><strong>Stay:</strong> typically up to 60 days, triple entry</li>
              <li><strong>Attendants:</strong> e-Medical Attendant Visa (e-MAV) for accompanying family</li>
              <li><strong>Timing:</strong> apply 1-2 months ahead; you need hospital documentation</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Getting There &amp; Around</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Flight time:</strong> ~15-20 hours from the US with connections</li>
              <li><strong>Major airports:</strong> Delhi (DEL), Mumbai (BOM), Chennai (MAA), Bangalore (BLR)</li>
              <li><strong>Transfers:</strong> many hospitals arrange airport pickup for international patients</li>
              <li><strong>Traffic:</strong> can be heavy — stay near your hospital where possible</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Money &amp; Payment</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Currency:</strong> Indian Rupee (INR); USD accepted at major hospitals</li>
              <li><strong>Cards:</strong> widely accepted at large facilities</li>
              <li><strong>Packages:</strong> many hospitals quote bundled package pricing</li>
              <li><strong>Insurance:</strong> separate travel medical insurance with complications cover is recommended</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Language &amp; Communication</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>English:</strong> common in major hospital and clinical settings</li>
              <li><strong>Interpreters:</strong> available at large international-patient departments</li>
              <li><strong>Coordinators:</strong> dedicated international-patient teams at the big networks</li>
              <li><strong>Stay reachable:</strong> keep your coordinator&apos;s contact (often WhatsApp) handy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How to vet */}
      <section className="bg-orange-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Vet a Hospital Before You Book</h2>
          <div className="prose prose-lg max-w-none">
            <ul>
              <li><strong>Confirm accreditation directly:</strong> check current JCI and/or NABH status on the hospital&apos;s own site or the accrediting body — do not rely on a third-party listing.</li>
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
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 border border-orange-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Explore India &amp; Compare Destinations</h3>
          <p className="text-gray-600 mb-6">
            See the full India destination profile, then compare against other major medical-tourism hubs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/destinations/india" className="inline-block rounded-lg bg-orange-600 px-6 py-3 font-medium text-white hover:bg-orange-700">
              India Destination Guide
            </Link>
            <Link href="/medical-tourism" className="inline-block rounded-lg border-2 border-orange-600 px-6 py-3 font-medium text-orange-600 hover:bg-orange-50">
              Medical Tourism Hub
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

          <Link href="/guides/mexico-medical-tourism-planner" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇲🇽</span>
              <div>
                <div className="font-bold text-gray-900">Mexico Medical Tourism Planner</div>
                <div className="text-sm text-gray-600">Border crossing, destinations, trip timeline</div>
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
            <li>• <a href="https://www.apollohospitals.com/clinical-quality-and-outcomes/accreditations" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Apollo Hospitals — Accreditations (JCI / NABH)</a></li>
            <li>• <a href="https://en.wikipedia.org/wiki/Apollo_Hospital,_Indraprastha" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Apollo Hospital, Indraprastha — India&apos;s first JCI-accredited hospital (2005)</a></li>
            <li>• <a href="https://nabh.co/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">NABH — National Accreditation Board for Hospitals &amp; Healthcare Providers</a></li>
            <li>• <a href="https://www.jointcommission.org/en/what-we-offer/accreditation/health-care-settings/international/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Joint Commission International (JCI)</a></li>
            <li>• <a href="https://indianvisaonline.gov.in/evisa/tvoa.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">India e-Visa — Official Government of India portal</a></li>
            <li>• <a href="https://www.fortishealthcare.com/location/fortis-memorial-research-institute-gurgaon" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Fortis Memorial Research Institute, Gurgaon</a></li>
            <li>• <a href="https://www.maxhealthcare.in/about-us" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Max Healthcare — About Us</a></li>
            <li>• <a href="https://www.narayanahealth.org/c/bangalore/cardiac-surgery-adult/dr-devi-prasad-shetty" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Narayana Health — Dr. Devi Prasad Shetty, Bangalore</a></li>
            <li>• <a href="https://ddnews.gov.in/en/over-6-4-lakh-foreign-tourists-visited-india-for-medical-treatment-in-2024/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Ministry of Tourism / Bureau of Immigration — 6.44 lakh medical tourists in 2024</a></li>
            <li>• <a href="https://karetrip.com/blogs/india-medical-tourism-cost-comparison" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">India Medical Tourism Cost Comparison (Karetrip)</a></li>
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Planning Treatment in India?"
          description="Get our medical-tourism checklist: accreditation verification, the questions to ask before you book, and trip-planning steps."
          source="guide_india_medical_tourism"
        />
      </div>

      <Footer />
    </main>
  );
}
