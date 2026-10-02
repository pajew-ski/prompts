---
title: Emotional Prompting
level: Beginner
tags: psychology context
description: Instead of applying pressure, you explain why the task matters and what the result is for.
---

EmotionPrompt (Li et al., 2023) appended sentences like "This is very important to my career" to prompts and measured better results on the models of that time. On current models, pressure and threats ("I will lose my job if this is wrong") add little and can make answers worse, for example more hedged or evasive.

What helps is the honest version: say why the task matters and what the result will be used for. That is not an emotional trigger but context, and context changes what a good answer looks like. Code for a demo calls for different care than code that handles customers' passwords.

## Example

```prompt
Write the login function for our web app in [language and framework].

Why this matters: the function goes into production next week and will handle the passwords of about [number] customers. A mistake here is a security issue, not just a bug. I will review the code myself before it goes live.

So pay particular attention to secure password hashing, protection against brute-force attempts, and error messages that do not reveal whether a username exists. Where you are unsure about something, say so in a code comment instead of glossing over it.
```

## When it helps

Whenever the model cannot tell from the task alone how much care is needed or what matters most. One sentence about the purpose often replaces several separate rules. Leave out pressure, threats and capital letters: they tell the model nothing about what makes an answer good.
