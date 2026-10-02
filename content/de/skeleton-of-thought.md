---
title: Skeleton-of-Thought
level: Mittel
tags: struktur schreiben
description: Erzeuge zuerst eine knappe Gliederung und arbeite dann jeden Punkt einzeln aus.
---

Skeleton-of-Thought (Ning et al., 2023) teilt das Schreiben in zwei Phasen. Zuerst entsteht ein Skelett, eine kurze Liste der Hauptpunkte. Dann wird jeder Punkt zu einem Absatz ausgebaut. Im Paper geschieht der zweite Schritt parallel, mit einem eigenen Modellaufruf pro Punkt. Daher kommt die Zeitersparnis: Die Punkte werden gleichzeitig geschrieben statt nacheinander. In einem einzelnen Prompt läuft alles nacheinander ab, als Vorteil bleibt die klare Struktur.

## Beispiel

```prompt
Thema: [Dein Thema, z. B. ein Leitfaden für die ersten zwei Wochen neuer Mitarbeitender]
Zielgruppe: [Wer den Text liest]

1. Schreib zuerst ein Skelett: drei bis fünf Hauptpunkte, jeder in höchstens acht Wörtern.
2. Arbeite dann jeden Punkt zu einem Absatz mit drei bis fünf Sätzen aus. Bleib bei dem, was der Punkt im Skelett ankündigt, und füg keinen neuen Hauptpunkt hinzu.
```

## Wann es hilft

Bei Texten aus mehreren gleichrangigen Punkten: Ratgeber, Übersichten, Listen von Empfehlungen. Über die API kannst du das Skelett in einem Aufruf erzeugen und jeden Punkt in einem eigenen, parallelen Aufruf ausarbeiten lassen, wobei jeder Aufruf das ganze Skelett und seinen Punkt bekommt. Für Texte, deren Teile aufeinander aufbauen, etwa eine Argumentation oder eine Herleitung, passt die Methode schlechter, weil die Punkte unabhängig voneinander entstehen.
