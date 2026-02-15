'use client';

import { useState, useRef, useCallback } from 'react';
import { submitEmailCapture, type FormState } from '@/lib/forms/actions';

interface EmailCaptureCardProps {
  title: string;
  description: string;
  source: string;
}

export default function EmailCaptureCard({ title, description, source }: EmailCaptureCardProps) {
  const [state, setState] = useState<FormState>({ success: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const hasTrackedStart = useRef(false);

  const handleFocus = useCallback(() => {
    if (!hasTrackedStart.current) {
      hasTrackedStart.current = true;
      window.dataLayer?.push({
        event: 'form_start',
        form_type: 'email_capture',
        form_source: source,
      });
    }
  }, [source]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.set('source', source);

    try {
      const utmData = typeof window !== 'undefined'
        ? localStorage.getItem('vs_utm_params') || '{}'
        : '{}';
      formData.set('utm_data', utmData);
    } catch {
      formData.set('utm_data', '{}');
    }

    const result = await submitEmailCapture({ success: false }, formData);
    setState(result);
    setIsSubmitting(false);

    if (result.success) {
      window.dataLayer?.push({
        event: 'form_complete',
        form_type: 'email_capture',
        form_source: source,
      });
      window.dataLayer?.push({
        event: 'email_capture',
        form_source: source,
      });
    }
  };

  if (state.success) {
    return (
      <div className="rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-6 md:p-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-900">You&apos;re in!</h3>
          <p className="mt-1 text-sm text-gray-600">Check your inbox for a confirmation.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>

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
              'Get the Guide'
            )}
          </button>
        </div>
      </form>

      {state.error && (
        <p className="mt-3 text-sm text-red-600">{state.error}</p>
      )}

      <p className="mt-3 text-xs text-gray-500">No spam, unsubscribe anytime.</p>
    </div>
  );
}
