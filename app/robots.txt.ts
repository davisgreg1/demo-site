import { siteConfig } from "@/config/site.config";

export default function GET() {
  const body = `User-agent: *\nAllow: /\nSitemap: ${siteConfig.urls.canonical.replace(/\/$/, "")}/sitemap.xml\n`;
  return new Response(body, {
    headers: {
      "content-type": "text/plain",
    },
  });
}
