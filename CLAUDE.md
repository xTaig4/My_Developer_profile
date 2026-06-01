# CLAUDE.md

Personal developer profile site for Tai Nguyen — a "character sheet" (stats, traits, hobbies, projects) built with Next.js. The RPG conceit lives in the **content** (stats, traits, abilities, quest log); the **visual system is "Terminal Archive"**: dark-first, low-chroma OKLCH, mono typography (see `DESIGN_GUIDE.md`).

## Layout

The repo root holds `README.md` and `DESIGN_GUIDE.md`. **The actual app lives in `my-dev-profile/`** — run all commands from there.

```
my-dev-profile/src/app/
  layout.tsx              # root layout; mounts <Sidebar/> + <ThemeToggle/>, no-flash theme script, metadata
  fonts.ts                # self-hosted mono faces via next/font/local (Courier Prime, Departure Mono)
  page.tsx                # "/" → renders ProfilePage
  globals.css             # Tailwind import + Terminal Archive OKLCH theme ramps ([data-theme]) + component primitives
  pages/Profile/page.tsx  # main profile screen (stats/traits/hobbies data + ProfileHeader props live here)
  pages/Contact/page.tsx  # "/pages/Contact" route
  components/             # ProfileHeader, ProjectList, Sidebar, ThemeToggle, ContactCard, ArrowButtons, EscapeButton
  components/BoxComponents/  # HobbiesBox, TraitsBox, SkillsBox, ProfileImageBox
public/                   # fonts/ (Courier Prime + Departure Mono woff2), svg icons, images
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
- Tailwind v4 uses CSS-first config: theme tokens are declared in `globals.css`. Per-theme OKLCH ramps live on `[data-theme="moss|midnight|vellum"]` as `:root` custom properties (`--bg-app`, `--ink`, `--ink-muted`, `--accent`, `--border`, ...), mapped into Tailwind via `@theme inline` so utilities like `bg-app`, `text-ink`, `border-border`, `font-mono`, `font-display` resolve to the active theme. No `tailwind.config.js`.
- Spacing and type come from semantic tokens (`--space-xs..3xl`, `--type-2xs..2xl`), usually applied via inline `style={{ ... }}` or arbitrary utilities (`p-[var(--space-md)]`). Both fonts are weight 400 only — build hierarchy from size, face (display vs mono), the ink ramp, and space, not bold.
- Import alias `@/*` → `src/*` (tsconfig).
- Prettier with `prettier-plugin-tailwindcss` (class sorting). `.prettierrc` is committed — format before committing.
- Page-level components are client components (`"use client"`) holding their own data inline as arrays (see `Profile/page.tsx` stats/traits/hobbies). Edit data there, not in a separate store.
- `next/image` only allows remote images from `raw.githubusercontent.com/xTaig4/**` (see `next.config.ts`); add hostnames there before using new remote sources.
- Reusable component primitives live in `globals.css` as **unlayered** classes: `.panel` / `.panel--inset`, `.btn` (+ `--accent` `--ghost` `--danger` `--sm` `--icon`), `.field`, `.tag` (`[ BRACKET ]`), `.marker` (`─── SECTION ───`), `.progress` (block-element `█▓▒░` bar), `.tbl`, `.pill`, `.caret`. **Gotcha:** because these are unlayered, Tailwind `@layer` utilities can't override their shorthand properties (e.g. `hover:bg-*` / `focus-visible:border-*` on a `.panel--inset` silently lose). Add interactive states as unlayered rules in `globals.css` (see `.link-panel`), not as state utilities on the element.
- Three themes (`moss` default, `midnight`, `vellum`), flipped via `data-theme` on `<html>`; a no-flash inline script in `layout.tsx` sets it before paint, `ThemeToggle` persists the choice to `localStorage`. Verify body/muted text clears WCAG AA on all three (`ink-faint` ≈ 2.7:1 — reserve it for decoration, use `ink-muted` for meaningful text).

## DESIGN_GUIDE.md is the implemented design system

`DESIGN_GUIDE.md` describes the "Terminal Archive" mono/dark system (OKLCH tokens, three themes, Courier Prime + Departure Mono, 1px hairlines, block-element progress bars, bracketed markers). As of the "Revamp UI to Terminal Archive" commit, the shipped site **implements it** — match the guide and the existing components. The earlier pixel/RPG look (and `public/pixelFont.ttf` / `Minecraft.ttf`) is legacy and unused.
