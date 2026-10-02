---
title: Active-Prompt
level: Advanced
tags: examples optimization
description: Write few-shot examples for exactly the questions on which the model is least certain.
---

Active-Prompt (Diao et al., 2023) does not pick few-shot examples at random. It picks them where the model is uncertain, so the human effort goes into those cases.

1. Collect candidate questions from your task, roughly 50 to 100.
2. Have the model answer each question several times, for example five.
3. Measure disagreement: how many different final answers does each question produce?
4. For the questions with the most disagreement, a person writes worked solutions with the reasoning spelled out.
5. Those solutions become the examples in the final prompt.

The method measures uncertainty, not error rate. You don't need reference answers for every candidate, only for the few you select.

## Example

```prompt
Solve problems of the following kind. Show your reasoning for each and end with "Answer: ...".

Question: [Selected question 1]
Reasoning: [Worked solution written by a person]
Answer: [Result]

Question: [Selected question 2]
Reasoning: [Worked solution]
Answer: [Result]

Question: [Selected question 3]
Reasoning: [Worked solution]
Answer: [Result]

Question: [New question]
Reasoning:
```

## When it helps

In practice, step 2 means a small script that sends each question to the model several times and compares the answers, or a lot of patience in a chat window. It pays off for a recurring task with a fixed prompt, such as a classification or calculation that runs hundreds of times a day. For a one-off question the effort is too high; two or three well-chosen examples will do.
