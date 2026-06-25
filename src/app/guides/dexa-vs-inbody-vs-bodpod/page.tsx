import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'DEXA vs InBody vs Bod Pod: Body Composition Test Guide' },
  alternates: { canonical: 'https://vitalityscout.com/guides/dexa-vs-inbody-vs-bodpod' },
  description:
    'DEXA vs InBody body composition test compared with Bod Pod: accuracy, cost ($45-179), radiation, and what each method measures. Pick the right scan.',
};

// Real PAA / conversational long-tail questions. Each answer is drawn only from
// facts stated on this page, and every price/accuracy answer carries the
// verify-with-provider hedge. The visible FAQ block mirrors this exactly.
const FAQ_ITEMS = [
  {
    question: 'Is DEXA more accurate than InBody for body fat percentage?',
    answer:
      'DEXA is generally treated as the reference (gold-standard) consumer method, measuring fat, lean tissue, and bone directly via low-dose X-ray. InBody uses bioelectrical impedance, which estimates rather than images, and tends to underestimate body-fat percentage versus DEXA. A 2025 real-world study of 1,000 adults found the InBody underestimated body fat by roughly 4 percentage points in men under typical (non-fasted) conditions. InBody is still highly repeatable for tracking trends. Confirm device models and protocols with the provider.',
  },
  {
    question: 'How much does each body composition test cost?',
    answer:
      'Estimates vary by city and provider. DEXA body composition scans commonly run about $45-50 at BodySpec, $119-179 at DexaFit, and roughly $75-200 at university and research-grade labs. InBody scans are often $15-30 and are frequently free or included at gyms. Bod Pod sessions typically run about $30-45 where available. These are ranges to confirm directly with each provider, as pricing and packages change.',
  },
  {
    question: 'Does an InBody scan use radiation like DEXA?',
    answer:
      'No. InBody uses a small, painless electrical current (bioelectrical impedance), not radiation, and Bod Pod uses air-pressure measurement, also with no radiation. A whole-body DEXA scan does use a very low X-ray dose, commonly cited around 4-5 microsieverts, roughly half a day of normal background radiation. DEXA is generally considered safe for routine body-composition use, but it is not recommended during pregnancy. Discuss any concerns with a clinician.',
  },
  {
    question: 'Which body composition test should I use to track progress?',
    answer:
      'For tracking the same body over time, consistency matters more than which method is most accurate in absolute terms. InBody and Bod Pod are convenient and repeatable for frequent check-ins. DEXA is the most detailed for periodic precision checks because it also reports bone density, visceral fat, and left-right and regional breakdowns. Many people use a cheaper method monthly and a DEXA quarterly. Whichever you pick, keep the protocol (time of day, hydration, fasting) the same.',
  },
  {
    question: 'Why do InBody and Bod Pod results differ from my DEXA scan?',
    answer:
      'They use different physics. DEXA images tissue directly; InBody infers composition from how a current passes through the body (sensitive to hydration, meals, and recent exercise); Bod Pod infers it from body volume and density. Research shows Bod Pod can overestimate body fat in very lean people and underestimate it in heavier people, while InBody commonly reads lower than DEXA. Expect different absolute numbers across methods, and avoid comparing one method against another.',
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

export default function DexaVsInBodyVsBodPod() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'DEXA vs InBody vs Bod Pod: Body Composition Test Comparison',
    description:
      'A side-by-side comparison of the three most common body composition tests — DEXA, InBody (bioelectrical impedance), and Bod Pod (air displacement) — covering accuracy, cost, radiation, and what each measures.',
    url: 'https://vitalityscout.com/guides/dexa-vs-inbody-vs-bodpod',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/dexa-vs-inbody-vs-bodpod#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalTest',
      name: 'Body composition analysis',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-23',
    dateModified: '2026-06-23',
    citation: [
      {
        '@type': 'CreativeWork',
        name: 'McLester et al. — Reliability and Agreement of InBody Analyzers vs DEXA (PubMed)',
        url: 'https://pubmed.ncbi.nlm.nih.gov/30472111/',
      },
      {
        '@type': 'CreativeWork',
        name: 'Real-world assessment of MFBIA (InBody) vs DEXA — European Journal of Clinical Nutrition',
        url: 'https://www.nature.com/articles/s41430-025-01664-4',
      },
      {
        '@type': 'CreativeWork',
        name: 'Air Displacement Plethysmography vs DEXA across BMI groups (PMC)',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4301864/',
      },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/dexa-vs-inbody-vs-bodpod#faq', url: 'https://vitalityscout.com/guides/dexa-vs-inbody-vs-bodpod' };

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
            <span className="text-gray-900">DEXA vs InBody vs Bod Pod</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/dexa-scans" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; DEXA Scan Hub
          </Link>

          <div className="mb-4">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              Comparison
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            DEXA vs InBody vs Bod Pod: Which Body Composition Test Is Right for You?
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            Three common ways to measure body fat and muscle — one X-ray, one electrical, one
            air-pressure. They measure different things, cost very different amounts, and rarely
            agree on the same number. Here is how to choose.
          </p>

          {/* Direct-answer lead: self-contained 40-80 word summary of the head query */}
          <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              For a <strong>DEXA vs InBody body composition test</strong> decision: DEXA is the most
              detailed and is treated as the reference method (it also reports bone density and
              visceral fat) but costs more (about <strong>$45-179</strong>) and uses a very low X-ray
              dose. <strong>InBody</strong> (bioelectrical impedance) is cheap or free and great for
              frequent tracking, but tends to read body fat lower than DEXA. <strong>Bod Pod</strong>{' '}
              (air displacement) sits in between. Pick one method and stay consistent. This is
              information, not medical advice.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Comparison</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Factor</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">DEXA</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">InBody (BIA)</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Bod Pod (ADP)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Method</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Dual-energy X-ray (direct imaging)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Electrical current (impedance)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Air displacement (volume + density)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">What it measures</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Fat, lean mass, bone, visceral fat, regional</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Fat + lean estimate; some models estimate visceral fat</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Fat mass vs fat-free mass (2 compartments)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Typical cost (estimate)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~$45-179 per scan</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~$15-30; often free at gyms</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~$30-45 per session</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Radiation</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Very low (~4-5 µSv)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">None</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">None</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Bone density</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Yes</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">No</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">No</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Sensitive to hydration / meals</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Minimal</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Yes (notable)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Some (clothing, breathing, hair)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Test time</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~7-10 minutes</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~1-2 minutes</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~5 minutes</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Availability</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Studios, mobile units, labs</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Widespread (gyms, clinics)</td>
                <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Less common (labs, universities)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Cost ranges are estimates that vary by city and provider — confirm current pricing
          directly before booking. Accuracy figures are summarized from the studies cited at the
          foot of this page.
        </p>
      </section>

      {/* What each measures */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Each Test Actually Measures</h2>

          <div className="prose prose-lg max-w-none">
            <h3>DEXA — direct imaging of three tissues</h3>
            <p>
              DEXA (dual-energy X-ray absorptiometry) sends two low-energy X-ray beams through the
              body and separates the signal into <strong>fat, lean soft tissue, and bone</strong>.
              Because it images tissue directly rather than estimating from a formula, it is the
              method most consumer studies use as the reference standard. It is also the only one of
              the three that reports <strong>bone mineral density</strong>, <strong>visceral fat</strong>{' '}
              (the metabolically risky fat around your organs), and a <strong>regional breakdown</strong>{' '}
              of arms, legs, and trunk, including left-right asymmetry.
            </p>

            <h3>InBody — estimating from electrical resistance</h3>
            <p>
              InBody devices use <strong>bioelectrical impedance analysis (BIA)</strong>: a tiny,
              painless current passes through the body, and the machine estimates composition from how
              that current is resisted. It is fast, has no radiation, and is widely available — often
              free at a gym. The trade-off is that it estimates rather than measures, and the estimate
              shifts with hydration, recent meals, and exercise.
            </p>

            <h3>Bod Pod — measuring body volume with air</h3>
            <p>
              The Bod Pod uses <strong>air displacement plethysmography (ADP)</strong>: you sit in a
              sealed chamber and the device measures how much air your body displaces to calculate
              volume and density, then splits you into two compartments —{' '}
              <strong>fat mass and fat-free mass</strong>. No radiation, no electrical current. It
              does not report bone density or where fat sits on the body.
            </p>
          </div>
        </div>
      </section>

      {/* Accuracy */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How Accurate Is Each One?</h2>

        <div className="prose prose-lg max-w-none">
          <p>
            &quot;Accuracy&quot; means two different things: how close a single reading is to the
            true value, and how repeatable the reading is. The methods rank differently on each.
          </p>

          <h3>DEXA: the reference standard</h3>
          <p>
            DEXA is generally treated as the most accurate widely available consumer method. Because
            it images tissue directly, the result does not depend much on hydration or whether you
            ate breakfast. That is why DEXA is the comparison point in most validation studies.
          </p>

          <h3>InBody: very repeatable, but reads low vs DEXA</h3>
          <p>
            Research is consistent on two points. First, InBody devices are{' '}
            <strong>highly repeatable</strong> — a peer-reviewed reliability study reported intraclass
            correlation coefficients of <strong>0.98 or higher</strong> for body-fat percentage across
            several InBody models, meaning you get nearly the same number scan to scan. Second, they
            carry a <strong>systematic bias versus DEXA</strong>: the same study found InBody tends to
            underestimate body-fat percentage and overestimate fat-free mass. A 2025 real-world study
            of about 1,000 adults under typical (non-fasted) conditions found InBody underestimated
            body fat by roughly <strong>4 percentage points in men</strong>, with notable error on
            visceral-fat estimates specifically.
          </p>

          <h3>Bod Pod: good in the middle, biased at the extremes</h3>
          <p>
            Bod Pod agreement with DEXA is best for normal-weight people and degrades toward the BMI
            extremes. A peer-reviewed comparison across body-weight groups found Bod Pod tended to{' '}
            <strong>overestimate body fat in very lean individuals</strong> (differences up to about
            13 percentage points in some underweight participants) and{' '}
            <strong>underestimate it in heavier individuals</strong>. For a middle-of-the-range
            person, agreement was much tighter (roughly 2 percentage points).
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 not-prose my-6">
            <p className="text-sm text-yellow-800">
              <strong>The practical takeaway:</strong> because each method has its own bias, the
              numbers will not match across methods. Do not compare an InBody reading to a DEXA
              reading and conclude you gained or lost fat — you may just be comparing two different
              rulers. Pick one method and track it against itself.
            </p>
          </div>
        </div>
      </section>

      {/* Cost */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cost Comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Test</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Where to find it</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Estimated price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">DEXA (budget)</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">BodySpec mobile units &amp; studios</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~$45-50/scan</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">DEXA (premium)</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">DexaFit studios (often bundled with RMR / VO2)</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~$119-179/scan</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">DEXA (research-grade)</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">University exercise-physiology labs</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~$75-200/scan</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">InBody (BIA)</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Gyms, clinics, wellness centers</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~$15-30; often free</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Bod Pod (ADP)</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Universities, sports-performance labs</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">~$30-45/session</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Estimates only; packages and multi-scan bundles lower per-scan cost. Confirm current
            pricing and locations with each provider before booking. For DEXA specifically, browse
            the <Link href="/dexa-scans" className="text-blue-600 hover:underline">DEXA clinic directory</Link>{' '}
            and the <Link href="/guides/bodyspec-vs-dexafit" className="text-blue-600 hover:underline">BodySpec vs DexaFit comparison</Link>.
          </p>
        </div>
      </section>

      {/* Radiation / safety */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Radiation &amp; Safety</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Only DEXA uses X-rays, and the dose for a body-composition scan is very low — commonly
            cited at about <strong>4-5 microsieverts</strong>, roughly half a day of the natural
            background radiation most people receive anyway, and a small fraction of a cross-country
            flight. DEXA is generally considered safe for routine body-composition tracking, but it
            is <strong>not recommended during pregnancy</strong> and may not be appropriate right
            after certain contrast imaging.
          </p>
          <p>
            <strong>InBody</strong> and <strong>Bod Pod</strong> use no ionizing radiation at all —
            an electrical current and air pressure, respectively. If avoiding any radiation is a
            priority, either is a reasonable choice. As always, discuss your situation with a
            licensed clinician.
          </p>
        </div>
      </section>

      {/* Best for */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Best For: Match the Test to Your Goal</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Choose DEXA if&hellip;</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>You want the most detailed single read, including bone density and visceral fat</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>You care about regional and left-right muscle breakdown</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>You want a precise periodic checkpoint (for example, quarterly)</span></li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Choose InBody if&hellip;</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>You want frequent, low-cost or free check-ins</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>Convenience (often already at your gym) matters most</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>You will standardize conditions and track the trend, not the absolute number</span></li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border-2 border-purple-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Bod Pod if&hellip;</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>You want a no-radiation option more rigorous than gym BIA</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>You are in a normal BMI range (agreement is best there)</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span><span>A university or sports-performance lab near you offers it</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Decision framework */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">A Simple Decision Framework</h2>
        <div className="prose prose-lg max-w-none">
          <ol>
            <li>
              <strong>Start with your goal.</strong> Tracking body recomposition over months? Frequent
              cheap measurements (InBody) plus an occasional DEXA beats one expensive scan in
              isolation.
            </li>
            <li>
              <strong>Decide if you need bone or visceral-fat data.</strong> If yes, only DEXA
              delivers it.
            </li>
            <li>
              <strong>Pick one primary method and lock the protocol.</strong> Same time of day, same
              hydration and fasting state, ideally the same machine. Consistency drives trustworthy
              trends.
            </li>
            <li>
              <strong>Do not mix rulers.</strong> Compare DEXA to DEXA and InBody to InBody. Switching
              methods mid-journey introduces a bias that can masquerade as real change.
            </li>
          </ol>
          <p>
            Once you have a baseline, the next step is acting on it — adjusting training, protein, and
            (where appropriate and clinician-guided) weight-management treatment. See our{' '}
            <Link href="/weight-loss" className="text-blue-600 hover:underline">weight-loss options</Link>{' '}
            and the <Link href="/guides/dexa-scan-guide" className="text-blue-600 hover:underline">complete DEXA scan guide</Link>{' '}
            for what the numbers mean and how to use them.
          </p>
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

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/dexa-scan-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <div>
                <div className="font-bold text-gray-900">DEXA Scan: Complete Guide</div>
                <div className="text-sm text-gray-600">What DEXA measures and how to track real progress</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/bodyspec-vs-dexafit" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚖️</span>
              <div>
                <div className="font-bold text-gray-900">BodySpec vs DexaFit</div>
                <div className="text-sm text-gray-600">The two leading DEXA services, compared</div>
              </div>
            </div>
          </Link>

          <Link href="/dexa-scans" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <div className="font-bold text-gray-900">DEXA Scan Hub</div>
                <div className="text-sm text-gray-600">Find body-composition clinics by city</div>
              </div>
            </div>
          </Link>

          <Link href="/weight-loss" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💊</span>
              <div>
                <div className="font-bold text-gray-900">Weight-Loss Options</div>
                <div className="text-sm text-gray-600">Cash-pay GLP-1 and medical weight-loss paths</div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-gray-100 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-2">Important Disclaimer</h3>
          <p className="text-sm text-gray-600">
            This guide is for informational purposes only and does not constitute medical advice.
            Body-composition readings vary by method, device, hydration, and protocol, and no test
            is perfect. Pricing and availability are estimates that change — verify current pricing,
            services, and credentials directly with each provider before booking. DEXA involves
            minimal radiation and may not be appropriate during pregnancy. Always consult a qualified
            healthcare provider before making health decisions. VitalityScout does not endorse any
            specific provider or guarantee any outcome.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="mx-auto max-w-4xl px-4 pb-8">
        <div className="border-t border-gray-200 pt-8">
          <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              •{' '}
              <a href="https://pubmed.ncbi.nlm.nih.gov/30472111/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">
                Reliability and agreement of InBody analyzers vs DEXA (PubMed)
              </a>{' '}
              — InBody test-retest reliability (ICC ≥0.98) and systematic underestimation of body fat
            </li>
            <li>
              •{' '}
              <a href="https://www.nature.com/articles/s41430-025-01664-4" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">
                Real-world MFBIA (InBody) vs DEXA — European Journal of Clinical Nutrition (2025)
              </a>{' '}
              — InBody underestimated body fat by ~4 percentage points in men under typical conditions
            </li>
            <li>
              •{' '}
              <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4301864/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">
                Air displacement plethysmography vs DEXA across BMI groups (PMC)
              </a>{' '}
              — Bod Pod over/underestimation by body-weight category
            </li>
            <li>
              •{' '}
              <a href="https://www.bodyspec.com/blog/post/dexa_scan_radiation_how_much_is_it_and_is_it_safe" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">
                BodySpec — DEXA scan radiation explained
              </a>{' '}
              — whole-body DEXA dose (~4-5 µSv) vs daily background and a flight
            </li>
            <li>• BodySpec and DexaFit official websites — current DEXA pricing and service offerings</li>
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Get Our Body Composition Testing Cheat Sheet"
          description="DEXA vs InBody vs Bod Pod: accuracy, cost, and how to track results that actually mean something."
          source="guide_dexa_vs_inbody_vs_bodpod"
        />
      </div>

      <Footer />
    </main>
  );
}
