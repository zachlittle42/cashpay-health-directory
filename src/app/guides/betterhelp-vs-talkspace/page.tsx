import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'BetterHelp vs Talkspace vs Brightside (2026)' },
  alternates: { canonical: 'https://vitalityscout.com/guides/betterhelp-vs-talkspace' },
  description: 'Compare BetterHelp, Talkspace, and Brightside on therapy vs psychiatry, insurance coverage, messaging vs video format, and estimated monthly pricing.',
  keywords: ['BetterHelp vs Talkspace', 'online therapy', 'Brightside', 'online psychiatry', 'teletherapy', 'mental health platforms', 'online therapy cost', 'therapy vs psychiatry'],
};

export default function BetterHelpVsTalkspaceGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'BetterHelp vs Talkspace vs Brightside: Online Therapy Compared',
    description: 'A comparison of three leading online mental health platforms covering therapy, psychiatry, insurance, format, and pricing.',
    author: {
      '@type': 'Organization',
      name: 'VitalityScout'
    },
    publisher: {
      '@type': 'Organization',
      name: 'VitalityScout',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vitalityscout.com/logo.png'
      }
    },
    datePublished: '2026-06-13',
    dateModified: '2026-06-13',
    mainEntityOfPage: 'https://vitalityscout.com/guides/betterhelp-vs-talkspace',
    articleSection: 'Mental Health Guides',
    keywords: ['online therapy', 'BetterHelp', 'Talkspace', 'Brightside', 'online psychiatry']
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="mx-auto max-w-4xl px-4 py-3">
            <nav className="text-sm text-gray-600">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span className="mx-2">→</span>
              <Link href="/guides" className="hover:text-blue-600">Guides</Link>
              <span className="mx-2">→</span>
              <span className="text-gray-900">BetterHelp vs Talkspace</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Mental Health
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              BetterHelp vs Talkspace vs Brightside: Online Therapy Compared
            </h1>
            <p className="text-xl text-gray-600">
              A plain-English comparison of three popular platforms&mdash;who offers therapy only, who adds psychiatry and medication, which take insurance, and what you can expect to pay.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Last updated: June 2026 • 8 min read
            </p>
          </div>
        </section>

        {/* Prominent Safety Notice */}
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

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Facts Box */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">At a Glance</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-1">BetterHelp</div>
                <div className="text-gray-900 font-semibold">Therapy only</div>
                <div className="text-gray-600">Largest network, no medication</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-1">Talkspace</div>
                <div className="text-gray-900 font-semibold">Therapy + psychiatry</div>
                <div className="text-gray-600">Broad insurance coverage</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-teal-600 mb-1">Brightside</div>
                <div className="text-gray-900 font-semibold">Depression &amp; anxiety focus</div>
                <div className="text-gray-600">Structured therapy + medication</div>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What This Guide Covers</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#how-it-works" className="text-blue-600 hover:underline">1. How Online Therapy Works</a></li>
              <li><a href="#betterhelp" className="text-blue-600 hover:underline">2. BetterHelp: Therapy at Scale</a></li>
              <li><a href="#talkspace" className="text-blue-600 hover:underline">3. Talkspace: Therapy and Psychiatry</a></li>
              <li><a href="#brightside" className="text-blue-600 hover:underline">4. Brightside: Depression and Anxiety</a></li>
              <li><a href="#comparison" className="text-blue-600 hover:underline">5. Side-by-Side Comparison</a></li>
              <li><a href="#which" className="text-blue-600 hover:underline">6. Which Should You Choose?</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Online therapy platforms have made it far easier to talk to a licensed professional from home. But these services are not interchangeable. Some offer talk therapy only, others add psychiatrists who can prescribe medication, and they differ widely on insurance, format, and price. Here&apos;s how three of the best-known options compare.
            </p>

            <h2 id="how-it-works" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How Online Therapy Works</h2>

            <p className="text-gray-700 mb-4">
              Most platforms follow a similar flow: you complete an intake questionnaire about your goals and symptoms, get matched with (or choose) a licensed provider, and then connect through a secure app or website. From there, the experience varies by platform and plan:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Messaging therapy:</strong> Asynchronous text, audio, or video messages you exchange with your therapist throughout the week.</li>
              <li><strong>Live sessions:</strong> Scheduled real-time video, phone, or chat sessions, similar to a traditional appointment.</li>
              <li><strong>Psychiatry:</strong> On platforms that offer it, a prescriber (psychiatrist or psychiatric nurse practitioner) can evaluate you and, where appropriate, prescribe medication.</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Therapy vs psychiatry:</strong> A <em>therapist</em> (counselor, psychologist, or licensed clinical social worker) provides talk therapy but generally cannot prescribe medication. A <em>psychiatrist</em> or psychiatric prescriber can prescribe and manage medication. Some people use one, some use both.
              </p>
            </div>

            <h2 id="betterhelp" className="text-2xl font-bold text-gray-900 mt-12 mb-6">BetterHelp: Therapy at Scale</h2>

            <p className="text-gray-700 mb-4">
              BetterHelp is widely described as the largest online therapy network, with a very large pool of licensed therapists. It focuses on <strong>talk therapy only</strong>&mdash;it does not offer psychiatry or prescribe medication. After intake you&apos;re matched with a therapist and can switch if the fit isn&apos;t right.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Format:</strong> A mix of messaging plus weekly live sessions (video, phone, or live chat).</li>
              <li><strong>Pricing:</strong> Typically estimated around <strong>$65&ndash;$100 per week</strong>, billed every four weeks, so the monthly charge can feel large up front.</li>
              <li><strong>Insurance:</strong> Generally <strong>not billed through insurance</strong>; it operates as a self-pay subscription.</li>
              <li><strong>Financial aid:</strong> Discounts or financial aid may be available based on circumstances.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              BetterHelp tends to suit people who want convenient, ongoing counseling and don&apos;t need medication management.
            </p>

            <h2 id="talkspace" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Talkspace: Therapy and Psychiatry</h2>

            <p className="text-gray-700 mb-4">
              Talkspace offers <strong>both therapy and psychiatry</strong>, so you can access talk therapy, medication management, or both through one service. It is also notable for being <strong>widely covered by insurance plans and employers</strong>, which can substantially reduce out-of-pocket cost for eligible members.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Format:</strong> Messaging therapy plus live video sessions; separate psychiatry visits for evaluation and medication management.</li>
              <li><strong>Insurance:</strong> Accepted by many major insurers and offered through many employer and health plans&mdash;coverage and copays vary by plan.</li>
              <li><strong>Pricing:</strong> Self-pay rates vary by plan and whether psychiatry is included; insurance copays differ. Treat any figure as an estimate and verify your specific coverage.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Talkspace is a strong fit if you want one platform that can combine therapy and medication, or if you have insurance or an employer benefit that covers it.
            </p>

            <h2 id="brightside" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Brightside: Depression and Anxiety</h2>

            <p className="text-gray-700 mb-4">
              Brightside specializes in <strong>depression and anxiety</strong> and offers a more structured program combining therapy with psychiatry and medication management. It accepts insurance in many states, and self-pay pricing is commonly estimated in the range of <strong>$95&ndash;$350 per month</strong> depending on whether you choose therapy, medication, or a combined plan.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Focus:</strong> Structured, measurement-based care oriented toward depression and anxiety.</li>
              <li><strong>Format:</strong> Live video therapy and psychiatric care, with messaging support between visits.</li>
              <li><strong>Insurance:</strong> Accepted in many states; availability depends on your location and plan.</li>
              <li><strong>Pricing:</strong> Roughly $95&ndash;$350 per month self-pay, by plan type&mdash;these are estimates that change over time.</li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-3">A Note on Prescribing Online</h4>
              <p className="text-gray-700 text-sm">
                Prescribing of <strong>controlled substances</strong> via telehealth (for example, certain ADHD or anti-anxiety medications) is restricted and varies by platform and by state, and rules continue to evolve. Many online psychiatry services limit or do not prescribe controlled medications. If a specific medication matters to you, confirm directly with the platform whether they can prescribe it where you live.
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
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Price (estimated)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">BetterHelp</td>
                    <td className="border border-gray-300 px-4 py-3">No (therapy only)</td>
                    <td className="border border-gray-300 px-4 py-3">Generally no</td>
                    <td className="border border-gray-300 px-4 py-3">~$65&ndash;$100/week, billed every 4 weeks</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Talkspace</td>
                    <td className="border border-gray-300 px-4 py-3">Yes (psychiatry available)</td>
                    <td className="border border-gray-300 px-4 py-3">Yes, widely (insurance &amp; employers)</td>
                    <td className="border border-gray-300 px-4 py-3">Varies by plan and coverage</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Brightside</td>
                    <td className="border border-gray-300 px-4 py-3">Yes (depression/anxiety focus)</td>
                    <td className="border border-gray-300 px-4 py-3">Yes, in many states</td>
                    <td className="border border-gray-300 px-4 py-3">~$95&ndash;$350/month self-pay</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              Prices above are estimates that change over time and by plan&mdash;always confirm current pricing and your own insurance coverage directly with each provider before signing up.
            </p>

            <h2 id="which" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Which Should You Choose?</h2>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">You want talk therapy only, no medication</h4>
                <p className="text-gray-700">
                  <strong>Consider BetterHelp.</strong> Its large network makes it easier to find a therapist and switch if the match isn&apos;t right. It&apos;s self-pay, so factor the every-four-weeks billing into your budget.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">You want therapy and medication, or have insurance</h4>
                <p className="text-gray-700">
                  <strong>Consider Talkspace.</strong> It combines therapy and psychiatry on one platform and is widely covered by insurance and employers, which can lower your cost considerably if you&apos;re eligible.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">You&apos;re dealing specifically with depression or anxiety</h4>
                <p className="text-gray-700">
                  <strong>Consider Brightside.</strong> Its structured, condition-focused program pairs therapy with psychiatry and medication management, and it accepts insurance in many states.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">You&apos;re unsure where to start</h4>
                <p className="text-gray-700">
                  Start by checking whether your insurance or employer already covers a platform, then decide whether you need therapy only or therapy plus medication. That single question narrows the field quickly.
                </p>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              Whatever you choose, online therapy is not appropriate for psychiatric emergencies. If your situation is urgent, use the crisis resources at the top of this page.
            </p>
          </div>

          {/* Money-page CTA */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Ready to Compare Platforms?</h3>
            <p className="mb-6 text-blue-100">
              See a side-by-side breakdown of online therapy and psychiatry services, including pricing, coverage, and what each is best for.
            </p>
            <Link
              href="/mental-health"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Compare online therapy &amp; psychiatry platforms →
            </Link>
          </div>

          {/* Related */}
          <div className="mt-8 rounded-lg bg-gray-50 border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-800 mb-2">Related</h3>
            <p className="text-gray-700 text-sm">
              New to virtual care? See our overview of{' '}
              <Link href="/telehealth" className="text-blue-600 hover:underline">telehealth options</Link>{' '}
              to understand how online appointments, prescriptions, and follow-ups work.
            </p>
          </div>

          <MedicalDisclaimer />
        </article>
      </main>
      <Footer />
    </>
  );
}
