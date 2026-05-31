# Terminal Archive — Design System

A portable design system for dense, low-chroma, mono-first interfaces. Built to
drop into any **Next.js + Tailwind** project. The feeling: opening a card-
catalog drawer in a darkened reading room — quiet, exact, unhurried.

```
DENSE · QUIET · TERMINAL
```

---

## 1. Concept

**Three words:** `terminal · void · subtle`.

- **Terminal** — phosphor labels, mono type, bracketed metadata, ASCII
  separators. The feel of a reference terminal in a research lab, not
  "developer aesthetic" cosplay.
- **Void** — calm dark surfaces, very low chroma. The chrome recedes; the
  content is the figure.
- **Subtle** — restraint is the dominant move. 1px hairline borders, accents
  that appear once or twice per screen, never on every surface.

**Emotional target:** the calm of a well-kept archive. Power that hums quietly.

**Voice:** clipped, precise, no exclamation points, no encouragement. The
interface informs; it does not cheer. `5 / 12`, never *"You're 42% there — keep
going!"*

**Anti-references** (what this is explicitly *not*):

- Marketing-page SaaS dashboards — glassmorphism, glowing gradient cards,
  hero-metric tiles with sparklines.
- Productivity-SaaS clones — the generic Linear / Notion register.
- Anything built around chunky icons, bright shields, and gamer-y energy.

---

## 2. Themes

Three modes, **dark-first**. The toggle is visible but quiet — a small set of
mono labels in a corner, not a celebrated feature. Theme is a deliberate user
choice, never forced from the OS.

| Mode | Feel | Base hue | Use |
|---|---|---|---|
| **Moss** *(default)* | dark green-black, phosphor-CRT | ~145° | the home state |
| **Midnight** | dark blue-black, late-night reading room | ~240° | alt dark |
| **Vellum** | warm off-white archive paper, near-black ink | ~80° | daytime / light |

Design for Moss first. If the dark theme is right, light comes nearly for free.

### Color tokens (OKLCH)

All surfaces and text live on a single neutral ramp, tinted per theme. The
accent is the *only* saturated hue, and it appears rarely.

**Moss — dark, default** (neutrals tinted toward 145°)
```css
--bg-app:        oklch(0.13 0.015 145);   /* page void              */
--bg-surface:    oklch(0.16 0.018 145);   /* panels, cards          */
--bg-surface-2:  oklch(0.20 0.020 145);   /* hover, raised rows     */
--bg-inset:      oklch(0.10 0.012 145);   /* pre/code, deep wells   */
--border:        oklch(0.28 0.015 145);   /* 1px hairlines          */
--border-strong: oklch(0.40 0.020 145);   /* focus rings, dividers  */
--ink:           oklch(0.94 0.010 145);   /* primary text           */
--ink-muted:     oklch(0.64 0.018 145);   /* labels, metadata       */
--ink-faint:     oklch(0.45 0.015 145);   /* placeholder, disabled  */
--accent:        oklch(0.80 0.18 145);    /* phosphor — rare        */
--accent-soft:   oklch(0.32 0.08 145);    /* accent-tinted surface  */
```

**Midnight — dark, alt** (same ramp, hue 240)
```css
--bg-app:        oklch(0.13 0.018 240);
--bg-surface:    oklch(0.16 0.020 240);
--bg-surface-2:  oklch(0.20 0.022 240);
--bg-inset:      oklch(0.10 0.014 240);
--border:        oklch(0.28 0.018 240);
--border-strong: oklch(0.40 0.024 240);
--ink:           oklch(0.94 0.010 240);
--ink-muted:     oklch(0.64 0.018 240);
--ink-faint:     oklch(0.45 0.015 240);
--accent:        oklch(0.82 0.15 230);    /* cool phosphor          */
--accent-soft:   oklch(0.32 0.08 240);
```

