import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getJournalPost, journalPosts } from "@/data/journal";
import { pageMetadata } from "@/lib/site";
import { breadcrumbJsonLd, jsonLd } from "@/lib/structured-data";
import { absoluteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };
const articles = {
  "the-case-for-a-slower-warm-up": () => import("@/content/journal/the-case-for-a-slower-warm-up.mdx"),
  "what-to-wear-for-changing-weather": () => import("@/content/journal/what-to-wear-for-changing-weather.mdx"),
  "a-kit-built-to-repeat": () => import("@/content/journal/a-kit-built-to-repeat.mdx")
};

export function generateStaticParams() {
  return journalPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) return pageMetadata("Field note not found | england", "This field note is not available. Browse training notes and field guides from england.", "/journal");
  return pageMetadata(`${post.title} | england Journal`, `${post.description} Read more practical training and performance clothing notes from england.`, `/journal/${slug}`);
}

export default async function JournalArticle({ params }: Props) {
  const { slug } = await params;
  const post = getJournalPost(slug);
  const loadArticle = articles[slug as keyof typeof articles];
  if (!post || !loadArticle) notFound();
  const { default: Article } = await loadArticle();
  const articleData = {
    "@context": "https://schema.org", "@type": "Article",
    headline: post.title, description: post.description, datePublished: post.date,
    author: { "@type": "Organization", name: "england" },
    publisher: { "@type": "Organization", name: "england" },
    mainEntityOfPage: absoluteUrl(`/journal/${post.slug}`)
  };
  return <main id="main-content" className="inner-page article-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Journal", path: "/journal" }, { name: post.title, path: `/journal/${post.slug}` }]))} />
    <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(articleData)} />
    <p className="breadcrumbs"><Link href="/">HOME</Link> / <Link href="/journal">JOURNAL</Link> / FIELD NOTE</p>
    <article><p className="eyebrow">{post.category} · {new Date(`${post.date}T12:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p><h1 className="page-title">{post.title.toUpperCase()}</h1><p className="page-intro">{post.description}</p><div className="article-content"><Article /></div></article>
    <Link className="text-link" href="/journal">← BACK TO THE JOURNAL</Link>
  </main>;
}
