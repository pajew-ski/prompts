---
title: "XML Input Delimiters"
description: "Input-Daten durch XML-Tags strikt von Instruktionen trennen."
tags: ["sicherheit", "struktur", "best-practice"]
difficulty: "Mittel"
---

# XML Input Delimiters

Moderne Modelle (wie Claude) lieben XML-Tags, um zu verstehen, was was ist.

## Beispiel

**Prompt:**
```text
Ich werde dir einen Text geben und dazu Instruktionen.
```>
> <text>
> Hier steht der Text, der analysiert werden soll.
> </text>
>
> <instructions>
> Fasse den Text zusammen.
> </instructions>

## Strategie

Verhindert "Prompt Injection" (wenn der Text Instruktionen enthält) und Verwirrung.
