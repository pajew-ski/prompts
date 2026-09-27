# AGENTS.md

Public GitHub repo, project name **prompts**. Content: a German-language collection of one hundred prompting strategies for language models, plus agent skills and agent instruction files, as one searchable page. Each entry is a card: a sentence on what it does, tags, and, unfolded, the explanation with an example prompt, or the standard file itself, that one button copies. It is a sibling of **open-entrainer** and **open-desensitizer** and shares its design with **temet-nosce**; the four should look and read as one family.

The page is one file, `index.html`, and runs from anywhere it is copied to. Its sources are many files: a strategy is a Markdown file under `content/`, a skill and an agent are their standard files. `build.js` writes the cards from the sources into the page. The siblings keep page and source in one file because they are programs with little content; this one is a corpus with a thin shell, so the corpus is edited as Markdown and the one file is what ships.

Target audience: someone who works with a language model in German and wants a pattern for the prompt at hand, not a course; and someone who runs coding agents and wants their skills (`SKILL.md`) and repository instructions (`AGENTS.md`) in one findable place. The page has to be searched in one motion, read in one screen per card, and copied in one click.

## Non-Goals

- No framework, no bundler, no package manager, no dependency. The one script in the repo, `build.js`, runs on Node's standard library alone
- No second file for the app. `index.html` alone is the page; stylesheet, script and every card are inline so one file can be copied anywhere and run. The sources under `content/`, `skills/` and `agents/` are what the cards are made from, not a second app
- No build at deploy time. The generated `index.html` is committed; Pages, a `file://` copy and the Home Assistant add-on take the file as it is in the repo, and CI fails when it is stale
- No hand edits inside the generated block of `index.html`. Between the `cards:start` and `cards:end` markers the file is output; a change there is a change to a source
- No external resource of any kind: no CDN, no web font, no analytics
- No service worker, no manifest, no install prompt. A single file needs no offline layer
- No accounts, no network requests, no data leaving the page
- No manual dark/light toggle. Automatic only, via `prefers-color-scheme`
- No color. The design is achromatic; levels are named, never colored
- No modal, no settings panel, no multi-click gestures. Everything is on the page, every action is a visible control. A double click on a card is invisible and needs aim; the copy button on every card and Enter in the search field do the same with neither

## Repo Structure

```
/
├── AGENTS.md
├── README.md            (short: what this is, link to the Pages site)
├── CONTRIBUTING.md      (how to add a strategy, a skill, an agent)
├── LICENSE              (MIT)
├── index.html           (the whole app: page, stylesheet, all cards and script in one file; the cards are generated)
├── build.js             (writes the cards into index.html from the sources below; `--check` verifies instead)
├── content/<slug>.md    (one per strategy: frontmatter with title, level, tags, description; the explanation with the prompt as a fenced block)
├── skills/<name>/SKILL.md    (one per Skill card, Agent Skills standard; tags in metadata)
├── agents/<name>/AGENTS.md   (one per Agent card, AGENTS.md standard)
├── agents/<name>/card.md     (the Agent card's description and tags, since AGENTS.md has no frontmatter)
└── .github/workflows/
    ├── deploy.yml       (uploads the checkout to Pages, builds nothing)
    └── check.yml        (runs `node build.js --check`: sources are valid and index.html is what they give)
```

GitHub Pages serves the repository root of `main`. The deploy workflow only uploads the checkout as the Pages artifact; a repository set to deploy from the branch instead can delete it. The footer derives its GitHub links from the Pages URL, so a fork needs no edit.

## Standards

Two card kinds exist because tools read them from files at fixed paths, not from a page.

- **Skill**: the Agent Skills standard (agentskills.io, used by Claude Code, Codex and others). A directory `skills/<name>/SKILL.md` whose YAML frontmatter has `name` (lowercase letters, digits, hyphens, at most 64 characters, equal to the directory name) and `description` (at most 1024 characters, says what the skill does and when to use it); optional `license`, `allowed-tools`, `metadata`. The body is the instruction an agent loads when the description matches its task. Skills here are written in German, the language of their users' agents.
- **Agent**: the AGENTS.md standard (agents.md). A plain Markdown file that sits at the root of a repository and tells a coding agent how to work there; no frontmatter, free structure. Here it lives at `agents/<name>/AGENTS.md`; the user copies it to a repository root. Agent files are written in English, like the AGENTS.md files of the family repos they are meant for.

The file is the source. `build.js` writes the card from it: the card's `pre.prompt` holds the file's text verbatim (HTML-escaped), so the copy button and the download button yield the file, and a `data-file` attribute on the article names the path. A skill's card takes its description from the frontmatter and its tags from `metadata.tags` (space-separated, lowercase; `metadata` is the standard's slot for extra keys). An agent's card takes both from `agents/<name>/card.md`, a frontmatter-only file next to the AGENTS.md, which stays pure Markdown because the user copies it to a repository root. Editing a skill or agent means editing the file and running `node build.js`.

