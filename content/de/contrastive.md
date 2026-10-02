---
title: Contrastive Prompting
level: Mittel
tags: beispiele stil
description: Ein gutes und ein schlechtes Beispiel zeigen und sagen, was das schlechte schlecht macht.
---

Du gibst ein positives und ein negatives Beispiel. Das negative wirkt erst, wenn du sagst, warum es schlecht ist: zu allgemein, keine konkrete Aussage, nur Floskeln. Ohne Begründung muss das Modell raten, welche Eigenschaft du meinst.

## Beispiel

```prompt
Schreibe einen Produkttext für eine Kaffeemühle, etwa 60 Wörter.
Angaben zum Produkt: [Mahlwerk, Mahlgrade, Besonderheiten]

Schlechtes Beispiel (für Kopfhörer): "Diese Kopfhörer sind toll und klingen super. Ein Muss für jeden."
Warum schlecht: allgemein, keine konkrete Aussage, nichts, was nur auf dieses Produkt zutrifft.

Gutes Beispiel (für Kopfhörer): "Die Geräuschunterdrückung dämpft das Brummen im Zug so weit, dass du Podcasts bei halber Lautstärke hörst. Der Akku hält 30 Stunden, und zehn Minuten Laden reichen für weitere fünf."
Warum gut: eine konkrete Situation, überprüfbare Angaben, ein Nutzen, den man sich vorstellen kann.
```

## Wann es hilft

Wenn das Modell immer wieder in dasselbe unerwünschte Muster fällt: zu werblich, zu förmlich, zu viele Floskeln. Halte negative Beispiele kurz. Modelle übernehmen manchmal Formulierungen aus ihnen, eben weil sie im Prompt stehen. Nimm das negative Beispiel deshalb aus einem anderen Produkt oder Thema als die eigentliche Aufgabe.
