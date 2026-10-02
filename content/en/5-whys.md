---
title: 5 Whys
level: Beginner
tags: analysis decomposition basics
description: Ask why, one step at a time, until the actual cause behind a symptom becomes visible.
---

The method comes from the Toyota Production System: Sakichi Toyoda introduced it and Taiichi Ohno made it widely known. You ask why a problem happened, then why that reason occurred, and so on, until you reach a cause you can fix. Five is a rule of thumb, not a fixed count.

In the prompt, the model asks the questions. You know the facts; the model runs the chain and keeps it on track.

## Example

```prompt
I want to find the root cause of a problem using the 5 Whys method.

Problem: [Describe the problem, e.g. "Our server crashed last night."]

How to proceed:
1. Ask me exactly one "Why?" question and wait for my answer.
2. Based on my answer, ask why again, no more than five times in total.
3. If one of my answers contains more than one reason, point that out and ask which branch we follow first. Note the other branches for later.
4. Stop as soon as we reach a cause we can change ourselves.
5. Then state the root cause in one sentence and one countermeasure that addresses that cause, not just the symptom.

Don't make up answers for me, since only I know the facts.
```

## When it helps

Outages, recurring defects and process problems where the first explanation only describes the symptom ("the disk was full"). The limit: one chain finds one cause. Real problems often have several, which is why the prompt asks for branches. The result is only as good as your answers. Where you are guessing, say so, or the chain ends up resting on an assumption.
