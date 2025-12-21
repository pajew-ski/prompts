---
title: "Contrastive Prompting"
description: "Dem Modell zeigen, was man NICHT will, um Fehler zu vermeiden."
tags: ["beispiele", "negativ-beispiele", "fehlervermeidung"]
difficulty: "Mittel"
---

# Contrastive Prompting

Oft hilft es dem Modell mehr zu sehen, was *falsch* ist, als nur zu sehen, was *richtig* ist. Du gibst also sowohl positive als auch negative Beispiele.

## Beispiel

**Prompt:**
```text
Schreibe einen Produkttext für Kopfhörer.
```>
> Negatives Beispiel (So NICHT): "Diese Kopfhörer sind gut und laut. Kaufen Sie sie."
>
> Positives Beispiel (So bitte JA): "Tauchen Sie ein in eine Welt aus kristallklarem Sound. Unsere neuen Pro-Headphones bieten..."
>
> Aufgabe: Schreibe einen Text für eine Kaffeemaschine.

## Strategie

Nutze dies, wenn das Modell immer wieder in unerwünschte Muster verfällt (z.B. zu werblich, zu trocken, zu informell).
