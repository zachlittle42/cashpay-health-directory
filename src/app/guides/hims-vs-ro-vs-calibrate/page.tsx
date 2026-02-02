import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hims vs Ro vs Calibrate: GLP-1 Weight Loss Comparison (2025) | VitalityScout',
  description: 'Detailed comparison of Hims, Ro, and Calibrate weight loss programs. Compare pricing, medication options, coaching support, and which is best for your needs.',
  keywords: ['Hims weight loss', 'Ro weight loss', 'Calibrate', 'GLP-1 comparison', 'semaglutide', 'telehealth weight loss', 'Wegovy', 'Ozempic'],
};

export default function HimsVsRoVsCalibrateGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Hims vs Ro vs Calibrate: GLP-1 Weight Loss Comparison',
    description: 'Comprehensive comparison of the top three telehealth weight loss programs offering GLP-1 medications.',
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
    datePublished: '2025-01-01',
    dateModified: '2025-01-01',
    mainEntityOfPage: 'https://vitalityscout.com/guides/hims-vs-ro-vs-calibrate',
    articleSection: 'Comparison Guides',
    keywords: ['Hims', 'Ro', 'Calibrate', 'weight loss', 'GLP-1', 'semaglutide']
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
              <span className="text-gray-900">Hims vs Ro vs Calibrate</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-purple-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4">
              <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
                Comparison
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Hims vs Ro vs Calibrate: Which GLP-1 Program Is Right for You?
            </h1>
            <p className="text-xl text-gray-600">
              A side-by-side comparison of the three most popular telehealth weight loss programs—pricing, medication options, coaching support, and honest assessments.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Last updated: January 2025 • 8 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Winner Box */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Recommendations</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-blue-600 mb-1">Best for Budget</div>
                <div className="text-gray-900 font-semibold">Hims</div>
                <div className="text-gray-600">Starting at $199/mo</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-green-600 mb-1">Best for Brand-Name</div>
                <div className="text-gray-900 font-semibold">Ro</div>
                <div className="text-gray-600">$499/mo for Wegovy/Zepbound</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-purple-600 mb-1">Best for Coaching</div>
                <div className="text-gray-900 font-semibold">Calibrate</div>
                <div className="text-gray-600">Full metabolic program</div>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Three Biggest GLP-1 Telehealth Providers</h2>
            <p>
              If you&apos;ve been researching GLP-1 medications like Ozempic, Wegovy, or their cheaper alternatives,
              you&apos;ve probably come across <strong>Hims</strong>, <strong>Ro</strong>, and <strong>Calibrate</strong>.
              These are the dominant players in the telehealth weight loss space.
            </p>
            <p>
              But they&apos;re not interchangeable. They have different pricing models, different medication options,
              and different approaches to weight loss. Let&apos;s break down exactly what you get with each.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Head-to-Head Comparison</h2>
          </div>

          {/* Main Comparison Table */}
          <div className="overflow-x-auto my-8">
            <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Feature</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 bg-blue-50">Hims/Hers</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 bg-green-50">Ro Body</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 bg-purple-50">Calibrate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-4 py-3 font-medium">Starting Price</td>
                  <td className="px-4 py-3 bg-blue-50/50">
                    <span className="font-bold text-blue-600">$199/mo</span>
                    <span className="block text-xs text-gray-500">(6-month plan)</span>
                  </td>
                  <td className="px-4 py-3 bg-green-50/50">
                    <span className="font-bold text-green-600">$349/mo</span>
                    <span className="block text-xs text-gray-500">(or $499 for brand-name)</span>
                  </td>
                  <td className="px-4 py-3 bg-purple-50/50">
                    <span className="font-bold text-purple-600">$199/mo</span>
                    <span className="block text-xs text-gray-500">(program only, meds extra)</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Medication Type</td>
                  <td className="px-4 py-3 bg-blue-50/50">Compounded → Brand transition</td>
                  <td className="px-4 py-3 bg-green-50/50">Brand-name (Wegovy, Zepbound)</td>
                  <td className="px-4 py-3 bg-purple-50/50">Brand-name only</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Insurance Accepted</td>
                  <td className="px-4 py-3 bg-blue-50/50">
                    <span className="text-red-600">✗ No</span>
                    <span className="block text-xs text-gray-500">HSA/FSA accepted</span>
                  </td>
                  <td className="px-4 py-3 bg-green-50/50">
                    <span className="text-yellow-600">◐ Partial</span>
                    <span className="block text-xs text-gray-500">Insurance support provided</span>
                  </td>
                  <td className="px-4 py-3 bg-purple-50/50">
                    <span className="text-green-600">✓ Yes (for meds)</span>
                    <span className="block text-xs text-gray-500">Program not covered</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Coaching Included</td>
                  <td className="px-4 py-3 bg-blue-50/50">
                    <span className="text-red-600">✗ Minimal</span>
                  </td>
                  <td className="px-4 py-3 bg-green-50/50">
                    <span className="text-green-600">✓ Yes</span>
                  </td>
                  <td className="px-4 py-3 bg-purple-50/50">
                    <span className="text-green-600">✓ Extensive</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Commitment</td>
                  <td className="px-4 py-3 bg-blue-50/50">3-12 month prepaid plans</td>
                  <td className="px-4 py-3 bg-green-50/50">Monthly (flexible)</td>
                  <td className="px-4 py-3 bg-purple-50/50">1-year program</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Weight Loss Guarantee</td>
                  <td className="px-4 py-3 bg-blue-50/50">
                    <span className="text-red-600">✗ No</span>
                  </td>
                  <td className="px-4 py-3 bg-green-50/50">
                    <span className="text-red-600">✗ No</span>
                  </td>
                  <td className="px-4 py-3 bg-purple-50/50">
                    <span className="text-green-600">✓ 10% guarantee</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Best For</td>
                  <td className="px-4 py-3 bg-blue-50/50 text-sm">Budget-conscious, quick start</td>
                  <td className="px-4 py-3 bg-green-50/50 text-sm">Brand-name without insurance hassle</td>
                  <td className="px-4 py-3 bg-purple-50/50 text-sm">Comprehensive support, has insurance</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Hims/Hers: The Budget Option</h2>

            <div className="flex items-center gap-3 mb-4 not-prose">
              <div className="text-3xl font-bold text-blue-600">Hims</div>
              <div className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">Best for: Budget</div>
            </div>

            <p>
              Hims (and Hers for women) built its reputation on affordable telehealth for hair loss and ED, then expanded into weight loss.
              They were one of the first to offer compounded semaglutide at scale, making GLP-1 medications accessible for around $200/month.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What You Get</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Compounded semaglutide injections</strong> starting at $199/month (6-month plan paid upfront)</li>
              <li>Weight loss pill kits starting at $69/month (10-month plan)</li>
              <li>Online consultation with a healthcare provider</li>
              <li>Monthly check-ins and dosage adjustments</li>
              <li>HSA/FSA accepted for payment</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Pricing Breakdown</h3>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose text-sm">
              <div className="grid gap-3">
                <div className="flex justify-between">
                  <span>Compounded Semaglutide (12-mo plan)</span>
                  <span className="font-semibold">~$165/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>Compounded Semaglutide (6-mo plan)</span>
                  <span className="font-semibold">$199/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>Weight Loss Pill Kits (oral meds)</span>
                  <span className="font-semibold">$69-149/mo</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Metabolic test requirement</span>
                  <span>Not required</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Pros & Cons</h3>
            <div className="grid md:grid-cols-2 gap-4 my-4 not-prose text-sm">
              <div className="bg-green-50 rounded-lg p-4">
                <div className="font-bold text-green-800 mb-2">Pros</div>
                <ul className="space-y-1 text-green-900">
                  <li>✓ Lowest price point for GLP-1s</li>
                  <li>✓ No monthly membership fee</li>
                  <li>✓ Quick onboarding process</li>
                  <li>✓ Multiple oral medication options</li>
                  <li>✓ Published safety data (10,000+ patients)</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <div className="font-bold text-red-800 mb-2">Cons</div>
                <ul className="space-y-1 text-red-900">
                  <li>✗ Requires upfront commitment (prepaid plans)</li>
                  <li>✗ Minimal coaching support</li>
                  <li>✗ Compounded meds facing FDA scrutiny</li>
                  <li>✗ No insurance integration</li>
                  <li>✗ Less personalized than competitors</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-6">
              <h4 className="text-amber-900 font-bold mb-2">FDA Note</h4>
              <p className="text-sm text-amber-800 mb-0">
                With the FDA declaring the semaglutide shortage resolved in February 2025, Hims is in transition.
                Their compounded semaglutide offerings may change. Check their current availability before signing up.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Ro Body: The Brand-Name Option</h2>

            <div className="flex items-center gap-3 mb-4 not-prose">
              <div className="text-3xl font-bold text-green-600">Ro</div>
              <div className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">Best for: Brand-Name Access</div>
            </div>

            <p>
              Ro (formerly Roman) took a different approach. While they initially offered compounded medications,
              they&apos;ve secured a <strong>partnership with Novo Nordisk</strong> to offer brand-name Wegovy and other FDA-approved GLP-1s
              at reduced prices—no insurance required.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What You Get</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Brand-name medications</strong>: Wegovy, Zepbound, Saxenda, Ozempic</li>
              <li>Coaching and ongoing support included</li>
              <li>Insurance support team to help maximize coverage</li>
              <li>Monthly flexibility (no long-term commitment required)</li>
              <li>GLP-1 Guarantee: full refund if you don&apos;t qualify</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Pricing Breakdown</h3>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose text-sm">
              <div className="grid gap-3">
                <div className="flex justify-between">
                  <span>First month (promotional)</span>
                  <span className="font-semibold">$194</span>
                </div>
                <div className="flex justify-between">
                  <span>Ongoing monthly (with insurance help)</span>
                  <span className="font-semibold">$349/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>Brand-name via Novo partnership</span>
                  <span className="font-semibold">$499/mo</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Metabolic test</span>
                  <span>$75 (optional)</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Pros & Cons</h3>
            <div className="grid md:grid-cols-2 gap-4 my-4 not-prose text-sm">
              <div className="bg-green-50 rounded-lg p-4">
                <div className="font-bold text-green-800 mb-2">Pros</div>
                <ul className="space-y-1 text-green-900">
                  <li>✓ FDA-approved brand-name medications</li>
                  <li>✓ Novo Nordisk partnership = reliable supply</li>
                  <li>✓ Coaching included in program</li>
                  <li>✓ Insurance support team</li>
                  <li>✓ Multiple medication options (Wegovy, Zepbound, etc.)</li>
                  <li>✓ Month-to-month flexibility</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <div className="font-bold text-red-800 mb-2">Cons</div>
                <ul className="space-y-1 text-red-900">
                  <li>✗ Higher price than compounded options</li>
                  <li>✗ Price jumps after first month</li>
                  <li>✗ $499/mo for brand still expensive</li>
                  <li>✗ Insurance process can be slow</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Calibrate: The Comprehensive Program</h2>

            <div className="flex items-center gap-3 mb-4 not-prose">
              <div className="text-3xl font-bold text-purple-600">Calibrate</div>
              <div className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">Best for: Coaching + Insurance</div>
            </div>

            <p>
              Calibrate is fundamentally different from Hims and Ro. It&apos;s not just a medication delivery service—it&apos;s a
              <strong>one-year metabolic health program</strong> that includes medication, coaching, and lifestyle change support.
              They&apos;ve always focused on brand-name medications and work with your insurance.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What You Get</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Full-year program</strong> with structured curriculum</li>
              <li>One-on-one video coaching sessions</li>
              <li>GLP-1 medications: Wegovy, Ozempic, Zepbound, Mounjaro, Saxenda</li>
              <li>Insurance assistance—medication often covered (copay ~$25/mo)</li>
              <li><strong>10% weight loss guarantee</strong> or money back</li>
              <li>Focus on &quot;metabolic reset&quot; for long-term results</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Pricing Breakdown</h3>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose text-sm">
              <div className="grid gap-3">
                <div className="flex justify-between">
                  <span>Monthly plan (3-mo minimum)</span>
                  <span className="font-semibold">$199/mo ($597 minimum)</span>
                </div>
                <div className="flex justify-between">
                  <span>Full year paid upfront</span>
                  <span className="font-semibold">$1,649 total</span>
                </div>
                <div className="flex justify-between">
                  <span>Medication with insurance</span>
                  <span className="font-semibold">~$25/mo (after deductible)</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Total first year (program + meds)</span>
                  <span>~$1,950-2,000</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Pros & Cons</h3>
            <div className="grid md:grid-cols-2 gap-4 my-4 not-prose text-sm">
              <div className="bg-green-50 rounded-lg p-4">
                <div className="font-bold text-green-800 mb-2">Pros</div>
                <ul className="space-y-1 text-green-900">
                  <li>✓ Most comprehensive program</li>
                  <li>✓ Strong coaching and accountability</li>
                  <li>✓ Works with insurance for meds</li>
                  <li>✓ 10% weight loss guarantee</li>
                  <li>✓ Brand-name FDA-approved medications</li>
                  <li>✓ Focus on long-term behavior change</li>
                  <li>✓ 15-19% average weight loss</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <div className="font-bold text-red-800 mb-2">Cons</div>
                <ul className="space-y-1 text-red-900">
                  <li>✗ Highest upfront cost (~$1,649/year)</li>
                  <li>✗ Requires commercial insurance</li>
                  <li>✗ Ages 18-64 only</li>
                  <li>✗ Medicare/Medicaid not accepted</li>
                  <li>✗ Slower onboarding process</li>
                  <li>✗ 1-year commitment</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Which One Should You Choose?</h2>

            <p>
              Here&apos;s my honest take on who should use each service:
            </p>

            <div className="space-y-6 my-8 not-prose">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h4 className="font-bold text-gray-900 mb-2">Choose Hims if...</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• You&apos;re primarily looking for the lowest cost</li>
                  <li>• You don&apos;t have insurance that covers GLP-1s</li>
                  <li>• You&apos;re comfortable with compounded medications (while available)</li>
                  <li>• You don&apos;t need hand-holding—you&apos;re self-directed</li>
                  <li>• You want to start quickly without extensive onboarding</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4 py-2">
                <h4 className="font-bold text-gray-900 mb-2">Choose Ro if...</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• You want FDA-approved brand-name medication</li>
                  <li>• You don&apos;t want to deal with insurance</li>
                  <li>• You want coaching support but not a rigid program</li>
                  <li>• You prefer month-to-month flexibility</li>
                  <li>• $499/month is acceptable for peace of mind</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4 py-2">
                <h4 className="font-bold text-gray-900 mb-2">Choose Calibrate if...</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• You have commercial insurance that may cover medication</li>
                  <li>• You want structured coaching and accountability</li>
                  <li>• You&apos;re focused on long-term metabolic health, not just quick weight loss</li>
                  <li>• You&apos;re willing to commit to a 1-year program</li>
                  <li>• The 10% weight loss guarantee matters to you</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Bottom Line</h2>

            <p>
              There&apos;s no universally &quot;best&quot; option—it depends on your budget, insurance situation, and how much support you want.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Tightest budget?</strong> Hims at ~$199/mo gets you medication with minimal extras.</li>
              <li><strong>Want brand-name without insurance hassle?</strong> Ro&apos;s $499/mo Novo partnership is the cleanest path.</li>
              <li><strong>Have good insurance and want full support?</strong> Calibrate&apos;s comprehensive program is worth the investment if medication is covered.</li>
            </ul>

            <p>
              All three can work. The GLP-1 medication is doing the heavy lifting regardless of which platform delivers it.
              The main differences are price, medication source, and how much hand-holding you get along the way.
            </p>
          </div>

          {/* Local Alternative */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
            <h4 className="font-bold text-green-900 mb-3">Prefer In-Person Care?</h4>
            <p className="text-green-800 mb-4">
              Telehealth isn&apos;t for everyone. If you want hands-on support, body composition tracking, or more personalized care,
              local weight loss clinics may be a better fit.
            </p>
            <Link
              href="/weight-loss"
              className="inline-block text-sm font-medium text-green-700 hover:text-green-800"
            >
              Browse Local Weight Loss Clinics →
            </Link>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Find Your GLP-1 Provider</h3>
            <p className="text-gray-600 mb-6">
              Compare all telehealth options or find local clinics near you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/glp1"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 transition-colors"
              >
                All Telehealth Providers →
              </Link>
              <Link
                href="/weight-loss"
                className="inline-block rounded-lg border-2 border-blue-600 px-6 py-3 font-medium text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Local Clinics by State →
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 my-8">
            <h4 className="text-gray-900 font-bold mb-2">Disclosure & Disclaimer</h4>
            <p className="text-sm text-gray-700 mb-0">
              Pricing and program details are accurate as of January 2025 but may change. We may receive compensation if you sign up through links on this page.
              This guide is for informational purposes only and does not constitute medical advice. Consult a healthcare provider before starting any weight loss medication.
            </p>
          </div>

          {/* Sources */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• <a href="https://www.hims.com/blog/hims-weight-loss-vs-ro" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Hims: Hims vs Ro Weight Loss Comparison</a></li>
              <li>• <a href="https://www.joincalibrate.com/pricing" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Calibrate: Pricing Information</a></li>
              <li>• <a href="https://finvsfin.com/hims-vs-ro-weight-loss-review/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">FinvsFin: Hims vs Ro Weight Loss Review</a></li>
              <li>• <a href="https://www.consumeraffairs.com/health/calibrate.html" target="_blank" rel="noopener" className="text-blue-600 hover:underline">ConsumerAffairs: Calibrate Reviews</a></li>
            </ul>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
