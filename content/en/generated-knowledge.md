---
title: Generated Knowledge Prompting
level: Advanced
tags: facts context
description: The model first writes down background knowledge on the topic, then answers the question on that basis.
---

Instead of asking the question directly, you have the model first state general background knowledge on the topic and then answer the question using that knowledge (Liu et al., 2022). The knowledge is now explicitly in the context, the answer can build on it, and you can see what the answer rests on. The study tested this on questions that combine general knowledge with reasoning.

How it differs from recitation: there, the model recalls specific facts it needs for a multi-step question. Here it generates general background knowledge that frames the answer.

## Example

```prompt
Question: [Your question, e.g. Why does rainforest deforestation have such a large effect on the climate?]

Step 1: Write five short, numbered statements of background knowledge relevant to this question. Only include what you consider well established, and mark any statement you are unsure about.

Step 2: Answer the question based on these statements. For each argument, give the numbers of the statements it relies on.
```

## When it helps

For questions that combine background knowledge with reasoning, and when direct answers stay superficial. The limit: the generated knowledge can itself be wrong, and the answer then builds on that error while looking like a clean derivation. For factual work, check the statements from step 1 or supply sources for the model to rely on.
