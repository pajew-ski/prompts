---
title: Recursive Reprompting
level: Advanced
tags: iteration agents
description: An automated loop that checks and revises the output again and again until a stop criterion is met.
---

Instead of asking once and taking the result, a loop runs: generate output, check it, feed the result of the check back to the model, revise. A script or an agent drives the loop, not you by hand. The stop criterion is what matters: the tests pass, a checklist is met, or a maximum number of rounds is reached. Without a fixed limit, the loop keeps going or degrades a result that was already good.

## Example

Instruction to an agent with a code tool:

```prompt
Task: Implement the function in [file] so that all tests in [test file] pass. Don't change the tests.

Work in rounds:
1. Change the code.
2. Run the tests.
3. If all tests pass, stop and summarize what you changed.
4. If tests fail, read the error messages and start the next round with exactly those failures.

Stop after 5 rounds at the latest. Then report which tests still fail, what you tried and what you think the cause is.
```

## When it helps

When the goal can be checked automatically: tests, a validator for a data format, a checklist that a second prompt ticks off. Without an objective check, the model grades its own work and further rounds soon add nothing. The round limit guards against runaway cost and endless loops. Related patterns are Reflexion, which draws a lesson from each failure for the next attempt, and Self-Refine, which revises without an outside check.
