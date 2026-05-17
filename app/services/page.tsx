import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { Services } from "@/components/services";
import { variants } from "@/config/variants.config";
import { servicesContent } from "@/content/services";

export const metadata: Metadata = generatePageMetadata({
  title: "Services | Pioneer Plumbing",
  description: "Explore the plumbing services offered by Pioneer Plumbing across Atlanta.",
  pathname: "/services",
});

export default function ServicesPage() {
  return <Services variant={variants.services} content={servicesContent} />;
}
