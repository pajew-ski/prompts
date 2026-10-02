---
title: Emotional Prompting
level: Anfänger
tags: psychologie kontext
description: Statt Druck aufzubauen, erklärst du, warum die Aufgabe zählt und wofür das Ergebnis gebraucht wird.
---

EmotionPrompt (Li et al., 2023) hängte Sätze wie "Das ist sehr wichtig für meine Karriere" an Prompts an und maß damit bessere Ergebnisse, auf den Modellen jener Zeit. Auf aktuellen Modellen bringen Druck und Drohungen ("Sonst verliere ich meinen Job") wenig und können Antworten verschlechtern, etwa durch übervorsichtige oder ausweichende Formulierungen.

Was hilft, ist die ehrliche Variante: Du sagst, warum die Aufgabe zählt und wofür das Ergebnis verwendet wird. Das ist kein emotionaler Reiz, sondern Kontext, und Kontext verändert, was eine gute Antwort ist. Code für eine Demo braucht eine andere Sorgfalt als Code, der Passwörter von Kunden verarbeitet.

## Beispiel

```prompt
Schreib die Login-Funktion für unsere Web-App in [Sprache und Framework].

Warum das wichtig ist: Die Funktion geht nächste Woche in Produktion und verarbeitet die Passwörter von etwa [Anzahl] Kunden. Ein Fehler hier ist ein Sicherheitsproblem, nicht nur ein Bug. Ich prüfe den Code selbst, bevor er live geht.

Achte deshalb besonders auf sicheres Hashing der Passwörter, Schutz gegen Brute-Force-Versuche und Fehlermeldungen, die nicht verraten, ob ein Benutzername existiert. Wenn du an einer Stelle unsicher bist, schreib das als Kommentar in den Code, statt es zu überspielen.
```

## Wann es hilft

Immer, wenn das Modell aus der Aufgabe allein nicht erkennen kann, wie viel Sorgfalt nötig ist oder worauf es ankommt. Ein Satz zum Zweck ersetzt oft mehrere Einzelregeln. Druck, Drohungen und Großbuchstaben kannst du weglassen: Sie sagen dem Modell nichts darüber, was eine gute Antwort ausmacht.
