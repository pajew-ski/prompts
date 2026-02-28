# CLAUDE.md

This file provides guidance for AI assistants working with this codebase.

## Project Overview

**PROMPTS** is a static-site generator for a German-language collection of 100+ AI prompting strategies. It reads Markdown files from `content/`, builds a single-page HTML app with semantic search/filtering, and exports RDF semantic data. The runtime is **Bun** (not Node.js).

## Repository Structure

```
prompts/
├── content/          # 100 Markdown files, one per prompting strategy (German)
├── src/
│   ├── template.html # HTML shell with {{TITLE}}, {{CONTENT}}, {{JSON_LD}} placeholders
│   ├── style.css     # All UI styles (light/dark themes via data-theme attribute)
│   ├── script.js     # Client-side search, filtering, theme, copy, click logic
│   ├── sw.js         # Service worker (cache-first PWA strategy, CACHE_NAME v2)
│   ├── manifest.json # PWA manifest
│   └── icon.svg      # Site icon
├── tests/
│   ├── build.test.ts # Verifies build produces dist/index.html
│   └── content.test.ts # Validates every content/*.md file's frontmatter and body format
├── build.ts          # Main build script: parses content/, generates dist/
├── rdf.ts            # RDF/Turtle and JSON-LD semantic data generator
├── serve.ts          # Local dev server (Bun, port 3000, serves dist/)
├── index.ts          # CLI entry point dispatching build/serve/test/help commands
├── package.json      # Scripts delegate to index.ts
├── tsconfig.json     # Strict TypeScript (ESNext, bundler resolution, noEmit)
├── .prettierrc       # 4-space indent, double quotes, trailing commas (ES5), printWidth 100
└── .github/workflows/deploy.yml  # GitHub Actions: build → deploy to GitHub Pages on push to main
```

`dist/` is gitignored and generated at build time.

## Development Commands

```bash
bun install           # Install dependencies
bun run build         # Generate dist/ (alias: bun run build.ts)
bun run serve         # Start dev server at http://localhost:3000
bun test              # Run the test suite (alias: bun run index.ts test)
```

All commands route through `index.ts`. Scripts in `package.json` call `bun run index.ts <command>`.

## Content File Format (`content/*.md`)

Every Markdown file **must** follow this exact structure or the build will skip it and tests will fail:

```markdown
---
title: "Name des Prompts"
description: "Eine kurze Beschreibung, was der Prompt macht."
tags: ["tag1", "tag2"]
difficulty: "Anfänger"
---

# Titel

Erklärung der Strategie...

## Beispiel

**Prompt:**
```text
Der eigentliche Prompt-Text hier.
```

## Strategie

Weitere Erklärungen...
```

### Frontmatter Rules

| Field        | Type     | Required | Valid Values                              |
|--------------|----------|----------|-------------------------------------------|
| `title`      | string   | yes      | Any non-empty string                      |
| `description`| string   | yes      | Any non-empty string                      |
| `tags`       | string[] | yes      | At least one tag (lowercase, no spaces)   |
| `difficulty` | string   | yes      | `"Anfänger"`, `"Mittel"`, `"Fortgeschritten"` |

**Note:** The difficulty values in content files use German (`Anfänger`/`Mittel`/`Fortgeschritten`). The HTML template uses lowercase for CSS classes (`anfänger`/`mittel`/`fortgeschritten`). This is enforced in `tests/content.test.ts:32`.

### Body Format Rule (Enforced by Tests)

The prompt text **must** be in a fenced code block tagged as ` ```text ` or ` ```markdown `. A plain blockquote (`> ...`) after `**Prompt:**` is legacy format and will not pass `content.test.ts`. The build script (`build.ts:57–70`) supports both, but the test suite requires the code-block format.

## Build Pipeline (`build.ts`)

