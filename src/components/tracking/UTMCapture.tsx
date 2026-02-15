'use client';

import { useEffect } from 'react';
import { captureUTMParams } from '@/lib/tracking/utm';

export default function UTMCapture() {
  useEffect(() => {
    captureUTMParams();
  }, []);

  return null;
}
