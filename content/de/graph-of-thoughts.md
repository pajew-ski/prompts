---
title: Graph of Thoughts (GoT)
level: Fortgeschritten
tags: reasoning struktur kreativität
description: Teilergebnisse als Knoten eines Graphen behandeln, die sich kombinieren, bewerten und verfeinern lassen.
---

Chain of Thought ist eine Kette, Tree of Thoughts ein Baum: Jeder Gedanke hat genau einen Vorgänger. Graph of Thoughts (Besta et al., 2023) erlaubt zusätzlich, mehrere Teilergebnisse zu einem neuen zusammenzuführen und ein Ergebnis in Schleifen zu verfeinern. Die vollständige Methode läuft als Programm: Es hält einen Graphen von Teilergebnissen, ruft das Modell für einzelne Operationen auf (erzeugen, bewerten, zusammenführen, verfeinern) und entscheidet anhand der Bewertungen, wie es weitergeht.

Die Prompt-Version ahmt das in einem einzigen Prompt nach: Du benennst Knoten und lässt sie gezielt kombinieren und bewerten. Das ist eine Annäherung, kein gleichwertiger Ersatz.

## Beispiel

```prompt
Aufgabe: Entwickle die Grundidee für einen Roman.

1. Entwirf drei Hauptfiguren, jede in zwei Sätzen. Nenne sie A, B und C.
2. Entwirf drei Grundkonflikte für die Handlung, jeden in zwei Sätzen. Nenne sie D, E und F.
3. Kombiniere A mit E und C mit D zu je einer Romanidee in fünf Sätzen. Nenne sie AE und CD.
4. Bewerte AE und CD nach Originalität, Spannung und innerer Logik, jeweils von 1 bis 5, mit einem Satz Begründung.
5. Nimm die stärkere Idee, übernimm das beste Element der schwächeren und verfeinere das Ergebnis zu einem Exposé von einer halben Seite.
```

## Wann es hilft

Bei Aufgaben, deren Teile sich getrennt erarbeiten und dann zusammenführen lassen: Ideen kombinieren, mehrere Entwürfe zu einem verschmelzen, Teillösungen sortieren und vereinen. Für Aufgaben mit einem klaren, linearen Lösungsweg reicht eine Kette. Ein einzelner Prompt hat keine echte Steuerung und keinen Speicher außer dem Text selbst. Wer die Methode ernsthaft nutzen will, ruft die Schritte aus Code einzeln auf und speichert die Zwischenergebnisse.
