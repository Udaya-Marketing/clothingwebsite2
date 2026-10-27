import { ImageResponse } from "next/og";
import { getProduct } from "@/data/products";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function ProductOpenGraph({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px", background: "#cbd8d9", color: "#17191b", fontFamily: "Arial" }}>
      <div style={{ fontSize: 28, letterSpacing: "-2px" }}>england®</div>
      <div style={{ display: "flex", flexDirection: "column" }}><div style={{ fontSize: 16, letterSpacing: "3px", marginBottom: 18 }}>BUILT FOR THE LONG RUN</div><div style={{ fontSize: 72, fontWeight: 600, lineHeight: 1 }}>{product?.name ?? "Performance clothing"}</div><div style={{ fontSize: 25, marginTop: 22 }}>{product ? `$${product.price.toFixed(2)} USD` : "Technical clothing, made to move"}</div></div>
    </div>,
    size
  );
}
