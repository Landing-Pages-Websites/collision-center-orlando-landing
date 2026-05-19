import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { OEM_BRAND_LOGOS } from "@/lib/content";

/**
 * Above-fold trust bar — slim navy band with the 13 OEM brand-logo marquee.
 * Mounts directly under #hero (before #why-us) per director call 2026-05-19.
 *
 * Split out from OEMBrandsSection so the page no longer has two carousels
 * stacked in the same section. The cert-plaque marquee stays in
 * OEMBrandsSection (#oem-certifications) where it sits adjacent to the
 * #oem-certified service detail row.
 *
 * Behavior preserved byte-identical from the prior brand-logo marquee
 * (cfb94bb approved set):
 *  - 13 real brand-color SVGs from simpleicons
 *  - White tiles, grayscale -> color on hover, small lift
 *  - Hover-pause, faded edges, prefers-reduced-motion guard (globals.css)
 *
 * Section ID: #brand-trust
 */
export function BrandTrustSection() {
  // Duplicate inline so the keyframe translate of -50% loops seamlessly.
  const logosDuplicated = [...OEM_BRAND_LOGOS, ...OEM_BRAND_LOGOS];

  return (
    <section
      id="brand-trust"
      aria-label="OEM brand certifications"
      className="bg-[var(--color-accent)] text-white py-10 lg:py-12 border-b border-[var(--color-accent-800)] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-pinstripe-navy opacity-80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.22em] text-white/70">
            OEM-certified to repair these brands
          </p>
        </Reveal>

        <div
          className="mt-6 lg:mt-7 marquee-fade"
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
                <div className="group flex items-center justify-center h-16 lg:h-20 w-[140px] lg:w-[160px] rounded-xl bg-white border border-white/15 shadow-sm px-5 text-black grayscale hover:grayscale-0 opacity-90 hover:opacity-100 transition-[filter,opacity,transform] duration-300 hover:-translate-y-0.5">
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    width={120}
                    height={48}
                    className="h-8 lg:h-10 w-auto max-w-[110px] object-contain"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        <Reveal>
          <p className="mt-5 text-center text-[11px] text-white/55 italic">
            OEM brand logos used with permission. All trademarks are the
            property of their respective owners.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
