# AGENTS.md

Public GitHub repo, project name **prompts**. Content: a German-language collection of one hundred prompting strategies for language models, as one searchable page. Each strategy is a card: a sentence on what it does, tags, and, unfolded, the explanation with an example prompt that one button copies. It is a sibling of **open-entrainer** and **open-desensitizer** and shares its design with **temet-nosce**; the four should look and read as one family.

Target audience: someone who works with a language model in German and wants a pattern for the prompt at hand, not a course. The page has to be searched in one motion, read in one screen per card, and copied in one click.

## Non-Goals

- No framework, no build tool, no bundler, no package manager
- No second file. The app is `index.html` alone; stylesheet, script and all one hundred strategies are inline so one file can be copied anywhere and run
- No content directory, no Markdown sources, no generator. The markup is the data; a strategy is added by adding an `<article>`
- No external resource of any kind: no CDN, no web font, no analytics
- No service worker, no manifest, no install prompt. A single file needs no offline layer
- No accounts, no network requests, no data leaving the page
- No manual dark/light toggle. Automatic only, via `prefers-color-scheme`
- No color. The design is achromatic; levels are named, never colored
- No modal, no settings panel, no multi-click gestures. Everything is on the page, every action is a visible control

## Repo Structure

```
/
├── AGENTS.md
├── README.md            (short: what this is, link to the Pages site)
├── CONTRIBUTING.md      (how to add a strategy: one article block)
├── LICENSE              (MIT)
├── index.html           (the whole app: page, stylesheet, strategies and script in one file)
└── .github/workflows/deploy.yml
```

GitHub Pages serves the repository root of `main`. The workflow only uploads the checkout as the Pages artifact, it builds nothing; a repository set to deploy from the branch instead can delete it. The footer derives its GitHub links from the Pages URL, so a fork needs no edit.

## Design

The inline stylesheet begins with the token block from temet-nosce, verbatim. It stays verbatim in all four projects; a change to the tokens is a change to all four.

- Color: oklch with chroma 0. Light: bg 98%, surface 94%, border 85%, text 15%, muted 40%. Dark flips the scale under `prefers-color-scheme: dark`. `color-scheme: light dark` on the root so form controls follow.
- Spacing: Fibonacci in pixels, 5 8 13 21 34 55 89 144, as `--space-1` to `--space-8`.
- Type: system-ui. Base 1rem, line-height 1.618, sizes 0.875rem, 1rem, φ, φ², φ³.
- Layout: a `.shell` of 987px max width with 21px side padding. Hero, two sections, footer. Text columns cap at 42rem.
- Controls: one row with the search field (native `type="search"`, grows to fill), the level select, and the count on the right. Fields are bordered, transparent, with the page colors.
- Cards: bordered panels (`--radius-lg`, `--space-4` padding) in a grid of `repeat(auto-fill, minmax(min(377px, 100%), 1fr))`, rows aligned at the top so an open card never stretches its neighbour. Header with the title on the left (a link to the card's own anchor) and the level on the right in small caps. Description, tag chips, a `<details>` with the explanation, and the copy button. The card whose anchor is the URL fragment gets a text-colored border.
- The prompt: a `<pre class="prompt">` on the surface color with a border, monospace at the small size, wrapped. It is the one block the button copies.
- Buttons and chips: bordered, transparent, surface on hover. Nothing is colored, nothing glows.

## Behavior

- Index: on load the script reads every `.strategy` once (title, tags, level, text) and sorts the cards by title with `localeCompare("de")`. Nothing is stored; the page is stateless apart from the URL fragment.
- Related: for each card, the three others sharing the most tags (ties by title) are appended to its explanation as "Verwandt:" links to their anchors.
- Search: terms are split on whitespace; every term must match. A term scores 100 on the title, 60 on an exact tag, 40 on a partial tag, 10 anywhere in the card text. With a query the visible cards are ordered by score, then title; without one by title. The level select filters on `data-level`. The count reads "100 Strategien" or "n von 100"; an empty result shows one line of text below the grid.
- Tags: clicking a chip puts the tag into the search field and scrolls to the controls, so the filter is visible and can be cleared like any search.
- Fragment: `#<slug>` opens that card's details and scrolls to it, clearing search and level first if the card is hidden. Title links and related links navigate by fragment, so every strategy has a shareable URL.
- Copy: the button copies the card's `.prompt` text. `navigator.clipboard.writeText` first; if that fails, a hidden textarea and `document.execCommand("copy")`, which is what works inside embedded frames such as Home Assistant Ingress. The label reads "Kopiert" for two seconds, "Nicht kopiert" if both paths fail.
- Keys: `/` focuses the search field unless a form control has focus.

## Content

German throughout the page and the strategies. Plain sentences, present tense, no exclamation marks, no emoji, no em dashes. The hero explains the page in one sentence; "Wie es funktioniert" explains what a strategy is, how to use a card, what the three levels mean, and that nothing leaves the page. Product names are lowercase in headings and the footer, as in temet-nosce.

Each strategy is one `<article class="strategy">` inside `#list`:

```html
<article class="strategy" id="<slug>" data-level="Anfänger|Mittel|Fortgeschritten" data-tags="tag1 tag2" itemscope itemtype="https://schema.org/HowTo">
  <header>
    <h3 itemprop="name"><a href="#<slug>">Title</a></h3>
    <span class="level">Anfänger</span>
  </header>
  <p class="description" itemprop="description">One sentence on what the strategy does.</p>
  <ul class="tags" itemprop="keywords"><li><button type="button" class="tag">tag1</button></li>…</ul>
  <details>
    <summary>Erklärung</summary>
    <p>Explanation.</p>
    <h4>Beispiel</h4>
    <pre class="prompt" tabindex="0">The prompt text, exactly as it should be pasted.</pre>
    <h4>Strategie</h4>
    <p>When and why it works.</p>
  </details>
  <button type="button" class="button copy">Prompt kopieren</button>
</article>
```

Rules: the slug is lowercase, hyphenated, unique, and is the fragment. `data-level` and the visible level are one of the three German words, spelled the same in both places. Tags are lowercase, no spaces, space-separated in `data-tags` and one chip each in the list. Exactly one `pre.prompt` per card; its content is escaped HTML and is not indented, since the button copies it verbatim. Headings inside the details are `h4`, one level below the title. The order of articles in the file does not matter; the script sorts.

## Files

### `index.html`

One file with three parts: the `<style>` block in the head, the markup, and one `<script type="module">` at the end of the body (plus the small footer module before it).

Markup: hero with the project name and one sentence. Sections: Wie es funktioniert, Strategien (controls, the grid of articles, the empty-state line). Footer with the AGENTS.md and source links and the module that rewrites them from the Pages URL.

Style block: token block, base rules (hero, sections, tables, buttons, footer), then the controls, the grid, the card, the prompt block.

Script block: an ES module. No globals beyond what the DOM gives. Sections: index (read cards, sort), related (tag overlap), search (termScore, render), clipboard (copyText), fragment (openCard), and the event wiring at the bottom.
