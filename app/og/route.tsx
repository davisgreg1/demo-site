import { ImageResponse } from "@vercel/og";
import { siteConfig } from "@/config/site.config";

export const runtime = "edge";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || siteConfig.business.name;
  const subtitle = siteConfig.business.tagline;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "#0A4D8C",
          color: "#ffffff",
          padding: "64px",
          boxSizing: "border-box",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
          <div style={{ maxWidth: 760 }}>
            <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FF6B35" }}>
              Local plumbing
            </div>
            <div style={{ fontSize: 64, fontWeight: 800, marginTop: 24, lineHeight: 1.05 }}>{title}</div>
            <div style={{ fontSize: 32, marginTop: 24, color: "#D9E5F8" }}>{subtitle}</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 48 }}>
            <span style={{ fontSize: 28, fontWeight: 600, color: "#ffffff" }}>Pioneer Plumbing</span>
            <span style={{ fontSize: 24, color: "#ffffff" }}>{siteConfig.business.phone}</span>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
