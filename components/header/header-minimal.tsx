import { ThemeToggle } from "@/components/primitives/theme-toggle";
import type { HeaderContent } from "./types";

interface HeaderMinimalProps {
  content: HeaderContent;
}

export function HeaderMinimal({ content }: HeaderMinimalProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <a href="/" className="text-lg font-semibold tracking-tight text-foreground">
          {content.businessName}
        </a>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <ThemeToggle />
          <a href={`tel:${content.phone}`} className="font-semibold text-foreground">
            {content.phone}
          </a>
          <a href={content.cta.href} className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
            {content.cta.label}
          </a>
        </div>
      </div>
    </header>
  );
}
