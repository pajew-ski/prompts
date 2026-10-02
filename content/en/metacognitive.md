---
title: Metacognitive Prompting
level: Advanced
tags: reasoning verification
description: The model moves from understanding through a preliminary judgment and its review to a reasoned answer with a confidence level.
---

Metacognitive Prompting (Wang & Zhao, 2023) is modeled loosely on how people reflect on their own thinking. Instead of answering directly, the model goes through five steps: it clarifies what the text and the question actually say, forms a preliminary judgment, evaluates that judgment critically, gives the final answer with an explanation, and states how confident it is.

The core is the third step: the first judgment is explicitly questioned before it becomes the answer. The study tested this on language understanding tasks.

## Example

```prompt
<text>
[Your text]
</text>

Question: [Your question about the text, e.g. Does the author support the proposal or reject it?]

Work through five steps:
1. Understand: Summarize what the text says and what exactly is being asked. Point out passages that are ambiguous.
2. Preliminary judgment: Give a first answer.
3. Critical evaluation: Which passages in the text speak against this answer? What other reading is possible? Are you missing knowledge that would change the answer?
4. Final answer: Give the answer that survives the evaluation, with a short explanation. If it differs from the preliminary judgment, say why.
5. Confidence: Rate how confident you are (high, medium or low) and give the reason.
```

## When it helps

For reading-comprehension questions that leave room for interpretation: irony, the author's stance, ambiguous contract clauses, contradictory statements. For simple factual questions it is too much effort. The confidence rating is a self-assessment and not calibrated. Treat it as a pointer to where you should read the source yourself, not as a probability.
