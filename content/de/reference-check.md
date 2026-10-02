---
title: Reference Check (Citations)
level: Mittel
tags: dokumente fakten
description: Jede Aussage mit einem wörtlichen Zitat aus nummerierten Quellen belegen lassen und Unbelegtes kennzeichnen.
---

Bittest du um Belege wie "Seite 2, Zeile 10", erfindet das Modell sie, weil es keine Seiten- oder Zeilennummern sieht. Nummeriere deshalb die Abschnitte oder Dokumente selbst, bevor du sie einfügst. Dann kann das Modell zu jeder Aussage die Nummer und das wörtliche Zitat nennen, auf das sie sich stützt. Ein wörtliches Zitat kannst du mit der Suchfunktion in Sekunden prüfen. Wo nichts im Text eine Aussage trägt, soll das Modell das sagen, statt eine Quelle zu erfinden.

## Beispiel

```prompt
Beantworte die Frage nur auf Grundlage der nummerierten Abschnitte unten.

Belege jede Aussage direkt dahinter mit der Nummer des Abschnitts und einem kurzen wörtlichen Zitat, z. B. [3: "Die Frist beträgt 14 Tage"].
Wenn eine Aussage, die zur Antwort gehört, durch keinen Abschnitt gestützt wird, schreib "nicht belegt" dahinter, statt sie wegzulassen oder zu ergänzen.

Frage: [Deine Frage]

[1] [Abschnitt]
[2] [Abschnitt]
[3] [Abschnitt]
```

## Wann es hilft

Bei Fragen zu Verträgen, Richtlinien, Handbüchern und Berichten und in RAG-Systemen, wo Antworten aus abgerufenen Textstücken entstehen. Prüfe Stichproben der Zitate gegen den Originaltext; auch wörtliche Zitate werden gelegentlich leicht verändert. Die Markierung "nicht belegt" zeigt dir, wo die Antwort über die Quellen hinausgeht. Manche Schnittstellen bieten eine eingebaute Zitierfunktion für Dokumente, die das zuverlässiger erledigt.
