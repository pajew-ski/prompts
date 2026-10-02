---
title: Tree of Thoughts (ToT)
level: Advanced
tags: reasoning planning
description: Explore several solution paths, evaluate intermediate steps and drop weak branches instead of following one line of thought.
---

Tree of Thoughts (Yao et al., 2023) extends chain of thought from a chain to a tree. At each step, the model generates several possible next thoughts, evaluates them and pursues the promising ones. If a path hits a dead end, the search backtracks and tries another. In the original method, a program drives this search with many separate model calls for generating, evaluating and backtracking.

The prompt below is the well-known single-prompt approximation by Dave Hulbert (2023): three imagined experts develop the solution step by step and drop out when their path fails. It imitates the search but does not replace it.

## Example

```prompt
Imagine three different experts are answering this question. Each expert writes down one step of their thinking and shares it with the group. Then all experts move on to the next step, and so on. If any expert realizes at any point that they are wrong, they leave. At the end, give the answer the remaining experts agree on.

The question is: [Your question]
```

## When it helps

For tasks with several possible approaches where an early mistake ruins the whole path: planning problems, puzzles, decisions involving trade-offs. The single-prompt version is an approximation. All three experts are the same model in the same text, and evaluation and backtracking are only suggested, not carried out. If you need the full method, build it as a program with separate calls for generating and evaluating intermediate steps.
