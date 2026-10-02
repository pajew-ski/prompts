---
title: Reference Check (Citations)
level: Intermediate
tags: documents facts
description: Have every statement backed by a verbatim quote from numbered sources, and unsupported ones flagged.
---

Ask for references like "page 2, line 10" and the model invents them, because it sees no page or line numbers. So number the passages or documents yourself before you paste them in. The model can then give, for each statement, the number and the verbatim quote it rests on. A verbatim quote takes seconds to check with your search function. Where nothing in the text supports a statement, the model should say so instead of inventing a source.

## Example

```prompt
Answer the question based only on the numbered passages below.

Support each statement right after it with the passage number and a short verbatim quote, e.g. [3: "The deadline is 14 days"].
If a statement that belongs in the answer is not supported by any passage, write "not supported" after it, rather than leaving it out or filling the gap.

Question: [your question]

[1] [passage]
[2] [passage]
[3] [passage]
```

## When it helps

Questions about contracts, policies, manuals and reports, and RAG systems where answers are built from retrieved chunks of text. Spot-check the quotes against the original; even verbatim quotes are occasionally altered slightly. The "not supported" label shows you where the answer goes beyond the sources. Some APIs offer a built-in citation feature for documents that does this more reliably.
