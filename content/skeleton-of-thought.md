---
title: "Skeleton-of-Thought"
description: "Zuerst ein Skelett (Gliederung) erstellen, dann die Punkte parallel oder sequenziell ausarbeiten."
tags: ["geschwindigkeit", "struktur", "lange-texte"]
difficulty: "Mittel"
---

# Skeleton-of-Thought (SoT)

Diese Technik beschleunigt die Generierung und verbessert die Struktur. Anstatt den Text linear zu schreiben, erstellt das Modell erst ein "Skelett" und füllt dann "Fleisch an die Knochen".

## Beispiel

**Prompt:**
```text
Aufgabe: Schreibe einen Guide über gesunde Ernährung.
1. Erstelle eine sehr knappe Gliederung (Skelett) mit 3-5 Hauptpunkten.
2. Schreibe für jeden Punkt des Skeletts einen kurzen Absatz. Halte dich strikt an das Skelett.
```

## Strategie

Verhindert, dass das Modell am Anfang zu viel schreibt und am Ende den Faden verliert ("Loss of Focus").
