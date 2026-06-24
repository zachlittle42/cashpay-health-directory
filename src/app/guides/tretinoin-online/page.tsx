import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tretinoin Online: How to Get It in 2026',
  description: 'How to get tretinoin online in 2026: how telederm services prescribe it, typical costs ($20-$50/mo), what to expect, safety, and how to choose a provider.',
  keywords: ['tretinoin online', 'tretinoin prescription', 'retinoid online', 'online dermatology', 'Curology', 'Apostrophe', 'Musely', 'tretinoin cost', 'prescription retinoid'],
};

export default function TretinoinOnlineGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Tretinoin Online: How to Get It in 2026',
    description: 'A practical guide to getting tretinoin online: how telederm services prescribe it, typical costs, what to expect, safety, and how to choose a provider.',
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
    mainEntityOfPage: 'https://vitalityscout.com/guides/tretinoin-online',
    articleSection: 'Skincare Guides',
    keywords: ['tretinoin', 'retinoid', 'online dermatology', 'skincare', 'acne', 'anti-aging']
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
              <span className="text-gray-900">Tretinoin Online</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-rose-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4">
              <span className="rounded-full bg-rose-100 px-3 py-1 text-sm font-medium text-rose-700">
                Skincare
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Tretinoin Online: How to Get It in 2026
            </h1>
            <p className="text-xl text-gray-600">
              Tretinoin is a prescription retinoid for acne and signs of aging. Here&apos;s how online dermatology services prescribe it, what it costs, what to expect during the adjustment period, and how to choose a provider.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Last updated: June 2026 • 9 min read
            </p>
          </div>
        </section>

        {/* Important Context */}
        <div className="bg-yellow-50 border-b-2 border-yellow-200">
          <div className="mx-auto max-w-4xl px-4 py-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">⚠️</div>
              <div>
                <h3 className="font-bold text-yellow-900 text-lg mb-2">Prescription Required</h3>
                <p className="text-yellow-800 text-sm">
                  Tretinoin is a prescription-only medication in the US. You cannot legally buy true tretinoin over the counter &mdash; a licensed clinician must review your skin and history first. Online dermatology services exist specifically to make that review fast and convenient.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Facts Box */}
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Tretinoin Online: Quick Facts</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-rose-600 mb-1">Typical Cost</div>
                <div className="text-gray-900 font-semibold">~$20 - $50/mo</div>
                <div className="text-gray-600">Custom subscription formulas</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-pink-600 mb-1">How It Works</div>
                <div className="text-gray-900 font-semibold">Photo + intake review</div>
                <div className="text-gray-600">Clinician prescribes online</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-amber-600 mb-1">Time to Results</div>
                <div className="text-gray-900 font-semibold">Weeks to months</div>
                <div className="text-gray-600">Patience is required</div>
              </div>
            </div>
          </div>

          {/* CTA: money page */}
          <div className="rounded-xl border-2 border-rose-300 bg-rose-50 p-6 mb-10 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to compare your options?</h3>
            <p className="text-gray-700 mb-4">
              We compare the leading online prescription skincare services side by side &mdash; pricing, formulas, and what each is best for.
            </p>
            <Link
              href="/skincare"
              className="inline-block rounded-lg bg-rose-600 px-6 py-3 font-semibold text-white hover:bg-rose-700 transition-colors"
            >
              Compare online prescription skincare services →
            </Link>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What This Guide Covers</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#what-is-tretinoin" className="text-blue-600 hover:underline">1. What Is Tretinoin?</a></li>
              <li><a href="#prescription-only" className="text-blue-600 hover:underline">2. Why It&apos;s Prescription-Only</a></li>
              <li><a href="#how-online-works" className="text-blue-600 hover:underline">3. How Online Services Prescribe It</a></li>
              <li><a href="#costs" className="text-blue-600 hover:underline">4. What It Costs</a></li>
              <li><a href="#what-to-expect" className="text-blue-600 hover:underline">5. What to Expect</a></li>
              <li><a href="#safety" className="text-blue-600 hover:underline">6. Safety Basics</a></li>
              <li><a href="#choose" className="text-blue-600 hover:underline">7. How to Choose a Service</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Tretinoin is one of the most talked-about ingredients in skincare &mdash; and for good reason. Dermatologists widely consider it a well-studied, effective topical retinoid. But because it&apos;s prescription-only, getting it used to mean booking a dermatologist appointment. Online dermatology services have changed that. Here&apos;s how to get tretinoin online safely in 2026.
            </p>

            <h2 id="what-is-tretinoin" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Is Tretinoin?</h2>

            <p className="text-gray-700 mb-4">
              Tretinoin is a topical retinoid &mdash; a vitamin A derivative applied to the skin. It&apos;s prescribed for two main reasons:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Acne:</strong> It helps keep pores clear by speeding up skin cell turnover, which can reduce both clogged pores and inflammatory breakouts over time.</li>
              <li><strong>Signs of aging:</strong> It is commonly used to address fine lines, uneven tone, and texture. Dermatologists widely regard topical retinoids as among the better-studied options for photoaged skin.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Tretinoin is the prescription-strength member of the retinoid family. It&apos;s sometimes confused with over-the-counter <strong>retinol</strong>, which is a gentler, non-prescription retinoid that the skin converts in steps before it becomes active. Tretinoin is already in its active form, which is part of why it tends to work faster &mdash; and why it can be more irritating at first.
            </p>

            <h2 id="prescription-only" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why It&apos;s Prescription-Only</h2>

            <p className="text-gray-700 mb-4">
              In the United States, tretinoin requires a prescription. Over-the-counter retinoids are available, but they are different products:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Product</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Availability</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Tretinoin</td>
                    <td className="border border-gray-300 px-4 py-3">Prescription only</td>
                    <td className="border border-gray-300 px-4 py-3">Active retinoid; requires clinician review</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Adapalene</td>
                    <td className="border border-gray-300 px-4 py-3">Over the counter</td>
                    <td className="border border-gray-300 px-4 py-3">A retinoid available OTC for acne (e.g. Differin)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Retinol</td>
                    <td className="border border-gray-300 px-4 py-3">Over the counter</td>
                    <td className="border border-gray-300 px-4 py-3">Gentler; skin converts it before it acts</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              The prescription requirement exists because tretinoin is a potent active ingredient with real contraindications &mdash; most notably pregnancy &mdash; and because it benefits from clinician guidance on strength and use. That&apos;s the gap online dermatology services fill: they connect you with a licensed clinician who can review your case and prescribe appropriately.
            </p>

            <h2 id="how-online-works" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How Online Services Prescribe It</h2>

            <p className="text-gray-700 mb-4">
              Telederm and online skincare services have made getting a tretinoin prescription straightforward. The general flow is similar across providers:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Intake questionnaire:</strong> You answer questions about your skin goals, history, allergies, current products, and whether you&apos;re pregnant or breastfeeding.</li>
              <li><strong>Photo upload:</strong> You submit photos of your skin so a clinician can assess it remotely.</li>
              <li><strong>Clinician review:</strong> A licensed provider reviews your intake and photos, then decides whether tretinoin (often in a custom formula) is appropriate.</li>
              <li><strong>Custom formula and shipping:</strong> If prescribed, your formula is compounded or filled and shipped to you, usually on a subscription.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Several well-known services operate in this space, including <strong>Curology</strong>, <strong>Apostrophe</strong>, <strong>Musely</strong>, and <strong>Hers</strong>. Many of them pair tretinoin with other ingredients &mdash; such as niacinamide, azelaic acid, or clindamycin &mdash; in a single custom &quot;cream&quot; tailored to your goals, rather than dispensing tretinoin alone.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Good to know:</strong> Because a clinician has to review your case, a prescription is never guaranteed. If tretinoin isn&apos;t a good fit for you, a provider may recommend an alternative or decline to prescribe it &mdash; which is the system working as intended.
              </p>
            </div>

            <h2 id="costs" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What It Costs</h2>

            <p className="text-gray-700 mb-4">
              Online prescription skincare is usually sold as a subscription. Custom formulas that include tretinoin commonly land in the <strong>~$20 to $50 per month</strong> range, depending on the service, the formula, and your billing cycle. Many services offer a discounted or low-cost first month to start.
            </p>

            <p className="text-gray-700 mb-4">
              A few things that affect price:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Billing frequency:</strong> Quarterly or longer plans often have a lower effective monthly cost than month-to-month.</li>
              <li><strong>Formula complexity:</strong> Multi-ingredient custom creams may price differently than simpler ones.</li>
              <li><strong>Consultation fees:</strong> Some services bundle the clinician review into the subscription; others charge separately.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              All prices here are estimates and change frequently &mdash; check current pricing directly with each provider before subscribing.
            </p>

            <h2 id="what-to-expect" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What to Expect</h2>

            <p className="text-gray-700 mb-4">
              Tretinoin rewards patience. The biggest reason people quit early is that they don&apos;t know what the first few weeks feel like. Here&apos;s the typical adjustment &mdash; often called <strong>retinization</strong>:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>The purge:</strong> Some people experience an initial uptick in breakouts as skin turnover speeds up. This adjustment period usually settles over several weeks.</li>
              <li><strong>Dryness and flaking:</strong> Peeling, redness, and tightness are common early on, especially if you start too aggressively.</li>
              <li><strong>Sun sensitivity:</strong> Tretinoin can make skin more sensitive to UV light, so daily sunscreen becomes essential.</li>
              <li><strong>Timeline:</strong> Visible results typically take weeks to months. Improvements in tone and texture are gradual, not overnight.</li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-3">The &quot;Start Low, Go Slow&quot; Approach</h4>
              <p className="text-gray-700 text-sm mb-2">
                A widely used strategy is to begin with a lower strength a couple of nights per week, applied to dry skin, and build up frequency as your skin tolerates it. A pea-sized amount is generally enough for the whole face. Your prescribing clinician can tailor the strength and schedule to you.
              </p>
            </div>

            <h2 id="safety" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Safety Basics</h2>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
              <li><strong>Not for pregnancy:</strong> Tretinoin and other retinoids are generally avoided during pregnancy and while trying to conceive or breastfeeding. Tell your clinician if any of these apply to you.</li>
              <li><strong>Use sunscreen daily:</strong> Because tretinoin can increase sun sensitivity, broad-spectrum SPF every morning is part of the routine, not optional.</li>
              <li><strong>Start low and slow:</strong> Easing in reduces irritation. If your skin gets very raw, scale back frequency rather than pushing through.</li>
              <li><strong>Mind your other actives:</strong> Combining tretinoin with strong exfoliants or other irritating actives can increase irritation &mdash; ask your provider what&apos;s safe to layer.</li>
              <li><strong>Flag your meds and conditions:</strong> Share your full history and current medications during intake so the clinician can prescribe safely.</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>If something seems off,</strong> such as severe irritation, swelling, or a reaction, stop and contact your prescriber or a healthcare professional. Online services typically offer messaging with their care teams for exactly this.
              </p>
            </div>

            <h2 id="choose" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Choose a Service</h2>

            <p className="text-gray-700 mb-4">
              The major services are more alike than different, but a few factors can help you pick:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Your primary goal:</strong> Some services lean more toward acne, others toward anti-aging or specific concerns like dark spots. Match the service to what you want to address.</li>
              <li><strong>Access to clinicians:</strong> Look for easy messaging with the care team so you can adjust your formula if you&apos;re too irritated or not seeing progress.</li>
              <li><strong>Pricing and commitment:</strong> Compare effective monthly cost, cancellation terms, and whether the first month is discounted.</li>
              <li><strong>Formula transparency:</strong> Prefer services that clearly tell you what active ingredients are in your custom cream.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Curology, Apostrophe, Musely, and Hers are all common starting points, and Hers (along with Hims for men) bundles skin care alongside other telehealth offerings, which some people find convenient.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Prescription Skincare Services</h3>
            <p className="mb-6 text-rose-100">
              See pricing, formulas, and what each online dermatology service is best for &mdash; side by side.
            </p>
            <Link
              href="/skincare"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-rose-600 hover:bg-rose-50 transition-colors"
            >
              Compare online prescription skincare services →
            </Link>
          </div>

          {/* Related Links */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Link href="/telehealth" className="block rounded-lg border border-gray-200 p-6 hover:border-rose-300 hover:shadow-sm transition-all">
              <h3 className="font-bold text-gray-900 mb-2">Telehealth Services →</h3>
              <p className="text-sm text-gray-600">
                Explore broader virtual care options, including the platforms that also handle skin concerns.
              </p>
            </Link>
            <Link href="/mens-health" className="block rounded-lg border border-gray-200 p-6 hover:border-rose-300 hover:shadow-sm transition-all">
              <h3 className="font-bold text-gray-900 mb-2">Men&apos;s Health →</h3>
              <p className="text-sm text-gray-600">
                Services like Hims handle skin alongside other men&apos;s health needs &mdash; see what&apos;s available.
              </p>
            </Link>
          </div>
        </article>

        <MedicalDisclaimer />
      </main>
      <Footer />
    </>
  );
}
