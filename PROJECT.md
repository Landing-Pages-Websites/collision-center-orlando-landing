# WealthShield Partnership LP — Project Record

**Atlas task:** 4d6d40bf-b834-47b7-bfa4-8452ec1a2491
**Customer:** WealthShield Partnership (`e3bc7ed4-c985-4878-ab92-a511892808b6`)
**Built:** 2026-04-24
**Status:** v1 shipped, site registered + form + events verified. Pending: Meta Pixel ID (TBD on task), CTM account ID, optional headshots.

## Live
- Preview: https://wealthshield-landing.vercel.app
- Vercel project: `wealthshield-landing` (prj_T6lLzOzBLgmLZkXYp0ZAQ5vz6Lff) — MEGA team
- GitHub repo: NONE YET — git remote was detached (see note below). Needs a fresh `Landing-Pages-Websites/wealthshield-landing` repo created + first push before DNS.

## Mega Admin registration
- customer_id: `e3bc7ed4-c985-4878-ab92-a511892808b6`
- site_id: `f8adeefa-6517-4242-b129-686bc3237567`
- site_key: `sk_mod24ieb_l0palnvddqm` (Published Active ✅)
- site_type: OWNED
- ad_org_id: `7c791ac0-d024-4e03-9d0c-5d39365bc5d3`
- source_provider (hook): `wealthshield-landing`

## Pending tracking IDs
- GTM: TBD (empty string)
- Meta Pixel: TBD per task input_data (`"TBD - need to create"`)
- GA4: TBD
- CTM account: TBD — script removed from layout pending Anthony-provided tctm-id

## Form
- All 6 task fields present: firstName, lastName, email, phone, clientCount (dropdown), explore (dropdown)
- Hero form + Contact footer form
- Qualification: `explore∈{definitely-yes,maybe}` AND `clientCount∈{11-25, 26-50, 50+}` → auto-redirect to Calendly
- Calendly URL: https://calendly.com/wdvince/new-meeting (from KB)
- E2E verified 2026-04-24T15:35 — form fired, event in Mega Events with fields broken out, lead in Keystone, no dupes, empty blocked

## Anchors (14, submitted to Atlas output_data)
hero → opportunity → challenges → how-it-works → who-its-for → services-intro → retirement-planning → tax-strategy → life-protection → estate-wealth → team → testimonials → faq → contact

## ⚠️ GOTCHA — git remote incident
When this project was scaffolded (early heartbeat), it was cloned as a filesystem copy of `projects/forwardit-landing/`. The `.git` directory was NOT reinitialized, so `origin` pointed at `Landing-Pages-Websites/forwardit-landing`. Any `git push` from this dir would have overwritten ForwardIT's LIVE landing page (running ads).

Fixed 2026-04-24T15:11: `git remote remove origin`. No commits were pushed before the fix. The Vercel project is its own (prj_T6lLzOzBLgmLZkXYp0ZAQ5vz6Lff), deployed via CLI (no Git integration), so Vercel was unaffected. Before any future DNS/custom-subdomain work: create a NEW `wealthshield-landing` GitHub repo in `Landing-Pages-Websites` org and push fresh from here.
