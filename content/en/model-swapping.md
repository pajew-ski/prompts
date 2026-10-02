---
title: Model Swapping
level: Advanced
tags: cost optimization agents
description: Give each step of a workflow to the cheapest model that does it well enough.
---

Not every step needs the largest model. A small, fast model handles bulk work such as generating ideas, pre-sorting text or extracting data at a fraction of the cost. A large model takes the steps where judgment matters: selecting, weighing, working things out in detail.

The pattern also runs the other way: a large model breaks the task down and writes a plan, and small models carry out the individual, well-defined steps. Many agent systems work like this.

## Example

Step 1 runs on a small model: `Generate 50 short ideas for [topic], one line each.` Step 2 runs on a large model:

```prompt
Below are 50 ideas for [topic] that another model produced in a quick pass. Many are similar or weak.
Goal: [what the idea is for, audience, budget].

1. Merge duplicates.
2. Pick the three ideas that best meet the goal and justify each choice in two sentences.
3. Develop the best idea into a concept of about half a page.

Ideas:
[list]
```

## When it helps

Recurring workflows with many calls, where cost or latency matters. Check on a sample whether the small model really does its step well enough; errors in early steps carry through the chain. For a single question in a chat it is rarely worth the effort. Refer to models through configuration rather than hard-coding them, because the specific models change quickly.
