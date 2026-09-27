---
name: prompt-strategie
description: Wählt für eine Aufgabe die passende Prompting-Strategie aus der Sammlung prompts (hundert deutsche Muster, drei Stufen) und formt den Prompt danach. Nutzen, wenn ein Prompt geschrieben oder verbessert werden soll, wenn ein Modell zu flach, zu unsicher oder zu ausschweifend antwortet, oder wenn ein Verhalten gezielt ausgelöst werden soll (Zwischenschritte, Format, Rolle, Selbstprüfung).
license: MIT
metadata:
  tags: strategie auswahl workflow
  source: https://pajew-ski.github.io/prompts/
  language: de
---

# Prompt-Strategie wählen

Eine Prompting-Strategie ist ein wiederverwendbares Muster für die Anweisung an ein Sprachmodell. Die Sammlung unter https://pajew-ski.github.io/prompts/ enthält hundert davon, jede mit Beispiel-Prompt. Dieser Skill wählt eine aus und wendet sie an, statt einen Prompt aus dem Bauch zu schreiben.

## Vorgehen

1. Die Aufgabe einordnen. Was fehlt der bisherigen Antwort, oder was soll die neue leisten? Genau eine Hauptlücke benennen.
2. Aus der Tabelle die Strategiefamilie wählen und in der Sammlung nach dem Namen oder dem Schlagwort suchen. Die Karte aufklappen, den Beispiel-Prompt lesen.
3. Den Beispiel-Prompt auf den Fall übertragen. Die Form der Strategie bleibt, der Inhalt wird ersetzt. Nichts aus dem Beispiel stehen lassen, was nicht zum Fall gehört.
4. Höchstens zwei Strategien kombinieren. Mehr verwässert die Anweisung.
5. Einmal laufen lassen und prüfen, ob die Hauptlücke geschlossen ist. Wenn nicht, eine Stufe höher gehen (Anfänger zu Mittel zu Fortgeschritten), nicht mehr Text anhängen.

## Lücke und Strategie

| Lücke | Strategien (Schlagwort) |
| --- | --- |
| Antwort springt zum Ergebnis, Rechenweg fehlt | Chain of Thought, Least-to-Most, Program-of-Thoughts (reasoning) |
| Fakten sind unsicher oder erfunden | Chain of Verification, Reference Check, Self-Consistency (wahrheit, fakten) |
| Format stimmt nicht | Output-Format-Vorgaben, Tabular Chain of Thought, Schema-Prompts (struktur) |
| Ton oder Perspektive fehlt | Persona, Rollenspiel, Audience Prompting (stil) |
| Aufgabe zu groß für einen Prompt | Prompt Chaining, Decomposition, Plan-and-Solve (workflow, planung) |
| Modell rät statt nachzufragen | Clarification, Constraint Listing (dialog, genauigkeit) |
| Ursache statt Symptom gesucht | 5 Whys, Root Cause Analysis (analyse) |
| Mehrere Sichten nötig | Debate, Tree of Thoughts, Devil's Advocate (diskussion) |
| Beispiele fehlen oder sind schlecht gewählt | Few-Shot, Active-Prompt, Contrastive Examples (few-shot) |

## Regeln

- Erst die Lücke, dann die Strategie. Eine Strategie ohne benannte Lücke ist Dekoration.
- Die Stufe der Strategie zur Aufgabe wählen: Anfänger für Einzelanfragen, Mittel für Formate und Rollen, Fortgeschritten für mehrstufige Abläufe.
- Den fertigen Prompt in der Sprache der Aufgabe schreiben, die Strategie selbst nicht erklären. Das Modell braucht die Anweisung, nicht den Namen des Musters.
