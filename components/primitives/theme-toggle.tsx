"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/primitives/button";
import { useTheme } from "@/lib/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="h-10 w-10 rounded-full p-0"
    >
      {theme === "dark" ? <Sun className="text-yellow-400" size={18} /> : <Moon className="text-slate-700" size={18} />}
    </Button>
  );
}
