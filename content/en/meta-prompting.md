---
title: Meta-Prompting
level: Intermediate
tags: meta optimization
description: The model asks about your goal, then writes or improves a prompt for you and explains its choices.
---

You ask the model to write a prompt for a specific task or to improve an existing one. The model knows the usual building blocks of a good prompt and often suggests a structure you would not have thought of.

But a prompt can only be as good as what the model knows about your goal. So it asks first instead of writing straight away. And it delivers the finished prompt with a short note on each design choice, so you can see what to adjust or cut.

## Example

```prompt
Help me write a prompt. My goal: [e.g. a model should draft replies to customer emails in our company's tone.]

Before you write anything, ask me the questions you need to build a good prompt: about the purpose, the audience, the material, the desired format, and how I will recognize a good result. No more than five questions, all at once.

Once I have answered, write the prompt. Use square-bracket placeholders wherever my own material will go later. Then add one sentence for each important design choice in the prompt explaining why you made it.
```

## When it helps

When you know what you want but not how to phrase it, and for prompts you will reuse often. Test the prompt on real examples before you rely on it: a prompt that sounds good does not automatically work well. The notes show you which building blocks add nothing for your task and can go.
