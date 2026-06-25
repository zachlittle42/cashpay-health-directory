import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Function Health Review Cost: 2026 Pricing & Worth It?' },
  alternates: { canonical: 'https://vitalityscout.com/guides/function-health-review' },
  description: 'Function Health review: $365/year for 100+ biomarkers via Quest, accuracy, HSA/FSA eligibility, and how it compares to SuperPower and InsideTracker.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price answer ends with the verify-with-
// provider hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a Function Health membership cost in 2026?',
    answer:
      'Function Health costs about $365 per year, reduced from its earlier $499 price. The membership covers 160+ lab tests across the year — roughly 100+ markers at your annual visit and a 60+ marker follow-up about six months later — plus clinician review and a personalized action plan. Function also runs a periodic two-year offer (around $499 for two years, or ~$250/year). Testing in New York and New Jersey costs more due to state lab regulations. These are advertised estimates that change; confirm current pricing directly with Function before you join.',
  },
  {
    question: 'Is Function Health worth it compared to ordering labs yourself?',
    answer:
      'It depends on whether you value breadth and interpretation over lowest cost per marker. A single cash-pay wellness panel runs roughly $90-$130, so Function\'s $365/year is more upfront — but it bundles 160+ markers a year, two draws, clinician flagging, and a tracking dashboard. If you only want a basic annual panel, self-ordering through a direct-access lab is cheaper. If you want a wide, repeated, interpreted picture, a membership can win on cost-per-result. Compare the math against your goals before deciding.',
  },
  {
    question: 'Are Function Health blood tests accurate?',
    answer:
      'Function Health does not run its own lab. Blood draws are processed through Quest Diagnostics, which is CLIA-certified and CAP-accredited — the same federal quality standards and gold-standard accreditation that govern conventional clinical labs. The accuracy of the underlying results is therefore comparable to standard Quest testing. The value Function adds is selecting the panel, ordering it without a doctor visit, having clinicians review results, and presenting them in a trackable dashboard. This is information, not medical advice.',
  },
  {
    question: 'Is Function Health HSA/FSA eligible?',
    answer:
      'Function Health states that its membership is HSA and FSA eligible, meaning you may be able to pay with pre-tax dollars. Eligibility depends on your specific plan and administrator, so confirm with both Function and your HSA/FSA provider before assuming the membership qualifies. Paying pre-tax can lower the effective cost, but the exact savings depend on your tax situation. Verify before you buy.',
  },
  {
    question: 'What are the best Function Health alternatives?',
    answer:
      'The closest membership alternatives are SuperPower (about $199/year, ~$399 in NY/NJ, one comprehensive 100+ marker annual panel through Quest) and InsideTracker (membership about $149/year, with blood-test plans like Ultimate priced separately). If you only want occasional labs, self-ordering through Quest Health, Labcorp OnDemand, or Ulta Lab Tests is cheaper per panel. The right pick depends on how many markers you want, how often you test, and whether you value clinician review. Prices change — confirm with each provider.',
  },
  {
    question: 'Do you need a doctor to use Function Health?',
    answer:
      'No. Function Health is a direct-to-consumer service: you join, get a requisition, and visit a Quest Diagnostics location for your draw without needing your own physician to order the tests. Function\'s clinicians review the results and flag issues, but the platform is designed for self-directed, preventive testing rather than diagnosis or treatment. Anything flagged should be discussed with a licensed clinician. This is general information, not medical advice.',
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

// Real, verifiable biomarker-membership services (sources in the manifest;
// prices independently checked June 2026 against each provider / cited reviews).
// Prices are advertised estimates to confirm with the provider.
const COMPARISON = [
  {
    name: 'Function Health',
    price: '~$365/yr',
    markers: '160+ tests/yr (100+ at visit, 60+ follow-up)',
    lab: 'Quest Diagnostics',
    review: 'Clinician review of every result',
    note: 'Two draws a year, MRI/CT member pricing, HSA/FSA eligible.',
  },
  {
    name: 'SuperPower',
    price: '~$199/yr ($399 NY/NJ)',
    markers: '100+ markers (one annual panel)',
    lab: 'Quest Diagnostics',
    review: 'AI dashboard + care team',
    note: 'Lower entry price; base plan is a single annual panel.',
  },
  {
    name: 'InsideTracker',
    price: '~$149/yr membership',
    markers: 'Modular (e.g. Ultimate ~48 markers)',
    lab: 'Quest / Labcorp draw',
    review: 'Algorithmic recommendations',
    note: 'Membership and blood-test plans priced separately.',
  },
  {
    name: 'Self-order panel',
    price: '~$90-$130 / panel',
    markers: 'Pick your own (basic wellness)',
    lab: 'Quest / Labcorp / Ulta',
    review: 'None included',
    note: 'Cheapest for a one-off basic panel; no interpretation.',
  },
];

export default function FunctionHealthReview() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Function Health Review: Cost, Biomarkers & Alternatives (2026)',
    description:
      'An independent 2026 review of Function Health — the ~$365/year 100+ biomarker membership: what you get, pricing, lab accuracy via Quest, HSA/FSA eligibility, and how it compares to SuperPower and InsideTracker.',
    url: 'https://vitalityscout.com/guides/function-health-review',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/function-health-review#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalTest',
      name: 'Comprehensive blood biomarker panel (preventive lab testing membership)',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'Function Health — membership pricing', url: 'https://www.functionhealth.com/pricing' },
      { '@type': 'CreativeWork', name: 'Function Health — How much does Function cost (FAQ)', url: 'https://www.functionhealth.com/faqs/how-much-does-function-cost' },
      { '@type': 'CreativeWork', name: 'Function membership is now $365/year', url: 'https://www.functionhealth.com/article/function365' },
      { '@type': 'CreativeWork', name: 'Function Health — Wikipedia', url: 'https://en.wikipedia.org/wiki/Function_Health' },
      { '@type': 'CreativeWork', name: 'Labcorp — Lab certifications & accreditations (CLIA / CAP)', url: 'https://www.labcorp.com/providers/lab-certifications-accreditations' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/function-health-review#faq', url: 'https://vitalityscout.com/guides/function-health-review' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/guides" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Health Guides
          </Link>

          <div className="mb-4">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              Lab Testing Review
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Function Health Review: Cost, Biomarkers &amp; Alternatives
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What a Function Health membership actually costs in 2026, what the 100+
            biomarker panel includes, how accurate it is, and whether it beats the alternatives.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              Function Health is a membership that costs about <strong>$365 per year</strong>{' '}
              (reduced from $499) for <strong>160+ lab tests annually</strong> — 100+ markers at
              your visit plus a follow-up panel — drawn through <strong>Quest Diagnostics</strong>,
              reviewed by clinicians, and tracked in a dashboard. It is HSA/FSA eligible. It costs
              more than self-ordering one basic panel but can win on cost-per-marker for a wide
              annual workup. These are advertised estimates to confirm with the provider. This is
              information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 10 min read
          </p>
        </div>
      </section>

      {/* What is Function Health */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What Is Function Health?</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Function Health is a direct-to-consumer preventive-testing membership. Instead of
            ordering a handful of labs through your doctor, you pay one annual fee and get a wide
            panel of biomarkers drawn at a lab, reviewed by clinicians, and surfaced in a dashboard
            that tracks your results over time. It is built for self-directed, proactive testing —
            not for diagnosing or treating a specific condition.
          </p>
          <p>
            The company was founded in 2021; per public records its co-founders include
            Jonathan Swerdlin (CEO) and Mark Hyman, MD (Chief Medical Officer). It raised a
            $298 million Series B in November 2025 at a reported $2.5 billion valuation, and in
            May 2025 acquired Ezra to add MRI scanning to the platform. As of 2024 it reported at
            least 100,000 members with a sizable waitlist — context for why it shows up in nearly
            every &ldquo;100+ biomarker membership&rdquo; comparison. Figures are from public
            reporting and may change.
          </p>
        </div>
      </section>

      {/* Pricing snapshot */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Function Health Cost (2026)</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              The core membership is about <strong>$365 per year</strong>, reduced from its earlier
              $499 price. For that annual fee you get:
            </p>
            <ul>
              <li><strong>160+ lab tests across the year</strong> — roughly 100+ markers at your annual visit, plus a 60+ marker follow-up about six months later.</li>
              <li><strong>Clinician review</strong> of every result, with issues flagged.</li>
              <li>A <strong>personalized action plan</strong> and a dashboard that tracks results over time.</li>
              <li><strong>Member pricing on MRI and CT scans</strong> (via the Ezra integration).</li>
            </ul>
            <p>
              Function periodically runs a two-year offer (around <strong>$499 for two years</strong>,
              or roughly $250/year). Add-on tests beyond the standard panel cost extra at
              member-only prices. Note: <strong>testing in New York and New Jersey costs more</strong>{' '}
              because of state lab regulations. All of these are advertised prices that change — confirm
              the current number directly with Function before you join.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 not-prose my-6">
              <p className="text-sm text-blue-900">
                <strong>HSA/FSA tip:</strong> Function states the membership is HSA/FSA eligible, so you
                may be able to pay with pre-tax dollars. Eligibility depends on your plan — confirm with
                Function and your benefits administrator before assuming it qualifies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accuracy */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Is Function Health Accurate?</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Function Health does not operate its own laboratory. Blood draws are processed through{' '}
            <strong>Quest Diagnostics</strong>, one of the two largest US reference labs. Quest is{' '}
            <strong>CLIA-certified</strong> (it meets the federal Clinical Laboratory Improvement
            Amendments quality standards that govern all US clinical lab testing) and{' '}
            <strong>CAP-accredited</strong> (College of American Pathologists, widely treated as the
            gold standard in lab accreditation). In practical terms, the accuracy of the underlying
            blood results is comparable to any standard Quest panel.
          </p>
          <p>
            So the &ldquo;accuracy&rdquo; question really splits in two. The <em>analytic</em> accuracy
            of the lab values comes from Quest and is well-established. What Function adds on top is the
            <em> service layer</em>: choosing which markers to test, ordering them without a doctor
            visit, having clinicians review and flag results, and presenting everything in a trackable
            dashboard. That interpretation layer is the real product — and the part worth weighing
            against cheaper, self-ordered alternatives that hand you raw numbers with no review.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Function Health vs Alternatives</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-white">
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Service</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Price</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Markers</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Lab</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Review</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((c, i) => (
                  <tr key={c.name} className={i % 2 === 1 ? 'bg-white' : ''}>
                    <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{c.name}</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-700">{c.price}</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{c.markers}</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{c.lab}</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{c.review}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Prices are advertised rates checked in June 2026 and change frequently. NY/NJ pricing is
            higher for both membership services. Confirm current pricing and panel contents directly
            with each provider before buying. For a deeper price breakdown across self-order panels,
            see our{' '}
            <Link href="/guides/cheapest-blood-test-panels" className="text-blue-600 hover:underline">
              cheapest blood test panels guide
            </Link>.
          </p>
        </div>
      </section>

      {/* Who it is for */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Who Function Health Is (and Isn&apos;t) For</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-lg border-2 border-green-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">A good fit if you</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Want a <strong>wide annual panel</strong> (100+ markers) without juggling individual lab orders</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Value <strong>clinician review</strong> and a dashboard that tracks trends over time</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Plan to <strong>retest twice a year</strong>, which spreads the fee across more results</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Can pay with <strong>HSA/FSA</strong> dollars to lower the effective cost</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border-2 border-amber-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Probably not if you</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">!</span>
                <span>Only want a <strong>one-off basic panel</strong> — a self-ordered $90-$130 panel is cheaper</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">!</span>
                <span>Need <strong>diagnosis or treatment</strong> — this is preventive testing, not medical care</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">!</span>
                <span>Live in <strong>NY or NJ</strong> and are highly price-sensitive (membership costs more there)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">!</span>
                <span>Want a <strong>cheaper membership</strong> — SuperPower starts lower at ~$199/year</span>
              </li>
            </ul>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Compare Cash-Pay Lab Testing Options</h3>
          <p className="text-gray-600 mb-6">
            Memberships are one route. See how direct-access labs and telehealth ordering stack up on price.
          </p>
          <Link
            href="/telehealth"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            Explore Telehealth &amp; Lab Options →
          </Link>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/cheapest-blood-test-panels" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💉</span>
              <div>
                <div className="font-bold text-gray-900">Cheapest Blood Test Panels</div>
                <div className="text-sm text-gray-600">Prices compared across direct-access labs</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/blood-test-without-a-doctor" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🩸</span>
              <div>
                <div className="font-bold text-gray-900">Blood Test Without a Doctor</div>
                <div className="text-sm text-gray-600">How self-order labs work and what they cost</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/at-home-lab-testing-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧪</span>
              <div>
                <div className="font-bold text-gray-900">At-Home Lab Testing Guide</div>
                <div className="text-sm text-gray-600">Accuracy, biomarkers, and how it works</div>
              </div>
            </div>
          </Link>

          <Link href="/longevity" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧬</span>
              <div>
                <div className="font-bold text-gray-900">Longevity Hub</div>
                <div className="text-sm text-gray-600">Testing, protocols, and proactive health</div>
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
            <li>• <a href="https://www.functionhealth.com/pricing" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Function Health — membership pricing</a></li>
            <li>• <a href="https://www.functionhealth.com/faqs/how-much-does-function-cost" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Function Health — How much does Function cost (FAQ)</a></li>
            <li>• <a href="https://www.functionhealth.com/article/function365" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Function membership is now $365/year</a></li>
            <li>• <a href="https://en.wikipedia.org/wiki/Function_Health" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Function Health — Wikipedia (founders, Quest, Ezra, Series B)</a></li>
            <li>• <a href="https://www.labcorp.com/providers/lab-certifications-accreditations" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Labcorp — Lab certifications &amp; accreditations (CLIA / CAP)</a></li>
          </ul>
        </div>
      </section>

      {/* Medical + affiliate disclosure */}
      <MedicalDisclaimer />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Deciding on a Lab Testing Membership?"
          description="Get our cash-pay biomarker testing comparison — memberships vs self-order panels, by cost-per-marker."
          source="guide_function_health_review"
        />
      </div>

      <Footer />
    </main>
  );
}
