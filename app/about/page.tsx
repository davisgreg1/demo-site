import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { About } from "@/components/about";
import { variants } from "@/config/variants.config";
import { aboutContent } from "@/content/about";

export const metadata: Metadata = generatePageMetadata({
  title: "About | Pioneer Plumbing",
  description: "Learn about Pioneer Plumbing’s mission, values, and local Atlanta experience.",
  pathname: "/about",
});

export default function AboutPage() {
  return <About variant={variants.about} content={aboutContent} />;
}
