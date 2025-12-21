---
title: "Sandwich Prompting"
description: "Den Kern-Input zwischen Kontext und Format-Anweisungen 'einklemmen'."
tags: ["struktur", "robustheit", "formatting"]
difficulty: "Anfänger"
---

# Sandwich Prompting

Lange Prompts verlieren am Ende oft an Kraft. Sandwiching hilft.

## Beispiel

**Prompt:**
```text
[Header: Rolle & Kontext]
Du bist ein SQL-Experte.
```>
> [Data: Das Fleisch]
> Hier ist das Datenbankschema: ...
>
> [Footer: Strikte Formatierung & Constraints]
> Gib NUR den SQL-Code aus. Keine Erklärungen. Formatier es als Code-Block.

## Strategie

Besonders wichtig bei Modellen mit kleinerem Kontext-Fenster.
