---
title: "Least-to-Most Prompting"
description: "Komplexe Probleme in Teilprobleme zerlegen und diese nacheinander lösen."
tags: ["zerlegung", "komplexität", "struktur"]
difficulty: "Fortgeschritten"
---

# Least-to-Most Prompting

Ähnlich wie Chain-of-Thought, aber expliziter in der Zerlegung. Du bittest das Modell zuerst, das Problem in Unterfragen zu zerlegen, und löst diese dann sequenziell.

## Beispiel

**Prompt:**
```text
Frage: Wie viele Schritte sind nötig, um einen Turm von Hanoi mit 4 Scheiben zu lösen?
Antwort: Lassen Sie uns das Problem in einfachere Probleme zerlegen:
1. Wie viele Schritte für 1 Scheibe?
2. Wie viele Schritte für 2 Scheiben?
3. Wie viele Schritte für 3 Scheiben?
4. Schlussfolgerung für 4 Scheiben.

Löse nun Schritt für Schritt.
```

## Strategie

Ideal für rekursive Probleme oder Aufgaben, die zu groß für einen einzigen Kontext-Sprung sind.
