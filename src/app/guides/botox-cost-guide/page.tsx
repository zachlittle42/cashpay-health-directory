import Link from 'next/link';
import Navigation from '@/components/Navigation';
import SidebarShell from '@/components/SidebarShell';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'How Much Does Botox Cost? 2026 Price Guide' },
  alternates: { canonical: 'https://vitalityscout.com/guides/botox-cost-guide' },
  description: 'How much does Botox cost in 2026? A clear guide to per-unit vs per-area pricing, typical units for forehead, frown lines and crow\'s feet, and how to save.',
  keywords: ['Botox cost', 'how much does Botox cost', 'Botox price per unit', 'Botox units forehead', 'Dysport cost', 'Xeomin', 'Jeuveau', 'Botox cost guide', 'neuromodulator pricing'],
};

export default function BotoxCostGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How Much Does Botox Cost? 2026 Price Guide',
    description: 'A practical, informational guide to how Botox pricing works in 2026, including per-unit vs per-area pricing, typical units by treatment area, and ways to save.',
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
    mainEntityOfPage: 'https://vitalityscout.com/guides/botox-cost-guide',
    articleSection: 'Med Spa Guides',
    keywords: ['Botox', 'Botox cost', 'neuromodulator', 'med spa', 'aesthetics']
  };

  return (
    <>
      <Navigation />
      <SidebarShell>
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
              <span className="text-gray-900">Botox Cost Guide</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-purple-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4">
              <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
                Med Spa &amp; Aesthetics
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              How Much Does Botox Cost? A 2026 Price Guide
            </h1>
            <p className="text-xl text-gray-600">
              A plain-English look at how Botox pricing works&mdash;per-unit vs per-area, how many units common areas typically take, what drives the price, and how to save without compromising on safety.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Last updated: June 2026 • 10 min read
            </p>
          </div>
        </section>

        {/* Important Context */}
        <div className="bg-yellow-50 border-b-2 border-yellow-200">
          <div className="mx-auto max-w-4xl px-4 py-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">⚠️</div>
              <div>
                <h3 className="font-bold text-yellow-900 text-lg mb-2">Read This First</h3>
                <p className="text-yellow-800 text-sm">
                  Every price and unit count in this guide is a general estimate that varies widely by person, anatomy, provider, and region. Botox is a prescription medical procedure&mdash;your dosing should be decided by a qualified, licensed injector, not by a price chart. This article is informational, not medical advice.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Facts Box */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Botox Pricing: Quick Facts</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-purple-600 mb-1">Per-Unit Pricing</div>
                <div className="text-gray-900 font-semibold">~$10 - $20 / unit</div>
                <div className="text-gray-600">Most common model</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-1">Per-Area Pricing</div>
                <div className="text-gray-900 font-semibold">~$300 - $700 / area</div>
                <div className="text-gray-600">Flat-rate by zone</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-amber-600 mb-1">How Long It Lasts</div>
                <div className="text-gray-900 font-semibold">~3 - 4 months</div>
                <div className="text-gray-600">Then results fade</div>
              </div>
            </div>
          </div>

          {/* CTA — money page */}
          <div className="mb-10 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Ready to Compare Real Prices?</h3>
            <p className="mb-6 text-purple-100">
              Browse vetted med spas and Botox providers, compare pricing models, and find a licensed injector near you.
            </p>
            <Link
              href="/med-spa"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-purple-700 hover:bg-purple-50 transition-colors"
            >
              Find med spas &amp; Botox providers near you →
            </Link>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What This Guide Covers</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#what-is-botox" className="text-blue-600 hover:underline">1. What Botox Actually Is</a></li>
              <li><a href="#how-pricing-works" className="text-blue-600 hover:underline">2. How Botox Pricing Works</a></li>
              <li><a href="#units-by-area" className="text-blue-600 hover:underline">3. Typical Units by Treatment Area</a></li>
              <li><a href="#what-affects-price" className="text-blue-600 hover:underline">4. What Affects the Price</a></li>
              <li><a href="#how-long" className="text-blue-600 hover:underline">5. How Long It Lasts &amp; Annual Cost</a></li>
              <li><a href="#safety" className="text-blue-600 hover:underline">6. Safety Basics</a></li>
              <li><a href="#how-to-save" className="text-blue-600 hover:underline">7. How to Save (Safely)</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              &quot;How much does Botox cost?&quot; is one of the most common questions in cosmetic medicine&mdash;and the honest answer is &quot;it depends.&quot; Pricing hinges on how your provider charges, how many units you need, where you live, and who is holding the needle. This guide breaks down the moving parts so you can budget realistically and ask the right questions.
            </p>

            <h2 id="what-is-botox" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Botox Actually Is</h2>

            <p className="text-gray-700 mb-4">
              Botox is a brand name for a <strong>neuromodulator</strong>&mdash;a purified protein that temporarily relaxes the specific muscles it&apos;s injected into. By softening the muscle movements that create certain wrinkles, it can smooth their appearance for a few months at a time.
            </p>

            <p className="text-gray-700 mb-4">
              &quot;Botox&quot; is often used as a catch-all term, but it&apos;s one of several FDA-approved neuromodulator brands. Common ones include:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Botox</strong> &mdash; the original and most widely recognized brand</li>
              <li><strong>Dysport</strong> &mdash; dosed differently (its units are not 1:1 with Botox)</li>
              <li><strong>Xeomin</strong> &mdash; a &quot;naked&quot; formulation with fewer accessory proteins</li>
              <li><strong>Jeuveau</strong> &mdash; a newer brand marketed primarily for cosmetic use</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why brand matters for price:</strong> Because brands use different unit scales, comparing &quot;price per unit&quot; across brands can be misleading. Dysport, for example, typically requires more units than Botox for a comparable effect, so a lower per-unit price doesn&apos;t automatically mean a lower total cost. Always compare the total price for your treatment, not just the per-unit rate.
              </p>
            </div>

            <h2 id="how-pricing-works" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How Botox Pricing Works</h2>

            <p className="text-gray-700 mb-4">
              Providers generally use one of two pricing models. Understanding which one you&apos;re being quoted is the single most important step in comparing costs.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Per-Unit Pricing</h3>

            <p className="text-gray-700 mb-4">
              Here you pay for each unit of product used, often in the range of <strong>~$10 to $20 per unit</strong> as a general estimate. Your total depends on how many units the injector uses for your treatment. This model is transparent&mdash;you only pay for what you receive&mdash;but the final bill isn&apos;t known until your injector decides on dosing.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Per-Area Pricing</h3>

            <p className="text-gray-700 mb-4">
              Some practices charge a flat rate per treatment &quot;area&quot; or zone&mdash;commonly <strong>~$300 to $700 per area</strong> as a general estimate. This makes budgeting predictable, but the value depends on how many units are included in that flat rate. Always ask how a provider defines an &quot;area&quot; and roughly how many units it covers.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Tip:</strong> When comparing quotes, convert everything to an estimated total cost for <em>your</em> treatment. A per-unit clinic and a per-area clinic can look very different on paper yet land at a similar price once you account for the units involved.
              </p>
            </div>

            <h2 id="units-by-area" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Typical Units by Treatment Area</h2>

            <p className="text-gray-700 mb-4">
              The table below shows <strong>general ranges only</strong>. Actual unit counts vary substantially based on your anatomy, muscle strength, desired result, the brand used, and your injector&apos;s judgment. Treat these as ballpark figures for budgeting&mdash;not a prescription.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Treatment Area</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical Unit Range (est.)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Rough Cost Range (est.)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Forehead lines</td>
                    <td className="border border-gray-300 px-4 py-3">~10 - 20 units</td>
                    <td className="border border-gray-300 px-4 py-3">~$150 - $400</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Frown lines (glabella)</td>
                    <td className="border border-gray-300 px-4 py-3">~15 - 25 units</td>
                    <td className="border border-gray-300 px-4 py-3">~$200 - $500</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Crow&apos;s feet (both sides)</td>
                    <td className="border border-gray-300 px-4 py-3">~10 - 24 units</td>
                    <td className="border border-gray-300 px-4 py-3">~$150 - $480</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Upper-face combo (all three)</td>
                    <td className="border border-gray-300 px-4 py-3">~40 - 64 units</td>
                    <td className="border border-gray-300 px-4 py-3">~$500 - $1,200</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>Reminder:</strong> These are illustrative ranges, not standard doses. Some people need fewer units; others need more. Only an in-person assessment with a qualified injector can determine what&apos;s appropriate for you.
            </p>

            <h2 id="what-affects-price" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Affects the Price</h2>

            <p className="text-gray-700 mb-4">
              Two people can get the same number of units and pay very different totals. Common factors include:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>City and region:</strong> Major metros and high-cost-of-living areas tend to charge more than smaller markets.</li>
              <li><strong>Injector experience:</strong> Highly experienced injectors and well-known practices often command premium rates.</li>
              <li><strong>Setting:</strong> A dermatology or plastic surgery office may price differently than a med spa, though credentials and oversight matter more than the label.</li>
              <li><strong>Brand used:</strong> Botox, Dysport, Xeomin, and Jeuveau have different per-unit costs and dosing scales.</li>
              <li><strong>Specials and memberships:</strong> Introductory offers, loyalty programs, and membership pricing can lower your effective cost.</li>
            </ul>

            <h2 id="how-long" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How Long It Lasts &amp; Annual Cost</h2>

            <p className="text-gray-700 mb-4">
              Botox results are temporary. As a general estimate, effects last about <strong>3 to 4 months</strong> before muscle movement gradually returns and the smoothing fades. Some people notice results wearing off sooner or lasting a bit longer.
            </p>

            <p className="text-gray-700 mb-4">
              Because it&apos;s not permanent, the real cost is recurring. If you treat the same area roughly <strong>3 to 4 times per year</strong> to maintain results, your annual spend is your per-session cost multiplied across those visits. For example, a ~$400 session done three to four times a year lands somewhere around $1,200 to $1,600 annually&mdash;again, a general estimate that depends entirely on your treatment plan and provider.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Budgeting takeaway:</strong> Think in annual terms, not per-visit. The sticker price of one session can feel manageable, but maintenance several times a year is the figure that matters for your budget.
              </p>
            </div>

            <h2 id="safety" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Safety Basics</h2>

            <p className="text-gray-700 mb-4">
              Botox is a genuine medical procedure that involves a prescription product and injections into facial muscles. It should be administered by a <strong>licensed, qualified injector working with appropriate physician oversight.</strong> Credentials and training matter far more than a low price.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Choose a provider who is properly licensed and experienced with neuromodulators.</li>
              <li>Expect a real consultation and medical history review before treatment.</li>
              <li>Understand that side effects and risks exist&mdash;such as bruising, headache, drooping, or asymmetry&mdash;and ask your provider to walk you through them.</li>
              <li>Confirm the product is an FDA-approved brand and ask which one is being used.</li>
            </ul>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Important:</strong> Be wary of unusually cheap offers, unlicensed injectors, or products of unknown origin. Safety should never be the variable you economize on. When in doubt, prioritize qualifications over price.
              </p>
            </div>

            <h2 id="how-to-save" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Save (Safely)</h2>

            <p className="text-gray-700 mb-4">
              There are legitimate ways to lower your cost without cutting corners on safety:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
              <li><strong>Manufacturer loyalty programs:</strong> Programs like Allergan&apos;s Allē (for Botox) and Galderma&apos;s ASPIRE (for Dysport) offer points and savings on qualifying treatments at participating providers.</li>
              <li><strong>Membership or package pricing:</strong> Some reputable practices offer member rates or prepaid packages that reduce your per-unit cost.</li>
              <li><strong>Seasonal specials:</strong> Established clinics sometimes run promotions&mdash;just confirm the provider and product are the same quality as their standard service.</li>
              <li><strong>Compare total cost, not just per-unit:</strong> Get an estimated all-in price for your specific treatment from a few qualified providers.</li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-3">The One Rule When Saving</h4>
              <p className="text-gray-700">
                Save on price, never on safety. The right way to spend less is loyalty programs, memberships, and reputable providers running honest specials&mdash;<strong>not</strong> bargain-hunting for the cheapest needle. A qualified, licensed injector is the foundation of a good result.
              </p>
            </div>
          </div>

          {/* CTA Section — money page repeat */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Botox Providers Near You</h3>
            <p className="mb-6 text-purple-100">
              Find licensed med spas and aesthetic providers, see how they price treatments, and book a consultation.
            </p>
            <Link
              href="/med-spa"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-purple-600 hover:bg-purple-50 transition-colors"
            >
              Find med spas &amp; Botox providers near you →
            </Link>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Related Resources</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="/med-spa" className="text-blue-600 hover:underline">Med Spa Directory &mdash; compare Botox &amp; aesthetic providers</Link>
              </li>
              <li>
                <Link href="/longevity-performance" className="text-blue-600 hover:underline">Longevity &amp; Performance &mdash; other cash-pay wellness options</Link>
              </li>
            </ul>
          </div>
        </article>

        <MedicalDisclaimer />
      </main>
      </SidebarShell>
      <Footer />
    </>
  );
}
