import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { ThemeProvider } from "@/lib/theme-provider";
import { Analytics } from "@/lib/analytics";
import { siteConfig } from "@/config/site.config";
import { variants } from "@/config/variants.config";
import { headerContent, footerContent } from "@/config/site-content";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.business.name,
  description: siteConfig.business.tagline,
  metadataBase: new URL(siteConfig.urls.canonical),
  openGraph: {
    title: siteConfig.business.name,
    description: siteConfig.business.tagline,
    url: siteConfig.urls.canonical,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable} h-full`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>
          <Header variant={variants.header} content={headerContent} />
          <main className="min-h-screen">{children}</main>
          <Footer variant={variants.footer} content={footerContent} />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
