---
title: Self-Consistency (Selbstkonsistenz)
level: Fortgeschritten
tags: reasoning prüfung
description: Löse dieselbe Aufgabe mehrmals unabhängig und nimm das Ergebnis, auf das die meisten Lösungswege kommen.
---

Self-Consistency (Wang et al., 2022) beruht auf einer Beobachtung: Bei Aufgaben mit einer eindeutigen Antwort führen verschiedene richtige Lösungswege zum selben Ergebnis, Fehler dagegen streuen. Die eigentliche Methode schickt denselben Prompt mit Chain of Thought mehrmals ab, mit einer Temperatur über null, damit sich die Lösungswege unterscheiden, und nimmt die Antwort, die am häufigsten vorkommt. Dafür brauchst du die API oder wiederholte Durchläufe in getrennten Chats.

In einem einzelnen Chat kannst du die Idee annähern, indem du mehrere unabhängige Lösungswege verlangst und vergleichen lässt. Das ist schwächer, weil alle Wege im selben Text entstehen und sich gegenseitig beeinflussen.

## Beispiel

```prompt
Aufgabe: [Deine Aufgabe mit eindeutiger Antwort, z. B. eine Rechen- oder Logikaufgabe]

Löse die Aufgabe auf drei verschiedenen Wegen, zum Beispiel einmal direkt rechnend, einmal rückwärts vom gesuchten Wert her und einmal mit einer Tabelle. Bearbeite jeden Weg so, als kenntest du die anderen nicht, und schreib zu jedem das Ergebnis.

Vergleiche danach die drei Ergebnisse. Stimmen sie überein, nenne das Ergebnis. Stimmen sie nicht überein, finde die Stelle, an der die Wege auseinandergehen, und entscheide begründet, welcher Weg richtig ist.
```

## Wann es hilft

Bei Mathe-, Logik- und Klassifikationsaufgaben, deren Antworten sich direkt vergleichen lassen. Bei offenen Aufgaben wie Texten gibt es keine Mehrheit, die man zählen kann. Über die API sind mehrere Durchläufe, etwa fünf, ein üblicher Anfang; die Kosten steigen mit jedem Durchlauf. Die Streuung ist selbst eine Information: Gehen die Ergebnisse weit auseinander, solltest du das Ergebnis prüfen, auch wenn es eine knappe Mehrheit hat.
