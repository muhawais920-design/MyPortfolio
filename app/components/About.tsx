import { aboutHighlights, profile } from "@/app/data/portfolio";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header" data-reveal>
          <span className="eyebrow">About Me</span>
          <h2 className="section-title">
            A Passionate <span className="gradient-text">Developer</span>
          </h2>
          <p className="section-desc">
            Turning ideas into clean, functional, and engaging software experiences.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass p-6 sm:p-8" data-reveal>
            <p className="text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              {profile.about}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2" data-stagger>
              {aboutHighlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  data-stagger-item
                >
                  <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
                    {item.label}
                  </p>
                  <p className="mt-1 font-medium text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass relative overflow-hidden p-6 sm:p-8" data-reveal>
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[rgba(79,140,255,0.18)] blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-[rgba(168,85,247,0.18)] blur-3xl" />
            <div className="relative">
              <h3 className="font-[family-name:var(--font-space)] text-2xl font-bold">
                What I bring
              </h3>
              <ul className="mt-5 space-y-4 text-[var(--muted)]">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--blue)]" />
                  <span>Strong foundations in OOP, DSA, DBMS, and structured problem solving.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--purple)]" />
                  <span>Hands-on experience building desktop, console, and mobile applications.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--cyan)]" />
                  <span>Curiosity for modern web, 3D interfaces, and user-focused experiences.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[var(--blue)]" />
                  <span>Commitment to writing clean, maintainable, and practical code.</span>
                </li>
              </ul>
              <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-4 font-mono text-sm text-cyan-200">
                <p>{"const developer = {"}</p>
                <p className="pl-4">name: &quot;{profile.name}&quot;,</p>
                <p className="pl-4">cgpa: &quot;{profile.cgpa}&quot;,</p>
                <p className="pl-4">openTo: &quot;Internships&quot;,</p>
                <p>{"};"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
