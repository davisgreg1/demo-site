import type { ContactFormValues } from "@/components/contact-form/types";
import { siteConfig } from "@/config/site.config";

export function buildContactNotificationEmail({ name, email, phone, message }: ContactFormValues) {
  return `
    <html>
      <body style="font-family: Inter, system-ui, sans-serif; color: #111827;">
        <div style="max-width: 620px; margin: 0 auto; padding: 24px;">
          <h1 style="color: #0A4D8C;">New contact form submission</h1>
          <p>${siteConfig.business.name} received a new inquiry.</p>
          <ul style="list-style:none; padding:0;">
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
            <li><strong>Phone:</strong> ${phone}</li>
          </ul>
          <div style="margin-top: 20px; padding: 16px; border: 1px solid #CBD5E1; border-radius: 12px; background: #F8FAFC;">
            <p style="margin:0 0 8px 0;"><strong>Message</strong></p>
            <p style="margin:0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      </body>
    </html>
  `;
}
