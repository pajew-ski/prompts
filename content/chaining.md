---
title: Prompt Chaining
level: Mittel
tags: workflow automatisierung komplexität
description: Aufteilung einer großen Aufgabe in mehrere, voneinander abhängige Prompts.
---

Manche Aufgaben sind zu komplex für einen einzigen Prompt (Kontext-Limit oder Verwirrung). Bei Chaining nimmst du den Output von Prompt A und nutzt ihn als Input für Prompt B.

## Beispiel

**Workflow:**

```prompt
Prompt 1: Extrahiere alle E-Mail-Adressen aus diesem Text.
Output 1: [Liste]

Prompt 2: Nimm diese Liste [Liste] und erstelle für jeden Kontakt eine personalisierte Begrüßung.
```

## Strategie

Essentiell für robuste Anwendungen. Lieber viele kleine, präzise Prompts als ein riesiger "Monster-Prompt".
