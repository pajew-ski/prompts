---
title: ReAct (Reasoning + Acting)
level: Advanced
tags: agents tools
description: Alternate reasoning steps with tool calls, so that each result determines the next step.
---

ReAct (Yao et al., 2022) combines reasoning with acting. The model alternates between writing a thought (Thought), taking an action (Action) such as a search, and reading the result (Observation) before it reasons further. The answer then rests on facts it looked up rather than on the model's memory, and the path to it stays traceable.

Today, agent frameworks and the tool calling built into model APIs implement exactly this loop. The written-out form is useful for understanding the pattern, and for models without tools, where you supply the observations yourself.

## Example

```prompt
Answer the question in the following format:
Thought: what you need to find out next
Action: Search[search term]
Then stop. I will give you the result as "Observation:". Repeat until you know enough, then write "Answer:" with the answer.

Question: How old was Albert Einstein when he published the special theory of relativity?
```

A run then looks like this:

```text
Thought: I need the year of publication.
Action: Search[special relativity publication]
Observation: Einstein published it in 1905.
Thought: Now I need his date of birth.
Action: Search[Albert Einstein date of birth]
Observation: 14 March 1879.
Answer: He was 26 years old.
```

## When it helps

Questions that combine several looked-up facts, and building agents. If your model can call tools through the API, use that tool calling instead of the text format; it is more reliable. In both cases the model has to stop at the action and wait for the real result, otherwise it invents the observation.
