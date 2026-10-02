---
title: Token Budget
level: Anfänger
tags: kürze kosten
description: Gib die gewünschte Länge in Wörtern oder Sätzen vor und sag, wofür der Text gedacht ist.
---

Ohne Längenvorgabe schreiben Modelle oft mehr als nötig. Eine klare Grenze hilft, am besten in Wörtern oder Sätzen statt in Token. Token sind Wortteile, ein deutsches Wort umfasst oft mehrere, und beim Schreiben kann man sie nicht zuverlässig zählen. Wichtiger als die Zahl ist der Zweck: "für eine Folie" oder "für eine Push-Nachricht" sagt dem Modell, welche Art von Kürze gemeint ist und was wegfallen darf.

## Beispiel

```prompt
Erkläre die spezielle Relativitätstheorie in höchstens 50 Wörtern. Der Text kommt auf eine Folie in einem Vortrag für eine zehnte Klasse, die das Thema noch nicht im Unterricht hatte. Lass Formeln weg und konzentrier dich auf die eine Idee, die man sich merken soll.
```

## Wann es hilft

Immer dann, wenn der Platz begrenzt ist oder du knappe Antworten willst: Folien, Zusammenfassungen, Produkttexte, Antworten in einer App. Modelle zählen Wörter nur ungefähr; rechne mit Abweichungen von einigen Wörtern und kürze notfalls selbst nach. Für eine harte technische Grenze, etwa wegen der Kosten, setzt du in der API die maximale Ausgabelänge. Die schneidet die Antwort allerdings einfach ab, statt sie kürzer zu formulieren. Am besten nutzt du beides: die Längenangabe im Prompt für die Form, das Limit in der API als Absicherung.
