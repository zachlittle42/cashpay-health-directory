import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'At-Home Hormone Test: What to Test, Accuracy & Cost' },
  alternates: { canonical: 'https://vitalityscout.com/guides/at-home-hormone-test' },
  description: 'At-home hormone tests for cortisol, estrogen, progesterone & testosterone — what to test, how accurate they are, sample type, and 2026 cash prices.',
};

// Real conversational / People-Also-Ask questions, answered only from facts
// already stated on this page. Every price answer ends with the verify-with-
// provider hedge (consistent with MedicalDisclaimer). The visible FAQ block
// below mirrors this schema exactly — schema clarifies the page, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does an at-home hormone test cost?',
    answer:
      'At-home hormone tests range from about $89 for a single-marker finger-prick test (LetsGetChecked Testosterone Test) to roughly $249 for a comprehensive multi-hormone panel (Everlywell Women’s Health Test, which covers 10 biomarkers including estradiol, progesterone, cortisol, testosterone and thyroid). LetsGetChecked’s Female Hormone Test is $139 and its Male Hormone Complete is $199. Most are FSA/HSA-eligible. These are advertised prices that change and often go on sale; confirm current pricing directly with the provider.',
  },
  {
    question: 'Are at-home hormone tests accurate?',
    answer:
      'They can be, when matched to the right hormone and sample type. Reputable kits run your sample in a CLIA-certified (and often CAP-accredited) lab — the same standard as a doctor’s order. Blood is generally considered most precise for total hormone levels; saliva is well-suited to free cortisol and its daily rhythm. The bigger accuracy risk is timing and collection: hormones shift across the day and the menstrual cycle, so a sample taken at the wrong time can mislead. This is information, not medical advice — review results with a clinician.',
  },
  {
    question: 'When is the best time to collect an at-home hormone sample?',
    answer:
      'Morning, for most hormones. Cortisol and testosterone both peak in the early morning, so the standard window for a blood draw is roughly 7–9 AM — even a few hours’ delay can lower the reading. For cortisol’s daily pattern, saliva kits collect up to four samples (on waking, before lunch, before dinner, and before bed). Female reproductive hormones such as FSH, LH and estradiol are usually tested on a specific cycle day per the kit instructions. Follow the kit’s timing exactly; it is the single biggest controllable accuracy factor.',
  },
  {
    question: 'Do at-home hormone tests use blood or saliva?',
    answer:
      'Both, depending on the kit and hormone. Many panels use a finger-prick dried-blood-spot sample for hormones like testosterone, estradiol, FSH and LH. Saliva is commonly used for cortisol because it captures the free (unbound) hormone and is easy to collect at several time points without needles. Some comprehensive panels, such as Everlywell’s Women’s Health Test, combine both — finger-prick blood plus four saliva collections for cortisol. Check which sample type a kit uses before you buy.',
  },
  {
    question: 'Which hormones can you test at home?',
    answer:
      'Common at-home markers include the sex hormones (estradiol, progesterone, total testosterone), the reproductive pituitary hormones (FSH and LH), the stress hormone cortisol, DHEA, prolactin, and thyroid markers (TSH, Free T4, thyroid antibodies). Panels are usually grouped by goal — fertility, perimenopause, low-testosterone, or general hormone wellness. No at-home test diagnoses a condition on its own; abnormal results should be confirmed and interpreted by a licensed clinician.',
  },
  {
    question: 'Can an at-home hormone test replace seeing a doctor?',
    answer:
      'No. An at-home test is a screening and tracking tool, not a diagnosis. Reputable services have an independent physician review the order and results, and many will call you if a value is abnormal — but they cannot examine you, weigh your full history, or prescribe treatment off a single panel. Use at-home results as a starting point for a conversation with a clinician, especially before starting or changing any hormone therapy.',
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

// Real, currently-sold at-home hormone tests, prices re-checked against each
// provider's own product page in June 2026. Prices are advertised estimates to
// confirm with the provider; sale pricing is common. (Everlywell's standalone
// Perimenopause Test was removed 2026-06-24: every everlywell.com product URL
// for it now 301-redirects to the $249 Women's Health Test, so no resolving
// first-party source could back a separate $99 row — the perimenopause use-case
// is covered by the LetsGetChecked Female Hormone panel below.)
const HORMONE_TESTS = [
  {
    name: 'LetsGetChecked — Testosterone Test',
    audience: 'Single marker',
    price: 'From $89',
    sample: 'Finger-prick blood',
    measures: 'Testosterone only',
    note: 'CLIA-approved and CAP-accredited lab; results in ~2–5 days. Nurse team available, and a clinician calls if results are out of range.',
    website: 'https://www.letsgetchecked.com/home-testosterone-test/',
  },
  {
    name: 'LetsGetChecked — Female Hormone Test',
    audience: 'Fertility / cycle',
    price: 'From $139',
    sample: 'Finger-prick blood',
    measures: 'FSH, LH, prolactin, estradiol',
    note: 'CLIA-certified processing; secure online results in ~2–5 days. Tested on a specific cycle day per the kit instructions.',
    website: 'https://www.letsgetchecked.com/home-female-hormone-test/',
  },
  {
    name: 'LetsGetChecked — Male Hormone Complete',
    audience: 'Comprehensive (male)',
    price: 'From $199',
    sample: 'Finger-prick blood',
    measures: 'Testosterone, SHBG, free androgen index, prolactin, estradiol, cortisol',
    note: 'The broadest LetsGetChecked male panel; adds cortisol and estradiol to the standard testosterone markers.',
    website: 'https://www.letsgetchecked.com/male-hormone-complete-home-test-kit/',
  },
  {
    name: 'Everlywell — Women’s Health Test',
    audience: 'Comprehensive (female)',
    price: 'From $249',
    sample: 'Finger-prick blood + saliva',
    measures: '10 biomarkers: estradiol, progesterone, LH, FSH, DHEA, cortisol, TSH, Free T4, total testosterone, thyroid antibodies',
    note: 'CLIA-certified labs; cortisol collected 4 times across the day via saliva. Results reviewed by an independent board-certified physician; often discounted on sale.',
    website: 'https://www.everlywell.com/products/womens-health-test/',
  },
];

export default function AtHomeHormoneTest() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'At-Home Hormone Test: What to Test, Accuracy & Cost (2026)',
    description:
      'A 2026 guide to at-home hormone testing for cortisol, estrogen, progesterone and testosterone — what each panel measures, how accurate saliva vs blood collection is, when to collect, and what kits cost.',
    url: 'https://vitalityscout.com/guides/at-home-hormone-test',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/at-home-hormone-test#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalTest',
      name: 'At-home hormone test (cortisol, estradiol, progesterone, testosterone)',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'Everlywell — Women’s Health Test (biomarkers, sample, CLIA, pricing)', url: 'https://www.everlywell.com/products/womens-health-test/' },
      { '@type': 'CreativeWork', name: 'LetsGetChecked — Home Testosterone Test (CLIA/CAP, finger-prick, turnaround)', url: 'https://www.letsgetchecked.com/home-testosterone-test/' },
      { '@type': 'CreativeWork', name: 'LetsGetChecked — Female Hormone Test (FSH, LH, prolactin, estradiol, pricing)', url: 'https://www.letsgetchecked.com/home-female-hormone-test/' },
      { '@type': 'CreativeWork', name: 'Healthline — Diurnal Cortisol Test (saliva timing, peak/trough)', url: 'https://www.healthline.com/health/diurnal-cortisol-test' },
      { '@type': 'CreativeWork', name: 'Society for Endocrinology — timing of pituitary/cortisol testing', url: 'https://www.endocrinology.org/endocrinologist/134-winter19/features/24-hours-in-the-life-of-a-hormone-what-time-is-the-right-time-for-a-pituitary-function-test/' },
      { '@type': 'CreativeWork', name: 'NCBI/PMC — Salivary vs blood hormone concentrations: challenges and pitfalls', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12665927/' },
      { '@type': 'CreativeWork', name: 'News-Medical — Reliable saliva testing for female hormones (collection-tube cross-reactivity)', url: 'https://www.news-medical.net/whitepaper/20240506/5-key-points-to-ensure-reliable-and-accurate-saliva-testing-for-female-hormones.aspx' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/at-home-hormone-test#faq', url: 'https://vitalityscout.com/guides/at-home-hormone-test' };

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
              Labs Guide
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            At-Home Hormone Test
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What you can test at home — cortisol, estrogen, progesterone, testosterone — how
            accurate the kits are, when to collect, and what they cost in 2026.
          </p>

          {/* Direct-answer lead: a self-contained 40-80 word summary of the head
              query, restating facts detailed below — the extractable answer box. */}
          <div className="rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              An at-home hormone test lets you check hormones like cortisol, estradiol,
              progesterone, and testosterone using a finger-prick blood or saliva sample mailed
              to a CLIA-certified lab. Single-marker kits start near{' '}
              <strong>$89</strong>; comprehensive panels reach about <strong>$249</strong>. They
              are reliable when matched to the right sample type and collected at the right time,
              but they screen and track — they do not diagnose. Confirm pricing with the provider
              and review results with a clinician. This is information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: June 2026 • 10 min read
          </p>
        </div>
      </section>

      {/* Price snapshot */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">At-Home Hormone Test Prices (2026)</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Test</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Best for</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Price</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Sample</th>
                <th className="border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-gray-900">Measures</th>
              </tr>
            </thead>
            <tbody>
              {HORMONE_TESTS.map((t, i) => (
                <tr key={t.name} className={i % 2 === 1 ? 'bg-gray-50' : ''}>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900">{t.name}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{t.audience}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm font-semibold text-green-700">{t.price}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{t.sample}</td>
                  <td className="border border-gray-200 px-4 py-3 text-sm text-gray-700">{t.measures}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Prices are advertised rates checked in June 2026 and change frequently — comprehensive
          panels in particular go on sale often. Confirm current pricing, sample type, and which
          hormones are included directly with each provider before ordering. Most kits accept
          HSA/FSA. For the bigger picture on home labs, see our{' '}
          <Link href="/guides/at-home-lab-testing-guide" className="text-blue-600 hover:underline">
            at-home lab testing guide
          </Link>.
        </p>
      </section>

      {/* What you can test */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Hormones Can You Test at Home</h2>

          <div className="prose prose-lg max-w-none">
            <p>
              At-home kits cluster around four hormone groups. Knowing which group your question
              falls into tells you which panel — and which sample type — to buy.
            </p>
            <ul>
              <li>
                <strong>Sex hormones.</strong> Estradiol (estrogen), progesterone, and total
                testosterone. These drive cycle, fertility, libido, and body-composition questions.
                Everlywell&apos;s Women&apos;s Health Test reports all three plus more.
              </li>
              <li>
                <strong>Reproductive pituitary hormones.</strong> FSH and LH (and often prolactin).
                These signal ovarian and testicular function — central to fertility and to spotting
                the perimenopausal transition. LetsGetChecked&apos;s Female Hormone Test covers FSH,
                LH, prolactin, and estradiol.
              </li>
              <li>
                <strong>Cortisol (the stress hormone).</strong> Best measured as a daily pattern,
                not a single value. Saliva kits collect up to four samples across the day to chart
                cortisol&apos;s rhythm.
              </li>
              <li>
                <strong>Adjacent markers.</strong> DHEA and thyroid markers (TSH, Free T4, thyroid
                antibodies) often ride along on comprehensive panels because they interact with the
                sex-hormone picture.
              </li>
            </ul>
            <p>
              No single panel answers every question. Pick by goal — fertility, perimenopause,
              low-testosterone, or general hormone wellness — rather than buying the biggest panel
              by default.
            </p>
          </div>
        </div>
      </section>

      {/* Accuracy: saliva vs blood */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How Accurate Are At-Home Hormone Tests?</h2>
        <div className="prose prose-lg max-w-none">
          <p>
            Accuracy is less about &quot;home vs lab&quot; and more about matching the hormone to
            the right sample type and collecting it at the right moment. Reputable kits process your
            sample in a <strong>CLIA-certified</strong> lab — and LetsGetChecked&apos;s labs are also{' '}
            <strong>CAP-accredited</strong>, the highest level — so the analysis itself meets the
            same standard as a physician-ordered test.
          </p>
          <p>The sample type matters:</p>
          <ul>
            <li>
              <strong>Blood</strong> is generally considered the most precise for total hormone
              levels because it measures both bound and free hormone. Most finger-prick kits use a
              dried-blood-spot card.
            </li>
            <li>
              <strong>Saliva</strong> is well-suited to <em>free</em> cortisol and its daily rhythm:
              it is needle-free (a blood draw itself can spike cortisol) and easy to collect at
              several time points. Salivary measurement is well-established for cortisol, but
              steroids like estradiol and progesterone sit at very low concentrations in saliva
              (estradiol is only about 2&ndash;5% of its blood level), which makes them harder to
              detect and leaves saliva immunoassays for these hormones less settled. Collection
              hardware matters too: cotton-based collection swabs contain plant sterols that can
              cross-react in steroid immunoassays and skew readings, so reputable kits use
              steroid-inert tubes.
            </li>
          </ul>
          <p>
            The biggest controllable error is timing, covered next. And no at-home result is a
            diagnosis — abnormal values should be confirmed and interpreted by a clinician.
          </p>
        </div>
      </section>

      {/* Timing */}
      <section className="bg-blue-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">When to Collect Your Sample</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              Hormones move on a clock and a calendar. Collecting at the wrong time is the most
              common reason an otherwise good kit gives a misleading number.
            </p>
            <ul>
              <li>
                <strong>Cortisol &amp; testosterone — early morning.</strong> Both peak in the early
                morning, so the standard blood-draw window is roughly <strong>7&ndash;9 AM</strong>.
                Even a few hours&apos; delay lets the morning surge fall off and lowers the reading.
              </li>
              <li>
                <strong>Cortisol rhythm — four points across the day.</strong> Salivary cortisol is
                highest in the morning and lowest before bed, so diurnal kits collect up to{' '}
                <strong>four samples</strong> — on waking, before lunch, before dinner, and before
                bed — to chart the curve rather than a single snapshot.
              </li>
              <li>
                <strong>Female reproductive hormones — a specific cycle day.</strong> Estradiol,
                FSH, and LH all shift across the menstrual cycle, so kits specify the cycle day to
                test on. Follow the kit instructions precisely.
              </li>
            </ul>
            <p>
              Whatever the kit says about timing, fasting, and recent medications or supplements,
              follow it exactly — it is the single biggest accuracy factor you control.
            </p>
          </div>
        </div>
      </section>

      {/* Where to test / cards */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">At-Home Hormone Tests to Consider</h2>
        <p className="text-gray-600 mb-6">
          Four real, currently-sold at-home hormone tests, from single-marker to comprehensive.
          Each was checked against the provider&apos;s own product page in June 2026.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {HORMONE_TESTS.map((t) => (
            <div key={t.name} className="bg-white rounded-lg border border-gray-200 p-5">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-gray-900 pr-2">{t.name}</h3>
                <span className="text-sm font-semibold text-green-700 whitespace-nowrap pl-2">{t.price}</span>
              </div>
              <div className="text-xs text-gray-500 mb-1">{t.audience} • {t.sample}</div>
              <div className="text-xs text-gray-600 mb-2"><strong>Measures:</strong> {t.measures}</div>
              <p className="text-sm text-gray-600 mb-3">{t.note}</p>
              <a
                href={t.website}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-sm font-medium text-blue-600 hover:underline"
              >
                Visit provider site →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* How to choose */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose an At-Home Hormone Test</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-lg border-2 border-green-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for a focused question</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Testosterone only</strong> — a single-marker finger-prick kit from $89</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Perimenopause / cycle</strong> — a focused FSH / LH / estradiol panel like LetsGetChecked&apos;s Female Hormone Test from ~$139</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg border-2 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best for a full picture</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Women&apos;s comprehensive</strong> — a 10-biomarker panel with cortisol rhythm + thyroid</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span><strong>Men&apos;s comprehensive</strong> — testosterone plus SHBG, estradiol, prolactin, cortisol</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mt-8">
            <p>Before you buy, confirm a few practical points:</p>
            <ul>
              <li>Which exact hormones are included — and is the sample blood, saliva, or both?</li>
              <li>Is the processing lab CLIA-certified (and ideally CAP-accredited)?</li>
              <li>What is the collection-timing requirement (morning, cycle day, four saliva points)?</li>
              <li>Is there physician review of the order and a clinician follow-up on abnormal results?</li>
              <li>Is the kit HSA/FSA-eligible, and is the listed price a regular or sale price?</li>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Found a Hormone Imbalance? Explore Treatment</h3>
          <p className="text-gray-600 mb-6">
            Compare cash-pay hormone-therapy and telehealth providers — TRT, HRT, and menopause care.
          </p>
          <Link
            href="/hormone-therapy"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            View Hormone Therapy Providers →
          </Link>
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
                <div className="text-sm text-gray-600">How home blood tests work and what to track</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/everlywell-vs-letsgetchecked" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚖️</span>
              <div>
                <div className="font-bold text-gray-900">Everlywell vs LetsGetChecked</div>
                <div className="text-sm text-gray-600">The two leading at-home test services compared</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/online-menopause-treatment" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌸</span>
              <div>
                <div className="font-bold text-gray-900">Online Menopause Treatment &amp; HRT</div>
                <div className="text-sm text-gray-600">Perimenopause hormones, options, and costs</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/trt-testosterone-therapy" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💪</span>
              <div>
                <div className="font-bold text-gray-900">TRT: Testosterone Therapy Guide</div>
                <div className="text-sm text-gray-600">Low-T symptoms, options, and costs</div>
              </div>
            </div>
          </Link>

          <Link href="/telehealth" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💻</span>
              <div>
                <div className="font-bold text-gray-900">Telehealth Services</div>
                <div className="text-sm text-gray-600">Cash-pay online care and prescribing</div>
              </div>
            </div>
          </Link>

          <Link href="/guides/cheapest-blood-test-panels" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💉</span>
              <div>
                <div className="font-bold text-gray-900">Cheapest Blood Test Panels</div>
                <div className="text-sm text-gray-600">Self-pay lab pricing compared</div>
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
            <li>• <a href="https://www.everlywell.com/products/womens-health-test/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Everlywell — Women&apos;s Health Test (biomarkers, sample, CLIA, pricing)</a></li>
            <li>• <a href="https://www.letsgetchecked.com/home-testosterone-test/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">LetsGetChecked — Home Testosterone Test (CLIA/CAP, finger-prick, turnaround)</a></li>
            <li>• <a href="https://www.letsgetchecked.com/home-female-hormone-test/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">LetsGetChecked — Female Hormone Test (FSH, LH, prolactin, estradiol, pricing)</a></li>
            <li>• <a href="https://www.healthline.com/health/diurnal-cortisol-test" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Healthline — Diurnal Cortisol Test (saliva timing, peak/trough)</a></li>
            <li>• <a href="https://www.endocrinology.org/endocrinologist/134-winter19/features/24-hours-in-the-life-of-a-hormone-what-time-is-the-right-time-for-a-pituitary-function-test/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Society for Endocrinology — timing of pituitary/cortisol testing</a></li>
            <li>• <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12665927/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">NCBI/PMC — Salivary vs blood hormone concentrations: challenges and pitfalls</a></li>
            <li>• <a href="https://www.news-medical.net/whitepaper/20240506/5-key-points-to-ensure-reliable-and-accurate-saliva-testing-for-female-hormones.aspx" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">News-Medical — Reliable saliva testing for female hormones (collection-tube cross-reactivity)</a></li>
          </ul>
        </div>
      </section>

      {/* Medical + affiliate disclosure */}
      <MedicalDisclaimer />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Tracking Your Hormones?"
          description="Get our at-home hormone test comparison plus a checklist for collecting your sample at the right time."
          source="guide_at_home_hormone_test"
        />
      </div>

      <Footer />
    </main>
  );
}
