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

const PAGE_URL = 'https://vitalityscout.com/guides/betterhelp-vs-talkspace';
const AS_OF = 'September 4, 2026';

export const metadata: Metadata = {
  title: { absolute: 'BetterHelp vs Talkspace Cost (2026): $70/Wk vs $69/Wk' },
  alternates: { canonical: PAGE_URL },
  description:
    'BetterHelp vs Talkspace vs Brightside (2026): therapy vs psychiatry, insurance, and self-pay from $69/week. Confirm current prices before you enroll.',
};

const FAQ_ITEMS = [
  {
    question: 'Is BetterHelp or Talkspace cheaper in 2026?',
    answer:
      `They land in the same self-pay band. As of ${AS_OF}, BetterHelp's site lists about $70-$100 per week. Talkspace's pricing page lists messaging-only at $69/week and video + messaging at $99/week. The cheaper plan depends on whether you want live video and whether insurance applies. Verify the live quote on each site before you enroll.`,
  },
  {
    question: 'Does BetterHelp offer psychiatry or only talk therapy?',
    answer:
      'BetterHelp is a talk-therapy platform. Licensed therapists generally cannot prescribe medication. BetterHelp has mentioned psychiatry as a separate path (including via UpLift). Talkspace and Brightside offer psychiatry on the same brand. If you need medication management, do not assume a therapy subscription includes a prescriber — confirm on the provider site.',
  },
  {
    question: 'Do BetterHelp and Talkspace take insurance?',
    answer:
      `As of ${AS_OF}, BetterHelp says many therapists accept major carriers, with an average copay of about $23 per session for eligible members. Talkspace says it is widely in-network and that most insured members have a $0 copay. Coverage, deductibles, and provider availability vary by plan and state. Check eligibility in each signup flow.`,
  },
  {
    question: 'How does Brightside compare on price?',
    answer:
      `Brightside's FAQ as of ${AS_OF} lists self-pay psychiatry at $95/month, therapy at $299/month, and a combined plan at $349/month. Extra 55-minute therapy sessions are listed at $59. That is monthly pricing, not weekly. Psychiatry includes medication management; therapy does not by itself include prescriptions.`,
  },
  {
    question: 'Can I use HSA or FSA for online therapy?',
    answer:
      'Generally yes. Therapy and psychiatry are typically HSA/FSA-eligible medical expenses. BetterHelp and Brightside both state they accept HSA/FSA cards. Confirm eligibility with your plan administrator before assuming a membership qualifies.',
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

export default function BetterHelpVsTalkspaceGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'BetterHelp vs Talkspace vs Brightside: 2026 Cost Comparison',
    description:
      'A 2026 comparison of BetterHelp, Talkspace, and Brightside covering therapy vs psychiatry, insurance, format, and published self-pay prices.',
    url: PAGE_URL,
    mainEntity: { '@type': 'FAQPage', '@id': `${PAGE_URL}#faq` },
    inLanguage: 'en-US',
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient' },
    about: { '@type': 'MedicalTherapy', name: 'Online psychotherapy and psychiatry' },
    author: { '@type': 'Organization', name: 'VitalityScout', url: 'https://vitalityscout.com' },
    reviewedBy: { '@type': 'Organization', name: 'VitalityScout Editorial Team' },
    lastReviewed: '2026-09-04',
    dateModified: '2026-09-04',
    citation: [
      { '@type': 'CreativeWork', name: 'BetterHelp homepage — self-pay weekly range and insurance copay', url: 'https://www.betterhelp.com/' },
      { '@type': 'CreativeWork', name: 'Talkspace — How Talkspace pricing works', url: 'https://www.talkspace.com/pricing' },
      { '@type': 'CreativeWork', name: 'Brightside Health FAQ — self-pay plans', url: 'https://www.brightside.com/faq/' },
    ],
  };

  const faqSchema = { ...buildFAQSchema(FAQ_ITEMS), '@id': `${PAGE_URL}#faq`, url: PAGE_URL };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vitalityscout.com' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://vitalityscout.com/guides' },
      { '@type': 'ListItem', position: 3, name: 'BetterHelp vs Talkspace', item: PAGE_URL },
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
              <span className="text-gray-900">BetterHelp vs Talkspace</span>
            </nav>
          </div>
        </div>

        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <Link href="/telehealth" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
              &larr; Telehealth Hub
            </Link>
            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Comparison
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              BetterHelp vs Talkspace vs Brightside (2026): Therapy, Psychiatry &amp; Price
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Who offers therapy only, who adds psychiatry, who takes insurance, and what each
              published as of {AS_OF}.
            </p>
            <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-5">
              <p className="aeo-answer text-base text-gray-800">
                As of {AS_OF}, <strong>BetterHelp</strong> lists self-pay at{' '}
                <strong>$70-$100/week</strong> and is therapy-first.{' '}
                <strong>Talkspace</strong> lists <strong>$69/week</strong> messaging and{' '}
                <strong>$99/week</strong> video + messaging, plus psychiatry.{' '}
                <strong>Brightside</strong> lists <strong>$95 / $299 / $349 per month</strong> for
                psychiatry, therapy, or both. Insurance can beat any of those numbers. These are
                published prices, not a guaranteed quote. This is information, not medical advice.
              </p>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Prices read from BetterHelp, Talkspace, and Brightside on {AS_OF} • 9 min read
            </p>
          </div>
        </section>

        <div className="bg-red-50 border-b-2 border-red-200">
          <div className="mx-auto max-w-4xl px-4 py-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🆘</div>
              <div>
                <h3 className="font-bold text-red-900 text-lg mb-2">If You Are in Crisis, Get Help Now</h3>
                <p className="text-red-800 text-sm">
                  If you are in crisis or thinking about harming yourself, call or text <strong>988</strong> (the Suicide &amp; Crisis Lifeline) in the US, available 24/7, or go to your nearest emergency room. The online therapy services discussed on this page are <strong>not for emergencies</strong> and are not a substitute for crisis or emergency care.
                </p>
              </div>
            </div>
          </div>
        </div>

        <article className="mx-auto max-w-4xl px-4 py-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">At a Glance ({AS_OF})</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-1">BetterHelp</div>
                <div className="text-gray-900 font-semibold">Therapy first</div>
                <div className="text-gray-600 mb-3">$70-$100/week self-pay</div>
                <a
                  href="https://www.betterhelp.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Visit BetterHelp →
                </a>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-1">Talkspace</div>
                <div className="text-gray-900 font-semibold">Therapy + psychiatry</div>
                <div className="text-gray-600 mb-3">$69-$109/week self-pay</div>
                <a
                  href="https://www.talkspace.com/pricing"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Visit Talkspace →
                </a>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-teal-600 mb-1">Brightside</div>
                <div className="text-gray-900 font-semibold">Depression &amp; anxiety</div>
                <div className="text-gray-600 mb-3">$95-$349/month self-pay</div>
                <a
                  href="https://www.brightside.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                >
                  Visit Brightside →
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What This Guide Covers</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#how-it-works" className="text-blue-600 hover:underline">1. How online therapy works</a></li>
              <li><a href="#betterhelp" className="text-blue-600 hover:underline">2. BetterHelp: therapy at scale</a></li>
              <li><a href="#talkspace" className="text-blue-600 hover:underline">3. Talkspace: therapy and psychiatry</a></li>
              <li><a href="#brightside" className="text-blue-600 hover:underline">4. Brightside: depression and anxiety</a></li>
              <li><a href="#comparison" className="text-blue-600 hover:underline">5. Side-by-side comparison</a></li>
              <li><a href="#which" className="text-blue-600 hover:underline">6. Which should you choose?</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              These services are not interchangeable. Some offer talk therapy only. Others add
              psychiatrists who can prescribe. They differ on insurance, format, and price. Here is
              the 2026 comparison using each brand&apos;s own published numbers.
            </p>

            <h2 id="how-it-works" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How Online Therapy Works</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Messaging therapy:</strong> Asynchronous text, audio, or video messages through the week.</li>
              <li><strong>Live sessions:</strong> Scheduled video, phone, or chat — similar to a traditional appointment, often shorter than 50 minutes.</li>
              <li><strong>Psychiatry:</strong> A prescriber evaluates you and, where appropriate, manages medication. This is not the same as talk therapy.</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Therapy vs psychiatry:</strong> A therapist provides talk therapy and generally
                cannot prescribe. A psychiatrist or psychiatric nurse practitioner can prescribe.
                Some people use one, some use both. A therapy subscription does not automatically
                include medication.
              </p>
            </div>

            <h2 id="betterhelp" className="text-2xl font-bold text-gray-900 mt-12 mb-6">BetterHelp: Therapy at Scale</h2>
            <p className="text-gray-700 mb-4">
              BetterHelp is the largest online therapy network. It focuses on <strong>talk therapy</strong>.
              After intake you are matched with a licensed therapist and can switch if the fit is wrong.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Format:</strong> Messaging plus weekly live sessions (video, phone, or live chat).</li>
              <li><strong>Self-pay:</strong> BetterHelp lists <strong>$70-$100 per week</strong> as of {AS_OF}, billed weekly or monthly.</li>
              <li><strong>Insurance:</strong> Many therapists now accept major carriers; BetterHelp cites an average copay of about <strong>$23 per session</strong> for eligible members.</li>
              <li><strong>Financial aid:</strong> Need-based discounts may be available.</li>
            </ul>
            <a
              href="https://www.betterhelp.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mb-6 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Visit BetterHelp →
            </a>

            <h2 id="talkspace" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Talkspace: Therapy and Psychiatry</h2>
            <p className="text-gray-700 mb-4">
              Talkspace offers <strong>both therapy and psychiatry</strong>, so you can access talk
              therapy, medication management, or both. It is widely covered by insurance and employers.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Self-pay (official pricing page, {AS_OF}):</strong> messaging $69/week; video + messaging $99/week; video + messaging + workshops $109/week.</li>
              <li><strong>Insurance:</strong> Talkspace says most insured members have a $0 copay — your plan decides.</li>
              <li><strong>Psychiatry:</strong> Available separately from the therapy subscription. Confirm the current evaluation and follow-up prices on Talkspace.</li>
            </ul>
            <a
              href="https://www.talkspace.com/pricing"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mb-6 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Visit Talkspace →
            </a>

            <h2 id="brightside" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Brightside: Depression and Anxiety</h2>
            <p className="text-gray-700 mb-4">
              Brightside specializes in depression and anxiety and combines therapy with psychiatry.
              Its FAQ as of {AS_OF} lists <strong>$95/month psychiatry</strong>,{' '}
              <strong>$299/month therapy</strong>, and <strong>$349/month combined</strong>.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Focus:</strong> Structured, measurement-based care for depression and anxiety.</li>
              <li><strong>Format:</strong> Live video plus messaging.</li>
              <li><strong>Insurance:</strong> Accepted in many states; availability depends on your plan.</li>
            </ul>
            <a
              href="https://www.brightside.com/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="mb-6 inline-block rounded bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Visit Brightside →
            </a>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-3">A Note on Prescribing Online</h4>
              <p className="text-gray-700 text-sm">
                Prescribing of <strong>controlled substances</strong> via telehealth is restricted and
                varies by platform and state. Many online psychiatry services limit or do not prescribe
                controlled medications. If a specific medication matters, confirm directly with the
                platform whether they can prescribe it where you live.
              </p>
            </div>

            <h2 id="comparison" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Side-by-Side Comparison</h2>
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Platform</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Medication?</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Insurance?</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Published self-pay ({AS_OF})</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">BetterHelp</td>
                    <td className="border border-gray-300 px-4 py-3">Therapy first (psychiatry is a separate path)</td>
                    <td className="border border-gray-300 px-4 py-3">Yes, for eligible members (~$23 avg copay)</td>
                    <td className="border border-gray-300 px-4 py-3">$70-$100/week</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Talkspace</td>
                    <td className="border border-gray-300 px-4 py-3">Yes (psychiatry available)</td>
                    <td className="border border-gray-300 px-4 py-3">Yes, widely (often $0 copay cited)</td>
                    <td className="border border-gray-300 px-4 py-3">$69 / $99 / $109 per week</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Brightside</td>
                    <td className="border border-gray-300 px-4 py-3">Yes (depression/anxiety focus)</td>
                    <td className="border border-gray-300 px-4 py-3">Yes, in many states</td>
                    <td className="border border-gray-300 px-4 py-3">$95 / $299 / $349 per month</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 mb-4">
              Prices above are published figures that change — always confirm current pricing and
              your own insurance coverage before signing up. For a deeper cost walkthrough, see{' '}
              <Link href="/guides/online-therapy-cost" className="text-blue-600 hover:underline">
                online therapy cost without insurance
              </Link>
              .
            </p>

            <h2 id="which" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Which Should You Choose?</h2>
            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">You want talk therapy, not medication</h4>
                <p className="text-gray-700">
                  <strong>Consider BetterHelp.</strong> Large network, easy switching, self-pay from
                  $70/week. Check whether your insurance now applies before you pay cash.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">You want therapy and medication, or have insurance</h4>
                <p className="text-gray-700">
                  <strong>Consider Talkspace.</strong> Therapy plus psychiatry on one platform, and
                  wide insurance/employer coverage that can drop the cost to a copay.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">You are dealing specifically with depression or anxiety</h4>
                <p className="text-gray-700">
                  <strong>Consider Brightside.</strong> Structured program that pairs therapy with
                  psychiatry, with a published $349 combined self-pay plan.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Related</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>
                <Link href="/guides/online-therapy-cost" className="text-blue-600 hover:underline">
                  Online therapy cost without insurance
                </Link>{' '}
                — per-session vs subscription, plus Open Path
              </li>
              <li>
                <Link href="/telehealth" className="text-blue-600 hover:underline">
                  Telehealth directory
                </Link>{' '}
                — how online appointments and prescriptions work
              </li>
              <li>
                <Link href="/guides/cash-pay-healthcare-map" className="text-blue-600 hover:underline">
                  Cash-pay healthcare map
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Ready to Compare Platforms?</h3>
            <p className="mb-6 text-blue-100">
              Open each brand&apos;s own pricing page, then browse cash-pay telehealth options side by side.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/telehealth"
                className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Compare telehealth platforms →
              </Link>
              <a
                href="https://www.betterhelp.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Visit BetterHelp →
              </a>
              <a
                href="https://www.talkspace.com/pricing"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-block rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Visit Talkspace →
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

          <div className="mt-12 rounded-lg bg-gray-100 p-6">
            <h3 className="font-semibold text-gray-800 mb-2">Medical &amp; Pricing Disclaimer</h3>
            <p className="text-sm text-gray-600">
              This guide is for general informational purposes only and is not medical advice. We are
              not affiliated with BetterHelp, Talkspace, or Brightside Health. Prices were read from
              each provider&apos;s public pages on {AS_OF} and are not a guarantee of what you will
              pay. Online therapy is not a substitute for emergency care; if you are in crisis, call
              or text 988 or 911. Talk to a licensed clinician about your care.
            </p>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources &amp; References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <a href="https://www.betterhelp.com/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">BetterHelp — $70-$100/week self-pay; ~$23 average insurance copay</a></li>
              <li>• <a href="https://www.talkspace.com/pricing" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Talkspace pricing — $69 / $99 / $109 per week</a></li>
              <li>• <a href="https://www.brightside.com/faq/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Brightside FAQ — $95 / $299 / $349 per month</a></li>
            </ul>
          </div>
        </article>

        <RelatedGuides items={getRelatedGuides('/guides/betterhelp-vs-talkspace')} />

        <div className="mx-auto max-w-4xl px-4 py-8">
          <EmailCaptureCard
            title="Get Our Online-Therapy Comparison Cheat Sheet"
            description="Therapy vs psychiatry, weekly vs monthly pricing, and how to check insurance before you subscribe."
            source="guide_betterhelp_vs_talkspace"
          />
        </div>
        <MedicalDisclaimer />
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
