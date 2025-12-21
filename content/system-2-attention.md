---
title: "System 2 Attention"
description: "Das Modell anweisen, den Kontext erst zu bereinigen und Irrelevantes zu löschen."
tags: ["aufmerksamkeit", "fokus", "cleaning"]
difficulty: "Fortgeschritten"
---

# System 2 Attention

LLMs lassen sich leicht durch irrelevante Infos im Prompt ablenken ("sycophancy").

## Beispiel

**Prompt:**
```text
Kontext: [Langer Text mit viel Rauschen und unwichtigen Details]
```>
> Schritt 1: Schreibe den Kontext so um, dass nur noch die Informationen enthalten sind, die für die Beantwortung der Frage [Frage] absolut notwendig sind. Lösche alles andere.
> Schritt 2: Beantworte die Frage basierend auf dem bereinigten Kontext.

## Strategie

Verbessert die Objektivität massiv.
