---
title: Inner Monologue
level: Intermediate
tags: reasoning agents
description: The model separates its reasoning from the answer with tags, and your application shows only the answer.
---

A chatbot should think before it replies: what does the user want, what information is missing, what tone fits? But the user should not see that reasoning. A monologue in parentheses does not solve this, because everything the model writes ends up in the reply.

What works: the model writes its reasoning inside `<thinking>` tags and the actual reply inside `<answer>` tags. Your application extracts only the content of the answer tags and displays it. The reasoning stays in the log, where it helps with debugging.

## Example

```prompt
You are the support assistant of [company] for [product].

Before every reply, think inside <thinking> tags: What does the user actually want? What information are you missing? Which answer helps them most, and what tone fits their message?

Then write the reply to the user inside <answer> tags. The application shows the user only the content of the <answer> tags, so the reply must make sense on its own and must not refer to your reasoning.
```

## When it helps

In chatbots and agents whose output is processed by a program, and whenever you want to trace why an answer came out the way it did. The reasoning costs tokens and time; for simple requests it is not worth it. Reasoning models have this step built in: they think in a hidden phase before answering, and the API returns that thinking separately or not at all. There you do not need the tags. The separation is a display rule, not a safeguard: wherever the raw output is visible, the reasoning can be read too.
