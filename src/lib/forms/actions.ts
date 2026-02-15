'use server';

import { Resend } from 'resend';
import { emailCaptureSchema, inquiryFormSchema } from './validation';

const resend = new Resend(process.env.RESEND_API_KEY);
const NOTIFICATION_EMAIL = process.env.LEAD_NOTIFICATION_EMAIL || 'leads@vitalityscout.com';

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

  try {
    await resend.emails.send({
      from: 'VitalityScout <notifications@vitalityscout.com>',
      to: NOTIFICATION_EMAIL,
      subject: `New Email Capture: ${escapeHtml(parsed.data.email)}`,
      html: `
        <h2>New Email Capture</h2>
        <p><strong>Email:</strong> ${escapeHtml(parsed.data.email)}</p>
        <p><strong>Source:</strong> ${escapeHtml(source)}</p>
        <p><strong>UTM Data:</strong></p>
        <pre>${escapeHtml(utmData)}</pre>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Email capture error:', error);
    return { success: false, error: 'Something went wrong. Please try again.' };
  }
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

  try {
    await resend.emails.send({
      from: 'VitalityScout <notifications@vitalityscout.com>',
      to: NOTIFICATION_EMAIL,
      subject: `New Inquiry: ${escapeHtml(parsed.data.category)} - ${escapeHtml(parsed.data.name)}`,
      html: `
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
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Inquiry form error:', error);
    return { success: false, error: 'Something went wrong. Please try again.' };
  }
}
