import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hair Transplant Recovery Timeline: Day-by-Day Guide (2025) | VitalityScout',
  description: 'Complete hair transplant recovery timeline from day 1 to month 18. What to expect, healing stages, when to return to work, exercise, and see final results.',
  keywords: ['hair transplant recovery', 'hair transplant timeline', 'FUE recovery', 'DHI recovery', 'hair transplant healing', 'hair transplant results', 'shock loss', 'hair growth after transplant'],
};

export default function HairTransplantRecoveryTimeline() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Hair Transplant Recovery Timeline: Complete Day-by-Day Guide',
    description: 'Comprehensive guide to hair transplant recovery covering healing stages, timeline expectations, and care instructions.',
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
    datePublished: '2025-01-03',
    dateModified: '2025-01-03',
    mainEntityOfPage: 'https://vitalityscout.com/guides/hair-transplant-recovery-timeline',
    articleSection: 'Recovery Guides',
    keywords: ['hair transplant', 'recovery', 'timeline', 'FUE', 'DHI', 'healing']
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
              <span className="text-gray-900">Hair Transplant Recovery Timeline</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-amber-50 to-white px-4 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4">
              <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700">
                Recovery Guide
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Hair Transplant Recovery Timeline: What to Expect Day by Day
            </h1>
            <p className="text-xl text-gray-600">
              A complete week-by-week guide to hair transplant recovery—from the first 24 hours through your final results at 12-18 months.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Last updated: January 2025 • 15 min read
            </p>
          </div>
        </section>

        {/* Content */}
        <article className="mx-auto max-w-4xl px-4 py-12">
          {/* Quick Timeline Overview */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Recovery at a Glance</h3>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <div className="text-2xl font-bold text-amber-600">7-10</div>
                <div className="text-gray-600">Days for scabs to heal</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <div className="text-2xl font-bold text-amber-600">2-4</div>
                <div className="text-gray-600">Weeks of &quot;shock loss&quot;</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <div className="text-2xl font-bold text-amber-600">3-4</div>
                <div className="text-gray-600">Months for new growth</div>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
                <div className="text-2xl font-bold text-amber-600">12-18</div>
                <div className="text-gray-600">Months for final results</div>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What This Guide Covers</h3>
            <ul className="space-y-2 text-gray-700">
              <li><a href="#week1" className="text-blue-600 hover:underline">1. Week 1: The Critical Healing Phase</a></li>
              <li><a href="#week2-4" className="text-blue-600 hover:underline">2. Weeks 2-4: Shock Loss & Shedding</a></li>
              <li><a href="#month1-3" className="text-blue-600 hover:underline">3. Months 1-3: The Dormant Phase</a></li>
              <li><a href="#month4-6" className="text-blue-600 hover:underline">4. Months 4-6: New Growth Begins</a></li>
              <li><a href="#month6-12" className="text-blue-600 hover:underline">5. Months 6-12: Visible Transformation</a></li>
              <li><a href="#month12-18" className="text-blue-600 hover:underline">6. Months 12-18: Final Results</a></li>
              <li><a href="#activities" className="text-blue-600 hover:underline">7. When Can I Resume Activities?</a></li>
              <li><a href="#tips" className="text-blue-600 hover:underline">8. Recovery Tips for Best Results</a></li>
            </ul>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Hair transplant recovery requires patience. While the procedure itself takes just one day, the full journey to your final results spans 12-18 months. Understanding each phase helps you know what&apos;s normal and when to expect visible improvement.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Note:</strong> This timeline applies to both FUE and DHI procedures. Recovery is nearly identical for both techniques, with DHI sometimes showing slightly faster initial healing due to smaller incisions.
              </p>
            </div>

            <h2 id="week1" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Week 1: The Critical Healing Phase</h2>

            <p className="text-gray-700 mb-4">
              The first week is the most important for graft survival. Your transplanted follicles are fragile and establishing blood supply in their new location.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Day 1 (Procedure Day)</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Procedure takes 6-10 hours depending on graft count</li>
              <li>Leave clinic with bandage over donor area</li>
              <li>Recipient area left open (looks red with tiny dots)</li>
              <li>Mild discomfort, controlled with prescribed pain medication</li>
              <li>Sleep elevated (45 degrees) to minimize swelling</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Days 2-3: Peak Swelling</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Swelling</strong> is normal and peaks around days 2-4</li>
              <li>May travel down to forehead, even around eyes (looks worse than it is)</li>
              <li>Recipient area shows small red dots with visible grafts</li>
              <li>Donor area may feel tight or sore</li>
              <li>Continue sleeping elevated; apply ice to forehead (not grafts)</li>
            </ul>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Critical: Don&apos;t Touch the Grafts</h4>
              <p className="text-gray-700">
                For the first 7-10 days, avoid any contact with the recipient area. No scratching, no rubbing, no hats pressing on grafts. Grafts aren&apos;t fully anchored yet and can be dislodged.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Days 4-7: Scabbing Forms</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Swelling begins to subside</li>
              <li>Small scabs form around each graft (looks like tiny red dots)</li>
              <li>Itching may begin (don&apos;t scratch!)</li>
              <li>First gentle wash usually around day 3-5 per clinic instructions</li>
              <li>Donor area scabs over and starts healing</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">First Wash Instructions (Typical)</h3>

            <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
              <li>Apply gentle foam or lotion to soften scabs (30-60 minutes)</li>
              <li>Use cup or low-pressure shower to rinse</li>
              <li>Pat dry very gently with paper towels</li>
              <li>No rubbing, no direct shower pressure on grafts</li>
              <li>Repeat daily; scabs should naturally fall off by day 10-14</li>
            </ol>

            <h2 id="week2-4" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Weeks 2-4: Shock Loss & Shedding</h2>

            <p className="text-gray-700 mb-4">
              This phase alarms many patients, but it&apos;s completely normal. Understanding &quot;shock loss&quot; prevents unnecessary panic.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">What Is Shock Loss?</h3>

            <p className="text-gray-700 mb-4">
              Between weeks 2-6, most transplanted hairs will fall out. This is called &quot;shock loss&quot; and it&apos;s a normal part of the process:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>The transplanted hair shaft falls out (the follicle remains)</li>
              <li>70-90% of transplanted hairs typically shed</li>
              <li>The follicle enters a resting phase before producing new hair</li>
              <li>This does NOT mean the transplant failed</li>
            </ul>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-green-800 mb-2">The Follicle Survives</h4>
              <p className="text-gray-700">
                When hair falls out during shock loss, the living follicle stays anchored beneath the skin. It&apos;s simply resetting before growing new, permanent hair. Think of it like a plant going dormant in winter—the roots are alive even when the leaves drop.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Week 2</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Scabs mostly gone</li>
              <li>Redness fading but still visible</li>
              <li>Can carefully wear a loose hat if needed</li>
              <li>Donor area healing well, may still be pink</li>
              <li>Hair shedding begins</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Weeks 3-4</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Heavy shedding continues (this is normal!)</li>
              <li>Recipient area may look thinner than before transplant</li>
              <li>This is the &quot;ugly duckling&quot; phase—temporary</li>
              <li>Most redness gone; skin returning to normal</li>
              <li>Can resume most normal activities</li>
            </ul>

            <h2 id="month1-3" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Months 1-3: The Dormant Phase</h2>

            <p className="text-gray-700 mb-4">
              This is the hardest phase psychologically. Your scalp looks largely like it did before the transplant (or even thinner), and nothing seems to be happening. Patience is essential.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Month 1</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Shock loss complete or nearly complete</li>
              <li>Scalp fully healed externally</li>
              <li>Donor area looking normal (hair covers extraction points)</li>
              <li>No visible signs of transplant to casual observers</li>
              <li>Follicles are in telogen (resting) phase beneath the surface</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Months 2-3</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Still mostly dormant phase</li>
              <li>Some patients see early &quot;sprouts&quot; at month 3</li>
              <li>New hairs may initially be thin, wispy, or lighter in color</li>
              <li>Pimple-like bumps may appear (ingrown hairs emerging)</li>
              <li>These are positive signs of activity beneath the surface</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
              <p className="text-gray-700">
                <strong>Pro tip:</strong> Take monthly photos in consistent lighting. You won&apos;t notice gradual changes day-to-day, but comparing monthly photos reveals real progress.
              </p>
            </div>

            <h2 id="month4-6" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Months 4-6: New Growth Begins</h2>

            <p className="text-gray-700 mb-4">
              This is when things start getting exciting. Visible new growth typically begins around month 4 and accelerates through month 6.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Month 4</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>30-40% of transplanted hairs now visibly growing</li>
              <li>New hairs are thin but getting stronger</li>
              <li>Hairline starting to fill in</li>
              <li>Growth may be uneven (some areas ahead of others)</li>
              <li>First time you&apos;ll notice clear improvement</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Month 5-6</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>50-60% of growth visible</li>
              <li>Hairs thickening and gaining pigment</li>
              <li>Coverage noticeably improving</li>
              <li>Can style hair to cover remaining thin areas</li>
              <li>Others may start commenting on improvement</li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-2">Managing Expectations</h4>
              <p className="text-gray-700">
                At 6 months, you&apos;re roughly halfway to your final result. The hair will continue to thicken and mature. If you&apos;re underwhelmed at 6 months, give it more time—months 8-12 often show dramatic improvement.
              </p>
            </div>

            <h2 id="month6-12" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Months 6-12: Visible Transformation</h2>

            <p className="text-gray-700 mb-4">
              The second half of year one brings the most dramatic visible changes as all transplanted follicles are now producing hair.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Months 6-8</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>70-80% of final growth visible</li>
              <li>Hair texture approaching normal</li>
              <li>Can cut and style normally</li>
              <li>Thin areas filling in well</li>
              <li>Significant cosmetic improvement</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Months 9-12</h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>85-95% of final result visible</li>
              <li>Hair fully mature in texture and thickness</li>
              <li>Any &quot;fine tuning&quot; discussions with clinic can begin</li>
              <li>This is when most before/after photos are taken</li>
            </ul>

            <h2 id="month12-18" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Months 12-18: Final Results</h2>

            <p className="text-gray-700 mb-4">
              Most clinics consider 12 months the primary evaluation point, but hair continues to mature until about 18 months.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>12 months:</strong> Official &quot;final result&quot; for most clinics</li>
              <li><strong>12-18 months:</strong> Hair continues to thicken slightly</li>
              <li><strong>18 months:</strong> Definitive final result</li>
              <li>Time to assess if additional procedures are desired</li>
              <li>Transplanted hair is permanent (same characteristics as donor area)</li>
            </ul>

            <h2 id="activities" className="text-2xl font-bold text-gray-900 mt-12 mb-6">When Can I Resume Activities?</h2>

            <p className="text-gray-700 mb-4">
              One of the most common questions. Here&apos;s a typical timeline:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Activity</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">When to Resume</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Return to work (office job)</td>
                    <td className="border border-gray-300 px-4 py-3">5-7 days</td>
                    <td className="border border-gray-300 px-4 py-3">Scabs visible, may want 10+ days for discretion</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Light walking</td>
                    <td className="border border-gray-300 px-4 py-3">Day 2-3</td>
                    <td className="border border-gray-300 px-4 py-3">Keep it easy, avoid sweating</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Driving</td>
                    <td className="border border-gray-300 px-4 py-3">3-5 days</td>
                    <td className="border border-gray-300 px-4 py-3">After pain meds stopped</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Wearing a hat</td>
                    <td className="border border-gray-300 px-4 py-3">10-14 days</td>
                    <td className="border border-gray-300 px-4 py-3">Loose fit only, no pressure on grafts</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Light gym (no cardio)</td>
                    <td className="border border-gray-300 px-4 py-3">10-14 days</td>
                    <td className="border border-gray-300 px-4 py-3">Avoid straining, sweating</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Full gym/cardio</td>
                    <td className="border border-gray-300 px-4 py-3">3-4 weeks</td>
                    <td className="border border-gray-300 px-4 py-3">Sweating now okay</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Swimming (pool)</td>
                    <td className="border border-gray-300 px-4 py-3">4 weeks</td>
                    <td className="border border-gray-300 px-4 py-3">Chlorine safe once healed</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Swimming (ocean)</td>
                    <td className="border border-gray-300 px-4 py-3">4-6 weeks</td>
                    <td className="border border-gray-300 px-4 py-3">Salt water and sun exposure</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Direct sun exposure</td>
                    <td className="border border-gray-300 px-4 py-3">3-4 weeks</td>
                    <td className="border border-gray-300 px-4 py-3">Wear hat after 2 weeks; sunscreen on scalp</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Alcohol</td>
                    <td className="border border-gray-300 px-4 py-3">5-7 days</td>
                    <td className="border border-gray-300 px-4 py-3">Affects blood flow during healing</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Smoking</td>
                    <td className="border border-gray-300 px-4 py-3">2-4 weeks minimum</td>
                    <td className="border border-gray-300 px-4 py-3">Significantly impacts graft survival</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Sexual activity</td>
                    <td className="border border-gray-300 px-4 py-3">7-10 days</td>
                    <td className="border border-gray-300 px-4 py-3">Avoid strain and sweating</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Normal hair washing</td>
                    <td className="border border-gray-300 px-4 py-3">2 weeks</td>
                    <td className="border border-gray-300 px-4 py-3">Gentle until scabs gone</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Haircut</td>
                    <td className="border border-gray-300 px-4 py-3">4-6 weeks</td>
                    <td className="border border-gray-300 px-4 py-3">Scissors only; clippers after 3 months</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="tips" className="text-2xl font-bold text-gray-900 mt-12 mb-6">Recovery Tips for Best Results</h2>

            <div className="bg-green-50 rounded-lg p-6 my-8">
              <h4 className="font-bold text-gray-900 mb-4">10 Essential Recovery Tips</h4>
              <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                <li><strong>Sleep elevated for 7-10 days.</strong> Use a travel pillow or multiple pillows to stay at 45 degrees. Reduces swelling and protects grafts.</li>
                <li><strong>Don&apos;t touch or pick at grafts.</strong> Dislodging a graft in week 1 means permanent loss of that follicle.</li>
                <li><strong>Follow washing instructions exactly.</strong> Your clinic&apos;s specific protocol matters—don&apos;t improvise.</li>
                <li><strong>Stay hydrated.</strong> Good blood flow supports healing. Aim for 8+ glasses of water daily.</li>
                <li><strong>Avoid NSAIDs.</strong> Ibuprofen and aspirin thin blood. Use acetaminophen (Tylenol) if needed.</li>
                <li><strong>No smoking for 2+ weeks minimum.</strong> Nicotine constricts blood vessels and significantly reduces graft survival.</li>
                <li><strong>Take prescribed medications.</strong> Antibiotics prevent infection; other meds reduce inflammation.</li>
                <li><strong>Expect shock loss.</strong> Don&apos;t panic when hair falls out at weeks 2-6. It&apos;s normal and temporary.</li>
                <li><strong>Be patient through the &quot;ugly duckling&quot; phase.</strong> Months 1-3 can look worse before better.</li>
                <li><strong>Continue minoxidil/finasteride if prescribed.</strong> These protect your native hair from further loss.</li>
              </ol>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">When to Contact Your Clinic</h3>

            <p className="text-gray-700 mb-4">
              Most post-operative symptoms are normal, but contact your clinic if you experience:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Fever above 101°F (38.3°C)</li>
              <li>Severe pain not controlled by medication</li>
              <li>Signs of infection (pus, spreading redness, unusual discharge)</li>
              <li>Excessive bleeding that doesn&apos;t stop</li>
              <li>Allergic reaction to medications</li>
              <li>Numbness that lasts more than a few weeks</li>
            </ul>
          </div>

          {/* Visual Timeline */}
          <div className="my-12 rounded-lg bg-gray-50 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Visual Recovery Timeline</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-24 text-sm font-semibold text-gray-600">Week 1</div>
                <div className="flex-1 h-4 bg-red-200 rounded-full relative">
                  <div className="absolute inset-0 flex items-center justify-center text-xs text-red-800">Healing</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 text-sm font-semibold text-gray-600">Weeks 2-4</div>
                <div className="flex-1 h-4 bg-orange-200 rounded-full relative">
                  <div className="absolute inset-0 flex items-center justify-center text-xs text-orange-800">Shock Loss</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 text-sm font-semibold text-gray-600">Months 1-3</div>
                <div className="flex-1 h-4 bg-yellow-200 rounded-full relative">
                  <div className="absolute inset-0 flex items-center justify-center text-xs text-yellow-800">Dormant Phase</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 text-sm font-semibold text-gray-600">Months 4-6</div>
                <div className="flex-1 h-4 bg-lime-200 rounded-full relative">
                  <div className="absolute inset-0 flex items-center justify-center text-xs text-lime-800">New Growth (40-60%)</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 text-sm font-semibold text-gray-600">Months 6-12</div>
                <div className="flex-1 h-4 bg-emerald-200 rounded-full relative">
                  <div className="absolute inset-0 flex items-center justify-center text-xs text-emerald-800">Maturing (60-90%)</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 text-sm font-semibold text-gray-600">Month 12-18</div>
                <div className="flex-1 h-4 bg-green-400 rounded-full relative">
                  <div className="absolute inset-0 flex items-center justify-center text-xs text-green-900">Final Results</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Planning Your Hair Transplant?</h3>
            <p className="mb-6 text-amber-100">
              Compare FUE vs DHI techniques and explore clinics in Turkey and other destinations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/guides/fue-vs-dhi"
                className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-amber-600 hover:bg-amber-50 transition-colors"
              >
                FUE vs DHI Comparison
              </Link>
              <Link
                href="/guides/hair-transplant-turkey-guide"
                className="inline-block rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Turkey Hair Transplant Guide
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 rounded-lg bg-gray-100 p-6">
            <h3 className="font-semibold text-gray-800 mb-2">Medical Disclaimer</h3>
            <p className="text-sm text-gray-600">
              This guide is for informational purposes only and should not replace advice from your hair transplant clinic. Recovery experiences vary based on individual factors, technique used, and surgeon skill. Always follow your clinic&apos;s specific post-operative instructions. If you experience concerning symptoms, contact your medical provider immediately.
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Sources & References</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• International Society of Hair Restoration Surgery (ISHRS) patient guidelines</li>
              <li>• American Board of Hair Restoration Surgery recovery protocols</li>
              <li>• Dermatologic Surgery journal: post-operative care studies</li>
              <li>• Hair Transplant Network: patient experience surveys</li>
            </ul>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
