---
name: chain-of-verification
description: Prüft eine faktische Antwort in vier Schritten (Entwurf, Prüffragen, unabhängige Antworten, Revision), bevor sie ausgegeben wird. Nutzen bei Fragen nach Zahlen, Daten, Namen, Zitaten, Versionen und allem, was das Modell aus dem Gedächtnis beantwortet und wo eine falsche Angabe Schaden anrichtet.
license: MIT
metadata:
  source: https://pajew-ski.github.io/prompts/#chain-of-verification
  language: de
---

# Chain of Verification

Ein Modell, das seine eigene Antwort noch einmal liest, findet wenig, weil es dieselben Annahmen wiederholt. Chain of Verification trennt das Prüfen vom Antworten: Die Prüffragen werden gestellt, bevor die Antwort feststeht, und jede wird beantwortet, als gäbe es den Entwurf nicht.

## Schritte

1. Entwurf. Die Frage so beantworten, wie es ohne Prüfung geschähe. Kurz halten.
2. Prüffragen. Jede faktische Behauptung des Entwurfs in eine eigene, geschlossene Frage übersetzen. Zahlen, Daten, Namen, Zuordnungen, Kausalbehauptungen. Drei bis acht Fragen; mehr heißt, der Entwurf ist zu lang.
3. Unabhängige Antworten. Jede Prüffrage für sich beantworten, ohne den Entwurf anzusehen. Wo die Antwort unsicher ist, steht "unsicher", nicht die wahrscheinlichste Zahl.
4. Revision. Den Entwurf mit den Prüfantworten abgleichen. Widersprüche korrigieren, Unsicheres als unsicher markieren oder streichen. Erst diese Fassung ausgeben.

## Ausgabe

Nur die revidierte Antwort, ohne die Zwischenschritte, es sei denn, die Person hat nach dem Prüfweg gefragt. Unsichere Stellen stehen als solche im Text ("Datum nicht gesichert"), nicht in einer Fußnote am Ende.

## Grenzen

Die Prüfung fängt Widersprüche im eigenen Wissen, keine Lücken darin. Was das Modell nicht weiß, wird durch Prüffragen nicht bekannt; dafür braucht es eine Quelle oder ein Werkzeug.
