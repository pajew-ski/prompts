---
title: "Prompt Chaining"
description: "Aufteilung einer großen Aufgabe in mehrere, voneinander abhängige Prompts."
tags: ["workflow", "automatisierung", "komplexität"]
difficulty: "Mittel"
---

# Prompt Chaining

Manche Aufgaben sind zu komplex für einen einzigen Prompt (Kontext-Limit oder Verwirrung). Bei Chaining nimmst du den Output von Prompt A und nutzt ihn als Input für Prompt B.

## Beispiel

**Workflow:**
```text
Prompt 1: Extrahiere alle E-Mail-Adressen aus diesem Text.
Output 1: [Liste]

Prompt 2: Nimm diese Liste [Liste] und erstelle für jeden Kontakt eine personalisierte Begrüßung.
```

## Strategie

Essentiell für robuste Anwendungen. Lieber viele kleine, präzise Prompts als ein riesiger "Monster-Prompt".
