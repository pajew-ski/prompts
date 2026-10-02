---
title: No Apologies
level: Beginner
tags: style brevity
description: Describe the direct style you want instead of banning apologies and filler phrase by phrase.
---

Current models apologize less than earlier ones, but filler remains: openings that restate the question, precautionary disclaimers, closing summaries. A list of banned sentences does little, because it names the phrases and leaves open what should replace them. It works better to describe the style you want and say how the model should handle its limits.

## Example

```prompt
Answer directly. Start with the answer, not with an introduction or a restatement of my question.
If you can't do something or don't know, say in one sentence what is missing and what I can do instead.
Include caveats only when they matter for my decision, and then in one sentence.
No summary at the end.

My question: [question]
```

## When it helps

In system prompts or custom instructions, when you ask many short questions and want to read the answers quickly. The caveat rule is deliberately soft: banning every caveat would also remove warnings that matter. On sensitive topics such as medicine or law the model will keep some caveats regardless.
