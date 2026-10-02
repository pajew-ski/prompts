---
title: Seed Word Prompting
level: Beginner
tags: style format
description: Fix the first words of the answer so its direction and tone are set from the start.
---

The first words of an answer shape how it continues. A response that opens with "To be honest" is more likely to be a frank assessment than praise. Seed word prompting uses this by giving the model those opening words. It is the smallest form of output priming.

In a chat, you ask the model to begin its answer with specific words. Through an API that allows a prefilled assistant message, you write the words at the start of the response yourself and the model continues from there. Not all current models support prefill.

## Example

```prompt
Here is the draft of my cover letter for a job application:

[Your draft]

Give me feedback on it. Begin your answer with: "To be honest, the biggest weakness of this draft is"
```

With prefill, the same opening goes at the start of the assistant message and the last line of the prompt is dropped.

## When it helps

When the model would otherwise open with praise, filler or a restatement of the question and you want it to get to the point. The seed sets the direction, not the content: an opening like "the biggest weakness" guarantees that a weakness gets named, even if the draft is good. So choose a seed only as strong as the direction you actually want. For a fixed output format such as JSON, output priming or the API's schema mode is the better tool.
