'use client';

import Link from 'next/link';
import { submitEmailCapture } from '@/lib/forms/actions';
import { useContactForm } from './useContactForm';

interface EmailCaptureCardProps {
  title: string;
  description: string;
  source: string;
  /** Button label. Default promotes the compounding offer: the monthly price report. */
  cta?: string;
}

export default function EmailCaptureCard({ source }: EmailCaptureCardProps) {
  const { state, isSubmitting, available, handleFocus, handleSubmit } = useContactForm(source, 'email_capture', submitEmailCapture);

  if (available !== true) {
    return (
      <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
        <h3 className="font-semibold text-gray-900">Cash-Pay Price Report</h3>
        <p className="mt-2 text-sm text-gray-600">Read our current price comparisons online. Email updates are not available right now.</p>
        <Link href={source === 'price_index' ? '/guides' : '/price-index'} className="mt-3 inline-block font-medium text-blue-700 hover:underline">{source === 'price_index' ? 'Explore our cost guides →' : 'Read the free price report →'}</Link>
      </div>
    );
  }

  if (state.success) {
    return (
      <div className="rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-6 md:p-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-900">Request received</h3>
          <p className="mt-1 text-sm text-gray-600">Your request reached our team.</p>
          <Link href="/price-index" className="mt-3 text-sm font-medium text-blue-700 hover:underline">Read the free price report →</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8">
      <h3 className="text-xl font-bold text-gray-900 mb-2">Request price report updates</h3>
      <p className="text-gray-600 mb-4 text-sm">Leave your email with our team to request future updates. You can read the current report online now.</p>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            aria-label="Email address"
            onFocus={handleFocus}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg className="mr-2 h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Sending...
              </>
            ) : (
              'Request updates'
            )}
          </button>
        </div>
      </form>

      {state.error && (
        <p className="mt-3 text-sm text-red-600">{state.error}</p>
      )}

      <p className="mt-3 text-xs text-gray-500">
        Request email updates about the Cash-Pay Price Report. Your email is sent to our team and is never included in analytics.
      </p>
    </div>
  );
}
