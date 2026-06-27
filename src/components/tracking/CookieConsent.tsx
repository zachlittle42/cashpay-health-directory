'use client';

import { useEffect, useState } from 'react';
import { getConsentState, setConsentState } from '@/lib/tracking/consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show if consent has not been set yet
    if (getConsentState() === null) {
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    setConsentState('granted');
    updateGTMConsent('granted');
    setVisible(false);
  }

  function handleDeny() {
    setConsentState('denied');
    updateGTMConsent('denied');
    setVisible(false);
  }

  function updateGTMConsent(state: 'granted' | 'denied') {
    if (typeof window !== 'undefined') {
      // gtag is injected by GTM init script in TrackingScripts
      const w = window as typeof window & { gtag?: (...args: unknown[]) => void };
      if (typeof w.gtag === 'function') {
        w.gtag('consent', 'update', {
          analytics_storage: state,
          ad_storage: state,
          ad_user_data: state,
          ad_personalization: state,
        });
      }
    }
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[9999] border-t border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-gray-600">
          We use cookies to analyze traffic and improve your experience.{' '}
          <span className="hidden sm:inline">Accept all, or keep only what&apos;s necessary.</span>
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={handleDeny}
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100"
          >
            Necessary only
          </button>
          <button
            onClick={handleAccept}
            className="rounded-lg bg-blue-600 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
