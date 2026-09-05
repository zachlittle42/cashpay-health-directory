import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import RelatedGuides from '@/components/RelatedGuides';
import { getRelatedGuides } from '@/data/related-guides';
import { buildFAQSchema } from '@/lib/jsonLd';

const PAGE_URL = 'https://vitalityscout.com/guides/cgm-without-diabetes';
const AS_OF = 'September 4, 2026';

export const metadata: Metadata = {
  title: { absolute: 'CGM Without Diabetes (2026): Stelo $89/Mo, Lingo From $54' },
  alternates: { canonical: PAGE_URL },
  description:
    'OTC CGM costs without diabetes (2026): Stelo $89/mo, Lingo from $54/2 weeks, Levels from $80/yr + sensors, Nutrisense from $179/mo. Confirm live prices.',
};

const FAQ_ITEMS = [
  {
    question: 'Can you buy a CGM without diabetes or a prescription?',
    answer:
      'Yes, if you are 18 or older and not on insulin. Dexcom Stelo and Abbott Lingo are FDA-cleared over-the-counter glucose biosensors sold without a prescription for general wellness. They are not intended to diagnose or manage diabetes, and they are not for people who take insulin. Confirm the current indication on the product label before you buy.',
  },
  {
    question: 'How much does Stelo cost without insurance?',
    answer:
      `As of ${AS_OF}, Stelo's own site lists a monthly subscription at $89 (shown next to a $99 reference price) and notes HSA/FSA eligibility and free shipping. Sensors last about 15 days. This is a published storefront price, not a guaranteed quote — confirm on stelo.com before you order.`,
  },
  {
    question: 'How much does Abbott Lingo cost?',
    answer:
      `As of ${AS_OF}, hellolingo.com lists a 2-week plan at $54 (one biosensor, no auto-renew). Product pages have also listed a 4-week option around $84-$89 and a 12-week subscription at $249. Plan names and auto-renew rules change — confirm the live cart on hellolingo.com.`,
  },
  {
    question: 'How much do Levels and Nutrisense cost?',
    answer:
      `As of ${AS_OF}, Levels Support lists an app-only "Build your system" plan at $15/month or $80/year, with Stelo sensors as an add-on at $89 per shipment or $99 for a one-time two-pack. Legacy Core ($499/year) and Complete ($1,999/year) plans are still described for existing members. Nutrisense's homepage lists its CGM program starting at $179/month ($152 with a 15% promo that day). Confirm current prices on each site.`,
  },
  {
    question: 'Is a wellness CGM accurate enough without diabetes?',
    answer:
      'OTC wellness CGMs are useful for trends, not finger-stick precision. They read interstitial fluid with a lag, so a single number can differ from a blood draw — especially when glucose is changing fast. They are not diagnostic tools. If a reading worries you, see a clinician rather than self-diagnosing from an app.',
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

export default function CGMWithoutDiabetesGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Continuous Glucose Monitor Without Diabetes: 2026 Cost Guide',
    description:
      'Published 2026 costs and OTC availability for Stelo, Lingo, Levels, and Nutrisense for adults without diabetes.',
    url: PAGE_URL,
    mainEntity: { '@type': 'FAQPage', '@id': `${PAGE_URL}#faq` },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalDevice', name: 'Over-the-counter continuous glucose monitor' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-09-04',
    dateModified: '2026-09-04',
    citation: [
      { '@type': 'CreativeWork', name: 'Stelo by Dexcom — official storefront', url: 'https://www.stelo.com/' },
      { '@type': 'CreativeWork', name: 'Lingo by Abbott — official storefront', url: 'https://www.hellolingo.com/' },
      { '@type': 'CreativeWork', name: 'Levels — pricing and plans', url: 'https://support.levels.com/article/720-levels-pricing-and-plans' },
      { '@type': 'CreativeWork', name: 'Nutrisense — CGM program', url: 'https://www.nutrisense.io/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${PAGE_URL}#faq`, url: PAGE_URL };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vitalityscout.com' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://vitalityscout.com/guides' },
      { '@type': 'ListItem', position: 3, name: 'CGM Without Diabetes', item: PAGE_URL },
    ],
  };

  return (
    <>
      <Navigation />
      <SidebarShell>
      <main className="min-h-screen bg-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        <div className="bg-gray-50 border-b border-gray-200">
          <div className="mx-auto max-w-4xl px-4 py-3">
            <nav className="text-sm text-gray-600" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">→</span>
              <Link href="/guides" className="hover:text-blue-600">Guides</Link>
              <span className="mx-2">→</span>
              <span className="text-gray-900">CGM Without Diabetes</span>
            </nav>
          </div>
        </div>

        <section className="bg-gradient-to-b from-emerald-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/cgm" className="text-sm text-emerald-700 hover:underline mb-4 inline-block">
              &larr; CGM Hub
            </Link>
            <div className="mb-4">
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                Metabolic Health
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              CGM Without Diabetes (2026): Stelo $89/Mo, Lingo From $54
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Over-the-counter glucose monitors are sold to healthy adults. Here is what a CGM is,
              what the data can (and cannot) tell you, and what Stelo, Lingo, Levels, and Nutrisense
              published as of {AS_OF}.
            </p>
            <div className="rounded-lg border-l-4 border-emerald-600 bg-emerald-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                As of {AS_OF}, <strong>Dexcom Stelo</strong> lists a monthly subscription at{' '}
                <strong>$89</strong>. <strong>Abbott Lingo</strong> lists a 2-week plan at{' '}
                <strong>$54</strong>. <strong>Levels</strong> lists an app membership from{' '}
                <strong>$80/year</strong> plus optional Stelo sensors. <strong>Nutrisense</strong>{' '}
                lists its CGM program from <strong>$179/month</strong>. All are cash-pay wellness
                tools, not diabetes treatment. Confirm live prices. This is information, not medical
                advice.
              </p>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Prices read from official storefronts on {AS_OF} • 12 min read
            </p>
          </div>
        </section>

        <div className="bg-yellow-50 border-b-2 border-yellow-200">
          <div className="mx-auto max-w-4xl px-4 py-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">⚠️</div>
              <div>
                <h3 className="font-bold text-yellow-900 text-lg mb-2">Insight, Not Diagnosis</h3>
                <p className="text-yellow-800 text-sm">
                  For people without diabetes, a CGM is a tool for curiosity and self-experimentation — not a way to diagnose or manage a medical condition. The research on whether CGM data improves health in otherwise healthy people is still emerging. If you have symptoms or risk factors, see a clinician rather than relying on a consumer sensor.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="mx-auto max-w-4xl px-4 pt-8">
            <div className="rounded-xl border-2 border-emerald-200 bg-emerald-50 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">Ready to pick a sensor?</h3>
                <p className="text-sm text-gray-700">See side-by-side pricing, accuracy, and app features for the major over-the-counter options.</p>
              </div>
              <Link
                href="/cgm"
                className="inline-block whitespace-nowrap rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700 transition-colors"
              >
                Compare CGMs: Stelo vs Lingo vs Levels →
              </Link>
            </div>
          </div>
        </div>

        <article className="mx-auto max-w-4xl px-4 py-12">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Published costs as of {AS_OF}</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-emerald-600 mb-1">Stelo (OTC hardware)</div>
                <div className="text-gray-900 font-semibold">$89/month</div>
                <div className="text-gray-600 mb-3">Listed vs $99; HSA/FSA</div>
                <a
                  href="https://www.stelo.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Visit Stelo →
                </a>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-teal-600 mb-1">Lingo (OTC hardware)</div>
                <div className="text-gray-900 font-semibold">From $54 / 2 weeks</div>
                <div className="text-gray-600 mb-3">4- and 12-week plans also listed</div>
                <a
                  href="https://www.hellolingo.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Visit Lingo →
                </a>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-amber-600 mb-1">Coached programs</div>
                <div className="text-gray-900 font-semibold">Levels from $80/yr</div>
                <div className="text-gray-600 mb-3">Nutrisense from $179/mo</div>
                <Link
                  href="/cgm"
                  className="inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Compare on /cgm →
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What This Guide Covers</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#what-is-cgm" className="text-blue-600 hover:underline">1. What is a CGM and how does it work?</a></li>
              <li><a href="#otc-shift" className="text-blue-600 hover:underline">2. The OTC shift (Stelo and Lingo)</a></li>
              <li><a href="#why-healthy" className="text-blue-600 hover:underline">3. Why healthy people wear one</a></li>
              <li><a href="#accuracy" className="text-blue-600 hover:underline">4. Accuracy and caveats</a></li>
              <li><a href="#costs" className="text-blue-600 hover:underline">5. Published costs</a></li>
              <li><a href="#choosing" className="text-blue-600 hover:underline">6. Raw data vs coached</a></li>
              <li><a href="#who-should-not" className="text-blue-600 hover:underline">7. Who should talk to a doctor instead</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              A continuous glucose monitor (CGM) is a small wearable sensor that tracks glucose around
              the clock. For decades these were prescription devices for people with diabetes. In 2024
              the FDA cleared the first over-the-counter sensors for adults not on insulin — and that
              is what made &quot;wearing a CGM without diabetes&quot; a legal-to-buy option.
            </p>

            <h2 id="what-is-cgm" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Is a CGM and How Does It Work?</h2>
            <p className="text-gray-700 mb-4">
              A CGM is a coin-sized patch you apply to the back of your arm. A tiny filament sits just
              under the skin and measures glucose in interstitial fluid — not directly in your blood.
              The sensor sends a reading to your phone every few minutes.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Each sensor lasts a set window</strong> — Stelo about 15 days; Lingo about 14 days — then you replace it.</li>
              <li><strong>Readings lag real blood glucose</strong> by several minutes.</li>
              <li><strong>The value is the trend</strong>, not any single number.</li>
            </ul>

            <h2 id="otc-shift" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The OTC Shift: Stelo and Lingo</h2>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Product</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Maker</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cleared for</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Stelo</td>
                    <td className="border border-gray-300 px-4 py-3">Dexcom</td>
                    <td className="border border-gray-300 px-4 py-3">OTC, adults 18+ not on insulin</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Lingo</td>
                    <td className="border border-gray-300 px-4 py-3">Abbott</td>
                    <td className="border border-gray-300 px-4 py-3">OTC, adults 18+ not on insulin</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 mb-4">
              Stelo&apos;s indication is an over-the-counter iCGM for people 18 and older who are not
              on insulin. It is meant to show how lifestyle affects glucose — not to drive medical
              action without a clinician. Lingo uses the same &quot;18+, not on insulin, not for
              diagnosis&quot; frame.
            </p>

            <h2 id="why-healthy" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why Healthy People Wear One</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Food curiosity:</strong> seeing how a specific meal affects <em>your</em> glucose.</li>
              <li><strong>Exercise timing:</strong> watching how a walk after dinner flattens a spike.</li>
              <li><strong>Sleep and stress:</strong> noticing that a bad night can nudge glucose up.</li>
            </ul>
            <p className="text-gray-700 mb-4">
              This is self-experimentation. Research on lasting health improvements in healthy people
              is still emerging. The strongest personal value tends to be awareness, not a guaranteed
              medical outcome.
            </p>

            <h2 id="accuracy" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Accuracy &amp; Caveats</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Read the curve, not the digit.</strong></li>
              <li><strong>Expect lag</strong> after a meal or workout.</li>
              <li><strong>Compression lows are real</strong> if you lie on the sensor overnight.</li>
              <li><strong>Not a diagnostic tool.</strong> OTC wellness CGMs are not for diagnosing or managing diabetes.</li>
            </ul>

            <h2 id="costs" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Published Costs as of {AS_OF}</h2>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Option</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">What you get</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Published price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Dexcom Stelo</td>
                    <td className="border border-gray-300 px-4 py-3">OTC sensor + Stelo app; ~15-day wear</td>
                    <td className="border border-gray-300 px-4 py-3">$89/month subscription (shown vs $99)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Abbott Lingo</td>
                    <td className="border border-gray-300 px-4 py-3">OTC sensor + Lingo app; ~14-day wear</td>
                    <td className="border border-gray-300 px-4 py-3">$54 / 2 weeks; 4-week ~$84-$89; 12-week $249</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Levels</td>
                    <td className="border border-gray-300 px-4 py-3">App membership; sensors optional add-on</td>
                    <td className="border border-gray-300 px-4 py-3">$15/mo or $80/yr app; Stelo add-on $89/shipment or $99 two-pack</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Nutrisense</td>
                    <td className="border border-gray-300 px-4 py-3">CGM program + registered dietitian</td>
                    <td className="border border-gray-300 px-4 py-3">From $179/month ($152 with a 15% promo that day)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 mb-4">
              Insurance generally does not cover CGMs for people without diabetes, so this is typically
              an out-of-pocket purchase. Stelo and Lingo both advertise HSA/FSA eligibility — confirm
              with your plan administrator.
            </p>

            <div className="not-prose my-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border-2 border-emerald-200 bg-emerald-50 p-5">
                <h4 className="font-bold text-gray-900 mb-2">Buy Stelo (Dexcom)</h4>
                <p className="text-sm text-gray-700 mb-3">OTC, no prescription. Monthly subscription listed at $89 as of {AS_OF}.</p>
                <a
                  href="https://www.stelo.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Visit Stelo →
                </a>
              </div>
              <div className="rounded-lg border-2 border-emerald-200 bg-emerald-50 p-5">
                <h4 className="font-bold text-gray-900 mb-2">Buy Lingo (Abbott)</h4>
                <p className="text-sm text-gray-700 mb-3">OTC 2-week plan listed at $54. Confirm 4- and 12-week carts on hellolingo.com.</p>
                <a
                  href="https://www.hellolingo.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Visit Lingo →
                </a>
              </div>
              <div className="rounded-lg border-2 border-emerald-200 bg-emerald-50 p-5">
                <h4 className="font-bold text-gray-900 mb-2">Levels software</h4>
                <p className="text-sm text-gray-700 mb-3">App from $80/year; sensors sold separately. Confirm current tiers on Levels.</p>
                <a
                  href="https://www.levels.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Visit Levels →
                </a>
              </div>
              <div className="rounded-lg border-2 border-emerald-200 bg-emerald-50 p-5">
                <h4 className="font-bold text-gray-900 mb-2">Nutrisense (coached)</h4>
                <p className="text-sm text-gray-700 mb-3">CGM + dietitian program listed from $179/month. Confirm the live plan.</p>
                <a
                  href="https://www.nutrisense.io/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Visit Nutrisense →
                </a>
              </div>
            </div>

            <h2 id="choosing" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Choose: Raw Data vs Coached</h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
              <li><strong>Raw data, DIY:</strong> Stelo or Lingo with the built-in app is the cheapest published route.</li>
              <li><strong>Software layer:</strong> Levels adds food scoring on top of a sensor you buy separately.</li>
              <li><strong>Human coach:</strong> Nutrisense adds a registered dietitian. You pay more for structure.</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Many people learn most of what they need in a few weeks. Decide how long you will
              actually wear one before you buy a long subscription.
            </p>

            <h2 id="who-should-not" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Who Should Talk to a Doctor Instead</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>You take insulin or other glucose-lowering medication — OTC wellness CGMs are not designed for you.</li>
              <li>You suspect diabetes or prediabetes, or have symptoms like excessive thirst, fatigue, or unexplained weight change.</li>
              <li>You have a history of disordered eating; constant glucose tracking can fuel anxiety.</li>
              <li>You are pregnant or managing another medical condition.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Keep Exploring</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>
                <Link href="/cgm" className="text-blue-600 hover:underline">
                  CGM hub
                </Link>{' '}
                — Stelo vs Lingo vs Levels vs Nutrisense side by side
              </li>
              <li>
                <Link href="/labs" className="text-blue-600 hover:underline">
                  Cash-pay lab testing
                </Link>{' '}
                — HbA1c, fasting glucose, and metabolic panels
              </li>
              <li>
                <Link href="/guides/cash-pay-healthcare-map" className="text-blue-600 hover:underline">
                  Cash-pay healthcare map
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-12 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare the Major CGMs</h3>
            <p className="mb-6 text-emerald-50">
              See pricing, accuracy, and app features for Stelo, Lingo, Levels, and more, then open the brand site to confirm today&apos;s price.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/cgm"
                className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-emerald-600 hover:bg-emerald-50 transition-colors"
              >
                Compare CGMs →
              </Link>
              <a
                href="https://www.stelo.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Visit Stelo →
              </a>
              <a
                href="https://www.hellolingo.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Visit Lingo →
              </a>
            </div>
          </div>

          <section className="mt-12" id="faq">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div>
              {FAQ_ITEMS.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </section>

          <div className="mt-12 rounded-lg bg-red-50 border-2 border-red-200 p-6">
            <h3 className="font-bold text-red-900 mb-2">Important Disclaimer</h3>
            <p className="text-sm text-red-800 mb-4">
              Over-the-counter CGMs are cleared for general wellness use by adults who are not on insulin. They are not intended to diagnose, treat, or manage diabetes or any other medical condition. This information is educational only and is not medical advice.
            </p>
            <p className="text-sm text-red-800">
              Prices were read from official pages on {AS_OF} and can change. If you have symptoms, risk factors, or questions about your blood sugar, consult a licensed healthcare provider.
            </p>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <a href="https://www.stelo.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Stelo — monthly subscription $89 (shown vs $99); OTC indication</a></li>
              <li>• <a href="https://www.hellolingo.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Lingo — 2-week plan $54</a></li>
              <li>• <a href="https://www.hellolingo.com/products" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Lingo products — 4-week and 12-week plan listings</a></li>
              <li>• <a href="https://support.levels.com/article/720-levels-pricing-and-plans" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Levels Support — pricing and plans (updated June 18, 2026)</a></li>
              <li>• <a href="https://www.nutrisense.io/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Nutrisense — CGM program from $179/month</a></li>
            </ul>
          </div>
        </article>

        <RelatedGuides items={getRelatedGuides('/guides/cgm-without-diabetes')} />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our OTC CGM Cost Cheat Sheet"
            description="Stelo vs Lingo vs Levels vs Nutrisense: what you actually pay, and when a few weeks of data is enough."
            source="guide_cgm_without_diabetes"
          />
        </div>
        <MedicalDisclaimer />
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
