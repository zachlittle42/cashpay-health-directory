'use client';
import { useEffect } from 'react';
import { pushEvent } from '@/lib/tracking/events';
import { providerClickProperties } from '@/lib/tracking/provider-click';

export default function OutboundClickTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.type === 'auxclick' && event.button !== 1) return;
      const link = (event.target as Element)?.closest?.('a');
      if (!link) return;
      const container = link.closest('[data-provider-id]');
      const properties = providerClickProperties(link.getAttribute('href'), window.location.origin, {
        link_purpose: link.closest('[data-link-purpose]')?.getAttribute('data-link-purpose'),
        provider_id: container?.getAttribute('data-provider-id'),
        category: link.getAttribute('data-category') || container?.getAttribute('data-category'),
        placement: link.getAttribute('data-placement') || container?.getAttribute('data-placement'),
      });
      if (properties) pushEvent('provider_click', properties);
    };
    document.addEventListener('click', handleClick, { capture: true });
    document.addEventListener('auxclick', handleClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleClick, { capture: true });
      document.removeEventListener('auxclick', handleClick, { capture: true });
    };
  }, []);
  return null;
}
