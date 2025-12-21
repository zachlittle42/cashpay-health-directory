import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DEXA Scan Guide: What It Measures, Cost & Why You Need One (2024)',
  description: 'Complete guide to DEXA body composition scans. Learn what DEXA measures, how it works, costs, and why it beats BMI for tracking fitness progress.',
};

export default function DexaScanGuide() {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-gray-200 px-4 py-4">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="text-sm text-blue-600 hover:underline">
            ← Back to directory
          </Link>
        </div>
      </header>

      <section className="bg-gradient-to-b from-green-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              Guide
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            DEXA Scan: The Complete Guide
          </h1>
          <p className="text-xl text-gray-600">
            Why body fat percentage matters more than weight, what DEXA actually measures, and how to use it to track real progress.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Last updated: December 2024 • 8 min read
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-12 prose prose-lg">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-green-900 mt-0 mb-2">Quick Takeaway</h3>
          <p className="mb-0 text-gray-700">
            DEXA scans use low-dose X-rays to precisely measure body fat, lean muscle, and bone density by region. It&apos;s the gold standard for body composition (±1% accuracy vs ±3-5% for other methods). Costs $40-150 per scan and takes 10 minutes. Essential for anyone serious about fitness or body recomposition.
          </p>
        </div>

        <h2>What Is a DEXA Scan?</h2>
        <p>
          DEXA (Dual-Energy X-ray Absorptiometry) was originally developed to measure bone density for osteoporosis diagnosis. But the same technology that sees through bone also precisely measures body composition—making it the gold standard for tracking fat loss and muscle gain.
        </p>
        <p>
          Think of it as an X-ray that can distinguish between bone, muscle, and fat tissue in every region of your body.
        </p>

        <h2>What DEXA Actually Measures</h2>

        <div className="bg-white border border-gray-300 rounded-lg p-6 my-6">
          <h4 className="mt-0 mb-4 text-gray-900">Your Complete Body Composition Report</h4>

          <div className="space-y-4 text-sm">
            <div>
              <div className="font-semibold text-blue-700 mb-1">1. Total Body Fat Percentage</div>
              <p className="text-gray-700">Overall % of your weight that&apos;s fat tissue. Accurate to within ±1%.</p>
            </div>

            <div>
              <div className="font-semibold text-blue-700 mb-1">2. Lean Mass (Muscle)</div>
              <p className="text-gray-700">Skeletal muscle, organs, water. Know exactly how much muscle you&apos;re building or losing.</p>
            </div>

            <div>
              <div className="font-semibold text-blue-700 mb-1">3. Bone Mineral Density</div>
              <p className="text-gray-700">Assess osteoporosis risk and track bone health over time.</p>
            </div>

            <div>
              <div className="font-semibold text-blue-700 mb-1">4. Visceral Fat</div>
              <p className="text-gray-700">The dangerous fat around your organs. High correlation with disease risk.</p>
            </div>

            <div>
              <div className="font-semibold text-blue-700 mb-1">5. Regional Breakdown</div>
              <p className="text-gray-700">Separate measurements for arms, legs, trunk, android (waist), gynoid (hips). See exactly where you store fat.</p>
            </div>

            <div>
              <div className="font-semibold text-blue-700 mb-1">6. Left vs Right Comparison</div>
              <p className="text-gray-700">Identify muscle imbalances between limbs.</p>
            </div>
          </div>
        </div>

        <h2>Why DEXA Beats Everything Else</h2>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
          <h4 className="mt-0 mb-4">Accuracy Comparison</h4>
          <ul className="space-y-3 text-sm mb-0">
            <li>
              <div className="font-semibold text-gray-900">DEXA Scan</div>
              <div className="text-green-600 font-bold">±1% accuracy</div>
              <div className="text-gray-600">Gold standard. Repeatable, precise, regional data.</div>
            </li>
            <li>
              <div className="font-semibold text-gray-900">Hydrostatic (Underwater) Weighing</div>
              <div className="text-blue-600 font-bold">±2-3% accuracy</div>
              <div className="text-gray-600">Also very accurate but inconvenient and no regional data.</div>
            </li>
            <li>
              <div className="font-semibold text-gray-900">BodPod (Air Displacement)</div>
              <div className="text-yellow-600 font-bold">±3-4% accuracy</div>
              <div className="text-gray-600">Good but less precise. No regional breakdown.</div>
            </li>
            <li>
              <div className="font-semibold text-gray-900">Bioelectrical Impedance (Scale)</div>
              <div className="text-orange-600 font-bold">±4-8% accuracy</div>
              <div className="text-gray-600">Highly variable. Affected by hydration, food, exercise.</div>
            </li>
            <li>
              <div className="font-semibold text-gray-900">BMI</div>
              <div className="text-red-600 font-bold">Not accurate for individuals</div>
              <div className="text-gray-600">Population tool only. Can&apos;t distinguish muscle from fat.</div>
            </li>
          </ul>
        </div>

        <h2>Who Should Get a DEXA Scan?</h2>

        <h3>Essential For:</h3>
        <ul>
          <li><strong>Serious fitness enthusiasts</strong> - Track if you&apos;re actually building muscle or just gaining weight</li>
          <li><strong>Anyone losing weight</strong> - Ensure you&apos;re losing fat, not muscle</li>
          <li><strong>Athletes</strong> - Optimize body composition for performance</li>
          <li><strong>People on GLP-1s or TRT</strong> - Monitor muscle preservation during weight loss</li>
          <li><strong>Post-menopausal women</strong> - Bone density screening for osteoporosis</li>
        </ul>

        <h3>Helpful But Optional For:</h3>
        <ul>
          <li>Anyone curious about their real body composition</li>
          <li>Those frustrated that scale weight doesn&apos;t reflect how they look/feel</li>
          <li>People wanting baseline data before making changes</li>
        </ul>

        <h2>What Your Results Tell You</h2>
        <p>
          Here&apos;s how to interpret your scan:
        </p>

        <h3>Body Fat Percentage Ranges</h3>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6 text-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <div className="font-semibold text-gray-900 mb-2">Men</div>
              <ul className="text-gray-700 space-y-1">
                <li>• 2-5%: Essential fat (athletes only)</li>
                <li>• 6-13%: Athletic</li>
                <li>• 14-17%: Fitness</li>
                <li>• 18-24%: Acceptable</li>
                <li>• 25%+: Elevated health risk</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-gray-900 mb-2">Women</div>
              <ul className="text-gray-700 space-y-1">
                <li>• 10-13%: Essential fat (athletes only)</li>
                <li>• 14-20%: Athletic</li>
                <li>• 21-24%: Fitness</li>
                <li>• 25-31%: Acceptable</li>
                <li>• 32%+: Elevated health risk</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>Visceral Fat: The One That Matters Most</h3>
        <p>
          Visceral fat (fat around organs) is far more dangerous than subcutaneous fat (under skin). DEXA quantifies this separately.
        </p>
        <ul>
          <li><strong>0-100 cm²:</strong> Low risk</li>
          <li><strong>100-160 cm²:</strong> Moderate risk—focus on reducing</li>
          <li><strong>160+ cm²:</strong> High risk for metabolic disease, cardiovascular issues</li>
        </ul>

        <h2>How Often Should You Scan?</h2>
        <p>
          This depends on your goals and what you&apos;re tracking:
        </p>
        <ul>
          <li><strong>Quarterly (every 3 months):</strong> Ideal for active body recomposition goals</li>
          <li><strong>Bi-annually:</strong> Good for general tracking if maintaining weight</li>
          <li><strong>Monthly:</strong> Usually overkill—body comp doesn&apos;t change that fast</li>
        </ul>

        <h2>Cost & Where to Get Scanned</h2>

        <div className="bg-white border border-gray-300 rounded-lg p-6 my-6">
          <h4 className="mt-0 mb-4 text-gray-900">Pricing Overview (2024)</h4>
          <div className="space-y-3 text-sm">
            <div>
              <div className="font-semibold">BodySpec (Mobile Vans)</div>
              <div className="text-green-600 font-bold mb-1">$40-45/scan</div>
              <div className="text-gray-600">Best value. Available in 100+ locations across major cities.</div>
            </div>
            <div>
              <div className="font-semibold">DexaFit (Brick & Mortar)</div>
              <div className="text-blue-600 font-bold mb-1">$100-150/scan</div>
              <div className="text-gray-600">More locations. Often includes VO2 max and RMR testing options.</div>
            </div>
            <div>
              <div className="font-semibold">Hospital/Doctor Office</div>
              <div className="text-orange-600 font-bold mb-1">$200-400/scan</div>
              <div className="text-gray-600">Usually requires doctor referral. May be covered by insurance for bone density only.</div>
            </div>
          </div>
        </div>

        <h2>How to Prepare for Your Scan</h2>
        <ul>
          <li>Wear comfortable clothing without metal (zippers, bras with underwire, etc.)</li>
          <li>Remove all jewelry and accessories</li>
          <li>Hydrate normally—no special preparation needed</li>
          <li>Fast for 2-3 hours before (optional, but reduces variability)</li>
          <li>Avoid heavy workouts same-day (can affect hydration/glycogen)</li>
          <li>Scan at same time of day for consistent tracking</li>
        </ul>

        <h2>Real-World Use Cases</h2>

        <h3>Example 1: Weight Loss Done Right</h3>
        <p className="text-sm text-gray-700">
          Sarah lost 30 lbs in 6 months. Her scale said success, but her DEXA revealed she lost 25 lbs of fat and 5 lbs of muscle. Adjusted to add more protein and strength training. Next scan 3 months later: 15 lbs fat lost, 2 lbs muscle gained. Real progress.
        </p>

        <h3>Example 2: Recomposition</h3>
        <p className="text-sm text-gray-700">
          Mike&apos;s scale weight stayed the same for 4 months (frustrating!). His DEXA showed he lost 8 lbs of fat and gained 8 lbs of muscle. Same weight, completely different body. This is why the scale lies.
        </p>

        <h3>Example 3: GLP-1 Monitoring</h3>
        <p className="text-sm text-gray-700">
          On semaglutide, Jennifer lost 40 lbs. Without adequate protein, her DEXA showed 30 lbs fat + 10 lbs muscle lost. She increased protein to 100g/day and added resistance training. Next 20 lbs lost: 19 lbs fat, 1 lb muscle. Much better ratio.
        </p>

        <h2>Why BMI Is Useless (And DEXA Isn&apos;t)</h2>
        <p>
          BMI (Body Mass Index) is a ratio of height to weight. It can&apos;t tell the difference between a bodybuilder and someone with high body fat at the same weight. Examples:
        </p>
        <ul>
          <li>6&apos;0&quot; male at 200 lbs = BMI 27 (&quot;overweight&quot;) - could be 12% body fat athlete or 30% sedentary</li>
          <li>5&apos;4&quot; woman at 140 lbs = BMI 24 (&quot;normal&quot;) - could be 35% body fat or 20% fitness enthusiast</li>
        </ul>
        <p>
          <strong>DEXA solves this</strong> by showing your actual tissue composition. Two people with identical BMI can have 15%+ difference in body fat percentage.
        </p>

        <h2>The Bottom Line</h2>
        <p>
          At $40-45/scan, DEXA is the single best investment for anyone serious about fitness or health optimization. It&apos;s the only way to know if your diet and training are actually working, or if you&apos;re just spinning your wheels.
        </p>
        <p>
          <strong>Recommended frequency:</strong> Get a baseline scan, then retest every 3 months if actively trying to change body composition. Once you&apos;re maintaining, twice a year is enough.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
          <h4 className="text-blue-900 mt-0 mb-2">Pro Tip</h4>
          <p className="text-sm text-blue-800 mb-0">
            Scan at the same time of day, similar hydration state, and avoid scanning right after a heavy workout. Consistency in conditions ensures you&apos;re tracking real changes, not just day-to-day fluctuations.
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 my-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Find DEXA Scans Near You</h3>
          <p className="text-gray-600 mb-6">
            Compare BodySpec, DexaFit, and other providers. Filter by your city.
          </p>
          <Link
            href="/dexa"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-medium text-white hover:bg-green-700"
          >
            View DEXA Providers →
          </Link>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-12">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <a href="https://health.ucdavis.edu/sports-medicine/resources/dxa-info" target="_blank" rel="noopener" className="text-blue-600 hover:underline">UC Davis: DXA Body Composition Analysis</a></li>
            <li>• <a href="https://my.clevelandclinic.org/health/diagnostics/10683-dexa-dxa-scan-bone-density-test" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Cleveland Clinic: DEXA Scan Overview</a></li>
            <li>• <a href="https://radiology.ucsf.edu/blog/dxadexa-beats-bmi-using-x-ray-exam-measure-body-composition-fat-loss" target="_blank" rel="noopener" className="text-blue-600 hover:underline">UCSF Radiology: Why DEXA Beats BMI</a></li>
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
