---
title: Gamification
level: Anfänger
tags: lernen dialog
description: Das Modell macht aus dem Lernen ein Spiel mit Punkten, Leveln und ausdrücklichen Regeln.
---

Du verpackst eine Lern- oder Übungsaufgabe in ein Spiel mit Aufgaben, Punkten und Leveln. Das Modell übernimmt die Spielleitung: Es stellt Aufgaben, bewertet deine Antworten und führt den Punktestand. Für dich ist Wiederholung so leichter durchzuhalten, und der Schwierigkeitsgrad steigt in überschaubaren Schritten.

Entscheidend sind ausdrückliche Regeln: wie viele Punkte es wofür gibt, was bei einer falschen Antwort passiert, wann das nächste Level beginnt. Ohne sie vergibt das Modell Punkte nach Gefühl, verliert den Stand aus dem Blick oder lässt Fehler durchgehen.

## Beispiel

```prompt
Wir spielen ein Lernspiel. Ich will [Thema, z. B. Python] lernen, mein Stand: [Vorkenntnisse]. Du bist die Spielleitung.

Regeln:
- Du stellst immer genau eine Aufgabe und wartest auf meine Antwort.
- Richtige Antwort: 10 XP. Teilweise richtig: 5 XP, und du erklärst, was fehlt.
- Falsche Antwort: 0 XP. Du erklärst den Fehler kurz und stellst eine ähnliche Aufgabe auf demselben Level.
- Bei 100 XP steige ich ein Level auf, und die Aufgaben werden schwieriger.
- Zeig nach jeder Bewertung den Stand: Level, XP, Anzahl der Aufgaben bisher.
- Bewerte streng, damit die Punkte etwas über meinen Fortschritt aussagen.

Stell mir die erste Aufgabe für Level 1.
```

## Wann es hilft

Für Vokabeln, Programmierübungen, Prüfungsvorbereitung und alles, was viele kleine Wiederholungen braucht. In langen Chats kann der Punktestand trotzdem verrutschen; der angezeigte Stand nach jeder Antwort macht das sichtbar. Das Modell bewertet deine Antworten selbst und kann sich irren, besonders bei Fragen ohne eindeutige Lösung. Code prüfst du am besten, indem du ihn ausführst.
