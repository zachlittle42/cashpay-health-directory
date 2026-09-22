import { safePath } from './privacy';

/**
 * Sanitizer for Vercel Web Analytics and Speed Insights events. These SDKs are
 * the cookieless basic-traffic instrument and run for every visit; they do not
 * consult analytics consent, DNT or GPC. The only field the SDKs let us shape
 * is the page URL, which is reduced to the canonical origin plus pathname.
 * Paths outside the site's slug character set are dropped rather than sent.
 */
export function vercelBeforeSend<T extends { url: string }>(event: T): T | null {
  const path = safePath(event.url);
  return path ? { ...event, url: 'https://vitalityscout.com' + path } : null;
}
