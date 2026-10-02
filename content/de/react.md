---
title: ReAct (Reasoning + Acting)
level: Fortgeschritten
tags: agenten werkzeuge
description: Denkschritte und Werkzeugaufrufe abwechseln, sodass jedes Ergebnis den nächsten Schritt bestimmt.
---

ReAct (Yao et al., 2022) verbindet Nachdenken mit Handeln. Das Modell schreibt abwechselnd einen Gedanken (Thought), eine Aktion (Action), etwa eine Suche, und liest das Ergebnis (Observation), bevor es weiterdenkt. So stützt sich die Antwort auf nachgeschlagene Fakten statt auf das Gedächtnis des Modells, und der Weg dorthin bleibt nachvollziehbar.

Heute setzen Agenten-Frameworks und das Tool Calling der Modell-Schnittstellen genau diese Schleife um. Die ausgeschriebene Form ist nützlich, um das Muster zu verstehen, und für Modelle ohne Werkzeuge, bei denen du die Beobachtungen selbst lieferst.

## Beispiel

```prompt
Beantworte die Frage im folgenden Format:
Thought: was du als Nächstes herausfinden musst
Action: Search[Suchbegriff]
Dann hältst du an. Ich liefere dir das Ergebnis als "Observation:". Wiederhole das, bis du genug weißt, und schreibe dann "Answer:" mit der Antwort.

Frage: Wie alt war Albert Einstein, als er die spezielle Relativitätstheorie veröffentlichte?
```

Ein Ablauf sieht dann so aus:

```text
Thought: Ich brauche das Jahr der Veröffentlichung.
Action: Search[spezielle Relativitätstheorie Veröffentlichung]
Observation: Einstein veröffentlichte sie 1905.
Thought: Jetzt brauche ich sein Geburtsdatum.
Action: Search[Albert Einstein Geburtsdatum]
Observation: 14. März 1879.
Answer: Er war 26 Jahre alt.
```

## Wann es hilft

Bei Fragen, die mehrere nachgeschlagene Fakten verbinden, und beim Bau von Agenten. Wenn dein Modell Werkzeuge über die Schnittstelle aufrufen kann, nutze dieses Tool Calling statt des Textformats; es ist zuverlässiger. Wichtig in beiden Fällen: Das Modell muss bei der Aktion anhalten und auf das echte Ergebnis warten, sonst erfindet es die Beobachtung.
