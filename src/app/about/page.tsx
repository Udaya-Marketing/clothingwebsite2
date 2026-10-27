import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/site";
import { breadcrumbJsonLd, faqJsonLd, jsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata("About england | Made to move", "Meet england: considered performance clothing designed for movement, recovery and the hours in between. Built with purpose, made to be worn on repeat.", "/about");

export default function AboutPage() {
  return (
    <main id="main-content" className="inner-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }]))} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqJsonLd([
        { question: "Where is england clothing designed?", answer: "Our collection is designed with training and daily movement in mind. Product-specific sourcing information will be published on each product page as the collection is finalized." },
        { question: "How should I care for technical pieces?", answer: "Follow the care label on each garment. As a general rule, wash cold with similar colors and air dry when practical to help extend garment life." },
        { question: "What is your approach to sustainability?", answer: "We prioritize considered design, durable materials and repeat wear. We will share verified material and manufacturing information as it becomes available." }
      ]))} />
      <p className="breadcrumbs"><Link href="/">HOME</Link> / ABOUT</p><p className="eyebrow">OUR POINT OF VIEW</p>
      <h1 className="page-title">MADE FOR<br />THE LONG RUN.</h1>
      <p className="page-intro">england makes technical clothing for the work you put in — and the life that happens around it.</p>
      <div className="story-grid"><Image src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1100&q=85" alt="Quiet, light-filled training studio ready for the day's first session" width={1000} height={1250} /><div><p className="eyebrow">OUR PROMISE</p><h2 className="page-title">LESS NOISE.<br />MORE MOVEMENT.</h2><p className="page-intro">We believe performance is personal. It is the miles that clear your head, the strength you build slowly, and the rest you make time for. Our pieces are designed with technical details that earn their place, in forms that feel at home beyond the gym.</p><p className="page-intro">We choose durable fabrics, thoughtful fits and versatile layers — then keep refining them through real wear. Nothing more than you need. Nothing less than you deserve.</p><Link className="pill pill-black" href="/shop">EXPLORE THE COLLECTION <span>↗</span></Link></div></div>
      <section className="faq" id="faq"><p className="eyebrow">A FEW GOOD QUESTIONS</p><h2>Our approach</h2><details><summary>Where is england clothing designed?</summary><p>Our collection is designed with training and daily movement in mind. Product-specific sourcing information will be published on each product page as the collection is finalized.</p></details><details><summary>How should I care for technical pieces?</summary><p>Follow the care label on each garment. As a general rule, wash cold with similar colors and air dry when practical to help extend garment life.</p></details><details><summary>What is your approach to sustainability?</summary><p>We prioritize considered design, durable materials and repeat wear. We will share verified material and manufacturing information as it becomes available.</p></details></section>
    </main>
  );
}
