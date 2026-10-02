---
title: System 2 Attention
level: Fortgeschritten
tags: kontext bias
description: Lass das Modell den Kontext erst neutral umschreiben und die Frage herauslösen, bevor es antwortet.
---

Irrelevante Details und Meinungen im Prompt ziehen die Antwort in ihre Richtung. Steht im Prompt, was du selbst denkst, stimmt die Antwort dir eher zu (Sycophancy). System 2 Attention (Weston & Sukhbaatar, 2023, Meta) setzt davor einen eigenen Schritt: Das Modell schreibt den Kontext so um, dass nur relevanter, neutraler Inhalt bleibt, und trennt die eigentliche Frage ab. Die Antwort entsteht dann aus dieser bereinigten Fassung. Im Paper sind das zwei getrennte Aufrufe; im Prompt bildest du sie als zwei Schritte nach.

## Beispiel

```prompt
<text>
[Dein Text, z. B. eine Frage mit Hintergrund, eigener Meinung und Nebensächlichkeiten]
</text>

Geh in zwei Schritten vor.

Schritt 1: Schreib den Text so um, dass nur die Informationen bleiben, die für eine sachliche Antwort nötig sind. Entferne Meinungen, Vermutungen über die richtige Antwort und Details, die nichts zur Sache tun. Formuliere danach die eigentliche Frage getrennt und neutral. Gib beides in <bereinigt>-Tags aus.

Schritt 2: Beantworte die Frage nur auf Grundlage von <bereinigt>, so als hättest du den ursprünglichen Text nie gesehen.
```

Aus "Ich finde, Microservices sind für unser Projekt einfach die moderne Lösung. Unser Monolith läuft stabil, ist aber alt, und wir sind nur drei Entwickler. Sollten wir umsteigen?" wird im ersten Schritt etwa: "Ein Team aus drei Entwicklern betreibt eine ältere, stabil laufende monolithische Anwendung. Frage: Was spricht für und gegen eine Umstellung auf Microservices?"

## Wann es hilft

Wenn der Prompt eine Meinung, eine erhoffte Antwort oder viel Beiwerk enthält: bei eigenen Entscheidungsfragen, bei weitergeleiteten Anfragen, bei Texten mit suggestiven Formulierungen. Am stärksten wirkt die Methode mit zwei getrennten Aufrufen, bei denen der zweite den Originaltext gar nicht sieht; im selben Prompt kann der Originaltext weiter mitwirken. Bei knappen, neutralen Fragen bringt der Schritt nichts. Wer seine Frage gleich neutral stellt, erreicht einen Teil des Effekts ohne Umweg.
