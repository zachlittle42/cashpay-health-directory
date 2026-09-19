import { Resend } from 'resend';

export interface ContactRequest {
  type: 'email_capture' | 'inquiry';
  leadId: string; email: string; source: string;
  name?: string; category?: string; condition?: string; message?: string;
  attribution: Record<string, string | number | boolean>;
}
export interface DeliveryMessage { from: string; to: string; subject: string; text: string }
type Sender = (message: DeliveryMessage, options: { idempotencyKey: string }) => Promise<{ data: { id: string } | null; error: unknown }>;

export function contactDeliveryConfigured(apiKey = process.env.RESEND_API_KEY, recipient = process.env.LEAD_NOTIFICATION_EMAIL): boolean {
  return Boolean(apiKey && recipient && /^[^@\s<>]+@[^@\s<>]+\.[^@\s<>]+$/.test(recipient));
}

/** Contacts belong to the operational inbox, never to analytics. */
export async function deliverContact(
  contact: ContactRequest,
  config = { apiKey: process.env.RESEND_API_KEY, recipient: process.env.LEAD_NOTIFICATION_EMAIL },
  sender?: Sender,
): Promise<boolean> {
  if (!contactDeliveryConfigured(config.apiKey, config.recipient) || !config.recipient) return false;
  const message: DeliveryMessage = {
    from: process.env.LEAD_FROM_EMAIL || 'VitalityScout <notifications@vitalityscout.com>',
    to: config.recipient,
    subject: 'VitalityScout ' + contact.type + ' — ' + contact.leadId,
    text: [
      'Contact ID: ' + contact.leadId, 'Type: ' + contact.type,
      'Email: ' + contact.email,
      ...(contact.name ? ['Name: ' + contact.name] : []),
      ...(contact.category ? ['Category: ' + contact.category] : []),
      ...(contact.condition ? ['Condition: ' + contact.condition] : []),
      ...(contact.message ? ['Message: ' + contact.message] : []),
      'Source: ' + contact.source,
      'Consented attribution: ' + JSON.stringify(contact.attribution),
      '', 'This is a contact request, not an accepted provider referral or booking.',
    ].join('\n'),
  };
  try {
    const send = sender || ((payload, options) => new Resend(config.apiKey).emails.send(payload, options));
    const result = await send(message, { idempotencyKey: 'contact/' + contact.leadId });
    return !result.error && Boolean(result.data?.id);
  } catch {
    // Do not log request contents or errors that may contain contact details.
    console.error('Contact delivery failed');
    return false;
  }
}
