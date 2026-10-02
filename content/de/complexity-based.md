---
title: Complexity-Based Prompting
level: Fortgeschritten
tags: beispiele reasoning
description: Für Few-Shot-Prompts ausgearbeitete Beispiele mit vielen Denkschritten wählen statt einfacher.
---

Complexity-Based Prompting (Fu et al., 2022) betrifft die Auswahl der Beispiele in Chain-of-Thought-Prompts. Das Paper fand: Ausgearbeitete Beispiele mit mehr Denkschritten führen zu besserem Schlussfolgern als einfache Beispiele mit kurzem Lösungsweg. Ein zweiter Teil betrifft die Auswertung: Man lässt das Modell mehrere Lösungswege erzeugen und stimmt nur unter den längsten ab, welche Antwort am häufigsten vorkommt.

## Beispiel

```prompt
Löse die Aufgabe am Ende. Schreib den Lösungsweg so ausführlich wie im Beispiel, mit einem Rechenschritt pro Zeile, und schließe mit "Antwort: ..." ab.

Beispiel:
Aufgabe: Ein Café verkauft am Montag 120 Kaffees zu je 3,50 Euro. Am Dienstag verkauft es 25 % mehr Kaffees, senkt aber den Preis um 0,50 Euro. Ein Kaffee kostet das Café 1,20 Euro. Wie viel mehr Gewinn macht das Café am Dienstag als am Montag?
Lösungsweg:
1. Umsatz Montag: 120 × 3,50 = 420 Euro.
2. Kosten Montag: 120 × 1,20 = 144 Euro.
3. Gewinn Montag: 420 - 144 = 276 Euro.
4. Kaffees Dienstag: 120 × 1,25 = 150.
5. Preis Dienstag: 3,50 - 0,50 = 3,00 Euro.
6. Umsatz Dienstag: 150 × 3,00 = 450 Euro.
7. Kosten Dienstag: 150 × 1,20 = 180 Euro.
8. Gewinn Dienstag: 450 - 180 = 270 Euro.
9. Unterschied: 270 - 276 = -6 Euro.
Antwort: Das Café macht am Dienstag 6 Euro weniger Gewinn, nicht mehr.

Aufgabe: [Deine Aufgabe]
Lösungsweg:
```

## Wann es hilft

Bei mehrstufigen Rechen- und Logikaufgaben, vor allem mit Modellen ohne eingebautes Reasoning. Wenn du ohnehin Few-Shot-Beispiele schreibst, nimm die komplexen. Das Beispiel sollte zur Art der Aufgabe passen. Die Abstimmung über mehrere Lösungswege braucht mehrere Aufrufe und damit ein Skript. Grenzen: Lange Beispiele kosten Kontext, und bei einfachen Aufgaben bringen sie nichts.
