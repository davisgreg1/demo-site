import { z } from "zod";

export const headerVariantSchema = z.enum(["classic", "minimal"]);
export type HeaderVariant = z.infer<typeof headerVariantSchema>;

export const navItemSchema = z.object({
  label: z.string(),
  href: z.string(),
});

export const headerContentSchema = z.object({
  businessName: z.string(),
  phone: z.string(),
  navItems: z.array(navItemSchema).min(1),
  cta: z.object({
    label: z.string(),
    href: z.string(),
  }),
});

export type NavItem = z.infer<typeof navItemSchema>;
export type HeaderContent = z.infer<typeof headerContentSchema>;
