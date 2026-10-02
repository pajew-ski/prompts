---
title: Few-Shot Prompting
level: Anfänger
tags: beispiele grundlagen
description: Du zeigst dem Modell einige gelöste Beispiele, damit es Format und Verhalten übernimmt.
---

Statt nur zu beschreiben, was das Modell tun soll (Zero-Shot), gibst du ihm einige gelöste Beispiele (Shots). Das Modell setzt das Muster fort. Das wirkt besonders bei festen Formaten, Klassifikationen und Stilvorgaben, die sich schwer in Worte fassen lassen.

Beispiele wirken stark, auch dort, wo du es nicht beabsichtigst: Modelle übernehmen Oberflächenmerkmale wie Länge, Satzbau und Wortwahl. Wähle die Beispiele deshalb so, dass sie sich voneinander unterscheiden, Grenzfälle abdecken und genau das Format haben, das du zurückbekommen willst.

## Beispiel

```prompt
Bestimme die Stimmung jeder Kundenbewertung. Antworte nur mit einem Wort: Positiv, Negativ, Neutral oder Gemischt.

Bewertung: "Ich liebe das neue Design."
Stimmung: Positiv

Bewertung: "Seit dem Update startet die App nicht mehr, und der Support antwortet seit einer Woche nicht."
Stimmung: Negativ

Bewertung: "Der Akku hält lange, aber die Kamera enttäuscht."
Stimmung: Gemischt

Bewertung: "Na toll, schon wieder abgestürzt."
Stimmung: Negativ

Bewertung: "Es ist okay, aber nichts Besonderes."
Stimmung:
```

Erwartete Antwort: Neutral. Für eigene Texte ersetzt du die letzte Bewertung. Die Beispiele decken Länge, gemischte Stimmung und Ironie ab.

## Wann es hilft

Wenn das Modell eine Aufgabe ohne Beispiele falsch oder uneinheitlich löst, und bei Formaten, die du exakt so zurückhaben willst. Drei bis fünf verschiedene Beispiele reichen meist. Sind alle Beispiele kurz, werden auch die Antworten kurz; gehören die meisten zu einer Kategorie, verschieben sich die Antworten in diese Richtung. Bei einfachen, klar beschriebenen Aufgaben genügt oft die Anweisung allein.
