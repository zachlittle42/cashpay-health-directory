'use client';

import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { analyticsAllowed } from '@/lib/tracking/consent';
import { safePath } from '@/lib/tracking/privacy';

function beforeSend<T extends { url: string }>(event: T): T | null {
  if (!analyticsAllowed()) return null;
  const path = safePath(event.url);
  return path ? { ...event, url: 'https://vitalityscout.com' + path } : null;
}

export default function VercelMetrics() {
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    const sync = () => setAllowed(analyticsAllowed());
    sync();
    window.addEventListener('vs_consent_change', sync);
    return () => window.removeEventListener('vs_consent_change', sync);
  }, []);
  if (!allowed) return null;
  // The callback rechecks consent even after an injected script outlives unmount.
  return <><Analytics beforeSend={beforeSend} /><SpeedInsights beforeSend={beforeSend} /></>;
}
