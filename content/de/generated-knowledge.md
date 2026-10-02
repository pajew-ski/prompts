---
title: Generated Knowledge Prompting
level: Fortgeschritten
tags: fakten kontext
description: Das Modell schreibt zuerst Hintergrundwissen zum Thema auf und beantwortet die Frage dann auf dieser Grundlage.
---

Statt die Frage direkt zu stellen, lässt du das Modell zuerst allgemeines Hintergrundwissen zum Thema formulieren und dann die Frage mit diesem Wissen beantworten (Liu et al., 2022). Das Wissen steht danach ausdrücklich im Kontext, die Antwort kann sich darauf stützen, und du kannst sehen, worauf sie beruht. Die Studie untersuchte das an Fragen, die Allgemeinwissen und Schlussfolgern verbinden.

Zur Abgrenzung von Recitation: Dort ruft das Modell bestimmte Fakten ab, die es für eine mehrstufige Frage braucht. Hier erzeugt es allgemeines Hintergrundwissen, das den Rahmen für die Antwort setzt.

## Beispiel

```prompt
Frage: [Deine Frage, z. B. Warum hat die Abholzung des Regenwalds so große Folgen für das Klima?]

Schritt 1: Schreib fünf kurze, nummerierte Aussagen mit Hintergrundwissen, das für diese Frage relevant ist. Schreib nur, was du für gesichert hältst, und markiere Aussagen, bei denen du unsicher bist.

Schritt 2: Beantworte die Frage auf Grundlage dieser Aussagen. Gib bei jedem Argument die Nummern der Aussagen an, auf die es sich stützt.
```

## Wann es hilft

Bei Fragen, die Hintergrundwissen und Schlussfolgern verbinden, und wenn direkte Antworten oberflächlich bleiben. Die Grenze: Das erzeugte Wissen kann selbst falsch sein, und die Antwort baut dann auf diesem Fehler auf, mit dem Anschein einer sauberen Herleitung. Für sachliche Arbeit prüfe die Aussagen aus Schritt 1 oder gib Quellen mit, auf die sich das Modell stützen soll.
