---
title: Metacognitive Prompting
level: Fortgeschritten
tags: reasoning prüfung
description: Das Modell geht vom Verstehen über ein vorläufiges Urteil und dessen Prüfung zur begründeten Antwort mit Sicherheitsangabe.
---

Metacognitive Prompting (Wang & Zhao, 2023) lehnt sich daran an, wie Menschen über ihr eigenes Denken nachdenken. Statt direkt zu antworten, geht das Modell fünf Schritte: Es klärt, was der Text und die Frage eigentlich sagen, bildet ein vorläufiges Urteil, prüft dieses Urteil kritisch, gibt die endgültige Antwort mit Begründung und sagt, wie sicher es ist.

Der Kern ist der dritte Schritt: Das erste Urteil wird ausdrücklich infrage gestellt, bevor es zur Antwort wird. Die Studie untersuchte das an Aufgaben zum Sprachverständnis.

## Beispiel

```prompt
<text>
[Dein Text]
</text>

Frage: [Deine Frage zum Text, z. B. Unterstützt der Autor den Vorschlag oder lehnt er ihn ab?]

Geh in fünf Schritten vor:
1. Verstehen: Fasse zusammen, was der Text sagt und was genau gefragt ist. Nenne Stellen, die mehrdeutig sind.
2. Vorläufiges Urteil: Gib eine erste Antwort.
3. Kritische Prüfung: Welche Stellen im Text sprechen gegen diese Antwort? Welche andere Deutung wäre möglich? Fehlt dir Wissen, das die Antwort ändern würde?
4. Endgültige Antwort: Gib die Antwort, die nach der Prüfung bleibt, mit kurzer Begründung. Wenn sie vom vorläufigen Urteil abweicht, sag warum.
5. Sicherheit: Schätze ein, wie sicher du bist (hoch, mittel oder niedrig), und nenne den Grund.
```

## Wann es hilft

Bei Fragen zum Textverständnis, die Spielraum für Deutung lassen: Ironie, die Haltung des Autors, mehrdeutige Vertragsklauseln, widersprüchliche Aussagen. Für einfache Faktenfragen ist das zu viel Aufwand. Die Sicherheitsangabe ist eine Selbsteinschätzung und nicht kalibriert. Nimm sie als Hinweis, wo du selbst nachlesen solltest, nicht als Wahrscheinlichkeit.
