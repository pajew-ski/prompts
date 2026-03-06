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
├── translations/
│   └── en.yaml       # HA add-on translations stub
├── build.ts          # Main build script: parses content/, generates dist/
├── rdf.ts            # RDF/Turtle and JSON-LD semantic data generator
├── serve.ts          # Dev server (Bun); supports HA Ingress via env vars
├── index.ts          # CLI entry point dispatching build/serve/test/help commands
├── package.json      # Scripts delegate to index.ts
├── tsconfig.json     # Strict TypeScript (ESNext, bundler resolution, noEmit)
├── .prettierrc       # 4-space indent, double quotes, trailing commas (ES5), printWidth 100
├── config.yaml       # Home Assistant add-on configuration
├── build.yaml        # HA add-on base images per architecture
├── Dockerfile        # Multi-stage: oven/bun builds site, HA base + nginx serves
├── nginx.conf        # nginx config for HA add-on (port 8099)
├── run.sh            # HA add-on entry point (starts nginx)
├── repository.yaml   # HA add-on repository metadata
├── DOCS.md           # Documentation shown in HA add-on UI (German)
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
- **Clipboard strategy**: tries `navigator.clipboard.writeText()` first; falls back to `document.execCommand('copy')` via a temporary `<textarea>`. The fallback is required for embedded contexts such as **Home Assistant Ingress**, where the parent iframe does not grant the `clipboard-write` permission policy.
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

## Home Assistant Add-on

The project doubles as a Home Assistant add-on. All HA-specific files live in the repo root:

- **`config.yaml`**: Add-on metadata — name, version, ingress config, supported architectures. **Bump the `version` field every time you change anything that affects the Docker image** (Dockerfile, nginx.conf, run.sh, build pipeline, content, styles, JS). HA caches images by version; same version = no rebuild.
- **`build.yaml`**: Maps architectures to HA base images (`ghcr.io/home-assistant/*-base:latest`).
- **`Dockerfile`**: Multi-stage build. Stage 1 uses `oven/bun:1-alpine` to install deps and run `build.ts`. Stage 2 copies `dist/` into the HA base image and installs nginx. Bun is **not** needed at runtime.
- **`nginx.conf`**: Serves static files from `/var/www/html` on port 8099. HA Ingress proxies to this port.
- **`run.sh`**: Entry point — starts nginx in foreground (`daemon off`).
- **`repository.yaml`**: Allows HA to discover the add-on when the repo URL is added as a custom repository.
- **`DOCS.md`**: German documentation shown in the HA add-on info panel.
- **`translations/en.yaml`**: Required translations stub.

### Ingress

- `config.yaml` sets `ingress: true` and `ingress_port: 8099`.
- `serve.ts` (used in standalone mode) reads `INGRESS_PORT` and `INGRESS_HOST` env vars and strips the `X-Ingress-Path` header prefix from request paths.
- In the Docker add-on, nginx handles serving directly — `serve.ts` is not used at runtime.

### Version Bumping

**Every change that affects the built Docker image requires a version bump in `config.yaml`.** This includes changes to: Dockerfile, nginx.conf, run.sh, build.ts, rdf.ts, any file in `src/`, any file in `content/`, package.json. Without a version bump, HA will not rebuild the image and users won't see the update.

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
11. **Home Assistant Ingress compatibility**: The site is designed to work inside HA Ingress iframes. The `copyToClipboard` function must always include the `execCommand` fallback because HA Ingress does not grant `clipboard-write` permission to embedded frames. Do not remove the fallback.
12. **HA add-on version bump**: Every change that affects the Docker image (Dockerfile, nginx.conf, run.sh, build.ts, src/*, content/*, package.json) **must** include a version bump in `config.yaml`. HA caches by version — same version means no rebuild.
13. **Dockerfile is multi-stage**: Stage 1 (`oven/bun:1-alpine`) builds the static site. Stage 2 (HA base image) serves with nginx. Do **not** try to install Bun on HA base images — the Alpine/musl combination is unreliable.
14. **Dark mode colors**: Aligned with HA dark theme defaults (`#111111` background, `#1c1c1c` card surfaces, `#e1e1e1` text). Keep these in sync if HA changes their defaults.
15. **Font stack**: Uses `Roboto, Noto, Inter, system-ui` — Roboto and Noto are HA's default fonts.
