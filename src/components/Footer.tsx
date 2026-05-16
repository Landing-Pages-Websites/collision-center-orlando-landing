import { BRAND } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-[var(--color-accent)] text-[var(--color-ink-on-dark)] py-12 mt-0">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <p className="text-base font-display text-white/95 font-semibold">
          {BRAND.name}
        </p>
        <p className="text-sm text-white/75 leading-relaxed max-w-md mx-auto">
          OEM-certified collision repair, family-owned in Orlando, FL for 45+ years.
        </p>
        <div className="pt-4 mt-4 border-t border-white/10 space-y-1 text-xs text-white/65">
          <p>
            {BRAND.address.street}, {BRAND.address.city}, {BRAND.address.state}{" "}
            {BRAND.address.zip}
          </p>
          <p>
            Phone:{" "}
            <a
              href={BRAND.phoneHref}
              className="hover:text-white/90 transition"
            >
              {BRAND.phoneDisplay}
            </a>
            {"  ·  "}
            Email:{" "}
            <a
              href={`mailto:${BRAND.email}`}
              className="hover:text-white/90 transition"
            >
              {BRAND.email}
            </a>
          </p>
          <p>{BRAND.hours}</p>
          <p className="pt-3">© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <p className="text-white/40 text-[11px] pt-2 max-w-2xl mx-auto">
            OEM brand logos used by permission. OEM certification and lifetime
            warranty claims apply to qualifying repairs — full terms available
            at our shop.
          </p>
        </div>
      </div>
    </footer>
  );
}
