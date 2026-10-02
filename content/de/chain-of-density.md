---
title: Chain of Density
level: Fortgeschritten
tags: zusammenfassung kürze iteration
description: Eine Zusammenfassung in fünf Runden bei gleicher Länge schrittweise mit fehlenden Kerninformationen verdichten.
---

Chain of Density (Adams et al., 2023) erzeugt eine Folge von Zusammenfassungen gleicher Länge, die immer dichter werden. Die erste ist bewusst allgemein gehalten. In jeder der vier folgenden Runden sucht das Modell ein bis drei wichtige Entitäten, also Personen, Orte, Zahlen oder Ereignisse, die im Artikel stehen, aber in der Zusammenfassung fehlen, und arbeitet sie ein, ohne dass der Text länger wird. Platz entsteht durch Streichen von Füllwörtern und Zusammenziehen von Sätzen.

## Beispiel

```prompt
Artikel:
"""
[Text einfügen]
"""

Schreib fünf immer dichtere Zusammenfassungen dieses Artikels, jede etwa [80] Wörter lang.

Runde 1: Eine Zusammenfassung, die den Artikel allgemein beschreibt und nur wenige konkrete Angaben enthält.

Runden 2 bis 5:
1. Nenne ein bis drei wichtige Entitäten aus dem Artikel, die in der vorigen Zusammenfassung fehlen.
2. Schreib die Zusammenfassung neu: Alles aus der vorigen bleibt enthalten, die neuen Entitäten kommen hinzu, die Länge bleibt gleich. Schaff Platz, indem du Füllwörter streichst und Sätze zusammenziehst.

Gib für jede Runde die ergänzten Entitäten und die neue Zusammenfassung aus.
```

## Wann es hilft

Für Briefings, Teaser und Zusammenfassungen mit festem Platz, in denen jedes Wort Information tragen soll. Du musst nicht die letzte Runde nehmen: Spätere Runden werden oft schwer lesbar, und in der Studie bevorzugten Leser die mittleren Runden. Lies die Fassungen durch und wähle die, die zu deinem Publikum passt.
