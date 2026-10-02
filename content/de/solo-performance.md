---
title: Solo Performance Prompting
level: Mittel
tags: rolle perspektiven
description: Das Modell bestimmt, welche Fachleute eine Aufgabe braucht, lässt sie zusammenarbeiten und gibt eine gemeinsame Antwort.
---

Bei Solo Performance Prompting (Wang et al., 2023) arbeitet ein einziges Modell wie ein kleines Team. Zuerst bestimmt es selbst, welche Teilnehmer die Aufgabe braucht, also Personas mit bestimmtem Fachwissen. Dann bringen diese nacheinander ihr Wissen ein, geben einander Feedback und überarbeiten den Entwurf. Am Ende steht eine einzige Antwort.

Der Unterschied zu Multi-Persona: Die Rollen werden nicht vorgegeben, sondern aus der Aufgabe abgeleitet, und sie arbeiten auf ein gemeinsames Ergebnis hin, statt eine Debatte zu führen.

## Beispiel

```prompt
Aufgabe: [Deine Aufgabe, z. B. Plane eine fünftägige Radtour auf dem Donauradweg von Passau nach Wien für eine Familie mit zwei Kindern, 10 und 13 Jahre alt.]

Geh so vor:
1. Bestimme, welche Teilnehmer mit welchem Fachwissen diese Aufgabe braucht, zwei bis vier, und begründe jede Wahl in einem Satz.
2. Lass jeden Teilnehmer beitragen, was er aus seinem Fach weiß, und erstelle daraus einen ersten Entwurf.
3. Lass jeden Teilnehmer den Entwurf aus seiner Sicht prüfen und konkrete Änderungen vorschlagen.
4. Überarbeite den Entwurf. Wiederhole Schritt 3 und 4, bis niemand mehr einen Einwand hat, höchstens zweimal.
5. Gib die endgültige Antwort als ein zusammenhängendes Ergebnis aus.
```

## Wann es hilft

Bei Aufgaben, die Wissen aus mehreren Bereichen verbinden und bei denen einzelne Aspekte leicht untergehen: Planungen, Wissensfragen mit mehreren Bestandteilen, kreative Texte mit vielen Vorgaben. Alle Teilnehmer sind dasselbe Modell mit demselben Wissen. Die Methode bringt kein neues Wissen hinein; sie sorgt dafür, dass das vorhandene aus mehreren Blickwinkeln abgerufen und gegengeprüft wird. Für einfache Aufgaben ist der Aufwand zu groß.
