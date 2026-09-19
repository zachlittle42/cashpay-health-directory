import { safeCapture } from '../posthog-analytics';
import { analyticsAllowed } from './consent';
import { analyticsProperties } from './privacy';
import { sendGoogleEvent } from './google';
import { getAttributionData } from './utm';

export interface TrackingEventMap {
  cta_click: { ctaName: string; ctaLocation: string; destinationUrl: string };
  form_start: { form_type: string; form_source: string };
  form_complete: { form_type: string; form_source: string; lead_id: string };
  provider_click: { provider_id: string; category?: string; placement?: string; destination_host: string };
  outbound_click: { destination_host: string };
  scroll_depth: { depth: 25 | 50 | 75 | 100; pageUrl: string };
  email_capture: { form_source: string; lead_id: string };
  contact_received: { form_type: string; form_source: string; lead_id: string };
  lead_email_capture: { form_source: string; lead_id: string; legacy_alias: boolean };
  lead_inquiry: { form_source: string; lead_id: string; legacy_alias: boolean };
}
export type TrackingEventName = keyof TrackingEventMap;
declare global { interface Window { dataLayer: unknown[] } }

/** One PostHog event plus one Google transport (direct GA4 OR GTM dataLayer). */
export function captureFunnelEvent(event: TrackingEventName | '$pageview', properties: Record<string, unknown> = {}): void {
  if (!analyticsAllowed()) return;
  try {
    const clean = analyticsProperties({ ...getAttributionData(), page_path: window.location.pathname, ...properties });
    safeCapture(event, clean);
    sendGoogleEvent(event, clean);
  } catch { /* Capture is best effort; never block the user's action. */ }
}

export function pushEvent<T extends TrackingEventName>(event: T, properties: TrackingEventMap[T]): void {
  captureFunnelEvent(event, properties);
}
