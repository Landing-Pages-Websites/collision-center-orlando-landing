"use client";

import Image from "next/image";
import { FormCard } from "@/components/FormCard";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { Reveal } from "@/components/Reveal";
import { BRAND } from "@/lib/content";

/**
 * Hero — split layout, form on the right above the fold.
 * Background: hero shop photo (provided by client via task attachment),
 * overlaid with deep-navy gradient for readable white headline.
 */
export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-24 pb-16 sm:pt-28 lg:pt-32 lg:pb-24 min-h-[calc(100vh-0.5rem)] flex items-center"
    >
      {/* Background photo + navy overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.png"
          alt="Collision Center Orlando shop interior"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)]/95 via-[var(--color-accent)]/85 to-[var(--color-accent)]/55" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 18px)",
          }}
        />
      </div>

      {/* Top gold rule */}
      <div className="absolute top-20 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center z-10">
        <Reveal className="space-y-6 lg:max-w-2xl text-white">
          <p className="eyebrow eyebrow-on-dark text-[var(--color-gold-100)]">
            OEM-Certified Auto Body & Collision Repair · Orlando
          </p>

          <h1 className="font-display text-[2.4rem] sm:text-5xl lg:text-[3.4rem] xl:text-6xl font-semibold leading-[1.05] tracking-tight">
            Your trusted partner for{" "}
            <span className="text-[var(--color-gold-100)]">
              collision repair
            </span>
            <br className="hidden sm:inline" /> in Greater Orlando.
          </h1>

          <p className="text-lg sm:text-xl text-white/85 max-w-prose leading-relaxed">
            Family-owned for over 45 years. OEM-certified for 13 brands. We
            work directly with your insurance and back every repair with a
            lifetime warranty on workmanship.
          </p>

          {/* Trust row */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-sm text-white/85">
            <span className="flex items-center gap-1.5">
              <CheckIcon />
              45+ years family-owned
            </span>
            <span className="hidden sm:inline text-white/30">·</span>
            <span className="flex items-center gap-1.5">
              <CheckIcon />
              OEM certified for 13 brands
            </span>
            <span className="hidden sm:inline text-white/30">·</span>
            <span className="flex items-center gap-1.5">
              <CheckIcon />
              Lifetime warranty
            </span>
          </div>

          {/* Hero CTA — under the headline */}
          <PrimaryCTA variant="onDark" align="start" className="mt-4" />
        </Reveal>

        <Reveal delay={120} className="lg:pl-2 relative">
          <div className="relative">
            <div className="absolute -top-3 left-4 z-10">
              <span className="inline-block bg-[var(--color-primary)] text-white text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-full shadow-md">
                Free Estimate · No Obligation
              </span>
            </div>
            <FormCard variant="hero" idSuffix="hero" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-[var(--color-gold-100)]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
