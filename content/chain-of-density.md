---
title: "Chain of Density"
description: "Iteratives Verdichten von Zusammenfassungen, um maximale Informationsdichte zu erreichen."
tags: ["zusammenfassung", "kürzen", "iterativ"]
difficulty: "Fortgeschritten"
---

# Chain of Density

Ziel ist eine Zusammenfassung, die kurz ist, aber *keine* Details verliert. Man beginnt "luftig" und verdichtet schrittweise.

## Beispiel

**Prompt:**
```text
Artikel: [Text]
Schritt 1: Schreibe eine Zusammenfassung (max 5 Sätze).
Schritt 2: Identifiziere 3 wichtige Entitäten aus dem Originaltext, die in der Zusammenfassung fehlen.
Schritt 3: Schreibe die Zusammenfassung neu, gleiche Länge, aber integriere die fehlenden Entitäten.
Wiederhole dies 3 mal.
```

## Strategie

Erzeugt extrem informationsdichte Texte, ideal für News-Briefings.
