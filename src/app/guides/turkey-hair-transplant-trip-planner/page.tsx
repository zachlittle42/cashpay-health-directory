import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Turkey Hair Transplant Trip Planner: 7-Day Istanbul Guide (2024)',
  description: 'Complete planning guide for your hair transplant trip to Istanbul. Flights, hotels, packing list, day-by-day timeline, and recovery tips.',
};

export default function TurkeyTripPlanner() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 px-4 py-4">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="text-sm text-blue-600 hover:underline">
            ← Back to directory
          </Link>
        </div>
      </header>

      <section className="bg-gradient-to-b from-purple-50 to-white px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4">
            <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
              Trip Planning Guide
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Planning Your Hair Transplant Trip to Turkey
          </h1>
          <p className="text-xl text-gray-600">
            Your complete 7-day Istanbul itinerary: flights, hotels, what to pack, day-by-day timeline, and making the most of your recovery time.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Last updated: December 2024 • 14 min read
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-purple-900 mb-2">Trip At a Glance</h3>
          <div className="text-sm text-gray-700 grid md:grid-cols-2 gap-2">
            <div>✓ <strong>Visa:</strong> Not required for US citizens</div>
            <div>✓ <strong>Flight time:</strong> 10-13 hours from US</div>
            <div>✓ <strong>Trip length:</strong> 5-7 days typical</div>
            <div>✓ <strong>Hotels:</strong> Included in package (usually)</div>
            <div>✓ <strong>Best time:</strong> Spring/Fall for weather</div>
            <div>✓ <strong>Budget:</strong> $3,000-7,000 all-in</div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>No Visa Required!</h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-6">
            <h4 className="text-green-900 mt-0 mb-2">Updated Turkey Entry (2024)</h4>
            <p className="text-sm text-green-800 mb-0">
              <strong>US citizens no longer need a visa</strong> to visit Turkey for tourism stays up to 90 days. This is a recent policy change—you previously needed an e-visa ($50). Just bring your passport (valid for 6+ months) and you&apos;re good to go!
            </p>
          </div>

          <h2>Your 7-Day Trip Timeline</h2>

          <div className="space-y-6 my-8 not-prose">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">Day 1: Arrival</h4>
              <p className="text-sm text-gray-700 mb-2">Land at Istanbul Airport (IST), VIP pickup to hotel</p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                <li>Check into hotel (usually 4-5 star in Taksim area)</li>
                <li>Get Turkish SIM card or use hotel WiFi for WhatsApp</li>
                <li>Light dinner, early bedtime (jet lag + big day tomorrow)</li>
                <li>Clinic may do blood tests this evening or next morning</li>
              </ul>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">Day 2: Surgery Day</h4>
              <p className="text-sm text-gray-700 mb-2">The big day - expect 6-8 hours at clinic</p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                <li>Pickup from hotel (usually 8-9am)</li>
                <li>Hairline design with surgeon (30-60 min—this is critical!)</li>
                <li>Shaving donor area, local anesthesia</li>
                <li>Extraction phase (2-3 hours—watch movies, relax)</li>
                <li>Lunch break</li>
                <li>Channel creation and implantation (3-4 hours)</li>
                <li>Bandage, instructions, back to hotel for rest</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">Day 3: First Wash</h4>
              <p className="text-sm text-gray-700 mb-2">Return to clinic for professional wash</p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                <li>Clinic pickup for first hair wash (gentle, professional)</li>
                <li>Surgeon checks healing, gives at-home wash instructions</li>
                <li>Receive aftercare kit (special shampoo, spray, etc.)</li>
                <li>Rest of day: Hotel rest, Netflix, short walk if feeling good</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">Days 4-6: Recovery</h4>
              <p className="text-sm text-gray-700 mb-2">Light sightseeing OK</p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                <li>Daily gentle hair washing at hotel</li>
                <li>Visit Hagia Sophia, Blue Mosque, Grand Bazaar</li>
                <li>Avoid: Hammam, strenuous activity, direct sun</li>
                <li>Wear loose hat for sun protection</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-2">Day 7: Departure</h4>
              <p className="text-sm text-gray-700 mb-2">Cleared to fly home</p>
              <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                <li>Use neck pillow on flight to avoid rubbing grafts</li>
                <li>Bring soft hat for plane</li>
                <li>Keep aftercare products in carry-on</li>
              </ul>
            </div>
          </div>

          <h2>What to Pack: Essential Checklist</h2>

          <div className="bg-white border border-gray-300 rounded-lg p-6 my-8 not-prose">
            <h3 className="text-gray-900 font-bold mb-4">✈️ Travel Documents</h3>
            <ul className="space-y-2 text-sm mb-6">
              <li className="flex gap-2">
                <span className="text-purple-600">□</span>
                <span><strong>Passport</strong> (must be valid 6+ months)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-600">□</span>
                <span><strong>Return flight confirmation</strong></span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-600">□</span>
                <span><strong>Travel insurance documents</strong></span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-600">□</span>
                <span><strong>Credit card + $300-500 cash</strong> (USD or EUR)</span>
              </li>
            </ul>

            <h3 className="text-gray-900 font-bold mb-4 mt-6">👕 Clothing (Critical!)</h3>
            <ul className="space-y-2 text-sm mb-6">
              <li className="flex gap-2">
                <span className="text-blue-600">□</span>
                <span><strong>3-4 button-up shirts or zip hoodies</strong> (MUST not pull over head!)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">□</span>
                <span><strong>Comfortable pants</strong> (sweatpants, joggers)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">□</span>
                <span><strong>Slip-on shoes</strong></span>
              </li>
            </ul>

            <h3 className="text-gray-900 font-bold mb-4 mt-6">💊 Recovery Items</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-green-600">□</span>
                <span><strong>Travel neck pillow</strong> (essential for flight home!)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">□</span>
                <span><strong>Pain relievers</strong> (Tylenol OK)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">□</span>
                <span><strong>Any prescription meds</strong> you take regularly</span>
              </li>
            </ul>
          </div>

          <h2>Getting Around Istanbul</h2>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6 not-prose">
            <h4 className="font-bold text-blue-900 mb-4">Airport to Hotel Options</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-gray-900">Taxi to Taksim</div>
                  <div className="text-gray-600">45-60 minutes</div>
                </div>
                <div className="text-right">
                  <div className="font-bold">~$40-55</div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-gray-900">Metro</div>
                  <div className="text-gray-600">~90 mins with transfer</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-green-600">~$1</div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-gray-900">Clinic VIP Pickup</div>
                  <div className="text-gray-600">Included in package</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-blue-600">Free</div>
                </div>
              </div>
            </div>
          </div>

          <h2>Sample Trip Budget (All-In)</h2>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 not-prose">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Hair transplant package (mid-tier)</span>
                <span className="font-semibold">$3,500</span>
              </div>
              <div className="flex justify-between text-gray-600 pl-4 text-xs">
                <span>Includes: procedure, 3-night hotel, transfers, medications</span>
                <span></span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Round-trip flights from US</span>
                <span className="font-semibold">$800</span>
              </div>
              <div className="flex justify-between">
                <span>Travel insurance</span>
                <span className="font-semibold">$75</span>
              </div>
              <div className="flex justify-between">
                <span>Extra hotel nights (2 nights)</span>
                <span className="font-semibold">$200</span>
              </div>
              <div className="flex justify-between">
                <span>Meals & daily expenses (7 days)</span>
                <span className="font-semibold">$300</span>
              </div>
              <div className="flex justify-between">
                <span>Sightseeing & souvenirs</span>
                <span className="font-semibold">$150</span>
              </div>
              <div className="border-t-2 border-gray-300 pt-2 mt-2 flex justify-between font-bold">
                <span>Total All-In Cost</span>
                <span className="text-purple-600">~$5,025</span>
              </div>
              <div className="flex justify-between text-gray-600 text-xs pt-1">
                <span>vs. US equivalent</span>
                <span>$12,000-20,000</span>
              </div>
            </div>
          </div>

          <h2>Pro Tips from Repeat Medical Tourists</h2>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
            <ul className="text-sm text-blue-800 space-y-2 mb-0">
              <li>💡 <strong>Bring photos of hairlines you like</strong> to show surgeon during design phase</li>
              <li>💡 <strong>Download Netflix content before flight</strong> (long procedure day)</li>
              <li>💡 <strong>Get clinic WhatsApp before you fly</strong> in case pickup falls through</li>
              <li>💡 <strong>Buy extra pillow cases</strong> at Istanbul mall (you&apos;ll get blood/ooze on them)</li>
            </ul>
          </div>

          <h2>After You Return Home</h2>
          <ul>
            <li><strong>Days 7-14:</strong> Scabs fall off naturally (don&apos;t pick!)</li>
            <li><strong>Weeks 3-12:</strong> Shock loss phase—transplanted hairs fall out (normal!)</li>
            <li><strong>Monthly photos:</strong> WhatsApp them to your clinic for tracking</li>
            <li><strong>Start finasteride/minoxidil:</strong> If recommended by surgeon</li>
            <li><strong>Patience required:</strong> Final results at 12-18 months</li>
          </ul>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-8 my-12 text-center not-prose">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Compare Istanbul Hair Transplant Clinics</h3>
            <p className="text-gray-600 mb-6">
              See JCI-accredited clinics, all-inclusive packages, and verified patient reviews.
            </p>
            <Link
              href="/hair_transplant"
              className="inline-block rounded-lg bg-purple-600 px-8 py-4 text-lg font-medium text-white hover:bg-purple-700"
            >
              View Turkey Hair Transplant Providers →
            </Link>
          </div>

          <div className="border-t border-gray-200 pt-8 mt-12 not-prose">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• <a href="https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Turkey Ministry of Foreign Affairs: Visa Information</a></li>
              <li>• <a href="https://theistanbulinsider.com/how-to-get-from-the-new-istanbul-airport-to-taksim-or-sultanahmet/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Istanbul Airport Transportation Guide</a></li>
              <li>• <a href="https://cosmedica.com/a-hair-transplant-in-turkey-what-to-take/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">What to Pack for Hair Transplant</a></li>
            </ul>
          </div>
        </div>
      </article>

      <footer className="border-t border-gray-200 px-4 py-8">
        <div className="mx-auto max-w-4xl text-center">
          <Link href="/guides" className="text-blue-600 hover:underline text-sm">
            ← Back to all guides
          </Link>
        </div>
      </footer>
    </div>
  );
}
