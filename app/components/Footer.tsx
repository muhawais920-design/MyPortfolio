"use client";

import { useEffect, useState } from "react";
import { profile } from "@/app/data/portfolio";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <div className="font-[family-name:var(--font-space)] text-xl font-bold">
            AS<span className="text-[var(--blue)]">.</span>
          </div>
          <p className="mt-1 text-sm text-[var(--muted)]">
            © {year ?? "2026"} {profile.name}. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="chip hover:border-[var(--blue)]">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="chip hover:border-[var(--blue)]">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="chip hover:border-[var(--blue)]">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
