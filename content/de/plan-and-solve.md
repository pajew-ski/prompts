---
title: Plan-and-Solve
level: Fortgeschritten
tags: planung reasoning mathe
description: Erst das Problem verstehen und einen Plan machen, dann den Plan Schritt für Schritt ausführen.
---

Plan-and-Solve (Wang et al., 2023) ersetzt das allgemeine "Denke Schritt für Schritt" durch eine genauere Anweisung in zwei Phasen. Zuerst versteht das Modell das Problem und entwirft einen Plan, dann führt es den Plan Schritt für Schritt aus. Die erweiterte Fassung verlangt zusätzlich, die relevanten Größen herauszuziehen und auf Rechnung und Zwischenergebnisse zu achten. Damit zielt die Methode auf die beiden häufigsten Fehler: vergessene Schritte und Rechenfehler.

## Beispiel

```prompt
Aufgabe: Ein Café verkauft vormittags 120 Kaffees zu 3,20 Euro. Nachmittags verkauft es 40 Prozent weniger Kaffees, zu 2,80 Euro. Wie hoch ist der Tagesumsatz mit Kaffee?

Verstehe zuerst das Problem: Welche Größen sind gegeben, welche werden gesucht? Entwirf dann einen Plan zur Lösung.
Führe danach den Plan Schritt für Schritt aus. Achte dabei auf korrekte Rechnung und halte jedes Zwischenergebnis fest.
Nenne am Ende die Antwort.
```

Erwartet: nachmittags 72 Kaffees, 384 Euro plus 201,60 Euro, zusammen 585,60 Euro.

## Wann es hilft

Bei mehrstufigen Rechen- und Textaufgaben mit Modellen ohne eingebautes Reasoning. Reasoning-Modelle planen bei solchen Aufgaben von sich aus; dort reicht es, das Problem vollständig zu beschreiben. Die Struktur bleibt nützlich, wenn du den Plan sehen und prüfen willst, bevor du dem Ergebnis traust. Für exakte Rechnungen ist ein Code-Werkzeug sicherer.
