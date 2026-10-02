---
title: Take a Deep Breath
level: Beginner
tags: psychology optimization
description: A phrase automatic prompt optimization found for one model, and the lesson that does generalize.
---

The sentence "Take a deep breath and work on this problem step-by-step" comes from the OPRO paper (Yang et al., 2023, Google DeepMind). There, a model automatically generated many variants of an instruction, which were tested on a math benchmark. This phrasing scored best for one particular model (PaLM 2). For other models the procedure found other phrasings, and current models gain little from the sentence.

What generalizes is not the sentence but the procedure: which wording works best depends on the model and is found by testing, not by a phrase that works everywhere.

## Example

```prompt
Take a deep breath and work on this problem step-by-step.

[Your task]
```

This is the historical form, as it appears in the paper.

## When it helps

More as a lesson than as a tool. For a model without built-in reasoning, an instruction to work step by step can help with math problems (see chain of thought); whether this particular wording beats another one, only a test can tell. If you use a prompt regularly, the paper's approach is worth applying on a small scale: write a few variants of the instruction, run them on the same examples with known answers, and keep the best.
