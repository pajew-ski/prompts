---
title: Contextual Compression
level: Intermediate
tags: summarizing context
description: Condense a long chat into a structured handover and continue in a fresh chat.
---

Long chats degrade, even with large context windows: early decisions get lost, rejected ideas resurface, contradictions pile up. A fresh chat that starts from a dense summary usually works better. So that nothing important is lost, you have the summary written as a handover with a fixed structure.

## Example

```prompt
We're ending this chat and continuing in a new one. Write a handover that someone who hasn't seen this conversation can follow:

1. Goal: what are we working on, and why?
2. Decisions: what have we settled, each with its reason? Include what we deliberately rejected.
3. Constraints: which requirements, limits and preferences still apply?
4. Open questions: what is still unresolved?
5. Next step: what exactly comes next?

Keep it brief, in bullet points. Copy numbers, names and wording we agreed on verbatim.
```

## When it helps

Long working sessions on text, code or concepts, as soon as answers start to overlook or repeat earlier points. Read the handover before switching: whatever is missing from it is gone in the new chat. The reasons behind decisions are easily lost, and they are what keeps old debates from starting over.
