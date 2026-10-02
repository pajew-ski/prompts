---
title: Algorithm of Thoughts (AoT)
level: Fortgeschritten
tags: reasoning struktur
description: Das Modell eine Suche ausdrücklich ausschreiben lassen: ausprobieren, prüfen, zurückgehen.
---

Algorithm of Thoughts (Sel et al., 2023) lässt das Modell einen Suchalgorithmus in einer einzigen Antwort ausführen. Der Prompt enthält ein Beispiel, in dem ein Lösungsweg Schritt für Schritt durchsucht wird, mit Sackgassen und Rückschritten. Das Modell übernimmt dieses Muster für die neue Aufgabe. Das Paper demonstriert vor allem Tiefensuche mit Backtracking, unter anderem am 24-Spiel.

## Beispiel

```prompt
Wir spielen das 24-Spiel: Kombiniere vier Zahlen mit +, -, × und /, jede Zahl genau einmal, sodass 24 herauskommt.

Löse es mit Tiefensuche und Backtracking: Wähle zwei Zahlen und eine Operation, rechne, und mach mit den verbleibenden Zahlen weiter. Wenn ein Zweig nicht auf 24 kommen kann, schreib "Zurück" und probiere die nächste Möglichkeit auf der vorherigen Ebene. Schreib jeden Schritt hin, damit die Suche nachprüfbar ist.

Beispiel:
Zahlen: 1, 2, 4, 6
- 6 + 4 = 10, Rest: 1, 2, 10
  - 10 × 2 = 20, Rest: 1, 20. 20 + 1 = 21, 20 - 1 = 19, 20 × 1 = 20. Kein Treffer.
  - 10 + 2 = 12, Rest: 1, 12. 12 + 1 = 13, 12 - 1 = 11, 12 × 1 = 12. Kein Treffer. Zurück.
- 6 × 4 = 24, Rest: 1, 2, 24
  - 2 - 1 = 1, Rest: 1, 24. 24 × 1 = 24. Treffer.
Lösung: 6 × 4 × (2 - 1) = 24

Zahlen: 4, 9, 10, 13
```

Eine Lösung ist (10 - 4) × (13 - 9) = 24.

## Wann es hilft

Bei kleinen Such- und Kombinationsproblemen: Rätsel, Zeitpläne mit wenigen Bedingungen, Zuordnungen, bei denen man Sackgassen erkennen muss. Benenne das Verfahren korrekt: "Nur die besten Optionen weiter ausbauen" ist Beam Search, nicht Breitensuche, und ein unklares Verfahren führt zu einer unklaren Suche. Grenzen: Der Suchraum muss klein genug sein, um in eine Antwort zu passen, und Rechenfehler in einzelnen Schritten bleiben möglich. Für größere Suchräume ist ein Programm mit echter Suche zuverlässiger, das du auch vom Modell schreiben lassen kannst.
