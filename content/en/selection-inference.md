---
title: Selection-Inference
level: Advanced
tags: reasoning documents
description: Split reasoning into two steps: first select the relevant statements, then draw conclusions from those alone.
---

Selection-Inference breaks logical reasoning into two separate steps (Creswell et al., 2022). In the selection step, the model picks out the statements from the context that bear on the question. In the inference step, it derives a new conclusion from exactly those statements. For multi-step questions the two steps alternate until the answer is reached.

In the paper, separate model calls handle the two roles. In a single prompt you approximate the separation through the structure of the instructions.

## Example

```prompt
<context>
[Your text, e.g. rules, contract clauses or a list of facts]
</context>

Question: [Your question]

Work in two steps.

Step 1, selection: List the statements from the context that are relevant to the question, each as a verbatim quote.

Step 2, inference: Derive the answer from these statements. Use only the selected statements and, for each conclusion, say which ones it rests on. If the question requires several conclusions in sequence, repeat selection and inference for each intermediate step.

If the selected statements are not enough to answer, say so instead of filling the gap with guesses.
```

## When it helps

For questions about a given text that need several reasoning steps: rulebooks, contracts, logic puzzles with premises. The separation shows whether an error lies in the selection (a wrong or missing statement) or in the inference itself. It does not stop the model from misreading a statement, but it makes that checkable. For simple factual lookups the overhead is not worth it.
