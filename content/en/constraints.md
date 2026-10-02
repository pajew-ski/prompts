---
title: Constraints-Based Prompting
level: Advanced
tags: creativity writing
description: Spark creativity with strict formal rules, in the spirit of the Oulipo.
---

The Oulipo is a French group of writers who work under self-imposed formal constraints. The best-known example is Georges Perec's novel "La Disparition", written entirely without the letter e. The idea: a strict constraint excludes the obvious phrasing and calls for other solutions. With language models, such rules often lead away from the most common turns of phrase.

## Example

```prompt
Write a short story about a robot that quits its job.

Constraints:
1. Exactly 100 words.
2. Dialogue only, no narration.
3. Not a single adjective.
4. The robot never says directly why it is leaving. The reason should emerge from the conversation.

At the end, check each constraint and revise the text if any of them is broken.
```

## When it helps

When writing sounds too smooth and interchangeable, for writing exercises and creative formats. Constraints on structure, perspective or parts of speech work more reliably than letter-level ones. A lipogram such as "no word containing e" is hard for models because they process text as tokens, which are word pieces, not individual letters. Exact word counts also tend to come out only approximately right. Count yourself when it matters.
