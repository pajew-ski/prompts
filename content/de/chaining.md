---
title: Prompt Chaining
level: Mittel
tags: zerlegung struktur agenten
description: Eine Aufgabe auf mehrere Prompts verteilen, deren Ausgabe jeweils geprüft in den nächsten geht.
---

Beim Prompt Chaining zerlegst du eine Aufgabe in mehrere Prompts. Die Ausgabe des einen wird die Eingabe des nächsten. Zwei Dinge machen eine Kette besser als einen langen Einzelprompt: Zwischen den Schritten kannst du das Ergebnis prüfen oder korrigieren, bevor ein Fehler weiterwandert. Und jeder Prompt bekommt nur das, was er für seinen Schritt braucht.

## Beispiel

```prompt
Schritt 1, Extrahieren:
Lies die folgende Kundenmail und gib ein JSON-Objekt mit diesen Feldern aus: name, bestellnummer, problem (ein Satz), gewünschte_lösung. Setze null, wenn eine Angabe fehlt.
Mail:
"""
[Kundenmail]
"""

Schritt 2, Prüfen:
Hier ist ein JSON-Objekt, das aus einer Kundenmail extrahiert wurde:
[Ausgabe von Schritt 1]
Prüfe: Hat die Bestellnummer das Format [z. B. B-123456]? Ist das Problem konkret genug, um es zu bearbeiten? Antworte mit "ok" oder mit einer Liste der Mängel.

Schritt 3, Schreiben:
Schreibe auf Grundlage dieser Daten eine Antwort an den Kunden:
[Geprüftes JSON]
Ton: freundlich und sachlich, höchstens 120 Wörter. Wenn ein Feld null ist, frag gezielt nach dieser Angabe.
```

Meldet Schritt 2 Mängel, korrigierst du oder ein Skript die Daten, bevor Schritt 3 läuft. Die Mail selbst sieht Schritt 3 nicht mehr, er braucht nur die geprüften Daten.

## Wann es hilft

Bei Aufgaben mit klar getrennten Phasen und bei allem, was automatisiert laufen soll: Datenverarbeitung, Content-Pipelines, Agenten-Workflows. Jeder Schritt lässt sich einzeln testen und verbessern. Grenzen: Jeder Schritt kostet einen Aufruf und Zeit, und die Kette ist nur so gut wie ihre Übergaben. Für eine kurze, einfache Aufgabe ist ein einzelner Prompt die bessere Wahl.
