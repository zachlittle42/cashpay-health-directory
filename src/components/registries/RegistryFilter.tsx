'use client';

import { useEffect, useState } from 'react';

/**
 * Progressive filter for a server-rendered registry list. The rows are already
 * in the HTML (so they index and work without JavaScript); this only toggles
 * `hidden` on rows whose data-search text does not contain the query, and hides
 * district headings whose rows are all hidden.
 */
export default function RegistryFilter({ listId, total }: { listId: string; total: number }) {
  const [q, setQ] = useState('');
  const [shown, setShown] = useState(total);

  useEffect(() => {
    const root = document.getElementById(listId);
    if (!root) return;
    const needle = q.trim().replace(/ı/g, 'i').replace(/İ/g, 'I').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    let visible = 0;
    root.querySelectorAll<HTMLElement>('[data-search]').forEach((el) => {
      const hit = !needle || (el.dataset.search || '').includes(needle);
      el.hidden = !hit;
      if (hit) visible += 1;
    });
    root.querySelectorAll<HTMLElement>('[data-district]').forEach((group) => {
      const any = Array.from(group.querySelectorAll<HTMLElement>('[data-search]')).some((el) => !el.hidden);
      group.hidden = !any;
    });
    setShown(visible);
  }, [q, listId]);

  return (
    <div className="mb-6 rounded-xl border border-gray-200 bg-white p-4">
      <label htmlFor={`${listId}-filter`} className="block text-sm font-semibold text-gray-900">
        Filter by name, district or street
      </label>
      <input
        id={`${listId}-filter`}
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="e.g. Kadıköy, Gangnam-gu, Acıbadem, Teheran-ro"
        className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
        autoComplete="off"
      />
      <p className="mt-2 text-xs text-gray-500" aria-live="polite">
        Showing {shown.toLocaleString('en-US')} of {total.toLocaleString('en-US')}. Accent-insensitive.
      </p>
    </div>
  );
}
