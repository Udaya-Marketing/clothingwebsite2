"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { products } from "@/data/products";

const fresh = products.slice(0, 4);

export function FreshFits() {
  const section = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const ghostX = useTransform(scrollYProgress, [0, 1], ["9%", "-35%"]);
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (!reduce) setIndex(Math.min(fresh.length - 1, Math.floor(progress * fresh.length)));
  });
  if (reduce) {
    return <section className="fresh-scroller reduced-fresh" aria-labelledby="fresh-title">
      <p className="eyebrow">THE NEW SEASON, IN MOTION</p><h2 id="fresh-title" className="section-title">FRESH FITS FOR<br />YOUR NEXT WORKOUT.</h2>
      <div className="reduced-fresh-list">{fresh.map((product) => <Link href={`/product/${product.slug}`} className="reduced-fresh-card" key={product.slug}><Image src={product.image} alt={`${product.name} from the Fall Winter 2026 collection`} width={650} height={820} /><span>{product.name}<small>{product.category} · ${product.price.toFixed(2)}</small></span></Link>)}</div>
    </section>;
  }
  const product = fresh[index];
  return <section ref={section} className="fresh-scroller fresh-pinned" aria-labelledby="fresh-title">
    <div className="fresh-sticky">
      <p className="eyebrow">THE NEW SEASON, IN MOTION</p>
      <motion.h2 id="fresh-title" className="fresh-ghost" style={{ x: ghostX }}>FRESH FITS FOR YOUR NEXT WORKOUT</motion.h2>
      <div className="fresh-content">
        <AnimatePresence mode="wait">
          <motion.div key={product.slug} className="fresh-image" initial={{ opacity: 0, y: 22, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: .65, ease: [.22, 1, .36, 1] }}>
            <Image src={product.image} alt={`${product.name} in the Fall Winter 2026 collection`} width={780} height={960} sizes="(max-width: 700px) 82vw, 36vw" />
          </motion.div>
        </AnimatePresence>
        <span className="fresh-label fresh-top">{product.category.toUpperCase()} / 0{index + 1}</span>
        <span className="fresh-label fresh-date">DROP 01 — {product.releaseDate.toUpperCase()}</span>
        <div className="fresh-card-meta"><span>FALL / WINTER 2026<br /><strong>DESIGNED TO REPEAT.</strong></span><Link href={`/product/${product.slug}`}>{product.name.toUpperCase()} ↗</Link></div>
      </div>
      <div className="fresh-progress" aria-label={`Product ${index + 1} of ${fresh.length}`}>{fresh.map((item, itemIndex) => <span key={item.slug} className={index === itemIndex ? "active" : ""} />)}</div>
      <Link href="/shop" className="text-link">DISCOVER THE NEW SEASON <span>↗</span></Link>
    </div>
  </section>;
}
