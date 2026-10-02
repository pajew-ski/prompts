---
title: Rephrase and Respond (RaR)
level: Intermediate
tags: questions reasoning
description: The model first restates the question more precisely and fully, then answers that version.
---

Questions that are clear to you often leave a lot open for the model. Rephrase and Respond (Deng et al., 2023) has the model rephrase and expand the question first, then answer it. In the paper a single sentence does this: "Rephrase and expand the question, and respond." The rephrased version also shows you how the model understood your question.

## Example

```prompt
"Dog bite, what to do?"
Rephrase and expand the question, and respond.
```

A good rephrasing clarifies, for example, whether a person was bitten or whether it is about the behavior of your own dog, and then answers both or asks which one is meant.

## When it helps

Short, ambiguous questions and questions typed in a hurry. Read the rephrasing: if it misses what you meant, fix the question rather than trusting the answer. For questions that are already precise, the extra step adds little. When a wrong assumption would be costly, a real clarifying question is better; see Ambiguity Check.
