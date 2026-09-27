---
title: Few-Shot Prompting
level: Anfänger
tags: beispiele muster grundlagen
description: Dem Modell Beispiele geben, um das gewünschte Format oder Verhalten zu demonstrieren.
---

Anstatt das Modell nur anzuweisen, was es tun soll (Zero-Shot), gibst du ihm Beispiele (Shots), wie die Aufgabe gelöst werden soll. Dies verbessert die Genauigkeit drastisch, besonders bei spezifischen Formaten.

## Beispiel

```prompt
Bestimme die Stimmung der folgenden Tweets:
Tweet: "Ich liebe das neue Design!"
Stimmung: Positiv

Tweet: "Das Update hat mein Handy zerstört."
Stimmung: Negativ

Tweet: "Es ist okay, aber nichts Besonderes."
Stimmung:
```

**Erwartete Antwort:**

> Neutral

## Strategie

Nutze dises Pattern, wenn das Modell die Aufgabe nicht auf Anhieb versteht oder inkonsistente Ergebnisse liefert. 3-5 Beispiele sind meist optimal.
