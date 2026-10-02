---
title: Echo Prompting
level: Beginner
tags: verification questions
description: The model restates the task and all its constraints in its own words before it starts.
---

Before the model does any work, it summarizes the task in its own words and lists every constraint as a checklist. Then it waits. You read the list, correct anything it misunderstood, and only then tell it to go ahead.

The benefit is on your side: spotting a misunderstanding in a checklist takes seconds. Finding it in a finished three-page result takes a lot longer.

## Example

```prompt
Task: [Your task with all its requirements]

Before you start:
1. Summarize the task in two or three sentences, in your own words.
2. List every constraint as a checklist: scope, format, audience, exclusions, deadlines and anything else you take from my text.
3. Mark the points you assumed because I did not state them.

Do not start the work yet. Wait until I have confirmed or corrected the list.
```

## When it helps

Before long or expensive tasks: a report, a refactoring, a translation with many rules. For short tasks, the round trip is slower than simply trying again. A correct summary does not guarantee a correct result, but a wrong one exposes the error before it costs you work. You can also reuse the confirmed checklist at the end to check the result.
