import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Best At-Home Lab Tests (2026): Top Picks by Use Case' },
  alternates: { canonical: 'https://vitalityscout.com/guides/best-at-home-lab-tests' },
  description: 'The best at-home lab tests in 2026 by use case — wellness, hormones, thyroid, metabolic, STI. Top providers, accuracy vs a venous draw, and how to pick.',
};

// Real GSC queries we already earn impressions for, phrased as the searcher
// asks them, answered only from facts stated on this page. Every price answer
// ends with the verify-with-provider hedge. The visible FAQ block below mirrors
// this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'What are the best at-home lab tests in 2026?',
    answer:
      'There is no single best at-home lab test — the right one depends on your use case. For a broad wellness snapshot, Function Health\'s membership (160+ markers, about $365/year, drawn at Quest) covers the most ground. For affordable targeted tests, Everlywell has the widest retail menu (individual kits roughly $49-$249). For targeted tests with clinical support baked in, LetsGetChecked uses its own CLIA-certified, CAP-accredited lab. For STI screening, myLAB Box bundles multi-panel kits ($209-$409). These are estimates that change with sales — confirm current pricing on each provider\'s site.',
  },
  {
    question: 'What types of at-home tests can you order?',
    answer:
      'The main types are: general-wellness panels (CBC, metabolic, lipids, A1c, thyroid, vitamins); hormone tests (testosterone, estrogen, cortisol, DHEA); single-marker thyroid kits (TSH, T3, T4, antibodies); metabolic tests (HbA1c, glucose, lipids, insulin); and STI/STD panels (chlamydia, gonorrhea, HIV, syphilis and more). Collection is either a finger-prick or saliva kit you mail back, or a service that orders labs you complete at a Quest or Labcorp draw site. Pick by what you want to learn, then check which collection method that specific test uses.',
  },
  {
    question: 'How accurate is home lab testing compared to a venous blood draw?',
    answer:
      'For many markers it is close, but a venous draw is still the more reliable method overall. A 2025 study comparing 34 routine chemistry analytes found 30 of the 33 with allowable-error criteria met acceptable accuracy thresholds from finger-prick capillary blood, with potassium the weakest; AST and coagulation tests also stay unreliable from a finger-prick. Well-validated markers like HbA1c, TSH, vitamin D, and B12 track venous results closely; lipids and low-concentration hormones are more sensitive to collection technique. Services that send you to a lab for a professional draw match doctor-ordered accuracy because they use the same labs. Confirm any abnormal result with a clinician.',
  },
  {
    question: 'How do I pick the right home lab test?',
    answer:
      'Start with the goal, not the brand. Define what you want to learn (a wellness baseline, a hormone check, a thyroid panel, a metabolic marker, or an STI screen), then choose the collection method that fits that marker — a professional draw for lipids, hormones, and comprehensive panels; a finger-prick or saliva kit for HbA1c, vitamin D, or STI screening where it is validated. Confirm the lab is CLIA-certified (and ideally CAP-accredited), check whether physician or nurse review is included, and compare the all-in price the same week. Treat results as screening, not diagnosis.',
  },
  {
    question: 'Are at-home STI tests as reliable as a clinic test?',
    answer:
      'When a kit uses a CLIA-certified, CAP-accredited lab and you collect the sample correctly, at-home STI tests are designed to match in-clinic accuracy because the analysis runs on the same lab platforms. myLAB Box, Everlywell, and LetsGetChecked all describe CLIA/CAP lab analysis. The main limitations are window periods (testing too soon after exposure can miss an infection) and collection error. A positive or concerning result should be confirmed and treated with a clinician — most kits include or offer a telehealth consult. This is information, not medical advice.',
  },
  {
    question: 'Are at-home lab tests HSA or FSA eligible?',
    answer:
      'Lab testing is typically an eligible HSA/FSA expense, and several providers state their tests qualify — Function Health, for example, describes HSA/FSA eligibility for its membership. Eligibility can depend on the specific test and your plan, so confirm with your plan administrator before assuming a kit qualifies. Keep the itemized receipt for reimbursement.',
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

export default function BestAtHomeLabTests() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Best At-Home Lab Tests (2026): Top Picks by Use Case',
    description:
      'A use-case roundup of the best at-home lab tests in 2026 — general wellness, hormones, thyroid, metabolic, and STI — with top providers, accuracy versus a venous draw, cash-pay cost estimates, and how to choose.',
    url: 'https://vitalityscout.com/guides/best-at-home-lab-tests',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/best-at-home-lab-tests#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalTest', name: 'At-home clinical laboratory testing' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-24',
    dateModified: '2026-06-24',
    citation: [
      { '@type': 'CreativeWork', name: 'Everlywell — at-home lab tests (products, pricing, CLIA-certified labs, physician review)', url: 'https://www.everlywell.com/' },
      { '@type': 'CreativeWork', name: 'Everlywell — HbA1c (blood sugar) at-home test', url: 'https://www.everlywell.com/products/hba1c/' },
      { '@type': 'CreativeWork', name: 'Function Health — membership pricing, biomarker breadth, Quest draw', url: 'https://www.functionhealth.com/' },
      { '@type': 'CreativeWork', name: 'LetsGetChecked — owned CLIA-certified / CAP-accredited lab, tests, clinical support', url: 'https://www.letsgetchecked.com/' },
      { '@type': 'CreativeWork', name: 'myLAB Box — at-home STI multi-panel kits, CAP/CLIA labs, telehealth consult', url: 'https://www.mylabbox.com/' },
      { '@type': 'CreativeWork', name: 'Doeleman et al., Clinical Chemistry and Laboratory Medicine (2025) — Comparison of capillary finger stick and venous blood sampling for 34 routine chemistry analytes (UMC Utrecht)', url: 'https://doi.org/10.1515/cclm-2024-0812' },
      { '@type': 'CreativeWork', name: 'Finger-prick vs venous blood test — marker-by-marker reliability (HbA1c, TSH, vitamin D, B12 reliable; potassium, AST, coagulation problematic)', url: 'https://lolahealth.com/blogs/longevity/finger-prick-vs-venous-blood-test' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/best-at-home-lab-tests#faq', url: 'https://vitalityscout.com/guides/best-at-home-lab-tests' };

  return (
    <>
      <Navigation />
      <SidebarShell>
      <main className="min-h-screen bg-white">
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
              <span className="text-gray-900">Best At-Home Lab Tests</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/labs" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Cash-Pay Labs Directory
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Best-Of Roundup
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              The Best At-Home Lab Tests in 2026, by Use Case
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              There is no single best at-home lab test — there is a best test for your goal.
              Here are the top picks for general wellness, hormones, thyroid, metabolic health,
              and STI screening, with honest notes on accuracy versus a venous draw and what
              each actually costs.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                The <strong>best at-home lab test depends on your use case</strong>. For the broadest
                wellness snapshot, <strong>Function Health</strong> (160+ markers, ~$365/year, drawn
                at Quest) leads. For affordable <strong>targeted tests</strong>, Everlywell has the
                widest menu (~$49-$249). For tests with clinical support, <strong>LetsGetChecked</strong>{' '}
                runs its own CLIA-certified, CAP-accredited lab. For <strong>STI screening</strong>,
                myLAB Box bundles multi-panel kits ($209-$409). Prices are estimates; verify on each
                provider&apos;s site. This is information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: June 2026 • 11 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Top picks at a glance */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Top Picks at a Glance</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Best overall wellness snapshot</div>
                <p className="text-gray-700">Function Health — 160+ markers, ~$365/yr, Quest draw, clinicians review every result</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Best budget targeted menu</div>
                <p className="text-gray-700">Everlywell — widest retail catalog, finger-prick + saliva kits ~$49-$249</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Best with clinical support</div>
                <p className="text-gray-700">LetsGetChecked — owns its CLIA-certified, CAP-accredited lab; nurse/clinical messaging</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Best for STI screening</div>
                <p className="text-gray-700">myLAB Box — 8- and 14-panel kits ($209-$409); free telehealth consult if positive</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-500">All prices are estimates that change with sales — verify on each provider&apos;s own site before buying.</p>
          </div>

          {/* How this differs from our other lab guides */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">How this guide is different</h3>
            <p className="text-sm text-gray-700 mb-3">
              This is a <strong>best-of roundup organized by use case</strong>. If you want the
              mechanics or a head-to-head instead, start here:
            </p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• How it all works → <Link href="/guides/at-home-lab-testing-guide" className="text-blue-600 hover:underline">At-Home Lab Testing Guide</Link></li>
              <li>• Lowest cash prices → <Link href="/guides/cheapest-blood-test-panels" className="text-blue-600 hover:underline">Cheapest Blood Test Panels</Link></li>
              <li>• Accuracy deep-dive → <Link href="/guides/are-at-home-blood-tests-accurate" className="text-blue-600 hover:underline">Are At-Home Blood Tests Accurate?</Link></li>
              <li>• Two brands head-to-head → <Link href="/guides/everlywell-vs-letsgetchecked" className="text-blue-600 hover:underline">Everlywell vs LetsGetChecked</Link></li>
            </ul>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#types" className="text-blue-600 hover:underline">1. The types of at-home tests you can order</a></li>
              <li><a href="#wellness" className="text-blue-600 hover:underline">2. Best for general wellness</a></li>
              <li><a href="#hormones" className="text-blue-600 hover:underline">3. Best for hormones</a></li>
              <li><a href="#thyroid" className="text-blue-600 hover:underline">4. Best for thyroid</a></li>
              <li><a href="#metabolic" className="text-blue-600 hover:underline">5. Best for metabolic health</a></li>
              <li><a href="#sti" className="text-blue-600 hover:underline">6. Best for STI screening</a></li>
              <li><a href="#accuracy" className="text-blue-600 hover:underline">7. Accuracy vs a venous draw</a></li>
              <li><a href="#how-to-pick" className="text-blue-600 hover:underline">8. How to pick the right test</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              &quot;Best at-home lab test&quot; is the wrong question if you ask it once. A finger-prick
              STI kit and a 160-marker wellness membership are both &quot;at-home lab tests,&quot; and the
              right pick changes completely depending on whether you want a yearly baseline, a hormone
              check, or a discreet STI screen. So this roundup is organized the way you actually shop —
              by use case. For each one, we name a top pick, a runner-up, an honest accuracy note, and a
              cash-pay estimate to verify.
            </p>

            <h2 id="types" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Types of At-Home Tests You Can Order</h2>

            <p className="text-gray-700 mb-4">
              Before the picks, it helps to know the categories. Most at-home lab testing falls into
              five buckets, and two collection methods:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>General wellness</strong> — broad panels (CBC, metabolic, lipids, A1c, thyroid, vitamins) for a baseline or annual snapshot.</li>
              <li><strong>Hormones</strong> — testosterone, estrogen, progesterone, cortisol, DHEA; for energy, fertility, or optimization questions.</li>
              <li><strong>Thyroid</strong> — TSH plus T3, T4, and TPO/Tg antibodies; for fatigue, weight, or temperature-regulation symptoms.</li>
              <li><strong>Metabolic</strong> — HbA1c, fasting glucose, lipids, sometimes insulin; for blood-sugar and cardiometabolic tracking.</li>
              <li><strong>STI / sexual health</strong> — chlamydia, gonorrhea, HIV, syphilis, herpes, and multi-panel screens; discreet and fast.</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Two collection models:</strong> <em>finger-prick or saliva kits</em> you collect
                at home and mail back (maximum convenience, validated for a subset of markers), and{' '}
                <em>lab-draw services</em> that order labs you complete at a Quest or Labcorp site
                (professional draw, full panels, doctor-ordered accuracy). Which model a given test
                uses matters more than the brand — see the <a href="#accuracy" className="text-blue-600 hover:underline">accuracy section</a>.
              </p>
            </div>

            <h2 id="wellness" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Best for General Wellness</h2>

            <p className="text-gray-700 mb-4">
              If you want one broad snapshot of how your body is doing, you want a comprehensive panel
              drawn at a lab — not a single finger-prick.
            </p>

            <div className="bg-blue-50 rounded-lg p-6 my-6">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Top pick: Function Health</h3>
              <p className="text-gray-700 mb-2">
                Function Health is a membership that tests <strong>160+ lab markers</strong> across the
                body, with testing roughly <strong>twice a year</strong> plus on-demand add-ons. The
                blood is drawn at <strong>Quest Diagnostics</strong> locations (so the accuracy is
                doctor-ordered grade), and the membership describes <strong>clinicians reviewing every
                result and flagging issues</strong>. Pricing is about <strong>$365/year</strong>
                (estimate), and it states HSA/FSA eligibility.
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Best for:</strong> anyone who wants the widest biomarker breadth in one annual
                membership. See our <Link href="/guides/function-health-review" className="text-blue-600 hover:underline">Function Health review</Link> for the full breakdown.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>Runner-up — Everlywell 360:</strong> Everlywell&apos;s broad panel checks{' '}
              <strong>83 biomarkers across six categories</strong>; it is a lighter, retail-friendly
              alternative if you do not want the largest membership. Everlywell runs analysis in{' '}
              <strong>CLIA-certified labs</strong> with <strong>board-certified physician review</strong>.
              For the cheapest possible route to a wellness baseline, compare line-item panel prices in
              our <Link href="/guides/cheapest-blood-test-panels" className="text-blue-600 hover:underline">cheapest blood test panels</Link> guide.
            </p>

            <h2 id="hormones" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Best for Hormones</h2>

            <p className="text-gray-700 mb-4">
              Hormone testing is where collection method matters most: low-concentration hormones are
              sensitive to finger-prick technique, so a professional draw is the more reliable route for
              anything beyond a screen.
            </p>

            <div className="bg-blue-50 rounded-lg p-6 my-6">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Top pick: LetsGetChecked (hormone panels)</h3>
              <p className="text-gray-700 mb-2">
                LetsGetChecked offers a tiered male-hormone lineup — a <strong>Testosterone test
                (~$89-$99)</strong>, <strong>Male Hormone ($139)</strong>, and broader advanced/complete
                panels (estimates) — plus female hormone and fertility panels. It runs its{' '}
                <strong>own CLIA-certified, CAP-accredited lab</strong> and includes board-certified
                clinical support by secure messaging, which softens the &quot;now what?&quot; after results.
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Best for:</strong> a targeted hormone check with clinical follow-up included.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>Runner-up — Everlywell:</strong> Everlywell sells a <strong>Women&apos;s Health
              test (~$249)</strong> and single-hormone kits at a lower entry price, with the widest
              retail availability. For a method-level deep dive on which hormones a kit can and
              can&apos;t measure reliably, see our <Link href="/guides/at-home-hormone-test" className="text-blue-600 hover:underline">at-home hormone test guide</Link> and{' '}
              <Link href="/guides/at-home-testosterone-test" className="text-blue-600 hover:underline">at-home testosterone test guide</Link>.
            </p>

            <h2 id="thyroid" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Best for Thyroid</h2>

            <p className="text-gray-700 mb-4">
              Thyroid is one of the categories where finger-prick collection holds up well — TSH is among
              the markers that track venous results closely.
            </p>

            <div className="bg-blue-50 rounded-lg p-6 my-6">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Top pick: LetsGetChecked Thyroid</h3>
              <p className="text-gray-700 mb-2">
                LetsGetChecked&apos;s thyroid panel (estimated <strong>~$119</strong>) measures the core
                thyroid markers and antibodies from a finger-prick, analyzed in its owned CLIA-certified,
                CAP-accredited lab, with clinical support included.
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Best for:</strong> a finger-prick thyroid panel with antibodies and clinical messaging.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>Runner-up — Everlywell Thyroid:</strong> Everlywell&apos;s thyroid test (estimated{' '}
              <strong>~$149</strong>) measures TSH, free T3, free T4, and TPO antibodies, with CLIA-lab
              analysis and physician review. For what each thyroid marker means and how to read the panel,
              see our <Link href="/guides/at-home-thyroid-test" className="text-blue-600 hover:underline">at-home thyroid test guide</Link>.
            </p>

            <h2 id="metabolic" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Best for Metabolic Health</h2>

            <p className="text-gray-700 mb-4">
              Metabolic testing is the best-case scenario for at-home kits: <strong>HbA1c</strong> is one
              of the most finger-prick-validated markers there is, so a mailed kit is genuinely close to a
              lab draw here.
            </p>

            <div className="bg-blue-50 rounded-lg p-6 my-6">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Top pick: Everlywell HbA1c</h3>
              <p className="text-gray-700 mb-2">
                Everlywell&apos;s <strong>HbA1c (blood sugar) test (~$49)</strong> reflects your average
                blood sugar over the prior ~90 days from a finger-prick, analyzed in a{' '}
                <strong>CLIA-certified lab</strong> with board-certified physician review and results in
                about 5 business days. Pair it with Everlywell&apos;s <strong>Cholesterol &amp; Lipids
                test (~$49)</strong> for a quick cardiometabolic read.
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Best for:</strong> tracking blood-sugar control without a clinic visit.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>Runner-up — Function Health:</strong> if you want metabolic markers inside a full
              panel rather than as standalone kits, Function&apos;s membership captures A1c, glucose,
              lipids, and more in the same draw. To see how blood-sugar tracking pairs with a wearable,
              our <Link href="/guides/cgm-without-diabetes" className="text-blue-600 hover:underline">continuous glucose monitor guide</Link> covers the real-time side.
            </p>

            <h2 id="sti" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Best for STI Screening</h2>

            <p className="text-gray-700 mb-4">
              STI screening is the use case at-home testing was almost built for: discreet, fast, and
              run on the same lab platforms a clinic uses.
            </p>

            <div className="bg-blue-50 rounded-lg p-6 my-6">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Top pick: myLAB Box</h3>
              <p className="text-gray-700 mb-2">
                myLAB Box bundles multi-panel kits — an <strong>8-panel &quot;Uber Box&quot; (~$209)</strong> and
                a <strong>14-panel &quot;Total Box&quot; (~$379-$409)</strong> — analyzed in{' '}
                <strong>CAP- and CLIA-certified labs</strong>, with results in about{' '}
                <strong>2-5 days</strong> and a <strong>free telehealth consult if a result is positive</strong>.
                It is HIPAA-compliant and does not route results through your insurer.
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Best for:</strong> a discreet, comprehensive multi-infection screen.
              </p>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>Runner-ups — Everlywell &amp; LetsGetChecked:</strong> Everlywell sells an{' '}
              <strong>at-home STD test (~$169)</strong> and a <strong>Chlamydia &amp; Gonorrhea test
              (~$69)</strong>; LetsGetChecked offers a <strong>complete sexual-health panel (~$299)</strong>{' '}
              from its owned CLIA/CAP lab. All three are estimates that move with promotions — confirm
              before buying. Note the <strong>window period</strong>: testing too soon after exposure can
              miss an infection, and any positive result needs clinical follow-up.
            </p>

            <h2 id="accuracy" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Accuracy vs a Venous Draw</h2>

            <p className="text-gray-700 mb-4">
              The honest summary: for many markers, finger-prick is close — but a venous draw is still
              the more reliable method overall, and the gap depends entirely on the marker.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Marker / category</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Finger-prick reliability</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Note</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">HbA1c</td>
                    <td className="border border-gray-300 px-4 py-3">High</td>
                    <td className="border border-gray-300 px-4 py-3">Tracks venous results closely</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">TSH (thyroid)</td>
                    <td className="border border-gray-300 px-4 py-3">High</td>
                    <td className="border border-gray-300 px-4 py-3">Among the well-validated markers</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Vitamin D / B12</td>
                    <td className="border border-gray-300 px-4 py-3">High</td>
                    <td className="border border-gray-300 px-4 py-3">Closely match venous values</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Lipids (cholesterol)</td>
                    <td className="border border-gray-300 px-4 py-3">Moderate</td>
                    <td className="border border-gray-300 px-4 py-3">Sensitive to collection technique</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Hormones (low concentration)</td>
                    <td className="border border-gray-300 px-4 py-3">Moderate</td>
                    <td className="border border-gray-300 px-4 py-3">Professional draw preferred for precision</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Potassium / AST / coagulation</td>
                    <td className="border border-gray-300 px-4 py-3">Low</td>
                    <td className="border border-gray-300 px-4 py-3">Stay unreliable from finger-prick</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              A <strong>2025 study comparing 34 routine chemistry analytes</strong> from finger-prick
              capillary blood against venous samples found that, of the 33 analytes with allowable-error
              criteria available, <strong>30 met the acceptable accuracy thresholds</strong> — with
              potassium showing the weakest agreement. Separately, marker-level evidence shows AST and
              coagulation tests stay unreliable from a finger-prick because skin-puncture haemolysis and
              clotting-cascade activation distort them. Capillary samples are also more prone to
              haemolysis and collection variation than venous draws. The takeaway: for HbA1c, TSH,
              vitamin D, and STI screening, a validated kit is genuinely close to a lab; for lipids,
              hormones, and comprehensive panels, choose a service that uses a professional draw. For the
              full evidence, see our <Link href="/guides/are-at-home-blood-tests-accurate" className="text-blue-600 hover:underline">accuracy guide</Link>.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">The accuracy shortcut</h4>
              <p className="text-gray-700">
                If a test sends you to Quest or Labcorp for a professional draw, accuracy matches
                doctor-ordered labs because it uses the same labs. If it is a finger-prick or saliva kit,
                accuracy is excellent for validated markers and weaker for the sensitive ones above.
                Match the collection method to the marker.
              </p>
            </div>

            <h2 id="how-to-pick" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Pick the Right Test</h2>

            <p className="text-gray-700 mb-4">
              A four-step framework that works across every category above:
            </p>

            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Start with the goal, not the brand.</strong> Wellness baseline, hormone check, thyroid panel, metabolic marker, or STI screen — name it first.</li>
              <li><strong>Match the collection method to the marker.</strong> Professional draw for lipids, hormones, and full panels; finger-prick or saliva for HbA1c, vitamin D, thyroid, and STI screening where validated.</li>
              <li><strong>Check the lab and the support.</strong> Confirm it is CLIA-certified (ideally CAP-accredited), and whether physician or nurse review is included.</li>
              <li><strong>Compare the all-in price the same week.</strong> Sales move constantly; price the exact test at two providers before buying.</li>
            </ol>

            <p className="text-gray-700 mb-4">
              And one rule that applies to every result: an at-home test is <strong>screening, not
              diagnosis</strong>. An out-of-range value is a data point to review with a clinician, not a
              verdict to act on alone.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Where to compare providers</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Cash-pay lab platforms side by side:</strong> the <Link href="/labs" className="text-blue-600 hover:underline">cash-pay labs directory</Link> lists providers with transparent self-pay pricing</li>
              <li><strong>Walk-in lab pricing:</strong> our <Link href="/guides/quest-vs-labcorp-pricing" className="text-blue-600 hover:underline">Quest vs Labcorp pricing guide</Link> covers the direct-to-consumer storefronts</li>
              <li><strong>Telehealth-ordered testing:</strong> browse the <Link href="/telehealth" className="text-blue-600 hover:underline">telehealth &amp; labs hub</Link></li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare At-Home &amp; Cash-Pay Lab Options</h3>
            <p className="mb-6 text-blue-100">
              See at-home kits and membership lab platforms side by side, with transparent self-pay pricing.
            </p>
            <Link
              href="/labs"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse Cash-Pay Labs
            </Link>
          </div>

          {/* FAQ — visible block mirrors the FAQPage schema above exactly */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div>
              {FAQ_ITEMS.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </section>

          {/* Sources */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <a href="https://www.everlywell.com/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Everlywell — at-home lab tests, product pricing, CLIA-certified labs, physician review</a></li>
              <li>• <a href="https://www.everlywell.com/products/hba1c/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Everlywell — HbA1c (blood sugar) at-home test</a></li>
              <li>• <a href="https://www.functionhealth.com/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Function Health — membership pricing, biomarker breadth, Quest draw, clinician review</a></li>
              <li>• <a href="https://www.letsgetchecked.com/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">LetsGetChecked — owned CLIA-certified / CAP-accredited lab, tests, clinical support</a></li>
              <li>• <a href="https://www.mylabbox.com/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">myLAB Box — at-home STI multi-panel kits, CAP/CLIA labs, telehealth consult</a></li>
              <li>• <a href="https://doi.org/10.1515/cclm-2024-0812" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Doeleman et al., Clin Chem Lab Med (2025) — Comparison of capillary finger stick and venous blood sampling for 34 routine chemistry analytes (UMC Utrecht)</a></li>
              <li>• <a href="https://lolahealth.com/blogs/longevity/finger-prick-vs-venous-blood-test" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Finger-prick vs venous blood test — marker-by-marker reliability (potassium, AST, coagulation problematic from capillary)</a></li>
            </ul>
          </div>
        </article>

        {/* Shared YMYL disclaimer + affiliate disclosure */}
        <MedicalDisclaimer />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our At-Home Lab Test Picker"
            description="A one-page cheat sheet matching each goal — wellness, hormones, thyroid, metabolic, STI — to the right test and collection method."
            source="guide_best_at_home_lab_tests"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
