'use client';

import { useState, useRef, useCallback } from 'react';
import { submitInquiryForm, type FormState } from '@/lib/forms/actions';

const CATEGORY_OPTIONS = [
  { value: '', label: 'Select a category...' },
  { value: 'stem_cells', label: 'Stem Cell Therapy' },
  { value: 'glp1', label: 'GLP-1 / Weight Loss' },
  { value: 'trt', label: 'TRT / Hormone Therapy' },
  { value: 'longevity', label: 'Longevity / Anti-Aging' },
  { value: 'dental', label: 'Dental' },
  { value: 'hair_transplant', label: 'Hair Transplant' },
  { value: 'cosmetic', label: 'Cosmetic Procedures' },
  { value: 'labs', label: 'Lab Testing' },
  { value: 'other', label: 'Other' },
];

interface InlineInquiryFormProps {
  defaultCategory?: string;
  title?: string;
  source: string;
}

export default function InlineInquiryForm({
  defaultCategory,
  title = 'Get Personalized Recommendations',
  source,
}: InlineInquiryFormProps) {
  const [state, setState] = useState<FormState>({ success: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const hasTrackedStart = useRef(false);

  const handleFocus = useCallback(() => {
    if (!hasTrackedStart.current) {
      hasTrackedStart.current = true;
      window.dataLayer?.push({
        event: 'form_start',
        form_type: 'inquiry',
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

    const result = await submitInquiryForm({ success: false }, formData);
    setState(result);
    setIsSubmitting(false);

    if (result.success) {
      window.dataLayer?.push({
        event: 'form_complete',
        form_type: 'inquiry',
        form_source: source,
      });
    }
  };

  if (state.success) {
    return (
      <div className="rounded-xl bg-white p-8 shadow-lg">
        <div className="flex flex-col items-center text-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-900">Thank you!</h3>
          <p className="mt-1 text-sm text-gray-600">We&apos;ll be in touch within 24 hours.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg md:p-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">{title}</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="inquiry-name" className="mb-1 block text-sm font-medium text-gray-700">
              Name *
            </label>
            <input
              id="inquiry-name"
              type="text"
              name="name"
              required
              placeholder="Your name"
              onFocus={handleFocus}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label htmlFor="inquiry-email" className="mb-1 block text-sm font-medium text-gray-700">
              Email *
            </label>
            <input
              id="inquiry-email"
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              onFocus={handleFocus}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
        </div>

        <div>
          <label htmlFor="inquiry-category" className="mb-1 block text-sm font-medium text-gray-700">
            Category *
          </label>
          <select
            id="inquiry-category"
            name="category"
            required
            defaultValue={defaultCategory || ''}
            onFocus={handleFocus}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            {CATEGORY_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="inquiry-condition" className="mb-1 block text-sm font-medium text-gray-700">
            What condition are you researching? <span className="text-gray-400">(optional)</span>
          </label>
          <input
            id="inquiry-condition"
            type="text"
            name="condition"
            placeholder="e.g. knee osteoarthritis, weight loss"
            onFocus={handleFocus}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div>
          <label htmlFor="inquiry-message" className="mb-1 block text-sm font-medium text-gray-700">
            Message <span className="text-gray-400">(optional)</span>
          </label>
          <textarea
            id="inquiry-message"
            name="message"
            rows={3}
            placeholder="Tell us more about what you're looking for..."
            onFocus={handleFocus}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="inline-flex items-center justify-center">
              <svg className="mr-2 h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </span>
          ) : (
            'Send Inquiry'
          )}
        </button>
      </form>

      {state.error && (
        <p className="mt-3 text-sm text-red-600">{state.error}</p>
      )}
    </div>
  );
}
