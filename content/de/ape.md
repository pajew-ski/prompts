---
title: Automatic Prompt Engineer (APE)
level: Fortgeschritten
tags: meta optimierung
description: Das Modell schlägt Anweisungen vor, und du behältst die, die an Testbeispielen am besten abschneidet.
---

Automatic Prompt Engineer (Zhou et al., 2022) behandelt die Anweisung als etwas, das man sucht und testet. Das Modell bekommt Eingabe-Ausgabe-Paare und schlägt Anweisungen vor, die diese Umwandlung beschreiben. Dann wird jeder Kandidat an weiteren Beispielen ausprobiert, und der mit den meisten richtigen Ergebnissen gewinnt.

## Beispiel

```prompt
Hier sind Eingabe-Ausgabe-Paare für eine Aufgabe:

Eingabe: [Beispiel 1]
Ausgabe: [Ergebnis 1]

Eingabe: [Beispiel 2]
Ausgabe: [Ergebnis 2]

Eingabe: [Beispiel 3]
Ausgabe: [Ergebnis 3]

Schreibe fünf verschiedene Anweisungen, mit denen ein Sprachmodell aus jeder Eingabe die passende Ausgabe erzeugen könnte. Die Anweisungen sollen sich im Ansatz unterscheiden, nicht nur in der Formulierung. Nummeriere sie und gib sonst nichts aus.
```

Danach kommt der wichtige Teil: Halte einige Paare zurück, die das Modell beim Erzeugen nicht gesehen hat. Lass jede der fünf Anweisungen in einem frischen Chat auf diese Eingaben los, zähle die richtigen Ausgaben und behalte die beste Anweisung.

## Wann es hilft

Bei wiederkehrenden Aufgaben mit einer klar richtigen Antwort, etwa Klassifikation, Extraktion oder Umformatierung, für die du ohnehin Testbeispiele hast. Den Test kannst du von Hand machen, ab mehr als einer Handvoll Beispiele lohnt sich ein Skript. Das Modell nur schätzen zu lassen, welche seiner Anweisungen am besten funktioniert, ist ein schwaches Signal. Der Nutzen der Methode liegt im Messen an Beispielen. Ohne messbares Ergebnis, etwa beim kreativen Schreiben, fehlt die Grundlage für die Auswahl.
