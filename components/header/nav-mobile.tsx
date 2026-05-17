"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { NavItem } from "./types";

interface NavMobileProps {
  items: NavItem[];
  phone: string;
  ctaHref: string;
}

export function NavMobile({ items, phone, ctaHref }: NavMobileProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-1 items-center justify-end lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition hover:bg-muted"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      {open ? (
        <div className="absolute inset-x-4 top-20 z-40 rounded-3xl bg-white p-6 shadow-hard">
          <nav className="flex flex-col gap-4">
            {items.map((item) => (
              <a key={item.href} href={item.href} className="nav-link text-base font-medium text-foreground">
                {item.label}
              </a>
            ))}
            <a href={`tel:${phone}`} className="text-base font-semibold text-foreground">
              {phone}
            </a>
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              Book Service
            </a>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
