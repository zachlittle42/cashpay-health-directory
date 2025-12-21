import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Telehealth */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Telehealth</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/labs" className="text-gray-600 hover:text-blue-600">At-Home Lab Testing</Link></li>
              <li><Link href="/glp1" className="text-gray-600 hover:text-blue-600">GLP-1 Programs</Link></li>
              <li><Link href="/trt" className="text-gray-600 hover:text-blue-600">TRT & Hormones</Link></li>
            </ul>
          </div>

          {/* Local Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Local Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/dexa" className="text-gray-600 hover:text-blue-600">DEXA Scans</Link></li>
              <li><Link href="/vo2max" className="text-gray-600 hover:text-blue-600">VO2 Max Testing</Link></li>
              <li><Link href="/longevity" className="text-gray-600 hover:text-blue-600">Longevity Clinics</Link></li>
            </ul>
          </div>

          {/* Medical Tourism */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Medical Tourism</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/dental" className="text-gray-600 hover:text-blue-600">Dental</Link></li>
              <li><Link href="/hair_transplant" className="text-gray-600 hover:text-blue-600">Hair Transplant</Link></li>
              <li><Link href="/bariatric" className="text-gray-600 hover:text-blue-600">Bariatric Surgery</Link></li>
              <li><Link href="/plastic_surgery" className="text-gray-600 hover:text-blue-600">Plastic Surgery</Link></li>
              <li><Link href="/fertility" className="text-gray-600 hover:text-blue-600">Fertility & IVF</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guides" className="text-gray-600 hover:text-blue-600">All Guides</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-blue-600">FAQ</Link></li>
              <li><Link href="/guides/medical-travel-insurance-guide" className="text-gray-600 hover:text-blue-600">Travel Insurance</Link></li>
            </ul>
          </div>

          {/* Popular Guides */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Popular Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guides/glp1-weight-loss-complete-guide" className="text-gray-600 hover:text-blue-600">GLP-1 Weight Loss</Link></li>
              <li><Link href="/guides/hair-transplant-turkey-guide" className="text-gray-600 hover:text-blue-600">Hair Transplant Turkey</Link></li>
              <li><Link href="/guides/mexico-medical-tourism-planner" className="text-gray-600 hover:text-blue-600">Mexico Trip Planner</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-sm text-gray-500">
              <p className="font-medium text-gray-700">VitalityScout</p>
              <p className="mt-1">Compare cash-pay health services. No insurance required.</p>
            </div>
            <div className="flex gap-6 text-sm text-gray-500">
              <Link href="/faq" className="hover:text-gray-700">FAQ</Link>
              <Link href="/guides" className="hover:text-gray-700">Guides</Link>
              <a href="https://github.com/zachlittle42/cashpay-health-directory" target="_blank" rel="noopener" className="hover:text-gray-700">GitHub</a>
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            Disclaimer: This directory is for informational purposes only. Always consult with qualified healthcare providers before making medical decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
