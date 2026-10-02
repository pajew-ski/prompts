---
title: Simulation (Act-As)
level: Intermediate
tags: role learning
description: Have the model imitate a system or environment so you can practice or try things out safely.
---

A model can imitate how a system behaves: a Linux terminal, a SQL database, a text adventure, a customer on the phone. You give input, and it responds the way the system plausibly would. This is useful for practicing commands, rehearsing processes and learning in an environment where nothing can break.

## Example

```prompt
Act as a Linux terminal (bash) on a freshly installed Ubuntu server. I will type commands, and you reply only with what the terminal would display, inside a code block, with no explanations. Keep track of files and directories I create and take them into account for later commands. When I want to say something outside the simulation, I will put it in curly braces, {like this}.

My first command: ls -la ~
```

## When it helps

For practice and experimentation when no real system is at hand or a mistake there would have consequences: learning shell commands, trying a SQL query on sample data, rehearsing a difficult conversation. The simulation produces plausible output, not real output. In a simulated terminal, file contents, error messages and command results are invented and can differ from what a real system does. Do not rely on them for real work, and check commands before you run them on an actual machine. In long sessions the simulated state can also become inconsistent.