1. Creates `dist/` directory
2. Reads `src/template.html`
3. Iterates `content/*.md` — parses YAML frontmatter with `js-yaml`, converts body to HTML with `marked`
4. Extracts raw prompt text for clipboard copy (prefers ` ```text ` / ` ```markdown ` blocks, falls back to `**Prompt:**` blockquotes)
5. Computes related strategies via tag-overlap (Jaccard-like, top 3)
6. Generates HTML cards with `data-copy-text` (URL-encoded), `data-tags`, `data-title` attributes
7. Injects cards + JSON-LD into template placeholders and writes `dist/index.html`
8. Copies `src/` assets to `dist/`
9. Calls `rdf.ts` to generate `dist/graph.ttl` and `dist/graph.jsonld`

## Semantic Data (`rdf.ts`)

- Uses `http://localhost:3000/` as the base URI (hardcoded `BASE_URI`)
- Exports each prompt as a `schema:TechArticle` with `schema:inLanguage "de"`
- Tags become `skos:Concept` nodes in a `skos:ConceptScheme`
- Outputs two files: `graph.ttl` (Turtle) and `graph.jsonld` (JSON-LD)

## Frontend Behavior (`src/script.js`)

- **Search**: real-time, scores title (+100), tags (+50), full content (+10)
- **Sort**: relevance (score), A-Z, Z-A
- **Difficulty filter**: dropdown filters by `.difficulty-badge` text
- **Click interactions on cards**:
  - Single click → toggle `<details>` open/closed
  - Double click → copy prompt text to clipboard
  - Triple click → attempt `window.close()`
- **Copy button** (`.copy-btn`): always copies, shows checkmark for 2 seconds
- **Theme**: checks `localStorage('theme')` then `prefers-color-scheme`; system changes clear manual override; sets `data-theme` on `<html>`

## TypeScript Configuration

- `strict: true`, `noUncheckedIndexedAccess: true`, `noImplicitOverride: true`
- `noUnusedLocals`/`noUnusedParameters` are **disabled** (set to false)
- `noEmit: true` — Bun handles transpilation; tsc is type-check only
- `moduleResolution: "bundler"` with `allowImportingTsExtensions: true`

## Code Style

Enforced by Prettier (`.prettierrc`):
- **4-space indentation** (no tabs)
- **Double quotes** for strings
- **Trailing commas** (ES5 style)
- **Print width**: 100 characters
- **Semicolons**: always

## Testing

Tests use `bun:test` (built-in Bun test runner):

- `tests/build.test.ts` — spawns `build.ts`, asserts `dist/index.html` exists
- `tests/content.test.ts` — for each `content/*.md`:
  - Frontmatter must parse and contain all required fields
  - `difficulty` must be one of the three German values
  - Body must contain a ` ```text ` or ` ```markdown ` code block

Run with: `bun test`

## CI/CD (GitHub Actions)

- Trigger: push to `main` or manual `workflow_dispatch`
- Steps: checkout → setup Bun (latest) → `bun install` → `bun run build.ts` → upload `dist/` → deploy to GitHub Pages
- The deploy branch is `main` (not `master`)

## Key Conventions for AI Assistants

1. **Language**: All content in `content/` is written in **German**. Keep it German.
2. **Adding prompts**: Create a new `.md` file in `content/`, follow the frontmatter schema exactly, use ` ```text ` for the prompt body.
3. **Difficulty values**: Use German strings — `Anfänger`, `Mittel`, `Fortgeschritten` — never English.
4. **No build artifacts**: Never commit the `dist/` directory.
5. **Bun, not Node**: Use `bun` CLI for all commands; APIs like `Bun.file()`, `Bun.spawn()` are used directly.
6. **Template placeholders**: The three replaceable tokens in `src/template.html` are `{{TITLE}}`, `{{CONTENT}}`, `{{JSON_LD}}` — exact case matters.
7. **Service worker cache**: If adding new static assets, update the `ASSETS` array in `src/sw.js` and bump `CACHE_NAME` (currently `prompts-cache-v2`).
8. **RDF base URI**: `rdf.ts` hardcodes `http://localhost:3000/` — this should be updated to the production domain before deploying to a custom domain.
9. **Run tests before committing**: `bun test` validates all content files. A failing content test means a file has malformed frontmatter or is missing the required code block.
10. **Slug is filename**: Each prompt's URL slug is derived from its filename (minus `.md`). Use lowercase, hyphen-separated filenames (e.g., `chain-of-thought.md`).
