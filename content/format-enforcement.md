---
title: Format Enforcement (JSON Mode)
level: Mittel
tags: daten json api
description: Das Modell zwingen, strikte Datenformate einzuhalten.
---

Wenn du den Output weiterverarbeiten willst (in Code), muss das Format stimmen.

## Beispiel

```prompt
Analysiere den Text und gib das Ergebnis NUR als valides JSON zurück. Keine Einleitung, kein Markdown, kein erklärender Text.
Schema:
{
  "sentiment": "string",
  "score": number
}
```

## Strategie

"NUR" (ONLY) ist das wichtigste Keyword. Oft hilft auch, den Anfang der Antwort vorzugeben: "Antwort: \`\`\`json"
