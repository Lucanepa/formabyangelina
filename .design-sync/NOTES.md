# Forma by Angelina — design-sync NOTES

**This repo is the canonical source** for the Forma "Warm clay" design system synced to
Claude Design project `b480410f-8605-4b1d-b95e-7ffd96783776`
(https://claude.ai/design/p/b480410f-8605-4b1d-b95e-7ffd96783776).

Components are this repo's own `src/components/ui/` (24 shadcn primitives), themed in the
Warm Clay brand (clay `#C2674A` / cream / sand / sage / espresso), Inter font.
(The first sync was bootstrapped from wiedisync's borrowed copy; this repo superseded it.)

## Build setup (recreate on a fresh clone)
- **Self-symlink** so the repo acts as the package for synth-entry mode:
  `ln -sfn .. node_modules/forma-ui`
- **Render check needs playwright** — this repo doesn't depend on it (kept lean). Either
  `npm i -D playwright && npx playwright install chromium`, or symlink an existing install:
  `ln -sfn <other-repo>/node_modules/playwright node_modules/playwright` (+ `playwright-core`).
  The chromium browser cache is global (`~/.cache/ms-playwright`). Or pass `--no-render-check`.
- Stage the converter once: `cp -r <skill>/{package-*.mjs,resync.mjs,lib,storybook} .ds-sync/`
  + `(cd .ds-sync && npm i esbuild ts-morph @types/react)`. Then:
  `node .ds-sync/resync.mjs --config .design-sync/config.json --node-modules ./node_modules --out ./ds-bundle --remote .design-sync/.cache/remote-sync.json`

## Gotchas (don't re-debug)
- **Synth-entry mode**: no `dist/`, so the converter synthesizes the bundle from `src/` (the
  symlink makes `node_modules/forma-ui` = this repo). `--entry` is NOT passed.
- **Converter tsconfig comment-stripper bug**: `lib/bundle.mjs` mis-parses `/*` inside path
  strings (`"@/*"`) as a block comment when a `*/` exists later, corrupting the JSON →
  `@/` aliases unresolved. Workaround: `cfg.tsconfig` → `.design-sync/tsconfig.build.json`
  (comment-free, no `*/` anywhere, `paths:{"@/*":["../src/*"]}`). Don't point it at the repo's
  real `tsconfig.app.json`.
- **Inter font family**: the theme's `--font-sans` leads with `'Inter Variable'`, so
  `.design-sync/inter.css` declares the `@font-face` under **both** `'Inter Variable'` and
  `'Inter'` (same woff2). Dropping the `'Inter Variable'` rule re-triggers `[FONT_MISSING]`.
- **Theme**: `.design-sync/forma-theme.src.css` → compiled to `forma-theme.css` via
  `npx @tailwindcss/cli@4.3.0 -i .design-sync/forma-theme.src.css -o .design-sync/forma-theme.css`.
  Re-run after editing the src. `cfg.cssEntry` points at the compiled file (committed).
- **Cards vs exports**: `componentSrcMap` nulls 92 sub-parts (`CardHeader`, `DialogContent`, …)
  so only the 24 primaries get cards; all exports stay importable on `window.FormaUI`.
- **`guidelinesGlob: []`** — keep empty (the default would sweep stray `docs/*.md`).

## Re-sync risks (watch-list)
- **The Claude Design project is in active use**: it contains design-agent-authored pages
  (`about/classes/contact/home/index/shared/site.css/tweaks-panel`, plus self-check files
  `_ds_manifest.json`, `_adherence.oxlintrc.json`). The atomic upload's `writes`/`deletes`
  globs are **scoped to design-system paths only** (`components/**`, `_ds_bundle*`, `styles.css`,
  `fonts/**`, `_vendor/**`, `_preview/**`, `README.md`, `_ds_sync.json`, `_ds_needs_recompile`).
  **NEVER broaden them** — a wildcard delete would wipe the user's site pages.
- Recreate the `node_modules/forma-ui` + `playwright` symlinks on a fresh clone.
- If the brand palette changes, edit `forma-theme.src.css` `:root`/`.dark` + brand scales, recompile.
- Components track this repo's `src/components/ui/` — changes there flow to the next re-sync.
