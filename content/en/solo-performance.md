---
title: Solo Performance Prompting
level: Intermediate
tags: role perspectives
description: The model decides which experts a task needs, has them collaborate, and returns one combined answer.
---

In Solo Performance Prompting (Wang et al., 2023), a single model works like a small team. First it identifies which participants the task needs, that is, personas with specific expertise. These then contribute their knowledge in turn, give each other feedback and revise the draft. The result is one final answer.

The difference from multi-persona prompting: the roles are not given in advance but derived from the task, and they work toward a shared result instead of holding a debate.

## Example

```prompt
Task: [Your task, e.g. Plan a five-day bike trip along the Danube cycle path from Passau to Vienna for a family with two children aged 10 and 13.]

Proceed as follows:
1. Identify which participants, with which expertise, this task needs: two to four of them. Justify each choice in one sentence.
2. Have each participant contribute what they know from their field, and build a first draft from that.
3. Have each participant review the draft from their perspective and propose specific changes.
4. Revise the draft. Repeat steps 3 and 4 until no one has an objection, at most twice.
5. Give the final answer as one coherent result.
```

## When it helps

For tasks that combine knowledge from several fields and where individual aspects are easily overlooked: planning, knowledge questions with several parts, creative writing with many constraints. All participants are the same model with the same knowledge. The method adds no new knowledge; it makes sure existing knowledge is drawn on from several angles and cross-checked. For simple tasks it is more effort than it is worth.
