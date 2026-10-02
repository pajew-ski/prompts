---
title: Ambiguity Check
level: Beginner
tags: questions dialogue
description: The model asks only when the answer would change the result, and otherwise states its assumptions.
---

A middle path between guessing and interrogating. The model checks the task for ambiguity and asks only where different answers would lead to a noticeably different result. For everything else it gets on with the work and lists the assumptions it made, so you can correct them.

How it differs: with Clarification, the model asks all its questions up front in one list and waits. With Flipped Interaction, it runs a full interview. The Ambiguity Check interrupts as little as possible.

## Example

```prompt
Create an eight-week training plan for me. Goal: [e.g. run 10 km in under an hour].

Before you start, check whether anything about the task is unclear. Ask me a question only if the answer would change the plan substantially, for example how many days a week I can train. No more than three questions. For points that would change the result only slightly, make a reasonable assumption instead of asking, and list those assumptions at the top of the plan so I can correct them.
```

## When it helps

Short requests with one or two real unknowns, where a full interview would be too much. The list of assumptions is the useful part: you see at once where the model guessed. Limits: the model decides for itself whether a question is substantial, and it does not always get that right. Anything that matters to you is better stated in the prompt from the start.
