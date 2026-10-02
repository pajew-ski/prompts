---
title: Chain of Thought
level: Beginner
tags: reasoning basics
description: The model writes out its intermediate steps before giving the answer.
---

With Chain of Thought (Wei et al., 2022), the model writes out its intermediate steps before giving the answer. The original work used examples with the reasoning spelled out. It later turned out that a single sentence is enough: "Let's think step by step" (Kojima et al., 2022). On problems with several arithmetic or logical steps, the model makes fewer mistakes this way.

## Example

```prompt
Roger has 5 tennis balls. He buys 2 more cans of tennis balls. Each can has 3 tennis balls. How many tennis balls does he have now?
Let's think step by step.
```

**Without Chain of Thought:**

> The answer is 11.

**With Chain of Thought:**

> Roger started with 5 balls. 2 cans of 3 tennis balls each is 6 tennis balls. 5 + 6 = 11. The answer is 11.

## When it helps

Many current models reason on their own before answering; they are often called thinking or reasoning models. For them the phrase is redundant. It works better to describe the problem fully and ask for the result, with a short justification if you want one. For models without built-in reasoning, the phrase still helps on multi-step problems such as arithmetic, logic or planning. On simple factual or style questions it only makes answers longer.
