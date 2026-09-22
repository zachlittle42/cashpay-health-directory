'use client';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { vercelBeforeSend } from '@/lib/tracking/vercel-metrics';

/**
 * Vercel Web Analytics and Speed Insights mount for every visit, so the Vercel
 * visitors chart counts all JavaScript-executing traffic again (the 2026-09-19
 * release had gated both behind cookie consent). The consent-gated funnel
 * instruments are PostHog and Google Analytics. Speed Insights only reports
 * while its project-level toggle is on. Sanitization and its limits are
 * documented in docs/growth-measurement.md.
 */
export default function VercelMetrics() {
  return <><Analytics beforeSend={vercelBeforeSend} /><SpeedInsights beforeSend={vercelBeforeSend} /></>;
}
