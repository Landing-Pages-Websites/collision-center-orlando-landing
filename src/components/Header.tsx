"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BRAND } from "@/lib/content";

/**
 * Collision Center Orlando header.
 * Logo (dark blue + red on transparent) sits on the white/light-gray header
 * with good contrast in both top and scrolled states.
 * Right side: phone link (visible ≥sm) + primary CTA button.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur border-b border-[var(--color-line)] shadow-sm"
          : "bg-white/90 backdrop-blur"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3">
        <Link
          href="#hero"
          className="flex items-center group"
          aria-label={`${BRAND.name} home`}
        >
          <Image
            src="/images/logo.png"
            alt={`${BRAND.name} logo`}
            width={400}
            height={120}
            priority
            className="h-12 sm:h-14 w-auto"
          />
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={BRAND.phoneHref}
            className="hidden sm:inline-flex items-center gap-2 border border-[var(--color-primary)]/30 bg-white hover:bg-[var(--color-primary-50)] hover:border-[var(--color-primary)] text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-primary-hover)] px-4 py-2 sm:py-2.5 rounded-lg transition shadow-sm"
          >
            <svg
              className="w-4 h-4 text-[var(--color-primary)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            {BRAND.phoneDisplay}
          </a>
          <a
            href="#contact"
            className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg font-semibold text-sm sm:text-base transition shadow-sm"
          >
            {BRAND.primaryCtaShort}
          </a>
        </div>
      </div>
    </header>
  );
}
