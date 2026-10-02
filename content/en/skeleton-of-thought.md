---
title: Skeleton-of-Thought
level: Intermediate
tags: structure writing
description: Produce a brief outline first, then expand each point on its own.
---

Skeleton-of-Thought (Ning et al., 2023) splits writing into two phases. First comes a skeleton, a short list of main points. Then each point is expanded into a paragraph. In the paper, the second phase runs in parallel, with a separate model call for each point. That is where the speed-up comes from: the points are written at the same time rather than one after another. In a single prompt everything runs sequentially, and the benefit that remains is a clear structure.

## Example

```prompt
Topic: [Your topic, e.g. a guide to the first two weeks for new employees]
Audience: [Who will read it]

1. First write a skeleton: three to five main points, each in no more than eight words.
2. Then expand each point into a paragraph of three to five sentences. Stick to what the point in the skeleton announces, and do not add new main points.
```

## When it helps

For texts made of several points of equal weight: guides, overviews, lists of recommendations. Through the API you can generate the skeleton in one call and expand each point in its own parallel call, giving each call the full skeleton plus its point. The method fits less well for texts whose parts build on each other, such as an argument or a derivation, because the points are written independently.
