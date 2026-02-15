import Link from 'next/link';
import type { Metadata } from 'next';
import EmailCaptureCard from '@/components/forms/EmailCaptureCard';

export const metadata: Metadata = {
  title: 'GLP-1 for Weight Loss: Complete Guide (2024) | Semaglutide & Tirzepatide',
  description: 'Everything you need to know about GLP-1 medications like Ozempic, Wegovy, and Mounjaro for weight loss. How they work, results, side effects, and costs.',
};

export default function GLP1Guide() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'GLP-1 for Weight Loss: Complete Guide to Semaglutide & Tirzepatide',
    description: 'Comprehensive guide to GLP-1 medications for weight loss including how they work, expected results, side effects, costs, and provider comparisons.',
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
    datePublished: '2024-12-01',
    dateModified: '2024-12-21',
    mainEntityOfPage: 'https://vitalityscout.com/guides/glp1-weight-loss-complete-guide',
    articleSection: 'Health Guides',
    keywords: ['GLP-1', 'semaglutide', 'tirzepatide', 'Ozempic', 'Wegovy', 'weight loss', 'telehealth']
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Header */}
      <header className="border-b border-gray-200 px-4 py-4">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="text-sm text-blue-600 hover:underline">
            ← Back to directory
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4">
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              Guide
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            GLP-1 for Weight Loss: The Complete Guide
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about semaglutide (Ozempic, Wegovy) and tirzepatide (Mounjaro, Zepbound) for weight management.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Last updated: December 2024 • 12 min read
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="mx-auto max-w-4xl px-4 py-12 prose prose-lg">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-blue-900 mt-0 mb-2">Quick Takeaway</h3>
          <p className="mb-0 text-gray-700">
            GLP-1 medications can help you lose 10-20% of your body weight over 12-18 months by reducing appetite and slowing digestion. They&apos;re effective but come with side effects (mostly GI issues) and require ongoing use to maintain results. Cash-pay options start around $199/month for compounded versions.
          </p>
        </div>

        <h2>What Are GLP-1 Medications?</h2>
        <p>
          GLP-1 (glucagon-like peptide-1) medications are a class of drugs originally developed for type 2 diabetes that have proven remarkably effective for weight loss. You might know them by brand names like <strong>Ozempic</strong>, <strong>Wegovy</strong>, <strong>Mounjaro</strong>, or <strong>Zepbound</strong>.
        </p>
        <p>
          Here&apos;s the simple version: GLP-1 is a hormone your gut naturally produces after eating. It tells your brain "I&apos;m full" and slows down digestion. These medications are synthetic versions of that hormone, but they stick around much longer—giving you that "full" feeling for days instead of minutes.
        </p>

        <h2>How Do They Work?</h2>
        <p>
          GLP-1 medications work through multiple mechanisms:
        </p>
        <ul>
          <li><strong>Reduces appetite</strong> - Acts on brain regions that control hunger, making you feel full with less food</li>
          <li><strong>Slows stomach emptying</strong> - Food stays in your stomach longer, extending that satisfied feeling</li>
          <li><strong>Regulates blood sugar</strong> - Increases insulin when needed, decreases glucagon (a hormone that raises blood sugar)</li>
          <li><strong>Decreases food noise</strong> - Many users report thinking about food less often throughout the day</li>
        </ul>

        <h2>Semaglutide vs. Tirzepatide: What&apos;s the Difference?</h2>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
          <h3 className="mt-0 mb-4">Quick Comparison</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="text-blue-700 mb-2">Semaglutide (Ozempic, Wegovy)</h4>
              <ul className="text-sm space-y-1 mb-0">
                <li>• GLP-1 agonist (single mechanism)</li>
                <li>• Average 12-15% weight loss</li>
                <li>• Once-weekly injection</li>
                <li>• Approved 2021 for weight loss</li>
                <li>• Ozempic (diabetes), Wegovy (weight loss)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-purple-700 mb-2">Tirzepatide (Mounjaro, Zepbound)</h4>
              <ul className="text-sm space-y-1 mb-0">
                <li>• Dual GIP/GLP-1 agonist</li>
                <li>• Average 15-20% weight loss</li>
                <li>• Once-weekly injection</li>
                <li>• Approved 2023 for weight loss</li>
                <li>• Generally more effective, pricier</li>
              </ul>
            </div>
          </div>
        </div>

        <p>
          <strong>Bottom line:</strong> Tirzepatide works on two hormone pathways instead of one, leading to slightly better weight loss results (about 3-5% more on average). Both are weekly injections you do yourself at home with a small pen needle.
        </p>

        <h2>How Much Weight Will I Lose?</h2>
        <p>
          Clinical trials show impressive results, but real-world outcomes vary:
        </p>
        <ul>
          <li><strong>Semaglutide 2.4mg (Wegovy):</strong> Average 15-17% body weight loss over 68 weeks. Some participants lost over 20%.</li>
          <li><strong>Tirzepatide (Zepbound):</strong> Average 16-22% body weight loss over 72 weeks, with some reaching 25%+.</li>
          <li><strong>Real-world data:</strong> Actual results tend to be somewhat lower—expect 10-15% weight loss as more realistic.</li>
        </ul>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6">
          <h4 className="text-amber-900 mt-0 mb-2">Important Reality Check</h4>
          <p className="text-sm text-amber-800 mb-0">
            These medications work best combined with lifestyle changes. They make it <em>easier</em> to eat less and stick to healthy habits, but they&apos;re not magic. Most people regain weight if they stop the medication without building sustainable habits.
          </p>
        </div>

        <h2>Common Side Effects</h2>
        <p>
          Let&apos;s be honest: most people experience side effects, especially in the first few weeks. The good news is they usually improve over time.
        </p>

        <h3>Very Common (40-65% of users):</h3>
        <ul>
          <li><strong>Nausea</strong> - Reported by 20-44% depending on dose and medication</li>
          <li><strong>Diarrhea</strong> - Affects 5-12% of users</li>
          <li><strong>Constipation</strong> - Common as digestion slows</li>
          <li><strong>Vomiting</strong> - Occurs in 3-12% of users</li>
          <li><strong>Stomach pain/bloating</strong> - Especially after eating too much</li>
        </ul>

        <h3>Less Common but Important:</h3>
        <ul>
          <li>Fatigue and weakness (often from eating less)</li>
          <li>Headaches</li>
          <li>Dizziness</li>
          <li>Acid reflux/heartburn</li>
        </ul>

        <h3>Rare but Serious:</h3>
        <ul>
          <li>Gallbladder problems (particularly gallstones)</li>
          <li>Pancreatitis (inflammation of pancreas)</li>
          <li>Thyroid tumors (seen in animal studies, unclear in humans)</li>
        </ul>

        <p>
          <strong>About 10% of people stop taking GLP-1s due to side effects</strong>, mostly GI issues. The key is starting at a low dose and increasing gradually.
        </p>

        <h2>Brand-Name vs. Compounded: What&apos;s the Difference?</h2>
        <p>
          This is crucial to understand because it affects both price and what you&apos;re actually getting:
        </p>

        <h3>Brand-Name (FDA-Approved)</h3>
        <ul>
          <li><strong>Ozempic, Wegovy, Mounjaro, Zepbound</strong> - Made by Novo Nordisk or Eli Lilly</li>
          <li>FDA-approved with rigorous testing and quality control</li>
          <li>Exact dosing, consistent quality batch-to-batch</li>
          <li>Cost: $1,000-1,800/month without insurance</li>
        </ul>

        <h3>Compounded (Not FDA-Approved)</h3>
        <ul>
          <li>Made by <strong>compounding pharmacies</strong> - custom-mixed medications</li>
          <li><strong>Not FDA-approved</strong> - No safety/effectiveness review by FDA</li>
          <li>May use semaglutide salts instead of base semaglutide</li>
          <li>Quality varies by pharmacy</li>
          <li>Cost: $99-299/month (much cheaper!)</li>
        </ul>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
          <h4 className="text-red-900 mt-0 mb-2">⚠️ Important Update (February 2025)</h4>
          <p className="text-sm text-red-800 mb-2">
            The FDA declared the semaglutide shortage over in February 2025. This means <strong>compounded semaglutide is now technically illegal</strong> to manufacture, with rare exceptions. Many telehealth companies may need to stop offering compounded versions.
          </p>
          <p className="text-sm text-red-800 mb-0">
            Check with providers about availability and whether they&apos;re transitioning to brand-name or other alternatives.
          </p>
        </div>

        <h2>Who Should (and Shouldn&apos;t) Take GLP-1s?</h2>

        <h3>Good Candidates:</h3>
        <ul>
          <li>BMI ≥30 (obese), or</li>
          <li>BMI ≥27 (overweight) with weight-related health conditions</li>
          <li>Have struggled with diet and exercise alone</li>
          <li>Can commit to weekly injections</li>
          <li>Can afford ongoing costs (these aren&apos;t short-term)</li>
        </ul>

        <h3>Not Recommended For:</h3>
        <ul>
          <li>Personal or family history of medullary thyroid cancer</li>
          <li>Multiple Endocrine Neoplasia syndrome type 2</li>
          <li>Pregnant or planning pregnancy</li>
          <li>History of pancreatitis</li>
          <li>Severe gastroparesis (stomach emptying issues)</li>
        </ul>

        <h2>How Much Does It Cost?</h2>
        <p>
          This is where cash-pay options shine. Without insurance, here&apos;s what you&apos;re looking at:
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
          <h4 className="mt-0 mb-4">Pricing Breakdown (December 2024)</h4>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-semibold">Brand-Name (Retail)</span>
                <span className="text-red-600 font-bold">$1,000-1,800/mo</span>
              </div>
              <p className="text-sm text-gray-600">Wegovy, Ozempic, Mounjaro without insurance</p>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="font-semibold">Brand via NovoCare (Ro)</span>
                <span className="text-orange-600 font-bold">$499/mo</span>
              </div>
              <p className="text-sm text-gray-600">Ro&apos;s partnership reduces brand-name cost significantly</p>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="font-semibold">Compounded Semaglutide</span>
                <span className="text-green-600 font-bold">$149-299/mo</span>
              </div>
              <p className="text-sm text-gray-600">Hims/Hers, Noom Med, Found (availability uncertain post-shortage)</p>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="font-semibold">With Insurance Coverage</span>
                <span className="text-blue-600 font-bold">$25-500/mo</span>
              </div>
              <p className="text-sm text-gray-600">Varies widely by plan; many don&apos;t cover weight loss</p>
            </div>
          </div>
        </div>

        <h2>What to Expect: The Timeline</h2>

        <div className="space-y-4 my-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">Weeks 1-4: Adjustment Phase</h4>
            <p className="text-gray-700">
              Starting at a low dose (0.25mg for semaglutide). Expect some nausea, reduced appetite. Weight loss begins but is modest—typically 2-5 lbs in the first month.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">Months 2-3: Ramping Up</h4>
            <p className="text-gray-700">
              Dose increases gradually. Side effects may return with each increase but usually milder. Noticeable appetite suppression. Average 1-2 lbs/week weight loss.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">Months 4-12: Peak Effect</h4>
            <p className="text-gray-700">
              Reach target dose (2.4mg semaglutide or 10-15mg tirzepatide). Maximum appetite suppression. This is when most weight comes off. Side effects usually stabilized.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">12-18 Months: Plateau & Maintenance</h4>
            <p className="text-gray-700">
              Weight loss slows or plateaus. Most people reach their maximum weight loss by 18 months. Decision point: continue for maintenance or attempt to stop?
            </p>
          </div>
        </div>

        <h2>The Biggest Questions People Have</h2>

        <h3>Do I have to take it forever?</h3>
        <p>
          That&apos;s the million-dollar question. Clinical data shows most people regain 2/3 of lost weight within a year of stopping. Think of it like treating high blood pressure—many people need ongoing treatment.
        </p>
        <p>
          <strong>The strategy:</strong> Use GLP-1s to lose weight while building sustainable habits (protein-rich diet, strength training, stress management). Some can then transition to maintenance doses or stop entirely, but there&apos;s no guarantee.
        </p>

        <h3>Will insurance cover it?</h3>
        <p>
          Maybe. Insurance coverage for weight loss specifically is spotty. <strong>Ozempic</strong> is only FDA-approved for diabetes (but prescribed off-label for weight loss). <strong>Wegovy and Zepbound</strong> are approved for weight loss but many insurers don&apos;t cover them or require prior authorization.
        </p>
        <p>
          This is why cash-pay telehealth options have exploded—predictable $199-499/month is often easier than fighting insurance.
        </p>

        <h3>Are compounded versions safe?</h3>
        <p>
          Compounded medications haven&apos;t gone through FDA approval, which means there&apos;s less oversight. However, reputable compounding pharmacies still follow safety standards. The main concerns:
        </p>
        <ul>
          <li>Dosing consistency may vary slightly batch-to-batch</li>
          <li>Some use semaglutide salts instead of base semaglutide (different formulation)</li>
          <li>No long-term safety data for compounded versions specifically</li>
          <li>Legal availability is now uncertain after shortage ended</li>
        </ul>

        <h3>What happens if I eat too much on GLP-1s?</h3>
        <p>
          You&apos;ll regret it. Because these medications slow stomach emptying, eating too much leads to intense nausea, vomiting, and discomfort that can last hours. Most people quickly learn their new, much smaller capacity.
        </p>

        <h2>Comparing Your Options</h2>
        <p>
          If you&apos;re considering GLP-1s for weight loss, here are your main paths:
        </p>

        <div className="bg-white border border-gray-300 rounded-lg overflow-hidden my-6">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Option</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Cost</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3">Insurance + Doctor</td>
                <td className="px-4 py-3 text-green-600 font-medium">$25-200/mo</td>
                <td className="px-4 py-3">If you have good coverage</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Telehealth (Compound)</td>
                <td className="px-4 py-3 text-blue-600 font-medium">$199-299/mo</td>
                <td className="px-4 py-3">Budget-conscious, fast access</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Telehealth (Brand via Ro)</td>
                <td className="px-4 py-3 text-orange-600 font-medium">$499/mo</td>
                <td className="px-4 py-3">Want brand without insurance</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Retail Pharmacy</td>
                <td className="px-4 py-3 text-red-600 font-medium">$1,000-1,800/mo</td>
                <td className="px-4 py-3">Full price, no insurance</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>Tips for Success</h2>
        <ol>
          <li><strong>Start low, go slow</strong> - Don&apos;t rush dose increases even if you&apos;re eager for faster results</li>
          <li><strong>Prioritize protein</strong> - With reduced appetite, hitting 80-100g protein/day prevents muscle loss</li>
          <li><strong>Stay hydrated</strong> - Easy to forget to drink when not hungry</li>
          <li><strong>Lift weights</strong> - Preserve muscle mass during rapid weight loss</li>
          <li><strong>Plan for maintenance</strong> - Build habits now for when/if you stop the medication</li>
        </ol>

        <h2>Common Mistakes to Avoid</h2>
        <ul>
          <li><strong>Eating too much too fast</strong> - Learn your new capacity; smaller plates help</li>
          <li><strong>Not eating enough protein</strong> - Muscle loss accelerates without adequate protein</li>
          <li><strong>Stopping abruptly</strong> - Appetite roars back; taper if possible</li>
          <li><strong>Ignoring side effects</strong> - Report severe/persistent issues to your provider</li>
          <li><strong>Skipping strength training</strong> - Cardio is great but weights preserve muscle</li>
        </ul>

        <h2>The Bottom Line</h2>
        <p>
          GLP-1 medications are genuinely effective weight-loss tools—the data is clear on that. They work by making it physically easier to eat less, which is why they succeed where willpower alone often fails.
        </p>
        <p>
          But they&apos;re not without tradeoffs: weekly injections, significant side effects for many people, high ongoing costs, and weight regain if you stop. They&apos;re a tool, not a cure.
        </p>
        <p>
          <strong>Best candidates:</strong> People with 40+ lbs to lose who have tried traditional methods, can afford ongoing treatment, and are committed to building sustainable habits alongside medication.
        </p>

        {/* CTA to Providers */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-8 my-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Find GLP-1 Treatment?</h3>
          <p className="text-gray-600 mb-6">
            Choose telehealth convenience or local in-person care for your weight loss journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/glp1"
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 transition-colors"
            >
              Telehealth GLP-1 Providers →
            </Link>
            <Link
              href="/weight-loss"
              className="inline-block rounded-lg border-2 border-blue-600 px-6 py-3 font-medium text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Local Weight Loss Clinics →
            </Link>
          </div>
        </div>

        {/* Related Resources */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
          <h4 className="font-bold text-gray-900 mb-4">Related Resources</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/compounded-semaglutide" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-colors">
              <div className="font-medium text-gray-900 mb-1">Compounded Semaglutide Guide</div>
              <div className="text-sm text-gray-600">FDA updates, costs, and what&apos;s legal in 2025</div>
            </Link>
            <Link href="/guides/hims-vs-ro-vs-calibrate" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-colors">
              <div className="font-medium text-gray-900 mb-1">Hims vs Ro vs Calibrate</div>
              <div className="text-sm text-gray-600">Compare the top telehealth weight loss programs</div>
            </Link>
            <Link href="/guides/trt-testosterone-therapy" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-colors">
              <div className="font-medium text-gray-900 mb-1">TRT Guide for Men</div>
              <div className="text-sm text-gray-600">Preserve muscle during weight loss with optimized testosterone</div>
            </Link>
            <Link href="/faq/glp1" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-400 transition-colors">
              <div className="font-medium text-gray-900 mb-1">GLP-1 FAQ</div>
              <div className="text-sm text-gray-600">Common questions about insurance, side effects, and more</div>
            </Link>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 my-8">
          <h4 className="text-gray-900 font-bold mb-2">Medical Disclaimer</h4>
          <p className="text-sm text-gray-700 mb-0">
            This guide is for educational purposes only and does not constitute medical advice. GLP-1 medications are prescription drugs that should only be used under physician supervision. Always consult with a qualified healthcare provider before starting any weight loss medication. Individual results vary.
          </p>
        </div>

        {/* Sources */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sources & Further Reading</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <a href="https://my.clevelandclinic.org/health/treatments/13901-glp-1-agonists" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Cleveland Clinic: GLP-1 Agonists Overview</a></li>
            <li>• <a href="https://www.ncbi.nlm.nih.gov/books/NBK603723/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">StatPearls: Semaglutide</a></li>
            <li>• <a href="https://www.sciencedirect.com/science/article/pii/S2667368124000299" target="_blank" rel="noopener" className="text-blue-600 hover:underline">GLP-1 Agonists for Obesity: Weight Loss Outcomes & Side Effects</a></li>
            <li>• <a href="https://www.novomedlink.com/semaglutide/patient-safety/difference-fda-approved-compounded-semaglutide.html" target="_blank" rel="noopener" className="text-blue-600 hover:underline">FDA Position on Compounded Semaglutide</a></li>
            <li>• <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa2032183" target="_blank" rel="noopener" className="text-blue-600 hover:underline">NEJM: Semaglutide Clinical Trial Results</a></li>
          </ul>
        </div>
      </article>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <EmailCaptureCard
          title="Get Weekly Weight Loss Research Updates"
          description="New GLP-1 studies, price drops, and provider comparisons delivered weekly."
          source="guide_glp1"
        />
      </div>

      {/* Footer */}
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
