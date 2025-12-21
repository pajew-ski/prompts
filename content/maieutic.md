---
title: "Maieutic Prompting"
description: "Das Modell zwingen, eine Erklärung zu generieren und diese dann auf Konsistenz zu prüfen (Hebammenkunst)."
tags: ["wahrheit", "konsistenz", "philosophie"]
difficulty: "Fortgeschritten"
---

# Maieutic Prompting

Das Ziel ist es, eine konsistente Wahrheit zu finden, indem das Modell Erklärungen liefert und deren logische Konsequenzen überprüft.

## Beispiel

**Prompt:**
```text
Q: Ist X wahr oder falsch?
A: Generiere eine Erklärung für "X ist wahr".
A: Generiere eine Erklärung für "X ist falsch".
A: Wenn "X ist wahr", was müsste sonst noch wahr sein? (Inkonsistenzen prüfen)
A: Basierend auf der Konsistenz, was ist die logischste Antwort?
```
## Strategie

Sehr gut für Faktenchecks und komplexe Weltwissens-Fragen.
