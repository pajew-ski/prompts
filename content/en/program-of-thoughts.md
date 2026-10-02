---
title: Program-of-Thoughts (PoT)
level: Advanced
tags: code math tools
description: The model writes a program for a calculation, and the computer does the arithmetic, not the model.
---

Language models make mistakes when they calculate in text, but they write code reliably. Program-of-Thoughts (Chen et al., 2022) therefore separates reasoning from computation: the model expresses the solution as a program, and an interpreter runs it. The result then comes from execution, not from the model's estimate.

It follows that the code has to actually run. If the model has a code tool, it runs the code itself. Without one, it gives you the code and you run it. Asking the model to execute the code "in its head" cancels out the benefit.

## Example

```prompt
Calculate the square root of the sum of the first 50 prime numbers.
Write a short Python program for this.
If you can run code, run it and report the result from the execution, rounded to two decimal places.
If you can't, give me only the program so I can run it myself, and don't state an estimated result.
```

Expected: sum 5117, square root about 71.53.

## When it helps

Arithmetic, statistics, date calculations, tables, anything that needs exact numbers. Many chat interfaces now have a code tool that the model often uses on its own for calculations; asking makes it dependable. Where a task is more about weighing than computing, code adds little. Read the code briefly: a misunderstood problem gets calculated flawlessly too.
