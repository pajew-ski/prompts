---
title: Tree of Thoughts (ToT)
level: Fortgeschritten
tags: reasoning planung
description: Verfolge mehrere Lösungswege, bewerte Zwischenschritte und gib schwache Pfade auf, statt einem einzigen Gedankengang zu folgen.
---

Tree of Thoughts (Yao et al., 2023) erweitert Chain of Thought von einer Kette zu einem Baum. An jedem Schritt erzeugt das Modell mehrere mögliche nächste Gedanken, bewertet sie und verfolgt die vielversprechenden weiter. Führt ein Pfad in eine Sackgasse, geht die Suche zurück und probiert einen anderen. In der Originalmethode steuert ein Programm diese Suche mit vielen einzelnen Modellaufrufen zum Erzeugen, Bewerten und Zurückgehen.

Der folgende Prompt ist die bekannte Annäherung in einem einzigen Prompt von Dave Hulbert (2023): Drei gedachte Experten entwickeln die Lösung Schritt für Schritt und scheiden aus, wenn ihr Weg nicht trägt. Er ahmt die Suche nach, ersetzt sie aber nicht.

## Beispiel

```prompt
Stell dir vor, drei verschiedene Experten beantworten diese Frage. Jeder Experte schreibt einen Schritt seines Denkens auf und teilt ihn mit der Gruppe. Dann gehen alle zum nächsten Schritt über, und so weiter. Wenn ein Experte an irgendeiner Stelle merkt, dass er falsch liegt, scheidet er aus. Gib am Ende die Antwort, auf die sich die verbliebenen Experten einigen.

Die Frage lautet: [Deine Frage]
```

## Wann es hilft

Bei Aufgaben mit mehreren möglichen Ansätzen, bei denen ein früher Fehler den ganzen Weg entwertet: Planungsprobleme, Rätsel, Entscheidungen mit Abwägungen. Die Version in einem Prompt ist eine Annäherung. Alle drei Experten sind dasselbe Modell im selben Text, Bewertung und Zurückgehen finden nur angedeutet statt. Wenn du die volle Methode brauchst, bau sie als Programm mit getrennten Aufrufen zum Erzeugen und Bewerten von Zwischenschritten.
