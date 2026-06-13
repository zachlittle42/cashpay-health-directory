import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MedicalDisclaimer from '@/components/MedicalDisclaimer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How Much Does Laser Hair Removal Cost? (2026)',
  description: 'How much does laser hair removal cost in 2026? A clear guide to per-session and full-package pricing by body area, why it takes a series of sessions, and what affects price.',
  keywords: ['laser hair removal cost', 'how much does laser hair removal cost', 'laser hair removal price', 'laser hair removal per session', 'Milan Laser cost', 'laser hair removal packages', 'laser hair removal cost by area', 'unlimited laser hair removal'],
};

export default function LaserHairRemovalCostGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How Much Does Laser Hair Removal Cost? (2026)',
    description: 'A practical, informational guide to how laser hair removal pricing works in 2026, including per-session vs package pricing, typical costs by body area, and what affects price.',
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
    mainEntityOfPage: 'https://vitalityscout.com/guides/laser-hair-removal-cost',
    articleSection: 'Med Spa Guides',
    keywords: ['laser hair removal', 'laser hair removal cost', 'med spa', 'aesthetics', 'hair removal pricing']
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
              <span className="text-gray-900">Laser Hair Removal Cost</span>
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
              How Much Does Laser Hair Removal Cost?
            </h1>
            <p className="text-xl text-gray-600">
              A plain-English look at how laser hair removal pricing works&mdash;per-session vs packages vs &quot;unlimited&quot; plans, typical costs by body area, why it takes a series of treatments, and what drives the final price.
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
                  Every price in this guide is a general estimate that varies widely by body area, your hair and skin type, your provider, and where you live. Laser hair removal is a medical aesthetic procedure&mdash;suitability and settings should be decided by a qualified provider, not by a price chart. This article is informational, not medical advice.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Facts Box */}
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Laser Hair Removal Pricing: Quick Facts</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-purple-600 mb-1">Per-Session Cost</div>
                <div className="text-gray-900 font-semibold">~$50 - $400 / session</div>
                <div className="text-gray-600">Varies by body area</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-1">Sessions Needed</div>
                <div className="text-gray-900 font-semibold">~6 - 8 (then touch-ups)</div>
                <div className="text-gray-600">Spaced weeks apart</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-amber-600 mb-1">Pricing Models</div>
                <div className="text-gray-900 font-semibold">Session / Package / Unlimited</div>
                <div className="text-gray-600">Packages usually cheapest</div>
              </div>
            </div>
          </div>

          {/* CTA — money page */}
          <div className="mb-10 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Ready to Compare Real Prices?</h3>
            <p className="mb-6 text-purple-100">
              Browse vetted med spas and laser hair removal providers, compare pricing models, and find a qualified provider near you.
            </p>
            <Link
              href="/med-spa"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-purple-700 hover:bg-purple-50 transition-colors"
            >
              Find med spas &amp; laser providers near you →
            </Link>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What This Guide Covers</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#how-it-works" className="text-blue-600 hover:underline">1. How Laser Hair Removal Works</a></li>
              <li><a href="#why-a-series" className="text-blue-600 hover:underline">2. Why It Takes a Series of Sessions</a></li>
              <li><a href="#cost-by-area" className="text-blue-600 hover:underline">3. Typical Cost by Body Area</a></li>
              <li><a href="#total-package" className="text-blue-600 hover:underline">4. Total Cost of a Full Package</a></li>
              <li><a href="#pricing-models" className="text-blue-600 hover:underline">5. Pricing Models Explained</a></li>
              <li><a href="#what-affects-price" className="text-blue-600 hover:underline">6. What Affects the Price</a></li>
              <li><a href="#where-to-go" className="text-blue-600 hover:underline">7. Chains vs Med Spas vs Derm Offices</a></li>
              <li><a href="#safety" className="text-blue-600 hover:underline">8. Safety Basics</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              &quot;How much does laser hair removal cost?&quot; rarely has a one-number answer. The honest reply is that it depends on the body area, how many sessions you need, how your provider packages the pricing, and where you live. This guide breaks down the moving parts so you can budget for the full treatment&mdash;not just a single visit.
            </p>

            <h2 id="how-it-works" className="text-2xl font-bold text-gray-900 mt-12 mb-6">How Laser Hair Removal Works</h2>

            <p className="text-gray-700 mb-4">
              Laser hair removal uses focused light energy that is absorbed by the pigment in your hair. That energy converts to heat and targets the hair follicle, reducing its ability to produce new hair over a series of treatments. The goal is long-term hair <strong>reduction</strong>&mdash;most people see lasting thinning and patchiness rather than a single permanent &quot;zap and done&quot; result.
            </p>

            <p className="text-gray-700 mb-4">
              Because the laser keys off pigment, the contrast between hair color and skin tone has traditionally influenced how well a given device works. Modern systems include different laser types suited to different skin tones, which is one reason a qualified provider matters: they choose the device and settings appropriate for you.
            </p>

            <h2 id="why-a-series" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Why It Takes a Series of Sessions</h2>

            <p className="text-gray-700 mb-4">
              The single biggest reason laser hair removal costs more than people expect is that it requires a <strong>series of sessions</strong>, not a one-time appointment. This comes down to how hair grows.
            </p>

            <p className="text-gray-700 mb-4">
              Hair grows in cycles, and the laser is most effective on follicles in their active growth phase. At any given moment, only a portion of the hair in a treatment area is in that phase. The rest is dormant and won&apos;t respond well to that day&apos;s treatment. To catch more follicles as they cycle into active growth, sessions are spaced several weeks apart.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Initial series:</strong> Many people are quoted roughly 6 to 8 sessions as a general estimate, though some need more or fewer.</li>
              <li><strong>Spacing:</strong> Sessions are typically a few weeks apart to align with hair growth cycles.</li>
              <li><strong>Maintenance:</strong> Occasional touch-up sessions are common down the line, since results are reduction rather than guaranteed permanence.</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Why this matters for budgeting:</strong> A &quot;per-session&quot; price is only one piece of the puzzle. Always multiply it by the number of sessions you&apos;re likely to need, and factor in potential touch-ups, to understand the real cost.
              </p>
            </div>

            <h2 id="cost-by-area" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Typical Cost by Body Area</h2>

            <p className="text-gray-700 mb-4">
              Cost scales roughly with the size of the area being treated and how long the session takes. Small areas like the upper lip are the most affordable; large areas like full legs or a full back sit at the higher end. The table below shows <strong>general estimates only</strong>&mdash;actual prices vary substantially by provider, region, hair and skin type, and pricing model.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Body Area</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical Per-Session (est.)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Typical Package Range (est.)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Upper lip</td>
                    <td className="border border-gray-300 px-4 py-3">~$50 - $100</td>
                    <td className="border border-gray-300 px-4 py-3">~$200 - $500</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Chin</td>
                    <td className="border border-gray-300 px-4 py-3">~$50 - $100</td>
                    <td className="border border-gray-300 px-4 py-3">~$200 - $500</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Underarms</td>
                    <td className="border border-gray-300 px-4 py-3">~$75 - $175</td>
                    <td className="border border-gray-300 px-4 py-3">~$300 - $800</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Bikini line</td>
                    <td className="border border-gray-300 px-4 py-3">~$100 - $250</td>
                    <td className="border border-gray-300 px-4 py-3">~$400 - $1,200</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Full face</td>
                    <td className="border border-gray-300 px-4 py-3">~$100 - $250</td>
                    <td className="border border-gray-300 px-4 py-3">~$400 - $1,200</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Full legs</td>
                    <td className="border border-gray-300 px-4 py-3">~$250 - $400</td>
                    <td className="border border-gray-300 px-4 py-3">~$1,200 - $2,500+</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Full back</td>
                    <td className="border border-gray-300 px-4 py-3">~$250 - $400</td>
                    <td className="border border-gray-300 px-4 py-3">~$1,200 - $2,500+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              <strong>Reminder:</strong> These are illustrative ranges for budgeting, not quotes. Smaller areas like the upper lip and chin are consistently the cheapest, while large areas like full legs and full back are the priciest because they take more time and product to treat.
            </p>

            <h2 id="total-package" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Total Cost of a Full Package</h2>

            <p className="text-gray-700 mb-4">
              Because laser hair removal is a series, the figure that matters most is the <strong>total cost across all your sessions</strong>&mdash;not the price of one visit. To estimate it, multiply a realistic per-session price for your area by the number of sessions you&apos;re likely to need (often around 6 to 8 as a general estimate), then add any expected touch-ups.
            </p>

            <p className="text-gray-700 mb-4">
              For example, a small area might total a few hundred dollars across a full series, while a large area like full legs can run well into the low thousands once every session is counted. Many providers sell <strong>packages</strong> that bundle the full series at a lower effective per-session rate than paying visit by visit&mdash;so the package price is usually the more relevant number to compare.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Tip:</strong> When you compare providers, ask for the all-in package price for your specific area and the number of sessions it includes. A low per-session rate can still add up to more than a competitor&apos;s bundled package once you total the full series.
              </p>
            </div>

            <h2 id="pricing-models" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Pricing Models Explained</h2>

            <p className="text-gray-700 mb-4">
              Providers generally use one of three pricing approaches. Knowing which one you&apos;re being quoted is key to comparing fairly.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Per-Session Pricing</h3>
            <p className="text-gray-700 mb-4">
              You pay for each visit individually. This offers flexibility and a low upfront commitment, but it tends to be the most expensive way to complete a full series because you don&apos;t get a bundle discount.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Package Pricing</h3>
            <p className="text-gray-700 mb-4">
              You prepay for a set number of sessions (for example, a series of six) at a lower effective per-session rate. Packages are the most common way people buy laser hair removal and usually offer the best value for a defined area. Confirm exactly how many sessions are included and whether touch-ups cost extra.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. &quot;Unlimited&quot; Plans</h3>
            <p className="text-gray-700 mb-4">
              Some chains&mdash;Milan Laser is a well-known example&mdash;market &quot;unlimited&quot; packages that bundle a body area with future touch-ups for the life of the plan. These can be appealing if you expect to need ongoing maintenance, but read the terms closely: coverage, transfer rules, and what counts as &quot;unlimited&quot; vary by company and location.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>How to compare:</strong> Convert every quote to an estimated total for <em>your</em> area and the full series you expect to need. A package and an &quot;unlimited&quot; plan can look very different on paper yet land close once you account for touch-ups over time.
              </p>
            </div>

            <h2 id="what-affects-price" className="text-2xl font-bold text-gray-900 mt-12 mb-6">What Affects the Price</h2>

            <p className="text-gray-700 mb-4">
              Two people treating the same area can pay very different totals. Common factors include:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Size of the area:</strong> Larger areas take longer and use more energy, so they cost more per session and per package.</li>
              <li><strong>Your hair and skin type:</strong> Hair color, density, and skin tone can affect how many sessions you need and which device is appropriate&mdash;both of which influence total cost.</li>
              <li><strong>City and region:</strong> Major metros and high-cost-of-living areas generally charge more than smaller markets.</li>
              <li><strong>Provider and setting:</strong> A dermatology office, a med spa, and a national chain may price differently for the same area.</li>
              <li><strong>Packages and specials:</strong> Bundled series, memberships, and introductory offers can meaningfully lower your effective per-session cost.</li>
            </ul>

            <h2 id="where-to-go" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Chains vs Med Spas vs Derm Offices</h2>

            <p className="text-gray-700 mb-4">
              You&apos;ll generally find laser hair removal in three kinds of settings, each with its own trade-offs:
            </p>

            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
              <li><strong>National chains:</strong> Specialized hair-removal chains often lead with package and &quot;unlimited&quot; pricing and standardized protocols across many locations. Convenient and frequently competitive on price&mdash;just read the plan terms.</li>
              <li><strong>Med spas:</strong> Offer laser hair removal alongside other aesthetic services. Quality and pricing vary, so credentials and device selection matter as much as the menu price.</li>
              <li><strong>Dermatology or plastic surgery offices:</strong> Provide physician oversight and may be a better fit if you have specific skin concerns or a complex skin tone and hair-color combination. They may price higher, but the clinical expertise can be worth it.</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Regardless of setting, the label matters less than the qualifications of the person operating the device and the suitability of their equipment for your skin and hair.
            </p>

            <h2 id="safety" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Safety Basics</h2>

            <p className="text-gray-700 mb-4">
              Laser hair removal is a medical aesthetic procedure. It should be performed by a <strong>qualified, properly trained provider</strong> using a device suited to your skin and hair type. Credentials and the right equipment matter far more than the lowest price.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Choose a provider who is properly licensed and experienced with laser hair removal for your skin tone.</li>
              <li>Expect a consultation and, ideally, a patch test before committing to a full series.</li>
              <li>Understand that side effects exist&mdash;such as redness, swelling, temporary irritation, or pigment changes&mdash;and ask your provider to walk you through them.</li>
              <li>Be honest about your medical history, medications, and recent sun exposure, all of which can affect suitability and settings.</li>
            </ul>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Important:</strong> Be wary of unusually cheap offers, untrained operators, or providers using a one-size-fits-all device on every skin tone. Safety and suitability should never be the variable you economize on. When in doubt, prioritize qualifications over price.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-3">The One Rule When Saving</h4>
              <p className="text-gray-700">
                Save on price, never on safety. The smart way to spend less is package pricing, memberships, and reputable providers running honest specials&mdash;<strong>not</strong> chasing the cheapest possible session with an unknown operator. A qualified provider with the right device for your skin and hair is the foundation of a good outcome.
              </p>
            </div>
          </div>

          {/* CTA Section — money page repeat */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Compare Laser Providers Near You</h3>
            <p className="mb-6 text-purple-100">
              Find qualified med spas and aesthetic providers, see how they price laser hair removal, and book a consultation.
            </p>
            <Link
              href="/med-spa"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-purple-600 hover:bg-purple-50 transition-colors"
            >
              Find med spas &amp; laser providers near you →
            </Link>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Related Resources</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="/med-spa" className="text-blue-600 hover:underline">Med Spa Directory &mdash; compare laser &amp; aesthetic providers</Link>
              </li>
              <li>
                <Link href="/guides/botox-cost-guide" className="text-blue-600 hover:underline">Botox Cost Guide &mdash; how Botox pricing works in 2026</Link>
              </li>
            </ul>
          </div>
        </article>

        <MedicalDisclaimer />
      </main>
      <Footer />
    </>
  );
}
