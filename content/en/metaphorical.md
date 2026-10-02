---
title: Metaphorical Prompting
level: Intermediate
tags: explaining learning
description: Have the model explain an unfamiliar concept through one sustained metaphor from a familiar domain.
---

You give the model a concept and a familiar domain to draw from, such as a restaurant for an API. The model maps each part of the concept onto a counterpart in the image. Unlike analogical prompting, which transfers whole solution paths, this is about a verbal picture that helps understanding.

Every metaphor holds only up to a point. That is why you ask explicitly where it breaks down, so the reader does not mistake the picture for the thing itself.

## Example

```prompt
Explain what an API is to someone with no programming experience.
Use the metaphor of a restaurant throughout: guest, waiter, menu, kitchen.
State explicitly what each part of the metaphor stands for.
Then list, in two or three points, where the metaphor stops fitting and what is different about a real API.
```

## When it helps

Getting into an unfamiliar field, explaining to non-specialists, preparing a talk. Pick a domain your audience actually knows. The list of breaking points is the most important part: without it, wrong conclusions drawn from the picture go unnoticed, for example that an API always waits for an order the way a waiter does. For precise work the metaphor does not replace the technical definition; it prepares the ground for it.
