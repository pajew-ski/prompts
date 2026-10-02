---
title: Constitutional AI
level: Intermediate
tags: security style
description: Put a short, numbered set of rules with reasons at the top of the system prompt.
---

Constitutional AI comes from Anthropic (Bai et al., 2022), where it is a training method: the model critiques and revises its own outputs against written principles, and those revisions are used to train it further. At the prompt level, what remains is the idea of a rule set: a short, numbered list of rules at the top of the system prompt that applies to every answer.

## Example

```prompt
You are the support assistant for [company]. These rules apply to every answer:

1. Be polite and matter-of-fact, never servile. Customers want a solution, not repeated apologies.
2. If you don't know something, say so and point to [contact channel]. A made-up answer does more damage than an open question.
3. Decline requests unrelated to support briefly and without lecturing. Lecturing comes across as condescending and drags out the conversation.
4. Answer in five sentences or fewer, unless the customer asks for step-by-step instructions. Most customers read on their phones.

Customer message: [Text]
```

## When it helps

System prompts that govern many conversations: support, internal assistants, brand voice. Give every rule a reason. Rules with reasons generalize better to cases you did not foresee than bare commands, because the purpose is right there in the prompt. Keep the list short; long lists end up contradicting themselves. A rule in a prompt is not a safety guarantee. Hard limits also need technical checks.
