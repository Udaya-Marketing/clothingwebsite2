import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { WishlistButton } from "@/components/WishlistButton";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <div className="product-card-image">
        <Link href={`/product/${product.slug}`} className="product-card-link" aria-label={`View ${product.name}`}>
          <Image src={product.image} alt={`${product.name} in a minimal studio setting`} width={900} height={1200} sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 23vw" />
          <span className="winter-badge">F / W 26</span>
          <span className="product-info-pill"><span>{product.name}<small>${product.price.toFixed(2)}</small></span><span aria-hidden="true">↗</span></span>
        </Link>
        <WishlistButton slug={product.slug} name={product.name} />
      </div>
      <p className="product-category">{product.category}</p>
    </article>
  );
}
