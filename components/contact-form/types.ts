import { z } from "zod";

export const contactFormVariantSchema = z.enum(["stacked", "inline"]);
export type ContactFormVariant = z.infer<typeof contactFormVariantSchema>;

export const contactFormSchema = z.object({
  name: z.string().min(2, "Enter your name."),
  email: z.string().email("Enter a valid email."),
  phone: z.string().min(10, "Enter your phone number."),
  message: z.string().min(10, "Tell us more about your request."),
  honeypot: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
