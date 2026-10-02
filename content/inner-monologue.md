---
title: Inner Monologue
level: Mittel
tags: agentic reasoning simulation
description: Einen 'privaten' Gedankenstrom simulieren, der dem User nicht gezeigt werden soll (außer zum Debuggen).
---

Wichtig für Chatbots, die "menschlich" wirken sollen, aber trotzdem "nachdenken" müssen.

## Beispiel

```prompt
Du bist ein hilfsbereiter Assistent.
Bei jeder Antwort:
1. Führe einen inneren Monolog (in Klammern), wo du die Absicht des Users analysierst und deine Antwortstrategie festlegst.
2. Gib dann die freundliche Antwort aus.
```

## Strategie

Trennt die "Maschinenlogik" von der "User Experience".
