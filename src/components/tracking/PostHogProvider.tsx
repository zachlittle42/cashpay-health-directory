'use client';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { stopAnalytics } from '@/lib/posthog-analytics';
import { analyticsAllowed } from '@/lib/tracking/consent';
import { captureFunnelEvent } from '@/lib/tracking/events';
import { captureUTMParams, clearAttribution } from '@/lib/tracking/utm';

export default function PostHogProvider() {
  const pathname = usePathname();
  const lastPage = useRef<string>();
  useEffect(() => {
    const sync = () => {
      if (!analyticsAllowed()) {
        lastPage.current = undefined;
        stopAnalytics();
        clearAttribution();
        return;
      }
      captureUTMParams();
      if (lastPage.current !== pathname) {
        lastPage.current = pathname;
        captureFunnelEvent('$pageview');
      }
    };
    sync();
    window.addEventListener('vs_consent_change', sync);
    return () => window.removeEventListener('vs_consent_change', sync);
  }, [pathname]);
  return null;
}
