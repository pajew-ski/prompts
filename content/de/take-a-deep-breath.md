---
title: Take a Deep Breath
level: Anfänger
tags: psychologie optimierung
description: Eine Formulierung, die automatische Prompt-Optimierung für ein Modell fand, und was sich daraus verallgemeinern lässt.
---

Der Satz "Take a deep breath and work on this problem step-by-step" stammt aus der Arbeit zu OPRO (Yang et al., 2023, Google DeepMind). Dort erzeugte ein Modell automatisch viele Varianten einer Anweisung, die an einem Mathe-Benchmark getestet wurden. Diese Formulierung schnitt für ein bestimmtes Modell (PaLM 2) am besten ab. Für andere Modelle fand das Verfahren andere Formulierungen, und aktuelle Modelle gewinnen durch den Satz wenig.

Was sich verallgemeinern lässt, ist nicht der Satz, sondern das Verfahren: Welche Formulierung am besten wirkt, hängt vom Modell ab und zeigt sich beim Testen, nicht durch einen Satz, der überall funktioniert.

## Beispiel

```prompt
Atme tief durch und arbeite Schritt für Schritt an diesem Problem.

[Deine Aufgabe]
```

Das ist die historische Form, ins Deutsche übertragen. Im Paper lautet der Satz englisch.

## Wann es hilft

Eher als Lehrstück als als Werkzeug. Bei einem Modell ohne eingebautes Reasoning kann eine Aufforderung zum schrittweisen Vorgehen bei Rechenaufgaben helfen (siehe Chain of Thought); ob gerade diese Formulierung besser ist als eine andere, zeigt nur ein Test. Wenn du einen Prompt regelmäßig einsetzt, lohnt sich der Weg aus dem Paper im Kleinen: Schreib einige Varianten der Anweisung, prüf sie an denselben Beispielen mit bekannter Lösung und behalte die beste.
