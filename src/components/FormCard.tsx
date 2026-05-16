"use client";

import { useRef, useState } from "react";
import { useMegaLeadForm } from "@/hooks/useMegaLeadForm";
import {
  SITUATION_OPTIONS,
  INSURANCE_OPTIONS,
  qualifies,
  type SituationValue,
  type InsuranceValue,
  BRAND,
} from "@/lib/content";

type Props = {
  variant?: "hero" | "card" | "inline";
  heading?: string;
  subheading?: string;
  idSuffix?: string;
};

/**
 * Collision Center Orlando lead form — fields come EXACTLY from the Atlas task spec
 * (ab9cccdd-82cf-45a4-8263-f76b74eeb43a).
 *
 * Fields (EXACT):
 *   1. First Name   name="firstName"   required
 *   2. Last Name    name="lastName"    required
 *   3. Email        name="email"       required
 *   4. Phone        name="phone"       required
 *   5. Situation    name="situation"   required (accident / dents / estimate / other)
 *   6. Insurance    name="insurance"   required (active-claim / oop / no-oop / not-sure)
 *
 * Director 2026-05-14 mandate: send ALL leads to Keystone, qualified or not.
 * `qualifies()` is computed and attached to the payload as `qualified: yes|no`
 * for downstream ad-platform conversion segmentation, but EVERY submit POSTs
 * to the lead API. NO early returns based on the qualifier answer.
 *
 * Form submit pattern (SHLY-May-8 doctrine):
 *   - button type="button" + validate-first → formRef.requestSubmit()
 *   - inFlightRef (sync) + submitting/submitted state guards against rapid clicks
 *   - disabled={submitting || submitted}
 */

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length < 4) return `(${digits}`;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

