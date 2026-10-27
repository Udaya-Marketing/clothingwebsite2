import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/data/products";
import { pageMetadata } from "@/lib/site";
import { jsonLd, breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata("Shop performance clothing | england", "Shop technical training clothing, elevated everyday layers and performance apparel designed for movement. Discover the latest england collection.", "/shop");

type SearchParams = Promise<{ q?: string; sort?: string; page?: string }>;

export default async function ShopPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const query = params.q?.toLowerCase().trim() ?? "";
  const filtered = products.filter((product) => `${product.name} ${product.category}`.toLowerCase().includes(query));
  const sorted = [...filtered];
  if (params.sort === "price-low") sorted.sort((a, b) => a.price - b.price);
  if (params.sort === "price-high") sorted.sort((a, b) => b.price - a.price);
  if (params.sort === "popular") sorted.sort((a, b) => b.reviewCount - a.reviewCount);
  const page = Math.max(1, Number(params.page) || 1);
  const pageSize = 8;
  const visible = sorted.slice((page - 1) * pageSize, page * pageSize);
  const pages = Math.ceil(sorted.length / pageSize);
  const itemList = {
    "@context": "https://schema.org", "@type": "ItemList",
    itemListElement: sorted.map((product, index) => ({ "@type": "ListItem", position: index + 1, url: `/product/${product.slug}`, name: product.name }))
  };
  return (
    <main id="main-content" className="inner-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Shop", path: "/shop" }]))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(itemList)} />
      <p className="breadcrumbs"><Link href="/">HOME</Link> / SHOP</p>
      <p className="eyebrow">ENGINEERED FOR THE EVERYDAY</p>
      <h1 className="page-title">SHOP<br />THE COLLECTION.</h1>
      <p className="page-intro">Technical training clothes and considered everyday layers, built to move with you through every season.</p>
      <div className="shop-toolbar">
        <nav className="filter-links" aria-label="Shop categories"><Link href="/shop">ALL ({products.length})</Link>{categories.map((category) => <Link key={category} href={`/shop/${category.toLowerCase()}`}>{category.toUpperCase()}</Link>)}</nav>
        <form action="/shop" className="shop-search">
          <label className="sr-only" htmlFor="shop-search">Search products</label>
          <input id="shop-search" name="q" placeholder="Search the collection" defaultValue={query} />
          <label className="sr-only" htmlFor="shop-sort">Sort products</label>
          <select id="shop-sort" name="sort" defaultValue={params.sort ?? ""} className="shop-select">
            <option value="">Featured</option><option value="popular">Most popular</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option>
          </select>
          <button type="submit" className="shop-apply">APPLY</button>
        </form>
      </div>
      {visible.length ? <div className="shop-grid">{visible.map((product) => <ProductCard key={product.slug} product={product} />)}</div> : <p>No products matched “{query}”. Try another search.</p>}
      {pages > 1 && <nav className="pagination" aria-label="Pagination">{Array.from({ length: pages }, (_, index) => <Link aria-current={page === index + 1 ? "page" : undefined} key={index} href={`/shop?page=${index + 1}${query ? `&q=${encodeURIComponent(query)}` : ""}${params.sort ? `&sort=${params.sort}` : ""}`}>{index + 1}</Link>)}</nav>}
    </main>
  );
}
