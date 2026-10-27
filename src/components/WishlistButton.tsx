"use client";

import { useState } from "react";

export function WishlistButton({ slug, name }: { slug: string; name: string }) {
  const [saved, setSaved] = useState(false);
  return <button data-product={slug} className={`wishlist ${saved ? "is-saved" : ""}`} type="button" aria-label={`${saved ? "Remove" : "Add"} ${name} ${saved ? "from" : "to"} wishlist`} aria-pressed={saved} onClick={(event) => { event.preventDefault(); setSaved(!saved); }}>
    {saved ? "♥" : "♡"}
  </button>;
}
