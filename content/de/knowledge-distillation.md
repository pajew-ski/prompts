---
title: Knowledge Distillation
level: Fortgeschritten
tags: beispiele kosten optimierung
description: Ein großes Modell erzeugt Beispiele oder Trainingsdaten, mit denen ein kleines, günstiges Modell dieselbe Aufgabe löst.
---

Der Begriff stammt aus dem maschinellen Lernen (Hinton et al., 2015): Ein kleines Modell wird auf den Ausgaben eines großen trainiert und übernimmt so dessen Verhalten für eine Aufgabe. Hier ist die Version auf Prompt-Ebene gemeint: Ein großes Modell erzeugt Beispiele für einen Few-Shot-Prompt oder einen Datensatz zum Fine-Tuning, und ein kleines, lokales Modell erledigt damit die laufende Arbeit.

Das lohnt sich bei Aufgaben, die sehr oft laufen: Das große Modell bezahlst du einmal, das kleine bei jeder Anfrage.

## Beispiel

```prompt
Ich baue einen Klassifikator für Kundenanfragen mit einem kleinen, lokalen Modell. Die Kategorien sind: [Kategorie 1], [Kategorie 2], [Kategorie 3], Sonstiges.
Kontext zu unseren Kunden: [Branche, typische Anliegen]

Erstelle 40 Beispiele, jedes als zwei Zeilen im Format "Anfrage: ..." und "Kategorie: ...".

Anforderungen:
- Die Anfragen klingen wie echte Kundenmails: unterschiedlich lang, mal knapp, mal ausschweifend, mit gelegentlichen Tippfehlern und verschiedener Tonlage.
- Verteile die Beispiele ungefähr gleichmäßig auf die Kategorien.
- Mindestens zehn Beispiele sind Grenzfälle: Anfragen, die zwei Kategorien berühren oder leicht falsch eingeordnet werden. Schreib zu jedem Grenzfall einen Satz, warum die gewählte Kategorie stimmt.
```

## Wann es hilft

Wenn eine Aufgabe tausendfach laufen soll und ein großes Modell dafür zu teuer, zu langsam oder aus Datenschutzgründen nicht möglich ist. Prüfe eine Stichprobe der erzeugten Beispiele von Hand, bevor du sie verwendest: Fehler des großen Modells übernimmt das kleine. Gleichförmige Beispiele machen das kleine Modell zudem anfällig für alles, was im Datensatz nicht vorkommt. Teste es danach mit echten Anfragen, nicht mit erzeugten.
