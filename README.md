# england — performance clothing

An editorial storefront starter for **england**, built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion and Lenis. Product and journal content is local and typed so the data layer can later be replaced with Shopify, Sanity or another commerce CMS.

## Run locally

```bash
npm install
Copy-Item .env.example .env.local
npm run dev
```

Set `NEXT_PUBLIC_SITE_URL` in `.env.local` to the canonical production origin before deploying. It is used by canonical metadata, structured data, robots and the sitemap.

Useful checks:

```bash
npm run typecheck
npm run build
```

Development and production builds use separate generated output directories (`.next-dev/` and `.next/`) so running `npm run build` does not overwrite files used by a concurrent `npm run dev` server.

## Typography

The site uses Schibsted Grotesk through `next/font/google` (weights 400, 500 and 600 only), with `font-display: swap`. To use a licensed local Neue Montreal, Satoshi or General Sans font, place the licensed WOFF2 files in `src/app/fonts/`, replace the Google font import in `src/app/layout.tsx` with `next/font/local`, and define only the weights the design uses. Do not commit font files unless the license permits redistribution.

## Images and campaign assets

Current product and editorial photos are Unsplash-hosted image placeholders transformed to responsive WebP/AVIF by `next/image`. Replace them with owned/licensed campaign imagery before launch. The image URLs and product-specific descriptive alt text live in `src/data/products.ts`, `src/app/page.tsx`, `src/app/about/page.tsx`, and `src/app/lookbook/page.tsx`.

| Placement | Suggested source image | Ratio | Shoot / generation direction |
|---|---|---:|---|
| Home hero model | `src/app/page.tsx` hero `Image` | 4:5 portrait, transparent cutout preferred | One athlete, technical neutral layers, soft cool-grey studio, feet cropped at the lower edge, relaxed confident pose, clean alpha background, no logos or text. |
| Workout triptych | `src/app/page.tsx` workout figures | 4:5 portrait | Three distinct documentary training moments: preparing, running, recovering; natural light, restrained color, tactile technical fabrics. |
| Top-pick cards | `src/app/page.tsx` feature cards | 4:3 landscape | Close editorial apparel portraits with dark lower frame for white headline overlay, sculpted grey studio light, charcoal wardrobe. |
| Fresh Fits scroll | Product images from `src/data/products.ts` | 4:5 portrait | Full-length or three-quarter model in one hero product, generous negative space, muted studio and soft shadows. |
| Product grid/details | `src/data/products.ts` image + secondaryImage | 3:4 portrait | Consistent front/alternate studio views, same model and crop per SKU, neutral backdrop, garment construction visible. |
| About / lookbook | `src/app/about/page.tsx`, `src/app/lookbook/page.tsx` | 4:5 portrait | Quiet studio, training environment details, real movement and natural skin/fabric texture; avoid text and artificial effects. |
| Video card/lightbox | `src/components/MediaLightbox.tsx` and `public/media/campaign-film.mp4` | 16:9 video | Short, low-key campaign film: warm-up, movement, recovery; ambient sound, no baked-in copy, export a compressed H.264 MP4 and poster still. |

Use the same production brief for each still: “High-fashion performance apparel campaign for england, cool pale blue-grey and off-white palette, authentic human movement, subtle film grain, directional softbox light, understated technical clothing, editorial composition, no logos, no text, realistic skin and fabric detail.” Product-specific frames should identify the exact silhouette and colorway.

### Product photo prompts

For each product, capture a matching front and alternate view using the same model, neutral studio, lighting, crop and colorway. Add the precise garment construction and color before producing final assets.

