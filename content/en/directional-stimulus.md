---
title: Directional Stimulus Prompting
level: Intermediate
tags: summarizing context
description: You give the model keywords that steer a summary or answer in the direction you need.
---

Instead of just writing "Summarize this", you add hints: keywords, terms or aspects that should appear in the output. The model can see what matters to you, and the summary becomes less generic.

The method comes from Li et al. (2023). In the paper, a small, specially trained model generates the keywords for each input, and a large model writes the summary from them. Done by hand, you play the part of the small model and pick the keywords yourself.

## Example

```prompt
<article>
[Text of the article, e.g. on AI safety]
</article>

Hints: alignment problem, black box, interpretability

Summarize the article in three sentences. Work in the hints, but only state what the article actually says. If a hint does not appear in the article, say so rather than adding anything about it.
```

## When it helps

When summaries come out too generic or miss the points you care about: technical articles, meeting notes, reports for a specific audience. The keywords steer, but they can also distort. Give minor or leading hints and the model will emphasize minor things. If you do not yet know what matters, ask for the key points first and choose the hints from there.
