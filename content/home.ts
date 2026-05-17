import type { CtaContent } from "@/components/cta/types";
import type { HeroContent } from "@/components/hero/types";

export const homeContent = {
  hero: {
    headline: "Atlanta’s fastest 24/7 plumbing team.",
    subhead: "From leaks to full repipes, Pioneer Plumbing protects homes and businesses with honest service.",
    image: "/photos/plumber-truck.svg",
    imageAlt: "Pioneer Plumbing service truck in front of a home",
    primaryCta: { label: "Call Now", href: "tel:+14045550123" },
    secondaryCta: { label: "Schedule Service", href: "/contact" },
  } satisfies HeroContent,
  cta: {
    headline: "Need help today? We’re on standby.",
    body: "Same-day dispatch, transparent pricing, and licensed technicians serving the greater Atlanta area.",
    cta: { label: "Get a Free Estimate", href: "/contact" },
  } satisfies CtaContent,
};
