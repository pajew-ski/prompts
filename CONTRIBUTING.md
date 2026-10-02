# Contributing

The page is one file, `index.html`, and its cards are generated. A strategy is two Markdown files under `content/`, one per language; a skill or an agent is its standard file under `skills/` or `agents/`. `node build.js` writes the cards into the page from them; Node only, no dependency. The generated page is committed so it runs without a build. Do not edit anything between the `cards:start` and `cards:end` markers in `index.html` by hand; the check in the repository (`.github/workflows/check.yml`) fails when the page does not match its sources.

## Adding a strategy

Two files with the same name: `content/de/<slug>.md` and `content/en/<slug>.md`. The file name is the slug and so the link to the card (`#<slug>`).

German:

````markdown
---
title: Name der Strategie
level: Mittel
tags: struktur analyse
description: Ein Satz, was die Strategie bewirkt.
---

Worum es geht, woher es kommt, wie es wirkt.

## Beispiel

```prompt
Der Prompt-Text, genau so, wie er eingefügt werden soll. Platzhalter in [eckigen Klammern].
```

## Wann es hilft

Wann es hilft, wann nicht, wo die Grenzen liegen.
````

English, the same strategy:

````markdown
---
title: Name of the Strategy
level: Intermediate
tags: structure analysis
description: One sentence on what the strategy does.
---

What it is, where it comes from, how it works.

## Example

```prompt
The prompt text, exactly as it should be pasted. Placeholders in [square brackets].
```

## When it helps

When it helps, when it does not, where its limits are.
````

Rules:

- The slug is lowercase, hyphenated and unique.
- `level` is `Anfänger`, `Mittel` or `Fortgeschritten` in German and `Beginner`, `Intermediate` or `Advanced` in English, and both files name the same level.
- Tags come from the fixed vocabulary in `build.js` (`TAGS`), two to four per strategy. The German file uses the German words, the English file their translations in the same order. The vocabulary is small on purpose: related cards are found through shared tags.
- Exactly one fenced block with the info string `prompt` per file. It becomes the card's copyable block, verbatim; nothing in it is transformed.
- The text is Markdown in the subset `build.js` knows: paragraphs, `##` and `###` headings, `-` or `1.` lists, `>` quotes, other fenced blocks, and inline `**bold**`, `*italic*`, `` `code` `` and `[links](url)`. A backslash before `` ` * _ [ ] `` keeps the character. HTML is not passed through.
- Plain sentences, present tense, no exclamation marks, no emoji, no em dashes. German uses du, English uses you.
- Say what the technique does and where it stops helping. Name the paper or person it comes from when there is one, and only then. No model product names, since they date quickly; say "a small, fast model" or "a reasoning model". No ALL-CAPS emphasis in prompts; give the reason for a rule instead.

Then `node build.js`; commit the page together with the new files.

## Adding a skill

A skill follows the Agent Skills format: a folder `skills/<name>/` with a file `SKILL.md`. The skills here are written in German.

```markdown
---
name: mein-skill
description: Was der Skill tut und wann ein Agent ihn laden soll, in einem Absatz.
license: MIT
metadata:
  tags: struktur analyse
  tags-en: structure analysis
  description-en: What the skill does and when to use it, for the English card.
---

# Mein Skill

Die Anleitung, die der Agent befolgt.
```

- `name` is lowercase with hyphens, at most 64 characters, and equal to the folder name. `description` is at most 1024 characters; it decides whether an agent loads the skill, so it names the occasion, not only the content.
- `metadata` is the format's place for extra keys. `tags` are the German tags of the card, `tags-en` and `description-en` the English card text. Values must be valid YAML: a colon followed by a space inside a value breaks it.
- The card is made from the file: the title is the name, description and tags come from the header, the copyable block is the whole file. After adding it, `node build.js`.

## Adding an agent

An agent follows the AGENTS.md format: a folder `agents/<name>/` with a file `AGENTS.md`, plain Markdown without a header, exactly as it will later sit at the root of a repository. Agent files are written in English. Since the file has no header, a `card.md` next to it holds the card text in both languages:

```markdown
---
de:
  description: Ein Satz, wofür die Anweisung ist.
  tags: design web agents.md
en:
  description: One sentence on what the instructions are for.
  tags: design web agents.md
---
```

Then `node build.js`.

## Checking

`node build.js` runs through without a message, and `node build.js --check` confirms that `index.html` matches its sources. Open `index.html` in a browser, once as it is and once with `?lang=de` (or `?lang=en`): the count next to the search must have gone up by one, the new card must be found by title, tag, kind and level in both languages, and the copy button must deliver the text. For skills and agents, also: the "Save as file" button saves the file under its name. Then open a pull request.

No copyrighted texts. Thank you.
