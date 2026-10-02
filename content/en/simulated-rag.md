---
title: Simulated RAG
level: Intermediate
tags: documents context
description: Paste the relevant documents into the prompt yourself and have the model answer from them alone.
---

Retrieval-augmented generation (RAG) means a system looks up passages that match a question and hands them to the model so it answers from them. Without such a system, you do the retrieval yourself and paste the material into the prompt. With the large context windows of current models, you can often paste whole documents rather than selected chunks.

Two things make the difference. The documents come first and the question last. And the model first quotes the relevant passages, then answers from them, so you can see what the answer rests on.

## Example

```prompt
<documents>
<document nr="1" title="[Title, e.g. User manual]">
[Content]
</document>
<document nr="2" title="[Title, e.g. Manufacturer FAQ]">
[Content]
</document>
</documents>

Answer the question below using only these documents. I need an answer I can rely on, so only what the documents say counts, not your general knowledge.

First, in <quotes> tags, quote verbatim the passages relevant to the question, each with its document number. Then answer the question in <answer> tags, basing it only on those quotes. If the documents do not answer the question, write: "Not in the documents."

Question: [Your question, e.g. How do I reset the device to factory settings?]
```

## When it helps

For questions about manuals, contracts, policies or internal documents the model does not know, or does not know in their current version. The quoting step makes the answer checkable and reduces the tendency to fill gaps with plausible inventions, though it cannot rule that out. Spot-check the quotes against the original. If the material is larger than the context window, you still need a preselection, by hand or with real search.
