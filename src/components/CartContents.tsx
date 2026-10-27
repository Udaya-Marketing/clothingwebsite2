"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { products } from "@/data/products";

type CartLine = { slug: string; size: string; quantity: number };
const CART_EVENT = "england-cart-change";

export function CartContents() {
  const [lines, setLines] = useState<CartLine[]>([]);
  useEffect(() => {
    try { setLines(JSON.parse(localStorage.getItem("england-cart") ?? "[]") as CartLine[]); }
    catch (error) {
      console.error("Could not read the england shopping bag from browser storage.", error);
      setLines([]);
    }
  }, []);
  const remove = (slug: string, size: string) => {
    const updated = lines.filter((line) => line.slug !== slug || line.size !== size);
    setLines(updated);
    localStorage.setItem("england-cart", JSON.stringify(updated));
    window.dispatchEvent(new Event(CART_EVENT));
  };
  const total = lines.reduce((sum, line) => sum + (products.find((product) => product.slug === line.slug)?.price ?? 0) * line.quantity, 0);
  if (!lines.length) return <div className="cart-empty"><p>Your bag is taking a breather.</p><Link className="pill pill-black" href="/shop">CONTINUE SHOPPING <span>↗</span></Link></div>;
  return (
    <div className="cart-list">
      {lines.map((line) => {
        const product = products.find((item) => item.slug === line.slug);
        if (!product) return null;
        return <article className="cart-line" key={`${line.slug}-${line.size}`}><Image src={product.image} alt={product.name} width={90} height={110} /><div><Link href={`/product/${product.slug}`}>{product.name}</Link><p>Size {line.size} · Qty {line.quantity} · ${product.price.toFixed(2)}</p><button className="remove-line" onClick={() => remove(line.slug, line.size)}>Remove</button></div><strong>${(product.price * line.quantity).toFixed(2)}</strong></article>;
      })}
      <p className="cart-total">Subtotal <strong>${total.toFixed(2)} USD</strong></p>
      <p className="detail-note">Shipping and taxes calculated at checkout. Checkout integration can be connected when your payment provider is selected.</p>
      <Link className="pill pill-black" href="/contact">CONTINUE TO CHECKOUT <span>↗</span></Link>
    </div>
  );
}
