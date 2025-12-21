---
title: "Knowledge Distillation"
description: "Ein großes Modell nutzen, um Lehrmaterial oder Prompts für ein kleineres Modell zu erstellen."
tags: ["optimierung", "training", "kosten"]
difficulty: "Fortgeschritten"
---

# Knowledge Distillation

Du nutzt die Intelligenz eines SOTA-Modells (z.B. GPT-4), um Beispiele oder Daten zu generieren, mit denen ein kleineres Modell (z.B. Llama 3 8B) performen kann.

## Beispiel

**Prompt (an großes Modell):**
```text
Ich habe ein kleines Modell, das Kundenanfragen kategorisieren soll. Erstelle mir 50 perfekte Beispiele (Input -> Category), die ich als Few-Shot Prompt für das kleine Modell nutzen kann. Decke auch seltene Edge-Cases ab.
```

## Strategie

Der Standard-Weg, um lokale LLMs "schlauer" zu machen.
