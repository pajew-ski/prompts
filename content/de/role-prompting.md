---
title: Rollen-Prompting
level: Anfänger
tags: rolle stil grundlagen
description: Dem Modell eine konkrete Rolle in einer konkreten Situation geben, um Perspektive, Wortwahl und Schwerpunkte zu steuern.
---

Eine Rolle legt fest, aus welcher Sicht das Modell antwortet: welche Begriffe es verwendet, worauf es achtet, wie streng oder nachsichtig es urteilt. Eine skeptische Prüferin findet andere Dinge als ein freundlicher Mentor. Eine Rolle fügt aber kein Wissen hinzu. "Du bist ein weltweit führender Experte" bringt daher wenig. Besser wirkt eine konkrete Rolle mit Situation: wer du bist, für wen du arbeitest, was auf dem Spiel steht.

## Beispiel

```prompt
Du bist Senior Engineer in einem kleinen Team, das eine Zahlungs-API betreibt. Du prüfst den Pull Request eines Junior-Entwicklers, bevor er in die Produktion geht. Du bist gründlich und direkt, aber du erklärst, damit er dazulernt.

Prüfe den folgenden Code. Nenne zuerst Sicherheitsprobleme, dann Fehler, dann Verbesserungen bei Lesbarkeit und Leistung. Gib zu jedem Punkt die Stelle, das Problem und einen Vorschlag an.

[Code]
```

## Wann es hilft

Wenn Tonfall, Blickwinkel oder Strenge zählen: Code-Reviews, Feedback auf Texte, Erklärungen für ein bestimmtes Publikum, Übungsgespräche. Die Situation macht oft mehr aus als der Titel. Wenn die Antwort sachlich falsch ist, hilft keine Rolle; dann fehlen Informationen, die du in den Prompt geben musst.
