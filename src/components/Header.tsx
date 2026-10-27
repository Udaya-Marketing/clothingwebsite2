"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CartControl } from "@/components/CartControl";

const links = [
  { label: "SHOP", href: "/shop" },
  { label: "MEN", href: "/shop/tops" },
  { label: "WOMEN", href: "/shop/bottoms" },
  { label: "TRENDING", href: "/shop?sort=popular" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const menuToggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const update = () => setCompact(window.scrollY > 24);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && menuToggle.current?.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        menuToggle.current?.focus();
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);
  return (
    <header className={`site-header ${compact ? "is-compact" : ""}`}>
      <div className="nav-row">
        <button ref={menuToggle} className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
          <span /> <span />
        </button>
        <nav className="nav-links nav-left" aria-label="Main navigation">
          <details className="mega-menu">
            <summary>SHOP</summary>
            <div className="mega-panel"><p className="eyebrow">SHOP THE COLLECTION</p>{["Tops", "Bottoms", "Outerwear", "Accessories"].map((category) => <Link key={category} href={`/shop/${category.toLowerCase()}`}>{category} <span>↗</span></Link>)}<Link className="mega-all-products pill pill-black" href="/shop">VIEW ALL PRODUCTS <span>↗</span></Link></div>
          </details>
          {links.slice(1).map((link) => <Link key={link.label} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
        </nav>
        <Link className="wordmark" href="/" aria-label="england home">england<span>®</span></Link>
        <nav className="nav-links nav-right" aria-label="Additional navigation">
          <Link href="/shop/outerwear">SEASONAL</Link>
          <Link href="/shop/accessories">ACCESSORIES</Link>
          <Link className="pill pill-black sign-in" href="/contact">SIGN IN / UP</Link>
          <CartControl />
        </nav>
        <nav className={`mobile-menu ${open ? "is-open" : ""}`} aria-label="Mobile navigation" aria-hidden={!open}>
          {[...links, { label: "SEASONAL", href: "/shop/outerwear" }, { label: "ACCESSORIES", href: "/shop/accessories" }, { label: "ABOUT", href: "/about" }, { label: "JOURNAL", href: "/journal" }].map((link) => <Link key={link.label} href={link.href} tabIndex={open ? 0 : -1} onClick={() => { setOpen(false); menuToggle.current?.focus(); }}>{link.label} ↗</Link>)}
          <Link className="pill pill-black" href="/contact" tabIndex={open ? 0 : -1} onClick={() => { setOpen(false); menuToggle.current?.focus(); }}>SIGN IN / UP</Link>
        </nav>
      </div>
    </header>
  );
}
