---
title: Prompt Compression
level: Advanced
tags: cost optimization brevity
description: Shorten a reused prompt by cutting repetition and filler without losing a single rule.
---

A system prompt sent with every call costs something on every call. Shortening it pays off there, but only done properly: repetition, filler, pleasantries and examples that teach nothing new go. Every rule and every reason stays. Cryptic abbreviations and symbol shorthand, by contrast, save few tokens and cost accuracy, because the model may read them differently from what you meant.

## Example

```prompt
Shorten the following system prompt. It is sent with every call.

Rules:
- Every instruction, constraint and reason stays intact in substance.
- Remove repetition, filler and examples that show nothing the instructions don't already say.
- Write in normal, complete sentences, with no abbreviations of your own.

First output the shortened prompt. Then list what you removed and why, so I can check that nothing important is missing.

Prompt:
[your system prompt]
```

## When it helps

Long system prompts in applications with many calls. Test the shortened version on the same sample inputs as the old one before you deploy it. Also check whether your provider offers prompt caching: a fixed prefix is then cached and billed at a much lower rate, which makes clarity worth more than brevity.
