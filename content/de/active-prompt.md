---
title: Active-Prompt
level: Fortgeschritten
tags: beispiele optimierung
description: Few-Shot-Beispiele gezielt für die Fragen schreiben, bei denen das Modell am unsichersten ist.
---

Active-Prompt (Diao et al., 2023) wählt die Beispiele für einen Few-Shot-Prompt nicht zufällig aus, sondern dort, wo das Modell unsicher ist. Die menschliche Arbeit fließt genau in diese Fälle.

1. Sammle Kandidatenfragen aus deiner Aufgabe, etwa 50 bis 100.
2. Lass das Modell jede Frage mehrmals beantworten, zum Beispiel fünfmal.
3. Miss die Uneinigkeit: Wie viele verschiedene Endantworten kommen pro Frage heraus?
4. Für die Fragen mit der größten Uneinigkeit schreibt ein Mensch ausgearbeitete Lösungen mit Lösungsweg.
5. Diese Lösungen werden die Beispiele im endgültigen Prompt.

Gemessen wird Unsicherheit, nicht die Fehlerquote. Du brauchst also keine Musterlösungen für alle Kandidaten, nur für die wenigen ausgewählten.

## Beispiel

```prompt
Löse Aufgaben der folgenden Art. Zeige jeweils den Lösungsweg und schließe mit "Antwort: ..." ab.

Frage: [Ausgewählte Frage 1]
Lösungsweg: [Von einem Menschen geschriebener Lösungsweg]
Antwort: [Ergebnis]

Frage: [Ausgewählte Frage 2]
Lösungsweg: [Lösungsweg]
Antwort: [Ergebnis]

Frage: [Ausgewählte Frage 3]
Lösungsweg: [Lösungsweg]
Antwort: [Ergebnis]

Frage: [Neue Frage]
Lösungsweg:
```

## Wann es hilft

Schritt 2 heißt in der Praxis: ein kleines Skript, das jede Frage mehrfach an das Modell schickt und die Antworten vergleicht, oder viel Geduld im Chat. Das lohnt sich bei einer wiederkehrenden Aufgabe mit festem Prompt, etwa einer Klassifikation oder einer Rechenaufgabe, die täglich hundertfach läuft. Für eine einmalige Frage ist der Aufwand zu hoch, dort genügen zwei oder drei gut gewählte Beispiele.
