"use client";

import { useState } from "react";
import { addToCart } from "@/components/CartControl";
import type { Product } from "@/data/products";

export function ProductActions({ product }: { product: Product }) {
  const [size, setSize] = useState(product.sizes[0]);
  const [added, setAdded] = useState(false);
  return (
    <>
      <p className="eyebrow">SELECT SIZE</p>
      <div className="size-list" role="group" aria-label="Select a size">
        {product.sizes.map((option) => <button key={option} type="button" className={`size-option ${size === option ? "selected" : ""}`} aria-pressed={size === option} onClick={() => setSize(option)}>{option}</button>)}
      </div>
      <button className="pill pill-black add-button" type="button" onClick={() => { addToCart(product.slug, size); setAdded(true); }}>
        {added ? "ADDED TO BAG ✓" : "ADD TO BAG"} <span>↗</span>
      </button>
      <p className="detail-note">Complimentary US shipping over $150 · Easy returns within 30 days.</p>
    </>
  );
}
