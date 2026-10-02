---
title: Clarification (Rückfragen)
level: Anfänger
tags: rückfragen dialog
description: Das Modell stellt vor der Arbeit alle Rückfragen auf einmal, jede mit einer vorgeschlagenen Standardantwort.
---

Bevor das Modell anfängt, stellt es alle offenen Fragen in einer nummerierten Liste, höchstens fünf, die wichtigste zuerst. Zu jeder Frage schlägt es eine Standardantwort vor. Du korrigierst einzelne Punkte und bestätigst den Rest mit "ok". Erst danach schreibt das Modell.

Zur Abgrenzung: Der Ambiguity Check fragt nur bei Bedarf und arbeitet sonst gleich los. Flipped Interaction führt ein Interview, Frage für Frage. Clarification ist eine einzige Runde.

## Beispiel

```prompt
Schreibe mir ein Angebot für die Erstellung einer Website für [Kunde, z. B. eine Physiotherapiepraxis].

Bevor du schreibst: Stell mir die Fragen, deren Antworten das Angebot am stärksten verändern. Höchstens fünf, als nummerierte Liste, die wichtigste zuerst. Schlag zu jeder Frage eine Standardantwort vor, die du verwenden würdest, wenn ich nichts anderes sage. Ich antworte dann mit Korrekturen oder mit "ok". Warte mit dem Angebot, bis ich geantwortet habe.
```

## Wann es hilft

Bei Aufgaben, in die viel Wissen einfließt, das nur du hast: Angebote, Konzepte, Pläne. Die Standardantworten machen das Antworten schnell und zeigen dir, wovon das Modell ausgehen würde. Die Grenze von fünf Fragen hält die Liste auf das Wichtige beschränkt, ohne sie wird sie oft lang und enthält Nebensächliches. Bei kleinen Aufgaben lohnt sich die zusätzliche Runde nicht.
