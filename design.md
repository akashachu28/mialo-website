# Mialo — Dark Theme Design System

Reference direction: **openai.com** (structure, restraint, whitespace) + **neon.com**
(type stack, near‑black palette, hairline bento, monospace labels).

The redesigned Platform page is the reference implementation. This document is the
system to apply to every other page. First proven on: `design/platform/` (canvas:
"Mialo Platform — Dark Redesign").

---

## 1. Principles

1. **Near‑black, not blue‑black.** One quiet dark ground; section chrome (headers,
   dividers, layout) stays hairline and flat — no gradient washes on whole
   sections. Rich *product* visuals (the home page's flow diagrams and demo
   cards) may carry their own blue glow / glass treatment; keep that inside the
   card, not on the page.
2. **Structure carries the page.** Left‑aligned section headers, full‑bleed hairline
   dividers between sections, generous vertical rhythm. Let type and spacing do the work.
3. **Restraint with colour.** Blue (`#6C93FF`) is the single brand accent. Green
   (`#00E599`) appears only in tiny doses — live dots, eyebrow ticks, diagram pulses.
   Most of the page is greyscale.
4. **Monospace for machine text.** Eyebrows, tags, kickers, diagram labels, step
   numbers — all Geist Mono, uppercase, wide tracking.
5. **Same content, new shell.** Restructure freely; don't invent marketing copy.
   Missing facts get `[BRACKETED]` placeholders.

---

## 2. Type

Mirrors Neon's stack. Load from Google Fonts (only font host allowed in the canvas):

```
https://fonts.googleapis.com/css2?family=Geist:wght@300..600&family=Geist+Mono:wght@400;500&family=Inter:wght@400;500;600&display=swap
```

| Role | Family | Notes |
|---|---|---|
| Display / headings | **Geist** | Stand‑in for Neon's licensed *ES Build Neutral*. Fallback: `'Inter Tight', 'Inter', system-ui, sans-serif` |
| Body / UI | **Inter** | Exactly what Neon uses. Fallback: `system-ui, -apple-system, sans-serif` |
| Labels / mono | **Geist Mono** | Eyebrows, tags, code, diagram text. Fallback: `ui-monospace, 'SF Mono', Menlo, monospace` |

> **No Boska in the redesign.** It was tried on the home hero and read as a
> mismatch against the grotesque/mono UI — every headline, including the home
> hero and the `Repeat.` beat, is **Geist**. The header wordmark is Geist too.
> Boska stays only on the pages not yet redesigned (company, solutions,
> industries, intelligence-domain).

### Type scale (desktop)

| Token | Font | Size / line‑height | Tracking | Weight |
|---|---|---|---|---|
| `h1` (hero) | Geist | 68 / 1.04 | −0.03em | 400 |
| `h2` (section) | Geist | 40 / 1.12 | −0.025em | 500 |
| `h3` (sub‑section) | Geist | 25 / 1.2 | −0.02em | 500 |
| card title | Geist | 16 / 1.3 | −0.01em | 500 |
| `lead` | Inter | 17 / 1.62 | — | 400, colour `--text-2` |
| `body` | Inter | 14.5 / 1.62 | — | 400, colour `--text-3` |
| `eyebrow` | Geist Mono | 12 / 1 | 0.16em, UPPERCASE | 500, colour `--text-3` |
| `kicker` | Geist Mono | 11 / 1 | 0.13em, UPPERCASE | 400, colour `--text-4` |

Mobile: `h1` 39/1.06, `h2` 26/1.14, `lead` 15.5, `body` 13.5. Body never below 13px.

---

## 3. Colour tokens

