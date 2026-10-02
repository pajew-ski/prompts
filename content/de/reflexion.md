---
title: Reflexion
level: Fortgeschritten
tags: selbstkritik agenten iteration
description: Nach einem Fehlschlag mit äußerer Rückmeldung schreibt das Modell eine kurze Lehre, die den nächsten Versuch begleitet.
---

Bei Reflexion (Shinn et al., 2023) bekommt das Modell nach einem Versuch eine Rückmeldung von außen: ein fehlgeschlagener Test, eine falsche Antwort, eine Fehlermeldung. Daraus schreibt es eine kurze Reflexion: warum der Versuch gescheitert ist und was es beim nächsten Mal anders macht. Diese Reflexion wird aufbewahrt und dem nächsten Versuch mitgegeben, bei mehreren Runden alle bisherigen. So wiederholt das Modell einen Fehler nicht, den es schon einmal gemacht hat.

Abgrenzung: Self-Refine überarbeitet ohne äußere Rückmeldung, allein anhand der eigenen Kritik. Iterative Refinement wird von dir als Mensch gesteuert. Reflexion braucht ein äußeres Signal, ob der Versuch gelungen ist.

## Beispiel

```prompt
Aufgabe: [Aufgabe, z. B. eine Funktion, die bestimmte Tests bestehen soll]

Dein letzter Versuch:
[Versuch]

Rückmeldung:
[z. B. Testausgabe oder Fehlermeldung]

Lehren aus früheren Versuchen:
[bisherige Reflexionen, beim ersten Mal leer]

1. Schreibe eine Reflexion in höchstens drei Sätzen: Was war die Ursache des Fehlschlags, und was machst du beim nächsten Versuch konkret anders?
2. Löse die Aufgabe dann erneut und berücksichtige dabei alle Lehren.
```

## Wann es hilft

Bei Aufgaben mit einer klaren Erfolgsprüfung, die mehrere Versuche erlauben: Code mit Tests, Rätsel mit prüfbarer Lösung, Agenten, die eine Umgebung bedienen. Ein Skript sammelt die Reflexionen und setzt sie in jeden neuen Versuch ein. Ohne äußere Rückmeldung fehlt die Grundlage; dann ist Self-Refine die passende Methode. Halte die Reflexionen kurz, sonst wird der Kontext mit jeder Runde länger.
