import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Hormone Pellet Therapy Cost (2026): Pellets vs Injections' },
  alternates: { canonical: 'https://vitalityscout.com/guides/hormone-pellet-therapy-cost' },
  description:
    'Hormone pellet therapy cost: ~$300-$500 per insertion for women, ~$650-$750 for men. Pellets vs injections and creams, longevity, and what is cash-pay.',
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does hormone pellet therapy cost per insertion?',
    answer:
      'Per insertion, hormone pellets are commonly estimated at roughly $300-$500 for women and roughly $650-$750 for men, because men need a higher dose and more pellets. When pellet materials and the procedure are billed separately, a single insertion can run $500-$1,000. Initial labs and a consultation typically add $100-$400. These are estimates that vary by provider, dose, and region — confirm the current cash price with the clinic before you book.',
  },
  {
    question: 'How long do hormone pellets last?',
    answer:
      'Most testosterone and estradiol pellets release hormone steadily for about 3 to 6 months before they fully dissolve. Women are often re-pelleted every 3-4 months and men every 4-6 months, though people who are very active or who metabolize hormones faster may need insertions sooner. Because the pellet cannot be removed or adjusted once placed, the dose is locked in for that whole window. Your clinician sets your interval from follow-up labs.',
  },
  {
    question: 'Is hormone pellet therapy cheaper than injections or creams?',
    answer:
      'Not usually on a monthly basis. Self-pay testosterone injections and many gels are often estimated around $50-$150 per month, while pellets work out to roughly $100-$170 per month once you spread 3-4 insertions across the year. Pellets cost more largely because each insertion is an in-office procedure. People choose pellets for convenience and steady levels, not to save money. Compare the all-in annual cost, not just the headline per-insertion price.',
  },
  {
    question: 'Does insurance cover hormone pellet therapy?',
    answer:
      'Usually not for the pellets themselves. Compounded hormone pellets are not FDA-approved, so most plans do not cover the pellet or the insertion, and patients pay out of pocket — often around $1,200-$2,000 per year. Some plans may still cover the initial consultation and lab work because those are standard medical care. Confirm coverage with your insurer and ask the clinic for the self-pay price either way.',
  },
  {
    question: 'Are hormone pellets FDA-approved?',
    answer:
      'It depends on the product. Testopel, a branded crystalline-testosterone pellet, was FDA-approved in 1972. Most pellets advertised by med spas and wellness clinics — including many testosterone, estradiol, and progesterone pellets — are compounded, and compounded pellets are not FDA-approved. Major medical groups urge caution with compounded pellets given limited high-quality safety data. Ask your provider whether you are getting an FDA-approved product or a compounded one.',
  },
  {
    question: 'What are the downsides of hormone pellets?',
    answer:
      'The main trade-off is that the dose cannot be adjusted or removed once the pellet is placed, so if levels run too high the effects persist for the full 3-6 month window and are managed with other medication rather than a quick dose cut. Reported extrusion and infection rates with the branded Testopel pellet are low (under about 1% at high-volume centers), but no procedure is risk-free. Pellets are also a poor fit for men focused on near-term fertility. Discuss candidacy with a licensed clinician.',
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

export default function HormonePelletTherapyCost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Hormone Pellet Therapy Cost: Pellets vs Injections and Creams',
    description:
      'A cash-pay cost guide to hormone pellet therapy (testosterone and estradiol pellets) — per-insertion and annual pricing for women and men, how it compares to injections, gels, and patches, how long pellets last, and the FDA/compounding status to ask about.',
    url: 'https://vitalityscout.com/guides/hormone-pellet-therapy-cost',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/hormone-pellet-therapy-cost#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalTherapy', name: 'Hormone pellet therapy (subcutaneous testosterone and estradiol pellets)' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'Biote — Bioidentical Hormone Replacement Pellet Therapy', url: 'https://biote.com/bioidentical-hormone-replacement-pellet-therapy' },
      { '@type': 'CreativeWork', name: 'Evexias Medical Center Denver — What Do Testosterone Pellets Cost?', url: 'https://www.evexiasdenver.com/what-do-testosterone-pellets-cost/' },
      { '@type': 'CreativeWork', name: 'Highland Longevity — Cost of Hormone Pellets', url: 'https://highlandlongevity.com/cost-of-hormone-pellets/' },
      { '@type': 'CreativeWork', name: 'McGriff & Mata, A Review of Testosterone Pellets in the Treatment of Hypogonadism (PMC4431706)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4431706/' },
      { '@type': 'CreativeWork', name: 'Good Health by Hims — Testosterone Pellets for Men', url: 'https://www.hims.com/guides/testosterone-pellets' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/hormone-pellet-therapy-cost#faq', url: 'https://vitalityscout.com/guides/hormone-pellet-therapy-cost' };

  return (
    <>
      <Navigation />
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
              <span className="text-gray-900">Hormone Pellet Therapy Cost</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/hormone-therapy" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Hormone Therapy Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Comparison
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Hormone Pellet Therapy Cost: Pellets vs Injections &amp; Creams
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              Pellets promise &quot;set it and forget it&quot; hormones a few times a year. Here is
              what testosterone and estradiol pellet therapy actually costs cash-pay, how it stacks
              up against injections and creams, and how long each insertion lasts.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                Hormone pellet therapy is commonly estimated at <strong>~$300-$500 per insertion for
                women</strong> and <strong>~$650-$750 for men</strong>, who need a larger dose. Each
                pellet lasts about <strong>3-6 months</strong>, so most people pay roughly
                <strong> $1,200-$2,000 a year</strong> out of pocket — pellets are usually not
                covered by insurance. That is similar to or above injections and gels, which often
                run $50-$150 a month. Prices are estimates that vary by provider and dose — verify
                with the clinic. This is information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: June 2026 • 11 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Cost Box */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Cost Snapshot (estimates)</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Women (estradiol / testosterone)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• ~$300-$500 per insertion</li>
                  <li>• Re-pelleted every 3-4 months</li>
                  <li>• ~$1,200-$2,000 per year</li>
                  <li>• Labs + consult ~$100-$400</li>
                  <li>• Pellets typically not insured</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Men (testosterone)</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• ~$650-$750 per insertion (higher dose)</li>
                  <li>• Re-pelleted every 4-6 months</li>
                  <li>• ~$1,400-$3,200 per year</li>
                  <li>• Up to $500-$1,000 if materials billed apart</li>
                  <li>• Pellets typically not insured</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">Pellets fit if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You hate daily gels or weekly injections</li>
                  <li>• You want steady levels, not peaks and troughs</li>
                  <li>• You are already stable on a known dose</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">Lean other methods if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You are new to therapy and still dialing dose</li>
                  <li>• You want to keep monthly cost lowest</li>
                  <li>• Near-term fertility matters (men)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#what" className="text-blue-600 hover:underline">1. What hormone pellet therapy is</a></li>
              <li><a href="#cost" className="text-blue-600 hover:underline">2. Cost by patient and what drives it</a></li>
              <li><a href="#vs" className="text-blue-600 hover:underline">3. Pellets vs injections, gels &amp; patches</a></li>
              <li><a href="#longevity" className="text-blue-600 hover:underline">4. How long pellets last</a></li>
              <li><a href="#fda" className="text-blue-600 hover:underline">5. FDA-approved vs compounded pellets</a></li>
              <li><a href="#considerations" className="text-blue-600 hover:underline">6. Trade-offs before you commit</a></li>
              <li><a href="#providers" className="text-blue-600 hover:underline">7. Where pellets are offered</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Hormone pellet therapy is the &quot;a few times a year&quot; option in hormone
              replacement: a clinician slips a small crystalline pellet of testosterone (and, for
              some women, estradiol) under the skin, and it dissolves slowly for months. The pitch is
              convenience and steady levels. The catch is that you pay per procedure, the dose is
              locked in once it is placed, and most pellets are compounded rather than FDA-approved.
              Here is the honest cost-and-trade-off breakdown for cash-pay patients.
            </p>

            <h2 id="what" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Hormone Pellet Therapy Is</h2>

            <p className="text-gray-700 mb-4">
              A hormone pellet is a small solid implant — roughly the size of a grain of rice — made
              of crystalline hormone. In a 10-15 minute office visit under local anesthesia, a
              provider makes a tiny incision (usually in the upper hip or buttock) and inserts one or
              more pellets just under the skin. Over the following months your body heat and blood
              flow dissolve the pellet, releasing hormone steadily until it is gone, at which point
              you return for a re-insertion.
            </p>

            <p className="text-gray-700 mb-4">
              Because release is driven by blood flow, more active people tend to absorb pellets
              faster and may need re-pelleting sooner. The branded testosterone pellet
              <strong> Testopel</strong> contains 75 mg of crystalline testosterone in a 3 &times; 8 mm
              pellet; clinics dose men with several pellets per insertion and women with far fewer.
              Women&apos;s pellets may contain estradiol, testosterone, or both, depending on the plan
              a clinician designs.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why this matters for cost:</strong> every dose is delivered through a
                procedure, not a pharmacy refill. That is what makes pellets convenient and also what
                makes them cost more per month than a tube of gel or a vial you inject at home.
              </p>
            </div>

            <h2 id="cost" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cost by Patient and What Drives It</h2>

            <p className="text-gray-700 mb-4">
              Pricing is not posted consistently across clinics, and it moves with dose and region.
              The figures below are <strong>estimates drawn from published clinic pricing pages and
              cost guides</strong>, not live quotes — use them to set expectations, then confirm the
              all-in number with the provider.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Patient</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Per insertion (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Re-pellet interval</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Annual (estimate)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Women</td>
                    <td className="border border-gray-300 px-4 py-3">~$300 - $500 (some clinics ~$600)</td>
                    <td className="border border-gray-300 px-4 py-3">Every 3-4 months</td>
                    <td className="border border-gray-300 px-4 py-3">~$1,200 - $2,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Men</td>
                    <td className="border border-gray-300 px-4 py-3">~$650 - $750 (up to ~$1,000 with materials)</td>
                    <td className="border border-gray-300 px-4 py-3">Every 4-6 months</td>
                    <td className="border border-gray-300 px-4 py-3">~$1,400 - $3,200</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Labs + consultation</td>
                    <td className="border border-gray-300 px-4 py-3">~$100 - $400</td>
                    <td className="border border-gray-300 px-4 py-3">Intake + monitoring</td>
                    <td className="border border-gray-300 px-4 py-3">Sometimes insured</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>Why men pay more:</strong> men need a much larger testosterone dose, so each
              insertion uses more pellets and more material. Men also tend to metabolize testosterone
              faster, which can shorten the interval between insertions and push annual cost up. The
              single biggest variable in your yearly bill is how often you actually need re-pelleting,
              which your follow-up labs determine.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Ask whether labs and consults are bundled</h4>
              <p className="text-gray-700">
                Some clinics quote a flat per-insertion price; others bill the pellet materials,
                the procedure, the consultation, and the lab panel separately. A &quot;$350&quot;
                headline can become $600+ once monitoring labs are added. Ask for the full first-year
                cost, including how many insertions they expect, before comparing two clinics.
              </p>
            </div>

            <h2 id="vs" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Pellets vs Injections, Gels &amp; Patches</h2>

            <p className="text-gray-700 mb-4">
              The honest summary: pellets are usually <em>not</em> the cheapest delivery method on a
              monthly basis. People pick them for convenience and steady levels, not savings. Here is
              how the common testosterone and estrogen delivery routes compare on cost and effort
              (monthly figures are cash-pay estimates).
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Method</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical monthly cost (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">How often you act</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Dose adjustable?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Pellets</td>
                    <td className="border border-gray-300 px-4 py-3">~$100 - $170</td>
                    <td className="border border-gray-300 px-4 py-3">Office visit 2-4x/year</td>
                    <td className="border border-gray-300 px-4 py-3">No (locked in once placed)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Injections</td>
                    <td className="border border-gray-300 px-4 py-3">~$50 - $150</td>
                    <td className="border border-gray-300 px-4 py-3">Weekly (often self-administered)</td>
                    <td className="border border-gray-300 px-4 py-3">Yes (very flexible)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Gels / creams</td>
                    <td className="border border-gray-300 px-4 py-3">~$50 - $150</td>
                    <td className="border border-gray-300 px-4 py-3">Daily</td>
                    <td className="border border-gray-300 px-4 py-3">Yes (and easy to stop)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Patches</td>
                    <td className="border border-gray-300 px-4 py-3">~$75 - $200</td>
                    <td className="border border-gray-300 px-4 py-3">Daily / few days</td>
                    <td className="border border-gray-300 px-4 py-3">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Steady levels:</strong> pellets and patches deliver hormone continuously, avoiding the peak-and-trough swing some people feel with weekly injections.</li>
              <li><strong>Lowest effort:</strong> pellets win — a couple of office visits a year versus weekly shots or daily gel.</li>
              <li><strong>Lowest monthly cost &amp; most control:</strong> injections and gels usually edge it, and they let a clinician change the dose week to week.</li>
              <li><strong>Easiest to stop:</strong> gels and injections; a pellet keeps releasing until it dissolves.</li>
            </ul>

            <h2 id="longevity" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How Long Pellets Last</h2>

            <p className="text-gray-700 mb-4">
              Pellets are designed to release hormone steadily for roughly <strong>3 to 6
              months</strong>. In practice, women are commonly re-pelleted every 3-4 months and men
              every 4-6 months. Published clinical review of the branded Testopel pellet reported
              eugonadal (normal-range) testosterone levels sustained for 3-6 months per insertion,
              with most men re-implanted around the 3-4 month mark.
            </p>

            <p className="text-gray-700 mb-4">
              How long your pellet lasts depends on your dose, your activity level, and your
              metabolism. The first year often involves more frequent visits while a clinician finds
              your interval. That cadence is exactly why annual cost varies so much: someone needing
              four insertions a year pays roughly double someone needing two.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Budget by the year, not the visit</h4>
              <p className="text-gray-700">
                A &quot;$400 per pellet&quot; price feels cheaper than a monthly subscription, but it
                repeats 3-4 times a year. Multiply your expected insertions by the per-insertion price
                and add monitoring labs to get the real figure to compare against a gel or injection
                plan.
              </p>
            </div>

            <h2 id="fda" className="text-2xl font-bold text-gray-900 mt-12 mb-6">FDA-Approved vs Compounded Pellets</h2>

            <p className="text-gray-700 mb-4">
              This distinction matters for both safety and cost. There are two very different things
              both marketed as &quot;pellets&quot;:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>FDA-approved pellets (Testopel):</strong> a branded crystalline testosterone pellet first approved in 1972. An FDA-approved product has been reviewed for safety, efficacy, and manufacturing consistency at a defined dose.</li>
              <li><strong>Compounded pellets:</strong> custom-made by a compounding pharmacy per prescription. Most testosterone, estradiol, and progesterone pellets advertised by med spas and wellness clinics are compounded — and compounded pellets are <strong>not FDA-approved</strong>.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Compounded pellets are not reviewed by the FDA for safety, effectiveness, or
              manufacturing quality, and major medical groups advise caution about routine use given
              limited high-quality evidence and the difficulty of adjusting a dose once it is placed.
              None of this means compounded pellets are inherently unsafe — it means you should ask
              which one you are getting and weigh that with a licensed clinician.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">A question worth asking</h4>
              <p className="text-gray-700">
                &quot;Is this an FDA-approved pellet like Testopel, or a compounded pellet — and what
                is the dose?&quot; A confident, specific answer is a good sign. Insurance is also more
                likely to engage with an FDA-approved product than a compounded one, though most plans
                still treat pellet therapy as out-of-pocket.
              </p>
            </div>

            <h2 id="considerations" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Trade-Offs Before You Commit</h2>

            <p className="text-gray-700 mb-4">
              Pellets are convenient, but the convenience comes with real considerations. A balanced
              view:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>The dose is locked in.</strong> Once a pellet is placed it cannot be removed or adjusted, so if levels run high the effect persists for the full 3-6 months and is managed with other medication, not a dose cut.</li>
              <li><strong>Best after you are stable.</strong> Many clinicians prefer pellets for people already dialed in on a known dose, rather than as a starting method while dose is still being found.</li>
              <li><strong>Procedure risks are low but real.</strong> Reported extrusion (a pellet working back out) and infection rates with the branded Testopel pellet are under about 1% at high-volume centers; aftercare matters.</li>
              <li><strong>Fertility timing.</strong> For men planning conception in the near term, a method that can be stopped quickly may be a better fit — discuss this with your clinician.</li>
              <li><strong>No outcome is guaranteed.</strong> Hormone therapy is individualized; pellets manage symptoms for some people and not others, and require ongoing lab monitoring.</li>
            </ul>

            <h2 id="providers" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Where Pellets Are Offered</h2>

            <p className="text-gray-700 mb-4">
              Pellet therapy is delivered through clinic networks, independent med spas, gynecology
              and men&apos;s-health practices, and some telehealth-adjacent brands that coordinate an
              in-person insertion. A few names you will encounter while researching:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Biote</strong> — one of the largest pellet-therapy networks, training and supplying thousands of independent provider offices nationwide.</li>
              <li><strong>EvexiPEL / Evexias</strong> — a competing pellet-method network used by independent clinics (its Denver center publishes per-insertion pricing).</li>
              <li><strong>Testopel</strong> — the FDA-approved branded testosterone pellet, prescribed by urology and men&apos;s-health practices.</li>
              <li><strong>Hims</strong> and other men&apos;s-health platforms publish patient education on pellets and offer other TRT routes such as injections and gels.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Because Biote and EvexiPEL operate through many independent offices, the price you pay
              depends on the local clinic, not the brand. Get a written first-year quote and compare
              at least two providers.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Other hormone-therapy routes to compare</h3>
            <p className="text-gray-700 mb-4">
              Pellets are one delivery method among several. Before committing, it is worth pricing
              the alternatives:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>The full TRT picture:</strong> our <Link href="/guides/trt-testosterone-therapy" className="text-blue-600 hover:underline">complete TRT guide</Link> covers symptoms, all delivery methods, and monthly costs</li>
              <li><strong>Telehealth TRT clinics:</strong> compare options in our <Link href="/guides/best-online-trt-clinics" className="text-blue-600 hover:underline">best online TRT clinics</Link> roundup</li>
              <li><strong>Hormone-optimization platforms:</strong> see our <Link href="/guides/marek-health-review" className="text-blue-600 hover:underline">Marek Health review</Link> for a cash-pay lab-and-hormone option</li>
              <li><strong>Confirm low levels first:</strong> our <Link href="/guides/at-home-testosterone-test" className="text-blue-600 hover:underline">at-home testosterone test guide</Link> explains baseline testing</li>
              <li><strong>More guides:</strong> browse the full <Link href="/guides" className="text-blue-600 hover:underline">health guides library</Link></li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Cash-Pay Hormone Therapy Options</h3>
            <p className="mb-6 text-blue-100">
              See hormone and TRT providers side by side, with transparent self-pay pricing.
            </p>
            <Link
              href="/hormone-therapy"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse Hormone Therapy
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

          {/* Disclaimer */}
          <div className="mt-12 rounded-lg bg-gray-100 p-6">
            <h3 className="font-semibold text-gray-800 mb-2">Medical &amp; Pricing Disclaimer</h3>
            <p className="text-sm text-gray-600">
              This guide is for general informational purposes only and is not medical advice. We are
              not affiliated with Biote, Evexias/EvexiPEL, Testopel, or Hims. Pricing is based on
              publicly available clinic pages and third-party cost guides and is presented as
              estimates that vary by provider, dose, and region — always verify current pricing
              directly with the clinic before booking. Many hormone pellets are compounded and not
              FDA-approved; hormone therapy decisions, candidacy, and dosing should be made with a
              licensed clinician who can review your labs and history. No treatment guarantees an
              outcome. Abnormal results or side effects should be reviewed with your healthcare
              provider.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Biote — biote.com (bioidentical hormone replacement pellet therapy overview)</li>
              <li>• Evexias Medical Center Denver — evexiasdenver.com (testosterone pellet cost)</li>
              <li>• Highland Longevity — highlandlongevity.com (cost of hormone pellets; method cost comparison)</li>
              <li>• Berman Women&apos;s Wellness — bermansexualhealth.com (cost of hormone pellet therapy for women)</li>
              <li>• PeakedLabs — peakedlabs.com (testosterone pellets: how they work, costs, pros vs cons)</li>
              <li>• Good Health by Hims — hims.com (testosterone pellets for men)</li>
              <li>• McGriff &amp; Mata, A Review of Testosterone Pellets in the Treatment of Hypogonadism, PMC4431706 (Testopel approval, dosing, extrusion/infection rates)</li>
              <li>• Compounded BHRT pellet FDA-status reporting (Testopel FDA-approved vs compounded pellets not FDA-approved)</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Hormone Therapy Cost Cheat Sheet"
            description="Pellets vs injections vs gels: how to compare the real annual cost before you book."
            source="guide_hormone_pellet_therapy_cost"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
