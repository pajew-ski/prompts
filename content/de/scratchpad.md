---
title: Scratchpad
level: Fortgeschritten
tags: reasoning struktur
description: Gib dem Modell einen eigenen Bereich für Notizen und Zwischenergebnisse, bevor es die Antwort schreibt.
---

Ein Scratchpad ist ein ausgewiesener Arbeitsbereich in der Antwort. Das Modell hält dort Zwischenergebnisse, Variablenwerte oder Teilrechnungen fest und schreibt erst danach die eigentliche Antwort. Weil die Zwischenschritte als Text dastehen, kann es auf sie zurückgreifen, statt alles in einem Zug zu lösen, und du siehst, an welcher Stelle ein Fehler entsteht.

Anders als beim Inner Monologue geht es nicht darum, Überlegungen vor dem Nutzer zu verbergen. Das Scratchpad darf sichtbar sein: Es ist Arbeitsfläche, nicht ein versteckter Bereich.

## Beispiel

```prompt
Aufgabe: [Deine Aufgabe, z. B. der Code, dessen Ausgabe du wissen willst, oder eine mehrstufige Rechnung]

Nutze zuerst einen <scratchpad>-Block als Arbeitsbereich. Halte dort Zwischenergebnisse, Variablenwerte nach jedem Schritt und Annahmen fest, die du triffst. Prüfe am Ende des Blocks, ob die Zwischenergebnisse zueinander passen.

Schreib danach außerhalb des Blocks die Antwort in <antwort>-Tags, ohne die Zwischenschritte zu wiederholen.
```

## Wann es hilft

Bei Aufgaben mit vielen Zwischenzuständen: Code Zeile für Zeile nachverfolgen, mehrstufige Rechnungen, Pläne mit Abhängigkeiten. Für einfache Fragen ist es überflüssig. Reasoning-Modelle haben einen solchen Arbeitsbereich eingebaut, sie denken vor der Antwort intern nach. Bei ihnen reicht es meist, die Aufgabe vollständig zu beschreiben; ein explizites Scratchpad lohnt sich dort nur, wenn du die Zwischenschritte selbst lesen oder weiterverarbeiten willst.
