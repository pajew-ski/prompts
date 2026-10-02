---
title: Sandwich Prompting
level: Anfänger
tags: struktur dokumente
description: Bei langem Material die Aufgabe kurz vorweg nennen, das Material einfügen und die wichtigste Anweisung am Ende wiederholen.
---

Bei langen Texten, Tabellen oder Code im Prompt kommt es auf die Reihenfolge an. Lege das Material nach vorn und die eigentliche Frage mit den Anweisungen ans Ende. Ein kurzer Satz zu Beginn sagt, worum es geht, damit das Material mit dem richtigen Ziel gelesen wird. Die wichtigste Anweisung wiederholst du nach dem Material, denn sie ist dann das Letzte, was das Modell vor der Antwort liest.

## Beispiel

```prompt
Ich brauche eine SQL-Abfrage für unsere Datenbank. Unten stehen das Schema und die Frage.

<schema>
[Datenbankschema]
</schema>

Frage: Welche zehn Kunden hatten im letzten Quartal den höchsten Umsatz, mit Name, Umsatz und Anzahl der Bestellungen?

Gib nur die SQL-Abfrage als Codeblock aus, ohne Erklärung. Verwende nur Tabellen und Spalten, die im Schema oben vorkommen.
```

## Wann es hilft

Immer, wenn das Material lang ist: Verträge, Protokolle, Datenbankschemata, ganze Dateien. Steht die Frage nur am Anfang, geht sie hinter dem Material leichter unter. Markierungen wie `<schema>` trennen Material und Anweisungen sauber. Bei kurzen Prompts mit wenigen Zeilen Material macht die Reihenfolge kaum einen Unterschied.
