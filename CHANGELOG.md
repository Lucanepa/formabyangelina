# Changelog

All notable changes to this project are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres
to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] — 2026-06-26

### Added
- Marketing + booking site: Hero, Services (Personal Training, Nutrition Coaching,
  Yoga, Physical Therapy & Fascia Release), About, Booking and Footer sections.
- Cal.com booking via `@calcom/embed-react` — inline embed on the Booking section
  and a per-service modal on each service card. All booking config (Cal.com
  username, event slugs, CHF prices) centralised in `src/config/booking.ts`.
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
