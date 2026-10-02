# AGENTS.md

Public GitHub repo, project name **prompts**. Content: a collection of one hundred prompting strategies for language models, in English and German, plus agent skills and agent instruction files, as one searchable page. Each entry is a card: a sentence on what it does, tags, and, unfolded, the explanation with an example prompt, or the standard file itself, that one button copies. It is a sibling of **open-entrainer**, **open-desensitizer** and **open-helix** and shares its design with **temet-nosce**; they should look and read as one family.

The page is one file, `index.html`, and runs from anywhere it is copied to. Its sources are many files: a strategy is two Markdown files under `content/`, one per language, a skill and an agent are their standard files. `build.js` writes the cards from the sources into the page. The siblings keep page and source in one file because they are programs with little content; this one is a corpus with a thin shell, so the corpus is edited as Markdown and the one file is what ships.

Target audience: someone who works with a language model in English or German and wants a pattern for the prompt at hand, not a course; and someone who runs coding agents and wants their skills (`SKILL.md`) and repository instructions (`AGENTS.md`) in one findable place. The page has to be searched in one motion, read in one screen per card, and copied in one click.

## Non-Goals

- No framework, no bundler, no package manager, no dependency. The one script in the repo, `build.js`, runs on Node's standard library alone
- No second file for the app. `index.html` alone is the page; stylesheet, script and every card are inline so one file can be copied anywhere and run. The sources under `content/`, `skills/` and `agents/` are what the cards are made from, not a second app
- No build at deploy time. The generated `index.html` is committed; Pages, a `file://` copy and the Home Assistant add-on take the file as it is in the repo, and CI fails when it is stale
- No hand edits inside the generated block of `index.html`. Between the `cards:start` and `cards:end` markers the file is output; a change there is a change to a source
- No strategy in one language only. A strategy exists in German and English or not at all
- No external resource of any kind: no CDN, no web font, no analytics
- No service worker, no manifest, no install prompt. A single file needs no offline layer
- No accounts, no network requests, no data leaving the page
- No manual dark/light toggle. Automatic only, via `prefers-color-scheme`
- No manual language switch. Automatic only, via the browser's language, with a URL override
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
├── content/de/<slug>.md (one per strategy, German: frontmatter with title, level, tags, description; the explanation with the prompt as a fenced block)
├── content/en/<slug>.md (the same strategy in English, same slug, same level, translated tags)
├── skills/<name>/SKILL.md    (one per Skill card, Agent Skills standard; German, card tags and English card text in metadata)
├── agents/<name>/AGENTS.md   (one per Agent card, AGENTS.md standard)
├── agents/<name>/card.md     (the Agent card's description and tags per language, since AGENTS.md has no frontmatter)
└── .github/workflows/
    ├── deploy.yml       (uploads the checkout to Pages, builds nothing)
    ├── check.yml        (runs `node build.js --check`: sources are valid and index.html is what they give)
    └── notify-addon.yml (after each change to index.html on main, asks the Home Assistant Apps Collection to build a new add-on version)
```

GitHub Pages serves the repository root of `main`. The deploy workflow only uploads the checkout as the Pages artifact; a repository set to deploy from the branch instead can delete it. The footer derives its GitHub links from the Pages URL, so a fork needs no edit.

## Standards

Two card kinds exist because tools read them from files at fixed paths, not from a page.

- **Skill**: the Agent Skills standard (agentskills.io, used by Claude Code, Codex and others). A directory `skills/<name>/SKILL.md` whose YAML frontmatter has `name` (lowercase letters, digits, hyphens, at most 64 characters, equal to the directory name) and `description` (at most 1024 characters, says what the skill does and when to use it); optional `license`, `allowed-tools`, `metadata`. The body is the instruction an agent loads when the description matches its task. Skills here are written in German, the language of their users' agents.
- **Agent**: the AGENTS.md standard (agents.md). A plain Markdown file that sits at the root of a repository and tells a coding agent how to work there; no frontmatter, free structure. Here it lives at `agents/<name>/AGENTS.md`; the user copies it to a repository root. Agent files are written in English, like the AGENTS.md files of the family repos they are meant for.

The file is the source. `build.js` writes the card from it: the card's `pre.prompt` holds the file's text verbatim (HTML-escaped), so the copy button and the download button yield the file, and a `data-file` attribute on the article names the path. The file is the same in both language variants of the card and carries its own language as `lang` on its `pre` when that differs from the variant, so a German skill on the English page is still marked German. A skill's German card takes its description from the frontmatter and its tags from `metadata.tags`; the English card takes `metadata.description-en` and `metadata.tags-en` (`metadata` is the standard's slot for extra keys, a map of strings, so every value must be valid YAML). An agent's card takes both languages from `agents/<name>/card.md`, a frontmatter-only file next to the AGENTS.md with the nested keys `de.description`, `de.tags`, `en.description`, `en.tags`; the AGENTS.md stays pure Markdown because the user copies it to a repository root. Editing a skill or agent means editing the file and running `node build.js`.

## Design

The inline stylesheet begins with the token block from temet-nosce, verbatim. It stays verbatim in all projects of the family; a change to the tokens is a change to all of them.

- Color: oklch with chroma 0. Light: bg 98%, surface 94%, border 85%, text 15%, muted 40%. Dark flips the scale under `prefers-color-scheme: dark`. `color-scheme: light dark` on the root so form controls follow.
- Spacing: Fibonacci in pixels, 5 8 13 21 34 55 89 144, as `--space-1` to `--space-8`.
- Type: system-ui. Base 1rem, line-height 1.618, sizes 0.875rem, 1rem, φ, φ², φ³.
- Layout: a `.shell` of 987px max width with 21px side padding. Hero, two sections, footer. Text columns cap at 42rem. `kbd` for the keys in the explanation, styled like inline code with a border.
- Controls: one row with the search field (native `type="search"`, grows to fill), the kind select (All kinds, Strategies, Skills, Agents), the level select, and the count on the right. Fields are bordered, transparent, with the page colors. The row is the first thing under the hero, so the first screen holds the search and the first cards without scrolling. From 800px up, where it is one line, it is sticky at the top of the viewport on the page background, with a rule line underneath while it is stuck (a `scroll-state` container query; browsers without it show no line). Cards and sections carry a scroll margin of `--space-6` there, so a fragment lands below the bar.
- Cards: bordered panels (`--radius-lg`, `--space-4` padding) in a grid of `repeat(auto-fill, minmax(min(377px, 100%), 1fr))`, rows aligned at the top so an open card never stretches its neighbour. Header with the title on the left (a link to the card's own anchor) and, on the right in small caps, the level of a strategy or the kind of a skill or agent. Description, tag chips, a `<details>` with the explanation (strategy) or the file (skill, agent), and the buttons: copy for every card, download as well for skills and agents, in an `.actions` row. The card whose anchor is the URL fragment gets a text-colored border.
- The prompt: a `<pre class="prompt">` on the surface color with a border, monospace at the small size, wrapped. It is the one block the buttons copy or save; for a skill or agent it is the whole file.
- Buttons and chips: bordered, transparent, surface on hover. Nothing is colored, nothing glows.

## Language

The page ships in English and German in the same file, like its siblings. A small classic script in the head sets `<html lang>` before the first paint: German when the browser's first language starts with `de`, English otherwise; `?lang=de` or `?lang=en` overrides. Without script the page stays English.

- Hand-written prose exists once per language, as sibling elements with `lang="en"` and `lang="de"`. One CSS rule hides every element whose `lang` does not match the root. The rule only hides a switch, an element whose one `lang` ancestor is the root (`:not([lang] [lang] [lang])`); a `lang` inside a switch marks content in the other language, such as the German skill file on the English page, and stays visible.
- Text inside form controls (placeholder, options, labels) cannot switch through CSS. The markup carries English; a small classic script right after the controls sets the German text before the first paint.
- Every card holds two variants, `<div class="variant" lang="de">` and `<div class="variant" lang="en">`, each with its own title, level word, description, tags, explanation, prompt and buttons. A variant has `display: contents`, so its children stay items of the card's column. Id, kind, file and level key sit on the article and are shared.
- Strings the page script writes are given in place as `L(english, german)`.

## Behavior

- Index: on load the script reads every `.card` once, from the variant of the page language (kind, file, title, tags, level key, text), and sorts the cards by title with `localeCompare` in that language. Nothing is stored; the page is stateless apart from the URL fragment.
- Related: for each card, the three closest others are appended to the explanation of the shown variant as "Related:" or "Verwandt:" links to their anchors. Closeness is computed in the page language from two signals: shared tags, each weighted by its rarity (`log(n / df)`, normalized by `log(n)`), plus twice the cosine similarity of TF-IDF vectors over the card text (title three times, description, explanation without the prompt; words of four letters or more that occur in at least two cards). Ties go by title. Rare shared tags and shared vocabulary find real neighbours; a common tag alone does not.
- Search: terms are split on whitespace; every term must match. A term scores 100 on the title, 60 on an exact tag, 40 on a partial tag, 10 anywhere in the card text, all in the page language. With a query the visible cards are ordered by score, then title; without one by title. The kind select filters on `data-kind`, the level select on `data-level`, a key (`beginner`, `intermediate`, `advanced`) shared by both languages; skills and agents carry no level and disappear when one is chosen. The count reads "n entries" or "n of m" ("n Einträge", "n von m"); an empty result shows one line of text below the grid.
- Tags: clicking a chip puts the tag into the search field and scrolls to the controls, so the filter is visible and can be cleared like any search.
- Fragment: `#<slug>` opens that card's details and scrolls to it, clearing search and level first if the card is hidden. Title links and related links navigate by fragment, so every strategy has one shareable URL in both languages.
- Copy: the button copies the `.prompt` text of the shown variant. `navigator.clipboard.writeText` first; if that fails, a hidden textarea and `document.execCommand("copy")`, which is what works inside embedded frames such as Home Assistant Ingress. The label reads "Copied" ("Kopiert") for two seconds, then its own text again, "Not copied" ("Nicht kopiert") if both paths fail.
- Download: on skill and agent cards a second button saves the `.prompt` text as a file named by its `data-name` (`SKILL.md`, `AGENTS.md`) through a Blob URL, so it works from a `file://` copy of the page. The caption above the file links to the file in the repository and says when the file is in the other language; the footer module points that link at the deployed fork.
- Keys: `/` focuses the search field unless a form control has focus. In the field, Enter copies the prompt of the first visible card when the query is not empty, with the label feedback on that card's copy button, so search, Enter, paste is the whole path; Escape empties the field. On load without a fragment, and only with a fine pointer (`hover: hover` and `pointer: fine`), the field is focused, so typing starts the search; a touch screen would only raise its keyboard.

## Content

The page and the strategies exist in English and German; skills are written in German, agent files in English (see Standards), and both kinds are shown as they are in both page languages. Plain sentences, present tense, no exclamation marks, no emoji, no em dashes, in both languages; German uses du, English uses you. The hero opens with the dictionary definition of a prompt (an instruction, question or input given to a person or an AI to trigger a specific action or response), says in one sentence what the page holds, and links to "How it works". That section comes after the grid, so the controls are on the first screen and the explanation is a footnote the link reaches. It repeats the definition, explains what a strategy is, that skills and agent files are prompts by the same definition and differ only in who hands the text over (the user pastes a strategy prompt, the agent reads a skill or AGENTS.md from a fixed path), how to use a card, the keys, what the three levels mean, which languages there are, and that nothing leaves the page. Product names are lowercase in headings and the footer, as in temet-nosce. README, CONTRIBUTING, AGENTS.md and commit messages are English.

A strategy card is accurate before it is persuasive:

- It says what the technique does, how it works where that is known, and where it stops helping. When the mechanism is unknown, it describes the effect; no pseudo-mechanisms ("activates clusters", "loads into RAM").
- Where the technique comes from a paper or a person, the card names it once ("Wei et al., 2022", "Edward de Bono, 1967"). Nothing is cited that cannot be checked.
- It reflects current models. Where reasoning models, structured outputs, tool use or long context windows change the advice, the card says so. Techniques whose effect did not hold up (promised tips, emotional pressure, magic phrases) stay as entries, because people search for them, and say honestly what remains of them.
- No model product names or versions, since they date within months; "a small, fast model", "a reasoning model", "a model with a code tool".
- Example prompts are what a reader would paste: complete, with placeholders in square brackets, in calm wording with reasons for rules, no ALL-CAPS emphasis and no threats.
- Near neighbours are told apart: each card makes clear how it differs from the strategies it is most often confused with (Clarification, Ambiguity Check and Flipped Interaction; Reflexion, Self-Refine, Iterative Refinement and Recursive Reprompting; Structure Tagging and XML Input Delimiters).

Each strategy is two files with the same name, `content/de/<slug>.md` and `content/en/<slug>.md`; the file name is the slug and the fragment:

````markdown
---
title: Title
level: Anfänger|Mittel|Fortgeschritten        (English: Beginner|Intermediate|Advanced)
tags: tag1 tag2
description: One sentence on what the strategy does.
---

Explanation.

## Beispiel                                    (English: ## Example)

```prompt
The prompt text, exactly as it should be pasted.
```

## Wann es hilft                               (English: ## When it helps)

When it helps, when not, and the limits.
````

The body is Markdown in the subset `build.js` renders: paragraphs, `##` and `###` headings (h4 and h5 on the card, one level below its title), `-` and `1.` lists, `>` quotes, fenced code, and inline `**strong**`, `*em*`, `` `code` `` and `[links](url)`; a backslash keeps one of `` ` * _ [ ] \ `` literal. Raw HTML is escaped, not passed through. Exactly one fence carries the info string `prompt`; it becomes the variant's `pre.prompt`. The build fails on a file without it, with two, with a level outside the three words of its language, with levels that differ between the two files, without tags, with a German tag outside the vocabulary, with English tags that are not the translation of the German ones, with a strategy missing in one language, or with a heading level other than two or three.

Tags come from a fixed vocabulary of about forty words, `TAGS` in `build.js`, German to English: reasoning, decomposition, planning, structure, format, examples, context, facts, hallucination, verification, self-critique, iteration, dialogue, questions, role, perspectives, creativity, ideas, analysis, decisions, risk, learning, explaining, style, brevity, writing, translation, culture, summarizing, documents, security, privacy, agents, tools, code, math, meta, optimization, cost, psychology, bias, basics. Two to four per strategy. A small, shared vocabulary is what makes the related links and the tag filter find neighbours; a new word goes into `TAGS` only when several strategies need it.

`build.js` renders each strategy as one `<article class="card" data-kind="strategy">` inside `#list`, with one variant per language:

```html
<article class="card" data-kind="strategy" id="<slug>" data-level="beginner|intermediate|advanced">
  <div class="variant" lang="de" data-tags="tag1 tag2" itemscope itemtype="https://schema.org/HowTo">
    <header>
      <h3 itemprop="name"><a href="#<slug>">Titel</a></h3>
      <span class="level">Anfänger</span>
    </header>
    <p class="description" itemprop="description">Ein Satz, was die Strategie bewirkt.</p>
    <ul class="tags" itemprop="keywords"><li><button type="button" class="tag">tag1</button></li>…</ul>
    <details>
      <summary>Erklärung</summary>
      <p>Erklärung.</p>
      <h4>Beispiel</h4>
      <pre class="prompt" tabindex="0">Der Prompt-Text.</pre>
      <h4>Wann es hilft</h4>
      <p>…</p>
    </details>
    <button type="button" class="button copy">Prompt kopieren</button>
  </div>
  <div class="variant" lang="en" data-tags="tag1 tag2" itemscope itemtype="https://schema.org/HowTo">
    … the same in English: Beginner, Explanation, Example, When it helps, Copy prompt …
  </div>
</article>
```

A skill or agent card has the same shape with the file in place of the explanation, generated from the standard file:

```html
<article class="card" data-kind="skill" id="skill-<name>" data-file="skills/<name>/SKILL.md">
  <div class="variant" lang="en" data-tags="tag1 tag2" itemscope itemtype="https://schema.org/SoftwareSourceCode">
    <header>
      <h3 itemprop="name"><a href="#skill-<name>"><name></a></h3>
      <span class="level">Skill</span>
    </header>
    <p class="description" itemprop="description">metadata.description-en</p>
    <ul class="tags" itemprop="keywords">…</ul>
    <details>
      <summary>SKILL.md</summary>
      <p class="caption">Lives in the repository as <a class="file" href="https://github.com/pajew-ski/prompts/blob/main/skills/<name>/SKILL.md"><code>skills/<name>/SKILL.md</code></a>. Copy it or save it as a file; the content is the file, byte for byte. The file is written in German.</p>
      <pre class="prompt" tabindex="0" lang="de">The whole file, HTML-escaped.</pre>
    </details>
    <div class="actions">
      <button type="button" class="button copy">Copy SKILL.md</button>
      <button type="button" class="button download" data-name="SKILL.md">Save as file</button>
    </div>
  </div>
  <div class="variant" lang="de" …>… the German card: description from the frontmatter, "SKILL.md kopieren", "Als Datei" …</div>
</article>
```

An agent card uses `data-kind="agent"`, id `agent-<name>`, `data-file="agents/<name>/AGENTS.md"`, `itemtype="https://schema.org/TechArticle"`, the kind label `Agent`, summary and button label `AGENTS.md`, and the description and tags of each language from `card.md`; its file is English, so the `pre` of the German variant carries `lang="en"`.

Rules: the slug is lowercase, hyphenated, unique, and is the fragment. Tags are lowercase, no spaces, space-separated in the frontmatter; the build puts them into the variant's `data-tags` and one chip each into the list. The prompt fence is escaped into the `pre.prompt` and is not indented, since the button copies it verbatim. The build writes the articles sorted by slug, so a diff of `index.html` stays local; the page script sorts by title anyway.

## Files

### `index.html`

One file with four parts: the language script and the `<style>` block in the head, the markup with the small control-label script after the controls, and one `<script type="module">` at the end of the body (plus the small footer module before it). Inside `#list`, between the comments `cards:start` and `cards:end`, stand the generated articles; everything outside the markers is written by hand and is not touched by the build.

Markup: hero with the project name, the definition, one sentence and the link to the explanation, in both languages. Sections in this order: Strategies (controls, the grid of articles, the empty-state line), How it works. Footer with the AGENTS.md and source links and the module that rewrites them from the Pages URL.

Style block: token block, base rules (hero, sections, tables, buttons, footer), the language rule, then the controls, the grid, the card and its variants, the prompt block.

Script block: an ES module. No globals beyond what the DOM gives. Sections: language (LANG, L), index (read cards from the shown variant, sort), related (tag overlap), search (termScore, render, which also keeps the list of visible cards in order), clipboard (copyText, copyCard with the button feedback), fragment (openCard), and the event wiring at the bottom, including the search keys, the download handler and the initial focus.

### `build.js`

A CommonJS script on Node's standard library. Sections: constants (languages, level words per language, interface words per language, the tag vocabulary), frontmatter (a flat `key: value` reader, one nested level for `metadata` and for the language keys of `card.md`), inline and block Markdown for the subset above, the card writers (strategy from its two sources, skill and agent through one shared template with a variant per language), source discovery (sorted directory listings, every English strategy must have a German one and the reverse), and the write or `--check` at the end. Every problem in a source is collected and printed at once; the page is only written when all sources are valid, and only when the result differs.
