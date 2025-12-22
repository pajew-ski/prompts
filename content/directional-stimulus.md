---
title: "Directional Stimulus Prompting"
description: "Dem Modell spezifische Hinweise oder Keywords geben, um die Generierung in eine bestimmte Richtung zu lenken."
tags: ["steuerung", "keywords", "zusammenfassung"]
difficulty: "Mittel"
---

# Directional Stimulus Prompting

Anstatt das Modell nur mit "Fasse zusammen" loszuschicken, gibst du ihm "Richtungs-Stimuli" (z.B. Keywords oder Aspekte), die in der Ausgabe enthalten sein müssen. Das verbessert die Relevanz der Antwort drastisch.

## Beispiel

**Prompt:**
```text
Artikel: [Langer Text über KI-Sicherheit]
Hinweise: Ausrichtungsproblem, Black Box, interpretierbar.

Aufgabe: Fasse den Artikel basierend auf den obigen Hinweisen in 2 Sätzen zusammen.
```

## Strategie

Nutze dies, wenn Summaries zu generisch sind oder wichtige Details fehlen. Die "Hinweise" fungieren als Anker für die Aufmerksamkeit des Modells.
