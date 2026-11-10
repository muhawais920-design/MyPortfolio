"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { profile } from "@/app/data/portfolio";

const HeroScene = dynamic(() => import("@/app/components/HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(79,140,255,0.18),transparent_35%),radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.18),transparent_35%),#050816]" />
  ),
});

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const words = profile.typing;
    const current = words[index];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next.length === current.length) {
            setTimeout(() => setDeleting(true), 1200);
          }
        } else {
          const next = current.slice(0, Math.max(0, text.length - 1));
          setText(next);
          if (next.length === 0) {
            setDeleting(false);
            setIndex((i) => (i + 1) % words.length);
          }
        }
      },
      deleting ? 45 : 85
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden pt-28">
      <HeroScene />
      <div className="grid-bg" />
      <div className="container relative z-10 flex min-h-[calc(100svh-7rem)] items-center">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl" data-reveal>
            <span className="eyebrow">Premium 3D Developer Portfolio</span>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--blue)]">
              Hello, I&apos;m
            </p>
            <h1 className="mt-2 font-[family-name:var(--font-space)] text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <h2 className="mt-4 text-xl font-semibold sm:text-2xl">
              <span className="gradient-text">{profile.tagline}</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              {profile.role}. {profile.intro}
            </p>
            <p className="mt-4 font-mono text-sm text-cyan-300 sm:text-base" aria-live="polite">
              I am a <span>{text}</span>
              <span className="animate-pulse">|</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-primary">
                Explore My Work
              </a>
              <a href={profile.resume} className="btn btn-secondary" download>
                Download Resume
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
            <div className="mt-10 grid max-w-lg grid-cols-3 gap-3" data-stagger>
              {profile.stats.map((s) => (
                <div key={s.label} className="glass p-4 text-center" data-stagger-item>
                  <div className="font-[family-name:var(--font-space)] text-xl font-bold text-white sm:text-2xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-[var(--muted)]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative hidden h-[420px] lg:block" aria-hidden="true">
            <div className="absolute right-0 top-8 w-72 glass p-5" data-reveal>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Focus</p>
              <p className="mt-2 font-semibold">Software Development & 3D Web Experiences</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Next.js", "Three.js", "Flutter", "Java"].map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </div>
            <div className="absolute bottom-8 left-0 w-64 glass p-5" data-reveal>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Based in</p>
              <p className="mt-2 font-semibold">{profile.location}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">Open to internship opportunities</p>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/20 px-3 py-4 text-xs text-[var(--muted)] hover:text-white"
        aria-label="Scroll to about"
      >
        <span className="block h-2 w-1 animate-bounce rounded-full bg-[var(--blue)] mx-auto" />
      </a>
    </section>
  );
}
