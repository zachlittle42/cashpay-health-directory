import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'Is Stem Cell Therapy in Mexico Safe? Risks & Red Flags',
  description:
    'Is stem cell therapy in Mexico safe? How COFEPRIS regulation works, the documented infection risks, the red flags, and how to vet a clinic before you go.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Safety claims are balanced and sourced; nothing
// is framed as a cure or a guarantee. The visible FAQ block below mirrors this
// schema exactly — schema clarifies the page, it never invents new claims.
const FAQ_ITEMS = [
  {
    question: 'Is stem cell therapy in Mexico safe?',
    answer:
      'It depends entirely on the clinic, the cell source, and the condition. Stem cell therapy is legal in Mexico under COFEPRIS regulation, and a well-run, properly licensed clinic using sterile technique can deliver it safely. But most treatments offered are not validated in rigorous trials, and real harm has happened: in 2022 the CDC documented three US patients who developed drug-resistant Mycobacterium abscessus infections after stem cell injections at Mexican clinics. Safety is a clinic-by-clinic question, not a yes-or-no answer. Verify licensing and discuss it with your own physician first.',
  },
  {
    question: 'Is stem cell therapy legal in Mexico?',
    answer:
      'Yes. Stem cell therapy is legal in Mexico and regulated by COFEPRIS (Comision Federal para la Proteccion contra Riesgos Sanitarios), the country’s FDA equivalent. A compliant clinic typically needs several COFEPRIS authorizations, such as a cell-collection license, a surgical/treatment-room license, and regenerative-medicine authorization. Legal does not mean proven, though — many marketed uses (anti-aging, autoimmune, neurological) lack large clinical-trial evidence and are not FDA-approved in the US.',
  },
  {
    question: 'What are the real risks of stem cell therapy in Mexico?',
    answer:
      'The documented risks include serious infection (the CDC traced a 2022 cluster of drug-resistant Mycobacterium abscessus infections in US patients to Mexican stem cell clinics), tumor formation, cells migrating and becoming the wrong tissue, immune reaction, the therapy simply not working, and significant financial loss. The FDA has also received reports of blindness, tumors, and infections from unapproved stem cell products generally. These are information, not predictions for your case — discuss your specific risk with a clinician.',
  },
  {
    question: 'How do I verify a Mexican stem cell clinic is COFEPRIS licensed?',
    answer:
      'Ask the clinic for its specific COFEPRIS authorization numbers and the licensed legal entity name, then check them against COFEPRIS’s official records rather than trusting the website badge. This matters: a 2021 study of 76 Tijuana regenerative-medicine clinics found 13 claimed COFEPRIS licensing online, yet only one matched the official government registry by both business name and address. A logo on a homepage is not verification.',
  },
  {
    question: 'Is stem cell therapy in Mexico FDA approved?',
    answer:
      'No. Treatments offered in Mexico are not FDA-approved. In the US, only a small number of stem cell products are FDA-approved — mainly blood-forming (hematopoietic) stem cell products for certain blood and immune disorders. The FDA has not approved stem cell products for orthopedic conditions, anti-aging, autoimmune disease, or most of what Mexican clinics market. That regulatory gap is the main reason patients travel, and also the reason caution is warranted.',
  },
  {
    question: 'What red flags mean I should walk away from a clinic?',
    answer:
      'Walk away if a clinic guarantees a cure or specific success rate, will not name its cell source or COFEPRIS license, uses pressure tactics or "limited spots," offers embryonic stem cells, claims to treat nearly every condition, has no verifiable physician credentials, or refuses to put the protocol and what is included in writing. Transparency before payment is the single most reliable safety signal.',
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

// Safety-signal rows used to build the green-flag / red-flag comparison table.
// Every row is generic clinic-vetting guidance, not a claim about any named
// clinic, so nothing here needs per-clinic provenance.
const VETTING_ROWS = [
  {
    area: 'Regulatory status',
    green: 'Names its specific COFEPRIS authorizations; you can match them to the official registry',
    red: 'Shows a COFEPRIS logo but will not give license numbers or the licensed entity name',
  },
  {
    area: 'Cell source',
    green: 'Discloses cell type and source (e.g. umbilical-cord / Wharton’s-jelly MSCs) and donor screening',
    red: 'Vague about the source, or offers embryonic stem cells (legal and ethical issues)',
  },
  {
    area: 'Claims',
    green: 'Gives realistic, non-guaranteed expectations and discusses risks in writing',
    red: 'Promises a "cure," a high success rate, or claims to treat almost any condition',
  },
  {
    area: 'Sterility & lab',
    green: 'In-house or certified GMP lab; willing to share processing and sterility protocols',
    red: 'No facility tour, no lab documentation, no answer on how product sterility is assured',
  },
  {
    area: 'Sales pressure',
    green: 'Answers questions thoroughly before any payment; no deadline pressure',
    red: '"Limited availability," cash-only, deposit-to-hold-your-spot urgency',
  },
  {
    area: 'Continuity of care',
    green: 'Explains follow-up and what to do if a complication appears after you return home',
    red: 'No aftercare plan; unreachable once the procedure is paid for',
  },
];

export default function IsStemCellTherapyInMexicoSafe() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Is Stem Cell Therapy in Mexico Safe?',
    description:
      'A balanced 2026 safety guide to stem cell therapy in Mexico — how COFEPRIS regulation works, the documented infection and other risks, the red flags, and how to vet a clinic before you travel.',
    url: 'https://vitalityscout.com/guides/is-stem-cell-therapy-in-mexico-safe',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/is-stem-cell-therapy-in-mexico-safe#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalTherapy',
      name: 'Stem cell (regenerative medicine) therapy in Mexico',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'CDC MMWR — Potential Outbreak of Mycobacterium abscessus Infections from Stem Cell Treatment Clinics in Mexico (Arizona & Colorado, 2022)', url: 'https://www.cdc.gov/mmwr/volumes/73/wr/mm7318a3.htm' },
      { '@type': 'CreativeWork', name: 'CDC Emerging Infectious Diseases — Mycobacterium abscessus Meningitis Associated with Stem Cell Treatment During Medical Tourism (2023)', url: 'https://wwwnc.cdc.gov/eid/article/29/8/23-0317_article' },
      { '@type': 'CreativeWork', name: 'FDA — Consumer Alert on Regenerative Medicine Products Including Stem Cells and Exosomes', url: 'https://www.fda.gov/vaccines-blood-biologics/consumers-biologics/consumer-alert-regenerative-medicine-products-including-stem-cells-and-exosomes' },
      { '@type': 'CreativeWork', name: 'FDA — Patient and Consumer Warning about Potential Serious Risks of Harm from Unapproved Products from Human Cells or Tissues', url: 'https://www.fda.gov/vaccines-blood-biologics/safety-availability-biologics/patient-and-consumer-warning-about-potential-serious-risks-harm-following-use-unapproved-products' },
      { '@type': 'CreativeWork', name: 'Stem Cell Research & Therapy (2021) — Online marketing practices of regenerative medicine clinics in the US–Mexico border region: a web surveillance study', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7977255/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/is-stem-cell-therapy-in-mexico-safe#faq', url: 'https://vitalityscout.com/guides/is-stem-cell-therapy-in-mexico-safe' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/stem-cells" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Stem Cell Hub
          </Link>

          <div className="mb-4">
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
              Medical Tourism Safety Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Is Stem Cell Therapy in Mexico Safe?
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            A balanced look at the safety question — what COFEPRIS regulation actually
            covers, the harms that have been documented, and how to vet a clinic before
            you book.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-emerald-600 bg-emerald-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              Stem cell therapy in Mexico is <strong>legal and COFEPRIS-regulated</strong>,
              but its safety is a <strong>clinic-by-clinic question, not a yes-or-no answer</strong>.
              A properly licensed clinic using sterile technique can deliver it safely; most
              marketed treatments, however, are not validated in rigorous trials and are not
              FDA-approved. Real harm is documented — the CDC traced drug-resistant infections
              in US patients to Mexican stem cell clinics in 2022. Verify licensing independently
              and talk to your own physician first. This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 12 min read
          </p>
        </div>
      </section>

      {/* Regulatory notice */}
      <section className="mx-auto max-w-4xl px-4 pt-8">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-red-900 mb-3">Important Regulatory Notice</h2>
          <p className="text-sm text-red-800 mb-3">
            Stem cell treatments offered in Mexico are <strong>not approved by the US FDA</strong>.
            In the US, only a small number of stem cell products are FDA-approved — mainly
            blood-forming (hematopoietic) products for certain blood and immune disorders. The FDA
            has not approved stem cell products for orthopedic conditions, anti-aging, autoimmune
            disease, or most other uses, and warns it has received reports of blindness, tumor
            formation, and infections from unapproved stem cell products.
          </p>
          <p className="text-sm text-red-800 mb-0">
            <strong>This guide is educational only.</strong> It does not endorse any treatment or
            clinic. Consult your own physician before pursuing any therapy, especially for a serious
            condition.
          </p>
        </div>
      </section>

      {/* The honest answer */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">The Honest Answer: It Depends on the Clinic</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            &quot;Is stem cell therapy in Mexico safe?&quot; has no single answer, because the
            risk lives in the details — which clinic, which cells, processed how, for which
            condition. A handful of established, properly licensed clinics in Mexico have treated
            international patients for over a decade with sterile technique and transparent
            protocols. At the other end of the same market are storefronts using a COFEPRIS logo
            they cannot back up. The procedure word — &quot;stem cells&quot; — is the same at both.
          </p>
          <p>
            So the useful question is not &quot;is Mexico safe?&quot; but &quot;is <em>this clinic</em>{' '}
            safe, for <em>this</em> treatment?&quot; The rest of this guide gives you the tools to
            answer that: what COFEPRIS actually regulates, the harms that have been documented in
            the medical literature, the red flags, and a verification checklist.
          </p>
        </div>
      </section>

      {/* How COFEPRIS regulation works */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How COFEPRIS Regulation Actually Works</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Stem cell therapy is legal in Mexico, overseen by <strong>COFEPRIS</strong> (Comisión
              Federal para la Protección contra Riesgos Sanitarios) — the country&apos;s rough
              equivalent of the FDA. A compliant clinic generally needs more than one authorization:
              typically a cell-collection license, a licensed surgical or treatment room, and
              regenerative-medicine authorization, with on-site verification of records, facilities,
              and equipment.
            </p>
            <p>
              Two things matter for safety here. First, <strong>legal is not the same as
              proven</strong> — COFEPRIS authorization permits a clinic to operate; it is not
              evidence that a given treatment works for your condition. Second, and more practically:{' '}
              <strong>a license claim is not a license</strong>. A 2021 web-surveillance study of
              regenerative-medicine clinics on the US–Mexico border, published in <em>Stem Cell
              Research &amp; Therapy</em>, examined 76 Tijuana clinics. Of the 13 that claimed
              COFEPRIS licensing on their websites, <strong>only one matched the official government
              registry by both business name and address</strong>. The same study found that{' '}
              <strong>55.4% of clinic sites mentioned no risks or adverse events at all</strong>, and
              clinics marketed an average of about eight different conditions each.
            </p>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mt-6">
            <h3 className="text-lg font-bold text-emerald-900 mb-2">The takeaway on regulation</h3>
            <p className="text-sm text-emerald-900 mb-0">
              Treat a homepage COFEPRIS badge as a starting point, not proof. Ask for the specific
              authorization numbers and the licensed legal-entity name, then verify them against
              COFEPRIS records — not the clinic&apos;s own marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Documented risks */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">The Risks That Have Actually Been Documented</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            This is not hypothetical. Two recent, peer-reviewed public-health reports document real
            harm tied to stem cell treatment in Mexico:
          </p>
          <ul>
            <li>
              <strong>A 2022 drug-resistant infection cluster (CDC).</strong> The CDC&apos;s MMWR
              reported three US patients — in Arizona and Colorado — who developed{' '}
              <em>Mycobacterium abscessus</em> subspecies <em>massiliense</em> infections after
              embryonic stem cell injections at clinics in Mexico (Baja California and Guadalajara).
              The cases ranged from meningitis to joint infections. The isolates were a single clone
              despite coming from distant clinics, so investigators suspected a common contaminated
              source — the product, reagents, or equipment.
            </li>
            <li>
              <strong>A meningitis case in the medical literature (Emerging Infectious Diseases,
              2023).</strong> A US woman with multiple sclerosis developed <em>M. abscessus</em>{' '}
              meningitis after intrathecal stem cell injections at a commercial clinic in Baja
              California. It took roughly eight weeks of evaluations to identify and required a
              prolonged multidrug regimen. <em>M. abscessus</em> is intrinsically drug-resistant and
              notoriously hard to treat.
            </li>
          </ul>
          <p>Beyond infection, the FDA lists these risks for unapproved stem cell products in general:</p>
          <ul>
            <li><strong>Tumor formation</strong> — cells growing excessively or becoming the wrong tissue</li>
            <li><strong>Cells migrating</strong> from the injection site to unintended parts of the body</li>
            <li><strong>Blindness</strong> — reported with eye-related procedures</li>
            <li><strong>Failure to work</strong> as anticipated — many patients see no benefit</li>
            <li><strong>Financial loss</strong> — treatments are expensive and not guaranteed</li>
          </ul>
          <p>
            None of this means every Mexican clinic is dangerous. It means infection control,
            sourcing, and processing are exactly where safety is won or lost — and exactly what you
            should interrogate before you book.
          </p>
        </div>
      </section>

      {/* Green flags vs red flags table */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Vet a Clinic: Green Flags vs Red Flags</h2>
          <p className="text-gray-600 mb-6 max-w-4xl">
            Use this side by side. The pattern that predicts safety is transparency before payment —
            a clinic that answers hard questions, in writing, without pressure.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">What to check</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-emerald-700">Green flag</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-red-700">Red flag</th>
                </tr>
              </thead>
              <tbody>
                {VETTING_ROWS.map((r, i) => (
                  <tr key={r.area} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                    <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{r.area}</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{r.green}</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{r.red}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Verification checklist */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">A Pre-Booking Verification Checklist</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-lg border-2 border-emerald-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Verify the clinic</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">✓</span>
                <span>Get the COFEPRIS authorization numbers and licensed entity name — then check them, do not trust the badge</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">✓</span>
                <span>Confirm the cell type and source, and whether donors are screened</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">✓</span>
                <span>Ask how the product&apos;s sterility is assured (in-house GMP lab vs outside processing)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">✓</span>
                <span>Confirm the treating physician&apos;s credentials are verifiable</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Verify your fit</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✓</span>
                <span>Discuss it with your own physician before you commit, and finish proven options first</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✓</span>
                <span>Get the protocol, what&apos;s included, and realistic expectations in writing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✓</span>
                <span>Ask what happens — and who you call — if a complication appears after you fly home</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✓</span>
                <span>Be sure you can absorb the financial loss if it does not work</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-8">
          <p className="text-sm text-yellow-800 mb-0">
            <strong>Who should not go:</strong> people with active cancer or active infections, anyone
            seeking a guaranteed &quot;cure,&quot; and anyone who has not yet tried evidence-based,
            proven treatments. Raise your specific situation with a clinician.
          </p>
        </div>
      </section>

      {/* FAQ — visible block mirrors the FAQPage schema above exactly */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div>
            {FAQ_ITEMS.map((item) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA to money page */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Comparing Mexico Stem Cell Clinics?</h3>
          <p className="text-gray-600 mb-6">
            See how the regulated options compare on cells, accreditation, and pricing before you
            decide — and verify every claim independently.
          </p>
          <Link
            href="/stem-cells/mexico"
            className="inline-block rounded-lg bg-emerald-600 px-8 py-4 text-lg font-medium text-white hover:bg-emerald-700"
          >
            View Mexico Stem Cell Clinics →
          </Link>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/us-vs-mexico-stem-cells" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🆚</span>
              <div>
                <div className="font-bold text-gray-900">US vs Mexico Stem Cell Therapy</div>
                <div className="text-sm text-gray-600">FDA vs COFEPRIS, cost, and legality compared</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/mexico-stem-cell-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇲🇽</span>
              <div>
                <div className="font-bold text-gray-900">Stem Cell Therapy in Mexico: Complete Guide</div>
                <div className="text-sm text-gray-600">Clinics, costs, and what to expect by city</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/stem-cell-therapy-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💉</span>
              <div>
                <div className="font-bold text-gray-900">Stem Cell Therapy Cost (2026)</div>
                <div className="text-sm text-gray-600">US vs Mexico, Panama and abroad, by condition</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/tijuana-medical-tourism-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌎</span>
              <div>
                <div className="font-bold text-gray-900">Tijuana Medical Tourism Guide</div>
                <div className="text-sm text-gray-600">Dental, bariatric, and stem cell — and how to vet a clinic</div>
              </div>
            </div>
          </Link>

          <Link href="/stem-cells" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧭</span>
              <div>
                <div className="font-bold text-gray-900">Stem Cell Hub</div>
                <div className="text-sm text-gray-600">Compare Mexico, Panama, and US options</div>
              </div>
            </div>
          </Link>

          <Link href="/longevity" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⏳</span>
              <div>
                <div className="font-bold text-gray-900">Longevity Hub</div>
                <div className="text-sm text-gray-600">Explore regenerative and longevity options</div>
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
            <li>• <a href="https://www.cdc.gov/mmwr/volumes/73/wr/mm7318a3.htm" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">CDC MMWR — Potential Outbreak of M. abscessus Infections from Stem Cell Clinics in Mexico (Arizona &amp; Colorado, 2022)</a></li>
            <li>• <a href="https://wwwnc.cdc.gov/eid/article/29/8/23-0317_article" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">CDC Emerging Infectious Diseases — M. abscessus Meningitis After Stem Cell Treatment During Medical Tourism (2023)</a></li>
            <li>• <a href="https://www.fda.gov/vaccines-blood-biologics/consumers-biologics/consumer-alert-regenerative-medicine-products-including-stem-cells-and-exosomes" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">FDA — Consumer Alert on Regenerative Medicine Products (Stem Cells &amp; Exosomes)</a></li>
            <li>• <a href="https://www.fda.gov/vaccines-blood-biologics/safety-availability-biologics/patient-and-consumer-warning-about-potential-serious-risks-harm-following-use-unapproved-products" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">FDA — Patient and Consumer Warning About Unapproved Cell/Tissue Products</a></li>
            <li>• <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7977255/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Stem Cell Research &amp; Therapy (2021) — Online marketing of regenerative-medicine clinics in the US–Mexico border region</a></li>
          </ul>
        </div>
      </section>

      {/* Medical + affiliate disclosure */}
      <MedicalDisclaimer />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Vetting a Stem Cell Clinic Abroad?"
          description="Get our clinic-verification checklist and the questions that separate a safe regenerative-medicine clinic from a risky one."
          source="guide_is_stem_cell_therapy_in_mexico_safe"
        />
      </div>

      <Footer />
    </main>
  );
}
