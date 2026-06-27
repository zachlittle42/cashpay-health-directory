import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Blood Test Without a Doctor: How to Order Labs Yourself' },
  alternates: { canonical: 'https://vitalityscout.com/guides/blood-test-without-a-doctor' },
  description: 'How to get a blood test without a doctor in the US: how self-order labs work, what they cost ($30-850), which states restrict it, and what to test.',
};

// Real conversational/PAA questions, answered only from facts already stated on
// this page. Every cost answer ends with the verify-with-provider hedge. The
// visible FAQ block below mirrors this schema exactly — schema clarifies the
// page, never invents.
const FAQ_ITEMS = [
  {
    question: 'Can I get a blood test without seeing a doctor?',
    answer: 'In most US states, yes. Direct-to-consumer lab services like Quest Health let you buy a test online without a doctor visit or insurance. A licensed clinician in the service\'s independent physician network signs off on the order behind the scenes, then you go to a Quest or LabCorp draw site or use an at-home kit. A few states restrict this, with New York the most limited.',
  },
  {
    question: 'How much does it cost to order your own blood test?',
    answer: 'Individual tests like a lipid panel or metabolic panel often run roughly $30-120 self-pay, while comprehensive at-home memberships range from about $49 to $850 depending on biomarker count and whether a physician review is included. These are estimates that vary by service and location — confirm current pricing directly with the provider.',
  },
  {
    question: 'Is it legal to order a blood test without a doctor?',
    answer: 'For most routine tests in most states, yes. Federal rules (CLIA, HIPAA, the 21st Century Cures Act) govern lab quality and your right to your results, and the lab itself must be CLIA-certified. State law decides whether you can order directly: many states permit it, several restrict it, and New York is the most restrictive — it allows direct access mainly for tests with FDA over-the-counter approval. This is information, not legal or medical advice.',
  },
  {
    question: 'Which states do not allow direct-access blood testing?',
    answer: 'Most states allow it, but several limit or restrict consumer-ordered testing, including New York, New Jersey, and Rhode Island; some national services also exclude these states from their coverage. New York permits direct access only for tests with an FDA-approved over-the-counter kit or collection device, which effectively excludes most comprehensive panels. Check the service\'s availability for your state before ordering.',
  },
  {
    question: 'Are at-home blood tests as accurate as a doctor-ordered lab?',
    answer: 'When a service uses a professional draw at Quest or LabCorp, the result comes from the same labs hospitals use, so accuracy is comparable to a doctor-ordered test. Finger-prick home kits are generally reliable for routine screening and trending but can vary with collection technique. For any critical or abnormal result, confirm with a clinician.',
  },
  {
    question: 'How do I prepare for a self-ordered blood test?',
    answer: 'Follow the service\'s instructions exactly. Many panels (lipids, glucose, metabolic markers) ask for an 8-12 hour fast, and hormone tests such as testosterone are best drawn in the morning, typically 7-10 AM, when levels peak. Testing at a consistent time helps you compare results over time. Bring your order confirmation to the draw site.',
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

export default function BloodTestWithoutADoctor() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Blood Test Without a Doctor: How to Order Labs Yourself',
    description:
      'How to get a blood test without a doctor in the United States — how self-order (direct-access) lab testing works, what it costs, which states restrict it, and how to prepare.',
    url: 'https://vitalityscout.com/guides/blood-test-without-a-doctor',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/blood-test-without-a-doctor#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalTest',
      name: 'Direct-access (self-ordered) blood testing',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-23',
    dateModified: '2026-06-23',
    citation: [
      { '@type': 'CreativeWork', name: 'Quest — Buy lab tests online (no doctor visit required)', url: 'https://www.questdiagnostics.com/patients/get-tested' },
      { '@type': 'CreativeWork', name: 'New York State Dept. of Health, Wadsworth Center — Direct Access Testing', url: 'https://www.wadsworth.org/regulatory/clep/direct-access-testing' },
      { '@type': 'CreativeWork', name: 'Fullscript — Lab Test Ordering Rights by State (CLIA, HIPAA, Cures Act)', url: 'https://fullscript.com/blog/functional-lab-test-ordering-rights-by-state' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/blood-test-without-a-doctor#faq', url: 'https://vitalityscout.com/guides/blood-test-without-a-doctor' };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <SidebarShell>
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
            <span className="text-gray-900">Blood Test Without a Doctor</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/telehealth" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Telehealth Hub
          </Link>

          <div className="mb-4">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How to Get a Blood Test Without a Doctor
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What direct-access lab testing is, how it works, what it costs, where it is restricted,
            and how to order labs yourself the right way.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              In most US states you can get a blood test without your own doctor. Direct-to-consumer
              services like <strong>Quest Health</strong> let you buy a test online with{' '}
              <strong>no doctor visit or insurance</strong>; a clinician in the service&apos;s
              independent physician network authorizes the order, then you give a sample at a Quest or
              LabCorp site or with an at-home kit. Self-pay panels often run roughly{' '}
              <strong>$30-120</strong>, and comprehensive memberships about <strong>$49-850</strong>.
              A few states restrict this, with New York the most limited. This is information, not
              medical advice.
            </p>
          </div>
        </div>
      </section>

      {/* Legal / regulatory notice */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-amber-900 mb-3">A note on legality and your results</h3>
          <p className="text-sm text-amber-800 mb-3">
            Ordering your own labs is legal for most routine tests in most states. Federal rules
            &mdash; CLIA (lab quality), HIPAA, and the 21st Century Cures Act (your right to your
            results) &mdash; apply, and the lab running your sample must be CLIA-certified.{' '}
            <a
              href="https://fullscript.com/blog/functional-lab-test-ordering-rights-by-state"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="underline"
            >
              (Source: lab-ordering rights by state)
            </a>
          </p>
          <p className="text-sm text-amber-800">
            What changes by state is whether you can order <em>directly</em>. New York is the most
            restrictive: it permits direct-access testing mainly for tests with an FDA-approved
            over-the-counter kit, run by a permitted lab.{' '}
            <a
              href="https://www.wadsworth.org/regulatory/clep/direct-access-testing"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="underline"
            >
              (Source: NY State Dept. of Health, Wadsworth Center)
            </a>
          </p>
        </div>
      </section>

      {/* What it is */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What &quot;a blood test without a doctor&quot; actually means</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              You almost never give a sample with literally <em>no</em> clinician involved. What
              changes is whose clinician it is. With <strong>direct-access testing</strong> (also
              called self-order or direct-to-consumer testing), you choose the test, pay for it, and a
              licensed physician in the service&apos;s independent network signs the lab order on your
              behalf. You skip the appointment, the referral, and often the insurance paperwork &mdash;
              not the lab science.
            </p>
            <p>
              The largest reference labs offer this directly. Quest, for example, lets you buy{' '}
              <strong>150+ tests online with no doctor&apos;s visit required</strong> and then give a
              sample at one of its nationwide patient service centers, with the option to discuss
              results with a healthcare provider.{' '}
              <a
                href="https://www.questdiagnostics.com/patients/get-tested"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                (Source: Quest)
              </a>{' '}
              LabCorp runs a comparable self-pay program.
            </p>
            <p>
              Independent platforms layer on top of those same labs. Some manage the order and route
              you to Quest or LabCorp for a professional draw; others ship a finger-prick or saliva
              kit you collect at home and mail back. Our{' '}
              <Link href="/guides/at-home-lab-testing-guide">at-home lab testing guide</Link> breaks
              down those two collection models in detail.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How ordering your own test works, step by step</h2>

        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h4 className="font-bold text-gray-900 mb-1">1. Pick a test or panel</h4>
            <p className="text-gray-700 text-sm">
              Choose a single marker, a standard panel (lipids, metabolic, thyroid), or a broad
              wellness panel. Buy and pay online &mdash; no appointment.
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h4 className="font-bold text-gray-900 mb-1">2. An ordering clinician signs off</h4>
            <p className="text-gray-700 text-sm">
              A physician in the service&apos;s independent network authorizes the order so the lab
              can legally run it. This happens in the background; you usually never speak to them.
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h4 className="font-bold text-gray-900 mb-1">3. Give your sample</h4>
            <p className="text-gray-700 text-sm">
              Either visit a Quest or LabCorp draw site for a professional venous draw, or use a
              mailed home kit. Some services offer an at-home phlebotomist visit for an added fee
              (Quest Mobile lists this around $79).
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h4 className="font-bold text-gray-900 mb-1">4. Get results online</h4>
            <p className="text-gray-700 text-sm">
              Results post to your account, typically within a few days to about two weeks depending
              on the test. Many services include the option to review them with a clinician.
            </p>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Who self-ordering is &mdash; and isn&apos;t &mdash; for</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-green-800 font-bold mb-4">A good fit when you want to</h3>
              <ul className="text-sm space-y-2 text-gray-700 mb-0">
                <li>✓ Establish a baseline or track markers over time</li>
                <li>✓ Monitor an existing protocol (for example, labs while on TRT)</li>
                <li>✓ Check specific markers before a clinician visit</li>
                <li>✓ Pay cash and skip insurance paperwork</li>
                <li>✓ Get tested without a long appointment wait</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-yellow-800 font-bold mb-4">See a clinician instead when</h3>
              <ul className="text-sm space-y-2 text-gray-700 mb-0">
                <li>⚠️ You have symptoms of a serious illness</li>
                <li>⚠️ You need a diagnosis or a prescription</li>
                <li>⚠️ A result comes back critically abnormal</li>
                <li>⚠️ Your insurance would cover the testing</li>
                <li>⚠️ You live in a state that restricts direct access</li>
              </ul>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4 mt-6">
            <p className="text-sm text-gray-700 mb-0">
              Self-ordered testing is a tool for screening and tracking, not a substitute for
              diagnostic care. It does not establish eligibility for any treatment &mdash; discuss
              what to test, and what your results mean, with a qualified clinician.
            </p>
          </div>
        </div>
      </section>

      {/* What to test */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">What to actually test (a starting framework)</h2>

        <div className="prose prose-lg max-w-none">
          <p>
            More markers is not automatically better. Match the panel to your goal. These ranges are
            illustrative self-pay estimates &mdash; confirm current pricing with the service.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mt-6">
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h4 className="font-bold text-gray-900 mb-2">Baseline panel</h4>
            <div className="text-sm text-green-600 font-semibold mb-2">~$50-150 (estimate)</div>
            <ul className="text-sm text-gray-600 space-y-1 mb-0">
              <li>CBC</li>
              <li>Metabolic panel (CMP)</li>
              <li>Lipid panel</li>
              <li>HbA1c</li>
              <li>TSH (thyroid)</li>
              <li>Vitamin D</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h4 className="font-bold text-gray-900 mb-2">Hormone &amp; optimization</h4>
            <div className="text-sm text-green-600 font-semibold mb-2">~$200-450 (estimate)</div>
            <ul className="text-sm text-gray-600 space-y-1 mb-0">
              <li>Baseline panel, plus:</li>
              <li>Testosterone (total &amp; free)</li>
              <li>Estradiol, SHBG</li>
              <li>DHEA-S, cortisol</li>
              <li>IGF-1</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <h4 className="font-bold text-gray-900 mb-2">Comprehensive / longevity</h4>
            <div className="text-sm text-green-600 font-semibold mb-2">~$450-850 (estimate)</div>
            <ul className="text-sm text-gray-600 space-y-1 mb-0">
              <li>Above, plus:</li>
              <li>ApoB, Lp(a)</li>
              <li>hs-CRP, homocysteine</li>
              <li>Insulin, HOMA-IR</li>
              <li>Liver, kidney, nutrients</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
          <p className="text-sm text-amber-800 mb-0">
            <strong>Prep matters.</strong> Many panels ask for an 8-12 hour fast, and hormone tests
            like testosterone are best drawn in the morning (about 7-10 AM) when levels peak. Test at
            a consistent time so results are comparable over time.
          </p>
        </div>
      </section>

      {/* Costs */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What it costs</h2>

          <p className="text-gray-700 mb-6">
            Cost depends on whether you buy a single test or a comprehensive membership, and whether a
            physician review is included. The figures below are <strong>estimates to verify with the
            provider</strong>, not guaranteed prices.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Service</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Estimated price</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Collection</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Notable</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Single Quest/LabCorp test</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~$30-120</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Lab draw</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Lipid / metabolic / single markers</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Everlywell</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$49-199/test</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Home finger prick</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Targeted single-issue testing</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">LetsGetChecked</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$69-149/test</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Home finger prick</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Nurse consultation included</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">SuperPower</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$199/year</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Lab visit (Quest)</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">100+ biomarkers, one panel/year</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Function Health</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$499/year</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Lab visit (Quest)</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">100+ markers, twice yearly</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">InsideTracker</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$249-589/test</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Lab visit</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">AI recommendations, athletes</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Marek Health</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">$250-850/panel</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Lab visit</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Physician consultation included</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            An optional at-home phlebotomist draw typically adds a fee (Quest Mobile lists this around
            $79). Prices and state availability change &mdash; verify before ordering.
          </p>

          <div className="mt-8 text-center">
            <Link
              href="/labs"
              className="inline-block rounded-lg bg-blue-600 px-8 py-4 text-lg font-medium text-white hover:bg-blue-700 transition-colors"
            >
              Compare Lab Testing Providers →
            </Link>
          </div>
        </div>
      </section>

      {/* Risks & considerations */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Risks and considerations</h2>

        <div className="prose prose-lg max-w-none">
          <p>
            Convenience comes with trade-offs. Self-ordered testing puts interpretation on you, and
            that is where most of the risk sits.
          </p>
          <ul>
            <li>
              <strong>No one is watching your results by default.</strong> If you skip the optional
              clinician review, an out-of-range value can go unaddressed. Treat any critical or
              unexpected result as a reason to see a clinician.
            </li>
            <li>
              <strong>&quot;In range&quot; is not the same as &quot;explained.&quot;</strong> Reference
              ranges describe a population, not your situation. Numbers need clinical context.
            </li>
            <li>
              <strong>Collection method affects reliability.</strong> Professional draws match
              doctor-ordered accuracy; finger-prick kits are good for trending but more variable.
            </li>
            <li>
              <strong>State rules and coverage vary.</strong> Some services exclude restrictive states
              (commonly New York, New Jersey, Rhode Island). Confirm availability for your state.
            </li>
            <li>
              <strong>Over-testing wastes money.</strong> Most markers change slowly; quarterly at most
              is plenty for routine tracking.
            </li>
          </ul>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 not-prose my-6">
            <p className="text-sm text-yellow-800 mb-0">
              <strong>Red flag:</strong> any service that promises to diagnose or &quot;cure&quot; a
              condition from a single panel, or that discourages you from involving a clinician.
              Legitimate testing reports data and defers diagnosis to a professional.
            </p>
          </div>
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

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/at-home-lab-testing-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧪</span>
              <div>
                <div className="font-bold text-gray-900">At-Home Lab Testing Guide</div>
                <div className="text-sm text-gray-600">Collection models, accuracy, what to track</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/everlywell-vs-letsgetchecked" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚖️</span>
              <div>
                <div className="font-bold text-gray-900">Everlywell vs LetsGetChecked</div>
                <div className="text-sm text-gray-600">At-home kit comparison: price, tests, turnaround</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/trt-testosterone-therapy" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💪</span>
              <div>
                <div className="font-bold text-gray-900">TRT Complete Guide</div>
                <div className="text-sm text-gray-600">Why morning testosterone draws and monitoring matter</div>
              </div>
            </div>
          </Link>

          <Link href="/labs" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🔬</span>
              <div>
                <div className="font-bold text-gray-900">Lab Testing Providers</div>
                <div className="text-sm text-gray-600">Compare self-order services side by side</div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-gray-100 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-2">Medical Disclaimer</h3>
          <p className="text-sm text-gray-600 mb-3">
            This guide is for informational purposes only and does not constitute medical or legal
            advice. Lab results should be interpreted by a qualified healthcare provider, and
            availability of direct-access testing varies by state. Prices are estimates that change
            over time &mdash; confirm current pricing, test menus, and state availability directly with
            each provider. Always consult a clinician about what to test and what your results mean.
          </p>
          <p className="text-sm text-gray-600 mb-0">
            <strong>Affiliate disclosure:</strong> VitalityScout may earn a commission from some links,
            at no additional cost to you. This never affects which providers we list or how we describe
            them.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Get Our Self-Order Lab Testing Checklist"
          description="How to choose a service, what to test by goal, prep steps, and state-by-state notes."
          source="guide_blood_test_without_a_doctor"
        />
      </div>

      </SidebarShell>
      <Footer />
    </main>
  );
}
