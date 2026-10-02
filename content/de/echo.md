---
title: Echo Prompting
level: Anfänger
tags: prüfung rückfragen
description: Das Modell gibt die Aufgabe mit allen Vorgaben in eigenen Worten wieder, bevor es anfängt.
---

Bevor das Modell arbeitet, fasst es die Aufgabe in eigenen Worten zusammen und listet alle Vorgaben als Checkliste auf. Dann wartet es. Du liest die Liste, korrigierst, was falsch verstanden wurde, und gibst erst danach den Start frei.

Der Nutzen liegt bei dir: Ein Missverständnis in einer Checkliste zu entdecken kostet Sekunden. Es in einem fertigen Ergebnis von drei Seiten zu finden kostet deutlich mehr.

## Beispiel

```prompt
Aufgabe: [Deine Aufgabe mit allen Vorgaben]

Bevor du anfängst:
1. Fasse die Aufgabe in zwei bis drei Sätzen in eigenen Worten zusammen.
2. Liste alle Vorgaben als Checkliste auf: Umfang, Format, Zielgruppe, Ausschlüsse, Fristen und alles andere, was du meinem Text entnimmst.
3. Markiere die Punkte, die du angenommen hast, weil ich sie nicht genannt habe.

Beginne noch nicht mit der Arbeit. Warte, bis ich die Liste bestätigt oder korrigiert habe.
```

## Wann es hilft

Vor langen oder aufwendigen Aufgaben: ein Bericht, ein Refactoring, eine Übersetzung mit vielen Regeln. Bei kurzen Aufgaben ist die Rückfrage langsamer als ein zweiter Versuch. Eine richtige Zusammenfassung garantiert kein richtiges Ergebnis, aber eine falsche zeigt den Fehler, bevor er Arbeit kostet. Die bestätigte Checkliste kannst du am Ende auch nutzen, um das Ergebnis zu prüfen.
