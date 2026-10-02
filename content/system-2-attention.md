---
title: System 2 Attention
level: Fortgeschritten
tags: aufmerksamkeit fokus cleaning
description: Das Modell anweisen, den Kontext erst zu bereinigen und Irrelevantes zu löschen.
---

LLMs lassen sich leicht durch irrelevante Infos im Prompt ablenken ("sycophancy").

## Beispiel

```prompt
Kontext: [Langer Text mit viel Rauschen und unwichtigen Details]
Schritt 1: Schreibe den Kontext so um, dass nur noch die Informationen enthalten sind, die für die Beantwortung der Frage [Frage] absolut notwendig sind. Lösche alles andere.
Schritt 2: Beantworte die Frage basierend auf dem bereinigten Kontext.
```

## Strategie

Verbessert die Objektivität massiv.
