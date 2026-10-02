---
title: Plan-and-Solve
level: Advanced
tags: planning reasoning math
description: First understand the problem and devise a plan, then carry out the plan step by step.
---

Plan-and-Solve (Wang et al., 2023) replaces the generic "Let's think step by step" with a more specific two-phase instruction. The model first understands the problem and devises a plan, then carries out the plan step by step. The extended version also asks it to extract the relevant quantities and to pay attention to calculation and intermediate results. The method targets the two most common errors: skipped steps and arithmetic mistakes.

## Example

```prompt
Problem: A café sells 120 coffees in the morning at 3.20 euros each. In the afternoon it sells 40 percent fewer coffees, at 2.80 euros each. What is the day's coffee revenue?

First, understand the problem: which quantities are given, and what is being asked? Then devise a plan to solve it.
Next, carry out the plan step by step. Pay attention to correct calculation and write down every intermediate result.
Give the answer at the end.
```

Expected: 72 coffees in the afternoon, 384 euros plus 201.60 euros, 585.60 euros in total.

## When it helps

Multi-step arithmetic and word problems with models that have no built-in reasoning. Reasoning models plan such problems on their own; for them, a complete description of the problem is enough. The structure stays useful when you want to see and check the plan before trusting the result. For exact calculations, a code tool is safer.
