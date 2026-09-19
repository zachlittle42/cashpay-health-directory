'use client';

import { useEffect, useState } from 'react';
import { getConsentState, setConsentState } from '@/lib/tracking/consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(getConsentState() === null);
    const open = () => setVisible(true);
    window.addEventListener('vs_open_consent', open);
    return () => window.removeEventListener('vs_open_consent', open);
  }, []);
  function choose(state: 'granted' | 'denied') {
    setConsentState(state);
    setVisible(false);
  }
  if (!visible) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-[9999] border-t border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-gray-600">
          Allow analytics to help us improve our comparisons? Your contact details and form messages are excluded.
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <button onClick={() => choose('denied')} className="rounded-lg px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100">
            Necessary only
          </button>
          <button onClick={() => choose('granted')} className="rounded-lg bg-blue-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-700">
            Allow analytics
          </button>
        </div>
      </div>
    </div>
  );
}
