import type { Metadata } from "next";
import Link from "next/link";
import { journalPosts } from "@/data/journal";
import { pageMetadata } from "@/lib/site";
import { breadcrumbJsonLd, jsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata("The Journal | england training notes & field guides", "Read england field notes on training, recovery, technical clothing and the everyday rituals that keep you moving. Practical ideas, made to be repeated.", "/journal");

export default function JournalPage() {
  return <main id="main-content" className="inner-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Journal", path: "/journal" }]))} />
    <p className="breadcrumbs"><Link href="/">HOME</Link> / JOURNAL</p><p className="eyebrow">NOTES FROM THE FIELD</p><h1 className="page-title">THOUGHTS<br />IN MOTION.</h1><p className="page-intro">Practical ideas on training, recovery and finding a rhythm you can return to.</p>
    <div className="journal-list">{journalPosts.map((post) => <article className="article-card" key={post.slug}><div><p className="eyebrow">{post.category}</p><h2><Link href={`/journal/${post.slug}`}>{post.title}</Link></h2><p>{post.description}</p><Link className="text-link" href={`/journal/${post.slug}`}>READ THE FIELD NOTE <span>↗</span></Link></div><time dateTime={post.date}>{new Date(`${post.date}T12:00:00`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</time></article>)}</div>
  </main>;
}
