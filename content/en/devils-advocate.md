---
title: Devil's Advocate
level: Intermediate
tags: perspectives risk
description: The model deliberately attacks your plan or position and looks for the strongest objections.
---

You give the model an explicit adversarial role: it should not improve or praise your plan, but find the objections that could sink it. The role is needed because language models tend to agree with the user (sycophancy). Without a clear brief, you mostly get confirmation with a few polite caveats.

Two things make the criticism useful. The strongest objection comes first, instead of a long list of equally weighted nitpicks. And each objection comes with the evidence that would refute it. That turns criticism into a checklist.

## Example

```prompt
Here is my plan: [Your plan]

Act as devil's advocate. Your job is not to improve the plan but to find the objections that could make it fail.

1. Start with the strongest objection and explain why it matters more than the others.
2. Then list up to four further objections: wrong assumptions, logical gaps, overlooked risks.
3. For each objection, state what evidence or data would refute it.

Do not soften the objections and do not end with praise. I will decide for myself which ones hold up.
```

## When it helps

Before decisions that are hard to reverse: a launch, an investment, an argument that has to survive an audience. Less useful for early ideas that still need room to grow. The model knows your situation only from what you tell it, so it will miss objections that depend on inside knowledge. Not every objection is valid. The refuting evidence helps you separate the real ones from the constructed ones.
