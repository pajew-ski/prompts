---
title: "Generated Knowledge Prompting"
description: "Das Modell auffordern, zuerst Wissen zum Thema zu generieren, um die Antwortqualität zu verbessern."
tags: ["wissen", "kontext", "genauigkeit"]
difficulty: "Fortgeschritten"
---

# Generated Knowledge Prompting

Modelle halluzinieren oft, wenn sie direkt nach Fakten gefragt werden. Diese Strategie zwingt das Modell, erst relevantes Wissen abzurufen/zu generieren und *dann* die Frage basierend darauf zu beantworten.

## Beispiel

**Prompt:**
```text
Schritt 1: Generiere 5 Fakten über den Regenwald, die relevant für den Klimawandel sind.
Schritt 2: Nutze diese Fakten, um zu erklären, warum die Abholzung kritisch ist.
```
## Strategie

Teile den Prompt in zwei Schritte: 1. `Generiere Wissen über X` -> 2. `Beantworte Frage Y basierend auf X`. Dies groundet die Antwort im eigenen Kontext des Modells.
