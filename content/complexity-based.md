---
title: Complexity-Based Prompting
level: Fortgeschritten
tags: reasoning few-shot optimierung
description: Auswahl von besonders komplexen Beispielen für Few-Shot (statt einfachen), um die Schlussfolgerungsfähigkeit zu steigern.
---

Forschungen zeigen: Komplexe Beispiele (mit vielen Berechnungsschritten) im Prompt führen zu besseren Ergebnissen als viele einfache Beispiele.

## Beispiel

```prompt
[Beispiel 1: Extrem komplexe Textaufgabe mit 10 Schritten und ihrer Lösung]
Aufgabe: [Deine Aufgabe]
```

## Strategie

"Trainiere hart, kämpfe leicht." Wenn das Modell sieht, dass komplexe Logik gefordert ist, wechselt es in einen "tieferen" Modus.
