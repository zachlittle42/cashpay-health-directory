'use client';

// Subjective Health house banner — the monetization plan's PR-B unit
// (wiki/centurion/gtm/vitalityscout-monetization-plan.md §5 / PR-B). Client
// component: it persists a one-tap dismiss to localStorage and fires PostHog
// view/click, both of which need the browser. It is `position: fixed` to the
// bottom of the viewport, so it is OUT of document flow and shifts NOTHING on
// the page — CLS from this unit is 0. The rendered content is capped at 15% of
// the mobile viewport height (max-h-[15vh]) with the disclosure kept inside that
// cap and always visible (never clipped).
//
// SHIPS OFF. This unit renders NOTHING unless NEXT_PUBLIC_SH_UNITS === 'on'.
// D2 verdict 2026-07-21 was AMBIGUOUS, so the unit stays flag-off — built,
// wired, and mounted, but dormant. While dormant no view/click event fires: the
// flag guard short-circuits before the view effect and before any render.
//
// Creative discipline (monetization-plan §5, verbatim rules): service-
// description language ONLY — no outcome claims, numbers, prices, guarantees,
// typicality implications, and no drug names. Every unit carries a "Sponsored"
// kicker and, directly under the CTA, the always-visible ownership disclosure
// (footer-only fails the FTC 2023 "unavoidable" standard — there is no
// arms-length defense when we own both sides). The CTA routes to /plan tagged
// partner=vitalityscout so it rides the existing intake rail with zero
// Subjective-side code.

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { safeCapture } from '@/lib/posthog-analytics';

// Build-time flag. Default OFF: anything other than the explicit "on" opt-in
// keeps the unit dormant and renders nothing.
const ENABLED = process.env.NEXT_PUBLIC_SH_UNITS === 'on';

// Locked creative (service-description only — no numbers, no outcome claims, no
// drug names). Headline + body + CTA per the monetization-plan B1 unit.
const HEADLINE = 'A weight program built around your muscle, not just the scale.';
const BODY = 'Subjective Health builds your year around how you feel — with a care team that stays.';
const CTA_LABEL = 'Build my plan';

// Exact locked destination (partner=vitalityscout rides the existing intake
// rail). utm_content b1-keep-strength matches the `creative` reported to PostHog.
const CTA_HREF =
  'https://subjective.health/plan' +
  '?utm_source=vitalityscout&utm_medium=banner&utm_campaign=sh-glp1-guides' +
  '&utm_content=b1-keep-strength&partner=vitalityscout';

// Always-visible ownership disclosure. Candidate wording per monetization-plan
// §6-D2 (exact string locks after the entity-chain confirmation; the unit is
// flag-off until then, so the candidate ships only in dormant code).
const DISCLOSURE = 'Subjective Health and VitalityScout are operated by the same parent company.';

// The creative id reported on both events (matches utm_content).
const CREATIVE = 'b1-keep-strength';

const DISMISS_KEY = 'sh_banner_dismissed';

export default function SubjectiveBanner({ family }: { family: string }) {
  const pathname = usePathname();
  // Start hidden to avoid a flash-then-hide when a returning visitor has already
  // dismissed it; the mount effect resolves the real state from localStorage.
  const [dismissed, setDismissed] = useState(true);
  const [ready, setReady] = useState(false);

  // Resolve the persisted dismiss state on mount (browser only).
  useEffect(() => {
    if (!ENABLED) return;
    try {
      setDismissed(localStorage.getItem(DISMISS_KEY) === '1');
    } catch {
      setDismissed(false);
    }
    setReady(true);
  }, []);

  // Fire one view event the first time the unit is actually shown.
  useEffect(() => {
    if (!ENABLED || !ready || dismissed) return;
    safeCapture('subjective_promo_view', {
      placement: 'banner',
      family,
      page_path: pathname,
      creative: CREATIVE,
    });
  }, [ready, dismissed, family, pathname]);

  // Flag-off or dismissed → render nothing (and never has fired an event).
  if (!ENABLED || dismissed) return null;

  const handleDismiss = () => {
    try {
      localStorage.setItem(DISMISS_KEY, '1');
    } catch {
      /* private mode — dismiss for this render only */
    }
    setDismissed(true);
  };

  const handleClick = () => {
    safeCapture('subjective_promo_click', {
      placement: 'banner',
      family,
      page_path: pathname,
      creative: CREATIVE,
    });
  };

  return (
    <aside
      role="complementary"
      aria-label="Sponsored"
      className="fixed inset-x-0 bottom-0 z-50 max-h-[15vh] overflow-hidden border-t border-gray-200 bg-white/95 shadow-[0_-2px_10px_rgba(0,0,0,0.06)] backdrop-blur"
    >
      <div className="mx-auto flex max-w-4xl items-center gap-3 px-3 py-2 sm:px-4">
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">
            Sponsored
          </p>
          <p className="truncate text-[13px] font-semibold text-gray-900 sm:text-sm">
            {HEADLINE}
          </p>
          <p className="hidden truncate text-xs text-gray-600 sm:block">{BODY}</p>
          {/* Always-visible ownership disclosure, directly under the CTA on
              mobile and inline on desktop — never footer-only, never clipped. */}
          <p className="mt-0.5 truncate text-[10px] text-gray-400">{DISCLOSURE}</p>
        </div>
        <a
          href={CTA_HREF}
          onClick={handleClick}
          className="shrink-0 rounded-lg bg-gray-900 px-4 py-2 text-xs font-medium text-white hover:bg-gray-700 sm:text-sm"
        >
          {CTA_LABEL}
        </a>
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Dismiss"
          className="shrink-0 rounded p-1 text-gray-400 hover:text-gray-700"
        >
          <span aria-hidden className="text-lg leading-none">&times;</span>
        </button>
      </div>
    </aside>
  );
}
