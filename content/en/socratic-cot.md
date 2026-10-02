---
title: Socratic CoT
level: Advanced
tags: reasoning decomposition
description: The model breaks a problem into its own subquestions and answers them in turn until it reaches the solution.
---

Instead of writing a solution as continuous prose, the model asks itself the next question that leads toward the solution and answers it. Each answer determines the next question. A long derivation becomes a sequence of small steps that can each be checked.

## Example

```prompt
Problem: [Your problem, e.g. A train leaves A at 9:40 and travels toward B at 80 km/h. A second train leaves B, 200 km away, at 10:10 and travels toward the first at 120 km/h. When do they meet?]

Solve the problem by asking yourself questions and answering them. Each question should be a subproblem that can be solved with what is known so far. Use this form:

Q1: first subquestion
A1: answer with calculation or reasoning
Q2: next subquestion

After each answer, ask the question that is still missing. If an answer contradicts an earlier one, stop and resolve the contradiction. When all subquestions are answered, give the solution in one sentence.
```

For the example, the subquestions run like this: How far has the first train traveled by 10:10 (40 km)? What distance remains (160 km)? How fast are the trains closing in (200 km/h)? They meet after 48 minutes, at 10:58.

## When it helps

For multi-step problems where you want to check the path, not only the result, and for learning, because the subquestions show how to approach a problem. An error can be traced to a specific question. For simple tasks the format only pads the answer. Reasoning models decompose problems internally; with them the format is mainly worth it when you want to read the decomposition.
