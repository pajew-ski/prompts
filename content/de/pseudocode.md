---
title: Pseudocode Prompting
level: Fortgeschritten
tags: struktur code
description: Einen Ablauf als Pseudocode formulieren lassen, damit Eingaben, Bedingungen und Lücken eindeutig sichtbar werden.
---

Natürliche Sprache lässt vieles offen: Was passiert, wenn zwei Bedingungen zugleich gelten? Was ist der Normalfall? Pseudocode zwingt zu Eingaben, Ausgaben, Bedingungen und Reihenfolge. Lässt du eine Regel in Prosa als Pseudocode schreiben, zeigt sich, welche Fälle sie nicht regelt. Umgekehrt funktioniert es auch: Ein kurzer Pseudocode in deinem Prompt beschreibt einen Ablauf oft eindeutiger als ein Absatz Text.

## Beispiel

```prompt
Unten steht unsere Rückgaberegel in Textform.
Schreibe sie als Pseudocode-Funktion rueckgabe_pruefen(bestellung, rueckgabedatum, zustand), die "erstatten", "gutschrift" oder "ablehnen" zurückgibt.
Verwende nur Bedingungen, die im Text stehen.
Markiere jede Stelle, an der der Text einen Fall nicht regelt oder mehrdeutig ist, mit einem Kommentar OFFEN und einer kurzen Frage.

Regel:
[Text der Rückgaberegel]
```

## Wann es hilft

Bei Geschäftsregeln, Freigabeprozessen, Spielregeln und Algorithmen, also überall, wo Bedingungen und Reihenfolge zählen. Die markierten offenen Stellen sind oft das wertvollste Ergebnis. Für Erklärungen, Argumente oder Stilfragen passt Pseudocode schlecht. Das Ergebnis ist kein lauffähiges Programm; wenn du eins brauchst, bitte um Code in einer konkreten Sprache.
