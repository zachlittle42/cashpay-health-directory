import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Argentina Medical Tourism Cost: Buenos Aires Guide' },
  alternates: { canonical: 'https://vitalityscout.com/guides/argentina-medical-tourism-guide' },
  description: 'Argentina medical tourism cost: cosmetic surgery & dental prices in Buenos Aires vs the US, JCI-accredited hospitals, entry rules & how to vet a clinic.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// stated on this page. Every price answer ends with the verify-with-provider
// hedge, consistent with the medical disclaimer. The visible FAQ block below
// mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does medical tourism in Argentina cost compared to the US?',
    answer:
      'Cost-comparison sources commonly cite cosmetic surgery in Argentina at roughly $2,000-$10,000 depending on the procedure, dental implants at about $500-$1,000 per tooth, and an IVF cycle at roughly $4,000-$7,000 — with many procedures described as 40-70% cheaper than US prices. Argentine clinics often quote in US dollars and prefer USD cash. These are estimates that vary by surgeon, clinic, implant choice, and case complexity, so confirm a written, itemized quote with the provider before you travel.',
  },
  {
    question: 'What is Argentina best known for in medical tourism?',
    answer:
      'Argentina is most established for cosmetic and reconstructive surgery and for dental work, with a long-standing plastic-surgery culture centered in Buenos Aires. It is also used for fertility (IVF), bariatric surgery, and is described as active in regenerative medicine. The value proposition is high surgeon skill at a fraction of US cash prices rather than the high-acuity cardiac and oncology focus of some Asian hubs. The right destination depends on your specific procedure — discuss candidacy with a qualified clinician.',
  },
  {
    question: 'Are hospitals in Buenos Aires accredited and safe for international patients?',
    answer:
      'Several Buenos Aires hospitals hold Joint Commission International (JCI) accreditation — the same international gold standard used to vet hospitals worldwide. Hospital Italiano de Buenos Aires has been JCI-accredited as an academic hospital across four cycles (2015, 2018, 2021, 2024); Hospital Alemán was first accredited in 2019 with re-accreditations in 2022 and 2025; and Hospital Universitario Austral (Pilar) was the first hospital in Argentina to earn JCI academic-center accreditation. Verify a specific facility’s current accreditation before booking. This is information, not medical advice.',
  },
  {
    question: 'Do US citizens need a visa to travel to Argentina for treatment?',
    answer:
      'US citizens generally do not need a visa for tourism stays of up to 90 days; you enter on a valid US passport (recommended to be valid for the length of your stay, with a blank page for stamps). There is no dedicated medical visa for short stays. Separately, Argentina has moved to require foreign visitors to carry travel health insurance with private-medical, evacuation, and repatriation coverage. Visa and entry rules change — confirm current requirements with the official Argentine foreign-ministry portal and the US State Department before you travel.',
  },
  {
    question: 'How long should I plan to stay in Argentina for a cosmetic or dental procedure?',
    answer:
      'It depends on the procedure. A dental consult plus same-trip implant placement or veneers may need a short stay, while staged implant work can require a second visit months later. A major cosmetic surgery such as a tummy tuck or breast procedure typically needs roughly 1-2 weeks in-country for the operation, suture removal, and a post-op clearance before the ~11+ hour flight home. The 90-day visa-free window gives ample room. Always confirm the expected timeline and fitness-to-fly date with your surgeon before booking return flights.',
  },
  {
    question: 'Will my US health insurance cover treatment in Argentina?',
    answer:
      'Most US health plans do not cover elective treatment abroad, which is why Argentina’s self-pay (cash) pricing is the relevant comparison for most travelers — and why clinics there frequently quote in US dollars. Separate travel medical insurance that covers complications is widely recommended, and Argentina has moved toward requiring visitors to hold health coverage. Confirm coverage details with both your insurer and the clinic’s international-patient office before you commit.',
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

export default function ArgentinaMedicalTourismGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Argentina Medical Tourism Cost: Buenos Aires Guide',
    description:
      'A practical guide to medical tourism in Argentina — cosmetic surgery and dental costs in Buenos Aires versus the US, JCI-accredited hospitals, the 90-day entry rule, and how to vet a clinic.',
    url: 'https://vitalityscout.com/guides/argentina-medical-tourism-guide',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/argentina-medical-tourism-guide#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalProcedure',
      name: 'Cosmetic surgery and dental treatment abroad',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'Hospital Italiano de Buenos Aires — Accreditations & Recognitions (JCI Academic Hospital)', url: 'https://www.hospitalitaliano.org.ar/hiba/es/acreditaciones-reconocimientos' },
      { '@type': 'CreativeWork', name: 'Hospital Alemán — Joint Commission International accreditation', url: 'https://www.hospitalaleman.org.ar/nuestro-hospital/institucional/joint-commission-international/' },
      { '@type': 'CreativeWork', name: 'Hospital Universitario Austral — Joint Commission accreditation', url: 'https://www.hospitalaustral.edu.ar/quienes-somos/acreditaciones/joint-commission/' },
      { '@type': 'CreativeWork', name: 'Joint Commission International (JCI)', url: 'https://www.jointcommission.org/en/what-we-offer/accreditation/health-care-settings/international/' },
      { '@type': 'CreativeWork', name: 'Argentina — Medical Tourism Association destination profile', url: 'https://www.medicaltourism.com/destinations/argentina' },
      { '@type': 'CreativeWork', name: 'Plastic Surgery Prices in Argentina (Sublimis)', url: 'https://www.sublimis.com/medical-tourism-argentina/plastic-surgery-prices.html' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/argentina-medical-tourism-guide#faq', url: 'https://vitalityscout.com/guides/argentina-medical-tourism-guide' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <SidebarShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-sky-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/medical-tourism" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Medical Tourism Hub
          </Link>

          <div className="mb-4 flex items-center gap-3">
            <span className="text-4xl">🇦🇷</span>
            <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">
              Destination Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Argentina Medical Tourism Cost: The Buenos Aires Guide
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Argentina is a cosmetic-surgery and dental-value destination, anchored by Buenos Aires.
            Here is what those procedures actually cost versus the US, how to find a JCI-accredited
            hospital, the entry rules, and how to vet a clinic before you book.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-sky-500 bg-sky-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              Medical tourism in Argentina is built on <strong>cosmetic surgery and dental work</strong>,
              centered in Buenos Aires. Cost-comparison sources put cosmetic procedures around{' '}
              <strong>$2,000-$10,000</strong> and dental implants near <strong>$500-$1,000 per tooth</strong>,
              roughly <strong>40-70% below US prices</strong>. Care concentrates in JCI-accredited
              hospitals — Hospital Italiano, Hospital Alemán, and Hospital Universitario Austral. US
              travelers enter visa-free for up to 90 days. Verify all pricing and accreditation directly
              with the clinic. This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">Last reviewed: June 2026 • 13 min read</p>
        </div>
      </section>

      {/* Medical / Regulatory Disclaimer */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-red-900 mb-3">Read This First</h3>
          <p className="text-sm text-red-800 mb-3">
            <strong>Quality varies between clinics.</strong> The standard advice is to use accredited
            facilities and board-certified surgeons. Confirm a hospital&apos;s current{' '}
            <a href="https://www.jointcommission.org/en/what-we-offer/accreditation/health-care-settings/international/" target="_blank" rel="noopener noreferrer nofollow" className="underline">
              JCI
            </a>{' '}
            accreditation and your surgeon&apos;s board certification directly — accreditation status and
            credentials can change.
          </p>
          <p className="text-sm text-red-800">
            This guide is for informational purposes only and is not medical advice. Outcomes depend on
            your condition, the surgeon, and the facility. Discuss candidacy and risks with a qualified
            clinician before pursuing any treatment abroad.
          </p>
        </div>
      </section>

      {/* At a Glance */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-sky-50 border border-sky-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-sky-900 mb-3">Argentina at a Glance</h2>
          <ul className="text-sm text-gray-700 space-y-1 mb-0">
            <li>✓ <strong>Strongest for:</strong> cosmetic / plastic surgery, dental, fertility (IVF)</li>
            <li>✓ <strong>40-70% savings</strong> vs US prices on many procedures (estimates)</li>
            <li>✓ <strong>Accreditation to look for:</strong> JCI (international gold standard)</li>
            <li>✓ <strong>Main hubs:</strong> Buenos Aires (primary), Córdoba, Mendoza</li>
            <li>✓ <strong>Pricing:</strong> often quoted in US dollars; USD cash commonly preferred</li>
            <li>✓ <strong>Entry:</strong> US citizens visa-free up to 90 days on a valid passport</li>
            <li>✓ <strong>Flight time:</strong> ~11+ hours nonstop from the US East Coast</li>
          </ul>
        </div>
      </section>

      {/* Why Argentina */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why People Travel to Argentina for Care</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Argentina&apos;s medical-tourism reputation is built on <strong>aesthetics and
              dentistry</strong>, not high-acuity surgery. Buenos Aires has a deep, long-standing
              plastic-surgery culture and a dense supply of cosmetic surgeons and modern dental clinics.
              Medical-tourism profiles consistently describe the country as known for cosmetic and
              reconstructive surgery, dental work, fertility care, and bariatric procedures, with prices
              materially below those in the US.
            </p>
            <p>
              The draw is a specific combination: cash prices commonly 40-70% under US figures, surgeons
              who frequently trained in the US or Europe, a favorable exchange environment for
              dollar-holders, and a genuinely appealing destination for the recovery window. The
              trade-off is the long flight from North America, a Spanish-first setting outside the
              international-patient departments, and a clinic-quality range that makes accreditation and
              surgeon vetting non-negotiable.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Comparison Table — Cosmetic */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Cosmetic Surgery Cost: US vs Argentina (Estimates)</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Procedure</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">US Price</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-green-700">Argentina Price</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Est. Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Breast Augmentation</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$6,000 - $12,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~$4,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~40-65%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Rhinoplasty</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$7,000 - $12,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~$3,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~55-75%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Liposuction</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$6,000 - $12,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~$3,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~50-70%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Tummy Tuck (Abdominoplasty)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$8,000 - $15,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~$4,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~50-70%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Facelift</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$8,000 - $15,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~$4,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~50-70%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Argentina figures are single-procedure estimates compiled from a Buenos Aires cosmetic-surgery
          price list and medical-tourism cost-comparison sources; US ranges are typical self-pay
          averages. Prices vary by surgeon, technique, anesthesia, facility, and case complexity, and
          quoted prices may exclude follow-up or revisions. Always request a written, itemized quote
          before you travel.
        </p>
      </section>

      {/* Cost Comparison Table — Dental */}
      <section className="mx-auto max-w-6xl px-4 py-12 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Dental Cost: US vs Argentina (Estimates)</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-white">
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Procedure</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">US Price</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-green-700">Argentina Price</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Est. Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Single Dental Implant</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$3,000 - $5,000</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$500 - $1,000</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~70-80%</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Porcelain Crown</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$1,000 - $1,800</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~$550</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~50-70%</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Dental Veneer (per tooth)</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$1,000 - $2,500</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~$550</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~55-75%</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">All-on-4 (per arch)</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$20,000 - $26,000</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">from ~$7,500</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~60-70%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Dental estimates are compiled from medical-tourism cost-comparison sources and vary by clinic,
            implant brand, lab work, and the number of teeth. Staged implant work may require a second
            trip months later. Argentine clinics commonly quote in US dollars and prefer USD cash —
            confirm a written quote and the payment method before you commit.
          </p>
        </div>
      </section>

      {/* JCI-Accredited Hospitals */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">JCI-Accredited Hospitals in Buenos Aires</h2>
        <p className="text-gray-600 mb-8 text-sm">
          These three Buenos Aires-area institutions hold Joint Commission International (JCI)
          accreditation and run international-patient services. Inclusion here is informational, not an
          endorsement — many cosmetic and dental procedures are performed at independent surgical clinics
          rather than these hospitals, so verify a specific facility&apos;s current accreditation and
          confirm it performs your exact procedure before booking.
        </p>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Hospital Italiano de Buenos Aires</h3>
              <span className="bg-sky-100 text-sky-700 text-xs px-2 py-1 rounded">JCI (Academic)</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              A large academic teaching hospital that has held JCI accreditation as an academic hospital
              across four consecutive cycles (2015, 2018, 2021, 2024), and reports additional
              international recognitions including HIMSS Level 7. It operates a dedicated
              international-patient department that coordinates care from first contact.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-700">Profile:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Academic / teaching hospital</li>
                  <li>• Multispecialty</li>
                  <li>• International-patient dept.</li>
                  <li>• Buenos Aires (city + San Justo)</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-700">Accreditation:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• JCI academic hospital</li>
                  <li>• 4 cycles (2015-2024)</li>
                  <li>• HIMSS Level 7</li>
                  <li>• Verify current status</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-blue-600 mt-3 mb-0">
              <a href="https://www.hospitalitaliano.org.ar/hiba/sitio/pacientesinternacionales" target="_blank" rel="noopener noreferrer nofollow">hospitalitaliano.org.ar</a>
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Hospital Alemán</h3>
              <span className="bg-sky-100 text-sky-700 text-xs px-2 py-1 rounded">JCI</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              A private general hospital in the city of Buenos Aires that, per its own published record,
              obtained its first JCI accreditation in 2019, re-accredited in 2022, and achieved a third
              consecutive accreditation in 2025 — placing it in a small group of JCI-accredited
              institutions in Argentina.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-700">Profile:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Private general hospital</li>
                  <li>• Multispecialty</li>
                  <li>• Buenos Aires (city)</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-700">Accreditation:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• JCI since 2019</li>
                  <li>• Re-accredited 2022, 2025</li>
                  <li>• Verify current status</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-blue-600 mt-3 mb-0">
              <a href="https://www.hospitalaleman.org.ar/nuestro-hospital/institucional/joint-commission-international/" target="_blank" rel="noopener noreferrer nofollow">hospitalaleman.org.ar</a>
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Hospital Universitario Austral</h3>
              <span className="bg-sky-100 text-sky-700 text-xs px-2 py-1 rounded">JCI (Academic)</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              A university hospital in Pilar, in greater Buenos Aires, which states it was the first
              hospital in Argentina — and among the first worldwide — to earn JCI accreditation in the
              Academic Medical Center category, with its initial audit in 2013 and subsequent reaudits.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-700">Profile:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• University hospital</li>
                  <li>• Multispecialty</li>
                  <li>• Pilar, Buenos Aires Prov.</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-700">Accreditation:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• JCI academic center</li>
                  <li>• First in Argentina (2013)</li>
                  <li>• Verify current status</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-blue-600 mt-3 mb-0">
              <a href="https://www.hospitalaustral.edu.ar/quienes-somos/acreditaciones/joint-commission/" target="_blank" rel="noopener noreferrer nofollow">hospitalaustral.edu.ar</a>
            </p>
          </div>
        </div>
      </section>

      {/* Accreditation explainer */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding the Accreditation</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">JCI (Joint Commission International)</h3>
              <p className="text-sm text-gray-700 mb-0">
                A US-based body that accredits hospitals worldwide to an international gold standard. JCI
                accreditation signals that a facility meets globally recognized patient-safety and
                quality benchmarks, and must be renewed on a multi-year cycle. A handful of Buenos Aires
                hospitals hold it. Confirm a hospital&apos;s current status directly — accreditation can
                lapse between cycles.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Surgeon board certification</h3>
              <p className="text-sm text-gray-700 mb-0">
                For cosmetic and dental work — often done outside the big hospitals — the surgeon&apos;s
                credentials matter as much as the building. Ask whether your surgeon is board-certified in
                their specialty (in Argentina, plastic surgeons are commonly certified through the
                national plastic-surgery society), how often they perform your exact procedure, and where
                they trained. Skill level is frequently described as comparable to the US and Canada, but
                verify the individual, not the average.
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
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Entry &amp; Documents</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Visa:</strong> US citizens enter visa-free for tourism up to 90 days</li>
              <li><strong>Passport:</strong> valid, with a blank page for entry stamps</li>
              <li><strong>No medical visa:</strong> for short cosmetic/dental stays you travel as a tourist</li>
              <li><strong>Insurance:</strong> Argentina has moved to require visitor health coverage — confirm current rules</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Getting There &amp; Around</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Flight time:</strong> ~11+ hours nonstop from the US East Coast</li>
              <li><strong>Main airport:</strong> Buenos Aires Ezeiza International (EZE)</li>
              <li><strong>Domestic:</strong> Aeroparque (AEP) connects to Córdoba and Mendoza</li>
              <li><strong>Transfers:</strong> many clinics arrange airport pickup for international patients</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Money &amp; Payment</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Currency:</strong> Argentine peso (ARS); clinics often quote in USD</li>
              <li><strong>Cash:</strong> USD cash is commonly the preferred payment method</li>
              <li><strong>Cards:</strong> accepted at many clinics; confirm before relying on them</li>
              <li><strong>Quotes:</strong> get a written, itemized package quote in writing</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Language &amp; Communication</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Spanish:</strong> the official language across the country</li>
              <li><strong>English:</strong> often understood in medical-tourism and hospital settings</li>
              <li><strong>Coordinators:</strong> the big hospitals run international-patient teams</li>
              <li><strong>Stay reachable:</strong> keep your coordinator&apos;s contact (often WhatsApp) handy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Top Cities */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Go: Main Medical Hubs</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">Buenos Aires</h3>
              <p className="text-sm text-gray-600 mb-3">
                The primary hub — and the reason most travelers come. A dense supply of cosmetic surgeons,
                dental clinics, and the JCI-accredited hospitals, plus a world-class city for the recovery
                window. Most international-patient infrastructure is here.
              </p>
              <div className="text-sm text-green-600 font-semibold">Best for: cosmetic, dental, fertility</div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">Córdoba</h3>
              <p className="text-sm text-gray-600 mb-3">
                Argentina&apos;s second city and a university and medical center in the country&apos;s
                interior, cited alongside Buenos Aires and Mendoza as a destination with quality
                facilities. A smaller-scale option than the capital.
              </p>
              <div className="text-sm text-green-600 font-semibold">Best for: general, dental</div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">Mendoza</h3>
              <p className="text-sm text-gray-600 mb-3">
                The wine-country city in the west, also named among Argentina&apos;s medical hubs. Some
                travelers pair a lower-acuity procedure with a recovery stay in the Andes foothills;
                confirm the local clinic&apos;s accreditation as you would anywhere.
              </p>
              <div className="text-sm text-green-600 font-semibold">Best for: general, recovery setting</div>
            </div>
          </div>
        </div>
      </section>

      {/* How to vet */}
      <section className="bg-sky-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Vet a Clinic Before You Book</h2>
          <div className="prose prose-lg max-w-none">
            <ul>
              <li><strong>Confirm accreditation and the surgeon directly:</strong> check current JCI status (for hospitals) on the facility&apos;s own site, and verify your surgeon&apos;s board certification and specialty — do not rely on a third-party listing.</li>
              <li><strong>Verify the specific procedure and volume:</strong> ask how many of your exact procedure the named surgeon performs, and request before/after context and credentials in writing.</li>
              <li><strong>Get a written, itemized quote in USD:</strong> what the price includes (surgeon, anesthesia, facility, implants, follow-up) and what it does not — including revisions.</li>
              <li><strong>Plan the timeline and fitness-to-fly date:</strong> for surgery, build in suture removal and a post-op clearance before an ~11+ hour flight; for staged implants, plan a possible second trip.</li>
              <li><strong>Buy travel medical insurance</strong> that covers complications (and note Argentina&apos;s move toward requiring visitor coverage), and keep your US physician in the loop before and after.</li>
            </ul>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 not-prose my-6">
              <p className="text-sm text-yellow-800 mb-0">
                <strong>Red flag:</strong> any clinic that guarantees a result, pressures a deposit before
                you have a written quote and credential confirmation, or cannot connect you with the
                operating surgeon. Legitimate clinics set realistic expectations and discuss risks.
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
        <div className="bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Compare Medical-Tourism Destinations</h3>
          <p className="text-gray-600 mb-6">
            Argentina is one of several value destinations for cosmetic and dental care. Compare it
            against the other major hubs before you decide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/medical-tourism" className="inline-block rounded-lg bg-sky-600 px-6 py-3 font-medium text-white hover:bg-sky-700">
              Medical Tourism Hub
            </Link>
            <Link href="/guides/medical-travel-insurance-guide" className="inline-block rounded-lg border-2 border-sky-600 px-6 py-3 font-medium text-sky-600 hover:bg-sky-50">
              Medical Travel Insurance Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/brazil-plastic-surgery-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇧🇷</span>
              <div>
                <div className="font-bold text-gray-900">Brazil Plastic Surgery Cost</div>
                <div className="text-sm text-gray-600">BBL, lipo &amp; tummy tuck prices vs the US</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/colombia-plastic-surgery-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇨🇴</span>
              <div>
                <div className="font-bold text-gray-900">Colombia Plastic Surgery Cost</div>
                <div className="text-sm text-gray-600">Medellín &amp; Bogotá cosmetic prices vs the US</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/costa-rica-cosmetic-surgery-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇨🇷</span>
              <div>
                <div className="font-bold text-gray-900">Costa Rica Cosmetic Surgery Cost</div>
                <div className="text-sm text-gray-600">Procedure-by-procedure prices and how to vet a clinic</div>
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
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-gray-100 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-2">Medical &amp; Travel Disclaimer</h3>
          <p className="text-sm text-gray-600">
            This guide is for informational purposes only and does not constitute medical advice. Pricing
            figures are estimates compiled from public cost-comparison sources and vary by clinic,
            surgeon, and case; confirm current pricing and accreditation directly with each provider.
            Visa and travel requirements change — verify with official government sources. Always consult
            qualified healthcare professionals before pursuing any treatment. VitalityScout does not
            endorse any specific hospital or clinic and does not guarantee treatment outcomes.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="mx-auto max-w-4xl px-4 pb-8">
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <a href="https://www.hospitalitaliano.org.ar/hiba/es/acreditaciones-reconocimientos" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Hospital Italiano de Buenos Aires — Accreditations &amp; Recognitions (JCI Academic Hospital)</a></li>
            <li>• <a href="https://www.hospitalaleman.org.ar/nuestro-hospital/institucional/joint-commission-international/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Hospital Alemán — Joint Commission International accreditation (2019 / 2022 / 2025)</a></li>
            <li>• <a href="https://www.hospitalaustral.edu.ar/quienes-somos/acreditaciones/joint-commission/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Hospital Universitario Austral — Joint Commission accreditation (Academic Medical Center)</a></li>
            <li>• <a href="https://www.jointcommission.org/en/what-we-offer/accreditation/health-care-settings/international/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Joint Commission International (JCI)</a></li>
            <li>• <a href="https://www.medicaltourism.com/destinations/argentina" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Argentina — Medical Tourism Association destination profile</a></li>
            <li>• <a href="https://www.sublimis.com/medical-tourism-argentina/plastic-surgery-prices.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Plastic Surgery Prices in Argentina (Sublimis)</a></li>
            <li>• <a href="https://www.123.clinic/en/clinic-search/dental-implant/argentina" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Dental Implant in Argentina — Cost &amp; Clinics (123.clinic)</a></li>
            <li>• <a href="https://cancilleria.gob.ar/en/services/visa/tourist-visa" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Argentina Ministry of Foreign Affairs — Tourist Visa information</a></li>
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Planning a Procedure in Argentina?"
          description="Get our medical-tourism checklist: accreditation verification, the questions to ask before you book, and trip-planning steps."
          source="guide_argentina_medical_tourism"
        />
      </div>

      </SidebarShell>
      <Footer />
    </main>
  );
}
