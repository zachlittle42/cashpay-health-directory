'use client';

import { useEffect, useRef } from 'react';
import { initPostHog } from '@/lib/posthog-analytics';

/**
 * Client-side PostHog initializer. Mounts inside <body> in app/layout.tsx
 * alongside the existing tracking infrastructure.
 *
 * Honors Do-Not-Track via posthog-js's built-in `respect_dnt: true`. Cookie
 * consent banner is handled by the sibling CookieConsent component; PostHog
 * uses localStorage by default and respects browser DNT signals.
 */
export default function PostHogProvider() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    initPostHog();
  }, []);

  return null;
}
