import type { FooterContent } from "./types";

interface FooterClassicProps {
  content: FooterContent;
}

export function FooterClassic({ content }: FooterClassicProps) {
  return (
    <footer className="border-t border-border bg-white py-12 text-sm text-muted-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.5fr_1fr] lg:px-8">
        <div>
          <p className="text-base font-semibold text-foreground">{content.businessName}</p>
          <p>{content.address.street}</p>
          <p>{content.address.city}, {content.address.state} {content.address.zip}</p>
        </div>
        <div className="space-y-2">
          <a href={`tel:${content.phone}`} className="block text-foreground hover:text-primary">{content.phone}</a>
          <a href={`mailto:${content.email}`} className="block text-foreground hover:text-primary">{content.email}</a>
          <p className="pt-4 text-xs">© {content.copyrightYear} {content.businessName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
