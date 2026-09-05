import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import BrandCtaGrid from '@/components/BrandCtaGrid';
import { buildFAQSchema } from '@/lib/jsonLd';

const PAGE_URL = 'https://vitalityscout.com/guides/function-vs-superpower-cost';
const AS_OF = 'September 5, 2026';

export const metadata: Metadata = {
  title: { absolute: 'Function vs Superpower Cost (2026): $365 vs $349/Year' },
  alternates: { canonical: PAGE_URL },
  description:
    'Function Health vs Superpower lab memberships (Sept 2026): Function $365/year for 160+ tests 2x/year; Superpower $349/year for 150+ tests, 2 draws. Verify live prices.',
};

const FAQ_ITEMS = [
  {
    question: 'Is Function Health or Superpower cheaper in 2026?',
    answer:
      `As of ${AS_OF}, Superpower lists $349/year and Function lists $365/year — a $16 gap on the headline membership. Function’s own pages describe 160+ lab tests annually across two draws (about 100+ then 60+). Superpower describes 150+ lab tests across two blood draws. Add-ons (at-home phlebotomy, Galleri, MRI/CT, extra on-demand markers) are extra on both. Confirm the live checkout price; Superpower was also running a $50-off first-year promo on the homepage we checked.`,
  },
  {
    question: 'Did Superpower raise its price?',
    answer:
      `Yes, relative to earlier public pricing. Superpower previously advertised about $199/year (about $17/month billed annually) for one comprehensive 100+ biomarker panel. As of ${AS_OF}, superpower.com lists $349/year for 150+ tests across two draws. That is a documented increase of about $150/year, paired with a second included draw. Function moved the other direction: it previously listed $499/year and now lists $365/year. Always verify the current number on each site before you join.`,
  },
  {
    question: 'What is included in a Function or Superpower membership?',
    answer:
      'Both are annual lab memberships, not a doctor’s-office physical. Function’s $365 membership includes 160+ lab tests per year, testing about twice a year, clinician review/flagging, a personalized protocol, and a dashboard. Superpower’s $349 membership includes 150+ biomarkers across two draws, a protocol, wearable/data upload, AI chat, and 24/7 care-team messaging. Neither headline price includes every add-on (Galleri, advanced imaging, extra on-demand markers, at-home draw). Results should be reviewed with your own clinician when something is abnormal.',
  },
  {
    question: 'Can I use HSA or FSA for Function or Superpower?',
    answer:
      'Both brands advertise HSA/FSA eligibility on their homepages. Lab testing ordered as medical care is often an eligible expense; eligibility still depends on your plan. Confirm with your administrator before you assume the membership qualifies. Promo discounts do not change the eligibility rules.',
  },
  {
    question: 'Function vs Superpower vs buying labs a la carte?',
    answer:
      'If you only want a CBC, CMP, and lipids, Quest Health and Labcorp OnDemand still undercut either membership — CBC $29 and CMP $49 on the pages we last checked. A membership wins when you want 100+ markers twice a year plus a dashboard. Price the year, not the first draw. See our Quest vs Labcorp and cheapest blood-test panels guides for the a la carte ladder.',
  },
  {
    question: 'Do these memberships replace seeing a doctor?',
    answer:
      'No. They are testing and interpretation products. Function describes clinician review of results; Superpower describes a care team and AI protocol. Neither is a substitute for diagnosis or treatment of a medical condition. Abnormal results need a licensed clinician who knows your history. This is information, not medical advice.',
  },
];

