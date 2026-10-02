---
title: Fact-Core Prompting
level: Mittel
tags: fakten analyse
description: Das Modell sammelt erst Fakten mit Sicherheitsgrad und schreibt dann eine Bewertung, die nur auf ihnen aufbaut.
---

Bevor das Modell eine Meinung formuliert, legt es eine Liste von Fakten an, den Faktenkern. Jeder Fakt bekommt eine Angabe, wie sicher er ist. Werturteile stehen in einer eigenen Liste, damit sichtbar bleibt, was Tatsache ist und was Gewichtung. Der Text darf danach nur die aufgelisteten Fakten verwenden und muss sagen, an welcher Stelle er wertet.

So prüfst du die Grundlage, bevor du dem Ergebnis glaubst. Und bei einem Streitpunkt siehst du, ob er an einem Fakt hängt oder an einer Gewichtung.

## Beispiel

```prompt
Thema: [Thema, z. B. Kernkraft in Deutschland]

Schritt 1: Liste die wichtigsten Fakten zum Thema auf, gegliedert nach [Bereichen, z. B. Technik, Wirtschaft, Geschichte]. Markiere jeden Fakt als "gesichert", "wahrscheinlich" oder "umstritten". Schreib nur auf, was du als Tatsache vertreten kannst.

Schritt 2: Liste getrennt davon die Werturteile auf, die in der Debatte eine Rolle spielen, etwa wie man Risiken gegen Kosten abwägt.

Schritt 3: Schreib einen ausgewogenen Essay von etwa [Länge] Wörtern. Verwende nur Fakten aus Schritt 1. Wenn du Fakten gegeneinander gewichtest, sag ausdrücklich, dass das eine Wertung ist und auf welchem Werturteil aus Schritt 2 sie beruht.
```

## Wann es hilft

Bei umstrittenen Themen, Entscheidungsvorlagen und Texten, die ausgewogen sein sollen und nicht nur so wirken. Die Fakten stammen aus dem Modell selbst und können falsch oder veraltet sein; die Sicherheitsangabe ist eine Selbsteinschätzung, keine Prüfung. Für belastbare Arbeit gib Quellen mit oder prüfe die Liste, bevor der Essay entsteht. Teile den Prompt dafür in zwei Nachrichten: Schritt 1 und 2, dann Schritt 3.
