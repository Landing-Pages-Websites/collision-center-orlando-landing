import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { SERVICES } from "@/lib/content";

/**
 * Per orchestrator rule 5: each service gets its own <section> with a unique
 * descriptive kebab-case anchor + H3 + 80-150 words of real body copy + CTA.
 *
 * Six offerings: Collision Repair, Insurance Claims, OEM Certified,
 * Paint & Refinishing, Dent & Scratch, Detailing & Rentals. Alternates
 * navy/paper to break visual rhythm.
 *
 * Updated 2026-05-18 (Peter design feedback):
 *  - Three of the service sections now include a real shop photograph
 *    (collision repair / OEM certified / paint refinishing) sourced from
 *    the client's live site, each used exactly once on the page.
 *  - Outcome chips stagger-reveal on intersection (80ms delay each).
 *  - Cards pick up a hover lift via the .lift-on-hover utility.
 */

const SERVICE_IMAGES: Record<string, { src: string; alt: string }> = {
  "collision-repair": {
    src: "/images/exterior-3.jpg",
    alt: "Vehicles being staged for collision repair outside the Collision Center Orlando shop",
  },
  "oem-certified": {
    src: "/images/assure-performance.jpg",
    alt: "Assure Performance Certified Network plaque awarded to Collision Center Orlando",
  },
  "paint-refinishing": {
    src: "/images/spraybooth.jpg",
    alt: "Paint and refinishing booth at Collision Center Orlando",
  },
};

export function ServicesSection() {
  return (
    <>
      {/* Section intro */}
      <section
        id="services-intro"
        aria-labelledby="services-intro-heading"
        className="bg-paper pt-20 lg:pt-28 pb-8 lg:pb-10 border-t border-[var(--color-line)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Our services</p>
            <h2
              id="services-intro-heading"
              className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--color-accent)] leading-tight heading-rule"
            >
              Full-service collision repair under one roof.
            </h2>
            <p className="mt-6 text-lg text-[var(--color-ink-muted)] leading-relaxed">
              From the first phone call to the moment you drive away, every
              part of your repair runs through our Orlando facility — handled
              by OEM-certified technicians, with insurance, parts, paint,
              rental, and detail coordinated for you.
            </p>
          </Reveal>
        </div>
      </section>

      {SERVICES.map((service, idx) => {
        const dark = idx % 2 === 1;
        const photo = SERVICE_IMAGES[service.slug];
        return (
          <section
            key={service.slug}
            id={service.anchorId}
            aria-labelledby={`${service.anchorId}-heading`}
            className={
              dark
                ? "bg-[var(--color-accent)] text-white py-16 lg:py-24 relative overflow-hidden"
                : "bg-paper py-16 lg:py-24 border-b border-[var(--color-line)]"
            }
          >
            {dark && (
              <div className="pointer-events-none absolute inset-0 -z-0">
                <div className="absolute top-0 right-0 w-[24rem] h-[24rem] rounded-full bg-[var(--color-primary)]/25 blur-[120px]" />
              </div>
            )}

            <div
              className={
                photo
                  ? "relative max-w-6xl mx-auto px-4 sm:px-6 z-10 grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14 items-center"
                  : "relative max-w-5xl mx-auto px-4 sm:px-6 z-10"
              }
            >
              <Reveal className="space-y-5">
                <p className={`eyebrow ${dark ? "eyebrow-on-dark" : ""}`}>
                  {service.label}
                </p>
                <h3
                  id={`${service.anchorId}-heading`}
                  className={`font-display text-3xl sm:text-4xl font-semibold leading-tight tracking-tight ${
                    dark ? "text-white" : "text-[var(--color-accent)]"
                  }`}
                >
                  {service.heading}
                </h3>
                <p
                  className={`text-lg leading-relaxed ${
                    dark ? "text-white/85" : "text-[var(--color-ink-muted)]"
                  }`}
                >
                  {service.body}
                </p>

                <ul className="grid sm:grid-cols-3 gap-3 pt-3">
                  {service.outcomes.map((o, oi) => (
                    <Reveal
                      as="li"
                      key={o}
                      delay={oi * 90}
                      className={`flex items-start gap-3 rounded-lg border px-4 py-3 lift-on-hover ${
                        dark
                          ? "border-white/15 bg-white/[0.04] text-white/95"
                          : "border-[var(--color-line)] bg-white text-[var(--color-ink)]"
                      }`}
                    >
                      <span
                        className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          dark
                            ? "bg-[var(--color-gold-100)] text-[var(--color-accent)]"
                            : "bg-[var(--color-primary)] text-white"
                        }`}
                      >
                        <svg
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span className="text-sm leading-snug">{o}</span>
                    </Reveal>
                  ))}
                </ul>

                <PrimaryCTA
                  variant={dark ? "onDark" : "default"}
                  align="start"
                  className="mt-6"
                />
              </Reveal>

              {photo && (
                <Reveal delay={120} className="order-first lg:order-last">
                  <div
                    className={`relative aspect-[5/4] rounded-2xl overflow-hidden shadow-lg ${
                      dark
                        ? "ring-1 ring-white/10"
                        : "border border-[var(--color-line)]"
                    }`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 1024px) 32rem, 100vw"
                      className="object-cover"
                    />
                    {dark && (
                      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-accent)]/40 to-transparent" />
                    )}
                  </div>
                </Reveal>
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}
