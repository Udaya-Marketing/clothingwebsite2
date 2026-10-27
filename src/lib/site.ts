export const site = {
  name: "england",
  tagline: "BUILT FOR THE LONG RUN",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://england.example",
  description:
    "Technical clothing for movement, recovery and everything in between. Discover considered performance layers from england. Explore the latest collection.",
  currency: "USD"
};

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

export function pageMetadata(title: string, description: string, path: string) {
  const canonical = absoluteUrl(path);
  const seoDescription = description.length > 160
    ? `${description.slice(0, 157).trimEnd()}...`
    : description;
  const image = absoluteUrl(`/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(seoDescription)}`);
  return {
    title,
    description: seoDescription,
    alternates: { canonical, languages: { "en-US": canonical, "x-default": canonical } },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      type: "website" as const,
      images: [{ url: image, width: 1200, height: 630, alt: `${site.name} — ${title}` }]
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [image]
    }
  };
}
