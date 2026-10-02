---
name: prompt-strategie
description: Wählt für eine Aufgabe die passende Prompting-Strategie aus der Sammlung prompts (hundert Muster auf Deutsch und Englisch, drei Stufen) und formt den Prompt danach. Nutzen, wenn ein Prompt geschrieben oder verbessert werden soll, wenn ein Modell zu flach, zu unsicher oder zu ausschweifend antwortet, oder wenn ein Verhalten gezielt ausgelöst werden soll (Zwischenschritte, Format, Rolle, Selbstprüfung).
license: MIT
metadata:
  tags: meta optimierung grundlagen
  tags-en: meta optimization basics
  description-en: Picks the fitting prompting strategy from this collection and shapes the prompt with it. For writing or improving a prompt, or when a model answers too shallowly, too unsure or too long.
  source: https://pajew-ski.github.io/prompts/
  language: de
---

# Prompt-Strategie wählen

Eine Prompting-Strategie ist ein wiederverwendbares Muster für die Anweisung an ein Sprachmodell. Die Sammlung unter https://pajew-ski.github.io/prompts/ enthält hundert davon, auf Deutsch und Englisch, jede mit Herkunft, Grenzen und Beispiel-Prompt; der Anker einer Karte ist ihr Slug (`#chain-of-thought`). Dieser Skill wählt eine Strategie für eine benannte Lücke aus und wendet sie an, statt einen Prompt aus dem Bauch zu schreiben.

## Vorgehen

1. Die Lücke benennen. Was fehlt der bisherigen Antwort, oder was muss die neue leisten? Genau eine Hauptlücke, in einem Satz.
2. Zuerst prüfen, ob der Prompt vollständig ist: Kontext (für wen, wozu), Aufgabe, Material, Einschränkungen mit Gründen, Ausgabeformat, Erfolgskriterium. Fehlt davon etwas, ist das die Lücke, und die Strategie ist "Der vollständige Prompt" (`#master-prompt`). Die meisten schwachen Antworten haben hier ihre Ursache, nicht in einer fehlenden Technik.
3. Sonst aus der Tabelle die passende Zeile wählen und die Karte in der Sammlung öffnen. Den Abschnitt "Wann es hilft" lesen: dort steht, wann die Strategie nicht hilft und was aktuelle Modelle ändern.
4. Den Beispiel-Prompt auf den Fall übertragen. Die Form bleibt, der Inhalt wird ersetzt. Nichts aus dem Beispiel stehen lassen, was nicht zum Fall gehört.
5. Höchstens zwei Strategien kombinieren. Mehr verwässert die Anweisung.
6. Einmal laufen lassen und prüfen, ob die Lücke geschlossen ist. Wenn nicht, eine Stufe höher gehen (Anfänger, Mittel, Fortgeschritten), statt mehr Text anzuhängen.

## Lücke und Strategie

| Lücke | Strategien (Anker) |
| --- | --- |
| Kontext, Ziel oder Kriterien fehlen | Der vollständige Prompt (`#master-prompt`), Context Warming (`#context-warming`) |
| Antwort springt zum Ergebnis, der Weg fehlt | Chain of Thought (`#chain-of-thought`), Least-to-Most (`#least-to-most`), Plan-and-Solve (`#plan-and-solve`) |
| Rechnen oder exakte Logik | Program-of-Thoughts (`#program-of-thoughts`), Tabular Chain of Thought (`#tabular-cot`) |
| Fakten sind unsicher oder erfunden | Chain of Verification (`#chain-of-verification`), Reference Check (`#reference-check`), Self-Consistency (`#self-consistency`) |
| Antwort soll sich auf Dokumente stützen | Simulated RAG (`#simulated-rag`), Reference Check (`#reference-check`), Thread of Thought (`#thread-of-thought`) |
| Format stimmt nicht oder muss maschinenlesbar sein | Format Enforcement (`#format-enforcement`), Structure Tagging (`#structure-tagging`), Few-Shot (`#few-shot`) |
| Eingabedaten könnten Anweisungen enthalten | XML Input Delimiters (`#xml-input`), Red Teaming (`#red-teaming`) |
| Ton, Stil oder Perspektive fehlt | Rollen-Prompting (`#role-prompting`), Tone Modifier (`#tone-modifier`), Contrastive Prompting (`#contrastive`) |
| Aufgabe zu groß für einen Prompt | Prompt Chaining (`#chaining`), Decomposition (`#decomposition`), Skeleton-of-Thought (`#skeleton-of-thought`) |
| Modell rät, statt nachzufragen | Clarification (`#clarification`), Ambiguity Check (`#ask-me-anything`), Flipped Interaction (`#flipped-interaction`) |
| Ursache statt Symptom gesucht | 5 Whys (`#5-whys`), Hypothesis Generation (`#hypothesis`) |
| Modell stimmt zu leicht zu, Schwächen fehlen | Devil's Advocate (`#devils-advocate`), Pre-Mortem (`#pre-mortem`), System 2 Attention (`#system-2-attention`) |
| Mehrere Sichten nötig | Multi-Persona Debate (`#multi-persona`), Six Thinking Hats (`#six-thinking-hats`), Perspective Taking (`#perspective-taking`) |
| Qualität soll über Durchgänge steigen | Self-Refine (`#self-refine`), Reflexion (`#reflexion`), Iterative Refinement (`#iterative-refinement`) |
| Beispiele fehlen oder sind schlecht gewählt | Few-Shot (`#few-shot`), Contrastive Chain of Thought (`#contrastive-cot`), Active-Prompt (`#active-prompt`) |
| Antwort zu lang | Token Budget (`#token-budget`), Chain of Density (`#chain-of-density`) |

## Regeln

- Erst die Lücke, dann die Strategie. Eine Strategie ohne benannte Lücke ist Dekoration.
- Bei Modellen mit eingebautem Reasoning keine Denkanweisungen wie "Denke Schritt für Schritt" anhängen; sie tun das ohnehin. Dort das Problem vollständig beschreiben und die Ausgabe festlegen.
- Ruhig und genau formulieren. Keine Großbuchstaben zur Betonung, keine Drohungen, kein Trinkgeld; eine Regel bekommt ihren Grund.
- Die Stufe der Strategie zur Aufgabe wählen: Anfänger für Einzelanfragen, Mittel für Formate und Rollen, Fortgeschritten für mehrstufige Abläufe.
- Den fertigen Prompt in der Sprache der Aufgabe schreiben und die Strategie darin nicht erklären. Das Modell braucht die Anweisung, nicht den Namen des Musters.
