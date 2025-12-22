---
title: "Step-Back Prompting"
description: "Das Modell auffordern, einen Schritt zurückzutreten und abstrakte Konzepte zu identifizieren, bevor es eine konkrete Frage löst."
tags: ["abstraktion", "wissenschaft", "prinzipien"]
difficulty: "Fortgeschritten"
---

# Step-Back Prompting

Manchmal verliert sich das Modell in Details. Mit Step-Back Prompting zwingst du es, erst die zugrundeliegenden Prinzipien oder Konzepte zu abstrahieren.

## Beispiel

**Prompt:**
```text
Frage: Warum dehnt sich Wasser aus, wenn es gefriert?
Schritt 1: Was sind die physikalischen Prinzipien hinter Dichte, Wasserstoffbrückenbindungen und festen Aggregatzuständen? Erkläre diese kurz.
Schritt 2: Beantworte basierend auf diesen Prinzipien die ursprüngliche Frage.
```

## Strategie

Besonders nützlich in MINT-Fächern (Mathe, Info, Naturwissenschaft), um Halluzinationen bei komplexen Sachverhalten zu reduzieren.
