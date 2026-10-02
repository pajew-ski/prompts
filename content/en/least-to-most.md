---
title: Least-to-Most Prompting
level: Advanced
tags: decomposition reasoning
description: First break the problem into subquestions from easy to hard, then solve them in order, each using the previous answers.
---

Least-to-Most Prompting (Zhou et al., 2022) works in two stages. In the first, the model breaks the problem into subquestions, ordered from simplest to hardest. In the second, it solves them in order, and each answer may draw on the earlier ones. The last subquestion is the original problem.

The difference from Chain of Thought: decomposition is a separate step, and every subquestion is easier than the whole. In the study, this helped most on problems harder than the examples in the prompt.

## Example

```prompt
Question: What is the minimum number of moves needed to solve the Tower of Hanoi with four discs?

Stage 1: Break the question into subquestions, from the simplest to the hardest. The last subquestion is the original question. Do not answer any of them yet.

Stage 2: Answer the subquestions in order. For each answer, explicitly use the answers to the previous subquestions.
```

Expected: subquestions for one, two, three and four discs, with 1, 3, 7 and 15 moves. For n discs you move the top n-1 discs twice and the bottom disc once.

## When it helps

For tasks whose steps build on each other: recursive problems, multi-step calculations, plans where one decision shapes the next. For your own problem, swap in your question; the two stages stay the same. If the decomposition itself is wrong, the second stage cannot fix it. For important tasks, send the stages as two messages and check the subquestions before they are solved.
