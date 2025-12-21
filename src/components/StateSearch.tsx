'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { STATES, type State } from '@/lib/states';

interface StateSearchProps {
  variant?: 'compact' | 'full';
  placeholder?: string;
}

export default function StateSearch({ variant = 'full', placeholder = 'Search states...' }: StateSearchProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const filteredStates = useMemo(() => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase();
    return STATES.filter(
      (state) =>
        state.name.toLowerCase().includes(lowerQuery) ||
        state.abbreviation.toLowerCase() === lowerQuery
    ).slice(0, 8);
  }, [query]);

  const showDropdown = isFocused && query.length > 0 && filteredStates.length > 0;

  return (
    <div className="relative w-full">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder={placeholder}
          className={`w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pl-10 text-gray-900 placeholder-gray-500 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 ${
            variant === 'compact' ? 'text-sm' : 'text-base'
          }`}
        />
        <svg
          className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {showDropdown && (
        <div className="absolute z-50 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-lg">
          {filteredStates.map((state) => (
            <Link
              key={state.slug}
              href={`/healthcare/${state.slug}`}
              className="flex items-center justify-between px-4 py-3 hover:bg-teal-50 first:rounded-t-lg last:rounded-b-lg"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">🏥</span>
                <div>
                  <div className="font-medium text-gray-900">{state.name}</div>
                  <div className="text-xs text-gray-500">
                    {state.population} population
                    {state.hasContent && (
                      <span className="ml-2 text-teal-600">• Full guide available</span>
                    )}
                  </div>
                </div>
              </div>
              <span className="rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                {state.abbreviation}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
