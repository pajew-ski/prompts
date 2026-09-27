---
title: Privacy Masking
level: Mittel
tags: datenschutz sicherheit compliance
description: Sensible Daten (PII) im Prompt durch Platzhalter ersetzen, um Datenschutz zu wahren.
---

Schicke niemals echte Kundendaten an eine öffentliche API.

## Beispiel

```prompt
Analysiere diesen Brief.
Ich habe Namen durch [NAME] und IBANs durch [IBAN] ersetzt.
Text: "Hallo [NAME], ihre Rechnung für [IBAN] ist fällig."
```

## Strategie

Sicherheit first. Die Logik funktioniert auch mit Platzhaltern.
