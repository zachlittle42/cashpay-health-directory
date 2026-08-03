'use server';

import { Resend } from 'resend';
import { emailCaptureSchema, inquiryFormSchema } from './validation';

const NOTIFICATION_EMAIL = process.env.LEAD_NOTIFICATION_EMAIL || 'leads@vitalityscout.com';

// PostHog is the durable lead store (project already wired via NEXT_PUBLIC_POSTHOG_KEY).
// Email notification via Resend is best-effort on top — a missing RESEND_API_KEY must
// never lose a lead or fail the submission.
const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_INGEST = 'https://us.i.posthog.com/capture/';

async function storeLead(
  event: 'lead_email_capture' | 'lead_inquiry',
  properties: Record<string, unknown>
): Promise<boolean> {
  if (!POSTHOG_KEY) return false;
  try {
    const res = await fetch(POSTHOG_INGEST, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: POSTHOG_KEY,
        event,
        distinct_id: `lead:${String(properties.email ?? 'unknown')}`,
        properties: { ...properties, $site: 'vitality-web', channel: 'web-form' },
        timestamp: new Date().toISOString(),
      }),
    });
    return res.ok;
  } catch (error) {
    console.error('Lead store error:', error);
    return false;
  }
}

async function notifyByEmail(subject: string, html: string): Promise<boolean> {
  if (!process.env.RESEND_API_KEY) return false;
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'VitalityScout <notifications@vitalityscout.com>',
      to: NOTIFICATION_EMAIL,
      subject,
      html,
    });
    return true;
  } catch (error) {
    console.error('Lead email notify error:', error);
    return false;
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export type FormState = {
  success: boolean;
  error?: string;
};

export async function submitEmailCapture(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const raw = {
    email: formData.get('email'),
  };

  const parsed = emailCaptureSchema.safeParse(raw);
  if (!parsed.success) {
    return { success: false, error: parsed.error.issues[0].message };
  }

  const source = (formData.get('source') as string) || 'unknown';
  const utmData = (formData.get('utm_data') as string) || '{}';

  const stored = await storeLead('lead_email_capture', {
    email: parsed.data.email,
    source,
    utm: utmData,
  });
  const notified = await notifyByEmail(
    `New Email Capture: ${escapeHtml(parsed.data.email)}`,
    `
      <h2>New Email Capture</h2>
      <p><strong>Email:</strong> ${escapeHtml(parsed.data.email)}</p>
      <p><strong>Source:</strong> ${escapeHtml(source)}</p>
      <p><strong>UTM Data:</strong></p>
      <pre>${escapeHtml(utmData)}</pre>
      <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
    `
  );

  if (!stored && !notified) {
    return { success: false, error: 'Something went wrong. Please try again.' };
  }
  return { success: true };
}

export async function submitInquiryForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const raw = {
    name: formData.get('name'),
    email: formData.get('email'),
    category: formData.get('category'),
    condition: formData.get('condition') || undefined,
    message: formData.get('message') || undefined,
  };

  const parsed = inquiryFormSchema.safeParse(raw);
  if (!parsed.success) {
    return { success: false, error: parsed.error.issues[0].message };
  }

  const source = (formData.get('source') as string) || 'unknown';
  const utmData = (formData.get('utm_data') as string) || '{}';

  const stored = await storeLead('lead_inquiry', {
    email: parsed.data.email,
    lead_name: parsed.data.name,
    category: parsed.data.category,
    condition: parsed.data.condition,
    message: parsed.data.message,
    source,
    utm: utmData,
  });
  const notified = await notifyByEmail(
    `New Inquiry: ${escapeHtml(parsed.data.category)} - ${escapeHtml(parsed.data.name)}`,
    `
      <h2>New Inquiry Form Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(parsed.data.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(parsed.data.email)}</p>
      <p><strong>Category:</strong> ${escapeHtml(parsed.data.category)}</p>
      ${parsed.data.condition ? `<p><strong>Condition:</strong> ${escapeHtml(parsed.data.condition)}</p>` : ''}
      ${parsed.data.message ? `<p><strong>Message:</strong> ${escapeHtml(parsed.data.message)}</p>` : ''}
      <p><strong>Source:</strong> ${escapeHtml(source)}</p>
      <p><strong>UTM Data:</strong></p>
      <pre>${escapeHtml(utmData)}</pre>
      <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
    `
  );

  if (!stored && !notified) {
    return { success: false, error: 'Something went wrong. Please try again.' };
  }
  return { success: true };
}
