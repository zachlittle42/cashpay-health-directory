import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mexico Medical Tourism: Complete Trip Planning Guide (2024)',
  description: 'Step-by-step guide to planning medical tourism in Mexico. Border crossing, Tijuana vs Los Algodones, what to pack, and trip timeline.',
};

export default function MexicoTripPlanner() {
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
              Trip Planning Guide
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Planning Your Medical Trip to Mexico
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to know to plan a safe, smooth medical tourism trip to Tijuana, Los Algodones, or Cancun.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Last updated: December 2024 • 15 min read
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-12 prose prose-lg">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-bold text-green-900 mt-0 mb-2">Trip Planning At a Glance</h3>
          <ul className="mb-0 text-sm text-gray-700 space-y-1">
            <li>✓ <strong>Passport required</strong> (passport card OK for land crossing)</li>
            <li>✓ <strong>No visa needed</strong> for visits under 180 days</li>
            <li>✓ <strong>Border clinics:</strong> Walkable from US, same-day possible</li>
            <li>✓ <strong>Average trip:</strong> 3-7 days depending on procedure</li>
            <li>✓ <strong>Budget:</strong> Procedure cost + $500-1,500 for travel/hotels</li>
          </ul>
        </div>

        <h2>Choosing Your Destination in Mexico</h2>
        <p>
          Mexico has three main medical tourism hubs, each with different advantages:
        </p>

        <div className="grid gap-6 md:grid-cols-3 my-8 text-sm">
          <div className="bg-white border-2 border-blue-200 rounded-lg p-5">
            <h3 className="text-lg font-bold text-blue-900 mt-0 mb-2">Tijuana</h3>
            <p className="text-gray-600 mb-3"><strong>Best for:</strong> Bariatric surgery, dental, plastic surgery</p>
            <ul className="text-gray-700 space-y-1 mb-0">
              <li>✓ 20 min from San Diego</li>
              <li>✓ Drive or walk across</li>
              <li>✓ Most bariatric centers</li>
              <li>✓ Modern hospitals</li>
              <li>✗ Border town vibe</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-green-200 rounded-lg p-5">
            <h3 className="text-lg font-bold text-green-900 mt-0 mb-2">Los Algodones</h3>
            <p className="text-gray-600 mb-3"><strong>Best for:</strong> Dental work only</p>
            <ul className="text-gray-700 space-y-1 mb-0">
              <li>✓ Walk from Yuma, AZ</li>
              <li>✓ 600+ dental clinics</li>
              <li>✓ "Molar City" reputation</li>
              <li>✓ Same-day trips possible</li>
              <li>✗ Tiny town, dental only</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-purple-200 rounded-lg p-5">
            <h3 className="text-lg font-bold text-purple-900 mt-0 mb-2">Cancun</h3>
            <p className="text-gray-600 mb-3"><strong>Best for:</strong> Dental + vacation combo</p>
            <ul className="text-gray-700 space-y-1 mb-0">
              <li>✓ Beach resort setting</li>
              <li>✓ Recover on the beach</li>
              <li>✓ Direct flights nationwide</li>
              <li>✓ Premium experience</li>
              <li>✗ Higher travel costs</li>
            </ul>
          </div>
        </div>

        <h2>Border Crossing 101</h2>

        <h3>Tijuana (from San Diego)</h3>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
          <h4 className="text-blue-900 mt-0 mb-3">Easiest Method: Walk Across</h4>
          <ol className="text-sm space-y-2 mb-0">
            <li><strong>Park in San Ysidro:</strong> Park on US side (~$10-15/day at border parking lots)</li>
            <li><strong>Walk to pedestrian crossing:</strong> Follow signs to "PedWest" or "PedEast" crossings</li>
            <li><strong>Cross into Mexico:</strong> Show passport, walk through (rarely questioned going IN)</li>
            <li><strong>Clinic pickup:</strong> Most clinics offer free pickup at the border crossing</li>
            <li><strong>Returning to US:</strong> Passport required, can take 30min-2hrs depending on time of day</li>
          </ol>
          <p className="text-sm text-blue-800 mt-4 mb-0">
            <strong>Pro tip:</strong> Get a "Medical Pass" from your clinic to use the faster medical lane when returning to US.
          </p>
        </div>

        <h3>Los Algodones (from Yuma, Arizona)</h3>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-6">
          <h4 className="text-green-900 mt-0 mb-3">The Easiest Border Crossing in America</h4>
          <ol className="text-sm space-y-2 mb-0">
            <li><strong>Park at Quechan lot:</strong> $10/day, 15-minute walk to border</li>
            <li><strong>Walk across Andrade Border:</strong> Open 6am-10pm daily</li>
            <li><strong>Dental clinics visible immediately:</strong> Literally steps from the border</li>
            <li><strong>Same-day trips common:</strong> Park at 8am, dental work, back by 3pm</li>
          </ol>
          <p className="text-sm text-green-800 mt-4 mb-0">
            <strong>Why it&apos;s popular:</strong> Los Algodones is 99% dental clinics. Over 1 million crossings annually. It&apos;s literally designed for dental tourism.
          </p>
        </div>

        <h2>What to Pack: The Essential Checklist</h2>

        <div className="bg-white border border-gray-300 rounded-lg p-6 my-8">
          <h3 className="text-gray-900 mt-0 mb-4">Documents (Non-Negotiable)</h3>
          <ul className="space-y-2 text-sm mb-6">
            <li className="flex gap-2">
              <span className="text-green-600">□</span>
              <span><strong>Passport</strong> (or passport card for land crossing)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">□</span>
              <span><strong>Printed booking confirmation</strong> from clinic</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">□</span>
              <span><strong>Travel insurance documents</strong></span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">□</span>
              <span><strong>Credit card + cash</strong> (USD accepted everywhere)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">□</span>
              <span><strong>Medical records</strong> if you have relevant conditions</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-600">□</span>
              <span><strong>List of current medications</strong></span>
            </li>
          </ul>

          <h3 className="text-gray-900 mt-6 mb-4">Medical & Recovery</h3>
          <ul className="space-y-2 text-sm mb-6">
            <li className="flex gap-2">
              <span className="text-blue-600">□</span>
              <span><strong>Prescriptions</strong> in original bottles (enough for whole trip + extra)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">□</span>
              <span><strong>Over-the-counter meds</strong> (Tylenol, anti-nausea, stool softener for bariatric)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">□</span>
              <span><strong>Small pillow</strong> for flights and recovery</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">□</span>
              <span><strong>Antibacterial wipes</strong> and hand sanitizer</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">□</span>
              <span><strong>Chapstick and moisturizer</strong> (dry climate)</span>
            </li>
          </ul>

          <h3 className="text-gray-900 mt-6 mb-4">Clothing (Post-Surgery Friendly)</h3>
          <ul className="space-y-2 text-sm mb-0">
            <li className="flex gap-2">
              <span className="text-purple-600">□</span>
              <span><strong>Button-up shirts or zip hoodies</strong> (avoid pulling over head)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600">□</span>
              <span><strong>Loose, comfortable pants</strong></span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600">□</span>
              <span><strong>Slip-on shoes</strong> (bending over can be hard post-surgery)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600">□</span>
              <span><strong>Light jacket or sweater</strong></span>
            </li>
          </ul>
        </div>

        <h2>Typical Trip Timeline: Bariatric Surgery Example</h2>

        <div className="space-y-4 my-8">
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">3-4 Weeks Before</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-0">
              <li>• Book procedure and get confirmation</li>
              <li>• Purchase flights/arrange transportation</li>
              <li>• Get travel insurance</li>
              <li>• Schedule time off work</li>
              <li>• Start pre-op diet if required</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">1 Week Before</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-0">
              <li>• Stop alcohol, smoking, blood thinners</li>
              <li>• Pack your bags</li>
              <li>• Download clinic WhatsApp contact</li>
              <li>• Notify your US doctor</li>
              <li>• Arrange pet/house sitting if needed</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">Day 1: Travel & Arrival</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-0">
              <li>• Cross border or fly to Tijuana/Cancun</li>
              <li>• Clinic pickup to hotel</li>
              <li>• Meet surgeon, sign consent forms</li>
              <li>• Pre-op labs and chest X-ray</li>
              <li>• Early bedtime (surgery tomorrow!)</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">Day 2: Surgery Day</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-0">
              <li>• Arrive at hospital early morning</li>
              <li>• Surgery (1-2 hours for sleeve/bypass)</li>
              <li>• Recovery room, then hospital room</li>
              <li>• Overnight in hospital with nursing care</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">Days 3-4: Hospital to Hotel</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-0">
              <li>• Transfer to recovery hotel</li>
              <li>• Liquid diet, walking encouraged</li>
              <li>• Daily check-ins with medical team</li>
              <li>• Watch Netflix, rest, short walks</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-bold text-gray-900 mb-1">Day 5: Return Home</h4>
            <ul className="text-sm text-gray-700 space-y-1 mb-0">
              <li>• Final check with surgeon</li>
              <li>• Receive medications and diet plan</li>
              <li>• Return across border or fly home</li>
              <li>• Follow-up via WhatsApp ongoing</li>
            </ul>
          </div>
        </div>

        <h2>Border Crossing Tips: Avoid Common Mistakes</h2>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-6">
          <h4 className="text-yellow-900 mt-0 mb-3">🚗 Driving Your Car Across</h4>
          <p className="text-sm text-yellow-800 mb-2">
            <strong>Don&apos;t do this unless you have to.</strong> Driving into Mexico requires:
          </p>
          <ul className="text-sm text-yellow-800 space-y-1 mb-3">
            <li>• Mexican car insurance (US insurance doesn&apos;t cover Mexico)</li>
            <li>• Vehicle permit if going beyond border zone</li>
            <li>• 1-3 hour wait returning to US during peak times</li>
          </ul>
          <p className="text-sm text-yellow-800 mb-0">
            <strong>Better option:</strong> Park on US side ($10-15/day), walk across, clinic provides transport on Mexico side.
          </p>
        </div>

        <h3>Walking Across: Step by Step</h3>
        <p><strong>Tijuana (San Ysidro/PedWest):</strong></p>
        <ol className="text-sm">
          <li>Park at one of the border parking lots in San Ysidro ($10-20/day)</li>
          <li>Follow signs to "Pedestrian Crossing" or "PedWest"</li>
          <li>Go through US exit turnstile (no passport check leaving US)</li>
          <li>Walk across bridge (5-10 minutes)</li>
          <li>Mexico entry: Show passport to Mexican customs (usually just wave you through)</li>
          <li>Exit gate, your clinic should have someone waiting with a sign</li>
        </ol>

        <p><strong>Los Algodones (Andrade Border):</strong></p>
        <ol className="text-sm">
          <li>Park at Quechan Casino parking ($10/day)</li>
          <li>15-minute walk to Andrade border crossing</li>
          <li>Walk straight across (it&apos;s tiny—you&apos;ll see Mexico immediately)</li>
          <li>Dental clinics are literally 50 feet from the border</li>
        </ol>

        <h3>Returning to the US</h3>
        <ul>
          <li><strong>Bring your passport</strong> (they WILL check this time)</li>
          <li><strong>Declare anything you&apos;re bringing back</strong> (medications, dental work materials)</li>
          <li><strong>Use the Medical Lane if you have a pass</strong> from your clinic</li>
          <li><strong>Best times to cross:</strong> Early morning (6-8am) or late evening (7-9pm) to avoid peak wait times</li>
          <li><strong>Check wait times:</strong> CBP Border Wait Times app or call 619-690-8999</li>
        </ul>

        <h2>Where to Stay</h2>
        <p>
          Most all-inclusive packages include a hotel, but if you&apos;re booking separately:
        </p>

        <h3>Tijuana Recommendations:</h3>
        <ul>
          <li><strong>Zona Rio area:</strong> Modern, safe, clinic-friendly. Hotels: City Express, Hampton Inn</li>
          <li><strong>Near your clinic:</strong> Many recovery hotels are adjacent to surgical centers</li>
          <li><strong>Budget:</strong> $50-150/night for clean, safe options</li>
        </ul>

        <h3>Los Algodones:</h3>
        <ul>
          <li>Most people stay in Yuma, AZ and walk across daily</li>
          <li>Yuma hotels: $60-120/night</li>
          <li>Some stay in Los Algodones itself ($40-80/night) but limited options</li>
        </ul>

        <h2>Safety Considerations</h2>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
          <h4 className="text-red-900 mt-0 mb-3">⚠️ Stay Safe in Border Towns</h4>
          <ul className="text-sm text-red-800 space-y-2 mb-0">
            <li>• <strong>Stick to medical tourism areas:</strong> Zona Rio in Tijuana, dental district in Algodones</li>
            <li>• <strong>Use clinic transportation:</strong> Don&apos;t wander trying to find your clinic</li>
            <li>• <strong>Avoid walking at night:</strong> Stay in your hotel after dark</li>
            <li>• <strong>Don&apos;t flash valuables:</strong> Leave expensive jewelry/watches at home</li>
            <li>• <strong>Keep clinic number handy:</strong> WhatsApp them if you feel unsafe</li>
            <li>• <strong>Trust your gut:</strong> If something feels wrong, it probably is</li>
          </ul>
        </div>

        <p>
          <strong>Reality check:</strong> Millions of Americans visit Tijuana and Los Algodones annually for medical care without incident. The medical tourism zones are generally safe, especially during daytime. Just use common sense.
        </p>

        <h2>Money Matters</h2>
        <h3>Payment Methods:</h3>
        <ul>
          <li><strong>Clinics accept:</strong> Cash (USD), credit cards, wire transfer, Zelle</li>
          <li><strong>USD widely accepted:</strong> No need to exchange to pesos for medical tourism</li>
          <li><strong>Credit card fees:</strong> Some clinics add 3-5% for credit cards</li>
          <li><strong>ATMs available:</strong> But use caution (card skimming exists)</li>
        </ul>

        <h3>Daily Expenses:</h3>
        <ul>
          <li><strong>Meals:</strong> $5-15 per meal (very affordable)</li>
          <li><strong>Uber in Tijuana:</strong> $3-8 for most trips</li>
          <li><strong>Tips:</strong> 15-20% at restaurants (not expected at clinics)</li>
          <li><strong>Bottled water:</strong> $1-2 (don&apos;t drink tap water)</li>
        </ul>

        <h2>Communication</h2>
        <ul>
          <li><strong>English widely spoken</strong> at medical tourism facilities</li>
          <li><strong>Get WhatsApp</strong> before you go (how clinics communicate)</li>
          <li><strong>T-Mobile/AT&T work</strong> in Tijuana (may have roaming fees—check your plan)</li>
          <li><strong>Clinic translators</strong> provided for all medical discussions</li>
        </ul>

        <h2>Sample 5-Day Budget: Bariatric Surgery</h2>

        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6 text-sm">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Gastric Sleeve (all-inclusive)</span>
              <span className="font-semibold">$4,500</span>
            </div>
            <div className="flex justify-between">
              <span>Round-trip flight San Diego-Tijuana</span>
              <span className="font-semibold">$0-300</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span className="pl-4">(or drive + parking)</span>
              <span>$50</span>
            </div>
            <div className="flex justify-between">
              <span>Extra hotel night (if desired)</span>
              <span className="font-semibold">$0-150</span>
            </div>
            <div className="flex justify-between">
              <span>Meals (not in package)</span>
              <span className="font-semibold">$100</span>
            </div>
            <div className="flex justify-between">
              <span>Travel insurance</span>
              <span className="font-semibold">$50-100</span>
            </div>
            <div className="flex justify-between">
              <span>Miscellaneous (meds, tips, etc.)</span>
              <span className="font-semibold">$100</span>
            </div>
            <div className="border-t-2 border-gray-300 pt-2 mt-2 flex justify-between font-bold text-base">
              <span>Total Trip Cost</span>
              <span className="text-green-600">$4,900-5,300</span>
            </div>
            <div className="flex justify-between text-gray-600 text-xs pt-1">
              <span>vs. US self-pay</span>
              <span>$18,000-25,000</span>
            </div>
          </div>
        </div>

        <h2>Common Questions Before You Go</h2>

        <h3>&quot;Should I bring someone with me?&quot;</h3>
        <p>
          <strong>For surgery: Highly recommended.</strong> Bariatric or cosmetic surgery recovery is easier with support. For simple dental work: Optional but nice for company.
        </p>
        <p>
          Most packages include companion accommodation in your room at no extra cost. They just pay their own flights/meals.
        </p>

        <h3>&quot;What if I don&apos;t speak Spanish?&quot;</h3>
        <p>
          <strong>You&apos;ll be fine.</strong> Medical tourism facilities in Tijuana and Los Algodones are designed for American patients:
        </p>
        <ul>
          <li>All staff speak English</li>
          <li>Translators provided for medical discussions</li>
          <li>Signs/menus often in English in tourist areas</li>
          <li>Point at things worst case—people are friendly</li>
        </ul>

        <h3>&quot;Is it safe to be in Tijuana right now?&quot;</h3>
        <p>
          <strong>The medical tourism zones are generally safe.</strong> Check current State Department travel advisories, but understand they cover the entire state. The Zona Rio medical district where most clinics operate is quite different from areas with cartel activity.
        </p>
        <p>
          <strong>Millions of Americans</strong> visit Tijuana and Los Algodones for medical care annually. Use common sense, stay in touristy/medical areas, and you&apos;ll be fine.
        </p>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-8 my-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Explore Mexico Providers?</h3>
          <p className="text-gray-600 mb-6">
            Compare certified surgeons and clinics in Tijuana, Los Algodones, and Cancun.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/dental" className="inline-block rounded-lg bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700">
              Dental Providers
            </Link>
            <Link href="/bariatric" className="inline-block rounded-lg bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700">
              Bariatric Surgeons
            </Link>
            <Link href="/destinations/mexico" className="inline-block rounded-lg border-2 border-green-600 px-6 py-3 font-medium text-green-600 hover:bg-green-50">
              Mexico Destination Guide
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 my-8">
          <h4 className="text-gray-900 font-bold mb-2">Travel Disclaimer</h4>
          <p className="text-sm text-gray-700 mb-0">
            Border crossing requirements and travel advisories can change. Always check current State Department guidance and CBP requirements before traveling. This guide is for planning purposes and may not reflect real-time changes to border policies.
          </p>
        </div>

        {/* Sources */}
        <div className="border-t border-gray-200 pt-8 mt-12">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Sources</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• <a href="https://www.sandiego.org/plan-your-trip/visitors-centers-information/border-crossing" target="_blank" rel="noopener" className="text-blue-600 hover:underline">San Diego Tourism: Crossing the US/Mexico Border</a></li>
            <li>• <a href="https://dentaldelrioalgodones.com/blog/dental-tourism/crossing-the-los-algodones-border/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Los Algodones Border Crossing Full Guide</a></li>
            <li>• <a href="https://luxoraexperiences.com/blogs/medical-tourism-packing-list" target="_blank" rel="noopener" className="text-blue-600 hover:underline">What to Pack for Medical Tourism Trip</a></li>
            <li>• <a href="https://renewbariatrics.com/faqs/travel/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Travel Guide to Bariatric Surgery in Mexico</a></li>
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
