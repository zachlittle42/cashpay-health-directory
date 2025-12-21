import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span className="text-xl font-bold text-gray-900">VitalityScout</span>
          </Link>

          {/* Main Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Home */}
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
              Home
            </Link>

            {/* US Hospitals - Direct Link */}
            <Link href="/traditional-healthcare" className="text-gray-700 hover:text-gray-900 font-medium">
              US Hospitals
            </Link>

            {/* Browse Services - Mega Menu */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 font-medium flex items-center gap-1">
                Browse Services
                <span className="text-xs">▼</span>
              </button>
              <div className="absolute left-0 mt-2 w-[900px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50 max-h-[80vh] overflow-y-auto">
                <div className="grid grid-cols-4 gap-6 px-6">
                  {/* Telehealth */}
                  <div>
                    <div className="text-xs font-bold text-blue-600 uppercase mb-3">Telehealth</div>
                    <div className="space-y-1.5">
                      <Link href="/labs" className="block text-sm text-gray-700 hover:text-blue-600">🧪 At-Home Lab Testing</Link>
                      <Link href="/glp1" className="block text-sm text-gray-700 hover:text-blue-600">💊 GLP-1 Programs</Link>
                      <Link href="/trt" className="block text-sm text-gray-700 hover:text-blue-600">💪 TRT & Hormones</Link>
                    </div>
                  </div>

                  {/* Local Clinics */}
                  <div>
                    <div className="text-xs font-bold text-green-600 uppercase mb-3">Local Clinics</div>
                    <div className="space-y-1.5">
                      <Link href="/dexa" className="block text-sm text-gray-700 hover:text-green-600">📊 DEXA Scans</Link>
                      <Link href="/vo2max" className="block text-sm text-gray-700 hover:text-green-600">🫀 VO2 Max</Link>
                      <Link href="/iv" className="block text-sm text-gray-700 hover:text-green-600">💧 IV Therapy</Link>
                      <Link href="/longevity" className="block text-sm text-gray-700 hover:text-green-600">⏳ Longevity</Link>
                    </div>
                  </div>

                  {/* Medical Tourism */}
                  <div>
                    <div className="text-xs font-bold text-purple-600 uppercase mb-3">Medical Tourism</div>
                    <div className="space-y-1.5">
                      <Link href="/dental" className="block text-sm text-gray-700 hover:text-purple-600">🦷 Dental</Link>
                      <Link href="/hair_transplant" className="block text-sm text-gray-700 hover:text-purple-600">💇 Hair Transplant</Link>
                      <Link href="/bariatric" className="block text-sm text-gray-700 hover:text-purple-600">⚖️ Bariatric</Link>
                      <Link href="/plastic_surgery" className="block text-sm text-gray-700 hover:text-purple-600">✨ Plastic Surgery</Link>
                      <Link href="/fertility" className="block text-sm text-gray-700 hover:text-purple-600">🍼 Fertility/IVF</Link>
                      <Link href="/orthopedic" className="block text-sm text-gray-700 hover:text-purple-600">🦴 Orthopedic</Link>
                      <Link href="/cardiac" className="block text-sm text-gray-700 hover:text-purple-600">❤️ Cardiac</Link>
                      <Link href="/vision" className="block text-sm text-gray-700 hover:text-purple-600">👁️ Vision</Link>
                    </div>
                  </div>

                  {/* Traditional Healthcare */}
                  <div>
                    <div className="text-xs font-bold text-orange-600 uppercase mb-3">Traditional</div>
                    <div className="space-y-1.5">
                      <Link href="/traditional-healthcare" className="block text-sm font-medium text-gray-900 hover:text-orange-600">🏥 All 50 States</Link>
                      <div className="text-xs text-gray-500 mt-2 mb-1">Top States:</div>
                      <Link href="/traditional-healthcare/california" className="block text-xs text-gray-600 hover:text-orange-600">California</Link>
                      <Link href="/traditional-healthcare/texas" className="block text-xs text-gray-600 hover:text-orange-600">Texas</Link>
                      <Link href="/traditional-healthcare/florida" className="block text-xs text-gray-600 hover:text-orange-600">Florida</Link>
                      <Link href="/traditional-healthcare/new-york" className="block text-xs text-gray-600 hover:text-orange-600">New York</Link>
                      <Link href="/traditional-healthcare/pennsylvania" className="block text-xs text-gray-600 hover:text-orange-600">Pennsylvania</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guides - Detailed Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 font-medium flex items-center gap-1">
                Guides
                <span className="text-xs">▼</span>
              </button>
              <div className="absolute left-0 mt-2 w-96 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-white rounded-lg shadow-xl border border-gray-200 py-3 z-50 max-h-[80vh] overflow-y-auto">
                <div className="px-4">
                  <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Procedure Guides</div>
                  <div className="space-y-1.5 mb-4">
                    <Link href="/guides/glp1-weight-loss-complete-guide" className="block text-sm text-gray-700 hover:text-blue-600 py-1">
                      💊 GLP-1 for Weight Loss
                    </Link>
                    <Link href="/guides/hair-transplant-turkey-guide" className="block text-sm text-gray-700 hover:text-blue-600 py-1">
                      💇 Hair Transplant in Turkey
                    </Link>
                    <Link href="/guides/at-home-lab-testing-guide" className="block text-sm text-gray-700 hover:text-blue-600 py-1">
                      🧪 At-Home Lab Testing
                    </Link>
                    <Link href="/guides/gastric-sleeve-mexico-safety" className="block text-sm text-gray-700 hover:text-blue-600 py-1">
                      ⚖️ Gastric Sleeve in Mexico
                    </Link>
                    <Link href="/guides/dexa-scan-guide" className="block text-sm text-gray-700 hover:text-blue-600 py-1">
                      📊 DEXA Scan Guide
                    </Link>
                  </div>

                  <div className="border-t border-gray-200 pt-3 mb-2">
                    <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Trip Planning</div>
                  </div>
                  <div className="space-y-1.5 mb-4">
                    <Link href="/guides/mexico-medical-tourism-planner" className="block text-sm text-gray-700 hover:text-blue-600 py-1">
                      🇲🇽 Mexico Trip Planner
                    </Link>
                    <Link href="/guides/turkey-hair-transplant-trip-planner" className="block text-sm text-gray-700 hover:text-blue-600 py-1">
                      🇹🇷 Turkey Trip Planner
                    </Link>
                    <Link href="/guides/medical-travel-insurance-guide" className="block text-sm text-gray-700 hover:text-blue-600 py-1">
                      🛡️ Medical Travel Insurance
                    </Link>
                  </div>

                  <div className="border-t border-gray-200 pt-3">
                    <Link href="/guides" className="block text-sm font-medium text-blue-600 hover:text-blue-700 py-1">
                      View All Guides →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ - Detailed Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 font-medium flex items-center gap-1">
                FAQ
                <span className="text-xs">▼</span>
              </button>
              <div className="absolute left-0 mt-2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-white rounded-lg shadow-xl border border-gray-200 py-3 z-50">
                <div className="px-4">
                  <Link href="/faq" className="block text-sm font-medium text-gray-900 hover:text-blue-600 py-2 mb-2">
                    General FAQ
                  </Link>
                  <div className="border-t border-gray-200 pt-2 mb-2">
                    <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Topic-Specific FAQs</div>
                  </div>
                  <div className="space-y-1.5">
                    <Link href="/faq/glp1" className="block text-sm text-gray-700 hover:text-blue-600 py-1">
                      💊 GLP-1 Weight Loss FAQ
                    </Link>
                    <Link href="/faq/medical-tourism" className="block text-sm text-gray-700 hover:text-blue-600 py-1">
                      ✈️ Medical Tourism FAQ
                    </Link>
                    <Link href="/faq/labs" className="block text-sm text-gray-700 hover:text-blue-600 py-1">
                      🧪 Lab Testing FAQ
                    </Link>
                    <Link href="/faq/hair-transplant" className="block text-sm text-gray-700 hover:text-blue-600 py-1">
                      💇 Hair Transplant FAQ
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Link href="/" className="text-sm text-blue-600 font-medium">
              Menu
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
