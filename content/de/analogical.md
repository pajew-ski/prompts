---
title: Analogical Prompting
level: Fortgeschritten
tags: reasoning beispiele kreativität
description: Das Modell erzeugt zuerst eigene verwandte Beispiele, löst sie und löst dann die eigentliche Aufgabe.
---

Analogical Prompting (Yasunaga et al., 2023) lässt das Modell seine Beispiele selbst erzeugen. Statt dir Few-Shot-Beispiele auszudenken, bittest du es, sich zuerst an mehrere relevante, voneinander verschiedene Probleme zu erinnern, sie kurz zu beschreiben und zu lösen. Erst danach löst es die eigentliche Aufgabe. Die selbst erzeugten Beispiele sind auf die Aufgabe zugeschnitten, und du musst keine schreiben.

## Beispiel

```prompt
Löse das folgende Problem.

Problem: [Deine Aufgabe, z. B. eine Mathematik-, Logik- oder Programmieraufgabe]

Geh so vor:
1. Erinnere dich an drei relevante Probleme, die sich voneinander unterscheiden. Beschreibe jedes kurz und löse es.
2. Halte fest, welche Idee oder Methode aus diesen Beispielen sich auf das Problem übertragen lässt.
3. Löse dann das eigentliche Problem Schritt für Schritt.
```

Eine kürzere Variante für die Ideenfindung nimmt die Analogie aus einem fremden Gebiet, etwa: "Wie bleibt ein Ökosystem stabil, und was davon lässt sich auf die Fluktuation in unserem Team übertragen?" Das liefert neue Blickwinkel, aber keine geprüften Lösungen.

## Wann es hilft

Wenn du keine passenden Beispiele zur Hand hast, die Aufgabe aber zu einem bekannten Problemtyp gehört: Mathematik, Algorithmen, Planungsaufgaben. Das Wort "unterschiedlich" ist wichtig, sonst erzeugt das Modell dreimal fast dasselbe Beispiel. Grenzen: Die erinnerten Beispiele können selbst falsch gelöst sein, und bei sehr speziellen Aufgaben findet das Modell keine guten Analogien. Dann sind echte, von dir geprüfte Beispiele besser.
