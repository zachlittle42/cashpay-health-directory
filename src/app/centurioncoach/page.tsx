import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Centurion Coach — AI-Powered Wellness Coaching App',
  description: 'Track nutrition, training, and supplements with personalized AI coaching. Understand your body and optimize your health. Free beta available on iOS.',
  keywords: ['wellness app', 'AI health coach', 'nutrition tracker', 'fitness app', 'supplement tracking', 'health optimization', 'macro tracking', 'workout log'],
};

export default function CenturionCoachPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Centurion Coach',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'iOS',
    description: 'AI-powered wellness coaching app for tracking nutrition, training, and supplements.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏛️</span>
            <span className="text-xl font-bold text-gray-900">Centurion Coach</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#features" className="text-sm text-gray-600 hover:text-gray-900 hidden sm:block">Features</Link>
            <Link href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 hidden sm:block">How It Works</Link>
            <Link href="#faq" className="text-sm text-gray-600 hover:text-gray-900 hidden sm:block">FAQ</Link>
            <a
              href="#cta"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 px-4 py-2 text-sm font-semibold text-white hover:from-cyan-600 hover:to-sky-600 transition-all"
            >
              Join Beta
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white px-4 py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2UwZTBlMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 border border-cyan-200 px-4 py-1.5 text-sm font-medium text-cyan-700 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Beta Now Available on iOS
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your AI-Powered<br />
            <span className="bg-gradient-to-r from-cyan-500 to-sky-500 bg-clip-text text-transparent">Wellness Coach</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Track nutrition, training, and supplements. Get personalized guidance. Understand your body like never before.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 px-8 py-4 text-lg font-semibold text-white hover:from-cyan-600 hover:to-sky-600 transition-all shadow-lg shadow-cyan-500/25"
            >
              Join the Beta
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Free on iOS • No credit card required
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Health tracking shouldn&apos;t feel like a second job
            </h2>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-gray-700 mb-6">
              Most apps give you data without direction. You log meals, track workouts, and take supplements—but you&apos;re left wondering: <em>Is this actually working? What should I do next?</em>
            </p>
            <p className="text-lg text-gray-700">
              <strong>Centurion Coach is different.</strong> It&apos;s not just a tracker—it&apos;s a coach that learns your patterns, answers your questions, and guides you toward your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gradient-to-b from-white to-gray-50 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to optimize your health
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              One app to track, understand, and improve every aspect of your wellness journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1: AI Coach */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-white text-2xl mb-6">
                💬
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Coach</h3>
              <p className="text-gray-600 mb-4">
                <strong>Ask anything. Get real answers.</strong>
              </p>
              <p className="text-gray-600">
                Your personal AI coach understands your logged data, goals, and progress. Ask &quot;What should I eat before my workout?&quot; or &quot;Why am I tired this week?&quot; and get personalized, contextual guidance—not generic advice.
              </p>
            </div>

            {/* Feature 2: Nutrition */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white text-2xl mb-6">
                🍽️
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Nutrition Tracking</h3>
              <p className="text-gray-600 mb-4">
                <strong>Log meals in seconds. See the full picture.</strong>
              </p>
              <p className="text-gray-600">
                Quick-add foods with our smart search, track macros and calories, and spot patterns in your eating. The AI coach connects your nutrition to your energy, performance, and goals.
              </p>
            </div>

            {/* Feature 3: Training */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-2xl mb-6">
                💪
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Training Programs</h3>
              <p className="text-gray-600 mb-4">
                <strong>Follow structured programs or build your own.</strong>
              </p>
              <p className="text-gray-600">
                Whether you&apos;re cutting, bulking, or maintaining, enroll in programs designed for your goals. Log workouts, track progressive overload, and see your strength gains over time.
              </p>
            </div>

            {/* Feature 4: Supplements */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-2xl mb-6">
                💊
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Supplements & Compounds</h3>
              <p className="text-gray-600 mb-4">
                <strong>Track what you take. Know what works.</strong>
              </p>
              <p className="text-gray-600">
                Log supplements, medications, and compounds in one place. Build stacks, set reminders, and let the AI coach help you understand interactions and timing.
              </p>
            </div>

            {/* Feature 5: Body Explorer */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-rose-500 to-red-500 text-white text-2xl mb-6">
                🫀
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Body Explorer</h3>
              <p className="text-gray-600 mb-4">
                <strong>Understand how your body actually works.</strong>
              </p>
              <p className="text-gray-600">
                Explore your anatomy system by system—skeletal, cardiovascular, digestive, hormones, and more. Learn the science behind your health in plain language.
              </p>
            </div>

            {/* Feature 6: Metrics */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-2xl mb-6">
                📊
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Metrics & Trends</h3>
              <p className="text-gray-600 mb-4">
                <strong>See your progress. Spot the patterns.</strong>
              </p>
              <p className="text-gray-600">
                Track weight, body measurements, and custom metrics. Visualize trends over weeks and months. Understand what&apos;s working and what needs adjustment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-gray-50 px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get started in minutes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-100 text-cyan-600 text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Download & Set Your Goals</h3>
              <p className="text-gray-600">
                Tell us what you&apos;re working toward—lose fat, build muscle, improve energy, or optimize overall health. We&apos;ll personalize your experience from day one.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-100 text-cyan-600 text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Track Daily</h3>
              <p className="text-gray-600">
                Log your meals, workouts, and supplements. It takes less than 5 minutes a day. The more you track, the smarter your AI coach becomes.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-100 text-cyan-600 text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Get Coached</h3>
              <p className="text-gray-600">
                Ask questions, get insights, and receive proactive recommendations. Your AI coach connects the dots between your nutrition, training, sleep, and how you feel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Not just another tracking app
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-4 px-6 bg-gray-100 rounded-tl-lg font-semibold text-gray-600">Other Apps</th>
                  <th className="text-left py-4 px-6 bg-cyan-500 rounded-tr-lg font-semibold text-white">Centurion Coach</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-600">Track data, figure it out yourself</td>
                  <td className="py-4 px-6 text-gray-900 bg-cyan-50 font-medium">Track data, get AI-powered guidance</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-600">Generic advice for everyone</td>
                  <td className="py-4 px-6 text-gray-900 bg-cyan-50 font-medium">Personalized to your goals and patterns</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-600">Nutrition OR fitness OR supplements</td>
                  <td className="py-4 px-6 text-gray-900 bg-cyan-50 font-medium">All-in-one: nutrition, training, supplements, metrics</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 text-gray-600">Confusing dashboards</td>
                  <td className="py-4 px-6 text-gray-900 bg-cyan-50 font-medium">Clean, focused interface</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-gray-600 rounded-bl-lg">No education, just numbers</td>
                  <td className="py-4 px-6 text-gray-900 bg-cyan-50 font-medium rounded-br-lg">Learn how your body works as you go</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-gray-50 px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for people serious about their health
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-4 italic">
                &quot;Finally an app that connects everything—my food, my training, my supplements—and actually helps me make sense of it.&quot;
              </p>
              <p className="text-gray-500 font-medium">— Beta User</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-4 italic">
                &quot;The AI coach is like having a knowledgeable friend who&apos;s seen all my data. I ask it questions constantly.&quot;
              </p>
              <p className="text-gray-500 font-medium">— Beta User</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="bg-gradient-to-r from-cyan-500 to-sky-500 px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to take control of your health?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join the beta and be among the first to experience AI-powered wellness coaching. Free during beta. Available now on iOS.
          </p>

          <a
            href="https://apps.apple.com/app/centurion-coach"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-cyan-600 hover:bg-cyan-50 transition-all shadow-lg"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Get Early Access
          </a>

          <p className="mt-6 text-cyan-200">
            Questions? Reach out at{' '}
            <a href="mailto:hello@centurioncoach.com" className="underline hover:text-white">
              hello@centurioncoach.com
            </a>
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-white px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is Centurion Coach free?</h3>
              <p className="text-gray-600">
                Yes, completely free during our beta period. We&apos;ll announce pricing before any changes.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is this a medical app?</h3>
              <p className="text-gray-600">
                No. Centurion Coach is a wellness app for tracking and education. We don&apos;t diagnose, treat, or prescribe. Always consult a healthcare provider for medical decisions.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What devices are supported?</h3>
              <p className="text-gray-600">
                Currently iOS only (iPhone). Android coming soon.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How is my data protected?</h3>
              <p className="text-gray-600">
                Your data is encrypted and stored securely on AWS. We never sell your personal information. See our Privacy Policy for details.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I export my data?</h3>
              <p className="text-gray-600">
                Data export is on our roadmap. You&apos;ll always own your data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="text-2xl">🏛️</span>
                <span className="text-xl font-bold text-white">Centurion Coach</span>
              </div>
              <p className="text-gray-400 italic">
                Be as healthy as possible, for as long as possible.
              </p>
            </div>

            <div className="flex gap-6 text-sm">
              <a href="/centurioncoach/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/centurioncoach/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="mailto:hello@centurioncoach.com" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-xs text-gray-500 text-center max-w-3xl mx-auto mb-4">
              Centurion Coach is a wellness application and does not provide medical advice, diagnosis, or treatment. Consult a qualified healthcare provider before making changes to your diet, exercise, or supplement routine.
            </p>
            <p className="text-xs text-gray-500 text-center">
              © 2025 Centurion Coach. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
