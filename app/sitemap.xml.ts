import { siteConfig } from "@/config/site.config";

const pages = ["/", "/services", "/service-area", "/about", "/contact"];

export default function GET() {
  const host = siteConfig.urls.canonical.replace(/\/$/, "");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages
    .map(
      (page) =>
        `  <url>\n    <loc>${host}${page}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`,
    )
    .join("\n")}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "content-type": "application/xml",
    },
  });
}
