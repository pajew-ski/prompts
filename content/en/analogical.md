---
title: Analogical Prompting
level: Advanced
tags: reasoning examples creativity
description: The model first generates and solves related examples of its own, then solves the actual problem.
---

Analogical Prompting (Yasunaga et al., 2023) lets the model produce its own examples. Instead of writing few-shot examples yourself, you ask it to first recall several relevant, distinct problems, describe them briefly and solve them. Only then does it solve the actual task. The self-generated examples are tailored to the problem, and you don't have to write any.

## Example

```prompt
Solve the following problem.

Problem: [Your task, e.g. a math, logic or programming problem]

Proceed as follows:
1. Recall three relevant problems that differ from one another. Describe each briefly and solve it.
2. Note which idea or method from these examples carries over to the problem.
3. Then solve the actual problem step by step.
```

A shorter variant for brainstorming takes the analogy from an unrelated field, for instance: "How does an ecosystem stay stable, and what of that applies to staff turnover on our team?" This gives you new angles, not tested solutions.

## When it helps

When you have no suitable examples at hand but the task belongs to a familiar problem type: math, algorithms, planning. The word "differ" matters; without it the model tends to produce three near-identical examples. Limits: the recalled examples may themselves be solved incorrectly, and for very specialized tasks the model finds no good analogies. In those cases, real examples you have checked work better.
