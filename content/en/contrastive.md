---
title: Contrastive Prompting
level: Intermediate
tags: examples style
description: Show a good and a bad example and say what makes the bad one bad.
---

You give one positive and one negative example. The negative one only works once you say why it is bad: too generic, no concrete claim, nothing but stock phrases. Without the reason, the model has to guess which quality you mean.

## Example

```prompt
Write a product description for a coffee grinder, about 60 words.
Product details: [burr type, grind settings, special features]

Bad example (for headphones): "These headphones are great and sound amazing. A must-have for everyone."
Why it's bad: generic, no concrete claim, nothing that applies only to this product.

Good example (for headphones): "The noise cancelling dampens the rumble on a train enough that you can listen to podcasts at half volume. The battery lasts 30 hours, and ten minutes of charging gives you another five."
Why it's good: a concrete situation, checkable figures, a benefit you can picture.
```

## When it helps

When the model keeps falling into the same unwanted pattern: too salesy, too formal, too many stock phrases. Keep negative examples short. Models sometimes copy phrases from them, precisely because they appear in the prompt. For that reason, take the negative example from a different product or topic than the actual task.
