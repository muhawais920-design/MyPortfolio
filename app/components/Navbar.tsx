"use client";

import { useEffect, useState } from "react";
import { navItems, profile } from "@/app/data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = navItems
        .map((n) => document.querySelector(n.href))
        .filter(Boolean) as Element[];
      let current = "#home";
      for (const sec of sections) {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) {
          current = `#${sec.id}`;
          break;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-blur py-3" : "py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="font-[family-name:var(--font-space)] text-xl font-bold tracking-tight">
          AS<span className="text-[var(--blue)]">.</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                active === item.href
                  ? "bg-[rgba(79,140,255,0.12)] text-white"
                  : "text-[var(--muted)] hover:text-white hover:bg-white/5"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a href={profile.resume} className="btn btn-primary ml-2 !px-4 !py-2 text-sm" download>
            Resume
          </a>
        </nav>
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden">
          <div className="container mt-3 glass p-4">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-3 py-3 text-sm font-medium ${
                    active === item.href ? "bg-[rgba(79,140,255,0.12)] text-white" : "text-[var(--muted)]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a href={profile.resume} className="btn btn-primary mt-2" download onClick={() => setOpen(false)}>
                Download Resume
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
