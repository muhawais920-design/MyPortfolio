"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillGroups } from "@/app/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-skill-bar]").forEach((bar) => {
        const level = bar.dataset.level || "0";
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: `${level}%`,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: { trigger: bar, start: "top 90%" },
          }
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="section">
      <div className="container" ref={root}>
        <div className="section-header" data-reveal>
          <span className="eyebrow">Skills</span>
          <h2 className="section-title">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-desc">
            Languages, frameworks, concepts, and tools I use to build and learn.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2" data-stagger>
          {skillGroups.map((group) => (
            <div key={group.title} className="glass p-6" data-stagger-item>
              <h3 className="font-[family-name:var(--font-space)] text-xl font-semibold">
                {group.title}
              </h3>
              {"items" in group && group.items && (
                <div className="mt-5 space-y-4">
                  {group.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="text-white/90">{skill.name}</span>
                        <span className="text-[var(--muted)]">{skill.level}%</span>
                      </div>
                      <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                        <div
                          data-skill-bar
                          data-level={skill.level}
                          className="h-full rounded-full bg-gradient-to-r from-[var(--blue)] via-[var(--purple)] to-[var(--cyan)] shadow-[0_0_18px_rgba(79,140,255,0.35)]"
                          style={{ width: 0 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {"chips" in group && group.chips && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.chips.map((chip) => (
                    <span key={chip} className="chip">
                      {chip}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
