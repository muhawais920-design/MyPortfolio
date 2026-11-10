import { experience } from "@/app/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header" data-reveal>
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">
            Education & <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-desc">
            Academic background and ongoing development as an aspiring software engineer.
          </p>
        </div>
        <div className="relative mx-auto max-w-3xl pl-6 sm:pl-10" data-stagger>
          <div className="absolute bottom-0 left-1.5 top-2 w-px bg-gradient-to-b from-[var(--blue)] via-[var(--purple)] to-transparent sm:left-3" />
          {experience.map((item) => (
            <div key={item.title} className="relative mb-6 last:mb-0" data-stagger-item>
              <span className="absolute -left-[1.35rem] top-6 h-3.5 w-3.5 rounded-full bg-gradient-to-br from-[var(--blue)] to-[var(--purple)] shadow-[0_0_18px_rgba(79,140,255,0.7)] sm:-left-[1.9rem]" />
              <div className="glass p-5 sm:p-6">
                <span className="inline-flex rounded-full border border-[rgba(79,140,255,0.35)] bg-[rgba(79,140,255,0.1)] px-3 py-1 text-xs font-semibold text-[#cfe0ff]">
                  {item.period}
                </span>
                <h3 className="mt-3 font-[family-name:var(--font-space)] text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-1 font-medium text-white/90">{item.org}</p>
                <p className="mt-3 leading-relaxed text-[var(--muted)]">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
