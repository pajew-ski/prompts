---
title: Complexity-Based Prompting
level: Advanced
tags: examples reasoning
description: Choose worked few-shot examples with many reasoning steps rather than simple ones.
---

Complexity-Based Prompting (Fu et al., 2022) is about choosing the examples in chain-of-thought prompts. The paper found that worked examples with more reasoning steps lead to better reasoning than simple examples with short solutions. A second part concerns evaluation: you have the model generate several reasoning chains and take a majority vote only among the longest ones.

## Example

```prompt
Solve the problem at the end. Write out your reasoning in as much detail as the example, one calculation per line, and end with "Answer: ...".

Example:
Problem: On Monday a café sells 120 coffees at $3.50 each. On Tuesday it sells 25% more coffees but lowers the price by $0.50. Each coffee costs the café $1.20 to make. How much more profit does the café make on Tuesday than on Monday?
Reasoning:
1. Monday revenue: 120 × 3.50 = $420.
2. Monday cost: 120 × 1.20 = $144.
3. Monday profit: 420 - 144 = $276.
4. Tuesday coffees: 120 × 1.25 = 150.
5. Tuesday price: 3.50 - 0.50 = $3.00.
6. Tuesday revenue: 150 × 3.00 = $450.
7. Tuesday cost: 150 × 1.20 = $180.
8. Tuesday profit: 450 - 180 = $270.
9. Difference: 270 - 276 = -$6.
Answer: The café makes $6 less profit on Tuesday, not more.

Problem: [Your problem]
Reasoning:
```

## When it helps

Multi-step arithmetic and logic problems, especially with models that have no built-in reasoning. If you are writing few-shot examples anyway, pick the complex ones. The example should match the kind of task. Voting over several reasoning chains takes multiple calls and therefore a script. Limits: long examples use up context, and on simple tasks they add nothing.
