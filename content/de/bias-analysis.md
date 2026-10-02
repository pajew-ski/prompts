---
title: Bias und Fehlschlüsse analysieren
level: Fortgeschritten
tags: analyse bias
description: Einen Text auf logische Fehlschlüsse und kognitive Verzerrungen prüfen, mit Zitat, Begründung und Belegstärke.
---

Das Modell liest einen Text als Prüfer. Es sucht logische Fehlschlüsse, etwa Strohmann, Ad hominem oder falsche Dichotomie, und kognitive Verzerrungen, etwa Bestätigungsfehler oder Ankereffekt, und belegt jeden Fund mit einem Zitat. Zwei Vorgaben machen das Ergebnis brauchbar: Das Modell sagt, wie gut ein Befund belegt ist, und es weist Stellen aus, die nur nach einem Fehlschluss aussehen. Ohne diese Vorgaben findet es in fast jedem Text etwas.

## Beispiel

```prompt
Prüfe den folgenden Text auf logische Fehlschlüsse und kognitive Verzerrungen.

Gib das Ergebnis als Tabelle mit diesen Spalten aus:
| Zitat | Fehlschluss oder Verzerrung | Warum er hier vorliegt | Belegstärke (stark, mittel, schwach) |

Regeln:
- Zitiere wörtlich, damit ich jede Stelle im Text wiederfinde.
- Nenne nur Funde, die du am Text begründen kannst. Ein Text ohne Fehlschlüsse ist ein mögliches Ergebnis.
- Liste unter der Tabelle die Stellen auf, die nur wie ein Fehlschluss aussehen, aber keiner sind, jeweils mit einem Satz Begründung. Ein Verweis auf eine Autorität ist zum Beispiel kein Fehlschluss, wenn sie für das Thema tatsächlich zuständig ist.

Text:
"""
[Text einfügen]
"""
```

## Wann es hilft

Bei Kommentaren, Pitches, Gutachten oder eigenen Entwürfen, bevor sie rausgehen. Die Belegstärke trennt klare Fälle von Interpretationen. Grenzen: Ob eine Verzerrung vorliegt, hängt oft von Absicht und Kontext ab, die nicht im Text stehen. Behandle die Tabelle als Liste von Hinweisen, die du selbst prüfst, nicht als Urteil.
