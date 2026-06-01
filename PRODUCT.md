# Product

## Register

brand

## Users

Hiring managers, recruiters, and fellow developers who land on Tai Nguyen's
personal site, usually from a CV link, GitHub, or a referral. They arrive
curious and time-boxed: they want to size up skills, see real projects, and
find a way to get in touch within a minute or two. A secondary audience is
peers and friends in the game-dev / coding community who already know Tai and
are browsing for fun.

## Product Purpose

A personal developer portfolio framed as an RPG "character sheet": stats,
traits, hobbies, and projects presented as the menu of a game character. It
exists to make Tai memorable, prove competence through real project work, and
open a contact channel. Success looks like a visitor understanding who Tai is
and what he can build, then reaching out or following a project link, all
without the site feeling like a generic template.

## Brand Personality

Terminal, void, subtle (per DESIGN_GUIDE.md). The voice is clipped and precise:
no exclamation points, no encouragement, no marketing cheer. Self-aware and
playful in *content* (RPG stats, "Braincells 10/100", "Certified nerd") but
deadpan and exact in *delivery* (`5 / 12`, never "You're 42% there!"). Three
words: precise, dry-witted, unhurried. The interface informs and recedes; the
content (the person) is the figure.

## Anti-references

- Marketing-page SaaS dashboards: glassmorphism, glowing gradient cards,
  hero-metric tiles with sparklines.
- Productivity-SaaS clones: the generic Linear / Notion register.
- Chunky icons, bright shields, gamer-y energy, emoji-driven UI.
- Generic "developer portfolio template" looks: identical project card grids,
  a tracked uppercase eyebrow above every section, hero photo + tagline + CTA
  boilerplate.
- The literal pixel-RPG cosplay the site previously shipped: the current
  register is *terminal archive*, RPG only in the content framing, not in
  pixel fonts or 8-bit chrome.

## Design Principles

1. **RPG in content, archive in chrome.** The game-character conceit lives in
   what's shown (stats, traits, quests-as-projects), never in decorative
   pixel/8-bit styling. The frame stays a quiet terminal.
2. **Make power feel calm.** Dense personal data is fine; visual noise is not.
   Every screen should read like a reference terminal, not a billboard.
3. **Accent sparingly.** The phosphor accent marks one thing per screen at a
   time (active item, current input, a single highlighted stat). If two things
   glow, neither does.
4. **Deadpan delivery, playful substance.** Let the writing be funny; never let
   the styling try to be funny for it.
5. **Earn the visit fast.** A time-boxed recruiter should grasp skills, see
   real work, and find contact without scrolling blind or decoding the theme.

## Accessibility & Inclusion

Target WCAG AA. Body text and the muted/faint ink ramp must clear 4.5:1 on
their dark surfaces (the low-chroma neutrals make this the main risk; verify
`--ink-muted` and `--ink-faint` against `--bg-app` / `--bg-surface`). Honor
`prefers-reduced-motion` (already wired in globals.css). Don't encode meaning in
the single accent hue alone; pair color with a glyph, label, or position.
Keyboard-navigable controls with visible focus states.
