---
title: "Tree of Thoughts (ToT)"
description: "Erkundung mehrerer Lösungswege parallel, um komplexe Probleme strategisch zu lösen."
tags: ["problem-solving", "planung", "komplex"]
difficulty: "Fortgeschritten"
---

# Tree of Thoughts (ToT)

ToT erweitert Chain-of-Thought, indem es dem Modell erlaubt, mehrere mögliche Schritte zu "denken", diese zu bewerten und schlechte Pfade zu verwerfen (ähnlich wie ein Schachspieler, der Züge vorausplant).

## Beispiel

**Prompt:**
```text
Stell dir drei verschiedene Experten vor, die diese Frage beantworten.
Jeder Experte soll einen Schritt der Antwort formulieren und den Schritt des anderen überprüfen.
Wenn ein Fehler gefunden wird, korrigiert ihn.
Verdichtet am Ende die Erkenntnisse zu einer finalen Antwort.
```
## Strategie

Nutze dies für Aufgaben, die Planung oder Kreativität erfordern (z.B. "Schreibe eine Kurzgeschichte" oder "Entwickle einen Businessplan"), wo lineare Gedanken oft in Sackgassen führen.
