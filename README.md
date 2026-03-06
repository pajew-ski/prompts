# PROMPTS

Eine Sammlung von **100+ KI-Prompting-Strategien** auf Deutsch – durchsuchbar, filterbar und sofort kopierbar.

## Features

- **100+ Strategien** von Chain-of-Thought bis Tree-of-Thought, ReAct u.v.m.
- **Echtzeit-Suche** über Titel, Tags und Inhalte
- **Filter** nach Schwierigkeitsgrad (Anfänger / Mittel / Fortgeschritten)
- **Doppelklick** oder Kopier-Button kopiert den Prompt-Text
- **Dark/Light Mode** – folgt automatisch dem System-Theme
- **Semantische Daten** – RDF/Turtle und JSON-LD Export
- **PWA** – offline nutzbar nach dem ersten Laden

---

## Standalone (ohne Home Assistant)

### Voraussetzungen

- **[Bun](https://bun.sh)** (v1.0+)

### Installation & Start

```bash
git clone https://github.com/pajew-ski/prompts.git
cd prompts
bun install
bun run build
bun run serve
```

Die Seite läuft unter `http://localhost:3000`.

---

## Home Assistant Add-on

Das Projekt kann als **Home Assistant Add-on** direkt in der Sidebar installiert werden.

### Installation

1. In Home Assistant: **Einstellungen → Add-ons → Add-on Store**
2. Oben rechts auf **⋮ → Repositories** klicken
3. Repository-URL hinzufügen:
   ```
   https://github.com/pajew-ski/prompts
   ```
4. **Prompts** im Store suchen und installieren
5. Add-on starten – es erscheint automatisch in der Sidebar

### Funktionsweise

- Das Add-on baut die Seite beim Container-Start und serviert sie über **Ingress** (Port 8099).
- Es wird kein externer Port freigegeben – der Zugriff läuft ausschließlich über die HA-Oberfläche.
- Dark/Light Mode passt sich dem HA-Theme an.
- Die Zwischenablage-Funktion nutzt einen `execCommand`-Fallback, da HA Ingress die `clipboard-write` Permission nicht gewährt.

### Architektur-Support

| Architektur | Unterstützt |
|-------------|-------------|
| amd64       | Ja          |
| aarch64     | Ja          |
| armv7       | Ja          |
| armhf       | Ja          |
| i386        | Ja          |

---

## Projektstruktur

```
prompts/
├── content/          # 100+ Markdown-Dateien (eine pro Strategie)
├── src/              # Frontend-Assets (HTML, CSS, JS, PWA)
├── build.ts          # Build-Script → generiert dist/
├── serve.ts          # Dev-Server (Bun)
├── rdf.ts            # RDF/Turtle + JSON-LD Generator
├── config.yaml       # Home Assistant Add-on Konfiguration
├── Dockerfile        # Container-Build für HA
└── dist/             # Generierter Output (gitignored)
```

## Lizenz

[MIT License](LICENSE)
