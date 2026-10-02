---
title: Reverse Prompting
level: Anfänger
tags: meta lernen
description: Einen fertigen Text vorlegen und das Modell den Prompt rekonstruieren lassen, der ihn erzeugen würde.
---

Du hast einen Text, dessen Stil und Aufbau du wiederholen willst. Statt die Merkmale selbst zu beschreiben, gibst du dem Modell den Text und lässt es einen Prompt schreiben, der Texte dieser Art erzeugt. Dabei lernst du nebenbei, welche Merkmale den Text ausmachen: Tonfall, Satzlänge, Aufbau, Zielgruppe.

Der rekonstruierte Prompt ist eine Hypothese. Ob er taugt, zeigt sich erst, wenn du ihn auf ein neues Thema anwendest und das Ergebnis mit dem Original vergleichst.

## Beispiel

```prompt
Hier ist ein Text, dessen Stil und Struktur ich für andere Themen wiederverwenden will:

"[Text]"

1. Beschreibe in Stichpunkten, was diesen Text ausmacht: Zielgruppe, Tonfall, Satzlänge, Aufbau, typische Mittel.
2. Schreibe einen Prompt mit Platzhalter für das Thema, der Texte in genau diesem Stil und dieser Struktur erzeugt. Übernimm keine Inhalte aus dem Original.
3. Wende deinen Prompt zur Probe auf das Thema [neues Thema] an.
```

## Wann es hilft

Um einen gelungenen Text als Vorlage für eine Serie zu nutzen, etwa Newsletter, Produkttexte oder Stellenanzeigen, und um Prompting an Beispielen zu lernen. Vergleiche die Probe mit dem Original: Wo sie abweicht, ergänze den Prompt um das fehlende Merkmal. Teste ihn danach an zwei oder drei weiteren Themen, bevor du ihn regelmäßig nutzt. Den tatsächlich verwendeten Prompt eines fremden Textes findest du so nicht heraus, nur einen, der Ähnliches erzeugt.
