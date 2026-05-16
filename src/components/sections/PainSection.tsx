import { Reveal } from "@/components/Reveal";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { PAIN_POINTS } from "@/lib/content";

/**
 * After-an-accident pain section.
 * ID: #challenges
 */
export function PainSection() {
  return (
    <section
      id="challenges"
      className="bg-[var(--color-surface)] py-20 lg:py-28 relative overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">After an accident</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[var(--color-ink)]">
            Three things that turn a fender-bender into a months-long headache.
          </h2>
          <p className="mt-4 text-lg text-[var(--color-ink-muted)] leading-relaxed">
            We&apos;ve fixed thousands of these in Orlando. The same problems
            come up again and again — and we built our shop around solving
            them so your repair experience is fast, transparent, and stress-free.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {PAIN_POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="h-full bg-white border border-[var(--color-line)] rounded-2xl p-7 hover:border-[var(--color-primary)]/40 hover:shadow-sm transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 flex items-center justify-center mb-5">
                  <span className="font-display text-[var(--color-primary)] text-lg font-semibold">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display text-xl sm:text-[1.4rem] font-semibold text-[var(--color-ink)] leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 text-[var(--color-ink-muted)] leading-relaxed text-[0.98rem]">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <PrimaryCTA variant="default" />
        </Reveal>
      </div>
    </section>
  );
}
