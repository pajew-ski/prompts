---
title: Pseudocode Prompting
level: Advanced
tags: structure code
description: Have a process written as pseudocode so that inputs, conditions and gaps become unambiguous.
---

Natural language leaves a lot open: what happens when two conditions apply at once? What is the default case? Pseudocode forces inputs, outputs, conditions and order. When you have a prose rule rewritten as pseudocode, the cases it does not cover become visible. It also works the other way: a short piece of pseudocode in your prompt often describes a process more precisely than a paragraph of text.

## Example

```prompt
Below is our return policy in prose.
Write it as a pseudocode function check_return(order, return_date, condition) that returns "refund", "store_credit" or "reject".
Use only conditions that are stated in the text.
Mark every point where the text does not cover a case or is ambiguous with an OPEN comment and a short question.

Policy:
[text of the return policy]
```

## When it helps

Business rules, approval processes, game rules and algorithms: anywhere conditions and order matter. The open points it marks are often the most valuable result. Pseudocode is a poor fit for explanations, arguments or questions of style. The result is not a runnable program; if you need one, ask for code in a specific language.
