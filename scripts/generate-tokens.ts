import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { theme } from "../config/theme.config";

const outputPath = resolve(process.cwd(), "styles/tokens.css");

const cssLines = [
  "/* styles/tokens.css — GENERATED, do not edit */",
  ":root {",
  `  --color-primary: ${theme.colors.primary};`,
  `  --color-primary-foreground: ${theme.colors.primaryForeground};`,
  `  --color-accent: ${theme.colors.accent};`,
  `  --color-accent-foreground: ${theme.colors.accentForeground};`,
  `  --color-background: ${theme.colors.background};`,
  `  --color-foreground: ${theme.colors.foreground};`,
  `  --color-muted: ${theme.colors.muted};`,
  `  --color-muted-foreground: ${theme.colors.mutedForeground};`,
  `  --color-border: ${theme.colors.border};`,
  `  --color-success: ${theme.colors.success};`,
  `  --color-warning: ${theme.colors.warning};`,
  `  --color-danger: ${theme.colors.danger};`,
  `  --font-heading: ${theme.fonts.heading};`,
  `  --font-body: ${theme.fonts.body};`,
  `  --radius-sm: ${theme.radius.sm};`,
  `  --radius-md: ${theme.radius.md};`,
  `  --radius-lg: ${theme.radius.lg};`,
  `  --spacing-scale: ${theme.spacing};`,
  `  --shadow-scale: ${theme.shadows};`,
  "}",
].join("\n");

writeFileSync(outputPath, cssLines + "\n", "utf8");
console.log(`Generated tokens at ${outputPath}`);
