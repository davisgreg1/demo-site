import { z } from "zod";

export const themeSchema = z.object({
  colors: z.object({
    primary: z.string().min(1),
    primaryForeground: z.string().min(1),
    accent: z.string().min(1),
    accentForeground: z.string().min(1),
    background: z.string().min(1),
    foreground: z.string().min(1),
    muted: z.string().min(1),
    mutedForeground: z.string().min(1),
    border: z.string().min(1),
    success: z.string().min(1),
    warning: z.string().min(1),
    danger: z.string().min(1),
  }),
  fonts: z.object({
    heading: z.string().min(1),
    body: z.string().min(1),
  }),
  radius: z.object({
    sm: z.string().min(1),
    md: z.string().min(1),
    lg: z.string().min(1),
  }),
  spacing: z.enum(["tight", "comfortable", "spacious"]),
  shadows: z.enum(["none", "soft", "hard"]),
});

export type ThemeConfig = z.infer<typeof themeSchema>;
