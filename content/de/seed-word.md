---
title: Seed Word Prompting
level: Anfänger
tags: stil format
description: Lege die ersten Wörter der Antwort fest, damit Richtung und Ton von Anfang an stimmen.
---

Die ersten Wörter einer Antwort bestimmen, wie sie weitergeht. Eine Antwort, die mit "Ehrlich gesagt" beginnt, wird eher eine offene Einschätzung als ein Lob. Seed Word Prompting nutzt das, indem du diese ersten Wörter vorgibst. Es ist die kleinste Form von Output Priming.

Im Chat bittest du das Modell, die Antwort mit bestimmten Wörtern zu beginnen. Über eine API, die eine vorausgefüllte Assistenten-Nachricht erlaubt (Prefill), schreibst du die Wörter selbst an den Anfang der Antwort, und das Modell setzt sie fort. Nicht alle aktuellen Modelle unterstützen Prefill.

## Beispiel

```prompt
Hier ist der Entwurf meines Anschreibens für eine Bewerbung:

[Dein Entwurf]

Gib mir Feedback dazu. Beginne deine Antwort mit: "Ehrlich gesagt ist die größte Schwäche dieses Entwurfs"
```

Mit Prefill steht derselbe Satzanfang am Beginn der Assistenten-Nachricht, und die letzte Zeile des Prompts entfällt.

## Wann es hilft

Wenn das Modell sonst mit Lob, Floskeln oder einer Wiederholung der Frage einsteigt und du gleich zur Sache kommen willst. Der Seed legt die Richtung fest, nicht den Inhalt: Ein Anfang wie "die größte Schwäche" sorgt dafür, dass eine Schwäche genannt wird, auch wenn der Entwurf gut ist. Wähl den Seed deshalb nur so stark, wie du die Richtung wirklich willst. Für ein festes Ausgabeformat wie JSON passen Output Priming oder der Schema-Modus der API besser.