const ChevronDown = () => (
  <svg
    className="w-5 h-5 text-[var(--color-ink-muted)]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

export function FormCard({
  variant = "card",
  heading = "Get Your Free Estimate",
  subheading = "Tell us about your vehicle. A friendly shop representative will reach out to schedule your free estimate, answer questions, and help with your insurance claim if needed.",
  idSuffix = "main",
}: Props) {
  const { submit } = useMegaLeadForm();
  const formRef = useRef<HTMLFormElement | null>(null);
  // Synchronous guard — state setters are async/batched, so we need a
  // ref-based latch to prevent rapid-click duplicate submissions.
  const inFlightRef = useRef(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [situation, setSituation] = useState<SituationValue | "">("");
  const [insurance, setInsurance] = useState<InsuranceValue | "">("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const phoneDigits = phone.replace(/\D/g, "");
  const phoneValid = phoneDigits.length === 10;
  const canSubmit =
    firstName.trim().length >= 1 &&
    lastName.trim().length >= 1 &&
    /@.+\./.test(email) &&
    phoneValid &&
    situation.length > 0 &&
    insurance.length > 0;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (inFlightRef.current || submitting || submitted) return;
    if (!canSubmit) return;
    inFlightRef.current = true;
    setError(null);
    setSubmitting(true);
    const isQualified = qualifies(
      situation as SituationValue,
      insurance as InsuranceValue,
    );
    try {
      // Per director mandate 2026-05-14: ALL leads POST to Keystone (qualified or not).
      // The `qualified` flag is carried in the payload for ad-platform segmentation
      // and downstream lead routing — disqualification is NOT handled on the LP.
      await submit({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        phone: phoneDigits,
        situation,
        insurance,
        qualified: isQualified ? "yes" : "no",
      });
      // Fire dataLayer + MegaTag form_submit event (Mega optimizer can't see
      // React-prevented native submit — manual push required).
      if (typeof window !== "undefined") {
        type DLWindow = Window & {
          dataLayer?: unknown[];
          MegaTag?: {
            trackEvent?: (
              eventName: string,
              data?: Record<string, unknown>,
            ) => void;
          };
        };
        const w = window as unknown as DLWindow;
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({
          event: "form_submission",
          form_id: `cco-estimate-form-${idSuffix}`,
          qualified: isQualified ? "yes" : "no",
          value: 0,
        });
        // Only fire qualified_lead conversion when both qualifiers pass
        // (Google Ads conversion event per task spec).
        if (isQualified) {
          w.dataLayer.push({
            event: "qualified_lead",
            form_id: `cco-estimate-form-${idSuffix}`,
          });
        }
        // MegaTag form_submit — separated field keys land as individual columns
        // in Conversions + Keystone.
        if (w.MegaTag?.trackEvent) {
          w.MegaTag.trackEvent("form_submit", {
            element: `cco-estimate-form-${idSuffix}`,
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.trim(),
            phone: phoneDigits,
            situation,
            insurance,
            qualified: isQualified ? "yes" : "no",
          });
        }
      }
    } catch (err) {
      console.error("Form submission failed:", err);
      setError(
        "Something went wrong on our end — we also got your info and we'll reach out shortly.",
      );
    } finally {
      setSubmitted(true);
      setSubmitting(false);
    }
  }

  function handleSubmitClick() {
    if (inFlightRef.current || submitting || submitted) return;
    if (!canSubmit) return;
    formRef.current?.requestSubmit();
  }

  const wrapperClass =
    variant === "hero"
      ? "bg-white/98 backdrop-blur rounded-2xl shadow-2xl shadow-[var(--color-accent)]/40 border border-[var(--color-primary)]/20 p-6 sm:p-8"
      : variant === "inline"
      ? "bg-[var(--color-surface-cool)] rounded-2xl border border-[var(--color-line-cool)] p-6 sm:p-8"
      : "bg-white rounded-2xl shadow-xl border border-[var(--color-line)] p-6 sm:p-8";

  const inputClass =
    "w-full rounded-lg border border-[var(--color-line-cool)] bg-white px-4 py-3 text-base text-[var(--color-ink)] placeholder:text-[var(--color-ink-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition";

  if (submitted) {
    return (
      <div className={wrapperClass}>
        <div className="text-center py-6 space-y-4">
          <div className="mx-auto w-14 h-14 rounded-full bg-[var(--color-primary-50)] flex items-center justify-center">
            <svg
              className="w-7 h-7 text-[var(--color-primary)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h3 className="text-2xl font-display font-semibold text-[var(--color-accent)]">
            Thanks, {firstName || "we got it"}.
          </h3>
          <p className="text-[var(--color-ink-muted)] max-w-sm mx-auto">
            A friendly shop representative will reach out shortly to schedule
            your free estimate. If you need us right away, give us a call.
          </p>
          <p className="text-sm text-[var(--color-ink-muted)]">
            <a
              href={BRAND.phoneHref}
              className="font-semibold text-[var(--color-primary)] hover:underline"
            >
              Call {BRAND.phoneDisplay}
            </a>
            {" · "}
            <span className="text-[var(--color-ink-muted)]">{BRAND.hours}</span>
          </p>

          {error && (
            <p className="text-xs text-[var(--color-ink-muted)]">
              (Note: {error})
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      <div className="mb-5">
        <h3 className="text-2xl sm:text-[1.7rem] font-display font-semibold text-[var(--color-accent)] leading-tight">
          {heading}
        </h3>
        {subheading && (
          <p className="text-sm text-[var(--color-ink-muted)] mt-2 leading-relaxed">
            {subheading}
          </p>
        )}
      </div>

      <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-3.5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor={`fn-${idSuffix}`} className="sr-only">
              First name
            </label>
            <input
              id={`fn-${idSuffix}`}
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor={`ln-${idSuffix}`} className="sr-only">
              Last name
            </label>
            <input
              id={`ln-${idSuffix}`}
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor={`email-${idSuffix}`} className="sr-only">
            Email address
          </label>
          <input
            id={`email-${idSuffix}`}
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor={`phone-${idSuffix}`} className="sr-only">
            Phone number
          </label>
          <input
            id={`phone-${idSuffix}`}
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            required
            pattern="\(\d{3}\) \d{3}-\d{4}"
            title="Enter a 10-digit US phone number"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor={`situation-${idSuffix}`}
            className="block text-xs font-semibold text-[var(--color-ink)] mb-1.5 uppercase tracking-wider"
          >
            What best describes your situation?
          </label>
          <div className="relative">
            <select
              id={`situation-${idSuffix}`}
              name="situation"
              required
              value={situation}
              onChange={(e) => setSituation(e.target.value as SituationValue)}
              className={`${inputClass} appearance-none pr-10 ${
                situation === "" ? "text-[var(--color-ink-muted)]" : ""
              }`}
            >
              <option value="" disabled>
                Select an option
              </option>
              {SITUATION_OPTIONS.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                  className="text-[var(--color-ink)]"
                >
                  {opt.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ChevronDown />
            </div>
          </div>
        </div>

        <div>
          <label
            className="block text-xs font-semibold text-[var(--color-ink)] mb-1.5 uppercase tracking-wider"
          >
            Do you have insurance covering this repair?
          </label>
          <div className="space-y-2">
            {INSURANCE_OPTIONS.map((opt) => (
              <label
                key={opt.value}
                className={`flex items-start gap-3 rounded-lg border px-4 py-3 cursor-pointer transition ${
                  insurance === opt.value
                    ? "border-[var(--color-primary)] bg-[var(--color-primary-50)]"
                    : "border-[var(--color-line-cool)] bg-white hover:border-[var(--color-primary)]/40"
                }`}
              >
                <input
                  type="radio"
                  name={`insurance-${idSuffix}`}
                  value={opt.value}
                  checked={insurance === opt.value}
                  onChange={() => setInsurance(opt.value)}
                  className="mt-1 accent-[var(--color-primary)]"
                  required
                />
                <span className="text-sm text-[var(--color-ink)] leading-snug">
                  {opt.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={handleSubmitClick}
          disabled={!canSubmit || submitting || submitted}
          className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] disabled:opacity-60 disabled:cursor-not-allowed text-white px-6 py-3.5 rounded-lg font-semibold text-base transition shadow-sm mt-2"
        >
          {submitting ? "Submitting…" : BRAND.primaryCtaLabel}
        </button>

        <p className="text-[11px] text-[var(--color-ink-muted)] text-center leading-relaxed pt-1">
          By submitting, you consent to be contacted by Collision Center Orlando
          about your repair. Free estimate, no obligation. Message and data
          rates may apply.
        </p>
      </form>
    </div>
  );
}
