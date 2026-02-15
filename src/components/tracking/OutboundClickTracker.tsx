'use client';

import { useEffect } from 'react';
import { pushEvent } from '@/lib/tracking/events';

export default function OutboundClickTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      // Walk up from the click target to find the nearest <a> element
      const target = (e.target as HTMLElement)?.closest?.('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href) return;

      let url: URL;
      try {
        url = new URL(href, window.location.origin);
      } catch {
        return; // invalid URL
      }

      // Only track links to external hostnames
      if (url.hostname === window.location.hostname) return;

      // Try to extract provider name from a parent with data-provider
      const providerEl = target.closest('[data-provider]');
      const providerName = providerEl?.getAttribute('data-provider') || undefined;

      pushEvent('outbound_click', {
        url: href,
        linkText: (target.textContent || '').trim().slice(0, 200),
        providerName,
      });
    }

    document.addEventListener('click', handleClick, { capture: true });
    return () => document.removeEventListener('click', handleClick, { capture: true });
  }, []);

  return null;
}
