---
title: Socratic CoT
level: Fortgeschritten
tags: reasoning zerlegung
description: Das Modell zerlegt ein Problem in eigene Teilfragen und beantwortet sie nacheinander bis zur Lösung.
---

Statt eine Lösung als durchgehenden Text zu schreiben, stellt sich das Modell selbst die nächste Frage, die zur Lösung führt, und beantwortet sie. Jede Antwort bestimmt die nächste Frage. So wird aus einer langen Herleitung eine Folge kleiner Schritte, die sich einzeln prüfen lassen.

## Beispiel

```prompt
Problem: [Dein Problem, z. B. Ein Zug fährt um 9:40 Uhr in A ab und fährt mit 80 km/h Richtung B. Ein zweiter Zug fährt um 10:10 Uhr im 200 km entfernten B ab und fährt mit 120 km/h auf ihn zu. Wann treffen sie sich?]

Löse das Problem, indem du dir selbst Fragen stellst und sie beantwortest. Jede Frage soll ein Teilproblem sein, das sich mit dem bisher Bekannten lösen lässt. Schreib es in dieser Form:

F1: erste Teilfrage
A1: Antwort mit Rechnung oder Begründung
F2: nächste Teilfrage

Stell nach jeder Antwort die Frage, die als Nächstes fehlt. Wenn eine Antwort einer früheren widerspricht, halt an und kläre den Widerspruch. Wenn alle Teilfragen beantwortet sind, gib die Lösung in einem Satz.
```

Beim Beispiel ergeben sich Teilfragen wie: Wie weit ist der erste Zug um 10:10 Uhr gekommen (40 km)? Welche Strecke bleibt (160 km)? Wie schnell nähern sich die Züge (200 km/h)? Sie treffen sich nach 48 Minuten, um 10:58 Uhr.

## Wann es hilft

Bei mehrstufigen Aufgaben, bei denen du nicht nur das Ergebnis, sondern den Weg prüfen willst, und beim Lernen, weil die Teilfragen zeigen, wie man ein Problem angeht. Ein Fehler lässt sich einer bestimmten Frage zuordnen. Bei einfachen Aufgaben bläht das Format die Antwort nur auf. Reasoning-Modelle zerlegen Probleme intern selbst; bei ihnen lohnt das Format vor allem, wenn du die Zerlegung lesen willst.
