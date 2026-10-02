---
title: Contrastive Chain of Thought
level: Advanced
tags: reasoning examples
description: Show a correct and an incorrect reasoning chain for one example problem and name the error.
---

Contrastive Chain of Thought (Chia et al., 2023) extends the examples used in chain of thought. For the same example problem, the prompt shows one correct and one incorrect chain of reasoning, and names the error in the incorrect one. The model sees not only how to proceed but also which mistake to avoid. The new task follows.

## Example

```prompt
Example problem: A sweater costs $80. It is discounted by 25%, and later the discounted price is raised by 10%. What does it cost now?

Correct reasoning: 25% of $80 is $20, so the discounted price is $60. 10% of $60 is $6. The final price is $66.

Incorrect reasoning: Minus 25% and plus 10% makes minus 15%. 15% of $80 is $12. The final price is $68.
Error: the second percentage applies to the discounted price, not the original one. Successive percentage changes cannot simply be added.

Problem: [Your problem]
Solve it step by step and watch for errors of the kind shown.
```

## When it helps

Problem types with a typical mistake that keeps happening: percentages, units, signs, the wrong base value. The incorrect chain should show a realistic error, not an absurd one, or the contrast adds little. Limits: the contrast guards against the error shown, not against every error. Each typical mistake needs its own example pair, which makes the prompt longer.
