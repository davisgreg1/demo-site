import type { ServicesContent } from "@/components/services/types";

export const servicesContent = {
  heading: "Comprehensive plumbing services built for Atlanta.",
  intro: "From emergency repairs to preventive maintenance, Pioneer Plumbing keeps your water running and your repairs on budget.",
  featured: [
    {
      title: "Emergency plumbing",
      description: "Fast response for burst pipes, clogged drains, and water damage restoration.",
      icon: "Zap",
    },
    {
      title: "Water heater service",
      description: "Installation, repair, and maintenance for tank and tankless systems.",
      icon: "Flame",
    },
    {
      title: "Drain cleaning",
      description: "Safe clearing of slow or blocked drains with advanced inspection tools.",
      icon: "Droplet",
    },
    {
      title: "Fixture upgrades",
      description: "Friendly upgrades for kitchens, bathrooms, and outdoor plumbing fixtures.",
      icon: "Wrench",
    },
  ],
} satisfies ServicesContent;
