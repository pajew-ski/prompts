---
title: Hypothesis Generation
level: Advanced
tags: analysis ideas
description: The model produces several explanations for an observation and plans the cheapest way to test them.
---

When something surprising happens, one explanation comes to mind first and the analysis gets stuck on it. Here you ask the model for several clearly different hypotheses first. For each, it states what data would confirm it and what would refute it. The result is not a ranking based on gut feeling but a testing order: the cheapest test that decides the most comes first.

The model does not know your numbers, your market or your customers. Probabilities "based on market trends" would be guesses. What it does well is lay out explanations and propose ways to test them.

## Example

```prompt
Observation: [e.g. Revenue in our online shop fell by 20 percent last month.]
Context: [What you know: industry, changes during the period, data available]

1. Come up with five clearly different hypotheses that could explain the observation. Cover different areas, such as demand, marketing, technology, pricing and measurement errors.
2. For each hypothesis, state what data would confirm it and what data would refute it.
3. Propose an order for testing: first the tests that take little effort and confirm or rule out as many hypotheses as possible at once.

Do not estimate probabilities based on knowledge you do not have. If my context makes one hypothesis more plausible, say which detail that follows from.
```

## When it helps

For root-cause analysis: drops in metrics, failures in systems, unexpected results in experiments. Also when a team has settled on an explanation too early. The hypotheses are starting points, not findings; your data decides. The more context you provide, the less generic the hypotheses become.
