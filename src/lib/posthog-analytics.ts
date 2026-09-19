import posthog from 'posthog-js';
import { analyticsAllowed } from './tracking/consent';
import { analyticsProperties, opaqueId, safePath } from './tracking/privacy';

let isInitialized = false;
const EVENTS = new Set(['$pageview', 'provider_click', 'outbound_click', 'cta_click', 'scroll_depth', 'form_start', 'form_complete', 'email_capture', 'contact_received', 'lead_email_capture', 'lead_inquiry', 'subjective_promo_view', 'subjective_promo_click']);

export function initPostHog(): void {
  if (!analyticsAllowed()) return;
  if (isInitialized) {
    if (posthog.has_opted_out_capturing()) posthog.opt_in_capturing({ captureEventName: false });
    return;
  }
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!key) return;
  posthog.init(key, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.posthog.com',
    capture_pageview: false, capture_pageleave: false,
    autocapture: false, capture_heatmaps: false, disable_session_recording: true,
    capture_exceptions: false, person_profiles: 'never', persistence: 'memory',
    ip: false, respect_dnt: true, mask_personal_data_properties: true,
    before_send: (event) => {
      if (!event || !analyticsAllowed() || !EVENTS.has(event.event)) return null;
      const clean = analyticsProperties(event.properties);
      // Discard automatic URL, referrer, person, device, DOM and query properties.
      event.properties = {
        ...clean, $site: 'vitality-web', schema_version: 2,
        distinct_id: event.properties.distinct_id, $session_id: event.properties.$session_id,
        $process_person_profile: false, $geoip_disable: true,
        $current_url: 'https://vitalityscout.com' + (safePath(clean.page_path) || '/'),
        $pathname: safePath(clean.page_path) || '/',
      };
      return event;
    },
  });
  isInitialized = true;
}

export function stopAnalytics(): void {
  if (!isInitialized) return;
  posthog.opt_out_capturing();
  posthog.reset();
}

export function safeCapture(event: string, properties?: Record<string, unknown>): void {
  if (!analyticsAllowed() || !EVENTS.has(event)) return;
  try {
    initPostHog();
    if (!isInitialized) return;
    const clean = analyticsProperties(properties);
    const journeyId = opaqueId(clean.journey_id);
    posthog.capture(event, { ...clean, ...(journeyId ? { distinct_id: journeyId } : {}) });
  } catch { /* Analytics must not interrupt navigation or a successful form. */ }
}

/** Contact details must never identify analytics profiles. */
export function identifyUser(_distinctId: string, _properties?: Record<string, unknown>): void {}
export function resetAnalytics(): void { if (isInitialized) posthog.reset(); }
