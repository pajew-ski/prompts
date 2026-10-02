---
title: Socratic Prompting
level: Beginner
tags: learning dialogue
description: The model withholds the finished answer and guides you with questions to your own.
---

With the Socratic method, the model responds to your request with questions. It tests your assumptions, asks you for examples and counterexamples, and points out contradictions until you reach an answer yourself. The approach is named after Socrates, who questions his interlocutors this way in Plato's dialogues.

## Example

```prompt
I want to understand [your topic, e.g. what makes a price fair]. Help me reach an answer myself instead of giving it to me.

Ask me one question at a time and wait for my reply. Build each question on what I said last: test my assumptions, ask for examples and counterexamples, and point out contradictions. Do not offer definitions or a solution unless I ask for them. If I am stuck for several rounds, give me a small hint rather than the answer. At the end, summarize where I started and where I am now.
```

## When it helps

For learning and thinking things through, when you want to understand a topic rather than just receive an answer: before an exam, when sharpening a concept, when testing a position of your own. It takes longer than a direct explanation, so it is the wrong choice for plain factual questions or when you are short on time. The "one question at a time" rule matters: without it, models often ask several questions per message and the conversation loses its thread.
