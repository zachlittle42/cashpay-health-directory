import Link from 'next/link';
import { CATEGORIES } from '@/lib/types';
import { getProvidersByCategory } from '@/lib/providers';

export default function Home() {
  const telehealthCategories = CATEGORIES.filter(c => c.type === 'telehealth');
  const medicalTourismCategories = CATEGORIES.filter(c => c.type === 'medical-tourism');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Cash-Pay Health Directory
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Quality healthcare without insurance - telehealth and medical tourism options
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Telehealth Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Telehealth Services
          </h2>
          <p className="text-gray-600 mb-8">
            Access lab testing, prescriptions, and specialized care from home
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {telehealthCategories.map(category => {
              const providers = getProvidersByCategory(category.slug);
              return (
                <Link
                  key={category.slug}
                  href={`/${category.slug}`}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {category.description}
                  </p>
                  <p className="text-blue-600 font-medium">
                    {providers.length} providers →
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Medical Tourism Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Medical Tourism
          </h2>
          <p className="text-gray-600 mb-8">
            World-class procedures abroad at a fraction of US costs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {medicalTourismCategories.map(category => {
              const providers = getProvidersByCategory(category.slug);
              return (
                <Link
                  key={category.slug}
                  href={`/${category.slug}`}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {category.description}
                  </p>
                  <p className="text-blue-600 font-medium">
                    {providers.length} providers →
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mt-16 bg-amber-50 border border-amber-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-amber-800 mb-2">
            Important Disclaimer
          </h3>
          <p className="text-amber-700 text-sm">
            This directory is for informational purposes only and does not constitute medical advice.
            Always consult with qualified healthcare providers before making medical decisions.
            We are not affiliated with any providers listed and do not receive compensation for referrals.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Cash-Pay Health Directory. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
