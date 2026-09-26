# AGENTS.md

Public GitHub repo, project name **<name>**. Content: <one sentence: what the tool does in the browser>. It is a sibling of **open-entrainer**, **open-desensitizer** and **prompts** and shares its design with **temet-nosce**; the family should look and read as one.

Target audience: <who opens it and what they must be able to do in one read>. The page has to be understood in one screen and trusted in one read.

## Non-Goals

- No framework, no build tool, no bundler, no package manager
- No second file. The app is `index.html` alone; stylesheet and script are inline so one file can be copied anywhere and run
- No external resource of any kind: no CDN, no web font, no analytics
- No service worker, no manifest, no install prompt
- No accounts, no network requests, no data leaving the page
- No manual dark/light toggle. Automatic only, via `prefers-color-scheme`
- No color. The design is achromatic; states are named, never colored
- No modal, no settings panel. Everything is on the page, every action is a visible control

## Repo Structure

```
/
├── AGENTS.md
├── README.md            (short: what this is, link to the Pages site)
├── LICENSE
└── index.html           (the whole app: page, stylesheet and script in one file)
```

GitHub Pages deploys from the root of `main`. The footer derives its GitHub links from the Pages URL, so a fork needs no edit. The Home Assistant add-on is built from `index.html` by the apps collection; this repo carries no add-on files.

## Design

The inline stylesheet begins with the token block from temet-nosce, verbatim. It stays verbatim in every project of the family; a change to the tokens is a change to all.

```css
:root {
  color-scheme: light dark;
  --bg: oklch(98% 0 0);
  --surface: oklch(94% 0 0);
  --border: oklch(85% 0 0);
  --text: oklch(15% 0 0);
  --text-muted: oklch(40% 0 0);

  --space-1: 5px;
  --space-2: 8px;
  --space-3: 13px;
  --space-4: 21px;
  --space-5: 34px;
  --space-6: 55px;
  --space-7: 89px;
  --space-8: 144px;
  --radius-sm: var(--space-1);
  --radius-md: var(--space-2);
  --radius-lg: var(--space-3);

  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.618rem;
  --text-xl: 2.618rem;
  --text-2xl: 4.236rem;

  font-family: system-ui, sans-serif;
  font-size: var(--text-base);
  line-height: 1.618;
  background: var(--bg);
  color: var(--text);
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: oklch(15% 0 0);
    --surface: oklch(20% 0 0);
    --border: oklch(30% 0 0);
    --text: oklch(95% 0 0);
    --text-muted: oklch(70% 0 0);
  }
}
```

- Color: oklch with chroma 0. Light: bg 98%, surface 94%, border 85%, text 15%, muted 40%. Dark flips the scale. `color-scheme: light dark` on the root so form controls follow.
- Spacing: Fibonacci in pixels, 5 8 13 21 34 55 89 144, as `--space-1` to `--space-8`. Radii are the same ladder.
- Type: system-ui. Base 1rem, line-height 1.618, sizes 0.875rem, 1rem, φ, φ², φ³. The hero h1 is `clamp(var(--text-xl), 9vw, var(--text-2xl))`, weight 600, letter-spacing -0.02em.
- Layout: a `.shell` of 987px max width with 21px side padding. Hero (`padding-block: var(--space-8) var(--space-6)`), sections (`margin-bottom: var(--space-7)`), footer (top border, muted small text). Text columns cap at 42rem. Boxes are golden rectangles or Fibonacci sizes (377, 610, 987).
- Panels: `1px solid var(--border)`, `border-radius: var(--radius-lg)`, `padding: var(--space-4)`. Surfaces that hold content (canvas, code) sit on `--surface`.
- Controls: native inputs with `accent-color: var(--text)`. Fields are bordered, transparent, page colors. Labels carry the name on the left and the live value on the right.
- Buttons: `.button` bordered, transparent, surface on hover, small text, `padding: var(--space-2) var(--space-4)`. The primary button is inverted: text-colored surface, background-colored label, muted on hover. Nothing is colored, nothing glows.
- Focus: `outline: 2px solid var(--text-muted); outline-offset: 2px`. `[hidden] { display: none !important }`.
- Canvas: reads its colors from its own computed style (background, color, border color, outline color) so it follows the scheme without a second palette; the returned strings are used as they are, never parsed. Device pixel ratio respected.

## Behavior

<one bullet per feature: defaults, ranges, persistence key in localStorage under the project name, keys, what stops what. State every number.>

## Copy

English throughout. Plain sentences, present tense, no exclamation marks, no emoji, no em dashes. Explain the mechanism, say what the tool does not do. Warnings are stated once, on the page, never in a modal. Product names are lowercase in headings and the footer, as in temet-nosce.

## Files

### `index.html`

One file with three parts: the `<style>` block in the head, the markup, and one `<script type="module">` at the end of the body (plus the small footer module before it).

Markup: `<header class="hero shell">` with h1 and one sentence. `<main class="shell">` with sections: How it works, <the tool's sections>, Before you use it. Footer: `<name> · built from <a id="agents-link">AGENTS.md</a> by a coding agent · <a id="source-link">source on GitHub</a>`, followed by the module that rewrites both hrefs from `location.hostname` when it ends in `.github.io` (owner from the host, repo from the first path segment).

Style block: token block, base rules (hero, sections, tables, controls, buttons, footer), then the tool's own rules.

Script block: an ES module. No globals beyond what the DOM gives. Named sections, small functions, event wiring at the bottom. Persist settings in `localStorage` under the project name only; never anything else.
