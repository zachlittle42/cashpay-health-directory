import { safePath } from './privacy';
import { analyticsAllowed } from './consent';

let configuredId: string | undefined;
export function googleAnalyticsEnabled(): boolean {
  return process.env.NEXT_PUBLIC_ENABLE_GOOGLE_ANALYTICS === 'true';
}
type GoogleWindow = Window & { gtag?: (...args: unknown[]) => void };
function googleTag() {
  const w = window as GoogleWindow;
  window.dataLayer = window.dataLayer || [];
  if (!w.gtag) w.gtag = function (..._args: unknown[]) { window.dataLayer.push(arguments); };
  return w.gtag;
}
export function updateGoogleConsent(allowed: boolean): void {
  if (typeof window === 'undefined' || !googleAnalyticsEnabled()) return;
  const id = process.env.NEXT_PUBLIC_GA4_ID;
  Reflect.set(window, 'ga-disable-' + id, !allowed);
  // Do not even initialize the queue before consent unless a loaded tag needs
  // to receive revocation.
  if (!allowed && !(window as GoogleWindow).gtag) return;
  googleTag()('consent', 'update', {
    analytics_storage: allowed ? 'granted' : 'denied',
    ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied',
  });
}
export function sendGoogleEvent(event: string, properties: Record<string, string | number | boolean>): void {
  if (!googleAnalyticsEnabled() || !analyticsAllowed()) return;
  const ga4 = process.env.NEXT_PUBLIC_GA4_ID;
  if (ga4 && /^[A-Za-z0-9_-]+$/.test(ga4)) {
    const gtag = googleTag();
    if (configuredId !== ga4) {
      updateGoogleConsent(true);
      gtag('js', new Date());
      gtag('config', ga4, {
        send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false,
        page_location: 'https://vitalityscout.com' + (safePath(properties.page_path) || '/'),
        page_referrer: properties.first_referrer_host ? 'https://' + properties.first_referrer_host : '',
      });
      configuredId = ga4;
    }
    gtag('event', event === '$pageview' ? 'page_view' : event, {
      ...properties, send_to: ga4, schema_version: 2,
      page_location: 'https://vitalityscout.com' + (safePath(properties.page_path) || '/'),
      page_referrer: properties.first_referrer_host ? 'https://' + properties.first_referrer_host : '',
    });
  } else if (process.env.NEXT_PUBLIC_GTM_ID) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: event === '$pageview' ? 'page_view' : event, ...properties, schema_version: 2 });
  }
}
