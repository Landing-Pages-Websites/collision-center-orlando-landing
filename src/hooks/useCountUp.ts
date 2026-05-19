"use client";

import { useEffect, useRef, useState } from "react";

/**
 * useCountUp — animate a numeric value from 0 → target once the host
 * element scrolls into view. Returns a ref to attach to the element
 * and the current displayed value.
 *
 * Respects prefers-reduced-motion: reduce by immediately resolving to
 * the target value with no animation.
 *
 * Added 2026-05-18 for the StatsSection animated numbers per the
 * Peter design-feedback edit task.
 */
export function useCountUp(
  target: number,
  durationMs = 1200,
): { ref: React.RefObject<HTMLDivElement | null>; value: number } {
  const ref = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) {
      setValue(target);
      startedRef.current = true;
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return;
        startedRef.current = true;

        const start = performance.now();
        const tick = (now: number) => {
          const elapsed = now - start;
          const t = Math.min(1, elapsed / durationMs);
          // ease-out cubic
          const eased = 1 - Math.pow(1 - t, 3);
          setValue(Math.round(target * eased));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, durationMs]);

  return { ref, value };
}
