---
title: Contrastive Chain of Thought
level: Fortgeschritten
tags: reasoning fehleranalyse robustheit
description: Nicht nur erklären, warum die Lösung richtig ist, sondern auch, warum plausible falsche Lösungen falsch sind.
---

Stärkt die Argumentation durch Abgrenzung.

## Beispiel

```prompt
Übersetze "Bank" (Finanzinstitut) ins Deutsche.
Richtig: Bank.
Falsch: Ufer (weil das "river bank" wäre).
Falsch: Bankett (falscher Kontext).

Aufgabe: [Neue Aufgabe]
Gib erst Kontrast-Beispiele, dann die Lösung.
```

## Strategie

Hilft massiv bei Disambiguierung (Bedeutungsunterscheidung).
