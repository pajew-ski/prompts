---
title: Model Swapping
level: Fortgeschritten
tags: kosten optimierung agenten
description: Jeden Arbeitsschritt dem Modell geben, das ihn gut genug und am günstigsten erledigt.
---

Nicht jeder Schritt braucht das größte Modell. Ein kleines, schnelles Modell erledigt Massenarbeit wie Ideen sammeln, Texte vorsortieren oder Daten extrahieren für einen Bruchteil der Kosten. Ein großes Modell übernimmt die Schritte, bei denen Urteilsvermögen zählt: auswählen, abwägen, ausarbeiten.

Es gibt auch die umgekehrte Richtung: Ein großes Modell zerlegt die Aufgabe und schreibt einen Plan, kleine Modelle führen die einzelnen, klar umrissenen Schritte aus. Viele Agenten-Systeme arbeiten so.

## Beispiel

Schritt 1 läuft auf einem kleinen Modell: `Erzeuge 50 kurze Ideen für [Thema], je eine Zeile.` Schritt 2 auf einem großen Modell:

```prompt
Unten stehen 50 Ideen für [Thema], die ein anderes Modell in einem schnellen Durchlauf erzeugt hat. Viele sind ähnlich oder schwach.
Ziel: [wofür die Idee gebraucht wird, Zielgruppe, Budget].

1. Fasse Dubletten zusammen.
2. Wähle die drei Ideen, die das Ziel am besten erfüllen, und begründe jede Wahl in zwei Sätzen.
3. Arbeite die beste Idee zu einem Konzept von etwa einer halben Seite aus.

Ideen:
[Liste]
```

## Wann es hilft

Bei wiederkehrenden Abläufen mit vielen Aufrufen, in denen Kosten oder Wartezeit zählen. Prüfe an einer Stichprobe, ob das kleine Modell den Schritt wirklich gut genug erledigt; Fehler in frühen Schritten trägt die Kette weiter. Für eine einzelne Frage im Chat lohnt der Aufwand selten. Nenne Modelle in deinen Abläufen über eine Konfiguration statt fest im Code, denn die konkreten Modelle wechseln schnell.
