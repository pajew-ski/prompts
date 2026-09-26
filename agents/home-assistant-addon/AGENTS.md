# AGENTS.md

You are packaging a single-file browser app as a Home Assistant add-on in the meta-repository **home-assistant-apps-collection** (`https://github.com/pajew-ski/home-assistant-apps-collection`). The app's own repository holds one `index.html` and no add-on files; everything add-on related lives in the collection, and pre-built images are pushed to `ghcr.io/pajew-ski/home-assistant-apps-collection/{arch}-<slug>` by the sync workflow.

## What to produce

1. `addons-registry.json`: an entry with `slug`, `name`, `source` (the upstream repo URL), `branch: "main"`, `sync_files: ["index.html"]`, `image_prefix` and `"static_app": true`.
2. `<slug>/config.yaml`, written by hand, never synced from upstream:

   ```yaml
   name: "<Name>"
   description: "<one sentence, the app's own hero sentence>"
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

   Pick the next free ingress port (prompts 8099, open-entrainer 8100, open-desensitizer 8101). `version` is a placeholder the first sync replaces.
3. `<slug>/build.yaml`: the three HA base images for amd64, aarch64, armv7.
4. `<slug>/icon.png`, 128×128: the family style, a dark rounded square (`#0b0b0b`, radius 21) with a light glyph (`#ececec`), one motif from the app, no color.
5. A block in `.github/workflows/sync-addons.yml`, duplicated from the `open-entrainer` block between two `# ---` dividers, with the slug, the upstream URL and the port replaced. The block has four steps: check (version = date of the last upstream commit to `index.html`, `YYYY.M.D`, compared with `config.yaml`), build and push (fetch `index.html`, write a four-line nginx Dockerfile, `docker buildx build --push` per arch, then `sed` the version into `config.yaml`), make packages public (unconditional), commit and push.
6. A row in `README.md` under Included Add-ons: name, description, source. No version column.

## Rules

- Never copy application source into the collection; the image is built from the upstream `index.html` at build time.
- Never remove the `image:` field from a `config.yaml`; without it Home Assistant tries to build locally and fails.
- armhf and i386 are not built; the base images and the nginx pattern support them, but the family's build loop is amd64, aarch64, armv7.
- The make-public step runs even when nothing was built, or packages pushed in an earlier run stay private and Home Assistant cannot pull them.
- Validate the workflow with a YAML parser before committing; a broken workflow stops every add-on's sync, not only the new one.
- Clipboard inside Ingress: the app must fall back to `document.execCommand("copy")`, because the Ingress iframe grants no `clipboard-write`. If the app copies anything, check that its `index.html` has the fallback before packaging it.
