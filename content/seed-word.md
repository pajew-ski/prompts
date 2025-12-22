---
title: "Seed Word Prompting"
description: "Das erste Wort der Antwort erzwingen, um die Richtung ('Direction') festzulegen."
tags: ["steering", "kontrolle", "subtil"]
difficulty: "Anfänger"
---

# Seed Word Prompting

Ein subtiler Trick, um die Antwort in eine Richtung zu lenken (ähnlich Output Priming, aber minimalistischer).

## Beispiel

**Prompt:**
```text
Wie findest du meinen neuen Haarschnitt?
[Willst du Ehrlichkeit?] Seed: "Ehrlich..."
[Willst du Trost?] Seed: "Naja..."
[Willst du Komplimente?] Seed: "Wow..."
```

## Strategie

Das erste Wort setzt den Latent State für den ganzen restlichen Text.
