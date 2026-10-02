---
title: Graph of Thoughts (GoT)
level: Advanced
tags: reasoning structure creativity
description: Treat partial results as nodes in a graph that can be combined, scored and refined.
---

Chain of Thought is a chain and Tree of Thoughts a tree: each thought has exactly one predecessor. Graph of Thoughts (Besta et al., 2023) also lets you merge several partial results into a new one and refine a result in loops. The full method runs as a program: it maintains a graph of partial results, calls the model for individual operations (generate, score, aggregate, refine) and uses the scores to decide what to do next.

The prompt version imitates this within a single prompt: you name the nodes and have the model combine and score them explicitly. It is an approximation, not an equivalent.

## Example

```prompt
Task: Develop the core idea for a novel.

1. Sketch three main characters, two sentences each. Call them A, B and C.
2. Sketch three central conflicts for the plot, two sentences each. Call them D, E and F.
3. Combine A with E and C with D into one five-sentence novel idea each. Call them AE and CD.
4. Score AE and CD on originality, tension and internal logic, each from 1 to 5, with one sentence of justification.
5. Take the stronger idea, add the best element of the weaker one, and refine the result into a half-page synopsis.
```

## When it helps

For tasks whose parts can be worked out separately and then merged: combining ideas, fusing several drafts into one, sorting and joining partial solutions. For tasks with a clear, linear solution path, a chain is enough. A single prompt has no real control flow and no memory beyond the text itself. If you want to use the method seriously, call the steps one by one from code and store the intermediate results.
