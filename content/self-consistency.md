---
title: "Self-Consistency (Selbstkonsistenz)"
description: "Generierung mehrerer Antworten und Auswahl der häufigsten Lösung, um Zuverlässigkeit zu erhöhen."
tags: ["zuverlässigkeit", "mathematik", "logik"]
difficulty: "Fortgeschritten"
---

# Self-Consistency

Bei komplexen Aufgaben (wie Mathe oder Logik) kann das Modell manchmal Fehler machen. Die Idee von Self-Consistency ist es, dieselbe Frage mehrmals an das Modell zu stellen (mit einer hohen Temperature > 0) und die Antwort zu wählen, die am häufigsten vorkommt.

## Beispiel

**Prompt:**
```text
(Hier wird Chain-of-Thought genutzt)
Q: Wenn ich 3 Äpfel habe und 2 esse, wie viele habe ich?
A: Ich habe 3. Esse 2. 3 - 2 = 1. Antwort ist 1.
... (Mehrere Pfade generieren)
```
## Strategie

Dies ist eher eine Programmier-Strategie als ein reiner Text-Prompt. Wenn du die API nutzt: Generiere 5-10 Antworten für denselben Prompt und nimm per "Mehrheitsvoting" das häufigste Ergebnis.
