---
title: Multi-Persona Debate
level: Advanced
tags: perspectives decisions
description: Let several people with real stakes argue over a decision before the model summarizes.
---

Ask for a single recommendation and you usually get a smooth middle ground. Bring in several people with clear interests who respond to each other, and arguments and trade-offs surface that would otherwise be missing. What matters is that each person has something to win or lose, and that they react to the others instead of just stating their position.

## Example

```prompt
Decision: [e.g. Should we put part of our cash reserves into Bitcoin?]
Context: [company size, reserves, risk profile]

Have three people discuss it:
A: The CFO. She is accountable for liquidity and has to explain any losses to the board.
B: The head of product. He wants the company to look innovative because it helps him hire.
C: The tax advisor. She cares about accounting treatment, tax and audit effort.

Process: Each person first states their position with reasons. Then run two rounds in which each person responds directly to the others' arguments. Finally, summarize neutrally: where do they agree, where does the conflict remain, and what information would settle the decision?
```

## When it helps

Decisions with several stakeholders and competing goals, preparing for a meeting, or testing your own position for gaps. Keep in mind that the same model, with the same knowledge, plays every role. The debate surfaces arguments; it does not produce independent opinions or a real consensus. The decision stays with you.
