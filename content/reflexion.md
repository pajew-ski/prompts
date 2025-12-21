---
title: "Reflexion"
description: "Das Modell auffordern, seine eigene Ausgabe zu kritisieren und zu verbessern."
tags: ["kritik", "selbstverbesserung", "loop"]
difficulty: "Fortgeschritten"
---

# Reflexion

Reflexion ist ein Prozess, bei dem das Modell seine eigene Arbeit überprüft ("Self-Correction"). Es simuliert einen "Kritiker", der Feedback gibt, und einen "Autor", der den Text überarbeitet.

## Beispiel

**Prompt:**
```text
Schreibe einen kurzen Essay über Quantenphysik.
[Modell generiert Text]
```>
> Kritisiere den obigen Text auf historische Genauigkeit und Verständlichkeit für Laien.
> [Modell generiert Kritik]
>
> Schreibe den Essay nun unter Berücksichtigung der Kritik neu.

## Strategie

Dieser iterative Loop verbessert die Qualität massiv. Für Agenten kann dies automatisiert werden: `Generate -> Critique -> Refine`.
