---
title: Few-Shot Prompting
level: Beginner
tags: examples basics
description: You show the model a few solved examples so it picks up the format and behavior you want.
---

Instead of only describing what the model should do (zero-shot), you give it a few solved examples (shots). The model continues the pattern. This works especially well for fixed formats, classification, and style requirements that are hard to put into words.

Examples are powerful, including in ways you did not intend: models copy surface features such as length, sentence structure and wording. So choose examples that differ from each other, cover edge cases, and use exactly the format you want back.

## Example

```prompt
Classify the sentiment of each customer review. Answer with one word only: Positive, Negative, Neutral or Mixed.

Review: "I love the new design."
Sentiment: Positive

Review: "Since the update the app won't start, and support hasn't replied in a week."
Sentiment: Negative

Review: "Battery life is great, but the camera is a letdown."
Sentiment: Mixed

Review: "Oh great, it crashed again."
Sentiment: Negative

Review: "It's okay, nothing special."
Sentiment:
```

Expected answer: Neutral. For your own texts, replace the last review. The examples vary in length and include mixed sentiment and sarcasm.

## When it helps

When the model gets a task wrong or answers inconsistently without examples, and for formats you need back exactly as shown. Three to five varied examples are usually enough. If all examples are short, the answers will be short; if most belong to one category, the answers drift toward it. For simple, clearly described tasks, the instruction alone is often enough.
