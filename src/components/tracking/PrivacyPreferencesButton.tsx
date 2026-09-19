'use client';

export default function PrivacyPreferencesButton() {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event('vs_open_consent'))} className="hover:text-gray-700">
      Privacy settings
    </button>
  );
}
