import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/data/products";
import { pageMetadata } from "@/lib/site";
import { breadcrumbJsonLd, jsonLd } from "@/lib/structured-data";

type Props = { params: Promise<{ category: string }> };
const findCategory = (slug: string) => categories.find((category) => category.toLowerCase() === slug.toLowerCase());

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.toLowerCase() }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = findCategory(slug);
  if (!category) return pageMetadata("Collection not found | england", "This collection is not available. Explore all technical clothing and performance apparel from england.", "/shop");
  const additional = category === "Tops" ? " Designed to move all day." : category === "Bottoms" ? " Designed to move." : category === "Outerwear" ? " All day." : "";
  return pageMetadata(`${category} | england performance clothing`, `Shop england ${category.toLowerCase()} for training and everyday wear. Technical fabrics, considered fits and durable performance apparel designed to move.${additional}`, `/shop/${slug}`);
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = findCategory(slug);
  if (!category) notFound();
  const categoryProducts = products.filter((product) => product.category === category);
  const list = {
    "@context": "https://schema.org", "@type": "ItemList",
    itemListElement: categoryProducts.map((product, index) => ({ "@type": "ListItem", position: index + 1, url: `/product/${product.slug}`, name: product.name }))
  };
  return (
    <main id="main-content" className="inner-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Shop", path: "/shop" }, { name: category, path: `/shop/${slug}` }]))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(list)} />
      <p className="breadcrumbs"><Link href="/">HOME</Link> / <Link href="/shop">SHOP</Link> / {category.toUpperCase()}</p>
      <p className="eyebrow">ENGLAND / PERFORMANCE APPAREL</p><h1 className="page-title">{category.toUpperCase()}<br />FOR EVERY DAY.</h1>
      <p className="page-intro">Thoughtfully engineered {category.toLowerCase()} made to move with you, from focused training to the hours that follow.</p>
      <p className="eyebrow">{categoryProducts.length} PIECES</p>
      <div className="shop-grid">{categoryProducts.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
    </main>
  );
}
