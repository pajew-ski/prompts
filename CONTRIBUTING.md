# Mitmachen

Die Seite ist eine Datei, `index.html`, ihre Karten sind erzeugt. Eine Strategie ist eine Markdown-Datei unter `content/`, ein Skill oder Agent seine Standarddatei unter `skills/` oder `agents/`. `node build.js` schreibt daraus die Karten in die Seite; nur Node, keine Abhängigkeit. Die erzeugte Seite wird mit eingecheckt, damit sie ohne Build läuft. Zwischen den Markern `cards:start` und `cards:end` in `index.html` nichts von Hand ändern; der Check im Repo (`.github/workflows/check.yml`) schlägt fehl, wenn die Seite nicht zu den Quellen passt.

## Eine Strategie hinzufügen

Eine Datei `content/<slug>.md`; der Dateiname ist der Slug und damit der Link zur Karte (`#<slug>`).

````markdown
---
title: Name der Strategie
level: Mittel
tags: struktur analyse
description: Ein Satz, was die Strategie bewirkt.
---

Worum es geht.

## Beispiel

```prompt
Der Prompt-Text, genau so, wie er eingefügt werden soll.
```

## Strategie

Wann und warum es funktioniert.
````

Regeln:

- Der Slug ist klein, mit Bindestrichen, eindeutig.
- `level` ist eines von `Anfänger`, `Mittel`, `Fortgeschritten`.
- Schlagworte klein, ohne Leerzeichen, durch Leerzeichen getrennt. Vorhandene Schlagworte wiederverwenden, denn über sie findet die Seite verwandte Strategien.
- Genau ein Codeblock mit der Sprache `prompt` pro Datei. Er wird zum kopierbaren Block der Karte, wörtlich; nichts darin wird umgeformt.
- Der Text ist Markdown in dem Umfang, den `build.js` kennt: Absätze, `##` und `###` als Überschriften, Listen mit `-` oder `1.`, Zitate mit `>`, weitere Codeblöcke, und inline `**fett**`, `*kursiv*`, `` `code` `` und `[Links](url)`. Ein Backslash vor `` ` * _ [ ] `` lässt das Zeichen stehen. HTML wird nicht durchgereicht.
- Deutsch, schlichte Sätze, Präsens, keine Ausrufezeichen, keine Emoji.

Dann `node build.js`; die Seite und die neue Datei zusammen committen.

## Einen Skill hinzufügen

Ein Skill folgt dem Agent-Skills-Standard: ein Ordner `skills/<name>/` mit einer Datei `SKILL.md`.

```markdown
---
name: mein-skill
description: Was der Skill tut und wann ein Agent ihn laden soll, in einem Absatz.
license: MIT
metadata:
  tags: struktur analyse
---

# Mein Skill

Die Anleitung, die der Agent befolgt.
```

- `name` ist klein, mit Bindestrichen, höchstens 64 Zeichen, und gleich dem Ordnernamen. `description` höchstens 1024 Zeichen; sie entscheidet, ob ein Agent den Skill lädt, also steht dort der Anlass, nicht nur der Inhalt.
- `metadata.tags` sind die Schlagworte der Karte; `metadata` ist im Standard der Platz für eigene Schlüssel.
- Die Karte entsteht aus der Datei: Titel ist der Name, Beschreibung und Schlagworte kommen aus dem Kopf, der kopierbare Block ist die ganze Datei. Nach dem Anlegen `node build.js`.

## Einen Agenten hinzufügen

Ein Agent folgt dem AGENTS.md-Standard: ein Ordner `agents/<name>/` mit einer Datei `AGENTS.md`, reines Markdown ohne Kopf, so, wie sie später im Wurzelverzeichnis eines Repos liegen soll. Weil sie keinen Kopf hat, liegt daneben eine Datei `card.md` nur mit dem Kopf für die Karte:

```markdown
---
description: Ein Satz, wofür die Anweisung ist.
tags: design web agents.md
---
```

Dann `node build.js`.

## Prüfen

`node build.js` läuft ohne Meldung durch, `node build.js --check` bestätigt, dass `index.html` zu den Quellen passt. `index.html` im Browser öffnen: die Zahl neben der Suche muss um eins gestiegen sein, die neue Karte muss über Titel, Schlagwort, Art und Stufe zu finden sein, und der Kopierknopf muss den Text liefern. Bei Skills und Agenten zusätzlich: der Knopf „Als Datei" speichert die Datei unter ihrem Namen. Dann ein Pull Request.

Keine urheberrechtlich geschützten Texte. Danke.
