---
title: Step-Back Prompting
level: Advanced
tags: reasoning explaining
description: First identify the general principle behind a question, then use it to answer the specific question.
---

In step-back prompting (Zheng et al., 2023, Google DeepMind), the model takes a step back before answering. It asks which general principle or concept lies behind the question and explains it. Only then does it answer the specific question on that basis. The abstraction steers the answer toward the underlying relationships rather than toward obvious but superficial details.

## Example

```prompt
Question: Why does water expand when it freezes, even though most substances contract when they solidify?

Step 1: Take a step back. What general principles determine how dense a substance is in its solid and liquid states? Explain them briefly without addressing water yet.

Step 2: Apply these principles to water and use them to answer the original question.
```

The expected answer: in ice, hydrogen bonds lock the molecules into an open lattice with more space between them than in the liquid, so ice is less dense than water.

## When it helps

For questions in science, engineering or law whose answer follows from a general principle, and for knowledge questions full of specifics. The template works for any such question: replace the question and keep the two steps. For simple facts the detour adds nothing. One risk: if the model picks the wrong principle in step one, the answer builds on it consistently. Read the first step before you trust the result.
