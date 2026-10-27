import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { MediaLightbox } from "@/components/MediaLightbox";
import { FreshFits } from "@/components/FreshFits";
import { HeroHeadline } from "@/components/HeroHeadline";
import { WorkoutShowcase } from "@/components/WorkoutShowcase";
import { jsonLd, organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";

const portrait = (id: string, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export default function HomePage() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(organizationJsonLd())} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(websiteJsonLd())} />
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-rays" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">TECHNICAL CLOTHING / EST. MMXXIV</p>
          <HeroHeadline />
          <p className="hero-subtitle">Performance apparel for the work you put in — and the life that happens around it.</p>
          <div className="hero-cta-group">
            <div className="hero-actions"><Link className="pill pill-black" href="/shop">SHOP NOW <span>↗</span></Link><Link className="pill pill-white" href="/lookbook">EXPLORE ALL</Link></div>
            <Link className="hero-view-products" href="/shop">VIEW ALL PRODUCTS <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className="hero-image-wrap">
          <Image className="hero-model" src={portrait("photo-1539109136881-3be0616acf4b", 1500)} alt="Athlete in understated performance apparel, standing in soft studio light" width={950} height={1180} priority sizes="(max-width: 700px) 90vw, 56vw" />
        </div>
        <div className="hero-proof"><div className="avatar-stack" aria-hidden="true"><span>J</span><span>M</span><span>A</span><span>+</span></div><p>MADE FOR THE MILES<br /><strong>AND THE MOMENTS AFTER.</strong></p></div>
        <div className="hero-film"><MediaLightbox /></div>
        <span className="hero-index">01 — 04</span>
      </section>

      <WorkoutShowcase />

      <section className="top-picks section-pad" aria-labelledby="top-picks-title">
        <div className="section-meta"><p className="eyebrow">OUR TOP PICKS</p><p>Thoughtful layers, technical fabrics<br />and a little more room to move.</p></div>
        <h2 id="top-picks-title" className="section-title">TOP WORKOUT GEAR<br /><span>FOR PEAK PERFORMANCE.</span></h2>
        <div className="feature-grid">
          <Link className="feature-card" href="/shop/tops">
            <Image src={portrait("photo-1556821840-3a63f95609a7", 1200)} alt="Technical hoodie in a shadowed editorial studio" width={1200} height={900} sizes="(max-width: 700px) 94vw, 48vw" />
            <span className="feature-category">01 / LAYERS</span><span className="feature-title">TRAIN<br /><i>YOUR WAY.</i></span><span className="pill pill-glass">SHOP TOPS <b>↗</b></span>
          </Link>
          <Link className="feature-card" href="/shop/bottoms">
            <Image src={portrait("photo-1552902865-b72c031ac5ea", 1200)} alt="Performance joggers styled for movement and everyday wear" width={1200} height={900} sizes="(max-width: 700px) 94vw, 48vw" />
            <span className="feature-category">02 / MOVEMENT</span><span className="feature-title">MOVE<br /><i>WITHOUT LIMITS.</i></span><span className="pill pill-glass">SHOP BOTTOMS <b>↗</b></span>
          </Link>
        </div>
      </section>

      <FreshFits />

      <section className="product-section section-pad" aria-labelledby="products-title">
        <div className="product-heading"><p className="eyebrow">NEW ARRIVAL</p><h2 id="products-title">FRESH FITS FOR<br />YOUR NEXT WORKOUT.</h2><Link href="/shop">ALL BRANDS ↗</Link></div>
        <div className="product-grid">{products.slice(0, 4).map((product) => <ProductCard key={product.slug} product={product} />)}</div>
        <Link href="/shop" className="pill pill-black see-all">SEE ALL BRANDS <span>↗</span></Link>
      </section>

      <section className="manifesto">
        <Reveal><p className="eyebrow">A BETTER KIND OF PERFORMANCE</p><h2>SHOW UP.<br /><span>STAY FOR MORE.</span></h2><p>We make technical clothing that respects your effort — engineered for movement, designed for the hours around it, and made to be worn on repeat.</p><Link className="pill pill-white" href="/about">MEET ENGLAND <span>↗</span></Link></Reveal>
      </section>
    </main>
  );
}
