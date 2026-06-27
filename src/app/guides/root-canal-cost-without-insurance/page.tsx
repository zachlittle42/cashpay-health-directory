import Link from 'next/link';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';
import { buildFAQSchema } from '@/lib/jsonLd';

export const metadata: Metadata = {
  title: { absolute: 'Root Canal Cost Without Insurance (2026): By Tooth' },
  alternates: { canonical: 'https://vitalityscout.com/guides/root-canal-cost-without-insurance' },
  description:
    'Root canal cost without insurance in 2026 by tooth, with vs without a crown, plus dental schools, savings plans, and CareCredit to lower the bill.',
};

// Real PAA / long-tail questions, answered only from facts stated on this page.
// Every price answer ends with the verify-with-provider hedge. The visible FAQ
// block below mirrors this schema exactly — schema clarifies, never invents.
const FAQ_ITEMS = [
  {
    question: 'How much does a root canal cost without insurance in 2026?',
    answer:
      'Without insurance, the root-canal procedure alone is commonly estimated at roughly $620-$2,100 depending on the tooth: front teeth run lowest, molars highest because they have more canals and are harder to reach. That figure is the endodontic treatment only — most teeth also need a crown afterward, which typically pushes the all-in cost to about $1,700-$3,200+ per tooth. These are estimates that vary by location, dentist, and tooth complexity, so confirm an itemized quote with the office before you commit.',
  },
  {
    question: 'Does a root canal cost more on a molar than a front tooth?',
    answer:
      'Yes. A front (anterior) tooth usually has a single canal, so it is the cheapest — estimated around $620-$1,700 without insurance. Premolars (bicuspids) have one or two canals and run a bit more, roughly $720-$1,800. Molars have three or four canals and sit at the back of the mouth, so they are the most expensive at about $850-$2,100. Upper molars are often quoted higher than lower molars because access is harder. Treat these as estimates and ask the office for a tooth-specific quote.',
  },
  {
    question: 'Does the price include the crown after a root canal?',
    answer:
      'Usually not. Most published root-canal fees cover the endodontic treatment, appointments, and X-rays but exclude the final restoration — and after a root canal a tooth frequently needs a crown to protect it. A crown is commonly estimated at $1,000-$2,500 on its own, and may also require a core build-up or post. Ask whether the quote you are given is for the root canal only or the root canal plus crown, because that single distinction can roughly double the bill.',
  },
  {
    question: 'How can I get a cheaper root canal without insurance?',
    answer:
      'Several real routes can lower the bill. CODA/ADA-accredited dental-school clinics (for example Tufts, Penn Dental, University of Michigan) charge an estimated 40-60% less because supervised students do the work — often $400-$800 for a molar root canal versus $1,000-$1,600 in private practice, though appointments take longer. Dental savings plans such as the Careington Care 500 (sold through DentalPlans.com, about $185/year individual) advertise large discounts at participating dentists — its sample molar root canal is listed near $481 versus a roughly $1,567 regular fee (~69% off), though sample fees vary by ZIP code. HSA/FSA dollars and in-office or CareCredit payment plans can also spread the cost. Verify current pricing and terms directly with each provider.',
  },
  {
    question: 'Is paying cash for a root canal cheaper than using insurance?',
    answer:
      'It can be, depending on your plan. Dental insurance typically covers about 50-80% of a root canal after the deductible, but many plans cap annual benefits near $1,000-$1,500 and impose waiting periods. If you have no benefits left, a long waiting period, or a high out-of-pocket share, a cash discount or a dental savings plan may beat the insured price. If your deductible is met and the major-procedure benefit is available, insurance is usually cheaper. Price both before deciding, and ask the office for its cash-pay rate.',
  },
  {
    question: 'Does CareCredit cover a root canal, and is it really interest-free?',
    answer:
      'CareCredit, a third-party health credit card accepted at many dental offices, can be used for root canals and crowns and offers no-interest promotional 6-, 12-, 18-, or 24-month plans on qualifying purchases of $200 or more. The catch: those promos are deferred interest, not true 0% — if you do not pay the full balance before the promo ends, interest is charged back from the purchase date at the card’s standard purchase APR (32.99% as of 2026). Used carefully (pay it off in full on time) it spreads the cost; missed, it gets expensive. Confirm the exact terms before signing.',
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

export default function RootCanalCostWithoutInsurance() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Root Canal Cost Without Insurance (2026): By Tooth, With or Without a Crown',
    description:
      'A practical 2026 breakdown of root canal cost without insurance — by tooth type, the root canal vs root canal plus crown total, and how dental schools, savings plans, and financing lower the bill.',
    url: 'https://vitalityscout.com/guides/root-canal-cost-without-insurance',
    mainEntity: { '@type': 'FAQPage', '@id': 'https://vitalityscout.com/guides/root-canal-cost-without-insurance#faq' },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalProcedure', name: 'Endodontic therapy (root canal treatment)' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team', url: 'https://vitalityscout.com', description: 'Editorial team that reviews cash-pay cost guides against cited primary sources (dental payers, savings-plan operators, and accredited dental-school clinics); pricing is presented as estimates to verify with the provider.' },
    lastReviewed: '2026-06-25',
    dateModified: '2026-06-25',
    citation: [
      { '@type': 'CreativeWork', name: 'NewMouth — Root Canal Cost With & Without Insurance', url: 'https://www.newmouth.com/blog/root-canal-cost/' },
      { '@type': 'CreativeWork', name: 'Authority Dental — Root Canal Cost With & Without Insurance (2026)', url: 'https://www.authoritydental.org/root-canal-cost' },
      { '@type': 'CreativeWork', name: 'Delta Dental — Root canal treatment cost', url: 'https://www.deltadental.com/protect-my-smile/procedures/root-canal/treatment-cost/' },
      { '@type': 'CreativeWork', name: 'DentalPlans.com — Careington Care 500 plan pricing', url: 'https://www.dentalplans.com/dentalplans/careingtoncare500series/' },
      { '@type': 'CreativeWork', name: 'NewMouth — Dental Schools for Low-Cost Dental Work', url: 'https://www.newmouth.com/resources/dental-schools/' },
      { '@type': 'CreativeWork', name: 'CareCredit — How Promotional Financing Works (deferred-interest terms)', url: 'https://www.carecredit.com/well-u/financial-health/what-is-promotional-period/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': 'https://vitalityscout.com/guides/root-canal-cost-without-insurance#faq', url: 'https://vitalityscout.com/guides/root-canal-cost-without-insurance' };

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
              <span className="text-gray-900">Root Canal Cost Without Insurance</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/dental" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Dental Care Hub
            </Link>

            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Dental
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Root Canal Cost Without Insurance: The 2026 Price Guide
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              What a root canal really costs when you pay cash — broken down by tooth, with and
              without the crown that usually follows, plus the real ways to bring the bill down.
            </p>

            {/* Direct-answer lead: self-contained 40-80 word summary of the head query. */}
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                Without insurance, a <strong>root canal alone is commonly estimated at $620-$2,100</strong> —
                front teeth lowest, molars highest because they have more canals. The procedure usually
                does <strong>not</strong> include the crown most teeth need afterward, so the realistic
                all-in total is about <strong>$1,700-$3,200+ per tooth</strong>. Dental-school clinics,
                savings plans, HSA/FSA, and financing can cut it. Prices are estimates that vary — get an
                itemized quote. This is information, not medical advice.
              </p>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              Last updated: June 2026 • 10 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Comparison Box */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Numbers (Cash-Pay Estimates)</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-2">Root canal only</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Front tooth: ~$620 - $1,700</li>
                  <li>• Premolar: ~$720 - $1,800</li>
                  <li>• Molar: ~$850 - $2,100</li>
                  <li>• Retreatment: ~$200-$250 more</li>
                  <li>• Excludes the final crown</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">Root canal + crown total</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• Crown alone: ~$1,000 - $2,500</li>
                  <li>• Combined typical: ~$1,700 - $3,200+</li>
                  <li>• May add core build-up / post</li>
                  <li>• Dental school can cut 40-60%</li>
                  <li>• All figures are estimates</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">Pay cash at a private office if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You need it done fast, in one or two visits</li>
                  <li>• You can stack a savings plan or CareCredit</li>
                  <li>• No dental school is near you</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">Look at a dental school if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• Lowest possible price matters most</li>
                  <li>• You can sit for longer appointments</li>
                  <li>• A CODA-accredited school is within reach</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#by-tooth" className="text-blue-600 hover:underline">1. Cost by tooth type</a></li>
              <li><a href="#with-crown" className="text-blue-600 hover:underline">2. With vs without a crown</a></li>
              <li><a href="#drivers" className="text-blue-600 hover:underline">3. What drives the price</a></li>
              <li><a href="#cash-vs-insurance" className="text-blue-600 hover:underline">4. Cash vs insurance</a></li>
              <li><a href="#lower-bill" className="text-blue-600 hover:underline">5. How to lower the bill</a></li>
              <li><a href="#dental-schools" className="text-blue-600 hover:underline">6. Dental schools &amp; savings plans</a></li>
              <li><a href="#considerations" className="text-blue-600 hover:underline">7. Before you book</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              A root canal is one of the procedures people most often face without coverage — it tends to
              arrive suddenly, with pain, and a price tag that lands differently depending on which tooth
              is involved and whether you also need a crown. The good news: the cash-pay market for dental
              care is more transparent than most people assume, and there are several legitimate ways to
              pay far less than the sticker price. Here is the honest breakdown.
            </p>

            <h2 id="by-tooth" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Root Canal Cost by Tooth Type</h2>

            <p className="text-gray-700 mb-4">
              The single biggest factor in the price of the procedure itself is <strong>which tooth</strong>
              needs treatment. Front teeth have a single canal and are easy to reach, so they are cheapest.
              Molars have three or four canals at the back of the mouth, take longer, and cost the most.
              The ranges below are <strong>estimates compiled from published 2026 self-pay pricing guides
              and a major dental payer&apos;s cost estimator</strong> — not a live quote for your tooth.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Tooth</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Canals (typical)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Root canal only — no insurance (estimate)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Front (anterior)</td>
                    <td className="border border-gray-300 px-4 py-3">1</td>
                    <td className="border border-gray-300 px-4 py-3">~$620 - $1,700</td>
                    <td className="border border-gray-300 px-4 py-3">Simplest anatomy; lowest cost</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Premolar (bicuspid)</td>
                    <td className="border border-gray-300 px-4 py-3">1 - 2</td>
                    <td className="border border-gray-300 px-4 py-3">~$720 - $1,800</td>
                    <td className="border border-gray-300 px-4 py-3">Moderately complex</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Molar</td>
                    <td className="border border-gray-300 px-4 py-3">3 - 4</td>
                    <td className="border border-gray-300 px-4 py-3">~$850 - $2,100</td>
                    <td className="border border-gray-300 px-4 py-3">Most canals; uppers often priciest</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Retreatment (any tooth)</td>
                    <td className="border border-gray-300 px-4 py-3">varies</td>
                    <td className="border border-gray-300 px-4 py-3">~$200-$250 above initial</td>
                    <td className="border border-gray-300 px-4 py-3">Redoing a failed prior root canal</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>The pattern:</strong> for the same tooth, two offices in the same city can quote
              hundreds of dollars apart, and a specialist (endodontist) often charges more than a general
              dentist for the same molar. That spread is exactly why it pays to get an itemized written
              estimate before treatment rather than accepting the first number.
            </p>

            <h2 id="with-crown" className="text-2xl font-bold text-gray-900 mt-12 mb-6">With vs Without a Crown: The Number That Changes Everything</h2>

            <p className="text-gray-700 mb-4">
              This is where most people underestimate the total. The root-canal fee a dentist quotes
              typically covers the endodontic treatment, appointments, and X-rays — but
              <strong> not the final restoration</strong>. A treated tooth, especially a back tooth, is
              brittle and usually needs a crown to keep it from fracturing. As Delta Dental puts it, at a
              minimum the tooth will need a new filling, and frequently a crown is preferred.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Line item</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical cash estimate</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">When it applies</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Root canal (treatment only)</td>
                    <td className="border border-gray-300 px-4 py-3">~$620 - $2,100</td>
                    <td className="border border-gray-300 px-4 py-3">Always — varies by tooth</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Core build-up / post</td>
                    <td className="border border-gray-300 px-4 py-3">~$150 - $450</td>
                    <td className="border border-gray-300 px-4 py-3">Often, when tooth structure is lost</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Crown</td>
                    <td className="border border-gray-300 px-4 py-3">~$1,000 - $2,500</td>
                    <td className="border border-gray-300 px-4 py-3">Usually, especially on molars</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Realistic all-in total</td>
                    <td className="border border-gray-300 px-4 py-3">~$1,700 - $3,200+</td>
                    <td className="border border-gray-300 px-4 py-3">Root canal + crown per tooth</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Ask one question that can halve your surprise</h4>
              <p className="text-gray-700">
                When you get a quote, ask plainly: <em>&ldquo;Is this the root canal only, or does it
                include the build-up and the crown?&rdquo;</em> The gap between those two answers is often
                $1,000-$2,000 on a single tooth. Knowing which one you are looking at before you sit down
                is the most useful thing in this entire guide.
              </p>
            </div>

            <h2 id="drivers" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Drives the Price</h2>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Tooth position &amp; canal count:</strong> molars cost more than front teeth — more canals, harder access, longer chair time.</li>
              <li><strong>General dentist vs endodontist:</strong> a root-canal specialist often charges more, but may be the right call for a complex or curved-canal tooth.</li>
              <li><strong>Geography:</strong> big-city and coastal practices typically quote higher than rural ones.</li>
              <li><strong>Complications:</strong> infection, a cracked tooth, an extra canal, or retreatment of a failed prior root canal all add cost.</li>
              <li><strong>Restoration choice:</strong> a porcelain or zirconia crown costs more than a basic filling; the material you pick moves the total.</li>
            </ul>

            <h2 id="cash-vs-insurance" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Cash vs Insurance: Which Is Actually Cheaper?</h2>

            <p className="text-gray-700 mb-4">
              Dental insurance commonly covers <strong>roughly 50-80% of a root canal after the
              deductible</strong>, which sounds like an easy win. But two things often blunt that: most
              dental plans cap annual benefits somewhere around $1,000-$1,500, and many impose waiting
              periods before they pay for &ldquo;major&rdquo; work like endodontics. A root canal plus
              crown can blow through an entire year&apos;s cap on one tooth.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Cash or a savings plan can win</strong> if you have no benefits left, a long waiting period, or a high out-of-pocket share.</li>
              <li><strong>Insurance usually wins</strong> if your deductible is met and the major-procedure benefit is available and not yet exhausted.</li>
              <li><strong>Either way, ask for the cash-pay rate.</strong> Many offices have a discount for paying in full that they do not advertise.</li>
            </ul>

            <h2 id="lower-bill" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Lower the Bill</h2>

            <p className="text-gray-700 mb-4">
              These are the real, legitimate levers — most people use one or two, and they stack:
            </p>

            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Get two or three itemized quotes</strong> — including one from a general dentist and one from an endodontist — and compare the all-in number, not just the root-canal line.</li>
              <li><strong>Use HSA/FSA dollars.</strong> Dental treatment is a qualified expense, so you are effectively paying with pre-tax money — a discount equal to your tax rate.</li>
              <li><strong>Join a dental savings plan</strong> (see below) before treatment if the math works.</li>
              <li><strong>Ask about in-office payment plans</strong> or a third-party card like CareCredit to spread the cost — and pay it off before any promo period ends.</li>
              <li><strong>Consider a dental school</strong> if lowest price beats fastest turnaround for you.</li>
            </ol>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>One caution on financing:</strong> CareCredit&apos;s no-interest promotional plans
                (6, 12, 18, or 24 months, on qualifying purchases of $200 or more) are <em>deferred
                interest</em>, not true 0%. If you do not clear the full balance before the promo ends,
                interest is charged back from the purchase date at the card&apos;s standard purchase APR
                — 32.99% as of 2026. It is a useful tool when paid off on time — and an expensive one when
                it is not. Confirm current terms before signing.
              </p>
            </div>

            <h2 id="dental-schools" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Dental Schools &amp; Dental Savings Plans</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Dental-school clinics</h3>
            <p className="text-gray-700 mb-4">
              CODA/ADA-accredited dental schools run patient clinics where supervised students perform
              treatment at an estimated <strong>40-60% below private-practice rates</strong> — often
              roughly <strong>$400-$800 for a molar root canal</strong> versus $1,000-$1,600 at a private
              office. Real examples of schools that operate patient clinics include
              <strong> Tufts University School of Dental Medicine</strong> (Boston),
              <strong> University of Pennsylvania (Penn Dental Medicine)</strong> (Philadelphia), and the
              <strong> University of Michigan School of Dentistry</strong> (Ann Arbor). The trade-off:
              appointments run two to three times longer because students work deliberately under faculty
              review. You can find an accredited program near you through the ADA&apos;s
              CODA &ldquo;Find a Program&rdquo; directory at ada.org, then call for a current fee schedule.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Dental savings (discount) plans</h3>
            <p className="text-gray-700 mb-4">
              A dental savings plan is a membership — not insurance — that unlocks discounted fees at
              participating dentists. DentalPlans.com lists plans starting around <strong>$84 per
              year</strong> with member-reported savings of roughly <strong>10-60% off</strong>. For
              example, the <strong>Careington Care 500</strong> plan (about $185/year individual, sold
              through <strong>DentalPlans.com</strong>)
              lists a sample molar root canal at a <strong>member price of about $481 versus a roughly
              $1,567 regular fee</strong> — about 69% off — with similar discounts on front-tooth
              (~$327 vs ~$1,148) and bicuspid (~$391 vs ~$1,284) root canals. Those are sample fees that
              vary by ZIP code. There are no waiting periods, but you must use a participating dentist —
              verify the savings on your specific tooth and confirm your dentist is in-network before you buy.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Savings plan vs dental school, quickly</h4>
              <p className="text-gray-700">
                A savings plan keeps you at a normal private office on a normal timeline for a moderate
                discount. A dental school gives the deepest discount but on a longer timeline. If you are
                in pain and want it handled this week, a savings plan or an in-office discount is usually
                the better fit; if you can plan ahead and want the lowest possible price, a school clinic
                wins.
              </p>
            </div>

            <h2 id="considerations" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Before You Book</h2>

            <p className="text-gray-700 mb-4">
              A balanced view of what to keep in mind:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>A root canal is a clinical decision, not a price decision.</strong> Whether you need one, and on which tooth, is for a licensed dentist to determine after an exam and X-rays.</li>
              <li><strong>Delaying can cost more.</strong> An untreated infected tooth can progress to an abscess or extraction, which is often more expensive and more disruptive than the root canal.</li>
              <li><strong>Cheapest is not automatically best.</strong> Weigh the dentist&apos;s experience and the restoration plan, not only the headline fee.</li>
              <li><strong>Prices and plan terms change.</strong> Every figure here is an estimate that varies by tooth, office, and region — confirm the current number before you commit.</li>
              <li><strong>No procedure guarantees an outcome.</strong> Root canals have high reported success but can occasionally need retreatment; discuss the specifics with your dentist.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Related cost guides</h3>
            <p className="text-gray-700 mb-4">
              If you are weighing dental costs more broadly — or considering treatment abroad to save on a
              crown or full-arch work — these companion guides go deeper:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Full-arch &amp; implant pricing:</strong> our <Link href="/guides/all-on-4-dental-implants-mexico" className="text-blue-600 hover:underline">All-on-4 dental implants in Mexico guide</Link> and the <Link href="/guides/full-mouth-dental-implants-cost-by-country" className="text-blue-600 hover:underline">full-mouth dental implants cost by country comparison</Link>.</li>
              <li><strong>Dental work abroad:</strong> the <Link href="/guides/mexico-dental-guide" className="text-blue-600 hover:underline">Mexico dental guide</Link> covers crowns and root canals at lower cash prices, with how to vet a clinic.</li>
              <li><strong>Find local options:</strong> browse the <Link href="/dental" className="text-blue-600 hover:underline">cash-pay dental directory</Link> or the full <Link href="/guides" className="text-blue-600 hover:underline">health guides library</Link>.</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Cash-Pay Dental Options</h3>
            <p className="mb-6 text-blue-100">
              See transparent self-pay dental pricing and providers, from local clinics to treatment abroad.
            </p>
            <Link
              href="/dental"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Browse Cash-Pay Dental
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
              This guide is for general informational purposes only and is not medical or dental advice. We
              are not affiliated with Delta Dental, Careington, DentalPlans.com, CareCredit, or any dental
              school named here. Pricing is based on publicly available data and third-party self-pay
              pricing guides and is presented as estimates that vary by tooth, dentist, location, and
              current promotions — always verify the current price and plan terms directly with the
              provider before purchasing or beginning treatment. Whether you need a root canal, and on
              which tooth, is a clinical decision for a licensed dentist after an exam. Concerning dental
              pain or infection should be evaluated by a licensed dental professional.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• NewMouth — Root Canal Cost With &amp; Without Insurance (by-tooth ranges; savings options) — newmouth.com/blog/root-canal-cost</li>
              <li>• Authority Dental — Root Canal Cost With &amp; Without Insurance, 2026 (by-tooth averages, retreatment, crown) — authoritydental.org/root-canal-cost</li>
              <li>• Delta Dental — Root canal treatment cost (out-of-network ranges; restoration/crown note) — deltadental.com</li>
              <li>• DentalPlans.com — Careington Care 500 plan (membership cost, sample root-canal member-vs-regular fees) — dentalplans.com/dentalplans/careingtoncare500series</li>
              <li>• NewMouth — Dental Schools for Low-Cost Dental Work (CODA-accredited school clinics, % savings) — newmouth.com/resources/dental-schools</li>
              <li>• CareCredit — How Promotional Financing Works ($200 minimum, 6/12/18/24-mo deferred-interest structure, standard purchase APR) — carecredit.com</li>
              <li>• American Dental Association — CODA &ldquo;Find a Program&rdquo; directory — ada.org</li>
            </ul>
          </div>
        </article>

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Cash-Pay Dental Cost Cheat Sheet"
            description="How to price a root canal and crown across offices, savings plans, and schools — and which route wins for you."
            source="guide_root_canal_cost_without_insurance"
          />
        </div>
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
