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

- UI primitives live in `src/components/ui/` (26 shadcn components).
- The theme (semantic tokens + clay/sand/sage scales) is in `src/index.css`.
- The matching design system is published to **Claude Design** so design work stays on-brand and maps to this code.

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
