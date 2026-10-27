import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SiteEffects } from "@/components/SiteEffects";
import { pageMetadata } from "@/lib/site";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-brand",
  display: "swap",
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  ...pageMetadata("england — Technical clothing, made to move", "Technical clothing for movement, recovery and everything in between. Discover considered performance layers from england. Explore the latest collection.", "/"),
  applicationName: "england",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://england.example"),
  category: "fashion",
  other: { "color-scheme": "light" }
};

export const viewport: Viewport = {
  themeColor: "#CBD8D9",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={schibsted.variable}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteEffects />
        <div className="site-frame">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
