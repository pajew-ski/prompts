---
title: Confidence Score
level: Intermediate
tags: facts hallucination verification
description: Have the model rate its confidence in each claim, to see what needs checking first.
---

The model rates how confident it is in each statement. What matters is knowing what to expect from that: confidence a model states in words or percentages is poorly calibrated. "90%" does not mean that nine out of ten such statements are correct. The rating is useful as a ranking. It shows you what to check first.

## Example

```prompt
Answer the following question: [Your question]

Then break your answer down into individual claims. For each one, give:
- Confidence: high, medium or low.
- For medium or low: what would need to be checked to confirm the claim, for example which source, figure or date.

List the low-confidence claims first.
```

## When it helps

Research, summaries and factual answers you plan to reuse. The list tells you where to verify, and the hint on what to check speeds that up. Three levels instead of percentages avoid a precision that does not exist. Limits: claims rated high can be wrong too, especially invented details that sound plausible. The ratings do not replace checking; they put it in order.
