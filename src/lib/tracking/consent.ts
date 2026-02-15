/**
 * Cookie consent state management.
 */

export type ConsentState = 'granted' | 'denied' | null;

const COOKIE_NAME = 'vs_consent';
const COOKIE_EXPIRY_DAYS = 365;

/**
 * Reads the current consent state from the `vs_consent` cookie.
 * Returns 'granted', 'denied', or null if not yet set.
 */
export function getConsentState(): ConsentState {
  if (typeof document === 'undefined') return null;

  const match = document.cookie.match(
    new RegExp('(?:^|; )' + COOKIE_NAME + '=([^;]*)')
  );

  if (!match) return null;

  const value = decodeURIComponent(match[1]);
  if (value === 'granted' || value === 'denied') return value;
  return null;
}

/**
 * Sets the consent state cookie with a 1-year expiry and dispatches
 * a custom event so other components can react.
 */
export function setConsentState(state: 'granted' | 'denied'): void {
  if (typeof document === 'undefined') return;

  const expires = new Date(Date.now() + COOKIE_EXPIRY_DAYS * 864e5).toUTCString();
  const secure = typeof window !== 'undefined' && window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${COOKIE_NAME}=${state}; expires=${expires}; path=/; SameSite=Lax${secure}`;

  // Dispatch custom event for listeners (e.g., TrackingScripts)
  window.dispatchEvent(new Event('vs_consent_change'));
}
