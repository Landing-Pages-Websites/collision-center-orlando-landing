import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { OEM_BRAND_LOGOS, OEM_CERT_BADGES } from "@/lib/content";

/**
 * OEM brand certifications band — Peter design feedback 2026-05-18.
 *
 * Two horizontal infinite marquees:
 *   1. The 13 OEM brand logos (real SVG marks, simpleicons.org + Wikimedia
 *      Commons, all redistributable). Renders white on the navy band,
 *      with a hover-pause + faded edges for a clean loop.
 *   2. The 7 real cert-plaque photographs from the client's live site,
 *      in a second slower marquee for additional credibility.
 *
 * Replaces the prior static text-pill grid. Compliance disclaimer
 * ("OEM brand logos used with permission") is restated below the carousel
 * — it's already present in the hero/footer copy too.
 *
 * All motion respects prefers-reduced-motion: reduce (see globals.css).
 *
 * Section ID: #oem-brands
 */
export function OEMBrandsSection() {
  // Duplicate the array inline so the keyframe translate of -50% loops
  // seamlessly.
  const logosDuplicated = [...OEM_BRAND_LOGOS, ...OEM_BRAND_LOGOS];
  const certsDuplicated = [...OEM_CERT_BADGES, ...OEM_CERT_BADGES];

  return (
    <section
      id="oem-brands"
      className="bg-[var(--color-accent)] text-white py-20 lg:py-28 border-b border-[var(--color-accent-800)] relative overflow-hidden"
    >
      {/* Ambient navy pinstripe */}
      <div className="absolute inset-0 bg-pinstripe-navy opacity-80" />
      {/* Brand-blue glow accent */}
      <div className="pointer-events-none absolute -top-24 right-[-10%] w-[28rem] h-[28rem] rounded-full bg-[var(--color-primary)]/25 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="max-w-3xl">
          <p className="eyebrow eyebrow-on-dark">OEM-certified for 13 brands</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight heading-rule heading-rule-on-dark">
            Manufacturer-certified to repair the brands Orlando drives.
          </h2>
          <p className="mt-6 text-lg text-white/85 leading-relaxed">
            OEM certification means the manufacturer has audited our facility,
            trained our technicians, and authorized our procedures. We&apos;re
            certified for the following brands — and we repair every other
            make and model (including European luxury imports) to the same
            OE-procedure standard:
          </p>
        </Reveal>

        {/* Brand logo marquee */}
        <div
          className="mt-12 lg:mt-14 marquee-fade"
          role="region"
          aria-label="OEM brand certifications"
        >
          <ul
            className="marquee-track items-center gap-8 lg:gap-12 py-2"
            aria-hidden="false"
          >
            {logosDuplicated.map((logo, i) => (
              <li
                key={`${logo.name}-${i}`}
                className="shrink-0"
                aria-hidden={i >= OEM_BRAND_LOGOS.length}
              >
                <span className="sr-only">{logo.name}</span>
                {/* Light tile so brand-color SVGs read clean against the navy
                    section bg. Spec: grayscale-on-rest + color-on-hover, so
                    each tile is `grayscale hover:grayscale-0` with a small
                    lift. The brand-color fills come straight from the SVGs;
                    no `brightness(0) invert(1)` (banned). text-black is set
                    for the one logo (Genesis) whose fill uses currentColor. */}
                <div className="group flex items-center justify-center h-20 w-[160px] lg:w-[180px] rounded-xl bg-white border border-white/15 shadow-sm px-5 text-black grayscale hover:grayscale-0 opacity-90 hover:opacity-100 transition-[filter,opacity,transform] duration-300 hover:-translate-y-0.5">
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    width={120}
                    height={48}
                    className="h-10 lg:h-12 w-auto max-w-[120px] object-contain"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Cert-badge marquee (slower) */}
        <Reveal>
          <div
            className="mt-12 lg:mt-16 marquee-fade"
            role="region"
            aria-label="OEM certification badges"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-5 text-center">
              Real certification plaques from our shop
            </p>
            <ul
              className="marquee-track marquee-track--slow items-center gap-10 lg:gap-14 py-2"
            >
              {certsDuplicated.map((cert, i) => (
                <li
                  key={`${cert.name}-${i}`}
                  className="shrink-0 flex items-center justify-center"
                  aria-hidden={i >= OEM_CERT_BADGES.length}
                >
                  <span className="sr-only">{cert.name}</span>
                  <Image
                    src={cert.src}
                    alt={cert.name}
                    width={120}
                    height={120}
                    className="h-20 lg:h-24 w-auto object-contain rounded-md bg-white/95 p-2"
                  />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-10 text-sm text-white/70 max-w-3xl">
            Don&apos;t see your make? We service all makes and models —
            including European luxury vehicles like BMW, Mercedes-Benz, Audi,
            Lexus, Volvo, and more. Call us with your make and model for a
            free repair estimate.
          </p>
          <p className="mt-2 text-xs text-white/55 italic max-w-3xl">
            OEM brand logos used with permission. All trademarks are the
            property of their respective owners.
          </p>
        </Reveal>

        <Reveal>
          <PrimaryCTA variant="onDark" align="start" className="mt-6" />
        </Reveal>
      </div>
    </section>
  );
}
