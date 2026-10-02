---
title: Recitation-Augmented Generation
level: Mittel
tags: fakten reasoning
description: Das Modell sagt erst die relevanten Fakten aus seinem Wissen auf und beantwortet dann die Frage auf dieser Grundlage.
---

Bei Recitation (Sun et al., 2022) ruft das Modell zuerst das Wissen ab, das für die Frage nötig ist, und schreibt es ausdrücklich hin. Erst danach beantwortet es die Frage, gestützt auf diesen Text. Das hilft vor allem bei Fragen, die mehrere Fakten verbinden: Jeder Fakt steht einzeln da und lässt sich prüfen, statt dass das Modell die Antwort in einem Schritt rät.

## Beispiel

```prompt
Frage: Welches Team gewann den Super Bowl in dem Jahr, in dem das iPhone vorgestellt wurde?

Gehe so vor:
1. Schreibe auf, was du über die Vorstellung des iPhones weißt, mit Datum.
2. Schreibe auf, welcher Super Bowl in diesem Jahr gespielt wurde und wer ihn gewann.
3. Beantworte die Frage nur auf Grundlage dieser Angaben und sag, wenn eine Angabe unsicher ist.
```

Erwartet: Das iPhone wurde im Januar 2007 vorgestellt. Den Super Bowl XLI im Februar 2007 gewannen die Indianapolis Colts.

## Wann es hilft

Bei Wissensfragen mit mehreren Schritten, wenn keine Quellen zur Hand sind. Die aufgesagten Fakten kannst du gezielt nachprüfen. Die Methode macht das Wissen des Modells nicht zuverlässiger: Ein falsch erinnerter Fakt steht dann eben ausgeschrieben da. Wo es auf Richtigkeit ankommt, gib Quellen in den Prompt oder nutze eine Suche.
