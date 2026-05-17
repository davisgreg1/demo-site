import { z } from "zod";

export const footerVariantSchema = z.enum(["classic", "minimal"]);
export type FooterVariant = z.infer<typeof footerVariantSchema>;

export const footerContentSchema = z.object({
  businessName: z.string(),
  address: z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
  }),
  phone: z.string(),
  email: z.string().email(),
  copyrightYear: z.number().int(),
});

export type FooterContent = z.infer<typeof footerContentSchema>;