```css
:root {
  /* backgrounds */
  --bg:        #08090B;   /* page ground */
  --bg-raise:  #0B0D10;   /* cards */
  --panel:     #0E1013;   /* nested panels, diagram nodes */
  --panel-2:   #131519;   /* elevated / hover fill */

  /* hairlines */
  --line:      #16181D;   /* section dividers, list rows */
  --line-2:    #23262D;   /* card borders */
  --line-3:    #2E323B;   /* strong borders, ghost buttons, hover */

  /* text */
  --text:      #F5F6F7;   /* headings, primary */
  --text-2:    #B4BAC4;   /* lead paragraphs */
  --text-3:    #8A909C;   /* body copy, eyebrows */
  --text-4:    #5A616D;   /* kickers, captions, muted */

  /* accents */
  --blue:      #6C93FF;   /* the brand accent — links, active state, icons */
  --blue-2:    #97B4FF;   /* hover / brighter */
  --blue-dim:  rgba(108,147,255,0.14);  /* tint fills, glows */
  --blue-line: rgba(108,147,255,0.32);  /* accent borders */

  --green:     #00E599;   /* Neon green — SPARINGLY: live dots, ticks, pulses */
  --green-dim: rgba(0,229,153,0.12);
}
```

Icons are stroke‑only (`stroke: currentColor`, `stroke-width: 1.4–1.5`), 20/24px
grid, blue by default. **Never emoji.**

---

## 4. Spacing & layout

- **Content width:** `max-width: 1180px`, centred, `padding: 0 40px`.
  Desktop frame 1440 → ~130px gutters.
- **Section rhythm:** `padding: 104px 0` desktop / `64px 0` mobile,
  `border-top: 1px solid var(--line)` on every section (full‑bleed).
- **Header → content gap:** 48–56px.
- **Card grid gap:** 16px (14px for dense outcome grids).
- **Radii:** buttons/chips 8–9px, cards 13–14px, large panels 16–18px, the
  intelligence core is a circle.
- **Backdrop:** one faint 72px dot/line grid behind the hero only, radial‑masked
  to fade out. Not repeated per section.

---

## 5. Components

### Eyebrow
Mono, uppercase, 0.16em tracking, `--text-3`, with a 6px **green** square marker
(`box-shadow: 0 0 12px rgba(0,229,153,.7)`) as `::before`. One per section, top of
the header block.

### Section header block
`flex column, gap 20px, max-width 720px`: eyebrow → `h2` → `lead` (→ optional
`link-arrow`). Always left‑aligned except the closing CTA (centred).

### Buttons
- **Primary:** `background: var(--text)`, `color: #08090B`, 8px radius, 11×20 pad,
  optional trailing arrow icon. Hover → `#fff`.
- **Ghost:** transparent, `border: 1px solid var(--line-3)`, `color: var(--text)`.
  Hover → `border-color: var(--blue-line); color: var(--blue-2)`.
- **Link‑arrow:** blue, 14px, 500, trailing 13px `→` icon.

One primary action per view, repeated at the page foot.

### Card
`border: 1px solid var(--line-2); border-radius: 14px; background: var(--bg-raise);
padding: 24px`. Hover: `border-color: var(--line-3)`. Contents: icon → title+body →
`link-arrow` pinned to bottom (`margin-top: auto`).

### CTA cell
A card‑sized tile with `border-color: var(--blue-line)` and
`background: linear-gradient(160deg, var(--blue-dim), transparent 60%)` — closes a
grid (e.g. the 8th cell of a 4×2 domain grid).

### Chip (diagram node)
`flex, gap 10px, padding 10×12, border 1px --line-2, radius 9px`, 12.5px `--text-2`
label, 16px blue icon.

### Tag / level marker
Mono 10.5px uppercase `--text-3` with a 5px green dot `::before`.

### Feature row
`flex, gap 12px, padding 14px 0, border-bottom 1px --line`, 18px **green** check
icon + 14px `--text-2` label. Lay out in 2 columns.

### Diagrams
- Flow: `grid-template-columns: 1fr auto 1fr auto 1fr`, node groups linked by
  `.rail` hairlines (`linear-gradient(90deg, transparent, --line-3, transparent)`)
  carrying one animated **green** pulse dot (`@keyframes run`, 5.5s linear).
