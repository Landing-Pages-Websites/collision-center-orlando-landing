"use client";

import { useEffect, useState } from "react";
import { BRAND } from "@/lib/content";

/**
 * Floating sticky CTA — button-ONLY per Anthony 2026-04-24.
 * NEVER include the phone number here, even when has_phone_leads=true.
 * Appears after user scrolls past hero. Pinned bottom-right.
 */
export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.6;
      setVisible(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <a
        href="#contact"
        className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-5 py-3 rounded-full font-semibold shadow-lg shadow-[var(--color-primary)]/30 transition"
      >
        {BRAND.primaryCtaShort}
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </a>
    </div>
  );
}
