import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import TrackingScripts from '@/components/tracking/TrackingScripts';
import CookieConsent from '@/components/tracking/CookieConsent';
import UTMCapture from '@/components/tracking/UTMCapture';
import OutboundClickTracker from '@/components/tracking/OutboundClickTracker';
import PostHogProvider from '@/components/tracking/PostHogProvider';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://vitalityscout.com'),
  title: {
    default: 'VitalityScout | Compare Cash-Pay Healthcare Providers',
    template: '%s | VitalityScout',
  },
  description:
    'Discover and compare cash-pay health services. Transparent pricing for labs, GLP-1, TRT, DEXA scans, and more. No insurance needed.',
  keywords: [
    'cash pay health',
    'self pay medical',
    'lab testing prices',
    'GLP-1 cost',
    'TRT clinics',
    'DEXA scan near me',
  ],
  openGraph: {
    type: 'website',
    siteName: 'VitalityScout',
    url: 'https://vitalityscout.com',
    title: 'VitalityScout — Verified Cash-Pay Health Prices',
    description:
      'Compare verified cash-pay prices for med-spa, hormone, GLP-1, lab, and imaging services. No insurance needed.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VitalityScout — Verified Cash-Pay Health Prices',
    description:
      'Compare verified cash-pay prices for med-spa, hormone, GLP-1, lab, and imaging services. No insurance needed.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <TrackingScripts />
        <CookieConsent />
        <UTMCapture />
        <OutboundClickTracker />
        <PostHogProvider />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
