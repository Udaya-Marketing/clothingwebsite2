import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { pageMetadata } from "@/lib/site";
import { breadcrumbJsonLd, faqJsonLd, jsonLd } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata("Contact england | We are here to help", "Questions about england technical clothing, sizing, shipping or an order? Get in touch with our team and we will help you find an answer. Contact us today.", "/contact");

export default function ContactPage() {
  return <main id="main-content" className="inner-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]))} />
    <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqJsonLd([
      { question: "How long does shipping take?", answer: "Shipping timelines will be shown at checkout once fulfilment is configured. We currently offer complimentary US shipping on orders over $150." },
      { question: "Can I return an item?", answer: "Unworn items can be returned within 30 days. Contact us with your order number and we will help you with the next steps." },
      { question: "Where can I get sizing help?", answer: "Product pages include size selectors. For personalized advice, include your usual size and preferred fit in the contact form." }
    ]))} />
    <p className="breadcrumbs"><Link href="/">HOME</Link> / CONTACT</p><p className="eyebrow">WE’RE HERE TO HELP</p><h1 className="page-title">LET’S TALK.</h1><p className="page-intro">Send a note about an order, a size or anything else. We aim to reply within two working days.</p>
    <ContactForm />
    <section className="faq" id="faq"><p className="eyebrow">QUICK ANSWERS</p><h2>Before you write</h2><details><summary>How long does shipping take?</summary><p>Shipping timelines will be shown at checkout once fulfilment is configured. We currently offer complimentary US shipping on orders over $150.</p></details><details><summary>Can I return an item?</summary><p>Unworn items can be returned within 30 days. Contact us with your order number and we will help you with the next steps.</p></details><details><summary>Where can I get sizing help?</summary><p>Product pages include size selectors. For personalized advice, include your usual size and preferred fit in the contact form.</p></details></section>
  </main>;
}