- Central node `.core`: 132px circle, `border: 1px solid --blue-line`, radial
  blue‑dim fill + outer glow, "mialo" in Geist 500 `--blue-2`.
- Orbit / fusion: inline `<svg>`, hairline `#2E323B` curved links, 4px blue source
  nodes, mono `#B4BAC4` labels, dashed green ring on the core, one green output dot.

### Motion
In the **mockup**, one subtle idea only: the diagram pulse dot travels, live
dots `blink` (2.4s). No scroll‑jacking, no staggered card reveals in the mockup.

In **code**, entrance and hover motion is centralised in
`components/animations.tsx` (Framer Motion, `'use client'`). Keep it in the same
key: fade + rise on scroll (opacity, 16–24px travel, ~0.5s ease‑out), fired
**once** per element; grids stagger their children ~80ms apart; cards and
buttons lift 2–4px on hover. Every helper degrades to a plain element under
`prefers-reduced-motion`, and `[data-animate]` is forced visible when scripting
is off. No parallax, no scroll-linked transforms, no reveal on every re-entry.

---

## 6. Page skeleton (apply to any page)

```
[fixed header — unchanged]
HERO            168/116 top pad · eyebrow · h1 (2nd line blue) · lead · buttons
                · framed "Layer" panel (mono header + Live dot + 3 numbered columns)
─── hairline ───
SECTION         header block (left) · full‑width diagram or bento below
─── hairline ───
SECTION         header block · content
   …
─── hairline ───
CLOSING CTA     centred · eyebrow "Get started" · 34px Geist headline · 2 buttons
                · faint blue radial glow from top edge
```

Two‑column sections: `grid-template-columns: 1fr 1fr` (or `380px 1fr` when a
diagram needs the room), `gap: 56–64px`, `align-items: start`.

---

## 7. Do / Don't

**Do** — near‑black ground · hairline everything · mono eyebrows · one blue accent ·
sentence‑case headlines · lots of vertical air · stroke icons · flex/grid + `gap`.

**Don't** — gradient backgrounds on whole sections · emoji · Boska in the
redesigned pages · green as a primary colour · fake iOS status bars or keyboards
on mobile · more than one primary CTA per view · data‑slop stat rows that aren't
real.

---

## 8. Implemented in code

Live: **`/platform`** and **`/`** (home). The page and section components stay
server components (no `'use client'`, no `next/image` — icons/diagrams are inline
SVG); animation is layered in by importing the client helpers from
`components/animations.tsx`, which keeps the sections themselves on the server.

**`app/layout.tsx`** — adds `Inter` (`--font-inter`); `Geist` (`--font-geist-sans`)
and `Geist_Mono` (`--font-geist-mono`) were already wired. Boska loads via
`@font-face` in globals.css.

**`app/globals.css` `@theme`** — additive tokens, safe for every page:

| Tailwind utility | Value |
|---|---|
| `bg-background` | `#08090B` (existing) |
| `bg-raise` / `bg-panel` | `#0B0D10` / `#0E1013` |
| `border-line` / `border-line-2` / `border-line-3` | `#16181D` / `#23262D` / `#2E323B` |
| `text-primary` / `text-ink` / `text-muted` / `text-faint` | `#F5F6F7` / `#B4BAC4` / `#9BA1AB` / `#5E646E` |
| `text-ice` (blue accent) | `#6C93FF` (existing) |
| `text-green` / `bg-green` | `#00E599` |
| `font-display` / `font-body` / `font-mono` | Geist / Inter / Geist Mono |
| `animate-blink` / `animate-rail` | live-dot pulse / diagram pulse (keyframes in globals.css) |

`globals.css` also forces `[data-animate]` visible under `@media (scripting: none)`
so a JS-less client never sees a blank page.

**`components/ui.tsx`** — shared primitives used by every redesigned page:
`Container`, `Section` (hairline top + rhythm), `SectionHeader`, `Eyebrow`,
`Kicker`, `ArrowLink`, `PrimaryButton`, `GhostButton`, `Icon` (the full stroke set).
The buttons lift 2px and `ArrowLink`'s arrow nudges right on hover — CSS only, so
these stay server components.

