import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Medical Travel Insurance Guide: What You Actually Need (2024)',
  description: 'Complete guide to insurance for medical tourism. What standard travel insurance covers vs doesn\'t, medical tourism-specific insurance, and recommendations.',
};

export default function MedicalTravelInsuranceGuide() {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-gray-200 px-4 py-4">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="text-sm text-blue-600 hover:underline">
            ← Back to directory
          </Link>
        </div>
      </header>

      <section className="bg-gradient-to-b from-orange-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4">
            <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700">
              Planning Guide
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Medical Travel Insurance: What You Actually Need
          </h1>
          <p className="text-xl text-gray-600">
            The uncomfortable truth about travel insurance and medical tourism, what&apos;s actually covered, and how to protect yourself.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Last updated: December 2024 • 10 min read
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-12 prose prose-lg">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-red-900 mt-0 mb-2">The Critical Truth</h3>
          <p className="mb-0 text-gray-700">
            <strong>Standard travel insurance does NOT cover complications from planned medical procedures.</strong> If you have complications from your elective surgery abroad, your regular travel insurance will likely deny the claim. You need specialized medical tourism insurance for that coverage.
          </p>
        </div>

        <h2>Understanding the Insurance Landscape</h2>
        <p>
          There are three types of insurance relevant to medical tourism, and they cover completely different things:
        </p>

        <div className="grid gap-6 md:grid-cols-3 my-8 text-sm">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h3 className="text-lg font-bold text-blue-900 mt-0 mb-3">1. Regular Travel Insurance</h3>
            <p className="font-semibold text-blue-800 mb-2">Covers:</p>
            <ul className="text-gray-700 space-y-1 mb-3">
              <li>✓ Trip cancellation</li>
              <li>✓ Lost luggage</li>
              <li>✓ Flight delays</li>
              <li>✓ Getting sick/injured on trip</li>
            </ul>
            <p className="font-semibold text-red-800 mb-2">Does NOT cover:</p>
            <ul className="text-gray-700 space-y-1 mb-0">
              <li>✗ Planned medical procedures</li>
              <li>✗ Surgery complications</li>
              <li>✗ Treatment-related issues</li>
            </ul>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
            <h3 className="text-lg font-bold text-purple-900 mt-0 mb-3">2. Medical Tourism Insurance</h3>
            <p className="font-semibold text-purple-800 mb-2">Covers:</p>
            <ul className="text-gray-700 space-y-1 mb-3">
              <li>✓ Surgical complications</li>
              <li>✓ Infections from procedure</li>
              <li>✓ Corrective procedures</li>
              <li>✓ Extended recovery needs</li>
            </ul>
            <p className="font-semibold text-gray-600 mb-2">Coverage period:</p>
            <p className="text-gray-700 mb-0">Usually 180 days post-procedure</p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 className="text-lg font-bold text-green-900 mt-0 mb-3">3. Medical Evacuation</h3>
            <p className="font-semibold text-green-800 mb-2">Covers:</p>
            <ul className="text-gray-700 space-y-1 mb-3">
              <li>✓ Emergency air ambulance</li>
              <li>✓ Transport to US hospital</li>
              <li>✓ If local hospital can&apos;t treat</li>
            </ul>
            <p className="font-semibold text-gray-600 mb-2">Cost if needed:</p>
            <p className="text-gray-700 mb-0">$50,000-150,000 without insurance!</p>
          </div>
        </div>

        <h2>What Does "Medical Tourism Insurance" Actually Cover?</h2>
        <p>
          Specialized medical tourism complication insurance typically includes:
        </p>

        <h3>Core Coverage:</h3>
        <ul>
          <li><strong>Post-operative complications:</strong> Infections, bleeding, surgical errors from your planned procedure</li>
          <li><strong>Extended hospital stays:</strong> If you need more treatment than expected</li>
          <li><strong>Corrective procedures:</strong> If something goes wrong and needs fixing</li>
          <li><strong>Follow-up care:</strong> Treatment for complications up to 6 months after</li>
          <li><strong>Medical evacuation:</strong> Emergency transport to home country if needed</li>
        </ul>

        <h3>What&apos;s Usually NOT Covered:</h3>
        <ul>
          <li>The planned procedure itself (you pay for that upfront)</li>
          <li>Expected side effects (bruising, swelling, normal discomfort)</li>
          <li>Dissatisfaction with aesthetic results</li>
          <li>Issues from not following aftercare instructions</li>
          <li>Pre-existing conditions unrelated to the procedure</li>
        </ul>

        <h2>Do You Actually Need It?</h2>
        <p>
          <strong>Honest answer: It depends on your risk tolerance and the procedure.</strong>
        </p>

        <div className="grid gap-6 md:grid-cols-2 my-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-yellow-800 mt-0 mb-4">Higher Risk = Get Insurance</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>• <strong>Major surgery:</strong> Bariatric, orthopedic, cardiac</li>
              <li>• <strong>General anesthesia:</strong> Any procedure requiring it</li>
              <li>• <strong>Multiple procedures combined:</strong> Higher complication risk</li>
              <li>• <strong>Pre-existing conditions:</strong> That could complicate surgery</li>
              <li>• <strong>Distant destinations:</strong> Harder to return if issues arise</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-green-800 mt-0 mb-4">Lower Risk = Optional</h3>
            <ul className="text-sm text-gray-700 space-y-2 mb-0">
              <li>• <strong>Dental work:</strong> Implants, crowns (low complication rate)</li>
              <li>• <strong>Local anesthesia only:</strong> Hair transplants, minor cosmetic</li>
              <li>• <strong>Nearby destinations:</strong> Mexico border towns (drive home)</li>
              <li>• <strong>Otherwise healthy:</strong> No risk factors</li>
            </ul>
          </div>
        </div>

        <h2>Your Insurance Options</h2>

        <h3>Option 1: Regular Travel Insurance + Self-Insure Complications</h3>
        <p><strong>Cost:</strong> $50-150 for trip insurance</p>
        <p><strong>What you get:</strong></p>
        <ul>
          <li>Trip cancellation/interruption coverage</li>
          <li>Lost luggage, flight delays</li>
          <li>Emergency medical for non-procedure issues (like if you get food poisoning)</li>
        </ul>
        <p><strong>What you don&apos;t get:</strong> Any coverage for procedure complications</p>
        <p className="text-sm text-gray-600">
          <strong>Best for:</strong> Low-risk procedures like dental or hair transplants where you&apos;re comfortable self-insuring the surgical risk.
        </p>

        <h3>Option 2: Medical Tourism Complications Insurance</h3>
        <p><strong>Cost:</strong> $200-500 depending on procedure and coverage</p>
        <p><strong>What you get:</strong></p>
        <ul>
          <li>Coverage for surgical complications up to 180 days</li>
          <li>Often includes trip cancellation/interruption</li>
          <li>Medical evacuation in many policies</li>
          <li>Treatment of complications up to policy limits ($50k-250k typical)</li>
        </ul>
        <p className="text-sm text-gray-600">
          <strong>Best for:</strong> Major surgery (bariatric, orthopedic, extensive plastic surgery) where complication costs could be catastrophic.
        </p>

        <h3>Option 3: Medical Evacuation Only</h3>
        <p><strong>Cost:</strong> $100-300 annual membership</p>
        <p><strong>What you get:</strong></p>
        <ul>
          <li>Emergency evacuation to US if needed ($50k-150k value)</li>
          <li>Doesn&apos;t cover the treatment itself, just getting you home</li>
        </ul>
        <p className="text-sm text-gray-600">
          <strong>Best for:</strong> Frequent travelers who want evacuation peace of mind year-round.
        </p>

        <h2>What About Your US Health Insurance?</h2>
        <p>
          <strong>It probably won&apos;t help abroad.</strong> Here&apos;s why:
        </p>
        <ul>
          <li>Most US insurance doesn&apos;t cover care outside the US (except emergencies)</li>
          <li>Elective procedures aren&apos;t covered domestically, so definitely not abroad</li>
          <li>Even if you have complications after returning home, they may deny claims because the surgery was elective and abroad</li>
        </ul>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6">
          <h4 className="text-amber-900 mt-0 mb-2">Exception: Post-Return Complications</h4>
          <p className="text-sm text-amber-800 mb-0">
            <strong>If you return home and develop a complication</strong> (like infection), your US insurance <em>might</em> cover treatment of the complication itself—though they may argue it stems from an elective procedure. This is murky territory. Having medical tourism insurance eliminates the fight.
          </p>
        </div>

        <h2>Reading the Fine Print: What to Look For</h2>
        <p>
          Before buying medical tourism insurance, verify these details:
        </p>

        <div className="bg-white border border-gray-300 rounded-lg p-6 my-6">
          <h4 className="mt-0 mb-4 text-gray-900">Insurance Policy Checklist</h4>
          <ul className="space-y-2 text-sm mb-0">
            <li className="flex gap-2">
              <span>□</span>
              <span><strong>Coverage period:</strong> How long after procedure are complications covered? (180 days is standard)</span>
            </li>
            <li className="flex gap-2">
              <span>□</span>
              <span><strong>Coverage limits:</strong> What&apos;s the maximum payout? ($50k-250k typical)</span>
            </li>
            <li className="flex gap-2">
              <span>□</span>
              <span><strong>Deductible:</strong> What do you pay before insurance kicks in?</span>
            </li>
            <li className="flex gap-2">
              <span>□</span>
              <span><strong>Specific exclusions:</strong> What complications aren&apos;t covered?</span>
            </li>
            <li className="flex gap-2">
              <span>□</span>
              <span><strong>Claim process:</strong> Do they require pre-approval? How do you file claims?</span>
            </li>
            <li className="flex gap-2">
              <span>□</span>
              <span><strong>Medical evacuation included?</strong> Or is that separate?</span>
            </li>
            <li className="flex gap-2">
              <span>□</span>
              <span><strong>Follow-up care location:</strong> Covers treatment in home country? Abroad?</span>
            </li>
          </ul>
        </div>

        <h2>Recommended Approach by Procedure Type</h2>

        <div className="space-y-6 my-8">
          <div className="border-l-4 border-red-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-2">High-Risk Procedures (Get Full Coverage)</h4>
            <p className="text-sm text-gray-700 mb-2"><strong>Procedures:</strong> Bariatric surgery, orthopedic (knee/hip replacement), cardiac procedures, extensive plastic surgery</p>
            <p className="text-sm font-semibold text-red-700 mb-1">Recommended:</p>
            <ul className="text-sm text-gray-700 mb-0">
              <li>• Medical tourism complications insurance ($300-500)</li>
              <li>• Medical evacuation coverage (MedJet, $300/year)</li>
              <li>• Total cost: ~$400-800 for peace of mind</li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-2">Medium-Risk (Consider Complications Coverage)</h4>
            <p className="text-sm text-gray-700 mb-2"><strong>Procedures:</strong> Hair transplant, moderate cosmetic surgery, fertility treatments</p>
            <p className="text-sm font-semibold text-yellow-700 mb-1">Recommended:</p>
            <ul className="text-sm text-gray-700 mb-0">
              <li>• Standard travel insurance ($75-150)</li>
              <li>• Consider medical tourism insurance if risk-averse</li>
              <li>• Verify clinic&apos;s complication coverage first</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-2">Lower-Risk (Standard Travel Insurance OK)</h4>
            <p className="text-sm text-gray-700 mb-2"><strong>Procedures:</strong> Dental (implants, crowns), LASIK, minor cosmetic procedures</p>
            <p className="text-sm font-semibold text-green-700 mb-1">Recommended:</p>
            <ul className="text-sm text-gray-700 mb-0">
              <li>• Standard travel insurance for trip protection</li>
              <li>• Save the $300+ for medical tourism insurance</li>
              <li>• Self-insure the low surgical risk</li>
            </ul>
          </div>
        </div>

        <h2>What Your Clinic Might Include</h2>
        <p>
          <strong>Many reputable medical tourism facilities offer their own guarantees:</strong>
        </p>
        <ul>
          <li><strong>Revision guarantees:</strong> Free corrective surgery if needed (cosmetic issues)</li>
          <li><strong>Complication treatment:</strong> Will treat surgical complications at no charge</li>
          <li><strong>Extended care:</strong> Remote follow-up, medications included</li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
          <h4 className="text-blue-900 mt-0 mb-2">Questions to Ask Your Clinic</h4>
          <ul className="text-sm text-blue-800 space-y-1 mb-0">
            <li>• "What happens if I have a complication in the first 30/90/180 days?"</li>
            <li>• "Do you cover return trips for revision surgeries?"</li>
            <li>• "What complications have you seen with this procedure and what&apos;s your protocol?"</li>
            <li>• "Do you have partnerships with US doctors for follow-up care?"</li>
          </ul>
        </div>

        <p>
          If the clinic offers robust complication coverage and you&apos;re doing a lower-risk procedure, you might not need separate insurance.
        </p>

        <h2>Real-World Scenarios</h2>

        <h3>Scenario 1: Hair Transplant Gone Wrong</h3>
        <p className="text-sm text-gray-700">
          <strong>What happened:</strong> Infection develops 2 weeks after returning from Turkey. Needs IV antibiotics and treatment.
        </p>
        <p className="text-sm">
          <strong>Standard travel insurance:</strong> ❌ Denied—complication from elective procedure<br/>
          <strong>Medical tourism insurance:</strong> ✅ Covered (within 180-day window)<br/>
          <strong>US health insurance:</strong> ❓ Maybe—they might argue elective surgery exclusion
        </p>

        <h3>Scenario 2: Flight Cancelled Before Surgery</h3>
        <p className="text-sm text-gray-700">
          <strong>What happened:</strong> Flight cancelled, miss surgery date, lose $3,000 deposit.
        </p>
        <p className="text-sm">
          <strong>Standard travel insurance:</strong> ✅ Covered under trip interruption<br/>
          <strong>Medical tourism insurance:</strong> ✅ Also covered<br/>
          <strong>No insurance:</strong> ❌ Lose deposit
        </p>

        <h3>Scenario 3: Gastric Sleeve Leak (Serious Complication)</h3>
        <p className="text-sm text-gray-700">
          <strong>What happened:</strong> Develops stomach leak 5 days post-op, needs emergency surgery and extra week hospitalization.
        </p>
        <p className="text-sm">
          <strong>Standard travel insurance:</strong> ❌ Denied—related to elective surgery<br/>
          <strong>Medical tourism insurance:</strong> ✅ Covered (hospital, surgery, extended stay)<br/>
          <strong>Clinic warranty:</strong> ✅ Most reputable clinics cover this at no charge
        </p>

        <h2>My Honest Recommendation</h2>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6 my-8">
          <h3 className="text-blue-900 mt-0 mb-4">Tiered Approach</h3>

          <p className="text-sm mb-3"><strong>For major surgery (bariatric, orthopedic, extensive plastic):</strong></p>
          <ul className="text-sm text-gray-700 mb-4">
            <li>✓ Get medical tourism complications insurance</li>
            <li>✓ Get medical evacuation coverage</li>
            <li>✓ Total cost: $400-800 for peace of mind worth it</li>
          </ul>

          <p className="text-sm mb-3"><strong>For medium procedures (hair transplant, moderate cosmetic):</strong></p>
          <ul className="text-sm text-gray-700 mb-4">
            <li>✓ Standard travel insurance for trip protection</li>
            <li>? Medical tourism insurance if you&apos;re risk-averse</li>
            <li>✓ Verify clinic&apos;s complication protocol thoroughly</li>
          </ul>

          <p className="text-sm mb-3"><strong>For low-risk (dental, LASIK):</strong></p>
          <ul className="text-sm text-gray-700 mb-0">
            <li>✓ Standard travel insurance is fine</li>
            <li>✗ Skip medical tourism insurance (save the $300)</li>
            <li>✓ Just use reputable, accredited facilities</li>
          </ul>
        </div>

        <h2>Where to Buy Medical Tourism Insurance</h2>
        <p>
          Specialized medical tourism insurance is still a niche product. Options include:
        </p>
        <ul>
          <li><strong>IMG (International Medical Group):</strong> Offers medical tourism coverage</li>
          <li><strong>MedJet:</strong> Medical evacuation and transport (annual memberships)</li>
          <li><strong>Seven Corners:</strong> Travel medical insurance with some medical tourism options</li>
          <li><strong>Clinic-provided insurance:</strong> Some facilities offer complication insurance as package add-on</li>
        </ul>

        <p className="text-sm text-gray-600">
          <strong>Note:</strong> This is not an endorsement of specific insurers. Read policies carefully and compare coverage limits, exclusions, and claim processes.
        </p>

        <h2>The Realistic Bottom Line</h2>
        <p>
          <strong>Most medical tourists don&apos;t buy specialized insurance</strong> for low/medium-risk procedures. They rely on:
        </p>
        <ol>
          <li>Choosing highly-rated, accredited facilities with strong track records</li>
          <li>Clinic warranties and complication protocols</li>
          <li>Standard travel insurance for trip issues</li>
          <li>Self-insuring the actual surgical risk</li>
        </ol>
        <p>
          For <strong>major surgery</strong>, the $400-800 for comprehensive medical tourism insurance is worth it. A single complication could cost $50,000+ without coverage.
        </p>
        <p>
          For <strong>dental or hair transplants</strong>, most people skip it and save the money—complications are rare and usually manageable.
        </p>

        <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 my-8">
          <h4 className="text-gray-900 font-bold mb-2">Insurance Disclaimer</h4>
          <p className="text-sm text-gray-700 mb-0">
            This guide is educational only and not insurance advice. Policy terms vary significantly between insurers. Read all policy documents carefully before purchasing. We are not affiliated with any insurance companies mentioned.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 border border-orange-200 rounded-lg p-8 my-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Planning Medical Tourism?</h3>
          <p className="text-gray-600 mb-6">
            Check out our destination planning guides and provider comparisons.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/guides/mexico-medical-tourism-planner" className="inline-block rounded-lg bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700">
              Mexico Trip Planner
            </Link>
            <Link href="/guides/turkey-hair-transplant-trip-planner" className="inline-block rounded-lg bg-purple-600 px-6 py-3 font-medium text-white hover:bg-purple-700">
              Turkey Trip Planner
            </Link>
          </div>
        </div>

        {/* Sources */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <a href="https://wwwnc.cdc.gov/travel/yellowbook/2024/health-care-abroad/medical-tourism" target="_blank" rel="noopener" className="text-blue-600 hover:underline">CDC Yellow Book 2024: Medical Tourism</a></li>
            <li>• <a href="https://covertrip.com/travel-insurance/medical-tourism-insurance" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Medical Tourism Travel Insurance Overview</a></li>
            <li>• <a href="https://www.placidway.com/learning-center/How-Does-Medical-Tourism-Complications-Insurance-Cover-Accidents-Illness-and-Treatment-Related-Complications" target="_blank" rel="noopener" className="text-blue-600 hover:underline">How Medical Tourism Complications Insurance Works</a></li>
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
