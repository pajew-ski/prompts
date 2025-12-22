---
title: "Output Priming"
description: "Den Anfang der Antwort vorgeben, um das Format oder den Stil zu erzwingen."
tags: ["kontrolle", "formatting", "json"]
difficulty: "Mittel"
---

# Output Priming

Das Modell ist ein Autocomplete-Engine. Wenn du den ersten Stein legst, folgt der Rest.

## Beispiel

**Prompt:**
```text
Erzähle eine Gruselgeschichte.
Anfang: "Es war eine dunkle und stürmische Nacht, als der alte..."
```

**Prompt (Code):**
````text
Erstelle ein Python-Skript.

Antwort:
```python
import os
```
````

## Strategie

Unschlagbar, um JSON zu erzwingen (`Antwort: {`) oder den "Labermodus" zu überspringen.
