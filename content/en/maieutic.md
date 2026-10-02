---
title: Maieutic Prompting
level: Advanced
tags: verification reasoning
description: The model explains a statement as true and as false, then checks which explanation holds up without contradiction.
---

The name refers to Socratic maieutics, the "midwifery" of drawing out knowledge through questioning. Maieutic Prompting (Jung et al., 2022) has the model produce two explanations for a statement, one for and one against, and then probes further: what follows from each explanation, and is it consistent? The answer chosen is the one whose explanations hold together without contradiction.

In the paper, a program builds a tree of explanations from this and resolves the contradictions with a logical solver. The prompt below approximates it in a single pass.

## Example

```prompt
Statement: [e.g. Glass is a very slow-flowing liquid, which is why old church windows are thicker at the bottom.]

Examine this statement before judging it. First write the best explanation for why it is true, then the best explanation for why it is false. From each explanation, derive two or three consequences that would also have to be true if the explanation were correct. Check these consequences: which are clearly false, and which contradict each other? Then decide which explanation holds up without contradiction, and give your verdict with a short justification. If both explanations contain contradictions, say so instead of committing to one.
```

## When it helps

For yes-or-no questions where the model tends to answer quickly or inconsistently, for fact-checking claims, and for common misconceptions. The method tests consistency, not truth: two statements can fit together nicely and still rest on a false fact. It is not suited to open questions without a clear true or false.
