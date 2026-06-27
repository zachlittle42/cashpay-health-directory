import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Poland Medical Tourism: Dental Cost & Safety Guide' },
  alternates: { canonical: 'https://vitalityscout.com/guides/poland-medical-tourism-guide' },
  description: 'Poland medical tourism cost guide: dental implants, veneers & cosmetic surgery vs the US/UK, EU patient protections, Krakow/Warsaw clinics, and vetting.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// stated on this page. Every price answer ends with the verify-with-provider
// hedge, consistent with the medical disclaimer. The visible FAQ block below
// mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does dental work in Poland cost compared to the US and UK?',
    answer:
      'Estimates commonly cited put a single dental implant at roughly €600-€1,300 in Poland versus about $3,000-$5,000+ in the US and £2,000-£3,000 for an implant with crown in the UK. Porcelain crowns are often quoted around €250-€450 and porcelain veneers around €280-€500 per tooth in Poland. Industry sources describe savings of about 50-70% versus Western Europe and more versus US cash prices. These are estimates that vary by clinic, materials, and case complexity — confirm a written, itemized quote with the clinic before you travel.',
  },
  {
    question: 'Is dental and cosmetic care in Poland safe for international patients?',
    answer:
      'Poland is an EU member state, so clinics operate under EU medical-device rules and Polish dentists are licensed and regulated through the Chamber of Physicians and Dentists (Naczelna Izba Lekarska). The widely repeated advice is still to choose an established clinic with an international-patient department, ask about quality systems such as ISO 9001 certification, and verify the treating dentist or surgeon directly. Quality varies between clinics, so accreditation and credential checks remain essential. This is information, not medical advice.',
  },
  {
    question: 'Which Polish city is best for dental tourism — Krakow, Warsaw, or Wroclaw?',
    answer:
      'Krakow is the most popular base for international dental patients, pairing a dense cluster of established clinics with a compact, walkable historic center and a nearby international airport. Warsaw has the widest range of specialists and the largest cosmetic-surgery clinics, though treatment and hotels tend to run a little higher. Wroclaw is a quieter, lower-cost alternative also known for dental work. The right city depends on your procedure, budget, and travel preference — compare specific clinic quotes, not just the city.',
  },
  {
    question: 'What does an all-inclusive dental package in Poland usually include?',
    answer:
      'Many Polish dental-tourism clinics quote bundled packages that can include the consultation and imaging (such as a CT/CBCT scan), the treatment itself, airport transfers, and sometimes hotel nights. What is bundled varies a lot between clinics, and complex cases such as implants typically require two trips (placement, then the final crown after healing). Always get a written, itemized quote that states exactly what is and is not included, plus the guarantee terms, before you commit.',
  },
  {
    question: 'Will my US or UK insurance reimburse treatment in Poland?',
    answer:
      'Most US health plans do not cover elective treatment abroad, so Poland’s self-pay (cash) pricing is the relevant comparison for US travelers. For EU/EEA patients, the EU Cross-Border Healthcare Directive (2011/24/EU) can allow partial reimbursement of planned care received in Poland, subject to your home system’s rules and any prior-authorization requirements — check with your National Contact Point first. Separate travel medical insurance that covers complications is widely recommended. Confirm coverage with both your insurer and the clinic.',
  },
  {
    question: 'How long should I plan to stay in Poland for dental treatment?',
    answer:
      'It depends on the procedure. A check-up, whitening, or a single crown may be completed in one short trip, while implants usually need two visits a few months apart — one to place the implant and one to fit the permanent crown after the bone heals. Full-mouth or cosmetic-surgery cases need more time on the ground for recovery before flying. Confirm the exact number of visits and the expected timeline with your clinic before booking flights.',
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

export default function PolandMedicalTourismGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Poland Medical Tourism: Dental & Cosmetic Cost & Safety Guide',
    description:
      'A practical guide to medical tourism in Poland — dental implant, veneer, crown, and cosmetic-surgery costs versus the US and UK, EU patient protections, clinics in Krakow, Warsaw, and Wroclaw, and how to vet a clinic.',
    url: 'https://vitalityscout.com/guides/poland-medical-tourism-guide',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/poland-medical-tourism-guide#faq' },
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
      { '@type': 'CreativeWork', name: 'Dental Implants in Poland — Costs (Dentaly)', url: 'https://www.dentaly.org/en/dental-implants-abroad/dental-implants-poland/' },
      { '@type': 'CreativeWork', name: 'Dental Tourism in Poland — Costs & Clinics (OpusSmile)', url: 'https://opussmile.com/dental-tourism/dental-tourism-in-poland-costs-clinics-and-is-it-worth-it-for-uk-patients/' },
      { '@type': 'CreativeWork', name: 'Cosmetic Surgery in Poland (Medical Tourism Co.)', url: 'https://www.medicaltourismco.com/cosmetic-surgery-in-poland/' },
      { '@type': 'CreativeWork', name: 'Directive 2011/24/EU on patients’ rights in cross-border healthcare', url: 'https://eur-lex.europa.eu/eli/dir/2011/24/oj/eng' },
      { '@type': 'CreativeWork', name: 'Chamber of Physicians and Dentists (Naczelna Izba Lekarska)', url: 'https://nil.org.pl/dzialalnosc/centrum-uznawania-kwalifikacji/zaswiadczenia-wydawane-przez-nrl/dentists' },
      { '@type': 'CreativeWork', name: 'INDEXMEDICA Dental Clinic, Krakow — ISO 9001 certified', url: 'https://www.indexmedica.com/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/poland-medical-tourism-guide#faq', url: 'https://vitalityscout.com/guides/poland-medical-tourism-guide' };

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
            <span className="text-4xl">🇵🇱</span>
            <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
              Destination Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Poland Medical Tourism: Dental &amp; Cosmetic Cost Guide
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Poland has become one of Europe&apos;s most-used dental and cosmetic destinations for US
            and UK patients. Here is what implants, veneers, crowns, and cosmetic surgery actually
            cost, why EU membership matters, and how to vet a clinic in Krakow, Warsaw, or Wroclaw.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              Dental tourism in Poland typically costs <strong>50-70% less</strong> than the UK and
              more versus US cash prices: a single implant is often quoted around{' '}
              <strong>€600-€1,300</strong> versus <strong>$3,000-$5,000+</strong> in the US, porcelain
              crowns around <strong>€250-€450</strong>, and veneers around <strong>€280-€500</strong>.
              Care concentrates in Krakow, Warsaw, and Wroclaw clinics. As an EU member, Poland adds
              EU medical-device rules and the Cross-Border Healthcare Directive. Verify all pricing and
              credentials directly with the clinic. This is information, not medical advice.
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
            <strong>Quality varies between clinics, even inside the EU.</strong> The standard advice is
            to use an established clinic with a dedicated international-patient service and verifiable
            credentials. Poland is an{' '}
            <a href="https://eur-lex.europa.eu/eli/dir/2011/24/oj/eng" target="_blank" rel="noopener noreferrer nofollow" className="underline">
              EU member state
            </a>{' '}
            and dentists are regulated through the{' '}
            <a href="https://nil.org.pl/dzialalnosc/centrum-uznawania-kwalifikacji/zaswiadczenia-wydawane-przez-nrl/dentists" target="_blank" rel="noopener noreferrer nofollow" className="underline">
              Chamber of Physicians and Dentists
            </a>
            , but you should still confirm the specific clinic&apos;s quality systems and the treating
            clinician&apos;s license directly.
          </p>
          <p className="text-sm text-red-800">
            This guide is for informational purposes only and is not medical advice. Outcomes depend on
            your condition, the clinician, and the facility. Discuss candidacy and risks with a
            qualified clinician before pursuing any treatment abroad.
          </p>
        </div>
      </section>

      {/* At a Glance */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-red-900 mb-3">Poland at a Glance</h2>
          <ul className="text-sm text-gray-700 space-y-1 mb-0">
            <li>✓ <strong>EU member state</strong> — EU medical-device rules + the Cross-Border Healthcare Directive (2011/24/EU)</li>
            <li>✓ <strong>~50-70% savings</strong> vs UK dental prices, more vs US cash prices (estimates)</li>
            <li>✓ <strong>Strongest for:</strong> dental implants, veneers, crowns, full-mouth work, cosmetic surgery</li>
            <li>✓ <strong>Main hubs:</strong> Krakow (most popular), Warsaw (most specialists), Wroclaw (lower cost)</li>
            <li>✓ <strong>English</strong> is common in international-patient dental and surgery clinics</li>
            <li>✓ <strong>Flight time:</strong> ~2-3 hours from the UK; longer with a connection from the US</li>
            <li>✓ <strong>Visa:</strong> Poland is in the Schengen Area — short visits are visa-free for US/UK citizens</li>
          </ul>
        </div>
      </section>

      {/* Why Poland */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why People Travel to Poland for Care</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Poland built its medical-tourism reputation around <strong>dentistry and cosmetic
              treatment</strong> — high-quality work at prices that undercut Western Europe and the US,
              inside the EU&apos;s regulatory perimeter. For UK patients it is a short flight; for US
              patients it pairs lower cash prices with EU consumer protections that non-EU destinations
              cannot match. Krakow in particular combines a dense cluster of established clinics with one
              of Europe&apos;s best-preserved medieval city centers, which is part of the draw.
            </p>
            <p>
              The trade-offs are real. Savings are smaller than the headline numbers from Turkey or
              Mexico, and complex dental work such as implants usually means two trips months apart.
              What you gain is the EU framework: clinics operate under EU medical-device rules, dentists
              are licensed through the national Chamber of Physicians and Dentists, and EU/EEA patients
              may be able to claim partial reimbursement under the Cross-Border Healthcare Directive.
              That framework reduces — but does not remove — the need to vet the specific clinic.
            </p>
          </div>
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Cost Comparison: US / UK vs Poland (Estimates)</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Procedure</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">US Price</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">UK Price</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-green-700">Poland Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Single Dental Implant</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$3,000 - $5,000+</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">£2,000 - £3,000 (with crown)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">€600 - €1,300</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Porcelain Crown</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$1,000 - $2,500</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">£400 - £900</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">€250 - €450</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Porcelain Veneer (per tooth)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$900 - $2,500</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">£500 - £1,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">€280 - €500</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Rhinoplasty</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$7,000 - $12,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">£5,000 - £7,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">£2,000 - £3,500</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Breast Augmentation</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$6,000 - $12,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">£6,000 - £8,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">£2,500 - £4,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Liposuction</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">$3,500 - $8,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-500">£3,000 - £6,000</td>
                <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-600">$2,700 - $5,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Prices are estimates compiled from medical-tourism cost-comparison sources and vary by clinic,
          surgeon, materials (e.g., implant brand, crown type), and case complexity. Currencies are
          quoted as the source reports them. Poland package pricing often bundles consultation, imaging,
          and sometimes hotel/transfers; US and UK figures usually do not. Always request a written,
          itemized quote from the clinic before you travel.
        </p>
      </section>

      {/* Top Cities */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Where to Go: Krakow, Warsaw &amp; Wroclaw</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">Krakow</h3>
              <p className="text-sm text-gray-600 mb-3">
                The most popular base for international dental patients. A dense cluster of established
                clinics sits beside a compact, walkable medieval center, with John Paul II International
                Airport (KRK) a short drive away. Many clinics here run full international-patient
                services, including transfers and hotel booking.
              </p>
              <div className="text-sm text-green-600 font-semibold">Best for: dental implants, veneers, full-mouth work</div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">Warsaw</h3>
              <p className="text-sm text-gray-600 mb-3">
                The capital concentrates the widest range of specialists and the largest cosmetic-surgery
                clinics, with excellent flight connectivity through Chopin Airport (WAW). Treatment and
                hotels tend to run a little higher than Krakow, but specialist depth is the trade.
              </p>
              <div className="text-sm text-green-600 font-semibold">Best for: cosmetic surgery, complex/specialist dental</div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">Wroclaw</h3>
              <p className="text-sm text-gray-600 mb-3">
                A quieter, often lower-cost alternative in southwestern Poland that is also well known for
                dental work. A good option if you want a calmer city and a tighter budget, with a compact
                old town and a regional airport (WRO).
              </p>
              <div className="text-sm text-green-600 font-semibold">Best for: budget dental work, crowns &amp; implants</div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-5">
              <h3 className="font-bold text-gray-900 mb-2">How to choose</h3>
              <p className="text-sm text-gray-600 mb-3">
                Pick the city by procedure and quote, not by guidebook. For routine dental work, Krakow
                and Wroclaw cover most cases; for cosmetic surgery or specialist dental, Warsaw has the
                deepest bench. Compare specific clinic quotes side by side before committing.
              </p>
              <div className="text-sm text-green-600 font-semibold">Best for: matching clinic to case</div>
            </div>
          </div>
        </div>
      </section>

      {/* What "all-inclusive" includes */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What a Poland Dental Package Usually Includes</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3 text-green-700">Often Included</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>• Initial consultation and treatment plan</li>
              <li>• Imaging (panoramic X-ray and often a CT/CBCT scan)</li>
              <li>• The procedure itself (implant placement, crown, veneer, etc.)</li>
              <li>• Airport transfers; sometimes hotel nights</li>
              <li>• A written guarantee on the work (terms vary by clinic)</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h4 className="font-bold text-gray-900 mt-0 mb-3 text-red-700">Often NOT Included</h4>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>• Flights and most meals</li>
              <li>• Add-ons like bone grafts or sinus lifts (priced separately)</li>
              <li>• The second trip for implants (placement and final crown are usually months apart)</li>
              <li>• Travel medical insurance covering complications</li>
              <li>• Any aftercare once you return home</li>
            </ul>
          </div>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-6">
          <p className="text-sm text-yellow-800 mb-0">
            <strong>Two-trip reality:</strong> implants almost always need two visits — one to place the
            implant, then a return trip a few months later to fit the permanent crown after the bone
            heals. Budget the second flight and stay when you compare a Poland quote against a one-visit
            quote at home.
          </p>
        </div>
      </section>

      {/* EU framework / accreditation explainer */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The EU Advantage: Standards &amp; Patient Rights</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">EU regulation &amp; the licensing chamber</h3>
              <p className="text-sm text-gray-700 mb-0">
                As an EU member, Poland applies EU medical-device rules, and dentists are licensed and
                regulated through the Chamber of Physicians and Dentists (Naczelna Izba Lekarska) and its
                regional chambers. Polish dental qualifications are recognized across the EU. This is the
                baseline you do not get in many non-EU destinations — but it is the floor, not a substitute
                for vetting the specific clinic.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Cross-Border Healthcare Directive (EU/EEA patients)</h3>
              <p className="text-sm text-gray-700 mb-0">
                EU Directive 2011/24/EU lets EU/EEA patients receive planned care in another member state,
                such as Poland, and apply for partial reimbursement from their home system — subject to
                that system&apos;s rules and any prior-authorization requirement. Check your National
                Contact Point first. (US travelers pay cash; most US plans do not cover elective care
                abroad.)
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Clinic-level quality systems</h3>
              <p className="text-sm text-gray-700 mb-0">
                Beyond the legal baseline, established Polish clinics often hold quality certifications such
                as ISO 9001. For example, INDEXMEDICA in Krakow states it has been ISO 9001 certified since
                2008. Ask each clinic which quality systems it maintains and request to see current
                documentation — certifications must be renewed.
              </p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-2">Schengen &amp; travel</h3>
              <p className="text-sm text-gray-700 mb-0">
                Poland is in the Schengen Area, so short visits are visa-free for US and UK citizens. It is
                a ~2-3 hour flight from the UK and a longer connecting trip from the US. The short hop home
                also makes a follow-up visit easier than long-haul destinations — useful for two-trip
                implant cases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to vet */}
      <section className="bg-red-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Vet a Clinic Before You Book</h2>
          <div className="prose prose-lg max-w-none">
            <ul>
              <li><strong>Verify the clinician&apos;s license:</strong> confirm the treating dentist or surgeon is registered with the Polish Chamber of Physicians and Dentists, and ask about their training and how many of your exact procedure they perform.</li>
              <li><strong>Ask which quality systems the clinic holds:</strong> e.g., ISO 9001, and request to see current documentation rather than relying on a logo on a third-party listing.</li>
              <li><strong>Get a written, itemized quote:</strong> what the package includes (consultation, imaging, materials, guarantee) and what it does not (grafts, the second trip, aftercare).</li>
              <li><strong>Confirm the guarantee and aftercare path:</strong> what happens if a crown fails or an implant does not integrate, and how care continues once you are back home.</li>
              <li><strong>Buy travel medical insurance</strong> that covers complications, and keep your home dentist or physician in the loop before and after treatment.</li>
            </ul>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 not-prose my-6">
              <p className="text-sm text-yellow-800 mb-0">
                <strong>Red flag:</strong> any clinic that guarantees a cosmetic result, pressures a deposit
                before you have a written quote and credential confirmation, or will not connect you with
                the treating clinician. Legitimate clinics set realistic expectations and discuss risks.
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Compare Poland Against Other Hubs</h3>
          <p className="text-gray-600 mb-6">
            See the full medical-tourism hub, then weigh Poland&apos;s EU framework against other dental
            and cosmetic destinations before you book.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/medical-tourism" className="inline-block rounded-lg bg-red-600 px-6 py-3 font-medium text-white hover:bg-red-700">
              Medical Tourism Hub
            </Link>
            <Link href="/guides/hungary-dental-cost" className="inline-block rounded-lg border-2 border-red-600 px-6 py-3 font-medium text-red-600 hover:bg-red-50">
              Compare: Hungary Dental Cost
            </Link>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/hungary-dental-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🦷</span>
              <div>
                <div className="font-bold text-gray-900">Hungary Dental Cost</div>
                <div className="text-sm text-gray-600">The other big EU dental hub — implants, All-on-4 &amp; crowns</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/all-on-4-dental-implants-mexico" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🦷</span>
              <div>
                <div className="font-bold text-gray-900">All-on-4 Dental Implants in Mexico</div>
                <div className="text-sm text-gray-600">Full-arch costs and how the Mexico route compares</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/turkey-vs-mexico-medical-tourism" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚖️</span>
              <div>
                <div className="font-bold text-gray-900">Turkey vs Mexico: Medical Tourism</div>
                <div className="text-sm text-gray-600">How the two biggest hubs compare on cost and care</div>
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

      {/* Shared YMYL + affiliate disclosure */}
      <MedicalDisclaimer />

      {/* Sources */}
      <section className="mx-auto max-w-4xl px-4 pb-8">
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <a href="https://www.dentaly.org/en/dental-implants-abroad/dental-implants-poland/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Dental Implants in Poland — Costs &amp; Reviews (Dentaly)</a></li>
            <li>• <a href="https://opussmile.com/dental-tourism/dental-tourism-in-poland-costs-clinics-and-is-it-worth-it-for-uk-patients/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Dental Tourism in Poland — Costs, Clinics &amp; UK Patient Guide (OpusSmile)</a></li>
            <li>• <a href="https://www.medicaltourismco.com/dental-work-in-poland/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Dental Work in Poland — Cost &amp; Savings (Medical Tourism Co.)</a></li>
            <li>• <a href="https://www.medicaltourismco.com/cosmetic-surgery-in-poland/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Cosmetic Surgery in Poland — Costs &amp; Surgeons (Medical Tourism Co.)</a></li>
            <li>• <a href="https://eur-lex.europa.eu/eli/dir/2011/24/oj/eng" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Directive 2011/24/EU — patients&apos; rights in cross-border healthcare (EUR-Lex)</a></li>
            <li>• <a href="https://nil.org.pl/dzialalnosc/centrum-uznawania-kwalifikacji/zaswiadczenia-wydawane-przez-nrl/dentists" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Chamber of Physicians and Dentists (Naczelna Izba Lekarska) — Dentists</a></li>
            <li>• <a href="https://www.indexmedica.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">INDEXMEDICA Dental Clinic, Krakow — ISO 9001 certified since 2008</a></li>
            <li>• <a href="https://www.nuviasmiles.com/blog/how-much-dental-implants-cost-on-average-2026-guide" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">How Much Dental Implants Cost on Average in the US — 2026 Guide</a></li>
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Planning Treatment in Poland?"
          description="Get our medical-tourism checklist: how to verify a clinic, the questions to ask before you book, and what an itemized quote should include."
          source="guide_poland_medical_tourism"
        />
      </div>

      </SidebarShell>
      <Footer />
    </main>
  );
}
