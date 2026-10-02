---
title: Self-Refine
level: Advanced
tags: self-critique iteration
description: The model drafts, checks the draft against named criteria, and revises until every criterion is met.
---

In Self-Refine (Madaan et al., 2023) the same model handles three jobs in turn: it produces a draft, gives itself specific feedback, and revises the draft based on that feedback. The loop runs until no criterion is violated or a fixed number of rounds is reached. There is no outside feedback, neither a test nor a human.

That is the difference from Reflexion, which needs an external signal (a failing test, a wrong answer), and from iterative refinement, where you steer each round yourself.

## Example

```prompt
Task: [Your task, e.g. Write a Python function that removes duplicate entries from a list while preserving order.]

Criteria:
1. Correctness: [e.g. works with an empty list and with mixed types]
2. Efficiency: [e.g. linear running time]
3. Readability: [e.g. descriptive names and a docstring]

Process:
1. Write a first draft.
2. Check the draft against each criterion separately. For each one, state specifically what is violated and where, or write "met".
3. Revise the draft so the points you named are fixed.
4. Repeat steps 2 and 3 until all criteria are met, for at most three rounds.

At the end, output the final version and below it one line per criterion with its status.
```

## When it helps

For tasks whose quality can be measured against criteria you can name: code, wording, summaries. The more concrete the criteria, the more useful the feedback; a question like "Is it good?" gets generic praise. The limit: the model checks its work with the same knowledge that produced the mistake, so errors it does not recognize stay in. Where a test or other external check is possible, Reflexion is more reliable.
