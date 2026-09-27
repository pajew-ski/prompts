---
title: XML Input Delimiters
level: Mittel
tags: sicherheit struktur best-practice
description: Input-Daten durch XML-Tags strikt von Instruktionen trennen.
---

Moderne Modelle (wie Claude) lieben XML-Tags, um zu verstehen, was was ist.

## Beispiel

```prompt
Ich werde dir einen Text geben und dazu Instruktionen.
<text>
Hier steht der Text, der analysiert werden soll.
</text>

<instructions>
Fasse den Text zusammen.
</instructions>
```

## Strategie

Verhindert "Prompt Injection" (wenn der Text Instruktionen enthält) und Verwirrung.
