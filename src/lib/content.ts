// Collision Center Orlando LP — source of truth for all page content.
// Atlas task: ab9cccdd-82cf-45a4-8263-f76b74eeb43a (build 2026-05-15)
// Customer: Collision Center Orlando (49174785-0759-46a9-aa72-ea1a01a5d304)
//
// Source material:
//   - Live site: https://collisionorlando.com/ (about, services, claim language)
//   - Task internal_notes + ad copy: AG1 Collision/Accident, AG2 Insurance Claims, AG3 OEM Certified
//   - Director comment 2026-05-14: all leads (qualified + disqualified) go to Keystone.
//     No on-page disqualification; every submit is a Keystone lead.
//   - GTM: GTM-WQ44GF53 (director comment 2026-05-15)
//   - Production URL: https://book.collisionorlando.com (Entri done)
//   - Address: 6958 Venture Circle, Orlando, FL 32807
//   - Phone: (321) 972-1549

export type ServicePillar = {
  slug: string;
  anchorId: string;
  label: string;
  heading: string;
  body: string;
  outcomes: string[];
};

export type FAQ = {
  question: string;
  answer: string;
};

export const BRAND = {
  name: "Collision Center Orlando",
  fullName: "Collision Center Orlando",
  tagline:
    "Fast, factory-spec collision repair for every make and model — including luxury imports.",
  heroHook:
    "Your trusted Orlando collision center. OEM-certified for 13 brands, working directly with your insurance, backed by a lifetime warranty.",
  positioning:
    "Family-owned for over 45 years, Collision Center Orlando is the Greater Orlando shop drivers trust to put their vehicle back to pre-accident condition. We work directly with your insurance company, repair using OE factory procedures, and stand behind every job with a lifetime warranty on workmanship.",
  shortPositioning:
    "Family-owned, OEM-certified collision repair in Orlando. We handle the insurance, you get your car back right — backed by a lifetime warranty.",
  phone: "321-972-1549",
  phoneDisplay: "(321) 972-1549",
  phoneHref: "tel:+13219721549",
  email: "radorno@collisionorlando.com",
  address: {
    street: "6958 Venture Circle",
    city: "Orlando",
    state: "FL",
    zip: "32807",
  },
  hours: "Mon–Fri · 8:00 AM – 5:30 PM",
  primaryCtaLabel: "Get My Free Estimate",
  primaryCtaShort: "Free Estimate",
  ctaSubLabel: "Free estimate · We handle the insurance",
} as const;

// Trust band stats — sourced from live collisionorlando.com about/services + task spec
export const STATS: { value: string; label: string }[] = [
  { value: "45+ yrs", label: "Family-owned Orlando collision experts" },
  { value: "13", label: "OEM brand certifications, including luxury imports" },
  { value: "Lifetime", label: "Warranty on every collision repair" },
  { value: "All", label: "Makes and models repaired to factory spec" },
];

// "Why drivers are stressed" framing — sourced from the AG1/AG2/AG3 ad copy
// (accident anxiety, insurance friction, getting it done right the first time).
export const PAIN_POINTS: {
  title: string;
  body: string;
}[] = [
  {
    title: "Shops that skip OE procedures",
    body:
      "Modern vehicles have sensor-calibrated bumpers, structural foams, and bonded aluminum panels — repaired wrong, they fail crash tests and trigger warranty problems. Many shops still use generic procedures and aftermarket parts because it's faster. We follow OE factory repair procedures with OEM parts on every job, so your vehicle goes back to true pre-accident condition.",
  },
  {
    title: "Fighting your insurance company alone",
    body:
      "After an accident, the last thing you want is to argue with an adjuster about what your car needs. We work directly with every major insurance carrier, document the damage properly, and fight for the OE repairs, parts, and labor your policy entitles you to — so you can focus on getting back on the road.",
  },
  {
    title: "Long downtime and rental headaches",
    body:
      "A car in the shop for weeks with no clear ETA is a problem. We schedule your repair, coordinate the rental (we'll even arrange pick-up and drop-off), set a clear timeline, and keep you updated throughout the repair so you're never wondering what's happening with your vehicle.",
  },
];

