/**
 * Tracking event definitions and push helper for GTM dataLayer.
 */

// --- Event parameter types ---

interface CTAClickParams {
  ctaName: string;
  ctaLocation: string;
  destinationUrl: string;
}

interface FormStartParams {
  formId: string;
  formType: string;
}

interface FormCompleteParams {
  formId: string;
  formType: string;
}

interface OutboundClickParams {
  url: string;
  linkText: string;
  providerName?: string;
}

interface ScrollDepthParams {
  depth: 25 | 50 | 75 | 100;
  pageUrl: string;
}

interface EmailCaptureParams {
  source: string;
  hasUtm: boolean;
}

// --- Event map ---

export interface TrackingEventMap {
  cta_click: CTAClickParams;
  form_start: FormStartParams;
  form_complete: FormCompleteParams;
  outbound_click: OutboundClickParams;
  scroll_depth: ScrollDepthParams;
  email_capture: EmailCaptureParams;
}

export type TrackingEventName = keyof TrackingEventMap;

// --- DataLayer typing ---

interface DataLayerEvent {
  event: string;
  [key: string]: unknown;
}

declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
  }
}

// --- Push helper ---

export function pushEvent<T extends TrackingEventName>(
  eventName: T,
  params: TrackingEventMap[T]
): void {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...params,
  });
}