**`components/animations.tsx`** (`'use client'`) — the one place for entrance and
hover motion, built on Framer Motion (`motion` package, imported from
`motion/react`). Exports:

| Export | Use |
|---|---|
| `<Reveal>` | fade + rise one block as it scrolls in; `stagger` prop sequences `<RevealItem>` children; `delay`, `y`, `amount`, `repeat`, `as` |
| `<RevealItem lift>` | a child of `<Reveal stagger>`; `lift` adds a hover rise |
| `<HoverLift>` | standalone hover lift/scale for a card or tile |
| `fadeUp` / `fadeIn` / `scaleIn` / `staggerParent()` | raw `Variants` for bespoke `motion.*` |
| `motion`, `AnimatePresence`, `useReducedMotion`, `useScroll`, `useTransform` | re-exported escape hatch |

All helpers no-op to a plain element under `prefers-reduced-motion`.

**To apply to another page:** wrap the page in
`<div className="bg-background font-body text-primary">`, build each band as a
`<Section>` with a `<SectionHeader eyebrow title lead>` and reuse `Icon` +
the button/link primitives from `@/components/ui`. Wrap each band in `<Reveal>`
(and grids in `<Reveal stagger>` + `<RevealItem>`) for the entrance motion —
importing these client helpers does **not** make the page a client component.

**Home (`/`)** — `components/{Hero,Hero2,Section3..8}.tsx`. Pattern here is
**new section shell + original card component**: each section keeps the redesigned
eyebrow / Geist header / spacing / hairline divider, and drops the hand-built
card back in where a plain bento would go — `HeroCard` (hero), the
`OperationalIntelligenceCard` flow diagram (How it works), `OperationalInsightsCard` (The Problem — Traditional Ops → Sources → Moments →
Intelligence → Impact), `OperationalCards` (The Model), `IntelligenceLayerCards`
(The Platform), `SectorCards` (Industries). Those cards keep their own blue/glass
styling on purpose. `OperationalInsightsCard` was trimmed to just the diagram:
its `min-h-screen` and a `min-width:1200px` Boska text block (duplicated Section3
copy) were removed so it fits inside a section. `Section7`'s customer
logos, testimonial and metrics are pre-existing placeholder copy — swap in real
ones. `HeroCard` got a small responsiveness fix (`width: min(500px, 100%)`,
wrapping industry tabs) so it doesn't overflow on mobile.

`app/page.tsx` wraps every band below the hero in `<Reveal>`; the hero staggers
its own eyebrow → headline → lead → buttons via `<Reveal stagger>` + `<RevealItem>`
with the card sliding in just behind (`delay`). `OperationalCards`,
`IntelligenceLayerCards` and `SectorCards` (already `'use client'`) now stagger
their grids with `<Reveal stagger>` and lift each card on hover with `RevealItem lift`.

**`components/Header.tsx`** — rebuilt as a full‑width bar (flush to top,
transparent over the hero, hairline `border-line` + `bg-background/80`
backdrop‑blur once scrolled). Geist wordmark. Desktop nav collapses to a
hamburger → full‑screen menu below `lg`. Every nav entry — Industries
included — is a plain link; there are no dropdowns or sub‑category menus.
Active route → `text-primary` + `border-ice` underline.

## 9. Design‑canvas working files

```
design/platform/
  Main.dc.html      desktop, full page (1440 wide)
  Mobile.dc.html     mobile, hero + 3 representative sections (390 wide)
  canvas.json        canvas layout
  mialo-platform-redesign.html   seeded canvas (do not hand‑edit; re‑seed from the above)
```

Re‑seed after edits:

```
node "<design skill dir>/seed-canvas.mjs" \
  --template "<design skill dir>/payload.template.html" \
  --out mialo-platform-redesign.html --title "Mialo Platform — Dark Redesign" \
  --artboard Main.dc.html --artboard Mobile.dc.html --canvas canvas.json
```
