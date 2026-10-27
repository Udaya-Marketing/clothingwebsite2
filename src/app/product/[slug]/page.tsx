import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductActions } from "@/components/ProductActions";
import { ProductCard } from "@/components/ProductCard";
import { getProduct, products } from "@/data/products";
import { pageMetadata } from "@/lib/site";
import { breadcrumbJsonLd, jsonLd, productJsonLd } from "@/lib/structured-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return pageMetadata("Product not found | england", "This product is no longer available. Browse the latest england performance clothing collection.", "/shop");
  const title = `${product.name} | england`;
  return {
    ...pageMetadata(title, `${product.description} Shop ${product.name} from england, technical clothing built for training and everyday movement.`, `/product/${slug}`),
    openGraph: { ...pageMetadata(title, product.description, `/product/${slug}`).openGraph, images: [{ url: `/product/${slug}/opengraph-image`, width: 1200, height: 630, alt: product.name }] },
    twitter: { card: "summary_large_image", title, description: product.description, images: [`/product/${slug}/opengraph-image`] }
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 3);
  return (
    <main id="main-content" className="inner-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Shop", path: "/shop" }, { name: product.category, path: `/shop/${product.category.toLowerCase()}` }, { name: product.name, path: `/product/${slug}` }]))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(productJsonLd(product))} />
      <p className="breadcrumbs"><Link href="/">HOME</Link> / <Link href="/shop">SHOP</Link> / {product.name.toUpperCase()}</p>
      <div className="product-detail">
        <div className="gallery-column">
          <div className="gallery-main"><Image src={product.image} alt={`${product.name}, front view`} width={1100} height={1380} priority sizes="(max-width: 700px) 90vw, 55vw" /></div>
          <figure className="gallery-secondary"><Image src={product.secondaryImage} alt={`${product.name}, alternate product view`} width={900} height={1100} sizes="(max-width: 700px) 90vw, 55vw" /><figcaption>ALTERNATE VIEW / {product.sku}</figcaption></figure>
        </div>
        <div className="detail-info">
          <p className="eyebrow">{product.category.toUpperCase()} / FALL WINTER 2026</p>
          <h1>{product.name}</h1><p className="price">${product.price.toFixed(2)} USD</p>
          <p className="review-summary">★ {product.rating} <span>({product.reviewCount} reviews)</span></p>
          <p className="detail-description">{product.description}</p>
          <ProductActions product={product} />
          <p className="detail-note">SKU {product.sku} · Available now · Designed for repeat wear.</p>
        </div>
        <section className="detail-below" aria-labelledby="reviews-title">
          <p className="eyebrow">FIELD TESTED</p><h2 id="reviews-title">Reviews from the community</h2>
          <p className="review-summary"><strong>{product.rating}/5</strong> average from {product.reviewCount} verified reviews</p>
        </section>
      </div>
      {related.length > 0 && <section className="related-products"><p className="eyebrow">MORE TO MOVE IN</p><h2 className="page-title">YOU MAY ALSO LIKE.</h2><div className="shop-grid">{related.map((item) => <ProductCard key={item.slug} product={item} />)}</div></section>}
    </main>
  );
}
