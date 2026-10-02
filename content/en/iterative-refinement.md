---
title: Iterative Refinement
level: Intermediate
tags: iteration writing
description: You improve a draft over several passes in the same chat, with exactly one aspect per pass.
---

You do not treat the first draft as the final result but improve it step by step in the same chat. Each round addresses exactly one aspect: first content, then structure, then length, then tone. After each round you decide what comes next.

A request that covers only one aspect is easier to check and to steer. You can see what changed, and if a round makes the text worse, you know which one. Unlike self-correction strategies, it is not the model that judges the draft here, it is you.

## Example

```prompt
Write an article of about 800 words on [topic] for [audience].

We will then revise the text over several rounds. In each round I will name exactly one aspect. Change only that aspect, leave everything else as it is, and add two sentences below the new text saying what you changed.
```

Then send one short message per round, for example:

- "Cut everything the readers already know. Target: 600 words."
- "Add a concrete example for each claim in the second section."
- "Adjust the tone for a professional audience: more matter-of-fact, no colloquialisms."

## When it helps

For texts where details matter and you want to be the judge: articles, cover letters, presentations, important emails. Asking the model to change only the named aspect keeps each round from rewriting the whole text. In long chats, earlier versions stay in the context and deleted phrasing can creep back. If that happens, start a new chat with the current version.
