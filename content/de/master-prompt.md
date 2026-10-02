---
title: Der vollständige Prompt
level: Fortgeschritten
tags: struktur meta grundlagen
description: Ein Prompt mit Kontext, Aufgabe, Material, begründeten Vorgaben, Ausgabeformat und Erfolgskriterium.
---

Ein verbreiteter Fehler ist, alle Techniken zu stapeln: "Du bist ein Experte. Denke Schritt für Schritt. Prüfe deine Fakten. Kritisiere deinen Entwurf." Das klingt gründlich, sagt dem Modell aber nichts über deine Aufgabe. Was einem Prompt meistens fehlt, ist keine weitere Technik, sondern Information.

Ein vollständiger Prompt beantwortet sechs Fragen. Für wen ist das Ergebnis, und wofür wird es verwendet? Was genau ist die Aufgabe? Mit welchem Material wird gearbeitet? Welche Vorgaben gelten, und warum? In welcher Form soll das Ergebnis kommen? Woran erkennt man, dass es gut ist?

## Beispiel

```prompt
Kontext: Ich leite den Kundenservice eines Onlinehändlers für [Produktbereich]. Das Ergebnis geht an [Empfänger, z. B. die Geschäftsführung] und dient als Grundlage für die Entscheidung, ob wir [Entscheidung].

Aufgabe: Werte die Kundenbeschwerden des letzten Quartals aus und fasse die wichtigsten Probleme zusammen.

Material:
<beschwerden>
[Beschwerden, eine pro Zeile oder als Export]
</beschwerden>

Vorgaben:
- Nenne nur Probleme, die in mindestens [Anzahl] Beschwerden vorkommen, weil Einzelfälle die Entscheidung nicht tragen.
- Zitiere zu jedem Problem eine typische Beschwerde wörtlich, damit die Leser den Ton der Kunden sehen.
- Schlage keine Lösungen vor; darüber berät das Team in einem eigenen Termin.

Format: eine Tabelle mit den Spalten Problem, Anzahl der Beschwerden, typisches Zitat, betroffene Produkte. Danach ein Fazit in drei Sätzen.

Erfolgskriterium: Die Leser verstehen in zwei Minuten, welche drei Probleme am häufigsten sind und wie oft sie vorkommen.
```

## Wann es hilft

Für jede Aufgabe, die mehr ist als eine schnelle Frage, und besonders für Prompts, die du wiederverwenden willst. Nicht jeder Teil braucht viel Text; bei einfachen Aufgaben reicht ein Satz pro Punkt, und manche Punkte fallen weg. Techniken wählst du danach, was die Aufgabe braucht: Beispiele für ein festes Format, Schritt-für-Schritt-Denken für eine Rechnung, eine Selbstprüfung für Fakten. Eine Rolle wie "Du bist ein Experte" ersetzt keinen Kontext.
