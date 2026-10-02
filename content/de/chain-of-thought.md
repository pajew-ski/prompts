---
title: Chain of Thought (Gedankenkette)
level: Anfänger
tags: reasoning grundlagen
description: Das Modell schreibt die Zwischenschritte auf, bevor es antwortet.
---

Bei Chain of Thought (Wei et al., 2022) schreibt das Modell seine Zwischenschritte auf, bevor es die Antwort gibt. Im Original zeigte man dafür Beispiele mit ausgeschriebenem Lösungsweg. Später zeigte sich, dass ein einziger Satz genügt: "Let's think step by step", auf Deutsch etwa "Denke Schritt für Schritt" (Kojima et al., 2022). Bei Aufgaben mit mehreren Rechen- oder Logikschritten macht das Modell so weniger Fehler.

## Beispiel

```prompt
Roger hat 5 Tennisbälle. Er kauft 2 weitere Dosen Tennisbälle. Jede Dose enthält 3 Tennisbälle. Wie viele Tennisbälle hat er jetzt?
Denke Schritt für Schritt.
```

**Ohne Chain of Thought:**

> Die Antwort ist 11.

**Mit Chain of Thought:**

> Roger hatte 5 Bälle. 2 Dosen mit je 3 Tennisbällen sind 6 Tennisbälle. 5 + 6 = 11. Die Antwort ist 11.

## Wann es hilft

Viele aktuelle Modelle denken von sich aus nach, bevor sie antworten. Sie werden oft Thinking- oder Reasoning-Modelle genannt. Für sie ist der Satz überflüssig. Besser ist es dort, das Problem vollständig zu beschreiben und nach dem Ergebnis zu fragen, bei Bedarf mit einer kurzen Begründung. Bei Modellen ohne eingebautes Reasoning hilft der Satz weiterhin bei mehrstufigen Aufgaben wie Rechnen, Logik oder Planung. Bei einfachen Fakten- oder Stilfragen bringt er nur längere Antworten.
