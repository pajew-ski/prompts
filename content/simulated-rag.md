---
title: "Simulated RAG"
description: "Manuelles Bereitstellen von Kontext-Chunks, um Retrieval-Augmented Generation zu simulieren."
tags: ["kontext", "dokumente", "analyse"]
difficulty: "Mittel"
---

# Simulated RAG

Wenn du kein echtes Vektor-Datenbank-System hast, kannst du RAG simulieren, indem du relevante Textabschnitte ("Chunks") manuell in den Prompt lädst.

## Beispiel

**Prompt:**
```text
Nutze AUSSCHLIESSLICH die folgenden Informationen, um die Frage zu beantworten. Wenn die Antwort nicht im Text steht, sag "Weiß ich nicht".
```>
> --- KONTEXT ANFANG ---
> [Auszug aus Handbuch Seite 5]
> [Auszug aus Wiki Artikel]
> --- KONTEXT ENDE ---
>
> Frage: Wie setze ich das Gerät zurück?

## Strategie

Die Basis für Chat-with-your-PDF Anwendungen. Wichtig ist die negative Constraint ("Sag, wenn du es nicht weißt").
