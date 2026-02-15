'use client';

import { useEffect } from 'react';
import { pushEvent } from '@/lib/tracking/events';

const THRESHOLDS = [25, 50, 75, 100] as const;

export default function ScrollTracker() {
  useEffect(() => {
    const fired = new Set<number>();
    const sentinels: HTMLDivElement[] = [];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          const depth = Number(entry.target.getAttribute('data-depth')) as
            | 25
            | 50
            | 75
            | 100;

          if (depth && !fired.has(depth)) {
            fired.add(depth);
            pushEvent('scroll_depth', {
              depth,
              pageUrl: window.location.href,
            });
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0 }
    );

    // Create sentinel elements at each threshold position
    for (const pct of THRESHOLDS) {
      const sentinel = document.createElement('div');
      sentinel.setAttribute('data-depth', String(pct));
      sentinel.setAttribute('aria-hidden', 'true');
      sentinel.style.position = 'absolute';
      sentinel.style.left = '0';
      sentinel.style.width = '1px';
      sentinel.style.height = '1px';
      sentinel.style.pointerEvents = 'none';
      sentinel.style.opacity = '0';
      // Position at pct% of document height
      sentinel.style.top = `${pct}%`;
      document.body.appendChild(sentinel);
      sentinels.push(sentinel);
      observer.observe(sentinel);
    }

    return () => {
      observer.disconnect();
      for (const el of sentinels) {
        el.remove();
      }
    };
  }, []);

  return null;
}
