---
title: "ReAct (Reasoning + Acting)"
description: "Kombination aus logischem Denken und Handlungen (z.B. API-Aufrufe), um Fakten zu prüfen."
tags: ["agenten", "tools", "fakten"]
difficulty: "Fortgeschritten"
---

# ReAct

ReAct ist das fundamentale Muster für KI-Agenten. Es fordert das Modell auf, abwechselnd zu denken ("Thought"), eine Handlung auszuführen ("Action", z.B. eine Suche), das Ergebnis zu beobachten ("Observation") und dann weiterzudenken.

## Beispiel

**Prompt:**
```text
Frage: Wer ist der aktuelle Kanzler von Deutschland und wie alt ist er?
Thought: Ich muss zuerst herausfinden, wer der Kanzler ist.
Action: Search[Kanzler Deutschland aktuell]
Observation: Olaf Scholz ist Bundeskanzler.
Thought: Jetzt muss ich sein Alter herausfinden.
Action: Search[Olaf Scholz Alter]
Observation: Er ist 66 Jahre alt (Stand 2024).
Thought: Ich habe alle Informationen.
Answer: Der Kanzler ist Olaf Scholz und er ist 66 Jahre alt.
```

## Strategie

Nutze dieses Muster, wenn das Modell Zugriff auf externe Tools hat oder wenn du einen manuellen Rechercheprozess simulieren willst.
