import type { FooterContent } from "./types";

interface FooterMinimalProps {
  content: FooterContent;
}

export function FooterMinimal({ content }: FooterMinimalProps) {
  return (
    <footer className="border-t border-border bg-background py-8 text-center text-sm text-muted-foreground">
      <p className="font-medium text-foreground">{content.businessName}</p>
      <p>{content.address.city}, {content.address.state}</p>
      <p className="mt-3">© {content.copyrightYear} {content.businessName}</p>
    </footer>
  );
}
