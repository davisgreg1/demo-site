import { HeaderClassic } from "./header-classic";
import { HeaderMinimal } from "./header-minimal";
import type { HeaderContent, HeaderVariant } from "./types";

const variants = {
  classic: HeaderClassic,
  minimal: HeaderMinimal,
} as const;

interface HeaderProps {
  variant: HeaderVariant;
  content: HeaderContent;
}

export function Header({ variant, content }: HeaderProps) {
  const Component = variants[variant];
  return <Component content={content} />;
}
