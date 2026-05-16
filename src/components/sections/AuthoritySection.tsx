import { Reveal } from "@/components/Reveal";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { ICP_POINTS } from "@/lib/content";

/**
 * "Why CCO" — credibility pillars (45+ years, OEM certs, lifetime warranty).
 * Section ID: #why-cco
 */
export function AuthoritySection() {
  return (
    <section
      id="why-cco"
      className="bg-[var(--color-surface)] py-20 lg:py-28 border-b border-[var(--color-line)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          <Reveal>
            <p className="eyebrow">Why Collision Center Orlando</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--color-accent)] leading-tight heading-rule">
              The kind of shop you can stand behind.
            </h2>
            <p className="mt-6 text-lg text-[var(--color-ink-muted)] leading-relaxed">
              Choosing a body shop after an accident is one of the more
              consequential decisions you&apos;ll make for your vehicle. We
              built our practice on three commitments that matter long after
              the repair is done.
            </p>
          </Reveal>

          <Reveal delay={120} className="space-y-4">
            {ICP_POINTS.map((point, i) => (
              <div
                key={point.title}
                className="relative pl-16 pr-6 py-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-line)] shadow-sm hover:shadow-md hover:border-[var(--color-primary)]/40 transition"
              >
                <div className="absolute left-5 top-6 w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-display font-semibold text-base ring-4 ring-[var(--color-surface)]">
                  {i + 1}
                </div>
                <h3 className="font-display text-lg sm:text-xl font-semibold text-[var(--color-accent)] leading-snug">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-[var(--color-ink-muted)] leading-relaxed">
                  {point.body}
                </p>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal>
          <PrimaryCTA />
        </Reveal>
      </div>
    </section>
  );
}
