---
title: Thread of Thought
level: Fortgeschritten
tags: analyse context rag
description: Technik für chaotische Kontexte: Den 'roten Faden' durch riesige Datenmengen ziehen.
---

Optimiert für RAG (Retrieval Augmented Generation) mit vielen Dokumenten.

## Beispiel

```prompt
Ich habe dir 10 Dokumente gegeben. Es ist viel Rauschen dabei.
Gehe Schritt für Schritt vor und extrahiere NUR die Informationen, die logisch aufeinander aufbauen und zur Frage X gehören. Ziehe einen "roten Faden" durch die Daten. Ignoriere alles, was den Faden unterbricht.
```

## Strategie

Filtert irrelevante "Distractors" besser als Standard-CoT.
