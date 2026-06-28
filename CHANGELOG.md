# Changelog

All notable changes to this project are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres
to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **SEO essentials** — `public/robots.txt` + `public/sitemap.xml`; German `<title>` and
  meta description, `canonical`, `theme-color`, Open Graph + Twitter cards, and
  `HealthAndBeautyBusiness` JSON-LD (Zürich, services, CHF 100–200). Share image is an
  interim logo SVG pending a dedicated 1200×630 raster. (Search Console submission +
  prerendering are still open.)
- **Packages** section — prepaid 5- and 10-session bundles (`packages` in
  `src/config/booking.ts`). Cal.com has no native package feature, so each "Buy"
  links to a **Stripe Payment Link** (created in the same Stripe account connected
  to Cal.com); sessions are then booked against a payment-free Cal.com event and
  usage tracked manually. "Buy" stays disabled until a `paymentUrl` is set.

### Changed
- Replaced placeholder `TODO` copy with real content — hero tagline, the four service
  descriptions, and Angelina's bio — in `src/i18n/{de,en}.json`.
- Footer: removed unverified contact details (phone, email, Instagram). Contact is now
  Zürich + the online booking; the Impressum states only verified facts (Forma by
  Angelina · Angelina Bogner · Zürich) pending full legal details.
- About: the photo slot now shows a styled placeholder portrait (real image still to come).

## [1.0.0] — 2026-06-26

### Added
- Marketing + booking site: Hero, Services (Personal Training, Nutrition Coaching,
  Yoga, Physical Therapy & Fascia Release), About, Booking and Footer sections.
- Cal.com booking via `@calcom/embed-react` on the **EU instance** (`www.cal.eu`,
  handle `formabyangelina`). Inline calendar with a **1 / 2-hour** switch at
  **CHF 100/hour** — one event type per length (`coaching`, `coaching-120`) so
  Stripe charges correctly. The four service cards are descriptive focuses that
  link to the Booking section. Config centralised in `src/config/booking.ts`.
- German-first i18n (DE primary, EN secondary) in `src/i18n/{de,en}.json` with a
  minimal `I18nProvider` / `useT` and a language toggle.
- Swiss date/time helpers `formatDate` (dd.mm.yyyy) and `formatTime` (24h HH:MM),
  de-CH, in `src/lib/utils.ts`.
- Dark mode via a `.dark` class on `<html>` with persisted preference.
- Phosphor icons (`@phosphor-icons/react`) for section/content iconography.
- Tests: vitest unit tests (`test`) and Playwright e2e seed tests (`test:e2e`,
  `test:all`).
- README "Payment setup" section (Stripe + TWINT via Cal.com, QR-bill invoicing).

### Notes
- Real content is intentionally left as `TODO` placeholders: hero tagline, service
  copy, Angelina's bio + photo, contact details, socials, and the legal notice
  (the legal notice is required before enabling Stripe/TWINT).
