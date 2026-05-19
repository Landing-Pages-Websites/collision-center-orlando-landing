import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { OEM_CERT_BADGES } from "@/lib/content";

/**
 * OEM certification-plaque marquee — slim contextual band that sits adjacent
 * to the #oem-certified service detail row (2026-05-19 director call).
 *
 * Split from the prior combined section: the 13-brand car-logo marquee now
 * lives in BrandTrustSection (#brand-trust) directly under #hero. This
 * section keeps the 7 real cert-plaque photographs as the natural credibility
 * proof for the "OEM Certified" service explanation above it.
 *
 * Motion respects prefers-reduced-motion: reduce (see globals.css).
 *
 * Section ID: #oem-certifications
 */
export function OEMBrandsSection() {
  const certsDuplicated = [...OEM_CERT_BADGES, ...OEM_CERT_BADGES];

  return (
    <section
      id="oem-certifications"
      aria-label="Real OEM certification plaques from our shop"
      className="bg-[var(--color-accent)] text-white py-14 lg:py-16 border-b border-[var(--color-accent-800)] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-pinstripe-navy opacity-80" />
      <div className="pointer-events-none absolute -top-24 right-[-10%] w-[24rem] h-[24rem] rounded-full bg-[var(--color-primary)]/20 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="max-w-3xl mx-auto text-center">
          <p className="eyebrow eyebrow-on-dark">The plaques on our wall</p>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight">
            Real certifications, not stock badges.
          </h2>
          <p className="mt-4 text-base text-white/80 leading-relaxed">
            These are the actual OEM and industry certification plaques
            hanging in our Orlando shop — proof the manufacturer trained our
            technicians and audited our procedures.
          </p>
        </Reveal>

        <Reveal>
          <div
            className="mt-10 lg:mt-12 marquee-fade"
            role="region"
            aria-label="OEM certification badges"
          >
            <ul className="marquee-track marquee-track--slow items-center gap-10 lg:gap-14 py-2">
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
      </div>
    </section>
  );
}
