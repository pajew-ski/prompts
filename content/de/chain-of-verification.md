---
title: Chain of Verification (CoVe)
level: Fortgeschritten
tags: fakten halluzination prüfung
description: Entwurf, Prüffragen, unabhängige Antworten, Korrektur: vier Schritte gegen erfundene Fakten.
---

Chain of Verification (Dhuliawala et al., 2023) prüft eine Antwort in vier Schritten: einen Entwurf schreiben, Prüffragen zu den Fakten darin formulieren, diese Fragen beantworten, die Antwort überarbeiten. Entscheidend ist der dritte Schritt. Die Prüffragen müssen unabhängig vom Entwurf beantwortet werden. Sieht das Modell beim Beantworten den Entwurf, wiederholt es oft seinen eigenen Fehler.

## Beispiel

```prompt
Frage: [Deine Frage, z. B. "Nenne fünf Politiker, die in Hamburg geboren sind."]

Arbeite in vier Schritten:
1. Entwurf: Beantworte die Frage.
2. Prüffragen: Formuliere für jede Tatsachenbehauptung im Entwurf eine einzelne, kurze Prüffrage, z. B. "Wo wurde [Person] geboren?"
3. Antworten: Beantworte jede Prüffrage für sich, so als ob du den Entwurf nicht kennen würdest. Stütze dich dabei nicht auf den Entwurf.
4. Endgültige Antwort: Streiche oder korrigiere alles, was den Antworten aus Schritt 3 widerspricht, und nenne, was du geändert hast.
```

## Wann es hilft

Bei Listen und Faktenfragen, in denen einzelne Einträge erfunden sein können: Personen, Daten, Zitate, Quellen. In einem einzigen Prompt ist die Methode nur eine Annäherung, denn der Entwurf steht weiter im Kontext. Zuverlässiger ist es, Schritt 1 und 2 in einem Chat zu erledigen, die Prüffragen ohne Entwurf in einem neuen Chat beantworten zu lassen und die Antworten dann für Schritt 4 zurückzugeben. Gegen Wissen, das dem Modell schlicht fehlt, hilft die Prüfung nicht. Dafür braucht es eine Suche oder Quellen.
