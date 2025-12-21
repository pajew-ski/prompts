# Mitmachen bei PROMPTS

Wir freuen uns über jeden Beitrag zur deutschsprachigen Prompt-Bibliothek! Egal ob du einen neuen Prompt hinzufügen, einen bestehenden verbessern oder Fehler korrigieren möchtest – deine Hilfe ist willkommen.

## Einen neuen Prompt hinzufügen

1. **Forken & Klonen**: Forke dieses Repository und klone es auf deinen lokalen Rechner.
2. **Datei erstellen**: Erstelle eine neue Markdown-Datei (`.md`) im Ordner `content/`. Der Dateiname sollte kurz und beschreibend sein (z.B. `chain-of-thought.md`).
3. **Frontmatter**: Jede Datei muss mit einem YAML-Frontmatter beginnen:
   ```yaml
   ---
   title: "Name des Prompts"
   description: "Eine kurze Beschreibung, was der Prompt macht."
   tags: ["Tag1", "Tag2"]
   difficulty: "Beginner" # oder "Intermediate", "Advanced"
   ---
   ```
4. **Inhalt**: Schreibe den Inhalt des Prompts und die Erklärung in Markdown unter das Frontmatter. Bitte verwende **Deutsch** als Sprache.
5. **Testen**:
   - Installiere Abhängigkeiten: `bun install`
   - Baue das Projekt: `bun run build.ts`
   - Starte den Server: `bun run serve.ts`
   - Öffne `http://localhost:3000` und prüfe, ob dein Prompt korrekt angezeigt wird.

## Pull Request erstellen

- Committe deine Änderungen: `git commit -m "feat: Add new prompt XYZ"`
- Pushe auf deinen Fork.
- Erstelle einen Pull Request (PR) auf GitHub.

## Hinweise

- Bitte achte auf korrekte Rechtschreibung und Grammatik.
- Die Prompts sollten allgemeinverständlich erklärt sein.
- Keine urheberrechtlich geschützten Texte verwenden.

Vielen Dank für deine Unterstützung!
