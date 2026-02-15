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
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:left-4 md:right-auto md:bottom-4 md:max-w-md">
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-lg">
        <p className="mb-4 text-sm text-gray-700">
          We use cookies to analyze site traffic and improve your experience.
          You can choose to accept all cookies or only necessary ones.
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={handleAccept}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Accept All
          </button>
          <button
            onClick={handleDeny}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Necessary Only
          </button>
        </div>
      </div>
    </div>
  );
}
