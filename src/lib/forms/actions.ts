'use server';

import { randomUUID } from 'node:crypto';
import { cookies, headers } from 'next/headers';
import { emailCaptureSchema, inquiryFormSchema } from './validation';
import { contactDeliveryConfigured, deliverContact, type ContactRequest } from './delivery';
import { analyticsProperties, opaqueId, safeToken } from '../tracking/privacy';

export type FormState = { success: boolean; error?: string; leadId?: string };

export async function getContactAvailability(): Promise<boolean> {
  return contactDeliveryConfigured();
}

function metadata(formData: FormData) {
  let attribution: Record<string, string | number | boolean> = {};
  // Consent is independently checked server-side; never trust a submitted flag.
  const consented = cookies().get('vs_consent')?.value === 'granted'
    && headers().get('dnt') !== '1' && headers().get('sec-gpc') !== '1';
  const raw = formData.get('attribution_data');
  if (consented && typeof raw === 'string' && raw.length <= 4096) {
    try { attribution = analyticsProperties(JSON.parse(raw)); } catch { /* Ignore malformed attribution. */ }
  }
  return {
    leadId: opaqueId(formData.get('submission_id')) || randomUUID(),
    source: safeToken(formData.get('source')) || 'unknown',
    attribution,
  };
}

async function receive(contact: ContactRequest): Promise<FormState> {
  const delivered = await deliverContact(contact);
  if (!delivered) return { success: false, error: 'We could not send your request. Please try again later. Your request has not been confirmed.' };
  return { success: true, leadId: contact.leadId };
}

export async function submitEmailCapture(_prevState: FormState, formData: FormData): Promise<FormState> {
  const parsed = emailCaptureSchema.safeParse({ email: formData.get('email') });
  if (!parsed.success) return { success: false, error: parsed.error.issues[0].message };
  return receive({ type: 'email_capture', ...parsed.data, ...metadata(formData) });
}

export async function submitInquiryForm(_prevState: FormState, formData: FormData): Promise<FormState> {
  const parsed = inquiryFormSchema.safeParse({
    name: formData.get('name'), email: formData.get('email'), category: formData.get('category'),
    condition: formData.get('condition') || undefined, message: formData.get('message') || undefined,
  });
  if (!parsed.success) return { success: false, error: parsed.error.issues[0].message };
  return receive({ type: 'inquiry', ...parsed.data, ...metadata(formData) });
}
