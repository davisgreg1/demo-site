import type { NavItem } from "./types";

interface NavDesktopProps {
  items: NavItem[];
  phone: string;
  ctaHref: string;
}

export function NavDesktop({ items, phone, ctaHref }: NavDesktopProps) {
  return (
    <div className="hidden items-center gap-8 lg:flex">
      <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
        {items.map((item) => (
          <a key={item.href} href={item.href} className="nav-link text-muted-foreground transition hover:text-foreground">
            {item.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <a href={`tel:${phone}`} className="text-sm font-semibold text-foreground">
          {phone}
        </a>
        <a
          href={ctaHref}
          className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary-700 hover:text-primary-foreground"
        >
          Book Service
        </a>
      </div>
    </div>
  );
}