**Vellum — light** (warm off-white, hue 80)
```css
--bg-app:        oklch(0.97 0.006 80);
--bg-surface:    oklch(0.99 0.003 80);
--bg-surface-2:  oklch(0.95 0.008 80);
--bg-inset:      oklch(0.93 0.010 80);
--border:        oklch(0.86 0.010 80);
--border-strong: oklch(0.70 0.015 80);
--ink:           oklch(0.18 0.005 80);
--ink-muted:     oklch(0.45 0.008 80);
--ink-faint:     oklch(0.62 0.010 80);
--accent:        oklch(0.45 0.12 145);    /* deep moss              */
--accent-soft:   oklch(0.88 0.04 145);
```

**Status colors.** Define `--ok`, `--warn`, `--danger` per theme, each pulled
*into the theme's own hue space* (don't paste in a foreign stock green/red).
A success state should read as a brighter, more saturated sibling of the
surface accent — part of the theme, not an import.

---

## 3. Typography

Two monospace faces, both free, both self-hosted (no runtime CDN).

- **Courier Prime** — primary face. Body, labels, tables, inputs, navigation.
- **Departure Mono** *(SIL OFL)* — display face. Page titles, section markers,
  the wordmark, any "system header" element.

> Swap freely, but stay mono on mono. A humanist sans breaks the register.

### Scale (fixed `rem` — this is product UI, not a marketing page)

| Token | Size | Use |
|---|---|---|
| `--type-2xs` | 0.6875rem / 11px | bracketed metadata, secondary table cells |
| `--type-xs` | 0.75rem / 12px | labels, chips, footer chrome |
| `--type-sm` | 0.8125rem / 13px | table body, row labels |
| `--type-base` | 0.875rem / 14px | UI body, button text |
| `--type-md` | 1rem / 16px | section headings |
| `--type-lg` | 1.25rem / 20px | page title |
| `--type-xl` | 1.75rem / 28px | wordmark / hero number |

### Rules

- **Tracking** — tighten display headlines `-0.01em`; loosen UPPERCASE labels
  `+0.08em`. Body keeps default tracking.
- **UPPERCASE + wide tracking** — section markers, chips, table headers, status
  pills. Always short (≤4 words).
- **Sentence case** — body, descriptions, long-form content.
- **Never Title Case headlines.**

---

## 4. Layout & Density

Left-aligned throughout; centering only on a fully empty state. Sections are
separated by a 1px `--border` rule or a run of `─`, with a bracketed mono label
hanging off the left:

```
─── [ MAIN ] ──────────────────────────────
```

### Spacing scale (4pt, semantic — never named by pixels)

```css
--space-3xs: 2px;    --space-xs:  6px;    --space-sm:  10px;
--space-md:  16px;   --space-lg:  24px;   --space-xl:  40px;
--space-2xl: 64px;   --space-3xl: 96px;
```

### Density rules

- **Tables** — tight rows (28–32px), mono numerics, *zero* alternating row
  colors, 1px hairlines between rows.
- **Cards** — flat: 1px hairline, no shadow, no corner radius > 4px. Prefer no
  border at all where spacing alone defines the section.
- **Nav / sidebar items** — 28px tall, mono, single line, no icons except a
  leading `[ ]` / `[•]` for active state.
- The pattern: pack rows *tightly* within a section, then leave *generous*
  space between sections.

---

## 5. Decorative Grammar

The system's signature marks. Used deliberately, sparingly.

| Mark | Meaning |
|---|---|
| `[ LABEL ]` | section header, active-state marker |
| `─── ─── ───` | full-width divider |
| `>` `▸` | inline caret — "current line" / sub-item |
| `01 · 02 · 03` | two-digit zero-padded index where order matters |
| `█▓▒░` | block-element progress bar (never a smooth rounded bar) |
| `_` (blinking) | empty/idle caret — search & command inputs *only* |

---

## 6. Motion

The void doesn't bounce. Motion is restricted to:

- **80ms** opacity fade on hover / active.
- **120ms** transform on focus rings (translateY 1px max).
- **160ms** grid-template-rows expand/collapse on disclosure.
- No spring physics, no parallax, no scroll-driven reveals.
- Respect `prefers-reduced-motion: reduce` — drop all transitions to 0ms.

