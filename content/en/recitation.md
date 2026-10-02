---
title: Recitation-Augmented Generation
level: Intermediate
tags: facts reasoning
description: The model first recites the relevant facts from its own knowledge, then answers the question on that basis.
---

With recitation (Sun et al., 2022), the model first retrieves the knowledge the question needs and writes it out. Only then does it answer, based on that text. This helps most with questions that combine several facts: each fact stands on its own and can be checked, instead of the model guessing the answer in a single step.

## Example

```prompt
Question: Which team won the Super Bowl in the year the iPhone was unveiled?

Proceed as follows:
1. Write down what you know about the unveiling of the iPhone, with the date.
2. Write down which Super Bowl was played that year and who won it.
3. Answer the question based only on these statements, and say if any of them is uncertain.
```

Expected: the iPhone was unveiled in January 2007. Super Bowl XLI, in February 2007, was won by the Indianapolis Colts.

## When it helps

Multi-step knowledge questions when no sources are at hand. You can check the recited facts one by one. The method does not make the model's knowledge more reliable: a misremembered fact simply ends up written out. Where accuracy matters, put sources in the prompt or use search.
