---
title: "Selection-Inference"
description: "Denkprozess in zwei Schritte teilen: Fakten auswählen und daraus Schlüsse ziehen."
tags: ["logik", "reasoning", "struktur"]
difficulty: "Fortgeschritten"
---

# Selection-Inference

Dieses Framework zerlegt logisches Denken in zwei explizite Module, um Fehler zu minimieren.

## Beispiel

**Prompt:**
```text
Kontext: [Langer Text]
Frage: [Frage]
Schritt 1 (Selection): Listet alle Fakten aus dem Text auf, die für die Beantwortung der Frage relevant sind.
Schritt 2 (Inference): Nutze NUR diese Fakten, um die logische Konsequenz abzuleiten und die Frage zu beantworten.
```

## Strategie

Verhindert, dass das Modell irrelevante Informationen nutzt oder Halluzinationen einbaut.
