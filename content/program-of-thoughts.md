---
title: "Program-of-Thoughts (PoT)"
description: "Das Modell schreibt Code (z.B. Python), um Rechenaufgaben oder Logik zu lösen, statt Text zu generieren."
tags: ["code", "mathematik", "präzision"]
difficulty: "Fortgeschritten"
---

# Program-of-Thoughts (PoT)

LLMs sind oft schlecht im Kopfrechnen, aber gut im Coden. PoT lagert die Berechnung an einen (hypothetischen oder echten) Code-Interpreter aus.

## Beispiel

**Prompt:**
```text
Frage: Berechne die Wurzel aus der Summe der ersten 50 Primzahlen.
```>
> Schreibe ein Python-Programm, das dies berechnet. Führe den Code gedanklich aus und gib das Ergebnis.

## Strategie

Wenn du Zugang zu einem Code-Interpreter hast (wie in ChatGPT oder via LangChain), ist das der Goldstandard für Mathe-Aufgaben.
