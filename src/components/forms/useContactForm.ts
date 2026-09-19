'use client';
import { useCallback, useEffect, useRef, useState, type FormEvent } from 'react';
import { getContactAvailability, type FormState } from '@/lib/forms/actions';
import { pushEvent } from '@/lib/tracking/events';
import { getAttributionData } from '@/lib/tracking/utm';

export function useContactForm(source: string, type: 'email_capture' | 'inquiry', submit: (state: FormState, data: FormData) => Promise<FormState>) {
  const [state, setState] = useState<FormState>({ success: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [available, setAvailable] = useState<boolean | null>(null);
  const started = useRef(false);
  const pending = useRef(false);
  const submission = useRef<{ signature: string; id: string; attribution: string }>();
  const completed = useRef<string>();
  useEffect(() => {
    let active = true;
    getContactAvailability().then(value => { if (active) setAvailable(value); }).catch(() => { if (active) setAvailable(false); });
    return () => { active = false; };
  }, []);
  const handleFocus = useCallback(() => {
    if (started.current) return;
    started.current = true;
    pushEvent('form_start', { form_type: type, form_source: source });
  }, [source, type]);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (pending.current || !available) return;
    pending.current = true;
    setIsSubmitting(true);
    try {
      const data = new FormData(event.currentTarget);
      const signature = JSON.stringify(Array.from(data.entries()));
      if (!submission.current || signature !== submission.current.signature) {
        submission.current = { signature, id: crypto.randomUUID(), attribution: JSON.stringify({ ...getAttributionData(), page_path: window.location.pathname }) };
      }
      const attempt = submission.current;
      data.set('source', source);
      data.set('submission_id', submission.current.id);
      data.set('attribution_data', submission.current.attribution);
      const result = await submit({ success: false }, data);
      setState(result);
      if (result.success && result.leadId && completed.current !== result.leadId) {
        completed.current = result.leadId;
        const original = JSON.parse(attempt.attribution) as Record<string, unknown>;
        // Never reconnect an old contact to a new journey after withdrawal and
        // regrant. Preserve operational retry IDs, but do not backfill consent.
        if (!original.journey_id || original.journey_id !== getAttributionData().journey_id) return;
        const props = { ...original, form_type: type, form_source: source, lead_id: result.leadId };
        pushEvent('contact_received', props);
        pushEvent('form_complete', props);
        // Compatibility for historical lead sensors. Count only contact_received
        // (distinct lead_id) in the canonical scorecard, never sum aliases.
        pushEvent(type === 'email_capture' ? 'lead_email_capture' : 'lead_inquiry', {
          ...original, form_source: source, lead_id: result.leadId, legacy_alias: true,
        });
        if (type === 'email_capture') pushEvent('email_capture', { ...original, form_source: source, lead_id: result.leadId });
      }
    } catch {
      setState({ success: false, error: 'We could not confirm your request. Please try again.' });
    } finally {
      pending.current = false;
      setIsSubmitting(false);
    }
  };
  return { state, isSubmitting, available, handleFocus, handleSubmit };
}
