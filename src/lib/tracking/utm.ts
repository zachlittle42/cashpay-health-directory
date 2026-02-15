/**
 * UTM parameter capture, storage, and attribution data retrieval.
 */

const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
] as const;

type UTMKey = (typeof UTM_KEYS)[number];

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

export interface AttributionData {
  utm: UTMParams;
  referrer: string;
  landingPage: string;
  timestamp: string;
}

const STORAGE_KEY = 'vs_utm_params';
const COOKIE_NAME = 'vs_utm';
const COOKIE_EXPIRY_DAYS = 30;

// --- Sanitization ---

/** Strip control characters and limit length to prevent storage abuse. */
function sanitizeUTMValue(value: string): string {
  // Remove control characters and non-printable chars
  // eslint-disable-next-line no-control-regex
  return value.replace(/[\x00-\x1f\x7f]/g, '').slice(0, 256);
}

// --- Cookie helpers ---

function setCookie(name: string, value: string, days: number): void {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax${secure}`;
}

function getCookie(name: string): string | null {
  const match = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '=([^;]*)')
  );
  return match ? decodeURIComponent(match[1]) : null;
}

// --- Public API ---

/**
 * Reads UTM params from the current URL search params and persists them
 * in both localStorage and a 30-day cookie.
 */
export function captureUTMParams(): void {
  if (typeof window === 'undefined') return;

  const searchParams = new URLSearchParams(window.location.search);
  const params: UTMParams = {};
  let hasAny = false;

  for (const key of UTM_KEYS) {
    const value = searchParams.get(key);
    if (value) {
      params[key] = sanitizeUTMValue(value);
      hasAny = true;
    }
  }

  if (!hasAny) return;

  const serialized = JSON.stringify(params);

  try {
    localStorage.setItem(STORAGE_KEY, serialized);
  } catch {
    // localStorage unavailable (private browsing, quota exceeded)
  }

  setCookie(COOKIE_NAME, serialized, COOKIE_EXPIRY_DAYS);
}

/**
 * Retrieves stored UTM params. Checks localStorage first, falls back to cookie.
 */
export function getStoredUTMParams(): UTMParams {
  if (typeof window === 'undefined') return {};

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored) as UTMParams;
  } catch {
    // parse error or localStorage unavailable
  }

  const cookieValue = getCookie(COOKIE_NAME);
  if (cookieValue) {
    try {
      return JSON.parse(cookieValue) as UTMParams;
    } catch {
      // malformed cookie
    }
  }

  return {};
}

/**
 * Returns full attribution data: UTM params, referrer, landing page, and timestamp.
 */
export function getAttributionData(): AttributionData {
  return {
    utm: getStoredUTMParams(),
    referrer: typeof document !== 'undefined' ? document.referrer : '',
    landingPage: typeof window !== 'undefined' ? window.location.href : '',
    timestamp: new Date().toISOString(),
  };
}
