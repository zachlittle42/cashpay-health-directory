import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import TrackingScripts from '@/components/tracking/TrackingScripts';
import CookieConsent from '@/components/tracking/CookieConsent';
import UTMCapture from '@/components/tracking/UTMCapture';
import OutboundClickTracker from '@/components/tracking/OutboundClickTracker';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cash-Pay Health Directory | Compare Prices, Find Providers',
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
