# prompts

Hundert Prompting-Strategien für Sprachmodelle, auf Deutsch, als eine Seite, dazu Skills und Agenten-Anweisungen in den Standardformaten `SKILL.md` und `AGENTS.md`. Suchen, aufklappen, kopieren. Eine HTML-Datei mit allem darin; die Standarddateien liegen daneben, wo Werkzeuge sie erwarten.

**Seite**: [pajew-ski.github.io/prompts](https://pajew-ski.github.io/prompts/)

## Was drin ist

Ein Prompt ist eine Anweisung, Frage oder Eingabe an einen Menschen oder eine KI, die eine bestimmte Handlung oder Antwort auslösen soll. Eine Prompting-Strategie ist ein wiederverwendbares Muster dafür: Chain of Thought lässt es Zwischenschritte ausgeben, Few-Shot zeigt ihm Beispiele, ein Persona-Prompt gibt ihm eine Rolle. Jede Karte auf der Seite ist eine solche Strategie mit einem Satz zum Zweck, Schlagworten, einer Erklärung und einem Beispiel-Prompt, den ein Knopf in die Zwischenablage kopiert.

Drei Stufen sagen, wie viel Vorwissen eine Strategie braucht: Anfänger funktioniert mit einem Satz im Prompt, Mittel braucht etwas Struktur, Fortgeschritten setzt auf mehrere Schritte oder mehrere Prompts.

Die Suche läuft im Browser über Titel, Schlagworte und Text und steht oben auf der Seite; Enter kopiert den Prompt des ersten Treffers, `/` springt ins Feld, Esc leert es. Ein Schlagwort anklicken filtert danach, der Titel einer Karte ist ihr Link. Nichts wird nachgeladen, nichts gesendet.

## Skills und Agenten

Zwei weitere Kartenarten sind nach derselben Definition ebenfalls Prompts, nur übergibt sie nicht der Mensch, sondern der Agent liest sie von einem festen Pfad. Es sind Dateien in Standardformaten, die Coding-Agenten lesen:

- **Skills** nach dem [Agent-Skills-Standard](https://agentskills.io): `skills/<name>/SKILL.md` mit `name` und `description` im Kopf und der Anleitung darunter. Claude Code, Codex und andere laden einen Skill, wenn die Beschreibung auf die Aufgabe passt.
- **Agenten** nach dem [AGENTS.md-Standard](https://agents.md): `agents/<name>/AGENTS.md`, die Anweisung, die im Wurzelverzeichnis eines Repos sagt, wie darin gearbeitet wird.

Die Karte zeigt die Datei, ein Knopf kopiert sie, einer speichert sie unter ihrem Namen. Die Dateien liegen zugleich im Repo, damit Werkzeuge sie an ihrem Pfad finden; ein Check hält Karte und Datei byte-gleich. Eigene Skills und Agenten kommen als Datei plus Karte dazu, siehe [CONTRIBUTING.md](CONTRIBUTING.md).

## Lokal ausführen

```bash
git clone https://github.com/pajew-ski/prompts.git
cd prompts
open index.html
```

Die ganze App ist `index.html`; diese eine Datei läuft überall, wohin man sie kopiert. Es gibt keinen Build-Schritt und keine Abhängigkeit. Jeder statische Host liefert sie so aus, wie sie ist; auf GitHub Pages aus dem Root von `main`. Die Footer-Links passen sich einem Fork von selbst an.

Als Home-Assistant-Add-on kommt die Seite über die [Home Assistant Apps Collection](https://github.com/pajew-ski/home-assistant-apps-collection), zusammen mit den Geschwister-Apps.

## Mitmachen

Eine Strategie ist ein `<article>`-Block in `index.html`, ein Skill oder Agent eine Datei plus Block; [CONTRIBUTING.md](CONTRIBUTING.md) zeigt beides. Alles hier wurde von einem Coding-Agenten aus [AGENTS.md](AGENTS.md) gebaut, der Design- und Verhaltensspezifikation der Seite.

## Lizenz

[MIT](LICENSE).
