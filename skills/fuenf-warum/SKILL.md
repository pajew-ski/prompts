---
name: fuenf-warum
description: Führt von einem Symptom zur Kernursache, indem fünfmal nach dem Warum gefragt wird, mit belegten oder als Annahme markierten Antworten je Stufe. Nutzen bei wiederkehrenden Fehlern, Ausfällen, Konflikten und jeder Situation, in der bisher Symptome behandelt wurden.
license: MIT
metadata:
  source: https://pajew-ski.github.io/prompts/#5-whys
  language: de
---

# Fünf Warum

Die Methode aus dem Toyota-Produktionssystem: Ein Symptom wird so lange nach seiner Ursache gefragt, bis eine Ursache erreicht ist, die sich beheben lässt und deren Behebung das Symptom nicht wiederkehren lässt. Fünf ist die Faustzahl, nicht die Regel.

## Vorgehen

1. Das Symptom in einem Satz festhalten, mit dem, was beobachtet wurde, ohne Deutung.
2. Fragen: Warum ist das passiert? Die Antwort muss eine Ursache sein, die dem Symptom zeitlich vorausgeht, kein Umstand, der nur zugleich gilt.
3. Jede Antwort kennzeichnen: belegt (Log, Messung, Aussage) oder Annahme. Bei Annahmen die Frage nennen, die sie belegen würde.
4. Die Antwort zum neuen Symptom machen und erneut fragen. Abbrechen, wenn eine Ursache erreicht ist, die im Einflussbereich liegt und deren Behebung die Kette unterbricht, oder wenn die Kette in "so ist die Welt" endet; dann eine Stufe zurück.
5. Gegenprobe: Von der Kernursache zurück zum Symptom lesen. Jeder Schritt muss mit "und deshalb" tragen.

## Ausgabe

Die Kette als nummerierte Liste, je Stufe Frage, Antwort, Kennzeichen. Darunter die Kernursache in einem Satz und eine Maßnahme, die sie behebt. Wenn zwei Ketten möglich sind, beide zeigen und sagen, welche Beobachtung sie unterscheidet.

## Fehler, die die Methode entwertet

- Eine Person als Ursache. Ursachen sind Bedingungen, unter denen die Person so gehandelt hat.
- Ein Warum überspringen, weil die Antwort offensichtlich scheint. Die offensichtliche Stufe ist oft die falsche.
- Bei der ersten behebbaren Ursache stehen bleiben, obwohl darunter eine liegt, die mehrere Symptome erklärt.
