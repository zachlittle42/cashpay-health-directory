import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'At-Home Lab Testing Guide: How It Works, Accuracy & What to Test (2024)',
  description: 'Complete guide to at-home blood tests. Learn how they work, accuracy vs traditional labs, what biomarkers to test, and which services to use.',
};

export default function LabTestingGuide() {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-gray-200 px-4 py-4">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="text-sm text-blue-600 hover:underline">
            ← Back to directory
          </Link>
        </div>
      </header>

      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              Guide
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            At-Home Lab Testing: Complete Guide
          </h1>
          <p className="text-xl text-gray-600">
            How to order blood tests without a doctor, what biomarkers matter, and which services deliver accurate results.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Last updated: December 2024 • 10 min read
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-12 prose prose-lg">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-blue-900 mt-0 mb-2">Quick Takeaway</h3>
          <p className="mb-0 text-gray-700">
            At-home lab testing lets you order comprehensive blood panels ($50-850) without seeing a doctor first. Tests use the same labs as hospitals (Quest, LabCorp) and are generally accurate for routine monitoring. Best for health optimization and tracking, not for diagnosing serious conditions.
          </p>
        </div>

        <h2>How At-Home Lab Testing Actually Works</h2>
        <p>
          There are two main models, and they&apos;re quite different:
        </p>

        <h3>Model 1: True At-Home (Finger Prick or Saliva)</h3>
        <p>
          Companies like <strong>Everlywell</strong> and <strong>LetsGetChecked</strong> ship you a kit. You collect a sample at home (finger prick blood or saliva), mail it back, and get results online in 5-10 days.
        </p>
        <p className="text-sm text-gray-600">
          <strong>Pros:</strong> Maximum convenience, no leaving house<br/>
          <strong>Cons:</strong> Limited biomarkers available, collection errors possible, slightly less accurate than venous blood draw
        </p>

        <h3>Model 2: Lab Order Services</h3>
        <p>
          Companies like <strong>Marek Health</strong>, <strong>Function Health</strong>, and <strong>InsideTracker</strong> order labs for you, then you go to Quest or LabCorp for a professional blood draw.
        </p>
        <p className="text-sm text-gray-600">
          <strong>Pros:</strong> Professional sample collection, hundreds of biomarkers available, same accuracy as doctor-ordered labs<br/>
          <strong>Cons:</strong> Still requires a lab visit, costs more
        </p>

        <h2>Are At-Home Tests Accurate?</h2>
        <p>
          The answer depends on which type you&apos;re using:
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
          <h4 className="mt-0 mb-4">Accuracy Breakdown</h4>

          <div className="space-y-4 text-sm">
            <div>
              <div className="font-semibold text-gray-900 mb-1">Professional Lab Draw (Quest/LabCorp)</div>
              <div className="text-green-600 font-bold mb-1">★★★★★ Highly Accurate</div>
              <p className="text-gray-700">Same labs hospitals use. Controlled environment, professional collection. Gold standard for comprehensive panels.</p>
            </div>

            <div>
              <div className="font-semibold text-gray-900 mb-1">Finger Prick (At Home)</div>
              <div className="text-yellow-600 font-bold mb-1">★★★★☆ Generally Accurate</div>
              <p className="text-gray-700">Good for routine screening. Can have variance due to collection technique. Best for trending over time rather than single values.</p>
            </div>

            <div>
              <div className="font-semibold text-gray-900 mb-1">Saliva/Urine (At Home)</div>
              <div className="text-orange-600 font-bold mb-1">★★★☆☆ Limited Use Cases</div>
              <p className="text-gray-700">Good for specific hormones or markers. Not suitable for comprehensive panels. More variability.</p>
            </div>
          </div>
        </div>

        <p>
          <strong>Bottom line:</strong> At-home tests using professional lab draws are just as accurate as doctor-ordered labs—because they&apos;re using the exact same labs. Finger-prick tests are good enough for routine monitoring but less reliable for critical medical decisions.
        </p>

        <h2>What Should You Actually Test?</h2>
        <p>
          This depends on your goals. Here&apos;s a framework:
        </p>

        <h3>Basic Health Baseline ($50-150)</h3>
        <p>If you&apos;re healthy and just want to establish a baseline:</p>
        <ul className="text-sm">
          <li>Complete Blood Count (CBC)</li>
          <li>Comprehensive Metabolic Panel (CMP)</li>
          <li>Lipid panel (cholesterol)</li>
          <li>HbA1c (blood sugar)</li>
          <li>TSH (thyroid)</li>
          <li>Vitamin D</li>
        </ul>

        <h3>Hormone Optimization ($200-450)</h3>
        <p>For those interested in fitness, energy, or longevity:</p>
        <ul className="text-sm">
          <li>Everything in Basic, plus:</li>
          <li>Testosterone (total & free)</li>
          <li>Estradiol</li>
          <li>DHEA-S</li>
          <li>Cortisol</li>
          <li>IGF-1</li>
          <li>SHBG</li>
        </ul>

        <h3>Comprehensive Longevity Panel ($450-850)</h3>
        <p>For serious health optimizers:</p>
        <ul className="text-sm">
          <li>Everything above, plus:</li>
          <li>Advanced lipids (ApoB, Lp(a), particle size)</li>
          <li>Inflammatory markers (CRP, homocysteine)</li>
          <li>Metabolic markers (insulin, HOMA-IR)</li>
          <li>Liver enzymes (full panel)</li>
          <li>Kidney function</li>
          <li>Nutrient levels (B12, folate, magnesium, iron)</li>
          <li>Cancer markers (optional)</li>
        </ul>

        <h2>When to Use At-Home vs. Doctor</h2>

        <div className="grid gap-6 md:grid-cols-2 my-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-green-800 mt-0 mb-4">Good Use Cases for At-Home</h3>
            <ul className="text-sm space-y-2 mb-0">
              <li>✓ Annual wellness check-ins</li>
              <li>✓ Tracking metrics over time</li>
              <li>✓ Pre-optimizing before doctor visit</li>
              <li>✓ Hormone monitoring while on TRT</li>
              <li>✓ Validating diet/exercise changes</li>
              <li>✓ Avoiding insurance paperwork</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-yellow-800 mt-0 mb-4">When to See a Doctor Instead</h3>
            <ul className="text-sm space-y-2 mb-0">
              <li>⚠️ You have symptoms of serious illness</li>
              <li>⚠️ Diagnosing a specific condition</li>
              <li>⚠️ Results show critical abnormalities</li>
              <li>⚠️ You need treatment or prescriptions</li>
              <li>⚠️ Insurance will cover the tests</li>
            </ul>
          </div>
        </div>

        <h2>How to Read Your Results</h2>
        <p>
          Most services give you results with reference ranges, but understanding what they mean is different:
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6">
          <h4 className="text-amber-900 mt-0 mb-2">Understanding &quot;Normal&quot; vs &quot;Optimal&quot;</h4>
          <p className="text-sm text-amber-800">
            Labs show &quot;reference ranges&quot; (usually 95% of population). Just because you&apos;re &quot;in range&quot; doesn&apos;t mean you&apos;re optimized. For example:
          </p>
          <ul className="text-sm text-amber-800 mb-0 mt-2">
            <li>• <strong>Testosterone:</strong> &quot;Normal&quot; might be 300-900 ng/dL, but you might feel best at 600-700</li>
            <li>• <strong>Vitamin D:</strong> &quot;Normal&quot; is 30+ ng/mL, but optimal is often 40-60</li>
            <li>• <strong>Thyroid (TSH):</strong> &quot;Normal&quot; is 0.4-4.0, but many feel best at 1.0-2.0</li>
          </ul>
        </div>

        <h2>Comparing Popular Services</h2>

        <div className="bg-white border border-gray-300 rounded-lg overflow-hidden my-6">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Service</th>
                <th className="px-4 py-3 text-left font-semibold">Cost</th>
                <th className="px-4 py-3 text-left font-semibold">Collection</th>
                <th className="px-4 py-3 text-left font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 font-medium">Marek Health</td>
                <td className="px-4 py-3">$250-850</td>
                <td className="px-4 py-3">Lab visit</td>
                <td className="px-4 py-3">Physician consultation included</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Function Health</td>
                <td className="px-4 py-3">$365/yr</td>
                <td className="px-4 py-3">Lab visit</td>
                <td className="px-4 py-3">100+ biomarkers, 2x/year</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">InsideTracker</td>
                <td className="px-4 py-3">$249-589</td>
                <td className="px-4 py-3">Lab visit</td>
                <td className="px-4 py-3">Athletes, AI recommendations</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Everlywell</td>
                <td className="px-4 py-3">$49-199</td>
                <td className="px-4 py-3">Home finger prick</td>
                <td className="px-4 py-3">Specific concerns, budget</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">LetsGetChecked</td>
                <td className="px-4 py-3">$69-149</td>
                <td className="px-4 py-3">Home finger prick</td>
                <td className="px-4 py-3">Nurse consultation included</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Common Mistakes People Make</h2>
        <ul>
          <li><strong>Testing too frequently</strong> - Most markers don&apos;t change meaningfully week-to-week. Test quarterly at most.</li>
          <li><strong>Not fasting properly</strong> - Many tests require 8-12 hour fasting. Follow instructions exactly.</li>
          <li><strong>Testing at different times of day</strong> - Hormones fluctuate. Test at same time for accurate trending.</li>
          <li><strong>Changing too many things at once</strong> - If you test, change diet AND supplements AND sleep, you won&apos;t know what worked.</li>
          <li><strong>Ignoring critical values</strong> - If something is way out of range, see a doctor. Don&apos;t try to self-treat.</li>
        </ul>

        <h2>Who Should Use At-Home Testing?</h2>

        <h3>Great Candidates:</h3>
        <ul>
          <li>Health optimizers tracking metrics over time</li>
          <li>Athletes monitoring training adaptations</li>
          <li>People on TRT or hormone therapy needing regular monitoring</li>
          <li>Those without insurance or high deductibles</li>
          <li>Busy professionals who can&apos;t easily see doctors</li>
        </ul>

        <h3>Should See a Doctor Instead If:</h3>
        <ul>
          <li>You have symptoms of illness</li>
          <li>You need a diagnosis for treatment</li>
          <li>Your insurance would cover the tests</li>
          <li>You need prescriptions based on results</li>
        </ul>

        <h2>The Bottom Line</h2>
        <p>
          At-home lab testing has democratized access to health data. You no longer need a doctor&apos;s permission to see what&apos;s going on inside your body. When using reputable services that work with Quest or LabCorp, accuracy is excellent.
        </p>
        <p>
          <strong>Best use:</strong> Annual check-ins, tracking optimization efforts, or monitoring ongoing treatments. Not a replacement for diagnostic medicine when you&apos;re actually sick.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-8 my-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Compare Lab Testing Services</h3>
          <p className="text-gray-600 mb-6">
            See pricing, biomarkers included, and physician consultation options.
          </p>
          <Link
            href="/labs"
            className="inline-block rounded-lg bg-blue-600 px-8 py-4 text-lg font-medium text-white hover:bg-blue-700"
          >
            View Lab Testing Providers →
          </Link>
        </div>

        <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 my-8">
          <h4 className="text-gray-900 font-bold mb-2">Medical Disclaimer</h4>
          <p className="text-sm text-gray-700 mb-0">
            Lab tests should be interpreted by qualified healthcare providers. This guide is educational only and does not replace professional medical advice.
          </p>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-12">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <a href="https://www.getlabtest.com/news/post/how-accurate-are-at-home-blood-tests-experts-weigh-in" target="_blank" rel="noopener" className="text-blue-600 hover:underline">How Accurate Are At-Home Blood Tests? Experts Weigh In</a></li>
            <li>• <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11663041/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Cost Comparisons: Physician-Ordered vs Direct Lab Testing</a></li>
          </ul>
        </div>
      </article>

      <footer className="border-t border-gray-200 px-4 py-8">
        <div className="mx-auto max-w-4xl text-center">
          <Link href="/guides" className="text-blue-600 hover:underline text-sm">
            ← Back to all guides
          </Link>
        </div>
      </footer>
    </main>
  );
}
