import type { Metadata } from "next";
import Link from "next/link";
import { CartContents } from "@/components/CartContents";
import { pageMetadata } from "@/lib/site";
import { breadcrumbJsonLd, jsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  ...pageMetadata("Your bag | england", "Review your england shopping bag, check selected sizes and quantities, and see the subtotal for your technical clothing before continuing to checkout.", "/cart"),
  robots: { index: false, follow: false }
};

export default function CartPage() {
  return <main id="main-content" className="inner-page"><script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Bag", path: "/cart" }]))} /><p className="breadcrumbs"><Link href="/">HOME</Link> / BAG</p><p className="eyebrow">READY WHEN YOU ARE</p><h1 className="page-title">YOUR BAG.</h1><CartContents /></main>;
}
