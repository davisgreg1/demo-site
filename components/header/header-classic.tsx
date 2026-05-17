import { ThemeToggle } from "@/components/primitives/theme-toggle";
import type { HeaderContent } from "./types";
import { NavDesktop } from "./nav-desktop";
import { NavMobile } from "./nav-mobile";

interface HeaderClassicProps {
  content: HeaderContent;
}

export function HeaderClassic({ content }: HeaderClassicProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-8">
        <div>
          <a href="/" className="text-xl font-bold tracking-tight text-foreground">
            {content.businessName}
          </a>
          <p className="text-sm text-muted-foreground">Trusted plumbing across Atlanta</p>
        </div>
        <div className="hidden items-center gap-6 lg:flex">
          <NavDesktop items={content.navItems} phone={content.phone} ctaHref={content.cta.href} />
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <NavMobile items={content.navItems} phone={content.phone} ctaHref={content.cta.href} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
