---
title: Bias and Fallacy Analysis
level: Advanced
tags: analysis bias
description: Check a text for logical fallacies and cognitive biases, with quote, reasoning and strength of evidence.
---

The model reads a text as a reviewer. It looks for logical fallacies, such as straw man, ad hominem or false dichotomy, and cognitive biases, such as confirmation bias or anchoring, and backs every finding with a quote. Two requirements make the result usable: the model states how well each finding is supported, and it flags passages that only look like a fallacy. Without them, it will find something in almost any text.

## Example

```prompt
Check the following text for logical fallacies and cognitive biases.

Present the result as a table with these columns:
| Quote | Fallacy or bias | Why it applies here | Strength of evidence (strong, medium, weak) |

Rules:
- Quote verbatim so I can find each passage in the text.
- Include only findings you can justify from the text. A text with no fallacies is a possible result.
- Below the table, list passages that only look like a fallacy but are not one, each with a one-sentence explanation. An appeal to authority, for example, is not a fallacy when the authority is actually competent on the subject.

Text:
"""
[Paste text here]
"""
```

## When it helps

Op-eds, pitches, expert reports, or your own drafts before they go out. The strength column separates clear cases from interpretation. Limits: whether a bias is present often depends on intent and context that are not in the text. Treat the table as a list of leads to check yourself, not as a verdict.
