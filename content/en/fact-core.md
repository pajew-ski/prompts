---
title: Fact-Core Prompting
level: Intermediate
tags: facts analysis
description: The model first collects facts with a certainty level, then writes an assessment built only on them.
---

Before the model states an opinion, it writes down a list of facts, the fact core. Each fact is marked with how certain it is. Value judgments go into a separate list, so it stays clear what is fact and what is weighting. The text that follows may only use the listed facts and has to say where it weighs them.

This lets you check the foundation before you trust the result. And when a point is disputed, you can see whether the disagreement is about a fact or about how much it counts.

## Example

```prompt
Topic: [topic, e.g. nuclear power in Germany]

Step 1: List the most important facts on the topic, grouped by [areas, e.g. technology, economics, history]. Mark each fact as "established", "likely" or "disputed". Only include what you can defend as a fact.

Step 2: Separately, list the value judgments that play a role in the debate, such as how to weigh risks against costs.

Step 3: Write a balanced essay of about [length] words. Use only facts from step 1. Whenever you weigh facts against each other, say explicitly that this is a judgment and which value judgment from step 2 it rests on.
```

## When it helps

For contested topics, decision papers, and texts that need to be balanced rather than just sound balanced. The facts come from the model itself and can be wrong or out of date; the certainty label is a self-assessment, not verification. For work that has to hold up, supply sources or check the list before the essay is written. To do that, split the prompt into two messages: steps 1 and 2, then step 3.
