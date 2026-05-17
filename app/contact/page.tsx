import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/contact-form";
import { variants } from "@/config/variants.config";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact | Pioneer Plumbing",
  description: "Reach out to Pioneer Plumbing for emergency repairs, inspections, and service estimates.",
  pathname: "/contact",
});

export default function ContactPage() {
  return <ContactForm variant={variants.contactForm} />;
}
