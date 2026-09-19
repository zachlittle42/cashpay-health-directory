'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { analyticsAllowed } from '@/lib/tracking/consent';
import { googleAnalyticsEnabled, updateGoogleConsent } from '@/lib/tracking/google';

function trackingId(id: string | undefined): string | undefined {
  return id && /^[A-Za-z0-9_-]+$/.test(id) ? id : undefined;
}

export default function TrackingScripts() {
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    if (!googleAnalyticsEnabled()) return;
    const sync = () => {
      const granted = analyticsAllowed();
      setAllowed(granted);
      updateGoogleConsent(granted);
    };
    sync();
    window.addEventListener('vs_consent_change', sync);
    return () => window.removeEventListener('vs_consent_change', sync);
  }, []);

  if (!googleAnalyticsEnabled() || !allowed) return null;
  const ga4Id = trackingId(process.env.NEXT_PUBLIC_GA4_ID);
  const gtmId = trackingId(process.env.NEXT_PUBLIC_GTM_ID);

  // Use one Google installation. Loading a second GTM container alongside the
  // configured GA4 tag can install duplicate or independently configured tags.
  if (ga4Id) return (
    <Script src={'https://www.googletagmanager.com/gtag/js?id=' + ga4Id} strategy="afterInteractive" />
  );
  if (!gtmId) return null;
  return (
    <Script id="gtm" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmId}');`}
    </Script>
  );
  // Analytics consent does not enable Meta Pixel or advertising personalization.
}
