---
title: Prompt Chaining
level: Intermediate
tags: decomposition structure agents
description: Split a task across several prompts, checking each output before it feeds the next.
---

With prompt chaining you break a task into several prompts, and the output of one becomes the input of the next. Two things make a chain better than one long prompt. Between steps you can check or correct the result before an error travels further. And each prompt gets only what it needs for its own step.

## Example

```prompt
Step 1, extract:
Read the following customer email and output a JSON object with these fields: name, order_number, problem (one sentence), requested_resolution. Use null if a field is missing.
Email:
"""
[Customer email]
"""

Step 2, validate:
Here is a JSON object extracted from a customer email:
[Output of step 1]
Check: does the order number match the format [e.g. B-123456]? Is the problem specific enough to act on? Reply with "ok" or with a list of issues.

Step 3, write:
Write a reply to the customer based on this data:
[Validated JSON]
Tone: friendly and matter-of-fact, no more than 120 words. If a field is null, ask specifically for that information.
```

If step 2 reports issues, you or a script fix the data before step 3 runs. Step 3 never sees the original email; it only needs the validated data.

## When it helps

Tasks with clearly separate phases, and anything meant to run automatically: data processing, content pipelines, agent workflows. Each step can be tested and improved on its own. Limits: every step costs a call and time, and the chain is only as good as its handoffs. For a short, simple task, a single prompt is the better choice.
