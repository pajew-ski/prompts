---
title: Instruction Induction
level: Intermediate
tags: examples meta
description: The model infers the underlying rule from examples, states it, and only then applies it.
---

You give the model input-output pairs and have it infer the instruction that produces them (Honovich et al., 2022). This helps when you can see a pattern but find it hard to put into words.

The order matters: the model states the rule first and applies it afterwards. That way you can check the rule before you trust the outputs. A wrongly inferred rule can happen to produce the same results on your examples and only fail on new inputs.

## Example

```prompt
Here are examples of a transformation:

Input: "smith, peter" -> Output: "Peter Smith"
Input: "BROWN, KAREN" -> Output: "Karen Brown"
Input: "miller-lang, eva" -> Output: "Eva Miller-Lang"

1. State the rule that produces these outputs as an instruction someone could follow without seeing the examples.
2. List cases where the rule is unclear or the examples allow more than one reading.
3. Then apply the rule to these inputs:
[Your inputs, one per line]
```

## When it helps

When you have examples but no specification: data cleaning, reformatting, style rules, classification. You can then reuse the stated rule as an instruction in a prompt of its own, including for a smaller model. A few examples often fit more than one rule. Choose them so they cover the cases you care about, in the example above capitalization and double-barrelled names.
