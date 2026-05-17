import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";

interface PageSeoOptions {
  title: string;
  description: string;
  pathname?: string;
  image?: string;
  keywords?: string[];
}

export function generatePageMetadata({
  title,
  description,
  pathname = "/",
  image = "/og",
  keywords = [],
}: PageSeoOptions): Metadata {
  const url = `${siteConfig.urls.canonical.replace(/\/$/, "")}${pathname}`;

  return {
    title,
    description,
    keywords: [...siteConfig.seo.primaryKeywords, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.business.name,
      type: "website",
      images: [{ url: `${siteConfig.urls.canonical.replace(/\/$/, "")}${image}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function getLocalBusinessJsonLd(pathname = "/") {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.business.name,
    description: siteConfig.business.tagline,
    url: `${siteConfig.urls.canonical.replace(/\/$/, "")}${pathname}`,
    telephone: siteConfig.business.phone,
    email: siteConfig.business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.business.address.street,
      addressLocality: siteConfig.business.address.city,
      addressRegion: siteConfig.business.address.state,
      postalCode: siteConfig.business.address.zip,
    },
    areaServed: siteConfig.business.serviceAreas,
  };
}
