---
title: The Complete Prompt
level: Advanced
tags: structure meta basics
description: A prompt with context, task, material, constraints with reasons, output format and a success criterion.
---

A common mistake is to stack every technique: "You are an expert. Think step by step. Check your facts. Critique your draft." It sounds thorough, but it tells the model nothing about your task. What a prompt usually lacks is not another technique but information.

A complete prompt answers six questions. Who is the result for, and what will it be used for? What exactly is the task? What material is involved? Which constraints apply, and why? What form should the result take? How do you tell that it is good?

## Example

```prompt
Context: I run customer service for an online retailer of [product category]. The result goes to [recipient, e.g. senior management] and will inform the decision on whether we [decision].

Task: Analyze last quarter's customer complaints and summarize the main problems.

Material:
<complaints>
[Complaints, one per line or as an export]
</complaints>

Constraints:
- Only include problems that appear in at least [number] complaints, because one-off cases cannot support the decision.
- For each problem, quote one typical complaint verbatim so readers can see how customers put it.
- Do not propose solutions; the team will discuss those in a separate meeting.

Format: a table with the columns problem, number of complaints, typical quote, affected products. Then a three-sentence conclusion.

Success criterion: readers understand within two minutes which three problems are most common and how often they occur.
```

## When it helps

For any task that is more than a quick question, and especially for prompts you want to reuse. Not every part needs much text; for simple tasks one sentence per point is enough, and some points drop out. Choose techniques by what the task needs: examples for a fixed format, step-by-step reasoning for a calculation, a self-check for facts. A role like "You are an expert" is no substitute for context.
