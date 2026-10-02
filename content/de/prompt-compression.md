---
title: Prompt Compression
level: Fortgeschritten
tags: kosten optimierung kürze
description: Einen wiederverwendeten Prompt kürzen, indem Wiederholungen und Füllstoff fallen, ohne eine einzige Regel zu verlieren.
---

Ein Systemprompt, der bei jedem Aufruf mitgeschickt wird, kostet bei jedem Aufruf. Kürzen lohnt sich dort, aber richtig: Wiederholungen, Füllsätze, Höflichkeitsformeln und Beispiele, die nichts Neues zeigen, fallen weg. Jede Regel und jede Begründung bleibt. Kryptische Abkürzungen und Symbolsprache sparen dagegen wenige Tokens und kosten Genauigkeit, weil das Modell sie anders deuten kann, als du sie gemeint hast.

## Beispiel

```prompt
Kürze den folgenden Systemprompt. Er wird bei jedem Aufruf mitgeschickt.

Regeln:
- Jede Anweisung, Einschränkung und Begründung bleibt inhaltlich erhalten.
- Streiche Wiederholungen, Füllsätze und Beispiele, die nichts zeigen, was die Anweisungen nicht schon sagen.
- Schreib in normalen, vollständigen Sätzen, ohne eigene Abkürzungen.

Gib zuerst den gekürzten Prompt aus. Liste danach auf, was du entfernt hast und warum, damit ich prüfen kann, dass nichts Wichtiges fehlt.

Prompt:
[Dein Systemprompt]
```

## Wann es hilft

Bei langen Systemprompts in Anwendungen mit vielen Aufrufen. Teste die gekürzte Fassung an denselben Beispieleingaben wie die alte, bevor du sie einsetzt. Prüfe auch, ob dein Anbieter Prompt-Caching anbietet: Ein gleichbleibender Anfang des Prompts wird dann zwischengespeichert und deutlich günstiger berechnet, sodass sich Kürzen weniger lohnt als Klarheit.
