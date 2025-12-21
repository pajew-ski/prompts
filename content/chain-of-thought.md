---
title: "Chain of Thought (Gedankenkette)"
description: "Ermutigt das Modell, seine Überlegungen Schritt für Schritt zu erklären, bevor es antwortet."
tags: ["reasoning", "logik", "zwischenschritte"]
difficulty: "Fortgeschritten"
---

# Chain of Thought (CoT)

Chain of Thought Prompting ermöglicht komplexe Schlussfolgerungen durch Zwischenschritte. Du kannst das Modell dazu anregen, eine Reihe von Zwischenüberlegungen auszugeben, bevor es die endgültige Antwort liefert.

## Beispiel

**Prompt:**
```text
Roger hat 5 Tennisbälle. Er kauft 2 weitere Dosen Tennisbälle. Jede Dose enthält 3 Tennisbälle. Wie viele Tennisbälle hat er jetzt?
Denke Schritt für Schritt.
```

**Standard Antwort:**
> Die Antwort ist 11.

**CoT Antwort:**
> Roger begann mit 5 Bällen. 2 Dosen mit je 3 Tennisbällen sind 6 Tennisbälle. 5 + 6 = 11. Die Antwort ist 11.

## Strategie

Füge einfach *"Denke Schritt für Schritt"* (oder "Let's think step by step") am Ende deines Prompts hinzu, um dieses Verhalten ohne Beispiele auszulösen (Zero-shot CoT).