// OEM brand certifications — from task spec (client has permission to display)
export const OEM_BRANDS: string[] = [
  "Honda",
  "Acura",
  "Chrysler",
  "Jeep",
  "RAM",
  "Dodge",
  "Ford",
  "Genesis",
  "Nissan",
  "Kia",
  "Hyundai",
  "Infiniti",
  "Fiat",
];

// Per-service sections — each gets its own anchor, H3, and 80-150 word body
export const SERVICES: ServicePillar[] = [
  {
    slug: "collision-repair",
    anchorId: "collision-repair",
    label: "Collision Repair",
    heading: "Full Collision & Auto Body Repair",
    body:
      "From a minor parking-lot tap to a major front-end collision, our OEM-certified technicians return your vehicle to pre-accident condition using OE factory procedures and OEM parts. We handle the full job — frame straightening, structural panel replacement, bumper and quarter-panel restoration, sensor and ADAS recalibration. Every repair is inspected against factory specs before it leaves the shop. Family-owned for over 45 years, we know what it takes to do it right the first time, and we back our workmanship with a lifetime warranty so you can drive confidently for as long as you own the car.",
    outcomes: [
      "OE factory repair procedures",
      "OEM parts on certified brands",
      "Lifetime warranty on workmanship",
    ],
  },
  {
    slug: "insurance-claims",
    anchorId: "insurance-claims",
    label: "Insurance Claims",
    heading: "Insurance Claim Specialists — We Handle the Paperwork",
    body:
      "Filing a collision claim is stressful. We work directly with your insurance company on your behalf — from initial estimate through final inspection — so you don't have to learn the policy language overnight. Our team documents every damaged component with photos, factory diagrams, and OE labor times, then fights for the proper OE repairs and parts your policy covers. We're approved by every major carrier (State Farm, GEICO, Progressive, Allstate, USAA, and more), set up rentals and towing the same day, and coordinate every step of the claim from estimate to final repair sign-off.",
    outcomes: [
      "Direct billing with all major insurers",
      "Free written estimates",
      "Rental + towing coordination",
    ],
  },
  {
    slug: "oem-certified",
    anchorId: "oem-certified",
    label: "OEM Certified",
    heading: "OEM Certified for 13 Brands, All Makes & Models",
    body:
      "Manufacturer certification isn't a sticker — it's training, tooling, and authorized repair procedures the carmaker requires before they'll vouch for a shop. Collision Center Orlando is OEM-certified for Honda, Acura, Chrysler, Jeep, RAM, Dodge, Ford, Genesis, Nissan, Kia, Hyundai, Infiniti, and Fiat, and our factory-trained technicians repair every other make and model — including luxury imports — to the same standard. That means your car is repaired with the right tools, the right parts, and the right procedures, preserving safety systems, factory warranties, and resale value the way the manufacturer intended.",
    outcomes: [
      "OEM certified for 13 brands",
      "Factory-trained technicians",
      "Luxury imports welcome",
    ],
  },
  {
    slug: "paint-refinishing",
    anchorId: "paint-refinishing",
    label: "Paint & Refinishing",
    heading: "Paint Matching & Refinishing",
    body:
      "Our state-of-the-art paint booth and OEM-certified refinishing technicians deliver precise color matches and a factory-quality finish on every panel. Whether you need a single spot repair, a full panel blend, or a complete refinish after a heavy collision, we use manufacturer-approved paints, primers, and clear coats — applied in a controlled, dust-free environment and cured under heat to factory specifications. The result is a finish that matches the original paint code exactly and holds up to Florida sun, salt air, and daily driving for years to come, protecting both appearance and resale value.",
    outcomes: [
      "Computerized paint matching",
      "Manufacturer-approved finishes",
      "Heat-cured for lasting durability",
    ],
  },
  {
    slug: "dent-scratch-repair",
    anchorId: "dent-scratch-repair",
    label: "Dent & Scratch Repair",
    heading: "Paintless Dent Removal & Scratch Repair",
    body:
      "Not every ding requires repainting. When the original factory paint is intact, our Paintless Dent Removal (PDR) technicians can often restore the panel to its original shape without disturbing the finish — preserving the OEM paint that carries the most value. For scratches, we'll evaluate the depth: surface scuffs polish out, while deeper marks get a precision spot refinish with a perfect color match. Either way, you save the time and cost of a full repaint and keep your vehicle looking factory-fresh. Most PDR jobs are completed same-day with no detectable evidence of the original damage.",
    outcomes: [
      "Paintless Dent Removal (PDR)",
      "Preserves original factory paint",
      "Often completed same-day",
    ],
  },
  {
    slug: "detailing-rentals",
    anchorId: "detailing-rentals",
    label: "Detailing & Rentals",
    heading: "Detailing, Rentals & Pick-Up Service",
    body:
      "We make the whole experience easier. Every vehicle is professionally detailed after repair — interior vacuumed, exterior washed, paint polished — so you pick up a car that looks better than it did before the accident. Need a rental? We coordinate with major rental partners and can arrange pick-up and drop-off so you're never stuck without transportation. From the moment you call until the moment you drive away, our team handles the logistics so you can focus on the rest of your life. That's been the Collision Center Orlando approach for 45+ years.",
    outcomes: [
      "Professional post-repair detailing",
      "Rental coordination, pick-up & drop-off",
      "Single point of contact start to finish",
    ],
  },
];

