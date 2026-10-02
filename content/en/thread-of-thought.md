---
title: Thread of Thought
level: Advanced
tags: documents context
description: Have the model work through long, messy context in parts, summarizing and analyzing as it goes, before answering.
---

Thread of Thought (Zhou et al., 2023) is meant for cases where there is a lot of context but only part of it bears on the question, such as several retrieved documents or a long conversation log. Instead of processing the context all at once, the model goes through it in manageable parts, summarizes each and checks what it contributes to the question. The trigger sentence from the paper is: "Walk me through this context in manageable parts step by step, summarizing and analyzing as we go." A second step then derives the answer from this walkthrough.

## Example

```prompt
<context>
[Your context, e.g. several documents, search results or an email thread]
</context>

Question: [Your question]

Walk me through this context in manageable parts step by step, summarizing and analyzing as we go. For each part, note in one or two sentences what it contains and whether it bears on the question. Briefly mark parts that contribute nothing as not relevant.

Then answer the question using only the relevant parts, and say which ones you are relying on.
```

## When it helps

For long, mixed context with many distractions: search results that only partly fit, meeting notes, email threads. The part-by-part walkthrough shows which parts the model treats as relevant, and you can check that. For short, clean context the extra step is unnecessary. For very long context the walkthrough itself gets long; then it pays to filter roughly beforehand.
