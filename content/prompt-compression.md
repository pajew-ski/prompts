---
title: "Prompt Compression"
description: "Lange Prompts kürzen, um Tokens zu sparen, ohne die Instruktion zu verlieren."
tags: ["optimierung", "kosten", "tokens"]
difficulty: "Fortgeschritten"
---

# Prompt Compression

Wenn du mit Context-Limits kämpfst, kannst du Prompts komprimieren.

## Beispiel

**Prompt:**
```text
Komprimiere den folgenden Text so, dass du (als AI) ihn immer noch verstehst, aber er so wenige Tokens wie möglich verbraucht. Nutze Abkürzungen und Symbolsrpache.
```>
> Text: [Lange Instruktion]

## Strategie

Oft reicht "Trnsl8 fr -> de" statt "Bitte übersetze den folgenden Text vom Französischen ins Deutsche".
