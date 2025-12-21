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
          <div className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button className="text-gray-700 hover:text-gray-900 font-medium flex items-center gap-1">
                Service Categories
                <span className="text-xs">▼</span>
              </button>
              <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase">Telehealth</div>
                <Link href="/labs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  🧪 At-Home Labs
                </Link>
                <Link href="/glp1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  💊 GLP-1 Programs
                </Link>
                <Link href="/trt" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  💪 TRT & Hormones
                </Link>
                <Link href="/dexa" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                  📊 DEXA Scans
                </Link>
                <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase mt-2">Medical Tourism</div>
                <Link href="/dental" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">
                  🦷 Dental
                </Link>
                <Link href="/hair_transplant" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">
                  💇 Hair Transplant
                </Link>
                <Link href="/bariatric" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">
                  ⚖️ Bariatric Surgery
                </Link>
                <Link href="/plastic_surgery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">
                  ✨ Plastic Surgery
                </Link>
                <Link href="/fertility" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">
                  🍼 Fertility & IVF
                </Link>
              </div>
            </div>

            <Link href="/guides" className="text-gray-700 hover:text-gray-900 font-medium">
              Guides
            </Link>

            <Link href="/faq" className="text-gray-700 hover:text-gray-900 font-medium">
              FAQ
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Link href="/" className="text-sm text-blue-600 font-medium">
              Menu
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
