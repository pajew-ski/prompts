---
title: Meta-Prompting
level: Mittel
tags: meta optimierung
description: Das Modell fragt nach deinem Ziel und schreibt oder verbessert dann einen Prompt für dich, mit Begründung.
---

Du bittest das Modell, einen Prompt für eine bestimmte Aufgabe zu schreiben oder einen vorhandenen zu verbessern. Das Modell kennt die üblichen Bausteine eines guten Prompts und schlägt oft eine Struktur vor, an die du selbst nicht gedacht hättest.

Ein Prompt kann aber nur so gut sein wie das, was das Modell über dein Ziel weiß. Deshalb fragt es zuerst nach, statt sofort zu schreiben. Und es liefert zum fertigen Prompt eine kurze Notiz zu jeder Entscheidung, damit du siehst, was du anpassen oder streichen kannst.

## Beispiel

```prompt
Hilf mir, einen Prompt zu schreiben. Mein Ziel: [z. B. Ein Modell soll aus Kundenmails Antwortentwürfe in unserem Ton schreiben.]

Bevor du schreibst, stell mir die Fragen, die du für einen guten Prompt brauchst: zum Zweck, zum Publikum, zum Material, zum gewünschten Format und dazu, woran ich ein gutes Ergebnis erkenne. Höchstens fünf Fragen, alle auf einmal.

Wenn ich geantwortet habe, schreib den Prompt. Setz Platzhalter in eckige Klammern, wo später mein eigenes Material eingefügt wird. Schreib danach zu jeder wichtigen Entscheidung im Prompt einen Satz, warum du sie so getroffen hast.
```

## Wann es hilft

Wenn du weißt, was du willst, aber nicht, wie du es formulierst, und bei Prompts, die du oft wiederverwendest. Teste den Prompt an echten Beispielen, bevor du ihm vertraust: Ein Prompt, der gut klingt, funktioniert nicht automatisch gut. Die Notizen zeigen dir, welche Bausteine für deine Aufgabe nichts beitragen und weg können.
