import { Resend } from "resend";
import { siteConfig } from "@/config/site.config";
import { buildContactNotificationEmail } from "./templates/contact-notification";
import type { ContactFormValues } from "@/components/contact-form/types";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY. Set the environment variable before sending email.");
  }

  return new Resend(apiKey);
}

export async function sendContactEmail(values: ContactFormValues) {
  const html = buildContactNotificationEmail(values);
  const resend = getResendClient();

  return await resend.emails.send({
    from: `Pioneer Plumbing <contact@${new URL(siteConfig.urls.canonical).hostname}>`,
    to: siteConfig.business.email,
    subject: `New contact request from ${values.name}`,
    html,
  });
}
