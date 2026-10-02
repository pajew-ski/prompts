---
title: Structure Tagging (XML)
level: Mittel
tags: struktur format
description: Gliedere die Antwort und lange Prompts mit Tags, damit sich Teile auslesen und gezielt ansprechen lassen.
---

Tags wie `<vergleich>` oder `<empfehlung>` geben einer Antwort eine feste Gliederung. Ein Programm kann die Teile dann zuverlässig auslesen, etwa nur den Inhalt von `<empfehlung>` anzeigen und den Rest verwerfen. Auch in einem langen Prompt helfen Tags: Du kannst dich in der Anweisung auf einen Abschnitt beziehen, zum Beispiel "die Kriterien in `<kriterien>`", und der Bezug ist eindeutig.

Wie man Eingabedaten mit Tags von Anweisungen trennt und was das gegen Prompt Injection leistet, beschreibt die Karte XML Input Delimiters.

## Beispiel

```prompt
Ich gebe dir zwei Angebote für dieselbe Leistung.

<angebot_a>
[Text von Angebot A]
</angebot_a>

<angebot_b>
[Text von Angebot B]
</angebot_b>

<kriterien>
Preis, Leistungsumfang, Kündigungsfristen, Haftung
</kriterien>

Vergleiche die beiden Angebote anhand der Kriterien in <kriterien>. Gliedere deine Antwort so:
<vergleich>pro Kriterium ein Absatz, der beide Angebote gegenüberstellt</vergleich>
<offene_fragen>was in den Angeboten fehlt oder unklar ist</offene_fragen>
<empfehlung>ein Satz, welches Angebot du wählen würdest und warum</empfehlung>

Schreib nichts außerhalb dieser drei Tags.
```

## Wann es hilft

Wenn eine Antwort weiterverarbeitet wird, von einem Skript oder im nächsten Schritt einer Prompt-Kette, und wenn ein Prompt aus mehreren Teilen besteht, auf die du dich beziehen willst. Die Tag-Namen sind frei wählbar; sprechende Namen machen den Prompt für dich und das Modell leichter lesbar. Für streng maschinenlesbare Ausgaben ist JSON mit dem Schema-Modus der API verlässlicher. Tags sind die leichtere Lösung, wenn du gegliederten Fließtext brauchst.
