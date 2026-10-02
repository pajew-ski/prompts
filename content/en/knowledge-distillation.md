---
title: Knowledge Distillation
level: Advanced
tags: examples cost optimization
description: A large model generates examples or training data that let a small, cheap model handle the same task.
---

The term comes from machine learning (Hinton et al., 2015): a small model is trained on the outputs of a large one and so picks up its behavior for a task. Here it means the prompt-level version: a large model generates examples for a few-shot prompt or a fine-tuning dataset, and a small, local model does the day-to-day work with them.

This pays off for tasks that run very often: you pay for the large model once and for the small one on every request.

## Example

```prompt
I am building a classifier for customer requests with a small, local model. The categories are: [category 1], [category 2], [category 3], Other.
Context on our customers: [industry, typical issues]

Create 40 examples, each as two lines in the format "Request: ..." and "Category: ...".

Requirements:
- The requests should read like real customer emails: varying in length, sometimes terse, sometimes rambling, with the occasional typo and different tones.
- Spread the examples roughly evenly across the categories.
- At least ten examples are edge cases: requests that touch two categories or are easy to misclassify. For each edge case, add one sentence on why the chosen category is right.
```

## When it helps

When a task has to run thousands of times and a large model is too expensive, too slow, or ruled out for data protection reasons. Check a sample of the generated examples by hand before you use them: the small model copies the large model's mistakes. Uniform examples also leave the small model fragile on anything the dataset does not cover. Afterwards, test it on real requests, not generated ones.
