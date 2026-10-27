import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title")?.slice(0, 100) ?? "Technical clothing, made to move";
  const description = url.searchParams.get("description")?.slice(0, 160) ?? site.tagline;
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px", background: "linear-gradient(145deg,#cbd8d9,#eef0f1)", color: "#17191b" }}>
      <div style={{ display: "flex", fontSize: 30, letterSpacing: "-2px" }}>{site.name}®</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 18, letterSpacing: "4px", marginBottom: 18 }}>{site.tagline}</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 74, fontWeight: 600, lineHeight: 1 }}>
          <span>{title}</span>
        </div>
        <div style={{ display: "flex", fontSize: 21, marginTop: 22 }}>{description}</div>
      </div>
    </div>,
    { width: 1200, height: 630 }
  );
}
