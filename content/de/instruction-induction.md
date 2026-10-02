---
title: Instruction Induction
level: Mittel
tags: beispiele meta
description: Das Modell leitet aus Beispielen die zugrunde liegende Regel ab, formuliert sie und wendet sie erst dann an.
---

Du gibst dem Modell Paare aus Eingabe und Ausgabe und lässt es die Anweisung erschließen, die sie erzeugt (Honovich et al., 2022). Das hilft, wenn du ein Muster vor dir hast, es aber schwer in Worte fassen kannst.

Wichtig ist die Reihenfolge: Das Modell nennt zuerst die Regel und wendet sie erst danach an. So kannst du die Regel prüfen, bevor du den Ergebnissen vertraust. Eine falsch erkannte Regel kann bei den Beispielen zufällig dasselbe liefern und erst bei neuen Eingaben auffallen.

## Beispiel

```prompt
Hier sind Beispiele für eine Umformung:

Eingabe: "schmidt, peter" -> Ausgabe: "Peter Schmidt"
Eingabe: "BRAUN, KLAUS" -> Ausgabe: "Klaus Braun"
Eingabe: "meier-lang, eva" -> Ausgabe: "Eva Meier-Lang"

1. Formuliere die Regel, die diese Ausgaben erzeugt, als Anweisung, die jemand ohne die Beispiele befolgen könnte.
2. Nenne Fälle, in denen die Regel unklar ist oder die Beispiele mehrere Deutungen zulassen.
3. Wende die Regel danach auf diese Eingaben an:
[Deine Eingaben, eine pro Zeile]
```

## Wann es hilft

Wenn du Beispiele hast, aber keine Beschreibung: Datenbereinigung, Umformatierung, Stilregeln, Klassifikationen. Die formulierte Regel kannst du danach als Anweisung in einem eigenen Prompt verwenden, auch für ein kleineres Modell. Wenige Beispiele lassen oft mehrere Regeln zu. Wähle sie so, dass sie die Fälle abdecken, auf die es dir ankommt, im Beispiel oben Großschreibung und Doppelnamen.
