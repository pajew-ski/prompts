---
title: "Contrastive Chain of Thought"
description: "Nicht nur erklären, warum die Lösung richtig ist, sondern auch, warum plausible falsche Lösungen falsch sind."
tags: ["reasoning", "fehleranalyse", "robustheit"]
difficulty: "Fortgeschritten"
---

# Contrastive Chain of Thought

Stärkt die Argumentation durch Abgrenzung.

## Beispiel

**Prompt:**
```text
Übersetze "Bank" (Finanzinstitut) ins Deutsche.
Richtig: Bank.
Falsch: Ufer (weil das "river bank" wäre).
Falsch: Bankett (falscher Kontext).

Aufgabe: [Neue Aufgabe]
Gib erst Kontrast-Beispiele, dann die Lösung.
```

## Strategie

Hilft massiv bei Disambiguierung (Bedeutungsunterscheidung).
