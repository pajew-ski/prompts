---
title: Role Prompting
level: Beginner
tags: role style basics
description: Give the model a specific role in a specific situation to steer perspective, vocabulary and focus.
---

A role sets the point of view the model answers from: which terms it uses, what it pays attention to, how strictly or leniently it judges. A skeptical reviewer notices different things than a friendly mentor. A role does not add knowledge, though, so "You are a world-class expert" adds little. A specific role with a situation works better: who you are, who you work for, what is at stake.

## Example

```prompt
You are a senior engineer on a small team that runs a payments API. You are reviewing a junior developer's pull request before it goes to production. You are thorough and direct, but you explain your points so they can learn from them.

Review the following code. List security issues first, then bugs, then improvements to readability and performance. For each point, give the location, the problem and a suggested fix.

[code]
```

## When it helps

When tone, angle or strictness matters: code reviews, feedback on writing, explanations for a particular audience, practice conversations. The situation often matters more than the title. If the answer is factually wrong, no role will fix it; the model is missing information that you need to put in the prompt.
