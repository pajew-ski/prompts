---
title: Automatic Prompt Engineer (APE)
level: Advanced
tags: meta optimization
description: The model proposes instructions, and you keep the one that scores best on test examples.
---

Automatic Prompt Engineer (Zhou et al., 2022) treats the instruction as something to search for and test. The model receives input-output pairs and proposes instructions that describe the transformation. Each candidate is then run on further examples, and the one with the most correct results wins.

## Example

```prompt
Here are input-output pairs for a task:

Input: [Example 1]
Output: [Result 1]

Input: [Example 2]
Output: [Result 2]

Input: [Example 3]
Output: [Result 3]

Write five different instructions that a language model could follow to produce the matching output from each input. The instructions should differ in approach, not just in wording. Number them and output nothing else.
```

Then comes the part that matters: hold back a few pairs the model did not see while generating. Run each of the five instructions on those inputs in a fresh chat, count the correct outputs and keep the best instruction.

## When it helps

Recurring tasks with a clearly correct answer, such as classification, extraction or reformatting, where you already have test examples. You can run the test by hand; beyond a handful of examples a script is worth it. Asking the model to judge which of its own instructions will work best is a weak signal. The value of the method lies in measuring against examples. Without a measurable result, as in creative writing, there is no basis for choosing.
