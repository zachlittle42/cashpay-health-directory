import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Is Plastic Surgery in Turkey Safe? Risks & How to Vet' },
  alternates: { canonical: 'https://vitalityscout.com/guides/is-plastic-surgery-in-turkey-safe' },
  description:
    'Is plastic surgery in Turkey safe? What JCI accreditation means, the real risks, the red flags, and the surgeon-vetting checklist before you book.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Safety claims are attributed to their source
// (FCDO, BAAPS, ISAPS, JCI) and outcomes are never guaranteed. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'Is plastic surgery in Turkey safe?',
    answer:
      'It can be, but safety depends almost entirely on the clinic and surgeon you choose, not on the country. Turkey has many internationally accredited hospitals and board-certified surgeons, and reported complication rates at accredited hospitals are low. It also has a large discount-package market where corners get cut. The UK Foreign Office is aware of 7 British nationals who died in Turkey in 2025 following medical procedures, and BAAPS reports UK corrective-surgery cases after surgery abroad rose 94% in three years, with 75% citing Turkey. The takeaway: vet the specific surgeon and facility rigorously. This is information, not medical advice.',
  },
  {
    question: 'What does JCI accreditation mean for a Turkish hospital?',
    answer:
      'JCI (Joint Commission International) is the leading global hospital-accreditation body, the international arm of the same organization that accredits US hospitals. A JCI seal means the facility has been independently audited against international patient-safety and quality standards. Turkey is among the world leaders in JCI accreditation. JCI accredits the hospital, not the individual surgeon, so you still verify the surgeon separately. Always confirm a clinic is currently accredited on the official JCI directory rather than trusting a logo on a website.',
  },
  {
    question: 'What are the biggest risks of cosmetic surgery in Turkey?',
    answer:
      'The clinical risks are the same as anywhere — infection, bleeding, blood clots (deep vein thrombosis and pulmonary embolism), anaesthesia reactions, and poor cosmetic results. Medical tourism adds risks on top: flying soon after surgery raises clot risk, you may have little or no aftercare once home, and corrective surgery is often not covered by your home health system. BAAPS estimates emergency NHS aftercare for surgery abroad gone wrong averages about £15,000 per patient. Discuss your specific risk profile with a clinician before you travel.',
  },
  {
    question: 'How do I verify a Turkish plastic surgeon is qualified?',
    answer:
      'The 2023 joint guidelines from BAAPS and the Turkish society (TSPRAS) advise checking that your surgeon holds Turkish board certification in plastic surgery, is a member of TSPRAS, ideally holds the European EBOPRAS credential, has at least five years of plastic-surgery practice, and operates in an accredited hospital. You can also confirm board-certified aesthetic surgeons through the ISAPS member directory. Get a written aftercare plan and the surgeon\'s direct contact before you book.',
  },
  {
    question: 'What are the red flags to walk away from?',
    answer:
      'Walk away if: the price is dramatically below every other quote; you are booked through a coordinator or agency but never speak to the actual operating surgeon; you cannot confirm which hospital you will be in or its accreditation; multiple major procedures are bundled into one long operation; informed-consent and quotes only appear after you arrive; reviews are only on the clinic\'s own site; or there is no written aftercare plan. The FCDO warns that companies arranging treatment have a financial interest in booking you, so do your own independent research.',
  },
  {
    question: 'Will the NHS or my insurer fix it if something goes wrong?',
    answer:
      'Generally only emergency, life-threatening care is guaranteed when you return home — elective corrective surgery to fix a poor result is usually not funded by the NHS and often not by standard travel insurance. That can leave you paying out of pocket for revision work that costs more than the original trip. Confirm exactly what your travel or medical insurance covers for elective surgery abroad and complications, in writing, before you go.',
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

// Surgeon + facility vetting checklist, grounded in the 2023 BAAPS/TSPRAS joint
// cosmetic-tourism guidelines and ISAPS patient-safety guidance. These are
// verification steps, not endorsements of any clinic.
const VETTING_CHECKLIST = [
  {
    item: 'Surgeon is board-certified in plastic surgery',
    detail:
      'Confirm Turkish board certification in plastic, reconstructive and aesthetic surgery — not a general practitioner or dermatologist performing surgery.',
    source: 'BAAPS/TSPRAS joint guidelines (2023)',
  },
  {
    item: 'Member of a recognized professional society',
    detail:
      'TSPRAS membership in Turkey; ideally the European EBOPRAS credential; cross-check board-certified aesthetic surgeons on the ISAPS member directory.',
    source: 'BAAPS/TSPRAS, ISAPS',
  },
  {
    item: 'At least 5 years of plastic-surgery practice',
    detail:
      'The joint guidelines advise a minimum of five years operating as a plastic surgeon, with the clinic established at least three years.',
    source: 'BAAPS/TSPRAS joint guidelines (2023)',
  },
  {
    item: 'Hospital is internationally accredited',
    detail:
      'Surgery should be performed in an accredited hospital (the guidelines reference a minimum 30-bed facility). Verify JCI status on the official JCI directory.',
    source: 'BAAPS/TSPRAS; Joint Commission International',
  },
  {
    item: 'You speak with the operating surgeon before booking',
    detail:
      'Not just a sales coordinator. You should get the surgeon\'s direct contact and full informed-consent documents before you travel.',
    source: 'BAAPS/TSPRAS joint guidelines (2023)',
  },
  {
    item: 'A written aftercare plan exists',
    detail:
      'A clear plan for follow-up, who you contact for complications after you fly home, and what is covered if revision is needed.',
    source: 'BAAPS/TSPRAS joint guidelines (2023)',
  },
];

export default function IsPlasticSurgeryInTurkeySafe() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Is Plastic Surgery in Turkey Safe? (2026)',
    description:
      'A balanced 2026 safety guide to plastic surgery in Turkey — what JCI accreditation means, the real clinical and medical-tourism risks, the red flags, and a surgeon-vetting checklist before you book.',
    url: 'https://vitalityscout.com/guides/is-plastic-surgery-in-turkey-safe',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/is-plastic-surgery-in-turkey-safe#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalProcedure',
      name: 'Cosmetic and plastic surgery in Turkey',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'GOV.UK / FCDO — Turkey travel advice: Health (medical tourism)', url: 'https://www.gov.uk/foreign-travel-advice/turkey/health' },
      { '@type': 'CreativeWork', name: 'BAAPS — Cosmetic Tourism: What You Need To Know (patient guidance; £15,000 NHS aftercare estimate)', url: 'https://baaps.org.uk/patients/safety_in_surgery/cosmetic_tourism.aspx' },
      { '@type': 'CreativeWork', name: 'BAAPS — Cosmetic Tourism Update (94% three-year rise; Turkey accounts for more than three quarters of corrective cases)', url: 'https://baaps.org.uk/about/news/1881/baaps_cosmetic_tourism_update/' },
      { '@type': 'CreativeWork', name: 'Hatch J., Wounds UK (2025) — Cosmetic tourism: the cost of going under the knife abroad (94% in 3 years, 75% citing Turkey; BAAPS data)', url: 'https://wounds-uk.com/journal-articles/cosmetic-tourism-the-cost-of-going-under-the-knife-abroad-for-cosmetic-surgery/' },
      { '@type': 'CreativeWork', name: 'BAAPS & TSPRAS — UK and Turkish plastic surgeons issue cosmetic-tourism consumer guidelines (23 June 2023)', url: 'https://baaps.org.uk/about/news/1876/as_complications_from_cosmetic_tourism_rise_uk_and_turkish_plastic_surgeons_unite_to_issue_consumer_guidelines/' },
      { '@type': 'CreativeWork', name: 'BAAPS — Cosmetic Tourism Guidelines (Sept 2023)', url: 'https://baaps.org.uk/_userfiles/pages/files/baaps_cosmetic_tourism_guidelines_sept_23.pdf' },
      { '@type': 'CreativeWork', name: 'ISAPS — Finding a Surgeon Abroad / patient safety', url: 'https://www.isaps.org/discover/patients-home/considering-your-procedure-abroad/finding-a-surgeon-abroad/' },
      { '@type': 'CreativeWork', name: 'Joint Commission International — Find Accredited International Organizations', url: 'https://www.jointcommission.org/en/about-us/recognizing-excellence/find-accredited-international-organizations' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/is-plastic-surgery-in-turkey-safe#faq', url: 'https://vitalityscout.com/guides/is-plastic-surgery-in-turkey-safe' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/medical-tourism" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Medical Tourism Hub
          </Link>

          <div className="mb-4">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              Safety Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Is Plastic Surgery in Turkey Safe?
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            The honest answer — what accreditation actually protects you from, where
            the real risk sits, the red flags, and how to vet a surgeon before you book.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              Plastic surgery in Turkey <strong>can be safe at an accredited hospital with a
              board-certified surgeon</strong>, but safety depends on the clinic you pick, not the
              country. Turkey is a global leader in JCI hospital accreditation, yet the UK Foreign
              Office is aware of <strong>7 British nationals who died in Turkey in 2025</strong>, and
              BAAPS reports UK corrective-surgery cases after surgery abroad rose{' '}
              <strong>94% in 3 years (75% Turkey)</strong>. Vet the surgeon and facility rigorously.
              This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 11 min read
          </p>
        </div>
      </section>

      {/* The short answer */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">The Short Answer: It Depends on the Clinic, Not the Country</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            &quot;Is Turkey safe for plastic surgery?&quot; is the wrong question. Turkey is home to
            some of the most internationally accredited hospitals in the world and many highly
            trained, board-certified plastic surgeons. It is also home to a large, aggressively
            marketed discount-package market where price competition can push safety standards down.
            Both realities are true at once. Your outcome is determined by which end of that spectrum
            you book into.
          </p>
          <p>
            Two facts frame the risk. First, the UK Foreign, Commonwealth &amp; Development Office
            (FCDO) states it is aware of <strong>7 British nationals who died in Turkey in 2025</strong>{' '}
            following medical procedures, with cosmetic surgery among the most common procedures for
            medical tourists. Second, the British Association of Aesthetic Plastic Surgeons (BAAPS)
            national audit found UK residents needing NHS treatment after surgery abroad rose{' '}
            <strong>94% over three years</strong>, with <strong>75% citing Turkey</strong> as the
            origin of their surgery. These are not reasons to rule Turkey out — they are reasons to
            vet harder than you would at home.
          </p>
        </div>
      </section>

      {/* What JCI accreditation means */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What JCI Accreditation Actually Means</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              JCI — Joint Commission International — is the global arm of the same body that accredits
              hospitals in the United States. A JCI seal means a facility has been independently audited
              against international patient-safety and quality standards: infection control, surgical
              protocols, medication safety, emergency readiness. Turkey is consistently cited as one of
              the world&apos;s leading countries by number of JCI-accredited institutions, many of them
              in Istanbul.
            </p>
            <p>But understand the limits of what the seal covers:</p>
            <ul>
              <li>
                <strong>JCI accredits the hospital, not the surgeon.</strong> A JCI hospital can still
                host a surgeon you would never choose. You verify the surgeon separately.
              </li>
              <li>
                <strong>Many cosmetic clinics are not hospitals.</strong> A standalone aesthetic clinic
                may not be JCI-accredited at all; the joint UK–Turkish guidelines advise that surgery
                happen in an accredited hospital facility.
              </li>
              <li>
                <strong>Logos can be stale or fake.</strong> Confirm current accreditation on the
                official JCI directory of accredited international organizations — do not trust a badge
                on a marketing page.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* The real risks */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">The Real Risks, Honestly</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Plastic surgery carries the same clinical risks anywhere: infection, bleeding, adverse
            anaesthesia reactions, blood clots (deep vein thrombosis and pulmonary embolism), poor
            scarring, and results that need revision. Medical tourism stacks additional, structural
            risks on top of those:
          </p>
          <ul>
            <li>
              <strong>Flying too soon after surgery</strong> raises the risk of blood clots — long-haul
              immobility plus a fresh surgical wound is a known danger.
            </li>
            <li>
              <strong>Aftercare gaps.</strong> Once you fly home, the surgeon who operated on you is
              thousands of miles away. Complications can surface days or weeks later, when you no longer
              have easy access to the operating team.
            </li>
            <li>
              <strong>Corrective surgery often is not covered.</strong> BAAPS estimates emergency NHS
              aftercare for surgery abroad gone wrong averages about <strong>£15,000 per patient</strong>,
              and elective revision to fix a poor cosmetic result is generally not funded at home.
            </li>
            <li>
              <strong>Bundled multi-procedure operations.</strong> Long combined surgeries (for example
              several procedures in one sitting) carry more anaesthesia and clot risk than a single
              procedure.
            </li>
          </ul>
          <p>
            None of this means a good outcome is impossible — millions of procedures happen safely. It
            means the margin for a badly chosen clinic is thin, and the cost of getting it wrong is
            high. Discuss your personal risk factors with a clinician before you commit.
          </p>
        </div>
      </section>

      {/* Red flags table */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Green Flags vs Red Flags</h2>
          <p className="text-gray-600 mb-6">
            A side-by-side of what a safe, accredited offering looks like versus the warning signs that
            should make you walk away.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">What to check</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-green-700">Green flag</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-red-700">Red flag</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Surgeon contact</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">You speak directly with the operating surgeon before booking</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">You only ever deal with a sales coordinator or agency</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Credentials</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Verifiable board certification, TSPRAS / ISAPS / EBOPRAS membership</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Vague &quot;expert team,&quot; no named, checkable surgeon</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Facility</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Accredited hospital; JCI status confirmable on the official directory</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Unnamed clinic, or accreditation logo you cannot verify</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Price</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">In a normal range; itemized written quote</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Dramatically below every other quote; price changes after arrival</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Scope</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">A focused plan matched to your goals and health</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Several major procedures bundled into one long operation</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Aftercare</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Written aftercare plan; named contact for complications back home</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">No aftercare plan; &quot;you&apos;ll be fine&quot; reassurances only</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Reviews</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Independent reviews and verifiable references</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Only glowing reviews on the clinic&apos;s own site</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Vetting checklist */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Vet a Surgeon: The Checklist</h2>
        <p className="text-gray-600 mb-6">
          In 2023, BAAPS and the Turkish Society of Plastic, Reconstructive and Aesthetic Surgeons
          (TSPRAS) issued joint consumer guidelines for cosmetic tourism. These are the checks they
          recommend before you book.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {VETTING_CHECKLIST.map((c) => (
            <div key={c.item} className="bg-white rounded-lg border border-gray-200 p-5">
              <div className="flex items-start gap-2 mb-2">
                <span className="text-green-500 mt-1">✓</span>
                <h3 className="font-bold text-gray-900">{c.item}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">{c.detail}</p>
              <div className="text-xs text-gray-400">Source: {c.source}</div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 not-prose mt-8">
          <p className="text-sm text-blue-900">
            <strong>Verify, don&apos;t trust:</strong> confirm board-certified aesthetic surgeons on the{' '}
            <a href="https://www.isaps.org/discover/patients-home/considering-your-procedure-abroad/finding-a-surgeon-abroad/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">ISAPS member directory</a>{' '}
            and confirm hospital accreditation on the{' '}
            <a href="https://www.jointcommission.org/en/about-us/recognizing-excellence/find-accredited-international-organizations" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">official JCI directory</a>. A badge on a clinic&apos;s
            website is not verification.
          </p>
        </div>
      </section>

      {/* What the FCDO says */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What the UK Government Advises</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              The FCDO does not tell people to avoid Turkey, but it sets clear expectations. Its Turkey
              travel-advice page states that it is aware of <strong>7 British nationals who died in
              Turkey in 2025</strong> following medical procedures, that some have experienced
              complications needing further treatment, and that cosmetic surgery, dental procedures and
              cardiac surgery are the most common procedures for medical tourists.
            </p>
            <p>The FCDO&apos;s core advice for anyone considering treatment in Turkey:</p>
            <ul>
              <li>Discuss your plans with your own doctor, dentist or clinician <em>before</em> going ahead.</li>
              <li>Do your own research — companies arranging treatment have a financial interest in booking you.</li>
              <li>Understand the FCDO does not endorse the competence or suitability of any practitioner or facility.</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 not-prose my-6">
              <p className="text-sm text-yellow-800">
                <strong>Insurance note:</strong> standard travel insurance often excludes elective
                surgery and its complications. Confirm in writing what your policy covers for surgery
                abroad before you travel — see our{' '}
                <Link href="/guides/medical-travel-insurance-guide" className="text-blue-600 hover:underline">medical travel insurance guide</Link>.
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

      {/* CTA to money page */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Researching Treatment Abroad?</h3>
          <p className="text-gray-600 mb-6">
            Compare destinations, procedures, and what to check before you book — start with the
            medical tourism hub.
          </p>
          <Link
            href="/medical-tourism"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            Explore Medical Tourism →
          </Link>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/rhinoplasty-turkey-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💲</span>
              <div>
                <div className="font-bold text-gray-900">Rhinoplasty Turkey Cost</div>
                <div className="text-sm text-gray-600">Istanbul nose-job prices vs the US, and vetting</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/turkey-vs-mexico-medical-tourism" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚖️</span>
              <div>
                <div className="font-bold text-gray-900">Turkey vs Mexico</div>
                <div className="text-sm text-gray-600">The two biggest medical-tourism destinations compared</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/hair-transplant-turkey-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💇</span>
              <div>
                <div className="font-bold text-gray-900">Hair Transplant in Turkey</div>
                <div className="text-sm text-gray-600">FUE vs DHI, choosing a safe clinic, what to expect</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/medical-travel-insurance-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🛡️</span>
              <div>
                <div className="font-bold text-gray-900">Medical Travel Insurance</div>
                <div className="text-sm text-gray-600">What is covered for surgery and complications abroad</div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Sources */}
      <section className="mx-auto max-w-4xl px-4 pb-4">
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <a href="https://www.gov.uk/foreign-travel-advice/turkey/health" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">GOV.UK / FCDO — Turkey travel advice: Health (medical tourism)</a> — 7 British nationals died in Turkey in 2025 following medical procedures.</li>
            <li>• <a href="https://baaps.org.uk/patients/safety_in_surgery/cosmetic_tourism.aspx" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BAAPS — Cosmetic Tourism: What You Need To Know</a> — BAAPS estimate that emergency NHS aftercare for surgery abroad averages about £15,000 per patient.</li>
            <li>• <a href="https://baaps.org.uk/about/news/1881/baaps_cosmetic_tourism_update/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BAAPS — Cosmetic Tourism Update</a> — UK hospital treatment after cosmetic surgery abroad up 94% in three years; Turkey accounts for more than three quarters of corrective cases.</li>
            <li>• <a href="https://wounds-uk.com/journal-articles/cosmetic-tourism-the-cost-of-going-under-the-knife-abroad-for-cosmetic-surgery/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Hatch J., Wounds UK (2025) — Cosmetic tourism: the cost of going under the knife abroad</a> — peer-reviewed restatement of the BAAPS figures (94% in 3 years, 75% citing Turkey).</li>
            <li>• <a href="https://baaps.org.uk/about/news/1876/as_complications_from_cosmetic_tourism_rise_uk_and_turkish_plastic_surgeons_unite_to_issue_consumer_guidelines/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BAAPS &amp; TSPRAS — UK and Turkish plastic surgeons issue cosmetic-tourism consumer guidelines (23 June 2023)</a></li>
            <li>• <a href="https://baaps.org.uk/_userfiles/pages/files/baaps_cosmetic_tourism_guidelines_sept_23.pdf" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BAAPS — Cosmetic Tourism Guidelines (Sept 2023, PDF)</a></li>
            <li>• <a href="https://www.isaps.org/discover/patients-home/considering-your-procedure-abroad/finding-a-surgeon-abroad/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">ISAPS — Finding a Surgeon Abroad / patient safety</a></li>
            <li>• <a href="https://www.jointcommission.org/en/about-us/recognizing-excellence/find-accredited-international-organizations" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Joint Commission International — Find Accredited International Organizations</a></li>
          </ul>
        </div>
      </section>

      {/* Medical + affiliate disclosure */}
      <MedicalDisclaimer />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Planning Surgery Abroad?"
          description="Get our surgeon-vetting checklist plus the questions to ask before you book any procedure overseas."
          source="guide_is_plastic_surgery_in_turkey_safe"
        />
      </div>

      <Footer />
    </main>
  );
}
