# CLAUDE.md

Personal developer profile site for Tai Nguyen — an RPG/pixel-styled "character sheet" (stats, traits, hobbies, projects) built with Next.js.

## Layout

The repo root holds `README.md` and `DESIGN_GUIDE.md`. **The actual app lives in `my-dev-profile/`** — run all commands from there.

```
my-dev-profile/src/app/
  layout.tsx              # root layout; mounts <Sidebar/>, sets metadata
  page.tsx                # "/" → renders ProfilePage
  globals.css             # Tailwind import + theme tokens + pixelFont @font-face
  pages/Profile/page.tsx  # main profile screen (stats/traits/hobbies data lives here)
  pages/Contact/page.tsx  # "/pages/Contact" route
  components/             # Sidebar, ProjectList, ContactCard, ArrowButtons, ...
  components/BoxComponents/  # DisplayBox, HobbiesBox, TraitsBox, SkillsBox, ProfileImageBox
public/                   # fonts (pixelFont.ttf), svg icons, images
```

Note Next.js routing here is non-standard: real routes live under `app/pages/<Name>/page.tsx` (e.g. `/pages/Contact`), not flat `app/<name>/`.

## Commands

```bash
cd my-dev-profile
npm run dev      # dev server → http://localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run lint     # next lint (ESLint 9)
```

This project has no test suite and does not need one — do not add tests or testing frameworks unless explicitly asked.

## Stack & conventions

- **Next.js 15.3 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4.**
- Tailwind v4 uses CSS-first config: theme tokens are declared in `globals.css` via `@theme` / `:root` custom properties (e.g. `--color-mindaro`, `--color-gunmetal`). Utilities like `text-text`, `bg-sidebar`, `bg-button` resolve from those tokens. No `tailwind.config.js`.
- Import alias `@/*` → `src/*` (tsconfig).
- Prettier with `prettier-plugin-tailwindcss` (class sorting). `.prettierrc` is committed — format before committing.
- Page-level components are client components (`"use client"`) holding their own data inline as arrays (see `Profile/page.tsx` stats/traits/hobbies). Edit data there, not in a separate store.
- `next/image` only allows remote images from `raw.githubusercontent.com/xTaig4/**` (see `next.config.ts`); add hostnames there before using new remote sources.
- The pixel aesthetic is driven by `pixelFont` (`public/pixelFont.ttf`), applied inline via `style={{ fontFamily: "pixelFont" }}`.

## DESIGN_GUIDE.md is aspirational, not current

`DESIGN_GUIDE.md` describes a separate "Terminal Archive" mono/dark design system (OKLCH tokens, three themes, Courier Prime). The shipped site does **not** implement it — current styling is the pixel/RPG look above. Treat the guide as a target only if a redesign is explicitly requested; otherwise match the existing components.
