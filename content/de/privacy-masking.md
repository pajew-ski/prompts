---
title: Privacy Masking
level: Mittel
tags: datenschutz sicherheit
description: Personenbezogene Daten vor dem Senden durch nummerierte Platzhalter ersetzen und danach lokal zurücktauschen.
---

Bevor du Texte mit Kundendaten an ein Modell schickst, ersetzt du Namen, Adressen, Kontonummern und Ähnliches durch Platzhalter. Nummeriere sie und halte sie einheitlich: `[PERSON_1]`, `[PERSON_2]`, `[IBAN_1]`. So kann das Modell die Beteiligten auseinanderhalten, und dieselbe Person heißt überall gleich. Die Zuordnung von Platzhalter zu echtem Wert bleibt bei dir, etwa in einer lokalen Tabelle, und nach der Antwort tauschst du die Platzhalter zurück.

## Beispiel

```prompt
Unten steht eine Kundenbeschwerde. Ich habe personenbezogene Daten durch nummerierte Platzhalter ersetzt. Verwende diese Platzhalter in deiner Antwort unverändert, damit ich sie später zurücktauschen kann.

Aufgabe: Fasse das Anliegen in zwei Sätzen zusammen und entwirf eine sachliche Antwort an die Kundin.

Text:
"Sehr geehrte Damen und Herren, mein Name ist [PERSON_1], Kundennummer [KUNDENNR_1]. Am 3. März habe ich die Rechnung [RECHNUNG_1] über 240 Euro von meinem Konto [IBAN_1] bezahlt. Trotzdem hat mir Ihr Mitarbeiter [PERSON_2] gestern eine Mahnung geschickt. Ich bitte um Klärung und um Rücknahme der Mahngebühr."
```

## Wann es hilft

Bei allen Texten mit Daten von Kunden, Beschäftigten oder Patienten, besonders wenn keine Vereinbarung zur Datenverarbeitung mit dem Anbieter besteht. Die Aufgabe funktioniert meist genauso gut mit Platzhaltern. Maskieren schützt aber nicht vollständig: Auch der Kontext kann eine Person erkennbar machen, etwa eine seltene Berufsbezeichnung zusammen mit einem kleinen Ort. Prüfe daher auch solche Angaben und verallgemeinere sie bei Bedarf.
