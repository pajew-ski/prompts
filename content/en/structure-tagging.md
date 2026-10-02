---
title: Structure Tagging (XML)
level: Intermediate
tags: structure format
description: Structure the answer and long prompts with tags so parts can be extracted and referred to precisely.
---

Tags such as `<comparison>` or `<recommendation>` give a response a fixed structure. A program can then extract the parts reliably, for example showing only the content of `<recommendation>` and discarding the rest. Tags also help within a long prompt: you can refer to a section in your instructions, such as "the criteria in `<criteria>`", and the reference is unambiguous.

How to separate input data from instructions with tags, and what that does against prompt injection, is covered on the XML Input Delimiters card.

## Example

```prompt
I am giving you two quotes for the same service.

<quote_a>
[Text of quote A]
</quote_a>

<quote_b>
[Text of quote B]
</quote_b>

<criteria>
Price, scope of service, cancellation terms, liability
</criteria>

Compare the two quotes using the criteria in <criteria>. Structure your answer like this:
<comparison>one paragraph per criterion setting the two quotes side by side</comparison>
<open_questions>what is missing or unclear in the quotes</open_questions>
<recommendation>one sentence on which quote you would choose and why</recommendation>

Write nothing outside these three tags.
```

## When it helps

When a response gets processed further, by a script or by the next step in a prompt chain, and when a prompt has several parts you want to refer to. Tag names are up to you; descriptive names make the prompt easier to read for you and the model. For strictly machine-readable output, JSON with the API's schema mode is more reliable. Tags are the lighter option when you need structured prose.
