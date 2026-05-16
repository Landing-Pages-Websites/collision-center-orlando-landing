"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { PrimaryCTA } from "@/components/PrimaryCTA";
import { FAQS } from "@/lib/content";

/**
 * FAQ — all items collapsed by default.
 */
export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[var(--color-surface)] py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Reveal>
          <p className="eyebrow">Questions we hear most</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--color-accent)] leading-tight heading-rule">
            The questions every Orlando driver asks first.
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.question} delay={i * 50}>
                <div
                  className={`rounded-xl border bg-[var(--color-surface)] transition ${
                    isOpen
                      ? "border-[var(--color-gold)]/60 shadow-md"
                      : "border-[var(--color-line)]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-semibold text-[var(--color-accent)] text-base sm:text-lg leading-snug">
                      {f.question}
                    </span>
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full border border-[var(--color-line)] flex items-center justify-center text-[var(--color-primary)] transition-transform duration-200 ${
                        isOpen ? "rotate-45 bg-[var(--color-gold-50)] border-[var(--color-gold)]" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      isOpen ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <p className="px-5 pb-6 text-[var(--color-ink-muted)] leading-relaxed">
                      {f.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <PrimaryCTA />
        </Reveal>
      </div>
    </section>
  );
}
