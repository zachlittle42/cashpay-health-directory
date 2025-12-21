import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Turkey Hair Transplant Trip Planner: 7-Day Istanbul Guide (2024)',
  description: 'Complete planning guide for your hair transplant trip to Istanbul. Flights, hotels, packing list, day-by-day timeline, and recovery tips.',
};

export default function TurkeyTripPlanner() {
  return (
    <main className="min-h-screen bg-white">
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

      <article className="mx-auto max-w-4xl px-4 py-12 prose prose-lg">
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-purple-900 mt-0 mb-2">Trip At a Glance</h3>
          <ul className="mb-0 text-sm text-gray-700 grid md:grid-cols-2 gap-2">
            <li>✓ <strong>Visa:</strong> Not required for US citizens</li>
            <li>✓ <strong>Flight time:</strong> 10-13 hours from US</li>
            <li>✓ <strong>Trip length:</strong> 5-7 days typical</li>
            <li>✓ <strong>Hotels:</strong> Included in package (usually)</li>
            <li>✓ <strong>Best time:</strong> Spring/Fall for weather</li>
            <li>✓ <strong>Budget:</strong> $3,000-7,000 all-in</li>
          </ul>
        </div>

        <h2>Before You Book: The Planning Timeline</h2>

        <div className="space-y-4 my-8">
          <div className="bg-gray-50 border-l-4 border-purple-500 p-4">
            <h4 className="font-bold text-gray-900 mb-2">2-3 Months Before: Research & Book</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-0">
              <li>• Research clinics (verify JCI accreditation, reviews)</li>
              <li>• Send photos for virtual consultation</li>
              <li>• Book procedure with reputable clinic</li>
              <li>• Start saving if paying in installments</li>
            </ul>
          </div>

          <div className="bg-gray-50 border-l-4 border-purple-500 p-4">
            <h4 className="font-bold text-gray-900 mb-2">1-2 Months Before: Travel Arrangements</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-0">
              <li>• Book flights (aim for lowest fares, book early)</li>
              <li>• Purchase travel insurance</li>
              <li>• Confirm hotel details with clinic</li>
              <li>• Request time off work (plan 10-14 days total with recovery)</li>
              <li>• Get haircut if you want (it&apos;ll be shaved anyway)</li>
            </ul>
          </div>

          <div className="bg-gray-50 border-l-4 border-purple-500 p-4">
            <h4 className="font-bold text-gray-900 mb-2">2 Weeks Before: Final Prep</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-0">
              <li>• Stop alcohol, smoking, blood thinners (aspirin, ibuprofen)</li>
              <li>• Download clinic&apos;s WhatsApp number</li>
              <li>• Pack your bags (see checklist below)</li>
              <li>• Set up international phone plan or buy local SIM info</li>
              <li>• Notify bank/credit card of Turkey travel</li>
            </ul>
          </div>
        </div>

        <h2>🎫 Good News: No Visa Required!</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-6">
          <h4 className="text-green-900 mt-0 mb-2">Updated Turkey Entry (2024)</h4>
          <p className="text-sm text-green-800 mb-0">
            <strong>US citizens no longer need a visa</strong> to visit Turkey for tourism stays up to 90 days within 180 days. This is a recent policy change—you previously needed an e-visa ($50). Just bring your passport (valid for 6+ months) and you&apos;re good to go!
          </p>
        </div>

        <h2>Getting to Istanbul</h2>

        <h3>Flights from US</h3>
        <ul>
          <li><strong>Direct flights available from:</strong> New York (JFK), Washington DC (IAD)</li>
          <li><strong>One-stop options from:</strong> Most major US cities via Amsterdam, Frankfurt, Paris, or Doha</li>
          <li><strong>Airlines:</strong> Turkish Airlines (direct), Lufthansa, KLM, Qatar Airways</li>
          <li><strong>Flight time:</strong> 10-13 hours depending on route</li>
          <li><strong>Typical cost:</strong> $600-1,200 round-trip</li>
        </ul>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
          <h4 className="text-blue-900 mt-0 mb-2">Flight Booking Tip</h4>
          <p className="text-sm text-blue-800 mb-0">
            <strong>Book for Wednesday-Tuesday travel if possible.</strong> Most clinics operate Monday-Friday, so arriving midweek gives you flexibility. Plus midweek flights are often cheaper. Turkish Airlines often has best prices + direct routes.
          </p>
        </div>

        <h3>Istanbul Airport (IST) to Your Hotel</h3>
        <p>
          <strong>Most packages include VIP airport pickup</strong>—someone meets you at arrivals with a sign, drives you to hotel. But if you need to arrange your own:
        </p>

        <div className="bg-white border border-gray-300 rounded-lg p-6 my-6 text-sm">
          <h4 className="mt-0 mb-4 text-gray-900">Transportation Options from IST to Taksim/Besiktas</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="font-semibold text-gray-900">Taxi</div>
                <div className="text-gray-600">45-60 minutes, metered fare to Taksim</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-gray-900">1,300-1,800 TL</div>
                <div className="text-gray-500 text-xs">(~$40-55 USD)</div>
              </div>
            </div>

            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="font-semibold text-gray-900">Metro (M11 + M2)</div>
                <div className="text-gray-600">Transfer at Gayrettepe, ~90 mins total</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-green-600">25-30 TL</div>
                <div className="text-gray-500 text-xs">(~$1 USD)</div>
              </div>
            </div>

            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="font-semibold text-gray-900">Havaist Shuttle Bus</div>
                <div className="text-gray-600">HVIST-9 line to Taksim, ~90 mins</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-blue-600">~200 TL</div>
                <div className="text-gray-500 text-xs">(~$6 USD)</div>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-4 mb-0">
            <strong>Recommendation:</strong> Take the taxi if your clinic doesn&apos;t provide pickup. After a 12-hour flight, the $50 is worth the convenience.
          </p>
        </div>

        <h2>Where to Stay in Istanbul</h2>
        <p>
          Most clinics include 2-4 nights at a partner hotel, but if you&apos;re booking yourself or extending:
        </p>

        <h3>Best Neighborhoods for Medical Tourists:</h3>

        <div className="grid gap-4 md:grid-cols-2 my-6 text-sm">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-purple-700 mb-2">Taksim (Most Popular)</h4>
            <p className="text-gray-700 mb-2"><strong>Why choose:</strong> Central location, tons of restaurants, metro connections, walkable to clinics</p>
            <p className="text-gray-600 mb-0"><strong>Hotels:</strong> $50-150/night<br/><strong>Vibe:</strong> Busy, modern, touristy</p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-bold text-purple-700 mb-2">Besiktas (Upscale)</h4>
            <p className="text-gray-700 mb-2"><strong>Why choose:</strong> Bosphorus views, upscale hotels, quieter than Taksim, ferry access</p>
            <p className="text-gray-600 mb-0"><strong>Hotels:</strong> $80-250/night<br/><strong>Vibe:</strong> Sophisticated, local feel</p>
          </div>
        </div>

        <h2>Your 7-Day Trip Timeline</h2>

        <div className="space-y-4 my-8">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">Day 1: Arrival</h4>
            <p className="text-sm text-gray-700 mb-2">Land at Istanbul Airport (IST), VIP pickup to hotel</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Check into hotel (usually 4-5 star in Taksim area)</li>
              <li>• Get Turkish SIM card or use hotel WiFi for WhatsApp</li>
              <li>• Light dinner, early bedtime (jet lag + big day tomorrow)</li>
              <li>• Clinic may do blood tests this evening or next morning</li>
            </ul>
          </div>

          <div className="border-l-4 border-red-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">Day 2: Surgery Day</h4>
            <p className="text-sm text-gray-700 mb-2">The big day - expect 6-8 hours at clinic</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Pickup from hotel (usually 8-9am)</li>
              <li>• Hairline design with surgeon (30-60 min—this is critical!)</li>
              <li>• Shaving donor area</li>
              <li>• Local anesthesia (the only painful part)</li>
              <li>• Extraction phase (2-3 hours—watch movies, relax)</li>
              <li>• Lunch break</li>
              <li>• Channel creation and implantation (3-4 hours)</li>
              <li>• Bandage, instructions, back to hotel</li>
              <li>• Early dinner, sleep (you&apos;ll be exhausted)</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">Day 3: First Wash & Check</h4>
            <p className="text-sm text-gray-700 mb-2">Return to clinic for professional wash</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Clinic pickup for first hair wash (gentle, professional)</li>
              <li>• Surgeon checks healing, gives at-home wash instructions</li>
              <li>• Receive aftercare kit (special shampoo, spray, etc.)</li>
              <li>• Rest of day: Hotel rest, Netflix, short walk if feeling good</li>
              <li>• You&apos;ll look rough—wear the clinic hat if going out</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">Days 4-6: Recovery & Tourism (Light)</h4>
            <p className="text-sm text-gray-700 mb-2">Cleared to explore, but take it easy</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Daily gentle hair washing at hotel</li>
              <li>• Light sightseeing OK: Hagia Sophia, Blue Mosque, Grand Bazaar</li>
              <li>• <strong>Avoid:</strong> Hammam/Turkish bath, strenuous activity, direct sun</li>
              <li>• Wear loose hat for sun protection</li>
              <li>• Most swelling gone by day 5-6</li>
              <li>• Scabs starting to form/fall off naturally</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">Day 7: Departure</h4>
            <p className="text-sm text-gray-700 mb-2">Cleared to fly home</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Use neck pillow on flight to avoid rubbing grafts</li>
              <li>• Bring soft hat for plane</li>
              <li>• Keep aftercare products in carry-on</li>
              <li>• WhatsApp follow-ups continue from home</li>
            </ul>
          </div>
        </div>

        <h2>What to Pack: The Ultimate Checklist</h2>

        <div className="bg-white border border-gray-300 rounded-lg p-6 my-8">
          <h3 className="text-gray-900 mt-0 mb-4">✈️ Travel Essentials</h3>
          <ul className="space-y-2 text-sm mb-6">
            <li className="flex gap-2">
              <span className="text-purple-600">□</span>
              <span><strong>Passport</strong> (must be valid 6+ months)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600">□</span>
              <span><strong>Return flight confirmation</strong> printed or on phone</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600">□</span>
              <span><strong>Travel insurance documents</strong></span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600">□</span>
              <span><strong>Credit card + $300-500 cash</strong> (USD or EUR)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600">□</span>
              <span><strong>Phone charger + international adapter</strong> (Turkey uses Type C/F plugs)</span>
            </li>
          </ul>

          <h3 className="text-gray-900 mt-6 mb-4">👕 Clothing (Critical for Post-Op Comfort)</h3>
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
              <span><strong>Slip-on shoes</strong> (bending over to tie shoes hurts day 2-3)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">□</span>
              <span><strong>Light jacket</strong> (Istanbul can be cool, especially at night)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">□</span>
              <span><strong>Soft, wide-brimmed hat</strong> (optional—clinic provides one)</span>
            </li>
          </ul>

          <h3 className="text-gray-900 mt-6 mb-4">💊 Medical & Recovery</h3>
          <ul className="space-y-2 text-sm mb-6">
            <li className="flex gap-2">
              <span className="text-green-600">□</span>
              <span><strong>Travel neck pillow</strong> (essential for flight home!)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">□</span>
              <span><strong>Pain relievers</strong> (Tylenol OK, avoid aspirin/ibuprofen)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">□</span>
              <span><strong>Any prescription meds</strong> you take regularly</li>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">□</span>
              <span><strong>Hand sanitizer & wet wipes</strong></span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">□</span>
              <span><strong>Small bag of snacks</strong> for hotel (you won&apos;t want to go out much)</span>
            </li>
          </ul>

          <h3 className="text-gray-900 mt-6 mb-4">🎬 Entertainment</h3>
          <ul className="space-y-2 text-sm mb-0">
            <li className="flex gap-2">
              <span className="text-orange-600">□</span>
              <span><strong>Downloaded movies/shows</strong> (you&apos;ll have downtime)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-orange-600">□</span>
              <span><strong>Book or Kindle</strong></span>
            </li>
            <li className="flex gap-2">
              <span className="text-orange-600">□</span>
              <span><strong>Headphones</strong></span>
            </li>
            <li className="flex gap-2">
              <span className="text-orange-600">□</span>
              <span><strong>Portable charger</strong></span>
            </li>
          </ul>
        </div>

        <h2>Money & Payments in Turkey</h2>
        <ul>
          <li><strong>Currency:</strong> Turkish Lira (TRY), but USD/EUR widely accepted at clinics</li>
          <li><strong>Pay clinic in:</strong> Wire transfer before arrival or cash/card on day 1</li>
          <li><strong>Daily expenses:</strong> $30-60/day for meals and miscellaneous</li>
          <li><strong>ATMs widely available:</strong> Take out lira for daily spending</li>
          <li><strong>Credit cards accepted:</strong> Most restaurants and shops</li>
          <li><strong>Tipping:</strong> 10-15% at restaurants, round up for services</li>
        </ul>

        <h2>What to Do in Istanbul (Recovery-Friendly Activities)</h2>
        <p>
          You&apos;ll have 3-5 days of downtime. Here&apos;s what you can do without stressing your scalp:
        </p>

        <h3>✅ Recovery-Friendly:</h3>
        <ul>
          <li><strong>Walking tours:</strong> Sultanahmet area, Hagia Sophia, Blue Mosque</li>
          <li><strong>Bosphorus ferry:</strong> Beautiful views, gentle activity</li>
          <li><strong>Grand Bazaar:</strong> Indoor shopping, no sun exposure</li>
          <li><strong>Coffee & food:</strong> Turkish breakfast, tea gardens, baklava shops</li>
          <li><strong>Museum visits:</strong> Topkapi Palace, Basilica Cistern</li>
        </ul>

        <h3>❌ Avoid During Recovery:</h3>
        <ul>
          <li>Turkish baths/hammam (sweating opens pores, infection risk)</li>
          <li>Swimming pools or sea</li>
          <li>Strenuous hiking or activities</li>
          <li>Excessive sun exposure (wear a hat)</li>
          <li>Crowded areas where people might bump your head</li>
          <li>Helmet activities (bikes, scooters)</li>
        </ul>

        <h2>Communication & Apps</h2>
        <p><strong>Download before you go:</strong></p>
        <ul>
          <li><strong>WhatsApp:</strong> How your clinic will contact you</li>
          <li><strong>Google Translate:</strong> Turkish to English (works offline)</li>
          <li><strong>Google Maps:</strong> Download Istanbul offline map</li>
          <li><strong>BiTaksi or Uber:</strong> Taxi apps work in Istanbul</li>
          <li><strong>IstanbulKart app:</strong> For metro/bus (or buy card at airport for 130 TL)</li>
        </ul>

        <h2>Pro Tips from Repeat Medical Tourists</h2>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
          <ul className="text-sm text-blue-800 space-y-2 mb-0">
            <li>💡 <strong>Bring photos of hairlines you like</strong> to show surgeon during design phase</li>
            <li>💡 <strong>Take lots of photos during the procedure</strong> for your records</li>
            <li>💡 <strong>Ask questions before they start</strong>—during isn&apos;t ideal</li>
            <li>💡 <strong>Buy extra pillow cases</strong> at Istanbul mall (you&apos;ll get blood/ooze on them)</li>
            <li>💡 <strong>Download Netflix content before flight</strong> (long procedure day)</li>
            <li>💡 <strong>Bring empty water bottle through airport</strong> security, fill after</li>
            <li>💡 <strong>Get clinic WhatsApp before you fly</strong> in case pickup falls through</li>
          </ul>
        </div>

        <h2>Sample Trip Budget (All-In)</h2>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 text-sm">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Hair transplant package (mid-tier clinic)</span>
              <span className="font-semibold">$3,500</span>
            </div>
            <div className="flex justify-between text-gray-600 pl-4">
              <span className="text-xs">Includes: procedure, 3-night hotel, transfers, medications</span>
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
            <div className="border-t-2 border-gray-300 pt-2 mt-2 flex justify-between font-bold text-base">
              <span>Total All-In Cost</span>
              <span className="text-purple-600">~$5,025</span>
            </div>
            <div className="flex justify-between text-gray-600 text-xs pt-1">
              <span>vs. US equivalent</span>
              <span>$12,000-20,000</span>
            </div>
          </div>
        </div>

        <h2>After You Return Home</h2>
        <ul>
          <li><strong>Days 7-14:</strong> Scabs fall off naturally (don&apos;t pick!), can return to work remotely</li>
          <li><strong>Weeks 3-12:</strong> Shock loss phase—transplanted hairs fall out (this is normal!)</li>
          <li><strong>Monthly photos:</strong> WhatsApp them to your clinic for tracking</li>
          <li><strong>Start finasteride/minoxidil:</strong> If recommended by surgeon</li>
          <li><strong>Patience required:</strong> Final results at 12-18 months</li>
        </ul>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6">
          <h4 className="text-amber-900 mt-0 mb-2">⚠️ When to Contact Your Clinic</h4>
          <p className="text-sm text-amber-800 mb-0">
            <strong>WhatsApp them immediately if you experience:</strong> Excessive bleeding, severe pain not controlled by meds, signs of infection (fever, pus, worsening redness), or grafts falling out in the first 10 days. They have 24/7 support for a reason!
          </p>
        </div>

        <h2>The Bottom Line</h2>
        <p>
          Planning a hair transplant trip to Turkey is straightforward once you know the steps. Book a reputable clinic 2-3 months out, get your flights, pack smart (button-ups!), and expect 5-7 days total.
        </p>
        <p>
          <strong>The trip itself is easy.</strong> Istanbul is set up for medical tourists—English is widely spoken, transfers are coordinated, and you&apos;ll meet dozens of other Americans doing the same thing.
        </p>
        <p>
          The hardest part? Patience waiting for results over the next 12-18 months.
        </p>

        {/* CTA */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-8 my-12 text-center">
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

        {/* Sources */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <a href="https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Turkey Ministry of Foreign Affairs: Visa Information</a></li>
            <li>• <a href="https://theistanbulinsider.com/how-to-get-from-the-new-istanbul-airport-to-taksim-or-sultanahmet/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Istanbul Airport to Taksim Transportation Guide</a></li>
            <li>• <a href="https://cosmedica.com/a-hair-transplant-in-turkey-what-to-take/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">What to Pack for Hair Transplant in Turkey</a></li>
            <li>• <a href="https://www.drserkanaygin.com/blog/turkey-hair-transplant-essential-travel-tips/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Turkey Hair Transplant: Essential Travel Tips</a></li>
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
