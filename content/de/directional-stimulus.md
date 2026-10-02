---
title: Directional Stimulus Prompting
level: Mittel
tags: zusammenfassung kontext
description: Du gibst dem Modell Stichwörter mit, die eine Zusammenfassung oder Antwort in die gewünschte Richtung lenken.
---

Statt nur "Fasse zusammen" zu schreiben, gibst du dem Modell Hinweise mit: Stichwörter, Begriffe oder Aspekte, die in der Ausgabe vorkommen sollen. Das Modell sieht dadurch, worauf es dir ankommt, und die Zusammenfassung wird weniger allgemein.

Die Methode stammt von Li et al. (2023). Dort erzeugt ein kleines, eigens trainiertes Modell die Stichwörter für jeden Eingabetext, und ein großes Modell schreibt damit die Zusammenfassung. Von Hand übernimmst du die Rolle des kleinen Modells: Du wählst die Stichwörter selbst.

## Beispiel

```prompt
<artikel>
[Text des Artikels, z. B. über KI-Sicherheit]
</artikel>

Hinweise: Ausrichtungsproblem, Black Box, Interpretierbarkeit

Fasse den Artikel in drei Sätzen zusammen. Greife dabei die Hinweise auf, aber schreib nur, was im Artikel steht. Wenn ein Hinweis im Artikel nicht vorkommt, sag das, statt etwas dazu zu ergänzen.
```

## Wann es hilft

Wenn Zusammenfassungen zu allgemein ausfallen oder die Punkte fehlen, die für dich zählen: bei Fachartikeln, Protokollen, Berichten für eine bestimmte Leserschaft. Die Stichwörter lenken, sie können aber auch verzerren. Gibst du nebensächliche oder suggestive Hinweise, betont das Modell Nebensächliches. Wenn du noch nicht weißt, was wichtig ist, frag zuerst offen nach den Kernaussagen und wähle die Hinweise danach.
