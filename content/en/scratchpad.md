---
title: Scratchpad
level: Advanced
tags: reasoning structure
description: Give the model a dedicated space for notes and intermediate results before it writes the answer.
---

A scratchpad is a designated working area inside the response. The model records intermediate results, variable values or partial calculations there and only then writes the actual answer. Because the intermediate steps exist as text, it can build on them instead of solving everything in one go, and you can see where an error creeps in.

Unlike an inner monologue, the point is not to hide reasoning from the user. The scratchpad may be visible: it is working space, not a private area.

## Example

```prompt
Task: [Your task, e.g. code whose output you want to know, or a multi-step calculation]

First use a <scratchpad> block as your working area. Record intermediate results, variable values after each step, and any assumptions you make. At the end of the block, check whether the intermediate results are consistent with each other.

Then, outside the block, write the answer in <answer> tags without repeating the intermediate steps.
```

## When it helps

For tasks with many intermediate states: tracing code line by line, multi-step calculations, plans with dependencies. For simple questions it adds nothing. Reasoning models have this kind of working space built in and think internally before answering. With them it is usually enough to describe the task fully; an explicit scratchpad is only worth it when you want to read or reuse the intermediate steps yourself.
