import type { ServiceAreaContent } from "@/components/service-area/types";

export const serviceAreaContent = {
  heading: "Service areas across metro Atlanta.",
  description: "Pioneer Plumbing responds quickly to neighborhoods and small businesses across the region.",
  areas: [
    { name: "Downtown Atlanta", description: "Fast service for residential and commercial plumbing needs." },
    { name: "Decatur", description: "Reliable repairs and maintenance for older homes and new builds." },
    { name: "Marietta", description: "Emergency and preventive plumbing support with clear pricing." },
    { name: "Sandy Springs", description: "Licensed technicians for leak repair, repiping, and inspections." },
  ],
} satisfies ServiceAreaContent;
