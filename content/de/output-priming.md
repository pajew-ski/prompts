---
title: Output Priming
level: Mittel
tags: format stil
description: Den Anfang der Antwort vorgeben, damit Format und Ton von der ersten Zeile an feststehen.
---

Ein Sprachmodell setzt Text fort. Echtes Priming heißt: Die Antwort beginnt bereits mit deinem Text, und das Modell schreibt ab dort weiter. Das geht überall, wo du den Anfang der Modellantwort selbst setzen kannst, also bei Completion-Schnittstellen und bei Chat-Schnittstellen, die eine vorausgefüllte Assistenten-Nachricht erlauben. Nicht alle aktuellen Modelle unterstützen das.

Im normalen Chatfenster kannst du die Antwort nicht vorausfüllen. Das nächste Gegenstück ist die Bitte, mit einem bestimmten Satz zu beginnen.

## Beispiel

Im Chat:

```prompt
Erzähle eine Gruselgeschichte von etwa 300 Wörtern für Jugendliche.
Beginne deine Antwort wörtlich mit diesem Satz und schreib ohne Vorbemerkung weiter:
"Es war eine dunkle und stürmische Nacht, als der alte Hausmeister das Licht im Keller brennen sah."
```

Über eine Schnittstelle mit vorausgefüllter Antwort. Die zweite Nachricht schreibst du selbst als Anfang der Modellantwort:

````text
Nutzer: Erstelle ein Python-Skript, das alle .txt-Dateien in einem Ordner auflistet.

Assistent (vorausgefüllt):
```python
import os
````

Das Modell setzt direkt im Codeblock fort und lässt die Einleitung weg. Ebenso erzwingt eine mit `{` beginnende Antwort, dass JSON folgt.

## Wann es hilft

Wenn eine Antwort ein festes Format haben soll oder ohne Vorrede beginnen muss, etwa bei automatischer Weiterverarbeitung. Für garantiert gültiges JSON sind strukturierte Ausgaben mit Schema besser, wo die Schnittstelle sie anbietet. Im Chat ist die Bitte um einen Anfangssatz nur eine Anweisung, keine Garantie, und wird meist, aber nicht immer befolgt.
