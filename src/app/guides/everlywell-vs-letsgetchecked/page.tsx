import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Everlywell vs LetsGetChecked: At-Home Lab Test Comparison (2025) | VitalityScout',
  description: 'Everlywell vs LetsGetChecked comparison. Compare pricing, test accuracy, turnaround time, and which at-home lab testing service is best for your needs.',
  keywords: ['Everlywell', 'LetsGetChecked', 'at-home lab test', 'blood test at home', 'STD test', 'hormone test', 'health testing'],
};

export default function EverlywellVsLetsGetCheckedGuide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Everlywell vs LetsGetChecked: At-Home Lab Test Comparison',
    description: 'Comprehensive comparison of Everlywell and LetsGetChecked at-home lab testing services.',
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
    mainEntityOfPage: 'https://vitalityscout.com/guides/everlywell-vs-letsgetchecked',
    articleSection: 'Comparison Guides',
    keywords: ['Everlywell', 'LetsGetChecked', 'lab testing', 'health tests']
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
              <span className="text-gray-900">Everlywell vs LetsGetChecked</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                Comparison
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Everlywell vs LetsGetChecked: Which At-Home Lab Test Is Better?
            </h1>
            <p className="text-xl text-gray-600">
              A detailed comparison of the two leading at-home lab testing services—pricing, test selection, accuracy, turnaround time, and which is best for different needs.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Last updated: January 2025 • 10 min read
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
                <div className="font-bold text-blue-600 mb-2">Everlywell</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• 35+ tests available</li>
                  <li>• $49-399 price range</li>
                  <li>• Finger prick or swab collection</li>
                  <li>• 5-7 day turnaround</li>
                  <li>• HSA/FSA eligible</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="font-bold text-indigo-600 mb-2">LetsGetChecked</div>
                <ul className="space-y-1 text-gray-700">
                  <li>• 40+ tests available</li>
                  <li>• $69-349 price range</li>
                  <li>• Finger prick, urine, or swab</li>
                  <li>• 2-5 day turnaround</li>
                  <li>• Nurse consultation included</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Winner Summary */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">The Bottom Line</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-semibold text-blue-600 mb-1">Choose Everlywell if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You want the widest retail availability</li>
                  <li>• You prefer a self-service approach</li>
                  <li>• Budget is your primary concern</li>
                  <li>• You want food sensitivity tests</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-indigo-600 mb-1">Choose LetsGetChecked if:</div>
                <ul className="text-gray-700 space-y-1">
                  <li>• You want faster results</li>
                  <li>• You value included nurse consultations</li>
                  <li>• You need STI testing with treatment</li>
                  <li>• You want more comprehensive panels</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What We&apos;ll Cover</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#overview" className="text-blue-600 hover:underline">1. Company Overview</a></li>
              <li><a href="#tests" className="text-blue-600 hover:underline">2. Test Selection Comparison</a></li>
              <li><a href="#pricing" className="text-blue-600 hover:underline">3. Pricing Breakdown</a></li>
              <li><a href="#accuracy" className="text-blue-600 hover:underline">4. Accuracy & Lab Quality</a></li>
              <li><a href="#experience" className="text-blue-600 hover:underline">5. User Experience</a></li>
              <li><a href="#results" className="text-blue-600 hover:underline">6. Results & Support</a></li>
              <li><a href="#verdict" className="text-blue-600 hover:underline">7. Final Recommendations</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              At-home lab tests have made health monitoring more accessible than ever. Everlywell and LetsGetChecked are the two biggest names in the space, but they take slightly different approaches. Here&apos;s how they actually compare.
            </p>

            <h2 id="overview" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Company Overview</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Everlywell</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Founded in 2015 in Austin, Texas</li>
              <li>Probably the most recognized at-home testing brand</li>
              <li>Available at major retailers (CVS, Walgreens, Target, Amazon)</li>
              <li>Uses CLIA-certified partner labs across the US</li>
              <li>Featured on Shark Tank (landed deal with Lori Greiner)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">LetsGetChecked</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Founded in 2015 in Dublin, Ireland (US HQ in New York)</li>
              <li>Strong focus on sexual health and clinical support</li>
              <li>All tests include nurse consultation for results</li>
              <li>Uses CAP-accredited labs (highest certification level)</li>
              <li>Expanded from STI testing into broader health panels</li>
            </ul>

            <h2 id="tests" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Test Selection Comparison</h2>

            <p className="text-gray-700 mb-4">
              Both companies offer similar categories of testing, but with different emphases:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Test Category</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Everlywell</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">LetsGetChecked</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">STI/Sexual Health</td>
                    <td className="border border-gray-300 px-4 py-3">5 tests</td>
                    <td className="border border-gray-300 px-4 py-3">10+ tests ✓</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Hormone Panels</td>
                    <td className="border border-gray-300 px-4 py-3">8 tests ✓</td>
                    <td className="border border-gray-300 px-4 py-3">6 tests</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Thyroid</td>
                    <td className="border border-gray-300 px-4 py-3">Yes</td>
                    <td className="border border-gray-300 px-4 py-3">Yes</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Heart Health/Cholesterol</td>
                    <td className="border border-gray-300 px-4 py-3">Yes</td>
                    <td className="border border-gray-300 px-4 py-3">Yes</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Food Sensitivity</td>
                    <td className="border border-gray-300 px-4 py-3">Yes ✓</td>
                    <td className="border border-gray-300 px-4 py-3">No</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Vitamin/Nutrition</td>
                    <td className="border border-gray-300 px-4 py-3">Yes</td>
                    <td className="border border-gray-300 px-4 py-3">Yes</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Fertility</td>
                    <td className="border border-gray-300 px-4 py-3">Yes</td>
                    <td className="border border-gray-300 px-4 py-3">Yes ✓ (more options)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Colon Cancer Screening</td>
                    <td className="border border-gray-300 px-4 py-3">Yes</td>
                    <td className="border border-gray-300 px-4 py-3">Yes</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Menopause</td>
                    <td className="border border-gray-300 px-4 py-3">Yes</td>
                    <td className="border border-gray-300 px-4 py-3">Yes</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Lyme Disease</td>
                    <td className="border border-gray-300 px-4 py-3">Yes</td>
                    <td className="border border-gray-300 px-4 py-3">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Key Differences</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>STI testing:</strong> LetsGetChecked has more comprehensive options and can prescribe treatment for some positive results</li>
              <li><strong>Food sensitivity:</strong> Everlywell is the only one offering these (though evidence for IgG food testing is debated)</li>
              <li><strong>Hormones:</strong> Everlywell has more variety, including cortisol, metabolism, and perimenopause panels</li>
              <li><strong>Male fertility:</strong> LetsGetChecked offers at-home sperm testing; Everlywell doesn&apos;t</li>
            </ul>

            <h2 id="pricing" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Pricing Breakdown</h2>

            <p className="text-gray-700 mb-4">
              Here&apos;s how popular tests compare between the two:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Test</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Everlywell</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">LetsGetChecked</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Basic STI Panel</td>
                    <td className="border border-gray-300 px-4 py-3">$99</td>
                    <td className="border border-gray-300 px-4 py-3">$99</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Complete STI Panel</td>
                    <td className="border border-gray-300 px-4 py-3">$199</td>
                    <td className="border border-gray-300 px-4 py-3">$179</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Thyroid Test</td>
                    <td className="border border-gray-300 px-4 py-3">$99</td>
                    <td className="border border-gray-300 px-4 py-3">$119</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Testosterone</td>
                    <td className="border border-gray-300 px-4 py-3">$69</td>
                    <td className="border border-gray-300 px-4 py-3">$69</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Cholesterol/Heart Health</td>
                    <td className="border border-gray-300 px-4 py-3">$79</td>
                    <td className="border border-gray-300 px-4 py-3">$89</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">HbA1c (Diabetes)</td>
                    <td className="border border-gray-300 px-4 py-3">$59</td>
                    <td className="border border-gray-300 px-4 py-3">$79</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Vitamin D</td>
                    <td className="border border-gray-300 px-4 py-3">$59</td>
                    <td className="border border-gray-300 px-4 py-3">$69</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Women&apos;s Fertility</td>
                    <td className="border border-gray-300 px-4 py-3">$149</td>
                    <td className="border border-gray-300 px-4 py-3">$139</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Food Sensitivity (96 foods)</td>
                    <td className="border border-gray-300 px-4 py-3">$199</td>
                    <td className="border border-gray-300 px-4 py-3">N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Discounts:</strong> Both companies run frequent promotions (20-30% off). Subscribe to their emails or wait for sales. Everlywell is also often discounted at Target and Amazon.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Subscription Options</h3>

            <p className="text-gray-700 mb-4">
              <strong>Everlywell:</strong> Offers Everlywell+ membership ($24.99/month) for 20% off all tests and free shipping.
            </p>

            <p className="text-gray-700 mb-4">
              <strong>LetsGetChecked:</strong> No formal membership, but offers bundled subscriptions for recurring testing (e.g., quarterly STI monitoring at reduced rates).
            </p>

            <h2 id="accuracy" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Accuracy & Lab Quality</h2>

            <p className="text-gray-700 mb-4">
              Both companies use legitimate, regulated laboratories:
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Everlywell</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Partners with CLIA-certified labs across the US</li>
              <li>Labs meet federal Clinical Laboratory Improvement Amendments standards</li>
              <li>Results reviewed by board-certified physicians</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">LetsGetChecked</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Uses CAP-accredited labs (College of American Pathologists—highest certification)</li>
              <li>All samples processed at their own or partner clinical labs</li>
              <li>Strong chain-of-custody protocols for accurate results</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Important Caveat: Collection Quality Matters</h4>
              <p className="text-gray-700">
                At-home test accuracy depends heavily on following collection instructions. Finger-prick blood tests require adequate sample volume and proper technique. User error (not the lab) is the main source of invalid results. Both companies provide clear video instructions and phone support.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">How They Compare to Doctor-Ordered Labs</h3>

            <p className="text-gray-700 mb-4">
              For most biomarkers, at-home finger-prick tests correlate well with venous blood draws (traditional lab work). However:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Some tests (like full lipid panels) may have slightly less precision from finger pricks</li>
              <li>Doctor-ordered labs (Quest, Labcorp) are the gold standard for medical diagnosis</li>
              <li>At-home tests are best for <strong>monitoring trends</strong>, not definitive diagnosis</li>
              <li>Abnormal results should be confirmed with your doctor</li>
            </ul>

            <h2 id="experience" className="text-2xl font-bold text-gray-900 mt-12 mb-6">User Experience</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Ordering & Shipping</h3>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Feature</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Everlywell</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">LetsGetChecked</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Order Online</td>
                    <td className="border border-gray-300 px-4 py-3">Yes</td>
                    <td className="border border-gray-300 px-4 py-3">Yes</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Buy in Stores</td>
                    <td className="border border-gray-300 px-4 py-3">Yes (CVS, Target, etc.)</td>
                    <td className="border border-gray-300 px-4 py-3">Limited (Walmart)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Shipping Time</td>
                    <td className="border border-gray-300 px-4 py-3">3-5 business days</td>
                    <td className="border border-gray-300 px-4 py-3">2-3 business days</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Free Shipping</td>
                    <td className="border border-gray-300 px-4 py-3">Orders $49+</td>
                    <td className="border border-gray-300 px-4 py-3">Always free</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Discreet Packaging</td>
                    <td className="border border-gray-300 px-4 py-3">Yes</td>
                    <td className="border border-gray-300 px-4 py-3">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Collection Process</h3>

            <p className="text-gray-700 mb-4">
              Both companies use similar collection methods:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Finger prick:</strong> For blood-based tests (hormones, cholesterol, etc.)</li>
              <li><strong>Urine sample:</strong> For some STI tests and kidney function</li>
              <li><strong>Swab:</strong> For STI tests (oral, genital, rectal) and throat tests</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Collection kits include everything you need: lancets, collection cards/vials, prepaid return envelope, and step-by-step instructions. Both have video tutorials and phone support if you need help.
            </p>

            <h2 id="results" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Results & Support</h2>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Turnaround Time</h3>

            <p className="text-gray-700 mb-4">
              <strong>LetsGetChecked wins here:</strong>
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>LetsGetChecked:</strong> 2-5 business days after sample received</li>
              <li><strong>Everlywell:</strong> 5-7 business days after sample received</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Results Delivery</h3>

            <p className="text-gray-700 mb-4">
              <strong>Everlywell:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Results via web portal and app</li>
              <li>Clear visual display of results in range/out of range</li>
              <li>Educational content explaining what results mean</li>
              <li>Option to share results with your doctor</li>
              <li>No included consultation (optional add-on available)</li>
            </ul>

            <p className="text-gray-700 mb-4">
              <strong>LetsGetChecked:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Results via web portal and app</li>
              <li><strong>Free nurse consultation included</strong> for all results</li>
              <li>For positive STI results: option to prescribe treatment in some states</li>
              <li>More hand-holding through the results process</li>
            </ul>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">The Nurse Consultation Advantage</h4>
              <p className="text-gray-700">
                LetsGetChecked&apos;s included nurse call is genuinely valuable—especially for STI results or concerning findings. Having a medical professional walk you through results and next steps reduces anxiety and ensures appropriate follow-up. Everlywell offers this as an extra-cost add-on.
              </p>
            </div>

            <h2 id="verdict" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Final Recommendations</h2>

            <div className="bg-blue-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Choose Everlywell If:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You want to pick up a test at a local store today</li>
                <li>You&apos;re interested in food sensitivity testing</li>
                <li>You prefer a self-service approach without phone calls</li>
                <li>Budget is your priority and you can wait for sales</li>
                <li>You want the widest variety of hormone panels</li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                Best for: General wellness tracking, hormone curiosity, food sensitivity testing
              </p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 my-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Choose LetsGetChecked If:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You need STI testing with potential treatment</li>
                <li>You want faster turnaround on results</li>
                <li>You value a nurse consultation to discuss results</li>
                <li>You want fertility testing (especially male fertility)</li>
                <li>You&apos;re anxious about test results and want support</li>
              </ul>
              <p className="mt-4 text-gray-700 font-semibold">
                Best for: STI testing, fertility monitoring, anyone wanting clinical support
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Other Options Worth Considering</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Quest Direct / Labcorp OnDemand:</strong> Traditional labs with online ordering, venous blood draws, often cheaper for comprehensive panels</li>
              <li><strong>Ulta Lab Tests:</strong> Direct-access lab testing at very competitive prices</li>
              <li><strong>imaware:</strong> Strong for autoimmune and specific biomarker tracking</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Learn More About At-Home Lab Testing</h3>
            <p className="mb-6 text-blue-100">
              Discover what biomarkers to track and how to interpret your results.
            </p>
            <Link
              href="/guides/at-home-lab-testing-guide"
              className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Complete Lab Testing Guide
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 rounded-lg bg-gray-100 p-6">
            <h3 className="font-semibold text-gray-800 mb-2">Disclaimer</h3>
            <p className="text-sm text-gray-600">
              Pricing and test availability information is based on publicly available data as of January 2025 and may change. We are not affiliated with Everlywell or LetsGetChecked. At-home tests are not a replacement for regular medical care. Abnormal results should be discussed with your healthcare provider. These tests are for wellness purposes; diagnosis requires physician evaluation.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources & References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Everlywell official website: test offerings and pricing</li>
              <li>• LetsGetChecked official website: test offerings and pricing</li>
              <li>• CLIA & CAP laboratory certification standards</li>
              <li>• Journal of Clinical Microbiology: At-home testing validation studies</li>
            </ul>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