| Product | Product-specific shoot / generation prompt |
|---|---|
| Form Technical Hoodie | Model in a structured midweight technical hoodie; show the hood shape, articulated sleeve and brushed fabric texture; relaxed warm-up stance. |
| Tempo Training Short | Runner in lightweight stretch-woven training shorts; show the secure waistband, liner length and usable pocket; mid-stride or ready-to-run pose. |
| Everyday Merino Tee | Model in a merino-blend short-sleeve tee; show the natural drape, collar and soft jersey surface; calm standing portrait. |
| Utility Track Jacket | Model in a clean technical track jacket; show quiet hardware, layered fit and weather-resistant surface; three-quarter studio pose. |
| Studio Rib Tank | Model in a close-fitting rib-knit training tank; show the rib texture, neckline and comfortable stretch; strength-training-ready posture. |
| All Day Jogger | Model in tapered stretch joggers; show the drawcord waist, deep pockets and ankle finish; natural walking stance. |
| Pace Running Vest | Runner in a featherweight wind vest; show the close fit and clean arm openings; early-morning movement frame. |
| Recovery Crew | Model in a relaxed brushed crewneck; show the soft interior, ribbed cuff and room through the body; seated post-training moment. |
| Stride Compression Tight | Runner in supportive four-way-stretch tights; show the smooth waistband, flat seams and low-profile pocket; full-length athletic stance. |
| Weatherproof Anorak | Model in a packable weatherproof anorak; show the oversized technical silhouette, water-resistant surface and hood; wind-swept but controlled pose. |
| Everyday Cap | Close portrait wearing a soft-structured six-panel cap; show crown shape, tonal embroidery and adjustable back strap; neutral studio light. |
| Merino Run Sock | Product-only close-up of a merino-blend crew sock; show the cushioned sole, knit texture and breathable zones; clean seamless grey background. |

Add the final campaign video at `public/media/campaign-film.mp4`. The film viewer, product cart and newsletter/contact forms are front-end integrations: connect the video file, chosen payment provider, mailing-list service, and customer-support inbox before production orders or subscriptions are accepted. Product imagery and prices in this starter are sample content, not inventory or fulfillment data.

## Project tree

```text
.
├── mdx-components.tsx
├── next.config.ts
├── public/
│   └── icon.svg
├── src/
│   ├── app/
│   │   ├── about/page.tsx
│   │   ├── cart/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── journal/
│   │   │   ├── [slug]/page.tsx
│   │   │   └── page.tsx
│   │   ├── lookbook/page.tsx
│   │   ├── og/route.tsx
│   │   ├── product/[slug]/
│   │   │   ├── opengraph-image.tsx
│   │   │   └── page.tsx
│   │   ├── shop/
│   │   │   ├── [category]/page.tsx
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── opengraph-image.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── CartContents.tsx
│   │   ├── CartControl.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   ├── FreshFits.tsx
│   │   ├── Header.tsx
│   │   ├── HeroHeadline.tsx
│   │   ├── MediaLightbox.tsx
│   │   ├── NewsletterForm.tsx
│   │   ├── ProductActions.tsx
│   │   ├── ProductCard.tsx
│   │   ├── Reveal.tsx
│   │   ├── SiteEffects.tsx
│   │   ├── WishlistButton.tsx
│   │   └── WorkoutShowcase.tsx
│   ├── content/journal/
│   │   ├── a-kit-built-to-repeat.mdx
│   │   ├── the-case-for-a-slower-warm-up.mdx
│   │   └── what-to-wear-for-changing-weather.mdx
│   ├── data/
│   │   ├── journal.ts
│   │   └── products.ts
│   └── lib/
│       ├── site.ts
│       └── structured-data.ts
├── .env.example
├── .eslintrc.json
├── .gitignore
├── next-env.d.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── README.md
└── SEO.md
```

## Deploy to Vercel

1. Push the project to your Git provider and import it in Vercel.
2. Set `NEXT_PUBLIC_SITE_URL` to the production HTTPS domain in Project Settings → Environment Variables.
3. Configure the domain and DNS, and verify the canonical origin.
4. Add the licensed campaign assets and connect production integrations before opening checkout.
5. Deploy. Vercel detects Next.js automatically; use `npm run build` locally to catch issues first.

## Launch checklist

- [x] App Router, TypeScript, Tailwind design tokens and Vercel-compatible configuration.
- [x] Responsive editorial homepage, collection, about, lookbook, journal, contact, cart and not-found routes.
- [x] 12 typed sample products, category routes, search/sort controls, pagination, product details and local bag state.
- [x] MDX journal articles, route metadata, canonicals, Open Graph/Twitter cards, dynamic product OG images, sitemap and robots.
- [x] Organization, WebSite/SearchAction, BreadcrumbList, Product/Offer/AggregateRating, ItemList, Article and FAQPage-ready content.
- [x] `next/image` with alt text, dimensions and responsive sizes; `next/font` with a limited font weight set.
- [x] Reduced-motion animation fallback, skip link, semantic landmarks and visible keyboard focus.
- [ ] Replace example domain, Unsplash placeholders and sample catalog content with verified brand assets and product/inventory facts.
- [ ] Add payment/checkout, shipping/tax, review, email/newsletter and contact-service integrations.
- [ ] Validate final production deployment with Lighthouse and real-device Core Web Vitals; scores depend on final assets and integrations.
