import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Ketamine Therapy Cost (2026): At-Home vs Clinic & Spravato' },
  alternates: { canonical: 'https://vitalityscout.com/guides/ketamine-therapy-cost' },
  description:
    'Ketamine therapy cost in 2026: at-home (Mindbloom, Joyous) from ~$129/mo vs in-clinic IV $400-$700/session and Spravato. Inclusions, evidence, safety.',
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does ketamine therapy cost for depression in 2026?',
    answer:
      'It depends heavily on the format. At-home oral programs are the cheapest: Joyous advertises low-dose daily ketamine from about $129/month, and Mindbloom lists 6-session programs around $1,290 (about $215/session) up to 18-session programs around $2,970 (about $165/session). In-clinic IV infusions typically run roughly $400-$700 per session, so a standard 6-session induction lands around $2,400-$4,200. Spravato (the FDA-approved nasal esketamine) can be $590-$1,000+ per session at retail but is often $10-$125 per session once insurance applies. These are published estimates that change often — confirm current pricing directly with the provider.',
  },
  {
    question: 'Is at-home ketamine therapy cheaper than going to a clinic?',
    answer:
      'Usually, yes. At-home oral programs like Mindbloom (about $165-$215 per session in its multi-session plans) and Joyous (from about $129/month) are generally priced well below in-clinic IV infusions, which commonly run $400-$700 per session. The trade-off is supervision: a clinic visit includes in-person medical monitoring, while at-home programs rely on telehealth clinician oversight and self-administration after screening. Cost is only one factor — the right format depends on your clinical situation and what a prescriber recommends. Verify current pricing and what is included before enrolling.',
  },
  {
    question: 'Does insurance cover ketamine therapy?',
    answer:
      'Mostly only for Spravato. Spravato (esketamine) is FDA-approved for treatment-resistant depression, so most major plans and Medicare cover it when you meet the criteria, often leaving a copay of roughly $10-$125 per session. IV, IM, and at-home oral ketamine are used off-label for depression and are rarely covered, so you typically pay cash. Some at-home programs (Mindbloom, Joyous) accept HSA/FSA and can provide a superbill you may submit for possible out-of-network reimbursement. Confirm coverage with your plan before assuming anything qualifies.',
  },
  {
    question: 'What is the difference between Mindbloom and Joyous?',
    answer:
      'Both are at-home telehealth ketamine programs, but the model differs. Mindbloom uses higher-dose, less-frequent guided sessions (typically 6 to 18 sessions) with clinician consults, a trained guide, an app, and integration support, priced per program. Joyous uses a low-dose daily subscription with text-based check-ins and asynchronous clinician oversight, billed monthly from about $129. Neither is universally "better" — the higher-dose guided model and the daily microdose model suit different people. Discuss which fits you with a licensed clinician, and verify each program\'s current pricing and inclusions.',
  },
  {
    question: 'Is ketamine therapy FDA-approved for depression?',
    answer:
      'Only the nasal esketamine spray, Spravato, is FDA-approved — for treatment-resistant depression (2019) and for major depressive disorder with acute suicidal ideation (2020) — and it must be given under medical supervision at a REMS-certified clinic. All other forms used for mood, including IV infusions, IM injections, and at-home oral ketamine, are prescribed off-label. Off-label use is legal and common but is not FDA-approved for depression. Anyone considering it should review the risks with a qualified prescriber.',
  },
  {
    question: 'How much is a single ketamine IV infusion?',
    answer:
      'A single in-clinic IV ketamine infusion typically costs about $400-$700, with some clinics quoting up to $800 depending on dose, monitoring, and location. IM (intramuscular) injections often run a bit less, roughly $300-$600. A typical induction course is 6 infusions over two to three weeks, then optional booster sessions. IV ketamine for depression is off-label and rarely covered by insurance, so most patients pay out of pocket. These are estimates that vary by clinic — confirm the all-in per-session price, including monitoring fees, before booking.',
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

export default function KetamineTherapyCost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Ketamine Therapy Cost: At-Home vs In-Clinic vs Spravato (2026)',
    description:
      'A cost comparison of ketamine therapy for depression in 2026 — at-home oral programs (Mindbloom, Joyous), in-clinic IV and IM infusions, and FDA-approved Spravato esketamine — with what each includes, the evidence, and safety.',
    url: 'https://vitalityscout.com/guides/ketamine-therapy-cost',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/ketamine-therapy-cost#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalTherapy', name: 'Ketamine therapy for depression' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'Mindbloom — At-Home Ketamine Therapy Pricing', url: 'https://www.mindbloom.com/pricing' },
      { '@type': 'CreativeWork', name: 'Joyous — Low Dose Ketamine Treatment Pricing', url: 'https://www.joyous.team/pricing' },
      { '@type': 'CreativeWork', name: 'Lumin Health — Ketamine Treatment Cost (Spravato, IV, IM)', url: 'https://www.lumin.health/ketamine-treatment-cost' },
      { '@type': 'CreativeWork', name: 'Ketamine treatment for depression: a review (PMC9010394)', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9010394/' },
      { '@type': 'CreativeWork', name: 'NPR — Ketamine economy: new mental health clinics pop up with few rules', url: 'https://www.npr.org/sections/health-shots/2024/01/30/1227630630/ketamine-infusion-clinic-mental-health-depression-anxiety-fda-off-label' },
    ],
  };

  const faqSchema = {
    ...buildFAQSchema(FAQ_ITEMS),
    '@id': 'https://vitalityscout.com/guides/ketamine-therapy-cost#faq',
    url: 'https://vitalityscout.com/guides/ketamine-therapy-cost',
  };

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
              <span className="text-gray-900">Ketamine Therapy Cost</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/mental-health" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Mental Health Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Comparison
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Ketamine Therapy Cost: At-Home vs Clinic vs Spravato (2026)
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              Ketamine for depression now comes in very different price tiers — a $129/month at-home
              subscription, a guided at-home program, an in-clinic IV drip, or the FDA-approved nasal
              spray. Here is what each actually costs, what is included, and how to decide.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                <strong>Ketamine therapy cost in 2026 ranges from about $129/month to $700+ per
                session.</strong> At-home oral programs are cheapest — Joyous from ~$129/month, Mindbloom
                ~$165-$215/session in multi-session plans. In-clinic IV infusions run ~$400-$700/session
                (about $2,400-$4,200 for a 6-session course). Spravato, the only FDA-approved form, is
                ~$590-$1,000 retail but often $10-$125/session with insurance. Most non-Spravato forms
                are off-label and cash-pay. Prices are estimates to verify; this is information, not
                medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: June 2026 • 11 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Comparison Box */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Comparison</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">At-Home Oral (Mindbloom, Joyous)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Joyous: from ~$129/mo (estimate)</li>
                  <li>• Mindbloom: ~$165-$215/session (estimate)</li>
                  <li>• Telehealth clinician oversight</li>
                  <li>• Off-label; not usually insured</li>
                  <li>• HSA/FSA often accepted</li>
                  <li>• Self-administered after screening</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">In-Clinic IV / Spravato</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• IV infusion: ~$400-$700/session (estimate)</li>
                  <li>• Spravato: ~$590-$1,000 retail (estimate)</li>
                  <li>• Spravato often $10-$125 with insurance</li>
                  <li>• In-person medical monitoring</li>
                  <li>• Spravato is FDA-approved (REMS clinic)</li>
                  <li>• IV is off-label, rarely covered</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">Lean at-home if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You want the lowest cash price</li>
                  <li>• You are comfortable with telehealth care</li>
                  <li>• A clinician has cleared you for self-administration</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">Lean in-clinic / Spravato if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You have treatment-resistant depression</li>
                  <li>• You want in-person medical monitoring</li>
                  <li>• Insurance could cover FDA-approved Spravato</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#types" className="text-blue-600 hover:underline">1. The four ways to get ketamine therapy</a></li>
              <li><a href="#cost-table" className="text-blue-600 hover:underline">2. Cost comparison by format</a></li>
              <li><a href="#at-home" className="text-blue-600 hover:underline">3. At-home: Mindbloom vs Joyous</a></li>
              <li><a href="#in-clinic" className="text-blue-600 hover:underline">4. In-clinic IV, IM &amp; Spravato</a></li>
              <li><a href="#included" className="text-blue-600 hover:underline">5. What the price actually includes</a></li>
              <li><a href="#insurance" className="text-blue-600 hover:underline">6. Insurance, HSA/FSA &amp; superbills</a></li>
              <li><a href="#evidence" className="text-blue-600 hover:underline">7. What the evidence shows</a></li>
              <li><a href="#safety" className="text-blue-600 hover:underline">8. Safety &amp; what to know first</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Ketamine has gone from a hospital anesthetic to one of the most-searched depression
              treatments in the country, and the price you pay depends almost entirely on how you get
              it. The same molecule can cost $129 a month as a daily at-home subscription or $700 a
              session in a clinic chair. Below is an honest breakdown of every format, what is bundled
              into each price, and the safety and evidence context you need before spending a dollar.
            </p>

            <h2 id="types" className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Four Ways to Get Ketamine Therapy</h2>

            <p className="text-gray-700 mb-4">
              Ketamine for mood is delivered four main ways, and they are not interchangeable on price,
              supervision, or regulatory status:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>At-home oral ketamine</strong> — telehealth programs ship sublingual tablets/troches you take at home after a clinician screening. Cheapest tier. Off-label for depression.</li>
              <li><strong>In-clinic IV infusion</strong> — a slow intravenous drip under monitoring at a ketamine clinic. The original off-label model; mid-to-high price.</li>
              <li><strong>In-clinic IM injection</strong> — an intramuscular shot, usually a bit cheaper than IV, also off-label.</li>
              <li><strong>Spravato (esketamine)</strong> — a nasal spray given under supervision at a REMS-certified clinic. The <strong>only FDA-approved</strong> form for depression, and the one insurance is most likely to cover.</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why this matters for cost:</strong> only Spravato is FDA-approved, so it is the
                one insurance treats as &quot;medically necessary&quot; and helps pay for. Every other
                form is prescribed off-label for depression, which legally means cash-pay for almost
                everyone — and that is exactly why the at-home and IV markets compete so hard on price.
              </p>
            </div>

            <h2 id="cost-table" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cost Comparison by Format</h2>

            <p className="text-gray-700 mb-4">
              The figures below are <strong>estimates drawn from published provider pricing and
              cost guides</strong> (Mindbloom, Joyous, and a clinic cost comparison from Lumin Health),
              not live quotes. Doses, monitoring, and location move the number, and many providers run
              promotions. Use this to set expectations, then confirm the current price on the
              provider&apos;s own page.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Format</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical cost (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">FDA status / insurance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">At-home daily (Joyous)</td>
                    <td className="border border-gray-300 px-4 py-3">From ~$129/mo</td>
                    <td className="border border-gray-300 px-4 py-3">Off-label; cash-pay, HSA/FSA</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">At-home guided (Mindbloom)</td>
                    <td className="border border-gray-300 px-4 py-3">~$165-$215/session; ~$1,290-$2,970/program</td>
                    <td className="border border-gray-300 px-4 py-3">Off-label; cash-pay, HSA/FSA, superbill</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">In-clinic IV infusion</td>
                    <td className="border border-gray-300 px-4 py-3">~$400-$700/session; ~$2,400-$4,200/6-session course</td>
                    <td className="border border-gray-300 px-4 py-3">Off-label; rarely covered</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">In-clinic IM injection</td>
                    <td className="border border-gray-300 px-4 py-3">~$300-$600/session</td>
                    <td className="border border-gray-300 px-4 py-3">Off-label; not covered</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Spravato (esketamine)</td>
                    <td className="border border-gray-300 px-4 py-3">~$590-$1,000+/session retail; often $10-$125 with insurance</td>
                    <td className="border border-gray-300 px-4 py-3">FDA-approved; covered by Medicare + most plans</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>The pattern:</strong> at-home oral is the budget tier, in-clinic IV/IM is the
              mid tier, and Spravato is the most expensive at retail but potentially the cheapest
              out-of-pocket once insurance applies. The right comparison is not list price — it is your
              all-in cost after coverage, doses, and any monitoring fees.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Watch the &quot;per session vs per course&quot; framing</h4>
              <p className="text-gray-700">
                A clinic that quotes &quot;$450 a session&quot; usually means a 6-session induction
                (~$2,700) plus ongoing boosters — not a one-time fee. An at-home program that quotes
                &quot;$165 a session&quot; is billing a multi-month program in monthly installments.
                Always ask for the full program cost and the expected number of sessions before
                comparing two providers.
              </p>
            </div>

            <h2 id="at-home" className="text-2xl font-bold text-gray-900 mt-12 mb-6">At-Home: Mindbloom vs Joyous</h2>

            <p className="text-gray-700 mb-4">
              The two best-known at-home telehealth ketamine brands take opposite approaches, which is
              why their pricing looks so different.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Mindbloom — guided, higher-dose sessions</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Multi-session programs: a 6-session program around $1,290 (~$215/session), 12-session around $2,220 (~$185/session), 18-session around $2,970 (~$165/session), billed in monthly installments (estimates)</li>
              <li>Each program bundles clinician consults, sessions with a trained guide, integration support, and a mobile app</li>
              <li>Does not bill insurance, but can provide a superbill to submit for possible out-of-network reimbursement; HSA/FSA generally accepted</li>
              <li>Off-label use of oral ketamine for depression and anxiety</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Joyous — low-dose daily subscription</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Subscription pricing from about $129/month (with a longer commitment) or about $159/month on a flexible no-commitment plan (estimates)</li>
              <li>Low daily dose model with text-based check-ins and asynchronous clinician oversight via the app</li>
              <li>Insurance not accepted; HSA/FSA accepted</li>
              <li>Off-label use; designed as an ongoing maintenance subscription rather than a fixed course</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>How to choose between them:</strong> they are not the same product at a
                different price. Mindbloom is a fixed, higher-dose guided program; Joyous is a
                low-dose daily subscription. Which model is appropriate is a clinical question — bring
                it to a licensed prescriber rather than picking on price alone. Verify current pricing
                and inclusions on each brand&apos;s site before enrolling.
              </p>
            </div>

            <h2 id="in-clinic" className="text-2xl font-bold text-gray-900 mt-12 mb-6">In-Clinic IV, IM &amp; Spravato</h2>

            <p className="text-gray-700 mb-4">
              If you want in-person medical monitoring, you are looking at a clinic. The US now has well
              over a thousand ketamine clinics, from independent practices to national brands; coverage
              and quality vary widely, so vet any clinic carefully.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>IV infusion:</strong> roughly $400-$700 per session (some clinics quote up to $800). A standard induction is about 6 infusions over two to three weeks, then optional monthly boosters. Off-label and rarely covered.</li>
              <li><strong>IM injection:</strong> often $300-$600 per session — typically a bit cheaper than IV. Also off-label and not covered.</li>
              <li><strong>Spravato (esketamine):</strong> roughly $590-$1,000+ per session at retail, given as a nasal spray under supervision at a REMS-certified clinic. Because it is FDA-approved, insurance usually applies, dropping many patients to $10-$125 per session.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              On the clinic side, brands you may encounter include national ketamine-assisted therapy
              chains such as Field Trip Health and infusion-clinic chains like Revitalist, alongside
              hospital-affiliated programs (for example, Northwestern Medicine runs a ketamine infusion
              program). Spravato is offered at REMS-certified psychiatric clinics nationwide. Always
              confirm the clinician&apos;s credentials, monitoring protocol, and the all-in price
              before booking — the NPR-reported &quot;ketamine economy&quot; has expanded faster than
              regulation, so quality is not uniform.
            </p>

            <h2 id="included" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What the Price Actually Includes</h2>

            <p className="text-gray-700 mb-4">
              Two quotes at the same dollar figure can include very different things. Before you compare,
              check what is bundled:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Element</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">At-home programs</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">In-clinic</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Medical screening / consult</td>
                    <td className="border border-gray-300 px-4 py-3">Telehealth clinician consults</td>
                    <td className="border border-gray-300 px-4 py-3">In-person evaluation</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Medication</td>
                    <td className="border border-gray-300 px-4 py-3">Included; mailed to you</td>
                    <td className="border border-gray-300 px-4 py-3">Included; administered on site</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Supervision during dose</td>
                    <td className="border border-gray-300 px-4 py-3">Self-administered; remote support</td>
                    <td className="border border-gray-300 px-4 py-3">In-person medical monitoring</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Coaching / integration</td>
                    <td className="border border-gray-300 px-4 py-3">Guide sessions + app (varies)</td>
                    <td className="border border-gray-300 px-4 py-3">Varies; sometimes added separately</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Facility / monitoring fees</td>
                    <td className="border border-gray-300 px-4 py-3">None</td>
                    <td className="border border-gray-300 px-4 py-3">Often a separate line item</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="insurance" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Insurance, HSA/FSA &amp; Superbills</h2>

            <p className="text-gray-700 mb-4">
              This is where the FDA-approval line matters most for your wallet:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Spravato is the covered option.</strong> Because it is FDA-approved for treatment-resistant depression, Medicare and most major commercial plans cover it when you meet criteria, frequently leaving a copay around $10-$125 per session. Manufacturer assistance can lower eligible commercial patients further.</li>
              <li><strong>IV, IM, and at-home oral are usually cash-pay.</strong> Off-label depression use means most insurers will not reimburse the treatment itself.</li>
              <li><strong>HSA/FSA can help.</strong> At-home programs like Mindbloom and Joyous generally accept HSA/FSA, effectively discounting the cost by your tax rate.</li>
              <li><strong>Superbills are not a guarantee.</strong> Mindbloom can provide an itemized superbill you may submit for possible out-of-network reimbursement, but whether your plan pays is up to the plan.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              The practical move: if you may qualify for treatment-resistant depression, price Spravato
              through your insurance first — it can be the cheapest out-of-pocket path despite the highest
              retail price. Confirm coverage with your plan before assuming a treatment qualifies.
            </p>

            <h2 id="evidence" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What the Evidence Shows</h2>

            <p className="text-gray-700 mb-4">
              Ketamine is studied for its <strong>rapid</strong> antidepressant effect, which is what
              makes it different from standard antidepressants that take weeks. In reviewed trials,
              improvement on depression rating scales has been observed within hours of an infusion, and
              one review reported that a large share of treatment-resistant patients met response
              criteria at 24 hours. That said:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Effects can be fast but are often <strong>not durable</strong> without repeated dosing or maintenance — part of why protocols use induction courses plus boosters.</li>
              <li>Only <strong>Spravato (esketamine)</strong> has cleared FDA review for depression; the evidence base for various at-home oral protocols is thinner and still developing.</li>
              <li>Researchers continue to flag that <strong>long-term effects are not fully characterized</strong>, including questions about repeated off-label use.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              In short: promising and fast-acting in studied populations, but not a guaranteed or
              permanent fix, and the strength of evidence varies by format. No treatment described here
              guarantees an outcome.
            </p>

            <h2 id="safety" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Safety &amp; What to Know First</h2>

            <p className="text-gray-700 mb-4">
              Ketamine is a real medication with real considerations. A balanced view before you spend:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Dissociation and short-term effects.</strong> Reviewed side effects include dissociative symptoms, transient blood-pressure increases, and confusion or agitation around the time of dosing — reasons monitoring matters.</li>
              <li><strong>Misuse and dependence risk.</strong> Long-term safety is still being studied; ketamine has abuse potential, which is part of why Spravato carries a REMS and is given under supervision.</li>
              <li><strong>Screening is not optional.</strong> Certain conditions (for example uncontrolled hypertension or some psychiatric histories) can make ketamine inappropriate. A proper medical evaluation should precede any program.</li>
              <li><strong>At-home means less supervision.</strong> The lower price of at-home programs partly reflects self-administration; that is a trade-off to weigh with a clinician, not just a discount.</li>
              <li><strong>Clinic quality varies.</strong> The number of clinics has grown faster than oversight, so verify credentials and protocols rather than choosing on price.</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">If you are in crisis</h4>
              <p className="text-gray-700">
                Ketamine therapy is not an emergency service. If you are having thoughts of harming
                yourself, call or text 988 (the Suicide &amp; Crisis Lifeline) in the US, or go to the
                nearest emergency room. Treatment decisions for serious depression should always involve
                a licensed clinician.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">A simple decision framework</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li>Talk to a licensed clinician about whether ketamine therapy is appropriate for you at all</li>
              <li>If you may have treatment-resistant depression, price FDA-approved Spravato through your insurance first</li>
              <li>If paying cash, compare the all-in program cost (not per-session) across at-home and in-clinic options</li>
              <li>Weigh supervision and convenience, not just price, and verify provider credentials before booking</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Related guides</h3>
            <p className="text-gray-700 mb-4">
              Ketamine is one piece of the cash-pay mental-health landscape. For lower-cost talk-therapy
              and psychiatry options, and for adjacent telehealth care, see:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Online therapy platforms:</strong> our <Link href="/guides/betterhelp-vs-talkspace" className="text-blue-600 hover:underline">BetterHelp vs Talkspace vs Brightside comparison</Link> covers therapy and psychiatry pricing</li>
              <li><strong>Specialized telehealth programs:</strong> see how affordable online care is structured in our <Link href="/guides/cirs-telehealth-treatment" className="text-blue-600 hover:underline">CIRS telehealth treatment guide</Link></li>
              <li><strong>More cash-pay services:</strong> browse the full <Link href="/guides" className="text-blue-600 hover:underline">health guides library</Link></li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Explore Cash-Pay Mental Health Options</h3>
            <p className="mb-6 text-blue-100">
              Compare telehealth therapy, psychiatry, and specialized care with transparent self-pay pricing.
            </p>
            <Link
              href="/mental-health"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse Mental Health Care
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
              <li>• Mindbloom — mindbloom.com/pricing (at-home program pricing, sessions, inclusions)</li>
              <li>• Joyous — joyous.team/pricing (low-dose daily subscription pricing)</li>
              <li>• Lumin Health — lumin.health/ketamine-treatment-cost (Spravato, IV, IM cost comparison)</li>
              <li>• Ketamine treatment for depression: a review — NCBI PMC9010394 (rapid antidepressant effect, REMS, safety)</li>
              <li>• NPR — &quot;Ketamine economy: new mental health clinics pop up with few rules&quot; (clinic growth, off-label use)</li>
            </ul>
          </div>
        </article>

        {/* Shared YMYL medical + affiliate disclosure */}
        <MedicalDisclaimer />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Cash-Pay Mental Health Pricing Cheat Sheet"
            description="Ketamine, therapy, and psychiatry: how to compare self-pay options and what insurance actually covers."
            source="guide_ketamine_therapy_cost"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
