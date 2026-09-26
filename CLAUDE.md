# CLAUDE.md

Read [AGENTS.md](AGENTS.md). It is the whole specification of this repository: one file, `index.html`, holds the page, the stylesheet, all strategies and the script. There is no build, no content directory and no add-on packaging here; the Home Assistant add-on is built from `index.html` by the [Home Assistant Apps Collection](https://github.com/pajew-ski/home-assistant-apps-collection).

The former pipeline (`content/`, `src/`, `build.ts`, `rdf.ts`, `serve.ts`, `index.ts`, `tests/`, `package.json`, `Dockerfile`, `config.yaml` and the other add-on files) is superseded by `index.html` and is no longer read by anything. Do not extend it; remove it.
