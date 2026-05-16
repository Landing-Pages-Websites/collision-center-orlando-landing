import { Reveal } from "@/components/Reveal";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { OEM_BRANDS } from "@/lib/content";

/**
 * OEM brand certifications band — task spec requires prominent display.
 * Client confirmed permission to use these brand names.
 * Section ID: #oem-brands
 */
export function OEMBrandsSection() {
  return (
    <section
      id="oem-brands"
      className="bg-[var(--color-surface)] py-20 lg:py-28 border-b border-[var(--color-line)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">OEM-certified for 13 brands</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--color-accent)] leading-tight heading-rule">
            Manufacturer-certified to repair the brands Orlando drives.
          </h2>
          <p className="mt-6 text-lg text-[var(--color-ink-muted)] leading-relaxed">
            OEM certification means the manufacturer has audited our facility,
            trained our technicians, and authorized our procedures. We&apos;re
            certified for the following brands — and we repair every other
            make and model (including European luxury imports) to the same
            OE-procedure standard:
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 lg:gap-4">
          {OEM_BRANDS.map((brand, i) => (
            <Reveal key={brand} delay={i * 30}>
              <div className="bg-white border border-[var(--color-line)] rounded-xl px-5 py-5 flex items-center justify-center text-center hover:border-[var(--color-primary)]/40 hover:shadow-sm transition">
                <span className="font-display text-lg sm:text-xl font-semibold text-[var(--color-accent)] tracking-tight">
                  {brand}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 text-sm text-[var(--color-ink-muted)] max-w-3xl">
            Don&apos;t see your make? We service all makes and models —
            including European luxury vehicles like BMW, Mercedes-Benz, Audi,
            Lexus, Volvo, and more. Call us with your make and model for a
            free repair estimate.
          </p>
        </Reveal>

        <Reveal>
          <PrimaryCTA />
        </Reveal>
      </div>
    </section>
  );
}