const BRANDS = [
  {
    name: 'Function Health',
    price: '$365/year',
    blurb: '160+ lab tests annually, two draws, clinician-reviewed insights. Was $499/year. At-home draw and imaging add-ons extra. Confirm live checkout.',
    siteUrl: 'https://www.functionhealth.com',
    profileHref: '/providers/function-health',
  },
  {
    name: 'Superpower',
    price: '$349/year',
    blurb: '150+ tests across two draws, protocol, 24/7 care-team messaging. Raised from ~$199/year (one panel). Promo prices move — verify on superpower.com.',
    siteUrl: 'https://superpower.com',
    profileHref: '/providers/superpower',
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

export default function FunctionVsSuperpowerCostPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Function Health vs Superpower Cost (2026): Annual Lab Memberships',
    description:
      'Published September 2026 annual prices for Function Health ($365) and Superpower ($349), what each membership includes, documented price changes, and add-ons.',
    url: PAGE_URL,
    mainEntity: { '@type': 'FAQPage', '@id': `${PAGE_URL}#faq` },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalTest', name: 'Direct-to-consumer comprehensive lab membership' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-09-05',
    dateModified: '2026-09-05',
    citation: [
      { '@type': 'CreativeWork', name: 'Function Health — membership $365/year, 160+ lab tests', url: 'https://www.functionhealth.com' },
      { '@type': 'CreativeWork', name: 'Function membership is now $365/year', url: 'https://www.functionhealth.com/article/function365' },
      { '@type': 'CreativeWork', name: 'Superpower — membership $349/year, 150+ lab tests', url: 'https://superpower.com' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${PAGE_URL}#faq`, url: PAGE_URL };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vitalityscout.com' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://vitalityscout.com/guides' },
      { '@type': 'ListItem', position: 3, name: 'Function vs Superpower Cost', item: PAGE_URL },
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
              <span className="text-gray-900">Function vs Superpower Cost</span>
            </nav>
          </div>
        </div>

        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/labs" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Cash-pay labs hub
            </Link>
            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Cost Guide
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Function vs Superpower Cost (2026): $365 vs $349 a Year
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Two annual lab memberships, two published prices. Here is what
              functionhealth.com and superpower.com listed on {AS_OF} — including
              Superpower&apos;s documented price change.
            </p>
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                As of {AS_OF}, <strong>Function Health lists $365/year</strong> for{' '}
                <strong>160+ lab tests</strong> across two draws (down from $499).{' '}
                <strong>Superpower lists $349/year</strong> for <strong>150+ tests</strong>{' '}
                across two draws (up from about $199/year for a single annual panel).
                Add-ons are extra. Confirm live checkout. This is information, not
                medical advice.
              </p>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Prices read from functionhealth.com and superpower.com on {AS_OF} • 10 min read
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Published memberships as of {AS_OF}</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Function Health</div>
                <ul className="space-y-1 text-gray-700 mb-3">
                  <li>• $365/year ($1/day) — was $499</li>
                  <li>• 160+ lab tests annually</li>
                  <li>• Two draws (100+ then ~60+)</li>
                  <li>• Clinician review + action plan</li>
                  <li>• HSA/FSA eligible (confirm your plan)</li>
                </ul>
                <a
                  href="https://www.functionhealth.com"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Visit Function →
                </a>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Superpower</div>
                <ul className="space-y-1 text-gray-700 mb-3">
                  <li>• $349/year — was ~$199</li>
                  <li>• 150+ lab tests, two draws</li>
                  <li>• Protocol + 24/7 care-team chat</li>
                  <li>• At-home draw extra</li>
                  <li>• HSA/FSA eligible (confirm your plan)</li>
                </ul>
                <a
                  href="https://superpower.com"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Visit Superpower →
                </a>
              </div>
            </div>
          </div>

          <BrandCtaGrid
            title="Open the official membership pages"
            intro="Plain brand URLs. Confirm today’s annual price and what the first year actually includes before you pay."
            brands={BRANDS}
            hubHref="/labs"
            hubLabel="Browse cash-pay labs →"
          />

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-amber-900 mb-2">Documented Superpower price change</h3>
            <p className="text-sm text-amber-800">
              Superpower previously published about <strong>$199/year</strong> (billed
              annually, about $17/month) for one 100+ biomarker panel, with extra tests
              around $179. The live homepage on {AS_OF} lists <strong>$349/year</strong>{' '}
              for <strong>150+ tests across two draws</strong>. Function moved the other
              way: <strong>$499 → $365</strong>. Older reviews that still quote $199
              Superpower or $499 Function are stale — verify on the official sites.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What this guide covers</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#function" className="text-blue-600 hover:underline">1. What Function publishes</a></li>
              <li><a href="#superpower" className="text-blue-600 hover:underline">2. What Superpower publishes</a></li>
              <li><a href="#compare" className="text-blue-600 hover:underline">3. Side-by-side cost table</a></li>
              <li><a href="#addons" className="text-blue-600 hover:underline">4. Add-ons and extras</a></li>
              <li><a href="#alacarte" className="text-blue-600 hover:underline">5. Vs a la carte labs</a></li>
              <li><a href="#verdict" className="text-blue-600 hover:underline">6. Which to choose</a></li>
              <li><a href="#faq" className="text-blue-600 hover:underline">7. FAQ</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              These are not $29 CBC storefronts. You are buying a year of broad bloodwork
              plus a dashboard. The headline prices have converged: $349 vs $365. The
              decision is now draws, marker count, and who explains the results — not a
              $300 gap.
            </p>

            <h2 id="function" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              What Function publishes
            </h2>
            <p className="text-gray-700 mb-4">
              functionhealth.com as of {AS_OF} lists the membership at{' '}
              <strong>$365 per year</strong> (&quot;$1 per day,&quot; charged annually).
              Function&apos;s own $365 announcement documents the cut from the earlier{' '}
              <strong>$499/year</strong> list price.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>160+ lab tests</strong> each year, selected to monitor a long list of conditions.</li>
              <li><strong>Two testing windows:</strong> about 100+ markers at the annual visit, then 60+ about 3–6 months later.</li>
              <li>Clinician review of every result, written explanations, and a personalized protocol.</li>
              <li>Draws at 2,000+ lab locations, or they come to you (mobile/at-home is extra).</li>
              <li>On-demand extra biomarkers at a member-only cost. MRI, CT, and Galleri are listed as add-on access, not included in $365.</li>
              <li>HSA/FSA eligible per Function; no insurance billed for the membership.</li>
            </ul>
            <p className="text-gray-700 mb-4">
              For the product review (accuracy, Quest partnership, who it is for), see{' '}
              <Link href="/guides/function-health-review" className="text-blue-600 hover:underline">
                Function Health review
              </Link>
              . This page is the 2026 price comparison.
            </p>
            <a
              href="https://www.functionhealth.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mb-6 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Visit Function →
            </a>

            <h2 id="superpower" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              What Superpower publishes
            </h2>
            <p className="text-gray-700 mb-4">
              superpower.com as of {AS_OF} lists the membership at{' '}
              <strong>$349 per year</strong> for <strong>150+ lab tests across 2 blood draws</strong>.
              Homepage copy also says &quot;starts at $349/year&quot; and advertised a limited
              <strong> $50 off first year</strong> Labor Day promo when we checked — treat
              promo math as temporary.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Two full-body tests a year; ~10-minute draw at 2,000+ Quest locations or at-home for an extra fee.</li>
              <li>Dashboard, biological-age / pace-of-aging scores, wearable connections (Oura, Whoop, Apple Health).</li>
              <li>Personalized protocol (diet, lifestyle, supplements) plus AI chat grounded in your results.</li>
              <li><strong>24/7 care-team messaging</strong> — Superpower&apos;s clearest product difference vs Function&apos;s clinician-written summary model.</li>
              <li>Add-on access listed: gut, toxins, GRAIL Galleri, peptides, supplements, prescriptions. Those are not in the $349 headline.</li>
              <li>HSA/FSA eligible per Superpower. Cancel-anytime copy on the homepage.</li>
            </ul>
            <p className="text-gray-700 mb-4">
              <strong>Price history:</strong> VitalityScout previously recorded Superpower
              at about <strong>$199/year</strong> for one annual 100+ panel (additional tests
              about $179). The live 2026 product is a higher annual fee and a second included
              draw. If you saw $199 in an older tab, refresh the official site.
            </p>
            <a
              href="https://superpower.com"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mb-6 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Visit Superpower →
            </a>

            <h2 id="compare" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Side-by-side cost table
            </h2>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Item</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Function ({AS_OF})</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Superpower ({AS_OF})</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Published annual price</td>
                  <td className="border border-gray-300 px-4 py-3">$365/year</td>
                  <td className="border border-gray-300 px-4 py-3">$349/year</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Prior published price</td>
                  <td className="border border-gray-300 px-4 py-3">$499/year</td>
                  <td className="border border-gray-300 px-4 py-3">~$199/year (one annual panel)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Tests included</td>
                  <td className="border border-gray-300 px-4 py-3">160+ annually</td>
                  <td className="border border-gray-300 px-4 py-3">150+ across two draws</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Draws per year</td>
                  <td className="border border-gray-300 px-4 py-3">2 (100+ then ~60+)</td>
                  <td className="border border-gray-300 px-4 py-3">2</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Interpretation</td>
                  <td className="border border-gray-300 px-4 py-3">Clinician review + protocol</td>
                  <td className="border border-gray-300 px-4 py-3">Protocol + AI + 24/7 care team</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">At-home draw</td>
                  <td className="border border-gray-300 px-4 py-3">Available, extra</td>
                  <td className="border border-gray-300 px-4 py-3">Available, extra</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Typical add-ons</td>
                  <td className="border border-gray-300 px-4 py-3">On-demand markers; MRI/CT; Galleri</td>
                  <td className="border border-gray-300 px-4 py-3">Gut, toxins, Galleri, peptides, Rx</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-medium">Profile</td>
                  <td className="border border-gray-300 px-4 py-3"><Link href="/providers/function-health" className="text-blue-600 hover:underline">Function Health</Link></td>
                  <td className="border border-gray-300 px-4 py-3"><Link href="/providers/superpower" className="text-blue-600 hover:underline">Superpower</Link></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 id="addons" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Add-ons — do not treat $349 / $365 as all-in
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>At-home phlebotomy</strong> is extra on both. Budget it if you will not go to Quest.</li>
              <li><strong>Cancer screens (Galleri)</strong> are listed as add-on access, not part of the base membership.</li>
              <li><strong>Imaging:</strong> Function advertises MRI/CT add-on access (Ezra is part of Function; standalone MRI pricing is a different product). Superpower&apos;s $349 page does not include a whole-body MRI.</li>
              <li><strong>On-demand extra markers</strong> (Function) and gut/toxin/peptide SKUs (Superpower) can add hundreds of dollars. Price those lines before you join for &quot;everything.&quot;</li>
            </ul>

            <h2 id="alacarte" className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Vs buying labs a la carte
            </h2>
            <p className="text-gray-700 mb-4">
              A membership is the wrong door if you only need three line items. Quest Health
              and Labcorp OnDemand still list a CBC at $29 and a CMP at $49. That math lives
              on:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>
                <Link href="/guides/quest-vs-labcorp-pricing" className="text-blue-600 hover:underline">
                  Quest vs Labcorp pricing
                </Link>
              </li>
              <li>
                <Link href="/guides/cheapest-blood-test-panels" className="text-blue-600 hover:underline">
                  Cheapest blood-test panels
                </Link>
              </li>
              <li>
                <Link href="/labs" className="text-blue-600 hover:underline">
                  Cash-pay labs hub
                </Link>
              </li>
            </ul>
            <p className="text-gray-700 mb-4">
              Rough year-one check: two membership draws at $349–$365 vs two a la carte
              &quot;standard&quot; panels can still favor the membership <em>if</em> you
              would have ordered 100+ markers anyway. If you would have ordered a $99
              wellness panel twice, the membership is the expensive path.
            </p>

            <h2 id="verdict" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Which to choose</h2>
            <div className="bg-blue-50 rounded-lg p-6 my-8 not-prose">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: lowest published annual fee (today)</h3>
              <p className="text-gray-700">
                <strong>Superpower at $349</strong> — $16 under Function. Confirm the promo
                is gone or still live; a $50-off first year would widen the gap.
              </p>
            </div>
            <div className="bg-indigo-50 rounded-lg p-6 my-8 not-prose">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: more markers + clinician-written review</h3>
              <p className="text-gray-700">
                <strong>Function at $365</strong> if you want the 160+ menu and a flagged
                clinician summary. The extra $16 is not the story; the review model is.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 my-8 not-prose">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Best for: messaging a care team between draws</h3>
              <p className="text-gray-700">
                <strong>Superpower</strong> if 24/7 care-team chat is why you would pay
                for a membership instead of two Quest carts. Still bring abnormal results
                to your own clinician.
              </p>
            </div>
          </div>

          <BrandCtaGrid
            title="Compare Function and Superpower on the official sites"
            intro="Open the live membership page for today’s annual price, or the VitalityScout profile for services and our take."
            brands={BRANDS}
            hubHref="/labs"
            hubLabel="Open the labs hub →"
          />

          <div id="related" className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Related guides</h3>
            <ul className="space-y-2 text-gray-700">
              <li><Link href="/guides/function-health-review" className="text-blue-600 hover:underline">Function Health review</Link></li>
              <li><Link href="/guides/quest-vs-labcorp-pricing" className="text-blue-600 hover:underline">Quest vs Labcorp pricing</Link></li>
              <li><Link href="/guides/cheapest-blood-test-panels" className="text-blue-600 hover:underline">Cheapest blood-test panels</Link></li>
              <li><Link href="/labs" className="text-blue-600 hover:underline">Cash-pay labs hub</Link></li>
            </ul>
          </div>

          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Confirm today&apos;s annual lab price</h3>
            <p className="mb-6 text-blue-100">
              $349 vs $365 is close. Add-ons are not. Open the official page, then compare a la carte labs if you only need a small panel.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://www.functionhealth.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Visit Function →
              </a>
              <a
                href="https://superpower.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Visit Superpower →
              </a>
              <Link
                href="/labs"
                className="inline-block rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Labs hub
              </Link>
            </div>
          </div>

          <section id="faq" className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div>
              {FAQ_ITEMS.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </section>

          <div className="mt-12 rounded-lg bg-gray-100 p-6">
            <h3 className="font-semibold text-gray-800 mb-2">Medical &amp; Pricing Disclaimer</h3>
            <p className="text-sm text-gray-600">
              This guide is for general informational purposes only and is not medical advice.
              We are not affiliated with Function Health or Superpower. Prices were read from
              official pages on {AS_OF} and are not a quote or a guarantee. Superpower&apos;s
              earlier ~$199/year figure and Function&apos;s earlier $499/year figure are
              documented prior prices, not current checkout. Lab results are not a diagnosis.
              Verify current pricing and review abnormal results with a licensed clinician.
            </p>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; references</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <a href="https://www.functionhealth.com" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Function Health — $365/year, 160+ lab tests, 2x/year</a></li>
              <li>• <a href="https://www.functionhealth.com/article/function365" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Function — membership is now $365/year (was $499)</a></li>
              <li>• <a href="https://superpower.com" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Superpower — $349/year, 150+ tests across 2 draws</a></li>
            </ul>
          </div>
        </article>

        <MedicalDisclaimer />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get the Function vs Superpower Cost Cheat Sheet"
            description="$365 vs $349, what is in the year, and when a $29 Quest panel is still the cheaper door."
            source="guide_function_vs_superpower_cost"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