// "Why us" credibility points (replaces ICP)
export const ICP_POINTS: { title: string; body: string }[] = [
  {
    title: "45+ years family-owned in Orlando",
    body:
      "We're not a national chain or a quick-buck operation. Collision Center Orlando has been family-owned and operated for more than four decades, serving Orlando, Winter Park, Altamonte Springs, Kissimmee, Sanford, Apopka, Clermont, Windermere, Maitland, and UCF. When we sign our name on a repair, our reputation is on the line — and our reputation in this town is everything.",
  },
  {
    title: "OEM-certified for 13 brands",
    body:
      "Certification means the manufacturer audits our facility, trains our techs, and authorizes our procedures. We carry that certification for Honda, Acura, Chrysler, Jeep, RAM, Dodge, Ford, Genesis, Nissan, Kia, Hyundai, Infiniti, and Fiat. We also repair every other make and model — including luxury imports — to the same OE-procedure standard, so your safety systems, warranties, and resale value stay intact.",
  },
  {
    title: "Lifetime warranty on workmanship",
    body:
      "We back every collision repair with a lifetime warranty on our workmanship for as long as you own the vehicle. That's not marketing language — it's the standard we hold ourselves to, the same one our customers have trusted for 45+ years. If something isn't right, you bring it back and we make it right.",
  },
];

// 5-phase process — from accident to drive-away
export const PROCESS_STEPS: { step: number; title: string; body: string }[] = [
  {
    step: 1,
    title: "FREE ESTIMATE",
    body:
      "Bring your vehicle in or send us photos online — we'll provide a free written estimate within one business day. No appointment required, no obligation. Our estimator walks you through the damage, the parts and procedures required, and what to expect from your insurance carrier.",
  },
  {
    step: 2,
    title: "INSURANCE CLAIM",
    body:
      "We work directly with your insurance company to handle the claim, document the damage with photos and factory diagrams, and negotiate for the OE parts and labor your policy entitles you to. We're approved by all major carriers — you don't need to chase paperwork or fight for what's fair.",
  },
  {
    step: 3,
    title: "RENTAL & TOWING",
    body:
      "Need a rental? We coordinate with rental partners and can even arrange pick-up and drop-off. If your vehicle isn't drivable, we'll arrange towing to our shop. You leave the lot with transportation and a clear timeline.",
  },
  {
    step: 4,
    title: "FACTORY-SPEC REPAIR",
    body:
      "OEM-certified technicians repair your vehicle using OE factory procedures and the right parts for your make and model — structural welding, panel replacement, paint refinishing, ADAS sensor recalibration. Every repair is inspected against factory specifications before it leaves the shop.",
  },
  {
    step: 5,
    title: "DETAIL & DELIVERY",
    body:
      "Before you pick up your vehicle, it's professionally detailed inside and out. We walk you through the completed repairs, explain the lifetime workmanship warranty, and answer any questions. Most repairs are completed faster than the insurance estimate suggests.",
  },
];

