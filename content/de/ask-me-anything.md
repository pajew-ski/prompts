---
title: Ambiguity Check
level: Anfänger
tags: rückfragen dialog
description: Das Modell fragt nur nach, wenn die Antwort das Ergebnis ändern würde, und legt sonst seine Annahmen offen.
---

Ein Mittelweg zwischen Raten und Ausfragen. Das Modell prüft die Aufgabe auf Mehrdeutigkeiten und fragt nur dort nach, wo verschiedene Antworten zu einem deutlich anderen Ergebnis führen würden. Bei allem anderen arbeitet es los und nennt die Annahmen, die es getroffen hat, damit du sie korrigieren kannst.

Zur Abgrenzung: Bei Clarification stellt das Modell vorab alle Fragen in einer Liste und wartet. Bei Flipped Interaction führt es ein ganzes Interview. Der Ambiguity Check unterbricht so wenig wie möglich.

## Beispiel

```prompt
Erstelle mir einen Trainingsplan für die nächsten acht Wochen. Ziel: [z. B. 10 km in unter einer Stunde laufen].

Bevor du anfängst, prüf, ob etwas an der Aufgabe unklar ist. Stell mir nur dann eine Frage, wenn die Antwort den Plan wesentlich verändern würde, zum Beispiel wie viele Tage pro Woche ich trainieren kann. Höchstens drei Fragen. Bei Punkten, die das Ergebnis nur wenig verändern, triff eine vernünftige Annahme, statt zu fragen, und liste diese Annahmen am Anfang des Plans auf, damit ich sie korrigieren kann.
```

## Wann es hilft

Bei kurzen Aufträgen mit einer oder zwei echten Unbekannten, für die ein ganzes Interview zu viel wäre. Die Annahmenliste ist der wichtige Teil: Du siehst sofort, wo das Modell geraten hat. Grenzen: Ob eine Frage wesentlich ist, entscheidet das Modell selbst, und es liegt dabei nicht immer richtig. Was dir wichtig ist, schreib besser gleich in den Prompt.
