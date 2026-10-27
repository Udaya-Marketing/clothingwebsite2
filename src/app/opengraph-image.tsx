import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px", background: "linear-gradient(145deg,#cbd8d9,#eef0f1)", color: "#17191b", fontFamily: "Arial" }}>
      <div style={{ fontSize: 30, letterSpacing: "-2px" }}>england®</div>
      <div style={{ display: "flex", flexDirection: "column" }}><div style={{ fontSize: 18, letterSpacing: "4px", marginBottom: 18 }}>TECHNICAL CLOTHING / EST. MMXXIV</div><div style={{ display: "flex", flexDirection: "column", fontSize: 92, fontWeight: 600, lineHeight: .95 }}><span>BUILT FOR</span><span>THE LONG RUN.</span></div></div>
    </div>,
    size
  );
}
