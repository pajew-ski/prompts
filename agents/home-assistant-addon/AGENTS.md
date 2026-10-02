# AGENTS.md

You are packaging a single-file browser app as a Home Assistant add-on in the meta-repository **home-assistant-apps-collection** (`https://github.com/pajew-ski/home-assistant-apps-collection`). The app's own repository holds one `index.html` and no add-on files; everything add-on related lives in the collection. The collection's sync workflow builds the image from the upstream `index.html` behind nginx (`static-app/Dockerfile`, shared by every static app), pushes it to `ghcr.io/pajew-ski/home-assistant-apps-collection/{arch}-<slug>`, and writes the version. A static app needs no workflow code of its own: the workflow reads `addons-registry.json`.

## What to produce

In the collection:

1. `addons-registry.json`: an entry with `slug` (the upstream repository name), `name`, `source` (the upstream repo URL), `branch: "main"`, `sync_files: ["index.html"]`, `image_prefix` and `"static_app": true`.
2. `<slug>/config.yaml`, written by hand, never synced from upstream:

   ```yaml
   name: "<Name>"
   description: "<one or two sentences in English, after the app's own hero sentence>"
   version: "0.0.0"
   slug: <slug>
   url: "https://github.com/pajew-ski/<slug>"
   arch:
       - amd64
       - aarch64
       - armv7
   startup: application
   boot: auto
   init: false
   ingress: true
   ingress_port: <port>
   ingress_entry: "/"
   panel_icon: "mdi:<icon>"
   panel_title: "<Name>"
   panel_admin: false
   image: "ghcr.io/pajew-ski/home-assistant-apps-collection/{arch}-<slug>"
   ports:
       <port>/tcp: null
   ports_description:
       <port>/tcp: "Web UI"
   options: {}
   schema: {}
   ```

   Pick the next free ingress port (prompts 8099, open-entrainer 8100, open-desensitizer 8101, open-helix 8102). The workflow reads the port and the arch list from this file. `version` is a placeholder the first sync replaces.
3. `<slug>/icon.png`, 128×128: the family style, a dark rounded square (`#0b0b0b`, radius 21) with a light glyph (`#ececec`), one motif from the app, no color.
4. A row in `README.md` under Included Add-ons: name, description, source. No version column; the store shows the version.

In the app's own repository:

5. `.github/workflows/notify-addon.yml`, copied from a sibling (open-entrainer has it): on every push to `main` that changes `index.html`, it sends a `repository_dispatch` of type `upstream-changed` with the slug to the collection, so the new version is built within minutes. It needs the repository secret `APPS_COLLECTION_TOKEN` (a fine-grained token with "Contents: Read and write" on the collection); without it the job ends green with a notice and the collection's hourly check picks the change up instead.

## How versions work

The workflow compares the newest upstream commit that touched `index.html` with `<slug>/.upstream-sha`. A new commit gets the version `YYYY.M.D.HHMM` from its commit time (UTC), always higher than the one before, so every merge becomes an update Home Assistant offers. `config.yaml` and `.upstream-sha` are committed only after the images for every arch are pushed.

## Rules

- Never copy application source into the collection; the image is built from the upstream `index.html` of the exact commit at build time.
- Never remove the `image:` field from a `config.yaml`; without it Home Assistant tries to build locally and fails.
- armhf and i386 are not built; the arch list in `config.yaml` is the build list.
- A package that a workflow pushes for the first time is private, and GitHub has no API to change that. After the first build of a new add-on, set each of its packages to public once in the package settings; the workflow's public check prints the links as warnings until it is done.
- Validate the workflow and the registry before committing (`actionlint`, a JSON parser); a broken workflow stops every add-on's sync, not only the new one.
- Clipboard inside Ingress: the app must fall back to `document.execCommand("copy")`, because the Ingress iframe grants no `clipboard-write`. If the app copies anything, check that its `index.html` has the fallback before packaging it.
