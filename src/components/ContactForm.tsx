"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Website enquiry from ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\nFrom: ${data.get("name")} (${data.get("email")})`);
    window.location.href = `mailto:hello@england.example?subject=${subject}&body=${body}`;
    setSent(true);
  };
  return <form className="contact-form" onSubmit={submit}>
    <label>Name<input name="name" autoComplete="name" required /></label>
    <label>Email<input name="email" type="email" autoComplete="email" required /></label>
    <label>What can we help with?<textarea name="message" required /></label>
    <button className="pill pill-black" type="submit">OPEN EMAIL <span>↗</span></button>
    {sent && <p role="status">Your email app should open with your message ready to send.</p>}
  </form>;
}
