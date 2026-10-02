---
title: Program-of-Thoughts (PoT)
level: Fortgeschritten
tags: code mathe werkzeuge
description: Das Modell schreibt für Rechenaufgaben ein Programm, und der Computer rechnet, nicht das Modell.
---

Sprachmodelle machen beim Rechnen im Text leicht Fehler, schreiben aber zuverlässig Code. Program-of-Thoughts (Chen et al., 2022) trennt deshalb Denken und Rechnen: Das Modell formuliert den Lösungsweg als Programm, und ein Interpreter führt es aus. Das Ergebnis stammt dann aus der Ausführung, nicht aus einer Schätzung des Modells.

Daraus folgt: Der Code muss wirklich laufen. Hat das Modell ein Code-Werkzeug, führt es den Code selbst aus. Ohne Werkzeug gibt es dir den Code, und du führst ihn aus. Den Code nur "im Kopf" ausführen zu lassen, hebt den Vorteil wieder auf.

## Beispiel

```prompt
Berechne die Quadratwurzel aus der Summe der ersten 50 Primzahlen.
Schreibe dafür ein kurzes Python-Programm.
Wenn du Code ausführen kannst, führe es aus und nenne das Ergebnis aus der Ausführung, auf zwei Nachkommastellen gerundet.
Wenn nicht, gib mir nur das Programm, damit ich es selbst ausführe, und nenne kein geschätztes Ergebnis.
```

Erwartet: Summe 5117, Wurzel etwa 71,53.

## Wann es hilft

Bei Rechenaufgaben, Statistik, Datumsrechnungen, Tabellen und allem, was exakte Zahlen braucht. Viele Chat-Oberflächen haben inzwischen ein Code-Werkzeug, das das Modell bei Rechenaufgaben oft von sich aus nutzt; die Bitte macht es verlässlich. Wo die Aufgabe eher Abwägen als Rechnen ist, bringt Code wenig. Lies den Code kurz gegen: Ein falsch verstandenes Problem wird auch fehlerfrei berechnet.