## Design

The inline stylesheet begins with the token block from temet-nosce, verbatim. It stays verbatim in all four projects; a change to the tokens is a change to all four.

- Color: oklch with chroma 0. Light: bg 98%, surface 94%, border 85%, text 15%, muted 40%. Dark flips the scale under `prefers-color-scheme: dark`. `color-scheme: light dark` on the root so form controls follow.
- Spacing: Fibonacci in pixels, 5 8 13 21 34 55 89 144, as `--space-1` to `--space-8`.
- Type: system-ui. Base 1rem, line-height 1.618, sizes 0.875rem, 1rem, φ, φ², φ³.
- Layout: a `.shell` of 987px max width with 21px side padding. Hero, two sections, footer. Text columns cap at 42rem. `kbd` for the keys in the explanation, styled like inline code with a border.
- Controls: one row with the search field (native `type="search"`, grows to fill), the kind select (Alle Arten, Strategien, Skills, Agenten), the level select, and the count on the right. Fields are bordered, transparent, with the page colors. The row is the first thing under the hero, so the first screen holds the search and the first cards without scrolling. From 800px up, where it is one line, it is sticky at the top of the viewport on the page background, with a rule line underneath while it is stuck (a `scroll-state` container query; browsers without it show no line). Cards and sections carry a scroll margin of `--space-6` there, so a fragment lands below the bar.
- Cards: bordered panels (`--radius-lg`, `--space-4` padding) in a grid of `repeat(auto-fill, minmax(min(377px, 100%), 1fr))`, rows aligned at the top so an open card never stretches its neighbour. Header with the title on the left (a link to the card's own anchor) and, on the right in small caps, the level of a strategy or the kind of a skill or agent. Description, tag chips, a `<details>` with the explanation (strategy) or the file (skill, agent), and the buttons: copy for every card, download as well for skills and agents, in an `.actions` row. The card whose anchor is the URL fragment gets a text-colored border.
- The prompt: a `<pre class="prompt">` on the surface color with a border, monospace at the small size, wrapped. It is the one block the buttons copy or save; for a skill or agent it is the whole file.
- Buttons and chips: bordered, transparent, surface on hover. Nothing is colored, nothing glows.

## Behavior

- Index: on load the script reads every `.card` once (kind, file, title, tags, level, text) and sorts the cards by title with `localeCompare("de")`. Nothing is stored; the page is stateless apart from the URL fragment.
- Related: for each card, the three others sharing the most tags (ties by title) are appended to its explanation as "Verwandt:" links to their anchors.
- Search: terms are split on whitespace; every term must match. A term scores 100 on the title, 60 on an exact tag, 40 on a partial tag, 10 anywhere in the card text. With a query the visible cards are ordered by score, then title; without one by title. The kind select filters on `data-kind`, the level select on `data-level` (skills and agents carry no level and disappear when one is chosen). The count reads "n Einträge" or "n von m"; an empty result shows one line of text below the grid.
- Tags: clicking a chip puts the tag into the search field and scrolls to the controls, so the filter is visible and can be cleared like any search.
- Fragment: `#<slug>` opens that card's details and scrolls to it, clearing search and level first if the card is hidden. Title links and related links navigate by fragment, so every strategy has a shareable URL.
- Copy: the button copies the card's `.prompt` text. `navigator.clipboard.writeText` first; if that fails, a hidden textarea and `document.execCommand("copy")`, which is what works inside embedded frames such as Home Assistant Ingress. The label reads "Kopiert" for two seconds, then its own text again, "Nicht kopiert" if both paths fail.
- Download: on skill and agent cards a second button saves the `.prompt` text as a file named by its `data-name` (`SKILL.md`, `AGENTS.md`) through a Blob URL, so it works from a `file://` copy of the page. The caption above the file links to the file in the repository; the footer module points that link at the deployed fork.
- Keys: `/` focuses the search field unless a form control has focus. In the field, Enter copies the prompt of the first visible card when the query is not empty, with the label feedback on that card's copy button, so search, Enter, paste is the whole path; Escape empties the field. On load without a fragment, and only with a fine pointer (`hover: hover` and `pointer: fine`), the field is focused, so typing starts the search; a touch screen would only raise its keyboard.

## Content

German throughout the page and the strategies; skills in German, agent files in English (see Standards). Plain sentences, present tense, no exclamation marks, no emoji, no em dashes. The hero opens with the dictionary definition of a prompt (an instruction, question or input given to a person or an AI to trigger a specific action or response), says in one sentence what the page holds, and links to "Wie es funktioniert". That section comes after the grid, so the controls are on the first screen and the explanation is a footnote the link reaches. It repeats the definition, explains what a strategy is, that skills and agent files are prompts by the same definition and differ only in who hands the text over (the user pastes a strategy prompt, the agent reads a skill or AGENTS.md from a fixed path), how to use a card, the keys, what the three levels mean, and that nothing leaves the page. Product names are lowercase in headings and the footer, as in temet-nosce.

Each strategy is one file `content/<slug>.md`; the file name is the slug and the fragment:

````markdown
---
title: Title
level: Anfänger|Mittel|Fortgeschritten
tags: tag1 tag2
description: One sentence on what the strategy does.
---

Explanation.

## Beispiel

```prompt
The prompt text, exactly as it should be pasted.
```

## Strategie

When and why it works.
````

The body is Markdown in the subset `build.js` renders: paragraphs, `##` and `###` headings (h4 and h5 on the card, one level below its title), `-` and `1.` lists, `>` quotes, fenced code, and inline `**strong**`, `*em*`, `` `code` `` and `[links](url)`; a backslash keeps one of `` ` * _ [ ] \ `` literal. Raw HTML is escaped, not passed through. Exactly one fence carries the info string `prompt`; it becomes the card's `pre.prompt`. The build fails on a file without it, with two, with a level outside the three words, without tags, or with a heading level other than two or three.

`build.js` renders each strategy as this `<article class="card" data-kind="strategy">` inside `#list`:

```html
<article class="card" data-kind="strategy" id="<slug>" data-level="Anfänger|Mittel|Fortgeschritten" data-tags="tag1 tag2" itemscope itemtype="https://schema.org/HowTo">
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

A skill or agent card has the same shape with the file in place of the explanation, generated from the standard file:

```html
<article class="card" data-kind="skill" id="skill-<name>" data-file="skills/<name>/SKILL.md" data-tags="tag1 tag2" itemscope itemtype="https://schema.org/SoftwareSourceCode">
  <header>
    <h3 itemprop="name"><a href="#skill-<name>"><name></a></h3>
    <span class="level">Skill</span>
  </header>
  <p class="description" itemprop="description">The description from the frontmatter.</p>
  <ul class="tags" itemprop="keywords">…</ul>
  <details>
    <summary>SKILL.md</summary>
    <p class="caption">Liegt im Repo als <a class="file" href="https://github.com/pajew-ski/prompts/blob/main/skills/<name>/SKILL.md"><code>skills/<name>/SKILL.md</code></a>. Kopieren oder als Datei speichern; der Inhalt ist die Datei, byte für byte.</p>
    <pre class="prompt" tabindex="0">The whole file, HTML-escaped.</pre>
  </details>
  <div class="actions">
    <button type="button" class="button copy">SKILL.md kopieren</button>
    <button type="button" class="button download" data-name="SKILL.md">Als Datei</button>
  </div>
</article>
```

An agent card uses `data-kind="agent"`, id `agent-<name>`, `data-file="agents/<name>/AGENTS.md"`, `itemtype="https://schema.org/TechArticle"`, the kind label `Agent`, summary and button label `AGENTS.md`, and a one-sentence description written for the card, since AGENTS.md has no frontmatter.

Rules: the slug is lowercase, hyphenated, unique, and is the fragment. The level is one of the three German words. Tags are lowercase, no spaces, space-separated in the frontmatter; the build puts them into `data-tags` and one chip each into the list. The prompt fence is escaped into the `pre.prompt` and is not indented, since the button copies it verbatim. The build writes the articles sorted by slug, so a diff of `index.html` stays local; the page script sorts by title anyway.

## Files

### `index.html`

One file with three parts: the `<style>` block in the head, the markup, and one `<script type="module">` at the end of the body (plus the small footer module before it). Inside `#list`, between the comments `cards:start` and `cards:end`, stand the generated articles; everything outside the markers is written by hand and is not touched by the build.

Markup: hero with the project name, the definition, one sentence and the link to the explanation. Sections in this order: Strategien (controls, the grid of articles, the empty-state line), Wie es funktioniert. Footer with the AGENTS.md and source links and the module that rewrites them from the Pages URL.

Style block: token block, base rules (hero, sections, tables, buttons, footer), then the controls, the grid, the card, the prompt block.

Script block: an ES module. No globals beyond what the DOM gives. Sections: index (read cards, sort), related (tag overlap), search (termScore, render, which also keeps the list of visible cards in order), clipboard (copyText, copyCard with the button feedback), fragment (openCard), and the event wiring at the bottom, including the search keys, the download handler and the initial focus.

### `build.js`

A CommonJS script on Node's standard library. Sections: frontmatter (a flat `key: value` reader, one nested level for `metadata`), inline and block Markdown for the subset above, the three card writers (strategy, skill, agent, the latter two through one shared template), source discovery (sorted directory listings), and the write or `--check` at the end. Every problem in a source is collected and printed at once; the page is only written when all sources are valid, and only when the result differs.
