---
title: "Confidence Score"
description: "Das Modell zwingen, seine eigene Sicherheit in Prozent anzugeben."
tags: ["metriken", "genauigkeit", "kalibrierung"]
difficulty: "Mittel"
---

# Confidence Score

Halluzinationen klingen oft sehr selbstbewusst. Frage nach der Unsicherheit.

## Beispiel

**Prompt:**
```text
Beantworte die Frage X.
Gib danach einen "Confidence Score" (0-100%) an.
Wenn der Score unter 80% ist, liste die Gründe auf, warum du unsicher bist.
```
## Strategie

Kalibriert die Erwartungshaltung des Users.
