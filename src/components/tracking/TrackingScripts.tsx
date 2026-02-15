'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { getConsentState, type ConsentState } from '@/lib/tracking/consent';

/** Only allow alphanumeric, dashes, and underscores in tracking IDs. */
function validateTrackingId(id: string | undefined): string | undefined {
  if (!id) return undefined;
  return /^[A-Za-z0-9_-]+$/.test(id) ? id : undefined;
}

export default function TrackingScripts() {
  const [consent, setConsent] = useState<ConsentState>(null);

  useEffect(() => {
    const current = getConsentState();
    setConsent(current);

    // If user previously granted consent, update GTM consent mode on load
    if (current === 'granted') {
      const w = window as typeof window & { gtag?: (...args: unknown[]) => void };
      if (typeof w.gtag === 'function') {
        w.gtag('consent', 'update', {
          analytics_storage: 'granted',
          ad_storage: 'granted',
          ad_user_data: 'granted',
          ad_personalization: 'granted',
        });
      }
    }

    // Listen for consent changes
    const handler = () => setConsent(getConsentState());
    window.addEventListener('vs_consent_change', handler);
    return () => window.removeEventListener('vs_consent_change', handler);
  }, []);

  const gtmId = validateTrackingId(process.env.NEXT_PUBLIC_GTM_ID);
  const ga4Id = validateTrackingId(process.env.NEXT_PUBLIC_GA4_ID);
  const metaPixelId = validateTrackingId(process.env.NEXT_PUBLIC_META_PIXEL_ID);

  return (
    <>
      {/* GTM - always load (respects consent mode) */}
      {gtmId && (
        <>
          <Script id="gtm-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied'
              });
            `}
          </Script>
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
        </>
      )}

      {/* GA4 - only when consent granted */}
      {consent === 'granted' && ga4Id && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ga4Id}');
            `}
          </Script>
        </>
      )}

      {/* Meta Pixel - only when consent granted */}
      {consent === 'granted' && metaPixelId && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${metaPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
