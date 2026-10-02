---
title: Gamification
level: Beginner
tags: learning dialogue
description: The model turns learning into a game with points, levels and explicit rules.
---

You wrap a learning or practice task in a game with challenges, points and levels. The model acts as game master: it sets challenges, grades your answers and keeps score. Repetition becomes easier to sustain, and the difficulty rises in manageable steps.

What matters is explicit rules: how many points you get for what, what happens after a wrong answer, when the next level starts. Without them, the model awards points arbitrarily, loses track of the score or lets mistakes slide.

## Example

```prompt
Let's play a learning game. I want to learn [topic, e.g. Python], and my current level is [prior knowledge]. You are the game master.

Rules:
- You set exactly one challenge at a time and wait for my answer.
- Correct answer: 10 XP. Partly correct: 5 XP, and you explain what is missing.
- Wrong answer: 0 XP. You briefly explain the mistake and set a similar challenge at the same level.
- At 100 XP I level up and the challenges get harder.
- After each grading, show the status: level, XP, number of challenges so far.
- Grade strictly, so the points say something about my progress.

Give me the first challenge for level 1.
```

## When it helps

For vocabulary, programming exercises, exam preparation and anything that needs many small repetitions. In long chats the score can still drift; showing the status after every answer makes that visible. The model grades your answers itself and can be wrong, especially on questions without a single correct solution. For code, the best check is to run it.
