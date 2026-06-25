import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Vietnam Medical Tourism Cost: Dental & Cosmetic Guide' },
  alternates: { canonical: 'https://vitalityscout.com/guides/vietnam-medical-tourism-guide' },
  description:
    'Vietnam medical tourism costs: dental implants, veneers & cosmetic surgery vs the US, JCI hospitals (FV, Vinmec), the 90-day e-visa & vetting clinics.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// stated on this page. Every price answer ends with the verify-with-provider
// hedge, consistent with the medical disclaimer. The visible FAQ block below
// mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does dental work in Vietnam cost compared to the US?',
    answer:
      'Clinic price lists in Ho Chi Minh City commonly quote a single dental implant at roughly $700-$1,450 versus about $3,000-$6,000 in the US, porcelain crowns around $115-$570, and veneers around $250-$400 per tooth versus several times that in the US. A full-arch All-on-4 is often quoted near $3,900-$7,500 versus roughly $18,000-$38,000 per arch in the US. These are estimates that vary by clinic, implant brand, and case — confirm a written, itemized quote with the clinic before you travel.',
  },
  {
    question: 'Are hospitals and dental clinics in Vietnam safe for international patients?',
    answer:
      'Quality varies widely, so the standard advice is to use internationally accredited facilities. FV Hospital in Ho Chi Minh City was the first hospital in southern Vietnam to earn Joint Commission International (JCI) accreditation (2016), and Vinmec Central Park (Ho Chi Minh City) and Vinmec Times City (Hanoi) are JCI-accredited as well. Vietnam has no JCI accreditation for standalone dental clinics, so for dental work you vet the individual clinic, the dentist’s credentials, and the implant brand directly. This is information, not medical advice.',
  },
  {
    question: 'What visa do US citizens need for medical treatment in Vietnam?',
    answer:
      'US citizens need a visa to enter Vietnam and are eligible for the official 90-day e-visa, issued online for single or multiple entry (recently fee-listed around $25 single / $50 multiple, payable online). Most medical travelers enter on this e-visa or a tourist visa; hospitals accept patients on a tourist visa and you can extend if recovery requires it. Your passport must be valid at least six months beyond your exit date with two blank pages. Visa rules change — confirm current requirements on Vietnam’s official e-visa portal.',
  },
  {
    question: 'Which procedures is Vietnam best known for in medical tourism?',
    answer:
      'Vietnam’s strongest value is in dental work (implants, crowns, veneers, All-on-4) and cosmetic surgery (rhinoplasty and facial procedures), concentrated in Ho Chi Minh City. Its JCI-accredited hospitals (FV, Vinmec) also handle general and specialist care. Vietnam is an emerging destination rather than an established complex-surgery hub like India or Thailand, so it is most popular for high-value dental and aesthetic cases where savings are largest. The right choice depends on your specific case — discuss candidacy with a qualified clinician.',
  },
  {
    question: 'How long should I plan to stay in Vietnam for dental treatment?',
    answer:
      'It depends on the work. Simple treatment can be done in a few days, but implants usually need two trips months apart (placement, then osseointegration before the final crown), while a full veneer case or All-on-4 with same-trip temporaries can take one to two weeks. The 90-day e-visa gives ample room. Confirm the exact treatment timeline and how many visits your case needs with the clinic before booking flights, and ask how follow-up is handled once you return home.',
  },
  {
    question: 'Will my US health insurance cover treatment in Vietnam?',
    answer:
      'Most US health and dental plans do not cover elective treatment abroad, which is why Vietnam’s cash (self-pay) pricing is the relevant comparison for most travelers. Separate travel medical insurance that covers complications is widely recommended, especially for surgical procedures. Confirm coverage details with both your insurer and the clinic or hospital’s international-patient office before you commit.',
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

export default function VietnamMedicalTourismGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Vietnam Medical Tourism Cost: Dental & Cosmetic Guide',
    description:
      'A practical guide to medical tourism in Vietnam — dental implant, veneer, and cosmetic-surgery costs versus the US, JCI-accredited hospitals (FV, Vinmec), the 90-day e-visa, and how to vet a clinic.',
    url: 'https://vitalityscout.com/guides/vietnam-medical-tourism-guide',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/vietnam-medical-tourism-guide#faq' },
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
      { '@type': 'CreativeWork', name: 'FV Hospital — fourth consecutive JCI accreditation (first in southern Vietnam, 2016)', url: 'https://www.fvhospital.com/en/news/fv-hospital-achieves-fourth-consecutive-jci-accreditation-reaffirming-commitment-to-international-standard-care-at-only-50-of-the-cost-compared-to-leading-hospitals-in-the-region/' },
      { '@type': 'CreativeWork', name: 'Vinmec Central Park — JCI accreditation', url: 'https://www.vinmec.com/eng/blog/vinmec-central-park-hospital-achieves-global-jci-accreditation' },
      { '@type': 'CreativeWork', name: 'Vinmec Times City — JCI accreditation (4th, 2025; Academic Medical Center)', url: 'https://www.vinmec.com/eng/blog/vinmec-times-city-achieves-jci-certification-for-the-fourth-time' },
      { '@type': 'CreativeWork', name: 'Saigon White Dental Clinic — Ho Chi Minh City price list', url: 'https://saigonwhitedental.com/en/dental-tourism-vietnam/dental-services-price-list/' },
      { '@type': 'CreativeWork', name: 'Vietnam National Electronic Visa portal (official)', url: 'https://evisa.gov.vn/' },
      { '@type': 'CreativeWork', name: 'Vietnam medical tourism market — VietnamPlus (Ministry of Health strategy 2025-2030)', url: 'https://en.vietnamplus.vn/vietnams-medical-tourism-services-eye-nearly-4-billion-usd-in-revenue-by-2033-post340470.vnp' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/vietnam-medical-tourism-guide#faq', url: 'https://vitalityscout.com/guides/vietnam-medical-tourism-guide' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-red-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/medical-tourism" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Medical Tourism Hub
          </Link>

          <div className="mb-4 flex items-center gap-3">
            <span className="text-4xl">🇻🇳</span>
            <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
              Destination Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Vietnam Medical Tourism Cost: Dental &amp; Cosmetic Guide
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Vietnam is an emerging medical-tourism destination whose real edge is dental and
            cosmetic value. Here is what implants, veneers, and rhinoplasty actually cost, which
            hospitals are accredited, and how to plan the trip from the US.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              Medical tourism in Vietnam centers on <strong>dental and cosmetic care</strong> at
              roughly <strong>50-80% below US prices</strong>: a single dental implant is often
              quoted around <strong>$700-$1,450</strong> vs <strong>$3,000-$6,000</strong>, veneers
              around <strong>$250-$400</strong> per tooth, and rhinoplasty around{' '}
              <strong>$1,000-$3,500</strong>. Care concentrates in Ho Chi Minh City; JCI-accredited
              hospitals include FV and Vinmec. US travelers use the 90-day e-visa. Verify all pricing
              and accreditation directly with the provider. This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">Last reviewed: June 2026 • 14 min read</p>
        </div>
      </section>

      {/* Medical / Regulatory Disclaimer */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-red-900 mb-3">Read This First</h3>
          <p className="text-sm text-red-800 mb-3">
            <strong>Vietnam is an emerging destination, and quality varies clinic to clinic.</strong>{' '}
            For hospital care, use internationally accredited facilities and confirm a hospital&apos;s
            current{' '}
            <a href="https://www.jointcommission.org/en/what-we-offer/accreditation/health-care-settings/international/" target="_blank" rel="noopener noreferrer nofollow" className="underline">
              JCI
            </a>{' '}
            status directly. There is <strong>no JCI program for standalone dental clinics</strong>,
            so for dental and cosmetic work you must vet the individual clinic, the operating
            dentist or surgeon, and the implant or device brand yourself.
          </p>
          <p className="text-sm text-red-800">
            This guide is for informational purposes only and is not medical advice. Outcomes depend
            on your condition, the clinician, and the facility. Discuss candidacy and risks with a
            qualified clinician before pursuing any treatment abroad.
          </p>
        </div>
      </section>

      {/* At a Glance */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-red-900 mb-3">Vietnam at a Glance</h2>
          <ul className="text-sm text-gray-700 space-y-1 mb-0">
            <li>✓ <strong>Emerging hub</strong> — market valued around $700M in 2024, with a national 2025-2030 strategy to add JCI hospitals (government/industry data)</li>
            <li>✓ <strong>50-80% savings</strong> vs US prices on dental and cosmetic work (estimates)</li>
            <li>✓ <strong>Strongest for:</strong> dental implants, veneers, All-on-4, rhinoplasty &amp; facial cosmetic surgery</li>
            <li>✓ <strong>Accreditation to look for:</strong> JCI (for hospitals — FV, Vinmec); for dental, vet the clinic + dentist directly</li>
            <li>✓ <strong>Main hub:</strong> Ho Chi Minh City (Saigon); also Hanoi &amp; Da Nang</li>
            <li>✓ <strong>Flight time:</strong> ~17-22 hours from the US with connections</li>
            <li>✓ <strong>Visa:</strong> 90-day e-visa (single or multiple entry), applied for online</li>
          </ul>
        </div>
      </section>

      {/* Why Vietnam */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why People Travel to Vietnam for Care</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Where India is built around cardiac and orthopedic surgery and Thailand around full
              hospital care, Vietnam&apos;s medical-tourism story is largely about{' '}
              <strong>dental and cosmetic value</strong>. Ho Chi Minh City has a dense cluster of
              international-facing dental clinics and aesthetic surgeons offering implants, veneers,
              full-arch restorations, and rhinoplasty at a fraction of US prices, with English-speaking
              coordinators geared to overseas patients.
            </p>
            <p>
              Vietnam is also still <strong>emerging</strong>, not established. Government and industry
              sources put the medical-tourism market near $700 million in 2024 and growing at a
              double-digit annual rate, with a Ministry of Health strategy for 2025-2030 to add
              JCI-accredited hospitals across five hubs (Hanoi, Ho Chi Minh City, Da Nang, Quang Ninh,
              Khanh Hoa). The practical takeaway: the upside is real savings on high-value dental and
              cosmetic cases, but accreditation depth is thinner than in older hubs, so vetting the
              specific clinic matters more, not less.
            </p>
          </div>
        </div>
      </section>

      {/* Dental Cost Comparison Table */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Dental Cost Comparison: US vs Vietnam (Estimates)</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Procedure</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">US Price</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-green-700">Vietnam Price</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Est. Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Single Dental Implant (per tooth)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$3,000 - $6,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$700 - $1,450</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~70-80%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Porcelain / Ceramic Crown</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$1,000 - $2,500</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$115 - $570</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~70-85%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Veneer (per tooth)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$1,000 - $2,500</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$250 - $400</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~70-85%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">All-on-4 (per arch)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$18,000 - $38,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$3,900 - $7,500</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~75-85%</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Root Canal</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$700 - $1,800</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$60 - $155</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~80-90%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Vietnam figures reflect Ho Chi Minh City clinic price lists (e.g., a published District 3
          clinic list); US figures are typical 2025-2026 self-pay ranges. Prices are estimates and
          vary by clinic, implant brand (e.g., Straumann, Nobel Biocare, Dentium), case complexity,
          and whether the final restoration is included. For implants, plan on two trips and budget
          flights into the total. Always request a written, itemized quote before you travel.
        </p>
      </section>

      {/* Cosmetic Cost Comparison Table */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Cosmetic Surgery Cost: US vs Vietnam (Estimates)</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Procedure</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">US Price</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-green-700">Vietnam Price</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Est. Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Rhinoplasty (nose surgery)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$6,000 - $15,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$1,000 - $3,500</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~60-80%</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Full smile (8-10 veneers)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$10,000 - $25,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$2,000 - $4,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">~75-85%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Cosmetic estimates are compiled from medical-tourism cost-comparison sources and vary
          widely by surgeon, technique, and case. Aesthetic results are inherently subjective and are
          never guaranteed; this is a price reference, not a recommendation to undergo any procedure.
          Confirm current pricing and what the quote includes (anesthesia, facility, follow-up)
          directly with the clinic.
        </p>
      </section>

      {/* Top Cities */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Go: Vietnam&apos;s Medical Hubs</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">Ho Chi Minh City (Saigon)</h3>
              <p className="text-sm text-gray-600 mb-3">
                Vietnam&apos;s commercial capital and the clear center of its medical tourism. The
                largest cluster of international-facing dental clinics and cosmetic surgeons, plus
                JCI-accredited hospitals (FV in District 7, Vinmec Central Park). Districts 1, 3, and
                7 are common bases close to the major clinics.
              </p>
              <div className="text-sm text-green-600 font-semibold">Best for: dental, veneers, All-on-4, cosmetic surgery</div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">Hanoi</h3>
              <p className="text-sm text-gray-600 mb-3">
                The capital, home to Vinmec Times City — the first general hospital in Vietnam to earn
                JCI accreditation and, in 2025, the first accredited under JCI&apos;s Academic Medical
                Center standards. A stronger base for hospital-based and specialist care than for
                dental tourism specifically.
              </p>
              <div className="text-sm text-green-600 font-semibold">Best for: hospital &amp; specialist care</div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">Da Nang</h3>
              <p className="text-sm text-gray-600 mb-3">
                A central-coast city pairing care with a beach-recovery setting. Vinmec Da Nang serves
                international patients with multilingual interpretation. Named in the government&apos;s
                2025-2030 medical-tourism strategy as one of five priority hubs.
              </p>
              <div className="text-sm text-green-600 font-semibold">Best for: general care + recovery</div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">Choosing your base</h3>
              <p className="text-sm text-gray-600 mb-3">
                For dental and cosmetic work, Ho Chi Minh City is the default — it has the deepest
                supply and the most overseas-patient experience. For accredited hospital care, both FV
                (HCMC) and the Vinmec network (HCMC and Hanoi) are the names to verify.
              </p>
              <div className="text-sm text-green-600 font-semibold">Default: Ho Chi Minh City</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leading Accredited Hospitals */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Leading JCI-Accredited Hospitals</h2>
        <p className="text-gray-600 mb-8 text-sm">
          These are Vietnam&apos;s JCI-accredited hospitals with international-patient services. JCI
          covers hospitals, not standalone dental clinics — so this section is for hospital-based and
          surgical care. Inclusion here is informational, not an endorsement; verify a facility&apos;s
          current accreditation and confirm it performs your exact procedure before booking.
        </p>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">FV Hospital</h3>
              <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded">JCI</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Opened in 2003 in District 7 of Ho Chi Minh City by a group of French physicians, FV
              (Franco-Vietnamese Hospital) was the first hospital in southern Vietnam to earn JCI
              accreditation, in 2016, and has been reaccredited repeatedly since. It runs more than 30
              specialties and a dedicated International Patient Services team.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-700">Often used for:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• General &amp; specialist surgery</li>
                  <li>• Oncology</li>
                  <li>• Maternity</li>
                  <li>• Diagnostics / imaging</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-700">Location:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• District 7, HCMC</li>
                  <li>• Phú Mỹ Hưng area</li>
                  <li>• Intl. patient team</li>
                  <li>• English-speaking staff</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-blue-600 mt-3 mb-0">
              <a href="https://www.fvhospital.com" target="_blank" rel="noopener noreferrer nofollow">fvhospital.com</a>
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Vinmec Central Park</h3>
              <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded">JCI</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              The Ho Chi Minh City flagship of the Vinmec network, JCI-accredited and a member of the
              Cleveland Clinic Connected program. Vinmec is the most widely recognized private
              hospital brand among foreigners in Vietnam and runs international-patient services with
              multilingual interpretation.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-700">Often used for:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• General &amp; specialist care</li>
                  <li>• Surgery</li>
                  <li>• Oncology</li>
                  <li>• Health screening</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-700">Location:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Binh Thanh, HCMC</li>
                  <li>• Central Park area</li>
                  <li>• Intl. patient dept</li>
                  <li>• Cleveland Clinic Connected</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-blue-600 mt-3 mb-0">
              <a href="https://www.vinmec.com/eng/" target="_blank" rel="noopener noreferrer nofollow">vinmec.com</a>
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2">Vinmec Times City</h3>
              <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded">JCI</span>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              The Hanoi flagship of Vinmec and, in 2015, the first general hospital in Vietnam to earn
              JCI accreditation. In 2025 it became the first Vietnamese hospital accredited under
              JCI&apos;s Academic Medical Center standards, which add criteria for clinical research
              and medical education.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-700">Often used for:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• General &amp; specialist care</li>
                  <li>• Complex surgery</li>
                  <li>• Oncology</li>
                  <li>• Pediatrics</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-700">Location:</strong>
                <ul className="mt-1 text-gray-600 space-y-1 mb-0">
                  <li>• Hai Bà Trưng, Hanoi</li>
                  <li>• Times City area</li>
                  <li>• Academic Medical Center</li>
                  <li>• Intl. patient services</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-blue-600 mt-3 mb-0">
              <a href="https://www.vinmec.com/eng/" target="_blank" rel="noopener noreferrer nofollow">vinmec.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* Accreditation explainer */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Understanding the Accreditation Picture</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">JCI (Joint Commission International)</h3>
              <p className="text-sm text-gray-700 mb-0">
                A US-based body that accredits hospitals worldwide to an international gold standard.
                In Vietnam, a small number of hospitals hold it — FV in Ho Chi Minh City and the
                Vinmec network in HCMC and Hanoi. The government&apos;s 2025-2030 strategy aims to add
                more. Confirm a hospital&apos;s current status directly; accreditation must be renewed.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Dental &amp; cosmetic clinics</h3>
              <p className="text-sm text-gray-700 mb-0">
                There is no JCI program for standalone dental clinics, and most of Vietnam&apos;s
                dental and cosmetic-surgery value sits in independent clinics rather than hospitals.
                That makes self-vetting essential: check the individual dentist&apos;s or
                surgeon&apos;s credentials, the implant or device brand, sterilization practices, and
                what the written quote includes — there is no accreditation badge doing this for you.
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
              <li><strong>90-day e-visa:</strong> applied for online; single or multiple entry</li>
              <li><strong>Fees (recent):</strong> around $25 single / $50 multiple entry, paid online</li>
              <li><strong>Passport:</strong> valid 6+ months past exit, 2 blank pages</li>
              <li><strong>Timing:</strong> processing typically 3-5 working days</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Getting There &amp; Around</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Flight time:</strong> ~17-22 hours from the US with connections</li>
              <li><strong>Major airports:</strong> Ho Chi Minh City (SGN), Hanoi (HAN), Da Nang (DAD)</li>
              <li><strong>Getting around:</strong> Grab (rideshare) is widely used in cities</li>
              <li><strong>Stay central:</strong> Districts 1, 3, or 7 in HCMC keep you near clinics</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Money &amp; Payment</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>Currency:</strong> Vietnamese đồng (VND); USD often accepted at major clinics</li>
              <li><strong>Cards:</strong> accepted at large clinics and hospitals; carry some cash</li>
              <li><strong>Quotes:</strong> get a written, itemized estimate (some fees may be cash-only)</li>
              <li><strong>Insurance:</strong> separate travel medical insurance with complications cover is recommended</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3">Language &amp; Communication</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li><strong>English:</strong> common in international-facing clinics and hospitals</li>
              <li><strong>Interpreters:</strong> available at major hospital international-patient departments</li>
              <li><strong>Coordinators:</strong> overseas-patient teams at the larger dental clinics</li>
              <li><strong>Stay reachable:</strong> keep your coordinator&apos;s contact (often Zalo/WhatsApp) handy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How to vet */}
      <section className="bg-red-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Vet a Vietnam Clinic Before You Book</h2>
          <div className="prose prose-lg max-w-none">
            <ul>
              <li><strong>Confirm credentials directly:</strong> for hospitals, check current JCI status; for dental and cosmetic clinics, verify the individual clinician&apos;s training and licensure — do not rely on a third-party listing.</li>
              <li><strong>Pin down the implant or device brand:</strong> ask specifically which implant system (e.g., Straumann, Nobel Biocare, Dentium) is used and request the brand in writing — quality and warranty vary widely.</li>
              <li><strong>Get a written, itemized quote:</strong> what the price includes (implant, abutment, crown, anesthesia, facility, follow-up) and what it does not, plus how many visits your case needs.</li>
              <li><strong>Plan for two trips on implants:</strong> implants usually require placement, then months of healing before the final restoration — confirm the timeline and what happens between visits.</li>
              <li><strong>Ask about complications and aftercare:</strong> what happens if something goes wrong, what remote follow-up is offered, and how care continues once you return home. Buy travel medical insurance that covers complications.</li>
            </ul>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 not-prose my-6">
              <p className="text-sm text-yellow-800 mb-0">
                <strong>Red flag:</strong> any clinic that guarantees a result, will not name the
                implant brand or the operating clinician, or pressures a deposit before you have a
                written quote and credential confirmation. Legitimate clinics set realistic
                expectations and discuss risks.
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Compare Vietnam to Other Hubs</h3>
          <p className="text-gray-600 mb-6">
            Vietnam is one option for affordable dental and cosmetic care. Compare it against the
            established hubs before you decide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/medical-tourism" className="inline-block rounded-lg bg-red-600 px-6 py-3 font-medium text-white hover:bg-red-700">
              Medical Tourism Hub
            </Link>
            <Link href="/guides/thailand-medical-tourism-guide" className="inline-block rounded-lg border-2 border-red-600 px-6 py-3 font-medium text-red-600 hover:bg-red-50">
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

          <Link href="/guides/hungary-dental-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🦷</span>
              <div>
                <div className="font-bold text-gray-900">Hungary Dental Cost</div>
                <div className="text-sm text-gray-600">Implants, All-on-4 &amp; crowns vs the US</div>
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
            This guide is for informational purposes only and does not constitute medical advice.
            Pricing figures are estimates compiled from clinic price lists and public cost-comparison
            sources and vary by clinic, surgeon, implant brand, and case; confirm current pricing and
            accreditation directly with each provider. Visa and travel requirements change — verify
            with official government sources. Always consult qualified healthcare professionals before
            pursuing any treatment. VitalityScout does not endorse any specific clinic or hospital and
            does not guarantee treatment outcomes.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="mx-auto max-w-4xl px-4 pb-8">
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <a href="https://www.fvhospital.com/en/news/fv-hospital-achieves-fourth-consecutive-jci-accreditation-reaffirming-commitment-to-international-standard-care-at-only-50-of-the-cost-compared-to-leading-hospitals-in-the-region/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">FV Hospital — fourth consecutive JCI accreditation (first in southern Vietnam, 2016; reaccredited 2019, 2022, 2025)</a></li>
            <li>• <a href="https://www.vinmec.com/eng/blog/vinmec-central-park-hospital-achieves-global-jci-accreditation" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Vinmec Central Park — JCI Accreditation</a></li>
            <li>• <a href="https://www.vinmec.com/eng/blog/vinmec-times-city-achieves-jci-certification-for-the-fourth-time" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Vinmec Times City — JCI accreditation (4th, 2025; Academic Medical Center)</a></li>
            <li>• <a href="https://saigonwhitedental.com/en/dental-tourism-vietnam/dental-services-price-list/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Saigon White Dental Clinic — Ho Chi Minh City price list (implants, crowns, veneers, All-on-4)</a></li>
            <li>• <a href="https://www.medicaltourismco.com/dental-implants-in-ho-chi-minh-city/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Dental Implants in Ho Chi Minh City — cost comparison (MedicalTourismCo)</a></li>
            <li>• <a href="https://www.medicaltourismco.com/rhinoplasty-in-vietnam/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Rhinoplasty in Vietnam — cost comparison (MedicalTourismCo)</a></li>
            <li>• <a href="https://evisa.gov.vn/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Vietnam National Electronic Visa portal (official 90-day e-visa)</a></li>
            <li>• <a href="https://vn.usembassy.gov/vietnamese-visas-and-entry-exit/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">US Embassy in Vietnam — Visas and Entry/Exit</a></li>
            <li>• <a href="https://en.vietnamplus.vn/vietnams-medical-tourism-services-eye-nearly-4-billion-usd-in-revenue-by-2033-post340470.vnp" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">VietnamPlus — Vietnam medical-tourism market &amp; Ministry of Health 2025-2030 strategy</a></li>
            <li>• <a href="https://www.jointcommission.org/en/what-we-offer/accreditation/health-care-settings/international/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Joint Commission International (JCI)</a></li>
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Planning Dental or Cosmetic Treatment in Vietnam?"
          description="Get our medical-tourism checklist: how to vet a clinic, the implant-brand questions to ask, and the trip-planning steps before you book."
          source="guide_vietnam_medical_tourism"
        />
      </div>

      <Footer />
    </main>
  );
}
