---
title: Step-Back Prompting
level: Fortgeschritten
tags: reasoning erklären
description: Bestimme erst das allgemeine Prinzip hinter einer Frage und beantworte dann die konkrete Frage damit.
---

Bei Step-Back Prompting (Zheng et al., 2023, Google DeepMind) tritt das Modell vor der eigentlichen Antwort einen Schritt zurück. Es fragt, welches allgemeine Prinzip oder Konzept hinter der Frage steht, und erklärt es. Erst dann beantwortet es die konkrete Frage auf dieser Grundlage. Die Abstraktion lenkt die Antwort auf die tragenden Zusammenhänge statt auf naheliegende, aber oberflächliche Details.

## Beispiel

```prompt
Frage: Warum dehnt sich Wasser beim Gefrieren aus, obwohl sich die meisten Stoffe beim Erstarren zusammenziehen?

Schritt 1: Tritt einen Schritt zurück. Welche allgemeinen Prinzipien bestimmen, wie dicht ein Stoff im festen und im flüssigen Zustand ist? Erkläre sie kurz, ohne schon auf Wasser einzugehen.

Schritt 2: Wende diese Prinzipien auf Wasser an und beantworte damit die ursprüngliche Frage.
```

Die erwartete Antwort: Im Eis ordnen Wasserstoffbrückenbindungen die Moleküle zu einem offenen Gitter mit mehr Abstand als in der Flüssigkeit, deshalb ist Eis weniger dicht als Wasser.

## Wann es hilft

Bei Fragen aus Naturwissenschaft, Technik oder Recht, deren Antwort aus einem allgemeinen Prinzip folgt, und bei Wissensfragen mit vielen Einzelheiten. Die Vorlage passt für jede solche Frage: Ersetze die Frage und lass die beiden Schritte stehen. Bei einfachen Fakten bringt der Umweg nichts. Ein Risiko: Wählt das Modell im ersten Schritt das falsche Prinzip, baut die Antwort folgerichtig darauf auf. Lies deshalb den ersten Schritt mit, bevor du dem Ergebnis traust.
