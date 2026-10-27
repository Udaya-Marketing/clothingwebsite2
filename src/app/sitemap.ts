import type { MetadataRoute } from "next";
import { categories, products } from "@/data/products";
import { journalPosts } from "@/data/journal";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    ["", 1], ["/shop", .9], ["/about", .6], ["/lookbook", .7], ["/journal", .7], ["/contact", .4]
  ] as const;
  return [
    ...staticRoutes.map(([path, priority]) => ({ url: absoluteUrl(path), lastModified: now, changeFrequency: "weekly" as const, priority })),
    ...categories.map((category) => ({ url: absoluteUrl(`/shop/${category.toLowerCase()}`), lastModified: now, changeFrequency: "weekly" as const, priority: .8 })),
    ...products.map((product) => ({ url: absoluteUrl(`/product/${product.slug}`), lastModified: now, changeFrequency: "weekly" as const, priority: .8 })),
    ...journalPosts.map((post) => ({ url: absoluteUrl(`/journal/${post.slug}`), lastModified: new Date(`${post.date}T12:00:00Z`), changeFrequency: "monthly" as const, priority: .5 }))
  ];
}
