import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: 'At-Home Testosterone Test: Accuracy, Cost & When to Confirm',
  description:
    'How at-home testosterone tests work, how accurate finger-prick kits are vs a lab draw, what they cost, and when to confirm low results with a clinician.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price answer ends with the verify-with-
// provider hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How accurate is an at-home testosterone test compared to a lab blood draw?',
    answer:
      'A well-run at-home test processed by a CLIA-certified lab gives a reasonable estimate of your total testosterone and is useful for screening or tracking a trend. It is generally considered less precise than a venous lab draw, because finger-prick samples are smaller and can be affected by collection technique. For a clinical diagnosis, a clinician confirms low results with a standard morning venous blood draw. Treat the at-home number as a screen, not a diagnosis.',
  },
  {
    question: 'How much does an at-home testosterone test cost?',
    answer:
      'Single-marker at-home testosterone kits run roughly $69 to $89 — Everlywell lists its test at $69, myLAB Box at $79, and LetsGetChecked at $89. Broader male-hormone panels that add SHBG, estradiol, prolactin, or cortisol cost more (LetsGetChecked lists $179 for its Advanced panel and $199 for Complete). A self-pay venous lab draw for a hormone panel often runs higher. These are advertised prices that change; confirm current pricing directly with the provider.',
  },
  {
    question: 'What is the best time of day to take a testosterone test?',
    answer:
      'Early morning, ideally between 7 and 10 a.m., and fasting. Testosterone follows a daily rhythm — in men aged 30 to 40, levels measured at 4 p.m. were about 20-25% lower than at 8 a.m. in a 2008 study in the Journal of Clinical Endocrinology and Metabolism. An afternoon sample can read falsely low. Most at-home kits instruct you to collect first thing in the morning for this reason.',
  },
  {
    question: 'Are saliva or finger-prick testosterone tests reliable?',
    answer:
      'Most at-home kits use a finger-prick blood sample — Everlywell, myLAB Box, and the base LetsGetChecked testosterone kit all collect blood by finger-prick; LetsGetChecked adds a saliva sample only on its broader Complete male-hormone panel. Blood-based total testosterone is generally regarded as more informative than saliva, which reflects only the small free fraction. Finger-prick blood from an accredited lab is reasonable for screening but is more sensitive to collection technique than a venous draw. If a result lands near a decision threshold, a clinician will typically confirm with a venous draw.',
  },
  {
    question: 'When should I confirm an at-home result with a clinician?',
    answer:
      'Confirm with a clinician any time an at-home result is low or you have symptoms such as low libido, fatigue, or loss of muscle. Diagnosis guidelines from the Endocrine Society and the American Urological Association call for at least two early-morning measurements before diagnosing testosterone deficiency, with the AUA using a threshold of under 300 ng/dL alongside symptoms. An at-home kit is a starting point; a clinician interprets results, repeats the test, and rules out other causes.',
  },
  {
    question: 'Is an at-home testosterone test HSA or FSA eligible?',
    answer:
      'Often, yes. Everlywell, for example, accepts HSA and FSA payment for its at-home testosterone test, and many lab-test platforms do the same. Eligibility can depend on your plan administrator and whether the test is considered medical care. Confirm with the test provider and your HSA/FSA administrator before you buy, and keep the receipt for reimbursement.',
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

// Real, currently-live at-home testosterone test kits (prices checked against
// each provider's own product page, June 2026). Prices are advertised estimates
// to confirm with the provider. Method/marker facts sourced per the manifest.
const TEST_KITS = [
  {
    name: 'Everlywell Testosterone Test',
    price: '$69',
    sample: 'Finger-prick blood',
    measures: 'Total testosterone',
    note: 'Physician-reviewed results in a few days via your online account. CLIA-certified partner labs; HSA/FSA accepted.',
    website: 'https://www.everlywell.com/products/testosterone-test/',
  },
  {
    name: 'myLAB Box Testosterone Test',
    price: '$79',
    sample: 'Finger-prick blood',
    measures: 'Testosterone',
    note: 'Results in 2-5 days via a secure portal. CLIA-certified and CAP-accredited labs; includes a free phone consult with a physician.',
    website: 'https://www.mylabbox.com/product/at-home-testosterone-test-kit/',
  },
  {
    name: 'LetsGetChecked Testosterone Test',
    price: '$89',
    sample: 'Finger-prick blood (saliva added on Complete panel)',
    measures: 'Testosterone',
    note: 'Results in ~2-5 days; clinical team may call to discuss abnormal results. Advanced panel $179, Complete $199 add SHBG, estradiol, prolactin, cortisol.',
    website: 'https://www.letsgetchecked.com/home-male-hormone-test/',
  },
];

export default function AtHomeTestosteroneTest() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'At-Home Testosterone Test: Accuracy, Cost & When to Confirm',
    description:
      'How at-home testosterone tests work, how accurate finger-prick kits are versus a venous lab draw, what they cost, and when to confirm a low result with a clinician.',
    url: 'https://vitalityscout.com/guides/at-home-testosterone-test',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/at-home-testosterone-test#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalTest',
      name: 'At-home testosterone test (total testosterone)',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'Everlywell — Testosterone Test (price, method)', url: 'https://www.everlywell.com/products/testosterone-test/' },
      { '@type': 'CreativeWork', name: 'myLAB Box — At-Home Testosterone Test Kit', url: 'https://www.mylabbox.com/product/at-home-testosterone-test-kit/' },
      { '@type': 'CreativeWork', name: 'LetsGetChecked — At-Home Male Hormone Testing', url: 'https://www.letsgetchecked.com/home-male-hormone-test/' },
      { '@type': 'CreativeWork', name: 'JCEM (2008) — Effect of Diurnal Variation on Serum Testosterone in Men', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2681273/' },
      { '@type': 'CreativeWork', name: 'Endocrine Society — Testosterone Therapy in Men With Hypogonadism Clinical Practice Guideline', url: 'https://academic.oup.com/jcem/article/103/5/1715/4939465' },
      { '@type': 'CreativeWork', name: 'AUA — Evaluation and Management of Testosterone Deficiency Guideline', url: 'https://www.auanet.org/guidelines-and-quality/guidelines/testosterone-deficiency-guideline' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/at-home-testosterone-test#faq', url: 'https://vitalityscout.com/guides/at-home-testosterone-test' };

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
              Lab Testing Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            At-Home Testosterone Test
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            How the kits work, how accurate a finger-prick is versus a lab draw, what
            they cost, and the point where you should confirm a result with a clinician.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              An at-home testosterone test uses a morning finger-prick blood (or saliva)
              sample you mail to a <strong>CLIA-certified lab</strong> to estimate your
              total testosterone, typically for <strong>$69 to $89</strong>. It is a
              reliable screen but less precise than a venous lab draw. Because levels are
              highest in the morning, collect early and fasting. Confirm any low result
              with a clinician before drawing conclusions. This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 11 min read
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How an At-Home Testosterone Test Works</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            The process is the same across the major kits. You order online, a kit ships to
            you, you collect a small sample at home — almost always first thing in the morning —
            and you mail it back in a prepaid envelope. An accredited lab runs the assay and posts
            results to a secure online account, usually within a few days.
          </p>
          <ul>
            <li>
              <strong>Sample type.</strong> Most blood kits use a <strong>finger-prick</strong>
              {' '}sample collected onto a card or into a small tube. Everlywell, myLAB Box, and the
              base LetsGetChecked testosterone kit all use a finger-prick blood sample; LetsGetChecked
              adds a saliva sample only on its broader Complete male-hormone panel.
            </li>
            <li>
              <strong>What it measures.</strong> The single-marker kits report <strong>total
              testosterone</strong>. Broader panels add markers such as SHBG, free androgen index,
              estradiol, prolactin, or cortisol, which give a fuller hormonal picture.
            </li>
            <li>
              <strong>Where it is run.</strong> Reputable kits process samples at
              <strong> CLIA-certified</strong> (and sometimes CAP-accredited) U.S. labs — the same
              quality framework clinical labs use. myLAB Box, for example, states it uses CLIA and
              CAP-accredited laboratories.
            </li>
          </ul>
          <p>
            The convenience is real: no appointment, no waiting room, and results in your inbox.
            The trade-off is precision and interpretation, which is where a clinician comes in.
          </p>
        </div>
      </section>

      {/* Price snapshot table */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">At-Home Testosterone Test Price Snapshot (2026)</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-white">
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Test</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Price</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Sample</th>
                  <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Measures</th>
                </tr>
              </thead>
              <tbody>
                {TEST_KITS.map((k, i) => (
                  <tr key={k.name} className={i % 2 === 1 ? 'bg-white' : ''}>
                    <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{k.name}</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-700">{k.price}</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{k.sample}</td>
                    <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{k.measures}</td>
                  </tr>
                ))}
                <tr className="bg-blue-50">
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">Self-pay venous lab draw (estimate)</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-700">Often higher</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Venous blood at a lab</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">Total testosterone (+ panel options)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Prices are advertised rates checked in June 2026 and change frequently. Broader male-hormone
            panels (SHBG, estradiol, prolactin, cortisol) cost more — LetsGetChecked lists $179 for its
            Advanced panel and $199 for Complete. Self-pay venous draws for a hormone panel often run
            higher. Confirm current pricing directly with each provider before buying. Compare cash-pay
            options on the{' '}
            <Link href="/hormone-therapy" className="text-blue-600 hover:underline">
              hormone therapy hub
            </Link>.
          </p>
        </div>
      </section>

      {/* Accuracy: at-home vs lab draw */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Accuracy: At-Home Kit vs a Lab Blood Draw</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            The honest answer: an at-home test is a good <strong>screen</strong>, not a diagnosis.
            A finger-prick sample run by a CLIA-certified lab can give you a reasonable estimate of
            your total testosterone and is useful for spotting a trend over time. A standard{' '}
            <strong>venous blood draw</strong> at a lab remains the reference method clinicians rely
            on, for a few concrete reasons:
          </p>
          <ul>
            <li>
              <strong>Sample volume and technique.</strong> A finger-prick collects a much smaller
              volume than a venous draw, so results can be less consistent near a decision threshold,
              and collection technique matters more.
            </li>
            <li>
              <strong>Blood beats saliva for total testosterone.</strong> Saliva reflects only the
              small free fraction of testosterone, so a blood-based total is generally more informative.
            </li>
            <li>
              <strong>Assay and consistency.</strong> Diagnosis guidelines emphasize using an accurate,
              reliable assay and, ideally, the same lab and assay across repeat tests so two results are
              comparable.
            </li>
          </ul>
          <p>
            None of that makes at-home kits useless. It makes them a first step. If the number comes back
            low, the next step is confirmation, not a conclusion.
          </p>
        </div>
      </section>

      {/* Timing matters */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Morning Timing Changes the Result</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Testosterone follows a daily rhythm: it peaks in the early morning and falls through the
              day. The size of that swing is large enough to flip a result. In a 2008 study in the{' '}
              <em>Journal of Clinical Endocrinology &amp; Metabolism</em>, men aged 30 to 40 had
              testosterone levels roughly <strong>20-25% lower at 4 p.m. than at 8 a.m.</strong> The
              effect shrinks with age — about a <strong>10% difference by age 70</strong> — but for most
              men it is meaningful.
            </p>
            <p>
              That is why nearly every at-home kit tells you to collect <strong>first thing in the
              morning</strong>, and why clinical guidelines call for <strong>fasting, early-morning
              (roughly 7-10 a.m.)</strong> samples. An afternoon test can read falsely low and send you
              down the wrong path. If your kit arrives mid-afternoon, wait and collect the next morning.
            </p>
          </div>
        </div>
      </section>

      {/* When to confirm */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">When to Confirm With a Clinician</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            An at-home result is a conversation-starter with a clinician, not a verdict. Confirm
            professionally if any of the following is true:
          </p>
          <ul>
            <li>Your result is <strong>low</strong>, or close to the threshold.</li>
            <li>You have symptoms — low libido, persistent fatigue, low mood, or loss of muscle.</li>
            <li>You are considering treatment of any kind based on the number.</li>
          </ul>
          <p>
            Major guidelines are aligned on what a real diagnosis requires. The Endocrine Society
            recommends confirming low testosterone with <strong>at least two early-morning, fasting
            measurements</strong>, because levels vary day to day and through the day. The American
            Urological Association uses a threshold of <strong>under 300 ng/dL on two separate
            early-morning tests</strong>, combined with symptoms, before diagnosing testosterone
            deficiency — and notes the repeat tests should ideally use the same lab and assay.
          </p>
          <p>
            In practice, that means: use an at-home kit to screen, then bring a low result to a clinician
            who will repeat the test properly, interpret it in context, and look for underlying causes
            before anyone talks about treatment. Treatment decisions are clinical decisions.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 not-prose my-6">
            <p className="text-sm text-yellow-800">
              <strong>Important:</strong> Do not start, stop, or adjust any hormone treatment based on an
              at-home result alone. Testosterone therapy carries risks and requires medical supervision and
              follow-up monitoring. Talk to a licensed clinician.
            </p>
          </div>
        </div>
      </section>

      {/* Kit cards */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Three At-Home Testosterone Tests</h2>
          <p className="text-gray-600 mb-6">
            Three currently available at-home testosterone tests, with the details that matter. Each was
            checked against the provider&apos;s own product page in June 2026; prices change, so confirm before buying.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {TEST_KITS.map((k) => (
              <div key={k.name} className="bg-white rounded-lg border border-gray-200 p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-gray-900 pr-2">{k.name}</h3>
                  <span className="text-sm font-semibold text-green-700 whitespace-nowrap">{k.price}</span>
                </div>
                <div className="text-xs text-gray-500 mb-2">{k.sample} • {k.measures}</div>
                <p className="text-sm text-gray-600 mb-3">{k.note}</p>
                <a
                  href={k.website}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Visit provider site →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose (and Get a Usable Result)</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-lg border-2 border-green-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Best for a quick screen</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>A single total-testosterone kit ($69-89) if you just want a baseline number</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Look for CLIA-certified lab processing and clear morning-collection instructions</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Best for a fuller picture</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>A broader male-hormone panel (SHBG, estradiol, prolactin) if you have symptoms</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>A kit that includes a clinician phone consult to discuss results</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="prose prose-lg max-w-none mt-8">
          <p>Whichever you pick, a few practical steps make the result worth trusting:</p>
          <ul>
            <li>Collect <strong>first thing in the morning</strong>, fasting if the kit allows.</li>
            <li>Follow the collection card or tube instructions exactly — under-filling skews results.</li>
            <li>Mail the sample back the same day so it does not sit.</li>
            <li>If the result is low, plan to <strong>confirm with a clinician</strong> using a morning venous draw.</li>
            <li>Check whether the test is <strong>HSA/FSA eligible</strong> and keep the receipt.</li>
          </ul>
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
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Low T on a Home Test? See Your Cash-Pay Options</h3>
          <p className="text-gray-600 mb-6">
            Compare hormone-therapy clinics and telehealth providers that confirm results properly and
            treat under medical supervision.
          </p>
          <Link
            href="/hormone-therapy"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            Explore Hormone Therapy →
          </Link>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Link href="/guides/trt-testosterone-therapy" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💪</span>
              <div>
                <div className="font-bold text-gray-900">TRT: Complete Guide</div>
                <div className="text-sm text-gray-600">Low-T symptoms, options, costs, and risks</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/best-online-trt-clinics" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏆</span>
              <div>
                <div className="font-bold text-gray-900">Best Online TRT Clinics</div>
                <div className="text-sm text-gray-600">How the leading telehealth TRT clinics compare</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/blood-test-without-a-doctor" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🩸</span>
              <div>
                <div className="font-bold text-gray-900">Blood Test Without a Doctor</div>
                <div className="text-sm text-gray-600">How self-order labs work, costs, and state rules</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/at-home-lab-testing-guide" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🧪</span>
              <div>
                <div className="font-bold text-gray-900">At-Home Lab Testing Guide</div>
                <div className="text-sm text-gray-600">How home tests work and accuracy vs doctor labs</div>
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
            <li>• <a href="https://www.everlywell.com/products/testosterone-test/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Everlywell — Testosterone Test (price, method, CLIA, HSA/FSA)</a></li>
            <li>• <a href="https://www.mylabbox.com/product/at-home-testosterone-test-kit/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">myLAB Box — At-Home Testosterone Test Kit (price, CLIA/CAP, consult)</a></li>
            <li>• <a href="https://www.letsgetchecked.com/home-male-hormone-test/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">LetsGetChecked — At-Home Male Hormone Testing (prices, panels, support)</a></li>
            <li>• <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2681273/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">JCEM (2008) — Diurnal Variation in Serum Testosterone in Men</a></li>
            <li>• <a href="https://academic.oup.com/jcem/article/103/5/1715/4939465" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Endocrine Society — Testosterone Therapy in Men With Hypogonadism Guideline</a></li>
            <li>• <a href="https://www.auanet.org/guidelines-and-quality/guidelines/testosterone-deficiency-guideline" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">AUA — Evaluation and Management of Testosterone Deficiency Guideline</a></li>
          </ul>
        </div>
      </section>

      {/* Medical + affiliate disclosure */}
      <MedicalDisclaimer />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Tracking Your Hormones?"
          description="Get our at-home testosterone test comparison plus a simple checklist for collecting a result you can actually trust."
          source="guide_at_home_testosterone_test"
        />
      </div>

      <Footer />
    </main>
  );
}
