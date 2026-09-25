# prompts

Hundert Prompting-Strategien für Sprachmodelle, auf Deutsch, als eine Seite. Suchen, aufklappen, kopieren. Eine HTML-Datei mit allem darin, sonst nichts.

**Seite**: [pajew-ski.github.io/prompts](https://pajew-ski.github.io/prompts/)

## Was drin ist

Eine Prompting-Strategie ist ein wiederverwendbares Muster für die Anweisung an ein Sprachmodell: Chain of Thought lässt es Zwischenschritte ausgeben, Few-Shot zeigt ihm Beispiele, ein Persona-Prompt gibt ihm eine Rolle. Jede Karte auf der Seite ist eine solche Strategie mit einem Satz zum Zweck, Schlagworten, einer Erklärung und einem Beispiel-Prompt, den ein Knopf in die Zwischenablage kopiert.

Drei Stufen sagen, wie viel Vorwissen eine Strategie braucht: Anfänger funktioniert mit einem Satz im Prompt, Mittel braucht etwas Struktur, Fortgeschritten setzt auf mehrere Schritte oder mehrere Prompts.

Die Suche läuft im Browser über Titel, Schlagworte und Text. Ein Schlagwort anklicken filtert danach, der Titel einer Karte ist ihr Link. Nichts wird nachgeladen, nichts gesendet.

## Lokal ausführen

```bash
git clone https://github.com/pajew-ski/prompts.git
cd prompts
open index.html
```

Die ganze App ist `index.html`; diese eine Datei läuft überall, wohin man sie kopiert. Es gibt keinen Build-Schritt und keine Abhängigkeit. Jeder statische Host liefert sie so aus, wie sie ist; auf GitHub Pages aus dem Root von `main`. Die Footer-Links passen sich einem Fork von selbst an.

Als Home-Assistant-Add-on kommt die Seite über die [Home Assistant Apps Collection](https://github.com/pajew-ski/home-assistant-apps-collection), zusammen mit den Geschwister-Apps.

## Mitmachen

Eine Strategie ist ein `<article>`-Block in `index.html`; [CONTRIBUTING.md](CONTRIBUTING.md) zeigt ihn. Alles hier wurde von einem Coding-Agenten aus [AGENTS.md](AGENTS.md) gebaut, der Design- und Verhaltensspezifikation der Seite.

## Lizenz

[MIT](LICENSE).
