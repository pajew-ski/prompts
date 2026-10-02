---
title: Self-Consistency
level: Advanced
tags: reasoning verification
description: Solve the same problem several times independently and take the answer most solution paths agree on.
---

Self-consistency (Wang et al., 2022) rests on a simple observation: for problems with one correct answer, different valid reasoning paths arrive at the same result, while errors scatter. The actual method sends the same chain-of-thought prompt several times with a temperature above zero, so the reasoning paths differ, and takes the answer that occurs most often. That requires the API or repeated runs in separate chats.

In a single chat you can approximate the idea by asking for several independent solution paths and a comparison. This is weaker, because all paths are written in the same text and influence each other.

## Example

```prompt
Task: [Your task with a single correct answer, e.g. a math or logic problem]

Solve the task in three different ways, for example once by direct calculation, once by working backwards from the unknown, and once with a table. Treat each approach as if you had not seen the others, and state the result of each.

Then compare the three results. If they agree, give the result. If they do not, find the point where the approaches diverge and decide, with reasons, which one is correct.
```

## When it helps

For math, logic and classification tasks whose answers can be compared directly. Open-ended tasks such as writing have no majority to count. With the API, a handful of runs, say five, is a common starting point; cost grows with every run. The spread is itself information: if the results disagree widely, check the answer even when it has a narrow majority.
