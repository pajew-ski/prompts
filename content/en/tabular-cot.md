---
title: Tabular Chain of Thought
level: Advanced
tags: reasoning structure format
description: The model works through a problem in a table, one row per step, then gives the answer.
---

In Tabular Chain of Thought, or Tab-CoT (Jin & Lu, 2023), the reasoning itself happens in a table. Each row is a step, and the columns record the subquestion being asked, how it is worked out and what the result is. In the paper, a header row with the columns step, subquestion, process and result is enough; the model continues it row by row. The table keeps steps short and shows which intermediate result feeds into which step.

## Example

```prompt
Problem: A café sells 48 croissants on Monday. On Tuesday it sells a quarter more than on Monday, and on Wednesday 15 fewer than on Tuesday. A croissant costs 2.40 euros. How much revenue does the café make from croissants over these three days?

Solve the problem in a Markdown table with these columns:
| Step | Subquestion | Process | Result |

Use one row per step and keep each cell brief. After the table, give the answer in one sentence.
```

Expected: Tuesday 60, Wednesday 45, 153 croissants in total, revenue 367.20 euros.

## When it helps

For arithmetic and multi-step problems whose steps can be written in a uniform way, and when you want to scan intermediate results quickly. The table is more compact than chain of thought in prose. For problems that need weighing or longer justification it is too narrow; ordinary chain of thought fits better there. Reasoning models already think step by step internally. With them, the table is mainly an output format that lets you check the working.
