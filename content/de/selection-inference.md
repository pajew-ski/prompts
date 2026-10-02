---
title: Selection-Inference
level: Fortgeschritten
tags: reasoning dokumente
description: Teile das Schließen in zwei Schritte: erst die relevanten Aussagen auswählen, dann nur aus ihnen folgern.
---

Selection-Inference zerlegt logisches Schließen in zwei getrennte Schritte (Creswell et al., 2022). Im Auswahlschritt sucht das Modell aus dem Kontext die Aussagen heraus, die für die Frage relevant sind. Im Folgerungsschritt leitet es aus genau diesen Aussagen einen neuen Schluss ab. Bei mehrstufigen Fragen wechseln sich beide Schritte ab, bis die Antwort steht.

Im Paper übernehmen getrennte Modellaufrufe die beiden Rollen. Im Prompt bildest du die Trennung durch die Gliederung nach.

## Beispiel

```prompt
<kontext>
[Dein Text, z. B. Regeln, Vertragsklauseln oder eine Liste von Fakten]
</kontext>

Frage: [Deine Frage]

Geh in zwei Schritten vor.

Schritt 1, Auswahl: Liste die Aussagen aus dem Kontext auf, die für die Frage relevant sind, jeweils als wörtliches Zitat.

Schritt 2, Folgerung: Leite aus diesen Aussagen die Antwort ab. Nutze nur die ausgewählten Aussagen und nenne bei jedem Schluss, auf welche du dich stützt. Braucht die Frage mehrere Schlüsse nacheinander, wiederhole Auswahl und Folgerung für jeden Zwischenschritt.

Wenn die ausgewählten Aussagen für eine Antwort nicht reichen, sag das, statt die Lücke mit Vermutungen zu füllen.
```

## Wann es hilft

Bei Fragen zu einem gegebenen Text, die mehrere Schlussschritte brauchen: Regelwerke, Verträge, Rätsel mit Prämissen. Die Trennung zeigt, ob ein Fehler in der Auswahl liegt (falsche oder fehlende Aussage) oder im Schluss selbst. Sie verhindert nicht, dass das Modell eine Aussage falsch versteht, macht das aber prüfbar. Für einfache Faktenfragen ist der Aufwand zu groß.
