import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";

const footerLinks = [
  { title: "EXPLORE", links: [["Shop all", "/shop"], ["Our story", "/about"], ["Lookbook", "/lookbook"], ["Journal", "/journal"]] },
  { title: "SUPPORT", links: [["Contact", "/contact"], ["Shipping & returns", "/contact"], ["Size guide", "/contact"], ["FAQs", "/contact#faq"]] },
  { title: "FOLLOW ALONG", links: [["Instagram", "https://www.instagram.com/"], ["TikTok", "https://www.tiktok.com/"], ["Pinterest", "https://www.pinterest.com/"]] }
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="newsletter">
        <div><p className="eyebrow">THE ENGLAND FIELD NOTES</p><h2>GOOD THINGS<br />IN YOUR INBOX.</h2><p>New releases, considered training notes and 10% off your first order.</p></div>
        <NewsletterForm />
      </div>
      <div className="footer-links">
        {footerLinks.map((column) => <div key={column.title}><p className="eyebrow">{column.title}</p>{column.links.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}</div>)}
        <div><p className="eyebrow">NEED A HAND?</p><a href="mailto:hello@england.example">hello@england.example</a><p className="footer-note">Monday–Friday, 9am–5pm ET</p></div>
      </div>
      <Link href="/" className="footer-wordmark">england</Link>
      <div className="footer-bottom"><span>© 2026 england. Made to move.</span><div><Link href="/contact">Privacy</Link><Link href="/contact">Terms</Link><span>VISA · AMEX · PAYPAL</span></div></div>
    </footer>
  );
}
