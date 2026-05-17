import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { ServiceArea } from "@/components/service-area";
import { variants } from "@/config/variants.config";
import { serviceAreaContent } from "@/content/service-area";

export const metadata: Metadata = generatePageMetadata({
  title: "Service Area | Pioneer Plumbing",
  description: "Find the Atlanta neighborhoods and cities covered by Pioneer Plumbing.",
  pathname: "/service-area",
});

export default function ServiceAreaPage() {
  return <ServiceArea variant={variants.serviceArea} content={serviceAreaContent} />;
}
