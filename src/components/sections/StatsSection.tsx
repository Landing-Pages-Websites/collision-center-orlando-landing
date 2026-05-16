import { Reveal } from "@/components/Reveal";
import { STATS } from "@/lib/content";

/**
 * Trust-stat band — sits directly under hero. Why drivers choose us.
 * ID: #why-us
 */
export function StatsSection() {
  return (
    <section
      id="why-us"
      aria-label="By the numbers"
      className="relative bg-paper border-b border-[var(--color-line)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <Reveal className="max-w-2xl mb-10 lg:mb-14">
          <p className="eyebrow">Why Orlando trusts us</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-[var(--color-accent)] leading-tight">
            45+ years putting Orlando drivers back on the road, properly.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-line)] border border-[var(--color-line)] rounded-2xl overflow-hidden">
          {STATS.map((stat, i) => (
            <Reveal key={stat.value} delay={i * 80}>
              <div className="bg-[var(--color-surface)] p-6 sm:p-8 h-full flex flex-col">
                <div className="font-display text-3xl sm:text-[2.5rem] lg:text-[2.8rem] font-semibold text-[var(--color-accent)] tracking-tight leading-none">
                  {stat.value}
                </div>
                <div className="mt-1 h-0.5 w-8 bg-[var(--color-primary)]" />
                <p className="mt-3 text-sm text-[var(--color-ink-muted)] leading-snug">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-6 text-xs text-[var(--color-ink-muted)] italic max-w-3xl">
            * Lifetime warranty covers our workmanship on collision repairs for
            as long as you own the vehicle. Full warranty terms available at
            our Orlando shop. OEM brand logos used with permission.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
