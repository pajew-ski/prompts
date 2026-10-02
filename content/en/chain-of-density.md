---
title: Chain of Density
level: Advanced
tags: summarizing brevity iteration
description: Densify a summary over five rounds by adding missing key information while keeping the length fixed.
---

Chain of Density (Adams et al., 2023) produces a series of summaries of equal length that become steadily denser. The first one is deliberately general. In each of the four following rounds, the model finds one to three salient entities (people, places, figures, events) that appear in the article but are missing from the summary, and works them in without making the text longer. Room comes from cutting filler and merging sentences.

## Example

```prompt
Article:
"""
[Paste text here]
"""

Write five increasingly dense summaries of this article, each about [80] words long.

Round 1: A summary that describes the article in general terms and contains only a few specifics.

Rounds 2 to 5:
1. Name one to three salient entities from the article that are missing from the previous summary.
2. Rewrite the summary: keep everything from the previous version, add the new entities, keep the same length. Make room by cutting filler words and merging sentences.

For each round, output the added entities and the new summary.
```

## When it helps

Briefings, teasers and summaries with a fixed word budget, where every word should carry information. You don't have to take the last round: later rounds often become hard to read, and in the study readers preferred the middle rounds. Read through the versions and pick the one that suits your audience.
