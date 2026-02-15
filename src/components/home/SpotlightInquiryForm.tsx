'use client';

import { useEffect, useRef } from 'react';
import InlineInquiryForm from '@/components/forms/InlineInquiryForm';

// This component uses manual DOM appendChild to portal a client component into a
// server-rendered placeholder (div#stem-cell-inquiry in CategorySpotlight).
// React createPortal would be cleaner but requires the target node at render time,
// and since CategorySpotlight is a server component we can't pass a ref down.
// The DOM approach is the pragmatic solution for cross-component-boundary portalling.
export default function SpotlightInquiryForm() {
  const movedRef = useRef(false);

  useEffect(() => {
    const target = document.getElementById('stem-cell-inquiry');
    const container = document.getElementById('spotlight-inquiry-container');
    if (target && container && !movedRef.current) {
      target.appendChild(container);
      container.style.display = 'block';
      movedRef.current = true;
    }
  }, []);

  return (
    <div id="spotlight-inquiry-container" style={{ display: 'none' }}>
      <InlineInquiryForm
        defaultCategory="stem_cells"
        title="Get Personalized Recommendations"
        source="v2_homepage_spotlight"
      />
    </div>
  );
}
