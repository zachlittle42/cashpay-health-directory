import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'Rhinoplasty Turkey Cost (2026): Istanbul Prices vs the US',
  description: 'Rhinoplasty in Turkey costs roughly $2,500-$7,500 vs $9,000-$20,000 in the US. What is included, why Istanbul is cheaper, and how to vet a surgeon safely.',
};

// Real PAA/long-tail questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge, consistent with
// the medical disclaimer. The visible FAQ block below mirrors this schema
// exactly — the schema clarifies the page, it never invents new claims.
const FAQ_ITEMS = [
  {
    question: 'How much does rhinoplasty cost in Turkey?',
    answer:
      'Primary rhinoplasty in Turkey is commonly advertised in the range of about $2,500-$7,500 as an all-inclusive package, versus roughly $9,000-$20,000 out-of-pocket in the US for a first-time procedure. Ultrasonic (piezo) and revision noses sit at the higher end. These are advertised estimates that vary by surgeon, technique, and complexity — confirm a firm quote in writing with the clinic after a consultation.',
  },
  {
    question: 'Why is a nose job so much cheaper in Turkey?',
    answer:
      'Lower labor, facility, and currency costs, plus a high concentration of clinics competing for international patients, let Istanbul price below US averages. The American Society of Plastic Surgeons reports an average US surgeon fee of $7,637 for rhinoplasty — and that figure excludes anesthesia and facility fees, which Turkish all-inclusive packages typically bundle in. Lower price does not by itself indicate lower quality, but it also is not a guarantee of quality; vet the surgeon either way.',
  },
  {
    question: 'What is usually included in a Turkey rhinoplasty package?',
    answer:
      'All-inclusive packages commonly bundle the surgery, several nights of hotel accommodation, VIP airport and clinic transfers, a translator, pre-operative tests, and post-operative medications. Coverage gaps are common — extra hotel nights, graft or cartilage fees, revision policy, and follow-up scope vary by clinic. Get the full inclusion list and the revision policy in writing before paying.',
  },
  {
    question: 'Is it safe to get rhinoplasty in Turkey?',
    answer:
      'Safety depends on the individual surgeon and facility, not the country. Turkey has more than 50 JCI-accredited hospitals, and many surgeons hold credentials through TSPRAS, ISAPS, or EBOPRAS. Verify board status and hospital privileges independently on those organizations’ websites before booking. Rhinoplasty carries real risks in any country, including infection, nosebleeds, septal perforation, altered sense of smell, and the chance of revision surgery. This is information, not medical advice.',
  },
  {
    question: 'How long do I need to stay in Turkey for rhinoplasty?',
    answer:
      'Most clinics structure the trip around a single visit of roughly 6-8 days, covering consultation, surgery, and an in-person post-op check before the splint comes off. You may not be cleared to fly until the surgeon confirms it. Plan recovery realistically: swelling lasts about four to six weeks, with most resolving by three months and the final shape settling over up to a year.',
  },
  {
    question: 'How does Turkey compare to other rhinoplasty destinations?',
    answer:
      'Turkey is a tier-one cosmetic-surgery hub, receiving about 1.5 million international health visitors in 2024. Compared with destinations such as Mexico or South Korea, Istanbul tends to offer high clinic volume and packaged all-inclusive pricing, while travel from the US is longer (10-12 hours). The right choice depends on surgeon credentials and your specific case, not the destination alone.',
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

export default function RhinoplastyTurkeyCost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Rhinoplasty in Turkey: Cost Guide',
    description:
      'What rhinoplasty costs in Turkey versus the US, what all-inclusive Istanbul packages include, and how to vet an accredited surgeon safely.',
    url: 'https://vitalityscout.com/guides/rhinoplasty-turkey-cost',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/rhinoplasty-turkey-cost#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalProcedure',
      name: 'Rhinoplasty',
      procedureType: 'https://schema.org/SurgicalProcedure',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-23',
    dateModified: '2026-06-23',
    citation: [
      {
        '@type': 'CreativeWork',
        name: 'American Society of Plastic Surgeons — Rhinoplasty Cost',
        url: 'https://www.plasticsurgery.org/cosmetic-procedures/rhinoplasty/cost',
      },
      {
        '@type': 'CreativeWork',
        name: 'Cleveland Clinic — Rhinoplasty (risks & recovery)',
        url: 'https://my.clevelandclinic.org/health/treatments/11011-rhinoplasty',
      },
      {
        '@type': 'CreativeWork',
        name: 'Türkiye Today — 2024 health tourism figures (Ministry of Trade)',
        url: 'https://www.turkiyetoday.com/lifestyle/15-million-health-tourists-visited-turkiye-last-year-generating-3-billion-in-revenue-3203166',
      },
      {
        '@type': 'CreativeWork',
        name: 'Turkish Medical Centers — JCI-certified hospitals in Turkey (50+ count)',
        url: 'https://turkishmedicalcenters.com/jci-certified-hospitals-in-turkey/',
      },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/rhinoplasty-turkey-cost#faq', url: 'https://vitalityscout.com/guides/rhinoplasty-turkey-cost' };

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
            <span className="text-gray-900">Rhinoplasty Turkey Cost</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/medical-tourism" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Medical Tourism Hub
          </Link>

          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              Procedure Guide
            </span>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
              🇹🇷 Turkey
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Rhinoplasty Turkey Cost: Istanbul Prices vs the US (2026)
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What a nose job actually costs in Turkey, what all-inclusive Istanbul packages
            cover, and how to vet an accredited surgeon before you book.
          </p>

          {/* Direct-answer lead: self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              Rhinoplasty in Turkey is commonly advertised at roughly <strong>$2,500-$7,500</strong>{' '}
              as an all-inclusive package, versus about <strong>$9,000-$20,000</strong> out-of-pocket
              in the US — where the American Society of Plastic Surgeons puts the average surgeon fee
              alone at <strong>$7,637</strong>, before anesthesia and facility costs. Turkey&apos;s lower
              labor, facility, and currency costs drive the gap. Quality depends on the surgeon, not the
              price; verify credentials and pricing directly with the clinic. This is information, not
              medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last reviewed: June 2026 • 11 min read
          </p>
        </div>
      </section>

      {/* Medical disclaimer */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-amber-900">
          <p className="mb-2">
            <strong>Medical disclaimer:</strong> This page is general information, not medical advice.
            Prices are advertised estimates that change and vary by surgeon, technique, and case
            complexity &mdash; confirm a firm quote, the full inclusion list, and provider credentials
            directly with each clinic. Rhinoplasty is surgery and carries real risks; talk to a
            board-certified surgeon before deciding.
          </p>
          <p>
            <strong>Affiliate disclosure:</strong> VitalityScout may earn a commission from some links,
            at no additional cost to you. This never affects which providers we list or how we describe
            them.
          </p>
        </div>
      </section>

      {/* Cost comparison box */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-gradient-to-r from-blue-50 to-gray-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Cost Comparison: Primary Rhinoplasty</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-1">United States (out-of-pocket)</div>
              <div className="text-3xl font-bold text-red-600">$9,000 - $20,000</div>
              <div className="text-xs text-gray-500 mt-1">ASPS avg surgeon fee alone: $7,637</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-1">Turkey (all-inclusive package)</div>
              <div className="text-3xl font-bold text-green-600">$2,500 - $7,500</div>
              <div className="text-xs text-gray-500 mt-1">Istanbul, surgeon + hotel + transfers</div>
            </div>
          </div>
          <div className="text-center mt-4 text-sm text-gray-600">
            <strong>Typical savings: 60-75%</strong> • Estimates only — verify a firm quote with the clinic.
          </div>
        </div>
      </section>

      {/* What is rhinoplasty */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is Rhinoplasty?</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Rhinoplasty (a &quot;nose job&quot;) is surgery that reshapes the nose for cosmetic reasons,
            to improve breathing, or both. Surgeons may work through an open approach (a small incision
            across the columella between the nostrils) or a closed approach (incisions inside the nose).
            Common techniques you will see priced separately include:
          </p>
          <ul>
            <li><strong>Primary rhinoplasty</strong> — a first-time procedure on an unoperated nose.</li>
            <li><strong>Ultrasonic / piezo rhinoplasty</strong> — uses ultrasonic instruments to reshape bone; often priced higher.</li>
            <li><strong>Preservation rhinoplasty</strong> — aims to preserve the natural nasal structure.</li>
            <li><strong>Revision rhinoplasty</strong> — corrects a previous surgery; more complex and the most expensive tier.</li>
            <li><strong>Ethnic rhinoplasty</strong> — tailored to preserve ethnic features; typically a higher tier.</li>
          </ul>
          <p>
            Recovery is not instant. Per the Cleveland Clinic, swelling lasts about four to six weeks,
            most of it resolves by three months, and the nose can take up to a year to fully settle into
            its final shape. Plan your trip and your expectations around that timeline, not the splint
            coming off.
          </p>
        </div>
      </section>

      {/* Pricing table */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Rhinoplasty Pricing in Turkey by Type</h2>
          <p className="text-gray-700 mb-6">
            Pricing varies by surgeon experience, technique, and complexity. These are advertised
            all-inclusive estimates collected from Turkish clinic price lists — confirm a firm quote in
            writing after a consultation.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg text-sm bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Procedure Type</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Turkey (est.)</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">US (out-of-pocket)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium">Primary rhinoplasty</td>
                  <td className="px-4 py-3 text-green-600 font-semibold">$2,500 - $4,000</td>
                  <td className="px-4 py-3 text-gray-600">$9,000 - $18,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Ultrasonic / preservation rhinoplasty</td>
                  <td className="px-4 py-3 text-green-600 font-semibold">$3,500 - $5,500</td>
                  <td className="px-4 py-3 text-gray-600">$12,000 - $20,000</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Ethnic rhinoplasty</td>
                  <td className="px-4 py-3 text-green-600 font-semibold">$4,000 - $6,000</td>
                  <td className="px-4 py-3 text-gray-600">$12,000 - $22,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Revision rhinoplasty</td>
                  <td className="px-4 py-3 text-green-600 font-semibold">$4,500 - $7,500+</td>
                  <td className="px-4 py-3 text-gray-600">$15,000 - $35,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            US figures reflect ASPS / patient-reported ranges; the ASPS average surgeon fee is $7,637
            and excludes anesthesia and facility costs. Turkish figures are advertised package
            estimates. Both vary widely by case.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What an All-Inclusive Package Usually Covers</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-lg border-2 border-green-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Commonly Included</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Surgeon&apos;s fee and the procedure itself</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Several nights of hotel accommodation</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>VIP airport and clinic transfers</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Translator / patient coordinator</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Pre-operative tests and post-op medications</span></li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border-2 border-amber-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Common Gaps to Confirm</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">!</span><span>Extra hotel nights if recovery runs long</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">!</span><span>Cartilage graft or implant fees</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">!</span><span>The revision policy if you need a touch-up</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">!</span><span>Scope of follow-up after you fly home</span></li>
              <li className="flex items-start gap-2"><span className="text-amber-500 mt-1">!</span><span>Companion travel and your own flights</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Turkey */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Turkey Is a Tier-One Destination</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Turkey received about <strong>1.5 million international health visitors in 2024</strong>,
              generating roughly $3 billion in revenue, per figures reported through the country&apos;s
              government. Istanbul concentrates the bulk of that volume across hair transplants, dental,
              and plastic surgery. High volume and clinic competition are part of why packaged pricing
              sits below US averages.
            </p>
            <p>
              Quality infrastructure exists: Turkey has <strong>more than 50 JCI-accredited
              hospitals</strong>, and many cosmetic surgeons hold credentials through the Turkish Society
              of Plastic, Reconstructive and Aesthetic Surgeons (TSPRAS), the International Society of
              Aesthetic Plastic Surgery (ISAPS), or the European Board of Plastic, Reconstructive and
              Aesthetic Surgery (EBOPRAS). Accreditation and credentials are claims you should verify on
              those bodies&apos; own websites, not take from a clinic&apos;s marketing.
            </p>
          </div>
        </div>
      </section>

      {/* How to vet a surgeon */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Vet a Rhinoplasty Surgeon in Turkey</h2>
        <p className="text-gray-700 mb-6">
          The single most important decision is the surgeon, not the city or the lowest price. Work
          through this checklist before you put down a deposit.
        </p>

        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="font-bold text-gray-900 mb-1">Verify board status independently</h3>
            <p className="text-gray-700 text-sm">
              Cross-check the surgeon&apos;s name on TSPRAS, ISAPS, and EBOPRAS directories yourself.
              Confirm the operating facility&apos;s JCI accreditation on the JCI database, not just the
              clinic&apos;s logo wall.
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="font-bold text-gray-900 mb-1">Confirm who actually operates</h3>
            <p className="text-gray-700 text-sm">
              Ask, in writing, which named surgeon performs your surgery and whether technicians are
              involved. Reviews across Turkish cosmetic clinics sometimes note a consultation-to-surgeon
              mismatch — pin down the operating surgeon and the plan before paying.
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="font-bold text-gray-900 mb-1">Ask the technique and revision questions</h3>
            <p className="text-gray-700 text-sm">
              Which approach (open vs closed) and technique (ultrasonic, preservation) do they
              recommend for your nose, and why? What is the written revision policy and timeline? Who
              handles a complication after you return to the US?
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="font-bold text-gray-900 mb-1">Get everything in writing</h3>
            <p className="text-gray-700 text-sm">
              A written treatment plan, an itemized quote, the full inclusion list, and the revision
              policy before travel. Verifiable before/after cases (not stock photos) and independent
              reviews on Trustpilot, Google, and patient forums.
            </p>
          </div>
        </div>

        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mt-8">
          <h3 className="font-bold text-red-900 mb-3">Red Flags to Walk Away From</h3>
          <ul className="text-red-800 space-y-2 text-sm">
            <li>• Prices far below the market that &quot;sound too good&quot; — corners are usually cut somewhere</li>
            <li>• A clinic that claims JCI status but cannot provide documentation</li>
            <li>• Refusal to name the operating surgeon or confirm board status</li>
            <li>• No written treatment plan or itemized quote before you arrive</li>
            <li>• Pressure to book and pay immediately, or promises of a &quot;perfect&quot; or guaranteed result</li>
          </ul>
        </div>
      </section>

      {/* Risks */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Risks and Honest Considerations</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Rhinoplasty is real surgery in any country. Per the Cleveland Clinic, potential
              complications include:
            </p>
            <ul>
              <li>Nasal septal perforation (a hole in the septum)</li>
              <li>Infection and nosebleeds</li>
              <li>Poor wound healing or scarring</li>
              <li>Skin discoloration</li>
              <li>Altered sense of smell</li>
              <li>An unsatisfactory appearance that may need additional surgery</li>
            </ul>
            <p>
              Traveling abroad adds its own considerations: a 10-12 hour flight from the US, a follow-up
              gap once you return, and limited legal recourse if something goes wrong. The mitigation is
              the same as the vetting checklist — verify credentials, get everything in writing, and do
              not choose on price alone.
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-6">
            <p className="text-sm text-yellow-800">
              <strong>Reality check:</strong> No surgeon can guarantee a specific result, and the final
              shape of your nose can take up to a year to settle. Be skeptical of any clinic that
              promises a guaranteed outcome.
            </p>
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

      {/* CTA to money pages */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Researching Cosmetic Surgery in Turkey?</h2>
          <p className="mb-6 text-blue-100">
            Compare accredited destinations and verified medical-tourism providers before you book.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/destinations/turkey"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Turkey Destination Guide →
            </Link>
            <Link
              href="/medical-tourism"
              className="inline-block rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Medical Tourism Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Related guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/hair-transplant-turkey-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇹🇷</span>
              <div>
                <div className="font-bold text-gray-900">Hair Transplant in Turkey Guide</div>
                <div className="text-sm text-gray-600">Costs, top clinics, what to expect in Istanbul</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/turkey-hair-transplant-trip-planner" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🗺️</span>
              <div>
                <div className="font-bold text-gray-900">Turkey Trip Planner</div>
                <div className="text-sm text-gray-600">Flights, visa, hotels, and recovery logistics</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/korea-plastic-surgery-cost" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💲</span>
              <div>
                <div className="font-bold text-gray-900">South Korea Plastic Surgery Cost</div>
                <div className="text-sm text-gray-600">Rhinoplasty, eyelid, V-line prices vs the US</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/turkey-vs-mexico-medical-tourism" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚖️</span>
              <div>
                <div className="font-bold text-gray-900">Turkey vs Mexico Medical Tourism</div>
                <div className="text-sm text-gray-600">How the two top destinations compare</div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Sources */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Sources</h2>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <a href="https://www.plasticsurgery.org/cosmetic-procedures/rhinoplasty/cost" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">American Society of Plastic Surgeons — Rhinoplasty Cost ($7,637 avg surgeon fee)</a></li>
            <li>• <a href="https://my.clevelandclinic.org/health/treatments/11011-rhinoplasty" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Cleveland Clinic — Rhinoplasty: risks & recovery</a></li>
            <li>• <a href="https://www.turkiyetoday.com/lifestyle/15-million-health-tourists-visited-turkiye-last-year-generating-3-billion-in-revenue-3203166" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Türkiye Today — 1.5M health tourists, $3B revenue (2024)</a></li>
            <li>• <a href="https://turkishmedicalcenters.com/jci-certified-hospitals-in-turkey/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Turkish Medical Centers — JCI-certified hospitals in Turkey (50+ count)</a></li>
            <li>• <a href="https://us-uk.bookimed.com/clinics/country=turkey/procedure=rhinoplasty-nose-job/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Bookimed — Rhinoplasty Turkey costs & packages (price basis)</a></li>
            <li>• <a href="https://www.hayatmed.com/blog/plastic-surgeries/rhinoplasty/rhinoplasty-cost-in-turkey/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">HayatMed — Rhinoplasty cost in Turkey (package estimate basis)</a></li>
          </ul>
        </div>
      </section>

      {/* Final disclaimer */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-gray-100 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-2">Important Disclaimer</h3>
          <p className="text-sm text-gray-600">
            This guide is for informational purposes only and does not constitute medical advice or an
            endorsement of any clinic or surgeon. Rhinoplasty carries risks including infection,
            bleeding, septal perforation, altered sense of smell, and the possibility of revision
            surgery. Always consult a board-certified surgeon, verify provider credentials
            independently, and confirm current pricing directly with the clinic. VitalityScout does not
            guarantee any treatment outcome.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Get Our Turkey Cosmetic Surgery Vetting Checklist"
          description="Surgeon-credential checks, package inclusion questions, and red flags to screen Istanbul clinics."
          source="guide_rhinoplasty_turkey_cost"
        />
      </div>

      <Footer />
    </main>
  );
}
