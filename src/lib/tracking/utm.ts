import { analyticsAllowed } from './consent';
import { analyticsProperties, opaqueId, safeHost, safePath, safeToken } from './privacy';

export const ATTRIBUTION_KEY = 'vs_attribution_v2';
const MAX_AGE_MS = 30 * 864e5;
export interface AttributionData {
  journey_id: string; first_landing_page: string; first_referrer_host?: string;
  first_channel: string; last_landing_page: string; last_referrer_host?: string;
  last_channel: string; utm_source?: string; utm_medium?: string;
  utm_campaign?: string; captured_at: number;
}
export interface UTMParams { utm_source?: string; utm_medium?: string; utm_campaign?: string }
let memory: AttributionData | undefined;
let capturedDocument = false;
let lastCapturedHref: string | undefined;

function channel(host: string | undefined, campaign: UTMParams): string {
  const searchReferrer = Boolean(host && /(^|\.)(google\.[a-z.]+|bing\.com|duckduckgo\.com|search\.yahoo\.com|search\.brave\.com)$/.test(host));
  if (campaign.utm_medium === 'organic') return searchReferrer ? 'organic' : 'campaign';
  if (campaign.utm_medium) return campaign.utm_medium;
  if (campaign.utm_source) return 'campaign';
  if (!host) return 'direct';
  return searchReferrer ? 'organic' : 'referral';
}

/** Internal navigation preserves the original acquisition source. */
export function nextAttribution(previous: AttributionData | undefined, href: string, referrer: string, now: number, id: string): AttributionData {
  const url = new URL(href);
  const host = safeHost(referrer);
  const externalHost = host !== url.hostname ? host : undefined;
  const campaign: UTMParams = {};
  for (const key of ['utm_source', 'utm_medium', 'utm_campaign'] as const) {
    const value = safeToken(url.searchParams.get(key), 80);
    if (value) campaign[key] = value;
  }
  const landing = safePath(url.pathname) || '/';
  const valid = previous && opaqueId(previous.journey_id) && Number.isFinite(previous.captured_at) && now >= previous.captured_at
    && now - previous.captured_at < MAX_AGE_MS && safePath(previous.first_landing_page)
    && safeToken(previous.first_channel) && safePath(previous.last_landing_page) && safeToken(previous.last_channel);
  if (!valid) return {
    journey_id: id, first_landing_page: landing, first_referrer_host: externalHost,
    first_channel: channel(externalHost, campaign), last_landing_page: landing,
    last_referrer_host: externalHost, last_channel: channel(externalHost, campaign),
    ...campaign, captured_at: now,
  };
  const existing = { ...analyticsProperties(previous as unknown as Record<string, unknown>), captured_at: previous.captured_at } as unknown as AttributionData;
  if (!Object.keys(campaign).length && !externalHost) return existing;
  return {
    ...existing, last_landing_page: landing, last_referrer_host: externalHost,
    last_channel: channel(externalHost, campaign),
    utm_source: campaign.utm_source, utm_medium: campaign.utm_medium, utm_campaign: campaign.utm_campaign,
  };
}

export function clearAttribution(): void {
  memory = undefined;
  lastCapturedHref = undefined;
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(ATTRIBUTION_KEY);
    localStorage.removeItem('vs_utm_params');
  } catch { /* Storage can be blocked. */ }
  document.cookie = 'vs_utm=; Max-Age=0; path=/; SameSite=Lax';
}

/** Capture only after consent. The initial referrer is used once per document. */
export function captureUTMParams(): void {
  if (!analyticsAllowed()) { clearAttribution(); return; }
  if (memory && lastCapturedHref === window.location.href && Date.now() - memory.captured_at < MAX_AGE_MS) return;
  try {
    if (!memory) {
      const saved = localStorage.getItem(ATTRIBUTION_KEY);
      if (saved) memory = JSON.parse(saved) as AttributionData;
    }
  } catch { memory = undefined; }
  memory = nextAttribution(memory, window.location.href, capturedDocument ? '' : document.referrer, Date.now(), crypto.randomUUID());
  capturedDocument = true;
  lastCapturedHref = window.location.href;
  try { localStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(memory)); } catch { /* Memory fallback. */ }
}

export function getAttributionData(): Record<string, string | number | boolean> {
  if (!analyticsAllowed()) return {};
  if (!memory) captureUTMParams();
  return analyticsProperties(memory as unknown as Record<string, unknown>);
}

export function getStoredUTMParams(): UTMParams {
  const data = getAttributionData();
  return { utm_source: data.utm_source as string | undefined, utm_medium: data.utm_medium as string | undefined, utm_campaign: data.utm_campaign as string | undefined };
}
