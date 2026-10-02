---
title: Chain of Verification (CoVe)
level: Advanced
tags: facts hallucination verification
description: Draft, verification questions, independent answers, revision: four steps against invented facts.
---

Chain of Verification (Dhuliawala et al., 2023) checks an answer in four steps: write a draft, plan verification questions about the facts in it, answer those questions, revise the answer. The third step is the one that matters. The verification questions have to be answered independently of the draft. When the model can see its draft while answering, it often repeats its own mistake.

## Example

```prompt
Question: [Your question, e.g. "Name five politicians who were born in New York."]

Work in four steps:
1. Draft: answer the question.
2. Verification questions: for each factual claim in the draft, write one short, separate question, e.g. "Where was [person] born?"
3. Answers: answer each verification question on its own, as if you had never seen the draft. Do not rely on the draft.
4. Final answer: remove or correct anything that contradicts the answers from step 3, and say what you changed.
```

## When it helps

Lists and factual questions where individual items may be made up: people, dates, quotes, sources. In a single prompt the method is only an approximation, because the draft is still in context. It is more reliable to do steps 1 and 2 in one chat, have the verification questions answered without the draft in a fresh chat, then bring those answers back for step 4. Verification does not help with knowledge the model simply lacks; that needs search or sources.
