---
title: Contrastive Chain of Thought
level: Fortgeschritten
tags: reasoning beispiele
description: Zu einer Beispielaufgabe einen richtigen und einen falschen Lösungsweg zeigen und den Fehler benennen.
---

Contrastive Chain of Thought (Chia et al., 2023) erweitert die Beispiele bei Chain of Thought. Zur selben Beispielaufgabe zeigt der Prompt einen richtigen und einen falschen Lösungsweg und benennt den Fehler im falschen. Das Modell sieht so nicht nur, wie man vorgeht, sondern auch, welcher Fehler zu vermeiden ist. Danach folgt die neue Aufgabe.

## Beispiel

```prompt
Beispielaufgabe: Ein Pullover kostet 80 Euro. Er wird um 25 % reduziert, später wird der reduzierte Preis um 10 % erhöht. Was kostet er jetzt?

Richtiger Lösungsweg: 25 % von 80 Euro sind 20 Euro, der reduzierte Preis ist 60 Euro. 10 % von 60 Euro sind 6 Euro. Der Endpreis ist 66 Euro.

Falscher Lösungsweg: Minus 25 % und plus 10 % ergibt minus 15 %. 15 % von 80 Euro sind 12 Euro. Der Endpreis ist 68 Euro.
Fehler: Die zweite Prozentangabe bezieht sich auf den reduzierten Preis, nicht auf den ursprünglichen. Aufeinanderfolgende Prozentänderungen darf man nicht einfach addieren.

Aufgabe: [Deine Aufgabe]
Löse sie Schritt für Schritt und achte auf Fehler der gezeigten Art.
```

## Wann es hilft

Bei Aufgabentypen mit einem typischen Fehler, der immer wieder passiert: Prozentrechnung, Einheiten, Vorzeichen, falsche Bezugsgrößen. Der falsche Lösungsweg sollte einen realistischen Fehler zeigen, keinen absurden, sonst bringt der Kontrast wenig. Grenzen: Der Kontrast hilft gegen den gezeigten Fehler, nicht gegen alle. Für jeden typischen Fehler brauchst du ein eigenes Beispielpaar, was den Prompt verlängert.
