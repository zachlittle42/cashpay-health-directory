import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

const PAGE_URL = 'https://vitalityscout.com/guides/cheapest-blood-test-panels';
const AS_OF = 'September 4, 2026';

export const metadata: Metadata = {
  title: { absolute: 'Cheapest Blood Test Panels (2026): Ulta From $23' },
  alternates: { canonical: PAGE_URL },
  description:
    'Compare 2026 cash-pay blood panel prices: Ulta CMP $22.95, Labcorp Standard $99, Quest Basic $199, Superpower $349/yr, Function $365/yr. Confirm before you order.',
  keywords: [
    'cheapest blood test panels',
    'cheap blood test',
    'direct access lab testing',
    'blood test without insurance',
    'order blood test online',
    'Ulta Lab Tests',
    'Labcorp OnDemand',
    'Quest Health',
  ],
};

// Real conversational/PAA questions. Every price answer is framed as an
// estimate to confirm with the provider and ends consistent with the medical
// disclaimer. The visible FAQ block mirrors this schema exactly.
const FAQ_ITEMS = [
  {
    question: 'What is the cheapest way to get a blood test panel?',
    answer:
      `Direct-access lab marketplaces are usually the cheapest route for a single panel. As of ${AS_OF}, Ulta Lab Tests lists a comprehensive metabolic panel at $22.95 and a lipid panel at $22.95 (a combined lipid + CMP listing at $45.95) on its quick-order page, drawn at Quest or Labcorp sites with no doctor visit. Labcorp OnDemand lists a Standard Health Test (CBC + CMP + urinalysis) at $99. Quest Health lists a Basic Health Profile at $199. These are published storefront prices that change with promotions — confirm the current price in the provider's cart before ordering.`,
  },
  {
    question: 'Can I buy a blood test without a doctor or insurance?',
    answer:
      'Yes. Direct-access (also called direct-to-consumer) lab testing lets you order online, pay cash, and visit a draw site without a physician appointment or insurance. A clinician affiliated with the platform reviews and authorizes the order in the background — for example, Labcorp OnDemand states "a healthcare provider will review and approve your test requests; no healthcare provider visit is required," and Quest Health adds a separate Physician Service Fee (a small fee collected for independent physician oversight) at checkout. You receive results in a secure online portal.',
  },
  {
    question: 'Are cheap at-home blood tests accurate?',
    answer:
      'For routine monitoring, finger-prick at-home tests generally correlate well with traditional venous blood draws, but a professional venous draw at Quest or Labcorp remains the gold standard for comprehensive panels and any diagnosis. Accuracy also depends on following collection instructions exactly. Use cheaper at-home kits for tracking trends, and confirm any abnormal or borderline result with a clinician and a venous draw. This is information, not medical advice.',
  },
  {
    question: 'How much does a basic blood panel cost out of pocket?',
    answer:
      `As of ${AS_OF}, a basic cash-pay panel can land near Ulta's $22.95 CMP plus $22.95 lipid (or $45.95 combined), Labcorp OnDemand's $99 Standard Health Test, or Quest Health's $199 Basic Health Profile. Membership platforms that bundle 100+ biomarkers — Superpower lists $349/year for 150+ tests across two draws, Function Health lists $365/year for 160+ tests twice a year — can be cheaper per-marker if you want a wide annual panel. Prices change frequently — verify before buying.`,
  },
  {
    question: 'Is Ulta Lab Tests or Labcorp OnDemand cheaper?',
    answer:
      `For an a-la-carte basic panel as of ${AS_OF}, Ulta Lab Tests lists a CMP and a lipid panel at $22.95 each ($45.95 combined) on its quick-order page, while Labcorp OnDemand lists a Standard Health Test at $99 and a Comprehensive Health Test at $169 on wellness pages. Ulta wins on published a-la-carte sticker price; Labcorp OnDemand wins on a simple fixed package. Compare current cart prices, since both run frequent promotions.`,
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

export default function CheapestBloodTestPanels() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Cheapest Blood Test Panels: 2026 Price Comparison',
    description:
      'Side-by-side cost comparison of the cheapest direct-access blood test panels — Ulta Lab Tests, Labcorp OnDemand, Quest Health, Superpower, and Function Health — by panel type, with cash-pay framing.',
    url: PAGE_URL,
    mainEntity: { '@type': 'FAQPage', '@id': `${PAGE_URL}#faq` },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: {
      '@type': 'MedicalTest',
      name: 'Blood test panel',
    },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-09-04',
    dateModified: '2026-09-04',
    citation: [
      { '@type': 'CreativeWork', name: 'Ulta Lab Tests — Quick Order (CMP and lipid panel)', url: 'https://www.ultalabtests.com/testing/quick-order' },
      { '@type': 'CreativeWork', name: 'Labcorp OnDemand — Standard Health Test', url: 'https://www.ondemand.labcorp.com/lab-tests/basic-wellness' },
      { '@type': 'CreativeWork', name: 'Quest Health — Basic / Comprehensive / Elite health profiles', url: 'https://www.questhealth.com/health-profiles.html' },
      { '@type': 'CreativeWork', name: 'Superpower — membership pricing', url: 'https://superpower.com/' },
      { '@type': 'CreativeWork', name: 'Function Health — membership pricing', url: 'https://www.functionhealth.com/pricing' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${PAGE_URL}#faq`, url: PAGE_URL };

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
            <span className="text-gray-900">Cheapest Blood Test Panels</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <Link href="/labs" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            &larr; Cash-Pay Labs Hub
          </Link>

          <div className="mb-4">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              Comparison
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cheapest Blood Test Panels: 2026 Price Comparison
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            What a basic blood panel actually costs when you pay cash and skip the doctor visit —
            compared across the lowest-priced direct-access labs and membership platforms.
          </p>

          {/* Direct-answer lead: self-contained 40-80 word summary, extractable answer box */}
          <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
            <p className="aeo-answer text-base text-gray-800">
              As of {AS_OF}, the cheapest published a-la-carte panels we checked come from{' '}
              <strong>Ulta Lab Tests</strong> (CMP <strong>$22.95</strong>, lipid{' '}
              <strong>$22.95</strong>, combined <strong>$45.95</strong>). Labcorp OnDemand lists a
              Standard Health Test at <strong>$99</strong>. Quest Health lists a Basic Health Profile
              at <strong>$199</strong>. For a wide annual panel, Superpower lists{' '}
              <strong>$349/year</strong> and Function Health lists <strong>$365/year</strong>. These
              are published storefront prices — confirm in the provider&apos;s cart. This is
              information, not medical advice.
            </p>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Prices verified from provider storefronts on {AS_OF} • 10 min read
          </p>
        </div>
      </section>

      {/* Medical / pricing notice */}
      <section className="mx-auto max-w-4xl px-4 py-6">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-amber-900 mb-3">How to read the prices below</h3>
          <p className="text-sm text-amber-800 mb-2">
            All figures are <strong>published cash-pay prices</strong> read from each provider&apos;s
            public storefront on {AS_OF}. They change with promotions, state rules, and the exact
            markers you add. Treat them as a starting point to compare, then confirm the live price
            in the provider&apos;s checkout cart before ordering.
          </p>
          <p className="text-sm text-amber-800">
            This page is general information, not medical advice. A blood panel does not diagnose
            anything on its own — discuss results, especially abnormal ones, with a licensed clinician.
          </p>
        </div>
      </section>

      {/* Quick Comparison Box */}
      <article className="mx-auto max-w-4xl px-4 py-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Cheapest-First Snapshot</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="font-bold text-blue-600 mb-2">Lowest per-panel (a-la-carte)</div>
              <ul className="space-y-1 text-gray-700">
                <li>• Ulta Lab Tests — CMP $22.95; lipid $22.95</li>
                <li>• Combined lipid + CMP listed at $45.95</li>
                <li>• Uses Quest/Labcorp draw sites</li>
                <li>• No doctor visit required</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="font-bold text-indigo-600 mb-2">Lowest per-marker (annual membership)</div>
              <ul className="space-y-1 text-gray-700">
                <li>• Superpower — $349/yr, 150+ markers, two draws</li>
                <li>• Function Health — $365/yr, 160+ markers, two draws</li>
                <li>• Best if you want a wide annual panel</li>
                <li>• HSA/FSA eligible</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#how" className="text-blue-600 hover:underline">1. The two ways to pay cash for a blood panel</a></li>
            <li><a href="#alacarte" className="text-blue-600 hover:underline">2. Cheapest a-la-carte panels (single visit)</a></li>
            <li><a href="#membership" className="text-blue-600 hover:underline">3. Cheapest per-marker (annual memberships)</a></li>
            <li><a href="#athome" className="text-blue-600 hover:underline">4. At-home finger-prick kits</a></li>
            <li><a href="#pricing" className="text-blue-600 hover:underline">5. Side-by-side pricing table</a></li>
            <li><a href="#bestfor" className="text-blue-600 hover:underline">6. Which is cheapest for your situation</a></li>
            <li><a href="#tips" className="text-blue-600 hover:underline">7. How to pay even less</a></li>
            <li><a href="#faq" className="text-blue-600 hover:underline">8. FAQ</a></li>
          </ul>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700 mb-8">
            &quot;Cheapest&quot; depends entirely on how many markers you want. If you need three or four tests,
            an a-la-carte direct-access marketplace almost always wins. If you want a sweeping 100-marker
            picture once a year, a flat membership can beat it on cost-per-result. Here is how the cash
            prices actually stack up.
          </p>

          <h2 id="how" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Two Ways to Pay Cash for a Blood Panel</h2>

          <p className="text-gray-700 mb-4">
            Direct-access (also called direct-to-consumer) testing means you order and pay online, then
            a clinician affiliated with the platform authorizes the order in the background. You never
            book a doctor appointment, and insurance is not involved. There are two pricing models:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>
              <strong>A-la-carte marketplaces</strong> (Ulta Lab Tests, Labcorp OnDemand, Quest Health):
              pick exactly the markers or fixed panel you want, pay once, and go to a Quest or Labcorp
              site for a venous draw. Cheapest when you only need a handful of tests.
            </li>
            <li>
              <strong>Annual memberships</strong> (Superpower, Function Health): one yearly fee covers a
              very wide panel, usually drawn through Quest. Cheapest when measured per-marker on a big
              once-or-twice-a-year panel.
            </li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 not-prose">
            <p className="text-gray-700 text-sm">
              <strong>Why it&apos;s cheaper than insurance:</strong> cash-pay direct-access pricing skips
              the insurer markup and surprise facility fees. The same Quest or Labcorp instruments run
              your blood — you are simply buying the test directly.
            </p>
          </div>

          <h2 id="alacarte" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cheapest A-La-Carte Panels (Single Visit)</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Ulta Lab Tests — lowest published sticker</h3>
          <p className="text-gray-700 mb-4">
            Ulta Lab Tests resells Quest and Labcorp testing at cash discounts with no doctor
            order required. As of {AS_OF}, its quick-order page lists a comprehensive metabolic panel
            at <strong>$22.95</strong>, a lipid panel at <strong>$22.95</strong>, and a combined lipid
            + CMP at <strong>$45.95</strong>. Those are the lowest published a-la-carte stickers we
            checked that day. Sales and draw-site fees can change the all-in total — confirm the cart.
          </p>
          <a
            href="https://www.ultalabtests.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="mb-6 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
          >
            Visit Ulta Lab Tests →
          </a>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Labcorp OnDemand — fixed retail panels</h3>
          <p className="text-gray-700 mb-4">
            Labcorp OnDemand sells its own fixed panels and notes that a healthcare provider
            reviews the request so no provider visit is required. As of {AS_OF}, its Standard Health
            Test (CBC, comprehensive metabolic panel, and urinalysis) is listed at <strong>$99</strong>,
            and wellness pages list the Comprehensive Health Test (adding lipids and A1c) at{' '}
            <strong>$169</strong>. A dedicated screening URL has also displayed $189 — confirm the
            live cart. Simpler to choose than a-la-carte; slightly higher sticker than Ulta for the
            same handful of markers.
          </p>
          <a
            href="https://www.ondemand.labcorp.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="mb-6 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
          >
            Visit Labcorp OnDemand →
          </a>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Quest Health — tiered profiles</h3>
          <p className="text-gray-700 mb-4">
            Quest Health sells Basic, Comprehensive, and Elite health profiles directly to consumers with
            no insurance or doctor visit required. As of {AS_OF}, the men&apos;s or women&apos;s Basic
            Health Profile is listed at <strong>$199</strong> (CBC, CMP, cholesterol panel, urinalysis,
            plus TSH for women or testosterone for men). Comprehensive profiles are listed at{' '}
            <strong>$329</strong> and the Elite Health Profile at <strong>$399</strong> plus a{' '}
            <strong>$6 Physician Service Fee</strong>. Standalone CBC is $29, CMP $49, lipid $59. See
            our{' '}
            <Link href="/guides/quest-vs-labcorp-pricing" className="text-blue-600 hover:underline">
              Quest vs Labcorp pricing guide
            </Link>{' '}
            for the head-to-head line items.
          </p>
          <a
            href="https://www.questhealth.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="mb-6 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
          >
            Visit Quest Health →
          </a>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8 not-prose">
            <h4 className="font-bold text-gray-900 mb-2">A note on &quot;basic&quot; vs &quot;comprehensive&quot;</h4>
            <p className="text-gray-700 text-sm">
              The cheapest panels (CBC + metabolic + lipid) tell you a lot about general health, heart
              risk, and metabolism. Adding A1c (blood sugar), TSH (thyroid), and vitamin D covers the most
              common follow-up questions for a small price bump. Going to 100+ markers is where annual
              memberships start to win on cost-per-result.
            </p>
          </div>

          <h2 id="membership" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cheapest Per-Marker: Annual Memberships</h2>

          <p className="text-gray-700 mb-4">
            If you want the widest panel for the lowest cost-per-result, a membership can be the value
            play — but only if you actually use the full panel.
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>
              <strong>Superpower</strong> — as of {AS_OF}, the homepage lists{' '}
              <strong>$349/year</strong> for 150+ lab tests across two blood draws (a Labor Day $50-off
              promo was also advertised that day). HSA/FSA eligible. Drawn at 2,000+ Quest locations
              or at home for an extra fee. Confirm the live membership price before you join.
            </li>
            <li>
              <strong>Function Health</strong> — still listed at <strong>$365/year</strong> on its
              pricing page for 160+ lab tests, testing twice a year, with clinician review and a
              personalized protocol. HSA/FSA eligible. Drawn at 2,000+ lab locations.
            </li>
            <li>
              <strong>Marek Health</strong> — about <strong>$250-850/panel</strong>, the most comprehensive
              option, with physician consultation included and nearly 300 biomarkers available. Not the
              cheapest, but the choice when you want guidance, not just data.
            </li>
            <li>
              <strong>InsideTracker</strong> — about <strong>$249-589/test</strong> (26-48 markers) with
              fitness-focused AI recommendations. Mid-priced; strongest for athletes.
            </li>
          </ul>

          <h2 id="athome" className="text-2xl font-bold text-gray-900 mt-12 mb-6">At-Home Finger-Prick Kits</h2>

          <p className="text-gray-700 mb-4">
            If avoiding a lab visit matters more than rock-bottom price, finger-prick kits ship to your
            door. They are convenient but usually cover fewer markers per dollar than a venous draw:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>
              <strong>Everlywell</strong> — about <strong>$49-199/test</strong>, single-issue kits (thyroid,
              hormones, metabolism, food sensitivity) with wide retail availability and 5-7 day turnaround.
            </li>
            <li>
              <strong>LetsGetChecked</strong> — about <strong>$69-149/test</strong>, with a nurse phone
              consultation included and CAP/ISO-accredited labs. Pricier than Everlywell but more support.
            </li>
          </ul>

          <p className="text-gray-700 mb-4">
            For a deeper look at how these kits work and which biomarkers to track, see our{' '}
            <Link href="/guides/at-home-lab-testing-guide" className="text-blue-600 hover:underline">
              at-home lab testing guide
            </Link>{' '}
            and our head-to-head{' '}
            <Link href="/guides/everlywell-vs-letsgetchecked" className="text-blue-600 hover:underline">
              Everlywell vs LetsGetChecked comparison
            </Link>.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Are the cheap kits accurate?</h3>
          <p className="text-gray-700 mb-4">
            For routine monitoring, finger-prick tests generally correlate well with traditional venous
            draws, but a professional venous draw remains the gold standard for comprehensive panels and
            anything used for diagnosis. Collection technique matters: user error, not the lab, is the
            most common cause of an invalid at-home result. Use the cheap kits to track trends, and
            confirm any abnormal value with a clinician and a venous draw.
          </p>
        </div>

        {/* Pricing Comparison Table */}
        <h2 id="pricing" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Side-by-Side Pricing</h2>
        <p className="text-gray-700 mb-4">
          Published cash-pay prices as of {AS_OF}. Prices change with promotions, state rules, and the exact
          markers chosen — confirm in the provider&apos;s cart.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Service</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Model</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Est. Price</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Collection</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cheapest For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Ulta Lab Tests</td>
                <td className="border border-gray-300 px-4 py-3">A-la-carte</td>
                <td className="border border-gray-300 px-4 py-3">CMP $22.95; lipid $22.95; combo $45.95</td>
                <td className="border border-gray-300 px-4 py-3">Quest/Labcorp draw</td>
                <td className="border border-gray-300 px-4 py-3">A few specific markers</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Labcorp OnDemand</td>
                <td className="border border-gray-300 px-4 py-3">Fixed panel</td>
                <td className="border border-gray-300 px-4 py-3">$99 Standard; $169 Comprehensive (confirm cart)</td>
                <td className="border border-gray-300 px-4 py-3">Labcorp draw</td>
                <td className="border border-gray-300 px-4 py-3">Simple fixed wellness panel</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Quest Health</td>
                <td className="border border-gray-300 px-4 py-3">Tiered profile</td>
                <td className="border border-gray-300 px-4 py-3">Basic $199; Comprehensive $329; Elite $399 + $6 fee</td>
                <td className="border border-gray-300 px-4 py-3">Quest draw</td>
                <td className="border border-gray-300 px-4 py-3">Brand-name Quest convenience</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Superpower</td>
                <td className="border border-gray-300 px-4 py-3">Membership</td>
                <td className="border border-gray-300 px-4 py-3">$349/year (150+ markers, 2 draws)</td>
                <td className="border border-gray-300 px-4 py-3">Quest draw</td>
                <td className="border border-gray-300 px-4 py-3">Wide annual panel, lowest per-marker</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Function Health</td>
                <td className="border border-gray-300 px-4 py-3">Membership</td>
                <td className="border border-gray-300 px-4 py-3">$365/year (160+ markers, 2x)</td>
                <td className="border border-gray-300 px-4 py-3">Quest draw</td>
                <td className="border border-gray-300 px-4 py-3">Twice-yearly comprehensive tracking</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Everlywell</td>
                <td className="border border-gray-300 px-4 py-3">At-home kit</td>
                <td className="border border-gray-300 px-4 py-3">~$49-199/test</td>
                <td className="border border-gray-300 px-4 py-3">Home finger prick</td>
                <td className="border border-gray-300 px-4 py-3">Single-issue at-home convenience</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">LetsGetChecked</td>
                <td className="border border-gray-300 px-4 py-3">At-home kit</td>
                <td className="border border-gray-300 px-4 py-3">~$69-149/test</td>
                <td className="border border-gray-300 px-4 py-3">Home finger prick</td>
                <td className="border border-gray-300 px-4 py-3">At-home test + nurse consult</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Best For */}
        <h2 id="bestfor" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Which Is Cheapest for Your Situation</h2>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">You want a few specific markers</h3>
            <p className="text-sm text-gray-700">
              Order a-la-carte at Ulta Lab Tests. Published CMP and lipid prices of $22.95 each (or
              $45.95 combined) were the lowest stickers we checked on {AS_OF}. Use a venous draw at a nearby
              Quest or Labcorp.
            </p>
          </div>
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">You want one simple wellness panel</h3>
            <p className="text-sm text-gray-700">
              Labcorp OnDemand&apos;s fixed Standard panel ($99) or Quest Health&apos;s Basic profile ($199) is the
              least-decisions route — one click, one fixed price, one draw.
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">You want 100+ markers once a year</h3>
            <p className="text-sm text-gray-700">
              Superpower ($349/year, two draws) and Function Health ($365/year, two draws) are the
              published memberships we checked for a wide annual panel. Confirm which biomarkers and
              review notes you actually get before you join.
            </p>
          </div>
          <div className="bg-amber-50 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">You can&apos;t or won&apos;t visit a lab</h3>
            <p className="text-sm text-gray-700">
              A finger-prick kit from Everlywell ($49-199) or LetsGetChecked ($69-149) trades some
              cost-efficiency for door-to-door convenience. Best for one targeted question, not a full panel.
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 id="tips" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Pay Even Less</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li><strong>Wait for a promo.</strong> Ulta, Labcorp OnDemand, and the kit brands run frequent 10-30% off codes; subscribing to their email lists often unlocks them.</li>
            <li><strong>Use HSA/FSA dollars.</strong> Most direct-access labs and memberships are HSA/FSA eligible, which is effectively a tax discount on the panel.</li>
            <li><strong>Buy only the markers you&apos;ll act on.</strong> A focused $60 panel you understand beats a $400 panel you ignore.</li>
            <li><strong>Don&apos;t over-test.</strong> Most markers do not move meaningfully week to week. Quarterly at most is plenty for tracking, which keeps your annual spend down.</li>
            <li><strong>Check state rules.</strong> New York and New Jersey often cost more or restrict certain direct-access tests — confirm availability before paying.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Bottom Line</h2>
          <p className="text-gray-700 mb-4">
            For a handful of markers, an a-la-carte marketplace like Ulta Lab Tests is almost always the
            cheapest published path, with Labcorp OnDemand ($99 Standard) and Quest Health ($199 Basic)
            close behind for fixed panels. For a wide annual picture, Superpower ($349/year) or Function
            Health ($365/year) wins on cost-per-result if you use both draws. At-home kits cost more per
            marker but buy convenience. Whichever you pick, the panel is a screening and tracking tool —
            abnormal results belong in a conversation with a licensed clinician.
          </p>
        </div>

        {/* FAQ — visible block mirrors the FAQPage schema above exactly */}
        <section id="faq" className="py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div>
            {FAQ_ITEMS.map((item) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </section>

        {/* CTA to money page */}
        <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">Compare Lab Testing Providers</h3>
          <p className="mb-6 text-blue-100">
            See current pricing, biomarkers included, and physician-consultation options across every
            cash-pay lab service we track.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/labs"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              View Lab Testing Providers →
            </Link>
            <a
              href="https://www.ultalabtests.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Visit Ulta Lab Tests →
            </a>
            <a
              href="https://www.questhealth.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-block rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Visit Quest Health →
            </a>
          </div>
        </div>

        {/* Related Guides */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/guides/quest-vs-labcorp-pricing" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
              <div className="font-bold text-gray-900">Quest vs Labcorp Pricing</div>
              <div className="text-sm text-gray-600">Published self-pay line items from $29</div>
            </Link>
            <Link href="/guides/blood-test-without-a-doctor" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
              <div className="font-bold text-gray-900">Blood Test Without a Doctor</div>
              <div className="text-sm text-gray-600">How direct-access ordering works</div>
            </Link>
            <Link href="/labs" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
              <div className="font-bold text-gray-900">Cash-Pay Labs Hub</div>
              <div className="text-sm text-gray-600">Membership and at-home platforms side by side</div>
            </Link>
            <Link href="/guides/cash-pay-healthcare-map" className="block bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow">
              <div className="font-bold text-gray-900">Cash-Pay Healthcare Map</div>
              <div className="text-sm text-gray-600">Where labs sit next to telehealth and GLP-1</div>
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 rounded-lg bg-gray-100 p-6">
          <h3 className="font-semibold text-gray-800 mb-2">Medical &amp; Pricing Disclaimer</h3>
          <p className="text-sm text-gray-600">
            This guide is general information, not medical advice. Pricing is aggregated from public
            provider storefronts as of {AS_OF} and may be out of date — confirm current pricing,
            included markers, and availability directly with each provider before ordering. A
            blood panel is a screening and tracking tool, not a diagnosis; discuss results, especially
            abnormal ones, with a licensed clinician. VitalityScout is not affiliated with the labs named
            here and does not guarantee any outcome.
          </p>
        </div>

        {/* Sources */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• <a href="https://www.ultalabtests.com/testing/quick-order" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Ulta Lab Tests — Quick Order (CMP $22.95, lipid $22.95, combo $45.95)</a></li>
            <li>• <a href="https://www.ondemand.labcorp.com/lab-tests/basic-wellness" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Labcorp OnDemand — Standard Health Test ($99)</a></li>
            <li>• <a href="https://www.ondemand.labcorp.com/products/annual-wellness" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Labcorp OnDemand — annual wellness (CBC $29, CMP $49, Comprehensive $169)</a></li>
            <li>• <a href="https://www.questhealth.com/health-profiles.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Quest Health — Basic / Comprehensive / Elite health profiles</a></li>
            <li>• <a href="https://www.questhealth.com/product/elite-health-profile/18386M.html" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Quest Health — Elite Health Profile ($399 + $6 Physician Service Fee)</a></li>
            <li>• <a href="https://superpower.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Superpower — $349/year membership (150+ tests, two draws)</a></li>
            <li>• <a href="https://www.functionhealth.com/pricing" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Function Health — $365/year membership (160+ tests)</a></li>
          </ul>
        </div>
      </article>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Get Our Cash-Pay Lab Pricing Cheat Sheet"
          description="The cheapest blood test panels by type, plus the promo codes and HSA/FSA tips that cut the price further."
          source="guide_cheapest_blood_test_panels"
        />
      </div>
      <MedicalDisclaimer />

      </SidebarShell>
      <Footer />
    </main>
  );
}
