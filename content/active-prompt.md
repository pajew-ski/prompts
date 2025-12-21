---
title: "Active-Prompt"
description: "Gezielte Auswahl der schwierigsten Beispiele für Few-Shot Prompting."
tags: ["few-shot", "optimierung", "training"]
difficulty: "Fortgeschritten"
---

# Active-Prompt

Statt zufällige Beispiele für Few-Shot zu nehmen, lässt du das Modell Fragen beantworten und misst die "Unsicherheit" (z.B. durch mehrfaches Fragen). Die Fragen, bei denen das Modell am unsichersten ist, nutzt du als Beispiele in deinem finalen Prompt.

## Strategie

1. Stelle dem Modell 100 Fragen.
2. Identifiziere die 5 Fragen, bei denen es am häufigsten falsch liegt.
3. Schreibe für diese 5 Fragen perfekte Antworten.
4. Nutze diese als Few-Shot Beispiele.

**Beispiel Prompt:**
```text
Du bist ein Experte. Hier sind schwierige Beispiele, die du beachten solltest:
Q: [Schwere Frage 1]
A: [Perfekte Antwort 1]
...
Q: [Neue Frage]
A:
```
