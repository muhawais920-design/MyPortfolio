"use client";

import { useState } from "react";
import { projects, type Project } from "@/app/data/portfolio";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header" data-reveal>
          <span className="eyebrow">Projects</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="section-desc">
            A selection of academic and personal projects spanning desktop, console, mobile, and web.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-stagger>
          {projects.map((project) => (
            <article
              key={project.title}
              className="glass group relative overflow-hidden p-5 transition-transform duration-300 hover:-translate-y-1"
              data-stagger-item
            >
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-30 blur-2xl transition-opacity group-hover:opacity-50"
                style={{ background: project.accent }}
              />
              <div
                className="mb-4 flex h-36 items-end rounded-2xl border border-white/10 p-4"
                style={{
                  background: `linear-gradient(135deg, ${project.accent}22, rgba(255,255,255,0.02))`,
                }}
              >
                <div className="font-mono text-xs text-white/80">
                  <div className="mb-1 h-1.5 w-16 rounded bg-white/30" />
                  <div className="mb-1 h-1.5 w-24 rounded bg-white/20" />
                  <div className="mb-1 h-1.5 w-20 rounded bg-white/20" />
                  <div className="h-1.5 w-28 rounded bg-white/15" />
                </div>
              </div>
              <div className="relative">
                <div className="mb-3 flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="chip !py-1 !text-[0.72rem]">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-[family-name:var(--font-space)] text-lg font-semibold leading-snug">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    className="btn btn-secondary !px-3 !py-2 text-sm"
                    onClick={() => setSelected(project)}
                  >
                    View Details
                  </button>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary !px-3 !py-2 text-sm"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          <button
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelected(null)}
            aria-label="Close"
          />
          <div className="glass relative z-10 max-h-[85vh] w-full max-w-2xl overflow-y-auto p-6 sm:p-8">
            <button
              className="absolute right-4 top-4 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm hover:bg-white/10"
              onClick={() => setSelected(null)}
            >
              Close
            </button>
            <h3 className="pr-20 font-[family-name:var(--font-space)] text-2xl font-bold">
              {selected.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {selected.tech.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-5 leading-relaxed text-[var(--muted)]">{selected.details}</p>
            <p className="mt-4 leading-relaxed text-[var(--muted)]">{selected.description}</p>
            {selected.link ? (
              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-6"
              >
                View Repository
              </a>
            ) : (
              <p className="mt-6 text-sm text-[var(--muted)]">
                Source code available on request. No fake repository link provided.
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
