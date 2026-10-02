---
title: Self-Refine
level: Fortgeschritten
tags: selbstkritik iteration
description: Das Modell schreibt einen Entwurf, prüft ihn an benannten Kriterien und überarbeitet ihn, bis alle erfüllt sind.
---

Bei Self-Refine (Madaan et al., 2023) übernimmt dasselbe Modell drei Aufgaben nacheinander: Es erzeugt einen Entwurf, gibt sich selbst konkretes Feedback und überarbeitet den Entwurf anhand dieses Feedbacks. Die Schleife läuft, bis kein Kriterium mehr verletzt ist oder eine feste Zahl an Runden erreicht ist. Feedback von außen gibt es nicht, weder einen Test noch einen Menschen.

Darin unterscheidet sich Self-Refine von Reflexion, das ein Signal von außen braucht (ein fehlgeschlagener Test, eine falsche Antwort), und von Iterative Refinement, bei dem du selbst die Runden steuerst.

## Beispiel

```prompt
Aufgabe: [Deine Aufgabe, z. B. Schreib eine Python-Funktion, die doppelte Einträge aus einer Liste entfernt und die Reihenfolge beibehält.]

Kriterien:
1. Korrektheit: [z. B. funktioniert auch mit einer leeren Liste und mit gemischten Typen]
2. Effizienz: [z. B. lineare Laufzeit]
3. Lesbarkeit: [z. B. sprechende Namen und ein Docstring]

Vorgehen:
1. Schreib einen ersten Entwurf.
2. Prüfe den Entwurf an jedem Kriterium einzeln. Nenne pro Kriterium konkret, was verletzt ist und an welcher Stelle, oder schreib "erfüllt".
3. Überarbeite den Entwurf so, dass die genannten Punkte behoben sind.
4. Wiederhole Schritt 2 und 3, bis alle Kriterien erfüllt sind, höchstens drei Runden.

Gib am Ende die letzte Fassung aus und darunter eine Zeile pro Kriterium mit dem Stand.
```

## Wann es hilft

Bei Aufgaben, deren Qualität sich an benennbaren Kriterien messen lässt: Code, Formulierungen, Zusammenfassungen. Je konkreter die Kriterien, desto brauchbarer das Feedback; eine Frage wie "Ist es gut?" führt zu allgemeinem Lob. Die Grenze: Das Modell prüft sich mit demselben Wissen, mit dem es den Fehler gemacht hat. Was es nicht als Fehler erkennt, bleibt stehen. Wo ein Test oder eine Prüfung von außen möglich ist, ist Reflexion verlässlicher.
