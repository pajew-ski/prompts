---
title: Reflexion
level: Advanced
tags: self-critique agents iteration
description: After a failure with outside feedback, the model writes a short lesson that goes with it into the next attempt.
---

In Reflexion (Shinn et al., 2023), the model receives feedback from outside after an attempt: a failing test, a wrong answer, an error message. From that it writes a short reflection: why the attempt failed and what it will do differently next time. The reflection is kept and passed to the next attempt, and over several rounds all earlier reflections go along. That way the model does not repeat a mistake it has already made.

How it differs: Self-Refine revises without outside feedback, based only on the model's own critique. Iterative Refinement is driven by you, the human. Reflexion needs an external signal of whether the attempt succeeded.

## Example

```prompt
Task: [task, e.g. a function that has to pass certain tests]

Your last attempt:
[attempt]

Feedback:
[e.g. test output or error message]

Lessons from earlier attempts:
[previous reflections, empty the first time]

1. Write a reflection of at most three sentences: what caused the failure, and what will you concretely do differently in the next attempt?
2. Then solve the task again, taking all lessons into account.
```

## When it helps

Tasks with a clear success check that allow several attempts: code with tests, puzzles with a verifiable solution, agents operating in an environment. A script collects the reflections and inserts them into each new attempt. Without outside feedback there is nothing to reflect on; Self-Refine is the right method then. Keep reflections short, or the context grows with every round.
