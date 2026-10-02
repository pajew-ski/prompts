---
title: Context Warming
level: Intermediate
tags: context basics
description: Put relevant source material before the question so the answer adopts its terms and level.
---

You place relevant material in front of your question: two sections from your course textbook, your team's glossary, an internal guideline. The answer then draws on that material and uses its terms instead of giving a generic, average explanation. It is the same idea as supplying documents, with a different purpose: the material is there less to provide facts than to set vocabulary and level.

## Example

```prompt
Here are two sections from the textbook I'm studying with:

"""
[Section 1]
"""

"""
[Section 2]
"""

Based on these, explain what [term, e.g. entanglement] is. Use the terms and notation from the sections and stay at their level. If you need something that does not appear there, mark it as an addition.
```

## When it helps

When an answer has to fit a particular course, field or team: the terms match, and the explanation starts at the right point. Pick short, representative sections. A large, unsorted pile of material makes it unclear what the answer should follow. Limits: the model may still mix in outside knowledge, which is why the prompt asks it to mark additions. It will also carry over any errors in the material.
