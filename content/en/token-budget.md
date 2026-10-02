---
title: Token Budget
level: Beginner
tags: brevity cost
description: State the length you want in words or sentences, and say what the text is for.
---

Without a length limit, models often write more than needed. A clear limit helps, ideally in words or sentences rather than tokens. Tokens are pieces of words, a long word can take several, and nobody can count them reliably while writing. The purpose matters more than the number: "for a slide" or "for a push notification" tells the model what kind of brevity you mean and what can be dropped.

## Example

```prompt
Explain special relativity in no more than 50 words. The text goes on a slide in a talk for tenth-grade students who have not covered the topic in class yet. Leave out formulas and focus on the one idea they should remember.
```

## When it helps

Whenever space is limited or you want short answers: slides, summaries, product copy, responses inside an app. Models count words only roughly, so expect to be off by a few words and trim by hand if needed. For a hard technical limit, for example to control cost, set the maximum output length in the API. That limit simply cuts the response off rather than making it more concise. Use both: the length in the prompt shapes the text, the API limit is the safety net.
