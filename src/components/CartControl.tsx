"use client";

import { useEffect, useState } from "react";

const CART_EVENT = "england-cart-change";

export function readCartCount() {
  try {
    const cart = JSON.parse(localStorage.getItem("england-cart") ?? "[]") as { quantity: number }[];
    return cart.reduce((total, item) => total + item.quantity, 0);
  } catch (error) {
    console.error("Could not read the england shopping bag from browser storage.", error);
    return 0;
  }
}

export function addToCart(slug: string, size: string) {
  const cart = JSON.parse(localStorage.getItem("england-cart") ?? "[]") as { slug: string; size: string; quantity: number }[];
  const existing = cart.find((item) => item.slug === slug && item.size === size);
  if (existing) existing.quantity += 1;
  else cart.push({ slug, size, quantity: 1 });
  localStorage.setItem("england-cart", JSON.stringify(cart));
  window.dispatchEvent(new Event(CART_EVENT));
}

export function CartControl() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const update = () => setCount(readCartCount());
    update();
    window.addEventListener(CART_EVENT, update);
    window.addEventListener("storage", update);
    return () => {
      window.removeEventListener(CART_EVENT, update);
      window.removeEventListener("storage", update);
    };
  }, []);
  return (
    <a className="cart-button" href="/cart" aria-label={`Shopping bag, ${count} items`}>
      <span aria-hidden="true">↗</span><span className="cart-count">{count}</span>
    </a>
  );
}
