---
title: Algorithm of Thoughts (AoT)
level: Advanced
tags: reasoning structure
description: Have the model write out a search explicitly: try, check, backtrack.
---

Algorithm of Thoughts (Sel et al., 2023) has the model run a search algorithm within a single answer. The prompt contains an example in which a solution is searched step by step, dead ends and backtracking included, and the model follows that pattern on the new task. The paper mainly demonstrates depth-first search with backtracking, among other things on the 24 game.

## Example

```prompt
We're playing the 24 game: combine four numbers using +, -, × and /, each number exactly once, so that the result is 24.

Solve it with depth-first search and backtracking: pick two numbers and an operation, compute, and continue with the remaining numbers. When a branch cannot reach 24, write "Back" and try the next option at the previous level. Write down every step so the search can be checked.

Example:
Numbers: 1, 2, 4, 6
- 6 + 4 = 10, left: 1, 2, 10
  - 10 × 2 = 20, left: 1, 20. 20 + 1 = 21, 20 - 1 = 19, 20 × 1 = 20. No hit.
  - 10 + 2 = 12, left: 1, 12. 12 + 1 = 13, 12 - 1 = 11, 12 × 1 = 12. No hit. Back.
- 6 × 4 = 24, left: 1, 2, 24
  - 2 - 1 = 1, left: 1, 24. 24 × 1 = 24. Hit.
Solution: 6 × 4 × (2 - 1) = 24

Numbers: 4, 9, 10, 13
```

One solution is (10 - 4) × (13 - 9) = 24.

## When it helps

Small search and combination problems: puzzles, schedules with a few constraints, assignments where dead ends have to be recognized. Name the procedure correctly: "expand only the best options" is beam search, not breadth-first search, and a vaguely named procedure produces a vague search. Limits: the search space has to fit into one answer, and arithmetic slips in individual steps still happen. For larger search spaces, a program that performs a real search is more reliable, and the model can write that program for you.
