"use client";

import { useState } from "react";
import { profile } from "@/app/data/portfolio";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();
    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Name is required.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors.email = "A valid email is required.";
    if (!subject) nextErrors.subject = "Subject is required.";
    if (!message || message.length < 10)
      nextErrors.message = "Message must be at least 10 characters.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus(null);
      return;
    }
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `From: ${name} (${email})\n\n${message}`
    )}`;
    window.location.href = mailto;
    setStatus(
      "Your email client will open with the message. No backend is connected, so messages are not auto-sent."
    );
    form.reset();
  }

  const info = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, "")}` },
    { label: "Location", value: profile.location },
    { label: "LinkedIn", value: "View Profile", href: profile.linkedin },
    { label: "GitHub", value: "muhawais920-design", href: profile.github },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header" data-reveal>
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-desc">
            Let&apos;s connect and build something great together.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-3" data-stagger>
            {info.map((item) => (
              <div key={item.label} className="glass p-4 sm:p-5" data-stagger-item>
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="mt-1 block font-medium text-white hover:text-[var(--blue)]"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 font-medium text-white">{item.value}</p>
                )}
              </div>
            ))}
          </div>
          <form className="glass p-6 sm:p-7" onSubmit={onSubmit} noValidate data-reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="mb-1 block text-sm text-[var(--muted)]">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[var(--blue)] focus:ring-2 focus:ring-[rgba(79,140,255,0.2)]"
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="email" className="mb-1 block text-sm text-[var(--muted)]">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[var(--blue)] focus:ring-2 focus:ring-[rgba(79,140,255,0.2)]"
                  placeholder="you@example.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="mb-1 block text-sm text-[var(--muted)]">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[var(--blue)] focus:ring-2 focus:ring-[rgba(79,140,255,0.2)]"
                  placeholder="Subject"
                />
                {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject}</p>}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1 block text-sm text-[var(--muted)]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[var(--blue)] focus:ring-2 focus:ring-[rgba(79,140,255,0.2)]"
                  placeholder="Your message..."
                />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-5 w-full">
              Send Message
            </button>
            {status && <p className="mt-4 text-center text-sm text-cyan-300">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