---

## 7. Component Primitives

A small reusable vocabulary, defined once:

| Class | Role |
|---|---|
| `.tag` | `[ BRACKET ]` label |
| `.marker` | `─── SECTION ──────` divider header |
| `.field` | input / textarea / select |
| `.btn` (`--accent` `--ghost` `--danger` `--sm` `--icon`) | buttons |
| `.progress` | block-element progress bar `█▓▒░` |
| `.tbl` | flat table, hairline rows |
| `.panel` / `.panel--inset` | flat surfaces, 2px max radius |
| `.pill` | UPPERCASE status pill, under-rule (not filled) |
| `.caret` | blinking `_` for idle inputs |

---

## 8. Design Principles

1. **Make power feel calm, not overwhelming.** Every screen should feel like
   reading, not operating. Dense data is fine; visual noise is not.
2. **Dark-first.** The interface lives in the terminal world. Light is the
   daylight escape hatch.
3. **Mono typography signals precision and trust.** It carries the whole
   system. Resist warming it up with a humanist sans.
4. **Accent sparingly.** The accent is for one thing per screen at a time — the
   active item, the current input, the success state. If two things glow,
   neither does.
5. **Density without clutter.** Tight type scale, low-chroma neutrals, 1px
   hairlines, generous space *between* sections.

---

## 9. Hard Bans

- No gradients (text, surface, or border).
- No glassmorphism, no glow, no neon. Accent is opaque OKLCH, not a box-shadow
  halo.
- No `border-left: 3px` accent stripes on cards / rows / list items.
- No rounded corners larger than 4px on any surface.
- No filled status badges — use a 1px under-rule or a leading glyph.
- No emoji in the UI. No icon above every heading.
- No celebratory empty states. State the fact: `0 items.`

---

## 10. Implementation — Next.js + Tailwind

### Tailwind v4 `@theme` (in `app/globals.css`)

Tokens live as CSS custom properties; theme blocks flip them in place via a
`data-theme` attribute. Map them into Tailwind so utilities resolve to tokens.

```css
@import "tailwindcss";

@theme {
  --color-app:        var(--bg-app);
  --color-surface:    var(--bg-surface);
  --color-ink:        var(--ink);
  --color-accent:     var(--accent);
  --font-mono:        "Courier Prime", ui-monospace, monospace;
  --font-display:     "Departure Mono", ui-monospace, monospace;
}

:root,
[data-theme="moss"] {
  --bg-app: oklch(0.13 0.015 145);
  --ink:    oklch(0.94 0.010 145);
  --accent: oklch(0.80 0.18  145);
  /* …full Moss ramp… */
}

[data-theme="midnight"] { /* …Midnight ramp… */ }
[data-theme="vellum"]   { /* …Vellum ramp… */ }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { transition-duration: 0ms !important; }
}
```

Then `bg-app`, `text-ink`, `border-surface`, `font-display`, etc. all resolve
to the active theme automatically.

### Self-hosted fonts (`next/font/local`)

```ts
// app/fonts.ts
import localFont from "next/font/local";

export const courier = localFont({
  src: "../public/fonts/CourierPrime-Regular.woff2",
  variable: "--font-courier",
  display: "swap",
});
export const departure = localFont({
  src: "../public/fonts/DepartureMono-Regular.woff2",
  variable: "--font-departure",
  display: "swap",
});
```

Apply both `variable` classes on `<html>` in the root layout. Do **not** pull
either face from the Google Fonts CDN at runtime.

### Theme application (no-flash)

Set `data-theme` on `<html>` before paint with a small inline script in the
root layout (read from `localStorage`, default `moss`) so there's no theme
flash on load. A `ThemeToggle` client component flips the attribute and
persists the choice.

```
MOSS  ·  MIDNT  ·  VLLM
```

A quiet, mono toggle in a corner — never a celebrated feature.
