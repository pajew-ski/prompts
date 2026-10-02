---
title: Metaphorical Prompting
level: Mittel
tags: erklären lernen
description: Ein unbekanntes Konzept durch eine einzige, durchgehaltene Metapher aus einem vertrauten Bereich erklären lassen.
---

Du gibst dem Modell ein Konzept und einen vertrauten Bildbereich vor, etwa ein Restaurant für eine Programmierschnittstelle. Das Modell ordnet jedem Teil des Konzepts eine Entsprechung im Bild zu. Anders als beim Analogical Prompting, das ganze Lösungswege überträgt, geht es hier um ein sprachliches Bild, das beim Verstehen hilft.

Jede Metapher passt nur bis zu einem Punkt. Deshalb fragst du ausdrücklich, wo sie nicht mehr stimmt. So nimmt der Leser das Bild nicht für die Sache selbst.

## Beispiel

```prompt
Erkläre, was eine API (Programmierschnittstelle) ist, für jemanden ohne Programmiererfahrung.
Verwende durchgehend die Metapher eines Restaurants: Gast, Kellner, Speisekarte, Küche.
Ordne jedem Teil der Metapher ausdrücklich zu, wofür er steht.
Nenne danach in zwei oder drei Punkten, wo die Metapher nicht mehr passt und was an der echten API anders ist.
```

## Wann es hilft

Beim Einarbeiten in ein fremdes Fachgebiet, beim Erklären für Laien und beim Vorbereiten von Vorträgen. Wähle einen Bildbereich, den dein Publikum wirklich kennt. Die Liste der Bruchstellen ist der wichtigste Teil: Ohne sie bleiben falsche Schlüsse aus dem Bild unbemerkt, etwa dass eine API immer auf Bestellung wartet wie ein Kellner. Für präzises Arbeiten ersetzt die Metapher die Fachdefinition nicht, sie bereitet sie vor.
