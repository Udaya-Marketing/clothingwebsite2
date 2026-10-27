import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({ extension: /\.mdx?$/ });
const nextConfig: NextConfig = {
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" }
    ]
  },
  trailingSlash: false,
  async redirects() {
    return [
      { source: "/collections/:category", destination: "/shop/:category", permanent: true }
    ];
  }
};

export default withMDX(nextConfig);
