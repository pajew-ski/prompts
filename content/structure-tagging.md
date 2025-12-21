---
title: "Structure Tagging (XML)"
description: "Nutzung von XML/HTML Tags, um Input und Output klar zu strukturieren."
tags: ["parsing", "struktur", "coding"]
difficulty: "Mittel"
---

# Structure Tagging

LLMs verstehen XML-ähnliche Strukturen sehr gut. Nutze Tags, um Teile des Prompts klar abzugrenzen.

## Beispiel

**Prompt:**
```text
Ich gebe dir zwei Dokumente.
```>
> <dokument_a>
> [Text A]
> </dokument_a>
>
> <dokument_b>
> [Text B]
> </dokument_b>
>
> Vergleiche die Argumente in <dokument_a> mit denen in <dokument_b>. Gib das Ergebnis in <analyse>-Tags aus.

## Strategie

Verhindert, dass das Modell Anweisungen mit Inhalt verwechselt ("Prompt Injection" Schutz light) und erleichtert das maschinelle Parsen der Antwort.
