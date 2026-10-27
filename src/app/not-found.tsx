import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata("Page not found | england", "The page you are looking for may have moved. Find your way back to england technical clothing, performance apparel and field notes. Explore the shop instead.", "/404");

export default function NotFound() {
  return <main id="main-content" className="inner-page not-found"><p className="eyebrow">404 / WRONG TURN</p><h1 className="page-title">NOT HERE.<br />KEEP MOVING.</h1><p className="page-intro">The page you are looking for may have moved. Let’s find another route.</p><Link className="pill pill-black" href="/">BACK TO HOME <span>↗</span></Link></main>;
}
