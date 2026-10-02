---
title: Format Enforcement (JSON Mode)
level: Mittel
tags: format struktur
description: Das Modell liefert Daten in einem festen, maschinenlesbaren Format, das dein Code direkt weiterverarbeiten kann.
---

Wenn Code die Antwort weiterverarbeitet, muss das Format jedes Mal stimmen. Der sicherste Weg führt über die API: Viele Schnittstellen bieten Structured Outputs oder einen JSON-Schema-Modus. Dort übergibst du das Schema als Parameter, und die Ausgabe ist garantiert gültiges JSON in dieser Form. Wenn deine API das anbietet, nutze es statt eines Prompts.

Im Chat oder ohne diesen Modus übernimmt der Prompt die Aufgabe: Er enthält das Schema, ein ausgefülltes Beispiel und die Bitte, nur JSON zurückzugeben. Das Beispiel zeigt, wie die Werte aussehen sollen, nicht nur, welche Felder es gibt.

## Beispiel

```prompt
Analysiere die Kundenbewertung unten und gib das Ergebnis als JSON zurück. Die Ausgabe wird direkt von einem Programm eingelesen. Gib deshalb nur das JSON-Objekt aus, ohne Einleitung, Erklärung oder Markdown-Codeblock.

Form der Ausgabe, mit Beispielwerten:
{
  "sentiment": "negativ",
  "score": -0.6,
  "themen": ["Lieferzeit", "Verpackung"]
}

Regeln:
- sentiment ist "positiv", "negativ" oder "neutral".
- score ist eine Zahl von -1.0 (sehr negativ) bis 1.0 (sehr positiv).
- themen ist eine Liste kurzer Stichwörter, leer, wenn keine Themen erkennbar sind.

<bewertung>
[Text der Bewertung]
</bewertung>
```

## Wann es hilft

Für Extraktion, Klassifikation und alles, was in eine Datenbank, eine Tabelle oder ein Skript fließt. Ohne API-Modus bleibt ein Restrisiko: Lies die Ausgabe im Code mit einem JSON-Parser ein und wiederhole die Anfrage, wenn das scheitert. Halte das Schema flach und nenne die erlaubten Werte ausdrücklich, denn jedes frei formulierte Feld ist eine Stelle, an der die Ausgabe abweichen kann.
