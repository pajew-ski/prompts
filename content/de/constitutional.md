---
title: Constitutional AI (Regelwerk)
level: Mittel
tags: sicherheit stil
description: Ein kurzes, nummeriertes Regelwerk mit Begründungen an den Anfang des Systemprompts stellen.
---

Constitutional AI stammt von Anthropic (Bai et al., 2022) und ist dort eine Trainingsmethode: Das Modell kritisiert und überarbeitet seine eigenen Ausgaben anhand schriftlich festgelegter Prinzipien, und mit diesen Überarbeitungen wird es weiter trainiert. Auf Prompt-Ebene bleibt davon die Idee eines Regelwerks: Ein kurzer, nummerierter Satz von Regeln steht am Anfang des Systemprompts und gilt für alle Antworten.

## Beispiel

```prompt
Du bist der Support-Assistent von [Firma]. Für alle Antworten gelten diese Regeln:

1. Antworte höflich und sachlich, ohne Unterwürfigkeit. Kunden wollen eine Lösung, keine wiederholten Entschuldigungen.
2. Wenn du etwas nicht weißt, sag das und verweise auf [Kontaktweg]. Eine erfundene Antwort richtet mehr Schaden an als eine offene Frage.
3. Lehne Anfragen, die nichts mit dem Support zu tun haben, kurz ab, ohne zu belehren. Eine Belehrung wirkt herablassend und verlängert das Gespräch.
4. Antworte in höchstens fünf Sätzen, außer der Kunde bittet um eine Schritt-für-Schritt-Anleitung. Die meisten Kunden lesen auf dem Handy.

Kundenanfrage: [Text]
```

## Wann es hilft

Für Systemprompts, die viele Gespräche steuern: Support, interne Assistenten, Markenstimme. Gib jeder Regel einen Grund. Regeln mit Begründung übertragen sich besser auf Fälle, die du nicht vorhergesehen hast, als bloße Befehle, weil der Zweck mit im Prompt steht. Halte das Regelwerk kurz, denn lange Listen widersprechen sich irgendwann. Eine Regel im Prompt ist keine Sicherheitsgarantie. Für harte Grenzen brauchst du zusätzlich technische Prüfungen.
