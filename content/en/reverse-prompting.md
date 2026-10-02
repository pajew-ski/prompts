---
title: Reverse Prompting
level: Beginner
tags: meta learning
description: Show the model a finished text and have it reconstruct a prompt that would produce it.
---

You have a text whose style and structure you want to reproduce. Instead of describing its features yourself, you give the model the text and have it write a prompt that produces texts of this kind. Along the way you learn what makes the text work: tone, sentence length, structure, audience.

The reconstructed prompt is a hypothesis. Whether it works only becomes clear when you apply it to a new topic and compare the result with the original.

## Example

```prompt
Here is a text whose style and structure I want to reuse for other topics:

"[text]"

1. List in bullet points what characterizes this text: audience, tone, sentence length, structure, typical devices.
2. Write a prompt with a placeholder for the topic that produces texts in exactly this style and structure. Don't carry over any content from the original.
3. As a test, apply your prompt to the topic [new topic].
```

## When it helps

Turning a successful text into a template for a series, such as newsletters, product descriptions or job ads, and learning prompting from examples. Compare the test run with the original: where it differs, add the missing feature to the prompt. Then try it on two or three more topics before using it regularly. This does not reveal the prompt that was actually used for someone else's text, only one that produces something similar.
