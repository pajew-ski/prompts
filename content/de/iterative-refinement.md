---
title: Iterative Refinement
level: Mittel
tags: iteration schreiben
description: Du verbesserst einen Entwurf im selben Chat in mehreren Durchgängen, mit genau einem Aspekt pro Durchgang.
---

Du nimmst den ersten Entwurf nicht als Endergebnis, sondern verbesserst ihn im selben Chat Schritt für Schritt. Jede Runde betrifft genau einen Aspekt: erst den Inhalt, dann die Struktur, dann die Länge, dann den Ton. Nach jeder Runde entscheidest du, was als Nächstes kommt.

Eine Bitte, die nur einen Aspekt betrifft, ist leichter zu prüfen und zu steuern. Du siehst, was sich geändert hat, und wenn eine Runde den Text verschlechtert, weißt du, welche. Anders als bei Strategien zur Selbstkorrektur bewertet hier nicht das Modell seinen Entwurf, sondern du.

## Beispiel

```prompt
Schreib einen Artikel von etwa 800 Wörtern über [Thema] für [Zielgruppe].

Wir überarbeiten den Text danach in mehreren Runden. In jeder Runde nenne ich dir genau einen Aspekt. Ändere dann nur diesen Aspekt, lass den Rest unverändert und schreib unter den neuen Text in zwei Sätzen, was du geändert hast.
```

Danach folgt pro Runde eine kurze Nachricht, zum Beispiel:

- "Streiche alles, was die Leser schon wissen. Ziel: 600 Wörter."
- "Ergänze zu jeder Behauptung im zweiten Abschnitt ein konkretes Beispiel."
- "Passe den Ton an ein Fachpublikum an: sachlicher, ohne Umgangssprache."

## Wann es hilft

Bei Texten, bei denen es auf Details ankommt und du selbst urteilen willst: Artikel, Anschreiben, Präsentationen, wichtige Mails. Die Bitte, nur den genannten Aspekt zu ändern, verhindert, dass jede Runde den ganzen Text neu schreibt. In langen Chats bleiben frühere Fassungen im Kontext, und gestrichene Formulierungen können zurückkehren. Wenn das passiert, beginne einen neuen Chat mit der aktuellen Fassung.
