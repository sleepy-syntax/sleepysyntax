# Portfolio — Knowledge Base

## Goal

Personal portfolio for **Suyash Parate**, positioned for senior full-stack and cloud engineering roles. The site demonstrates systems thinking, production experience, and craft — not a generic developer landing page.

## Audience

- Hiring managers and engineering leads evaluating full-stack depth
- Recruiters screening for React, Node.js, AWS, and mobile experience
- Technical founders looking for hands-on product engineers

## Visual Direction

**Warm Editorial Engineering Studio** — light-first, paper-toned surfaces with selective dark technical panels.

| Token        | Value     | Usage                            |
| ------------ | --------- | -------------------------------- |
| Paper        | `#F5F0E8` | Page background                  |
| Paper Bright | `#FEFCF7` | Cards, elevated surfaces         |
| Ink          | `#161513` | Primary text, primary buttons    |
| Stone        | `#776F64` | Secondary text                   |
| Blueprint    | `#315CFF` | Links, system accents            |
| Copper       | `#B8642C` | Eyebrows, labels                 |
| Signal       | `#2F8F6B` | Status indicators                |
| Panel        | `#14161A` | Code blocks, architecture panels |

### Typography

- **DM Sans** (variable) — headings and body
- **IBM Plex Mono** — stack tags, metrics, code blocks

Only two font families loaded for performance and clear hierarchy.

## Page Flow

1. **Hero** — Name, positioning, CTAs, systems profile panel
2. **Proof Strip** — Key metrics (years, platforms, stack breadth)
3. **Current Focus** — Active projects and current systems reading
4. **Systems** — Architecture layers and data-flow visualization
5. **Work** — Featured projects + additional projects grid
6. **Experience** — Timeline with Mithya Labs roles + education
7. **Skills** — Grouped skill categories
8. **Contact** — Email, LinkedIn, GitHub CTAs

## Architecture

```
src/
├── Assets/          Static visuals (SVG logo, icons)
├── Components/      Atomic UI primitives
├── Constants/       Resume-derived static data
├── Contexts/        Global state (AppContext, RootContextProvider)
├── Features/        Composed shared sections (Header, Footer, etc.)
├── Hooks/           Reusable hooks (useMediaQuery, useReducedMotion)
├── Screens/         Page-level screens with sections
└── Utils/           Shared utilities (cn)
```

## Data Sources

All content is sourced from the resume at `/Users/suyash/Documents/jobs/resume.md` and structured in `src/Constants/`.

Current focus content additionally includes:

- Aegis — open-source password manager monorepo
- Agora API — NestJS backend foundation for WebRTC conferencing workflows
- Designing Data-Intensive Applications — current reading focus

## Tech Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4
- Framer Motion (subtle scroll reveals, reduced-motion aware)
- clsx + tailwind-merge for class composition

## Future Enhancements

- Individual project detail pages
- Blog or writing section
- Dark mode toggle (currently light-first by design)
- Resume PDF download
- Analytics (privacy-respecting)
