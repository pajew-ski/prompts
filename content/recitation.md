---
title: "Recitation-Augmented Generation"
description: "Das Modell auffordern, relevantes Wissen aus dem Gedächtnis zu rezitieren, bevor es antwortet."
tags: ["faktentreue", "wissen", "halluzination"]
difficulty: "Mittel"
---

# Recitation-Augmented Generation

Ähnlich wie bei "Generated Knowledge". Du bittest das Modell, passgenaues Wissen "laut aufzusagen", bevor es die eigentliche Aufgabe bearbeitet.

## Beispiel

**Prompt:**
```text
Frage: Wer gewann den Super Bowl im Jahr, in dem das iPhone vorgestellt wurde?
Schritt 1: Rezitiere: In welchem Jahr wurde das iPhone vorgestellt?
Schritt 2: Rezitiere: Wer gewann den Super Bowl in diesem Jahr?
Schritt 3: Kombiniere die Informationen zur Antwort.
```

## Strategie

Zwingt das Modell, seine interne Wissensdatenbank gezielt abzufragen, statt zu raten.
