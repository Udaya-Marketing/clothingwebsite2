export type Product = {
  slug: string;
  name: string;
  category: "Tops" | "Bottoms" | "Outerwear" | "Accessories";
  price: number;
  sku: string;
  season: string;
  releaseDate: string;
  description: string;
  image: string;
  secondaryImage: string;
  rating: number;
  reviewCount: number;
  sizes: string[];
  featured?: boolean;
};

const photo = (id: string, width = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export const products: Product[] = [
  { slug: "form-technical-hoodie", name: "Form Technical Hoodie", category: "Tops", price: 118, sku: "EN-TH-026", season: "Fall / Winter 2026", releaseDate: "October 18, 2026", description: "A structured midweight layer with a brushed interior, articulated sleeves and a clean, secure fit for warm-ups and winding down.", image: photo("photo-1556821840-3a63f95609a7"), secondaryImage: photo("photo-1578681994506-b8f463449011"), rating: 4.8, reviewCount: 34, sizes: ["S", "M", "L", "XL"], featured: true },
  { slug: "tempo-training-short", name: "Tempo Training Short", category: "Bottoms", price: 74, sku: "EN-TS-014", season: "Fall / Winter 2026", releaseDate: "October 18, 2026", description: "Lightweight stretch-woven shorts with a secure liner and considered storage, made for intervals, miles and off days.", image: photo("photo-1517836357463-d25dfeac3438"), secondaryImage: photo("photo-1518611012118-696072aa579a"), rating: 4.7, reviewCount: 21, sizes: ["S", "M", "L", "XL"], featured: true },
  { slug: "everyday-merino-tee", name: "Everyday Merino Tee", category: "Tops", price: 68, sku: "EN-MT-008", season: "Fall / Winter 2026", releaseDate: "October 18, 2026", description: "Naturally breathable merino-blend jersey, softened for daily wear and finished with a subtle, tailored drape.", image: photo("photo-1521572163474-6864f9cf17ab"), secondaryImage: photo("photo-1503342217505-b0a15ec3261c"), rating: 4.9, reviewCount: 42, sizes: ["S", "M", "L", "XL"], featured: true },
  { slug: "utility-track-jacket", name: "Utility Track Jacket", category: "Outerwear", price: 164, sku: "EN-TJ-031", season: "Fall / Winter 2026", releaseDate: "October 18, 2026", description: "A weather-resistant shell with clean lines, quiet hardware and room to layer. Built to move beyond the session.", image: photo("photo-1544923246-77307dd654cb"), secondaryImage: photo("photo-1515886657613-9f3515b0c78f"), rating: 4.8, reviewCount: 18, sizes: ["S", "M", "L", "XL"] },
  { slug: "studio-rib-tank", name: "Studio Rib Tank", category: "Tops", price: 52, sku: "EN-RT-009", season: "Fall / Winter 2026", releaseDate: "October 18, 2026", description: "A close-fitting rib-knit essential with a soft hand and enough stretch for strength training or slower mornings.", image: photo("photo-1503342217505-b0a15ec3261c"), secondaryImage: photo("photo-1521572163474-6864f9cf17ab"), rating: 4.6, reviewCount: 16, sizes: ["XS", "S", "M", "L"] },
  { slug: "all-day-jogger", name: "All Day Jogger", category: "Bottoms", price: 96, sku: "EN-JG-020", season: "Fall / Winter 2026", releaseDate: "October 18, 2026", description: "A tapered, easy-moving jogger in substantial recycled stretch fabric, with a drawcord waist and deep hand pockets.", image: photo("photo-1552902865-b72c031ac5ea"), secondaryImage: photo("photo-1517836357463-d25dfeac3438"), rating: 4.7, reviewCount: 28, sizes: ["S", "M", "L", "XL"] },
  { slug: "pace-running-vest", name: "Pace Running Vest", category: "Outerwear", price: 142, sku: "EN-RV-012", season: "Fall / Winter 2026", releaseDate: "October 18, 2026", description: "A featherweight wind layer that packs down small and stays close without restricting your stride.", image: photo("photo-1515886657613-9f3515b0c78f"), secondaryImage: photo("photo-1544923246-77307dd654cb"), rating: 4.8, reviewCount: 12, sizes: ["S", "M", "L", "XL"] },
  { slug: "recovery-crew", name: "Recovery Crew", category: "Tops", price: 108, sku: "EN-RC-005", season: "Fall / Winter 2026", releaseDate: "October 18, 2026", description: "A relaxed cotton-blend crewneck with a brushed interior, designed to carry you comfortably from training to rest.", image: photo("photo-1578681994506-b8f463449011"), secondaryImage: photo("photo-1556821840-3a63f95609a7"), rating: 4.9, reviewCount: 31, sizes: ["S", "M", "L", "XL"] },
  { slug: "stride-compression-tight", name: "Stride Compression Tight", category: "Bottoms", price: 92, sku: "EN-CT-017", season: "Fall / Winter 2026", releaseDate: "October 18, 2026", description: "Supportive four-way stretch with a smooth waistband and a low-profile pocket for essentials on the move.", image: photo("photo-1518611012118-696072aa579a"), secondaryImage: photo("photo-1539109136881-3be0616acf4b"), rating: 4.7, reviewCount: 24, sizes: ["XS", "S", "M", "L", "XL"] },
  { slug: "weatherproof-anorak", name: "Weatherproof Anorak", category: "Outerwear", price: 188, sku: "EN-WA-022", season: "Fall / Winter 2026", releaseDate: "October 18, 2026", description: "A protective, packable anorak with a considered oversized cut and a water-resistant finish for unpredictable days.", image: photo("photo-1515886657613-9f3515b0c78f"), secondaryImage: photo("photo-1544923246-77307dd654cb"), rating: 4.8, reviewCount: 9, sizes: ["S", "M", "L", "XL"] },
  { slug: "everyday-cap", name: "Everyday Cap", category: "Accessories", price: 38, sku: "EN-CP-002", season: "Fall / Winter 2026", releaseDate: "October 18, 2026", description: "A soft-structured six-panel cap in durable cotton twill, finished with a tonal embroidered mark and adjustable strap.", image: photo("photo-1588850561407-ed78c282e89b"), secondaryImage: photo("photo-1515886657613-9f3515b0c78f"), rating: 4.6, reviewCount: 14, sizes: ["One size"] },
  { slug: "merino-run-sock", name: "Merino Run Sock", category: "Accessories", price: 24, sku: "EN-MS-003", season: "Fall / Winter 2026", releaseDate: "October 18, 2026", description: "A cushioned merino-blend crew sock with targeted support and breathable zones for long days on your feet.", image: photo("photo-1588850561407-ed78c282e89b"), secondaryImage: photo("photo-1521572163474-6864f9cf17ab"), rating: 4.8, reviewCount: 37, sizes: ["S/M", "L/XL"] }
];

export const categories = ["Tops", "Bottoms", "Outerwear", "Accessories"] as const;
export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
