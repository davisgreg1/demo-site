import type { FooterContent } from "@/components/footer/types";
import type { HeaderContent } from "@/components/header/types";
import { siteConfig } from "./site.config";

export const headerContent: HeaderContent = {
  businessName: siteConfig.business.name,
  phone: siteConfig.business.phone,
  navItems: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Service Area", href: "/service-area" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  cta: {
    label: "Book Service",
    href: "/contact",
  },
};

export const footerContent: FooterContent = {
  businessName: siteConfig.business.name,
  address: siteConfig.business.address,
  phone: siteConfig.business.phone,
  email: siteConfig.business.email,
  copyrightYear: new Date().getFullYear(),
};
