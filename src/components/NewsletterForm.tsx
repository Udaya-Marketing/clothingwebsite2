"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get("email");
    const subject = encodeURIComponent("Subscribe to england Field Notes");
    const body = encodeURIComponent(`Please add ${email} to the england Field Notes list.`);
    window.location.href = `mailto:hello@england.example?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };
  return <form onSubmit={submit} className="newsletter-form">
    <label htmlFor="newsletter-email">Your email address</label>
    <div><input id="newsletter-email" name="email" type="email" placeholder="you@example.com" required /><button type="submit" aria-label="Subscribe">↗</button></div>
    <small>{submitted ? "Your email app should open with a subscription request." : "By subscribing, you agree to our privacy policy."}</small>
  </form>;
}
