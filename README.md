# Forma by Angelina

Website for **Forma by Angelina** — a grounded, body-led movement and recovery studio in Zürich.

Built with **Vite + React 19 + TypeScript + Tailwind v4** and a shadcn/ui component set themed in **"Warm clay"** (cream `#F6F1E9` · sand `#E0D2BF` · clay `#C2674A` · sage `#7E8C6A` · espresso `#38312B`), with Inter as the type face. Light + dark mode.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build → dist/
npm run preview  # preview the production build
```

- UI primitives live in `src/components/ui/` (26 shadcn components); page sections in `src/components/sections/`.
- The theme (semantic tokens + clay/sand/sage scales) is in `src/index.css`.
- The matching design system is published to **Claude Design** so design work stays on-brand and maps to this code.

### Tests

```bash
npm run test       # vitest unit tests
npm run test:e2e   # Playwright e2e (auto-starts the dev server)
npm run test:all   # both
```

First Playwright run needs the browser once: `npx playwright install chromium`.

### Content & config

Real copy is left as clearly-marked `TODO`s — fill these before launch:

- **Strings** — `src/i18n/de.json` (primary) + `src/i18n/en.json`: hero tagline, service copy, Angelina's bio, contact details, and the **legal notice** (required for Stripe/TWINT).
- **About photo** — drop in a real image of Angelina (the About section has a placeholder slot).
- **Booking** — `src/config/booking.ts`: Cal.com `username` is set (`formabyangelina`); confirm each event `slug` matches the Cal.com event types and set the CHF price per service.

Dates/times: always go through `formatDate` / `formatTime` in `src/lib/utils.ts` (de-CH, `dd.mm.yyyy` and 24h `HH:MM`). Colours: use the semantic token utilities only (e.g. `bg-primary`, `text-muted-foreground`) — never raw hex.

## Booking & payments

Booking runs entirely through **Cal.com** (hosted free plan) via `@calcom/embed-react`:
the Booking section shows an inline calendar and each service card opens that service's
event in a modal. There is **no custom payment UI** — payments are handled by Cal.com's
Stripe app on paid event types.

### Payment setup (manual, mostly dashboard)

1. **Connect Stripe in Cal.com** — Cal.com → *Apps → Stripe → Install*, then connect the
   Stripe account (Settings → Connect). Use a Swiss Stripe account (CHF payouts).
2. **Set CHF prices per event type** — for each event (`pt-60`, `nutrition-60`,
   `yoga-60`, `physio-60`): *Event type → Apps → Stripe →* enable *Require payment* and
   set the price in **CHF**. Keep these in sync with `priceCHF` in `src/config/booking.ts`.
3. **Enable TWINT in the Stripe dashboard** — Stripe → *Settings → Payment methods* →
   enable **TWINT** (and Cards). TWINT needs a CHF-capable Stripe account and shows up at
   checkout automatically for CHF amounts.
4. **QR-bill for packages (low/no-fee option)** — for multi-session packages or invoiced
   clients, prefer a **Swiss QR-bill** invoice (bank transfer, no card fees) instead of the
   Cal.com/Stripe online flow. Reserve the online Stripe/TWINT path for single drop-in
   sessions where instant payment matters.

> The legal notice / imprint in the footer (`footer.legal` in the i18n files) is
> **required** before enabling Stripe/TWINT — fill it in with the real business details.

## Deploy — Cloudflare Pages (GitHub integration)

The repo is ready for Cloudflare Pages' native GitHub integration:

1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
2. Authorize GitHub and pick **`Lucanepa/formabyangelina`**.
3. Build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 20 or newer (set env var `NODE_VERSION=20` if needed)
4. **Save and Deploy.** Every push to `main` builds + deploys; other branches get preview URLs.

### Custom domain — `formabyangelina.ch`

`formabyangelina.ch` is already on Cloudflare, so:

1. Pages project → **Custom domains → Set up a custom domain**.
2. Add `formabyangelina.ch` (and optionally `www.formabyangelina.ch`).
3. Cloudflare creates the DNS record and provisions the SSL certificate automatically.

## License

MIT
