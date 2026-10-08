# Suyash Parate — Portfolio

Personal portfolio site showcasing full-stack engineering experience across web, mobile, cloud, and systems architecture.

## Quick Start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command        | Description                     |
| -------------- | ------------------------------- |
| `pnpm dev`     | Start development server        |
| `pnpm build`   | Type-check and production build |
| `pnpm preview` | Preview production build        |
| `pnpm lint`    | Run ESLint                      |

## Project Structure

```
src/
├── Assets/       Static assets (SVG, icons)
├── Components/   Atomic UI (Button, Card, Badge, etc.)
├── Constants/    Resume data (profile, projects, skills)
├── Contexts/     Global React contexts
├── Features/     Shared composed UI (Header, Footer)
├── Hooks/        Reusable hooks
├── Screens/      Page screens with sections
└── Utils/        Utilities
docs/
└── portfolio.md  Feature & flow documentation
```

## Design System

Warm editorial engineering studio — off-white paper surfaces, deep ink text, blueprint blue and copper accents, with selective dark panels for technical content.

See [docs/portfolio.md](docs/portfolio.md) for full design tokens, page flow, and architecture details.

## Deployment

Build output goes to `dist/`. Deploy to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages).

```bash
pnpm build
```
