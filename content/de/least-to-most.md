---
title: Least-to-Most Prompting
level: Fortgeschritten
tags: zerlegung reasoning
description: Das Problem erst in Teilfragen von leicht nach schwer zerlegen, dann der Reihe nach lösen, jede mit den vorherigen Antworten.
---

Least-to-Most Prompting (Zhou et al., 2022) arbeitet in zwei Stufen. In der ersten zerlegt das Modell das Problem in Teilfragen, geordnet von der einfachsten zur schwierigsten. In der zweiten löst es sie der Reihe nach, und jede Antwort darf auf die vorherigen zurückgreifen. Die letzte Teilfrage ist das ursprüngliche Problem.

Der Unterschied zu Chain of Thought: Die Zerlegung ist ein eigener Schritt, und jede Teilfrage ist leichter als das Ganze. In der Studie half das vor allem bei Aufgaben, die schwerer waren als die Beispiele im Prompt.

## Beispiel

```prompt
Frage: Wie viele Züge braucht man mindestens, um die Türme von Hanoi mit vier Scheiben zu lösen?

Stufe 1: Zerlege die Frage in Teilfragen, von der einfachsten zur schwierigsten. Die letzte Teilfrage ist die ursprüngliche Frage. Beantworte noch keine davon.

Stufe 2: Beantworte die Teilfragen der Reihe nach. Nutze für jede Antwort ausdrücklich die Antworten auf die vorherigen Teilfragen.
```

Erwartet: Teilfragen für eine, zwei, drei und vier Scheiben, mit 1, 3, 7 und 15 Zügen. Für n Scheiben verschiebt man die n-1 oberen zweimal und die unterste einmal.

## Wann es hilft

Bei Aufgaben, deren Teilschritte aufeinander aufbauen: rekursive Probleme, mehrstufige Rechnungen, Planungen, bei denen eine Entscheidung die nächste bestimmt. Für ein eigenes Problem tauschst du die Frage aus; die zwei Stufen bleiben. Ist schon die Zerlegung falsch, hilft die zweite Stufe nicht. Bei wichtigen Aufgaben schickst du die Stufen deshalb als zwei Nachrichten und prüfst die Teilfragen, bevor sie gelöst werden.
