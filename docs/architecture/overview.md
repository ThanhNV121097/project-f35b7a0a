# Architecture overview

## Shape and stack

Static frontend only. Next.js 15 App Router, TypeScript, Tailwind v3, and ESLint. No backend, database, API, migrations, or runtime secrets: all approved content is static and booking remains informational.

## Layout

```text
code/frontend/
  app/                 App Router composition root and shared tokens
  components/          One default-export story component per story
  components/*.module.css
  lib/mock/            Story fixtures until no API is needed
  public/              Static assets
```

`app/page.tsx` stays a Server Component composition root. Story work owns one component, one CSS module, optional mock module, and one page import/render line. Shared visual values live only in `app/globals.css`; story CSS uses `var(--token)` without fallbacks.

## Conventions

- Components use `export default function PascalCaseName()`.
- Add literal first line `"use client"` only where browser events, hooks, refs, or browser APIs are used.
- Customer copy is Vietnamese. Use semantic HTML, meaningful image alt text, native `details/summary` for FAQ, and links for routes.
- Routes: `/`, `/dat-hoa`, `/mau-hoa`, `/lien-he`. Static content has no loading, error, empty, or submitted states unless approved later.
- CSS modules own story styles. No hardcoded colors or spacing values there; consume design tokens from globals.
- Fonts use Next `next/font/google` for Inter and Playfair Display with Vietnamese subset.

## Design tokens

`app/globals.css` defines approved color, spacing/layout, typography including weights and tracking, radius/border, and motion tokens. It applies display font and heading weight/tracking explicitly because Tailwind preflight resets browser heading weight. Reduced-motion users receive effectively disabled transitions and visible motion blocks.

## Environment

`code/frontend/.env.example` documents no variables because frontend reads none. Root `.env.example` documents compose-only optional controls: `IMAGE_REPO`, `IMAGE_TAG`, `FRONTEND_PORT`, and `FRONTEND_MEM_LIMIT`. No secrets exist.

## Run and verification

```sh
docker compose up --build
```

Open `http://localhost:3000`. Local frontend commands run from `code/frontend`: `npm ci`, `npm run lint`, `npm run build`, `npm test`.

## Decisions

| Decision | Rejected alternative | Tradeoff |
|---|---|---|
| Static Next.js only | Go API and PostgreSQL | No live booking, storage, or content editing; add backend only after approved service behavior needs persistence. |
| Native App Router | Client-rendered SPA | Server-first shells reduce browser JS; interactive stories must mark their own client boundary. |
| CSS modules plus frozen global tokens | Per-story global CSS or utility values | More explicit component styling; prevents token drift and cross-story collisions. |
| Docker Compose supplied by repository | Custom container files | Existing compose and Dockerfile match static shape and CI expectations. |

## Compatibility and rollout

Requires Node 20 for local/container builds. Next standalone output is required by committed Dockerfile. No migration or rollout work exists for static content. Unknown future booking transport, map integrations, and editable content require approved requirements before adding dependencies or services.
