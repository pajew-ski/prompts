---
title: Knowledge Distillation
level: Fortgeschritten
tags: optimierung training kosten
description: Ein großes Modell nutzen, um Lehrmaterial oder Prompts für ein kleineres Modell zu erstellen.
---

Du nutzt die Intelligenz eines SOTA-Modells (z.B. GPT-4), um Beispiele oder Daten zu generieren, mit denen ein kleineres Modell (z.B. Llama 3 8B) performen kann.

## Beispiel

**Prompt (an großes Modell):**

```prompt
Ich habe ein kleines Modell, das Kundenanfragen kategorisieren soll. Erstelle mir 50 perfekte Beispiele (Input -> Category), die ich als Few-Shot Prompt für das kleine Modell nutzen kann. Decke auch seltene Edge-Cases ab.
```

## Strategie

Der Standard-Weg, um lokale LLMs "schlauer" zu machen.
