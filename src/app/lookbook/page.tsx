import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/site";
import { breadcrumbJsonLd, jsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata("Lookbook | england Fall Winter 2026", "Explore the england Fall Winter 2026 performance clothing lookbook: quiet studio portraits, considered layers and movement made visible. Explore the collection.", "/lookbook");

const images = [
  ["photo-1515886657613-9f3515b0c78f", "Model wearing a technical outer layer in a muted editorial portrait"],
  ["photo-1539109136881-3be0616acf4b", "Movement-inspired england studio portrait in soft natural light"],
  ["photo-1544923246-77307dd654cb", "Athlete wearing a weather-resistant outer layer"],
  ["photo-1517836357463-d25dfeac3438", "Athlete preparing for a focused workout outdoors"]
];

export default function LookbookPage() {
  return <main id="main-content" className="inner-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Lookbook", path: "/lookbook" }]))} />
    <p className="breadcrumbs"><Link href="/">HOME</Link> / LOOKBOOK</p><p className="eyebrow">FALL / WINTER 2026</p><h1 className="page-title">THE SPACE<br />TO MOVE.</h1><p className="page-intro">A study in useful layers, quiet confidence and finding your own pace.</p>
    <div className="lookbook-grid">{images.map(([id, alt], index) => <Image key={id} src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1100&q=85`} alt={alt} width={1000} height={1250} priority={index === 0} />)}</div>
    <p className="eyebrow">DISCOVER THE COLLECTION</p><Link className="pill pill-black" href="/shop">SHOP FALL / WINTER 2026 <span>↗</span></Link>
  </main>;
}
