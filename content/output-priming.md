---
title: Output Priming
level: Mittel
tags: kontrolle formatting json
description: Den Anfang der Antwort vorgeben, um das Format oder den Stil zu erzwingen.
---

Das Modell ist ein Autocomplete-Engine. Wenn du den ersten Stein legst, folgt der Rest.

## Beispiel

```prompt
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
