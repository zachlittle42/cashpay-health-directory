import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Marek Health Review Cost: Pricing, Labs & Who It Is For' },
  alternates: { canonical: 'https://vitalityscout.com/guides/marek-health-review' },
  description:
    'Marek Health review: what the hormone-optimization platform costs in 2026 — $250 intake, $150-$1,950 lab panels, cash-pay model, and who it actually fits.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price answer ends with the verify-with-
// provider hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does Marek Health cost?',
    answer:
      'Marek Health uses a pay-per-service cash-pay model rather than a flat monthly membership. Typical line items are a $250 patient-care-coordinator intake (credited toward your first provider visit), a lab panel from $150 (Essential) up to $1,950 (Executive) on Marek Diagnostics, and follow-up labs around $250 every six months, plus medication and any supplements on top. Independent reviewers estimate a standard TRT protocol with periodic labs runs roughly $2,500-$5,400 per year all-in, varying by panel tier and medications, with base medication alone around $225-$275 a month. These are advertised estimates that change; confirm current pricing directly with Marek Health.',
  },
  {
    question: 'Is Marek Health a clinic or a platform?',
    answer:
      'Marek Health describes itself as a telehealth platform, not a healthcare clinic. By its own FAQ language it does not administer healthcare or prescribe directly; instead it connects clients with independent licensed providers (MDs, DOs, PAs, NPs) and pairs them with a health coach who builds a personalized optimization blueprint from your lab work. Treatment decisions and prescriptions come from the licensed provider, not Marek itself.',
  },
  {
    question: 'Does Marek Health take insurance?',
    answer:
      'No. Marek Health operates entirely cash-pay and does not bill insurance, which is typical for elective hormone-optimization and longevity services. Some reviewers report HSA/FSA cards are accepted and others report they are not, so payment-method acceptance is the single detail most worth confirming with Marek before you commit. Verify insurance, HSA, and FSA acceptance directly with the provider.',
  },
  {
    question: 'What lab panels does Marek Health offer and what do they cost?',
    answer:
      'Lab testing runs through Marek Diagnostics. Advertised panels include an Essential panel at $150, a Base panel at $250, a Comprehensive total-health panel at $495, a pre-TRT Testosterone panel at $595, and an Executive panel at $1,950, alongside specialty panels for bone health, hair loss, and androgen-receptor genetics. The Comprehensive panel is the common starting point. These are advertised prices that change; confirm the current panel and price with Marek Diagnostics.',
  },
  {
    question: 'Who is Marek Health best for?',
    answer:
      'Marek Health fits people who want comprehensive, coach-guided hormone and longevity optimization and are comfortable paying cash for deep lab work — biohackers, athletes, and complex cases that simpler TRT subscriptions do not cover well. It is usually overkill, and more expensive, for someone who only wants a straightforward, low-cost testosterone prescription. Candidacy and whether any therapy is appropriate is a decision for a licensed clinician, not a website.',
  },
  {
    question: 'Is Marek Health available in my state?',
    answer:
      'Marek Health is a telehealth platform, but provider licensure and lab-order rules vary by state, so coverage is not uniform across the US and some states restrict self-ordered lab testing. Because reported state availability differs between sources, check whether providers can see you — and whether labs can be ordered — in your specific state directly with Marek Health before paying any intake fee.',
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

// Marek Diagnostics lab panels — prices read directly from
// marekdiagnostics.com/collections/lab-bundles (June 2026). Advertised
// estimates to confirm with the provider; sale prices change frequently.
const LAB_PANELS = [
  {
    name: 'Essential Lab Panel',
    price: '$150',
    use: 'Lowest-cost entry; a basic check-in panel.',
  },
  {
    name: 'Base Lab Panel',
    price: '$250',
    use: 'Foundational markers; common minimum for a first consult.',
  },
  {
    name: 'Comprehensive (Total Health)',
    price: '$495',
    use: 'The common starting point for optimization clients.',
  },
  {
    name: 'Testosterone Panel (Pre-TRT)',
    price: '$595',
    use: 'Hormone-focused workup before a TRT protocol.',
  },
  {
    name: 'Complete (Total Health)',
    price: 'From $895',
    use: 'Wider metabolic, inflammation, and organ markers.',
  },
  {
    name: 'Executive (Total Health)',
    price: '$1,950',
    use: 'The most extensive whole-body panel offered.',
  },
];

export default function MarekHealthReview() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Marek Health Review: Cost, Services & Who It Is For (2026)',
    description:
      'An independent 2026 review of Marek Health — the cash-pay hormone-optimization and lab-testing telehealth platform: how it works, what it costs, and who it fits.',
    url: 'https://vitalityscout.com/guides/marek-health-review',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/marek-health-review#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalBusiness',
      name: 'Marek Health',
      url: 'https://marekhealth.com',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'Marek Health — official site', url: 'https://marekhealth.com/home' },
      { '@type': 'CreativeWork', name: 'Marek Diagnostics — Lab Panels & pricing', url: 'https://marekdiagnostics.com/collections/lab-bundles' },
      { '@type': 'CreativeWork', name: 'VirtualCareFinder — Marek Health Review (2026)', url: 'https://virtualcarefinder.com/providers/marek-health' },
      { '@type': 'CreativeWork', name: 'Muscle & Brawn — Marek Health Review', url: 'https://muscleandbrawn.com/telehealth/marek-health-review/' },
      { '@type': 'CreativeWork', name: 'PeptidesExplorer — Marek Health Reviews (2026)', url: 'https://peptidesexplorer.com/blog/marek-health-reviews' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/marek-health-review#faq', url: 'https://vitalityscout.com/guides/marek-health-review' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/hormone-therapy" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Hormone Therapy Hub
          </Link>

          <div className="mb-4">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              Brand Review
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Marek Health Review: Cost, Services &amp; Who It Is For
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            An independent look at the cash-pay hormone-optimization and lab-testing
            platform — what it actually costs in 2026, how it works, and who it fits.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              Marek Health is a cash-pay telehealth platform for hormone optimization and
              lab testing. It charges a <strong>$250</strong> intake (credited to your first
              visit), lab panels from <strong>$150 to $1,950</strong>, plus medication — a
              standard TRT protocol with periodic labs runs roughly{' '}
              <strong>$2,500-$5,400/year</strong> all-in per independent reviewers. It fits
              people wanting deep, coach-guided optimization, not a cheap single prescription.
              These are advertised estimates to confirm with the provider. This is information,
              not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 10 min read
          </p>
        </div>
      </section>

      {/* What is Marek Health */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What Is Marek Health?</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Marek Health is a telehealth <strong>platform</strong>, not a clinic. By its own
            FAQ language, it does not administer healthcare or prescribe treatments directly.
            Instead it connects clients with independent, licensed providers — MDs, DOs,
            PAs, and NPs — and pairs each client with a health coach who builds a personalized
            optimization blueprint from their bloodwork. The provider makes the clinical
            decisions and writes any prescriptions; Marek supplies the lab testing, coaching,
            and logistics around them.
          </p>
          <p>
            It grew out of the hormone-optimization and biohacking community — Marek Health is
            associated with Derek of the &quot;More Plates More Dates&quot; channel — and that
            heritage shows in the positioning: deep lab work, ancillary medications, and
            peptides, aimed at people who want to optimize rather than just treat a deficiency.
            That is the core distinction from a budget TRT subscription, which exists to get you
            a testosterone prescription as cheaply as possible.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Marek Health Works</h2>
          <div className="prose prose-lg max-w-none">
            <ol>
              <li>
                <strong>Intake + coach call.</strong> You start with a patient-care-coordinator
                intake (advertised at $250, credited toward your first provider visit) and a
                conversation with a Marek coach about symptoms and goals.
              </li>
              <li>
                <strong>Lab work.</strong> You purchase a Marek Diagnostics panel (from $150)
                and get bloodwork at a partner lab or via an at-home kit, depending on your state.
              </li>
              <li>
                <strong>Provider telehealth consult.</strong> A licensed provider reviews your
                results with you and, if appropriate, designs a protocol.
              </li>
              <li>
                <strong>Blueprint + delivery.</strong> Your coach turns the plan into an ongoing
                blueprint; any prescribed medication ships to your door.
              </li>
              <li>
                <strong>Follow-up.</strong> Repeat labs (around $250 every six months) and
                provider check-ins keep the protocol adjusted over time.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Lab panel pricing table */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Marek Diagnostics Lab Panel Prices (2026)</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Panel</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Advertised Price</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Typical Use</th>
              </tr>
            </thead>
            <tbody>
              {LAB_PANELS.map((p, i) => (
                <tr key={p.name} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{p.name}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-700">{p.price}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{p.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Prices read from Marek Diagnostics in June 2026; sale prices change frequently.
          Confirm the current panel, included markers, and price directly with the provider.
          For a broader look at self-order lab options, see our{' '}
          <Link href="/guides/at-home-lab-testing-guide" className="text-blue-600 hover:underline">
            at-home lab testing guide
          </Link>.
        </p>
      </section>

      {/* What it actually costs */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What It Actually Costs</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Marek Health does not charge a flat monthly membership. It is{' '}
              <strong>pay-per-service and cash-pay</strong>, which means the total depends on
              which panels you buy, how often you re-test, and what is prescribed. The pieces
              that show up on most invoices:
            </p>
            <ul>
              <li><strong>Intake:</strong> $250, credited toward your first provider visit</li>
              <li><strong>Initial labs:</strong> $150-$1,950 depending on panel tier</li>
              <li><strong>Follow-up labs:</strong> roughly $250 every six months</li>
              <li><strong>Medication + supplements:</strong> additional, varies by protocol</li>
            </ul>
            <p>
              Adding those up, independent reviewers estimate a standard TRT protocol with
              periodic labs lands in the <strong>$2,500-$5,400 per year</strong> range — base
              testosterone and ancillary medication alone runs roughly $225-$275 a month, with
              the rest driven by panel tier and re-test frequency — before counting more
              extensive panels or ancillary peptides. That is materially more than a $99/month
              budget TRT subscription — the trade is depth of testing and coaching for price.
              Whether that trade is worth it depends entirely on what you are trying to
              accomplish.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 not-prose my-6">
              <p className="text-sm text-yellow-800">
                <strong>Payment note:</strong> Marek is cash-pay and does not bill insurance.
                Reports differ on whether HSA/FSA cards are accepted — confirm payment methods
                directly with Marek before you pay the intake fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pros and cons */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Strengths and Trade-offs</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-lg border-2 border-green-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Strengths</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Deep, hormone-focused lab testing through Marek Diagnostics</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Coach-guided blueprint, not just a prescription pad</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Ancillary options (peptides, supplements) under one roof</span></li>
              <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Well suited to complex cases and committed optimizers</span></li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border-2 border-red-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Trade-offs</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-red-400 mt-1">✗</span><span>Expensive vs budget TRT subscriptions; cash-pay only</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 mt-1">✗</span><span>Overkill if you just want a simple, low-cost prescription</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 mt-1">✗</span><span>State availability and lab-order rules vary; not uniform US-wide</span></li>
              <li className="flex items-start gap-2"><span className="text-red-400 mt-1">✗</span><span>HSA/FSA acceptance is reported inconsistently — verify first</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Who Marek Health Is For</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              <strong>Consider Marek Health if</strong> you want comprehensive, coach-guided
              optimization — you care about more than a single testosterone number, you are
              comfortable paying cash for thorough lab work, and you want peptides, ancillaries,
              and ongoing protocol tuning in one place. Biohackers, athletes, and people with
              complex or stubborn cases tend to get the most out of the model.
            </p>
            <p>
              <strong>Look elsewhere if</strong> your goal is a straightforward, inexpensive
              prescription. If you just want maintenance TRT at the lowest monthly cost, a
              budget subscription clinic will likely cost far less for what you actually need —
              see how the options stack up in our{' '}
              <Link href="/guides/best-online-trt-clinics" className="text-blue-600 hover:underline">
                best online TRT clinics comparison
              </Link>.
            </p>
            <p>
              Either way, whether hormone therapy is appropriate for you — and at what dose — is
              a clinical decision made with a licensed provider after real bloodwork. A review
              page cannot tell you that you are a candidate.
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

      {/* CTA to money page */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Compare Hormone Therapy Options</h3>
          <p className="text-gray-600 mb-6">
            See cash-pay TRT and HRT providers side by side — pricing, services, and what each
            one is best for.
          </p>
          <Link
            href="/hormone-therapy"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            Browse Hormone Therapy Clinics →
          </Link>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/best-online-trt-clinics" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏆</span>
              <div>
                <div className="font-bold text-gray-900">Best Online TRT Clinics</div>
                <div className="text-sm text-gray-600">Marek vs Fountain vs TRT Nation, compared</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/trt-testosterone-therapy" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💪</span>
              <div>
                <div className="font-bold text-gray-900">TRT: Complete Guide</div>
                <div className="text-sm text-gray-600">Low-T symptoms, options, costs, and risks</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/peptide-therapy-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💉</span>
              <div>
                <div className="font-bold text-gray-900">Peptide Therapy Guide</div>
                <div className="text-sm text-gray-600">BPC-157, TB-500, regulation, and costs</div>
              </div>
            </div>
          </Link>

          <Link href="/hormone-therapy" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧭</span>
              <div>
                <div className="font-bold text-gray-900">Hormone Therapy Hub</div>
                <div className="text-sm text-gray-600">Find TRT and HRT clinics by location</div>
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
            <li>• <a href="https://marekhealth.com/home" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Marek Health — official site</a></li>
            <li>• <a href="https://marekdiagnostics.com/collections/lab-bundles" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Marek Diagnostics — Lab Panels &amp; pricing</a></li>
            <li>• <a href="https://virtualcarefinder.com/providers/marek-health" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">VirtualCareFinder — Marek Health Review (2026)</a></li>
            <li>• <a href="https://muscleandbrawn.com/telehealth/marek-health-review/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Muscle &amp; Brawn — Marek Health Review</a></li>
            <li>• <a href="https://peptidesexplorer.com/blog/marek-health-reviews" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">PeptidesExplorer — Marek Health Reviews (2026)</a></li>
          </ul>
        </div>
      </section>

      {/* Medical + affiliate disclosure */}
      <MedicalDisclaimer />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Comparing Hormone-Optimization Platforms?"
          description="Get our cash-pay TRT and hormone-therapy price comparison plus what to ask before you pay an intake fee."
          source="guide_marek_health_review"
        />
      </div>

      <Footer />
    </main>
  );
}
