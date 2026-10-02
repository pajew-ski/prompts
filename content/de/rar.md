---
title: Rephrase and Respond (RaR)
level: Mittel
tags: rückfragen reasoning
description: Das Modell formuliert die Frage erst genauer und ausführlicher und beantwortet dann diese Fassung.
---

Fragen, die für dich klar sind, lassen für das Modell oft vieles offen. Rephrase and Respond (Deng et al., 2023) lässt das Modell die Frage zuerst umformulieren und erweitern und dann beantworten. Im Paper genügt dafür ein Satz: "Rephrase and expand the question, and respond." Die umformulierte Fassung zeigt dir außerdem, wie das Modell deine Frage verstanden hat.

## Beispiel

```prompt
"Hund beißt, was tun?"
Formuliere die Frage um und erweitere sie, sodass sie genauer und vollständiger ist, und beantworte sie dann.
```

Eine gute Umformulierung klärt zum Beispiel, ob ein Mensch gebissen wurde oder ob es um das Verhalten des eigenen Hundes geht, und beantwortet dann beides oder fragt nach.

## Wann es hilft

Bei kurzen, mehrdeutigen Fragen und bei Fragen, die du schnell getippt hast. Lies die Umformulierung: Trifft sie nicht, was du meintest, korrigiere die Frage, statt der Antwort zu trauen. Bei ohnehin präzisen Fragen bringt der Zwischenschritt wenig. Wenn eine falsche Annahme teuer wäre, ist eine echte Rückfrage besser, siehe Ambiguity Check.
