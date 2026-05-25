/**
 * PostHog wrapper for vitality-web (cashpay-health-directory).
 * Mirrors the pattern in centurion-consumer-health-platform/web/src/lib/analytics.ts.
 *
 * Shares a single PostHog project with all surfaces; differentiated via
 * the $site super-property registered at init.
 */
import posthog from 'posthog-js';

const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.posthog.com';
const SITE_TAG = 'vitality-web';

let isInitialized = false;

const PII_KEY_BLOCKLIST = new Set([
  'email', 'email_address', 'user_email',
  'phone', 'phone_number', 'mobile',
  'name', 'first_name', 'last_name', 'full_name', 'fullName', 'firstName', 'lastName',
  'ssn', 'dob', 'date_of_birth', 'birth_date', 'birthdate',
  'address', 'street', 'street_address', 'zip', 'zipcode', 'zip_code', 'postal_code',
  'ip', 'ip_address',
  'password', 'token', 'api_key',
]);

function stripPII(props?: Record<string, unknown>): Record<string, unknown> | undefined {
  if (!props) return props;
  const out: Record<string, unknown> = {};
  const dropped: string[] = [];
  for (const [key, value] of Object.entries(props)) {
    if (PII_KEY_BLOCKLIST.has(key) || PII_KEY_BLOCKLIST.has(key.toLowerCase())) {
      dropped.push(key);
      continue;
    }
    out[key] = value;
  }
  if (dropped.length > 0 && process.env.NODE_ENV === 'development') {
    console.warn(`[posthog] dropped PII-flavored keys: ${dropped.join(', ')}`);
  }
  return out;
}

export function initPostHog(): void {
  if (isInitialized || typeof window === 'undefined') return;
  if (!POSTHOG_KEY) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[posthog] NEXT_PUBLIC_POSTHOG_KEY not set — disabled.');
    }
    return;
  }

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    capture_pageview: 'history_change',
    autocapture: true,
    persistence: 'localStorage+cookie',
    respect_dnt: true,
    mask_personal_data_properties: true,
  });
  posthog.register({ $site: SITE_TAG });
  isInitialized = true;
}

export function safeCapture(event: string, properties?: Record<string, unknown>): void {
  if (!isInitialized) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[posthog]', event, stripPII(properties));
    }
    return;
  }
  posthog.capture(event, stripPII(properties));
}

export function identifyUser(distinctId: string, userProperties?: Record<string, unknown>): void {
  if (!isInitialized) return;
  posthog.identify(distinctId, stripPII(userProperties));
}

export function resetAnalytics(): void {
  if (isInitialized) posthog.reset();
}
