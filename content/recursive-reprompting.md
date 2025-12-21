---
title: "Recursive Reprompting"
description: "Die Ausgabe des Modells automatisch wieder als Eingabe nutzen, bis ein Kriterium erfüllt ist."
tags: ["loop", "agentic", "automatisierung"]
difficulty: "Fortgeschritten"
---

# Recursive Reprompting

Statt linear (Input -> Output), bauen wir eine Schleife.

## Beispiel

**Prompt:**
```text
Schreibe eine Geschichte.
Gib sie aus.
Nimm die Geschichte und schreibe: "Kritisiere diese Geschichte".
Nimm die Kritik und die Geschichte und schreibe: "Verbessere die Geschichte basierend auf der Kritik".
(Wiederhole 3x)
```
## Strategie

Grundlage für Agenten. Manuell simuliert durch Copy-Paste.
