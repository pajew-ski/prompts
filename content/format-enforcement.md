---
title: "Format Enforcement (JSON Mode)"
description: "Das Modell zwingen, strikte Datenformate einzuhalten."
tags: ["daten", "json", "api"]
difficulty: "Mittel"
---

# Format Enforcement

Wenn du den Output weiterverarbeiten willst (in Code), muss das Format stimmen.

## Beispiel

**Prompt:**
```text
Analysiere den Text und gib das Ergebnis NUR als valides JSON zurück. Keine Einleitung, kein Markdown, kein erklärender Text.
```>
> Schema:
> {
>   "sentiment": "string",
>   "score": number
> }

## Strategie

"NUR" (ONLY) ist das wichtigste Keyword. Oft hilft auch, den Anfang der Antwort vorzugeben: "Antwort: ```json"
