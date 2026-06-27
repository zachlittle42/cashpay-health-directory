'use client';

import { useState, useRef, useMemo, useEffect, type KeyboardEvent as ReactKeyboardEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { NAV_GROUPS } from '@/lib/nav-tree';

type Hit = { label: string; url: string; type: string };

function typeFor(groupId: string, groupLabel: string, url: string): string {
  if (url.startsWith('/guides/')) return 'Guide';
  if (url.startsWith('/destinations/')) return 'Destination';
  if (url.startsWith('/faq/')) return 'FAQ';
  if (groupId === 'resources') return 'Resource';
  return groupLabel;
}

// Build a small, curated search index from the nav tree (real labels + URLs).
const INDEX: Hit[] = (() => {
  const seen = new Set<string>();
  const out: Hit[] = [];
  for (const g of NAV_GROUPS) {
    for (const s of g.subsections) {
      for (const it of s.items) {
        if (seen.has(it.url)) continue;
        seen.add(it.url);
        out.push({ label: it.label, url: it.url, type: typeFor(g.id, g.label, it.url) });
      }
    }
  }
  return out;
})();

function runSearch(q: string): Hit[] {
  const query = q.trim().toLowerCase();
  if (!query) return [];
  const starts: Hit[] = [];
  const incl: Hit[] = [];
  for (const h of INDEX) {
    const l = h.label.toLowerCase();
    if (l.startsWith(query)) starts.push(h);
    else if (l.includes(query)) incl.push(h);
  }
  return [...starts, ...incl].slice(0, 8);
}

export default function SearchAutocomplete({
  variant = 'bar',
  placeholder = 'Search treatments, clinics, destinations…',
}: {
  variant?: 'hero' | 'bar';
  placeholder?: string;
}) {
  const router = useRouter();
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const wrapRef = useRef<HTMLDivElement>(null);
  const results = useMemo(() => runSearch(q), [q]);
  const hero = variant === 'hero';

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  function go(hit?: Hit) {
    if (hit) {
      router.push(hit.url);
      setOpen(false);
      setQ('');
      return;
    }
    const query = q.trim();
    if (query) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      setOpen(false);
    }
  }

  function onKeyDown(e: ReactKeyboardEvent<HTMLInputElement>) {
    if (!open || results.length === 0) {
      if (e.key === 'Enter') {
        e.preventDefault();
        go();
      }
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, -1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      go(active >= 0 ? results[active] : undefined);
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  }

  return (
    <div ref={wrapRef} className="relative w-full">
      <div className="relative">
        <Search
          className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-gray-400 ${hero ? 'left-4 h-5 w-5' : 'left-3 h-4 w-4'}`}
        />
        <input
          type="text"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
            setActive(-1);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          aria-label="Search"
          autoComplete="off"
          className={
            hero
              ? 'w-full rounded-full border border-gray-200 bg-white py-3.5 pl-12 pr-28 text-base shadow-sm focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100'
              : 'w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-9 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100'
          }
        />
        {hero && (
          <button
            type="button"
            onClick={() => go()}
            className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Search
          </button>
        )}
      </div>

      {open && results.length > 0 && (
        <ul className="absolute left-0 right-0 z-50 mt-2 overflow-hidden rounded-2xl border border-gray-200 bg-white py-1 text-left shadow-xl">
          {results.map((h, i) => (
            <li key={h.url}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => go(h)}
                className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-sm ${i === active ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
              >
                <span className="flex min-w-0 items-center gap-2">
                  <Search className="h-3.5 w-3.5 shrink-0 text-gray-300" />
                  <span className="truncate text-gray-900">{h.label}</span>
                </span>
                <span className="shrink-0 rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-500">
                  {h.type}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
