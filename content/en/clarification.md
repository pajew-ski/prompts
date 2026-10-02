---
title: Clarification
level: Beginner
tags: questions dialogue
description: Before starting, the model asks all its questions at once, each with a suggested default answer.
---

Before the model starts, it asks all open questions in one numbered list, at most five, most important first. For each question it suggests a default answer. You correct the points that need it and confirm the rest with "ok". Only then does the model write.

How it differs: the Ambiguity Check asks only when needed and otherwise gets going. Flipped Interaction runs an interview, one question at a time. Clarification is a single round.

## Example

```prompt
Write me a proposal for building a website for [client, e.g. a physiotherapy practice].

Before you write: ask me the questions whose answers would change the proposal the most. No more than five, as a numbered list, most important first. For each question, suggest a default answer you would use if I don't say otherwise. I'll reply with corrections or with "ok". Hold off on the proposal until I have answered.
```

## When it helps

Tasks that depend on knowledge only you have: proposals, concepts, plans. The default answers make replying quick and show you what the model would otherwise assume. The limit of five keeps the list to what matters; without it, the list often grows long and fills up with minor points. For small tasks the extra round is not worth it.
