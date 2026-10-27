# england SEO keyword plan

Keywords are directional; confirm search demand and language against the launch market before investing in paid or editorial campaigns. Copy should stay useful to people and avoid repetitive keyword insertion.

| Page | Primary keyword | Secondary keywords |
|---|---|---|
| `/` | technical performance clothing | premium activewear, technical training clothes, performance apparel |
| `/shop` | performance clothing | technical workout clothes, training apparel, activewear collection |
| `/shop/tops` | performance tops | technical hoodie, workout tops, training shirts |
| `/shop/bottoms` | training bottoms | running shorts, performance joggers, compression tights |
| `/shop/outerwear` | performance outerwear | running vest, training jacket, weatherproof anorak |
| `/shop/accessories` | workout accessories | merino running socks, training cap, performance accessories |
| `/product/[slug]` | exact product name | product type, technical fabric, training use case, product SKU |
| `/about` | england performance clothing | technical apparel brand, considered activewear, made to move |
| `/lookbook` | Fall Winter 2026 activewear lookbook | performance apparel editorial, technical clothing collection |
| `/journal` | training and recovery advice | training notes, activewear field guide, performance clothing |
| `/journal/[slug]` | article-specific question/topic | warm-up routine, workout layering, durable training kit |
| `/contact` | england clothing customer support | sizing help, shipping questions, returns support |
| `/cart` | noindex | Keep transactional and personal shopping URLs out of search results. |

## SEO implementation checklist

- Metadata API provides unique route titles, descriptions, canonicals, Open Graph and Twitter cards. Generated static route titles are under 60 characters; descriptions were checked in the production HTML output and are 140–160 characters.
- Dynamic product pages generate static params and product-specific metadata, JSON-LD and Open Graph images. Shared page-level Open Graph imagery is generated with `next/og`.
- `app/sitemap.ts` includes static pages, categories, 12 products and all journal entries, with priority and last-modified values.
- `app/robots.ts` links the sitemap and disallows cart, checkout and account paths. Cart metadata is `noindex, nofollow`.
- Structured data includes Organization, WebSite/SearchAction, BreadcrumbList, product Offer/price/availability/brand/SKU/aggregateRating, category ItemList, Article and FAQPage-ready FAQ content.
- All site content uses semantic landmarks, a single main heading, logical section headings, breadcrumb links, descriptive image alt text, explicit image dimensions and responsive sizes.
- The site has an `en-US` and `x-default` hreflang placeholder; extend the language map when localized routes exist.
- The configured redirect permanently maps legacy `/collections/:category` URLs to `/shop/:category`. Keep the no-trailing-slash policy.
- Performance targets (LCP < 2.0s, CLS < 0.05, INP < 200ms) and Lighthouse 95+ require measurement on the final deployed domain. Replace placeholder remote images with optimized licensed assets, test on mobile, and use real field data before treating targets as met.
