---
title: "Privacy Masking"
description: "Sensible Daten (PII) im Prompt durch Platzhalter ersetzen, um Datenschutz zu wahren."
tags: ["datenschutz", "sicherheit", "compliance"]
difficulty: "Mittel"
---

# Privacy Masking

Schicke niemals echte Kundendaten an eine öffentliche API.

## Beispiel

**Prompt:**
```text
Analysiere diesen Brief.
Ich habe Namen durch [NAME] und IBANs durch [IBAN] ersetzt.
Text: "Hallo [NAME], ihre Rechnung für [IBAN] ist fällig."
```

## Strategie

Sicherheit first. Die Logik funktioniert auch mit Platzhaltern.
