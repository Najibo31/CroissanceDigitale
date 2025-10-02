'use server';

/**
 * @fileOverview Sends a contact form submission as an email.
 *
 * - sendContactEmail - A function that handles sending the contact email.
 * - SendContactEmailInput - The input type for the sendContactEmail function.
 * - SendContactEmailOutput - The return type for the sendContactEmail function.
 */

import { ai } from '@/ai/genkit';
import { sendEmail } from '@/lib/email';
import { z } from 'genkit';

const SendContactEmailInputSchema = z.object({
  phone: z.string(),
  email: z.string(),
  need: z.string(),
  workInterest: z.string(),
  projectDescription: z.string(),
});
export type SendContactEmailInput = z.infer<typeof SendContactEmailInputSchema>;

const SendContactEmailOutputSchema = z.object({
  success: z.boolean(),
});
export type SendContactEmailOutput = z.infer<typeof SendContactEmailOutputSchema>;

export async function sendContactEmail(input: SendContactEmailInput): Promise<SendContactEmailOutput> {
  return sendContactEmailFlow(input);
}

const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: SendContactEmailInputSchema,
    outputSchema: SendContactEmailOutputSchema,
  },
  async (input) => {
    const from = 'contact.croissancedigitale@gmail.com';
    const to = ['najibouldali6@gmail.com', 'ouldalibtissem@gmail.com'];
    const subject = `Nouvelle demande de devis: ${input.need}`;

    const textBody = `
      Nouvelle demande de contact:

      Email: ${input.email}
      Téléphone: ${input.phone}
      Besoin: ${input.need}
      Intérêt: ${input.workInterest}
      Description du projet:
      ${input.projectDescription}
    `;

    const htmlBody = `
      <h1>Nouvelle demande de contact</h1>
      <p><strong>Email:</strong> ${input.email}</p>
      <p><strong>Téléphone:</strong> ${input.phone}</p>
      <p><strong>Besoin:</strong> ${input.need}</p>
      <p><strong>Intérêt:</strong> ${input.workInterest}</p>
      <p><strong>Description du projet:</strong></p>
      <p>${input.projectDescription.replace(/\n/g, '<br>')}</p>
    `;

    try {
      await sendEmail({
        from,
        to,
        subject,
        text: textBody,
        html: htmlBody,
      });
      return { success: true };
    } catch (error) {
      console.error('Failed to send email:', error);
      return { success: false };
    }
  }
);
