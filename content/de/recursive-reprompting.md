---
title: Recursive Reprompting
level: Fortgeschritten
tags: iteration agenten
description: Eine automatische Schleife, die die Ausgabe immer wieder prüft und überarbeitet, bis ein Abbruchkriterium erfüllt ist.
---

Statt einmal zu fragen und das Ergebnis zu nehmen, läuft eine Schleife: Ausgabe erzeugen, prüfen, das Prüfergebnis zurück ins Modell geben, überarbeiten. Ein Skript oder ein Agent steuert die Schleife, nicht du per Hand. Entscheidend ist das Abbruchkriterium: Die Tests laufen durch, eine Checkliste ist erfüllt, oder eine Höchstzahl an Runden ist erreicht. Ohne feste Grenze dreht sich die Schleife weiter oder verschlechtert ein bereits gutes Ergebnis.

## Beispiel

Anweisung an einen Agenten mit Code-Werkzeug:

```prompt
Aufgabe: Implementiere die Funktion in [Datei], sodass alle Tests in [Testdatei] bestehen. Ändere die Tests nicht.

Arbeite in Runden:
1. Ändere den Code.
2. Führe die Tests aus.
3. Wenn alle Tests bestehen, hör auf und fasse zusammen, was du geändert hast.
4. Wenn Tests fehlschlagen, lies die Fehlermeldungen und beginne die nächste Runde mit genau diesen Fehlern.

Hör spätestens nach 5 Runden auf. Berichte dann, welche Tests noch fehlschlagen, was du versucht hast und was du als Ursache vermutest.
```

## Wann es hilft

Wenn sich das Ziel automatisch prüfen lässt: Tests, ein Validator für ein Datenformat, eine Checkliste, die ein zweiter Prompt abhakt. Ohne objektive Prüfung bewertet das Modell seine eigene Arbeit, und die Runden bringen schnell nichts mehr. Die Höchstzahl an Runden schützt vor Kosten und Endlosschleifen. Verwandt sind Reflexion, das aus Fehlschlägen eine Lehre für den nächsten Versuch zieht, und Self-Refine, das ohne äußere Prüfung überarbeitet.
