import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Philippines Medical Tourism Cost: Dental & Cosmetic Guide' },
  alternates: { canonical: 'https://vitalityscout.com/guides/philippines-medical-tourism-guide' },
  description: 'Philippines medical tourism cost guide: dental & cosmetic prices vs the US, English-speaking JCI hospitals (St. Luke’s, MakatiMed) and how to vet a clinic.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// stated on this page. Every price answer ends with the verify-with-provider
// hedge, consistent with the medical disclaimer. The visible FAQ block below
// mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does medical tourism in the Philippines cost compared to the US?',
    answer:
      'Cosmetic and dental procedures in the Philippines are commonly quoted at roughly 40-80% below US self-pay prices. Surgeon-published comparisons put breast augmentation around $2,500-$4,350 versus $6,000-$8,000 in the US, and rhinoplasty in the low four figures versus several thousand dollars. A single dental implant runs roughly ₱50,000-₱150,000 (about $860-$2,590 at recent exchange rates) versus $3,000-$6,000 in the US. These are estimates that vary by surgeon, clinic, and case complexity — confirm a written, itemized quote with the provider before you travel.',
  },
  {
    question: 'Do doctors and hospital staff in the Philippines speak English?',
    answer:
      'Yes. English is an official language of the Philippines and is widely used in clinical settings — most physicians, nurses, and international-patient coordinators at major private hospitals speak it fluently. Many Filipino doctors and nurses trained or worked in the US, Canada, or the UK. The shared language is one of the main reasons US patients choose the Philippines over other Asian destinations, but you should still confirm that your specific surgeon communicates directly with you. This is information, not medical advice.',
  },
  {
    question: 'Which hospitals in the Philippines are JCI-accredited?',
    answer:
      'Joint Commission International (JCI) accredits a short list of Philippine hospitals. St. Luke’s Medical Center–Quezon City was the first in the country (and second in Asia) to earn JCI accreditation, in 2003; St. Luke’s Global City (BGC), Makati Medical Center, Asian Hospital and Medical Center, The Medical City, The Medical City Clark, and MyHealth Clinic have also held JCI accreditation. Accreditation must be renewed, so verify a specific hospital’s current status on the JCI directory or the hospital’s own site before booking.',
  },
  {
    question: 'What procedures is the Philippines best known for in medical tourism?',
    answer:
      'The Philippines is most established for cosmetic surgery and dentistry. Cosmetic surgery is the single largest segment of its medical-tourism revenue, with rhinoplasty, breast augmentation, liposuction, and facelifts among the most-requested procedures. Dental work — implants, veneers, crowns, and full-arch restorations like All-on-4 — is the other major draw because of the large price gap versus the US. Orthopedic and fertility care are growing. The right provider depends on your specific case — discuss candidacy with a qualified clinician.',
  },
  {
    question: 'How long should I plan to stay in the Philippines for treatment?',
    answer:
      'It depends on the procedure. A set of veneers or a single implant placement may need only a short trip, though implants often require a healing period and a second visit for the final crown. Cosmetic surgery such as rhinoplasty or breast augmentation typically needs 1-2 weeks on the ground for the procedure, initial recovery, and a follow-up before a long flight home. The flight from the US is roughly 15-20 hours with connections. Always confirm the expected timeline and a fitness-to-fly date with your surgeon before booking return travel.',
  },
  {
    question: 'Will my US health insurance cover treatment in the Philippines?',
    answer:
      'Most US health plans do not cover elective treatment abroad, which is why the Philippines’ cash-pay pricing is the relevant comparison for most travelers. Separate travel medical insurance that covers complications is widely recommended, and some procedures (for example, a medically necessary scan or treatment) may be HSA/FSA-eligible — keep itemized receipts. Confirm coverage details with both your insurer and the hospital’s international-patient office before you commit.',
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

export default function PhilippinesMedicalTourismGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Philippines Medical Tourism Cost: Dental & Cosmetic Guide',
    description:
      'A practical guide to medical tourism in the Philippines — dental and cosmetic costs versus the US, English-speaking JCI-accredited hospitals, travel logistics, and how to vet a clinic.',
    url: 'https://vitalityscout.com/guides/philippines-medical-tourism-guide',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/philippines-medical-tourism-guide#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalProcedure',
      name: 'Dental and cosmetic treatment abroad',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'St. Luke’s Medical Center — first JCI-accredited hospital in the Philippines + GHA accreditation', url: 'https://www.stlukes.com.ph/news-and-events/news-and-press-release/st-lukes-medical-center-elevating-global-healthcare-standards' },
      { '@type': 'CreativeWork', name: 'St. Luke’s Medical Center–Quezon City — JCI reaccreditation', url: 'https://www.stlukes.com.ph/news-and-events/news-and-press-release/st-lukes-medical-center-quezon-city-strengthens-legacy-of-excellence-with-jci-reaccreditation' },
      { '@type': 'CreativeWork', name: 'MakatiMed and Asian Hospital earn JCI Accreditation (Metro Pacific Health, 2025)', url: 'https://www.metropacifichealth.com/news/article/makatimed-and-asian-hospital-earn-jci-accreditation-raising-the-bar-for-filipino-healthcare' },
      { '@type': 'CreativeWork', name: 'MakatiMed earns Philippines’ first JCI 8th Edition Accreditation (BusinessMirror)', url: 'https://businessmirror.com.ph/2025/03/27/makatimed-earns-philippines-first-jci-8th-edition-accreditation-2/' },
      { '@type': 'CreativeWork', name: 'Joint Commission International — find accredited international organizations', url: 'https://www.jointcommission.org/en/about-us/recognizing-excellence/find-accredited-international-organizations' },
      { '@type': 'CreativeWork', name: 'Cosmetic Surgery Philippines vs USA price comparison (Dr. Carlos Lasa)', url: 'https://cosmeticsurgeryphil.com/faq/prices/compare-philippines-vs-usa' },
      { '@type': 'CreativeWork', name: 'Dental Implant Cost Philippines 2026 (ClinicFinderPH)', url: 'https://www.clinicfinderph.com/blog/dental-implant-cost-philippines' },
      { '@type': 'CreativeWork', name: 'Philippines Medical Tourism Market (IMARC Group)', url: 'https://www.imarcgroup.com/philippines-medical-tourism-market' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/philippines-medical-tourism-guide#faq', url: 'https://vitalityscout.com/guides/philippines-medical-tourism-guide' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <SidebarShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/medical-tourism" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Medical Tourism Hub
          </Link>

          <div className="mb-4 flex items-center gap-3">
            <span className="text-4xl">🇵🇭</span>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              Destination Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Philippines Medical Tourism Cost: Dental &amp; Cosmetic Guide
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            The Philippines pairs an English-speaking medical workforce with cash prices well below the
            US on dentistry and cosmetic surgery. Here is what those procedures actually cost, which
            hospitals carry international accreditation, and how to vet a clinic before you fly.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              Medical tourism in the Philippines typically costs <strong>40-80% less</strong> than the
              US on its two signature categories — <strong>dentistry and cosmetic surgery</strong>.
              Breast augmentation is often quoted around <strong>$2,500-$4,350</strong> vs{' '}
              <strong>$6,000-$8,000</strong>, and a dental implant roughly{' '}
              <strong>$860-$2,590</strong> vs <strong>$3,000-$6,000</strong>. Care concentrates in
              English-speaking, JCI-accredited hospitals (St. Luke&apos;s, Makati Medical Center, Asian
              Hospital, The Medical City) in Metro Manila and Cebu. Verify all pricing and accreditation
              directly with the provider. This is information, not medical advice.
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
            <strong>Quality varies between facilities.</strong> The reliable signal is international
            accreditation: confirm a hospital&apos;s current{' '}
            <a href="https://www.jointcommission.org/en/about-us/recognizing-excellence/find-accredited-international-organizations" target="_blank" rel="noopener noreferrer nofollow" className="underline">
              Joint Commission International (JCI)
            </a>{' '}
            status, and for surgeons, that they are board-certified by the{' '}
            <span className="font-semibold">Philippine Association of Plastic, Reconstructive and Aesthetic Surgeons (PAPRAS)</span>{' '}
            or the relevant dental board. Accreditation and credentials can change — verify directly.
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
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-blue-900 mb-3">The Philippines at a Glance</h2>
          <ul className="text-sm text-gray-700 space-y-1 mb-0">
            <li>✓ <strong>~$1.7B medical-tourism market in 2025</strong> (industry estimate), growing at a double-digit rate</li>
            <li>✓ <strong>40-80% savings</strong> vs US prices on dental and cosmetic procedures (estimates)</li>
            <li>✓ <strong>Strongest for:</strong> cosmetic surgery (the largest revenue segment) and dentistry</li>
            <li>✓ <strong>Accreditation to look for:</strong> JCI (international) + GHA + local board certification</li>
            <li>✓ <strong>English</strong> is an official language and is used throughout clinical care — minimal language barrier</li>
            <li>✓ <strong>Flight time:</strong> ~15-20 hours from the US (with connections)</li>
            <li>✓ <strong>Main hubs:</strong> Metro Manila (Makati, BGC, Quezon City) and Cebu</li>
          </ul>
        </div>
      </section>

      {/* Why the Philippines */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why People Travel to the Philippines for Care</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              The Philippines built its medical-tourism reputation on two strengths that matter to US
              patients in particular: <strong>price and language</strong>. Cash prices for dentistry and
              cosmetic surgery run a fraction of US self-pay rates, and because English is an official
              language used in clinical settings, you can usually speak directly with your surgeon and
              read your own consent forms — a real difference from destinations where care runs through
              an interpreter.
            </p>
            <p>
              The talent pool reinforces the draw. The Philippines is one of the world&apos;s largest
              exporters of nurses, and many Filipino physicians and dentists trained or practiced in the
              US, Canada, or the UK before returning home. Cosmetic surgery is the single largest segment
              of the country&apos;s medical-tourism revenue, with rhinoplasty, breast augmentation,
              liposuction, and facelifts the most-requested procedures; dentistry is the other pillar.
              The trade-offs are the long flight, the need to vet individual surgeons rather than rely on
              a national reputation, and a quality range that makes accreditation non-negotiable.
            </p>
          </div>
        </div>
      </section>

      {/* Dental Cost Comparison Table */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Dental Cost Comparison: US vs Philippines (Estimates)</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Procedure</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">US Price</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-green-700">Philippines Price</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Est. Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Single Dental Implant</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$3,000 - $6,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~$860 - $2,590</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~50-75%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Porcelain Crown</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$1,000 - $2,500</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~$260 - $780</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~65-75%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Porcelain Veneer (per tooth)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$900 - $2,500</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~$350 - $620</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~60-75%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">All-on-4 (full arch)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$20,000 - $26,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~$7,000 - $14,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~50-65%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Philippine dental prices are commonly quoted in pesos — a single implant runs roughly
          ₱50,000-₱150,000 and All-on-4 roughly ₱400,000-₱800,000 (clinic-published 2026 figures). USD
          figures above use an approximate ₱56-58/$1 exchange rate and are estimates only; the final
          price depends on implant brand (Korean vs Swiss/German), the clinic, and case complexity.
          Always request a written, itemized quote.
        </p>
      </section>

      {/* Cosmetic Cost Comparison Table */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Cosmetic Surgery Cost Comparison: US vs Philippines (Estimates)</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Procedure</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">US Price</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-green-700">Philippines Price</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Est. Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Breast Augmentation</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$6,000 - $8,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$2,500 - $4,350</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~45-60%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Rhinoplasty</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$3,000 - $6,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$400 - $1,500</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~70-85%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Face &amp; Neck Lift</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">~$5,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~$2,500</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~50%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Liposuction (first area)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$2,500 - $4,500</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~$800</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~70-80%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Cosmetic figures are drawn from a Manila surgeon&apos;s published Philippines-vs-US comparison
          and vary by surgeon, technique, implant, and facility. Quotes may or may not include
          anesthesia, the surgical facility, and post-op care — ask exactly what is bundled. These are
          estimates to verify; request a written quote and confirm the surgeon&apos;s board
          certification before booking.
        </p>
      </section>

      {/* Top Cities */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Go: Major Medical Hubs</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">Makati (Metro Manila)</h3>
              <p className="text-sm text-gray-600 mb-3">
                The country&apos;s financial district and home to Makati Medical Center, with a dense
                cluster of cosmetic-surgery practices and high-end dental clinics. Walkable, hotel-rich,
                and built for international visitors — the most convenient base for a treatment trip.
              </p>
              <div className="text-sm text-green-600 font-semibold">Best for: cosmetic surgery, dentistry, general care</div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">BGC / Taguig &amp; Quezon City</h3>
              <p className="text-sm text-gray-600 mb-3">
                Bonifacio Global City (BGC) hosts St. Luke&apos;s Medical Center–Global City, while
                the original St. Luke&apos;s flagship sits in Quezon City. Both are JCI-accredited with
                dedicated international-patient services and full multispecialty capability.
              </p>
              <div className="text-sm text-green-600 font-semibold">Best for: surgery, complex care, oncology</div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">Cebu</h3>
              <p className="text-sm text-gray-600 mb-3">
                The Visayas hub combines hospitals and dental clinics with beach-resort recovery on
                nearby islands. Often chosen by patients who want to fold dental work or a smaller
                procedure into a vacation, with a quieter pace than Manila.
              </p>
              <div className="text-sm text-green-600 font-semibold">Best for: dentistry, cosmetic, recovery + travel</div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">Alabang / Muntinlupa (Metro Manila south)</h3>
              <p className="text-sm text-gray-600 mb-3">
                Home to Asian Hospital and Medical Center, a JCI-accredited facility in the southern
                metro. A calmer, suburban alternative to central Makati with full hospital-grade
                capability and international-patient coordination.
              </p>
              <div className="text-sm text-green-600 font-semibold">Best for: surgery, multispecialty care</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leading Accredited Hospitals */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Leading Accredited Hospitals</h2>
        <p className="text-gray-600 mb-8 text-sm">
          These are large, established hospitals that have held JCI accreditation and run dedicated
          international-patient services. Inclusion here is informational, not an endorsement — verify a
          specific hospital&apos;s current accreditation and confirm that it (or an affiliated surgeon)
          performs your exact procedure before booking. Many cosmetic and dental procedures are done in
          accredited day-surgery centers or specialty clinics rather than these tertiary hospitals.
        </p>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">St. Luke&apos;s Medical Center</h3>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">JCI &amp; GHA</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              St. Luke&apos;s–Quezon City was the first hospital in the Philippines (and the second
              in Asia) to earn JCI accreditation, in 2003, and the country&apos;s first JCI-designated
              Academic Medical Center. Its Global City (BGC) campus is also JCI-accredited, and the
              network is the first and only Philippine hospital to hold Global Healthcare Accreditation
              (GHA), with a 95% medical-travel-program score. The Department of Tourism has recognized it
              as the country&apos;s leading medical-tourism facility.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-700">Often used for:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Complex surgery</li>
                  <li>• Oncology</li>
                  <li>• Cardiology</li>
                  <li>• Multispecialty care</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-700">Campuses:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Quezon City (flagship)</li>
                  <li>• Global City / BGC, Taguig</li>
                  <li>• Ermita extension clinic, Manila</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-blue-600 mt-3 mb-0">
              <a href="https://www.stlukes.com.ph" target="_blank" rel="noopener noreferrer nofollow">stlukes.com.ph</a>
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Makati Medical Center</h3>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">JCI</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              A leading tertiary hospital in the heart of Makati&apos;s central business district,
              MakatiMed has earned JCI accreditation and was reported as the first Philippine hospital
              accredited under JCI&apos;s 8th-Edition standards. It offers a broad range of specialties
              and an international-patient program, and its Makati location makes it convenient for
              travelers.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-700">Often used for:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Cardiology</li>
                  <li>• Oncology</li>
                  <li>• Neurosciences</li>
                  <li>• General surgery</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-700">Hub:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Makati CBD, Metro Manila</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-blue-600 mt-3 mb-0">
              <a href="https://www.makatimed.net.ph" target="_blank" rel="noopener noreferrer nofollow">makatimed.net.ph</a>
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Asian Hospital and Medical Center</h3>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">JCI</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              A tertiary hospital in Alabang in the southern metro, Asian Hospital earned JCI
              accreditation (announced alongside MakatiMed in 2025). It provides multispecialty care with
              international-patient coordination in a calmer, suburban setting than central Makati.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-700">Often used for:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• General &amp; specialty surgery</li>
                  <li>• Cardiology</li>
                  <li>• Oncology</li>
                  <li>• Orthopedics</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-700">Hub:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Alabang, Muntinlupa</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-blue-600 mt-3 mb-0">
              <a href="https://www.asianhospital.com" target="_blank" rel="noopener noreferrer nofollow">asianhospital.com</a>
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">The Medical City</h3>
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">JCI</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              A large hospital network with a JCI-accredited flagship in Pasig (Ortigas) and a campus in
              Clark, north of Manila. The Medical City signed a public-private partnership with the
              Department of Tourism to develop the Philippines as a medical-tourism destination, and runs
              a structured international-patient program.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-700">Often used for:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Multispecialty care</li>
                  <li>• Oncology</li>
                  <li>• Cardiology</li>
                  <li>• Surgery</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-700">Campuses:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Pasig / Ortigas (flagship)</li>
                  <li>• Clark, Pampanga</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-blue-600 mt-3 mb-0">
              <a href="https://www.themedicalcity.com" target="_blank" rel="noopener noreferrer nofollow">themedicalcity.com</a>
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
                A US-based body that accredits hospitals worldwide to an international gold standard. JCI
                accreditation signals that a facility meets globally recognized patient-safety and
                quality benchmarks. A handful of Philippine hospitals hold it, and St. Luke&apos;s–QC
                was the country&apos;s first, in 2003. Confirm a hospital&apos;s current status directly —
                accreditation must be renewed.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">GHA &amp; surgeon board certification</h3>
              <p className="text-sm text-gray-700 mb-0">
                Global Healthcare Accreditation (GHA) specifically evaluates a hospital&apos;s
                medical-travel program; St. Luke&apos;s is the first Philippine hospital to earn it. For
                cosmetic surgery and dentistry, the facility&apos;s accreditation matters less than the
                individual provider — verify your surgeon is board-certified (e.g., PAPRAS for plastic
                surgery) and your dentist is properly licensed.
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
              <li><strong>US citizens:</strong> generally enter visa-free for tourism for up to 30 days</li>
              <li><strong>Extensions:</strong> available through the Bureau of Immigration if recovery runs long</li>
              <li><strong>Passport:</strong> typically must be valid at least 6 months beyond entry</li>
              <li><strong>Verify:</strong> confirm current rules with the official Philippine government / embassy before travel</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Getting There &amp; Around</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Flight time:</strong> ~15-20 hours from the US with connections</li>
              <li><strong>Major airports:</strong> Manila (MNL), Cebu (CEB), Clark (CRK)</li>
              <li><strong>Transfers:</strong> many hospitals/clinics arrange airport pickup for international patients</li>
              <li><strong>Traffic:</strong> Metro Manila traffic is heavy — stay near your provider</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Money &amp; Payment</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Currency:</strong> Philippine Peso (PHP); USD exchanged easily</li>
              <li><strong>Cards:</strong> accepted at major hospitals and clinics; some clinics prefer cash for discounts</li>
              <li><strong>Packages:</strong> many cosmetic and dental clinics quote bundled package pricing</li>
              <li><strong>Insurance:</strong> separate travel medical insurance with complications cover is recommended</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Language &amp; Communication</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>English:</strong> an official language, used throughout clinical care</li>
              <li><strong>Direct contact:</strong> you can usually speak to your surgeon without an interpreter</li>
              <li><strong>Coordinators:</strong> international-patient teams at the major hospitals</li>
              <li><strong>Stay reachable:</strong> keep your coordinator&apos;s contact handy for follow-up</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How to vet */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Vet a Clinic Before You Book</h2>
          <div className="prose prose-lg max-w-none">
            <ul>
              <li><strong>Verify the surgeon, not just the clinic:</strong> for cosmetic surgery, confirm board certification (e.g., PAPRAS) and ask how many of your exact procedure the named surgeon performs each year. For dentistry, confirm the dentist&apos;s license and implant-system training.</li>
              <li><strong>Confirm where surgery happens:</strong> ask whether your procedure is done in an accredited hospital or day-surgery facility, who provides anesthesia, and what the emergency plan is.</li>
              <li><strong>Get a written, itemized quote:</strong> what the package includes (surgeon, facility, anesthesia, implants, follow-up) and what it does not — implant brand alone can move a dental quote by thousands.</li>
              <li><strong>Ask about complications and aftercare:</strong> what happens if something goes wrong, what revision policy applies, and how care continues once you return home.</li>
              <li><strong>Buy travel medical insurance</strong> that covers complications, and keep your US physician or dentist in the loop before and after.</li>
            </ul>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 not-prose my-6">
              <p className="text-sm text-yellow-800 mb-0">
                <strong>Red flag:</strong> any clinic that guarantees a result, pressures a deposit before
                you have a written quote and credential confirmation, quotes a price that seems far below
                the market, or cannot connect you with the operating surgeon. Legitimate providers set
                realistic expectations and discuss risks.
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Compare Medical-Tourism Destinations</h3>
          <p className="text-gray-600 mb-6">
            See how the Philippines stacks up against other major hubs for dental and cosmetic care, then
            plan your trip.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/medical-tourism" className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
              Medical Tourism Hub
            </Link>
            <Link href="/guides/thailand-medical-tourism-guide" className="inline-block rounded-lg border-2 border-blue-600 px-6 py-3 font-medium text-blue-600 hover:bg-blue-50">
              Compare: Thailand Guide
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
                <div className="text-sm text-gray-600">Cardiac, ortho &amp; IVF costs, JCI/NABH hospitals</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/thailand-cosmetic-surgery-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💲</span>
              <div>
                <div className="font-bold text-gray-900">Thailand Cosmetic Surgery Cost</div>
                <div className="text-sm text-gray-600">Rhinoplasty, breast, lipo prices vs the US</div>
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
            figures are estimates compiled from public cost sources and clinic-published rates and vary
            by surgeon, clinic, implant/material, and case; USD conversions use an approximate exchange
            rate and may be out of date. Confirm current pricing, accreditation, and provider credentials
            directly with each provider. Visa and travel requirements change — verify with official
            government sources. Always consult qualified healthcare professionals before pursuing any
            treatment. VitalityScout does not endorse any specific hospital or guarantee treatment
            outcomes.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="mx-auto max-w-4xl px-4 pb-8">
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <a href="https://www.stlukes.com.ph/news-and-events/news-and-press-release/st-lukes-medical-center-elevating-global-healthcare-standards" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">St. Luke&apos;s Medical Center — first JCI-accredited hospital in the Philippines + GHA accreditation</a></li>
            <li>• <a href="https://www.stlukes.com.ph/news-and-events/news-and-press-release/st-lukes-medical-center-quezon-city-strengthens-legacy-of-excellence-with-jci-reaccreditation" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">St. Luke&apos;s–Quezon City — JCI reaccreditation (first in PH, 2003)</a></li>
            <li>• <a href="https://www.metropacifichealth.com/news/article/makatimed-and-asian-hospital-earn-jci-accreditation-raising-the-bar-for-filipino-healthcare" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">MakatiMed and Asian Hospital earn JCI Accreditation (Metro Pacific Health, 2025)</a></li>
            <li>• <a href="https://businessmirror.com.ph/2025/03/27/makatimed-earns-philippines-first-jci-8th-edition-accreditation-2/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">MakatiMed earns Philippines&apos; first JCI 8th Edition Accreditation (BusinessMirror)</a></li>
            <li>• <a href="https://www.jointcommission.org/en/about-us/recognizing-excellence/find-accredited-international-organizations" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Joint Commission International — find accredited international organizations</a></li>
            <li>• <a href="https://cosmeticsurgeryphil.com/faq/prices/compare-philippines-vs-usa" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Cosmetic Surgery Philippines vs USA price comparison (Dr. Carlos Lasa)</a></li>
            <li>• <a href="https://www.clinicfinderph.com/blog/dental-implant-cost-philippines" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Dental Implant Cost Philippines 2026 (ClinicFinderPH)</a></li>
            <li>• <a href="https://www.imarcgroup.com/philippines-medical-tourism-market" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Philippines Medical Tourism Market size &amp; English-speaking workforce (IMARC Group)</a></li>
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Planning Treatment in the Philippines?"
          description="Get our medical-tourism checklist: accreditation verification, the questions to ask before you book, and trip-planning steps."
          source="guide_philippines_medical_tourism"
        />
      </div>

      </SidebarShell>
      <Footer />
    </main>
  );
}
