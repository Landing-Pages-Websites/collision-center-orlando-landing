import Image from "next/image";
import { FormCard } from "@/components/FormCard";
import { Reveal } from "@/components/Reveal";
import { BRAND } from "@/lib/content";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--color-accent)] text-white py-20 lg:py-28"
    >
      {/* Subtle shop-exterior photograph behind the gradient — adds depth
          without competing with the form (Peter design feedback 2026-05-18). */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/shop-exterior.jpg"
          alt=""
          fill
          sizes="100vw"
          aria-hidden="true"
          className="object-cover opacity-20"
        />
      </div>
      {/* Ambient glows + pinstripe */}
      <div className="absolute inset-0 -z-0 bg-pinstripe-navy opacity-80" />
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute top-0 -left-32 w-[32rem] h-[32rem] rounded-full bg-[var(--color-primary)]/15 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center z-10">
        <Reveal className="space-y-6 lg:max-w-xl">
          <p className="eyebrow eyebrow-on-dark">Get started</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight heading-rule heading-rule-on-dark">
            Free estimate in one business day. We&apos;ll handle the insurance.
          </h2>
          <p className="text-lg text-white/85 leading-relaxed">
            {BRAND.shortPositioning} Tell us about your vehicle and a friendly
            shop representative will be in touch — no obligation, no pressure.
          </p>

          <ul className="space-y-3 pt-2">
            {[
              "Free written estimate within 1 business day",
              "We work directly with every major insurance carrier",
              "Rental coordination + pick-up/drop-off available",
              "Lifetime warranty on workmanship — as long as you own the car",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3 text-white/90">
                <span className="mt-1 w-5 h-5 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center flex-shrink-0">
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
                <span className="text-base leading-snug">{b}</span>
              </li>
            ))}
          </ul>

          {/* Direct contact row */}
          <div className="pt-4 space-y-2 text-white/85">
            <p className="text-sm">
              Prefer the phone?{" "}
              <a
                href={BRAND.phoneHref}
                className="text-[var(--color-gold-100)] font-semibold underline decoration-white/40 underline-offset-4 hover:text-white"
              >
                {BRAND.phoneDisplay}
              </a>
            </p>
            <p className="text-sm text-white/70">
              {BRAND.address.street}, {BRAND.address.city},{" "}
              {BRAND.address.state} {BRAND.address.zip} · {BRAND.hours}
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:pl-2">
          <FormCard
            variant="hero"
            idSuffix="contact"
            heading="Get Your Free Estimate"
            subheading="Tell us about your vehicle. A friendly shop representative will reach out to schedule your free estimate."
          />
        </Reveal>
      </div>
    </section>
  );
}
