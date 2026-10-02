---
title: 5 Whys
level: Anfänger
tags: analyse zerlegung grundlagen
description: Schrittweise nach dem Warum fragen, bis hinter dem Symptom die eigentliche Ursache sichtbar wird.
---

Die Methode stammt aus dem Toyota-Produktionssystem: Sakichi Toyoda hat sie eingeführt, Taiichi Ohno hat sie bekannt gemacht. Du fragst, warum ein Problem aufgetreten ist, dann, warum dieser Grund eingetreten ist, und so weiter, bis du bei einer Ursache ankommst, die sich beheben lässt. Fünf ist ein Richtwert, keine feste Zahl.

Im Prompt stellt das Modell die Fragen. Du kennst die Fakten, das Modell führt die Kette und hält sie bei der Sache.

## Beispiel

```prompt
Ich möchte mit der 5-Why-Methode die Ursache eines Problems finden.

Problem: [Beschreibe das Problem, z. B. "Unser Server ist letzte Nacht abgestürzt."]

So gehst du vor:
1. Stell mir genau eine Frage "Warum?" und warte auf meine Antwort.
2. Frag auf Grundlage meiner Antwort erneut nach dem Warum, insgesamt höchstens fünfmal.
3. Wenn eine meiner Antworten mehr als einen Grund enthält, sag das und frag mich, welchem Zweig wir zuerst folgen. Die anderen Zweige notierst du für später.
4. Hör auf, sobald wir bei einer Ursache sind, die wir selbst ändern können.
5. Nenne dann die Grundursache in einem Satz und eine Gegenmaßnahme, die genau diese Ursache behebt, nicht nur das Symptom.

Erfinde keine Antworten für mich, denn nur ich kenne die Fakten.
```

## Wann es hilft

Bei Störungen, wiederkehrenden Fehlern und Prozessproblemen, bei denen die erste Erklärung nur das Symptom beschreibt ("der Speicher war voll"). Die Grenze: Eine Kette findet eine Ursache. Echte Probleme haben oft mehrere, deshalb fragt der Prompt nach Verzweigungen. Das Ergebnis ist nur so gut wie deine Antworten. Wo du nur vermutest, sag das, sonst baut die Kette auf einer Annahme auf.
