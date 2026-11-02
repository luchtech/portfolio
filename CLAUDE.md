# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # start the Astro dev server (localhost:4321)
npm run build         # production build to ./dist/
npm run preview       # preview the production build locally
npm run astro -- --help   # Astro CLI help (e.g. `npm run astro check`)
```

When driving the dev server from an agent session, run it in the background so it doesn't block the terminal:

```bash
astro dev --background
astro dev stop
astro dev status
astro dev logs
```

There is no test suite, linter, or type-check script configured in this project.

## Architecture

This is a single-page Astro site (no framework islands, no client-side JS beyond what Astro emits by default). Everything renders from one page.

- **[src/pages/index.astro](src/pages/index.astro)** is the only route and contains the entire page's markup/layout, section by section (hero, tools strip, LaraKube deep-dive, skills, experience, contact, footer).
- **[src/data/site.ts](src/data/site.ts)** holds *all* copy and content as typed exports (`person`, `hero`, `tools`, `larakube`, `skills`, `experience`, `contact`, `footer`, etc.). Content edits belong here, not in the template — `index.astro` only maps this data into markup.
- **[src/components/](src/components/)**:
  - `Icon.astro` renders a [simple-icons](https://simpleicons.org) brand logo as inline SVG at build time from a slug (e.g. `"laravel"`). It auto-corrects near-white *and* near-black brand colors to the theme-adaptive `--ink` token, so logos stay visible on both the light paper and the dark panel (the toggle below). Brands simple-icons doesn't carry (AWS, LinkedIn) fall back to the Iconify `logos` collection instead, rendered on a fixed light chip since those ship baked-in official colors that assume a light surface.
  - `Chip.astro` wraps `Icon` into a tech pill; used for tool/skill lists.
  - `Lucide.astro` hand-inlines a small fixed set of Lucide icon paths (no icon package dependency) — extend its `paths` map and `Props['name']` union to add more.
- **[src/styles/global.css](src/styles/global.css)** is the single stylesheet for the whole site (not component-scoped `<style>` blocks), imported once from `index.astro`. Theming is via CSS custom properties defined on `:root` (`--ink`, `--accent`, `--paper`, `--muted`, etc.).
- **[references/mockup/](references/mockup/)** is a Figma-exported React/Vite prototype (`src/App.tsx`) kept as a *design and copy reference only* — it is not live code and is not built or deployed. When content or layout drifts between the Astro build and this mockup, treat the mockup as the source of truth for wording, structure, and the design system, and port it into `site.ts`/`index.astro` rather than editing `references/mockup/` itself.

## Local dev environment

This project is run locally through LaraKube (see `.larakube.json`): the dev server executes inside a k3s pod behind Traefik at `https://portfolio.test`, not directly on the host. `astro.config.mjs` configures Vite's `server.allowedHosts`/HMR accordingly (Vite 6+ otherwise rejects the Traefik-proxied `Host` header), and `watch.usePolling` because inotify doesn't reliably cross the hostPath/VirtioFS boundary on macOS.

`Dockerfile.static` + `Caddyfile` are the real production-serving path: the Dockerfile builds the Astro `dist/` output and bakes it into a Caddy image (hashed-asset caching, a handful of security headers, `/404.html` error handling); `Caddyfile` expects `dist/404.html` to exist, which Astro only emits if `src/pages/404.astro` is present.

Production target is self-hosted: the built image deploys to `luchtech-vps` (a k3s box) behind Traefik, via LaraKube CLI/Desktop, which generates the CI/CD for it — not Cloudflare Pages (the footer copy was updated to match once this was decided). Source lives at `github.com/luchtech/portfolio`.
