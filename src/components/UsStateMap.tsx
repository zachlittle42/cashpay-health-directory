'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { US_MAP_VIEWBOX, US_STATES } from '@/lib/us-map-paths';

// Clickable geographic US map — each state routes to its cash-pay state page.
export default function UsStateMap() {
  const router = useRouter();
  const [hover, setHover] = useState<string | null>(null);
  const hovered = hover ? US_STATES.find((s) => s.id === hover) : null;

  return (
    <div className="w-full">
      <svg viewBox={US_MAP_VIEWBOX} className="h-auto w-full" role="group" aria-label="Map of US states">
        {US_STATES.map((s) => (
          <path
            key={s.id}
            d={s.path}
            tabIndex={0}
            role="link"
            aria-label={s.name}
            onClick={() => router.push(`/traditional-healthcare/${s.slug}`)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') router.push(`/traditional-healthcare/${s.slug}`);
            }}
            onMouseEnter={() => setHover(s.id)}
            onMouseLeave={() => setHover((h) => (h === s.id ? null : h))}
            className={`cursor-pointer stroke-white outline-none transition-colors focus:fill-blue-600 ${
              hover === s.id ? 'fill-blue-600' : 'fill-blue-200 hover:fill-blue-400'
            }`}
            strokeWidth={1.2}
          >
            <title>{s.name}</title>
          </path>
        ))}
      </svg>
      <p className="mt-3 text-center text-sm text-gray-500">
        {hovered ? (
          <span className="font-medium text-gray-900">{hovered.name}</span>
        ) : (
          'Hover or tap a state to find cash-pay care near you'
        )}
      </p>
    </div>
  );
}
