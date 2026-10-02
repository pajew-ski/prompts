---
title: Inner Monologue
level: Mittel
tags: reasoning agenten
description: Das Modell trennt seine Überlegungen per Tags von der Antwort, und deine Anwendung zeigt nur die Antwort an.
---

Ein Chatbot soll vor der Antwort überlegen: Was will der Nutzer, welche Information fehlt, welcher Ton passt? Der Nutzer soll diese Überlegungen aber nicht sehen. Ein Monolog in Klammern löst das nicht, denn alles, was das Modell schreibt, landet in der Antwort.

Was funktioniert: Das Modell schreibt seine Überlegungen in `<gedanken>`-Tags und die eigentliche Antwort in `<antwort>`-Tags. Deine Anwendung liest nur den Inhalt der Antwort-Tags aus und zeigt ihn an. Die Gedanken bleiben im Log und helfen beim Debuggen.

## Beispiel

```prompt
Du bist der Support-Assistent von [Firma] für [Produkt].

Überlege vor jeder Antwort in <gedanken>-Tags: Was will der Nutzer eigentlich? Welche Information fehlt dir? Welche Antwort hilft ihm am meisten, und welcher Ton passt zu seiner Nachricht?

Schreib danach die Antwort an den Nutzer in <antwort>-Tags. Die Anwendung zeigt dem Nutzer nur den Inhalt der <antwort>-Tags. Die Antwort muss deshalb für sich allein verständlich sein und darf nicht auf deine Überlegungen verweisen.
```

## Wann es hilft

In Chatbots und Agenten, deren Ausgabe ein Programm weiterverarbeitet, und wenn du nachvollziehen willst, warum eine Antwort so ausgefallen ist. Die Überlegungen kosten Tokens und Zeit; für einfache Anfragen lohnt sich das nicht. Reasoning-Modelle haben diesen Schritt eingebaut: Sie denken vor der Antwort verborgen nach, und die API gibt dieses Denken getrennt oder gar nicht aus. Dort brauchst du die Tags nicht. Die Trennung ist eine Anzeigeregel, kein Schutz: Wo die Rohausgabe sichtbar wird, sind auch die Gedanken lesbar.
