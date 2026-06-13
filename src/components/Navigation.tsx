'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setExpandedSection(null);
  };

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span className="text-xl font-bold text-gray-900">VitalityScout</span>
          </Link>

          {/* Main Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Home */}
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
              Home
            </Link>

            {/* Browse Services - Mega Menu */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 font-medium flex items-center gap-1">
                Browse Services
                <span className="text-xs">▼</span>
              </button>
              <div className="fixed left-1/2 -translate-x-1/2 top-14 w-[1100px] max-w-[calc(100vw-2rem)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50 max-h-[80vh] overflow-y-auto">
                <div className="grid grid-cols-6 gap-6 px-6">
                  {/* US Services */}
                  <div>
                    <div className="text-xs font-bold text-blue-600 uppercase mb-3">US Services</div>
                    <div className="space-y-1.5">
                      <Link href="/labs" className="block text-sm text-gray-700 hover:text-blue-600">🧪 At-Home Labs</Link>
                      <Link href="/hormone-therapy" className="block text-sm font-medium text-gray-900 hover:text-blue-600">💪 Hormone Therapy</Link>
                      <Link href="/weight-loss" className="block text-sm font-medium text-gray-900 hover:text-blue-600">💊 Weight Loss / GLP-1</Link>
                      <div className="text-xs text-gray-500 mt-2 mb-1">Telehealth Care:</div>
                      <Link href="/mens-health" className="block text-xs text-gray-600 hover:text-blue-600">Men&apos;s Health (ED &amp; Hair)</Link>
                      <Link href="/womens-health" className="block text-xs text-gray-600 hover:text-blue-600">Menopause &amp; HRT</Link>
                      <Link href="/skincare" className="block text-xs text-gray-600 hover:text-blue-600">Prescription Skincare</Link>
                      <Link href="/mental-health" className="block text-xs text-gray-600 hover:text-blue-600">Therapy &amp; Psychiatry</Link>
                      <div className="text-xs text-gray-500 mt-2 mb-1">Wellness &amp; Aesthetics:</div>
                      <Link href="/med-spa" className="block text-sm font-medium text-gray-900 hover:text-rose-600">✨ Med Spa &amp; Aesthetics</Link>
                      <Link href="/iv" className="block text-xs text-gray-600 hover:text-rose-600 pl-3">IV Therapy</Link>
                      <div className="text-xs text-gray-500 mt-2 mb-1">Performance Testing:</div>
                      <Link href="/dexa" className="block text-xs text-gray-600 hover:text-blue-600">DEXA Providers</Link>
                      <Link href="/dexa-scans" className="block text-xs text-gray-600 hover:text-blue-600">DEXA Scans Near You</Link>
                      <Link href="/vo2max" className="block text-xs text-gray-600 hover:text-blue-600">VO2 Max</Link>
                      <Link href="/longevity" className="block text-xs text-gray-600 hover:text-blue-600">Longevity Clinics</Link>
                      <div className="text-xs text-gray-500 mt-2 mb-1">Longevity &amp; Performance:</div>
                      <Link href="/longevity-performance" className="block text-sm font-medium text-gray-900 hover:text-emerald-600">🧬 Shop Longevity &amp; Performance</Link>
                      <Link href="/cgm" className="block text-xs text-gray-600 hover:text-emerald-600 pl-3">Glucose Monitors (CGM)</Link>
                      <Link href="/longevity-rx" className="block text-xs text-gray-600 hover:text-emerald-600 pl-3">Longevity Medications</Link>
                      <Link href="/peptides" className="block text-xs text-gray-600 hover:text-emerald-600 pl-3">Peptide Therapy</Link>
                      <Link href="/supplements" className="block text-xs text-gray-600 hover:text-emerald-600 pl-3">Longevity Supplements</Link>
                      <Link href="/recovery-tech" className="block text-xs text-gray-600 hover:text-emerald-600 pl-3">Recovery &amp; Performance Tech</Link>
                    </div>
                  </div>

                  {/* Medical Tourism */}
                  <div>
                    <div className="text-xs font-bold text-purple-600 uppercase mb-3">Medical Tourism</div>
                    <div className="space-y-1.5">
                      <Link href="/stem-cells" className="block text-sm font-medium text-gray-900 hover:text-purple-600">🧬 Stem Cells</Link>
                      <Link href="/stem-cells/mexico" className="block text-xs text-gray-600 hover:text-purple-600 pl-3">Mexico</Link>
                      <Link href="/stem-cells/panama" className="block text-xs text-gray-600 hover:text-purple-600 pl-3">Panama</Link>
                      <Link href="/hair_transplant" className="block text-sm text-gray-700 hover:text-purple-600">💇 Hair Transplant</Link>
                      <Link href="/plastic_surgery" className="block text-sm text-gray-700 hover:text-purple-600">✨ Plastic Surgery</Link>
                      <Link href="/dental" className="block text-sm text-gray-700 hover:text-purple-600">🦷 Dental</Link>
                      <Link href="/bariatric" className="block text-sm text-gray-700 hover:text-purple-600">⚖️ Bariatric</Link>
                    </div>
                  </div>

                  {/* More Medical Tourism */}
                  <div>
                    <div className="text-xs font-bold text-purple-600 uppercase mb-3">More Procedures</div>
                    <div className="space-y-1.5">
                      <Link href="/fertility" className="block text-sm text-gray-700 hover:text-purple-600">🍼 Fertility/IVF</Link>
                      <Link href="/orthopedic" className="block text-sm text-gray-700 hover:text-purple-600">🦴 Orthopedic</Link>
                      <Link href="/cardiac" className="block text-sm text-gray-700 hover:text-purple-600">❤️ Cardiac</Link>
                      <Link href="/vision" className="block text-sm text-gray-700 hover:text-purple-600">👁️ Vision</Link>
                    </div>
                  </div>

                  {/* By Destination */}
                  <div>
                    <div className="text-xs font-bold text-purple-600 uppercase mb-3">By Destination</div>
                    <div className="space-y-1.5">
                      <Link href="/medical-tourism" className="block text-sm font-medium text-gray-900 hover:text-purple-600">✈️ All Destinations</Link>
                      <Link href="/destinations/mexico" className="block text-xs text-gray-600 hover:text-purple-600">🇲🇽 Mexico</Link>
                      <Link href="/destinations/turkey" className="block text-xs text-gray-600 hover:text-purple-600">🇹🇷 Turkey</Link>
                      <Link href="/destinations/south-korea" className="block text-xs text-gray-600 hover:text-purple-600">🇰🇷 South Korea</Link>
                      <Link href="/destinations/thailand" className="block text-xs text-gray-600 hover:text-purple-600">🇹🇭 Thailand</Link>
                      <Link href="/destinations/costa-rica" className="block text-xs text-gray-600 hover:text-purple-600">🇨🇷 Costa Rica</Link>
                      <Link href="/destinations/colombia" className="block text-xs text-gray-600 hover:text-purple-600">🇨🇴 Colombia</Link>
                      <Link href="/destinations/brazil" className="block text-xs text-gray-600 hover:text-purple-600">🇧🇷 Brazil</Link>
                      <Link href="/destinations/hungary" className="block text-xs text-gray-600 hover:text-purple-600">🇭🇺 Hungary</Link>
                      <Link href="/destinations/czech-republic" className="block text-xs text-gray-600 hover:text-purple-600">🇨🇿 Czech Republic</Link>
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

                  {/* Healthcare Resources */}
                  <div>
                    <div className="text-xs font-bold text-red-600 uppercase mb-3">Resources</div>
                    <div className="space-y-1.5">
                      <Link href="/insurance" className="block text-sm text-gray-700 hover:text-red-600">🛡️ Insurance Companies</Link>
                      <Link href="/pharma" className="block text-sm text-gray-700 hover:text-red-600">🏭 Pharma Companies</Link>
                      <Link href="/drug_registry" className="block text-sm text-gray-700 hover:text-red-600">💊 Drug Registries</Link>
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
              <div className="absolute right-0 mt-2 w-96 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-white rounded-lg shadow-xl border border-gray-200 py-3 z-50 max-h-[80vh] overflow-y-auto">
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
                    <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Longevity & Stem Cells</div>
                  </div>
                  <div className="space-y-1.5 mb-4">
                    <Link href="/longevity" className="block text-sm text-gray-700 hover:text-blue-600 py-1">
                      ⏳ Longevity Hub
                    </Link>
                    <Link href="/guides/mexico-stem-cell-guide" className="block text-sm text-gray-700 hover:text-blue-600 py-1">
                      🇲🇽 Stem Cells in Mexico
                    </Link>
                    <Link href="/guides/panama-stem-cell-guide" className="block text-sm text-gray-700 hover:text-blue-600 py-1">
                      🇵🇦 Panama Stem Cells
                    </Link>
                    <Link href="/guides/cayman-islands-stem-cell-guide" className="block text-sm text-gray-700 hover:text-blue-600 py-1">
                      🇰🇾 Cayman Islands Stem Cells
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
              <div className="absolute right-0 mt-2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-white rounded-lg shadow-xl border border-gray-200 py-3 z-50">
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

            {/* US Healthcare Directory - Far Right Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 font-medium flex items-center gap-1">
                US Healthcare
                <span className="text-xs">▼</span>
              </button>
              <div className="absolute right-0 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-white rounded-lg shadow-xl border border-gray-200 py-3 z-50">
                <div className="px-4">
                  <Link href="/traditional-healthcare" className="block text-sm font-medium text-gray-900 hover:text-blue-600 py-2 mb-2">
                    🏥 US Healthcare Directory
                  </Link>
                  <div className="border-t border-gray-200 pt-2 mb-2">
                    <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Explore</div>
                  </div>
                  <div className="space-y-1.5 mb-4">
                    <Link href="/traditional-healthcare#national-champions" className="block text-sm text-gray-700 hover:text-blue-600 py-1">
                      🏆 National Champions
                      <span className="block text-xs text-gray-500">Top-ranked hospitals & #1 by specialty</span>
                    </Link>
                    <Link href="/traditional-healthcare#state-directory" className="block text-sm text-gray-700 hover:text-blue-600 py-1">
                      📍 State Directory
                      <span className="block text-xs text-gray-500">Browse hospitals by state</span>
                    </Link>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mb-2">
                    <div className="text-xs font-semibold text-gray-500 uppercase mb-2">Featured States</div>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    <Link href="/traditional-healthcare/california" className="text-xs text-gray-600 hover:text-blue-600 py-1">California</Link>
                    <Link href="/traditional-healthcare/texas" className="text-xs text-gray-600 hover:text-blue-600 py-1">Texas</Link>
                    <Link href="/traditional-healthcare/florida" className="text-xs text-gray-600 hover:text-blue-600 py-1">Florida</Link>
                    <Link href="/traditional-healthcare/new-york" className="text-xs text-gray-600 hover:text-blue-600 py-1">New York</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-25"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
          <span className="text-lg font-bold text-gray-900">Menu</span>
          <button
            type="button"
            className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            onClick={closeMenu}
          >
            <span className="sr-only">Close menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto h-full pb-20">
          <div className="px-4 py-4 space-y-1">
            {/* Home */}
            <Link
              href="/"
              className="block py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg px-3"
              onClick={closeMenu}
            >
              Home
            </Link>

            {/* Browse Services - Accordion */}
            <div className="border-t border-gray-100 pt-1">
              <button
                type="button"
                className="w-full flex items-center justify-between py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg px-3"
                onClick={() => toggleSection('services')}
              >
                <span>Browse Services</span>
                <svg
                  className={`h-5 w-5 text-gray-500 transform transition-transform ${
                    expandedSection === 'services' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {expandedSection === 'services' && (
                <div className="pl-4 pb-2 space-y-4">
                  {/* US Services */}
                  <div>
                    <div className="text-xs font-bold text-blue-600 uppercase mb-2 px-3">US Services</div>
                    <div className="space-y-1">
                      <Link href="/labs" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🧪 At-Home Labs</Link>
                      <Link href="/hormone-therapy" className="block py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>💪 Hormone Therapy</Link>
                      <Link href="/weight-loss" className="block py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>💊 Weight Loss / GLP-1</Link>
                      <Link href="/mens-health" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🧔 Men&apos;s Health (ED &amp; Hair)</Link>
                      <Link href="/womens-health" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🌸 Menopause &amp; HRT</Link>
                      <Link href="/skincare" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🧴 Prescription Skincare</Link>
                      <Link href="/mental-health" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🧠 Therapy &amp; Psychiatry</Link>
                      <Link href="/dexa" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>📊 DEXA Providers</Link>
                      <Link href="/dexa-scans" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>📍 DEXA Scans Near You</Link>
                      <Link href="/med-spa" className="block py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>✨ Med Spa &amp; Aesthetics</Link>
                      <Link href="/vo2max" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🫀 VO2 Max</Link>
                      <Link href="/iv" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>💧 IV Therapy</Link>
                      <Link href="/longevity" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>⏳ Longevity</Link>
                      <Link href="/longevity-performance" className="block py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🧬 Longevity &amp; Performance</Link>
                      <Link href="/cgm" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>📈 Glucose Monitors (CGM)</Link>
                      <Link href="/longevity-rx" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>⏳ Longevity Medications</Link>
                      <Link href="/peptides" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🧫 Peptide Therapy</Link>
                      <Link href="/supplements" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>💊 Longevity Supplements</Link>
                      <Link href="/recovery-tech" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🔴 Recovery &amp; Performance Tech</Link>
                    </div>
                  </div>
                  {/* Medical Tourism */}
                  <div>
                    <div className="text-xs font-bold text-purple-600 uppercase mb-2 px-3">Medical Tourism</div>
                    <div className="space-y-1">
                      <Link href="/stem-cells" className="block py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🧬 Stem Cells</Link>
                      <Link href="/stem-cells/mexico" className="block py-2 text-xs text-gray-600 hover:bg-gray-50 rounded-lg px-3 pl-6" onClick={closeMenu}>Mexico</Link>
                      <Link href="/stem-cells/panama" className="block py-2 text-xs text-gray-600 hover:bg-gray-50 rounded-lg px-3 pl-6" onClick={closeMenu}>Panama</Link>
                      <Link href="/hair_transplant" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>💇 Hair Transplant</Link>
                      <Link href="/plastic_surgery" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>✨ Plastic Surgery</Link>
                      <Link href="/dental" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🦷 Dental</Link>
                      <Link href="/bariatric" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>⚖️ Bariatric</Link>
                      <Link href="/fertility" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🍼 Fertility/IVF</Link>
                      <Link href="/orthopedic" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🦴 Orthopedic</Link>
                      <Link href="/cardiac" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>❤️ Cardiac</Link>
                      <Link href="/vision" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>👁️ Vision</Link>
                    </div>
                  </div>
                  {/* By Destination */}
                  <div>
                    <div className="text-xs font-bold text-purple-600 uppercase mb-2 px-3">By Destination</div>
                    <div className="space-y-1">
                      <Link href="/medical-tourism" className="block py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>✈️ All Destinations</Link>
                      <Link href="/destinations/mexico" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🇲🇽 Mexico</Link>
                      <Link href="/destinations/turkey" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🇹🇷 Turkey</Link>
                      <Link href="/destinations/south-korea" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🇰🇷 South Korea</Link>
                      <Link href="/destinations/thailand" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🇹🇭 Thailand</Link>
                      <Link href="/destinations/costa-rica" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🇨🇷 Costa Rica</Link>
                      <Link href="/destinations/colombia" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🇨🇴 Colombia</Link>
                      <Link href="/destinations/brazil" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🇧🇷 Brazil</Link>
                      <Link href="/destinations/hungary" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🇭🇺 Hungary</Link>
                    </div>
                  </div>
                  {/* Traditional */}
                  <div>
                    <div className="text-xs font-bold text-orange-600 uppercase mb-2 px-3">Traditional</div>
                    <div className="space-y-1">
                      <Link href="/traditional-healthcare" className="block py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🏥 All 50 States</Link>
                      <Link href="/traditional-healthcare/california" className="block py-2 text-xs text-gray-600 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>California</Link>
                      <Link href="/traditional-healthcare/texas" className="block py-2 text-xs text-gray-600 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>Texas</Link>
                      <Link href="/traditional-healthcare/florida" className="block py-2 text-xs text-gray-600 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>Florida</Link>
                      <Link href="/traditional-healthcare/new-york" className="block py-2 text-xs text-gray-600 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>New York</Link>
                    </div>
                  </div>
                  {/* Healthcare Resources */}
                  <div>
                    <div className="text-xs font-bold text-red-600 uppercase mb-2 px-3">Resources</div>
                    <div className="space-y-1">
                      <Link href="/insurance" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🛡️ Insurance Companies</Link>
                      <Link href="/pharma" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🏭 Pharma Companies</Link>
                      <Link href="/drug_registry" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>💊 Drug Registries</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Guides - Accordion */}
            <div className="border-t border-gray-100 pt-1">
              <button
                type="button"
                className="w-full flex items-center justify-between py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg px-3"
                onClick={() => toggleSection('guides')}
              >
                <span>Guides</span>
                <svg
                  className={`h-5 w-5 text-gray-500 transform transition-transform ${
                    expandedSection === 'guides' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {expandedSection === 'guides' && (
                <div className="pl-4 pb-2 space-y-1">
                  <div className="text-xs font-semibold text-gray-500 uppercase mb-2 px-3">Procedure Guides</div>
                  <Link href="/guides/glp1-weight-loss-complete-guide" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>💊 GLP-1 for Weight Loss</Link>
                  <Link href="/guides/hair-transplant-turkey-guide" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>💇 Hair Transplant in Turkey</Link>
                  <Link href="/guides/at-home-lab-testing-guide" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🧪 At-Home Lab Testing</Link>
                  <Link href="/guides/gastric-sleeve-mexico-safety" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>⚖️ Gastric Sleeve in Mexico</Link>
                  <Link href="/guides/dexa-scan-guide" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>📊 DEXA Scan Guide</Link>
                  <div className="border-t border-gray-100 my-2"></div>
                  <div className="text-xs font-semibold text-gray-500 uppercase mb-2 px-3">Longevity & Stem Cells</div>
                  <Link href="/longevity" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>⏳ Longevity Hub</Link>
                  <Link href="/guides/mexico-stem-cell-guide" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🇲🇽 Stem Cells in Mexico</Link>
                  <Link href="/guides/panama-stem-cell-guide" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🇵🇦 Panama Stem Cells</Link>
                  <Link href="/guides/cayman-islands-stem-cell-guide" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🇰🇾 Cayman Islands Stem Cells</Link>
                  <div className="border-t border-gray-100 my-2"></div>
                  <div className="text-xs font-semibold text-gray-500 uppercase mb-2 px-3">Trip Planning</div>
                  <Link href="/guides/mexico-medical-tourism-planner" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🇲🇽 Mexico Trip Planner</Link>
                  <Link href="/guides/turkey-hair-transplant-trip-planner" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🇹🇷 Turkey Trip Planner</Link>
                  <Link href="/guides/medical-travel-insurance-guide" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🛡️ Medical Travel Insurance</Link>
                  <div className="border-t border-gray-100 my-2"></div>
                  <Link href="/guides" className="block py-2 text-sm font-medium text-blue-600 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>View All Guides →</Link>
                </div>
              )}
            </div>

            {/* FAQ - Accordion */}
            <div className="border-t border-gray-100 pt-1">
              <button
                type="button"
                className="w-full flex items-center justify-between py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg px-3"
                onClick={() => toggleSection('faq')}
              >
                <span>FAQ</span>
                <svg
                  className={`h-5 w-5 text-gray-500 transform transition-transform ${
                    expandedSection === 'faq' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {expandedSection === 'faq' && (
                <div className="pl-4 pb-2 space-y-1">
                  <Link href="/faq" className="block py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>General FAQ</Link>
                  <div className="border-t border-gray-100 my-2"></div>
                  <div className="text-xs font-semibold text-gray-500 uppercase mb-2 px-3">Topic-Specific FAQs</div>
                  <Link href="/faq/glp1" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>💊 GLP-1 Weight Loss FAQ</Link>
                  <Link href="/faq/medical-tourism" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>✈️ Medical Tourism FAQ</Link>
                  <Link href="/faq/labs" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🧪 Lab Testing FAQ</Link>
                  <Link href="/faq/hair-transplant" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>💇 Hair Transplant FAQ</Link>
                </div>
              )}
            </div>

            {/* US Healthcare - Accordion */}
            <div className="border-t border-gray-100 pt-1">
              <button
                type="button"
                className="w-full flex items-center justify-between py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg px-3"
                onClick={() => toggleSection('healthcare')}
              >
                <span>US Healthcare</span>
                <svg
                  className={`h-5 w-5 text-gray-500 transform transition-transform ${
                    expandedSection === 'healthcare' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {expandedSection === 'healthcare' && (
                <div className="pl-4 pb-2 space-y-1">
                  <Link href="/traditional-healthcare" className="block py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>🏥 US Healthcare Directory</Link>
                  <div className="border-t border-gray-100 my-2"></div>
                  <div className="text-xs font-semibold text-gray-500 uppercase mb-2 px-3">Explore</div>
                  <Link href="/traditional-healthcare#national-champions" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>
                    🏆 National Champions
                  </Link>
                  <Link href="/traditional-healthcare#state-directory" className="block py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>
                    📍 State Directory
                  </Link>
                  <div className="border-t border-gray-100 my-2"></div>
                  <div className="text-xs font-semibold text-gray-500 uppercase mb-2 px-3">Featured States</div>
                  <Link href="/traditional-healthcare/california" className="block py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>California</Link>
                  <Link href="/traditional-healthcare/texas" className="block py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>Texas</Link>
                  <Link href="/traditional-healthcare/florida" className="block py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>Florida</Link>
                  <Link href="/traditional-healthcare/new-york" className="block py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg px-3" onClick={closeMenu}>New York</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
