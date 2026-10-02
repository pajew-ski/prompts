---
title: System 2 Attention
level: Advanced
tags: context bias
description: Have the model rewrite the context neutrally and isolate the question before it answers.
---

Irrelevant details and opinions in a prompt pull the answer toward them. When the prompt contains your own opinion, the answer tends to agree with you (sycophancy). System 2 Attention (Weston & Sukhbaatar, 2023, Meta) adds a step in front: the model rewrites the context so that only relevant, neutral content remains, and separates out the actual question. The answer is then produced from this cleaned-up version. In the paper these are two separate calls; in a single prompt you approximate them as two steps.

## Example

```prompt
<text>
[Your text, e.g. a question with background, your own opinion and side details]
</text>

Work in two steps.

Step 1: Rewrite the text so that only the information needed for an objective answer remains. Remove opinions, guesses about the right answer, and details that do not bear on the matter. Then state the actual question separately and neutrally. Put both inside <cleaned> tags.

Step 2: Answer the question based only on <cleaned>, as if you had never seen the original text.
```

"I think microservices are simply the modern solution for our project. Our monolith runs reliably but it's old, and there are only three of us. Should we switch?" becomes something like: "A team of three developers runs an older monolithic application that is stable. Question: What are the arguments for and against moving to microservices?"

## When it helps

When the prompt contains an opinion, a hoped-for answer or a lot of padding: your own decision questions, forwarded requests, texts with leading wording. The method is strongest with two separate calls, where the second never sees the original text; within one prompt, the original can still exert a pull. For short, neutral questions the step adds nothing. Asking your question neutrally in the first place gets you part of the effect without the detour.