// FAQs — sourced from claim language on live site + AG1/AG2 ad copy themes
export const FAQS: FAQ[] = [
  {
    question: "Do you work directly with my insurance company?",
    answer:
      "Yes. We work directly with every major insurance carrier — State Farm, GEICO, Progressive, Allstate, USAA, and more. We document the damage, write the estimate using OE factory labor times, and negotiate on your behalf for the proper parts and repairs. You don't need to manage the claim yourself.",
  },
  {
    question: "Are repairs covered by a warranty?",
    answer:
      "Yes — every collision repair carries a lifetime warranty on our workmanship for as long as you own the vehicle. OEM parts carry their own manufacturer warranties on top of that. If something isn't right, you bring it back and we make it right.",
  },
  {
    question: "How long will my repair take?",
    answer:
      "It depends on the severity of the damage and parts availability. A typical bumper-and-fender repair runs 3–5 business days; a major collision can take 2–3 weeks. We give you a written timeline at intake and update you throughout the repair so you're never wondering where things stand.",
  },
  {
    question: "Will my vehicle be repaired with OEM parts?",
    answer:
      "On every job, we follow OE factory repair procedures. Whether OEM parts are used depends on your insurance policy and the specific component — we'll always advocate for OEM parts on certified brands and explain the trade-offs if your policy only covers aftermarket. The choice stays with you.",
  },
  {
    question: "Do you handle luxury and import vehicles?",
    answer:
      "Yes. We are OEM-certified for 13 brands including luxury imports (Genesis, Infiniti, Acura), and our factory-trained technicians repair every other make and model — including European luxury vehicles — to the same OE-procedure standard. Your safety systems, factory warranties, and resale value stay intact.",
  },
  {
    question: "Can you arrange a rental car?",
    answer:
      "Yes. We coordinate with rental partners and can even pick you up at our location and drop your rental off when your repair is complete. If your policy covers a rental, we handle the billing directly with your insurer.",
  },
  {
    question: "What if my car isn't drivable?",
    answer:
      "We'll arrange towing to our shop. Just call us at (321) 972-1549 and we'll dispatch a tow and coordinate the rental at the same time so you're not stranded.",
  },
];

// Form fields are per task spec. Director comment 2026-05-14 mandates ALL submits
// (qualified AND disqualified per spec qualifying questions) route to Keystone.
// We keep the qualifying questions on-page for ad-platform conversion event
// segmentation, but EVERY submit POSTs to the lead API (no early-return logic).

export const SITUATION_OPTIONS = [
  { value: "accident-collision", label: "I was recently in an accident / collision", qualifies: true },
  { value: "non-accident-damage", label: "My vehicle has dents, scratches, or paint damage (not from an accident)", qualifies: true },
  { value: "insurance-estimate", label: "I need a repair estimate for insurance purposes", qualifies: true },
  { value: "other-exploring", label: "Other / Just exploring", qualifies: false },
] as const;

export const INSURANCE_OPTIONS = [
  { value: "active-claim", label: "Yes — I have an active claim / will be filing one", qualifies: true },
  { value: "insurance-but-oop", label: "Yes — but I'm paying out of pocket", qualifies: true },
  { value: "no-oop", label: "No — paying out of pocket", qualifies: true },
  { value: "not-sure", label: "Not sure yet", qualifies: false },
] as const;

export type SituationValue = (typeof SITUATION_OPTIONS)[number]["value"];
export type InsuranceValue = (typeof INSURANCE_OPTIONS)[number]["value"];

export function qualifies(
  situation: SituationValue | "",
  insurance: InsuranceValue | "",
): boolean {
  const situationOk =
    SITUATION_OPTIONS.find((o) => o.value === situation)?.qualifies ?? false;
  const insuranceOk =
    INSURANCE_OPTIONS.find((o) => o.value === insurance)?.qualifies ?? false;
  return situationOk && insuranceOk;
}
