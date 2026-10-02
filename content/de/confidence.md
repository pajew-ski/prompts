---
title: Confidence Score
level: Mittel
tags: fakten halluzination prüfung
description: Zu jeder Behauptung eine Sicherheitsstufe angeben lassen, um zu sehen, was zuerst geprüft werden muss.
---

Das Modell schätzt zu jeder Aussage ein, wie sicher sie ist. Wichtig ist, was man davon erwarten kann: Eine Sicherheit, die ein Modell in Worten oder Prozent angibt, ist schlecht kalibriert. "90 %" heißt nicht, dass neun von zehn solcher Aussagen stimmen. Brauchbar ist die Angabe als Rangfolge. Sie zeigt dir, was du zuerst prüfen solltest.

## Beispiel

```prompt
Beantworte die folgende Frage: [Deine Frage]

Zerlege deine Antwort danach in einzelne Behauptungen. Gib für jede an:
- Sicherheit: hoch, mittel oder niedrig.
- Bei mittel oder niedrig: was man prüfen müsste, um die Behauptung zu bestätigen, zum Beispiel welche Quelle, welche Zahl oder welches Datum.

Liste die Behauptungen mit niedriger Sicherheit zuerst.
```

## Wann es hilft

Bei Recherchen, Zusammenfassungen und Faktenantworten, die du weiterverwenden willst. Die Liste sagt dir, wo du nachprüfen musst, und der Prüfhinweis macht das schneller. Drei Stufen statt Prozentwerten vermeiden eine Genauigkeit, die es nicht gibt. Grenzen: Auch Aussagen mit hoher Sicherheit können falsch sein, gerade erfundene Details, die plausibel klingen. Die Stufen ersetzen die Prüfung nicht, sie ordnen sie.
